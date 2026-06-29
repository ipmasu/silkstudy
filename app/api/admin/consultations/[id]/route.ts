import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { consultationStatusSchema } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const parsed = consultationStatusSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const consultation = await prisma.consultation.update({
    where: { id },
    data: {
      status: parsed.data.status,
      crmNotes: parsed.data.note
        ? {
            create: {
              authorId: session.user.id,
              content: parsed.data.note
            }
          }
        : undefined
    }
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.STATUS_CHANGE,
      entityType: "Consultation",
      entityId: id,
      metadata: { status: parsed.data.status }
    }
  });

  return NextResponse.json({ consultation });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  await prisma.consultation.delete({ where: { id } });
  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.DELETE, entityType: "Consultation", entityId: id }
  });

  return NextResponse.json({ ok: true });
}
