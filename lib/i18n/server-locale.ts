import { headers } from "next/headers";
import { isAppLocale, type AppLocale } from "@/lib/i18n/routing";

export async function getCurrentLocale(): Promise<AppLocale> {
  const headerList = await headers();
  const localeHeader = headerList.get("x-next-intl-locale");

  if (localeHeader && isAppLocale(localeHeader)) {
    return localeHeader;
  }

  const pathname = headerList.get("x-invoke-path") ?? headerList.get("next-url") ?? headerList.get("x-matched-path") ?? "";
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (firstSegment && isAppLocale(firstSegment)) {
    return firstSegment;
  }

  return "en";
}
