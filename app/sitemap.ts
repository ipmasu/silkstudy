import type { MetadataRoute } from "next";
import { getCatalogUniversities } from "@/lib/catalog/international-university-directory";
import { getCityDestinations } from "@/lib/city-destinations";
import { slugifyMajor } from "@/lib/major-guides";
import { provinceShowcases } from "@/lib/province-showcase";
import { universities } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/universities", "/provinces", "/cities", "/life", "/community", "/majors", "/scholarships", "/consultation", "/login", "/dashboard", "/admin"];
  const catalogUniversities = getCatalogUniversities(universities);
  const provinceRoutes = provinceShowcases.map((province) => `/provinces/${province.slug}`);
  const cityRoutes = getCityDestinations(catalogUniversities).map((city) => `/cities/${city.slug}`);
  const universityRoutes = catalogUniversities.map((university) => `/universities/${university.slug}`);
  const majorRoutes = Array.from(new Set(catalogUniversities.flatMap((university) => university.majors).map(slugifyMajor))).map((slug) => `/majors/${slug}`);

  return [...staticRoutes, ...provinceRoutes, ...cityRoutes, ...universityRoutes, ...majorRoutes].map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = route === "/" ? "daily" : "weekly";

    return {
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency,
      priority: route === "/" ? 1 : 0.7
    };
  });
}
