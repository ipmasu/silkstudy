import { z } from "zod";

export const degreeOptions = ["LANGUAGE", "BACHELOR", "MASTER", "PHD", "NON_DEGREE"] as const;

export const consultationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  country: z.string().trim().min(1, "Country is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(180),
  phone: z.string().trim().max(80).optional().or(z.literal("")),
  targetDegree: z.enum(degreeOptions).optional().or(z.literal("")),
  targetMajor: z.string().trim().max(160).optional().or(z.literal("")),
  budgetUsd: z.coerce.number().int().positive().max(250000).optional().or(z.literal("")),
  preferredCity: z.string().trim().max(160).optional().or(z.literal("")),
  notes: z.string().trim().max(3000).optional().or(z.literal(""))
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
