import { prisma } from "@/lib/prisma";
import { getFallbackUniversityTravelNotes, type UniversityTravelNote } from "@/lib/university-travel-notes";

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

type DbTravelImport = {
  platform: string;
  sourceTitle: string | null;
  sourceUrl: string;
  rewrittenSummary: string | null;
  highlights: string[];
  studentAngle: string | null;
  complianceNotes: string | null;
};

export async function getPublishedUniversityTravelNotes(universitySlug: string): Promise<UniversityTravelNote[]> {
  if (!hasDatabaseUrl) return getFallbackUniversityTravelNotes(universitySlug);

  try {
    const client = (prisma as unknown as {
      travelContentImport?: {
        findMany: (args: {
          where: {
            status: "PUBLISHED";
            university: { slug: string };
            rewrittenSummary: { not: null };
          };
          orderBy: { updatedAt: "desc" };
          take: number;
          select: {
            platform: true;
            sourceTitle: true;
            sourceUrl: true;
            rewrittenSummary: true;
            highlights: true;
            studentAngle: true;
            complianceNotes: true;
          };
        }) => Promise<DbTravelImport[]>;
      };
    }).travelContentImport;

    if (!client) return getFallbackUniversityTravelNotes(universitySlug);

    const imports = await client.findMany({
      where: {
        status: "PUBLISHED",
        university: { slug: universitySlug },
        rewrittenSummary: { not: null }
      },
      orderBy: { updatedAt: "desc" },
      take: 6,
      select: {
        platform: true,
        sourceTitle: true,
        sourceUrl: true,
        rewrittenSummary: true,
        highlights: true,
        studentAngle: true,
        complianceNotes: true
      }
    });

    if (imports.length === 0) return getFallbackUniversityTravelNotes(universitySlug);

    return imports.map((item) => ({
      universitySlug,
      platform: item.platform,
      sourceTitle: item.sourceTitle ?? "Nearby travel review summary",
      sourceUrl: item.sourceUrl,
      rewrittenSummary: item.rewrittenSummary ?? "",
      highlights: item.highlights,
      studentAngle: item.studentAngle ?? "Useful for comparing campus life, weekend travel, and city fit.",
      complianceLabel: item.complianceNotes ?? "Published after source review and editorial rewrite."
    }));
  } catch {
    return getFallbackUniversityTravelNotes(universitySlug);
  }
}
