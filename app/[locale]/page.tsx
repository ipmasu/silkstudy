export { default, metadata } from "@/app/page";

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "vi" }];
}
