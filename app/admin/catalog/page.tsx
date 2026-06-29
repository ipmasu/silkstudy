import Link from "next/link";
import { AlertTriangle, CheckCircle2, Database, FileSearch } from "lucide-react";
import { getCatalogQualityReport } from "@/lib/catalog/catalog-quality";
import { internationalUniversitySources } from "@/lib/catalog/international-university-directory";
import { universityVisualOverrides } from "@/lib/university-visual-overrides";

export default function AdminCatalogPage() {
  const report = getCatalogQualityReport();
  const topIssues = report.issues.slice(0, 80);
  const verifiedGateCount = Object.keys(universityVisualOverrides).length;
  const remainingGateCount = Math.max(report.uniqueUniversities - verifiedGateCount, 0);

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Catalog QA</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">International university catalog quality</h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Track source coverage, deduplication, baseline records, and the enrichment fields needed before each school becomes a polished profile.
            </p>
          </div>
          <Link href="/admin/universities" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white">
            <FileSearch size={16} aria-hidden="true" />
            Open School CMS
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Source rows", report.sourceRows],
            ["Unique schools", report.uniqueUniversities],
            ["Curated profiles", report.curatedProfiles],
            ["Baseline profiles", report.baselineProfiles],
            ["Verified gates", verifiedGateCount],
            ["Gates awaiting QA", remainingGateCount],
            ["Duplicate rows", report.duplicateSourceRows]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-500">{label}</p>
              <p className="mt-2 text-3xl font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-ink">Province coverage</h2>
              <p className="mt-1 text-sm text-slate-600">
                {report.mappedProvinces} province-level regions have catalog matches. {report.unmappedProvinceSlots} regions are visible on the map but still need verified international-admissions records.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded bg-blue-50 px-3 py-2 text-sm font-bold text-primary">
              <Database size={16} aria-hidden="true" />
              Map-ready catalog
            </span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {report.provinceCoverage.map((province) => (
              <Link
                key={province.slug}
                href={`/provinces/${province.slug}`}
                className="rounded-lg border border-slate-200 p-4 transition hover:border-primary hover:bg-blue-50/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-ink">{province.name}</p>
                  <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{province.totalSchools}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{province.zhName}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded bg-emerald-50 px-2 py-1 text-emerald-700">{province.curatedSchools} curated</span>
                  <span className="rounded bg-amber-50 px-2 py-1 text-amber-700">{province.baselineSchools} baseline</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3">
            <Database className="mt-1 text-primary" size={22} aria-hidden="true" />
            <div>
              <h2 className="text-xl font-bold text-ink">Sources</h2>
              <div className="mt-4 grid gap-4">
                {internationalUniversitySources.map((source) => (
                  <a key={source.url} href={source.url} className="rounded-lg border border-slate-200 p-4 transition hover:border-primary" target="_blank" rel="noreferrer">
                    <p className="font-bold text-ink">{source.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{source.note}</p>
                    <p className="mt-2 text-xs font-semibold text-slate-500">Checked at {source.checkedAt}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4">
            <div>
              <h2 className="text-xl font-bold text-ink">Enrichment queue</h2>
              <p className="mt-1 text-sm text-slate-600">{report.issueCount} schools still need one or more fields verified.</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded bg-amber-50 px-3 py-2 text-sm font-bold text-amber-700">
              <AlertTriangle size={16} aria-hidden="true" />
              Needs QA
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead className="text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-semibold">School</th>
                  <th className="px-5 py-4 font-semibold">Location</th>
                  <th className="px-5 py-4 font-semibold">Missing / Needs verification</th>
                  <th className="px-5 py-4 font-semibold">Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {topIssues.map((item) => (
                  <tr key={item.slug}>
                    <td className="px-5 py-4 font-semibold text-ink">{item.name}</td>
                    <td className="px-5 py-4 text-slate-600">{item.location}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-2">
                        {item.issues.map((issue) => (
                          <span key={issue} className="rounded bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">{issue}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <Link href={`/universities/${item.slug}`} className="font-semibold text-primary">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {report.issueCount === 0 ? (
            <div className="flex items-center gap-2 p-6 text-sm font-semibold text-emerald-700">
              <CheckCircle2 size={18} aria-hidden="true" />
              All catalog records are enriched.
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
