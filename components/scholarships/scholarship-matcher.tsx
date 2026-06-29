"use client";

import { useMemo, useState } from "react";
import { Award, Banknote, CheckCircle2, GraduationCap, MapPinned } from "lucide-react";

type ScholarshipMatcherProps = {
  locale?: string;
};

const degrees = ["Bachelor", "Master", "PhD", "Language"];
const majors = ["Computer Science", "AI", "Medicine", "Engineering", "Business", "Chinese Language"];
const budgets = ["Under $4,000/year", "$4,000-$8,000/year", "$8,000+/year"];
const cityTiers = ["Lower-cost cities", "Balanced cities", "Top-tier cities"];

function scoreProfile(degree: string, major: string, budget: string, cityTier: string) {
  let csc = 62;
  let provincial = 58;
  let university = 70;
  let lowCost = 64;

  if (["Master", "PhD"].includes(degree)) csc += 18;
  if (degree === "Language") {
    university += 10;
    provincial += 7;
  }
  if (["Engineering", "AI", "Computer Science", "Medicine"].includes(major)) {
    csc += 8;
    university += 6;
  }
  if (budget === "Under $4,000/year") {
    csc += 10;
    lowCost += 18;
  }
  if (cityTier === "Lower-cost cities") {
    lowCost += 16;
    provincial += 8;
  }
  if (cityTier === "Top-tier cities") {
    university += 6;
    lowCost -= 14;
  }

  return [
    ["CSC Scholarship", csc, "Best when academic record is strong and the target program is verified as CSC-eligible."],
    ["Provincial Scholarship", provincial, "Useful for students who are open to strong regional universities outside the most expensive cities."],
    ["University Scholarship", university, "Often the most practical first match for language, bachelor, and flexible-budget applicants."],
    ["Low-cost City Strategy", lowCost, "Not a scholarship, but often the fastest way to reduce financial pressure while keeping school quality acceptable."]
  ]
    .map(([name, score, note]) => ({ name: String(name), score: Math.max(20, Math.min(95, Number(score))), note: String(note) }))
    .sort((a, b) => b.score - a.score);
}

export function ScholarshipMatcher({ locale = "en" }: ScholarshipMatcherProps) {
  const isZh = locale === "zh";
  const [degree, setDegree] = useState("Master");
  const [major, setMajor] = useState("Engineering");
  const [budget, setBudget] = useState("Under $4,000/year");
  const [cityTier, setCityTier] = useState("Lower-cost cities");
  const matches = useMemo(() => scoreProfile(degree, major, budget, cityTier), [degree, major, budget, cityTier]);

  const fields = [
    [isZh ? "目标学位" : "Target degree", degrees, degree, setDegree, GraduationCap],
    [isZh ? "目标专业" : "Target major", majors, major, setMajor, Award],
    [isZh ? "年度预算" : "Annual budget", budgets, budget, setBudget, Banknote],
    [isZh ? "城市偏好" : "City preference", cityTiers, cityTier, setCityTier, MapPinned]
  ] as const;

  return (
    <div className="grid gap-6 lg:grid-cols-[390px_1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {isZh ? "规则型匹配 MVP" : "Rule-based matcher MVP"}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-ink">
          {isZh ? "输入学生背景" : "Enter student profile"}
        </h2>
        <div className="mt-6 grid gap-5">
          {fields.map(([label, options, value, setter, Icon]) => (
            <label key={label} className="text-sm font-semibold text-ink">
              <span className="flex items-center gap-2">
                <Icon size={16} className="text-primary" aria-hidden="true" />
                {label}
              </span>
              <select
                value={value}
                onChange={(event) => setter(event.target.value)}
                className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              >
                {options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {isZh ? "匹配结果" : "Matching result"}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink">
              {isZh ? "优先考虑的奖学金方向" : "Recommended scholarship paths"}
            </h2>
          </div>
          <span className="rounded bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700">
            {isZh ? "需人工核验" : "Requires verification"}
          </span>
        </div>
        <div className="mt-6 grid gap-4">
          {matches.map((match) => (
            <article key={match.name} className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} aria-hidden="true" />
                  <h3 className="font-bold text-ink">{match.name}</h3>
                </div>
                <span className="text-lg font-bold text-primary">{match.score}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-primary" style={{ width: `${match.score}%` }} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {isZh ? "该方向需要结合学校官网、招生简章、专业语言、成绩背景和申请截止日期继续核验。" : match.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
