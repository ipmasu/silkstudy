import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { localizePath } from "@/lib/i18n/routing";

const navItems = [
  { href: "/provinces", key: "exploreChina" },
  { href: "/universities", key: "universities" },
  { href: "/cities", key: "studentLife" },
  { href: "/life", key: "life" },
  { href: "/community", key: "community" },
  { href: "/scholarships", key: "scholarships" },
  { href: "/consultation", key: "planJourney" }
] as const;

export async function SiteHeader() {
  const t = await getTranslations("navigation");
  const locale = await getLocale();
  const localize = (href: string) => localizePath(href, locale);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={localize("/")} className="flex items-center gap-2 text-lg font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          SilkStudy
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-600 lg:gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={localize(item.href)} className="hover:text-primary">
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <LanguageSwitcher locale={locale} />
          <ButtonLink href={localize("/consultation")}>{t("freeConsultation")}</ButtonLink>
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher locale={locale} compact />
          <Link href={localize("/consultation")} className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-white">
            {locale === "zh" ? "规划旅程" : locale === "vi" ? "Lập kế hoạch" : "Plan"}
          </Link>
        </div>
      </div>
    </header>
  );
}
