"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { localizePath, type AppLocale } from "@/lib/i18n/routing";

const labels: Record<AppLocale, { short: string; native: string; helper: string }> = {
  en: { short: "EN", native: "English", helper: "Study in China" },
  zh: { short: "中文", native: "中文", helper: "中国留学" },
  vi: { short: "VI", native: "Tiếng Việt", helper: "Du học Trung Quốc" },
  fr: { short: "FR", native: "Français", helper: "Étudier en Chine" },
  ko: { short: "KO", native: "한국어", helper: "중국 유학" },
  th: { short: "ไทย", native: "ไทย", helper: "เรียนต่อจีน" },
  id: { short: "ID", native: "Bahasa Indonesia", helper: "Kuliah di Tiongkok" },
  ms: { short: "MS", native: "Bahasa Melayu", helper: "Belajar di China" },
  my: { short: "MY", native: "မြန်မာ", helper: "တရုတ်တွင် ပညာသင်" },
  km: { short: "ខ្មែរ", native: "ភាសាខ្មែរ", helper: "សិក្សានៅចិន" },
  lo: { short: "ລາວ", native: "ລາວ", helper: "ຮຽນຕໍ່ຈີນ" },
  tl: { short: "TL", native: "Filipino", helper: "Mag-aral sa China" },
  ru: { short: "RU", native: "Русский", helper: "Учёба в Китае" },
  tr: { short: "TR", native: "Türkçe", helper: "Çin'de eğitim" }
};

const visibleLocales: AppLocale[] = ["en", "zh", "vi", "fr", "th", "id", "ms", "ko", "ru", "tr"];

export function LanguageSwitcher({ locale, compact = false }: { locale: string; compact?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const currentLocale = locale as AppLocale;
  const currentLabel = labels[currentLocale] ?? labels.en;

  const hrefFor = (targetLocale: AppLocale) => {
    const path = localizePath(pathname, targetLocale);
    return query ? `${path}?${query}` : path;
  };

  return (
    <details className="relative">
      <summary className={`flex list-none cursor-pointer items-center gap-2 rounded-md border border-slate-200 font-semibold text-slate-700 hover:border-primary hover:text-primary ${compact ? "min-h-9 px-2 text-xs" : "min-h-10 px-3 text-sm"}`}>
        <Languages size={compact ? 14 : 16} aria-hidden="true" />
        {compact ? currentLabel.short : currentLabel.native}
      </summary>
      <div className={`absolute right-0 z-50 overflow-hidden rounded-md border border-slate-200 bg-white py-2 shadow-lg ${compact ? "top-11 w-56" : "top-12 w-64"}`}>
        {visibleLocales.map((item) => {
          const label = labels[item];

          return (
            <Link
              key={item}
              href={hrefFor(item)}
              aria-current={item === locale ? "page" : undefined}
              onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
              className={`block px-4 py-2.5 hover:bg-blue-50 hover:text-primary ${item === locale ? "bg-slate-50 text-primary" : "text-slate-700"}`}
            >
              <span className="block text-sm font-bold">{label.native}</span>
              <span className="mt-0.5 block text-xs text-slate-500">{label.helper}</span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}
