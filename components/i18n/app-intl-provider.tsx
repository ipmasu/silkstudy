import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import type { AppLocale } from "@/lib/i18n/routing";

export async function AppIntlProvider({ children, locale }: { children: ReactNode; locale: AppLocale }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
