import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import { LocaleShell } from "@/components/i18n/locale-shell";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.silkstudy.com"),
  title: {
    default: "SilkStudy",
    template: "%s | SilkStudy"
  },
  description: "Explore Chinese universities, cities, majors, scholarships and free study consultation for international students.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Suspense fallback={children}>
          <LocaleShell initialLocale="en">
            {children}
          </LocaleShell>
        </Suspense>
      </body>
    </html>
  );
}
