import { NextResponse } from "next/server";
import { z } from "zod";
import { AdminAction } from "@prisma/client";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse, validationErrorResponse } from "@/lib/api/responses";
import { prisma } from "@/lib/prisma";

const moderationSchema = z.object({
  status: z.enum(["PENDING", "APPROVED", "REJECTED", "CLOSED"]),
  isFeatured: z.boolean().optional()
});

export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();
  const parsed = moderationSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return validationErrorResponse(parsed.error);
  const { id } = await params;

  const post = await prisma.communityPost.update({
    where: { id },
    data: parsed.data
  });

  await prisma.adminLog.create({
    data: {
      userId: session.user.id,
      action: AdminAction.STATUS_CHANGE,
      entityType: "CommunityPost",
      entityId: id,
      metadata: parsed.data
    }
  });

  return NextResponse.json({ post });
}

