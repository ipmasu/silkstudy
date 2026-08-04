import { supportedLocales } from "@/lib/i18n/routing";

export const revalidate = 86400;

export function generateStaticParams() {
  return supportedLocales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export { default, generateMetadata } from "@/app/universities/page";
