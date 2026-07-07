"use client";

import { useCallback, useEffect, useState } from "react";
import { MessageSquareQuote, Star } from "lucide-react";
import { ReviewSubmissionForm } from "@/components/reviews/review-submission-form";

type ReviewView = {
  id?: string;
  authorName: string;
  authorCountry?: string | null;
  program?: string | null;
  rating: number;
  title: string;
  content: string;
  pros?: string | null;
  cons?: string | null;
  isVerified?: boolean;
};

export function LiveUniversityReviews({
  universitySlug,
  initialReviews,
  locale = "en"
}: {
  universitySlug: string;
  initialReviews: ReviewView[];
  locale?: string;
}) {
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const tx = (en: string, zh: string, vi: string) => isZh ? zh : isVi ? vi : en;
  const [reviews, setReviews] = useState<ReviewView[]>(initialReviews);

  const refreshReviews = useCallback(async () => {
    const response = await fetch(`/api/universities/${universitySlug}/reviews`, { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json().catch(() => null);
    if (Array.isArray(data?.results)) setReviews(data.results as ReviewView[]);
  }, [universitySlug]);

  useEffect(() => {
    refreshReviews().catch(() => undefined);
    const timer = window.setInterval(() => {
      refreshReviews().catch(() => undefined);
    }, 12000);
    return () => window.clearInterval(timer);
  }, [refreshReviews]);

  return (
    <>
      <div className="mt-6 grid gap-4">
        {reviews.length > 0 ? reviews.map((review, index) => (
          <article key={review.id ?? `${review.authorName}-${review.title}-${index}`} className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-ink">{review.title}</h3>
                  {review.isVerified ? (
                    <span className="rounded bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{tx("Verified", "已验证", "Đã xác minh")}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {review.authorName} - {review.authorCountry ?? "International student"} - {review.program ?? "Student"}
                </p>
              </div>
              <div className="flex items-center gap-1 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill={starIndex < review.rating ? "currentColor" : "none"} aria-hidden="true" />
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">{review.content}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-surface p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{tx("Pros", "优点", "Ưu điểm")}</p>
                <p className="mt-1 text-sm text-slate-700">{review.pros ?? "-"}</p>
              </div>
              <div className="rounded-md bg-surface p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{tx("Cons", "需要注意", "Điểm cần lưu ý")}</p>
                <p className="mt-1 text-sm text-slate-700">{review.cons ?? "-"}</p>
              </div>
            </div>
          </article>
        )) : (
          <div className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-600">
            <MessageSquareQuote className="text-primary" size={22} aria-hidden="true" />
            <p className="mt-3">{isZh ? "暂无已审核学生评价。欢迎分享有帮助的真实体验。" : "No approved student reviews yet. Be the first to share a helpful experience."}</p>
          </div>
        )}
      </div>
      <ReviewSubmissionForm universitySlug={universitySlug} locale={locale} onSubmitted={refreshReviews} />
    </>
  );
}
