"use client";

import { CheckCircle2, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

type Field = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

const degreeOptions = {
  en: [
    ["", "Select a degree"],
    ["LANGUAGE", "Language Program"],
    ["BACHELOR", "Bachelor"],
    ["MASTER", "Master"],
    ["PHD", "PhD"],
    ["NON_DEGREE", "Non-degree"]
  ],
  zh: [
    ["", "选择学位"],
    ["LANGUAGE", "语言项目"],
    ["BACHELOR", "本科"],
    ["MASTER", "硕士"],
    ["PHD", "博士"],
    ["NON_DEGREE", "非学历项目"]
  ],
  vi: [
    ["", "Chọn bậc học"],
    ["LANGUAGE", "Chương trình ngôn ngữ"],
    ["BACHELOR", "Cử nhân"],
    ["MASTER", "Thạc sĩ"],
    ["PHD", "Tiến sĩ"],
    ["NON_DEGREE", "Chương trình không cấp bằng"]
  ]
};

function fields(locale: string): Field[] {
  if (locale === "zh") return [
        { name: "firstName", label: "名", type: "text", placeholder: "例如：Musa", required: true },
        { name: "lastName", label: "姓", type: "text", placeholder: "例如：Chen", required: true },
        { name: "country", label: "国家/地区", type: "text", placeholder: "例如：Vietnam", required: true },
        { name: "email", label: "邮箱", type: "email", placeholder: "you@example.com", required: true },
        { name: "phone", label: "电话/WhatsApp", type: "tel", placeholder: "+84..." },
        { name: "targetMajor", label: "目标专业", type: "text", placeholder: "例如：Medicine / AI / Business" },
        { name: "budgetUsd", label: "年度预算 USD", type: "number", placeholder: "例如：12000" },
        { name: "preferredCity", label: "偏好城市", type: "text", placeholder: "例如：北京、上海、杭州、大连" }
      ];
  if (locale === "vi") return [
        { name: "firstName", label: "Tên", type: "text", placeholder: "Ví dụ: Minh", required: true },
        { name: "lastName", label: "Họ", type: "text", placeholder: "Ví dụ: Nguyễn", required: true },
        { name: "country", label: "Quốc gia / Khu vực", type: "text", placeholder: "Ví dụ: Việt Nam", required: true },
        { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
        { name: "phone", label: "Điện thoại / WhatsApp", type: "tel", placeholder: "+84..." },
        { name: "targetMajor", label: "Ngành học mong muốn", type: "text", placeholder: "Ví dụ: Y khoa / AI / Kinh doanh" },
        { name: "budgetUsd", label: "Ngân sách hàng năm USD", type: "number", placeholder: "Ví dụ: 12000" },
        { name: "preferredCity", label: "Thành phố mong muốn", type: "text", placeholder: "Ví dụ: Bắc Kinh, Thượng Hải, Hàng Châu" }
      ];
  return [
        { name: "firstName", label: "First Name", type: "text", placeholder: "e.g. Musa", required: true },
        { name: "lastName", label: "Last Name", type: "text", placeholder: "e.g. Chen", required: true },
        { name: "country", label: "Country / Region", type: "text", placeholder: "e.g. Vietnam", required: true },
        { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
        { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+84..." },
        { name: "targetMajor", label: "Target Major", type: "text", placeholder: "e.g. Medicine / AI / Business" },
        { name: "budgetUsd", label: "Annual Budget USD", type: "number", placeholder: "e.g. 12000" },
        { name: "preferredCity", label: "Preferred City", type: "text", placeholder: "e.g. Beijing, Shanghai, Hangzhou, Dalian" }
      ];
}

export function ConsultationForm({ locale = "en" }: { locale?: string }) {
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const tx = (en: string, zh: string, vi: string) => isZh ? zh : isVi ? vi : en;
  const formFields = useMemo(() => fields(locale), [locale]);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");
    setLeadId(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/consultations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setSubmitState("error");
      setMessage(data?.message ?? tx("The request could not be submitted. Please check the fields and try again.", "提交失败，请检查信息后再试。", "Không thể gửi yêu cầu. Vui lòng kiểm tra thông tin và thử lại."));
      return;
    }

    setSubmitState("success");
    setLeadId(data?.consultation?.id ?? null);
    setMessage(tx("Your consultation request has been received. A counselor will review your major, city, budget, and scholarship direction.", "你的咨询申请已收到。顾问会根据专业、城市、预算和奖学金方向进行初步整理。", "Yêu cầu tư vấn của bạn đã được tiếp nhận. Cố vấn sẽ xem xét ngành học, thành phố, ngân sách và học bổng."));
    form.reset();
  }

  return (
    <>
    <noscript>
      <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        {tx(
          "This form needs JavaScript. If it does not load, email your name, country, target degree, major, and budget to maximasure@hotmail.com.",
          "此表单需要浏览器开启 JavaScript。如果无法提交，请把姓名、国家、目标学历、专业和预算发送到 maximasure@hotmail.com。",
          "Biểu mẫu này cần JavaScript. Nếu không tải được, hãy gửi tên, quốc gia, bậc học, ngành và ngân sách đến maximasure@hotmail.com."
        )}
      </div>
    </noscript>
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {tx("Application profile", "申请资料", "Hồ sơ đăng ký")}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink">
            {tx("Tell us your goals", "告诉我们你的目标", "Hãy cho chúng tôi biết mục tiêu của bạn")}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {tx("The more complete the form, the more precise the school, city, and scholarship advice can be.", "字段越完整，顾问越容易给出准确的学校、城市和奖学金建议。", "Thông tin càng đầy đủ, cố vấn càng dễ đề xuất trường, thành phố và học bổng phù hợp.")}
          </p>
        </div>
        <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-bold text-primary">
          {tx("Free", "免费", "Miễn phí")}
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {formFields.map((field) => (
          <label key={field.name} className="text-sm font-medium text-ink">
            {field.label}
            {field.required ? <span className="text-red-600"> *</span> : null}
            <input
              name={field.name}
              type={field.type}
              required={field.required}
              min={field.name === "budgetUsd" ? 1 : undefined}
              placeholder={field.placeholder}
              className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </label>
        ))}
        <label className="text-sm font-medium text-ink">
          {tx("Target Degree", "目标学位", "Bậc học mong muốn")}
          <select name="targetDegree" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10">
            {(isZh ? degreeOptions.zh : isVi ? degreeOptions.vi : degreeOptions.en).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-ink">
        {tx("Notes", "备注", "Ghi chú")}
        <textarea
          name="notes"
          rows={5}
          placeholder={tx("e.g. I want English-taught medicine, scholarship options, and a lower-cost city...", "例如：想申请英文授课医学，希望有奖学金，预算有限...", "Ví dụ: Tôi muốn học y khoa bằng tiếng Anh, cần học bổng và thành phố có chi phí thấp...")}
          className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </label>

      <button
        type="submit"
        disabled={submitState === "submitting" || submitState === "success"}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        <Send size={16} aria-hidden="true" />
        {submitState === "submitting" ? tx("Submitting...", "提交中...", "Đang gửi...") : tx("Submit Consultation", "提交咨询", "Gửi yêu cầu tư vấn")}
      </button>

      {message ? (
        <div className={`mt-5 rounded-lg border p-4 text-sm ${submitState === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-800"}`}>
          <div className="flex items-start gap-3">
            {submitState === "success" ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> : null}
            <div>
              <p className="font-semibold">{message}</p>
              {submitState === "success" ? (
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>{isZh ? "顾问会先判断专业、城市和预算是否匹配。" : "A counselor will first check major, city, and budget fit."}</li>
                  <li>{isZh ? "如果信息不足，我们会通过邮箱或电话补充确认。" : "If details are missing, we will confirm by email or phone."}</li>
                  <li>{isZh ? "CRM 状态已创建为 New。" : "CRM status has been created as New."}</li>
                </ul>
              ) : null}
              {leadId ? <p className="mt-3 text-xs opacity-80">{isZh ? "线索编号" : "Lead ID"}: {leadId}</p> : null}
            </div>
          </div>
        </div>
      ) : null}
    </form>
    </>
  );
}
