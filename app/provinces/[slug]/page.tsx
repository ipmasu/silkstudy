import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, Compass, GraduationCap, MapPin, Mountain, Plane, Sparkles, TrainFront, Users, Utensils, Wallet } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { FallbackImage } from "@/components/common/fallback-image";
import { SectionHeading } from "@/components/common/section-heading";
import { UniversityCard } from "@/components/universities/university-card";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { getProvinceInsight } from "@/lib/province-insights";
import { getProvinceShowcase } from "@/lib/province-showcase";
import { getProvinceTourismGuide } from "@/lib/province-tourism-guides";
import { buildMetadata } from "@/lib/seo";
import { getTravelEditorialNotes } from "@/lib/travel-content-profiles";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const province = getProvinceShowcase(slug);

  if (!province) return {};

  return buildMetadata({
    title: `Study in ${province.name}`,
    description: `Study in ${province.name}, China. Compare universities, cities, living costs, travel culture, majors, scholarships, and application planning with SilkStudy.`,
    path: `/provinces/${province.slug}`
  });
}

function topMajors(universities: Awaited<ReturnType<typeof getAllUniversitiesView>>) {
  const counts = new Map<string, number>();

  universities.forEach((university) => {
    university.majors.forEach((major) => counts.set(major, (counts.get(major) ?? 0) + 1));
  });

  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([major]) => major);
}

