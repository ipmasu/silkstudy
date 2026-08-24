import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyAdminAboutConsultation } from "@/lib/email/admin-notifications";
import { consultationSchema } from "@/lib/validators/consultation";
import { serverErrorResponse } from "@/lib/api/responses";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = consultationSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please check the form fields.",
        issues: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const notification = await notifyAdminAboutConsultation(data);
  if (!notification.delivered) {
    console.warn("Consultation email notification was not delivered", {
      reason: notification.reason,
      provider: notification.provider,
      to: notification.preview?.to
    });
  }

  let consultation: { id: string; status: string; createdAt: Date } | null = null;
  let crmWarning: string | undefined;
  let noteWarning: string | undefined;

  try {
    consultation = await prisma.consultation.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        email: data.email,
        phone: data.phone || null,
        targetDegree: data.targetDegree || null,
        targetMajor: data.targetMajor || null,
        budgetUsd: typeof data.budgetUsd === "number" ? data.budgetUsd : null,
        preferredCity: data.preferredCity || null,
        notes: data.notes || null
      },
      select: {
        id: true,
        status: true,
        createdAt: true
      }
    });

    try {
      await prisma.cRMNote.create({
        data: {
          consultationId: consultation.id,
          content: "Lead submitted from website consultation funnel."
        }
      });
    } catch (error) {
      noteWarning = error instanceof Error ? error.message : "CRM note save failed";
      console.warn("Consultation was saved but CRM note save failed", {
        leadId: consultation.id,
        reason: noteWarning
      });
    }
  } catch (error) {
    crmWarning = error instanceof Error ? error.message : "CRM save failed";
    console.error("Consultation CRM save failed", {
      email: data.email,
      reason: crmWarning
    });
  }

  if (!consultation && !notification.delivered) {
    return serverErrorResponse(new Error(crmWarning || notification.reason || "Consultation delivery failed"));
  }

  return NextResponse.json(
    {
      message: "Consultation request received.",
      consultation,
      crmWarning,
      noteWarning,
      notification
    },
    { status: 201 }
  );
}

export async function GET() {
  try {
    const consultations = await prisma.consultation.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        country: true,
        email: true,
        targetDegree: true,
        targetMajor: true,
        preferredCity: true,
        status: true,
        createdAt: true
      }
    });

    return NextResponse.json({
      count: consultations.length,
      results: consultations
    });
  } catch (error) {
    return serverErrorResponse(error);
  }
}
