import { supportedLocales } from "@/lib/i18n/routing";

export { default, metadata } from "@/app/page";

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}
