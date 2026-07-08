"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Award, BadgeCheck, Globe2, MapPin, Sparkles } from "lucide-react";
import { checkinCountries, flagEmoji, type CheckinCountry } from "@/lib/global-checkin-countries";
import type { AppLocale } from "@/lib/i18n/routing";
import { worldMapMarkerOnlyCountryCodes, worldMapPaths, worldMapViewBox } from "@/lib/world-map-paths";

type Checkin = {
  countryCode: string;
  countryName: string;
  userName: string;
  tagline: string;
  countryCharm: string;
  travelStudyReason: string;
  specialties: string;
  createdAt: string;
};

const storageKey = "silkstudy-global-youth-checkins";

const starterCheckins: Checkin[] = [
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

const copy = {
  en: {
    eyebrow: "Global youth check-in",
    title: "Light up your country on the SilkStudy world map.",
    body: "Be the first young person from your country to check in, introduce your home, and invite the world to learn, travel, and study together.",
    lit: "countries lit",
    total: "countries",
    firstBadge: "First country check-in",
    formTitle: "Add your country check-in",
    name: "Your name",
    country: "Country",
    tagline: "Check-in sentence",
    charm: "What makes your country special?",
    reason: "Why should others travel or study there?",
    specialties: "Specialties or products",
    submit: "Light up country",
    selected: "Selected country",
    wall: "Youth check-ins",
    empty: "No check-in yet. Be the first to light this country.",
    firstFrom: "First from",
    defaultTagline: "I am the first person from this country to check in on SilkStudy."
  },
  zh: {
    eyebrow: "全球青年打卡",
    title: "在 SilkStudy 世界地图上点亮你的国家。",
    body: "成为你所在国家的第一位青年打卡者，介绍你的家乡，也邀请世界一起交流、旅行、学习。",
    lit: "已点亮国家",
    total: "国家",
    firstBadge: "国家首位打卡者",
    formTitle: "添加你的国家打卡",
    name: "你的名字",
    country: "国家",
    tagline: "打卡宣言",
    charm: "你的国家有什么特色？",
    reason: "为什么值得旅游或留学？",
    specialties: "特产或代表好物",
    submit: "点亮国家",
    selected: "当前国家",
    wall: "青年打卡墙",
    empty: "这个国家还没有人打卡，来做第一位吧。",
    firstFrom: "首位来自",
    defaultTagline: "我是第一个在 SilkStudy 打卡的这个国家的人。"
  },
  vi: {
    eyebrow: "Check-in thanh niên toàn cầu",
    title: "Thắp sáng quốc gia của bạn trên bản đồ SilkStudy.",
    body: "Hãy là người trẻ đầu tiên từ quốc gia của bạn check-in, giới thiệu quê hương và mời thế giới học tập, du lịch, giao lưu cùng nhau.",
    lit: "quốc gia đã sáng",
    total: "quốc gia",
    firstBadge: "Check-in đầu tiên",
    formTitle: "Thêm check-in quốc gia",
    name: "Tên của bạn",
    country: "Quốc gia",
    tagline: "Câu check-in",
    charm: "Quốc gia của bạn có gì đặc biệt?",
    reason: "Vì sao nên du lịch hoặc học tập ở đó?",
    specialties: "Đặc sản hoặc sản phẩm",
    submit: "Thắp sáng quốc gia",
    selected: "Quốc gia đã chọn",
    wall: "Tường check-in",
    empty: "Chưa có check-in. Hãy là người đầu tiên thắp sáng quốc gia này.",
    firstFrom: "Đầu tiên từ",
    defaultTagline: "Tôi là người đầu tiên từ quốc gia này check-in trên SilkStudy."
  },
  id: {
    eyebrow: "Check-in pemuda global",
    title: "Nyalakan negaramu di peta dunia SilkStudy.",
    body: "Jadilah anak muda pertama dari negaramu yang check-in, memperkenalkan rumahmu, dan mengajak dunia belajar serta berwisata bersama.",
    lit: "negara menyala",
    total: "negara",
    firstBadge: "Check-in pertama negara",
    formTitle: "Tambah check-in negara",
    name: "Namamu",
    country: "Negara",
    tagline: "Kalimat check-in",
    charm: "Apa yang membuat negaramu istimewa?",
    reason: "Mengapa orang lain perlu berwisata atau belajar di sana?",
    specialties: "Produk atau kekhasan",
    submit: "Nyalakan negara",
    selected: "Negara terpilih",
    wall: "Check-in pemuda",
    empty: "Belum ada check-in. Jadilah yang pertama.",
    firstFrom: "Pertama dari",
    defaultTagline: "Saya orang pertama dari negara ini yang check-in di SilkStudy."
  },
  ms: {
    eyebrow: "Daftar masuk belia global",
    title: "Nyalakan negara anda pada peta dunia SilkStudy.",
    body: "Jadilah belia pertama dari negara anda yang mendaftar masuk, memperkenalkan tanah air, dan menjemput dunia belajar serta mengembara bersama.",
    lit: "negara menyala",
    total: "negara",
    firstBadge: "Daftar masuk pertama negara",
    formTitle: "Tambah daftar masuk negara",
    name: "Nama anda",
    country: "Negara",
    tagline: "Ayat daftar masuk",
    charm: "Apa yang istimewa tentang negara anda?",
    reason: "Mengapa orang lain patut melancong atau belajar di sana?",
    specialties: "Keistimewaan atau produk",
    submit: "Nyalakan negara",
    selected: "Negara dipilih",
    wall: "Daftar masuk belia",
    empty: "Belum ada daftar masuk. Jadilah yang pertama.",
    firstFrom: "Pertama dari",
    defaultTagline: "Saya orang pertama dari negara ini yang mendaftar masuk di SilkStudy."
  },
  my: {
    eyebrow: "ကမ္ဘာလူငယ် Check-in",
    title: "SilkStudy ကမ္ဘာမြေပုံပေါ်တွင် သင့်နိုင်ငံကို ထွန်းလင်းစေပါ။",
    body: "သင့်နိုင်ငံမှ ပထမဆုံး လူငယ်အဖြစ် check-in လုပ်ပြီး မိမိနိုင်ငံကို မိတ်ဆက်ကာ ကမ္ဘာနှင့် အတူ လေ့လာ၊ ခရီးသွား၊ ဖလှယ်ပါ။",
    lit: "ထွန်းလင်းပြီး နိုင်ငံများ",
    total: "နိုင်ငံများ",
    firstBadge: "နိုင်ငံ ပထမဆုံး check-in",
    formTitle: "နိုင်ငံ check-in ထည့်ရန်",
    name: "သင့်အမည်",
    country: "နိုင်ငံ",
    tagline: "Check-in စာကြောင်း",
    charm: "သင့်နိုင်ငံ၏ ထူးခြားမှုက ဘာလဲ?",
    reason: "အခြားသူများ ဘာကြောင့် သွားရောက်လည်ပတ် သို့မဟုတ် ပညာသင်သင့်လဲ?",
    specialties: "အထူးထုတ်ကုန်များ",
    submit: "နိုင်ငံကို ထွန်းလင်းစေပါ",
    selected: "ရွေးချယ်ထားသော နိုင်ငံ",
    wall: "လူငယ် check-ins",
    empty: "Check-in မရှိသေးပါ။ ပထမဆုံးဖြစ်လာပါ။",
    firstFrom: "ပထမဆုံး -",
    defaultTagline: "ကျွန်ုပ်သည် SilkStudy တွင် ဤနိုင်ငံမှ ပထမဆုံး check-in လုပ်သူဖြစ်သည်။"
  },
  km: {
    eyebrow: "Check-in យុវជនពិភពលោក",
    title: "បំភ្លឺប្រទេសរបស់អ្នកលើផែនទី SilkStudy។",
    body: "ក្លាយជាយុវជនដំបូងពីប្រទេសរបស់អ្នកដែល check-in ណែនាំស្រុកកំណើត និងអញ្ជើញពិភពលោកមករៀន ធ្វើដំណើរ និងផ្លាស់ប្តូរគ្នា។",
    lit: "ប្រទេសបានបំភ្លឺ",
    total: "ប្រទេស",
    firstBadge: "Check-in ដំបូងរបស់ប្រទេស",
    formTitle: "បន្ថែម check-in ប្រទេស",
    name: "ឈ្មោះរបស់អ្នក",
    country: "ប្រទេស",
    tagline: "ប្រយោគ check-in",
    charm: "ប្រទេសអ្នកពិសេសត្រង់ណា?",
    reason: "ហេតុអ្វីគេគួរធ្វើដំណើរ ឬសិក្សានៅទីនោះ?",
    specialties: "ផលិតផល ឬលក្ខណៈពិសេស",
    submit: "បំភ្លឺប្រទេស",
    selected: "ប្រទេសដែលបានជ្រើស",
    wall: "Check-ins យុវជន",
    empty: "មិនទាន់មាន check-in ទេ។ សូមក្លាយជាអ្នកដំបូង។",
    firstFrom: "ដំបូងពី",
    defaultTagline: "ខ្ញុំជាមនុស្សដំបូងពីប្រទេសនេះដែល check-in នៅ SilkStudy។"
  },
  lo: {
    eyebrow: "Check-in ຊາວໜຸ່ມທົ່ວໂລກ",
    title: "ເຮັດໃຫ້ປະເທດຂອງທ່ານສະຫວ່າງໃນແຜນທີ່ SilkStudy.",
    body: "ເປັນຊາວໜຸ່ມຄົນທຳອິດຈາກປະເທດຂອງທ່ານທີ່ check-in, ແນະນຳບ້ານເກີດ ແລະເຊີນໂລກມາຮຽນ ເດີນທາງ ແລະແລກປ່ຽນກັນ.",
    lit: "ປະເທດທີ່ສະຫວ່າງ",
    total: "ປະເທດ",
    firstBadge: "Check-in ທຳອິດຂອງປະເທດ",
    formTitle: "ເພີ່ມ check-in ປະເທດ",
    name: "ຊື່ຂອງທ່ານ",
    country: "ປະເທດ",
    tagline: "ປະໂຫຍກ check-in",
    charm: "ປະເທດຂອງທ່ານພິເສດຢ່າງໃດ?",
    reason: "ເປັນຫຍັງຜູ້ອື່ນຄວນໄປທ່ຽວ ຫຼືຮຽນຢູ່ນັ້ນ?",
    specialties: "ຂອງພິເສດ ຫຼືຜະລິດຕະພັນ",
    submit: "ເຮັດໃຫ້ປະເທດສະຫວ່າງ",
    selected: "ປະເທດທີ່ເລືອກ",
    wall: "Check-ins ຊາວໜຸ່ມ",
    empty: "ຍັງບໍ່ມີ check-in. ເປັນຄົນທຳອິດໄດ້ເລີຍ.",
    firstFrom: "ຄົນທຳອິດຈາກ",
    defaultTagline: "ຂ້ອຍແມ່ນຄົນທຳອິດຈາກປະເທດນີ້ທີ່ check-in ໃນ SilkStudy."
  },
  tl: {
    eyebrow: "Global youth check-in",
    title: "Paliwanagin ang iyong bansa sa SilkStudy world map.",
    body: "Maging unang kabataan mula sa iyong bansa na mag-check in, ipakilala ang tahanan mo, at anyayahan ang mundo na matuto at maglakbay nang magkasama.",
    lit: "bansang nailawan",
    total: "bansa",
    firstBadge: "Unang country check-in",
    formTitle: "Idagdag ang country check-in",
    name: "Pangalan mo",
    country: "Bansa",
    tagline: "Check-in sentence",
    charm: "Ano ang espesyal sa bansa mo?",
    reason: "Bakit dapat maglakbay o mag-aral doon?",
    specialties: "Produkto o specialty",
    submit: "Paliwanagin ang bansa",
    selected: "Napiling bansa",
    wall: "Youth check-ins",
    empty: "Wala pang check-in. Ikaw ang maging una.",
    firstFrom: "Una mula sa",
    defaultTagline: "Ako ang unang tao mula sa bansang ito na nag-check in sa SilkStudy."
  }
} as const;

function getCopy(locale: AppLocale) {
  return copy[locale as keyof typeof copy] ?? copy.en;
}

function countryPosition(country: CheckinCountry) {
  const regions = {
    "North America": { x: 9, y: 18, w: 23, h: 27, cols: 7 },
    "South America": { x: 27, y: 55, w: 16, h: 31, cols: 5 },
    Europe: { x: 46, y: 17, w: 18, h: 20, cols: 7 },
    Africa: { x: 45, y: 43, w: 20, h: 35, cols: 7 },
    Asia: { x: 63, y: 20, w: 27, h: 39, cols: 9 },
    Oceania: { x: 78, y: 67, w: 15, h: 17, cols: 5 }
  } satisfies Record<CheckinCountry["continent"], { x: number; y: number; w: number; h: number; cols: number }>;

  const sameRegion = checkinCountries.filter((item) => item.continent === country.continent);
  const index = sameRegion.findIndex((item) => item.code === country.code);
  const region = regions[country.continent];
  const col = index % region.cols;
  const row = Math.floor(index / region.cols);
  const rows = Math.ceil(sameRegion.length / region.cols);
  const x = region.x + (col + 0.5) * (region.w / region.cols);
  const y = region.y + (row + 0.5) * (region.h / rows);
  return { x, y };
}

const mapWidth = 1000;
const mapHeight = 520;

function mergeCheckins(primary: Checkin[], secondary: Checkin[]) {
  const seen = new Set<string>();
  return [...primary, ...secondary].filter((item) => {
    if (seen.has(item.countryCode)) return false;
    seen.add(item.countryCode);
    return true;
  });
}

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

export function GlobalYouthCheckin({ locale }: { locale: AppLocale }) {
  const t = getCopy(locale);
  const [checkins, setCheckins] = useState<Checkin[]>(starterCheckins);
  const [selectedCode, setSelectedCode] = useState("VN");
  const [userName, setUserName] = useState("");
  const [tagline, setTagline] = useState("");
  const [countryCharm, setCountryCharm] = useState("");
  const [travelStudyReason, setTravelStudyReason] = useState("");
  const [specialties, setSpecialties] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "saving" | "synced" | "localOnly">("idle");

  async function refreshCheckins() {
    const response = await fetch("/api/global-checkins", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json().catch(() => null);
    if (Array.isArray(data?.results)) {
      setCheckins((current) => mergeCheckins(data.results as Checkin[], current));
    }
  }

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setCheckins(JSON.parse(saved) as Checkin[]);
    refreshCheckins().catch(() => undefined);
    const timer = window.setInterval(() => {
      refreshCheckins().catch(() => undefined);
    }, 10000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(checkins));
  }, [checkins]);

  const checkinByCountry = useMemo(() => new Map(checkins.map((item) => [item.countryCode, item])), [checkins]);
  const countryByCode = useMemo(() => new Map(checkinCountries.map((country) => [country.code, country])), []);
  const pathByCode = useMemo(() => new Map(worldMapPaths.map((item) => [item.code, item])), []);
  const markerOnlyCountries = useMemo(
    () => worldMapMarkerOnlyCountryCodes.map((code) => countryByCode.get(code)).filter((country): country is CheckinCountry => Boolean(country)),
    [countryByCode]
  );
  const selectedCountry = checkinCountries.find((country) => country.code === selectedCode) ?? checkinCountries[0];
  const selectedCheckin = checkinByCountry.get(selectedCountry.code);
  const litCountries = checkinByCountry.size;

  function getCountryPoint(country: CheckinCountry) {
    const markerCoordinates = markerCountryCoordinates[country.code];
    if (markerCoordinates) return projectMarker(markerCoordinates.lat, markerCoordinates.lon);
    const path = pathByCode.get(country.code);
    if (path) return { x: (path.centroid.x / mapWidth) * 100, y: (path.centroid.y / mapHeight) * 100 };
    return countryPosition(country);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const country = selectedCountry;
    const first = !checkinByCountry.has(country.code);
    setSubmitState("saving");
    const newCheckin: Checkin = {
      countryCode: country.code,
      countryName: country.name,
      userName: userName.trim() || "SilkStudy friend",
      tagline: tagline.trim() || `I am the first ${country.name} youth to check in on SilkStudy.`,
      countryCharm: countryCharm.trim() || t.defaultTagline,
      travelStudyReason: travelStudyReason.trim() || "This country has culture, friendship, study stories, and travel routes worth sharing with the world.",
      specialties: specialties.trim() || "Local food, crafts, music, festivals, and daily life",
      createdAt: new Date().toISOString().slice(0, 10)
    };

    setCheckins((current) => first ? [newCheckin, ...current] : [newCheckin, ...current.filter((item) => item.countryCode !== country.code)]);
    try {
      const response = await fetch("/api/global-checkins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCheckin)
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
    setTagline("");
    setCountryCharm("");
    setTravelStudyReason("");
    setSpecialties("");
  }

  return (
    <div className="bg-white">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-secondary">
              <Globe2 size={18} aria-hidden="true" /> {t.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{t.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 self-end">
            <div className="rounded-lg border border-white/10 bg-white/10 p-5">
              <p className="text-4xl font-bold text-secondary">{litCountries}</p>
              <p className="mt-1 text-sm text-slate-300">{t.lit}</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/10 p-5">
              <p className="text-4xl font-bold text-secondary">{checkinCountries.length}</p>
              <p className="mt-1 text-sm text-slate-300">{t.total}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div className="min-w-0">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-[#dff3ff]">
              <svg viewBox={worldMapViewBox} className="absolute inset-0 h-full w-full" role="img" aria-label="World check-in map">
                <rect x="0" y="0" width={mapWidth} height={mapHeight} fill="#dff3ff" />
                <g>
                  {worldMapPaths.map((countryPath) => {
                    const active = checkinByCountry.has(countryPath.code);
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
                        className="cursor-pointer transition-colors outline-none hover:fill-primary/30 focus:fill-primary/30"
                        fill={active ? "#f4c542" : isSelected ? "#bfdbfe" : "#d8eadb"}
                        stroke={isSelected ? "#0f766e" : "#ffffff"}
                        strokeWidth={isSelected ? 1.5 : 0.55}
                      />
                    );
                  })}
                </g>
              </svg>
              {checkinCountries.filter((country) => checkinByCountry.has(country.code)).map((country) => {
                const position = getCountryPoint(country);
                return (
                  <button
                    key={`flag-${country.code}`}
                    type="button"
                    title={`${country.name} lit`}
                    aria-label={`${country.name} lit`}
                    onClick={() => setSelectedCode(country.code)}
                    className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-secondary bg-white text-sm shadow-md ring-1 ring-secondary/50"
                    style={{ left: `${position.x}%`, top: `${position.y}%` }}
                  >
                    {flagEmoji(country.code)}
                  </button>
                );
              })}
              {markerOnlyCountries.map((country) => {
                const position = getCountryPoint(country);
                const active = checkinByCountry.has(country.code);
                const isSelected = selectedCode === country.code;
                return (
                  <button
                    key={`marker-${country.code}`}
                    type="button"
                    title={country.name}
                    aria-label={country.name}
                    onClick={() => setSelectedCode(country.code)}
                    className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm transition ${
                      active
                        ? "h-6 w-6 border-secondary bg-white text-sm ring-1 ring-secondary/50"
                        : isSelected
                          ? "h-3 w-3 border-white bg-primary"
                          : "h-2 w-2 border-white bg-slate-500/80 hover:bg-primary"
                    }`}
                    style={{ left: `${position.x}%`, top: `${position.y}%` }}
                  >
                    {active ? flagEmoji(country.code) : <span className="sr-only">{country.name}</span>}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{t.selected}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-4xl">{flagEmoji(selectedCountry.code)}</span>
                <div>
                  <h2 className="text-2xl font-bold text-ink">{selectedCountry.name}</h2>
                  <p className="text-sm text-slate-500">{selectedCountry.continent}</p>
                </div>
                {selectedCheckin ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-sm font-semibold text-primary">
                    <Award size={16} aria-hidden="true" /> {t.firstBadge}
                  </span>
                ) : null}
              </div>
              {selectedCheckin ? (
                <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
                  <p><strong className="text-ink">{selectedCheckin.userName}:</strong> {selectedCheckin.tagline}</p>
                  <p>{selectedCheckin.countryCharm}</p>
                  <p>{selectedCheckin.travelStudyReason}</p>
                  <p><strong className="text-ink">Specialties:</strong> {selectedCheckin.specialties}</p>
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-600">{t.empty}</p>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-secondary" aria-hidden="true" />
              <h2 className="text-xl font-bold text-ink">{t.formTitle}</h2>
            </div>
            <label className="mt-5 block text-sm font-semibold text-ink">
              {t.country}
              <select value={selectedCode} onChange={(event) => setSelectedCode(event.target.value)} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm">
                {checkinCountries.map((country) => (
                  <option key={country.code} value={country.code}>{flagEmoji(country.code)} {country.name}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm font-semibold text-ink">
              {t.name}
              <input value={userName} onChange={(event) => setUserName(event.target.value)} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm" placeholder="Mina" />
            </label>
            <label className="mt-4 block text-sm font-semibold text-ink">
              {t.tagline}
              <input value={tagline} onChange={(event) => setTagline(event.target.value)} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm" placeholder={`I am the first ${selectedCountry.name} youth here.`} />
            </label>
            <label className="mt-4 block text-sm font-semibold text-ink">
              {t.charm}
              <textarea value={countryCharm} onChange={(event) => setCountryCharm(event.target.value)} rows={3} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm" />
            </label>
            <label className="mt-4 block text-sm font-semibold text-ink">
              {t.reason}
              <textarea value={travelStudyReason} onChange={(event) => setTravelStudyReason(event.target.value)} rows={3} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm" />
            </label>
            <label className="mt-4 block text-sm font-semibold text-ink">
              {t.specialties}
              <input value={specialties} onChange={(event) => setSpecialties(event.target.value)} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm" placeholder="Tea, coffee, fruit, crafts..." />
            </label>
            <button type="submit" className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary/90">
              <MapPin size={18} aria-hidden="true" /> {t.submit}
            </button>
            {submitState !== "idle" ? (
              <p className={`mt-3 text-sm font-medium ${submitState === "localOnly" ? "text-amber-700" : "text-emerald-700"}`} aria-live="polite">
                {submitState === "saving"
                  ? "Saving your check-in..."
                  : submitState === "synced"
                    ? "Your country is lit and synced online."
                    : "Your country is lit on this device. Server sync is not available yet."}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink">{t.wall}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {checkins.map((item) => (
              <article key={`${item.countryCode}-${item.createdAt}`} className="rounded-lg border border-slate-200 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{flagEmoji(item.countryCode)}</span>
                    <div>
                      <h3 className="font-bold text-ink">{item.countryName}</h3>
                      <p className="text-sm text-slate-500">{t.firstFrom} {item.countryName}</p>
                    </div>
                  </div>
                  <BadgeCheck className="text-secondary" size={22} aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm font-semibold text-primary">{item.userName}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.tagline}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.countryCharm}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
