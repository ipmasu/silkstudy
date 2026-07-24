import { ArrowLeft, BookOpen, CalendarDays, ExternalLink, GraduationCap, Medal, Share2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata } from "@/lib/seo";

const articlePath = "/news/chinese-mathematicians-fields-medal-2026";

export const metadata: Metadata = buildMetadata({
  title: "中国数学家王虹、邓煜斩获2026年菲尔兹奖",
  description: "中国数学家王虹、邓煜获得2026年菲尔兹奖，标志着中国基础学科教育与数学研究的一次历史性突破。",
  path: articlePath
});

const paragraphs = [
  "当地时间7月23日，2026年国际数学家大会在美国费城开幕。国际数学联盟公布第二十一届菲尔兹奖得主名单，中国青年数学家王虹与邓煜双双获奖。这是中国籍数学家首次摘得这一被誉为“数学界诺贝尔奖”的重要荣誉，也是一届诞生两位中国获奖者的历史性突破。",
  "菲尔兹奖每四年颁发一次，每次获奖者不超过四人，奖励当年未满40岁、在数学领域做出杰出贡献的学者。本届四位获奖者中，两位来自中国。王虹也成为菲尔兹奖自1936年设立以来全球第三位女性获奖者。"
];

const sections = [
  {
    title: "邓煜：打通从微观到宏观的数学逻辑链条",
    body: [
      "邓煜现任芝加哥大学数学系教授，因在偏微分方程领域的杰出工作而获奖。他与合作者首次以数学严格方式，推导出从微观粒子系统到宏观玻尔兹曼方程的完整逻辑链条，解决了狭义希尔伯特第六问题。",
      "希尔伯特第六问题的核心，是能否从牛顿运动定律出发，严格推导出流体运动方程。邓煜和合作者不仅完成了从牛顿硬球动力学到玻尔兹曼方程的推导，更进一步建立了到纳维-斯托克斯方程的完整链条。这一里程碑式突破，标志着数学家们对统计物理与偏微分方程交叉领域有了更深层次的数学认知。"
    ]
  },
  {
    title: "王虹：破解困扰数学界百年的“三维挂谷猜想”",
    body: [
      "王虹现任法国高等科学研究所数学学科终身教授、纽约大学柯朗数学科学研究所教授，因在调和分析与几何测度论领域的杰出工作而获奖。她与合作者运用精细的多尺度归纳方法，彻底证明了困扰数学界逾百年的三维挂谷猜想。",
      "挂谷猜想源于1917年日本数学家挂谷宗一提出的“转针问题”：在平面上，一条单位线段通过连续旋转360度而扫过的面积是多少？这一看似简单的问题，百年来吸引了一代又一代杰出数学家前赴后继。2022年至2025年，王虹和合作者分三篇系列论文逐步完成证明，其中2025年发表的完整证明论文长达127页，论文一经上线便轰动全球数学界。"
    ]
  },
  {
    title: "中国数学：从追赶到领跑的历史跨越",
    body: [
      "两位获奖者均为北京大学数学科学学院2007级本科校友。北大数学科学学院院长、中国科学院院士刘若川在现场见证了这一历史时刻，他感慨道：“我们这一代最欣慰的，就是看到后一代走得比我们更远。”",
      "菲尔兹奖获得者杰曼诺夫指出：“两位获奖者最重要的教育阶段都是在中国完成。他们取得的卓越成就，有力证明了中国在世界数学领域的地位正变得日益重要。”中国科学院院士、北京国际数学研究中心主任田刚也表示：“中国数学家正逐渐从追随者成长为领跑者。”",
      "从1982年丘成桐成为首位华人菲尔兹奖得主，到2026年两位中国籍数学家同时站上世界数学之巅，这一天，中国数学等了太久；而这一步，迈得坚实而辉煌。王虹与邓煜的成就，不仅属于他们个人，更属于所有为中国数学默默耕耘的人。"
    ]
  }
];

