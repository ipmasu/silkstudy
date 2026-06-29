import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse } from "@/lib/api/responses";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const results = await prisma.communityPost.findMany({
    include: {
      city: { select: { name: true, slug: true } },
      _count: { select: { replies: true, reports: true } }
    },
    orderBy: { createdAt: "desc" },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}

