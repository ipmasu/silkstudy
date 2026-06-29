import { requireAdmin } from "@/lib/auth/guards";
import { prisma } from "@/lib/prisma";
import { unauthorizedResponse } from "@/lib/api/responses";

export const runtime = "nodejs";

function escapeCsv(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const consultations = await prisma.consultation.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      assignedTo: { select: { name: true, email: true } },
      crmNotes: { orderBy: { createdAt: "desc" }, take: 1 }
    },
    take: 500
  });

  const headers = [
    "First Name",
    "Last Name",
    "Country",
    "Email",
    "Phone",
    "Target Degree",
    "Target Major",
    "Budget USD",
    "Preferred City",
    "Status",
    "Assigned To",
    "Latest CRM Note",
    "Created At"
  ];

  const rows = consultations.map((lead) => [
    lead.firstName,
    lead.lastName,
    lead.country,
    lead.email,
    lead.phone,
    lead.targetDegree,
    lead.targetMajor,
    lead.budgetUsd,
    lead.preferredCity,
    lead.status,
    lead.assignedTo?.name ?? lead.assignedTo?.email ?? "",
    lead.crmNotes[0]?.content ?? "",
    lead.createdAt.toISOString()
  ]);

  const csv = `\uFEFF${[headers, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n")}`;

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=silkstudy-consultations.csv"
    }
  });
}
