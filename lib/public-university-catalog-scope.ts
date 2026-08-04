import { getChinaRankingSortValue } from "@/lib/china-university-rankings";
import type { University } from "@/lib/site-data";

export const PUBLIC_UNIVERSITY_CATALOG_LIMIT = 203;

export function scopePublicUniversityCatalog<T extends University>(universities: T[]) {
  return [...universities]
    .sort((a, b) => getChinaRankingSortValue(a) - getChinaRankingSortValue(b) || a.name.localeCompare(b.name))
    .slice(0, PUBLIC_UNIVERSITY_CATALOG_LIMIT);
}
