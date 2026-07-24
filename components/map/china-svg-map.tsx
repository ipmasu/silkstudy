"use client";

import { useMemo, useState } from "react";
import chinaMap from "@svg-maps/china";
import {
  ArrowRight,
  Camera,
  CloudSun,
  GraduationCap,
  Landmark,
  MapPin,
  Mountain,
  Plane,
  Sparkles,
  Utensils,
  Users
} from "lucide-react";
import { ProvinceVisual } from "@/components/map/province-visual";
import { getProvinceMapDisplay, getProvinceMapIntroduction } from "@/lib/province-map-introductions";
import { provinceShowcases } from "@/lib/province-showcase";

type SvgMapLocation = {
  id: string;
  path: string;
};

const mapIdByProvinceSlug: Record<string, string> = {
  guangxi: "guangxi-zhuang",
  "inner-mongolia": "nei-mongol",
  ningxia: "ningxia-hui",
  qinghai: "quinghai",
  xinjiang: "xinjiang-uygur",
  macao: "macau"
};

const taiwanPath = "M704 430C724 446 730 482 716 518C704 548 684 558 674 536C664 512 672 472 690 444C694 438 698 434 704 430Z";

const standardLocations = chinaMap.locations as SvgMapLocation[];
const standardMapPaths = new Map<string, string>(standardLocations.map((location) => [location.id, location.path]));

function getMapPath(slug: string, fallbackPath: string) {
  if (slug === "taiwan") return taiwanPath;
  return standardMapPaths.get(mapIdByProvinceSlug[slug] ?? slug) ?? fallbackPath;
}

function getPathCenter(path: string) {
  const values = path.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  const xs: number[] = [];
  const ys: number[] = [];

  for (let index = 0; index < values.length - 1; index += 2) {
    xs.push(values[index]);
    ys.push(values[index + 1]);
  }

  if (xs.length === 0 || ys.length === 0) return { x: 0, y: 0 };

  return {
    x: (Math.min(...xs) + Math.max(...xs)) / 2,
    y: (Math.min(...ys) + Math.max(...ys)) / 2
  };
}

