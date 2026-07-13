import Link from "next/link";
import { getLocale } from "next-intl/server";
import { getCityDestinations } from "@/lib/city-destinations";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "City Comparison — SilkStudy",
  description: "Compare Chinese student cities by living cost, university count, climate, culture, and student-life fit.",
  path: "/cities/compare"
});

type PageProps = {
  searchParams: Promise<{ cities?: string }>;
};

export default async function CityComparePage({ searchParams }: PageProps) {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const params = await searchParams;
  const selectedSlugs = (params.cities ?? "").split(",").map((item) => item.trim()).filter(Boolean);
  const universities = await getAllUniversitiesView();
  const allCities = getCityDestinations(universities);
  const cities = selectedSlugs
    .map((slug) => allCities.find((city) => city.slug === slug))
    .filter((city): city is NonNullable<typeof city> => Boolean(city));

  return (
    <main className="bg-[#fff8ef] py-14 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href={`${prefix}/cities`} className="text-sm font-bold text-red-700 hover:text-red-800">← {isZh ? "返回城市选择器" : "Back to cities"}</Link>
        <h1 className="mt-5 text-4xl font-bold">{isZh ? "城市比较" : "City Comparison"}</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          {isZh ? "这里先展示前端已选城市的基础对比，后续可以继续接入更完整的评分、评价和代表大学。" : "This table compares the selected cities. More scoring and student reviews can be added later."}
        </p>

        {cities.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-xl font-bold">{isZh ? "还没有选择城市" : "No cities selected"}</p>
            <Link href={`${prefix}/cities`} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
              {isZh ? "去选择城市" : "Choose cities"}
            </Link>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">{isZh ? "维度" : "Dimension"}</th>
                  {cities.map((city) => (
                    <th key={city.slug} className="px-5 py-4 font-bold">{isZh ? city.zhName : city.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <CompareRow label={isZh ? "生活成本" : "Living cost"} values={cities.map((city) => (isZh ? city.zhLivingCost : city.livingCost))} />
                <CompareRow label={isZh ? "学校数量" : "University count"} values={cities.map((city) => String(universities.filter((university) => university.citySlug === city.slug).length))} />
                <CompareRow label={isZh ? "气候" : "Climate"} values={cities.map((city) => (isZh ? city.zhClimate : city.climate))} />
                <CompareRow label={isZh ? "城市标签" : "Tags"} values={cities.map((city) => (isZh ? city.zhLifestyleTags : city.lifestyleTags).slice(0, 3).join(" · "))} />
                <CompareRow label={isZh ? "适合理由" : "Why it fits"} values={cities.map((city) => (isZh ? city.zhSummary : city.summary))} />
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-950">{isZh ? "深入探索" : "Open guide"}</td>
                  {cities.map((city) => (
                    <td key={city.slug} className="px-5 py-4">
                      <Link href={`${prefix}/cities/${city.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-5 py-2 font-bold text-white hover:bg-red-700">
                        {isZh ? "探索" : "Explore"} →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

function CompareRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="align-top">
      <td className="w-44 px-5 py-4 font-bold text-slate-950">{label}</td>
      {values.map((value, index) => (
        <td key={`${label}-${index}`} className="max-w-xs px-5 py-4 leading-6 text-slate-700">{value}</td>
      ))}
    </tr>
  );
}

