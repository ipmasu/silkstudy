import { AdminAction } from "@prisma/client";
import { NextResponse } from "next/server";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { nullableString, travelContentStatusSchema } from "@/lib/validators/admin";

export const runtime = "nodejs";

type TravelContentImportItemClient = {
  update: (args: {
    where: { id: string };
    data: {
      status: string;
      complianceNotes?: string | null;
    };
  }) => Promise<unknown>;
  delete: (args: { where: { id: string } }) => Promise<unknown>;
};

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const parsed = travelContentStatusSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const client = (prisma as unknown as { travelContentImport?: TravelContentImportItemClient }).travelContentImport;
  if (!client) {
    return NextResponse.json({ message: "Run prisma generate after applying the TravelContentImport schema." }, { status: 503 });
  }

  const item = await client.update({
    where: { id },
    data: {
      status: parsed.data.status,
      complianceNotes: nullableString(parsed.data.complianceNotes)
    }
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.STATUS_CHANGE,
      entityType: "TravelContentImport",
      entityId: id,
      metadata: { status: parsed.data.status }
    }
  });

  return NextResponse.json({ item });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const client = (prisma as unknown as { travelContentImport?: TravelContentImportItemClient }).travelContentImport;
  if (!client) {
    return NextResponse.json({ message: "Run prisma generate after applying the TravelContentImport schema." }, { status: 503 });
  }

  await client.delete({ where: { id } });
  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.DELETE, entityType: "TravelContentImport", entityId: id }
  });

  return NextResponse.json({ ok: true });
}
