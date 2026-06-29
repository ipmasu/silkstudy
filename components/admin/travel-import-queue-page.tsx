"use client";

import { ExternalLink, Plus, RefreshCw, Save, Send, ShieldCheck, Sparkles } from "lucide-react";
import type { FormEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

type TravelImportRecord = {
  id?: string;
  platform: string;
  sourceUrl: string;
  sourceTitle?: string | null;
  sourceAuthor?: string | null;
  sourceLocale?: string | null;
  originalExcerpt: string;
  rewrittenSummary?: string | null;
  highlights?: string[];
  studentAngle?: string | null;
  complianceNotes?: string | null;
  status: string;
  province?: {
    name?: string;
    slug?: string;
  } | null;
  city?: {
    name?: string;
    slug?: string;
  } | null;
  university?: {
    name?: string;
    slug?: string;
  } | null;
};

type QueueState = {
  status: "loading" | "ready" | "error";
  imports: TravelImportRecord[];
  source: "api" | "fallback";
  message?: string;
};

const statusLabels: Record<string, string> = {
  NEEDS_REWRITE: "Needs rewrite",
  NEEDS_SOURCE_REVIEW: "Source review",
  READY_TO_PUBLISH: "Ready",
  PUBLISHED: "Published",
  REJECTED: "Rejected"
};

const statuses = ["NEEDS_REWRITE", "NEEDS_SOURCE_REVIEW", "READY_TO_PUBLISH", "PUBLISHED", "REJECTED"];

function nextAction(record: TravelImportRecord) {
  if (record.status === "NEEDS_SOURCE_REVIEW") return "Check source access, terms, duplication risk, and whether the page is public and stable.";
  if (record.status === "READY_TO_PUBLISH") return "Final editorial review: confirm that the public page uses rewritten summary, not copied source text.";
  if (record.status === "PUBLISHED") return "Keep the URL and compliance notes for audit trail and future content refresh.";
  if (record.status === "REJECTED") return "Do not use this material in destination pages; keep it for duplicate prevention.";
  return "Rewrite into SilkStudy voice, extract student-relevant highlights, and avoid publishing long source excerpts.";
}

export function TravelImportQueuePage({ fallbackImports }: { fallbackImports: TravelImportRecord[] }) {
  const [state, setState] = useState<QueueState>({
    status: "ready",
    imports: fallbackImports,
    source: "fallback"
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [statusDrafts, setStatusDrafts] = useState<Record<string, string>>({});
  const [complianceDrafts, setComplianceDrafts] = useState<Record<string, string>>({});

  const counts = useMemo(() => {
    return state.imports.reduce<Record<string, number>>((acc, item) => {
      acc[item.status] = (acc[item.status] ?? 0) + 1;
      return acc;
    }, {});
  }, [state.imports]);

  const loadImports = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", message: undefined }));

    try {
      const response = await fetch("/api/admin/travel-imports");
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setState({
          status: "error",
          imports: fallbackImports,
          source: "fallback",
          message: data?.message ?? "Travel import API is unavailable. Showing starter queue."
        });
        return;
      }

      setState({
        status: "ready",
        imports: Array.isArray(data?.results) ? data.results : [],
        source: "api",
        message: data?.message
      });
      const results = Array.isArray(data?.results) ? data.results as TravelImportRecord[] : [];
      setStatusDrafts(Object.fromEntries(results.filter((item) => item.id).map((item) => [item.id, item.status])));
      setComplianceDrafts(Object.fromEntries(results.filter((item) => item.id).map((item) => [item.id, item.complianceNotes ?? ""])));
    } catch {
      setState({
        status: "error",
        imports: fallbackImports,
        source: "fallback",
        message: "Could not reach the travel import API. Showing starter queue."
      });
    }
  }, [fallbackImports]);

  useEffect(() => {
    void loadImports();
  }, [loadImports]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("submitting");
    setSubmitMessage("");

    const formData = new FormData(event.currentTarget);
    const highlights = String(formData.get("highlights") ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const payload = {
      platform: String(formData.get("platform") ?? "OTHER"),
      universitySlug: String(formData.get("universitySlug") ?? ""),
      sourceUrl: String(formData.get("sourceUrl") ?? ""),
      sourceTitle: String(formData.get("sourceTitle") ?? ""),
      sourceAuthor: String(formData.get("sourceAuthor") ?? ""),
      sourceLocale: String(formData.get("sourceLocale") ?? ""),
      originalExcerpt: String(formData.get("originalExcerpt") ?? ""),
      rewrittenSummary: String(formData.get("rewrittenSummary") ?? ""),
      highlights,
      studentAngle: String(formData.get("studentAngle") ?? ""),
      complianceNotes: String(formData.get("complianceNotes") ?? ""),
      status: String(formData.get("status") ?? "NEEDS_REWRITE")
    };

    const response = await fetch("/api/admin/travel-imports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setSubmitStatus("error");
      setSubmitMessage(data?.message ?? "Could not create travel import. Check login, database, and required fields.");
      return;
    }

    setSubmitStatus("success");
    setSubmitMessage("Travel import saved. The queue has been refreshed.");
    event.currentTarget.reset();
    await loadImports();
  }

  async function updateImport(item: TravelImportRecord) {
    if (!item.id) return;

    setSavingId(item.id);
    await fetch(`/api/admin/travel-imports/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: statusDrafts[item.id] ?? item.status,
        complianceNotes: complianceDrafts[item.id] ?? item.complianceNotes ?? ""
      })
    });
    await loadImports();
    setSavingId(null);
  }

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Destination content pipeline</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">Travel content imports</h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Stage travel descriptions from Qunar, Xiaohongshu, Dianping-style local review sources, official tourism sites, Trip-style pages, and other sources as auditable rewrite material for school, province, and city pages.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void loadImports()}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-primary"
          >
            <RefreshCw size={16} aria-hidden="true" />
            Refresh
          </button>
          <button
            type="button"
            onClick={() => setIsFormOpen((value) => !value)}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white"
          >
            <Plus size={16} aria-hidden="true" />
            Add source
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["NEEDS_REWRITE", "NEEDS_SOURCE_REVIEW", "READY_TO_PUBLISH", "PUBLISHED", "REJECTED"].map((status) => (
            <div key={status} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{statusLabels[status]}</p>
              <p className="mt-2 text-2xl font-bold text-primary">{counts[status] ?? 0}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-primary" size={22} aria-hidden="true" />
            <div>
              <h2 className="text-xl font-bold text-ink">Content rules</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep source URLs, store only short excerpts for editorial review, rewrite into original SilkStudy summaries, avoid publishing platform comments or long copied passages, and separate tourism inspiration from verified student experience.
              </p>
            </div>
          </div>
        </section>

        {isFormOpen ? (
          <form onSubmit={handleSubmit} className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-ink">
                Platform
                <select name="platform" required className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary">
                  <option value="QUNAR">Qunar</option>
                  <option value="XIAOHONGSHU">Xiaohongshu</option>
                  <option value="DIANPING">Dianping</option>
                  <option value="DOUYIN">Douyin</option>
                  <option value="TIKTOK">TikTok</option>
                  <option value="TRIP">Trip-style page</option>
                  <option value="OFFICIAL_TOURISM">Official tourism</option>
                  <option value="WIKIVOYAGE">Wikivoyage</option>
                  <option value="OTHER">Other</option>
                </select>
              </label>
              <label className="text-sm font-medium text-ink">
                Status
                <select name="status" required className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary">
                  <option value="NEEDS_REWRITE">Needs rewrite</option>
                  <option value="NEEDS_SOURCE_REVIEW">Source review</option>
                  <option value="READY_TO_PUBLISH">Ready to publish</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </label>
              <label className="text-sm font-medium text-ink md:col-span-2">
                Source URL
                <input name="sourceUrl" type="url" required placeholder="https://..." className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink">
                Source title
                <input name="sourceTitle" placeholder="West Lake weekend guide" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink">
                Source author
                <input name="sourceAuthor" placeholder="Creator, platform, or tourism bureau" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink">
                Source locale
                <input name="sourceLocale" placeholder="zh, en, vi" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink">
                University slug
                <input name="universitySlug" placeholder="central-south-university" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink">
                Highlights
                <input name="highlights" placeholder="West Lake, tea culture, water towns" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink md:col-span-2">
                Short original excerpt for review
                <textarea name="originalExcerpt" required rows={4} placeholder="Store only a short excerpt used for editorial review." className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink md:col-span-2">
                SilkStudy rewritten summary
                <textarea name="rewrittenSummary" rows={4} placeholder="Original summary in SilkStudy voice. This is what can eventually appear publicly." className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink md:col-span-2">
                Student angle
                <textarea name="studentAngle" rows={3} placeholder="Why this source helps international students choose a destination." className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary" />
              </label>
              <label className="text-sm font-medium text-ink md:col-span-2">
                Compliance notes
                <textarea name="complianceNotes" rows={3} placeholder="Permission, source stability, quote handling, and platform-specific notes." className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary" />
              </label>
            </div>
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white disabled:bg-slate-400"
            >
              <Send size={16} aria-hidden="true" />
              {submitStatus === "submitting" ? "Saving..." : "Save travel source"}
            </button>
            {submitMessage ? (
              <p className={`mt-4 text-sm font-medium ${submitStatus === "error" ? "text-red-600" : "text-emerald-700"}`}>
                {submitMessage}
              </p>
            ) : null}
          </form>
        ) : null}

        <section className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm">
            <span className="font-semibold text-ink">{state.imports.length} travel content candidates</span>
            <span className={`rounded px-2 py-1 text-xs font-bold uppercase ${state.source === "api" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
              {state.source === "api" ? "Live database" : "Starter dataset"}
            </span>
          </div>
          {state.status === "loading" ? <div className="p-6 text-sm text-slate-600">Loading travel imports...</div> : null}
          {state.message ? <div className="border-b border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">{state.message}</div> : null}
          <div className="grid gap-4 p-5">
            {state.imports.map((item, index) => {
              const key = item.id ?? `fallback-${index}`;
              const live = Boolean(item.id);
              const destination = item.university?.name ?? item.city?.name ?? item.province?.name ?? "Unmatched destination";
              const highlights = item.highlights ?? [];

              return (
                <article key={key} className="rounded-lg border border-slate-200 p-5">
                  <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded bg-blue-50 px-2 py-1 text-xs font-bold text-primary">{item.platform}</span>
                        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{statusLabels[item.status] ?? item.status}</span>
                        <span className="rounded bg-cyan-50 px-2 py-1 text-xs font-bold text-cyan-700">{destination}</span>
                      </div>
                      <h2 className="mt-4 text-lg font-bold text-ink">{item.sourceTitle || destination}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{item.rewrittenSummary || item.studentAngle || "Rewrite summary pending."}</p>
                      {highlights.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {highlights.map((highlight) => (
                            <span key={highlight} className="rounded-md bg-surface px-3 py-2 text-xs font-semibold text-slate-700">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-500">{item.originalExcerpt}</p>
                    </div>
                    <div className="rounded-lg bg-surface p-4">
                      <p className="flex items-center gap-2 text-sm font-bold text-ink">
                        <Sparkles size={15} className="text-primary" aria-hidden="true" />
                        Next action
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{nextAction(item)}</p>
                      {item.complianceNotes ? <p className="mt-3 text-xs leading-5 text-slate-500">{item.complianceNotes}</p> : null}
                      <div className="mt-4 grid gap-3">
                        <label className="text-sm font-medium text-ink">
                          Status
                          <select
                            value={statusDrafts[key] ?? item.status}
                            disabled={!live}
                            onChange={(event) => setStatusDrafts((drafts) => ({ ...drafts, [key]: event.target.value }))}
                            className="mt-2 h-10 w-full rounded-md border border-slate-200 bg-white px-3 outline-none focus:border-primary disabled:bg-slate-100"
                          >
                            {statuses.map((status) => <option key={status} value={status}>{statusLabels[status]}</option>)}
                          </select>
                        </label>
                        <label className="text-sm font-medium text-ink">
                          Compliance notes
                          <textarea
                            value={complianceDrafts[key] ?? item.complianceNotes ?? ""}
                            disabled={!live}
                            rows={3}
                            onChange={(event) => setComplianceDrafts((drafts) => ({ ...drafts, [key]: event.target.value }))}
                            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-primary disabled:bg-slate-100"
                          />
                        </label>
                        <button
                          type="button"
                          disabled={!live || savingId === item.id}
                          onClick={() => void updateImport(item)}
                          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white disabled:bg-slate-400"
                        >
                          <Save size={15} aria-hidden="true" />
                          {savingId === item.id ? "Saving" : "Save status"}
                        </button>
                      </div>
                      <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Open source
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
