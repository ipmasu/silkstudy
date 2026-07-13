import type { Metadata } from "next";
import { Award, BookOpen, CheckCircle2, Globe2, Handshake, Languages, Rocket } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { localePrefix } from "@/lib/i18n/routing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Study in China Advantages | SilkStudy",
  description: "Understand why studying in China can be more accessible than many students imagine: lower language thresholds, English-taught programs, scholarships, and one-to-one application guidance.",
  path: "/why-china"
});

const hskRows = [
  ["山东大学", "本科预科项目（一学期）", "HSK 3 级 180 分"],
  ["西南财经大学", "汉语言文学本科", "HSK 4 级 180 分"],
  ["中南大学", "理工科本科", "HSK 4 级 260 分"],
  ["上海中医药大学", "中医预科项目", "HSK 3 级 180 分"]
];

const englishRows = [
  ["北京航空航天大学", "本科（英文授课）", "IELTS 6.0 / TOEFL 90"],
  ["苏州大学", "临床医学 MBBS", "全英文授课"],
  ["中南大学", "本科/硕士（英文授课）", "全英文授课"],
  ["北京电影学院", "本科（英文授课）", "IELTS 6.0"]
];

const scholarshipRows = [
  ["西南交通大学", "校长奖学金", "全额：学费、生活费、保险、住宿"],
  ["青岛大学", "校长奖学金", "全额：学费、住宿、生活费约 1,500 元/月"],
  ["中山大学", "校级一等奖学金", "本科约 3 万/年，硕士约 3.6 万/年"],
  ["上海市政府奖学金", "A 类全额", "学费、住宿、生活费支持"],
  ["广东省政府奖学金", "C 类", "约 10,000 元/人"]
];

const advantages = [
  {
    icon: Languages,
    title: "语言门槛没有想象中高",
    body: "中文授课常见 HSK 3-4 级起步，英文授课项目则让零中文基础学生也有机会先进入中国。"
  },
  {
    icon: Award,
    title: "奖学金覆盖面很广",
    body: "国家、省市、学校和特殊项目共同构成奖学金体系，部分项目能覆盖学费、住宿甚至生活补助。"
  },
  {
    icon: Rocket,
    title: "发展红利就在身边",
    body: "高铁、移动支付、AI、新能源、电商、智能制造和城市治理，都能成为留学生每天接触的真实课堂。"
  }
];

const serviceSteps = [
  "匹配低门槛学校：结合 HSK、英文授课、预算和专业方向",
  "评估奖学金机会：校长奖学金、学校奖学金、省市奖学金等",
  "规划申请路径：选校、材料、时间线、签证和入学准备",
  "真人顾问跟进：把零散信息整理成可执行方案"
];

function DataTable({ rows, headers }: { rows: string[][]; headers: string[] }) {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-slate-950 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-slate-100">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-4 text-slate-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmbeddedCta({ children, href }: { children: string; href: string }) {
  return (
    <div className="mt-7 rounded-lg border border-amber-200 bg-amber-50 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-slate-900">{children}</p>
        <ButtonLink href={href}>免费评估你的留学方案 →</ButtonLink>
      </div>
    </div>
  );
}

