export function localeCopy(locale: string, en: string, zh: string, vi: string, fr?: string) {
  if (locale === "zh") return zh;
  if (locale === "vi") return vi;
  if (locale === "fr") return fr ?? en;
  return en;
}

export function localeName(locale: string) {
  if (locale === "vi") return "Tiếng Việt";
  if (locale === "fr") return "Français";

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
