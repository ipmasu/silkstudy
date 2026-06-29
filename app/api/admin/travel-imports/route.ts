import { AdminAction } from "@prisma/client";
import { NextResponse } from "next/server";
import { unauthorizedResponse } from "@/lib/api/responses";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { nullableString, travelContentImportSchema } from "@/lib/validators/admin";

export const runtime = "nodejs";

type TravelContentImportClient = {
  findMany: (args: {
    orderBy: { createdAt: "desc" };
    include: {
      province: { select: { id: true; name: true; slug: true } };
      city: { select: { id: true; name: true; slug: true } };
      university: { select: { id: true; name: true; slug: true } };
    };
    take: number;
  }) => Promise<unknown[]>;
  create: (args: {
    data: {
      provinceId: string | null;
      cityId: string | null;
      universityId: string | null;
      platform: string;
      sourceUrl: string;
      sourceTitle: string | null;
      sourceAuthor: string | null;
      sourceLocale: string | null;
      originalExcerpt: string;
      rewrittenSummary: string | null;
      highlights: string[];
      studentAngle: string | null;
      complianceNotes: string | null;
      status: string;
      sourceCapturedAt: Date | null;
    };
  }) => Promise<{ id: string }>;
};

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const client = (prisma as unknown as { travelContentImport?: TravelContentImportClient }).travelContentImport;

  if (!client) {
    return NextResponse.json({
      count: 0,
      results: [],
      message: "Run prisma generate after applying the TravelContentImport schema."
    });
  }

  const results = await client.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      province: { select: { id: true, name: true, slug: true } },
      city: { select: { id: true, name: true, slug: true } },
      university: { select: { id: true, name: true, slug: true } }
    },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const parsed = travelContentImportSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid travel content import payload.", errors: parsed.error.flatten() }, { status: 400 });
  }

  const client = (prisma as unknown as { travelContentImport?: TravelContentImportClient }).travelContentImport;

  if (!client) {
    return NextResponse.json({ message: "Run prisma generate after applying the TravelContentImport schema." }, { status: 503 });
  }

  const university = parsed.data.universitySlug
    ? await prisma.university.findUnique({
        where: { slug: parsed.data.universitySlug },
        select: { id: true }
      })
    : null;

  if (parsed.data.universitySlug && !university) {
    return NextResponse.json({ message: "University slug was not found." }, { status: 404 });
  }

  const item = await client.create({
    data: {
      provinceId: nullableString(parsed.data.provinceId),
      cityId: nullableString(parsed.data.cityId),
      universityId: university?.id ?? null,
      platform: parsed.data.platform,
      sourceUrl: parsed.data.sourceUrl,
      sourceTitle: nullableString(parsed.data.sourceTitle),
      sourceAuthor: nullableString(parsed.data.sourceAuthor),
      sourceLocale: nullableString(parsed.data.sourceLocale),
      originalExcerpt: parsed.data.originalExcerpt,
      rewrittenSummary: nullableString(parsed.data.rewrittenSummary),
      highlights: parsed.data.highlights,
      studentAngle: nullableString(parsed.data.studentAngle),
      complianceNotes: nullableString(parsed.data.complianceNotes),
      status: parsed.data.status,
      sourceCapturedAt: parsed.data.sourceCapturedAt ? new Date(parsed.data.sourceCapturedAt) : null
    }
  });

  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.CREATE, entityType: "TravelContentImport", entityId: item.id }
  });

  return NextResponse.json({ id: item.id }, { status: 201 });
}
