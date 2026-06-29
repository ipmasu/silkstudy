import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse } from "@/lib/api/responses";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type ExternalReviewImportClient = {
  findMany: (args: {
    orderBy: { createdAt: "desc" };
    include: {
      university: {
        select: {
          id: true;
          name: true;
          slug: true;
        };
      };
    };
    take: number;
  }) => Promise<unknown[]>;
};

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const client = (prisma as unknown as { externalReviewImport?: ExternalReviewImportClient }).externalReviewImport;

  if (!client) {
    return NextResponse.json({
      count: 0,
      results: [],
      message: "Run prisma generate after applying the ExternalReviewImport schema."
    });
  }

  const results = await client.findMany({
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
