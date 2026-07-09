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

  try {
    const consultation = await prisma.consultation.create({
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
        notes: data.notes || null,
        crmNotes: {
          create: {
            content: "Lead submitted from website consultation funnel."
          }
        }
      },
      select: {
        id: true,
        status: true,
        createdAt: true
      }
    });

    const notification = await notifyAdminAboutConsultation(data);
    if (!notification.delivered) {
      console.warn("Consultation email notification was not delivered", {
        leadId: consultation.id,
        reason: notification.reason,
        provider: notification.provider,
        to: notification.preview?.to
      });
    }

    return NextResponse.json(
      {
        message: "Consultation request received.",
        consultation,
        notification
      },
      { status: 201 }
    );
  } catch (error) {
    return serverErrorResponse(error);
  }
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
