import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import {
  Banknote,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Database,
  ExternalLink,
  GraduationCap,
  Home,
  Languages,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
  Utensils,
  type LucideIcon
} from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { LiveUniversityReviews } from "@/components/reviews/live-university-reviews";
import { UniversityLogo } from "@/components/universities/university-logo";
import { UniversityGateVisual } from "@/components/universities/university-gate-visual";
import { internationalUniversitySources } from "@/lib/catalog/international-university-directory";
import { getCityDestination } from "@/lib/city-destinations";
import { getPublishedUniversityTravelNotes } from "@/lib/content/university-travel-imports";
import { getAllUniversitiesView, getUniversityCatalogView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { localeCopy } from "@/lib/i18n/copy";
import { localizeUniversityContent } from "@/lib/i18n/university-content";
import { getUniversityMedia } from "@/lib/media/university-media";
import { getProvinceShowcase } from "@/lib/province-showcase";
import { getScholarshipDetails } from "@/lib/scholarship-details";
import { breadcrumbJsonLd, buildMetadata, universityJsonLd } from "@/lib/seo";
import type { University } from "@/lib/site-data";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const university = await getUniversityCatalogView(slug);

  if (!university) return {};

  return buildMetadata({
    title: `${university.name} International Students`,
    description: `${university.name}${university.chineseName ? ` (${university.chineseName})` : ""} in ${university.location}. Compare programs, tuition, scholarships, application requirements, campus life, and free SilkStudy consultation.`,
    path: `/universities/${university.slug}`
  });
}

function isVerifiedRanking(university: University) {
  return university.qsRanking > 0 && university.qsRanking < 900;
}

function getDataStatus(university: University) {
  const checks = [
    isVerifiedRanking(university),
    university.foundedYear > 0,
    university.website !== "#",
    !university.tuition.toLowerCase().includes("contact"),
    university.reviews.length > 0
  ];
  const score = checks.filter(Boolean).length;

  if (score >= 4) return { score, labelEn: "Curated profile", labelZh: "已精选资料", tone: "emerald" };
  if (score >= 2) return { score, labelEn: "Partially verified", labelZh: "部分核验", tone: "blue" };
  return { score, labelEn: "Baseline directory record", labelZh: "目录基线记录", tone: "amber" };
}

function requirements(university: University, isZh: boolean) {
  const profile = university.applicationProfile;

  if (profile) {
    return [
      [isZh ? "申请资格" : "Eligibility", profile.eligibility.join(" ")],
      [isZh ? "语言要求" : "Language", profile.languageRequirements.join(" ")],
      [isZh ? "申请流程" : "Application path", profile.applicationSteps.join(" ")],
      [isZh ? "项目说明" : "Program notes", profile.programNotes.join(" ")]
    ];
  }

  return isZh
    ? [
        ["GPA", "建议 3.0+，医学、工程和顶尖项目通常要求更高。"],
        ["语言", "英文授课通常需要 IELTS 6.0 或同等水平。"],
        ["HSK", "中文授课项目通常需要 HSK，等级按专业和学校确认。"],
        ["材料", "护照、成绩单、毕业证明、推荐信和学习计划通常必备。"]
      ]
    : [
        ["GPA", "3.0+ recommended; medicine, engineering, and elite programs may require more."],
        ["Language", "English-taught programs commonly ask for IELTS 6.0 or equivalent."],
        ["HSK", "Chinese-taught programs usually require HSK, with level confirmed by school and major."],
        ["Documents", "Passport, transcripts, graduation proof, recommendation letters, and study plan are commonly required."]
      ];
}

function lifeItems(university: University, isZh: boolean): { title: string; body: string; Icon: LucideIcon }[] {
  return [
    {
      title: isZh ? "附近住宿与生活圈" : "Nearby housing and daily life",
      body: university.campusLife.nearbyLiving,
      Icon: Home
    },
    {
      title: isZh ? "饮食与日常节奏" : "Food and daily rhythm",
      body: university.campusLife.foodAndDailyLife,
      Icon: Utensils
    },
    {
      title: isZh ? "旅行与周末" : "Tourism and weekends",
      body: university.campusLife.tourism,
      Icon: Plane
    },
    {
      title: isZh ? "实习与就业" : "Internships and careers",
      body: university.campusLife.internshipsAndCareers,
      Icon: BriefcaseBusiness
    },
    {
      title: isZh ? "交通与安全" : "Transport and safety",
      body: university.campusLife.transportAndSafety,
      Icon: ShieldCheck
    }
  ];
}

