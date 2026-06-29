import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse } from "@/lib/api/responses";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const results = await prisma.consultation.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      assignedTo: { select: { id: true, name: true, email: true } },
      crmNotes: { orderBy: { createdAt: "desc" }, take: 3 }
    },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}
