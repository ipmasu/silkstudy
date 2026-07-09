import Link from "next/link";
import { notFound } from "next/navigation";
import { BriefcaseBusiness, CloudSun, GraduationCap, Landmark, MapPin, MessageSquareQuote, Plane, ShieldCheck, WalletCards, type LucideIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { FallbackImage } from "@/components/common/fallback-image";
import { SectionHeading } from "@/components/common/section-heading";
import { UniversityCard } from "@/components/universities/university-card";
import { getCityExperienceGuide } from "@/lib/city-experience-guides";
import { getCityFoodTravelGuide } from "@/lib/city-food-travel-guides";
import { getCityVisualGallery } from "@/lib/city-visual-galleries";
import { cityGuideDetails } from "@/lib/city-guide-details";
import { getCityDestination } from "@/lib/city-destinations";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const universities = await getAllUniversitiesView();
  const city = getCityDestination(slug, universities);

  if (!city) return {};

  return buildMetadata({
    title: `Study in ${city.name}`,
    description: city.summary,
    path: `/cities/${city.slug}`
  });
}

function topMajors(universities: Awaited<ReturnType<typeof getAllUniversitiesView>>) {
  const counts = new Map<string, number>();

  universities.forEach((university) => {
    university.majors.forEach((major) => counts.set(major, (counts.get(major) ?? 0) + 1));
  });

  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([major]) => major);
}

