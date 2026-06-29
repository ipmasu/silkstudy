import { getLocale } from "next-intl/server";
import {
  Banknote,
  CalendarCheck,
  CheckCircle2,
  FileText,
  GraduationCap,
  MapPinned,
  MessageSquareText,
  Plane,
  School,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";

type ProgressCard = {
  title: string;
  body: string;
  status: string;
  Icon: LucideIcon;
};

function progressCards(isZh: boolean): ProgressCard[] {
  return isZh
    ? [
        {
          title: "选校清单",
          body: "根据专业、预算、城市偏好和奖学金可能性生成 6-10 所候选学校。",
          status: "准备中",
          Icon: School
        },
        {
          title: "奖学金匹配",
          body: "判断 CSC、省级奖学金、校级奖学金和低成本城市组合。",
          status: "待评估",
          Icon: Banknote
        },
        {
          title: "材料检查",
          body: "护照、成绩单、毕业证明、语言成绩、推荐信和学习计划逐项确认。",
          status: "待上传",
          Icon: FileText
        },
        {
          title: "申请时间线",
          body: "按目标入学季倒排截止日期、材料准备、递交、面试和签证步骤。",
          status: "待规划",
          Icon: CalendarCheck
        }
      ]
    : [
        {
          title: "School shortlist",
          body: "Build 6-10 candidate schools from major, budget, city preference, and scholarship fit.",
          status: "Preparing",
          Icon: School
        },
        {
          title: "Scholarship match",
          body: "Compare CSC, provincial, university scholarships, and lower-cost city strategies.",
          status: "To assess",
          Icon: Banknote
        },
        {
          title: "Document check",
          body: "Track passport, transcripts, graduation proof, language scores, recommendation letters, and study plan.",
          status: "To upload",
          Icon: FileText
        },
        {
          title: "Application timeline",
          body: "Work backward from intake deadlines through documents, submission, interview, and visa steps.",
          status: "To plan",
          Icon: CalendarCheck
        }
      ];
}

function timeline(isZh: boolean) {
  return isZh
    ? [
        ["第 1 步", "提交背景", "国家、预算、专业、目标城市、语言情况。"],
        ["第 2 步", "确认方向", "比较学校、城市生活、奖学金和申请难度。"],
        ["第 3 步", "准备材料", "成绩单、毕业证明、语言成绩、推荐信、学习计划。"],
        ["第 4 步", "递交申请", "按学校截止日期递交，并持续跟进补件。"],
        ["第 5 步", "录取与签证", "确认录取、住宿、缴费、JW 表、签证和抵达安排。"]
      ]
    : [
        ["Step 1", "Submit profile", "Country, budget, major, target city, and language background."],
        ["Step 2", "Confirm direction", "Compare schools, city life, scholarships, and admission difficulty."],
        ["Step 3", "Prepare documents", "Transcripts, graduation proof, language scores, references, and study plan."],
        ["Step 4", "Submit applications", "Apply by school deadlines and follow up on missing materials."],
        ["Step 5", "Admission and visa", "Confirm offer, housing, payment, JW forms, visa, and arrival plan."]
      ];
}

function matchingSignals(isZh: boolean): [LucideIcon, string, string][] {
  return isZh
    ? [
        [GraduationCap, "专业匹配", "医学、AI、工程、商科和中文项目需要不同学校组合。"],
        [MapPinned, "城市匹配", "生活成本、气候、实习机会和旅行吸引力会影响长期体验。"],
        [ShieldCheck, "风险控制", "排名、学费、官网、申请要求和奖学金信息必须核验。"],
        [Plane, "抵达计划", "签证、住宿、接机、注册和城市适应需要提前安排。"]
      ]
    : [
        [GraduationCap, "Major fit", "Medicine, AI, engineering, business, and Chinese programs need different school mixes."],
        [MapPinned, "City fit", "Cost, climate, internships, and travel appeal shape long-term experience."],
        [ShieldCheck, "Risk control", "Ranking, tuition, website, requirements, and scholarship details must be verified."],
        [Plane, "Arrival plan", "Visa, housing, pickup, registration, and city adaptation should be prepared early."]
      ];
}

export default async function DashboardPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {isZh ? "学生申请工作台" : "Student application dashboard"}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {isZh ? "从选校到签证的申请进度" : "Application progress from shortlist to visa"}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {isZh
                ? "这是未来学生账户系统的核心页面。当前 MVP 先展示完整申请路径、奖学金匹配逻辑和材料清单，后续会接入真实账号、上传和顾问跟进。"
                : "This is the future core of the student account system. The MVP first shows the full application path, scholarship matching logic, and document checklist; account uploads and counselor follow-up can connect later."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/consultation`}>
                {isZh ? "开始免费咨询" : "Start free consultation"}
              </ButtonLink>
              <ButtonLink href={`${prefix}/universities`} variant="secondary">
                {isZh ? "浏览学校" : "Browse schools"}
              </ButtonLink>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-6">
            <MessageSquareText className="text-primary" size={26} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-ink">{isZh ? "下一步" : "Next step"}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {isZh
                ? "提交咨询表后，CRM 会生成 New 线索，顾问可以在后台继续补充备注、更新状态并导出跟进表。"
                : "After submitting the consultation form, the CRM creates a New lead. Counselors can add notes, update status, and export follow-up reports."}
            </p>
          </aside>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {progressCards(isZh).map(({ title, body, status, Icon }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-primary">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="rounded bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700">{status}</span>
              </div>
              <h2 className="mt-5 text-lg font-bold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">{isZh ? "申请时间线" : "Application timeline"}</h2>
            <div className="mt-6 grid gap-4">
              {timeline(isZh).map(([step, title, body]) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
                    {step.replace(/\D/g, "") || step}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">{isZh ? "奖学金与选校匹配信号" : "Scholarship and school-fit signals"}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {matchingSignals(isZh).map(([Icon, title, body]) => (
                <article key={String(title)} className="rounded-lg bg-surface p-4">
                  <Icon size={20} className="text-primary" aria-hidden="true" />
                  <p className="mt-3 font-bold text-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-lg bg-primary p-8 text-white">
          <CheckCircle2 size={28} aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold">{isZh ? "MVP 已预留真实申请系统" : "The MVP is ready for a real application system"}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-blue-100">
            {isZh
              ? "后续可以继续增加学生登录后的材料上传、学校短名单、顾问任务、录取状态、付款节点和签证进度。当前页面先把业务路径固定下来。"
              : "The next layer can add logged-in uploads, school shortlists, counselor tasks, admission status, payment milestones, and visa progress. This page fixes the product path first."}
          </p>
        </section>
      </div>
    </main>
  );
}
