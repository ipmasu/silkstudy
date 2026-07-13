"use client";

import Link from "next/link";
import { CloudSun, Landmark, MapPinned, WalletCards } from "lucide-react";
import { useMemo, useState } from "react";
import type { CityFilterKey } from "@/lib/city-filter-tags";

type CityCard = {
  slug: string;
  name: string;
  zhName: string;
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
  nanning: ["🌳 中国绿城", "🍜 老友粉之乡", "🌏 东盟之窗"]
};

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
  const [activeFilters, setActiveFilters] = useState<CityFilterKey[]>([]);

  const filteredCities = useMemo(() => {
    if (activeFilters.length === 0) return cities;
    return cities.filter((city) => activeFilters.every((filter) => city.filterTags.includes(filter)));
  }, [activeFilters, cities]);

  const toggleFilter = (key: CityFilterKey) => {
    setActiveFilters((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
  };

  return (
    <div className="mt-8">
      <div className="rounded-lg border border-slate-200 bg-surface p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold text-ink">{isZh ? "按留学需求筛选城市" : "Filter cities by study-life needs"}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {isZh ? "可以同时选择多个标签，例如“生活成本低 + 夜生活丰富”。" : "Select multiple tags, such as lower cost plus rich nightlife."}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
            <span>{isZh ? `${filteredCities.length} 座城市` : `${filteredCities.length} cities`}</span>
            {activeFilters.length > 0 ? (
              <button type="button" onClick={() => setActiveFilters([])} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-primary transition hover:border-primary">
                {isZh ? "清空筛选" : "Clear"}
              </button>
            ) : null}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilters.includes(filter.key);
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => toggleFilter(filter.key)}
                title={isZh ? filter.zhDescription : filter.description}
                className={`min-h-10 rounded-md border px-3 text-sm font-semibold transition ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary"
                }`}
              >
                {isZh ? filter.zhLabel : filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {filteredCities.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="font-bold text-ink">{isZh ? "暂时没有完全匹配的城市" : "No exact city match yet"}</p>
          <p className="mt-2 text-sm text-slate-600">{isZh ? "可以减少一个筛选标签，或者联系我们帮你做人工匹配。" : "Remove one filter or ask us for a manual match."}</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCities.map((city) => {
            const name = isZh ? city.zhName : city.name;
            const province = isZh ? city.zhProvinceName : city.provinceName;
            const summary = isZh ? city.zhSummary : city.summary;
            const tags = isZh ? city.zhLifestyleTags : city.lifestyleTags;
            const badges = cityBadges[city.slug] ?? [];

            return (
              <Link key={city.slug} href={`${prefix}/cities/${city.slug}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-primary hover:shadow-md">
                <div className="relative h-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={city.image} alt={isZh ? city.zhImageAlt : city.imageAlt} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{province}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-bold text-ink">{name}</h2>
                  {badges.length > 0 ? (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {badges.map((badge, index) => (
                        <span key={badge} className="inline-flex min-h-8 items-center rounded-md bg-slate-950/70 px-2.5 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                          {badge}
                          {index < badges.length - 1 ? <span className="ml-2 text-white/60">|</span> : null}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-4 text-sm leading-6 text-slate-600">{summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-sm font-bold text-primary">
                      <MapPinned size={15} aria-hidden="true" />
                      {city.universityCount} {isZh ? "所学校" : "schools"}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{isZh ? city.zhLivingCost : city.livingCost}</span>
                  </div>
                  <div className="mt-5 grid gap-3 text-sm text-slate-600">
                    <p className="flex gap-2"><WalletCards size={16} className="mt-0.5 shrink-0 text-primary" /> {isZh ? city.zhLivingCost : city.livingCost}</p>
                    <p className="flex gap-2"><CloudSun size={16} className="mt-0.5 shrink-0 text-primary" /> {isZh ? city.zhClimate : city.climate}</p>
                    <p className="flex gap-2"><Landmark size={16} className="mt-0.5 shrink-0 text-primary" /> {isZh ? city.zhVisaConvenience : city.visaConvenience}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
