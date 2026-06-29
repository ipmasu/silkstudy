import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpDown, Banknote, Database, GraduationCap, MapPin, Search, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { UniversityCard } from "@/components/universities/university-card";
import { cscInternationalUniversityNames, internationalUniversitySources } from "@/lib/catalog/international-university-directory";
import { getCityDestinations } from "@/lib/city-destinations";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { displayMajor } from "@/lib/i18n/display";
import { provinceShowcases } from "@/lib/province-showcase";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chinese University Directory",
  description: "Search and compare Chinese universities by city, province, major, ranking, tuition, scholarships, and campus life.",
  path: "/universities"
});

type SearchParams = Promise<{
  q?: string;
  province?: string;
  city?: string;
  major?: string;
  scholarship?: string;
  sort?: string;
  page?: string;
}>;

const inputClass = "min-h-11 rounded-md border border-slate-200 bg-white px-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10";
const pageSize = 24;

const copy = {
  en: {
    eyebrow: "University directory",
    title: "Explore the China international-student university catalog.",
    description: "Browse curated profiles plus the CSC host-university baseline for institutions that accept international students. Detailed tuition, majors, and campus-life data are expanded through CMS verification.",
    sourceNote: "Directory baseline uses the CSC 279 host-university list and city-level international-student admissions sources. Duplicate source rows are deduplicated in the public catalog.",
    consultation: "Free Consultation",
    provinces: "Explore Provinces",
    universities: "Universities",
    sourceRows: "Source rows",
    cities: "Cities",
    majors: "Majors",
    search: "Search school, city or major",
    allProvinces: "All provinces",
    allCities: "All cities",
    allMajors: "All majors",
    bestRanking: "Best ranking",
    name: "Name",
    tuition: "Tuition",
    filter: "Filter",
    shortlist: "Shortlist signals",
    signalEnglish: "Detailed English-taught and Chinese-taught pathways are verified per school profile.",
    signalTuition: "Curated profiles show tuition ranges; baseline directory records are marked for verification.",
    signalCity: "City pages include climate, visa convenience, living, tourism, and career context.",
    signalScholarship: "CSC and university scholarship indicators are attached to baseline records for follow-up.",
    matched: "Get Matched",
    found: "universities found",
    foundDescription: "Open any school profile to review available data, source status, consultation entry, and next enrichment needs.",
    sortedBy: "Sorted by",
    noMatch: "No exact match yet.",
    noMatchDescription: "Tell us your target major and budget. We can build a custom shortlist from the extended China university database.",
    requestShortlist: "Request Shortlist",
    popularCities: "Popular study cities",
    popularCitiesDescription: "Use city pages to compare living cost, climate, student reviews, internships, and local universities.",
    schools: "universities",
    previous: "Previous",
    next: "Next",
    page: "Page"
  },
  zh: {
    eyebrow: "大学目录",
    title: "探索中国国际学生高校目录。",
    description: "目录包含精选学校档案，以及 CSC 奖学金接收高校基线。详细学费、专业和校园生活信息会继续通过 CMS 核验扩展。",
    sourceNote: "目录基线使用 CSC 279 行接收高校名单和城市级国际学生招生来源；前台展示时会去重，避免重复学校。",
    consultation: "免费咨询",
    provinces: "探索省份",
    universities: "大学",
    sourceRows: "源数据行",
    cities: "城市",
    majors: "专业",
    search: "搜索学校、城市或专业",
    allProvinces: "全部省份",
    allCities: "全部城市",
    allMajors: "全部专业",
    bestRanking: "按排名",
    name: "按名称",
    tuition: "按学费",
    filter: "筛选",
    shortlist: "选校参考维度",
    signalEnglish: "英文授课和中文授课路径会按学校逐步核验。",
    signalTuition: "精选档案展示学费区间；基线目录学校会标注为待核验。",
    signalCity: "城市页包含气候、签证便利、生活、旅行和就业环境。",
    signalScholarship: "基线记录已挂接 CSC 和大学奖学金方向，便于后续咨询跟进。",
    matched: "获取匹配方案",
    found: "所大学",
    foundDescription: "打开学校详情页可查看当前数据、来源状态、咨询入口和后续补全方向。",
    sortedBy: "排序",
    noMatch: "暂时没有完全匹配的结果。",
    noMatchDescription: "告诉我们你的目标专业和预算，我们可以基于扩展数据库为你定制选校清单。",
    requestShortlist: "申请定制清单",
    popularCities: "热门留学城市",
    popularCitiesDescription: "通过城市页比较生活成本、气候、学生评价、实习机会和当地大学。",
    schools: "所大学",
    previous: "上一页",
    next: "下一页",
    page: "第"
  },
  vi: {
    eyebrow: "Danh mục trường đại học",
    title: "Khám phá các trường đại học Trung Quốc dành cho sinh viên quốc tế.",
    description: "Xem hồ sơ trường đã được biên tập cùng danh mục cơ sở tiếp nhận sinh viên quốc tế. Thông tin học phí, ngành học và đời sống khuôn viên tiếp tục được xác minh.",
    sourceNote: "Danh mục được tổng hợp từ danh sách trường tiếp nhận học bổng CSC và các nguồn tuyển sinh quốc tế; các bản ghi trùng lặp đã được loại bỏ.",
    consultation: "Tư vấn miễn phí",
    provinces: "Khám phá tỉnh thành",
    universities: "Trường đại học",
    sourceRows: "Dòng dữ liệu nguồn",
    cities: "Thành phố",
    majors: "Ngành học",
    search: "Tìm trường, thành phố hoặc ngành học",
    allProvinces: "Tất cả tỉnh thành",
    allCities: "Tất cả thành phố",
    allMajors: "Tất cả ngành học",
    bestRanking: "Xếp hạng tốt nhất",
    name: "Tên trường",
    tuition: "Học phí",
    filter: "Lọc",
    shortlist: "Tiêu chí chọn trường",
    signalEnglish: "Lộ trình học bằng tiếng Anh và tiếng Trung được xác minh theo từng trường.",
    signalTuition: "Hồ sơ đã biên tập hiển thị học phí; dữ liệu cơ sở được đánh dấu để tiếp tục xác minh.",
    signalCity: "Trang thành phố bao gồm khí hậu, chi phí sống, du lịch và cơ hội nghề nghiệp.",
    signalScholarship: "Thông tin học bổng CSC và học bổng trường được đính kèm để tư vấn tiếp theo.",
    matched: "Nhận gợi ý phù hợp",
    found: "trường đại học được tìm thấy",
    foundDescription: "Mở hồ sơ trường để xem dữ liệu hiện có, nguồn thông tin, tư vấn và nội dung cần bổ sung.",
    sortedBy: "Sắp xếp theo",
    noMatch: "Chưa có kết quả hoàn toàn phù hợp.",
    noMatchDescription: "Hãy cho chúng tôi biết ngành học và ngân sách để nhận danh sách trường đề xuất riêng.",
    requestShortlist: "Yêu cầu danh sách trường",
    popularCities: "Thành phố du học nổi bật",
    popularCitiesDescription: "So sánh chi phí sống, khí hậu, đánh giá sinh viên, thực tập và các trường địa phương.",
    schools: "trường đại học",
    previous: "Trước",
    next: "Tiếp",
    page: "Trang"
  }
};

