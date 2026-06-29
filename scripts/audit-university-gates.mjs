import fs from "node:fs";

const text = fs.readFileSync("lib/university-visual-overrides.ts", "utf8");
const directoryText = fs.readFileSync("lib/catalog/international-university-directory.ts", "utf8");
const curatedText = fs.readFileSync("lib/site-data.ts", "utf8");
const rows = [...text.matchAll(/^  "([^"]+)": \{[\s\S]*?^    gateImage: "([^"]+)"[\s\S]*?^    sourceUrl: "([^"]+)"/gm)]
  .map((match) => ({ slug: match[1], gateImage: match[2], sourceUrl: match[3] }));
const slugify = (name) => name
  .toLowerCase()
  .replaceAll("&", "and")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
const directorySlugs = new Set([...directoryText.matchAll(/^  "([^"]+)",?$/gm)].map((match) => slugify(match[1])));
const curatedSlugs = new Set([...curatedText.matchAll(/^\s+slug: "([^"]+)",?$/gm)].map((match) => match[1]));
const catalogSlugs = new Set([...directorySlugs, ...curatedSlugs]);
const verifiedCatalogGates = rows.filter((row) => catalogSlugs.has(row.slug));

const duplicateImages = Object.entries(rows.reduce((groups, row) => {
  groups[row.gateImage] ??= [];
  groups[row.gateImage].push(row.slug);
  return groups;
}, {})).filter(([, slugs]) => slugs.length > 1);

console.log(JSON.stringify({
  verifiedUniversityGates: verifiedCatalogGates.length,
  directorySchools: directorySlugs.size,
  remainingSchools: directorySlugs.size - verifiedCatalogGates.length,
  unknownSchoolSlugs: rows.filter((row) => !catalogSlugs.has(row.slug)).map((row) => row.slug),
  missingSource: rows.filter((row) => !row.sourceUrl).map((row) => row.slug),
  duplicateImages
}, null, 2));