function destinationSignals(university: University, city: ReturnType<typeof getCityDestination>, isZh: boolean) {
  const cityLabel = city ? (isZh ? city.zhName : city.name) : university.location;

  return [
    {
      label: isZh ? "生活成本" : "Living cost",
      value: city ? (isZh ? city.zhLivingCost : city.livingCost) : (isZh ? "待核验" : "To verify"),
      body: isZh
        ? `${cityLabel} 的生活成本会直接影响预算、住宿选择和奖学金压力。`
        : `${cityLabel}'s living cost affects budget, housing choice, and scholarship pressure.`,
      Icon: Banknote
    },
    {
      label: isZh ? "旅行吸引力" : "Travel appeal",
      value: city ? (isZh ? city.zhLifestyleTags.slice(0, 2).join(" / ") : city.lifestyleTags.slice(0, 2).join(" / ")) : (isZh ? "城市体验待补全" : "City context pending"),
      body: city
        ? (isZh ? city.zhTourism : city.tourism)
        : university.campusLife.tourism,
      Icon: Plane
    },
    {
      label: isZh ? "实习就业" : "Career access",
      value: university.majors.slice(0, 2).map((major) => displayMajor(major, isZh ? "zh" : "en")).join(" / "),
      body: city
        ? (isZh ? city.zhInternships : city.internships)
        : university.campusLife.internshipsAndCareers,
      Icon: BriefcaseBusiness
    },
    {
      label: isZh ? "年轻人生活方式" : "Youth lifestyle",
      value: city ? (isZh ? city.zhLifestyleTags.slice(0, 3).join(" / ") : city.lifestyleTags.slice(0, 3).join(" / ")) : (isZh ? "校园生活" : "Campus life"),
      body: isZh
        ? "好的留学目的地不只是课堂，也要让学生愿意探索城市、结交朋友、形成对中国的真实记忆。"
        : "A strong study destination is not only classrooms; it should help students explore the city, meet people, and build real memories of China.",
      Icon: Sparkles
    }
  ];
}

