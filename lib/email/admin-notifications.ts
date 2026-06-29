import type { ConsultationInput } from "@/lib/validators/consultation";

export async function notifyAdminAboutConsultation(lead: ConsultationInput) {
  const recipient = process.env.ADMIN_NOTIFICATION_EMAIL;

  if (!recipient) {
    return {
      delivered: false,
      reason: "ADMIN_NOTIFICATION_EMAIL is not configured"
    };
  }

  return {
    delivered: false,
    reason: "Email provider integration is reserved for deployment configuration",
    preview: {
      to: recipient,
      subject: `New SilkStudy lead: ${lead.firstName} ${lead.lastName}`
    }
  };
}
