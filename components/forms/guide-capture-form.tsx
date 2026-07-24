"use client";

import { CheckCircle2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function GuideCaptureForm({ locale = "en" }: { locale?: string }) {
  const isZh = locale === "zh";
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const title = isZh ? "免费指南：2026 来中国留学" : "Free Guide: Study in China 2026";
  const body = isZh
    ? "奖学金类型、申请时间线、城市成本和选校思路，先用一份指南把路线看清楚。"
    : "A practical walkthrough of scholarships, application timing, city costs, and school shortlisting for international students.";
  const button = isZh ? "发送给我 →" : "Send Me the Guide ->";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const response = await fetch("/api/guide-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, locale })
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setState("error");
      const reason = data?.guideDelivery?.reason ? ` (${data.guideDelivery.reason})` : "";
      setMessage(
        isZh
          ? `暂时没有发送成功，请稍后再试，或直接联系 SilkStudy。${reason}`
          : `We could not send the guide right now. Please try again or contact SilkStudy directly.${reason}`
      );
      return;
    }

    setState("success");
    setMessage(isZh ? "已发送。请检查你的邮箱，也可以查看垃圾邮件/促销邮件文件夹。" : "Sent. Please check your inbox, spam, or promotions folder.");
    setEmail("");
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 sm:p-8 lg:grid-cols-[1fr_220px] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary">{isZh ? "轻量留资" : "Low-pressure first step"}</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{body}</p>
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder={isZh ? "你的邮箱" : "Your email"}
                className="min-h-12 flex-1 rounded-md border border-slate-200 px-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <button type="submit" disabled={state === "submitting"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-blue-700 disabled:bg-slate-400">
                <Send size={16} aria-hidden="true" />
                {state === "submitting" ? (isZh ? "发送中..." : "Sending...") : button}
              </button>
            </form>
            <p className="mt-2 text-xs text-slate-500">{isZh ? "不骚扰。你也可以随时再申请人工方案。" : "No spam. You can ask for a human study plan whenever you are ready."}</p>
            {message ? (
              <p className={`mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold ${state === "error" ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"}`}>
                {state === "success" ? <CheckCircle2 size={16} aria-hidden="true" /> : null}
                {message}
              </p>
            ) : null}
          </div>
          <div className="hidden rounded-xl bg-white/70 p-8 text-center text-6xl shadow-sm lg:block" aria-hidden="true">PDF</div>
        </div>
      </div>
    </section>
  );
}
