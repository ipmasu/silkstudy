import { getCatalogUniversities } from "@/lib/catalog/international-university-directory";
import { getCityDestinations } from "@/lib/city-destinations";
import { displayMajor } from "@/lib/i18n/display";
import { provinceShowcases } from "@/lib/province-showcase";
import { majors, universities } from "@/lib/site-data";

export type SearchResultType = "University" | "Major" | "City" | "Province";

export type SearchResult = {
  id: string;
  label: string;
  type: SearchResultType;
  href: string;
  description: string;
  score: number;
};

const normalize = (value: string) => value.trim().toLowerCase();
const typePriority: Record<SearchResultType, number> = {
  University: 0,
  Major: 1,
  City: 2,
  Province: 3
};

function scoreText(query: string, values: string[]) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return 0;

  return values.reduce((score, value) => {
    const normalizedValue = normalize(value);
    if (normalizedValue === normalizedQuery) return Math.max(score, 100);
    if (normalizedValue.startsWith(normalizedQuery)) return Math.max(score, 80);
    if (normalizedValue.includes(normalizedQuery)) return Math.max(score, 60);

    const queryTokens = normalizedQuery.split(/\s+/);
    const matchedTokens = queryTokens.filter((token) => normalizedValue.includes(token)).length;
    if (matchedTokens > 0) return Math.max(score, 25 + matchedTokens * 10);

    return score;
  }, 0);
}

export function searchSite(query: string, limit = 8, locale = "en"): SearchResult[] {
  const normalizedQuery = normalize(query);
  if (normalizedQuery.length < 2) return [];

  const catalogUniversities = getCatalogUniversities(universities);
  const cityDestinations = getCityDestinations(catalogUniversities);
  const catalogMajors = [...new Set([...majors, ...catalogUniversities.flatMap((university) => university.majors)])];

  const cityMap = new Map(cityDestinations.map((city) => [city.slug, city]));
  const provinceMap = new Map(provinceShowcases.map((province) => [province.slug, province]));

  const results: SearchResult[] = [
    ...catalogUniversities.map((university) => {
      const city = cityMap.get(university.citySlug);
      const province = provinceMap.get(university.provinceSlug);
      const cityName = city ? (locale === "zh" ? city.zhName : city.name) : university.location;
      const provinceName = province ? (locale === "zh" ? province.zhName : province.name) : "";
      const majorNames = university.majors.map((major) => displayMajor(major, locale));
      const ranking = university.qsRanking > 0 && university.qsRanking < 900 ? `QS #${university.qsRanking}` : (locale === "zh" ? "排名待核验" : "Ranking to verify");

      return {
        id: `university-${university.slug}`,
        label: locale === "zh" && university.chineseName !== university.name ? university.chineseName : university.name,
        type: "University" as const,
        href: `/universities/${university.slug}`,
        description: `${cityName} - ${ranking} - ${majorNames.slice(0, 2).join(", ")}`,
        score: scoreText(normalizedQuery, [
          university.name,
          university.chineseName,
          university.location,
          cityName,
          provinceName,
          ...university.majors,
          ...majorNames
        ])
      };
    }),
    ...catalogMajors.map((major) => {
      const label = displayMajor(major, locale);
      const count = catalogUniversities.filter((university) => university.majors.includes(major)).length;

      return {
        id: `major-${major.toLowerCase().replaceAll(" ", "-")}`,
        label,
        type: "Major" as const,
        href: `/majors/${major.toLowerCase().replaceAll(" ", "-")}`,
        description: locale === "zh" ? `当前目录中有 ${count} 所大学` : `${count} universities in the current catalog`,
        score: scoreText(normalizedQuery, [major, label])
      };
    }),
    ...cityDestinations.map((city) => {
      const label = locale === "zh" ? city.zhName : city.name;
      const province = locale === "zh" ? city.zhProvinceName : city.provinceName;
      const count = catalogUniversities.filter((university) => university.citySlug === city.slug).length;

      return {
        id: `city-${city.slug}`,
        label,
        type: "City" as const,
        href: `/cities/${city.slug}`,
        description: locale === "zh" ? `${province} - ${count} 所大学` : `${province} - ${count} universities`,
        score: scoreText(normalizedQuery, [city.name, city.zhName, city.provinceName, city.zhProvinceName, city.summary, city.zhSummary])
      };
    }),
    ...provinceShowcases.map((province) => {
      const label = locale === "zh" ? province.zhName : province.name;
      const count = catalogUniversities.filter((university) => university.provinceSlug === province.slug).length;
      const tags = locale === "zh" ? province.zhCultureTags : province.cultureTags;

      return {
        id: `province-${province.slug}`,
        label,
        type: "Province" as const,
        href: `/provinces/${province.slug}`,
        description: locale === "zh" ? `${count} 所大学 - ${tags.slice(0, 2).join(", ")}` : `${count} universities - ${tags.slice(0, 2).join(", ")}`,
        score: scoreText(normalizedQuery, [province.name, province.zhName, province.region, province.zhRegion, province.travelSummary, province.zhTravelSummary, ...tags])
      };
    })
  ];

  return results
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || typePriority[a.type] - typePriority[b.type] || a.label.localeCompare(b.label))
    .slice(0, limit);
}
