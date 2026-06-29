import { Globe2, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { getLocale } from "next-intl/server";
import { CommunityHub } from "@/components/community/community-hub";
import { localeCopy } from "@/lib/i18n/copy";
import { communityPostFallbacks } from "@/lib/community-data";
import { getCityDestinations } from "@/lib/city-destinations";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SilkStudy Community",
  description: "Meet international students and China travelers, join safe public activities, find travel buddies, exchange languages, and ask local questions.",
  path: "/community"
});

export default async function CommunityPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const tx = (en: string, zh: string, vi: string) => localeCopy(locale, en, zh, vi);
  const universities = await getAllUniversitiesView();
  const cities = getCityDestinations(universities).map(({ slug, name, zhName }) => ({ slug, name, zhName }));

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{tx("SilkStudy Community", "SilkStudy 社区", "Cộng đồng SilkStudy")}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {tx("Meet people in China. Make the journey better together.", "在中国认识朋友，也让旅程彼此照亮。", "Gặp gỡ bạn bè tại Trung Quốc và cùng nhau làm hành trình tốt đẹp hơn.")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {tx("A safe, welcoming space for international students, future students, and travelers. Find language partners, travel buddies, public meetups, and local answers from people living the experience.", "为留学生、准备来中国的人和旅行者建立一个安全、友好的交流空间。寻找语言伙伴、结伴旅行、参加公开活动，或向已经生活在当地的人提问。", "Không gian an toàn và thân thiện dành cho sinh viên quốc tế, người chuẩn bị đến Trung Quốc và du khách. Tìm bạn học ngôn ngữ, bạn đồng hành và câu trả lời từ người đang sinh sống tại địa phương.")}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              [Users, isZh ? "按城市认识同伴" : "Meet people by city"],
              [Globe2, isZh ? "跨语言与文化交流" : "Exchange languages and cultures"],
              [HeartHandshake, isZh ? "互助解决真实问题" : "Help with real-life questions"],
              [ShieldCheck, isZh ? "公开场所与先审后发" : "Public places and moderation"]
            ].map(([Icon, label]) => {
              const Visual = Icon as typeof Users;
              return <div key={String(label)} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 p-4"><Visual size={20} className="text-secondary" /><p className="font-semibold">{String(label)}</p></div>;
            })}
          </div>
        </div>
      </section>
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CommunityHub initialPosts={communityPostFallbacks} cities={cities} locale={locale} />
        </div>
      </section>
    </main>
  );
}
