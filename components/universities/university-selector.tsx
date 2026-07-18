"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  ArrowDownAZ,
  Banknote,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Search,
  Star,
  Trophy
} from "lucide-react";
import { universityCityImageFallbacks, universityVisualOverrides } from "@/lib/university-visual-overrides";
import type { University } from "@/lib/site-data";

type CityOption = { slug: string; name: string; count: number };
type SelectorProps = {
  universities: University[];
  cityOptions: CityOption[];
  majorOptions: string[];
  prefix: string;
};

type RankingFilter = "all" | "top100" | "top200" | "top500" | "unranked";
type TuitionFilter = "all" | "under3000" | "3000-5000" | "5000-7000" | "over7000";
type CscFilter = "all" | "yes";
type SortMode = "ranking" | "tuitionAsc" | "tuitionDesc" | "name";

const pageSize = 20;
const hotCityOrder = ["beijing", "shanghai", "guangzhou", "chengdu", "wuhan", "xian", "hangzhou", "nanjing", "tianjin", "changsha", "chongqing", "harbin", "changchun", "shenyang", "dalian", "jinan", "qingdao", "xiamen", "shenzhen", "kunming", "guilin", "suzhou", "zhengzhou", "taiyuan", "nanchang", "hefei", "lanzhou", "urumqi"];

const majorFields = [
  "工程",
  "医学",
  "商科",
  "人文",
  "艺术",
  "理科",
  "农业",
  "法学",
  "教育学"
];

const schoolTypes = [
  "综合性大学",
  "理工大学",
  "医科大学",
  "师范大学",
  "农业大学",
  "财经大学",
  "语言大学",
  "艺术大学",
  "政法大学",
  "民族大学",
  "航空航天大学",
  "专业类大学"
];

function tuitionMin(university: University) {
  const numbers = university.tuition.match(/\$?([\d,]+)/g)?.map((item) => Number(item.replace(/[^\d]/g, ""))).filter(Boolean) ?? [];
  return numbers.length ? Math.min(...numbers) : Number.POSITIVE_INFINITY;
}

function tuitionLabel(university: University) {
  return university.tuition.replace("/year", "/年");
}

function hasCsc(university: University) {
  return university.scholarships.some((item) => /csc|chinese government scholarship/i.test(item));
}

function inferSchoolType(university: University) {
  const text = `${university.name} ${university.chineseName}`.toLowerCase();
  if (/medical|medicine|pharmaceutical|医科|医药|卫生/.test(text)) return "医科大学";
  if (/normal|teacher|师范/.test(text)) return "师范大学";
  if (/agricultural|forestry|农业|林业/.test(text)) return "农业大学";
  if (/finance|economics|business|财经|经济|贸易/.test(text)) return "财经大学";
  if (/language|foreign studies|外语|语言/.test(text)) return "语言大学";
  if (/art|music|fine arts|theatre|艺术|音乐|美术|戏剧/.test(text)) return "艺术大学";
  if (/political|law|政法|法律/.test(text)) return "政法大学";
  if (/minzu|nationalities|民族/.test(text)) return "民族大学";
  if (/aerospace|aeronautics|aviation|航空|航天/.test(text)) return "航空航天大学";
  if (/electric|power|water|hydraulic|水利|电力/.test(text)) return "专业类大学";
  if (/technology|science|engineering|polytechnic|industrial|理工|工业|科技|工程/.test(text)) return "理工大学";
  return "综合性大学";
}

function majorFieldForText(text: string) {
  const lower = text.toLowerCase();
  const fields = new Set<string>();
  if (/engineering|computer|mechanical|electronic|civil|automation|工程|计算机|机械|电子|土木|自动化/.test(lower)) fields.add("工程");
  if (/medicine|medical|pharmacy|clinical|nursing|dental|医学|药学|临床|护理|口腔/.test(lower)) fields.add("医学");
  if (/business|economics|management|finance|accounting|商科|经济|管理|金融|会计/.test(lower)) fields.add("商科");
  if (/literature|history|philosophy|language|journalism|humanities|文学|历史|哲学|语言|新闻/.test(lower)) fields.add("人文");
  if (/art|design|music|fine arts|theatre|艺术|设计|音乐|美术|戏剧/.test(lower)) fields.add("艺术");
  if (/math|physics|chemistry|biology|geography|science|数学|物理|化学|生物|地理|理学/.test(lower)) fields.add("理科");
  if (/agriculture|forestry|animal|horticulture|农业|林业|畜牧|园艺/.test(lower)) fields.add("农业");
  if (/law|politics|legal|法学|政治|法律/.test(lower)) fields.add("法学");
  if (/education|psychology|sports|教育|心理|体育/.test(lower)) fields.add("教育学");
  return [...fields];
}

