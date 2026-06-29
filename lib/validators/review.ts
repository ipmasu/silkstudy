import { z } from "zod";

export const universityReviewSchema = z.object({
  authorName: z.string().trim().min(1).max(120),
  authorCountry: z.string().trim().max(120).optional().or(z.literal("")),
  program: z.string().trim().max(180).optional().or(z.literal("")),
  degreeLevel: z.enum(["LANGUAGE", "BACHELOR", "MASTER", "PHD", "NON_DEGREE"]).optional().or(z.literal("")),
  rating: z.coerce.number().int().min(1).max(5),
  title: z.string().trim().min(3).max(180),
  content: z.string().trim().min(20).max(3000),
  pros: z.string().trim().max(1000).optional().or(z.literal("")),
  cons: z.string().trim().max(1000).optional().or(z.literal(""))
});

export const reviewModerationSchema = z.object({
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
  isVerified: z.coerce.boolean().optional()
});
