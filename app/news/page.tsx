import { ArrowRight, BookOpen, Globe2, GraduationCap, Newspaper, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();

  return buildMetadata({
    ...({
  title: "Education News",
  description: "China and global education news for international students: study in China, scholarships, admissions, policy updates, Chinese learning, and student stories.",
  path: "/news"
}),
    locale
  });
}

type Article = {
  category: string;
  title: string;
  summary: string;
  date: string;
  href: string;
  source?: string;
};

const zhArticles: Article[] = [
  {
    category: "头条",
    title: "历史性突破！中国数学家王虹、邓煜双双斩获2026年菲尔兹奖",
    summary: "中国籍数学家首次摘得菲尔兹奖，两位北大数学校友同时站上世界数学之巅。这不仅是个人荣誉，也是中国基础学科教育长期积累的高光时刻。",
    date: "2026-07-24",
    href: "/news/chinese-mathematicians-fields-medal-2026"
  },
  {
    category: "中国教育开放",
    title: "中国继续扩大高水平教育对外开放，鼓励高水平理工类中外合作",
    summary: "从近期教育规划信号看，中国将继续建设具有全球影响力的教育品牌，欢迎高水平外国理工类大学在华开展合作办学，并加强与欧洲、北美、周边国家、一带一路和全球南方伙伴的教育合作。",
    date: "2026-07-06",
    href: "https://www.chinadaily.com.cn/a/202607/06/WS6a4afd37a310986e2b463a36.html",
    source: "China Daily"
  },
  {
    category: "中国-东盟",
    title: "2026中国-东盟教育交流周在贵阳开幕，区域教育合作继续升温",
    summary: "本届交流周在开幕期间设置35项活动，全年还将举办60项常态化主题活动。对东盟学生来说，中国西南地区正在成为教育交流、职业教育和产业人才合作的重要入口。",
    date: "2026-07-29",
    href: "https://www.eguizhou.gov.cn/2026-07/29/c_1201151.htm",
    source: "eGuizhou"
  },
  {
    category: "跨境教育",
    title: "中国释放跨境教育政策延续信号，强调高质量国际合作",
    summary: "英国文化教育协会观察指出，中国在6月继续释放跨境教育政策稳定和延续的信号。对国际学生和合作机构而言，这意味着中国仍把高质量国际教育合作作为长期方向。",
    date: "2026-06-11",
    href: "https://opportunities-insight.britishcouncil.org/short-articles/news/china-reaffirms-policy-continuity-transnational-education",
    source: "British Council"
  },
  {
    category: "全球留学",
    title: "美国学生签证政策收紧：国际学生最长停留期限将被限制为4年",
    summary: "美国国土安全部宣布新规，将改变长期以来按学习身份持续停留的做法。对全球学生来说，签证确定性正在成为选择留学目的地时越来越重要的因素。",
    date: "2026-07-16",
    href: "https://apnews.com/article/trump-student-visa-international-02a22ed8b883096b78c3745fce7892a3",
    source: "AP News"
  },
  {
    category: "全球留学",
    title: "NAFSA预测：美国2026秋季或减少11.1万名国际学生",
    summary: "NAFSA与JB International的研究预计，美国国际学生减少可能带来34亿美元经济损失和近4万个就业岗位影响。全球学生流向正在出现新的再平衡机会。",
    date: "2026-08-11",
    href: "https://www.nafsa.org/fall2026outlook",
    source: "NAFSA"
  },
  {
    category: "国际合作",
    title: "美国国防部要求30所大学审查与外国高校合作，学术合作不确定性上升",
    summary: "AP报道称，美国国防部要求30所大学审查与外国机构的合作关系，重点涉及中国等国家。这提醒学生和高校：国际科研与教育合作正在更深地受到政策环境影响。",
    date: "2026-08-18",
    href: "https://apnews.com/article/pentagon-audit-china-harvard-mit-738832f9f20186dc5f9ef1aa39914636",
    source: "AP News"
  },
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
    category: "Top Story",
    title: "Historic breakthrough: Chinese mathematicians win the 2026 Fields Medal",
    summary: "Hong Wang and Yu Deng became the first Chinese nationals to receive the Fields Medal, marking a major moment for China's mathematics education and research ecosystem.",
    date: "2026-07-24",
    href: "/news/chinese-mathematicians-fields-medal-2026"
  },
  {
    category: "China Education",
    title: "China signals continued high-level education opening and international cooperation",
    summary: "Recent policy signals point to globally recognized Chinese education brands, more high-quality foreign science and engineering cooperation in China, and stronger links with Europe, North America, neighboring countries, BRI partners, and the Global South.",
    date: "2026-07-06",
    href: "https://www.chinadaily.com.cn/a/202607/06/WS6a4afd37a310986e2b463a36.html",
    source: "China Daily"
  },
  {
    category: "China-ASEAN",
    title: "2026 China-ASEAN Education Cooperation Week opens in Guiyang",
    summary: "The event launched with 35 opening-period activities and 60 year-round thematic activities, showing how Southwest China is becoming a major education, TVET, and talent cooperation gateway for ASEAN students.",
    date: "2026-07-29",
    href: "https://www.eguizhou.gov.cn/2026-07/29/c_1201151.htm",
    source: "eGuizhou"
  },
  {
    category: "Transnational Education",
    title: "China reaffirms policy continuity on transnational education",
    summary: "The British Council observed that China continued to signal stability and continuity for high-quality transnational education cooperation in June, an important signal for institutions and mobile students.",
    date: "2026-06-11",
    href: "https://opportunities-insight.britishcouncil.org/short-articles/news/china-reaffirms-policy-continuity-transnational-education",
    source: "British Council"
  },
  {
    category: "Global Mobility",
    title: "U.S. student visa rule adds four-year stay cap for international students",
    summary: "The U.S. Department of Homeland Security finalized a rule limiting international student stays to four years unless students obtain further approval, making visa certainty a bigger factor in study-destination decisions.",
    date: "2026-07-16",
    href: "https://apnews.com/article/trump-student-visa-international-02a22ed8b883096b78c3745fce7892a3",
    source: "AP News"
  },
  {
    category: "Global Mobility",
    title: "NAFSA projects 111,000 fewer international students in the U.S. this fall",
    summary: "NAFSA and JB International projected that international student declines could cost the U.S. economy $3.4 billion and nearly 40,000 jobs, suggesting a global rebalance in student flows.",
    date: "2026-08-11",
    href: "https://www.nafsa.org/fall2026outlook",
    source: "NAFSA"
  },
  {
    category: "Academic Cooperation",
    title: "Pentagon orders 30 U.S. universities to audit foreign academic partnerships",
    summary: "AP reported that the U.S. Department of Defense ordered 30 universities to review foreign partnerships, especially involving Chinese institutions. For students, policy risk is becoming part of the study-abroad calculation.",
    date: "2026-08-18",
    href: "https://apnews.com/article/pentagon-audit-china-harvard-mit-738832f9f20186dc5f9ef1aa39914636",
    source: "AP News"
  },
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
  const articleHref = (href: string) => href.startsWith("http") ? href : localize(href);
  const isExternal = (href: string) => href.startsWith("http");

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
            <article key={article.title} className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${index === 0 ? "border-red-200 md:col-span-2" : "border-slate-200"}`}>
              {index === 0 ? (
                <div className="relative aspect-[16/9]">
                  <Image src="/images/news/fields-medal-2026.png" alt={isZh ? "数学黑板前的学术讨论场景" : "Academic mathematics discussion at a chalkboard"} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
                </div>
              ) : null}
              <div className="p-6">
                <p className="text-sm font-bold text-red-700">{article.category}</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-950">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.summary}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{article.date}{article.source ? ` · ${article.source}` : ""}</span>
                  {isExternal(article.href) ? (
                    <a href={articleHref(article.href)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-red-700 hover:text-red-800">
                      {isZh ? "查看来源" : "View source"} <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={articleHref(article.href)} className="inline-flex items-center gap-1 text-sm font-bold text-red-700 hover:text-red-800">
                      {isZh ? "阅读全文" : "Read more"} <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  )}
                </div>
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
          <Link href={localize("/free-study-plan")} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-red-700 hover:bg-amber-50">
            {isZh ? "获取免费留学方案" : "Get a free study plan"}
          </Link>
        </section>
      </section>
    </main>
  );
}
