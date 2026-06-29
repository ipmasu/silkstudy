import fs from "node:fs";

const text = fs.readFileSync("lib/province-image-overrides.ts", "utf8");
const entries = [...text.matchAll(/^  (?:"([^"]+)"|([a-z0-9-]+)): \{[\s\S]*?^    image: "([^"]+)"/gm)]
  .map((match) => ({ slug: match[1] ?? match[2], url: match[3] }));

const results = [];

for (const entry of entries) {
  try {
    const response = await fetch(entry.url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20_000)
    });

    results.push({
      slug: entry.slug,
      ok: response.ok,
      status: response.status,
      contentType: response.headers.get("content-type")
    });
  } catch (error) {
    results.push({
      slug: entry.slug,
      ok: false,
      status: "ERROR",
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

const failed = results.filter((result) => !result.ok);

console.log(JSON.stringify({
  total: results.length,
  passed: results.length - failed.length,
  failed
}, null, 2));

if (failed.length > 0) process.exitCode = 1;
