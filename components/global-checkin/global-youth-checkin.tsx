"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Camera,
  Clock3,
  Filter,
  Globe2,
  HeartHandshake,
  MapPin,
  Share2,
  Sparkles
} from "lucide-react";
import { checkinCountries, flagEmoji, type CheckinCountry } from "@/lib/global-checkin-countries";
import type { AppLocale } from "@/lib/i18n/routing";
import { worldMapMarkerOnlyCountryCodes, worldMapPaths, worldMapViewBox } from "@/lib/world-map-paths";

type Checkin = {
  id?: string;
  countryCode: string;
  countryName: string;
  userName: string;
  avatar?: string;
  currentCity: string;
  targetChinaCity: string;
  tagline: string;
  countryCharm: string;
  travelStudyReason: string;
  specialties: string;
  contact?: string;
  createdAt: string;
};

const storageKey = "silkstudy-global-youth-checkins-v2";
const mapWidth = 1000;
const mapHeight = 520;

const chinaCities = [
  { slug: "changsha", name: "长沙" },
  { slug: "chengdu", name: "成都" },
  { slug: "beijing", name: "北京" },
  { slug: "xian", name: "西安" },
  { slug: "hangzhou", name: "杭州" },
  { slug: "guangzhou", name: "广州" },
  { slug: "kunming", name: "昆明" },
  { slug: "shenzhen", name: "深圳" }
];

