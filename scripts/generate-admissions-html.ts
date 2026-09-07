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

function joinList(items: string[] | undefined, fallback = "待核验") {
  if (!items?.length) return fallback;
  return items.join("；");
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
      <option value="A">A 优先</option>
      <option value="B">B 跟进</option>
      <option value="C">C 待核验</option>
    </select>
  </section>`;
}

function simpleHtml(rows: AdmissionRow[]) {
  const bodyRows = rows.map((row, index) => {
    const priority = rowPriority(row);
    return `<tr data-source="${escapeHtml(row.sourceKind)}" data-priority="${priority}">
      <td>${index + 1}</td>
      <td class="school"><strong>${escapeHtml(row.chineseName || row.name)}</strong><span>${escapeHtml(row.name)}</span></td>
      <td>${escapeHtml(row.location)}</td>
      <td><span class="badge">${escapeHtml(row.chinaRank)}</span></td>
      <td>${row.majors.slice(0, 5).map((major) => `<span class="pill">${escapeHtml(major)}</span>`).join("")}</td>
      <td>${escapeHtml(joinList(row.profile.languageRequirements.slice(0, 2)))}</td>
      <td>${escapeHtml(joinList(row.profile.eligibility.slice(0, 2)))}</td>
      <td>${escapeHtml(row.tuition)}</td>
      <td>${escapeHtml(scholarshipPotential(row))}</td>
      <td><span class="badge">${priority}</span></td>
      <td><a class="source" href="${escapeHtml(row.profile.sourceUrl || row.website)}" target="_blank" rel="noopener noreferrer">查看来源</a></td>
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
            <th>#</th><th>学校</th><th>城市</th><th>中国排名</th><th>招生方向</th><th>语言要求</th><th>基础申请要求</th><th>学费/费用</th><th>奖学金机会</th><th>优先级</th><th>来源</th>
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
      <td>${index + 1}</td>
      <td class="school"><strong>${escapeHtml(row.chineseName || row.name)}</strong><span>${escapeHtml(row.name)}</span><span>${escapeHtml(row.slug)}</span></td>
      <td>${escapeHtml(row.location)}<br><span class="note">${escapeHtml(row.provinceSlug)} / ${escapeHtml(row.citySlug)}</span></td>
      <td><span class="badge">${escapeHtml(row.chinaRank)}</span><br><span class="note">分数：${escapeHtml(row.rankScore)}</span></td>
      <td>${escapeHtml(row.sourceKind)}<br><a class="source" href="${escapeHtml(row.profile.sourceUrl || row.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(row.profile.sourceTitle)}</a><br><span class="note">${escapeHtml(row.profile.sourceDate || "日期待核验")}</span></td>
      <td>${escapeHtml(joinList(row.majors))}</td>
      <td>${escapeHtml(joinList(row.profile.rankingHighlights))}</td>
      <td>${escapeHtml(joinList(row.profile.eligibility))}</td>
      <td>${escapeHtml(joinList(row.profile.languageRequirements))}</td>
      <td>${escapeHtml(joinList(row.profile.applicationSteps))}</td>
      <td>
        <strong>申请费：</strong>${escapeHtml(row.profile.fees.application || "待核验")}<br>
        <strong>学费：</strong>${escapeHtml(row.profile.fees.tuition || row.tuition || "待核验")}<br>
        <strong>保险：</strong>${escapeHtml(row.profile.fees.insurance || "待核验")}<br>
        <strong>住宿：</strong>${escapeHtml(row.profile.fees.accommodation || "待核验")}
      </td>
      <td>${escapeHtml(joinList(row.scholarships))}<br><strong>${escapeHtml(scholarshipPotential(row))}</strong></td>
      <td>${escapeHtml(joinList(row.profile.programNotes))}</td>
      <td><span class="badge">${priority}</span></td>
      <td class="note">招生层次：本科为主；硕士/博士需结合后续研究生简章表补充。授课语言、截止日期、CSCA、导师接收函和奖学金名额必须逐校核验。</td>
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
            <th>#</th><th>学校 / Slug</th><th>地区</th><th>排名</th><th>来源与简章</th><th>专业方向</th><th>学校亮点</th><th>申请资格</th><th>语言要求</th><th>申请流程</th><th>费用明细</th><th>奖学金判断</th><th>运营备注</th><th>优先级</th><th>风险控制</th>
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
