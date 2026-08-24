import { supportedLocales } from "@/lib/i18n/routing";

export { default, generateMetadata } from "@/app/free-study-plan/page";

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}
