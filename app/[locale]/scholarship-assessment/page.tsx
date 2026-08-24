import { supportedLocales } from "@/lib/i18n/routing";

export { default, generateMetadata } from "@/app/scholarship-assessment/page";

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}
