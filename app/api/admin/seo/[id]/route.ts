import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { prisma } from "@/lib/prisma";
import { nullableString, seoMetadataSchema } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const parsed = seoMetadataSchema.partial().safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const seo = await prisma.seoMetadata.update({
    where: { id },
    data: {
      ...data,
      canonicalUrl: data.canonicalUrl === undefined ? undefined : nullableString(data.canonicalUrl),
      ogTitle: data.ogTitle === undefined ? undefined : nullableString(data.ogTitle),
      ogDescription: data.ogDescription === undefined ? undefined : nullableString(data.ogDescription),
      ogImageUrl: data.ogImageUrl === undefined ? undefined : nullableString(data.ogImageUrl),
      provinceId: data.provinceId === undefined ? undefined : nullableString(data.provinceId),
      cityId: data.cityId === undefined ? undefined : nullableString(data.cityId),
      universityId: data.universityId === undefined ? undefined : nullableString(data.universityId),
      majorId: data.majorId === undefined ? undefined : nullableString(data.majorId)
    }
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.UPDATE,
      entityType: "SeoMetadata",
      entityId: id
    }
  });

  return NextResponse.json({ seo });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  await prisma.seoMetadata.delete({ where: { id } });
  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.DELETE,
      entityType: "SeoMetadata",
      entityId: id
    }
  });

  return NextResponse.json({ ok: true });
}