export default async function UniversityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const isZh = locale === "zh";
  const tx = (en: string, zh: string, vi: string) => localeCopy(locale, en, zh, vi);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const sourceUniversity = await getUniversityCatalogView(slug);

  if (!sourceUniversity) notFound();
  const university = localizeUniversityContent(sourceUniversity, locale);

  const allUniversities = await getAllUniversitiesView();
  const city = getCityDestination(university.citySlug, allUniversities);
  const province = getProvinceShowcase(university.provinceSlug);
  const media = getUniversityMedia(university);
  const logo = media.find((item) => item.type === "LOGO");
  const cover = media.find((item) => item.type === "COVER") ?? media.find((item) => item.type === "PHOTO");
  const photos = media.filter((item) => item.type === "PHOTO");
  const videos = media.filter((item) => item.type === "VIDEO");
  const travelNotes = await getPublishedUniversityTravelNotes(university.slug);
  const verifiedRanking = isVerifiedRanking(university);
  const dataStatus = getDataStatus(university);
  const isBaselineRecord = dataStatus.score < 3;
  const displayName = isZh && university.chineseName !== university.name ? university.chineseName : university.name;
  const secondaryName = displayName === university.name ? university.chineseName : university.name;
  const cityName = city ? (isZh ? city.zhName : city.name) : university.location;
  const provinceName = province ? (isZh ? province.zhName : province.name) : university.provinceSlug;
  const signals = destinationSignals(university, city, isZh);
  const scholarshipDetails = getScholarshipDetails(sourceUniversity);

  return (
    <main>
      <JsonLd
        data={universityJsonLd({
          name: sourceUniversity.name,
          alternateName: sourceUniversity.chineseName,
          description: sourceUniversity.summary,
          path: `/universities/${sourceUniversity.slug}`,
          city: sourceUniversity.location,
          province: province?.name,
          website: sourceUniversity.website
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Universities", path: "/universities" },
          { name: sourceUniversity.name, path: `/universities/${sourceUniversity.slug}` }
        ])}
      />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{tx("University profile", "大学详情", "Hồ sơ trường đại học")}</p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
              <UniversityLogo name={university.name} src={logo?.url} className="h-20 w-20 shrink-0 rounded-lg border border-white/20 shadow-sm" imageClassName="p-2" />
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{displayName}</h1>
                <p className="mt-2 text-xl text-slate-300">{secondaryName}</p>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{university.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                {isZh ? dataStatus.labelZh : dataStatus.labelEn}
              </span>
              <span className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                {cityName}, {provinceName}
              </span>
              <span className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                {verifiedRanking ? `QS #${university.qsRanking}` : (isZh ? "排名待核验" : "Ranking to verify")}
              </span>
            </div>
            {isBaselineRecord ? (
              <div className="mt-6 max-w-3xl rounded-lg border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-300">
                <div className="flex items-start gap-3">
                  <Database className="mt-0.5 shrink-0 text-secondary" size={18} aria-hidden="true" />
                  <p>
                    {isZh
                      ? `该学校当前属于国际学生高校目录基线记录。专业、学费、官网、住宿和申请要求需要继续通过学校国际招生办公室核验。数据源核验日期：${internationalUniversitySources[0].checkedAt}。`
                      : `This school is currently a baseline international-student directory record. Program, tuition, website, housing, and requirements should be verified with the university admissions office. Source checked: ${internationalUniversitySources[0].checkedAt}.`}
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <aside className="overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <div className="h-48 bg-gradient-to-br from-primary to-secondary">
              <UniversityGateVisual name={university.name} chineseName={university.chineseName} gateUrl={cover?.url} gateAlt={cover?.alt} logoUrl={logo?.url} locale={locale} />
            </div>
            <div className="p-6">
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{tx("Book Consultation", "预约咨询", "Đặt lịch tư vấn")}</ButtonLink>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-400">{isZh ? "QS 排名" : "QS Ranking"}</dt>
                  <dd className="mt-1 text-xl font-bold">{verifiedRanking ? `#${university.qsRanking}` : (isZh ? "待核验" : "To verify")}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">{tx("Location", "城市", "Địa điểm")}</dt>
                  <dd className="mt-1 font-semibold">{cityName}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">{tx("Tuition", "学费", "Học phí")}</dt>
                  <dd className="mt-1 font-semibold">{university.tuition}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_330px] lg:px-8">
          <div className="space-y-14">
            <section>
              <SectionHeading title={tx("School information", "学校信息", "Thông tin trường")} />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  [isZh ? "建校年份" : "Founded Year", university.foundedYear > 0 ? university.foundedYear : (isZh ? "待核验" : "To verify")],
                  [isZh ? "官网" : "Website", university.website === "#" ? (isZh ? "待核验" : "To verify") : university.website],
                  [isZh ? "国际学生" : "International Students", university.internationalStudents],
                  [isZh ? "所在城市" : "City", cityName]
                ].map(([label, value]) => (
                  <div key={String(label)} className="rounded-lg border border-slate-200 p-5">
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-2 break-words font-bold text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeading
                title={isZh ? "数据可信状态" : "Data confidence"}
                description={isZh ? "我们不会把待核验信息包装成确定事实。学校资料会按照排名、官网、学费、年份、评论等维度逐步核验。" : "We do not present pending data as confirmed facts. Profiles are enriched through ranking, website, tuition, founding year, and review verification."}
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-5">
                {[
                  [isZh ? "排名" : "Ranking", verifiedRanking],
                  [isZh ? "年份" : "Founded", university.foundedYear > 0],
                  [isZh ? "官网" : "Website", university.website !== "#"],
                  [isZh ? "学费" : "Tuition", !university.tuition.toLowerCase().includes("contact")],
                  [isZh ? "评论" : "Reviews", university.reviews.length > 0]
                ].map(([label, ok]) => (
                  <div key={String(label)} className={`rounded-lg border p-4 ${ok ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-amber-200 bg-amber-50 text-amber-800"}`}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <p className="mt-2 text-sm font-bold">{label}</p>
                    <p className="mt-1 text-xs">{ok ? (isZh ? "已有" : "Available") : (isZh ? "待核验" : "Pending")}</p>
                  </div>
                ))}
              </div>
            </section>

            {university.applicationProfile ? (
              <section>
                <SectionHeading
                  title={tx("Official application guide", "官方申请指南", "Hướng dẫn đăng ký chính thức")}
                  description={isZh ? "根据学校官方本科项目申请指南整理，用于帮助学生快速判断排名、费用、语言和申请路径。" : "Structured from the university's undergraduate application guide to help students compare ranking, cost, language, and application path quickly."}
                />
                <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{isZh ? "资料来源" : "Source"}</p>
                      <h3 className="mt-2 font-bold text-ink">{university.applicationProfile.sourceTitle}</h3>
                      {university.applicationProfile.sourceDate ? (
                        <p className="mt-1 text-sm text-slate-500">{university.applicationProfile.sourceDate}</p>
                      ) : null}
                    </div>
                    {university.applicationProfile.sourceUrl ? (
                      <a href={university.applicationProfile.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-ink hover:border-primary hover:text-primary">
                        {tx("Application system", "申请系统", "Hệ thống đăng ký")}
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-surface p-4">
                      <p className="font-bold text-ink">{isZh ? "排名与学术亮点" : "Ranking and academic highlights"}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                        {university.applicationProfile.rankingHighlights.map((item) => (
                          <li key={item} className="flex gap-2">
                            <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-surface p-4">
                      <p className="font-bold text-ink">{isZh ? "费用速览" : "Cost snapshot"}</p>
                      <dl className="mt-3 grid gap-3 text-sm">
                        {Object.entries(university.applicationProfile.fees).map(([label, value]) => value ? (
                          <div key={label}>
                            <dt className="capitalize text-slate-500">{label}</dt>
                            <dd className="mt-1 font-semibold text-ink">{value}</dd>
                          </div>
                        ) : null)}
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            <section>
              <SectionHeading
                title={isZh ? "专业与学位项目" : "Majors and degree programs"}
                description={isZh ? "本科、硕士、博士和语言项目数据会继续通过后台 CMS 扩展。" : "Bachelor, Master, PhD, and language-program data will continue to be expanded through the CMS."}
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {university.majors.map((major) => (
                  <span key={major} className="rounded-md bg-surface px-4 py-2 text-sm font-semibold text-ink">{displayMajor(major, locale)}</span>
                ))}
              </div>
            </section>

            <section>
              <SectionHeading
                title={isZh ? "学校照片与视频" : "Campus photos and video"}
                description={isZh ? "后台上传的 logo、封面、校园照片和视频会优先展示；暂无上传时使用平台兜底视觉。" : "CMS-uploaded logo, cover, campus photos, and videos appear first; platform visuals are used as fallback."}
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {photos.slice(0, 4).map((photo) => (
                  <figure key={photo.url} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.url}
                      alt={photo.alt ?? `${university.name} campus photo`}
                      loading="lazy"
                      decoding="async"
                      className="h-56 w-full object-cover"
                    />
                    {photo.alt ? <figcaption className="px-4 py-3 text-sm text-slate-600">{photo.alt}</figcaption> : null}
                  </figure>
                ))}
              </div>
              {videos.length > 0 ? (
                <div className="mt-6 grid gap-4">
                  {videos.slice(0, 2).map((video) => (
                    <video key={video.url} controls className="aspect-video w-full rounded-lg border border-slate-200 bg-slate-950">
                      <source src={video.url} />
                    </video>
                  ))}
                </div>
              ) : null}
            </section>

            <section>
              <SectionHeading title={isZh ? "学费与生活成本" : "Tuition and living cost"} />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 p-5"><Banknote className="text-primary" size={22} /><p className="mt-4 text-sm text-slate-500">{isZh ? "学费" : "Tuition"}</p><p className="mt-2 font-bold">{university.tuition}</p></div>
                <div className="rounded-lg border border-slate-200 p-5"><Home className="text-primary" size={22} /><p className="mt-4 text-sm text-slate-500">{isZh ? "住宿费" : "Dormitory"}</p><p className="mt-2 font-bold">{isBaselineRecord ? (isZh ? "待核验" : "To verify") : "$900-$1,800/year"}</p></div>
                <div className="rounded-lg border border-slate-200 p-5"><MapPinned className="text-primary" size={22} /><p className="mt-4 text-sm text-slate-500">{isZh ? "城市生活费" : "City living cost"}</p><p className="mt-2 font-bold">{city ? (isZh ? city.zhLivingCost : city.livingCost) : "$650-$1,200/month"}</p></div>
              </div>
            </section>

            <section>
              <SectionHeading
                title={isZh ? "学校附近生活、旅行与就业" : "Living, travel, and careers around campus"}
                description={isZh ? "从日常生活、饮食、交通、周末旅行和就业机会理解学校真实环境。" : "Understand the real environment through daily living, food, transport, weekend travel, and career access."}
              />
              <div className="mt-6 grid gap-4">
                {lifeItems(university, isZh).map(({ title, body, Icon }) => (
                  <article key={title} className="rounded-lg border border-slate-200 p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-bold text-ink">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {travelNotes.length > 0 ? (
              <section>
                <SectionHeading
                  title={isZh ? "学校附近旅行口碑摘要" : "Nearby travel review signals"}
                  description={isZh ? "来自小红书、大众点评、去哪儿等目的地素材的合规改写摘要。不会直接发布未经授权的平台原评论。" : "Compliance-reviewed editorial summaries from destination sources such as Xiaohongshu, Dianping, Qunar, and tourism guides. We do not publish unapproved platform comments verbatim."}
                />
                <div className="mt-6 grid gap-4">
                  {travelNotes.map((note) => (
                    <article key={`${note.platform}-${note.sourceTitle}`} className="rounded-lg border border-slate-200 bg-white p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2">
                            <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-bold text-primary">{note.platform}</span>
                            <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{isZh ? "已改写摘要" : "Editorial summary"}</span>
                          </div>
                          <h3 className="mt-3 text-lg font-bold text-ink">{note.sourceTitle}</h3>
                        </div>
                        {note.sourceUrl ? (
                          <a href={note.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-ink hover:border-primary hover:text-primary">
                            {isZh ? "查看来源" : "Source"}
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-700">{note.rewrittenSummary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {note.highlights.map((highlight) => (
                          <span key={highlight} className="rounded-md bg-surface px-3 py-2 text-xs font-semibold text-slate-700">{highlight}</span>
                        ))}
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-md bg-surface p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{isZh ? "学生视角" : "Student angle"}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-700">{note.studentAngle}</p>
                        </div>
                        <div className="rounded-md bg-surface p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{isZh ? "合规说明" : "Compliance"}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-700">{note.complianceLabel}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <SectionHeading
                title={isZh ? "为什么学生会选择这里" : "Why students choose this destination"}
                description={isZh ? "把学校、城市、生活成本、旅行体验和职业机会放在一起看，才是真正的留学决策。" : "A real study-abroad decision combines the school, city, cost, travel experience, and career access."}
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {signals.map(({ label, value, body, Icon }) => (
                  <article key={label} className="rounded-lg border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                        <h3 className="mt-2 text-lg font-bold text-ink">{value}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {city || province ? (
              <section>
                <SectionHeading
                  title={isZh ? "城市与目的地背景" : "City and destination context"}
                  description={isZh ? "学校选择不能只看学校本身，也要看城市是否适合学生生活、旅行和职业目标。" : "School choice is also about whether the city fits a student's lifestyle, travel interests, and career goals."}
                />
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {city ? (
                    <div className="rounded-lg border border-slate-200 p-5">
                      <MapPinned className="text-primary" size={22} aria-hidden="true" />
                      <p className="mt-4 font-bold text-ink">{cityName}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? city.zhSummary : city.summary}</p>
                      <a href={`${prefix}/cities/${city.slug}`} className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-secondary px-5 text-sm font-semibold text-ink shadow-sm transition hover:bg-cyan-300">
                        {isZh ? "查看城市页" : "View city"}
                      </a>
                    </div>
                  ) : null}
                  {province ? (
                    <div className="rounded-lg border border-slate-200 p-5">
                      <Sparkles className="text-primary" size={22} aria-hidden="true" />
                      <p className="mt-4 font-bold text-ink">{provinceName}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? province.zhTravelSummary : province.travelSummary}</p>
                      <a href={`${prefix}/provinces/${province.slug}`} className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-secondary px-5 text-sm font-semibold text-ink shadow-sm transition hover:bg-cyan-300">
                        {isZh ? "查看省份页" : "View province"}
                      </a>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}

            <section>
              <SectionHeading title={tx("Scholarship programs", "奖学金项目", "Chương trình học bổng")} />
              <div className="mt-6 grid gap-4">
                {scholarshipDetails.map((scholarship) => {
                  const scholarshipType = locale === "zh" ? scholarship.zhType : locale === "vi" ? scholarship.viType : scholarship.type;
                  const coverage = locale === "zh" ? scholarship.zhCoverage : locale === "vi" ? scholarship.viCoverage : scholarship.coverage;
                  const eligibility = locale === "zh" ? scholarship.zhEligibility : locale === "vi" ? scholarship.viEligibility : scholarship.eligibility;
                  const renewal = locale === "zh" ? scholarship.zhRenewal : locale === "vi" ? scholarship.viRenewal : scholarship.renewal;
                  const competitiveness = locale === "zh" ? scholarship.zhCompetitiveness : locale === "vi" ? scholarship.viCompetitiveness : scholarship.competitiveness;
                  const bestFor = locale === "zh" ? scholarship.zhBestFor : locale === "vi" ? scholarship.viBestFor : scholarship.bestFor;
                  const note = locale === "zh" ? scholarship.zhNote : locale === "vi" ? scholarship.viNote : scholarship.note;

                  return (
                    <article key={scholarship.name} className="rounded-lg border border-slate-200 bg-white p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="inline-flex rounded-md bg-blue-50 px-3 py-1 text-xs font-bold text-primary">{scholarshipType}</span>
                          <h3 className="mt-3 text-lg font-bold text-ink">{scholarship.name}</h3>
                        </div>
                        <div className="rounded-md bg-surface px-3 py-2 text-xs font-bold text-slate-700">
                          {tx("Competition", "竞争度", "Mức cạnh tranh")}: {competitiveness}
                        </div>
                      </div>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {[
                          [tx("Coverage", "覆盖范围", "Mức hỗ trợ"), coverage],
                          [tx("Eligibility", "申请条件", "Điều kiện"), eligibility],
                          [tx("Renewal", "续评规则", "Gia hạn"), renewal],
                          [tx("Best for", "适合人群", "Phù hợp với"), bestFor]
                        ].map(([label, body]) => (
                          <div key={label} className="rounded-md bg-surface p-4">
                            <p className="text-xs font-bold uppercase tracking-wide text-primary">{label}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900">{note}</p>
                    </article>
                  );
                })}
              </div>
            </section>

            <section>
              <SectionHeading title={tx("Application requirements", "申请要求", "Yêu cầu đăng ký")} />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {requirements(university, isZh).map(([label, body]) => (
                  <div key={label} className="rounded-lg bg-surface p-4">
                    <p className="font-bold text-ink">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeading
                title={tx("Student reviews", "学生评价", "Đánh giá của sinh viên")}
                description={isZh ? "评论区用于沉淀真实留学体验。正式外部平台评论导入会走合规导入、审核和来源标注。" : "Reviews help capture real study experience. External-platform review imports will use compliant import, moderation, and source attribution."}
              />
              <LiveUniversityReviews universitySlug={university.slug} initialReviews={university.reviews} locale={locale} />
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 p-6 lg:sticky lg:top-24">
            <p className="text-lg font-bold text-ink">{tx(`Apply to ${university.name}`, `申请 ${displayName}`, `Đăng ký vào ${university.name}`)}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{tx("Get a shortlist, scholarship review, document check, and application timeline.", "获取选校清单、奖学金评估、材料检查和申请时间线。", "Nhận danh sách trường, đánh giá học bổng, kiểm tra hồ sơ và lịch trình đăng ký.")}</p>
            <div className="mt-5 grid gap-3">
              <ButtonLink href={`${prefix}/consultation`}>{tx("Apply Now", "立即咨询", "Tư vấn ngay")}</ButtonLink>
              {university.website !== "#" ? (
                <a href={university.website} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-ink hover:border-primary hover:text-primary">
                  {tx("Official website", "学校官网", "Trang web chính thức")}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              ) : null}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="font-bold text-ink">{tx("Application path", "申请路径", "Lộ trình đăng ký")}</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <p className="flex gap-2"><GraduationCap size={17} className="mt-0.5 text-primary" /> {isZh ? "确认专业和学位层级" : "Confirm major and degree level"}</p>
                <p className="flex gap-2"><Languages size={17} className="mt-0.5 text-primary" /> {isZh ? "确认语言要求" : "Confirm language requirements"}</p>
                <p className="flex gap-2"><Banknote size={17} className="mt-0.5 text-primary" /> {isZh ? "评估学费和奖学金" : "Review tuition and scholarships"}</p>
                <p className="flex gap-2"><CalendarCheck size={17} className="mt-0.5 text-primary" /> {isZh ? "制定申请时间线" : "Build application timeline"}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
