import { z } from "zod";

export const universityAdminSchema = z.object({
  slug: z.string().trim().min(1).max(140),
  name: z.string().trim().min(1).max(180),
  chineseName: z.string().trim().max(180).optional().or(z.literal("")),
  summary: z.string().trim().max(1200).optional().or(z.literal("")),
  qsRanking: z.coerce.number().int().positive().optional().or(z.literal("")),
  tuitionMinUsd: z.coerce.number().int().positive().optional().or(z.literal("")),
  tuitionMaxUsd: z.coerce.number().int().positive().optional().or(z.literal("")),
  foundedYear: z.coerce.number().int().positive().optional().or(z.literal("")),
  website: z.string().trim().url().optional().or(z.literal("")),
  provinceId: z.string().trim().optional().or(z.literal("")),
  provinceSlug: z.string().trim().optional().or(z.literal("")),
  cityId: z.string().trim().optional().or(z.literal("")),
  citySlug: z.string().trim().optional().or(z.literal("")),
  hasEnglishPrograms: z.coerce.boolean().default(false),
  hasScholarships: z.coerce.boolean().default(false),
  isFeatured: z.coerce.boolean().default(false),
  isPublished: z.coerce.boolean().default(false)
});

export const cityAdminSchema = z.object({
  slug: z.string().trim().min(1).max(140),
  name: z.string().trim().min(1).max(160),
  provinceId: z.string().trim().optional().or(z.literal("")),
  provinceSlug: z.string().trim().optional().or(z.literal("")),
  summary: z.string().trim().max(1500).optional().or(z.literal("")),
  livingCostMonthlyUsd: z.coerce.number().int().positive().optional().or(z.literal("")),
  climate: z.string().trim().max(160).optional().or(z.literal("")),
  visaConvenience: z.string().trim().max(220).optional().or(z.literal(""))
});

export const majorAdminSchema = z.object({
  slug: z.string().trim().min(1).max(140),
  name: z.string().trim().min(1).max(160),
  category: z.string().trim().min(1).max(160),
  description: z.string().trim().max(1500).optional().or(z.literal("")),
  futureCareer: z.string().trim().max(1500).optional().or(z.literal("")),
  isFeatured: z.coerce.boolean().default(false)
});

export const consultationStatusSchema = z.object({
  status: z.enum(["NEW", "CONTACTED", "APPLIED", "CONVERTED", "LOST"]),
  note: z.string().trim().max(1200).optional().or(z.literal(""))
});

export const universityMediaSchema = z.object({
  type: z.enum(["LOGO", "COVER", "PHOTO", "VIDEO"]),
  url: z.string().trim().url(),
  alt: z.string().trim().max(220).optional().or(z.literal("")),
  publicId: z.string().trim().max(220).optional().or(z.literal("")),
  sortOrder: z.coerce.number().int().min(0).default(0)
});

export const seoMetadataSchema = z.object({
  metaTitle: z.string().trim().min(1).max(180),
  metaDescription: z.string().trim().min(1).max(320),
  canonicalUrl: z.string().trim().url().optional().or(z.literal("")),
  ogTitle: z.string().trim().max(180).optional().or(z.literal("")),
  ogDescription: z.string().trim().max(320).optional().or(z.literal("")),
  ogImageUrl: z.string().trim().url().optional().or(z.literal("")),
  provinceId: z.string().trim().optional().or(z.literal("")),
  cityId: z.string().trim().optional().or(z.literal("")),
  universityId: z.string().trim().optional().or(z.literal("")),
  majorId: z.string().trim().optional().or(z.literal(""))
});

export const travelContentImportSchema = z.object({
  provinceId: z.string().trim().optional().or(z.literal("")),
  cityId: z.string().trim().optional().or(z.literal("")),
  universitySlug: z.string().trim().max(120).optional().or(z.literal("")),
  platform: z.enum(["QUNAR", "XIAOHONGSHU", "DIANPING", "DOUYIN", "TIKTOK", "TRIP", "OFFICIAL_TOURISM", "WIKIVOYAGE", "OTHER"]),
  sourceUrl: z.string().trim().url(),
  sourceTitle: z.string().trim().max(220).optional().or(z.literal("")),
  sourceAuthor: z.string().trim().max(160).optional().or(z.literal("")),
  sourceLocale: z.string().trim().max(20).optional().or(z.literal("")),
  originalExcerpt: z.string().trim().min(1).max(3000),
  rewrittenSummary: z.string().trim().max(3000).optional().or(z.literal("")),
  highlights: z.array(z.string().trim().min(1).max(80)).max(12).default([]),
  studentAngle: z.string().trim().max(1500).optional().or(z.literal("")),
  complianceNotes: z.string().trim().max(1500).optional().or(z.literal("")),
  status: z.enum(["NEEDS_REWRITE", "NEEDS_SOURCE_REVIEW", "READY_TO_PUBLISH", "PUBLISHED", "REJECTED"]).default("NEEDS_REWRITE"),
  sourceCapturedAt: z.string().datetime().optional().or(z.literal(""))
});

export const travelContentStatusSchema = z.object({
  status: z.enum(["NEEDS_REWRITE", "NEEDS_SOURCE_REVIEW", "READY_TO_PUBLISH", "PUBLISHED", "REJECTED"]),
  complianceNotes: z.string().trim().max(1500).optional().or(z.literal(""))
});

export function nullableNumber(value: number | "" | undefined) {
  return typeof value === "number" ? value : null;
}

export function nullableString(value: string | "" | undefined) {
  return value ? value : null;
}
