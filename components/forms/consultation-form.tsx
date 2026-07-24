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
    ["", "选择学历"],
    ["LANGUAGE", "中文语言项目"],
    ["BACHELOR", "本科"],
    ["MASTER", "硕士"],
    ["PHD", "博士"],
    ["NON_DEGREE", "非学历项目"]
  ],
  vi: [
    ["", "Chọn bậc học"],
    ["LANGUAGE", "Chương trình tiếng Trung"],
    ["BACHELOR", "Cử nhân"],
    ["MASTER", "Thạc sĩ"],
    ["PHD", "Tiến sĩ"],
    ["NON_DEGREE", "Không cấp bằng"]
  ]
};

function fields(locale: string): Field[] {
  if (locale === "zh") {
    return [
      { name: "firstName", label: "名", type: "text", placeholder: "例如：Musa", required: true },
      { name: "lastName", label: "姓", type: "text", placeholder: "例如：Chen", required: true },
      { name: "country", label: "国家/地区", type: "text", placeholder: "例如：越南、尼日利亚、俄罗斯", required: true },
      { name: "email", label: "邮箱", type: "email", placeholder: "you@example.com", required: true },
      { name: "phone", label: "电话/WhatsApp", type: "tel", placeholder: "+84..." },
      { name: "targetMajor", label: "目标专业", type: "text", placeholder: "例如：医学 / AI / 商科 / 工程" },
      { name: "budgetUsd", label: "年度预算 USD", type: "number", placeholder: "如果预算很低，也可以写 0" },
      { name: "preferredCity", label: "偏好城市", type: "text", placeholder: "例如：长沙、成都、西安、杭州" }
    ];
  }

  if (locale === "vi") {
    return [
      { name: "firstName", label: "Tên", type: "text", placeholder: "Ví dụ: Minh", required: true },
      { name: "lastName", label: "Họ", type: "text", placeholder: "Ví dụ: Nguyen", required: true },
      { name: "country", label: "Quốc gia / Khu vực", type: "text", placeholder: "Ví dụ: Việt Nam", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
      { name: "phone", label: "Điện thoại / WhatsApp", type: "tel", placeholder: "+84..." },
      { name: "targetMajor", label: "Ngành muốn học", type: "text", placeholder: "Ví dụ: Y khoa / AI / Kinh doanh" },
      { name: "budgetUsd", label: "Ngân sách mỗi năm USD", type: "number", placeholder: "Nếu ngân sách thấp, có thể ghi 0" },
      { name: "preferredCity", label: "Thành phố mong muốn", type: "text", placeholder: "Ví dụ: Trường Sa, Thành Đô, Tây An" }
    ];
  }

  return [
    { name: "firstName", label: "First Name", type: "text", placeholder: "e.g. Musa", required: true },
    { name: "lastName", label: "Last Name", type: "text", placeholder: "e.g. Chen", required: true },
    { name: "country", label: "Country / Region", type: "text", placeholder: "e.g. Vietnam, Nigeria, Russia", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+84..." },
    { name: "targetMajor", label: "Target Major", type: "text", placeholder: "e.g. Medicine / AI / Business / Engineering" },
    { name: "budgetUsd", label: "Annual Budget USD", type: "number", placeholder: "If your budget is very low, enter 0" },
    { name: "preferredCity", label: "Preferred City", type: "text", placeholder: "e.g. Changsha, Chengdu, Xi'an, Hangzhou" }
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setSubmitState("error");
      setMessage(data?.message ?? tx(
        "The request could not be submitted. Please check the fields and try again.",
        "提交失败，请检查信息后再试。",
        "Không thể gửi yêu cầu. Vui lòng kiểm tra thông tin và thử lại."
      ));
      return;
    }

    setSubmitState("success");
    setLeadId(data?.consultation?.id ?? null);
    setMessage(tx(
      "Your request has been received. We will first check whether you may fit a full or high-coverage scholarship route.",
      "你的咨询申请已收到。我们会优先判断你是否适合全额或高覆盖奖学金路线。",
      "Yêu cầu của bạn đã được nhận. Chúng tôi sẽ ưu tiên kiểm tra khả năng phù hợp với học bổng toàn phần hoặc hỗ trợ cao."
    ));
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
              {tx("Scholarship-first profile", "奖学金优先评估", "Hồ sơ ưu tiên học bổng")}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-ink">
              {tx("Tell us your goals", "告诉我们你的目标", "Hãy cho chúng tôi biết mục tiêu của bạn")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {tx(
                "If your family budget is limited, say it directly. Many Chinese scholarship routes are designed to reduce tuition pressure, and some can cover tuition plus living support.",
                "如果家庭预算有限，请直接写出来。中国有很多奖学金路线就是为了降低学费压力，其中一些可以覆盖全部学费并提供生活补助。",
                "Nếu ngân sách gia đình hạn chế, hãy ghi rõ. Nhiều học bổng Trung Quốc giúp giảm học phí, một số có thể bao gồm học phí và hỗ trợ sinh hoạt."
              )}
            </p>
          </div>
          <span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
            {tx("Free", "免费", "Miễn phí")}
          </span>
        </div>

        <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
          <strong>{tx("Scholarship goal:", "奖学金目标：", "Mục tiêu học bổng:")}</strong>
          {tx(
            " We will prioritize routes that may waive tuition, include dormitory support, or provide a monthly living allowance.",
            " 我们会优先核验可能免学费、含住宿支持或提供月度生活补助的路线。",
            " Chúng tôi sẽ ưu tiên kiểm tra các tuyến có thể miễn học phí, hỗ trợ ký túc xá hoặc trợ cấp sinh hoạt hằng tháng."
          )}
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
                min={field.name === "budgetUsd" ? 0 : undefined}
                placeholder={field.placeholder}
                className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </label>
          ))}
          <label className="text-sm font-medium text-ink">
            {tx("Target Degree", "目标学历", "Bậc học mong muốn")}
            <select name="targetDegree" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10">
              {(isZh ? degreeOptions.zh : isVi ? degreeOptions.vi : degreeOptions.en).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="mt-5 block text-sm font-medium text-ink">
          {tx("Notes", "补充说明", "Ghi chú")}
          <textarea
            name="notes"
            rows={5}
            placeholder={tx(
              "e.g. I want a full scholarship, English-taught medicine, and a lower-cost city...",
              "例如：我希望申请全额奖学金，最好免学费并覆盖生活费；想读英文授课医学，城市成本希望低一些……",
              "Ví dụ: Tôi muốn học bổng toàn phần, ngành y bằng tiếng Anh và thành phố chi phí thấp..."
            )}
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
                    <li>{tx("We will check major, city, budget, and scholarship fit first.", "我们会先核验专业、城市、预算和奖学金匹配度。", "Chúng tôi sẽ kiểm tra ngành, thành phố, ngân sách và mức độ phù hợp học bổng trước.")}</li>
                    <li>{tx("If details are missing, we will confirm by email or phone.", "如果信息不足，我们会通过邮箱或电话补充确认。", "Nếu thiếu thông tin, chúng tôi sẽ xác nhận qua email hoặc điện thoại.")}</li>
                    <li>{tx("The first assessment is free.", "首次评估免费。", "Đánh giá đầu tiên miễn phí.")}</li>
                  </ul>
                ) : null}
                {leadId ? <p className="mt-3 text-xs opacity-80">{tx("Lead ID", "线索编号", "Mã hồ sơ")}: {leadId}</p> : null}
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </>
  );
}
