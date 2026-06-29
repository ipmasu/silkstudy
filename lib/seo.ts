import type { Metadata } from "next";

const siteName = "SilkStudy";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://silkstudy.com";

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteName,
    url: absoluteUrl("/"),
    description: "A global platform for exploring Chinese universities, cities, majors, scholarships, and study consultation services."
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
      target: `${absoluteUrl("/api/search")}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}
