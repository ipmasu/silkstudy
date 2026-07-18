"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Compass, MapPinned, WalletCards } from "lucide-react";

type Props = {
  locale?: string;
  prefix: string;
};

const budgetOptions = [
  ["low", "Under $500", "500 美元以下"],
  ["mid", "$500-$800", "500-800 美元"],
  ["high", "Over $800", "800 美元以上"]
];

const climateOptions = [
  ["four", "Four seasons", "四季分明"],
  ["warm", "Warm & humid", "温暖湿润"],
  ["spring", "Spring all year", "四季如春"]
];

const priorityOptions = [
  ["food", "Food", "美食"],
  ["nightlife", "Nightlife", "夜生活"],
  ["culture", "History & Culture", "历史文化"],
  ["career", "Career opportunities", "实习机会"]
];

export function HomeCityQuickMatch({ locale = "en", prefix }: Props) {
  const isZh = locale === "zh";
  const [budget, setBudget] = useState("low");
  const [climate, setClimate] = useState("spring");
  const [priority, setPriority] = useState("food");

  const href = useMemo(() => {
    const params = new URLSearchParams({ budget, climate, priority });
    return `${prefix}/cities?${params.toString()}`;
  }, [budget, climate, prefix, priority]);

  return (
    <section className="bg-[#fff8ef] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold uppercase tracking-wide text-red-700">
              <Compass size={16} aria-hidden="true" />
              Quick Match
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-ink">
              {isZh ? "3 个问题，先找到适合你的中国城市。" : "Find your China city in 3 questions."}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {isZh
                ? "预算、气候和生活偏好会直接影响你在中国的日常幸福感。先快速匹配，再进入城市列表看学校和奖学金。"
                : "Budget, climate, and lifestyle shape daily happiness. Start with a quick match, then compare cities, schools, and scholarship routes."}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <p className="flex items-center gap-2"><WalletCards size={17} className="text-red-600" /> {isZh ? "结果会自动带入城市筛选" : "Results open city filters directly"}</p>
              <p className="flex items-center gap-2"><MapPinned size={17} className="text-red-600" /> {isZh ? "适合第一次访问的学生" : "Built for first-time visitors"}</p>
            </div>
          </div>
          <div className="grid gap-5">
            <ChoiceGroup title={isZh ? "1. 你的月预算？" : "1. Your monthly budget?"} value={budget} options={budgetOptions} isZh={isZh} onChange={setBudget} />
            <ChoiceGroup title={isZh ? "2. 你喜欢什么气候？" : "2. What climate do you prefer?"} value={climate} options={climateOptions} isZh={isZh} onChange={setClimate} />
            <ChoiceGroup title={isZh ? "3. 你最看重什么？" : "3. What matters most?"} value={priority} options={priorityOptions} isZh={isZh} onChange={setPriority} />
            <Link href={href} className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700">
              {isZh ? "显示我的城市 →" : "Show My Cities ->"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoiceGroup({
  title,
  value,
  options,
  isZh,
  onChange
}: {
  title: string;
  value: string;
  options: string[][];
  isZh: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-bold text-slate-950">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(([key, en, zh]) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              value === key ? "border-red-600 bg-red-600 text-white" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-red-300 hover:text-red-700"
            }`}
          >
            {isZh ? zh : en}
          </button>
        ))}
      </div>
    </div>
  );
}
