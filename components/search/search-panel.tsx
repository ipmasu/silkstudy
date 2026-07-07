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

const copy: Record<string, {
  placeholder: string;
  aria: string;
  searching: string;
  empty: string;
  types: Record<SearchResult["type"], string>;
}> = {
  en: {
    placeholder: "Search university, major, city or scholarship route",
    aria: "Search universities, majors, cities or scholarship routes",
    searching: "Searching...",
    empty: "No results found. Try a university, major, city, or province.",
    types: { University: "University", Major: "Major", City: "City", Province: "Province" }
  },
  zh: {
    placeholder: "搜索大学、专业、城市或奖学金方向",
    aria: "搜索大学、专业、城市或奖学金方向",
    searching: "搜索中...",
    empty: "没有找到结果。试试大学、专业、城市或省份。",
    types: { University: "大学", Major: "专业", City: "城市", Province: "省份" }
  },
  vi: {
    placeholder: "Tìm trường, ngành, thành phố hoặc học bổng",
    aria: "Tìm trường đại học, ngành học, thành phố hoặc học bổng",
    searching: "Đang tìm kiếm...",
    empty: "Không tìm thấy kết quả. Hãy thử tên trường, ngành học, thành phố hoặc tỉnh thành.",
    types: { University: "Trường", Major: "Ngành", City: "Thành phố", Province: "Tỉnh" }
  },
  ko: {
    placeholder: "대학, 전공, 도시 또는 장학금 검색",
    aria: "대학, 전공, 도시 또는 장학금 검색",
    searching: "검색 중...",
    empty: "결과가 없습니다. 대학, 전공, 도시 또는 지역을 검색해 보세요.",
    types: { University: "대학", Major: "전공", City: "도시", Province: "지역" }
  },
  th: {
    placeholder: "ค้นหามหาวิทยาลัย สาขา เมือง หรือทุน",
    aria: "ค้นหามหาวิทยาลัย สาขา เมือง หรือทุนการศึกษา",
    searching: "กำลังค้นหา...",
    empty: "ไม่พบผลลัพธ์ ลองค้นหามหาวิทยาลัย สาขา เมือง หรือมณฑล",
    types: { University: "มหาวิทยาลัย", Major: "สาขา", City: "เมือง", Province: "มณฑล" }
  },
  id: {
    placeholder: "Cari universitas, jurusan, kota, atau beasiswa",
    aria: "Cari universitas, jurusan, kota, atau beasiswa",
    searching: "Mencari...",
    empty: "Tidak ada hasil. Coba nama universitas, jurusan, kota, atau provinsi.",
    types: { University: "Universitas", Major: "Jurusan", City: "Kota", Province: "Provinsi" }
  },
  ms: {
    placeholder: "Cari universiti, bidang, bandar, atau biasiswa",
    aria: "Cari universiti, bidang, bandar, atau laluan biasiswa",
    searching: "Sedang mencari...",
    empty: "Tiada hasil. Cuba nama universiti, bidang, bandar, atau wilayah.",
    types: { University: "Universiti", Major: "Bidang", City: "Bandar", Province: "Wilayah" }
  },
  my: {
    placeholder: "တက္ကသိုလ်၊ ဘာသာရပ်၊ မြို့ သို့မဟုတ် ပညာသင်ဆု ရှာရန်",
    aria: "တက္ကသိုလ်များ၊ ဘာသာရပ်များ၊ မြို့များ သို့မဟုတ် ပညာသင်ဆုလမ်းကြောင်းများ ရှာရန်",
    searching: "ရှာဖွေနေသည်...",
    empty: "ရလဒ်မတွေ့ပါ။ တက္ကသိုလ်၊ ဘာသာရပ်၊ မြို့ သို့မဟုတ် ပြည်နယ်ဖြင့် ထပ်ရှာပါ။",
    types: { University: "တက္ကသိုလ်", Major: "ဘာသာရပ်", City: "မြို့", Province: "ပြည်နယ်" }
  },
  km: {
    placeholder: "ស្វែងរកសាកលវិទ្យាល័យ ជំនាញ ទីក្រុង ឬអាហារូបករណ៍",
    aria: "ស្វែងរកសាកលវិទ្យាល័យ ជំនាញ ទីក្រុង ឬផ្លូវអាហារូបករណ៍",
    searching: "កំពុងស្វែងរក...",
    empty: "រកមិនឃើញលទ្ធផល។ សូមសាកល្បងសាកលវិទ្យាល័យ ជំនាញ ទីក្រុង ឬខេត្ត។",
    types: { University: "សាកលវិទ្យាល័យ", Major: "ជំនាញ", City: "ទីក្រុង", Province: "ខេត្ត" }
  },
  lo: {
    placeholder: "ຊອກຫາມະຫາວິທະຍາໄລ ສາຂາ ເມືອງ ຫຼືທຶນ",
    aria: "ຊອກຫາມະຫາວິທະຍາໄລ ສາຂາ ເມືອງ ຫຼືເສັ້ນທາງທຶນ",
    searching: "ກຳລັງຊອກຫາ...",
    empty: "ບໍ່ພົບຜົນລັບ. ລອງຊື່ມະຫາວິທະຍາໄລ ສາຂາ ເມືອງ ຫຼືແຂວງ.",
    types: { University: "ມະຫາວິທະຍາໄລ", Major: "ສາຂາ", City: "ເມືອງ", Province: "ແຂວງ" }
  },
  tl: {
    placeholder: "Maghanap ng unibersidad, kurso, lungsod, o scholarship",
    aria: "Maghanap ng unibersidad, kurso, lungsod, o scholarship route",
    searching: "Naghahanap...",
    empty: "Walang resulta. Subukan ang unibersidad, kurso, lungsod, o probinsya.",
    types: { University: "Unibersidad", Major: "Kurso", City: "Lungsod", Province: "Probinsya" }
  },
  ru: {
    placeholder: "Поиск университета, направления, города или стипендии",
    aria: "Поиск университетов, направлений, городов или стипендий",
    searching: "Поиск...",
    empty: "Ничего не найдено. Попробуйте университет, направление, город или провинцию.",
    types: { University: "Университет", Major: "Направление", City: "Город", Province: "Провинция" }
  },
  tr: {
    placeholder: "Üniversite, bölüm, şehir veya burs ara",
    aria: "Üniversite, bölüm, şehir veya burs ara",
    searching: "Aranıyor...",
    empty: "Sonuç bulunamadı. Üniversite, bölüm, şehir veya eyalet deneyin.",
    types: { University: "Üniversite", Major: "Bölüm", City: "Şehir", Province: "Eyalet" }
  }
};

function getCopy(locale: string) {
  return copy[locale] ?? copy.en;
}

export function SearchPanel({ locale = "en" }: { locale?: string }) {
  const c = getCopy(locale);
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
          placeholder={c.placeholder}
          className="h-12 flex-1 border-0 bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
          aria-label={c.aria}
          aria-controls="site-search-results"
        />
        {isLoading ? <Loader2 size={18} className="animate-spin text-primary" aria-hidden="true" /> : null}
      </div>

      {showDropdown ? (
        <div id="site-search-results" className="absolute left-0 right-0 top-16 z-20 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
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
                    {c.types[result.type]}
                  </span>
                </span>
                <span className="text-xs leading-5 text-slate-500">{result.description}</span>
              </Link>
            ))
          ) : (
            <div className="px-4 py-5 text-sm text-slate-600">{isLoading ? c.searching : c.empty}</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
