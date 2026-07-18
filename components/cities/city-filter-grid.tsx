"use client";

import Link from "next/link";
import { GraduationCap, Plus, Search, WalletCards, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { CityFilterKey } from "@/lib/city-filter-tags";

type CityCard = {
  slug: string;
  name: string;
  zhName: string;
  provinceSlug: string;
  provinceName: string;
  zhProvinceName: string;
  summary: string;
  zhSummary: string;
  livingCost: string;
  zhLivingCost: string;
  climate: string;
  zhClimate: string;
  visaConvenience: string;
  zhVisaConvenience: string;
  lifestyleTags: string[];
  zhLifestyleTags: string[];
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  universityCount: number;
  filterTags: CityFilterKey[];
};

type FilterOption = {
  key: CityFilterKey;
  label: string;
  zhLabel: string;
  description: string;
  zhDescription: string;
};

const hotCitySlugs = ["changsha", "chengdu", "beijing", "xian", "hangzhou", "guangzhou", "kunming", "shanghai"];
const popularityOrder = new Map(hotCitySlugs.map((slug, index) => [slug, index]));

const cityBadges: Record<string, string[]> = {
  beijing: ["🏛️ 千年帝都", "🍖 京味烤鸭", "🎭 京剧之乡"],
  tianjin: ["🏗️ 万国洋楼", "🥞 煎饼果子", "🎡 海河夜色"],
  harbin: ["❄️ 冰城夏都", "🍺 啤酒之乡", "🕌 东方莫斯科"],
  xian: ["🏛️ 十三朝古都", "🥙 碳水天堂", "🏮 大唐不夜城"],
  chengdu: ["🐼 熊猫故乡", "🍲 美食之都", "🍵 盖碗茶文化"],
  chongqing: ["🏗️ 8D魔幻山城", "🍲 火锅之都", "🌃 赛博朋克之夜"],
  guiyang: ["⛰️ 避暑之都", "🍲 酸汤鱼之乡", "🌉 中国天眼之城"],
  kunming: ["🌺 春城花都", "🍜 过桥米线", "🦚 孔雀之乡"],
  guilin: ["⛰️ 山水甲天下", "🍜 米粉之乡", "🎋 阳朔西街"],
  guangzhou: ["🏛️ 千年商都", "🥢 食在广州", "🌺 花城之都"],
  shenzhen: ["🚀 创新之都", "🌊 鹏城海岸", "🌃 设计之都"],
  xiamen: ["🌊 海上花园", "🦪 海鲜天堂", "🎨 文艺之岛"],
  fuzhou: ["🏛️ 有福之州", "🐟 鱼丸之都", "🌳 榕城绿荫"],
  nanchang: ["🏯 英雄之城", "🍜 拌粉瓦罐汤", "🏛️ 滕王阁序"],
  changsha: ["🌶️ 美食之都", "🎭 不夜之城", "📺 媒体艺术之都"],
  wuhan: ["🏯 九省通衢", "🍜 热干面之都", "🌸 樱花之城"],
  zhengzhou: ["🏛️ 天地之中", "🥣 胡辣汤之乡", "🏯 商都遗址"],
  taiyuan: ["🏯 龙城", "🍜 面食之都", "⛰️ 晋阳风骨"],
  jinan: ["⛲ 泉城", "🍖 把子肉之乡", "🏛️ 齐鲁文脉"],
  qingdao: ["🌊 海滨之城", "🍺 啤酒之都", "⛵ 帆船之都"],
  nanjing: ["🏛️ 六朝古都", "🍜 鸭血粉丝", "🌸 金陵文脉"],
  suzhou: ["🏯 江南园林", "🍜 苏式汤面", "🎋 东方威尼斯"],
  hangzhou: ["🌊 人间天堂", "🍖 西湖醋鱼", "🍵 龙井茶乡"],
  nanning: ["🌳 中国绿城", "🍜 老友粉之乡", "🌏 东盟之窗"],
  yantai: ["🌊 海滨之城", "🍇 葡萄酒都", "🏝️ 蓬莱仙境"],
  wenzhou: ["🌊 东海之滨", "💼 民营经济", "🍊 瓯越风味"],
  shihezi: ["🌿 军垦新城", "🏔️ 天山脚下", "🌱 戈壁绿洲"]
};

const cityHighlights: Record<string, string> = {
  changsha: "凌晨两点，这里的热闹才刚刚开始。",
  chengdu: "一座来了就不想走的城市。",
  beijing: "三千年的历史，八千家的餐厅。",
  xian: "穿上汉服，一夜穿越回长安。",
  hangzhou: "把课堂搬到西湖边。",
  guangzhou: "美食与机遇，365天不重样。",
  kunming: "四季如春，花开不败。",
  shanghai: "东方明珠，世界窗口。",
  shenzhen: "在城市天际线里看见未来。",
  nanjing: "一座把书卷气写进日常的城市。",
  suzhou: "园林、水巷和现代产业并肩生长。",
  wuhan: "过早、江风和百万学生的青春现场。",
  xiamen: "海风、校园和文艺街巷一起放慢脚步。",
  chongqing: "山城夜色像一部立体电影。",
  guilin: "把山水画搬进周末生活。",
  nanning: "面向东盟的绿色中国入口。",
  yantai: "海风、葡萄酒和低压力海滨生活，让山东不只有青岛。",
  wenzhou: "民营经济、东海海风和医学资源，构成一座务实又有活力的城市。",
  shihezi: "在天山北麓读书，会看到绿洲、农业、医学和边疆建设的另一种中国。"
};

const homeImages: Record<string, string> = {
  changsha: "/images/home/changsha.jpg",
  chengdu: "/images/home/chengdu.jpg",
  xian: "/images/home/xian.jpg",
  hangzhou: "/images/home/hangzhou.jpg",
  guangzhou: "/images/home/guangzhou.jpg",
  kunming: "/images/home/kunming.jpg"
};

function cityImage(city: CityCard) {
  return homeImages[city.slug] ?? city.image ?? "/images/student-city-life.png";
}

function cityTitle(city: CityCard, isZh: boolean) {
  return isZh ? `${city.zhName} · ${city.name}` : `${city.name} · ${city.zhName}`;
}

function cityHighlight(city: CityCard, isZh: boolean) {
  return cityHighlights[city.slug] ?? (isZh ? city.zhSummary : city.summary);
}

function cityBadgesFor(city: CityCard, isZh: boolean) {
  const badges = cityBadges[city.slug];
  if (badges?.length) return badges;
  return (isZh ? city.zhLifestyleTags : city.lifestyleTags).slice(0, 3);
}

function sortCities(a: CityCard, b: CityCard) {
  const aRank = popularityOrder.get(a.slug) ?? 1000;
  const bRank = popularityOrder.get(b.slug) ?? 1000;
  if (aRank !== bRank) return aRank - bRank;
  return b.universityCount - a.universityCount || a.name.localeCompare(b.name);
}

export function CityFilterGrid({
  cities,
  filters,
  isZh,
  prefix
}: {
  cities: CityCard[];
  filters: FilterOption[];
  isZh: boolean;
  prefix: string;
}) {
  const searchParams = useSearchParams();
  const [activeFilters, setActiveFilters] = useState<CityFilterKey[]>([]);
  const [citySearch, setCitySearch] = useState("");
  const [selectedCities, setSelectedCities] = useState<CityCard[]>([]);
  const [budget, setBudget] = useState("<$500");
  const [climate, setClimate] = useState("四季如春");
  const [priority, setPriority] = useState("美食");

  useEffect(() => {
    const next = new Set<CityFilterKey>();
    const budgetParam = searchParams.get("budget");
    const climateParam = searchParams.get("climate");
    const priorityParam = searchParams.get("priority");
    if (budgetParam === "low") next.add("lowCost");
    if (climateParam === "spring") next.add("climate");
    if (climateParam === "warm") next.add("coastal");
    if (priorityParam === "food") next.add("food");
    if (priorityParam === "nightlife") next.add("nightlife");
    if (priorityParam === "culture") next.add("culture");
    if (priorityParam === "career") next.add("elite");
    if (next.size) setActiveFilters([...next]);
  }, [searchParams]);

  const filteredCities = useMemo(() => {
    const query = citySearch.trim().toLowerCase();
    const tagFiltered = activeFilters.length === 0
      ? cities
      : cities.filter((city) => activeFilters.every((filter) => city.filterTags.includes(filter)));
    const result = !query
      ? tagFiltered
      : tagFiltered.filter((city) => [
        city.name,
        city.zhName,
        city.provinceName,
        city.zhProvinceName,
        city.summary,
        city.zhSummary,
        ...city.lifestyleTags,
        ...city.zhLifestyleTags
      ].join(" ").toLowerCase().includes(query));
    return [...result].sort(sortCities);
  }, [activeFilters, cities, citySearch]);

  const hotCities = useMemo(
    () => hotCitySlugs.map((slug) => filteredCities.find((city) => city.slug === slug)).filter((city): city is CityCard => Boolean(city)),
    [filteredCities]
  );

  const provinceGroups = useMemo(() => {
    const groups = new Map<string, { provinceName: string; zhProvinceName: string; cities: CityCard[] }>();
    for (const city of filteredCities) {
      const group = groups.get(city.provinceSlug) ?? {
        provinceName: city.provinceName,
        zhProvinceName: city.zhProvinceName,
        cities: []
      };
      group.cities.push(city);
      groups.set(city.provinceSlug, group);
    }
    return [...groups.entries()]
      .map(([slug, group]) => ({ slug, ...group, cities: group.cities.sort(sortCities) }))
      .sort((a, b) => {
        const aHot = Math.min(...a.cities.map((city) => popularityOrder.get(city.slug) ?? 999));
        const bHot = Math.min(...b.cities.map((city) => popularityOrder.get(city.slug) ?? 999));
        if (aHot !== bHot) return aHot - bHot;
        return a.provinceName.localeCompare(b.provinceName);
      });
  }, [filteredCities]);

  const toggleFilter = (key: CityFilterKey) => {
    setActiveFilters((current) => (current.includes(key) ? current.filter((item) => item !== key) : [...current, key]));
  };

  const toggleCompare = (city: CityCard) => {
    setSelectedCities((current) => {
      if (current.some((item) => item.slug === city.slug)) return current.filter((item) => item.slug !== city.slug);
      return [...current, city].slice(0, 4);
    });
  };

  const applyQuickRecommendation = () => {
    const next = new Set<CityFilterKey>();
    if (budget === "<$500") next.add("lowCost");
    if (climate === "四季如春") next.add("climate");
    if (climate === "温暖湿润") next.add("coastal");
    if (priority === "美食") next.add("food");
    if (priority === "夜生活") next.add("nightlife");
    if (priority === "历史文化") next.add("culture");
    if (priority === "实习机会") next.add("elite");
    setActiveFilters([...next]);
    document.getElementById("city-filter-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setCitySearch("");
  };
  const compareHref = `${prefix}/cities/compare?cities=${selectedCities.map((city) => city.slug).join(",")}`;

  const provinceHeading = (group: { provinceName: string; zhProvinceName: string }) => {
    if (isZh) return group.zhProvinceName || group.provinceName;
    return group.provinceName === group.zhProvinceName ? `${group.provinceName} Province` : group.provinceName;
  };

  const renderCityCard = (city: CityCard, variant: "hot" | "normal") => {
    const selected = selectedCities.some((item) => item.slug === city.slug);
    const cost = isZh ? city.zhLivingCost : city.livingCost;
    const isHot = variant === "hot";

    return (
      <article
        key={city.slug}
        className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
          isHot ? "border-amber-200" : "border-slate-200"
        }`}
      >
        <div className={`relative ${isHot ? "aspect-[16/9]" : "aspect-[16/9]"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cityImage(city)}
            alt={isZh ? city.zhImageAlt : city.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
          {isHot ? (
            <span className="absolute right-3 top-3 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-red-950 shadow-sm">
              🌟 推荐
            </span>
          ) : null}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">
              {isZh ? city.zhProvinceName : city.provinceName}
            </p>
            <h3 className={`${isHot ? "text-2xl" : "text-xl"} font-bold`}>{cityTitle(city, isZh)}</h3>
          </div>
        </div>
        <div className={isHot ? "p-5" : "p-4"}>
          <div className="flex flex-wrap gap-2">
            {cityBadgesFor(city, isZh).map((badge) => (
              <span key={badge} className="inline-flex min-h-11 items-center rounded-md bg-slate-950/75 px-3 py-2 text-sm font-semibold text-white">
                {badge}
              </span>
            ))}
          </div>
          <p className={`mt-4 leading-7 text-slate-700 ${isHot ? "text-base" : "text-sm"}`}>“{cityHighlight(city, isZh)}”</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex min-h-11 items-center gap-1 rounded-full bg-red-50 px-3 py-2 text-red-700">
              <GraduationCap size={15} /> {city.universityCount} {isZh ? "所学校" : "schools"}
            </span>
            <span className="inline-flex min-h-11 items-center gap-1 rounded-full bg-amber-50 px-3 py-2 text-amber-800">
              <WalletCards size={15} /> {cost}
            </span>
          </div>
          <div className="mt-5 flex items-center justify-between gap-3">
            <Link href={`${prefix}/cities/${city.slug}`} className="inline-flex min-h-12 items-center rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700">
              {isZh ? "探索" : "Explore"} →
            </Link>
            <button
              type="button"
              onClick={() => toggleCompare(city)}
              className={`inline-flex min-h-12 items-center gap-1 rounded-full px-4 py-3 text-sm font-semibold transition ${
                selected ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {selected ? <X size={15} /> : <Plus size={15} />}
              {isZh ? "比较" : "Compare"}
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="mt-10">
      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-sm font-bold uppercase text-red-600">Quick match</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">❓ 不知道选哪个城市？</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">回答 3 个问题，我们先帮你缩小范围。</p>
          </div>
          <div className="grid gap-4">
            <div className="h-2 overflow-hidden rounded-full bg-white" aria-hidden="true">
              <div className="h-full w-full rounded-full bg-red-600" />
            </div>
            <QuestionRow title="1. 你的月预算是多少？" value={budget} options={["<$500", "$500-800", "$800+"]} onChange={setBudget} />
            <QuestionRow title="2. 你喜欢什么样的气候？" value={climate} options={["四季分明", "温暖湿润", "四季如春"]} onChange={setClimate} />
            <QuestionRow title="3. 你最看重什么？" value={priority} options={["美食", "夜生活", "历史文化", "实习机会"]} onChange={setPriority} />
            <button onClick={applyQuickRecommendation} className="min-h-11 rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
              🎯 帮我推荐城市
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-red-600">City filters</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">按留学需求筛选城市</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">支持多选，例如“低生活成本 + 夜生活丰富”。</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="rounded-full bg-red-50 px-4 py-2 text-red-700">找到 {filteredCities.length} 座城市</span>
            {activeFilters.length ? (
              <button type="button" onClick={clearFilters} className="min-h-11 rounded-full border border-slate-200 bg-white px-4 text-slate-700 hover:border-red-300 hover:text-red-700">
                清除所有筛选
              </button>
            ) : null}
          </div>
        </div>
        <label className="relative mt-5 block">
          <Search className="pointer-events-none absolute left-4 top-3.5 text-slate-400" size={18} />
          <input
            value={citySearch}
            onChange={(event) => setCitySearch(event.target.value)}
            placeholder={isZh ? "搜索城市名称、省份或标签..." : "Search city name, province, or tag..."}
            className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-red-400 focus:bg-white"
          />
        </label>
        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilters.includes(filter.key);
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => toggleFilter(filter.key)}
                title={isZh ? filter.zhDescription : filter.description}
                className={`min-h-11 rounded-lg border px-4 py-2 text-sm font-bold transition sm:rounded-full ${
                  isActive
                    ? "border-red-600 bg-red-600 text-white shadow-sm"
                    : "border-amber-100 bg-amber-50 text-slate-800 hover:border-red-300 hover:text-red-700"
                }`}
              >
                {isZh ? filter.zhLabel : filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {filteredCities.length === 0 ? (
        <div id="city-filter-results" className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-xl font-bold text-slate-950">暂时没有完全匹配的城市</p>
          <p className="mt-2 text-sm text-slate-600">可以减少一个筛选标签，或联系我们做人工推荐。</p>
        </div>
      ) : (
        <>
          <section id="city-filter-results" className="mt-10 rounded-3xl bg-[#fff3d7] px-4 py-8 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase text-red-600">Featured cities</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-950">🌟 热门留学城市</h2>
                <p className="mt-2 text-slate-600">先从这些城市开始看，再慢慢深入到全部城市。</p>
              </div>
              <p className="rounded-full bg-white px-4 py-2 text-sm font-bold text-amber-900 shadow-sm">{hotCities.length} 个推荐匹配</p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {hotCities.map((city) => renderCityCard(city, "hot"))}
            </div>
            <div className="mt-7 rounded-2xl border border-amber-200 bg-white p-6 text-center shadow-sm">
              <p className="text-xl font-bold text-slate-950">
                {isZh ? "筛选结果太多？让顾问帮你缩小到 3-5 个城市。" : "Too many good cities? Let a counselor narrow them to 3-5 choices."}
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                {isZh ? "告诉我们专业、预算、语言基础和奖学金目标，我们会把城市、学校和申请时间线整理成一份免费方案。" : "Share your major, budget, language background, and scholarship goal. We will turn the city list into a free study plan."}
              </p>
              <Link href={`${prefix}/consultation?source=city-match`} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-700">
                {isZh ? "获取免费留学方案 →" : "Get Your Free Study Plan ->"}
              </Link>
            </div>
          </section>

          <section className="mt-14">
            <div>
              <p className="text-sm font-bold uppercase text-red-600">All cities</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">全部城市 · 按省份探索</h2>
              <p className="mt-2 text-slate-600">省内热门城市会排在前面，方便你从重点目的地开始比较。</p>
            </div>
            <div className="mt-7 space-y-10">
              {provinceGroups.map((group) => (
                <section key={group.slug} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-slate-950">🏮 {provinceHeading(group)}</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">{group.cities.length} 座城市</span>
                  </div>
                  <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {group.cities.map((city) => renderCityCard(city, "normal"))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        </>
      )}

      <section className="mt-14 rounded-3xl bg-red-600 p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">🎓 找到你的理想城市了吗？</h2>
          <p className="mt-3 text-lg leading-8 text-red-50">点击城市卡片，了解那里的大学、生活、美食、夜生活和真实留学生体验。</p>
          <a href="#city-filter-results" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 font-bold text-red-700 hover:bg-amber-50">
            开始探索
          </a>
          <Link href={`${prefix}/consultation?source=cities-bottom`} className="ml-3 mt-6 inline-flex min-h-11 items-center rounded-full bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800">
            {isZh ? "获取免费留学方案 →" : "Get Your Free Study Plan ->"}
          </Link>
        </div>
      </section>

      {selectedCities.length ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
              <span>已选：</span>
              {selectedCities.map((city) => (
                <button key={city.slug} onClick={() => toggleCompare(city)} className="rounded-full bg-amber-100 px-3 py-1 text-amber-900">
                  {isZh ? city.zhName : city.name} ×
                </button>
              ))}
            </div>
            <Link href={compareHref} className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white hover:bg-slate-800">
              比较 {selectedCities.length} 个城市 →
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function QuestionRow({
  title,
  value,
  options,
  onChange
}: {
  title: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-bold text-slate-950">{title}</p>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`min-h-12 w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition sm:w-auto sm:rounded-full sm:text-center ${
              value === option ? "bg-slate-950 text-white" : "bg-white text-slate-700 hover:bg-amber-100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