export function ChinaSvgMap({ locale = "en" }: { locale?: string }) {
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;
  const [activeSlug, setActiveSlug] = useState("beijing");

  const activeProvince = useMemo(
    () => provinceShowcases.find((province) => province.slug === activeSlug) ?? provinceShowcases[0],
    [activeSlug]
  );
  const introduction = getProvinceMapIntroduction(activeProvince.slug);
  const display = getProvinceMapDisplay(activeProvince.slug);

  const selectProvince = (slug: string) => {
    setActiveSlug(slug);
  };

  const selectedLabel = isZh ? display.zhName : activeProvince.name;
  const selectedRegion = isZh ? display.zhRegion : activeProvince.region;
  const selectedTags = isZh ? ["气候", "饮食", "历史人文", "景区", "留学生活"] : activeProvince.cultureTags;

  const detailCards = [
    {
      Icon: CloudSun,
      title: isZh ? "气候印象" : "Climate",
      body: isZh ? introduction.zhClimate : introduction.climate
    },
    {
      Icon: Utensils,
      title: isZh ? "饮食性格" : "Food",
      body: isZh ? introduction.zhFood : introduction.food
    },
    {
      Icon: Landmark,
      title: isZh ? "历史人文" : "History & Culture",
      body: isZh ? introduction.zhCulture : introduction.culture
    },
    {
      Icon: Camera,
      title: isZh ? "景区与周末" : "Scenery",
      body: isZh ? introduction.zhScenery : introduction.scenery
    },
    {
      Icon: Users,
      title: isZh ? "适合的学生" : "Student Fit",
      body: isZh ? introduction.zhStudentFit : introduction.studentFit
    }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_440px]">
      <div className="relative min-h-[560px] overflow-hidden rounded-lg border border-slate-200 bg-[#EAF7FF] shadow-sm sm:min-h-[740px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_56%,rgba(0,184,217,0.16),transparent_34%),linear-gradient(135deg,#F8FCFF_0%,#E8F7FF_48%,#FFFFFF_100%)]" />
        <div className="absolute left-4 top-4 z-20 rounded-md border border-white/80 bg-white/95 px-4 py-3 shadow-sm backdrop-blur sm:left-8 sm:top-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {isZh ? "探索中国地图" : "Interactive China Map"}
          </p>
          <h3 className="mt-1 max-w-sm text-xl font-bold text-ink sm:text-2xl">
            {isZh ? "点击省份，查看气候、饮食、历史和留学生活" : "Click a province for climate, food, history, and student life"}
          </h3>
        </div>
        <div className="absolute right-5 top-5 z-20 hidden rounded-md border border-white/80 bg-white/95 px-4 py-3 text-sm font-semibold text-primary shadow-sm backdrop-blur sm:block">
          {provinceShowcases.length} {isZh ? "个省级目的地" : "China destinations"}
        </div>

        <div className="absolute inset-x-3 bottom-8 top-32 sm:inset-x-8 sm:top-28">
          <div className="relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white/80 shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_54%,rgba(0,184,217,0.16),transparent_35%),linear-gradient(135deg,#F8FCFF_0%,#EAF7FF_50%,#FFFFFF_100%)]" />
            <svg
              viewBox={chinaMap.viewBox}
              className="absolute inset-0 h-full w-full p-3 sm:p-8"
              role="img"
              aria-label={isZh ? "包含省份、自治区、直辖市、港澳台的中国互动地图" : "Interactive China map including provinces, autonomous regions, municipalities, Hong Kong, Macao, and Taiwan"}
            >
              <defs>
                <linearGradient id="provinceBase" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#DCEBFF" />
                  <stop offset="100%" stopColor="#E8FBFF" />
                </linearGradient>
                <linearGradient id="provinceActive" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0052CC" />
                  <stop offset="100%" stopColor="#00B8D9" />
                </linearGradient>
                <filter id="markerGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00B8D9" floodOpacity="0.5" />
                </filter>
              </defs>

              {provinceShowcases.map((province) => {
                const isActive = province.slug === activeProvince.slug;
                const label = isZh ? getProvinceMapDisplay(province.slug).zhName : province.name;
                const isCompactRegion = province.slug === "hong-kong" || province.slug === "macao";
                const provincePath = getMapPath(province.slug, province.viewBoxPath);
                const labelPosition = getPathCenter(provincePath);

                return (
                  <g key={province.slug}>
                    <path
                      d={provincePath}
                      className="cursor-pointer transition duration-200 outline-none hover:opacity-100 focus-visible:opacity-100"
                      fill={isActive ? "url(#provinceActive)" : "url(#provinceBase)"}
                      stroke="#FFFFFF"
                      strokeWidth={isCompactRegion ? 2.5 : isActive ? 5 : 3}
                      opacity={isActive ? 1 : 0.88}
                      filter={isActive ? "url(#markerGlow)" : undefined}
                      role="button"
                      tabIndex={0}
                      aria-label={label}
                      onMouseEnter={() => setActiveSlug(province.slug)}
                      onFocus={() => setActiveSlug(province.slug)}
                      onClick={() => selectProvince(province.slug)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          selectProvince(province.slug);
                        }
                      }}
                    />
                    {isActive ? (
                      <>
                        <circle
                          cx={labelPosition.x}
                          cy={labelPosition.y - 8}
                          r={isCompactRegion ? 4 : 6}
                          fill="#FFFFFF"
                          opacity={0.96}
                          pointerEvents="none"
                        />
                        <text
                          x={labelPosition.x}
                          y={labelPosition.y + 10}
                          textAnchor="middle"
                          className="fill-white text-[11px] font-bold drop-shadow"
                          pointerEvents="none"
                        >
                          {label}
                        </text>
                      </>
                    ) : null}
                    <title>{`${label} - ${isZh ? "点击查看省份介绍" : province.travelTitle}`}</title>
                  </g>
                );
              })}
            </svg>
            <a
              href="https://github.com/VictorCazanave/svg-maps/tree/master/packages/china"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 rounded bg-white/90 px-3 py-2 text-[10px] font-semibold text-slate-500 shadow-sm transition hover:text-primary"
            >
              Map data: @svg-maps/china
            </a>
            <div className="absolute bottom-3 left-3 max-w-[70%] rounded bg-white/90 px-3 py-2 text-[11px] font-semibold text-slate-500 shadow-sm">
              {isZh ? "点击地图上的省份，右侧会同步显示这个地方的学习与生活画像。" : "Click any province to update the study and life profile on the right."}
            </div>
          </div>
        </div>
      </div>

      <aside className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="relative h-52">
          <ProvinceVisual
            key={activeProvince.slug}
            src={activeProvince.image}
            alt={isZh ? `${selectedLabel}风物与城市印象` : activeProvince.imageAlt}
            provinceName={selectedLabel}
            topic={isZh ? "城市与风物" : activeProvince.imageTopic}
            region={selectedRegion}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute left-4 top-4 rounded-md border border-white/20 bg-slate-950/60 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            {isZh ? `${selectedLabel}代表画面` : `${selectedLabel} visual anchor`}: {isZh ? "城市与风物" : activeProvince.imageTopic}
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-secondary">
              <Sparkles size={14} aria-hidden="true" />
              {selectedRegion}
            </div>
            <h3 className="mt-2 text-3xl font-bold">{selectedLabel}</h3>
            <p className="mt-1 text-xs text-slate-200">
              {isZh ? "省份画像会随地图选择实时更新" : "The province profile updates with your map selection"}
            </p>
          </div>
        </div>

        <div className="p-6">
          {activeProvince.imageSourceUrl ? (
            <a
              href={activeProvince.imageSourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mb-5 inline-flex text-xs font-semibold text-slate-500 hover:text-primary"
            >
              {isZh ? "图片来源：" : "Image source: "}{activeProvince.imageSourceLabel}
            </a>
          ) : null}
          <div className="flex items-start gap-3">
            <span className="mt-1 rounded-md bg-primary/10 p-2 text-primary">
              <Mountain size={18} aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-bold text-ink">{isZh ? `${selectedLabel}省份速写` : activeProvince.travelTitle}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {isZh ? introduction.zhStudentFit : activeProvince.travelSummary}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <span key={tag} className="rounded-md bg-surface px-3 py-2 text-xs font-semibold text-slate-700">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3">
            {detailCards.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-ink">
                  <Icon size={16} className="text-primary" aria-hidden="true" />
                  {title}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <div className="flex items-center gap-2 text-sm font-bold text-ink">
              <GraduationCap size={17} aria-hidden="true" />
              {isZh ? "代表性学校" : "Representative schools"}
            </div>
            <div className="mt-3 grid gap-3">
              {activeProvince.topSchools.map((school, index) => (
                <a
                  key={school.slug}
                  href={localize(school.href ?? `/universities/${school.slug}`)}
                  className="group flex items-center gap-3 rounded-md border border-slate-200 p-3 transition hover:border-primary hover:bg-surface"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-ink group-hover:text-primary">
                      {isZh ? school.zhName ?? school.name : school.name}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">{isZh ? school.zhNote : school.note}</span>
                  </span>
                  <ArrowRight size={15} className="text-slate-400 group-hover:text-primary" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={localize(`/provinces/${activeProvince.slug}`)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white"
            >
              <MapPin size={16} aria-hidden="true" />
              {isZh ? "查看省份详情" : "Province guide"}
            </a>
            <a
              href={localize("/consultation")}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-ink hover:border-primary hover:text-primary"
            >
              <Plane size={16} aria-hidden="true" />
              {isZh ? "规划留学" : "Plan study"}
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