function majorSlug(major: string) {
  return major.toLowerCase().replaceAll(" ", "-");
}

function withPage(params: URLSearchParams, page: number) {
  const next = new URLSearchParams(params);
  if (page <= 1) {
    next.delete("page");
  } else {
    next.set("page", String(page));
  }
  const query = next.toString();
  return query ? `?${query}` : "";
}

export default async function UniversitiesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const locale = await getLocale();
  const isZh = locale === "zh";
  const text = locale === "zh" ? copy.zh : locale === "vi" ? copy.vi : copy.en;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;
  const query = params.q?.trim().toLowerCase() ?? "";
  const province = params.province ?? "";
  const city = params.city ?? "";
  const major = params.major ?? "";
  const scholarship = params.scholarship ?? "";
  const sort = params.sort ?? "ranking";
  const currentPage = Math.max(1, Number(params.page ?? 1) || 1);
  const allUniversities = await getAllUniversitiesView();

  const provinceOptions = provinceShowcases
    .map((item) => ({
      slug: item.slug,
      name: isZh ? item.zhName : item.name,
      count: allUniversities.filter((university) => university.provinceSlug === item.slug).length
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  const cityOptions = getCityDestinations(allUniversities)
    .map((item) => ({
      slug: item.slug,
      name: isZh ? item.zhName : item.name,
      provinceName: isZh ? item.zhProvinceName : item.provinceName,
      count: allUniversities.filter((university) => university.citySlug === item.slug).length
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  const majorOptions = [...new Set(allUniversities.flatMap((university) => university.majors))]
    .sort((a, b) => displayMajor(a, locale).localeCompare(displayMajor(b, locale)));

  const filteredUniversities = allUniversities
    .filter((university) => {
      const queryMatch =
        !query ||
        university.name.toLowerCase().includes(query) ||
        university.chineseName.toLowerCase().includes(query) ||
        university.location.toLowerCase().includes(query) ||
        university.majors.some((item) => item.toLowerCase().includes(query));
      const provinceMatch = !province || university.provinceSlug === province;
      const cityMatch = !city || university.citySlug === city;
      const majorMatch = !major || university.majors.some((item) => majorSlug(item) === major);
      const scholarshipMatch = !scholarship || university.scholarships.some((item) => item.toLowerCase().includes("scholarship"));

      return queryMatch && provinceMatch && cityMatch && majorMatch && scholarshipMatch;
    })
    .sort((a, b) => {
      if (sort === "tuition") return a.tuition.localeCompare(b.tuition);
      if (sort === "name") return a.name.localeCompare(b.name);
      return a.qsRanking - b.qsRanking;
    });

  const totalPages = Math.max(1, Math.ceil(filteredUniversities.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const pageUniversities = filteredUniversities.slice((safePage - 1) * pageSize, safePage * pageSize);
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) queryParams.set(key, value);
  });

  const topCities = cityOptions.slice(0, 8);

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{text.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">{text.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text.description}</p>
            <div className="mt-5 rounded-lg border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-300">
              <div className="flex items-start gap-3">
                <Database className="mt-0.5 shrink-0 text-secondary" size={18} aria-hidden="true" />
                <p>{text.sourceNote} {isZh ? "数据源核验日期" : "Source checked"}: {internationalUniversitySources[0].checkedAt}.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localize("/consultation")} variant="secondary">{text.consultation}</ButtonLink>
              <ButtonLink href={localize("/provinces")} variant="ghost">{text.provinces}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              [text.universities, allUniversities.length],
              [text.sourceRows, cscInternationalUniversityNames.length],
              [text.cities, cityOptions.length],
              [text.majors, majorOptions.length]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/10 p-5">
                <p className="text-3xl font-bold">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form className="grid gap-3 rounded-lg border border-slate-200 bg-surface p-4 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_auto]">
            <label className="relative">
              <Search className="pointer-events-none absolute left-3 top-3 text-slate-400" size={18} aria-hidden="true" />
              <input name="q" defaultValue={params.q ?? ""} placeholder={text.search} className={`${inputClass} w-full pl-10`} />
            </label>
            <select name="province" defaultValue={province} className={inputClass} aria-label="Province">
              <option value="">{text.allProvinces}</option>
              {provinceOptions.map((item) => <option key={item.slug} value={item.slug}>{item.name} ({item.count})</option>)}
            </select>
            <select name="city" defaultValue={city} className={inputClass} aria-label="City">
              <option value="">{text.allCities}</option>
              {cityOptions.map((item) => <option key={item.slug} value={item.slug}>{item.name} - {item.provinceName} ({item.count})</option>)}
            </select>
            <select name="major" defaultValue={major} className={inputClass} aria-label="Major">
              <option value="">{text.allMajors}</option>
              {majorOptions.map((item) => <option key={item} value={majorSlug(item)}>{displayMajor(item, locale)}</option>)}
            </select>
            <select name="sort" defaultValue={sort} className={inputClass} aria-label="Sort">
              <option value="ranking">{text.bestRanking}</option>
              <option value="name">{text.name}</option>
              <option value="tuition">{text.tuition}</option>
            </select>
            <button className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white transition hover:bg-blue-700">
              {text.filter}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          <aside className="h-fit rounded-lg border border-slate-200 p-5 lg:sticky lg:top-24">
            <p className="font-bold text-ink">{text.shortlist}</p>
            <div className="mt-5 grid gap-4 text-sm text-slate-600">
              <p className="flex gap-3"><GraduationCap size={18} className="mt-0.5 text-primary" /> {text.signalEnglish}</p>
              <p className="flex gap-3"><Banknote size={18} className="mt-0.5 text-primary" /> {text.signalTuition}</p>
              <p className="flex gap-3"><MapPin size={18} className="mt-0.5 text-primary" /> {text.signalCity}</p>
              <p className="flex gap-3"><Sparkles size={18} className="mt-0.5 text-primary" /> {text.signalScholarship}</p>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <ButtonLink href={localize("/consultation")}>{text.matched}</ButtonLink>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading title={isZh ? `找到 ${filteredUniversities.length} ${text.found}` : `${filteredUniversities.length} ${text.found}`} description={text.foundDescription} />
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <ArrowUpDown size={16} aria-hidden="true" />
                {text.sortedBy} {sort}
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pageUniversities.map((university) => (
                <UniversityCard key={university.slug} university={university} />
              ))}
            </div>
            {filteredUniversities.length > pageSize ? (
              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-lg border border-slate-200 bg-surface p-4 sm:flex-row">
                <p className="text-sm font-semibold text-slate-600">
                  {isZh ? `${text.page} ${safePage} / ${totalPages} 页` : `${text.page} ${safePage} of ${totalPages}`}
                </p>
                <div className="flex gap-3">
                  <Link
                    href={localize(`/universities${withPage(queryParams, safePage - 1)}`)}
                    aria-disabled={safePage <= 1}
                    className={`inline-flex min-h-10 items-center gap-2 rounded-md border px-4 text-sm font-semibold ${safePage <= 1 ? "pointer-events-none border-slate-200 text-slate-400" : "border-slate-200 bg-white text-primary"}`}
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    {text.previous}
                  </Link>
                  <Link
                    href={localize(`/universities${withPage(queryParams, safePage + 1)}`)}
                    aria-disabled={safePage >= totalPages}
                    className={`inline-flex min-h-10 items-center gap-2 rounded-md border px-4 text-sm font-semibold ${safePage >= totalPages ? "pointer-events-none border-slate-200 text-slate-400" : "border-slate-200 bg-white text-primary"}`}
                  >
                    {text.next}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ) : null}
            {filteredUniversities.length === 0 ? (
              <div className="mt-8 rounded-lg border border-slate-200 bg-surface p-8 text-center">
                <p className="font-bold text-ink">{text.noMatch}</p>
                <p className="mt-2 text-sm text-slate-600">{text.noMatchDescription}</p>
                <div className="mt-5">
                  <ButtonLink href={localize("/consultation")}>{text.requestShortlist}</ButtonLink>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={text.popularCities} description={text.popularCitiesDescription} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {topCities.map((item) => (
              <Link key={item.slug} href={localize(`/cities/${item.slug}`)} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-primary hover:shadow-sm">
                <p className="text-lg font-bold text-ink">{item.name}</p>
                <p className="mt-2 text-sm text-slate-600">{item.count} {text.schools}</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.provinceName}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
