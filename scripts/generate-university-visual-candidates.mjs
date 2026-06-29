import fs from "node:fs";

const directoryText = fs.readFileSync("lib/catalog/international-university-directory.ts", "utf8");
const overrideText = fs.readFileSync("lib/university-visual-overrides.ts", "utf8");
const existingSlugs = new Set([...overrideText.matchAll(/^  "([^"]+)": \{/gm)].map((match) => match[1]));
const names = [...new Set([...directoryText.matchAll(/^  "([^"]+)",?$/gm)].map((match) => match[1]))];

const slugify = (name) => name
  .toLowerCase()
  .replaceAll("&", "and")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

function scoreTitle(name, title, kind) {
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]+/g, " ");
  const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, " ");
  const words = normalizedName.split(/\s+/).filter((word) => word.length > 2 && !["university", "china"].includes(word));
  const matchedWords = words.filter((word) => normalizedTitle.includes(word)).length;
  const kindMatch = kind === "gate"
    ? /\bgate\b|entrance|school gate|main gate/.test(normalizedTitle)
    : /\blogo\b|emblem|seal|badge/.test(normalizedTitle);
  return matchedWords * 2 + (kindMatch ? 4 : 0) + (normalizedTitle.includes(normalizedName) ? 5 : 0);
}

async function searchCommons(name, kind) {
  const query = `${name} ${kind === "gate" ? "gate" : "logo"} filetype:bitmap`;
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("generator", "search");
  url.searchParams.set("gsrsearch", query);
  url.searchParams.set("gsrnamespace", "6");
  url.searchParams.set("gsrlimit", "5");
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url|extmetadata");
  url.searchParams.set("iiurlwidth", "1200");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*");

  const response = await fetch(url, { signal: AbortSignal.timeout(20_000) });
  if (!response.ok) return [];
  const data = await response.json();

  return Object.values(data.query?.pages ?? {})
    .map((page) => ({
      title: page.title,
      score: scoreTitle(name, page.title, kind),
      imageUrl: page.imageinfo?.[0]?.thumburl ?? page.imageinfo?.[0]?.url,
      sourceUrl: page.imageinfo?.[0]?.descriptionurl
    }))
    .filter((candidate) => candidate.imageUrl && candidate.sourceUrl)
    .sort((a, b) => b.score - a.score);
}

const limit = Number(process.argv[2] ?? 30);
const pending = names.filter((name) => !existingSlugs.has(slugify(name))).slice(0, limit);
const candidates = [];

for (const name of pending) {
  const slug = slugify(name);
  try {
    const [gates, logos] = await Promise.all([searchCommons(name, "gate"), searchCommons(name, "logo")]);
    candidates.push({ name, slug, gate: gates[0] ?? null, logo: logos[0] ?? null });
  } catch (error) {
    candidates.push({ name, slug, error: error instanceof Error ? error.message : String(error) });
  }
}

fs.mkdirSync("data", { recursive: true });
fs.writeFileSync("data/university-visual-candidates.json", JSON.stringify({
  generatedAt: new Date().toISOString(),
  reviewedGateOverrides: existingSlugs.size,
  totalDirectorySchools: names.length,
  candidates
}, null, 2));

console.log(JSON.stringify({
  processed: candidates.length,
  highConfidenceGates: candidates.filter((item) => (item.gate?.score ?? 0) >= 9).length,
  highConfidenceLogos: candidates.filter((item) => (item.logo?.score ?? 0) >= 9).length,
  output: "data/university-visual-candidates.json"
}, null, 2));

