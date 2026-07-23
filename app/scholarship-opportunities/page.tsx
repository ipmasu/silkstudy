import type { Metadata } from "next";
import { AlertCircle, ArrowRight, CheckCircle2, Clock, GraduationCap, MapPin, Search } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata } from "@/lib/seo";
import { scholarshipOpportunities } from "@/lib/scholarship-opportunities";

export const metadata: Metadata = buildMetadata({
  title: "China Scholarship Opportunity Watchlist",
  description: "A SilkStudy watchlist of Chinese university scholarship opportunities to verify early, especially lower-cost and high-value routes many international students miss.",
  path: "/scholarship-opportunities"
});

export default async function ScholarshipOpportunitiesPage() {
  const locale = await getCurrentLocale();
  const isZh = locale === "zh";
  const prefix = localePrefix(locale);

  return (
    <main className="bg-[#fff8ef]">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              {isZh ? "奖学金机会库" : "Scholarship Opportunity Watchlist"}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
              {isZh ? "用尽量少的钱，读尽可能好的中国大学。" : "Spend less, aim higher, and study in China with a smarter scholarship plan."}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {isZh
                ? "很多外国学生不知道，中国不少国家级、省市级、校级和专项奖学金并不只存在于少数名校。真正的机会常常藏在信息差里：学校、城市、专业、国别和申请时间只要匹配得更准确，总成本就可能大幅下降。"
                : "Many international students do not realize that Chinese national, provincial, municipal, university, and special scholarships are not limited to a few famous schools. The real opportunity often sits in the information gap: school, city, major, nationality, and timing."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/consultation?topic=scholarship-watchlist`}>
                {isZh ? "免费核验我的机会" : "Check My Opportunities"}
              </ButtonLink>
              <ButtonLink href={`${prefix}/scholarships`} variant="secondary">
                {isZh ? "使用奖学金匹配器" : "Use Scholarship Matcher"}
              </ButtonLink>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <AlertCircle className="text-amber-300" size={28} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">{isZh ? "这不是空口承诺" : "Not a blind promise"}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              {isZh
                ? "我们会把机会先列出来，但最终仍要逐项核验当年官网简章、名额、截止日期、覆盖金额和续评规则。这样才不会让学生因为旧信息浪费时间和钱。"
                : "We list promising routes first, then verify the current official notice, quota, deadline, coverage, and renewal rules before advising a student."}
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={isZh ? "优先核验" : "Verify first"}
          title={isZh ? "这些机会适合先查名额和截止日期。" : "Start by checking quota and deadline for these routes."}
          description={isZh ? "我们把它们按“低成本潜力、奖学金层级、国别适配、专业适配”放在一起，方便学生快速判断下一步。" : "Grouped by cost potential, scholarship level, country fit, and major fit so students can decide what to verify next."}
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {scholarshipOpportunities.map((item) => (
            <article key={item.id} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-red-700">{isZh ? item.zhCity : item.city}</p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-950">{isZh ? item.zhSchool : item.school}</h2>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                  {isZh ? "待核验机会" : "To verify"}
                </span>
              </div>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <p className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-slate-700">
                  <GraduationCap size={16} className="mt-0.5 shrink-0 text-red-600" />
                  {isZh ? item.zhDegree : item.degree}
                </p>
                <p className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-slate-700">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-red-600" />
                  {isZh ? item.zhRoute : item.route}
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-700">{isZh ? item.zhFit : item.fit}</p>
              <div className="mt-4 grid gap-3">
                <p className="flex gap-2 rounded-xl bg-red-50 p-3 text-sm leading-6 text-red-950">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-red-600" />
                  {isZh ? item.zhCostAngle : item.costAngle}
                </p>
                <p className="flex gap-2 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-900">
                  <Clock size={16} className="mt-1 shrink-0 text-amber-700" />
                  {isZh ? item.zhUrgency : item.urgency}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(isZh ? item.zhTags : item.tags).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-300">
              <Search size={16} aria-hidden="true" />
              {isZh ? "下一步" : "Next step"}
            </p>
            <h2 className="mt-3 text-3xl font-bold">{isZh ? "把学生背景发给我们，我们帮你核验真实机会。" : "Send us the student profile and we will verify the real opportunities."}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {isZh
                ? "我们会结合国家、学历、成绩、专业、预算、中文水平和目标城市，优先查那些可能降低总成本的学校和奖学金通道。"
                : "We compare nationality, degree, grades, major, budget, Chinese level, and preferred cities, then verify the routes most likely to reduce total cost."}
            </p>
          </div>
          <div className="flex items-center lg:justify-end">
            <a href={`${prefix}/consultation?topic=scholarship-watchlist`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
              {isZh ? "提交资料，核验机会" : "Submit Profile"}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
