import Link from "next/link";
import { getLocale } from "next-intl/server";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "University Comparison — SilkStudy",
  description: "Compare selected Chinese universities by QS ranking, city, tuition, scholarship, type, and strong majors.",
  path: "/universities/compare"
});

type PageProps = {
  searchParams: Promise<{ schools?: string }>;
};

function tuitionMin(tuition: string) {
  const numbers = tuition.match(/\$?([\d,]+)/g)?.map((item) => Number(item.replace(/[^\d]/g, ""))).filter(Boolean) ?? [];
  return numbers.length ? Math.min(...numbers) : 0;
}

function hasCsc(scholarships: string[]) {
  return scholarships.some((item) => /csc|chinese government scholarship/i.test(item));
}

function inferSchoolType(name: string, chineseName: string) {
  const text = `${name} ${chineseName}`.toLowerCase();
  if (/medical|medicine|pharmaceutical|医科|医药|卫生/.test(text)) return "医科大学";
  if (/normal|teacher|师范/.test(text)) return "师范大学";
  if (/agricultural|forestry|农业|林业/.test(text)) return "农业大学";
  if (/finance|economics|business|财经|经济|贸易/.test(text)) return "财经大学";
  if (/language|foreign studies|外语|语言/.test(text)) return "语言大学";
  if (/art|music|fine arts|theatre|艺术|音乐|美术|戏剧/.test(text)) return "艺术大学";
  if (/political|law|政法|法律/.test(text)) return "政法大学";
  if (/aerospace|aeronautics|aviation|航空|航天/.test(text)) return "航空航天大学";
  if (/technology|science|engineering|polytechnic|industrial|理工|工业|科技|工程/.test(text)) return "理工大学";
  return "综合性大学";
}

export default async function UniversityComparePage({ searchParams }: PageProps) {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const prefix = locale === "en" ? "" : `/${locale}`;
  const params = await searchParams;
  const slugs = (params.schools ?? "").split(",").map((item) => item.trim()).filter(Boolean);
  const allUniversities = await getAllUniversitiesView();
  const universities = slugs.map((slug) => allUniversities.find((item) => item.slug === slug)).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main className="bg-[#fff8ef] py-14 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href={`${prefix}/universities`} className="text-sm font-bold text-red-700 hover:text-red-800">← {isZh ? "返回选校工具" : "Back to selector"}</Link>
        <h1 className="mt-5 text-4xl font-bold">{isZh ? "大学比较" : "University Comparison"}</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          {isZh ? "对比你选中的大学，快速查看排名、城市、学费、类型、CSC资格和优势专业。" : "Compare selected universities by ranking, city, tuition, type, scholarship, and strengths."}
        </p>

        {universities.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-xl font-bold">{isZh ? "还没有选择大学" : "No universities selected"}</p>
            <Link href={`${prefix}/universities`} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
              {isZh ? "去选择大学" : "Choose universities"}
            </Link>
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">{isZh ? "维度" : "Dimension"}</th>
                  {universities.map((university) => (
                    <th key={university.slug} className="min-w-64 px-5 py-4 font-bold">{university.chineseName} · {university.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <CompareRow label="QS排名" values={universities.map((university) => university.qsRanking > 0 && university.qsRanking < 900 ? `QS #${university.qsRanking}` : "未排名")} />
                <CompareRow label="所在城市" values={universities.map((university) => university.location)} />
                <CompareRow label="学费区间" values={universities.map((university) => university.tuition)} />
                <CompareRow label="学费最低值" values={universities.map((university) => tuitionMin(university.tuition) ? `$${tuitionMin(university.tuition).toLocaleString()}/year` : "待核验")} />
                <CompareRow label="学校类型" values={universities.map((university) => inferSchoolType(university.name, university.chineseName))} />
                <CompareRow label="CSC资格" values={universities.map((university) => hasCsc(university.scholarships) ? "可申请CSC奖学金" : "CSC待核验")} />
                <CompareRow label="优势专业" values={universities.map((university) => university.majors.slice(0, 5).join(" · ") || "待补充")} />
                <tr>
                  <td className="px-5 py-4 font-bold text-slate-950">详情页</td>
                  {universities.map((university) => (
                    <td key={university.slug} className="px-5 py-4">
                      <Link href={`${prefix}/universities/${university.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-5 py-2 font-bold text-white hover:bg-red-700">
                        查看详情 →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

function CompareRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="align-top">
      <td className="w-44 px-5 py-4 font-bold text-slate-950">{label}</td>
      {values.map((value, index) => (
        <td key={`${label}-${index}`} className="max-w-sm px-5 py-4 leading-6 text-slate-700">{value}</td>
      ))}
    </tr>
  );
}

