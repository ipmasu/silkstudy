import Link from "next/link";
import { Compass, MapPinned, School, Sparkles, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { FallbackImage } from "@/components/common/fallback-image";
import { SectionHeading } from "@/components/common/section-heading";
import { ChinaSvgMap } from "@/components/map/china-svg-map";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { getProvinceMapDisplay, getProvinceMapIntroduction } from "@/lib/province-map-introductions";
import { provinceShowcases } from "@/lib/province-showcase";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "探索中国地图",
  description: "通过交互式中国地图了解各省份的气候、饮食、历史人文、景区、大学资源和留学生活。",
  path: "/provinces"
});

const valueCards: { Icon: LucideIcon; titleEn: string; titleZh: string; descriptionEn: string; descriptionZh: string }[] = [
  {
    Icon: Compass,
    titleEn: "Understand the place first",
    titleZh: "先理解地方，再选择学校",
    descriptionEn: "Students can compare climate, food, culture, weekend routes, and city personality before choosing universities.",
    descriptionZh: "留学生可以先比较气候、饮食、文化、周末线路和城市气质，再决定学校。"
  },
  {
    Icon: Sparkles,
    titleEn: "See China as many Chinas",
    titleZh: "看到不止一种中国",
    descriptionEn: "The map shows why Beijing, Yunnan, Guangdong, Sichuan, Xinjiang, and the coast feel completely different.",
    descriptionZh: "地图会让学生明白：北京、云南、广东、四川、新疆和沿海地区，是完全不同的中国。"
  },
  {
    Icon: School,
    titleEn: "Connect life with universities",
    titleZh: "把生活体验和大学资源连起来",
    descriptionEn: "Each region links representative schools, university filters, and consultation pathways for practical decisions.",
    descriptionZh: "每个省份都连接代表学校、大学筛选和咨询入口，让感性兴趣变成真实申请路径。"
  }
];

function topMajorsForProvince(universities: Awaited<ReturnType<typeof getAllUniversitiesView>>, provinceSlug: string) {
  const counts = new Map<string, number>();

  universities
    .filter((university) => university.provinceSlug === provinceSlug)
    .forEach((university) => {
      university.majors.forEach((major) => counts.set(major, (counts.get(major) ?? 0) + 1));
    });

  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([major]) => major);
}

export default async function ProvincesPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const universities = await getAllUniversitiesView();

  const destinations = provinceShowcases.map((province) => {
    const provinceUniversities = universities.filter((university) => university.provinceSlug === province.slug);
    const cities = new Set(provinceUniversities.map((university) => university.location).filter(Boolean));
    const majors = topMajorsForProvince(universities, province.slug);

    return {
      ...province,
      universityCount: provinceUniversities.length,
      cityCount: cities.size,
      majors
    };
  });

  return (
    <main className="bg-[#f7fbff]">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              {isZh ? "探索中国地图" : "Explore China Map"}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              {isZh ? "点开一张地图，先读懂中国的气候、味道和人文。" : "Open the map and understand China's climates, flavors, and cultures first."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {isZh
                ? "中国不是一个单一答案。北方有雪，西南有山，东南有海，中部有江湖，西北有丝路。对留学生来说，选学校之前先理解省份，才能找到真正适合自己的生活半径。"
                : "China is not one single answer. Snow in the north, mountains in the southwest, sea in the southeast, rivers in the center, and Silk Road landscapes in the northwest all shape student life."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#china-map">{isZh ? "打开地图" : "Open Map"}</ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "让我们帮你匹配" : "Get Matched"}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [isZh ? "省级目的地" : "Province-level destinations", destinations.length],
              [isZh ? "目录大学" : "Catalog universities", universities.length],
              [isZh ? "地图可点击介绍" : "Clickable map profiles", destinations.length]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/10 p-5">
                <p className="text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="china-map" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow={isZh ? "交互式地图" : "Interactive Map"}
          title={isZh ? "点击每个省份，查看它适合怎样的留学生活。" : "Click each province to see what student life feels like there."}
          description={isZh ? "每个省份都补充了气候、饮食、历史人文、景区和适合学生类型。你不用一次读完中国，可以先从地图上找到让你心动的地方。" : "Each province includes climate, food, culture, scenery, and student-fit notes so students can start from places that feel right."}
        />
        <div className="mt-8">
          <ChinaSvgMap locale={locale} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={isZh ? "省份入口" : "Province Guides"}
            title={isZh ? "从地图进入，也可以从卡片慢慢比较。" : "Enter from the map, or compare by cards."}
            description={isZh ? "卡片保留代表画面、学校数量和热门专业方向，适合做第二轮筛选。" : "Cards keep representative images, school counts, and popular major signals for the second round of comparison."}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((province) => {
              const display = getProvinceMapDisplay(province.slug);
              const introduction = getProvinceMapIntroduction(province.slug);
              const name = isZh ? display.zhName : province.name;
              const summary = isZh ? introduction.zhStudentFit : province.travelSummary;
              const title = isZh ? "气候、风物与留学生活" : province.travelTitle;
              const tags = isZh ? ["气候", "饮食", "历史人文"] : province.cultureTags;
              const imageTopic = isZh ? "城市与风物" : province.imageTopic;

              return (
                <Link key={province.slug} href={`${prefix}/provinces/${province.slug}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <div className="relative h-44">
                    <FallbackImage src={province.image} alt={isZh ? `${name}城市与风物印象` : province.imageAlt} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-md border border-white/20 bg-slate-950/55 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {isZh ? "代表画面" : "Visual"}: {imageTopic}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{isZh ? display.zhRegion : province.region}</p>
                      <h2 className="mt-1 text-2xl font-bold">{name}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-ink">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
                        <MapPinned size={19} aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <span className="rounded-md bg-surface p-3 font-semibold text-ink">{province.universityCount} {isZh ? "所大学" : "universities"}</span>
                      <span className="rounded-md bg-surface p-3 font-semibold text-ink">{province.cityCount || 1} {isZh ? "座城市" : "cities"}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(province.majors.length > 0 ? province.majors : tags).slice(0, 3).map((item) => (
                        <span key={item} className="rounded bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-700">
                          {province.majors.includes(item) ? displayMajor(item, locale) : item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="flex items-center gap-3 text-xl font-bold text-ink">
            <School className="text-primary" size={24} aria-hidden="true" />
            {isZh ? "不确定哪个省份更适合你的预算、专业和性格？" : "Not sure which province fits your budget, major, and personality?"}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`${prefix}/consultation`}>{isZh ? "免费咨询" : "Free Consultation"}</ButtonLink>
            <ButtonLink href={`${prefix}/universities`} variant="secondary">{isZh ? "查看学校" : "View Schools"}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {valueCards.map(({ Icon, titleEn, titleZh, descriptionEn, descriptionZh }) => (
            <div key={titleEn} className="rounded-lg border border-slate-200 p-6">
              <Icon className="text-primary" size={24} aria-hidden="true" />
              <p className="mt-4 text-lg font-bold text-ink">{isZh ? titleZh : titleEn}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? descriptionZh : descriptionEn}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
