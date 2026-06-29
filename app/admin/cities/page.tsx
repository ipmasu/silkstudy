"use client";

import { useCallback } from "react";
import { AdminCrudPage } from "@/components/admin/admin-crud-page";
import { cities } from "@/lib/site-data";

export default function AdminCitiesPage() {
  const mapRow = useCallback((item: Record<string, unknown>) => {
    const province = item.province as { name?: string } | undefined;

    return [
      String(item.name ?? ""),
      province?.name ?? "",
      item.livingCostMonthlyUsd ? `$${String(item.livingCostMonthlyUsd)}/month` : "-",
      String(item.climate ?? ""),
      String(item.visaConvenience ?? "")
    ];
  }, []);

  return (
    <AdminCrudPage
      endpoint="/api/admin/cities"
      title="City management"
      description="Manage city guides, cost of living, climate, visa notes, and local university relationships."
      columns={["City", "Province", "Living Cost", "Climate", "Visa Notes"]}
      fallbackRows={cities.map((city) => [city.name, city.province, city.livingCost, city.climate, city.visaConvenience])}
      fields={[
        { name: "slug", label: "Slug", required: true, placeholder: "nanjing" },
        { name: "name", label: "City name", required: true },
        { name: "provinceSlug", label: "Province slug", required: true, placeholder: "jiangsu" },
        { name: "livingCostMonthlyUsd", label: "Living cost monthly USD", type: "number" },
        { name: "climate", label: "Climate" },
        { name: "visaConvenience", label: "Visa convenience" },
        { name: "summary", label: "Summary", type: "textarea" }
      ]}
      mapRow={mapRow}
      createLabel="Create City"
    />
  );
}
