"use client";

import { useCallback } from "react";
import { AdminCrudPage } from "@/components/admin/admin-crud-page";
import { CloudinaryUploadPanel } from "@/components/admin/cloudinary-upload-panel";
import { UniversityMediaAttachPanel } from "@/components/admin/university-media-attach-panel";
import { getCatalogUniversities } from "@/lib/catalog/international-university-directory";
import { universities } from "@/lib/site-data";

const catalogUniversities = getCatalogUniversities(universities);

export default function AdminUniversitiesPage() {
  const mapRow = useCallback((item: Record<string, unknown>) => {
    const city = item.city as { name?: string } | undefined;
    const province = item.province as { name?: string } | undefined;
    const tuitionMin = item.tuitionMinUsd ? `$${String(item.tuitionMinUsd)}` : "";
    const tuitionMax = item.tuitionMaxUsd ? `$${String(item.tuitionMaxUsd)}` : "";

    return [
      String(item.id ?? ""),
      String(item.name ?? ""),
      city?.name ?? province?.name ?? "",
      item.qsRanking ? `#${String(item.qsRanking)}` : "-",
      tuitionMin || tuitionMax ? `${tuitionMin}-${tuitionMax}` : "-",
      item.isPublished ? "Published" : "Draft"
    ];
  }, []);

  return (
    <>
      <AdminCrudPage
        endpoint="/api/admin/universities"
        title="School management"
        description="Manage university profiles, baseline catalog records, rankings, tuition, media, scholarships, campus-life content, and publishing status."
        columns={["ID", "University", "Location", "QS Ranking", "Tuition", "Status"]}
        fallbackRows={catalogUniversities.map((university) => [
          "Seed database after setup",
          university.name,
          university.location,
          university.qsRanking > 0 && university.qsRanking < 900 ? `#${university.qsRanking}` : "To verify",
          university.tuition,
          universities.some((item) => item.slug === university.slug) ? "Curated" : "Baseline"
        ])}
        fields={[
          { name: "slug", label: "Slug", required: true, placeholder: "nanjing-university" },
          { name: "name", label: "University name", required: true },
          { name: "chineseName", label: "Chinese name" },
          { name: "provinceSlug", label: "Province slug", required: true, placeholder: "jiangsu" },
          { name: "citySlug", label: "City slug", required: true, placeholder: "nanjing" },
          { name: "qsRanking", label: "QS ranking", type: "number" },
          { name: "tuitionMinUsd", label: "Tuition min USD", type: "number" },
          { name: "tuitionMaxUsd", label: "Tuition max USD", type: "number" },
          { name: "foundedYear", label: "Founded year", type: "number" },
          { name: "website", label: "Website", type: "url" },
          { name: "summary", label: "Summary", type: "textarea" },
          { name: "hasEnglishPrograms", label: "English programs", type: "checkbox", placeholder: "Has English-taught programs" },
          { name: "hasScholarships", label: "Scholarships", type: "checkbox", placeholder: "Has scholarships" },
          { name: "isFeatured", label: "Featured", type: "checkbox", placeholder: "Show as featured school" },
          { name: "isPublished", label: "Published", type: "checkbox", placeholder: "Publish on public pages" }
        ]}
        mapRow={mapRow}
        createLabel="Create School"
      />
      <div className="mx-auto -mt-8 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CloudinaryUploadPanel />
        <UniversityMediaAttachPanel />
      </div>
    </>
  );
}
