import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse, validationErrorResponse } from "@/lib/api/responses";
import { communityReportSchema } from "@/lib/validators/community";

export const runtime = "nodejs";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const parsed = communityReportSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) return validationErrorResponse(parsed.error);

  const session = await auth();

  try {
    await prisma.communityReport.create({
      data: {
        postId: id,
        reporterId: session?.user?.id || null,
        reason: parsed.data.reason,
        details: parsed.data.details || null
      }
    });

    return NextResponse.json({ message: "Report received. Thank you for helping keep the community safe." }, { status: 201 });
  } catch (error) {
    return serverErrorResponse(error);
  }
}

