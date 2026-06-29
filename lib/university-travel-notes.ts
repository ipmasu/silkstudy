export type UniversityTravelNote = {
  universitySlug: string;
  platform: string;
  sourceTitle: string;
  sourceUrl?: string;
  rewrittenSummary: string;
  highlights: string[];
  studentAngle: string;
  complianceLabel: string;
};

const fallbackNotes: UniversityTravelNote[] = [
  {
    universitySlug: "central-south-university",
    platform: "XIAOHONGSHU",
    sourceTitle: "Changsha youth travel and food notes",
    rewrittenSummary: "Student-facing travel notes often frame Changsha as a high-energy city with spicy food, riverside walks, Orange Isle, Yuelu Mountain, night markets, and easy weekend routes to Zhangjiajie.",
    highlights: ["Yuelu Mountain", "Orange Isle", "Changsha food", "Zhangjiajie weekends"],
    studentAngle: "Useful for international students who want a lively city, affordable food, and memorable weekend trips while studying at Central South University.",
    complianceLabel: "Editorial sample only; replace with permission-reviewed source import before treating as external-platform evidence."
  },
  {
    universitySlug: "peking-university",
    platform: "XIAOHONGSHU",
    sourceTitle: "Beijing campus-area culture and museum routes",
    rewrittenSummary: "Beijing travel notes commonly connect university life with the Summer Palace, Yuanmingyuan, hutong walks, museums, art districts, and Great Wall day trips.",
    highlights: ["Summer Palace", "Yuanmingyuan", "museums", "Great Wall"],
    studentAngle: "Strong for students who want top academics plus cultural depth, policy access, and iconic China travel routes.",
    complianceLabel: "Editorial sample only; verify source permissions before publishing as platform-derived content."
  },
  {
    universitySlug: "zhejiang-university",
    platform: "DIANPING",
    sourceTitle: "Hangzhou food, West Lake, and tea culture summaries",
    rewrittenSummary: "Hangzhou lifestyle notes often emphasize West Lake walks, Longjing tea areas, cafes, canal neighborhoods, and polished city life near major campuses.",
    highlights: ["West Lake", "Longjing tea", "canal walks", "cafes"],
    studentAngle: "Good for students comparing digital-economy career access with a calmer, scenic daily-life rhythm.",
    complianceLabel: "Editorial sample only; use compliant source import for public evidence."
  }
];

export function getFallbackUniversityTravelNotes(universitySlug: string) {
  return fallbackNotes.filter((note) => note.universitySlug === universitySlug);
}
