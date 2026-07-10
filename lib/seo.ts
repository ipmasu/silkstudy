import type { Metadata } from "next";

const siteName = "SilkStudy";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://silkstudy.com";

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
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
      canonical: url
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
