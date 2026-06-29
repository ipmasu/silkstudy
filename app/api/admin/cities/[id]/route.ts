import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { cityAdminSchema, nullableNumber, nullableString } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const parsed = cityAdminSchema.partial().safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const province = data.provinceSlug ? await prisma.province.findUnique({ where: { slug: data.provinceSlug } }) : null;
  const city = await prisma.city.update({
    where: { id },
    data: {
      slug: data.slug,
      name: data.name,
      provinceId: data.provinceId || province?.id,
      summary: data.summary === undefined ? undefined : nullableString(data.summary),
      livingCostMonthlyUsd: data.livingCostMonthlyUsd === undefined ? undefined : nullableNumber(data.livingCostMonthlyUsd),
      climate: data.climate === undefined ? undefined : nullableString(data.climate),
      visaConvenience: data.visaConvenience === undefined ? undefined : nullableString(data.visaConvenience)
    }
  });

  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.UPDATE, entityType: "City", entityId: id }
  });

  return NextResponse.json({ city });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  await prisma.city.delete({ where: { id } });
  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.DELETE, entityType: "City", entityId: id }
  });

  return NextResponse.json({ ok: true });
}
