import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { prisma } from "@/lib/prisma";
import { nullableString, seoMetadataSchema } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const results = await prisma.seoMetadata.findMany({
    orderBy: { updatedAt: "desc" },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const parsed = seoMetadataSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const seo = await prisma.seoMetadata.create({
    data: {
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      canonicalUrl: nullableString(data.canonicalUrl),
      ogTitle: nullableString(data.ogTitle),
      ogDescription: nullableString(data.ogDescription),
      ogImageUrl: nullableString(data.ogImageUrl),
      provinceId: nullableString(data.provinceId),
      cityId: nullableString(data.cityId),
      universityId: nullableString(data.universityId),
      majorId: nullableString(data.majorId)
    }
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.CREATE,
      entityType: "SeoMetadata",
      entityId: seo.id
    }
  });

  return NextResponse.json({ seo }, { status: 201 });
}
