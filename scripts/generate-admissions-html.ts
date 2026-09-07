import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { universities, type University, type UniversityApplicationProfile } from "../lib/site-data";
import { getChinaUniversityRanking } from "../lib/china-university-rankings";
import { bulkUndergraduateAdmissionEnrichments } from "../lib/catalog/bulk-undergraduate-admission-enrichments";
import { elicUndergraduateAdmissionEnrichments } from "../lib/catalog/elic-undergraduate-admission-enrichments";
import { getCatalogUniversities } from "../lib/catalog/international-university-directory";
import { officialUndergraduateAdmissionEnrichments } from "../lib/catalog/official-undergraduate-admission-enrichments";
import { uploadedUndergraduateAdmissionEnrichments } from "../lib/catalog/uploaded-undergraduate-admission-enrichments";
import { universityProfileEnrichments, type UniversityProfileEnrichment } from "../lib/catalog/university-profile-enrichments";
import { scopePublicUniversityCatalog } from "../lib/public-university-catalog-scope";

type AdmissionRow = {
  slug: string;
  name: string;
  chineseName: string;
  location: string;
  citySlug: string;
  provinceSlug: string;
  chinaRank: string;
  rankScore: string;
  website: string;
  tuition: string;
  majors: string[];
  scholarships: string[];
  summary: string;
  sourceKind: string;
  profile: UniversityApplicationProfile;
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "public", "reports");

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const cityNames: Record<string, string> = {
  Anhui: "安徽", Anshan: "鞍山", Beijing: "北京", Changchun: "长春", Changsha: "长沙", Chengdu: "成都",
  China: "中国", Chongqing: "重庆", Dalian: "大连", Fujian: "福建", Fuzhou: "福州", Ganzhou: "赣州",
  Guangdong: "广东", Guangxi: "广西", Guangzhou: "广州", Guilin: "桂林", Guizhou: "贵州", Hainan: "海南",
  Hangzhou: "杭州", Harbin: "哈尔滨", Hebei: "河北", Hefei: "合肥", Heihe: "黑河", Heilongjiang: "黑龙江",
  Henan: "河南", Huangshan: "黄山", Hubei: "湖北", Hunan: "湖南", "Inner Mongolia": "内蒙古", Jiangsu: "江苏",
  Jiangxi: "江西", Jilin: "吉林", Jinan: "济南", Jingdezhen: "景德镇", Jinzhou: "锦州", Kunming: "昆明",
  Lanzhou: "兰州", Liaoning: "辽宁", Mudanjiang: "牡丹江", Nanchang: "南昌", Nanjing: "南京", Nanning: "南宁",
  Ningbo: "宁波", Ningxia: "宁夏", Qingdao: "青岛", Qinghai: "青海", Qiqihar: "齐齐哈尔", Shaanxi: "陕西",
  Shandong: "山东", Shanghai: "上海", Shantou: "汕头", Shanxi: "山西", Shenyang: "沈阳", Tianjin: "天津",
  Wuhan: "武汉", Wuxi: "无锡", "Xi'an": "西安", Yangling: "杨凌", Yichang: "宜昌", Zhuzhou: "株洲"
};

const majorNames: Record<string, string> = {
  Accounting: "会计学", Aerospace: "航空航天", "Aerospace Engineering": "航空航天工程", Agriculture: "农业", "Animal Science": "动物科学",
  Archaeology: "考古学", Architecture: "建筑学", "Artificial Intelligence": "人工智能", Arts: "艺术", Business: "工商管理",
  "Chemical Engineering": "化学工程", Chemistry: "化学", "Chinese Language": "汉语", "Chinese Medicine": "中医学",
  "Civil Engineering": "土木工程", Communication: "传播学", "Computer Science": "计算机科学", Dentistry: "口腔医学",
  Design: "设计学", "Digital Media": "数字媒体", Ecology: "生态学", Economics: "经济学", Education: "教育学",
  "Electrical Engineering": "电气工程", Electronics: "电子信息", "Energy Engineering": "能源工程", Engineering: "工程学",
  "Environmental Science": "环境科学", Finance: "金融学", "Food Science": "食品科学", Forestry: "林学", Geosciences: "地球科学",
  "International Relations": "国际关系", Law: "法学", "Life Sciences": "生命科学", "Marine Science": "海洋科学",
  "Materials Science": "材料科学", "Mechanical Engineering": "机械工程", Medicine: "临床医学", "Mining Engineering": "采矿工程",
  Nursing: "护理学", Pediatrics: "儿科学", Pharmacy: "药学", Physics: "物理学", Psychology: "心理学", "Public Health": "公共卫生",
  Telecommunications: "通信工程", Tourism: "旅游管理", Translation: "翻译", Transport: "交通运输", "Vehicle Engineering": "车辆工程"
};

