import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Heart, MessageCircle, Users } from "lucide-react";
import {
  communityCities,
  communityEvents,
  communityPosts,
  communityTopics,
  type CommunityCitySlug
} from "@/lib/community-experience-data";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: CommunityCitySlug }>;
};

export function generateStaticParams() {
  return communityCities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const city = communityCities.find((item) => item.slug === slug);
  if (!city) {
    return buildMetadata({
      title: "City Circle — SilkStudy Community",
      description: "Join SilkStudy city circles for international students in China.",
      path: "/community"
    });
  }
  return buildMetadata({
    title: `${city.name}圈子 — SilkStudy Community`,
    description: `Join the ${city.enName} city circle on SilkStudy. Read student posts, meet friends, and discover upcoming events.`,
    path: `/community/cities/${city.slug}`
  });
}

function topicLabel(key: string) {
  return communityTopics.find((topic) => topic.key === key)?.label ?? key;
}

function topicIcon(key: string) {
  return communityTopics.find((topic) => topic.key === key)?.icon ?? "✨";
}

export default async function CommunityCityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = communityCities.find((item) => item.slug === slug);
  if (!city) notFound();

  const posts = communityPosts
    .filter((post) => post.citySlug === city.slug)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const events = communityEvents.filter((event) => event.citySlug === city.slug);

  return (
    <main className="bg-[#fff8ef] text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image src={city.image} alt={`${city.name} city circle`} fill priority className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-red-950/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/community" className="text-sm font-semibold text-amber-100 hover:text-white">← 返回社区</Link>
          <p className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            城市圈子
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight">{city.name} · {city.enName}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100">{city.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-semibold">
              <Users size={18} /> {city.members.toLocaleString()} 位成员
            </span>
            <a href="#posts" className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
              看城市帖子
            </a>
            <Link href="/community#feed" className="inline-flex min-h-11 items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20">
              发布到这个圈子
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <div id="posts" className="space-y-4">
          <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold">{city.name}圈子帖子</h2>
            <p className="mt-2 text-slate-600">这里聚合所有选择 {city.name} 的社区内容，方便新生快速找到本地答案和朋友。</p>
          </div>
          {posts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm">
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-amber-400 font-bold text-white">
                    {post.avatar}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <p className="font-bold">{post.authorName}</p>
                      <p className="text-sm text-slate-500">{post.country}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-red-700">{topicIcon(post.topic)} {topicLabel(post.topic)}</span>
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800">{post.cityName}圈子</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-slate-800">{post.content}</p>
              </div>
              {post.image ? (
                <div className="relative aspect-[16/9] border-y border-slate-100">
                  <Image src={post.image} alt={`${post.cityName} post`} fill className="object-cover" />
                </div>
              ) : null}
              <div className="flex items-center gap-5 px-5 py-4 text-sm font-semibold text-slate-500">
                <span className="inline-flex items-center gap-2"><Heart size={18} /> {post.likes}</span>
                <span className="inline-flex items-center gap-2"><MessageCircle size={18} /> {post.comments}</span>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">即将举行的活动</h2>
            <div className="mt-4 space-y-4">
              {events.length ? (
                events.map((event) => (
                  <article key={event.id} className="rounded-2xl bg-red-50 p-4">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-red-700">{event.type}</span>
                    <h3 className="mt-3 font-bold">{event.title}</h3>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600"><CalendarDays size={17} /> {event.time}</p>
                    <p className="mt-2 text-sm text-slate-600">{event.location}</p>
                    <p className="mt-3 text-sm font-semibold text-slate-500">{event.attendees} 人已报名</p>
                  </article>
                ))
              ) : (
                <p className="text-sm leading-6 text-slate-600">这个城市的新活动正在筹备中。</p>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">本圈热门话题</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {communityTopics.map((topic) => {
                const count = posts.filter((post) => post.topic === topic.key).length;
                return (
                  <span key={topic.key} className="rounded-full bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900">
                    {topic.icon} {topic.label} · {count}
                  </span>
                );
              })}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

