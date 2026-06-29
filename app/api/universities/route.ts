import { NextResponse } from "next/server";
import { getCatalogUniversities } from "@/lib/catalog/international-university-directory";
import { universities } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim().toLowerCase() ?? "";
  const province = searchParams.get("province")?.trim().toLowerCase();
  const city = searchParams.get("city")?.trim().toLowerCase();
  const major = searchParams.get("major")?.trim().toLowerCase();
  const sort = searchParams.get("sort")?.trim().toLowerCase() ?? "ranking";
  const page = Math.max(1, Number(searchParams.get("page") ?? 1) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(searchParams.get("pageSize") ?? 24) || 24));

  const catalogUniversities = getCatalogUniversities(universities);
  const filtered = catalogUniversities.filter((university) => {
    const queryMatch =
      !query ||
      university.name.toLowerCase().includes(query) ||
      university.chineseName.toLowerCase().includes(query) ||
      university.location.toLowerCase().includes(query) ||
      university.majors.some((item) => item.toLowerCase().includes(query));

    const provinceMatch = !province || university.provinceSlug === province;
    const cityMatch = !city || university.citySlug === city;
    const majorMatch = !major || university.majors.some((item) => item.toLowerCase().replaceAll(" ", "-") === major);

    return queryMatch && provinceMatch && cityMatch && majorMatch;
  }).sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "tuition") return a.tuition.localeCompare(b.tuition);
    return a.qsRanking - b.qsRanking || a.name.localeCompare(b.name);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const results = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  return NextResponse.json({
    count: filtered.length,
    page: safePage,
    pageSize,
    totalPages,
    results
  });
}
