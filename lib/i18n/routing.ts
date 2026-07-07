export const supportedLocales = ["en", "zh", "vi", "ko", "th", "id", "ms", "my", "km", "lo", "tl", "ru", "tr"] as const;

export type AppLocale = (typeof supportedLocales)[number];

export function isAppLocale(locale: string): locale is AppLocale {
  return supportedLocales.includes(locale as AppLocale);
}

export function localePrefix(locale: string) {
  return locale === "en" ? "" : `/${locale}`;
}

export function localizePath(path: string, locale: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const pathWithoutLocale = normalizedPath.replace(/^\/(en|zh|vi|ko|th|id|ms|my|km|lo|tl|ru|tr)(?=\/|$)/, "") || "/";
  const prefix = localePrefix(locale);

  return pathWithoutLocale === "/" ? prefix || "/" : `${prefix}${pathWithoutLocale}`;
}
