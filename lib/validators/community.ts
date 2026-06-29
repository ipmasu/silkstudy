import { z } from "zod";

export const communityPostSchema = z.object({
  type: z.enum(["MEETUP", "TRAVEL_BUDDY", "LANGUAGE_EXCHANGE", "CAMPUS_LIFE", "QUESTION", "LOCAL_HELP"]),
  title: z.string().trim().min(8).max(120),
  content: z.string().trim().min(30).max(2000),
  authorName: z.string().trim().min(2).max(60),
  authorCountry: z.string().trim().max(80).optional().default(""),
  citySlug: z.string().trim().min(2).max(80),
  languages: z.array(z.string().trim().min(2).max(40)).max(8).default([]),
  eventDate: z.string().datetime().optional().or(z.literal("")),
  meetingArea: z.string().trim().max(120).optional().default(""),
  contactEmail: z.string().email().optional().or(z.literal("")),
  participantCap: z.coerce.number().int().min(2).max(100).optional()
});

export const communityReplySchema = z.object({
  authorName: z.string().trim().min(2).max(60),
  content: z.string().trim().min(4).max(800)
});

export const communityReportSchema = z.object({
  reason: z.enum(["SPAM", "HARASSMENT", "UNSAFE_MEETUP", "PERSONAL_INFORMATION", "MISLEADING", "OTHER"]),
  details: z.string().trim().max(1000).optional().default("")
});
