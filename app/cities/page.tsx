import { BriefcaseBusiness, Plane, WalletCards, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { CityFilterGrid } from "@/components/cities/city-filter-grid";
import { getCityDestinations } from "@/lib/city-destinations";
import { cityFilterOptions, getCityFilterTags } from "@/lib/city-filter-tags";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { localeCopy } from "@/lib/i18n/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "China Student City Guides",
  description: "Compare Chinese student cities by living cost, climate, visa convenience, local universities, tourism, and career opportunities.",
  path: "/cities"
});

const valueCards: { Icon: LucideIcon; titleEn: string; titleZh: string; descriptionEn: string; descriptionZh: string }[] = [
  {
    Icon: WalletCards,
    titleEn: "Budget fit",
    titleZh: "预算匹配",
    descriptionEn: "Living cost affects long-term study stability and family decisions.",
    descriptionZh: "生活成本会影响学生能否长期稳定学习，也会影响家庭决策。"
  },
  {
    Icon: Plane,
    titleEn: "Travel pull",
    titleZh: "旅行吸引力",
    descriptionEn: "Weekend travel and city culture can become a major reason young people choose China.",
    descriptionZh: "周末旅行和城市文化会成为年轻人愿意来中国的重要原因。"
  },
  {
    Icon: BriefcaseBusiness,
    titleEn: "Career access",
    titleZh: "职业入口",
    descriptionEn: "Internships should be judged by city industries, language ability, and university partnerships.",
    descriptionZh: "实习机会要和城市产业、语言能力、学校合作一起判断。"
  }
];

export default async function CitiesPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const tx = (en: string, zh: string, vi: string) => localeCopy(locale, en, zh, vi);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const universities = await getAllUniversitiesView();
  const cities = getCityDestinations(universities).map((city) => ({
    ...city,
    universityCount: universities.filter((university) => university.citySlug === city.slug).length,
    filterTags: getCityFilterTags(city, universities)
  }));

  const featuredCities = cities.filter((city) => city.universityCount >= 2).slice(0, 9);
  const allCities = [...featuredCities, ...cities.filter((city) => !featuredCities.some((item) => item.slug === city.slug))];

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              {tx("City life guides", "城市生活指南", "Huong dan doi song thanh pho")}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {tx("Choose the Chinese city that fits your study life.", "选择适合你留学生活的中国城市。", "Chon thanh pho Trung Quoc phu hop voi doi song du hoc cua ban.")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {isZh
                ? "城市决定学生每天的交通、饮食、预算、周末旅行和实习机会。这里把高校目录和真实生活背景放在一起比较。"
                : "A city shapes transport, food, budget, weekend travel, and internships. This guide compares university data with real student-life context."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/universities`}>{tx("Browse Schools", "浏览学校", "Xem cac truong")}</ButtonLink>
              <ButtonLink href={`${prefix}/consultation`} variant="secondary">{tx("Get City Advice", "获取城市建议", "Nhan tu van thanh pho")}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [isZh ? "学生城市" : "Student cities", cities.length],
              [isZh ? "目录学校" : "Catalog schools", universities.length],
              [isZh ? "重点城市" : "Featured cities", featuredCities.length]
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
            eyebrow={tx("City comparison", "城市比较", "So sanh thanh pho")}
            title={tx("Judge a city by daily life, not only rankings.", "从日常生活判断一座城市是否适合你。", "Danh gia thanh pho qua doi song hang ngay, khong chi qua xep hang.")}
            description={tx(
              "Each city page shows cost, climate, visa convenience, local universities, travel culture, internships, and student review context.",
              "每个城市页都会展示生活成本、气候、签证便利、当地大学、旅行文化、实习就业和学生评价背景。",
              "Moi trang thanh pho gioi thieu chi phi song, khi hau, truong dai hoc, du lich, thuc tap va danh gia sinh vien."
            )}
          />
          <CityFilterGrid cities={allCities} filters={cityFilterOptions} isZh={isZh} prefix={prefix} />
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
          <p className="text-xl font-bold">{isZh ? "不确定哪座城市适合你的预算和专业？" : "Not sure which city fits your budget and major?"}</p>
          <ButtonLink href={`${prefix}/consultation`} variant="secondary">{isZh ? "获取城市建议" : "Get City Advice"}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
