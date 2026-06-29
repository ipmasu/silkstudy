import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse, validationErrorResponse } from "@/lib/api/responses";
import { getUniversity } from "@/lib/site-data";
import { universityReviewSchema } from "@/lib/validators/review";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const university = await prisma.university.findUnique({
      where: { slug },
      select: { id: true }
    });

    if (!university) {
      return NextResponse.json({ message: "University not found." }, { status: 404 });
    }

    const results = await prisma.universityReview.findMany({
      where: {
        universityId: university.id,
        status: "APPROVED"
      },
      orderBy: { createdAt: "desc" },
      take: 20
    });

    return NextResponse.json({ count: results.length, results });
  } catch {
    const fallbackUniversity = getUniversity(slug);

    if (!fallbackUniversity) {
      return NextResponse.json({ message: "University not found." }, { status: 404 });
    }

    return NextResponse.json({
      count: fallbackUniversity.reviews.length,
      results: fallbackUniversity.reviews
    });
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const parsed = universityReviewSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return validationErrorResponse(parsed.error);
  }

  try {
    const university = await prisma.university.findUnique({
      where: { slug },
      select: { id: true }
    });

    if (!university) {
      return NextResponse.json({ message: "University not found." }, { status: 404 });
    }

    const review = await prisma.universityReview.create({
      data: {
        universityId: university.id,
        authorName: parsed.data.authorName,
        authorCountry: parsed.data.authorCountry || null,
        program: parsed.data.program || null,
        degreeLevel: parsed.data.degreeLevel || null,
        rating: parsed.data.rating,
        title: parsed.data.title,
        content: parsed.data.content,
        pros: parsed.data.pros || null,
        cons: parsed.data.cons || null,
        status: "PENDING"
      },
      select: {
        id: true,
        status: true,
        createdAt: true
      }
    });

    return NextResponse.json(
      {
        message: "Review submitted for moderation.",
        review
      },
      { status: 201 }
    );
  } catch (error) {
    return serverErrorResponse(error);
  }
}
