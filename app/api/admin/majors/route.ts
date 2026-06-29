import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { majorAdminSchema, nullableString } from "@/lib/validators/admin";

export const runtime = "nodejs";

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const results = await prisma.major.findMany({
    orderBy: { updatedAt: "desc" },
    take: 100
  });

  return NextResponse.json({ count: results.length, results });
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const parsed = majorAdminSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const data = parsed.data;
  const major = await prisma.major.create({
    data: {
      slug: data.slug,
      name: data.name,
      category: data.category,
      description: nullableString(data.description),
      futureCareer: nullableString(data.futureCareer),
      isFeatured: data.isFeatured
    }
  });

  await prisma.adminLog.create({
    data: { userId: session.user.id, action: AdminAction.CREATE, entityType: "Major", entityId: major.id }
  });

  return NextResponse.json({ major }, { status: 201 });
}
