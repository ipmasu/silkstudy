import type { Metadata } from "next";

const siteName = "SilkStudy";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.silkstudy.com";
const seoLocales = ["en", "zh", "ru"] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

export function localizedSeoPath(path: string, locale: (typeof seoLocales)[number]) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function seoLanguageAlternates(path: string) {
  return {
    "x-default": absoluteUrl(path),
    ...Object.fromEntries(seoLocales.map((locale) => [locale, absoluteUrl(localizedSeoPath(path, locale))]))
  };
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/images/campus-hero.png"
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: seoLanguageAlternates(path)
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} study in China`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteName,
    url: absoluteUrl("/"),
    description: "Helping international students find Chinese universities, scholarships, cities, majors, and free study consultation.",
    sameAs: []
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/universities")}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function itemListJsonLd(items: { name: string; path: string; description?: string }[], name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(item.path),
      name: item.name,
      description: item.description
    }))
  };
}

export function cityJsonLd({
  name,
  province,
  description,
  path
}: {
  name: string;
  province: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "City",
    name,
    url: absoluteUrl(path),
    description,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: province,
      addressCountry: "CN"
    }
  };
}

export function universityJsonLd({
  name,
  alternateName,
  description,
  path,
  city,
  province,
  website
}: {
  name: string;
  alternateName?: string;
  description: string;
  path: string;
  city?: string;
  province?: string;
  website?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name,
    alternateName,
    url: absoluteUrl(path),
    sameAs: website && website !== "#" ? [website] : undefined,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: province,
      addressCountry: "CN"
    }
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