function universityFields(university: University) {
  const direct = majorFieldForText(`${university.name} ${university.chineseName} ${university.summary} ${university.majors.join(" ")}`);
  if (direct.length) return direct.slice(0, 5);
  const type = inferSchoolType(university);
  if (type === "医科大学") return ["医学", "药学", "护理"];
  if (type === "理工大学") return ["工程", "计算机", "理科"];
  if (type === "师范大学") return ["教育学", "人文", "理科"];
  if (type === "财经大学") return ["商科", "经济", "管理"];
  if (type === "农业大学") return ["农业", "理科", "工程"];
  return university.majors.slice(0, 4);
}

function rankingMatch(university: University, filter: RankingFilter) {
  const rank = university.qsRanking;
  if (filter === "all") return true;
  if (filter === "unranked") return !rank || rank >= 900;
  if (!rank || rank >= 900) return false;
  if (filter === "top100") return rank <= 100;
  if (filter === "top200") return rank <= 200;
  return rank <= 500;
}

function tuitionMatch(university: University, filter: TuitionFilter) {
  if (filter === "all") return true;
  const min = tuitionMin(university);
  if (!Number.isFinite(min)) return false;
  if (filter === "under3000") return min < 3000;
  if (filter === "3000-5000") return min >= 3000 && min <= 5000;
  if (filter === "5000-7000") return min >= 5000 && min <= 7000;
  return min > 7000;
}

function schoolImage(university: University) {
  const override = universityVisualOverrides[university.slug];
  if (override) return override.gateImage;
  const cover = university.media?.find((item) => item.type === "COVER");
  if (cover) return cover.url;
  return universityCityImageFallbacks[university.citySlug]?.image ?? "/images/student-city-life.png";
}

function sortUniversities(items: University[], sortMode: SortMode) {
  return [...items].sort((a, b) => {
    if (sortMode === "tuitionAsc") return tuitionMin(a) - tuitionMin(b);
    if (sortMode === "tuitionDesc") return tuitionMin(b) - tuitionMin(a);
    if (sortMode === "name") return a.name.localeCompare(b.name);
    const aRank = a.qsRanking > 0 && a.qsRanking < 900 ? a.qsRanking : 9999;
    const bRank = b.qsRanking > 0 && b.qsRanking < 900 ? b.qsRanking : 9999;
    return aRank - bRank || a.name.localeCompare(b.name);
  });
}

