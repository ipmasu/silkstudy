import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { UniversitySelector } from "@/components/universities/university-selector";
import { getCityDestinations } from "@/lib/city-destinations";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chinese University Selector",
  description: "Search, filter, sort, and compare Chinese universities by city, QS ranking, tuition, major field, CSC scholarship, and university type.",
  path: "/universities"
});

export default async function UniversitiesPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const universities = await getAllUniversitiesView();
  const cityDestinations = getCityDestinations(universities);
  const cityOptions = cityDestinations
    .map((city) => ({
      slug: city.slug,
      name: isZh ? city.zhName : city.name,
      count: universities.filter((university) => university.citySlug === city.slug).length
    }))
    .filter((city) => city.count > 0);
  const majorOptions = [...new Set(universities.flatMap((university) => university.majors))].sort();

  return (
    <main className="bg-[#fff8ef]">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              {isZh ? "选校引擎" : "University selector"}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {isZh ? "用筛选、搜索和比较，找到适合你的中国大学。" : "Find the Chinese university that fits your goals."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {isZh
                ? "不要在几百所大学里盲目翻找。先回答问题，再按城市、排名、学费、专业、CSC奖学金和学校类型筛选，最后比较 shortlist。"
                : "Search, filter, sort, and compare universities by city, ranking, tuition, major field, CSC scholarship, and university type."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#university-results" className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                {isZh ? "开始选校" : "Start Selecting"}
              </a>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "免费咨询" : "Free Consultation"}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [isZh ? "大学" : "Universities", universities.length],
              [isZh ? "城市" : "Cities", cityOptions.length],
              [isZh ? "专业方向" : "Major directions", majorOptions.length]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniversitySelector universities={universities} cityOptions={cityOptions} majorOptions={majorOptions} prefix={prefix} />

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">Next step</p>
            <h2 className="mt-2 text-3xl font-bold">{isZh ? "找到目标大学了吗？" : "Found your target university?"}</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              {isZh
                ? "我们来帮你搞定申请。从选校到签证，全程 1 对 1 指导。"
                : "Let us help you turn a shortlist into an application plan, from school matching to visa preparation."}
            </p>
          </div>
          <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "免费咨询 →" : "Free consultation →"}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
