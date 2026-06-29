import type { University, UniversityMedia } from "@/lib/site-data";
import { universityVisualOverrides } from "@/lib/university-visual-overrides";

function officialWebsiteLogo(university: University): UniversityMedia | undefined {
  if (!university.website || university.website === "#") return undefined;

  try {
    const domain = new URL(university.website).hostname;

    return {
      type: "LOGO",
      url: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=256`,
      alt: `${university.name} official website mark`
    };
  } catch {
    return undefined;
  }
}

export function getUniversityMedia(university: University): UniversityMedia[] {
  const uploaded = university.media ?? [];
  const hasLogo = uploaded.some((item) => item.type === "LOGO");
  const hasCover = uploaded.some((item) => item.type === "COVER");
  const generatedLogo = hasLogo ? undefined : officialWebsiteLogo(university);
  const visual = universityVisualOverrides[university.slug];
  const verifiedGate: UniversityMedia | undefined = !hasCover && visual ? {
    type: "COVER",
    url: visual.gateImage,
    alt: visual.gateAlt,
    publicId: visual.sourceUrl
  } : undefined;

  if (uploaded.length) return [
    ...(generatedLogo ? [generatedLogo] : []),
    ...(verifiedGate ? [verifiedGate] : []),
    ...uploaded
  ];

  return [
    ...(generatedLogo ? [generatedLogo] : []),
    ...(verifiedGate ? [verifiedGate] : [])
  ];
}
