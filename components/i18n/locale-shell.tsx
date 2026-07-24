"use client";

import { NextIntlClientProvider } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { isAppLocale, type AppLocale } from "@/lib/i18n/routing";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import idMessages from "@/messages/id.json";
import kmMessages from "@/messages/km.json";
import koMessages from "@/messages/ko.json";
import loMessages from "@/messages/lo.json";
import msMessages from "@/messages/ms.json";
import myMessages from "@/messages/my.json";
import ruMessages from "@/messages/ru.json";
import thMessages from "@/messages/th.json";
import tlMessages from "@/messages/tl.json";
import trMessages from "@/messages/tr.json";
import viMessages from "@/messages/vi.json";
import zhMessages from "@/messages/zh.json";

const messagesByLocale = {
  en: enMessages,
  zh: zhMessages,
  vi: viMessages,
  fr: frMessages,
  ko: koMessages,
  th: thMessages,
  id: idMessages,
  ms: msMessages,
  my: myMessages,
  km: kmMessages,
  lo: loMessages,
  tl: tlMessages,
  ru: ruMessages,
  tr: trMessages
} satisfies Record<AppLocale, typeof enMessages>;

function localeFromPathname(pathname: string): AppLocale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isAppLocale(firstSegment) ? firstSegment : "en";
}

export function LocaleShell({ children, initialLocale }: { children: ReactNode; initialLocale: AppLocale }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname) ?? initialLocale;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messagesByLocale[locale]}>
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </NextIntlClientProvider>
  );
}
