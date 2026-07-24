import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { ChinaSvgMap } from "@/components/map/china-svg-map";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interactive China Map",
  description: "Explore China by province through an interactive map with climate, food, culture, scenery, and representative universities.",
  path: "/china-map"
});

export default async function ChinaMapPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <main className="bg-[#f7fbff]">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            {isZh ? "中国地图保留页" : "Classic China Map"}
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                {isZh ? "从地图进入中国留学目的地。" : "Enter China study destinations from the map."}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {isZh
                  ? "这个页面保留 SilkStudy 的中国互动地图。点击每个省份，可以在页面内查看气候、饮食、历史人文、景区、适合学生和代表学校。"
                  : "This page preserves SilkStudy's interactive China map. Click each province to see climate, food, culture, scenery, student fit, and representative schools."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href={`${prefix}/provinces`}>
                {isZh ? "进入探索中国地图" : "Explore China Map"}
              </ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">
                {isZh ? "规划留学" : "Plan Study"}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <ChinaSvgMap locale={locale} />
      </section>
    </main>
  );
}
