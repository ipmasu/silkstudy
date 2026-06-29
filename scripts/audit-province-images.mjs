import fs from "node:fs";

const text = fs.readFileSync("lib/province-showcase.ts", "utf8");
const overrideText = fs.readFileSync("lib/province-image-overrides.ts", "utf8");
const rows = [...text.matchAll(/^    slug: "([^"]+)",[\s\S]*?^    image: image\("([^"]+)"\),/gm)]
  .map((match) => ({ slug: match[1], imageId: match[2] }));
const overrideSlugs = [...overrideText.matchAll(/^  (?:"([^"]+)"|([a-z0-9-]+)): \{/gm)]
  .map((match) => match[1] ?? match[2]);

const groups = rows.reduce((acc, row) => {
  acc[row.imageId] ??= [];
  acc[row.imageId].push(row.slug);
  return acc;
}, {});

const duplicates = Object.entries(groups)
  .map(([imageId, slugs]) => ({ imageId, slugs: slugs.filter((slug) => !overrideSlugs.includes(slug)) }))
  .filter(({ slugs }) => slugs.length > 1);

console.log(JSON.stringify({
  totalProvinces: rows.length,
  uniqueImages: Object.keys(groups).length,
  explicitOverrides: overrideSlugs.length,
  provincesWithoutExplicitOverride: rows.map((row) => row.slug).filter((slug) => !overrideSlugs.includes(slug)),
  remainingDuplicateGroups: duplicates
}, null, 2));
