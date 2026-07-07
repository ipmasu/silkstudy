import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse } from "@/lib/api/responses";
import { checkinCountries } from "@/lib/global-checkin-countries";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fallbackCheckins = [
  {
    countryCode: "VN",
    countryName: "Vietnam",
    userName: "Linh",
    tagline: "I am the first Vietnam youth to check in for SilkStudy.",
    countryCharm: "Vietnam is warm, energetic, and full of cafe culture, street food, coastlines, and young people who love learning languages.",
    travelStudyReason: "Students can explore Hanoi, Da Nang, and Ho Chi Minh City, then compare ASEAN study routes with opportunities in China.",
    specialties: "Pho, coffee, tropical fruit, handicrafts",
    createdAt: "2026-07-04"
  },
  {
    countryCode: "RU",
    countryName: "Russia",
    userName: "Anastasia",
    tagline: "I am the first Russia youth to check in for SilkStudy.",
    countryCharm: "Russia has deep literature, music, science, winter culture, and strong interest in Chinese language and Asian business.",
    travelStudyReason: "Young people can connect through language exchange, engineering, medicine, economics, and China-Russia cultural routes.",
    specialties: "Honey, chocolate, folk crafts, tea culture",
    createdAt: "2026-07-04"
  },
  {
    countryCode: "TR",
    countryName: "Turkey",
    userName: "Emir",
    tagline: "I am the first Turkey youth to check in for SilkStudy.",
    countryCharm: "Turkey links Asia and Europe with history, hospitality, food, design, and a young population curious about China.",
    travelStudyReason: "Students can share Istanbul, Cappadocia, and Mediterranean culture while discovering scholarships and Chinese study pathways.",
    specialties: "Tea, coffee, textiles, sweets, ceramics",
    createdAt: "2026-07-04"
  }
];

export async function GET() {
  try {
    const results = await prisma.globalCheckin.findMany({
      where: { status: "APPROVED" },
      orderBy: { createdAt: "desc" },
      take: 300
    });

    return NextResponse.json({ results: results.length ? results : fallbackCheckins });
  } catch {
    return NextResponse.json({ results: fallbackCheckins });
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const countryCode = String(body?.countryCode ?? "").toUpperCase();
  const country = checkinCountries.find((item) => item.code === countryCode);

  if (!country) {
    return NextResponse.json({ message: "Invalid country." }, { status: 400 });
  }

  try {
    const checkin = await prisma.globalCheckin.create({
      data: {
        countryCode,
        countryName: country.name,
        userName: String(body?.userName ?? "SilkStudy friend").trim().slice(0, 80) || "SilkStudy friend",
        tagline: String(body?.tagline ?? "").trim().slice(0, 500) || `I am the first ${country.name} youth to check in on SilkStudy.`,
        countryCharm: String(body?.countryCharm ?? "").trim().slice(0, 1200) || "This country has culture, friendship, study stories, and travel routes worth sharing with the world.",
        travelStudyReason: String(body?.travelStudyReason ?? "").trim().slice(0, 1200) || "This country is worth discovering through travel, study, language, and friendship.",
        specialties: String(body?.specialties ?? "").trim().slice(0, 500) || "Local food, crafts, music, festivals, and daily life",
        status: "APPROVED"
      }
    });

    return NextResponse.json({ checkin }, { status: 201 });
  } catch (error) {
    return serverErrorResponse(error);
  }
}
