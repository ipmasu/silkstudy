import { NextResponse } from "next/server";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { prisma } from "@/lib/prisma";
import { reviewModerationSchema } from "@/lib/validators/review";

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const { id } = await params;
  const parsed = reviewModerationSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);

  const review = await prisma.universityReview.update({
    where: { id },
    data: {
      status: parsed.data.status,
      isVerified: parsed.data.isVerified
    }
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.STATUS_CHANGE,
      entityType: "UniversityReview",
      entityId: id,
      metadata: {
        status: parsed.data.status
      }
    }
  });

  return NextResponse.json({ review });
}
