import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse, validationErrorResponse } from "@/lib/api/responses";
import { communityReplySchema } from "@/lib/validators/community";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const replies = await prisma.communityReply.findMany({
      where: { postId: id, status: "APPROVED" },
      select: { id: true, authorName: true, content: true, createdAt: true },
      orderBy: { createdAt: "asc" },
      take: 100
    });

    return NextResponse.json({ results: replies });
  } catch (error) {
    return serverErrorResponse(error);
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parsed = communityReplySchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) return validationErrorResponse(parsed.error);

  const session = await auth();

  try {
    const reply = await prisma.communityReply.create({
      data: {
        postId: id,
        authorId: session?.user?.id || null,
        authorName: parsed.data.authorName,
        content: parsed.data.content,
        status: "PENDING"
      },
      select: { id: true, status: true, createdAt: true }
    });

    return NextResponse.json({ message: "Reply submitted for moderation.", reply }, { status: 201 });
  } catch (error) {
    return serverErrorResponse(error);
  }
}

