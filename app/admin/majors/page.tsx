"use client";

import { useCallback } from "react";
import { AdminCrudPage } from "@/components/admin/admin-crud-page";
import { majors, universities } from "@/lib/site-data";

export default function AdminMajorsPage() {
  const mapRow = useCallback((item: Record<string, unknown>) => [
    String(item.name ?? ""),
    String(item.category ?? ""),
    item.isFeatured ? "Featured" : "Standard",
    String(item.futureCareer ?? "")
  ], []);

  return (
    <AdminCrudPage
      endpoint="/api/admin/majors"
      title="Major management"
      description="Manage program categories, degree levels, language requirements, tuition, and career outcomes."
      columns={["Major", "Category", "Status", "Career Notes"]}
      fallbackRows={majors.map((major) => [
        major,
        major.includes("Medicine") ? "Health Sciences" : major.includes("Business") ? "Business" : "Academic Program",
        `${universities.filter((university) => university.majors.includes(major)).length} schools`,
        "Starter dataset"
      ])}
      fields={[
        { name: "slug", label: "Slug", required: true, placeholder: "computer-science" },
        { name: "name", label: "Major name", required: true },
        { name: "category", label: "Category", required: true },
        { name: "description", label: "Description", type: "textarea" },
        { name: "futureCareer", label: "Future career", type: "textarea" },
        { name: "isFeatured", label: "Featured", type: "checkbox", placeholder: "Show as popular major" }
      ]}
      mapRow={mapRow}
      createLabel="Create Major"
    />
  );
}
