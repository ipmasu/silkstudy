import { isAppLocale, type AppLocale } from "@/lib/i18n/routing";

export type LocaleParams = Promise<{ locale?: string }>;

export async function localeFromParams(params: LocaleParams | { locale?: string }): Promise<AppLocale> {
  const resolved = "then" in params ? await params : params;
  const locale = resolved?.locale;
  return locale && isAppLocale(locale) ? locale : "en";
}
