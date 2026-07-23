import type { MetadataRoute } from "next";
import { getCatalogUniversities } from "@/lib/catalog/international-university-directory";
import { getCityDestinations } from "@/lib/city-destinations";
import { slugifyMajor } from "@/lib/major-guides";
import { provinceShowcases } from "@/lib/province-showcase";
import { universities } from "@/lib/site-data";
import { absoluteUrl, localizedSeoPath, seoLanguageAlternates } from "@/lib/seo";

const sitemapLocales = ["en", "zh", "ru"] as const;

function safeLastModified() {
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/universities", "/provinces", "/china-map", "/cities", "/life", "/community", "/majors", "/scholarships", "/scholarship-opportunities", "/why-china", "/consultation", "/culture", "/global-checkin"];
  const catalogUniversities = getCatalogUniversities(universities);
  const provinceRoutes = provinceShowcases.map((province) => `/provinces/${province.slug}`);
  const cityRoutes = getCityDestinations(catalogUniversities).map((city) => `/cities/${city.slug}`);
  const universityRoutes = catalogUniversities.map((university) => `/universities/${university.slug}`);
  const majorRoutes = Array.from(new Set(catalogUniversities.flatMap((university) => university.majors).map(slugifyMajor))).map((slug) => `/majors/${slug}`);
  const allRoutes = [...staticRoutes, ...provinceRoutes, ...cityRoutes, ...universityRoutes, ...majorRoutes];
  const lastModified = safeLastModified();

  return allRoutes.flatMap((route) => sitemapLocales.map((locale) => {
    const localizedRoute = localizedSeoPath(route, locale);
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = route === "/" ? "daily" : "weekly";

    return {
      url: absoluteUrl(localizedRoute),
      lastModified,
      changeFrequency,
      priority: route === "/" ? 1 : 0.7,
      alternates: {
        languages: seoLanguageAlternates(route)
      }
    };
  }));
}
