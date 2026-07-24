import { Award, Banknote, CheckCircle2, FileSearch, GraduationCap, Landmark, School, ShieldCheck, Sparkles, Users, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "China Scholarship Matching",
  description: "Understand Chinese national, provincial, university, and special scholarship routes for international students, with compliant SilkStudy planning support.",
  path: "/scholarships"
});

type Copy = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  resourceTitle: string;
  resourceBody: string;
  complianceTitle: string;
  complianceBody: string;
  principleTitle: string;
  principleBody: string;
  layersTitle: string;
  layersDescription: string;
  layers: { title: string; body: string; icon: LucideIcon }[];
  truthTitle: string;
  truthItems: string[];
  supportTitle: string;
  supportDescription: string;
  supportItems: { title: string; body: string; icon: LucideIcon }[];
  promiseTitle: string;
  promiseBody: string;
};

const copies: Record<string, Copy> = {
  zh: {
    eyebrow: "奖学金路线评估",
    title: "中国奖学金不是少数人的机会，而是每个学生都应该认真评估的路线。",
    intro: "很多外国青年不知道，中国不仅有顶尖大学，也有大量实力强、成本低、奖学金友好的好学校。SilkStudy 帮你从国家、省市、学校和专项项目中，找到更适合你条件的低成本来华留学路径。",
    primaryCta: "免费评估我的奖学金机会",
    secondaryCta: "查看奖学金机会库",
    resourceTitle: "我们的资源优势",
    resourceBody: "SilkStudy 持续整理国家级、省市级、学校级和专项奖学金信息，并结合学校当年招生简章、国际学生办公室通知和实际申请窗口，为学生筛选当前最值得核验的奖学金路线。我们与多所中国高校及相关教育资源保持长期沟通，能够帮助学生更准确理解学校要求、项目特点、奖学金名额和申请节奏，减少信息差。",
    complianceTitle: "合规边界",
    complianceBody: "我们不能替代学校审核，也不承诺任何不合规录取。所有录取、奖学金金额、覆盖范围、名额和截止日期，都必须以学校及相关主管部门当年官方通知和最终审核结果为准。",
    principleTitle: "核心原则",
    principleBody: "尽量让每一个孩子用最少的钱，读中国尽可能好的大学。不是盲目追最贵城市或最热门学校，而是把学校质量、录取概率、奖学金覆盖、城市成本和专业适配放在一起判断。",
    layersTitle: "中国奖学金的四层机会",
    layersDescription: "不要只盯一个奖学金名称。真正的机会常常来自多层级、多学校、多城市的组合筛选。",
    layers: [
      { title: "国家级奖学金", body: "包括中国政府奖学金等路径，部分项目可能覆盖学费、住宿、保险及生活费。竞争强，需要提前准备和严格核验。", icon: Landmark },
      { title: "省市级奖学金", body: "很多省市为了吸引国际学生，会设置区域奖学金、学费减免或一次性奖励，适合与低生活成本城市一起比较。", icon: Banknote },
      { title: "学校级奖学金", body: "很多高校有校长奖学金、国际学生奖学金、新生奖学金或优秀生奖学金，是许多学生最现实的降本路径。", icon: School },
      { title: "专项奖学金", body: "特定国家、专业、中文学习者、合作项目、未招满名额和区域交流项目，都可能隐藏着高性价比机会。", icon: Sparkles }
    ],
    truthTitle: "很多学生不知道的事实",
    truthItems: [
      "奖学金不只属于成绩最顶尖的人，很多学生至少值得做一次匹配评估。",
      "即使不一定获得全额奖学金，也常常有机会获得学费减免、新生奖励、住宿支持或地方补助。",
      "中国有大量值得申请的好学校，不是只有少数名校才值得来。",
      "同样的奖学金金额，在低成本城市可能带来完全不同的生活质量。",
      "学校、专业、城市、国籍和申请时间匹配得越准确，总成本越可能下降。"
    ],
    supportTitle: "SilkStudy 如何帮助你提高匹配度",
    supportDescription: "我们做的不是虚假承诺，而是把学生条件和学校机会更准确地连接起来。",
    supportItems: [
      { title: "学校梯度设计", body: "根据学生条件设计冲刺学校、匹配学校和稳妥学校，避免只申请高竞争或不适合的学校。", icon: GraduationCap },
      { title: "奖学金优先核验", body: "优先筛查可能免学费、含住宿支持或生活补助的路线，再判断学校和城市组合。", icon: Award },
      { title: "学校沟通与信息确认", body: "帮助学生理解学校要求、项目特点、申请节奏和材料细节，减少因为信息差造成的错过。", icon: Users },
      { title: "官方通知复核", body: "在正式申请前，核验当年招生简章、国际学生办公室通知、截止日期、覆盖范围和续评规则。", icon: FileSearch }
    ],
    promiseTitle: "我们的承诺",
    promiseBody: "我们会尽力帮学生寻找学费减免、住宿支持、生活补助和高性价比学校路线；我们不做“保证录取、保证奖学金、内部名额”这类不合规承诺，只做真实、合规、可执行的申请规划。"
  },
  en: {
    eyebrow: "Scholarship route assessment",
    title: "China scholarships are not only for a few students. Every applicant should assess the route carefully.",
    intro: "Many international students do not realize that China has not only elite universities, but also many strong, affordable, scholarship-friendly schools. SilkStudy helps students compare national, provincial, university, and special scholarship routes against their real profile.",
    primaryCta: "Assess My Scholarship Fit",
    secondaryCta: "View Scholarship Watchlist",
    resourceTitle: "Our resource advantage",
    resourceBody: "SilkStudy continuously organizes national, provincial, municipal, university, and special scholarship information, then checks it against current admission guides, university international office notices, and real application windows. We also maintain long-term communication with Chinese universities and education resources, helping students understand requirements, program fit, quotas, and timing more accurately.",
    complianceTitle: "Compliance boundary",
    complianceBody: "We cannot replace university review, and we do not promise any non-compliant admission. Admission results, scholarship amounts, coverage, quotas, and deadlines must always follow the current official notices and final review decisions of each school and relevant authority.",
    principleTitle: "Core principle",
    principleBody: "Help each student spend as little as realistically possible while aiming for the best suitable Chinese university. The smart route compares school quality, admission probability, scholarship coverage, city cost, and major fit together.",
    layersTitle: "Four layers of scholarship opportunity",
    layersDescription: "Do not look at only one award name. Real opportunity often comes from multi-layer, multi-school, and multi-city comparison.",
    layers: [
      { title: "National scholarships", body: "Routes such as Chinese Government Scholarship may cover tuition, housing, insurance, and living allowance for selected students.", icon: Landmark },
      { title: "Provincial and city scholarships", body: "Many regions offer tuition reductions, one-time awards, or living support to attract international students.", icon: Banknote },
      { title: "University scholarships", body: "President, freshman, international student, and merit scholarships are often the most practical cost-reduction route.", icon: School },
      { title: "Special scholarships", body: "Country-specific, major-specific, Chinese-language, partnership, and unfilled-quota routes may hide strong opportunities.", icon: Sparkles }
    ],
    truthTitle: "What many students do not know",
    truthItems: [
      "Scholarships are not only for the very top students; many applicants deserve at least one serious assessment.",
      "Even when full funding is not realistic, tuition reduction, freshman awards, housing support, or local subsidies may still be possible.",
      "China has many worthwhile universities beyond the few famous names.",
      "The same scholarship amount can mean a very different life in a lower-cost city.",
      "The more accurately school, major, city, nationality, and timing match, the more total cost may fall."
    ],
    supportTitle: "How SilkStudy improves fit",
    supportDescription: "We do not make false promises. We connect student profiles with real opportunities more accurately.",
    supportItems: [
      { title: "School ladder design", body: "We design reach, match, and safer school options so students do not apply blindly.", icon: GraduationCap },
      { title: "Scholarship-first verification", body: "We first check routes that may waive tuition, include housing, or provide living support.", icon: Award },
      { title: "University communication", body: "We help students understand school requirements, program features, timing, and document details.", icon: Users },
      { title: "Official notice review", body: "Before formal application, we verify current admission guides, deadlines, coverage, and renewal rules.", icon: FileSearch }
    ],
    promiseTitle: "Our promise",
    promiseBody: "We do our best to find tuition reduction, housing support, living allowance, and high-value school routes. We do not promise guaranteed admission, guaranteed scholarships, or hidden internal quotas. We provide real, compliant, executable application planning."
  }
};