export function UniversitySelector({ universities, cityOptions, majorOptions, prefix }: SelectorProps) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");
  const [ranking, setRanking] = useState<RankingFilter>("all");
  const [tuition, setTuition] = useState<TuitionFilter>("all");
  const [majorFilters, setMajorFilters] = useState<string[]>([]);
  const [csc, setCsc] = useState<CscFilter>("all");
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>("ranking");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [quizCity, setQuizCity] = useState(cityOptions[0]?.slug ?? "all");
  const [quizBudget, setQuizBudget] = useState<TuitionFilter>("3000-5000");
  const [quizMajor, setQuizMajor] = useState("工程");
  const [quizCsc, setQuizCsc] = useState("yes");

  const sortedCities = useMemo(() => {
    const order = new Map(hotCityOrder.map((slug, index) => [slug, index]));
    return [...cityOptions].sort((a, b) => (order.get(a.slug) ?? 999) - (order.get(b.slug) ?? 999) || b.count - a.count);
  }, [cityOptions]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const results = universities.filter((university) => {
      const queryText = [university.name, university.chineseName, university.location, university.majors.join(" ")].join(" ").toLowerCase();
      const queryMatch = !query || queryText.includes(query);
      const cityMatch = city === "all" || university.citySlug === city;
      const rankingOk = rankingMatch(university, ranking);
      const tuitionOk = tuitionMatch(university, tuition);
      const fields = universityFields(university);
      const majorOk = majorFilters.length === 0 || majorFilters.every((field) => fields.includes(field) || university.majors.some((major) => major.includes(field)));
      const cscOk = csc === "all" || hasCsc(university);
      const type = inferSchoolType(university);
      const typeOk = typeFilters.length === 0 || typeFilters.includes(type);
      return queryMatch && cityMatch && rankingOk && tuitionOk && majorOk && cscOk && typeOk;
    });
    return sortUniversities(results, sortMode);
  }, [city, csc, majorFilters, ranking, search, sortMode, tuition, typeFilters, universities]);

  const visibleUniversities = filtered.slice(0, visibleCount);
  function clearAll() {
    setSearch("");
    setCity("all");
    setRanking("all");
    setTuition("all");
    setMajorFilters([]);
    setCsc("all");
    setTypeFilters([]);
    setSortMode("ranking");
    setVisibleCount(pageSize);
  }

  function toggleList(value: string, setter: (next: string[]) => void, current: string[]) {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
    setVisibleCount(pageSize);
  }

  function applyQuiz() {
    setCity(quizCity);
    setTuition(quizBudget);
    setMajorFilters([quizMajor]);
    setCsc(quizCsc === "yes" ? "yes" : "all");
    setVisibleCount(pageSize);
    document.getElementById("university-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const activeTags = [
    city !== "all" ? `📍 ${sortedCities.find((item) => item.slug === city)?.name ?? city}` : "",
    ranking !== "all" ? `⭐ ${ranking === "top100" ? "Top 100" : ranking === "top200" ? "Top 200" : ranking === "top500" ? "Top 500" : "未排名"}` : "",
    tuition !== "all" ? `💰 ${tuition === "under3000" ? "<$3,000" : tuition === "over7000" ? ">$7,000" : `$${tuition}`}` : "",
    ...majorFilters.map((item) => `🏷️ ${item}`),
    csc === "yes" ? "✅ 有CSC资格" : "",
    ...typeFilters.map((item) => `🏛️ ${item}`)
  ].filter(Boolean);

  return (
    <div className="bg-[#fff8ef]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-slate-700">
            <span className="rounded-full bg-red-50 px-4 py-2 text-red-700">📊 数据概览</span>
            <span>{universities.length} 所大学</span>
            <span>·</span>
            <span>{cityOptions.length} 个城市</span>
            <span>·</span>
            <span>{majorOptions.length} 个专业方向</span>
            <span>·</span>
            <span>CSC奖学金路径持续核验</span>
          </div>
        </div>

        <section className="mt-8 rounded-3xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <div>
              <p className="text-sm font-bold uppercase text-red-600">Quick match</p>
              <h2 className="mt-2 text-2xl font-bold">❓ 不知道选哪所大学？</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">回答 4 个问题，我们先帮你缩小范围。</p>
            </div>
            <div className="grid gap-4">
              <label className="text-sm font-bold">
                1. 你想去哪个城市？
                <select value={quizCity} onChange={(event) => setQuizCity(event.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3">
                  {sortedCities.slice(0, 30).map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
                </select>
              </label>
              <QuizButtons title="2. 你的年预算是多少？" value={quizBudget} options={[["under3000", "<$3,000"], ["3000-5000", "$3,000-$5,000"], ["5000-7000", "$5,000-$7,000"], ["over7000", "$7,000+"]]} onChange={(value) => setQuizBudget(value as TuitionFilter)} />
              <QuizButtons title="3. 你想学什么专业？" value={quizMajor} options={majorFields.slice(0, 7).map((item) => [item, item])} onChange={setQuizMajor} />
              <QuizButtons title="4. 你需要CSC奖学金吗？" value={quizCsc} options={[["yes", "是"], ["no", "否"]]} onChange={setQuizCsc} />
              <button onClick={applyQuiz} className="min-h-11 rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">🎯 帮我推荐大学</button>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <Search className="text-red-600" size={22} />
            <h2 className="text-2xl font-bold">搜索与筛选大学</h2>
          </div>
          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-3.5 text-slate-400" size={18} />
              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setVisibleCount(pageSize);
                }}
                placeholder="搜索大学名称...（中英文）"
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-red-400 focus:bg-white"
              />
            </label>
            <button onClick={clearAll} className="min-h-12 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 hover:border-red-300 hover:text-red-700">
              清除全部
            </button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <FilterBlock icon="📍" title="所在城市">
              <select value={city} onChange={(event) => { setCity(event.target.value); setVisibleCount(pageSize); }} className="min-h-11 w-full rounded-xl border border-slate-200 px-3 text-sm">
                <option value="all">全部城市</option>
                {sortedCities.map((item) => <option key={item.slug} value={item.slug}>{item.name} ({item.count})</option>)}
              </select>
            </FilterBlock>
            <FilterBlock icon="📊" title="QS排名">
              <Segmented value={ranking} options={[["all", "全部"], ["top100", "Top 100"], ["top200", "Top 200"], ["top500", "Top 500"], ["unranked", "未排名"]]} onChange={(value) => { setRanking(value as RankingFilter); setVisibleCount(pageSize); }} />
            </FilterBlock>
            <FilterBlock icon="💰" title="学费范围">
              <Segmented value={tuition} options={[["all", "全部"], ["under3000", "<$3,000"], ["3000-5000", "$3k-$5k"], ["5000-7000", "$5k-$7k"], ["over7000", ">$7k"]]} onChange={(value) => { setTuition(value as TuitionFilter); setVisibleCount(pageSize); }} />
            </FilterBlock>
            <FilterBlock icon="🏷️" title="专业领域">
              <ChipGroup values={majorFields} active={majorFilters} onToggle={(value) => toggleList(value, setMajorFilters, majorFilters)} />
            </FilterBlock>
            <FilterBlock icon="✅" title="CSC奖学金">
              <Segmented value={csc} options={[["all", "全部"], ["yes", "有CSC资格"]]} onChange={(value) => { setCsc(value as CscFilter); setVisibleCount(pageSize); }} />
            </FilterBlock>
            <FilterBlock icon="🏛️" title="学校类型">
              <ChipGroup values={schoolTypes} active={typeFilters} onToggle={(value) => toggleList(value, setTypeFilters, typeFilters)} />
            </FilterBlock>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
            <div className="flex flex-wrap gap-2">
              {activeTags.map((tag) => (
                <span key={tag} className="rounded-full bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{tag}</span>
              ))}
              {!activeTags.length ? <span className="text-sm text-slate-500">尚未选择筛选条件</span> : null}
            </div>
            <p className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">找到 {filtered.length} 所大学</p>
          </div>
        </section>

        <section id="university-results" className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase text-red-600">Results</p>
              <h2 className="mt-2 text-3xl font-bold">大学筛选结果</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <SortButton active={sortMode === "ranking"} onClick={() => setSortMode("ranking")} icon={<Trophy size={16} />}>QS排名 ↓</SortButton>
              <SortButton active={sortMode === "tuitionAsc"} onClick={() => setSortMode("tuitionAsc")} icon={<Banknote size={16} />}>学费 ↑</SortButton>
              <SortButton active={sortMode === "tuitionDesc"} onClick={() => setSortMode("tuitionDesc")} icon={<Banknote size={16} />}>学费 ↓</SortButton>
              <SortButton active={sortMode === "name"} onClick={() => setSortMode("name")} icon={<ArrowDownAZ size={16} />}>名称 A-Z</SortButton>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="text-xl font-bold">暂时没有完全匹配的大学</p>
              <p className="mt-2 text-slate-600">可以减少筛选条件，或提交咨询让我们帮你人工匹配。</p>
              <Link href={`${prefix}/consultation`} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">申请定制清单</Link>
            </div>
          ) : (
            <>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {visibleUniversities.map((university) => (
                  <UniversityDecisionCard
                    key={university.slug}
                    university={university}
                    prefix={prefix}
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row">
                <p className="text-sm font-semibold text-slate-600">
                  显示 1-{Math.min(visibleCount, filtered.length)} / 共 {filtered.length} 所大学
                </p>
                {visibleCount < filtered.length ? (
                  <button onClick={() => setVisibleCount((count) => count + pageSize)} className="min-h-11 rounded-full bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-700">
                    加载更多
                  </button>
                ) : null}
              </div>
            </>
          )}
        </section>
      </section>

    </div>
  );
}

function UniversityDecisionCard({ university, prefix }: { university: University; prefix: string }) {
  const type = inferSchoolType(university);
  const fields = universityFields(university).slice(0, 5);
  const ranked = university.qsRanking > 0 && university.qsRanking < 900;
  const csc = hasCsc(university);
  const isZh = prefix === "/zh";

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
      <div className="grid md:grid-cols-[220px_1fr]">
        <div className="relative min-h-56 overflow-hidden bg-slate-100 md:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={schoolImage(university)}
            alt={university.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-slate-950">🏛️ {university.chineseName} · {university.name}</h3>
          <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800"><Star size={15} className="mr-1 inline" />{ranked ? `QS #${university.qsRanking}` : "未排名"}</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700"><MapPin size={15} className="mr-1 inline" />{university.location}</span>
            <span className="rounded-full bg-purple-50 px-3 py-1 text-purple-700"><GraduationCap size={15} className="mr-1 inline" />{type}</span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700"><Banknote size={15} className="mr-1 inline" />{tuitionLabel(university)}</span>
            <span className={`rounded-full px-3 py-1 ${csc ? "bg-red-50 text-red-700" : "bg-slate-100 text-slate-500"}`}>
              <CheckCircle2 size={15} className="mr-1 inline" />{csc ? "可申请CSC奖学金" : "CSC待核验"}
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-2">{university.summary}</p>
          <p className="mt-4 text-sm font-semibold text-slate-700">🔬 优势专业：{fields.join("、")}</p>
          <Link href={`${prefix}/consultation?school=${university.slug}`} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700">
            {isZh ? "\u514d\u8d39\u8bc4\u4f30\u5f55\u53d6\u7387" : "Free admission chance assessment"}
          </Link>
        </div>
      </div>
    </article>
  );
}

function FilterBlock({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="mb-3 text-sm font-bold text-slate-950">{icon} {title}</p>
      {children}
    </div>
  );
}

function Segmented({ value, options, onChange }: { value: string; options: Array<[string, string]>; onChange: (value: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(([key, label]) => (
        <button key={key} onClick={() => onChange(key)} className={`min-h-10 rounded-full px-3 text-xs font-bold ${value === key ? "bg-red-600 text-white" : "bg-white text-slate-700 hover:bg-amber-100"}`}>
          {label}
        </button>
      ))}
    </div>
  );
}

function ChipGroup({ values, active, onToggle }: { values: string[]; active: string[]; onToggle: (value: string) => void }) {
  return (
    <div className="flex max-h-36 flex-wrap gap-2 overflow-y-auto">
      {values.map((value) => (
        <button key={value} onClick={() => onToggle(value)} className={`min-h-10 rounded-full px-3 text-xs font-bold ${active.includes(value) ? "bg-red-600 text-white" : "bg-white text-slate-700 hover:bg-amber-100"}`}>
          {value}
        </button>
      ))}
    </div>
  );
}

function QuizButtons({ title, value, options, onChange }: { title: string; value: string; options: Array<[string, string]>; onChange: (value: string) => void }) {
  return (
    <div>
      <p className="text-sm font-bold text-slate-950">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(([key, label]) => (
          <button key={key} type="button" onClick={() => onChange(key)} className={`min-h-11 rounded-full px-4 text-sm font-semibold ${value === key ? "bg-slate-950 text-white" : "bg-white text-slate-700 hover:bg-amber-100"}`}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SortButton({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: ReactNode; children: ReactNode }) {
  return (
    <button onClick={onClick} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-bold ${active ? "bg-slate-950 text-white" : "bg-white text-slate-700 hover:bg-amber-100"}`}>
      {icon}
      {children}
    </button>
  );
}
