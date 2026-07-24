import { NextResponse } from "next/server";
import { z } from "zod";
import { notifyAdminAboutConsultation } from "@/lib/email/admin-notifications";
import { sendLowCostScholarshipGuideEmail } from "@/lib/email/guide-delivery";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse } from "@/lib/api/responses";
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

  try {
    const consultation = await prisma.consultation.create({
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

    const guideUrl = getGuideUrl(request);
    const guideDelivery = await sendLowCostScholarshipGuideEmail({ to: email, guideUrl });
    const adminNotification = await notifyAdminAboutConsultation(lead);

    if (!guideDelivery.delivered) {
      console.warn("Guide delivery email was not delivered", {
        leadId: consultation.id,
        reason: guideDelivery.reason,
        provider: guideDelivery.provider,
        to: guideDelivery.preview?.to
      });

      return NextResponse.json(
        {
          message: "We saved your request, but the guide email could not be sent. Please contact SilkStudy directly.",
          consultation,
          guideDelivery,
          adminNotification
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        message: "Guide sent.",
        consultation,
        guideDelivery,
        adminNotification
      },
      { status: 201 }
    );
  } catch (error) {
    return serverErrorResponse(error);
  }
}
