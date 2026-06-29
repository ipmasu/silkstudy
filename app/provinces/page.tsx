import Link from "next/link";
import { MapPinned, Plane, School, Sparkles, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { FallbackImage } from "@/components/common/fallback-image";
import { SectionHeading } from "@/components/common/section-heading";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { provinceShowcases } from "@/lib/province-showcase";
import { buildMetadata } from "@/lib/seo";
import { localeCopy } from "@/lib/i18n/copy";

export const metadata: Metadata = buildMetadata({
  title: "China Province Study Guide",
  description: "Explore Chinese provinces by universities, cities, popular majors, scholarships, travel culture, and study-life context.",
  path: "/provinces"
});

const valueCards: { Icon: LucideIcon; titleEn: string; titleZh: string; descriptionEn: string; descriptionZh: string }[] = [
  {
    Icon: Plane,
    titleEn: "Travel appeal",
    titleZh: "旅行吸引力",
    descriptionEn: "Make the Great Wall, West Lake, Zhangjiajie, Guilin, Dunhuang, and Xiamen coast part of study decisions.",
    descriptionZh: "把长城、西湖、张家界、桂林、敦煌、厦门海岸等目的地变成留学决策的一部分。"
  },
  {
    Icon: Sparkles,
    titleEn: "Culture",
    titleZh: "文化体验",
    descriptionEn: "Show food, rhythm, city personality, local culture, and weekend life beyond rankings.",
    descriptionZh: "让学生看到食物、节奏、城市性格、地方文化和周末生活，而不是只看排名。"
  },
  {
    Icon: School,
    titleEn: "School pathway",
    titleZh: "学校路径",
    descriptionEn: "Every destination links typical schools, the full directory filter, and application consultation.",
    descriptionZh: "每个目的地都连接典型学校、完整目录筛选和申请咨询入口。"
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
  const tx = (en: string, zh: string, vi: string) => localeCopy(locale, en, zh, vi);
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
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{tx("Province destination guide", "省份目的地指南", "Hướng dẫn điểm đến theo tỉnh")}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {tx("Explore China by province, campus life, and travel culture.", "按省份探索中国留学、城市生活与旅行文化。", "Khám phá du học, đời sống và văn hóa du lịch Trung Quốc theo tỉnh.")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {isZh
                ? "SilkStudy 不只是学校目录。我们把高校、城市、文化、旅行、实习和生活成本放在同一个浏览路径里，让海外学生先理解一个地方，再选择学校和专业。"
                : "SilkStudy is not only a university directory. It connects universities, cities, culture, travel, internships, and living cost so students can understand a destination before choosing a school."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/universities`}>{tx("Browse Universities", "浏览大学", "Xem các trường đại học")}</ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{tx("Plan Study", "规划留学", "Lập kế hoạch du học")}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [isZh ? "省级目的地" : "Province-level destinations", destinations.length],
              [isZh ? "目录学校" : "Catalog universities", universities.length],
              [isZh ? "带旅行文化故事" : "With travel context", destinations.length]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/10 p-5">
                <p className="text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={isZh ? "中国目的地" : "China destinations"}
            title={isZh ? "从地图进入真实的留学生活。" : "Enter real study life from the map."}
            description={isZh ? "每个省份页面都会连接典型学校、城市体验、旅行文化、专业方向和咨询路径。" : "Each province page connects typical schools, city experience, travel culture, majors, and the consultation pathway."}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((province) => {
              const name = isZh ? province.zhName : province.name;
              const summary = isZh ? province.zhTravelSummary : province.travelSummary;
              const title = isZh ? province.zhTravelTitle : province.travelTitle;
              const tags = isZh ? province.zhCultureTags : province.cultureTags;
              const imageTopic = isZh ? province.zhImageTopic : province.imageTopic;

              return (
                <Link key={province.slug} href={`${prefix}/provinces/${province.slug}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <div className="relative h-44">
                    <FallbackImage src={province.image} alt={isZh ? province.zhImageAlt : province.imageAlt} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-md border border-white/20 bg-slate-950/55 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {isZh ? "代表画面" : "Visual"}: {imageTopic}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{isZh ? province.zhRegion : province.region}</p>
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
            {isZh ? "需要按预算、专业和城市气质比较省份？" : "Need help comparing provinces by budget, major, and lifestyle?"}
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
