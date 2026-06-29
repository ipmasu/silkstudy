import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse } from "@/lib/api/responses";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const results = await prisma.universityReview.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      university: {
        select: {
          id: true,
          name: true,
          slug: true
        }
      }
    },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}
