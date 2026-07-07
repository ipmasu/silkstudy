import type { ConsultationInput } from "@/lib/validators/consultation";

type NotificationResult = {
  delivered: boolean;
  provider?: "resend";
  messageId?: string;
  reason?: string;
  preview?: {
    to: string;
    subject: string;
  };
};

function escapeHtml(value: string | number | null | undefined) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatValue(value: string | number | null | undefined) {
  const text = String(value ?? "").trim();
  return text || "Not provided";
}

function leadRows(lead: ConsultationInput) {
  return [
    ["Name", `${lead.firstName} ${lead.lastName}`],
    ["Country / Region", lead.country],
    ["Email", lead.email],
    ["Phone / WhatsApp", lead.phone],
    ["Target degree", lead.targetDegree],
    ["Target major", lead.targetMajor],
    ["Annual budget USD", lead.budgetUsd],
    ["Preferred city", lead.preferredCity],
    ["Notes", lead.notes]
  ];
}

function buildEmailHtml(lead: ConsultationInput) {
  const rows = leadRows(lead)
    .map(([label, value]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:700;width:180px;">${escapeHtml(label)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">${escapeHtml(formatValue(value))}</td>
      </tr>
    `)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a;">
      <h1 style="margin:0 0 12px;font-size:22px;">New SilkStudy consultation lead</h1>
      <p style="margin:0 0 16px;color:#475569;">A student submitted the China study consultation form. The lead has also been saved in the CRM.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">${rows}</table>
      <p style="margin:18px 0 0;color:#64748b;font-size:13px;">Reply directly to the student's email or open the admin CRM to update status and notes.</p>
    </div>
  `;
}

function buildEmailText(lead: ConsultationInput) {
  return [
    "New SilkStudy consultation lead",
    "",
    ...leadRows(lead).map(([label, value]) => `${label}: ${formatValue(value)}`),
    "",
    "The lead has also been saved in the CRM."
  ].join("\n");
}

export async function notifyAdminAboutConsultation(lead: ConsultationInput) {
  const recipients = (process.env.ADMIN_NOTIFICATION_EMAIL ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.ADMIN_NOTIFICATION_FROM_EMAIL || "SilkStudy <onboarding@resend.dev>";
  const subject = `New SilkStudy lead: ${lead.firstName} ${lead.lastName} from ${lead.country}`;

  if (!recipients.length) {
    return {
      delivered: false,
      reason: "ADMIN_NOTIFICATION_EMAIL is not configured"
    } satisfies NotificationResult;
  }

  if (!resendApiKey) {
    return {
      delivered: false,
      reason: "RESEND_API_KEY is not configured",
      preview: {
        to: recipients.join(", "),
        subject
      }
    } satisfies NotificationResult;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: recipients,
        reply_to: lead.email,
        subject,
        html: buildEmailHtml(lead),
        text: buildEmailText(lead)
      })
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        delivered: false,
        provider: "resend",
        reason: result?.message ?? `Resend request failed with status ${response.status}`,
        preview: {
          to: recipients.join(", "),
          subject
        }
      } satisfies NotificationResult;
    }

    return {
      delivered: true,
      provider: "resend",
      messageId: result?.id,
      preview: {
        to: recipients.join(", "),
        subject
      }
    } satisfies NotificationResult;
  } catch (error) {
    return {
      delivered: false,
      provider: "resend",
      reason: error instanceof Error ? error.message : "Failed to send email notification",
      preview: {
        to: recipients.join(", "),
        subject
      }
    } satisfies NotificationResult;
  }
}
