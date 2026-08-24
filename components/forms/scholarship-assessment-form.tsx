"use client";

import { CheckCircle2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const degreeOptions = [
  ["BACHELOR", "本科 Bachelor"],
  ["MASTER", "硕士 Master"],
  ["PHD", "博士 PhD"],
  ["LANGUAGE", "中文/预科 Language"],
  ["NON_DEGREE", "短期项目 Non-degree"]
] as const;

const cityOptions = ["不确定", "北京", "上海", "长沙", "成都", "西安", "杭州", "广州", "深圳", "昆明", "南宁", "重庆", "天津", "苏州"];

export function ScholarshipAssessmentForm({ locale = "zh" }: { locale?: string }) {
  const isZh = locale === "zh";
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") || "").trim();
    const lastName = String(form.get("lastName") || "").trim() || "-";
    const country = String(form.get("country") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const targetDegree = String(form.get("targetDegree") || "").trim();
    const targetMajor = String(form.get("targetMajor") || "").trim();
    const preferredCity = String(form.get("preferredCity") || "").trim();
    const monthlyBudget = String(form.get("monthlyBudget") || "").trim();
    const currentEducation = String(form.get("currentEducation") || "").trim();
    const chineseLevel = String(form.get("chineseLevel") || "").trim();
    const contactChannel = String(form.get("contactChannel") || "").trim();
    const notes = String(form.get("notes") || "").trim();

    const payload = {
      firstName,
      lastName,
      country,
      email,
      phone,
      targetDegree,
      targetMajor,
      preferredCity,
      notes: [
        "[Scholarship assessment lead]",
        `Current education: ${currentEducation || "Not provided"}`,
        `Monthly budget: ${monthlyBudget || "Not provided"}`,
        `Chinese / English level: ${chineseLevel || "Not provided"}`,
        `Preferred contact channel: ${contactChannel || "Not provided"}`,
        notes ? `Student notes: ${notes}` : ""
      ].filter(Boolean).join("\n")
    };

    const response = await fetch("/api/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setState("error");
      setMessage(data?.message || (isZh ? "提交失败，请检查信息后再试。" : "Submission failed. Please check the form and try again."));
      return;
    }

    setState("success");
    setMessage(isZh ? "已提交。我们会根据你的条件评估免学费、生活补助和适合学校路线，并尽快联系你。" : "Submitted. We will assess tuition-waiver, stipend, and suitable school routes and contact you soon.");
    event.currentTarget.reset();
  }

  const inputClass = "min-h-12 rounded-md border border-slate-200 bg-white px-4 text-base outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100";
  const labelClass = "grid gap-2 text-sm font-semibold text-slate-800";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          {isZh ? "名字" : "First name"}
          <input name="firstName" required className={inputClass} placeholder={isZh ? "例如：Anna" : "Anna"} />
        </label>
        <label className={labelClass}>
          {isZh ? "姓氏" : "Last name"}
          <input name="lastName" className={inputClass} placeholder={isZh ? "可选" : "Optional"} />
        </label>
        <label className={labelClass}>
          {isZh ? "国家/地区" : "Country / region"}
          <input name="country" required className={inputClass} placeholder={isZh ? "例如：越南、泰国、俄罗斯" : "Vietnam, Thailand, Russia"} />
        </label>
        <label className={labelClass}>
          {isZh ? "邮箱" : "Email"}
          <input name="email" type="email" required className={inputClass} placeholder="name@example.com" />
        </label>
        <label className={labelClass}>
          WhatsApp / 微信 / 电话
          <input name="phone" className={inputClass} placeholder={isZh ? "方便联系你的方式" : "Best contact detail"} />
        </label>
        <label className={labelClass}>
          {isZh ? "首选联系渠道" : "Preferred contact channel"}
          <select name="contactChannel" className={inputClass} defaultValue="">
            <option value="">{isZh ? "请选择" : "Select"}</option>
            <option>Email</option>
            <option>WhatsApp</option>
            <option>WeChat</option>
            <option>Telegram</option>
            <option>Phone</option>
          </select>
        </label>
        <label className={labelClass}>
          {isZh ? "当前学历" : "Current education"}
          <input name="currentEducation" className={inputClass} placeholder={isZh ? "高中 / 本科 / 硕士 / 在读" : "High school / bachelor / master"} />
        </label>
        <label className={labelClass}>
          {isZh ? "目标层次" : "Target degree"}
          <select name="targetDegree" className={inputClass} defaultValue="">
            <option value="">{isZh ? "请选择" : "Select"}</option>
            {degreeOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label className={labelClass}>
          {isZh ? "想学专业" : "Target major"}
          <input name="targetMajor" className={inputClass} placeholder={isZh ? "AI、医学、商科、中文等" : "AI, medicine, business, Chinese..."} />
        </label>
        <label className={labelClass}>
          {isZh ? "目标中国城市" : "Target city in China"}
          <select name="preferredCity" className={inputClass} defaultValue="">
            <option value="">{isZh ? "请选择或填不确定" : "Select or unsure"}</option>
            {cityOptions.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
        </label>
        <label className={labelClass}>
          {isZh ? "每月可承担生活预算" : "Monthly living budget"}
          <select name="monthlyBudget" className={inputClass} defaultValue="">
            <option value="">{isZh ? "请选择" : "Select"}</option>
            <option value="低于100美元">低于100美元 / Under $100</option>
            <option value="100-200美元">100-200美元 / $100-$200</option>
            <option value="高于200美元">高于200美元 / Above $200</option>
          </select>
        </label>
        <label className={labelClass}>
          {isZh ? "中文/英文水平" : "Chinese / English level"}
          <input name="chineseLevel" className={inputClass} placeholder={isZh ? "HSK、IELTS、日常中文等" : "HSK, IELTS, daily Chinese..."} />
        </label>
      </div>

      <label className={`${labelClass} mt-4`}>
        {isZh ? "补充说明" : "Anything else"}
        <textarea name="notes" rows={5} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-base outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100" placeholder={isZh ? "例如：希望尽量免学费、需要生活补助、想申请医学或人工智能方向。" : "For example: need tuition waiver, living allowance, medicine or AI program."} />
      </label>

      <button type="submit" disabled={state === "submitting"} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 disabled:bg-slate-400 sm:w-auto">
        <Send size={16} aria-hidden="true" />
        {state === "submitting" ? (isZh ? "提交中..." : "Submitting...") : (isZh ? "提交免费奖学金评估" : "Submit Free Scholarship Assessment")}
      </button>

      {message ? (
        <p className={`mt-4 inline-flex items-start gap-2 rounded-md px-3 py-2 text-sm font-semibold ${state === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {state === "success" ? <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden="true" /> : null}
          {message}
        </p>
      ) : null}
    </form>
  );
}
