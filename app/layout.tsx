import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppIntlProvider } from "@/components/i18n/app-intl-provider";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import "@/styles/globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "SilkStudy",
    template: "%s | SilkStudy"
  },
  description: "Explore Chinese universities, cities, majors, scholarships and study opportunities."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale}>
      <body>
        <AppIntlProvider locale={locale}>
          <SiteHeader locale={locale} />
          {children}
          <SiteFooter locale={locale} />
        </AppIntlProvider>
      </body>
    </html>
  );
}
