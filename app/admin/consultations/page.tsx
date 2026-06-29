import { ConsultationCrmPage } from "@/components/admin/consultation-crm-page";

const fallbackLeads = [
  {
    firstName: "Amina",
    lastName: "Rahman",
    country: "Bangladesh",
    email: "amina@example.com",
    targetMajor: "Medicine",
    status: "NEW"
  },
  {
    firstName: "Daniel",
    lastName: "Nguyen",
    country: "Vietnam",
    email: "daniel@example.com",
    targetMajor: "Computer Science",
    status: "CONTACTED"
  },
  {
    firstName: "Maria",
    lastName: "Garcia",
    country: "Spain",
    email: "maria@example.com",
    targetMajor: "Business",
    status: "APPLIED"
  }
];

export default function AdminConsultationsPage() {
  return <ConsultationCrmPage fallbackLeads={fallbackLeads} />;
}