function chineseCity(location: string) {
  return cityNames[location] ?? "中国";
}

function chineseMajors(majors: string[], limit?: number) {
  const values = limit ? majors.slice(0, limit) : majors;
  return values.map((major) => majorNames[major] ?? "相关专业方向");
}

function chinesePriority(priority: string) {
  return priority === "A" ? "优先跟进" : priority === "B" ? "建议跟进" : "待核验";
}

function fieldCell(label: string, content: string, className = "") {
  return `<td data-label="${escapeHtml(label)}"${className ? ` class="${className}"` : ""}>${content}</td>`;
}

function chineseLanguageRequirement() {
  return "中文授课一般需提供汉语水平证明；英文授课一般需提供认可的英语成绩或等效材料。具体标准以该专业当年通知为准。";
}

function chineseEligibility() {
  return "通常要求非中国籍、持有效护照、身心健康，并具有相应学历。年龄、国籍材料、体检、无犯罪记录与监护材料以当年招生简章为准。";
}

function chineseApplicationSteps() {
  return "确认专业与截止日期，准备护照、学历和成绩材料、语言证明、体检与其他要求；提交网申后跟进审核、录取、签证和报到。";
}

function chineseFeeSummary() {
  return "费用标准因专业、授课语言和校区而异，请通过官方来源核验当年申请费、学费、保险与住宿费。";
}

function sourceKind(slug: string) {
  if (officialUndergraduateAdmissionEnrichments[slug]) return "官方简章精编";
  if (uploadedUndergraduateAdmissionEnrichments[slug]) return "上传简章整理";
  if (elicUndergraduateAdmissionEnrichments[slug]) return "ELIC招生简章";
  if (bulkUndergraduateAdmissionEnrichments[slug]) return "批量官网索引";
  return "网站基础资料";
}

function defaultProfile(university: University): UniversityApplicationProfile {
  return {
    sourceTitle: `${university.name} international student admissions profile`,
    sourceDate: "SilkStudy catalog baseline; confirm the current annual guide before advising.",
    sourceUrl: university.website,
    rankingHighlights: [
      university.summary,
      `${university.location} gives students a study base connected to local universities, city life, and scholarship planning.`
    ],
    eligibility: [
      "通常要求非中国籍、持有效护照、身心健康，并具备相应学历背景。",
      "本科通常要求高中毕业或同等学历；硕士、博士需对应前置学位。",
      "年龄、监护人材料、国籍背景审查、无犯罪证明和体检要求以当年简章为准。"
    ],
    languageRequirements: [
      "中文授课通常需要 HSK；英文授课通常需要 IELTS、TOEFL、Duolingo、英文授课证明或面试。",
      "医学、艺术、建筑、中文等方向可能有额外测试、作品集或面试要求。"
    ],
    applicationSteps: [
      "确认当年招生简章、专业目录、授课语言、截止日期、费用与奖学金。",
      "准备护照、学历证明、成绩单、语言证明、体检、无犯罪证明、学习计划和推荐信等材料。",
      "提交网申后跟进材料审核、面试、奖学金结果、录取通知、JW表、签证、住宿和报到。"
    ],
    fees: {
      application: "以学校当年申请系统为准。",
      tuition: university.tuition || "按专业和授课语言核验。",
      insurance: "国际学生通常需购买来华留学生综合医疗保险。",
      accommodation: "按校区、房型和奖学金住宿覆盖情况核验。"
    },
    programNotes: [
      "奖学金可从国家、省市、学校和专项项目四层评估。",
      "建议同时比较学校层次、城市成本、语言路线、专业匹配和奖学金概率。",
      "所有最终申请条件必须回到学校官网或官方申请系统核验。"
    ]
  };
}

