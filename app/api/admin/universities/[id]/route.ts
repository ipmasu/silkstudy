import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { nullableNumber, nullableString, universityAdminSchema } from "@/lib/validators/admin";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const parsed = universityAdminSchema.partial().safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const province = data.provinceSlug ? await prisma.province.findUnique({ where: { slug: data.provinceSlug } }) : null;
  const city = data.citySlug ? await prisma.city.findUnique({ where: { slug: data.citySlug } }) : null;
  const university = await prisma.university.update({
    where: { id },
    data: {
      slug: data.slug,
      name: data.name,
      chineseName: data.chineseName === undefined ? undefined : nullableString(data.chineseName),
      summary: data.summary === undefined ? undefined : nullableString(data.summary),
      qsRanking: data.qsRanking === undefined ? undefined : nullableNumber(data.qsRanking),
      tuitionMinUsd: data.tuitionMinUsd === undefined ? undefined : nullableNumber(data.tuitionMinUsd),
      tuitionMaxUsd: data.tuitionMaxUsd === undefined ? undefined : nullableNumber(data.tuitionMaxUsd),
      foundedYear: data.foundedYear === undefined ? undefined : nullableNumber(data.foundedYear),
      website: data.website === undefined ? undefined : nullableString(data.website),
      provinceId: data.provinceId || province?.id,
      cityId: data.cityId || city?.id,
      hasEnglishPrograms: data.hasEnglishPrograms,
      hasScholarships: data.hasScholarships,
      isFeatured: data.isFeatured,
      isPublished: data.isPublished
    }
  });

  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.UPDATE, entityType: "University", entityId: id }
  });

  return NextResponse.json({ university });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  await prisma.university.delete({ where: { id } });
  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.DELETE, entityType: "University", entityId: id }
  });

  return NextResponse.json({ ok: true });
}