export default async function WhyChinaPage() {
  const locale = await getCurrentLocale();
  const prefix = localePrefix(locale);
  const consultationHref = `${prefix}/consultation`;

  return (
    <main className="bg-[#fff8ef] text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.32),_transparent_36%),linear-gradient(135deg,_#020617,_#7f1d1d_55%,_#111827)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 border-l-2 border-amber-300 pl-3 text-sm font-semibold uppercase tracking-wide text-amber-100">
              <Globe2 size={16} aria-hidden="true" />
              Study in China Dividend
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              来中国留学：门槛比你想象的低，成本比你想象的小。
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
              191 个国家和地区的年轻人正在把中国作为新的学习目的地。低门槛语言路径、全英文授课项目、丰富奖学金和高速发展的中国，让“来中国读大学”变成一个越来越现实的选择。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={consultationHref}>免费评估你的留学方案 →</ButtonLink>
              <ButtonLink href={`${prefix}/cities`} variant="secondary">先看看城市 →</ButtonLink>
            </div>
          </div>
          <aside className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h2 className="text-2xl font-bold">三个最现实的问题</h2>
            <div className="mt-5 grid gap-4">
              {advantages.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-lg bg-white/10 p-4">
                  <Icon className="text-amber-200" size={22} aria-hidden="true" />
                  <p className="mt-3 font-bold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">{body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["🎯 低门槛", "HSK 3-4 级、英文授课、预科路径，让更多学生能迈出第一步。"],
            ["💰 不花冤枉钱", "奖学金可能覆盖学费、住宿、生活费，先评估再决定。"],
            ["🚀 高回报", "中文能力、中国经验和高速发展场景，都会成为未来竞争力。"]
          ].map(([title, body]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BookOpen className="text-red-600" size={32} aria-hidden="true" />
          <h2 className="mt-4 text-4xl font-bold tracking-tight">语言门槛有多低？</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            很多学生以为必须中文很好才能来中国。实际上，不少中文授课或预科项目从 HSK 3-4 级起步；如果你英语更好，也可以先选择英文授课项目。
          </p>
          <DataTable headers={["学校", "项目", "HSK 要求"]} rows={hskRows} />
          <EmbeddedCta href={consultationHref}>你的 HSK 成绩能申请哪些学校？让顾问免费帮你判断。</EmbeddedCta>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Languages className="text-red-600" size={32} aria-hidden="true" />
          <h2 className="mt-4 text-4xl font-bold tracking-tight">全英文授课：零中文基础也能来。</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            如果你现在还不会中文，不代表中国留学的大门关闭了。医学、工程、商科、艺术等方向都有英文授课项目，中文可以在中国生活中慢慢补上。
          </p>
          <DataTable headers={["学校", "项目", "语言要求"]} rows={englishRows} />
          <EmbeddedCta href={consultationHref}>英语好也能来中国，免费获取适合你的英文项目方向。</EmbeddedCta>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Award className="text-red-600" size={32} aria-hidden="true" />
          <h2 className="mt-4 text-4xl font-bold tracking-tight">普惠奖学金：不花钱读中国大学，不是幻想。</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            奖学金是中国留学最大的吸引力之一。国家、省市、学校和特殊项目共同形成多层次支持，部分全额奖学金能覆盖学费、住宿和生活费。
          </p>
          <DataTable headers={["学校/项目", "奖学金", "资助内容"]} rows={scholarshipRows} />
          <EmbeddedCta href={consultationHref}>全额奖学金覆盖学费、住宿、生活费，先免费评估你的机会。</EmbeddedCta>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Rocket className="text-red-600" size={32} aria-hidden="true" />
            <h2 className="mt-4 text-4xl font-bold tracking-tight">政策红利：现在正是来中国留学的好时机。</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              中国正在持续扩大高水平教育对外开放，加强“留学中国”品牌和能力建设。更多英文授课项目、更丰富的奖学金和更成熟的城市服务，让国际学生有机会直接参与中国高质量发展的现场。
            </p>
            <EmbeddedCta href={consultationHref}>现在就是来中国留学的重要窗口，免费咨询下一步。</EmbeddedCta>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-bold">我们如何帮你</h3>
            <div className="mt-5 grid gap-4">
              {serviceSteps.map((step) => (
                <p key={step} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="shrink-0 text-emerald-600" size={18} aria-hidden="true" />
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <Handshake className="text-amber-200" size={32} aria-hidden="true" />
            <h2 className="mt-4 text-4xl font-bold">来中国留学：门槛比你想象的低，成本比你想象的小。</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              你不需要自己在海量信息里迷路。告诉我们你的背景、预算、专业和城市偏好，我们帮你把可能性变成一条清楚的路径。
            </p>
          </div>
          <ButtonLink href={consultationHref}>免费评估你的留学方案 →</ButtonLink>
        </div>
      </section>
    </main>
  );
}
