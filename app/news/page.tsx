import { ArrowRight, BookOpen, Globe2, GraduationCap, Newspaper, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Education News",
  description: "China and global education news for international students: study in China, scholarships, admissions, policy updates, Chinese learning, and student stories.",
  path: "/news"
});

type Article = {
  category: string;
  title: string;
  summary: string;
  date: string;
  href: string;
};

const zhArticles: Article[] = [
  {
    category: "中国留学",
    title: "为什么越来越多国际学生重新关注中国大学？",
    summary: "奖学金、中文学习、产业机会和城市体验正在共同改变学生对中国留学的判断。",
    date: "编辑专题",
    href: "/why-china"
  },
  {
    category: "奖学金动态",
    title: "来中国留学，哪些奖学金路线最值得先评估？",
    summary: "国家、省市、学校和专项项目并不是孤立选择，真正的关键是把学生背景与学校机会匹配起来。",
    date: "持续更新",
    href: "/scholarships"
  },
  {
    category: "城市与生活",
    title: "选择留学城市，不只是选择一所大学。",
    summary: "生活成本、气候、美食、实习机会和城市性格，会直接影响国际学生在中国的幸福感。",
    date: "城市观察",
    href: "/cities"
  }
];

const enArticles: Article[] = [
  {
    category: "Study in China",
    title: "Why international students are looking at Chinese universities again",
    summary: "Scholarships, Chinese language, industry opportunities, and city life are reshaping how students evaluate China.",
    date: "Editorial",
    href: "/why-china"
  },
  {
    category: "Scholarships",
    title: "Which China scholarship routes should students assess first?",
    summary: "National, provincial, university, and special scholarships work best when matched to a student's real profile.",
    date: "Updated",
    href: "/scholarships"
  },
  {
    category: "Cities",
    title: "Choosing a study city is not only choosing a university",
    summary: "Cost, climate, food, internships, and city character shape the daily happiness of international students in China.",
    date: "City Watch",
    href: "/cities"
  }
];

const zhCategories = [
  ["中国留学", "政策、趋势、招生变化和国际学生真实需求。"],
  ["奖学金动态", "国家、省市、学校和专项奖学金的机会观察。"],
  ["大学招生", "本科、硕士、语言项目、英文授课和申请节点。"],
  ["全球教育", "各国教育政策、人才流动和国际合作趋势。"],
  ["中文学习", "中文能力、HSK、文化体验和职业竞争力。"],
  ["学生故事", "让学生用自己的经历讲述为什么选择中国。"]
];

const enCategories = [
  ["Study in China", "Policy, trends, admissions updates, and real student needs."],
  ["Scholarships", "National, provincial, university, and special scholarship opportunity watch."],
  ["Admissions", "Bachelor, master, language, English-taught programs, and application timing."],
  ["Global Education", "Education policies, talent mobility, and international cooperation."],
  ["Chinese Learning", "Chinese language, HSK, culture, and career advantage."],
  ["Student Stories", "Students explaining why China became their choice."]
];

export default async function NewsPage() {
  const locale = await getCurrentLocale();
  const isZh = locale === "zh";
  const prefix = localePrefix(locale);
  const articles = isZh ? zhArticles : enArticles;
  const categories = isZh ? zhCategories : enCategories;
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;

  return (
    <main className="bg-[#fff8ef]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: isZh ? "教育资讯" : "Education News",
          description: isZh
            ? "面向国际学生的中国与全球教育资讯入口。"
            : "China and global education news for international students.",
          url: `https://www.silkstudy.com${localize("/news")}`
        }}
      />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber-300">
              <Newspaper size={18} aria-hidden="true" />
              {isZh ? "教育资讯" : "Education News"}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {isZh ? "读懂中国教育，也看见全球年轻人的新选择。" : "Understand China education and the new choices of global youth."}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              {isZh
                ? "这里报道中国乃至全球教育方面的新闻：留学政策、大学招生、奖学金机会、中文学习、国际教育趋势和真实学生故事。资讯不是为了堆砌消息，而是帮助学生更早做出正确判断。"
                : "News on China and global education: policies, admissions, scholarships, Chinese learning, international education trends, and real student stories. The goal is not noise, but better decisions."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localize("/scholarships")}>{isZh ? "先看奖学金机会" : "View Scholarships"}</ButtonLink>
              <ButtonLink href={localize("/consultation")} variant="secondary">{isZh ? "免费咨询" : "Free Consultation"}</ButtonLink>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <ShieldCheck className="text-amber-300" size={30} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">{isZh ? "编辑原则" : "Editorial Principle"}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              {isZh
                ? "重要政策、奖学金和招生信息，正式申请前仍需回到学校官网和主管部门通知核验。SilkStudy 会把资讯转化为更清楚的申请判断。"
                : "Before formal application, policies, scholarships, and admissions details must still be checked against official school and authority notices."}
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.title} className={`rounded-2xl border bg-white p-6 shadow-sm ${index === 0 ? "border-red-200 md:col-span-2" : "border-slate-200"}`}>
              <p className="text-sm font-bold text-red-700">{article.category}</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-950">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{article.summary}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{article.date}</span>
                <Link href={localize(article.href)} className="inline-flex items-center gap-1 text-sm font-bold text-red-700 hover:text-red-800">
                  {isZh ? "阅读相关内容" : "Read more"} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">
              {isZh ? "栏目规划" : "Sections"}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              {isZh ? "未来这里会持续更新这些方向。" : "This page will grow around these beats."}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, body], index) => {
              const icons = [GraduationCap, Sparkles, BookOpen, Globe2, Newspaper, ShieldCheck];
              const Icon = icons[index] ?? Newspaper;
              return (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon size={22} className="text-red-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-red-600 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-wide text-red-100">{isZh ? "从资讯到申请" : "From news to action"}</p>
          <h2 className="mt-3 text-3xl font-bold">
            {isZh ? "看到一条政策或奖学金消息，不等于知道自己能不能申请。" : "Reading an update is not the same as knowing whether you can apply."}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-red-50">
            {isZh
              ? "把你的国家、成绩、专业、语言、预算和目标城市告诉我们，我们会帮你把资讯变成可执行的学校与奖学金路线。"
              : "Share your country, grades, major, language, budget, and target city. We turn information into a practical school and scholarship route."}
          </p>
          <Link href={localize("/consultation?source=news")} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-red-700 hover:bg-amber-50">
            {isZh ? "获取免费留学方案" : "Get a free study plan"}
          </Link>
        </section>
      </section>
    </main>
  );
}
