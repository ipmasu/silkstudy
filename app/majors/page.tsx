import Link from "next/link";
import { BookOpenCheck, BriefcaseBusiness, GraduationCap, Languages, MapPin, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { buildDefaultMajorGuide, getMajorGuide, slugifyMajor } from "@/lib/major-guides";
import { buildMetadata } from "@/lib/seo";
import { localeCopy } from "@/lib/i18n/copy";

export const metadata: Metadata = buildMetadata({
  title: "Popular Majors in China",
  description: "Explore popular study majors in China and compare universities, cities, scholarships, requirements, and career pathways.",
  path: "/majors"
});

const valueCards: { Icon: LucideIcon; titleEn: string; titleZh: string; descriptionEn: string; descriptionZh: string }[] = [
  {
    Icon: GraduationCap,
    titleEn: "School fit",
    titleZh: "学校匹配",
    descriptionEn: "The same major can differ greatly by labs, faculty, and city resources.",
    descriptionZh: "同一个专业在不同学校的实验室、师资和城市资源差异很大。"
  },
  {
    Icon: Languages,
    titleEn: "Language route",
    titleZh: "语言路径",
    descriptionEn: "English-taught, Chinese-taught, and language-prep routes affect admission and long-term development.",
    descriptionZh: "英文授课、中文授课和语言预科会影响录取和长期发展。"
  },
  {
    Icon: BriefcaseBusiness,
    titleEn: "Career path",
    titleZh: "职业方向",
    descriptionEn: "Major choice should be judged with internship city, industry access, and home-country plans.",
    descriptionZh: "专业选择要和实习城市、行业机会和回国规划一起判断。"
  }
];

export default async function MajorsPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const tx = (en: string, zh: string, vi: string) => localeCopy(locale, en, zh, vi);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const universities = await getAllUniversitiesView();
  const catalogMajors = [...new Set(universities.flatMap((university) => university.majors))]
    .sort((a, b) => displayMajor(a, locale).localeCompare(displayMajor(b, locale)));

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{tx("Major finder", "专业查找", "Tìm ngành học")}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {tx("Choose Chinese universities, cities, and application pathways by major.", "按专业方向选择中国大学、城市和申请路径。", "Chọn trường đại học, thành phố và lộ trình đăng ký theo ngành học.")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {isZh
                ? "专业决定学校筛选、城市选择、语言要求、奖学金机会和未来实习就业。这里把完整高校目录与专业决策维度连接起来。"
                : "A major shapes school choice, city fit, language route, scholarship options, and future internships. This section connects the full university catalog with major decisions."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/universities`}>{tx("Browse Universities", "浏览大学", "Xem các trường đại học")}</ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{tx("Request Major Match", "申请专业匹配", "Nhận tư vấn ngành học")}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [isZh ? "专业方向" : "Major directions", catalogMajors.length],
              [isZh ? "目录学校" : "Catalog schools", universities.length],
              [isZh ? "可筛选城市" : "Filterable cities", new Set(universities.map((university) => university.citySlug)).size]
            ].map(([label, value]) => (
              <div key={String(label)} className="rounded-lg border border-white/10 bg-white/10 p-5">
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
            eyebrow={tx("Popular majors", "热门专业", "Ngành học phổ biến")}
            title={tx("Start from the major, not only rankings.", "从专业进入选校，而不是只看排名。", "Bắt đầu từ ngành học, không chỉ từ xếp hạng.")}
            description={isZh ? "每个专业页都会展示相关学校、适合城市、申请要求、奖学金判断和职业路径。" : "Each major page shows relevant schools, suitable cities, admissions signals, scholarship judgment, and career pathways."}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {catalogMajors.map((major) => {
              const guide = getMajorGuide(major) ?? buildDefaultMajorGuide(major);
              const count = universities.filter((university) => university.majors.includes(major)).length;
              const cityCount = new Set(universities.filter((university) => university.majors.includes(major)).map((university) => university.citySlug)).size;

              return (
                <Link key={major} href={`${prefix}/majors/${slugifyMajor(major)}`} className="rounded-lg border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-ink">{displayMajor(major, locale)}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? guide.zhSummary : guide.summary}</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
                      <BookOpenCheck size={20} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <span className="rounded-md bg-surface p-3 font-semibold text-ink">{count} {isZh ? "所大学" : "schools"}</span>
                    <span className="rounded-md bg-surface p-3 font-semibold text-ink">{cityCount} {isZh ? "座城市" : "cities"}</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(isZh ? guide.zhCareerPaths : guide.careerPaths).slice(0, 3).map((path) => (
                      <span key={path} className="rounded bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-700">{path}</span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {valueCards.map(({ Icon, titleEn, titleZh, descriptionEn, descriptionZh }) => (
            <div key={titleEn} className="rounded-lg border border-slate-200 bg-white p-6">
              <Icon className="text-primary" size={24} aria-hidden="true" />
              <p className="mt-4 text-lg font-bold text-ink">{isZh ? titleZh : titleEn}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? descriptionZh : descriptionEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="flex items-center gap-3 text-xl font-bold">
            <MapPin size={24} aria-hidden="true" />
            {isZh ? "想按成绩、预算和城市偏好匹配专业？" : "Want majors matched to grades, budget, and city preference?"}
          </p>
          <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "申请专业匹配" : "Request Major Match"}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
