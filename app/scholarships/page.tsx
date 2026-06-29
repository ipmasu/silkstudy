import { Award, Banknote, FileSearch, ShieldCheck, type LucideIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { ScholarshipMatcher } from "@/components/scholarships/scholarship-matcher";
import { localeCopy } from "@/lib/i18n/copy";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "China Scholarship Matching",
  description: "Estimate CSC, provincial, university scholarship, and low-cost city strategies for studying in China.",
  path: "/scholarships"
});

export default async function ScholarshipsPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const tx = (en: string, zh: string, vi: string) => localeCopy(locale, en, zh, vi);
  const prefix = locale === "en" ? "" : `/${locale}`;

  const cards: [string, string, LucideIcon][] = isZh
    ? [
        ["CSC 奖学金", "适合学术背景强、目标项目明确、愿意严格准备材料的学生。", Award],
        ["省级奖学金", "适合愿意考虑区域强校、希望降低成本的学生。", Banknote],
        ["校级奖学金", "适合本科、语言项目和预算相对灵活的学生。", FileSearch],
        ["低成本城市策略", "把城市成本纳入选校，比单纯追逐奖学金更稳。", ShieldCheck]
      ]
    : [
        ["CSC Scholarship", "Best for strong academic profiles with verified target programs and complete documents.", Award],
        ["Provincial Scholarship", "Useful for students open to strong regional universities and lower-cost destinations.", Banknote],
        ["University Scholarship", "Often practical for bachelor, language, and flexible-budget applicants.", FileSearch],
        ["Low-cost City Strategy", "City affordability can reduce pressure more reliably than chasing scholarships alone.", ShieldCheck]
      ];

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {tx("Scholarship matching", "奖学金匹配", "Tìm học bổng phù hợp")}
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-ink">
              {isZh ? "找到更可执行的中国留学资助路径" : "Find a practical funding path for China study"}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {isZh
                ? "奖学金不是只看名字。学位层级、专业、预算、城市成本、项目语言和申请截止日期都会影响最终方案。"
                : "Scholarship planning is not just about names. Degree level, major, budget, city cost, program language, and deadlines all shape the final strategy."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/consultation`}>{isZh ? "获取人工评估" : "Get human review"}</ButtonLink>
              <ButtonLink href={`${prefix}/universities?scholarship=true`} variant="secondary">
                {tx("Browse scholarship schools", "查看有奖学金方向的学校", "Xem các trường có học bổng")}
              </ButtonLink>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-6">
            <ShieldCheck className="text-primary" size={28} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-ink">{isZh ? "重要提醒" : "Important note"}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {isZh
                ? "本页是 MVP 规则匹配，不替代学校官网、招生简章和顾问人工核验。正式申请前必须确认最新政策。"
                : "This MVP matcher does not replace official university pages, admissions notices, or counselor verification. Always confirm current policy before applying."}
            </p>
          </aside>
        </section>

        <section className="mt-12">
          <ScholarshipMatcher locale={locale} />
        </section>

        <section className="mt-12">
          <SectionHeading
            title={isZh ? "主要资助路径" : "Main funding paths"}
            description={isZh ? "真实方案通常是奖学金、低成本城市、合适学校和申请时间线的组合。" : "A real plan usually combines scholarships, lower-cost cities, suitable schools, and application timing."}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cards.map(([title, body, Icon]) => (
              <article key={String(title)} className="rounded-lg border border-slate-200 bg-white p-5">
                <Icon size={24} className="text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-bold text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