const sources = [
  ["新华社相关报道", "https://www.news.cn/"],
  ["International Mathematical Union", "https://www.mathunion.org/"],
  ["NYU Courant Institute", "https://cims.nyu.edu/"],
  ["University of Chicago Mathematics", "https://mathematics.uchicago.edu/"]
];

export default async function FieldsMedalNewsPage() {
  const locale = await getCurrentLocale();
  const prefix = localePrefix(locale);
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;

  return (
    <main className="bg-[#fff8ef]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: "历史性突破！中国数学家王虹、邓煜双双斩获2026年菲尔兹奖",
          datePublished: "2026-07-24",
          dateModified: "2026-07-24",
          image: "https://www.silkstudy.com/images/news/fields-medal-2026.png",
          author: { "@type": "Organization", name: "SilkStudy" },
          publisher: { "@type": "Organization", name: "SilkStudy" },
          mainEntityOfPage: `https://www.silkstudy.com${localize(articlePath)}`
        }}
      />

      <article>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <Link href={localize("/news")} className="inline-flex items-center gap-2 text-sm font-bold text-amber-200 hover:text-white">
              <ArrowLeft size={16} aria-hidden="true" />
              返回教育资讯
            </Link>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber-300">
              <Medal size={18} aria-hidden="true" />
              教育资讯 · 基础科学
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              历史性突破！中国数学家王虹、邓煜双双斩获2026年菲尔兹奖
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              中国籍数学家首次摘得菲尔兹奖，两位中国青年数学家同届获奖。这是中国数学教育、基础研究和全球学术影响力共同抵达的高光时刻。
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
              <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> 2026-07-24</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} /> SilkStudy 教育资讯</span>
              <span className="inline-flex items-center gap-2"><Share2 size={16} /> 数学 · 中国教育 · 全球学术</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <figure className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image src="/images/news/fields-medal-2026.png" alt="数学黑板前的学术讨论场景" fill priority sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
            </div>
            <figcaption className="px-5 py-3 text-xs leading-5 text-slate-500">
              配图为 SilkStudy 生成的学术主题封面图，用于呈现数学研究与教育突破氛围，并非新闻现场照片。
            </figcaption>
          </figure>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div className="space-y-5 text-lg leading-9 text-slate-700">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {sections.map((section) => (
                <section key={section.title} className="mt-10 border-t border-slate-100 pt-8">
                  <h2 className="text-2xl font-bold leading-tight text-slate-950">{section.title}</h2>
                  <div className="mt-4 space-y-5 text-lg leading-9 text-slate-700">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="mt-10 rounded-2xl bg-amber-50 p-6">
                <h2 className="flex items-center gap-2 text-xl font-bold text-amber-950">
                  <BookOpen size={20} aria-hidden="true" />
                  为什么这条新闻与留学中国有关？
                </h2>
                <p className="mt-3 text-base leading-8 text-amber-900">
                  对国际学生来说，顶尖学术成果不只是远处的新闻。它说明中国的基础教育、大学训练、科研生态和全球学术连接正在形成更强的吸引力。选择中国大学，不只是选择一个学位，也是在靠近一个正在快速成长的知识共同体。
                </p>
              </section>
            </div>

            <aside className="h-fit space-y-5 lg:sticky lg:top-24">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold text-slate-950">资料核验</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  本文依据公开新闻与机构信息整理。正式引用或深度研究时，请以国际数学联盟、相关高校及权威媒体发布为准。
                </p>
                <div className="mt-4 space-y-3">
                  {sources.map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700">
                      {label}
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl bg-slate-950 p-5 text-white">
                <h2 className="text-lg font-bold">想了解中国大学？</h2>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  告诉我们你的专业、成绩、语言基础和奖学金目标，我们帮你把中国大学选择变成一份清楚的方案。
                </p>
                <div className="mt-5">
                  <ButtonLink href={localize("/consultation?source=fields-medal-news")}>免费咨询</ButtonLink>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
