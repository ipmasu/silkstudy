import { cscInternationalUniversityNames, getCatalogUniversities } from "@/lib/catalog/international-university-directory";
import { provinceShowcases } from "@/lib/province-showcase";
import { universities } from "@/lib/site-data";

export type CatalogIssue = {
  slug: string;
  name: string;
  location: string;
  issues: string[];
};

export type ProvinceCoverage = {
  slug: string;
  name: string;
  zhName: string;
  totalSchools: number;
  curatedSchools: number;
  baselineSchools: number;
};

export function getCatalogQualityReport() {
  const catalog = getCatalogUniversities(universities);
  const curatedSlugs = new Set(universities.map((university) => university.slug));
  const duplicateSourceRows = cscInternationalUniversityNames.length - catalog.length;
  const issues: CatalogIssue[] = catalog
    .map((university) => {
      const itemIssues = [
        university.qsRanking <= 0 || university.qsRanking >= 900 ? "Ranking" : "",
        university.foundedYear <= 0 ? "Founded year" : "",
        university.website === "#" ? "Website" : "",
        university.citySlug === "china" ? "City/province mapping" : "",
        university.tuition.includes("Contact") ? "Tuition" : "",
        curatedSlugs.has(university.slug) ? "" : "Detailed profile"
      ].filter(Boolean);

      return {
        slug: university.slug,
        name: university.name,
        location: university.location,
        issues: itemIssues
      };
    })
    .filter((item) => item.issues.length > 0);
  const provinceCoverage: ProvinceCoverage[] = provinceShowcases
    .map((province) => {
      const provinceSchools = catalog.filter((university) => university.provinceSlug === province.slug);
      const curatedSchools = provinceSchools.filter((university) => curatedSlugs.has(university.slug)).length;

      return {
        slug: province.slug,
        name: province.name,
        zhName: province.zhName,
        totalSchools: provinceSchools.length,
        curatedSchools,
        baselineSchools: provinceSchools.length - curatedSchools
      };
    })
    .sort((a, b) => b.totalSchools - a.totalSchools || a.name.localeCompare(b.name));

  return {
    sourceRows: cscInternationalUniversityNames.length,
    uniqueUniversities: catalog.length,
    duplicateSourceRows,
    curatedProfiles: curatedSlugs.size,
    baselineProfiles: catalog.length - curatedSlugs.size,
    mappedProvinces: provinceCoverage.filter((item) => item.totalSchools > 0).length,
    unmappedProvinceSlots: provinceCoverage.filter((item) => item.totalSchools === 0).length,
    provinceCoverage,
    issueCount: issues.length,
    issues
  };
}
