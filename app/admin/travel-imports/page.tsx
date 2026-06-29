import { TravelImportQueuePage } from "@/components/admin/travel-import-queue-page";

const fallbackImports = [
  {
    platform: "QUNAR",
    sourceUrl: "https://example.com/qunar/hangzhou-west-lake",
    sourceTitle: "Hangzhou West Lake destination notes",
    sourceAuthor: "Qunar destination page",
    sourceLocale: "zh",
    originalExcerpt: "Short excerpt placeholder for an openly accessible destination page. Replace with a brief review excerpt only after source review.",
    rewrittenSummary: "West Lake can become the Zhejiang page's core travel signal: easy city walks, tea culture, lakeside photography, and weekend trips around Hangzhou.",
    highlights: ["West Lake", "tea culture", "weekend walks"],
    studentAngle: "Useful for explaining why Hangzhou feels attractive to international students beyond university rankings.",
    complianceNotes: "Use as rewrite material only; do not publish copied destination copy.",
    status: "NEEDS_SOURCE_REVIEW",
    province: { name: "Zhejiang", slug: "zhejiang" },
    city: { name: "Hangzhou", slug: "hangzhou" }
  },
  {
    platform: "OFFICIAL_TOURISM",
    sourceUrl: "https://example.com/official-tourism/dunhuang",
    sourceTitle: "Dunhuang Silk Road cultural route",
    sourceAuthor: "Official tourism source",
    sourceLocale: "zh",
    originalExcerpt: "Short source-review excerpt placeholder for Dunhuang and Mogao Caves travel context.",
    rewrittenSummary: "Dunhuang gives Gansu a powerful Silk Road identity, linking desert landscapes, cultural heritage, and holiday travel planning for adventurous students.",
    highlights: ["Dunhuang", "Mogao Caves", "Silk Road"],
    studentAngle: "Best used on province pages to show Gansu as a memorable China discovery destination.",
    complianceNotes: "Prefer official tourism sources for stable factual travel context.",
    status: "READY_TO_PUBLISH",
    province: { name: "Gansu", slug: "gansu" }
  },
  {
    platform: "XIAOHONGSHU",
    sourceUrl: "https://example.com/xiaohongshu/chengdu-student-weekend",
    sourceTitle: "Chengdu weekend lifestyle note",
    sourceAuthor: "Lifestyle creator",
    sourceLocale: "zh",
    originalExcerpt: "Placeholder for a short, permission-reviewed excerpt from a lifestyle post.",
    rewrittenSummary: "",
    highlights: ["tea houses", "food culture", "panda base"],
    studentAngle: "Potential source for youth-friendly city-life framing, but should be rewritten and permission-reviewed before public use.",
    complianceNotes: "Do not publish creator text directly. Keep source URL and separate editorial summary from quotes.",
    status: "NEEDS_REWRITE",
    province: { name: "Sichuan", slug: "sichuan" },
    city: { name: "Chengdu", slug: "chengdu" }
  }
];

export default function AdminTravelImportsPage() {
  return <TravelImportQueuePage fallbackImports={fallbackImports} />;
}