function rowPriority(row: AdmissionRow) {
  const rank = row.chinaRank.match(/\d+/)?.[0];
  const numericRank = rank ? Number(rank) : undefined;
  const hasStrongScholarship = row.scholarships.some((item) => /csc|government|scholarship|奖学金/i.test(item));
  const richProfile = row.sourceKind !== "网站基础资料" && row.sourceKind !== "批量官网索引";

  if ((numericRank && numericRank <= 80) || (hasStrongScholarship && richProfile)) return "A";
  if ((numericRank && numericRank <= 160) || hasStrongScholarship || richProfile) return "B";
  return "C";
}

function scholarshipPotential(row: AdmissionRow) {
  const text = `${row.scholarships.join(" ")} ${row.profile.programNotes.join(" ")}`.toLowerCase();
  if (/living allowance|生活费|stipend|full|全额|tuition, accommodation|免学费/.test(text)) return "高覆盖机会，需按学生背景核验";
  if (/csc|government|provincial|municipal|university scholarship|奖学金/.test(text)) return "有奖学金路线";
  return "需继续核验";
}

function buildRows() {
  const catalog = scopePublicUniversityCatalog(
    getCatalogUniversities(universities).map((university) => ({
      ...university,
      chinaRanking: getChinaUniversityRanking(university.slug)
    }))
  );

  return catalog.map((university): AdmissionRow => {
    const enrichment: UniversityProfileEnrichment | undefined = universityProfileEnrichments[university.slug];
    const profile = enrichment?.applicationProfile ?? university.applicationProfile ?? defaultProfile(university);

    return {
      slug: university.slug,
      name: university.name,
      chineseName: university.chineseName,
      location: university.location,
      citySlug: university.citySlug,
      provinceSlug: university.provinceSlug,
      chinaRank: university.chinaRanking?.rank ?? "待核验",
      rankScore: university.chinaRanking?.score ? String(university.chinaRanking.score) : "待核验",
      website: enrichment?.website ?? university.website,
      tuition: profile.fees.tuition ?? university.tuition ?? "待核验",
      majors: enrichment?.majors?.length ? enrichment.majors : university.majors,
      scholarships: university.scholarships,
      summary: enrichment?.summary ?? university.summary,
      sourceKind: sourceKind(university.slug),
      profile
    };
  });
}

