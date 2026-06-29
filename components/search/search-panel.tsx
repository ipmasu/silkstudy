"use client";

import Link from "next/link";
import { Loader2, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDebouncedValue } from "@/lib/hooks/use-debounced-value";
import type { SearchResult } from "@/lib/search";

type SearchResponse = {
  query: string;
  results: SearchResult[];
};

const typeStyles: Record<SearchResult["type"], string> = {
  University: "bg-blue-50 text-primary",
  Major: "bg-cyan-50 text-cyan-700",
  City: "bg-emerald-50 text-emerald-700",
  Province: "bg-slate-100 text-slate-700"
};

const typeLabels = {
  en: {
    University: "University",
    Major: "Major",
    City: "City",
    Province: "Province"
  },
  zh: {
    University: "大学",
    Major: "专业",
    City: "城市",
    Province: "省份"
  },
  vi: {
    University: "Trường đại học",
    Major: "Ngành học",
    City: "Thành phố",
    Province: "Tỉnh thành"
  }
} satisfies Record<string, Record<SearchResult["type"], string>>;

export function SearchPanel({ locale = "en" }: { locale?: string }) {
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebouncedValue(query, 260);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const value = debouncedQuery.trim();

    abortRef.current?.abort();

    if (value.length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setIsLoading(true);

    fetch(`/api/search?q=${encodeURIComponent(value)}&limit=8&locale=${encodeURIComponent(locale)}`, {
      signal: controller.signal
    })
      .then((response) => {
        if (!response.ok) throw new Error("Search request failed");
        return response.json() as Promise<SearchResponse>;
      })
      .then((data) => {
        setResults(data.results);
        setIsOpen(true);
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setResults([]);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [debouncedQuery, locale]);

  const hasQuery = query.trim().length >= 2;
  const showDropdown = isOpen && hasQuery;
  const labels = isZh ? typeLabels.zh : isVi ? typeLabels.vi : typeLabels.en;

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex min-h-14 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-primary focus-within:ring-4 focus-within:ring-blue-100">
        <Search size={20} className="text-slate-400" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsOpen(false);
          }}
          placeholder={isZh ? "搜索大学、专业、城市或省份" : isVi ? "Tìm trường, ngành học, thành phố hoặc tỉnh thành" : "Search university, major, city or province"}
          className="h-12 flex-1 border-0 bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
          aria-label={isZh ? "搜索大学、专业、城市或省份" : isVi ? "Tìm trường, ngành học, thành phố hoặc tỉnh thành" : "Search universities, majors, cities or provinces"}
          aria-controls="site-search-results"
        />
        {isLoading ? <Loader2 size={18} className="animate-spin text-primary" aria-hidden="true" /> : null}
      </div>

      {showDropdown ? (
        <div
          id="site-search-results"
          className="absolute left-0 right-0 top-16 z-20 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl"
        >
          {results.length > 0 ? (
            results.map((result) => (
              <Link
                key={result.id}
                href={locale === "en" ? result.href : `/${locale}${result.href}`}
                onClick={() => setIsOpen(false)}
                className="grid gap-1 border-b border-slate-100 px-4 py-3 text-sm last:border-b-0 hover:bg-slate-50"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-ink">{result.label}</span>
                  <span className={`rounded px-2 py-1 text-[11px] font-bold uppercase ${typeStyles[result.type]}`}>
                    {labels[result.type]}
                  </span>
                </span>
                <span className="text-xs leading-5 text-slate-500">{result.description}</span>
              </Link>
            ))
          ) : (
            <div className="px-4 py-5 text-sm text-slate-600">
              {isLoading ? (isZh ? "搜索中..." : isVi ? "Đang tìm kiếm..." : "Searching...") : (isZh ? "没有找到结果。试试大学、专业、城市或省份。" : isVi ? "Không tìm thấy kết quả. Hãy thử tên trường, ngành học, thành phố hoặc tỉnh thành." : "No results found. Try a university, major, city, or province.")}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
