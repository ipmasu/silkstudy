"use client";

import { RefreshCw, Save, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type ReviewRecord = {
  id?: string;
  authorName: string;
  rating: number;
  status: string;
  title: string;
  content?: string;
  isVerified?: boolean;
  university?: {
    name?: string;
  };
};

type ReviewState = {
  status: "loading" | "ready" | "error";
  reviews: ReviewRecord[];
  message?: string;
  source: "api" | "fallback";
};

const statuses = ["PENDING", "APPROVED", "REJECTED"];

export function ReviewModerationPage({ fallbackReviews }: { fallbackReviews: ReviewRecord[] }) {
  const [state, setState] = useState<ReviewState>({
    status: "ready",
    reviews: fallbackReviews,
    source: "fallback"
  });
  const [savingId, setSavingId] = useState<string | null>(null);
  const [statusDrafts, setStatusDrafts] = useState<Record<string, string>>({});
  const [verifiedDrafts, setVerifiedDrafts] = useState<Record<string, boolean>>({});

  const loadReviews = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", message: undefined }));

    try {
      const response = await fetch("/api/admin/reviews");
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setState({
          status: "error",
          reviews: fallbackReviews,
          message: data?.message ?? "Review API is unavailable. Showing starter reviews.",
          source: "fallback"
        });
        return;
      }

      const results = Array.isArray(data?.results) ? data.results as ReviewRecord[] : [];
      setState({ status: "ready", reviews: results, source: "api" });
      setStatusDrafts(Object.fromEntries(results.filter((review) => review.id).map((review) => [review.id, review.status])));
      setVerifiedDrafts(Object.fromEntries(results.filter((review) => review.id).map((review) => [review.id, Boolean(review.isVerified)])));
    } catch {
      setState({
        status: "error",
        reviews: fallbackReviews,
        message: "Could not reach the review API. Showing starter reviews.",
        source: "fallback"
      });
    }
  }, [fallbackReviews]);

  useEffect(() => {
    void loadReviews();
  }, [loadReviews]);

  async function updateReview(review: ReviewRecord) {
    if (!review.id) return;

    setSavingId(review.id);
    await fetch(`/api/admin/reviews/${review.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: statusDrafts[review.id] ?? review.status,
        isVerified: verifiedDrafts[review.id] ?? Boolean(review.isVerified)
      })
    });
    await loadReviews();
    setSavingId(null);
  }

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Moderation</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">Review moderation</h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Approve, reject, and verify student reviews before they appear on university pages.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void loadReviews()}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-primary"
          >
            <RefreshCw size={16} aria-hidden="true" />
            Refresh
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm">
            <span className="font-semibold text-ink">{state.reviews.length} reviews</span>
            <span className={`rounded px-2 py-1 text-xs font-bold uppercase ${state.source === "api" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
              {state.source === "api" ? "Live database" : "Starter dataset"}
            </span>
          </div>
          {state.status === "loading" ? <div className="p-6 text-sm text-slate-600">Loading reviews...</div> : null}
          {state.status === "error" && state.message ? <div className="border-b border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">{state.message}</div> : null}
          <div className="grid gap-4 p-5">
            {state.reviews.map((review, index) => {
              const key = review.id ?? `fallback-${index}`;
              const live = Boolean(review.id);

              return (
                <article key={key} className="rounded-lg border border-slate-200 p-5">
                  <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
                    <div>
                      <p className="text-sm font-semibold text-primary">{review.university?.name ?? "Starter university"}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <h2 className="text-lg font-bold text-ink">{review.title}</h2>
                        <span className="flex items-center gap-1 text-amber-500">
                          <Star size={16} fill="currentColor" aria-hidden="true" />
                          {review.rating}/5
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{review.authorName}</p>
                      {review.content ? <p className="mt-3 text-sm leading-6 text-slate-600">{review.content}</p> : null}
                    </div>
                    <div className="grid gap-3">
                      <label className="text-sm font-medium text-ink">
                        Status
                        <select
                          value={statusDrafts[key] ?? review.status}
                          disabled={!live}
                          onChange={(event) => setStatusDrafts((drafts) => ({ ...drafts, [key]: event.target.value }))}
                          className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary disabled:bg-slate-100"
                        >
                          {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
                        </select>
                      </label>
                      <label className="flex min-h-10 items-center gap-3 rounded-md border border-slate-200 px-3 text-sm font-medium text-ink">
                        <input
                          type="checkbox"
                          checked={verifiedDrafts[key] ?? Boolean(review.isVerified)}
                          disabled={!live}
                          onChange={(event) => setVerifiedDrafts((drafts) => ({ ...drafts, [key]: event.target.checked }))}
                          className="h-4 w-4 rounded border-slate-300 text-primary"
                        />
                        Verified review
                      </label>
                      <button
                        type="button"
                        disabled={!live || savingId === review.id}
                        onClick={() => void updateReview(review)}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white disabled:bg-slate-400"
                      >
                        <Save size={15} aria-hidden="true" />
                        {savingId === review.id ? "Saving" : "Save moderation"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
