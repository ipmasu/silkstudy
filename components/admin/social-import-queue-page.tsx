"use client";

import Link from "next/link";
import { ExternalLink, RefreshCw, ShieldCheck } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

type SocialImportRecord = {
  id?: string;
  platform: string;
  sourceUrl: string;
  sourceAuthor?: string | null;
  sourceLocale?: string | null;
  originalText: string;
  translatedText?: string | null;
  editorialSummary?: string | null;
  consentStatus: string;
  status: string;
  university?: {
    name?: string;
    slug?: string;
  } | null;
};

type QueueState = {
  status: "loading" | "ready" | "error";
  imports: SocialImportRecord[];
  source: "api" | "fallback";
  message?: string;
};

const statusLabels: Record<string, string> = {
  NEEDS_SOURCE_REVIEW: "Source review",
  NEEDS_PERMISSION: "Needs permission",
  READY_FOR_MODERATION: "Ready for moderation",
  IMPORTED: "Imported",
  REJECTED: "Rejected"
};

function nextAction(record: SocialImportRecord) {
  if (record.status === "NEEDS_PERMISSION") return "Confirm creator permission or platform-allowed export before using this as a review.";
  if (record.status === "READY_FOR_MODERATION") return "Review translation, summary, and university match before converting to a public review.";
  if (record.status === "IMPORTED") return "Already imported; keep source URL for audit trail.";
  if (record.status === "REJECTED") return "Do not display. Keep record for audit and duplicate prevention.";
  return "Check source authenticity, duplicates, platform rules, and whether the content is a quote or editorial signal.";
}

export function SocialImportQueuePage({ fallbackImports }: { fallbackImports: SocialImportRecord[] }) {
  const [state, setState] = useState<QueueState>({
    status: "ready",
    imports: fallbackImports,
    source: "fallback"
  });

  const counts = useMemo(() => {
    return state.imports.reduce<Record<string, number>>((acc, item) => {
      acc[item.status] = (acc[item.status] ?? 0) + 1;
      return acc;
    }, {});
  }, [state.imports]);

  const loadImports = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", message: undefined }));

    try {
      const response = await fetch("/api/admin/social-imports");
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setState({
          status: "error",
          imports: fallbackImports,
          source: "fallback",
          message: data?.message ?? "Social import API is unavailable. Showing starter queue."
        });
        return;
      }

      setState({
        status: "ready",
        imports: Array.isArray(data?.results) ? data.results : [],
        source: "api"
      });
    } catch {
      setState({
        status: "error",
        imports: fallbackImports,
        source: "fallback",
        message: "Could not reach the social import API. Showing starter queue."
      });
    }
  }, [fallbackImports]);

  useEffect(() => {
    void loadImports();
  }, [loadImports]);

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Social proof pipeline</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">External review imports</h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Stage comments from Douyin, TikTok, Xiaohongshu, and other platforms as auditable import candidates before they become public student reviews.
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
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["NEEDS_SOURCE_REVIEW", "NEEDS_PERMISSION", "READY_FOR_MODERATION", "IMPORTED", "REJECTED"].map((status) => (
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
              <h2 className="text-xl font-bold text-ink">Import rules</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Do not publish scraped comments directly. Use platform-permitted exports or permissioned sources, preserve URLs, separate direct quotes from editorial summaries, moderate sensitive content, and keep imported social signals distinct from verified student reviews.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm">
            <span className="font-semibold text-ink">{state.imports.length} import candidates</span>
            <span className={`rounded px-2 py-1 text-xs font-bold uppercase ${state.source === "api" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
              {state.source === "api" ? "Live database" : "Starter dataset"}
            </span>
          </div>
          {state.status === "loading" ? <div className="p-6 text-sm text-slate-600">Loading social imports...</div> : null}
          {state.status === "error" && state.message ? <div className="border-b border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">{state.message}</div> : null}
          <div className="grid gap-4 p-5">
            {state.imports.map((item, index) => (
              <article key={item.id ?? `${item.platform}-${index}`} className="rounded-lg border border-slate-200 p-5">
                <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-blue-50 px-2 py-1 text-xs font-bold text-primary">{item.platform}</span>
                      <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{statusLabels[item.status] ?? item.status}</span>
                      <span className="rounded bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700">Consent: {item.consentStatus}</span>
                    </div>
                    <h2 className="mt-4 text-lg font-bold text-ink">{item.university?.name ?? "Unmatched university"}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{item.editorialSummary || item.translatedText || item.originalText}</p>
                    <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-500">{item.originalText}</p>
                  </div>
                  <div className="rounded-lg bg-surface p-4">
                    <p className="text-sm font-bold text-ink">Next action</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{nextAction(item)}</p>
                    <div className="mt-4 grid gap-2">
                      {item.university?.slug ? (
                        <Link href={`/universities/${item.university.slug}`} className="text-sm font-semibold text-primary">
                          View matched school
                        </Link>
                      ) : null}
                      <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Open source
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
