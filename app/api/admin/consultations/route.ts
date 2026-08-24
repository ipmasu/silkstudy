import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/guards";
import { getFallbackConsultations } from "@/lib/consultation-fallback-store";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse } from "@/lib/api/responses";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const fallbackResults = getFallbackConsultations();

  try {
    const results = await prisma.consultation.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        assignedTo: { select: { id: true, name: true, email: true } },
        crmNotes: { orderBy: { createdAt: "desc" }, take: 3 }
      },
      take: 100
    });

    const mergedResults = [...fallbackResults, ...results];

    return NextResponse.json({
      count: mergedResults.length,
      fallbackCount: fallbackResults.length,
      results: mergedResults
    });
  } catch (error) {
    console.error("Consultation CRM list fallback:", error);

    return NextResponse.json({
      count: fallbackResults.length,
      fallbackCount: fallbackResults.length,
      databaseWarning: "Database is temporarily unavailable. Showing email backup leads only.",
      results: fallbackResults
    });
  }
}
