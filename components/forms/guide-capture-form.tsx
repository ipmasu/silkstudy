"use client";

import { CheckCircle2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function GuideCaptureForm({ locale = "en" }: { locale?: string }) {
  const isZh = locale === "zh";
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const title = isZh ? "\u514d\u8d39\u6307\u5357\uff1a2026\u6765\u4e2d\u56fd\u7559\u5b66" : "Free Guide: Study in China 2026";
  const body = isZh
    ? "\u5956\u5b66\u91d1\u7c7b\u578b\u3001\u7533\u8bf7\u65f6\u95f4\u7ebf\u3001\u57ce\u5e02\u6210\u672c\u548c\u9009\u6821\u601d\u8def\uff0c\u5148\u7528\u4e00\u4efd\u6307\u5357\u628a\u8def\u7ebf\u770b\u6e05\u695a\u3002"
    : "A practical walkthrough of scholarships, application timing, city costs, and school shortlisting for international students.";
  const button = isZh ? "\u53d1\u9001\u7ed9\u6211 \u2192" : "Send Me the Guide ->";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const response = await fetch("/api/guide-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        locale
      })
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setState("error");
      setMessage(data?.message ?? (isZh ? "暂时没有发送成功，请稍后再试，或直接联系 SilkStudy。" : "We could not send the guide right now. Please try again or contact SilkStudy directly."));
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
            <p className="text-sm font-bold uppercase tracking-wide text-primary">{isZh ? "\u8f7b\u91cf\u7559\u8d44" : "Low-pressure first step"}</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{body}</p>
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder={isZh ? "\u4f60\u7684\u90ae\u7bb1" : "Your email"}
                className="min-h-12 flex-1 rounded-md border border-slate-200 px-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <button type="submit" disabled={state === "submitting"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-blue-700 disabled:bg-slate-400">
                <Send size={16} aria-hidden="true" />
                {state === "submitting" ? (isZh ? "\u53d1\u9001\u4e2d..." : "Sending...") : button}
              </button>
            </form>
            <p className="mt-2 text-xs text-slate-500">{isZh ? "\u4e0d\u9a9a\u6270\u3002\u4f60\u4e5f\u53ef\u4ee5\u968f\u65f6\u518d\u7533\u8bf7\u4eba\u5de5\u65b9\u6848\u3002" : "No spam. You can ask for a human study plan whenever you are ready."}</p>
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
