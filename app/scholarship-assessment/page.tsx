import { Award, CheckCircle2, FileSearch, GraduationCap, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { ScholarshipAssessmentForm } from "@/components/forms/scholarship-assessment-form";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();

  return buildMetadata({
    title: locale === "zh" ? "免费奖学金评估 — SilkStudy" : "Free China Scholarship Assessment — SilkStudy",
    description: locale === "zh"
      ? "提交你的学历、专业、预算和目标城市，SilkStudy 帮你评估中国大学免学费、住宿支持、生活补助和高性价比申请路线。"
      : "Submit your profile, major, budget, and target city. SilkStudy helps assess tuition-waiver, stipend, housing support, and high-value China study routes.",
    path: "/scholarship-assessment",
    locale
  });
}

export default async function ScholarshipAssessmentPage() {
  const locale = await getCurrentLocale();
  const isZh = locale === "zh";
  const prefix = localePrefix(locale);

  return (
    <main className="bg-[#fff8ef]">
      <JsonLd
        data={faqJsonLd([
          {
            question: "Can SilkStudy guarantee a full scholarship?",
            answer: "No. SilkStudy can assess and recommend real scholarship routes, but final admission and scholarship results are decided by universities and official review."
          },
          {
            question: "Can some China scholarships cover tuition and living costs?",
            answer: "Some scholarships may cover tuition and may include housing or living allowance. Coverage depends on the current official notice, quota, student profile, and final review."
          }
        ])}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.28),transparent_34%),linear-gradient(135deg,rgba(127,29,29,0.88),rgba(15,23,42,0.98)_58%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-2 text-sm font-bold text-amber-100">
              <Sparkles size={16} aria-hidden="true" />
              {isZh ? "第一阶段重点入口" : "First-step scholarship route"}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {isZh ? "尽量少花钱，来中国读一所更适合你的好大学。" : "Spend less where possible. Study at a better-fit university in China."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
              {isZh
                ? "很多外国学生不知道，中国有国家、省市、学校和专项多层奖学金，也有大量好学校、好专业和未被充分了解的申请机会。先做一次免费评估，我们帮你判断哪些路线值得优先核验。"
                : "Many international students do not realize China has national, provincial, university, and special scholarships, plus many strong schools that are not yet well known abroad. Start with a free assessment so we can identify routes worth verifying first."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#assessment-form" className="inline-flex min-h-12 items-center justify-center rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-red-700">
                {isZh ? "马上评估我的机会 →" : "Assess My Chance ->"}
              </a>
              <ButtonLink href={`${prefix}/scholarships`} variant="secondary">{isZh ? "先了解奖学金体系" : "Understand Scholarship Routes"}</ButtonLink>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <Award className="text-amber-300" size={34} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">{isZh ? "我们优先寻找什么？" : "What do we look for first?"}</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-100">
              {(isZh
                ? ["免学费或高比例学费减免", "住宿支持或生活补助机会", "录取概率更真实的学校梯度", "城市成本低、生活质量高的组合"]
                : ["Tuition waiver or high tuition reduction", "Housing support or living allowance", "A realistic school application ladder", "Lower-cost cities with better daily life value"]
              ).map((item) => (
                <p key={item} className="flex gap-3">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-amber-300" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-red-700">{isZh ? "合规说明" : "Compliance first"}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950">
            {isZh ? "我们不说空话，也不做违规承诺。" : "No empty promises. No non-compliant guarantees."}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {isZh
              ? "我们可以帮助学生减少信息差，整理学校和奖学金路线，尽力找到免学费、生活补助或低成本组合。但最终录取、奖学金金额、名额、覆盖范围和续评规则，都必须以学校及主管部门当年官方通知和最终审核结果为准。"
              : "We help reduce information gaps, organize school and scholarship routes, and look for tuition-waiver, stipend, or lower-cost combinations. Final admission, scholarship amount, quota, coverage, and renewal rules always depend on current official notices and final review."}
          </p>
          <div className="mt-8 grid gap-4">
            {[
              { icon: FileSearch, title: isZh ? "先核验" : "Verify first", body: isZh ? "官网招生简章、奖学金通知、截止日期和材料要求必须逐项确认。" : "Admission guides, scholarship notices, deadlines, and document requirements must be checked one by one." },
              { icon: GraduationCap, title: isZh ? "再匹配" : "Then match", body: isZh ? "把学生学历、专业、语言、预算、国籍和城市偏好放在一起判断。" : "We compare education level, major, language, budget, nationality, and city preference together." },
              { icon: HeartHandshake, title: isZh ? "最后执行" : "Then execute", body: isZh ? "给学生一条能真正申请、能解释给家长听、能落地的路线。" : "Students need a route they can actually apply for, explain to family, and follow." }
            ].map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                <Icon size={24} className="text-red-600" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
              </article>
            ))}
          </div>
        </div>

        <section id="assessment-form" className="scroll-mt-24">
          <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <ShieldCheck className="text-emerald-700" size={26} aria-hidden="true" />
            <h2 className="mt-3 text-2xl font-bold text-emerald-950">{isZh ? "填写后会发生什么？" : "What happens after you submit?"}</h2>
            <p className="mt-2 text-sm leading-7 text-emerald-900">
              {isZh
                ? "你的信息会进入 SilkStudy 咨询系统，并通过邮件通知我们。我们会根据你的预算、专业、学历和城市偏好，先判断是否存在免学费、生活补助或低成本高价值路线。"
                : "Your profile will be saved in SilkStudy's consultation system and emailed to us. We will assess whether tuition-waiver, stipend, or lower-cost high-value routes may fit your profile."}
            </p>
          </div>
          <ScholarshipAssessmentForm locale={locale} />
        </section>
      </section>
    </main>
  );
}
