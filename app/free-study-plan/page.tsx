import { ArrowRight, Award, CheckCircle2, FileSearch, GraduationCap, Home, Landmark, MapPinned, MessageCircle, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import Image from "next/image";
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
    title: locale === "zh" ? "免费来华留学方案 — SilkStudy" : "Free China Study Plan — SilkStudy",
    description: locale === "zh"
      ? "SilkStudy 帮国际学生评估中国大学、奖学金、城市成本和申请路线，尽力匹配免学费、住宿支持、生活补助和低成本优质大学。"
      : "SilkStudy helps international students assess Chinese universities, scholarships, city costs, and application routes, aiming for tuition waivers, housing support, stipends, and high-value schools.",
    path: "/free-study-plan",
    image: "/images/student-city-life.png",
    locale
  });
}

const savingRoutes = [
  {
    icon: Award,
    titleZh: "奖学金覆盖",
    titleEn: "Scholarship coverage",
    bodyZh: "优先评估国家、省市、学校和专项奖学金，寻找免学费、高比例减免、住宿支持或生活补助机会。",
    bodyEn: "We first assess national, provincial, university, and special scholarships for tuition waivers, reductions, housing support, or stipends."
  },
  {
    icon: GraduationCap,
    titleZh: "学校梯度",
    titleEn: "School ladder",
    bodyZh: "不是只盯少数名校，而是把冲刺、匹配、稳妥学校一起设计，兼顾质量、录取概率和奖学金空间。",
    bodyEn: "We design reach, match, and safer schools together, balancing quality, admission probability, and scholarship potential."
  },
  {
    icon: MapPinned,
    titleZh: "城市成本",
    titleEn: "City cost",
    bodyZh: "同样的奖学金金额，在不同城市生活质量差异很大。我们会把城市消费、交通和生活便利度一起比较。",
    bodyEn: "The same scholarship can mean very different daily life in different cities. We compare cost, transport, and convenience together."
  },
  {
    icon: FileSearch,
    titleZh: "官方核验",
    titleEn: "Official verification",
    bodyZh: "申请前核验学校官网招生简章、奖学金通知、材料要求、截止日期和续评规则，减少信息差。",
    bodyEn: "Before applying, we verify official guides, scholarship notices, documents, deadlines, and renewal rules to reduce information gaps."
  }
];

const studentTypes = [
  ["预算有限，但想读一所真正值得来的中国大学", "Students with limited budgets who still want a worthwhile Chinese university"],
  ["想申请本科、硕士、博士或中文预科", "Applicants for bachelor, master, PhD, or Chinese-language pathways"],
  ["希望尽量免学费，最好还能获得住宿或生活补助", "Students seeking tuition waivers, housing support, or living allowance where possible"],
  ["不知道哪些学校还有奖学金空间，需要有人帮忙筛选", "Students unsure which schools still have scholarship opportunities"],
  ["想在中国学习中文、体验文化，也关注未来职业机会", "Students who want Chinese language, culture, and future career opportunities"]
];

const steps = [
  {
    titleZh: "提交基本信息",
    titleEn: "Submit your profile",
    bodyZh: "告诉我们你的国家、学历、专业、预算、语言水平和目标城市。",
    bodyEn: "Tell us your country, education level, major, budget, language level, and target city."
  },
  {
    titleZh: "评估低成本路线",
    titleEn: "Assess lower-cost routes",
    bodyZh: "我们先判断是否有免学费、生活补助、住宿支持或高性价比学校组合。",
    bodyEn: "We first check possible tuition waivers, stipends, housing support, or high-value school combinations."
  },
  {
    titleZh: "核验学校通知",
    titleEn: "Verify school notices",
    bodyZh: "把方案落到学校官网、当年招生简章和实际申请窗口上。",
    bodyEn: "We connect the plan to official school notices, current admission guides, and real application windows."
  },
  {
    titleZh: "形成申请方案",
    titleEn: "Build the application plan",
    bodyZh: "给你一份更清楚的学校梯度、材料清单、时间线和下一步行动建议。",
    bodyEn: "You receive a clearer school ladder, document checklist, timeline, and next-step recommendations."
  }
];

