import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serverErrorResponse } from "@/lib/api/responses";
import { checkinCountries } from "@/lib/global-checkin-countries";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fallbackCheckins = [
  {
    id: "seed-vn-linh",
    countryCode: "VN",
    countryName: "Vietnam",
    userName: "Linh",
    avatar: "L",
    currentCity: "Ho Chi Minh City",
    targetChinaCity: "长沙",
    tagline: "我想把越南咖啡和中文歌单一起带到中国。",
    countryCharm: "Vietnam is warm, energetic, and full of cafe culture, street food, coastlines, and young people who love learning languages.",
    travelStudyReason: "我希望在中国学习传媒，也想认识会一起逛夜市的朋友。",
    specialties: "Pho, coffee, tropical fruit, handicrafts",
    createdAt: "2026-07-13T08:30:00+08:00"
  },
  {
    id: "seed-ru-anna",
    countryCode: "RU",
    countryName: "Russia",
    userName: "Anna",
    avatar: "A",
    currentCity: "Moscow",
    targetChinaCity: "长春",
    tagline: "中文让我觉得世界突然多了一扇门。",
    countryCharm: "Russia has literature, winter cities, science traditions, music, and many students curious about China.",
    travelStudyReason: "我想学中文和数字媒体，以后做中俄青年文化内容。",
    specialties: "Tea, chocolate, folk crafts",
    createdAt: "2026-07-12T18:10:00+08:00"
  },
  {
    id: "seed-tr-elif",
    countryCode: "TR",
    countryName: "Turkey",
    userName: "Elif",
    avatar: "E",
    currentCity: "Istanbul",
    targetChinaCity: "西安",
    tagline: "我想从伊斯坦布尔出发，去看看另一端的丝绸之路。",
    countryCharm: "Turkey connects Asia and Europe with food, design, history, and generous hospitality.",
    travelStudyReason: "西安的历史和土耳其的文化记忆之间，好像有一条很长的线。",
    specialties: "Tea, coffee, textiles, sweets, ceramics",
    createdAt: "2026-07-12T09:15:00+08:00"
  },
  {
    id: "seed-ng-amina",
    countryCode: "NG",
    countryName: "Nigeria",
    userName: "Amina",
    avatar: "A",
    currentCity: "Lagos",
    targetChinaCity: "广州",
    tagline: "我想学医学，也想把尼日利亚的音乐带进校园。",
    countryCharm: "Nigeria is young, musical, entrepreneurial, and full of students who want global opportunities.",
    travelStudyReason: "中国的医学教育和奖学金机会对我很有吸引力。",
    specialties: "Afrobeats, jollof rice, textiles",
    createdAt: "2026-07-11T20:20:00+08:00"
  },
  {
    id: "seed-br-lucas",
    countryCode: "BR",
    countryName: "Brazil",
    userName: "Lucas",
    avatar: "L",
    currentCity: "Sao Paulo",
    targetChinaCity: "成都",
    tagline: "我相信足球、火锅和中文都能让陌生人变成朋友。",
    countryCharm: "Brazil is colorful, open, musical, and deeply social.",
    travelStudyReason: "我想学习国际贸易，理解中国和拉美之间的新机会。",
    specialties: "Coffee, football culture, music",
    createdAt: "2026-07-11T12:00:00+08:00"
  },
  {
    id: "seed-mx-carlos",
    countryCode: "MX",
    countryName: "Mexico",
    userName: "Carlos",
    avatar: "C",
    currentCity: "Mexico City",
    targetChinaCity: "北京",
    tagline: "我想用舌头和脚步一起旅行中国。",
    countryCharm: "Mexico has ancient civilizations, street food, color, festivals, and family warmth.",
    travelStudyReason: "我想在北京学国际关系，也想把中国美食讲给拉美朋友听。",
    specialties: "Corn food, crafts, festivals",
    createdAt: "2026-07-10T16:45:00+08:00"
  },
  {
    id: "seed-fr-sofia",
    countryCode: "FR",
    countryName: "France",
    userName: "Sofia",
    avatar: "S",
    currentCity: "Lyon",
    targetChinaCity: "杭州",
    tagline: "我想在西湖边学设计，也学会更慢地生活。",
    countryCharm: "France brings art, food, design, museums, and a habit of looking closely at daily beauty.",
    travelStudyReason: "杭州的江南气质和数字产业都让我好奇。",
    specialties: "Cheese, museums, design, pastry",
    createdAt: "2026-07-10T09:30:00+08:00"
  },
  {
    id: "seed-ke-grace",
    countryCode: "KE",
    countryName: "Kenya",
    userName: "Grace",
    avatar: "G",
    currentCity: "Nairobi",
    targetChinaCity: "武汉",
    tagline: "我想把肯尼亚的阳光带到长江边。",
    countryCharm: "Kenya has nature, innovation, strong community life, and young people ready to build bridges.",
    travelStudyReason: "我关注公共卫生，也想看看中国城市如何组织交通和医疗。",
    specialties: "Coffee, beadwork, wildlife routes",
    createdAt: "2026-07-09T19:30:00+08:00"
  },
  {
    id: "seed-id-maya",
    countryCode: "ID",
    countryName: "Indonesia",
    userName: "Maya",
    avatar: "M",
    currentCity: "Jakarta",
    targetChinaCity: "昆明",
    tagline: "我喜欢温暖的城市，也想学会用中文讲自己的岛屿。",
    countryCharm: "Indonesia is a world of islands, languages, food, music, and generous smiles.",
    travelStudyReason: "昆明的气候和民族文化让我觉得会很容易开始新生活。",
    specialties: "Batik, coffee, spices, islands",
    createdAt: "2026-07-09T11:20:00+08:00"
  },
  {
    id: "seed-au-oliver",
    countryCode: "AU",
    countryName: "Australia",
    userName: "Oliver",
    avatar: "O",
    currentCity: "Melbourne",
    targetChinaCity: "深圳",
    tagline: "我想去最会创造未来的城市，看中国速度到底是什么感觉。",
    countryCharm: "Australia has coastal cities, outdoor life, multicultural campuses, and direct links to Asia.",
    travelStudyReason: "深圳的科技公司和设计氛围很适合我的职业方向。",
    specialties: "Coffee, beaches, wool, design",
    createdAt: "2026-07-08T17:50:00+08:00"
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