function careerCards(isZh: boolean): { Icon: LucideIcon; title: string; description: string }[] {
  return [
    {
      Icon: BriefcaseBusiness,
      title: isZh ? "产业匹配" : "Industry fit",
      description: isZh ? "优先看城市产业是否匹配目标专业。" : "Check whether local industries match the target major."
    },
    {
      Icon: Landmark,
      title: isZh ? "学校合作" : "University links",
      description: isZh ? "学校合作企业、实验室和医院资源非常关键。" : "Company, lab, and hospital partnerships matter."
    },
    {
      Icon: MessageSquareQuote,
      title: isZh ? "语言能力" : "Language ability",
      description: isZh ? "中文能力会显著影响实习和兼职选择。" : "Chinese ability greatly affects internship and part-time options."
    }
  ];
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const allUniversities = await getAllUniversitiesView();
  const city = getCityDestination(slug, allUniversities);

  if (!city) notFound();

  const cityUniversities = allUniversities
    .filter((university) => university.citySlug === city.slug)
    .sort((a, b) => a.qsRanking - b.qsRanking || a.name.localeCompare(b.name));
  const majors = topMajors(cityUniversities);
  const name = isZh ? city.zhName : city.name;
  const provinceName = isZh ? city.zhProvinceName : city.provinceName;
  const lifestyleTags = isZh ? city.zhLifestyleTags : city.lifestyleTags;
  const guideDetail = cityGuideDetails[city.slug];
  const experienceGuide = getCityExperienceGuide(city.slug);
  const foodTravelGuide = getCityFoodTravelGuide(city.slug);
  const visualGallery = await getCityVisualGallery(city.slug, city);

  const reviewCards = [
    {
      title: isZh ? "城市节奏" : "City rhythm",
      body: isZh
        ? `${name}的生活节奏、交通和饮食文化会直接影响学生每天的幸福感。`
        : `${city.name}'s rhythm, transport, and food culture directly affect everyday student happiness.`
    },
    {
      title: isZh ? "学习支持" : "Study support",
      body: isZh
        ? "国际学生最需要关注学校国际办公室、住宿、接机、注册和居留许可支持。"
        : "International students should check international-office support, housing, pickup, registration, and residence-permit guidance."
    },
    {
      title: isZh ? "职业机会" : "Career exposure",
      body: isZh
        ? "实习机会不能只看城市名气，还要看专业、语言能力、学校合作和本地产业。"
        : "Internships depend on major, language ability, university partnerships, and local industries, not only city fame."
    }
  ];

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{isZh ? "学生城市指南" : "Student city guide"}</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">{isZh ? `在${name}留学` : `Study in ${city.name}`}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{isZh ? city.zhSummary : city.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {lifestyleTags.map((tag) => (
                <span key={tag} className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/universities?city=${city.slug}`}>{isZh ? "查看本市学校" : "View Local Schools"}</ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "获取城市建议" : "Get City Advice"}</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <div className="relative h-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={city.image} alt={isZh ? city.zhImageAlt : city.imageAlt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-secondary">
                  <MapPin size={16} aria-hidden="true" />
                  {provinceName}
                </p>
                <p className="mt-2 text-2xl font-bold">{isZh ? city.zhTourism : city.tourism}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {[
                [cityUniversities.length, isZh ? "所学校" : "schools"],
                [isZh ? city.zhLivingCost : city.livingCost, isZh ? "生活成本" : "living cost"],
                [majors.length || 3, isZh ? "专业方向" : "major areas"]
              ].map(([value, label]) => (
                <div key={String(label)} className="bg-slate-950/60 p-4">
                  <p className="text-xl font-bold">{value}</p>
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
            <p className="font-bold text-ink">{isZh ? "城市关键指标" : "City signals"}</p>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-600">
              <p className="flex gap-3"><WalletCards size={18} className="mt-0.5 shrink-0 text-primary" /> {isZh ? city.zhLivingCost : city.livingCost}</p>
              <p className="flex gap-3"><CloudSun size={18} className="mt-0.5 shrink-0 text-primary" /> {isZh ? city.zhClimate : city.climate}</p>
              <p className="flex gap-3"><Landmark size={18} className="mt-0.5 shrink-0 text-primary" /> {isZh ? city.zhVisaConvenience : city.visaConvenience}</p>
              <p className="flex gap-3"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-primary" /> {isZh ? "安全、住宿和交通信息会继续按学校校区补全。" : "Safety, housing, and transport will continue to be enriched by campus."}</p>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <ButtonLink href={`${prefix}/consultation`}>{isZh ? "匹配城市和学校" : "Match City and Schools"}</ButtonLink>
            </div>
          </aside>

          <div>
            <SectionHeading
              eyebrow={isZh ? "当地大学" : "Local universities"}
              title={isZh ? `${name}大学列表` : `Universities in ${city.name}`}
              description={isZh ? "以下学校来自当前国际学生高校目录。打开学校页可继续查看学费、奖学金、专业、评论和生活信息。" : "These schools come from the international-student university catalog. Open profiles for tuition, scholarships, majors, reviews, and campus-life context."}
            />
            {cityUniversities.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {cityUniversities.slice(0, 12).map((university) => (
                  <UniversityCard key={university.slug} university={university} />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-lg border border-slate-200 bg-surface p-8 text-center">
                <GraduationCap className="mx-auto text-primary" size={30} aria-hidden="true" />
                <p className="mt-4 font-bold text-ink">{isZh ? "学校资料待补全" : "School data pending enrichment"}</p>
              </div>
            )}

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "旅行与文化" : "Travel and culture"}
                title={isZh ? `${name}为什么吸引年轻人` : `Why ${city.name} attracts young people`}
                description={isZh ? city.zhTourism : city.tourism}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {lifestyleTags.map((tag) => (
                  <div key={tag} className="rounded-lg border border-slate-200 bg-surface p-5">
                    <Plane className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 font-bold text-ink">{tag}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {isZh ? "城市吸引力会影响学生是否愿意留下、分享和推荐中国留学。" : "City appeal influences whether students want to stay, share, and recommend studying in China."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {!experienceGuide && visualGallery.length > 0 ? (
              <div className="mt-14">
                <SectionHeading
                  eyebrow={isZh ? "城市图像" : "City visuals"}
                  title={isZh ? `${name}图文印象` : `${city.name} in pictures`}
                  description={isZh ? city.zhTourism : city.tourism}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {visualGallery.map((item) => (
                    <article key={item.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                        <FallbackImage src={item.image} alt={isZh ? item.zhAlt : item.alt} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-5">
                        <p className="font-bold text-ink">{isZh ? item.zhTitle : item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? item.zhNote : item.note}</p>
                        {item.sourceUrl ? (
                          <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs font-semibold text-primary hover:text-secondary">
                            {isZh ? "图片来源" : "Image source"}
                          </a>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {experienceGuide ? (
              <div className="mt-14">
                <SectionHeading
                  eyebrow={isZh ? "城市人格" : "City personality"}
                  title={isZh ? experienceGuide.zhMood : experienceGuide.mood}
                  description={isZh ? experienceGuide.zhStory : experienceGuide.story}
                />
                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_340px]">
                  <div className="grid gap-4 md:grid-cols-2">
                    <article className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{isZh ? "一天怎么感受这座城市" : "A Day in the City"}</h3>
                      <div className="mt-5 grid gap-3">
                        {(isZh ? experienceGuide.zhDayPlan : experienceGuide.dayPlan).map((item, index) => (
                          <p key={item} className="flex gap-3 rounded-md bg-surface p-4 text-sm leading-6 text-slate-600">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">{index + 1}</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </article>
                    <article className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{isZh ? "周末可以去哪" : "Weekend Escapes"}</h3>
                      <div className="mt-5 grid gap-3">
                        {(isZh ? experienceGuide.zhWeekend : experienceGuide.weekend).map((item) => (
                          <p key={item} className="rounded-md bg-cyan-50 p-4 text-sm font-semibold leading-6 text-cyan-800">{item}</p>
                        ))}
                      </div>
                    </article>
                    <article className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{isZh ? "社交与交友方式" : "Social Life"}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{isZh ? experienceGuide.zhSocialLife : experienceGuide.socialLife}</p>
                    </article>
                    <article className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{isZh ? "为什么能吸引全球年轻人" : "Why Young Travelers Remember It"}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{isZh ? experienceGuide.zhTravelHook : experienceGuide.travelHook}</p>
                    </article>
                  </div>
                  <aside className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white">
                    <h3 className="text-xl font-bold">{isZh ? "城市关键词" : "City Color Tags"}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(isZh ? experienceGuide.zhColorTags : experienceGuide.colorTags).map((tag) => (
                        <span key={tag} className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-slate-100">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <h4 className="font-bold text-secondary">{isZh ? "建议补充图片" : "Image Ideas"}</h4>
                      <div className="mt-4 grid gap-2">
                        {(isZh ? experienceGuide.zhImageIdeas : experienceGuide.imageIdeas).map((idea) => (
                          <p key={idea} className="rounded-md bg-white/10 p-3 text-sm leading-6 text-slate-100">{idea}</p>
                        ))}
                      </div>
                      {visualGallery.length > 0 ? (
                        <div className="mt-5 grid gap-3">
                          {visualGallery.map((item) => (
                            <article key={item.title} className="overflow-hidden rounded-md border border-white/10 bg-white/10">
                              <div className="aspect-[16/9] overflow-hidden bg-slate-800">
                                <FallbackImage src={item.image} alt={isZh ? item.zhAlt : item.alt} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <div className="p-3">
                                <p className="text-sm font-bold text-white">{isZh ? item.zhTitle : item.title}</p>
                                <p className="mt-1 text-xs leading-5 text-slate-300">{isZh ? item.zhNote : item.note}</p>
                                {item.sourceUrl ? <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-[11px] font-semibold text-secondary hover:text-white">
                                  {isZh ? "图片来源" : "Image source"}
                                </a> : null}
                              </div>
                            </article>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </aside>
                </div>
              </div>
            ) : null}

            {foodTravelGuide ? (
              <div className="mt-14">
                <SectionHeading
                  eyebrow={isZh ? "旅游美食" : "Food and travel"}
                  title={isZh ? foodTravelGuide.zhTitle : foodTravelGuide.title}
                  description={isZh ? foodTravelGuide.zhOverview : foodTravelGuide.overview}
                />
                <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_360px]">
                  <div className="grid gap-6">
                    <section className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{isZh ? "必吃特色" : "Signature Foods"}</h3>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {foodTravelGuide.signatureFoods.map((food) => (
                          <article key={food.name} className="rounded-md bg-surface p-4">
                            <p className="font-bold text-ink">{isZh ? food.zhName : food.name}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? food.zhNote : food.note}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                    <section className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{isZh ? "适合逛吃的区域" : "Food Areas to Explore"}</h3>
                      <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {foodTravelGuide.foodAreas.map((area) => (
                          <article key={area.name} className="rounded-md border border-slate-200 p-4">
                            <p className="font-bold text-ink">{isZh ? area.zhName : area.name}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? area.zhVibe : area.vibe}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                    <section className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{isZh ? "旅行体验怎么安排" : "Travel Scenes"}</h3>
                      <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {foodTravelGuide.travelScenes.map((scene) => (
                          <article key={scene.name} className="rounded-md bg-cyan-50 p-4">
                            <p className="font-bold text-cyan-900">{isZh ? scene.zhName : scene.name}</p>
                            <p className="mt-2 text-sm leading-6 text-cyan-800">{isZh ? scene.zhExperience : scene.experience}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                  </div>
                  <aside className="h-fit rounded-lg border border-slate-200 bg-slate-950 p-6 text-white lg:sticky lg:top-24">
                    <h3 className="text-xl font-bold">{isZh ? "学生实用贴士" : "Student Tips"}</h3>
                    <div className="mt-5 grid gap-3">
                      {(isZh ? foodTravelGuide.zhStudentTips : foodTravelGuide.studentTips).map((tip, index) => (
                        <p key={tip} className="flex gap-3 rounded-md border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-100">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-bold text-slate-950">{index + 1}</span>
                          {tip}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-sm leading-6 text-slate-300">
                        {isZh
                          ? "我们会把城市里的美食、街区、周末路线和学生真实感受继续写细，让它不只是目的地介绍，而是一份可以带着走的生活地图。"
                          : "We will keep turning food streets, neighborhoods, weekend routes, and student voices into a practical city map students can actually carry with them."}
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
            ) : null}

            {guideDetail ? (
              <div className="mt-14">
                <SectionHeading
                  eyebrow={isZh ? "城市深度介绍" : "In-depth city guide"}
                  title={isZh ? `真正理解${name}` : `Understand ${city.name} before choosing a school`}
                  description={isZh ? "城市不只是学校所在地，也决定学生能看到怎样的中国、结识怎样的人、拥有怎样的周末和成长机会。" : "A city is more than a school location. It shapes what students see, who they meet, and how they grow outside the classroom."}
                />
                <div className="mt-8 grid gap-5">
                  {[
                    [isZh ? "地理与城市格局" : "Geography and Urban Layout", isZh ? guideDetail.zhGeography : guideDetail.geography],
                    [isZh ? "历史与文化气质" : "History and Cultural Character", isZh ? guideDetail.zhHistory : guideDetail.history],
                    [isZh ? "交通与周末出行" : "Transport and Weekend Mobility", isZh ? guideDetail.zhTransport : guideDetail.transport]
                  ].map(([title, body]) => (
                    <article key={title} className="rounded-lg border border-slate-200 bg-white p-6">
                      <h3 className="text-xl font-bold text-ink">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border border-slate-200 bg-surface p-6">
                  <h3 className="text-xl font-bold text-ink">{isZh ? "代表性景点与年轻人体验" : "Signature Places and Youth Experiences"}</h3>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {(isZh ? guideDetail.visualBlocks.map((block) => `${block.zhTitle}：${block.zhBody}`) : guideDetail.visualBlocks.map((block) => `${block.title}: ${block.body}`)).map((item) => (
                      <p key={item} className="rounded-md bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">{item}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-ink">{isZh ? `图文看${name}` : `${city.name} in Pictures`}</h3>
                  <div className="mt-5 grid gap-6 lg:grid-cols-2">
                    {guideDetail.visualBlocks.map((block) => (
                      <article key={block.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                        <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={block.image} alt={isZh ? block.zhImageAlt : block.imageAlt} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                        </div>
                        <div className="p-5">
                          <h4 className="text-lg font-bold text-ink">{isZh ? block.zhTitle : block.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? block.zhBody : block.body}</p>
                          <a href={block.sourceUrl} className="mt-4 inline-flex text-xs font-semibold text-primary hover:text-blue-700" target="_blank" rel="noreferrer">
                            {isZh ? "图片来源" : "Image source"}
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-surface p-6">
                    <h3 className="text-xl font-bold text-ink">{isZh ? `${name}不同区域适合什么学生` : `Which ${city.name} Area Fits You`}</h3>
                    <div className="mt-5 grid gap-3">
                      {guideDetail.districts.map((district) => (
                        <div key={district.name} className="rounded-md bg-white p-4 shadow-sm">
                          <p className="font-bold text-ink">{isZh ? district.zhName : district.name}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{isZh ? district.zhDescription : district.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-surface p-6">
                    <h3 className="text-xl font-bold text-ink">{isZh ? "推荐体验路线" : "Suggested Experience Routes"}</h3>
                    <div className="mt-5 grid gap-3">
                      {(isZh ? guideDetail.zhRoutes : guideDetail.routes).map((item) => (
                        <p key={item} className="rounded-md bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-bold text-ink">{isZh ? `什么学生适合${name}` : `Who ${city.name} Fits Best`}</h3>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {(isZh ? guideDetail.zhFit : guideDetail.fit).map((item) => (
                      <p key={item} className="rounded-md bg-surface p-4 text-sm leading-6 text-slate-600">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "实习就业" : "Internships and careers"}
                title={isZh ? `${name}职业机会怎么判断` : `How to judge career access in ${city.name}`}
                description={isZh ? city.zhInternships : city.internships}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {careerCards(isZh).map(({ Icon, title, description }) => (
                  <div key={title} className="rounded-lg border border-slate-200 p-5">
                    <Icon className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 font-bold text-ink">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "学生评价" : "Student reviews"}
                title={isZh ? "学生通常会关心什么" : "What students usually care about"}
                description={isZh ? "正式评论区后续会接入合规的数据导入、审核和来源标注。这里先展示城市评价维度。" : "The formal review system will later use compliant imports, moderation, and source attribution. This section shows review dimensions first."}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {reviewCards.map((review) => (
                  <div key={review.title} className="rounded-lg border border-slate-200 bg-surface p-5">
                    <MessageSquareQuote className="text-primary" size={22} aria-hidden="true" />
                    <p className="mt-4 font-bold text-ink">{review.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{review.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <SectionHeading
                eyebrow={isZh ? "专业入口" : "Program entry"}
                title={isZh ? "从城市进入专业筛选" : "Filter programs from the city"}
                description={isZh ? "根据本市学校目录自动汇总热门方向。" : "Popular directions are summarized from the local school catalog."}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {(majors.length > 0 ? majors : ["Engineering", "Business", "Chinese Language"]).map((major) => (
                  <Link key={major} href={`${prefix}/universities?city=${city.slug}&major=${major.toLowerCase().replaceAll(" ", "-")}`} className="rounded-md bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-100">
                    {displayMajor(major, locale)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">{isZh ? `想知道${name}适不适合你？` : `Want to know if ${city.name} fits you?`}</h2>
            <p className="mt-3 max-w-2xl text-blue-100">
              {isZh ? "我们会结合预算、专业、城市偏好和申请时间线，帮你把城市和学校缩小到可执行清单。" : "We combine budget, major, city preference, and application timeline to narrow your city and school list into an actionable plan."}
            </p>
          </div>
          <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "免费咨询" : "Free Consultation"}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