function getCopy(locale: string) {
  return copies[locale] ?? copies.en;
}

export default async function ScholarshipsPage() {
  const locale = await getCurrentLocale();
  const isZh = locale === "zh";
  const c = getCopy(locale);
  const prefix = localePrefix(locale);

  return (
    <main className="bg-[#fff8ef]">
      <JsonLd
        data={faqJsonLd([
          {
            question: "Can China scholarships cover tuition and living costs?",
            answer: "Some Chinese scholarship routes may cover tuition and may include housing, insurance, or living support. Final coverage depends on the current official notice and review result."
          },
          {
            question: "Can SilkStudy guarantee admission or scholarships?",
            answer: "No. SilkStudy helps students assess and verify suitable routes, but admission and scholarships are decided by schools and relevant authorities through official review."
          }
        ])}
      />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">{c.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{c.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/consultation?topic=scholarship`}>{c.primaryCta}</ButtonLink>
              <ButtonLink href={`${prefix}/scholarship-opportunities`} variant="secondary">{c.secondaryCta}</ButtonLink>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <ShieldCheck className="text-amber-300" size={30} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">{c.complianceTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">{c.complianceBody}</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <Award className="text-red-600" size={28} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">{c.resourceTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{c.resourceBody}</p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <CheckCircle2 className="text-emerald-700" size={28} aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-emerald-950">{c.principleTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-emerald-900">{c.principleBody}</p>
          </article>
        </div>

        <section className="mt-14">
          <SectionHeading title={c.layersTitle} description={c.layersDescription} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {c.layers.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Icon size={24} className="text-red-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <h2 className="text-2xl font-bold">{c.truthTitle}</h2>
            <div className="mt-5 grid gap-3">
              {c.truthItems.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-amber-300" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title={c.supportTitle} description={c.supportDescription} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {c.supportItems.map(({ title, body, icon: Icon }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon size={22} className="text-red-600" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_260px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-700">{isZh ? "真实、合规、可执行" : "Real, compliant, executable"}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">{c.promiseTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{c.promiseBody}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href={`${prefix}/consultation?topic=scholarship`}>{c.primaryCta}</ButtonLink>
              <ButtonLink href={`${prefix}/universities`} variant="secondary">{isZh ? "浏览大学" : "Browse Universities"}</ButtonLink>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
