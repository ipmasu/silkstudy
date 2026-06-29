import Link from "next/link";
import { BarChart3, Database, FileSearch, GraduationCap, MapPinned, MessageSquareText, Plane, TrendingUp, Users } from "lucide-react";
import { getCatalogQualityReport } from "@/lib/catalog/catalog-quality";
import { cities, majors, provinces } from "@/lib/site-data";

const modules = [
  { href: "/admin/universities", label: "School management", icon: GraduationCap },
  { href: "/admin/catalog", label: "Catalog QA", icon: Database },
  { href: "/admin/cities", label: "City management", icon: MapPinned },
  { href: "/admin/majors", label: "Major management", icon: FileSearch },
  { href: "/admin/consultations", label: "Consultation CRM", icon: Users },
  { href: "/admin/reviews", label: "Review moderation", icon: MessageSquareText },
  { href: "/admin/travel-imports", label: "Travel content imports", icon: Plane },
  { href: "/admin/seo", label: "SEO management", icon: BarChart3 }
];

export default function AdminPage() {
  const report = getCatalogQualityReport();
  const metrics = [
    { label: "Universities", value: report.uniqueUniversities, detail: `${report.curatedProfiles} curated, ${report.baselineProfiles} baseline` },
    { label: "Provinces", value: provinces.length, detail: "Map-ready regions" },
    { label: "Cities", value: cities.length, detail: "Student city guides" },
    { label: "Majors", value: majors.length, detail: "Popular program fields" }
  ];

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Admin CMS</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">SilkStudy back office</h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Operate school content, city guides, majors, consultation leads, student reviews, and SEO metadata from one production-oriented workspace.
            </p>
          </div>
          <Link href="/admin/consultations" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white">
            <TrendingUp size={16} aria-hidden="true" />
            Open CRM
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-500">{metric.label}</p>
              <p className="mt-2 text-3xl font-bold text-ink">{metric.value}</p>
              <p className="mt-1 text-sm text-slate-600">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link key={module.href} href={module.href} className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-primary hover:shadow-sm">
                <Icon className="text-primary" size={24} aria-hidden="true" />
                <p className="mt-4 text-lg font-bold text-ink">{module.label}</p>
                <p className="mt-2 text-sm text-slate-600">Live API table with starter-data fallback, creation forms, moderation, and export workflows.</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
