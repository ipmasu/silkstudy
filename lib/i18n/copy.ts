export function localeCopy(locale: string, en: string, zh: string, vi: string) {
  if (locale === "zh") return zh;
  if (locale === "vi") return vi;
  return en;
}
