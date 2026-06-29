import Link from "next/link";
import { getLocale } from "next-intl/server";

export async function SiteFooter() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold">SilkStudy</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            {isZh ? "帮助全球年轻人找到适合的中国大学，也发现一座愿意生活、旅行和成长的中国城市。" : isVi ? "Giúp người trẻ trên toàn thế giới tìm trường đại học phù hợp và một thành phố Trung Quốc để học tập, du lịch và trưởng thành." : "Helping young people worldwide find the right Chinese university and a city where they want to live, travel, and grow."}
          </p>
        </div>
        <div>
          <p className="font-semibold">{isZh ? "探索中国" : isVi ? "Khám phá Trung Quốc" : "Explore China"}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link href={localize("/universities")} className="hover:text-white">{isZh ? "大学目录" : isVi ? "Danh sách trường đại học" : "Universities"}</Link></li>
            <li><Link href={localize("/provinces")} className="hover:text-white">{isZh ? "中国目的地地图" : isVi ? "Bản đồ điểm đến Trung Quốc" : "China destination map"}</Link></li>
            <li><Link href={localize("/cities")} className="hover:text-white">{isZh ? "城市与学生生活" : isVi ? "Thành phố và đời sống sinh viên" : "Cities and student life"}</Link></li>
            <li><Link href={localize("/life")} className="hover:text-white">{isZh ? "故事与生活指南" : isVi ? "Câu chuyện & đời sống" : "Stories and life guide"}</Link></li>
            <li><Link href={localize("/community")} className="hover:text-white">{isZh ? "留学生与旅行者社区" : isVi ? "Cộng đồng sinh viên và du khách" : "Student and traveler community"}</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">{isZh ? "开始旅程" : isVi ? "Bắt đầu hành trình" : "Start the journey"}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link href={localize("/consultation")} className="hover:text-white">{isZh ? "免费咨询" : isVi ? "Tư vấn miễn phí" : "Free consultation"}</Link></li>
            <li><Link href={localize("/scholarships")} className="hover:text-white">{isZh ? "奖学金匹配" : isVi ? "Tìm học bổng phù hợp" : "Scholarship matching"}</Link></li>
            <li><Link href={localize("/dashboard")} className="hover:text-white">{isZh ? "留学与旅行规划" : isVi ? "Kế hoạch học tập và du lịch" : "Study and travel planning"}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