const starterCheckins: Checkin[] = [
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
    specialties: "Tea, ceramics, textiles, sweets",
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
    currentCity: "São Paulo",
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

const markerCountryCoordinates: Record<string, { lat: number; lon: number }> = {
  AD: { lat: 42.5, lon: 1.6 },
  AG: { lat: 17.1, lon: -61.8 },
  BB: { lat: 13.2, lon: -59.5 },
  BH: { lat: 26.1, lon: 50.6 },
  CV: { lat: 15.1, lon: -23.6 },
  DM: { lat: 15.4, lon: -61.4 },
  FM: { lat: 6.9, lon: 158.2 },
  GD: { lat: 12.1, lon: -61.7 },
  KI: { lat: 1.9, lon: -157.4 },
  KM: { lat: -11.9, lon: 43.9 },
  KN: { lat: 17.3, lon: -62.7 },
  LC: { lat: 13.9, lon: -61.0 },
  LI: { lat: 47.2, lon: 9.6 },
  MC: { lat: 43.7, lon: 7.4 },
  MH: { lat: 7.1, lon: 171.2 },
  MT: { lat: 35.9, lon: 14.4 },
  MU: { lat: -20.2, lon: 57.5 },
  MV: { lat: 3.2, lon: 73.2 },
  NR: { lat: -0.5, lon: 166.9 },
  PW: { lat: 7.5, lon: 134.6 },
  SC: { lat: -4.6, lon: 55.5 },
  SG: { lat: 1.3, lon: 103.8 },
  SM: { lat: 43.9, lon: 12.5 },
  ST: { lat: 0.2, lon: 6.6 },
  TO: { lat: -21.2, lon: -175.2 },
  TV: { lat: -7.1, lon: 177.6 },
  VA: { lat: 41.9, lon: 12.5 },
  VC: { lat: 13.3, lon: -61.2 },
  WS: { lat: -13.8, lon: -172.1 }
};

function projectMarker(lat: number, lon: number) {
  return {
    x: ((lon + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100
  };
}

function normalizeCheckin(item: Partial<Checkin>): Checkin {
  const specialtyParts = item.specialties?.split(" · ").map((part) => part.trim()).filter(Boolean) ?? [];
  const parsedTargetCity = specialtyParts.find((part) => chinaCities.some((city) => city.name === part));
  const parsedCurrentCity = specialtyParts.length > 1 ? specialtyParts[1] : undefined;
  return {
    id: item.id,
    countryCode: String(item.countryCode ?? "").toUpperCase(),
    countryName: item.countryName ?? "Unknown",
    userName: item.userName ?? "SilkStudy friend",
    avatar: item.avatar || (item.userName?.slice(0, 1).toUpperCase() ?? "S"),
    currentCity: item.currentCity || parsedCurrentCity || "My city",
    targetChinaCity: item.targetChinaCity || parsedTargetCity || "中国",
    tagline: item.tagline || "我想来中国学习，也想认识同路人。",
    countryCharm: item.countryCharm || "My country has stories worth sharing.",
    travelStudyReason: item.travelStudyReason || "I want to study, travel, and make friends in China.",
    specialties: item.specialties || "Food, music, crafts, and daily life",
    contact: item.contact,
    createdAt: item.createdAt || new Date().toISOString()
  };
}

function mergeCheckins(primary: Checkin[], secondary: Checkin[]) {
  const seen = new Set<string>();
  return [...primary, ...secondary]
    .map(normalizeCheckin)
    .filter((item) => item.countryCode)
    .filter((item) => {
      const key = item.id ?? `${item.countryCode}-${item.userName}-${item.createdAt}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("zh-CN", { month: "short", day: "numeric" });
}

function targetCitySlug(name: string) {
  return chinaCities.find((city) => city.name === name)?.slug;
}

export function GlobalYouthCheckin({ locale }: { locale: AppLocale }) {
  const cityPathPrefix = locale === "zh" ? "/zh" : "";
  const communityPath = locale === "zh" ? "/zh/community" : "/community";
  const checkinPath = locale === "zh" ? "/zh/global-checkin" : "/global-checkin";
  const [checkins, setCheckins] = useState<Checkin[]>(starterCheckins);
  const [selectedCode, setSelectedCode] = useState("VN");
  const [countryFilter, setCountryFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [userName, setUserName] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [targetChinaCity, setTargetChinaCity] = useState("长沙");
  const [story, setStory] = useState("");
  const [contact, setContact] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "saving" | "synced" | "localOnly">("idle");
  const [successCheckin, setSuccessCheckin] = useState<(Checkin & { isFirst: boolean }) | null>(null);

  const countryByCode = useMemo(() => new Map(checkinCountries.map((country) => [country.code, country])), []);
  const pathByCode = useMemo(() => new Map(worldMapPaths.map((item) => [item.code, item])), []);
  const markerOnlyCountries = useMemo(
    () => worldMapMarkerOnlyCountryCodes.map((code) => countryByCode.get(code)).filter((country): country is CheckinCountry => Boolean(country)),
    [countryByCode]
  );
  const groupedByCountry = useMemo(() => {
    const groups = new Map<string, Checkin[]>();
    for (const item of checkins) {
      const group = groups.get(item.countryCode) ?? [];
      group.push(item);
      groups.set(item.countryCode, group);
    }
    return groups;
  }, [checkins]);
  const selectedCountry = countryByCode.get(selectedCode) ?? checkinCountries[0];
  const selectedCheckins = groupedByCountry.get(selectedCountry.code) ?? [];
  const litCountries = groupedByCountry.size;
  const visibleGallery = useMemo(() => {
    return checkins.filter((item) => {
      const countryMatch = countryFilter === "all" || item.countryCode === countryFilter;
      const cityMatch = cityFilter === "all" || item.targetChinaCity === cityFilter;
      return countryMatch && cityMatch;
    });
  }, [checkins, cityFilter, countryFilter]);

  async function refreshCheckins() {
    const response = await fetch("/api/global-checkins", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json().catch(() => null);
    if (Array.isArray(data?.results)) {
      setCheckins((current) => mergeCheckins(data.results as Checkin[], current));
    }
  }

  useEffect(() => {
    const countryFromUrl = new URL(window.location.href).searchParams.get("country")?.toUpperCase();
    if (countryFromUrl && countryByCode.has(countryFromUrl)) setSelectedCode(countryFromUrl);
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        setCheckins(mergeCheckins(JSON.parse(saved) as Checkin[], starterCheckins));
      } catch {
        setCheckins(starterCheckins);
      }
    }
    refreshCheckins().catch(() => undefined);
    const timer = window.setInterval(() => {
      refreshCheckins().catch(() => undefined);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [countryByCode]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(checkins));
  }, [checkins]);

  function getCountryPoint(country: CheckinCountry) {
    const markerCoordinates = markerCountryCoordinates[country.code];
    if (markerCoordinates) return projectMarker(markerCoordinates.lat, markerCoordinates.lon);
    const path = pathByCode.get(country.code);
    if (path) return { x: (path.centroid.x / mapWidth) * 100, y: (path.centroid.y / mapHeight) * 100 };
    return { x: 50, y: 50 };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const country = selectedCountry;
    const isFirst = !groupedByCountry.has(country.code);
    const newCheckin: Checkin = {
      id: `local-${Date.now()}`,
      countryCode: country.code,
      countryName: country.name,
      userName: userName.trim() || "SilkStudy friend",
      avatar: userName.trim().slice(0, 1).toUpperCase() || "S",
      currentCity: currentCity.trim() || "My city",
      targetChinaCity,
      tagline: story.trim().slice(0, 200) || `我是来自 ${country.name} 的青年，想来中国学习，也想认识同路人。`,
      countryCharm: `${currentCity.trim() || "My city"} 的日常、食物和朋友，是我想带给世界的第一张名片。`,
      travelStudyReason: story.trim().slice(0, 200) || "I want to study in China, learn Chinese, and meet people from many countries.",
      specialties: "Local food, music, stories, and friendship",
      contact: contact.trim(),
      createdAt: new Date().toISOString()
    };

    setSubmitState("saving");
    setCheckins((current) => mergeCheckins([newCheckin], current));
    setSelectedCode(country.code);
    setCountryFilter(country.code);
    setCityFilter("all");
    setSuccessCheckin({ ...newCheckin, isFirst });

    try {
      const response = await fetch("/api/global-checkins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countryCode: newCheckin.countryCode,
          userName: newCheckin.userName,
          tagline: newCheckin.tagline,
          countryCharm: newCheckin.countryCharm,
          travelStudyReason: newCheckin.travelStudyReason,
          specialties: `${newCheckin.targetChinaCity} · ${newCheckin.currentCity}${newCheckin.contact ? ` · ${newCheckin.contact}` : ""}`
        })
      });
      if (response.ok) {
        await refreshCheckins();
        setSubmitState("synced");
      } else {
        setSubmitState("localOnly");
      }
    } catch {
      setSubmitState("localOnly");
    }

    setUserName("");
    setCurrentCity("");
    setStory("");
    setContact("");
    setAvatarName("");
  }

  function renderCheckinCard(item: Checkin, compact = false) {
    const slug = targetCitySlug(item.targetChinaCity);
    return (
      <article key={`${item.id ?? item.countryCode}-${item.userName}-${item.createdAt}`} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-amber-400 font-bold text-white">
            {item.avatar ?? item.userName.slice(0, 1)}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-slate-950">{item.userName}</h3>
              <span className="text-xl">{flagEmoji(item.countryCode)}</span>
              <span className="text-sm text-slate-500">{item.countryName}</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{item.currentCity} → {item.targetChinaCity}</p>
          </div>
        </div>
        <p className={`mt-4 text-sm leading-6 text-slate-700 ${compact ? "line-clamp-3" : ""}`}>{item.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800"><Clock3 size={13} className="mr-1 inline" />{formatDate(item.createdAt)}</span>
          {slug ? <Link href={`${cityPathPrefix}/cities/${slug}`} className="rounded-full bg-red-50 px-3 py-1 text-red-700 hover:bg-red-100">目标城市</Link> : null}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button className="min-h-11 rounded-full bg-slate-100 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-200">查看资料</button>
          <button className="min-h-11 rounded-full bg-red-600 px-3 text-sm font-semibold text-white hover:bg-red-700">打招呼</button>
          <Link href={communityPath} className="inline-flex min-h-11 items-center justify-center rounded-full bg-amber-100 px-3 text-sm font-semibold text-amber-900 hover:bg-amber-200">关注TA</Link>
        </div>
      </article>
    );
  }

  return (
    <div className="bg-[#fff8ef] text-slate-950">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100">
              <Globe2 size={18} /> 全球打卡 · 社区前厅
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">先点亮你的国家，再遇见同路的人。</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              这里不是一张冷冰冰的地图，而是全球青年进入 SilkStudy 社区的第一站。展示你是谁、你从哪里来、你为什么想来中国，然后找到和你一样正在出发的人。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#checkin-form" className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">添加你的国家打卡</a>
              <a href="#gallery" className="inline-flex min-h-11 items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20">查看打卡者</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 self-end">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-4xl font-bold text-amber-300">{litCountries}</p>
              <p className="mt-1 text-sm text-slate-300">已点亮国家</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-4xl font-bold text-amber-300">{checkins.length}</p>
              <p className="mt-1 text-sm text-slate-300">全球青年已打卡</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5">
              <p className="font-semibold">{checkins.length < 10 ? "成为你所在国家的第一位打卡者。" : "每一张卡片背后，都是一个准备来中国的年轻人。"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_390px] lg:px-8">
        <div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-red-100 bg-[#dff3ff] shadow-sm">
            <svg viewBox={worldMapViewBox} className="absolute inset-0 h-full w-full" role="img" aria-label="World check-in map">
              <rect x="0" y="0" width={mapWidth} height={mapHeight} fill="#dff3ff" />
              <g>
                {worldMapPaths.map((countryPath) => {
                  const active = groupedByCountry.has(countryPath.code);
                  const isSelected = selectedCode === countryPath.code;
                  return (
                    <path
                      key={countryPath.code}
                      d={countryPath.path}
                      role="button"
                      tabIndex={0}
                      aria-label={countryPath.name}
                      onClick={() => setSelectedCode(countryPath.code)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") setSelectedCode(countryPath.code);
                      }}
                      className="cursor-pointer transition-colors outline-none hover:fill-red-300 focus:fill-red-300"
                      fill={active ? "#f4c542" : isSelected ? "#fecaca" : "#d8eadb"}
                      stroke={isSelected ? "#dc2626" : "#ffffff"}
                      strokeWidth={isSelected ? 1.5 : 0.55}
                    />
                  );
                })}
              </g>
            </svg>
            {checkinCountries.filter((country) => groupedByCountry.has(country.code)).map((country) => {
              const position = getCountryPoint(country);
              const count = groupedByCountry.get(country.code)?.length ?? 0;
              return (
                <button
                  key={`flag-${country.code}`}
                  type="button"
                  title={`${country.name} · ${count} check-ins`}
                  onClick={() => setSelectedCode(country.code)}
                  className="absolute flex h-7 min-w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-400 bg-white px-1 text-sm shadow-md ring-1 ring-amber-300"
                  style={{ left: `${position.x}%`, top: `${position.y}%` }}
                >
                  {flagEmoji(country.code)}{count > 1 ? <span className="ml-0.5 text-[10px] font-bold text-red-700">{count}</span> : null}
                </button>
              );
            })}
            {markerOnlyCountries.map((country) => {
              const position = getCountryPoint(country);
              const active = groupedByCountry.has(country.code);
              const isSelected = selectedCode === country.code;
              return active ? null : (
                <button
                  key={`marker-${country.code}`}
                  type="button"
                  title={country.name}
                  onClick={() => setSelectedCode(country.code)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white shadow-sm transition ${isSelected ? "h-3 w-3 bg-red-600" : "h-2 w-2 bg-slate-500/70 hover:bg-red-600"}`}
                  style={{ left: `${position.x}%`, top: `${position.y}%` }}
                />
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-4xl">{flagEmoji(selectedCountry.code)}</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">当前国家</p>
                <h2 className="text-2xl font-bold">{selectedCountry.name}</h2>
              </div>
              <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">{selectedCountry.continent}</span>
            </div>

            {selectedCheckins.length ? (
              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold">来自这个国家的打卡者</h3>
                  {selectedCheckins.length >= 3 ? (
                    <Link href={communityPath} className="rounded-full bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-200">
                      进入国家话题圈
                    </Link>
                  ) : null}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {selectedCheckins.map((item) => renderCheckinCard(item, true))}
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-2xl bg-amber-50 p-5">
                <h3 className="text-xl font-bold">成为 {selectedCountry.name} 的第一个打卡者</h3>
                <p className="mt-2 leading-7 text-slate-600">写下你的名字、城市和来中国的理由。第一个打卡的人会获得“国家首位打卡者”荣誉标签。</p>
                <a href="#checkin-form" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700">
                  现在打卡
                </a>
              </div>
            )}
          </div>
        </div>

        <form id="checkin-form" onSubmit={handleSubmit} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-red-600" />
            <h2 className="text-xl font-bold">添加你的国家打卡</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">选择国家后，在地图上会自动定位。提交成功后，页面会立即更新。</p>

          <label className="mt-5 block text-sm font-semibold">
            选择你的国家
            <select value={selectedCode} onChange={(event) => setSelectedCode(event.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 px-3 text-sm">
              {checkinCountries.map((country) => (
                <option key={country.code} value={country.code}>{flagEmoji(country.code)} {country.name}</option>
              ))}
            </select>
          </label>

          <label className="mt-4 flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-red-200 bg-red-50 px-3 text-sm font-semibold text-red-700 hover:bg-red-100">
            <Camera size={18} /> {avatarName || "上传头像（可选）"}
            <input type="file" accept="image/*" className="hidden" onChange={(event) => setAvatarName(event.target.files?.[0]?.name ?? "")} />
          </label>

          <label className="mt-4 block text-sm font-semibold">
            你的名字
            <input value={userName} onChange={(event) => setUserName(event.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 px-3 text-sm" placeholder="Mina" />
          </label>

          <label className="mt-4 block text-sm font-semibold">
            你目前在哪个城市
            <input value={currentCity} onChange={(event) => setCurrentCity(event.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 px-3 text-sm" placeholder="Ho Chi Minh City" />
          </label>

          <label className="mt-4 block text-sm font-semibold">
            你想去中国的哪个城市
            <select value={targetChinaCity} onChange={(event) => setTargetChinaCity(event.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 px-3 text-sm">
              {chinaCities.map((city) => (
                <option key={city.slug} value={city.name}>{city.name}</option>
              ))}
            </select>
          </label>

          <label className="mt-4 block text-sm font-semibold">
            你的故事（200字以内）
            <textarea
              value={story}
              onChange={(event) => setStory(event.target.value.slice(0, 200))}
              rows={5}
              className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm"
              placeholder="我是谁 + 我为什么想来中国"
            />
          </label>
          <p className="mt-1 text-right text-xs text-slate-500">{story.length}/200</p>

          <label className="mt-4 block text-sm font-semibold">
            你的联系方式（可选）
            <input value={contact} onChange={(event) => setContact(event.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 px-3 text-sm" placeholder="Instagram / Email / WeChat" />
          </label>

          <button type="submit" className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700">
            <MapPin size={18} /> 点亮我的国家
          </button>
          {submitState !== "idle" ? (
            <p className={`mt-3 text-sm font-medium ${submitState === "localOnly" ? "text-amber-700" : "text-emerald-700"}`} aria-live="polite">
              {submitState === "saving" ? "正在保存..." : submitState === "synced" ? "打卡已同步到线上。" : "打卡已显示在本页面，线上同步暂时不可用。"}
            </p>
          ) : null}
        </form>
      </section>

      <section id="gallery" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase text-red-600"><Filter size={17} /> Check-in Gallery</p>
              <h2 className="mt-2 text-3xl font-bold">打卡者画廊</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">按最新打卡展示所有全球青年。你可以按国家或目标中国城市筛选，找到未来的同学、朋友和城市搭子。</p>
            </div>
            <Link href={communityPath} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 py-2 font-semibold text-white hover:bg-slate-800">
              <HeartHandshake size={18} /> 进入社区
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <select value={countryFilter} onChange={(event) => setCountryFilter(event.target.value)} className="min-h-11 rounded-xl border border-slate-300 px-3 text-sm">
              <option value="all">全部国家</option>
              {Array.from(groupedByCountry.keys()).map((code) => (
                <option key={code} value={code}>{flagEmoji(code)} {countryByCode.get(code)?.name ?? code}</option>
              ))}
            </select>
            <select value={cityFilter} onChange={(event) => setCityFilter(event.target.value)} className="min-h-11 rounded-xl border border-slate-300 px-3 text-sm">
              <option value="all">全部目标城市</option>
              {chinaCities.map((city) => (
                <option key={city.slug} value={city.name}>{city.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleGallery.map((item) => renderCheckinCard(item))}
          </div>
        </div>
      </section>

      {successCheckin ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4">
          <div className="max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">🎉</div>
            <h2 className="mt-4 text-2xl font-bold">打卡成功！</h2>
            <p className="mt-3 leading-7 text-slate-600">
              {successCheckin.isFirst ? `🏆 你获得了 ${successCheckin.countryName} 国家首位打卡者徽章。` : `欢迎加入 ${successCheckin.countryName} 的打卡者列表。`}
            </p>
            <div className="mt-4 rounded-2xl bg-red-50 p-4 text-left text-sm leading-6 text-slate-700">
              <p className="font-semibold text-red-700">分享链接</p>
              <p className="break-all">https://www.silkstudy.com{checkinPath}?country={successCheckin.countryCode}</p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button onClick={() => setSuccessCheckin(null)} className="min-h-11 rounded-full bg-red-600 px-4 font-semibold text-white hover:bg-red-700">
                继续浏览
              </button>
              <Link href={communityPath} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 font-semibold text-white hover:bg-slate-800">
                <Share2 size={17} /> 去社区
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
