export function localeCopy(locale: string, en: string, zh: string, vi: string) {
  if (locale === "zh") return zh;
  if (locale === "vi") return vi;
  return en;
}

export function localeName(locale: string) {
  const names: Record<string, string> = {
    en: "English",
    zh: "中文",
    vi: "Tiếng Việt",
    ko: "한국어",
    th: "ไทย",
    id: "Bahasa Indonesia",
    ms: "Bahasa Melayu",
    my: "မြန်မာ",
    km: "ខ្មែរ",
    lo: "ລາວ",
    tl: "Filipino",
    ru: "Русский",
    tr: "Türkçe"
  };

  return names[locale] ?? "English";
}
