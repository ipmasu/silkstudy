import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { nullableString, universityMediaSchema } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const university = await prisma.university.findFirst({
    where: {
      OR: [{ id }, { slug: id }]
    },
    select: { id: true }
  });

  if (!university) {
    return NextResponse.json({ message: "University not found." }, { status: 404 });
  }

  const results = await prisma.universityMedia.findMany({
    where: { universityId: university.id },
    orderBy: [{ type: "asc" }, { sortOrder: "asc" }]
  });

  return NextResponse.json({ count: results.length, results });
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const university = await prisma.university.findFirst({
    where: {
      OR: [{ id }, { slug: id }]
    },
    select: { id: true }
  });

  if (!university) {
    return NextResponse.json({ message: "University not found." }, { status: 404 });
  }

  const parsed = universityMediaSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const media = await prisma.universityMedia.create({
    data: {
      universityId: university.id,
      type: parsed.data.type,
      url: parsed.data.url,
      alt: nullableString(parsed.data.alt),
      publicId: nullableString(parsed.data.publicId),
      sortOrder: parsed.data.sortOrder
    }
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.CREATE,
      entityType: "UniversityMedia",
      entityId: media.id,
      metadata: { universityId: university.id, type: parsed.data.type }
    }
  });

  return NextResponse.json({ media }, { status: 201 });
}
