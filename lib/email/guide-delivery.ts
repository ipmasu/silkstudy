type GuideDeliveryResult = {
  delivered: boolean;
  provider?: "resend";
  messageId?: string;
  reason?: string;
  preview?: {
    to: string;
    subject: string;
    guideUrl: string;
  };
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildGuideEmailHtml(guideUrl: string) {
  const safeUrl = escapeHtml(guideUrl);

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;max-width:640px;margin:0 auto;">
      <h1 style="margin:0 0 12px;font-size:24px;">Your SilkStudy guide is ready</h1>
      <p style="margin:0 0 16px;color:#475569;">Thank you for requesting the free SilkStudy guide.</p>
      <div style="border:1px solid #bfdbfe;background:#eff6ff;border-radius:12px;padding:18px;margin:18px 0;">
        <h2 style="margin:0 0 8px;font-size:18px;color:#1e3a8a;">2026 Study in China Low-Cost Scholarship Guide</h2>
        <p style="margin:0;color:#334155;">This guide explains how students may look for tuition-waiver routes, living support, national/provincial/university scholarships, and compliant application planning.</p>
      </div>
      <p style="margin:22px 0;">
        <a href="${safeUrl}" style="display:inline-block;background:#1d4ed8;color:#ffffff;text-decoration:none;border-radius:8px;padding:12px 18px;font-weight:700;">Download the PDF guide</a>
      </p>
      <p style="margin:0 0 14px;color:#475569;">If the button does not work, copy this link into your browser:</p>
      <p style="word-break:break-all;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;color:#1d4ed8;">${safeUrl}</p>
      <p style="margin:18px 0 0;color:#64748b;font-size:13px;">Important: scholarships are not guaranteed. Final coverage, quota, deadlines, admission and scholarship results must be verified against the current official notices of each school and relevant authority.</p>
    </div>
  `;
}

function buildGuideEmailText(guideUrl: string) {
  return [
    "Your SilkStudy guide is ready",
    "",
    "2026 Study in China Low-Cost Scholarship Guide",
    "",
    "Download the PDF guide:",
    guideUrl,
    "",
    "Important: scholarships are not guaranteed. Final coverage, quota, deadlines, admission and scholarship results must be verified against the current official notices of each school and relevant authority."
  ].join("\n");
}

export async function sendLowCostScholarshipGuideEmail({
  to,
  guideUrl
}: {
  to: string;
  guideUrl: string;
}): Promise<GuideDeliveryResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.GUIDE_DELIVERY_FROM_EMAIL?.trim() || process.env.ADMIN_NOTIFICATION_FROM_EMAIL?.trim();
  const subject = "Your SilkStudy guide: Study in China with low-cost scholarship routes";

  if (!resendApiKey) {
    return {
      delivered: false,
      reason: "RESEND_API_KEY is not configured",
      preview: { to, subject, guideUrl }
    };
  }

  if (!from) {
    return {
      delivered: false,
      reason: "GUIDE_DELIVERY_FROM_EMAIL or ADMIN_NOTIFICATION_FROM_EMAIL is not configured",
      preview: { to, subject, guideUrl }
    };
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
        to,
        subject,
        html: buildGuideEmailHtml(guideUrl),
        text: buildGuideEmailText(guideUrl)
      })
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        delivered: false,
        provider: "resend",
        reason: result?.message ?? `Resend request failed with status ${response.status}`,
        preview: { to, subject, guideUrl }
      };
    }

    return {
      delivered: true,
      provider: "resend",
      messageId: result?.id,
      preview: { to, subject, guideUrl }
    };
  } catch (error) {
    return {
      delivered: false,
      provider: "resend",
      reason: error instanceof Error ? error.message : "Failed to send guide email",
      preview: { to, subject, guideUrl }
    };
  }
}