export default async function ProvincePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const tx = (en: string, zh: string, vi: string) => isZh ? zh : isVi ? vi : en;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const province = getProvinceShowcase(slug);

  if (!province) notFound();

  const allUniversities = await getAllUniversitiesView();
  const provinceUniversities = allUniversities
    .filter((university) => university.provinceSlug === province.slug)
    .sort((a, b) => a.qsRanking - b.qsRanking || a.name.localeCompare(b.name));
  const cityNames = [...new Set(provinceUniversities.map((university) => university.location).filter(Boolean))];
  const majors = topMajors(provinceUniversities);
  const name = isZh ? province.zhName : province.name;
  const travelTitle = isZh ? province.zhTravelTitle : province.travelTitle;
  const travelSummary = isZh ? province.zhTravelSummary : province.travelSummary;
  const cultureTags = isZh ? province.zhCultureTags : province.cultureTags;
  const imageTopic = isZh ? province.zhImageTopic : province.imageTopic;
  const insight = getProvinceInsight(province);
  const travelSpots = isZh ? insight.zhTravelSpots : insight.travelSpots;
  const internshipIndustries = isZh ? insight.zhInternshipIndustries : insight.internshipIndustries;
  const travelEditorialNotes = getTravelEditorialNotes(province.slug);
  const tourismGuide = getProvinceTourismGuide(province.slug);

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{isZh ? "省份留学目的地" : "Province study destination"}</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">{isZh ? `在${name}留学` : `Study in ${name}`}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{travelSummary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cultureTags.map((tag) => (
                <span key={tag} className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/universities?province=${province.slug}`}>{isZh ? "查看本省学校" : "View Province Schools"}</ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "规划申请" : "Plan Application"}</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <div className="relative h-72">
              <FallbackImage src={province.image} alt={isZh ? province.zhImageAlt : province.imageAlt} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute left-5 top-5 rounded-md border border-white/20 bg-slate-950/60 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                {isZh ? "代表画面" : "Visual anchor"}: {imageTopic}
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-secondary">
                  <Mountain size={16} aria-hidden="true" />
                  {isZh ? province.zhRegion : province.region}
                </p>
                <p className="mt-2 text-2xl font-bold">{travelTitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {[
                [provinceUniversities.length, isZh ? "所大学" : "universities"],
                [cityNames.length || 1, isZh ? "座城市" : "cities"],
                [majors.length || 3, isZh ? "热门专业" : "major areas"]
              ].map(([value, label]) => (
                <div key={String(label)} className="bg-slate-950/60 p-4">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-xs text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:px-8">
          <aside className="h-fit rounded-lg border border-slate-200 p-5 lg:sticky lg:top-24">
            <p className="flex items-center gap-2 font-bold text-ink">
              <Sparkles size={18} className="text-primary" aria-hidden="true" />
              {isZh ? "快速判断" : "Quick read"}
            </p>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-600">
              <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-primary" /> {cityNames.length > 0 ? cityNames.join(", ") : (isZh ? "城市资料待进一步核验" : "City data pending verification")}</p>
              <p className="flex gap-3"><Utensils size={18} className="mt-0.5 shrink-0 text-primary" /> {isZh ? "适合把周末旅行、饮食文化和校园生活一起考虑。" : "Good for comparing weekend travel, food culture, and campus life together."}</p>
              <p className="flex gap-3"><BriefcaseBusiness size={18} className="mt-0.5 shrink-0 text-primary" /> {internshipIndustries.slice(0, 2).join(", ")}</p>
              <p className="flex gap-3"><Wallet size={18} className="mt-0.5 shrink-0 text-primary" /> {isZh ? insight.zhBudgetLevel : insight.budgetLevel}</p>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <ButtonLink href={`${prefix}/consultation`}>{isZh ? "获取选校建议" : "Get Shortlist Advice"}</ButtonLink>
            </div>
          </aside>

          <div>
            <SectionHeading
              eyebrow={isZh ? "典型学校" : "Typical schools"}
              title={isZh ? `${name}前三代表性学校` : `Representative top schools in ${province.name}`}
              description={isZh ? "这里优先展示该省最适合国际学生进一步了解的代表性高校。排名与项目细节会继续通过 CMS 和官方来源核验。" : "These are representative schools worth opening first. Rankings and program details continue to be verified through CMS and official sources."}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {province.topSchools.map((school, index) => (
                <Link key={school.slug} href={`${prefix}${school.href ?? `/universities/${school.slug}`}`} className="rounded-lg border border-slate-200 p-5 transition hover:border-primary hover:shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">{index + 1}</span>
                  <p className="mt-4 text-lg font-bold text-ink">{isZh ? school.zhName ?? school.name : school.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? school.zhNote : school.note}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {isZh ? "查看" : "Open"}
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "旅行与文化" : "Travel and culture"}
                title={travelTitle}
                description={travelSummary}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {cultureTags.map((tag) => (
                  <div key={tag} className="rounded-lg border border-slate-200 bg-surface p-5">
                    <Plane className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 font-bold text-ink">{tag}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {isZh ? "把这个体验放进留学路线里，能帮助学生理解城市节奏、周末生活和文化记忆点。" : "Use this experience inside the study route to understand city rhythm, weekend life, and cultural memory points."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {travelEditorialNotes.length > 0 ? (
              <div className="mt-14">
                <SectionHeading
                  eyebrow={isZh ? "旅行灵感素材" : "Editorial travel notes"}
                  title={isZh ? "把平台素材改写成学生能理解的目的地理由" : "Turn destination sources into student-friendly reasons to visit"}
                  description={isZh ? "这里展示的是 SilkStudy 的编辑摘要，不直接转载去哪儿、小红书或其他平台原文。" : "These are SilkStudy editorial summaries, not direct republication of Qunar, Xiaohongshu, or other platform text."}
                />
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {travelEditorialNotes.map((note) => (
                    <article key={note.title} className="rounded-lg border border-slate-200 bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-primary">{isZh ? note.zhSourceType : note.sourceType}</p>
                      <h3 className="mt-3 text-xl font-bold text-ink">{isZh ? note.zhTitle : note.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{isZh ? note.zhSummary : note.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(isZh ? note.zhHighlights : note.highlights).map((highlight) => (
                          <span key={highlight} className="rounded-md bg-blue-50 px-3 py-2 text-xs font-semibold text-primary">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {tourismGuide ? (
              <div className="mt-14">
                <SectionHeading
                  eyebrow={tx("Province travel guide", "省份深度旅行指南", "Cẩm nang du lịch theo tỉnh")}
                  title={isZh ? tourismGuide.zhTitle : isVi ? tourismGuide.viTitle : tourismGuide.title}
                  description={isZh ? tourismGuide.zhOverview : isVi ? tourismGuide.viOverview : tourismGuide.overview}
                />
                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_320px]">
                  <div className="grid gap-4 md:grid-cols-3">
                    {tourismGuide.highlights.map((highlight) => (
                      <article key={highlight.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                        <Plane className="text-primary" size={22} aria-hidden="true" />
                        <h3 className="mt-4 text-lg font-bold text-ink">{isZh ? highlight.zhName : isVi ? highlight.viName : highlight.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {isZh ? highlight.zhDescription : isVi ? highlight.viDescription : highlight.description}
                        </p>
                        {highlight.sourceUrl ? (
                          <a href={highlight.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-blue-700">
                            {tx("Source", "资料来源", "Nguồn")}
                            <ArrowRight size={13} aria-hidden="true" />
                          </a>
                        ) : null}
                      </article>
                    ))}
                  </div>
                  <aside className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white">
                    <div className="flex items-center gap-3">
                      <Compass size={20} className="text-secondary" aria-hidden="true" />
                      <p className="font-bold">{tx("Student travel routes", "学生旅行路线", "Tuyến trải nghiệm cho sinh viên")}</p>
                    </div>
                    <div className="mt-4 grid gap-3">
                      {(isZh ? tourismGuide.zhRoutes : isVi ? tourismGuide.viRoutes : tourismGuide.routes).map((route) => (
                        <p key={route} className="rounded-md border border-white/10 bg-white/10 p-3 text-sm leading-6 text-slate-100">{route}</p>
                      ))}
                    </div>
                    <div className="mt-5 border-t border-white/10 pt-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-secondary">{tx("Why it helps study choice", "为什么影响选校", "Vì sao ảnh hưởng chọn trường")}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        {isZh ? tourismGuide.zhStudentAngle : isVi ? tourismGuide.viStudentAngle : tourismGuide.studentAngle}
                      </p>
                    </div>
                    {tourismGuide.sourceLinks.length > 0 ? (
                      <div className="mt-5 border-t border-white/10 pt-5">
                        <p className="text-xs font-bold uppercase tracking-wide text-secondary">{tx("Reference links", "参考链接", "Liên kết tham khảo")}</p>
                        <div className="mt-3 grid gap-2">
                          {tourismGuide.sourceLinks.map((source) => (
                            <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-secondary">
                              {source.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </aside>
                </div>
              </div>
            ) : null}

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "生活、旅行与职业" : "Life, travel, and career"}
                title={isZh ? `${name}为什么值得认真考虑` : `Why ${province.name} deserves a closer look`}
                description={isZh ? "把生活成本、周末旅行、城市流动和实习产业放在一起看，学生会更容易判断这里是否适合自己。" : "A destination becomes clearer when lifestyle, weekend travel, mobility, and internship sectors are compared together."}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-blue-50 p-2 text-primary">
                      <Users size={19} aria-hidden="true" />
                    </span>
                    <p className="font-bold text-ink">{isZh ? "适合学生" : "Best-fit students"}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{isZh ? insight.zhStudentFit : insight.studentFit}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-cyan-50 p-2 text-cyan-700">
                      <Utensils size={19} aria-hidden="true" />
                    </span>
                    <p className="font-bold text-ink">{isZh ? "城市生活" : "Lifestyle"}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{isZh ? insight.zhLifestyle : insight.lifestyle}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-emerald-50 p-2 text-emerald-700">
                      <BriefcaseBusiness size={19} aria-hidden="true" />
                    </span>
                    <p className="font-bold text-ink">{isZh ? "实习就业方向" : "Internship sectors"}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {internshipIndustries.map((industry) => (
                      <span key={industry} className="rounded-md bg-surface px-3 py-2 text-xs font-semibold text-slate-700">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-amber-50 p-2 text-amber-700">
                      <TrainFront size={19} aria-hidden="true" />
                    </span>
                    <p className="font-bold text-ink">{isZh ? "交通与探索" : "Mobility"}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{isZh ? insight.zhMobility : insight.mobility}</p>
                </div>
              </div>
              <div className="mt-5 rounded-lg border border-slate-200 bg-slate-950 p-5 text-white">
                <div className="flex items-center gap-3">
                  <Compass size={20} className="text-secondary" aria-hidden="true" />
                  <p className="font-bold">{isZh ? "代表旅行线索" : "Travel signals"}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {travelSpots.map((spot) => (
                    <span key={spot} className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100">
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "专业方向" : "Major directions"}
                title={isZh ? "本省常见专业入口" : "Common program directions in this province"}
                description={isZh ? "根据当前高校目录自动汇总，后续会接入更精确的项目层级筛选。" : "Automatically summarized from the current university catalog; more precise program-level filtering will be added later."}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {(majors.length > 0 ? majors : ["Engineering", "Business", "Chinese Language"]).map((major) => (
                  <Link key={major} href={`${prefix}/universities?province=${province.slug}&major=${major.toLowerCase().replaceAll(" ", "-")}`} className="rounded-md bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-100">
                    {displayMajor(major, locale)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "学校目录" : "School catalog"}
                title={isZh ? `${name}学校列表` : `Universities in ${province.name}`}
                description={isZh ? "以下来自当前国际学生高校目录。基础记录会继续补充官网、学费、评论、生活和实习信息。" : "These come from the current international-student university catalog. Baseline records will continue to receive website, tuition, reviews, living, and internship details."}
              />
              {provinceUniversities.length > 0 ? (
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {provinceUniversities.slice(0, 12).map((university) => (
                    <UniversityCard key={university.slug} university={university} />
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-lg border border-slate-200 bg-surface p-8 text-center">
                  <GraduationCap className="mx-auto text-primary" size={30} aria-hidden="true" />
                  <p className="mt-4 font-bold text-ink">{isZh ? "学校资料待核验补全" : "School data pending verification"}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    {isZh ? "这个省份先保留为真实地图目的地，后续会补入核验过的国际学生项目。" : "This province remains as a real map destination while verified international-student programs are added."}
                  </p>
                </div>
              )}
              {provinceUniversities.length > 12 ? (
                <div className="mt-8">
                  <ButtonLink href={`${prefix}/universities?province=${province.slug}`}>{isZh ? "查看全部学校" : "View All Schools"}</ButtonLink>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">{isZh ? `想知道${name}是否适合你？` : `Want to know if ${province.name} fits you?`}</h2>
            <p className="mt-3 max-w-2xl text-blue-100">
              {isZh ? "告诉我们你的预算、专业、语言情况和理想城市，我们会把学校、城市生活和申请路径整理成可执行方案。" : "Share your budget, major, language profile, and preferred city. We will turn schools, city life, and application steps into a practical plan."}
            </p>
          </div>
          <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "免费咨询" : "Free Consultation"}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
