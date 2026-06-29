import Link from "next/link";
import { notFound } from "next/navigation";
import { Banknote, BriefcaseBusiness, CheckCircle2, GraduationCap, Languages, MapPin, School, Sparkles, type LucideIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { UniversityCard } from "@/components/universities/university-card";
import { getCityDestinations } from "@/lib/city-destinations";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { buildDefaultMajorGuide, getMajorGuide, slugifyMajor } from "@/lib/major-guides";
import { provinceShowcases } from "@/lib/province-showcase";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

function applicationCards(isZh: boolean): { Icon: LucideIcon; title: string; body: string }[] {
  return [
    {
      Icon: School,
      title: isZh ? "确认学校层级" : "Confirm school tier",
      body: isZh ? "先确定冲刺、匹配和保底学校。" : "Separate reach, match, and safer schools."
    },
    {
      Icon: Languages,
      title: isZh ? "确认语言路线" : "Confirm language route",
      body: isZh ? "区分英文授课、中文授课和语言预科。" : "Compare English-taught, Chinese-taught, and prep routes."
    },
    {
      Icon: Banknote,
      title: isZh ? "确认预算奖学金" : "Budget and scholarship",
      body: isZh ? "比较学费、住宿和奖学金可能性。" : "Compare tuition, housing, and scholarship options."
    },
    {
      Icon: GraduationCap,
      title: isZh ? "准备申请材料" : "Prepare documents",
      body: isZh ? "整理成绩单、推荐信、学习计划和语言证明。" : "Prepare transcripts, recommendations, study plan, and language proof."
    }
  ];
}

async function getMajorFromCatalog(slug: string) {
  const universities = await getAllUniversitiesView();
  const majors = [...new Set(universities.flatMap((university) => university.majors))];
  return majors.find((major) => slugifyMajor(major) === slug);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const major = await getMajorFromCatalog(slug);

  if (!major) return {};

  return buildMetadata({
    title: `${major} Programs in China`,
    description: `Compare Chinese universities offering ${major} programs, scholarships, tuition, city fit, and application guidance.`,
    path: `/majors/${slug}`
  });
}

export default async function MajorPage({ params }: { params: Params }) {
  const { slug } = await params;
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const major = await getMajorFromCatalog(slug);

  if (!major) notFound();

  const universities = await getAllUniversitiesView();
  const relatedUniversities = universities
    .filter((university) => university.majors.includes(major))
    .sort((a, b) => a.qsRanking - b.qsRanking || a.name.localeCompare(b.name));
  const guide = getMajorGuide(major) ?? buildDefaultMajorGuide(major);
  const display = displayMajor(major, locale);
  const cityDestinations = getCityDestinations(universities);
  const cityStats = cityDestinations
    .map((city) => ({
      ...city,
      count: relatedUniversities.filter((university) => university.citySlug === city.slug).length
    }))
    .filter((city) => city.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, 6);
  const provinceStats = provinceShowcases
    .map((province) => ({
      ...province,
      count: relatedUniversities.filter((university) => university.provinceSlug === province.slug).length
    }))
    .filter((province) => province.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, 6);

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{isZh ? "专业指南" : "Major guide"}</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">{display}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{isZh ? guide.zhSummary : guide.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/universities?major=${slugifyMajor(major)}`}>{isZh ? "查看相关大学" : "View Related Schools"}</ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "申请专业匹配" : "Request Major Match"}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [isZh ? "相关大学" : "Related schools", relatedUniversities.length],
              [isZh ? "覆盖城市" : "Cities", cityStats.length],
              [isZh ? "覆盖省份" : "Provinces", provinceStats.length]
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
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8">
          <aside className="h-fit rounded-lg border border-slate-200 p-5 lg:sticky lg:top-24">
            <p className="font-bold text-ink">{isZh ? "申请判断" : "Admissions signals"}</p>
            <div className="mt-5 grid gap-3">
              {(isZh ? guide.zhAdmissionsSignals : guide.admissionsSignals).map((signal) => (
                <p key={signal} className="flex gap-2 text-sm leading-6 text-slate-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  {signal}
                </p>
              ))}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <ButtonLink href={`${prefix}/consultation`}>{isZh ? "评估申请条件" : "Assess My Fit"}</ButtonLink>
            </div>
          </aside>

          <div>
            <SectionHeading
              eyebrow={isZh ? "学校目录" : "School catalog"}
              title={isZh ? `${display} 相关大学` : `Universities for ${major}`}
              description={isZh ? "以下学校来自当前国际学生高校目录。打开学校页可查看城市生活、申请入口和数据可信状态。" : "These schools come from the international-student university catalog. Open a profile for city life, application entry, and data confidence."}
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedUniversities.slice(0, 12).map((university) => (
                <UniversityCard key={university.slug} university={university} />
              ))}
            </div>
            {relatedUniversities.length > 12 ? (
              <div className="mt-8">
                <ButtonLink href={`${prefix}/universities?major=${slugifyMajor(major)}`}>{isZh ? "查看全部相关大学" : "View All Related Schools"}</ButtonLink>
              </div>
            ) : null}

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "城市匹配" : "City fit"}
                title={isZh ? `适合学习 ${display} 的城市` : `Cities that fit ${major}`}
                description={isZh ? "城市会影响实习、生活成本、语言环境和行业资源。" : "City choice affects internships, living cost, language environment, and industry resources."}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cityStats.map((city) => (
                  <Link key={city.slug} href={`${prefix}/cities/${city.slug}`} className="rounded-lg border border-slate-200 p-5 transition hover:border-primary hover:shadow-sm">
                    <MapPin className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 text-lg font-bold text-ink">{isZh ? city.zhName : city.name}</p>
                    <p className="mt-1 text-sm font-semibold text-primary">{isZh ? city.zhProvinceName : city.provinceName}</p>
                    <p className="mt-3 text-sm text-slate-600">{city.count} {isZh ? "所相关大学" : "related schools"}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "省份方向" : "Province fit"}
                title={isZh ? "按省份比较学校密度和目的地吸引力" : "Compare school density and destination appeal by province"}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {provinceStats.map((province) => (
                  <Link key={province.slug} href={`${prefix}/provinces/${province.slug}`} className="rounded-lg border border-slate-200 p-5 transition hover:border-primary hover:shadow-sm">
                    <Sparkles className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 text-lg font-bold text-ink">{isZh ? province.zhName : province.name}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? province.zhTravelSummary : province.travelSummary}</p>
                    <p className="mt-3 text-sm font-semibold text-primary">{province.count} {isZh ? "所相关大学" : "related schools"}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "职业方向" : "Career pathways"}
                title={isZh ? `${display} 的常见就业方向` : `Common career paths for ${major}`}
                description={isZh ? "职业方向需要结合城市产业、语言能力、实习资源和回国规划判断。" : "Career planning should combine city industries, language ability, internship access, and home-country plans."}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {(isZh ? guide.zhCareerPaths : guide.careerPaths).map((path) => (
                  <div key={path} className="rounded-lg border border-slate-200 bg-surface p-5">
                    <BriefcaseBusiness className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 font-bold text-ink">{path}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {isZh ? "建议结合目标城市、学校合作资源和语言能力评估可行性。" : "Evaluate feasibility through target city, university partnerships, and language ability."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "申请路径" : "Application path"}
                title={isZh ? "从专业到申请材料" : "From major choice to application documents"}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {applicationCards(isZh).map(({ Icon, title, body }) => (
                  <div key={title} className="rounded-lg border border-slate-200 p-5">
                    <Icon className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 font-bold text-ink">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">{isZh ? `想知道 ${display} 是否适合你？` : `Want to know if ${major} fits you?`}</h2>
            <p className="mt-3 max-w-2xl text-blue-100">
              {isZh ? "我们会结合成绩、语言、预算、城市偏好和职业方向，帮你生成可执行选校清单。" : "We combine grades, language level, budget, city preference, and career goals into an actionable shortlist."}
            </p>
          </div>
          <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "免费咨询" : "Free Consultation"}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
