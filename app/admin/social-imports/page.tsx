import { SocialImportQueuePage } from "@/components/admin/social-import-queue-page";

const fallbackImports = [
  {
    platform: "XIAOHONGSHU",
    sourceUrl: "https://example.com/xiaohongshu/student-life-note",
    sourceAuthor: "International student",
    sourceLocale: "zh",
    originalText: "Campus life, food, and city travel note pending compliant import.",
    translatedText: "A student-life note about campus, food, and city travel. This is a placeholder until a compliant source export is connected.",
    editorialSummary: "Useful for campus-life context, but requires source permission and moderation before display.",
    consentStatus: "UNVERIFIED",
    status: "NEEDS_PERMISSION",
    university: { name: "Peking University", slug: "peking-university" }
  },
  {
    platform: "TIKTOK",
    sourceUrl: "https://example.com/tiktok/china-campus-video",
    sourceAuthor: "Prospective student creator",
    sourceLocale: "en",
    originalText: "Video comments mention city lifestyle, dorm questions, and application concerns.",
    translatedText: "",
    editorialSummary: "Potential lead-generation insight, not a verified student review.",
    consentStatus: "UNVERIFIED",
    status: "NEEDS_SOURCE_REVIEW",
    university: { name: "Zhejiang University", slug: "zhejiang-university" }
  }
];

export default function AdminSocialImportsPage() {
  return <SocialImportQueuePage fallbackImports={fallbackImports} />;
}
