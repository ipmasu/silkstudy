import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getLocale } from "next-intl/server";
import { AppIntlProvider } from "@/components/i18n/app-intl-provider";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
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
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <AppIntlProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </AppIntlProvider>
      </body>
    </html>
  );
}
