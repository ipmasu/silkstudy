import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { cityAdminSchema, nullableNumber, nullableString } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const results = await prisma.city.findMany({
    orderBy: { updatedAt: "desc" },
    include: { province: true },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const parsed = cityAdminSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const province = data.provinceId
    ? { id: data.provinceId }
    : data.provinceSlug
      ? await prisma.province.findUnique({ where: { slug: data.provinceSlug } })
      : null;

  if (!province) {
    return NextResponse.json({ message: "Province is required. Use a database ID or a slug from seeded data." }, { status: 400 });
  }

  const city = await prisma.city.create({
    data: {
      slug: data.slug,
      name: data.name,
      provinceId: province.id,
      summary: nullableString(data.summary),
      livingCostMonthlyUsd: nullableNumber(data.livingCostMonthlyUsd),
      climate: nullableString(data.climate),
      visaConvenience: nullableString(data.visaConvenience)
    }
  });

  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.CREATE, entityType: "City", entityId: city.id }
  });

  return NextResponse.json({ city }, { status: 201 });
}
