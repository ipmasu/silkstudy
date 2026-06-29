import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { majorAdminSchema, nullableString } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const parsed = majorAdminSchema.partial().safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const major = await prisma.major.update({
    where: { id },
    data: {
      ...data,
      description: data.description === undefined ? undefined : nullableString(data.description),
      futureCareer: data.futureCareer === undefined ? undefined : nullableString(data.futureCareer)
    }
  });

  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.UPDATE, entityType: "Major", entityId: id }
  });

  return NextResponse.json({ major });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  await prisma.major.delete({ where: { id } });
  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.DELETE, entityType: "Major", entityId: id }
  });

  return NextResponse.json({ ok: true });
}