function pageShell(title: string, subtitle: string, body: string) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    :root { color-scheme: light; --red:#c81e1e; --ink:#111827; --muted:#64748b; --line:#e5e7eb; --warm:#fff7ed; --gold:#f59e0b; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: Inter, "Segoe UI", Arial, "Microsoft YaHei", sans-serif; color:var(--ink); background:linear-gradient(180deg,#fff7ed 0%,#ffffff 32%,#f8fafc 100%); }
    header { position:sticky; top:0; z-index:5; border-bottom:1px solid rgba(255,255,255,.18); background:rgba(17,24,39,.92); color:#fff; backdrop-filter:blur(16px); }
    .nav { max-width:1440px; margin:auto; padding:14px 22px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .brand { font-weight:900; letter-spacing:.2px; }
    .nav a { color:#fde68a; text-decoration:none; font-weight:800; font-size:14px; }
    .hero { max-width:1440px; margin:auto; padding:54px 22px 36px; display:grid; gap:24px; grid-template-columns:minmax(0,1.2fr) minmax(300px,.8fr); align-items:end; }
    h1 { margin:0; max-width:900px; font-size:clamp(32px,5vw,64px); line-height:1.04; letter-spacing:0; }
    .subtitle { max-width:760px; color:#475569; font-size:17px; line-height:1.8; }
    .hero-card { border:1px solid #fed7aa; background:rgba(255,255,255,.8); border-radius:18px; padding:22px; box-shadow:0 18px 50px rgba(127,29,29,.12); }
    .stats { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; }
    .stat { border:1px solid var(--line); border-radius:14px; background:#fff; padding:16px; }
    .stat strong { display:block; font-size:28px; color:var(--red); }
    .toolbar { max-width:1440px; margin:0 auto 18px; padding:0 22px; display:grid; grid-template-columns:1fr 190px 190px; gap:12px; }
    input, select { min-height:44px; width:100%; border:1px solid var(--line); border-radius:12px; padding:0 14px; font:inherit; background:#fff; }
    main { max-width:1440px; margin:auto; padding:0 22px 42px; }
    .table-wrap { overflow:auto; border:1px solid var(--line); border-radius:18px; background:#fff; box-shadow:0 16px 40px rgba(15,23,42,.08); }
    table { width:100%; border-collapse:separate; border-spacing:0; min-width:1280px; }
    th { position:sticky; top:57px; z-index:4; background:#111827; color:#fff; text-align:left; font-size:13px; padding:14px 13px; white-space:nowrap; }
    td { border-bottom:1px solid var(--line); padding:14px 13px; vertical-align:top; font-size:13px; line-height:1.65; }
    tr:hover td { background:#fff7ed; }
    .school { min-width:230px; }
    .school strong { display:block; font-size:15px; }
    .school span { display:block; color:var(--muted); }
    .pill { display:inline-flex; margin:2px 4px 2px 0; border-radius:999px; background:#fee2e2; color:#991b1b; padding:3px 8px; font-size:12px; font-weight:800; white-space:nowrap; }
    .badge { display:inline-flex; border-radius:9px; background:#111827; color:#fff; padding:4px 8px; font-size:12px; font-weight:900; }
    .source { color:var(--red); font-weight:800; text-decoration:none; }
    .note { color:var(--muted); }
    .footer-note { margin:18px 0 0; color:#64748b; font-size:13px; line-height:1.7; }
    @media (max-width: 860px) {
      .hero { grid-template-columns:1fr; padding-top:34px; }
      .stats { grid-template-columns:repeat(2,minmax(0,1fr)); }
      .toolbar { grid-template-columns:1fr; }
      th { top:56px; }
    }
    @media (max-width: 720px) {
      .nav { padding:12px 16px; align-items:flex-start; }
      .brand { font-size:14px; }
      .nav a { display:block; font-size:12px; line-height:1.8; }
      .hero, .toolbar, main { padding-left:16px; padding-right:16px; }
      .hero { padding-top:28px; padding-bottom:24px; }
      h1 { font-size:31px; line-height:1.15; }
      .subtitle { font-size:15px; line-height:1.7; }
      .hero-card { padding:14px; border-radius:8px; }
      .stat { padding:12px; border-radius:8px; }
      .stat strong { font-size:24px; }
      .table-wrap { overflow:visible; border:0; border-radius:0; background:transparent; box-shadow:none; }
      table, tbody, tr, td { display:block; min-width:0; width:100%; }
      thead { display:none; }
      tr { margin:0 0 14px; border:1px solid var(--line); border-radius:8px; background:#fff; overflow:hidden; box-shadow:0 6px 18px rgba(15,23,42,.06); }
      td { display:grid; grid-template-columns:92px minmax(0,1fr); gap:10px; padding:10px 12px; font-size:13px; line-height:1.6; }
      td::before { content:attr(data-label); color:var(--muted); font-size:12px; font-weight:800; }
      td:first-child { background:#fff7ed; }
      .school { min-width:0; }
      .school strong { font-size:16px; }
      .school span { display:none; }
      .pill { white-space:normal; }
      .footer-note { padding-bottom:12px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="nav">
      <div class="brand">SilkStudy 招生简章数据库</div>
      <div>
        <a href="/reports/admissions-simple.html">简版</a>
        &nbsp;&nbsp;
        <a href="/reports/admissions-internal.html">内部完整版</a>
      </div>
    </div>
  </header>
  <section class="hero">
    <div>
      <h1>${escapeHtml(title)}</h1>
      <p class="subtitle">${escapeHtml(subtitle)}</p>
    </div>
    <div class="hero-card">
      <div class="stats">
        <div class="stat"><strong id="visibleCount">0</strong><span>当前显示</span></div>
        <div class="stat"><strong id="totalCount">0</strong><span>学校总数</span></div>
        <div class="stat"><strong>4</strong><span>来源层级</span></div>
        <div class="stat"><strong>2</strong><span>表格版本</span></div>
      </div>
      <p class="footer-note">提示：这是用于业务筛选的结构化表格。正式递交申请前，必须回到学校官网、官方申请系统或当年招生简章再次核验。</p>
    </div>
  </section>
  ${body}
  <script>
    const searchInput = document.querySelector("[data-search]");
    const sourceSelect = document.querySelector("[data-source]");
    const prioritySelect = document.querySelector("[data-priority]");
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    const visibleCount = document.getElementById("visibleCount");
    const totalCount = document.getElementById("totalCount");
    totalCount.textContent = rows.length;
    function applyFilters() {
      const q = (searchInput?.value || "").trim().toLowerCase();
      const source = sourceSelect?.value || "all";
      const priority = prioritySelect?.value || "all";
      let visible = 0;
      for (const row of rows) {
        const text = row.innerText.toLowerCase();
        const sourceOk = source === "all" || row.dataset.source === source;
        const priorityOk = priority === "all" || row.dataset.priority === priority;
        const queryOk = !q || text.includes(q);
        const show = sourceOk && priorityOk && queryOk;
        row.style.display = show ? "" : "none";
        if (show) visible += 1;
      }
      visibleCount.textContent = visible;
    }
    searchInput?.addEventListener("input", applyFilters);
    sourceSelect?.addEventListener("change", applyFilters);
    prioritySelect?.addEventListener("change", applyFilters);
    applyFilters();
  </script>
</body>
</html>`;
}

function toolbar(rows: AdmissionRow[]) {
  const sources = Array.from(new Set(rows.map((row) => row.sourceKind)));
  return `<section class="toolbar">
    <input data-search placeholder="搜索学校、城市、专业、奖学金、语言要求..." />
    <select data-source>
      <option value="all">全部来源</option>
      ${sources.map((source) => `<option value="${escapeHtml(source)}">${escapeHtml(source)}</option>`).join("")}
    </select>
    <select data-priority>
      <option value="all">全部优先级</option>
      <option value="A">优先跟进</option>
      <option value="B">建议跟进</option>
      <option value="C">待核验</option>
    </select>
  </section>`;
}

function simpleHtml(rows: AdmissionRow[]) {
  const bodyRows = rows.map((row, index) => {
    const priority = rowPriority(row);
    return `<tr data-source="${escapeHtml(row.sourceKind)}" data-priority="${priority}">
      ${fieldCell("序号", String(index + 1))}
      ${fieldCell("学校", `<strong>${escapeHtml(row.chineseName)}</strong>`, "school")}
      ${fieldCell("城市", escapeHtml(chineseCity(row.location)))}
      ${fieldCell("中国排名", `<span class="badge">${escapeHtml(row.chinaRank)}</span>`)}
      ${fieldCell("招生方向", chineseMajors(row.majors, 5).map((major) => `<span class="pill">${escapeHtml(major)}</span>`).join(""))}
      ${fieldCell("语言要求", escapeHtml(chineseLanguageRequirement()))}
      ${fieldCell("基础申请要求", escapeHtml(chineseEligibility()))}
      ${fieldCell("学费与费用", escapeHtml(chineseFeeSummary()))}
      ${fieldCell("奖学金机会", escapeHtml(scholarshipPotential(row)))}
      ${fieldCell("跟进优先级", `<span class="badge">${chinesePriority(priority)}</span>`)}
      ${fieldCell("官方来源", `<a class="source" href="${escapeHtml(row.profile.sourceUrl || row.website)}" target="_blank" rel="noopener noreferrer">查看学校官方招生信息</a>`)}
    </tr>`;
  }).join("");

  return pageShell(
    "国际学生招生简章简版表",
    "适合给学生、家长和代理快速浏览：重点看学校、城市、排名、专业方向、语言与学历要求、费用、奖学金机会和推荐优先级。",
    `${toolbar(rows)}
    <main>
      <div class="table-wrap">
        <table>
          <thead><tr>
            <th>序号</th><th>学校</th><th>城市</th><th>中国排名</th><th>招生方向</th><th>语言要求</th><th>基础申请要求</th><th>学费与费用</th><th>奖学金机会</th><th>跟进优先级</th><th>官方来源</th>
          </tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
      <p class="footer-note">简版适合外部沟通。若学生进入正式匹配，请使用内部完整版核对材料、费用、截止日期、奖学金覆盖和风险备注。</p>
    </main>`
  );
}

function internalHtml(rows: AdmissionRow[]) {
  const bodyRows = rows.map((row, index) => {
    const priority = rowPriority(row);
    return `<tr data-source="${escapeHtml(row.sourceKind)}" data-priority="${priority}">
      ${fieldCell("序号", String(index + 1))}
      ${fieldCell("学校", `<strong>${escapeHtml(row.chineseName)}</strong>`, "school")}
      ${fieldCell("地区", escapeHtml(chineseCity(row.location)))}
      ${fieldCell("中国排名", `<span class="badge">${escapeHtml(row.chinaRank)}</span><br><span class="note">排名分数：${escapeHtml(row.rankScore)}</span>`)}
      ${fieldCell("来源与简章", `${escapeHtml(row.sourceKind)}<br><a class="source" href="${escapeHtml(row.profile.sourceUrl || row.website)}" target="_blank" rel="noopener noreferrer">查看学校官方招生信息</a><br><span class="note">以当年官方招生简章为准</span>`)}
      ${fieldCell("专业方向", escapeHtml(chineseMajors(row.majors).join("；")))}
      ${fieldCell("学校亮点", "学校层次、优势学科和国际学生项目请以官方资料为准；顾问匹配时应结合专业、城市成本和奖学金机会综合判断。")}
      ${fieldCell("申请资格", escapeHtml(chineseEligibility()))}
      ${fieldCell("语言要求", escapeHtml(chineseLanguageRequirement()))}
      ${fieldCell("申请流程", escapeHtml(chineseApplicationSteps()))}
      ${fieldCell("费用明细", escapeHtml(chineseFeeSummary()))}
      ${fieldCell("奖学金判断", `<strong>${escapeHtml(scholarshipPotential(row))}</strong><br><span class="note">国家、省市、学校和专项奖学金均需逐校核验。</span>`)}
      ${fieldCell("运营备注", "建议先核验招生层次、授课语言、截止日期、材料要求和奖学金名额，再进入正式申请匹配。")}
      ${fieldCell("跟进优先级", `<span class="badge">${chinesePriority(priority)}</span>`)}
      ${fieldCell("风险控制", "最终申请条件、费用、语言成绩、入学考试与签证材料必须回到学校官网或官方申请系统确认。", "note")}
    </tr>`;
  }).join("");

  return pageShell(
    "国际学生招生简章内部完整版",
    "用于 SilkStudy 内部运营、顾问匹配和代理培训：展开来源、申请材料、语言要求、申请步骤、费用、奖学金、优先级和风险备注。",
    `${toolbar(rows)}
    <main>
      <div class="table-wrap">
        <table>
          <thead><tr>
            <th>序号</th><th>学校</th><th>地区</th><th>中国排名</th><th>来源与简章</th><th>专业方向</th><th>学校亮点</th><th>申请资格</th><th>语言要求</th><th>申请流程</th><th>费用明细</th><th>奖学金判断</th><th>运营备注</th><th>跟进优先级</th><th>风险控制</th>
          </tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
      <p class="footer-note">内部完整版是工作表，不建议直接发给学生。A 类优先做顾问匹配，B 类适合跟进，C 类先核验官网与当年简章。</p>
    </main>`
  );
}

const rows = buildRows();
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "admissions-simple.html"), simpleHtml(rows), "utf8");
writeFileSync(join(outputDir, "admissions-internal.html"), internalHtml(rows), "utf8");

console.log(`Generated ${rows.length} admission rows.`);
console.log("public/reports/admissions-simple.html");
console.log("public/reports/admissions-internal.html");
