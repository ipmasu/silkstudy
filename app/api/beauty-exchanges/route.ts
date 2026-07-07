import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse } from "@/lib/api/responses";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fallbackItems = [
  {
    id: "morocco-tea-postcards",
    ownerName: "Amina",
    country: "Morocco",
    city: "Chengdu",
    title: "Moroccan mint tea and handmade postcards",
    offer: "A small sealed pack of mint tea, two postcards, and a note about my hometown.",
    wish: "I would love to exchange for a Chinese city postcard, campus souvenir, or tea story.",
    story: "Mint tea is how my family welcomes guests. I want to share that feeling with friends studying in China.",
    shipping: "Campus meetup or domestic parcel after both sides confirm details.",
    createdAt: "2026-07-04"
  },
  {
    id: "vietnam-coffee-bookmark",
    ownerName: "Linh",
    country: "Vietnam",
    city: "Hangzhou",
    title: "Vietnamese coffee and a bookmark",
    offer: "Single sealed drip coffee bags and a handmade bookmark.",
    wish: "Looking for a small local snack, university badge, or a handwritten travel tip.",
    story: "Coffee culture is part of everyday life in Vietnam. This is a small way to start a conversation.",
    shipping: "Public campus exchange only.",
    createdAt: "2026-07-04"
  }
];

export async function GET() {
  try {
    const results = await prisma.beautyExchange.findMany({
      where: { status: "APPROVED" },
      orderBy: { createdAt: "desc" },
      take: 100
    });

    return NextResponse.json({ results: results.length ? results : fallbackItems });
  } catch {
    return NextResponse.json({ results: fallbackItems });
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  try {
    const exchange = await prisma.beautyExchange.create({
      data: {
        ownerName: String(body?.ownerName ?? "SilkStudy friend").trim().slice(0, 80) || "SilkStudy friend",
        country: String(body?.country ?? "Global").trim().slice(0, 80) || "Global",
        city: String(body?.city ?? "China").trim().slice(0, 80) || "China",
        title: String(body?.title ?? "A small cultural gift").trim().slice(0, 160) || "A small cultural gift",
        offer: String(body?.offer ?? "").trim().slice(0, 1200),
        wish: String(body?.wish ?? "").trim().slice(0, 1200),
        story: String(body?.story ?? "").trim().slice(0, 1200),
        shipping: String(body?.shipping ?? "Public meetup or tracked delivery after confirmation.").trim().slice(0, 500) || "Public meetup or tracked delivery after confirmation.",
        status: "APPROVED"
      }
    });

    return NextResponse.json({ exchange }, { status: 201 });
  } catch (error) {
    return serverErrorResponse(error);
  }
}
