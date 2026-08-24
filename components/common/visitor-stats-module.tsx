/* eslint-disable @next/next/no-img-element */
import { Eye, Globe2, Languages, ShieldCheck } from "lucide-react";

type VisitorStatsModuleProps = {
  locale: string;
};

const badgeUrl =
  "https://visitor-badge.laobi.icu/badge?page_id=silkstudy.com.home&left_text=Global%20visits&left_color=%231e293b&right_color=%23dc2626";

export function VisitorStatsModule({ locale }: VisitorStatsModuleProps) {
  const isZh = locale === "zh";

  const cards = [
    {
      icon: Globe2,
      value: isZh ? "全球访问" : "Global reach",
      label: isZh ? "来自不同国家的年轻人正在了解中国留学" : "Young people worldwide are discovering study routes in China"
    },
    {
      icon: Languages,
      value: "14",
      label: isZh ? "个语言入口，服务东南亚、欧亚和全球学生" : "language entrances for Southeast Asia, Eurasia, and global students"
    },
    {
      icon: ShieldCheck,
      value: "0",
      label: isZh ? "无需 Cookie 的公开计数，不采集个人隐私" : "cookie-free public counter, with no personal profile tracking"
    }
  ];

  return (
    <section className="bg-white px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-red-100 bg-slate-950 shadow-xl shadow-red-950/10">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_1.35fr]">
          <div className="relative overflow-hidden p-6 text-white sm:p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/25 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-100">
                <Eye size={14} aria-hidden="true" />
                {isZh ? "访问人数统计" : "Visitor counter"}
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                {isZh ? "全球青年，正在这里看见中国。" : "Global youth are discovering China here."}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
                {isZh
                  ? "这个小模块记录 SilkStudy 首页的公开累计访问，像一盏灯，显示越来越多年轻人正在走近中国大学、奖学金和城市生活。"
                  : "This small module records public homepage visits, showing how more young people are finding Chinese universities, scholarships, and city life through SilkStudy."}
              </p>
              <div className="mt-6 inline-flex rounded-lg border border-white/15 bg-white px-4 py-3 shadow-lg shadow-slate-950/20">
                <img
                  src={badgeUrl}
                  alt={isZh ? "SilkStudy 首页累计访问人数" : "SilkStudy homepage total visit count"}
                  className="h-6 w-auto"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-white/10 p-px sm:grid-cols-3">
            {cards.map(({ icon: Icon, value, label }) => (
              <article key={label} className="bg-white p-6 sm:p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <p className="mt-5 text-3xl font-bold text-slate-950">{value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
