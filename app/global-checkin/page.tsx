import { getLocale } from "next-intl/server";
import { GlobalYouthCheckin } from "@/components/global-checkin/global-youth-checkin";
import { isAppLocale, type AppLocale } from "@/lib/i18n/routing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Global Youth Check-in Map",
  description: "A world map where young people light up their country, introduce local culture, travel, study, and specialties, and earn a first check-in honor badge.",
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
