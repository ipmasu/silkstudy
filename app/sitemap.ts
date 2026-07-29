import type { MetadataRoute } from "next";
import { getCityDestinations } from "@/lib/city-destinations";
import { provinceShowcases } from "@/lib/province-showcase";
import { universities } from "@/lib/site-data";
import { absoluteUrl, localizedSeoPath, seoLanguageAlternates } from "@/lib/seo";
import type { AppLocale } from "@/lib/i18n/routing";
import { communityCities } from "@/lib/community-experience-data";

const sitemapLocales: AppLocale[] = ["en", "zh", "vi", "fr", "ru"];

function safeLastModified() {
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/news", "/news/chinese-mathematicians-fields-medal-2026", "/universities", "/provinces", "/china-map", "/cities", "/life", "/community", "/majors", "/scholarships", "/scholarship-opportunities", "/why-china", "/consultation", "/contact", "/culture", "/global-checkin"];
  const provinceRoutes = provinceShowcases.map((province) => `/provinces/${province.slug}`);
  const cityRoutes = getCityDestinations(universities).map((city) => `/cities/${city.slug}`);
  const communityCityRoutes = communityCities.map((city) => `/community/cities/${city.slug}`);
  const allRoutes = [...staticRoutes, ...provinceRoutes, ...cityRoutes, ...communityCityRoutes];
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
