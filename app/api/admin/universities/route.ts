import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { nullableNumber, nullableString, universityAdminSchema } from "@/lib/validators/admin";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const results = await prisma.university.findMany({
    orderBy: { updatedAt: "desc" },
    include: { province: true, city: true },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const parsed = universityAdminSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const province = data.provinceId
    ? { id: data.provinceId }
    : data.provinceSlug
      ? await prisma.province.findUnique({ where: { slug: data.provinceSlug } })
      : null;
  const city = data.cityId
    ? { id: data.cityId }
    : data.citySlug
      ? await prisma.city.findUnique({ where: { slug: data.citySlug } })
      : null;

  if (!province || !city) {
    return NextResponse.json({ message: "Province and city are required. Use database IDs or slugs from seeded data." }, { status: 400 });
  }

  const university = await prisma.university.create({
    data: {
      slug: data.slug,
      name: data.name,
      chineseName: nullableString(data.chineseName),
      summary: nullableString(data.summary),
      qsRanking: nullableNumber(data.qsRanking),
      tuitionMinUsd: nullableNumber(data.tuitionMinUsd),
      tuitionMaxUsd: nullableNumber(data.tuitionMaxUsd),
      foundedYear: nullableNumber(data.foundedYear),
      website: nullableString(data.website),
      provinceId: province.id,
      cityId: city.id,
      hasEnglishPrograms: data.hasEnglishPrograms,
      hasScholarships: data.hasScholarships,
      isFeatured: data.isFeatured,
      isPublished: data.isPublished
    }
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.CREATE,
      entityType: "University",
      entityId: university.id
    }
  });

  return NextResponse.json({ university }, { status: 201 });
}
