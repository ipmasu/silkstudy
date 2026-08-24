import type { ConsultationInput } from "@/lib/validators/consultation";

export type FallbackConsultation = {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phone: string | null;
  targetDegree: string | null;
  targetMajor: string | null;
  budgetUsd: number | null;
  preferredCity: string | null;
  status: "NEW";
  createdAt: string;
  crmNotes: { id: string; content: string; createdAt: string }[];
};

const globalFallbackStore = globalThis as unknown as {
  silkstudyFallbackConsultations?: FallbackConsultation[];
};

function fallbackStore() {
  if (!globalFallbackStore.silkstudyFallbackConsultations) {
    globalFallbackStore.silkstudyFallbackConsultations = [];
  }

  return globalFallbackStore.silkstudyFallbackConsultations;
}

export function addFallbackConsultation(lead: ConsultationInput, reason?: string) {
  const createdAt = new Date().toISOString();
  const record: FallbackConsultation = {
    id: `email-backup-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    firstName: lead.firstName,
    lastName: lead.lastName,
    country: lead.country,
    email: lead.email,
    phone: lead.phone || null,
    targetDegree: lead.targetDegree || null,
    targetMajor: lead.targetMajor || null,
    budgetUsd: typeof lead.budgetUsd === "number" ? lead.budgetUsd : null,
    preferredCity: lead.preferredCity || null,
    status: "NEW",
    createdAt,
    crmNotes: [
      {
        id: `note-${createdAt}`,
        content: reason ? `Email delivered, database save pending. Reason: ${reason}` : "Email delivered, database save pending.",
        createdAt
      }
    ]
  };

  const store = fallbackStore();
  store.unshift(record);
  globalFallbackStore.silkstudyFallbackConsultations = store.slice(0, 100);
  return record;
}

export function getFallbackConsultations() {
  return [...fallbackStore()];
}
