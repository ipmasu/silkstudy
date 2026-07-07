"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import { CalendarDays, Flag, Languages, MapPin, MessageCircle, Send, ShieldCheck, Users } from "lucide-react";
import type { CommunityPostView } from "@/lib/community-data";

const types = ["ALL", "MEETUP", "TRAVEL_BUDDY", "LANGUAGE_EXCHANGE", "CAMPUS_LIFE", "QUESTION", "LOCAL_HELP"] as const;

const typeLabels: Record<string, { en: string; zh: string }> = {
  ALL: { en: "All conversations", zh: "全部交流" },
  MEETUP: { en: "Meetups", zh: "线下活动" },
  TRAVEL_BUDDY: { en: "Travel buddies", zh: "结伴旅行" },
  LANGUAGE_EXCHANGE: { en: "Language exchange", zh: "语言交换" },
  CAMPUS_LIFE: { en: "Campus life", zh: "校园生活" },
  QUESTION: { en: "Questions", zh: "问题求助" },
  LOCAL_HELP: { en: "Local help", zh: "本地帮助" }
};

export function CommunityHub({ initialPosts, cities, locale }: { initialPosts: CommunityPostView[]; cities: { slug: string; name: string; zhName: string }[]; locale: string }) {
  const isZh = locale === "zh";
  const [activeType, setActiveType] = useState<(typeof types)[number]>("ALL");
  const [activeCity, setActiveCity] = useState("all");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState("");
  const [livePosts, setLivePosts] = useState(initialPosts);

  const posts = useMemo(() => livePosts.filter((post) =>
    (activeType === "ALL" || post.type === activeType) &&
    (activeCity === "all" || post.citySlug === activeCity)
  ), [activeCity, activeType, livePosts]);

  const refreshPosts = useCallback(async () => {
    const params = new URLSearchParams();
    if (activeType !== "ALL") params.set("type", activeType);
    if (activeCity !== "all") params.set("city", activeCity);
    const response = await fetch(`/api/community/posts?${params.toString()}`, { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json().catch(() => null);
    if (Array.isArray(data?.results)) setLivePosts(data.results as CommunityPostView[]);
  }, [activeCity, activeType]);

  useEffect(() => {
    refreshPosts().catch(() => undefined);
    const timer = window.setInterval(() => {
      refreshPosts().catch(() => undefined);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [refreshPosts]);

  async function submitPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      ...Object.fromEntries(data.entries()),
      languages: String(data.get("languages") ?? "").split(",").map((item) => item.trim()).filter(Boolean),
      eventDate: data.get("eventDate") ? new Date(String(data.get("eventDate"))).toISOString() : ""
    };
    const response = await fetch("/api/community/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => null);
    if (!response.ok) {
      setStatus("error");
      setMessage(result?.message ?? (isZh ? "发布失败，请检查内容。" : "Could not submit the post."));
      return;
    }
    form.reset();
    setStatus("success");
    refreshPosts().catch(() => undefined);
    setMessage(isZh ? "已提交安全审核。审核通过后会出现在社区。" : "Submitted for safety review. It will appear after approval.");
  }

  async function submitReply(event: FormEvent<HTMLFormElement>, postId: string) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const response = await fetch(`/api/community/posts/${postId}/replies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data.entries()))
    });
    setActionMessage(response.ok
      ? (isZh ? "回复已提交审核。" : "Reply submitted for moderation.")
      : (isZh ? "回复提交失败。" : "Could not submit reply."));
    if (response.ok) {
      form.reset();
      refreshPosts().catch(() => undefined);
    }
  }

  async function reportPost(postId: string) {
    const response = await fetch(`/api/community/posts/${postId}/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason: "OTHER", details: "Reported from the public community feed." })
    });
    setActionMessage(response.ok
      ? (isZh ? "举报已提交，感谢你帮助保护社区。" : "Report submitted. Thank you for helping protect the community.")
      : (isZh ? "暂时无法提交举报。" : "Could not submit the report."));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button key={type} type="button" onClick={() => setActiveType(type)} className={`rounded-md px-3 py-2 text-sm font-semibold ${activeType === type ? "bg-primary text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-primary"}`}>
              {typeLabels[type][isZh ? "zh" : "en"]}
            </button>
          ))}
        </div>
        <select value={activeCity} onChange={(event) => setActiveCity(event.target.value)} className="mt-4 h-11 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold text-ink">
          <option value="all">{isZh ? "所有城市" : "All cities"}</option>
          {cities.map((city) => <option key={city.slug} value={city.slug}>{isZh ? city.zhName : city.name}</option>)}
        </select>
        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <article key={post.id} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">{typeLabels[post.type][isZh ? "zh" : "en"]}</p>
                  <h2 className="mt-2 text-xl font-bold text-ink">{post.title}</h2>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-surface px-2 py-1 text-xs font-bold text-slate-600"><MapPin size={13} />{post.cityName}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{post.content}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                <span className="rounded bg-blue-50 px-2 py-1">{post.authorName} · {post.authorCountry}</span>
                {post.languages.map((language) => <span key={language} className="inline-flex items-center gap-1 rounded bg-cyan-50 px-2 py-1 text-cyan-800"><Languages size={12} />{language}</span>)}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <div className="flex flex-wrap gap-4">
                  {post.eventDate ? <span className="inline-flex items-center gap-1"><CalendarDays size={14} />{new Date(post.eventDate).toLocaleDateString(locale)}</span> : null}
                  {post.meetingArea ? <span className="inline-flex items-center gap-1"><MapPin size={14} />{post.meetingArea}</span> : null}
                  <span className="inline-flex items-center gap-1"><MessageCircle size={14} />{post.replyCount} {isZh ? "条回复" : "replies"}</span>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setReplyingTo(replyingTo === post.id ? null : post.id)} className="inline-flex items-center gap-1 hover:text-primary"><MessageCircle size={14} />{isZh ? "回复或表达兴趣" : "Reply or join"}</button>
                  <button type="button" onClick={() => reportPost(post.id)} title={isZh ? "举报不安全内容" : "Report unsafe content"} className="inline-flex items-center gap-1 hover:text-red-600"><Flag size={14} />{isZh ? "举报" : "Report"}</button>
                </div>
              </div>
              {replyingTo === post.id ? (
                <form onSubmit={(event) => submitReply(event, post.id)} className="mt-4 grid gap-3 rounded-md bg-surface p-4 sm:grid-cols-[160px_1fr_auto]">
                  <input name="authorName" required placeholder={isZh ? "显示名称" : "Display name"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
                  <input name="content" required minLength={4} placeholder={isZh ? "公开回复或表达参加兴趣" : "Public reply or express interest"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
                  <button className="rounded-md bg-primary px-4 text-sm font-semibold text-white">{isZh ? "提交审核" : "Submit"}</button>
                </form>
              ) : null}
            </article>
          ))}
          {actionMessage ? <p className="rounded-md bg-blue-50 px-4 py-3 text-sm font-semibold text-primary">{actionMessage}</p> : null}
          {posts.length === 0 ? <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">{isZh ? "这个筛选下还没有帖子，成为第一个发起交流的人。" : "No posts match these filters yet. Start the first conversation."}</div> : null}
        </div>
      </div>

      <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
        <div className="flex items-center gap-2 text-primary"><Users size={20} /><h2 className="font-bold text-ink">{isZh ? "发起交流或活动" : "Start a conversation"}</h2></div>
        <p className="mt-2 text-xs leading-5 text-slate-500">{isZh ? "请勿在公开内容中发布手机号、微信号、护照或精确住址。新内容会先经过安全审核。" : "Do not publish phone numbers, private social handles, passport details, or exact home addresses. New posts are safety-reviewed."}</p>
        <form onSubmit={submitPost} className="mt-5 grid gap-3">
          <select name="type" required className="h-10 rounded-md border border-slate-200 px-3 text-sm">{types.slice(1).map((type) => <option key={type} value={type}>{typeLabels[type][isZh ? "zh" : "en"]}</option>)}</select>
          <select name="citySlug" required className="h-10 rounded-md border border-slate-200 px-3 text-sm">{cities.map((city) => <option key={city.slug} value={city.slug}>{isZh ? city.zhName : city.name}</option>)}</select>
          <input name="authorName" required placeholder={isZh ? "显示名称" : "Display name"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <input name="authorCountry" placeholder={isZh ? "国家或地区" : "Country or region"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <input name="title" required minLength={8} placeholder={isZh ? "标题" : "Title"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <textarea name="content" required minLength={30} rows={5} placeholder={isZh ? "介绍活动、问题或你希望认识怎样的朋友" : "Describe the activity, question, or people you hope to meet"} className="rounded-md border border-slate-200 px-3 py-2 text-sm" />
          <input name="languages" placeholder={isZh ? "语言，用逗号分隔" : "Languages, separated by commas"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <input name="meetingArea" placeholder={isZh ? "公共会面区域，不要填写住址" : "Public meeting area, never a home address"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <input name="eventDate" type="datetime-local" className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <input name="contactEmail" type="email" placeholder={isZh ? "联系邮箱（不会公开）" : "Contact email (kept private)"} className="h-10 rounded-md border border-slate-200 px-3 text-sm" />
          <button disabled={status === "submitting"} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white disabled:bg-slate-400"><Send size={16} />{status === "submitting" ? (isZh ? "提交中..." : "Submitting...") : (isZh ? "提交审核" : "Submit for review")}</button>
          {message ? <p className={`text-xs font-semibold ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>{message}</p> : null}
        </form>
        <div className="mt-5 flex gap-2 rounded-md bg-emerald-50 p-3 text-xs leading-5 text-emerald-800"><ShieldCheck className="shrink-0" size={17} />{isZh ? "首次线下见面请选择公共场所，告诉可信任的人行程，并自行保管证件和财物。" : "For first meetings, choose public places, tell someone you trust, and keep control of your documents and belongings."}</div>
      </aside>
    </div>
  );
}
