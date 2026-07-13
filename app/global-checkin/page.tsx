import { getLocale } from "next-intl/server";
import { GlobalYouthCheckin } from "@/components/global-checkin/global-youth-checkin";
import { isAppLocale, type AppLocale } from "@/lib/i18n/routing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "全球青年打卡 — SilkStudy",
  description: "在 SilkStudy 全球打卡地图上展示你自己，认识想来中国学习的同路人，点亮国家并进入社区。",
  path: "/global-checkin"
});

export default async function GlobalCheckinPage() {
  const locale = await getLocale();
  const appLocale: AppLocale = isAppLocale(locale) ? locale : "en";

  return (
    <main>
      <GlobalYouthCheckin locale={appLocale} />
    </main>
  );
}
