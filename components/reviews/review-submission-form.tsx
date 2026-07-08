"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

type ReviewSubmissionFormProps = {
  universitySlug: string;
  locale?: string;
  onSubmitted?: () => void | Promise<void>;
};

export function ReviewSubmissionForm({ universitySlug, locale = "en", onSubmitted }: ReviewSubmissionFormProps) {
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const tx = (en: string, zh: string, vi: string) => isZh ? zh : isVi ? vi : en;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`/api/universities/${universitySlug}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setMessage(reviewErrorMessage(response.status, data?.message));
        return;
      }

      setStatus("success");
      setMessage(tx("Thanks. Your review has been published.", "谢谢，你的评价已发布。", "Cảm ơn bạn. Đánh giá của bạn đã được hiển thị."));
      await onSubmitted?.();
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage(tx("Could not submit review. Please try again later.", "评价暂时无法提交，请稍后再试。", "Chưa thể gửi đánh giá. Vui lòng thử lại sau."));
    }
  }

  function reviewErrorMessage(statusCode: number, serverMessage?: string) {
    if (statusCode === 404 || serverMessage === "University not found.") {
      return tx("This university profile could not be found.", "没有找到这所学校页面。", "Không tìm thấy hồ sơ trường này.");
    }

    if (statusCode === 400 || serverMessage === "Validation failed.") {
      return tx(
        "Please check the required fields. The title should be at least 3 characters and the review should be at least 20 characters.",
        "请检查必填项：评价标题至少 3 个字，评价内容至少 20 个字。",
        "Vui lòng kiểm tra thông tin bắt buộc. Tiêu đề cần ít nhất 3 ký tự và nội dung cần ít nhất 20 ký tự."
      );
    }

    return tx("Could not submit review. Please try again later.", "评价暂时无法提交，请稍后再试。", "Chưa thể gửi đánh giá. Vui lòng thử lại sau.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 rounded-lg border border-slate-200 bg-surface p-5">
      <p className="font-bold text-ink">{tx("Share your experience", "分享你的留学体验", "Chia sẻ trải nghiệm của bạn")}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          {tx("Name", "姓名", "Tên")}
          <input name="authorName" required className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          {tx("Country", "国家", "Quốc gia")}
          <input name="authorCountry" className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          {tx("Program", "就读项目", "Chương trình học")}
          <input name="program" className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          {tx("Rating", "评分", "Đánh giá")}
          <select name="rating" required className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary">
            <option value="5">{isZh ? "5 - 很好" : "5 - Excellent"}</option>
            <option value="4">{isZh ? "4 - 不错" : "4 - Good"}</option>
            <option value="3">{isZh ? "3 - 一般" : "3 - Average"}</option>
            <option value="2">{isZh ? "2 - 有挑战" : "2 - Difficult"}</option>
            <option value="1">{isZh ? "1 - 不推荐" : "1 - Not recommended"}</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink">
        {tx("Review title", "评价标题", "Tiêu đề đánh giá")}
        <input name="title" required className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
      </label>
      <label className="mt-4 block text-sm font-medium text-ink">
        {tx("Review", "评价内容", "Nội dung đánh giá")}
        <textarea name="content" required rows={4} className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary" />
      </label>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          {tx("Pros", "优点", "Ưu điểm")}
          <textarea name="pros" rows={3} className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          {tx("Cons", "需要注意", "Điểm cần lưu ý")}
          <textarea name="cons" rows={3} className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary" />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white disabled:bg-slate-400"
      >
        <Send size={16} aria-hidden="true" />
        {status === "submitting" ? tx("Submitting...", "提交中...", "Đang gửi...") : tx("Submit review", "提交评价", "Gửi đánh giá")}
      </button>
      {message ? (
        <p className={`mt-3 text-sm font-medium ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
