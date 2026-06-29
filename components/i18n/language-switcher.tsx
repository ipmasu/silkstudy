"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { localizePath, supportedLocales, type AppLocale } from "@/lib/i18n/routing";

const labels: Record<AppLocale, string> = {
  en: "EN",
  zh: "中文",
  vi: "VI"
};

export function LanguageSwitcher({ locale, compact = false }: { locale: string; compact?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const hrefFor = (targetLocale: AppLocale) => {
    const path = localizePath(pathname, targetLocale);
    return query ? `${path}?${query}` : path;
  };

  if (compact) {
    return (
      <details className="relative">
        <summary className="flex min-h-9 list-none cursor-pointer items-center gap-1 rounded-md border border-slate-200 px-2 text-xs font-semibold text-slate-600">
          <Languages size={14} aria-hidden="true" />
          {labels[locale as AppLocale] ?? "EN"}
        </summary>
        <div className="absolute right-0 top-11 z-50 min-w-28 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
          {supportedLocales.map((item) => (
            <Link key={item} href={hrefFor(item)} className={`block px-4 py-2 text-sm font-semibold hover:bg-blue-50 hover:text-primary ${item === locale ? "bg-slate-50 text-primary" : "text-slate-600"}`}>
              {labels[item]}
            </Link>
          ))}
        </div>
      </details>
    );
  }

  return (
    <div className="flex items-center rounded-md border border-slate-200 text-xs font-semibold text-slate-600">
      {supportedLocales.map((item, index) => (
        <Link
          key={item}
          href={hrefFor(item)}
          aria-current={item === locale ? "page" : undefined}
          className={`px-2 py-2 hover:text-primary ${index > 0 ? "border-l border-slate-200" : ""} ${item === locale ? "bg-blue-50 text-primary" : ""}`}
        >
          {labels[item]}
        </Link>
      ))}
    </div>
  );
}
