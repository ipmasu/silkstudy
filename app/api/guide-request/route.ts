import { NextResponse } from "next/server";
import { z } from "zod";
import { notifyAdminAboutConsultation } from "@/lib/email/admin-notifications";
import { sendLowCostScholarshipGuideEmail } from "@/lib/email/guide-delivery";
import { prisma } from "@/lib/prisma";
import type { ConsultationInput } from "@/lib/validators/consultation";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const guideRequestSchema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(180),
  locale: z.string().trim().max(16).optional()
});

function getGuideUrl(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.SITE_URL?.trim();
  const origin = configuredUrl || new URL(request.url).origin;
  return `${origin.replace(/\/$/, "")}/guides/silkstudy-low-cost-scholarship-guide-2026.pdf`;
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = guideRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please enter a valid email address.",
        issues: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  const { email } = parsed.data;
  const lead: ConsultationInput = {
    firstName: "Guide",
    lastName: "Reader",
    country: "Unknown",
    email,
    phone: "",
    targetDegree: "",
    targetMajor: "",
    budgetUsd: "",
    preferredCity: "",
    notes: "Requested the free SilkStudy 2026 low-cost scholarship guide from the homepage."
  };

  const guideUrl = getGuideUrl(request);
  const guideDelivery = await sendLowCostScholarshipGuideEmail({ to: email, guideUrl });

  if (!guideDelivery.delivered) {
    console.warn("Guide delivery email was not delivered", {
      reason: guideDelivery.reason,
      provider: guideDelivery.provider,
      to: guideDelivery.preview?.to
    });

    return NextResponse.json(
      {
        message: "The guide email could not be sent. Please check the email address or contact SilkStudy directly.",
        guideDelivery
      },
      { status: 502 }
    );
  }

  let consultation: { id: string; status: string; createdAt: Date } | null = null;
  let crmWarning: string | undefined;
  let adminNotification: Awaited<ReturnType<typeof notifyAdminAboutConsultation>> | null = null;

  try {
    consultation = await prisma.consultation.create({
      data: {
        firstName: lead.firstName,
        lastName: lead.lastName,
        country: lead.country,
        email: lead.email,
        phone: null,
        targetDegree: null,
        targetMajor: null,
        budgetUsd: null,
        preferredCity: null,
        notes: lead.notes,
        crmNotes: {
          create: {
            content: "Homepage free guide requested. Student should receive the PDF guide by email."
          }
        }
      },
      select: {
        id: true,
        status: true,
        createdAt: true
      }
    });
  } catch (error) {
    crmWarning = error instanceof Error ? error.message : "CRM save failed";
    console.warn("Guide request was emailed but CRM save failed", {
      email,
      reason: crmWarning
    });
  }

  try {
    adminNotification = await notifyAdminAboutConsultation(lead);
  } catch (error) {
    console.warn("Guide request was emailed but admin notification failed", {
      email,
      reason: error instanceof Error ? error.message : "Admin notification failed"
    });
  }

  return NextResponse.json(
    {
      message: "Guide sent.",
      consultation,
      crmWarning,
      guideDelivery,
      adminNotification
    },
    { status: 201 }
  );
}
