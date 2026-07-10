import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const API_BASE = "https://api.huaxiafengwu.com/app";
const DEFAULT_OUTPUT = "data/hxfw-cultural-topic-index.json";

const DEFAULT_SEARCH_TERMS = [
  "北京",
  "上海",
  "杭州",
  "西安",
  "成都",
  "重庆",
  "长沙",
  "昆明",
  "广州",
  "南京",
  "苏州",
  "桂林",
  "敦煌",
  "剪纸",
  "皮影",
  "龙舟",
  "陶瓷",
  "茶",
  "火锅",
  "面",
  "园林",
  "古城",
  "博物馆",
  "夜市",
  "书院",
  "丝绸",
  "瓷器",
  "京剧",
  "昆曲",
  "武术",
  "汉服"
];

const categoryConfig = {
  1: { label: "特产", detailPath: "local_product" },
  2: { label: "文化", detailPath: "culture" },
  3: { label: "地点", detailPath: "scenic" }
};

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    output: DEFAULT_OUTPUT,
    terms: [],
    includeDefaults: true,
    maxPerTerm: 3
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--output" || arg === "-o") {
      options.output = args[index + 1] ?? options.output;
      index += 1;
    } else if (arg === "--term" || arg === "-t") {
      const value = args[index + 1];
      if (value) options.terms.push(value);
      index += 1;
    } else if (arg === "--terms") {
      const value = args[index + 1];
      if (value) options.terms.push(...value.split(",").map((term) => term.trim()).filter(Boolean));
      index += 1;
    } else if (arg === "--max-per-term") {
      const value = Number(args[index + 1]);
      if (Number.isFinite(value) && value > 0) options.maxPerTerm = Math.min(Math.floor(value), 10);
      index += 1;
    } else if (arg === "--no-defaults") {
      options.includeDefaults = false;
    }
  }

  return options;
}

async function fetchJson(url, init) {
  const response = await fetch(url, {
    ...init,
    headers: {
      "User-Agent": "SilkStudy cultural topic research (contact: https://silkstudy.com)",
      ...(init?.headers ?? {})
    }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }

  return response.json();
}

async function searchTerm(term) {
  const body = new URLSearchParams({ searchText: term });
  const payload = await fetchJson(`${API_BASE}/search/scenery/forward_match`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });

  return Array.isArray(payload.data) ? payload.data : [];
}

async function fetchDetail(categoryType, id) {
  const config = categoryConfig[categoryType];
  if (!config) return null;

  const payload = await fetchJson(`${API_BASE}/${config.detailPath}/${id}`);
  return payload.data ?? null;
}

function compactTopic({ term, searchResult, detail }) {
  const config = categoryConfig[searchResult.categoryType] ?? {};
  const wikiH5Url = typeof detail?.wikiH5Url === "string" && detail.wikiH5Url ? detail.wikiH5Url : null;

  return {
    source: "华夏风物公开网页接口",
    sourceUse: "topic-index-only; do not copy original descriptions or wikiContent",
    searchTerm: term,
    id: searchResult.id,
    name: searchResult.name,
    categoryType: searchResult.categoryType,
    categoryName: searchResult.categoryTypeName ?? config.label ?? "未知",
    cityName: detail?.cityName ?? searchResult.cityName ?? "",
    provinceName: detail?.provinceAlias ?? "",
    cityCode: detail?.cityCode ?? null,
    parentCityCode: detail?.parentCityCode ?? null,
    banner: searchResult.banner ?? detail?.banner ?? "",
    detailApi: config.detailPath ? `${API_BASE}/${config.detailPath}/${searchResult.id}` : null,
    publicWikiPage: wikiH5Url,
    collectedAt: new Date().toISOString()
  };
}

async function main() {
  const options = parseArgs();
  const terms = [
    ...(options.includeDefaults ? DEFAULT_SEARCH_TERMS : []),
    ...options.terms
  ].map((term) => term.trim()).filter(Boolean);
  const uniqueTerms = [...new Set(terms)];

  const seen = new Set();
  const topics = [];
  const skipped = [];

  for (const term of uniqueTerms) {
    const results = await searchTerm(term);
    const limitedResults = results.slice(0, options.maxPerTerm);

    for (const result of limitedResults) {
      const key = `${result.categoryType}:${result.id}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const config = categoryConfig[result.categoryType];
      if (!config) {
        skipped.push({
          term,
          id: result.id,
          name: result.name,
          categoryType: result.categoryType,
          categoryName: result.categoryTypeName,
          reason: "unsupported category for metadata detail fetch"
        });
        continue;
      }

      try {
        const detail = await fetchDetail(result.categoryType, result.id);
        topics.push(compactTopic({ term, searchResult: result, detail }));
      } catch (error) {
        skipped.push({
          term,
          id: result.id,
          name: result.name,
          categoryType: result.categoryType,
          categoryName: result.categoryTypeName,
          reason: error instanceof Error ? error.message : String(error)
        });
      }
    }
  }

  const output = {
    notice: [
      "This file is a public-topic index for editorial planning only.",
      "Do not copy Huaxia Fengwu descriptions, wikiContent, or proprietary article text into SilkStudy.",
      "Use these items as prompts for original youth-friendly China culture content and cite or verify facts separately."
    ],
    apiBase: API_BASE,
    terms: uniqueTerms,
    count: topics.length,
    skippedCount: skipped.length,
    topics,
    skipped
  };

  const outputPath = path.resolve(process.cwd(), options.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(`Collected ${topics.length} topic metadata items.`);
  console.log(`Skipped ${skipped.length} unsupported or failed items.`);
  console.log(`Wrote ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