export default async function FreeStudyPlanPage() {
  const locale = await getCurrentLocale();
  const isZh = locale === "zh";
  const prefix = localePrefix(locale);

  return (
    <main className="bg-[#fff8ef] text-slate-900">
      <JsonLd
        data={faqJsonLd([
          {
            question: "Can SilkStudy make studying in China completely free?",
            answer: "SilkStudy helps students assess routes that may waive tuition and may include housing or living allowance. Final funding depends on official school and scholarship review, and we do not guarantee results."
          },
          {
            question: "What does the free China study plan include?",
            answer: "The plan can include school matching, scholarship route assessment, city cost comparison, document preparation direction, and next-step application suggestions."
          }
        ])}
      />

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/student-city-life.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.46]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-red-950/50" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_390px] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-white/10 px-4 py-2 text-sm font-bold text-amber-100 backdrop-blur">
              <Sparkles size={16} aria-hidden="true" />
              {isZh ? "免费来华留学方案" : "Free China Study Plan"}
            </p>
            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {isZh ? "尽量不花钱，也能来中国读一所好大学。" : "Study in China with the lowest realistic cost possible."}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">
              {isZh
                ? "我们会根据你的学历、专业、预算、语言水平和国家背景，帮你评估免学费、住宿支持、生活补助和低成本优质大学路线。目标不是夸张承诺，而是把真实机会找出来。"
                : "Based on your education, major, budget, language level, and country background, we assess tuition waivers, housing support, stipends, and high-value university routes. The goal is not exaggerated promises, but finding real opportunities."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#free-plan-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-red-700">
                {isZh ? "现在免费评估" : "Get Free Assessment"}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <ButtonLink href={`${prefix}/scholarships`} variant="secondary">{isZh ? "先了解奖学金" : "Understand Scholarships"}</ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {isZh ? "适合学生、家长、代理商转发。首次方案评估免费。" : "Built for students, parents, and agents to share. First assessment is free."}
            </p>
          </div>

          <aside className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <WalletCards className="text-amber-300" size={34} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">{isZh ? "我们重点帮你算这笔账" : "We help calculate the real cost"}</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-100">
              {(isZh
                ? ["学费能不能免？", "住宿能不能支持？", "有没有生活费补助？", "哪个城市总成本更低？", "哪些学校更值得申请？"]
                : ["Can tuition be waived?", "Can housing be supported?", "Is living allowance possible?", "Which city lowers total cost?", "Which schools are worth applying to?"]
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {savingRoutes.map(({ icon: Icon, titleZh, titleEn, bodyZh, bodyEn }) => (
            <article key={titleEn} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <Icon size={26} className="text-red-600" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold text-slate-950">{isZh ? titleZh : titleEn}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{isZh ? bodyZh : bodyEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">{isZh ? "适合谁" : "Who this is for"}</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-950">
              {isZh ? "如果你不是预算无限，更应该先做一次方案评估。" : "If your budget is not unlimited, start with an assessment."}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              {isZh
                ? "来华留学不是只有“名校全自费”一种路线。很多学生真正需要的是：找到足够好的学校、合适的专业、可承受的城市和尽可能高的奖学金覆盖。"
                : "Studying in China is not only about self-funding at famous schools. Many students need the right mix of good schools, suitable majors, affordable cities, and the highest realistic scholarship coverage."}
            </p>
          </div>
          <div className="grid gap-3">
            {studentTypes.map(([zh, en]) => (
              <p key={en} className="flex rounded-xl border border-slate-200 bg-[#fff8ef] p-4 text-sm font-semibold leading-6 text-slate-800">
                <CheckCircle2 size={18} className="mr-3 mt-1 shrink-0 text-emerald-700" aria-hidden="true" />
                {isZh ? zh : en}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">{isZh ? "四步形成方案" : "Four steps"}</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-950">
              {isZh ? "从“我想去中国”到“我知道下一步怎么做”。" : "From “I want China” to “I know the next step.”"}
            </h2>
            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => (
                <article key={step.titleEn} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[54px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">{isZh ? step.titleZh : step.titleEn}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{isZh ? step.bodyZh : step.bodyEn}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <ShieldCheck className="text-amber-700" size={30} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-amber-950">{isZh ? "合规边界必须说清楚" : "The compliance boundary is clear"}</h2>
            <p className="mt-3 text-sm leading-7 text-amber-950">
              {isZh
                ? "我们可以尽力帮学生寻找免学费、住宿支持、生活补助和高性价比学校路线，但不承诺“保证录取、保证奖学金、内部名额”。最终结果以学校及主管部门当年官方通知和审核结果为准。"
                : "We do our best to find tuition waivers, housing support, living allowance, and high-value school routes, but we do not promise guaranteed admission, guaranteed scholarships, or hidden quotas. Final results depend on official notices and review decisions."}
            </p>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-amber-950">
              <p className="flex gap-3"><Landmark size={17} className="mt-1 shrink-0" aria-hidden="true" />{isZh ? "以学校官网和当年招生简章为准" : "Official school notices come first"}</p>
              <p className="flex gap-3"><Home size={17} className="mt-1 shrink-0" aria-hidden="true" />{isZh ? "把城市生活成本纳入判断" : "City living cost is part of the plan"}</p>
              <p className="flex gap-3"><MessageCircle size={17} className="mt-1 shrink-0" aria-hidden="true" />{isZh ? "提交后会通过邮件通知我们跟进" : "Submission notifies us by email for follow-up"}</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="free-plan-form" className="scroll-mt-24 bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-amber-300">{isZh ? "提交资料" : "Submit your profile"}</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">{isZh ? "先把你的条件发给我们。" : "Send us your profile first."}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {isZh
                ? "我们会优先判断：你是否适合全额或高覆盖奖学金、哪些城市更省钱、哪些学校更值得申请、下一步材料应该怎么准备。"
                : "We will first assess whether full or high-coverage scholarships fit you, which cities lower cost, which schools are worth applying to, and how to prepare next."}
            </p>
          </div>
          <div className="text-slate-900">
            <ScholarshipAssessmentForm locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
