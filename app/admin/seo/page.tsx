"use client";

import { useCallback } from "react";
import { AdminCrudPage } from "@/components/admin/admin-crud-page";

const fallbackSeoRows = [
  ["Homepage", "Explore Chinese Universities", "Discover Chinese universities, cities, majors...", "Published"],
  ["Peking University", "Peking University | SilkStudy", "A comprehensive research university...", "Draft"],
  ["Study in Beijing", "Study in Beijing | SilkStudy", "China's capital and a leading center...", "Draft"]
];

export default function AdminSeoPage() {
  const mapRow = useCallback((item: Record<string, unknown>) => [
    String(item.canonicalUrl ?? "Custom page"),
    String(item.metaTitle ?? ""),
    String(item.metaDescription ?? ""),
    item.ogImageUrl ? "OpenGraph ready" : "Meta only"
  ], []);

  return (
    <AdminCrudPage
      endpoint="/api/admin/seo"
      title="SEO management"
      description="Manage meta titles, descriptions, OpenGraph fields, canonical URLs, and page-level search snippets."
      columns={["Page", "Meta Title", "Description", "Status"]}
      fallbackRows={fallbackSeoRows}
      fields={[
        { name: "metaTitle", label: "Meta title", required: true },
        { name: "metaDescription", label: "Meta description", type: "textarea", required: true },
        { name: "canonicalUrl", label: "Canonical URL", type: "url", placeholder: "https://silkstudy.com/universities/peking-university" },
        { name: "ogTitle", label: "OpenGraph title" },
        { name: "ogDescription", label: "OpenGraph description", type: "textarea" },
        { name: "ogImageUrl", label: "OpenGraph image URL", type: "url" },
        { name: "provinceId", label: "Province database ID" },
        { name: "cityId", label: "City database ID" },
        { name: "universityId", label: "University database ID" },
        { name: "majorId", label: "Major database ID" }
      ]}
      mapRow={mapRow}
      createLabel="Create SEO Meta"
    />
  );
}
