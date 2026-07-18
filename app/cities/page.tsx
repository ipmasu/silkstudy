import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { CityFilterGrid } from "@/components/cities/city-filter-grid";
import { getCityDestinations } from "@/lib/city-destinations";
import { cityFilterOptions, getCityFilterTags } from "@/lib/city-filter-tags";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "China Student City Selector",
  description: "Choose Chinese student cities by living cost, culture, nightlife, coast, university strength, food, climate, and student-life fit.",
  path: "/cities"
});

export default async function CitiesPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const universities = await getAllUniversitiesView();
  const cities = getCityDestinations(universities).map((city) => ({
    ...city,
    universityCount: universities.filter((university) => university.citySlug === city.slug).length,
    filterTags: getCityFilterTags(city, universities)
  }));

  const hotCount = ["changsha", "chengdu", "beijing", "xian", "hangzhou", "guangzhou", "kunming", "shanghai"].filter((slug) =>
    cities.some((city) => city.slug === slug)
  ).length;

  return (
    <main className="bg-[#fff8ef]">
      <JsonLd
        data={itemListJsonLd(
          cities.slice(0, 50).map((city) => ({
            name: city.name,
            path: `/cities/${city.slug}`,
            description: city.summary
          })),
          "Chinese student cities"
        )}
      />
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              {isZh ? "城市选择器" : "City selector"}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {isZh ? "选一座城市，开始你的中国故事。" : "Choose the Chinese city that fits your study life."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {isZh
                ? "城市决定你每天怎么吃饭、通勤、交朋友、周末旅行和寻找机会。这里先帮你筛选，再推荐热门城市，最后进入每个城市的深度页面。"
                : "A city shapes food, transport, friendship, weekend travel, and opportunity. Filter first, compare popular choices, then open a deep city guide."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#city-filter-results" className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                {isZh ? "开始选城市" : "Start Choosing"}
              </a>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">
                {isZh ? "免费咨询" : "Free Consultation"}
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [isZh ? "可探索城市" : "Student cities", cities.length],
              [isZh ? "目录学校" : "Catalog schools", universities.length],
              [isZh ? "热门推荐" : "Featured cities", hotCount]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CityFilterGrid cities={cities} filters={cityFilterOptions} isZh={isZh} prefix={prefix} />
        </div>
      </section>
    </main>
  );
}
