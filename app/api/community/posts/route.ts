import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { communityPostFallbacks } from "@/lib/community-data";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse, validationErrorResponse } from "@/lib/api/responses";
import { communityPostSchema } from "@/lib/validators/community";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");
  const type = url.searchParams.get("type");

  try {
    const posts = await prisma.communityPost.findMany({
      where: {
        status: "APPROVED",
        ...(city ? { city: { slug: city } } : {}),
        ...(type ? { type: type as never } : {})
      },
      include: {
        city: { select: { slug: true, name: true } },
        _count: { select: { replies: { where: { status: "APPROVED" } } } }
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
      take: 60
    });

    return NextResponse.json({
      results: posts.map((post) => ({
        id: post.id,
        type: post.type,
        title: post.title,
        content: post.content,
        authorName: post.authorName,
        authorCountry: post.authorCountry,
        citySlug: post.city?.slug ?? "china",
        cityName: post.city?.name ?? "China",
        languages: post.languages,
        eventDate: post.eventDate,
        meetingArea: post.meetingArea,
        replyCount: post._count.replies
      }))
    });
  } catch {
    return NextResponse.json({
      results: communityPostFallbacks.filter((post) =>
        (!city || post.citySlug === city) && (!type || post.type === type)
      )
    });
  }
}

export async function POST(request: Request) {
  const parsed = communityPostSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) return validationErrorResponse(parsed.error);

  const session = await auth();

  try {
    const city = await prisma.city.findUnique({
      where: { slug: parsed.data.citySlug },
      select: { id: true }
    });

    const post = await prisma.communityPost.create({
      data: {
        authorId: session?.user?.id || null,
        cityId: city?.id ?? null,
        type: parsed.data.type,
        title: parsed.data.title,
        content: parsed.data.content,
        authorName: parsed.data.authorName,
        authorCountry: parsed.data.authorCountry || null,
        languages: parsed.data.languages,
        eventDate: parsed.data.eventDate ? new Date(parsed.data.eventDate) : null,
        meetingArea: parsed.data.meetingArea || null,
        contactEmail: parsed.data.contactEmail || session?.user?.email || null,
        participantCap: parsed.data.participantCap,
        status: "PENDING"
      },
      select: { id: true, status: true, createdAt: true }
    });

    return NextResponse.json({
      message: "Community post submitted for safety review.",
      post
    }, { status: 201 });
  } catch (error) {
    return serverErrorResponse(error);
  }
}

