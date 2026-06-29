"use client";

import { RefreshCw, Save, ShieldAlert } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
  authorName: string;
  authorCountry?: string | null;
  type: string;
  status: string;
  isFeatured: boolean;
  city?: { name: string } | null;
  _count: { replies: number; reports: number };
};

export function CommunityModerationPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [message, setMessage] = useState("Loading community queue...");
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const load = useCallback(async () => {
    const response = await fetch("/api/admin/community/posts");
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      setMessage(data?.message ?? "Community moderation API unavailable.");
      return;
    }
    setPosts(data.results ?? []);
    setDrafts(Object.fromEntries((data.results ?? []).map((post: Post) => [post.id, post.status])));
    setMessage("");
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function save(post: Post) {
    await fetch(`/api/admin/community/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: drafts[post.id] ?? post.status, isFeatured: post.isFeatured })
    });
    await load();
  }

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Safety and moderation</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">Community moderation</h1>
            <p className="mt-3 text-slate-600">Approve conversations, close activities, and prioritize reported content.</p>
          </div>
          <button onClick={() => void load()} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-primary"><RefreshCw size={16} />Refresh</button>
        </div>
        {message ? <p className="mt-6 rounded-md bg-amber-50 p-4 text-sm text-amber-800">{message}</p> : null}
        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <article key={post.id} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">{post.type} · {post.city?.name ?? "China"}</p>
                  <h2 className="mt-2 text-xl font-bold text-ink">{post.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">{post.authorName}{post.authorCountry ? ` · ${post.authorCountry}` : ""}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{post.content}</p>
                  <div className="mt-4 flex gap-3 text-xs font-bold text-slate-500">
                    <span>{post._count.replies} replies</span>
                    <span className={post._count.reports ? "text-red-600" : ""}><ShieldAlert size={13} className="mr-1 inline" />{post._count.reports} reports</span>
                  </div>
                </div>
                <div className="grid content-start gap-3">
                  <select value={drafts[post.id] ?? post.status} onChange={(event) => setDrafts((current) => ({ ...current, [post.id]: event.target.value }))} className="h-10 rounded-md border border-slate-200 px-3 text-sm">
                    {["PENDING", "APPROVED", "REJECTED", "CLOSED"].map((status) => <option key={status}>{status}</option>)}
                  </select>
                  <button onClick={() => void save(post)} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white"><Save size={15} />Save moderation</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

