"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  Camera,
  Heart,
  ImagePlus,
  LogIn,
  MessageCircle,
  Send,
  Sparkles,
  UserPlus,
  Users
} from "lucide-react";
import {
  communityCities,
  communityEvents,
  communityPosts,
  communityTopics,
  completedExchangeStories,
  exchangeRequests,
  sampleCommunityProfile,
  type CommunityCitySlug,
  type CommunityPost,
  type CommunityTopicKey
} from "@/lib/community-experience-data";

type SortMode = "latest" | "hot";
type FilterKey = "all" | CommunityTopicKey;
type CityFilter = "all" | CommunityCitySlug;

const cityOptions = communityCities.map((city) => ({ value: city.slug, label: city.name }));

function formatPostTime(value: string) {
  const date = new Date(value);
  const now = new Date();
  const diff = Math.max(0, now.getTime() - date.getTime());
  const hours = Math.floor(diff / 1000 / 60 / 60);
  if (hours < 1) return "刚刚";
  if (hours < 24) return `${hours}小时前`;
  return `${Math.floor(hours / 24)}天前`;
}

function topicLabel(topic: CommunityTopicKey) {
  return communityTopics.find((item) => item.key === topic)?.label ?? topic;
}

function topicIcon(topic: CommunityTopicKey) {
  return communityTopics.find((item) => item.key === topic)?.icon ?? "✨";
}

export function SilkStudyCommunity({ locale }: { locale: string }) {
  const [posts, setPosts] = useState<CommunityPost[]>(communityPosts);
  const [sortMode, setSortMode] = useState<SortMode>("latest");
  const [activeTopic, setActiveTopic] = useState<FilterKey>("all");
  const [activeCity, setActiveCity] = useState<CityFilter>("all");
  const [joinedCities, setJoinedCities] = useState<CommunityCitySlug[]>(["changsha"]);
  const [composerText, setComposerText] = useState("");
  const [composerTopic, setComposerTopic] = useState<CommunityTopicKey>("application");
  const [composerCity, setComposerCity] = useState<CommunityCitySlug>("changsha");
  const [imageName, setImageName] = useState("");
  const [authMode, setAuthMode] = useState<"login" | "register">("register");

  const basePath = locale === "zh" ? "/zh" : "";

  const visiblePosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      const topicMatch = activeTopic === "all" || post.topic === activeTopic;
      const cityMatch = activeCity === "all" || post.citySlug === activeCity;
      return topicMatch && cityMatch;
    });
    return [...filtered].sort((a, b) => {
      if (sortMode === "hot") {
        return b.likes + b.comments * 3 - (a.likes + a.comments * 3);
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [activeCity, activeTopic, posts, sortMode]);

  function toggleCity(slug: CommunityCitySlug) {
    setJoinedCities((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]
    );
  }

  function submitPost() {
    const text = composerText.trim();
    if (!text) return;
    const city = communityCities.find((item) => item.slug === composerCity) ?? communityCities[0];
    const newPost: CommunityPost = {
      id: `local-${Date.now()}`,
      authorName: sampleCommunityProfile.name,
      avatar: sampleCommunityProfile.avatar,
      country: sampleCommunityProfile.country,
      citySlug: city.slug,
      cityName: city.name,
      topic: composerTopic,
      createdAt: new Date().toISOString(),
      content: text,
      image: imageName ? city.image : undefined,
      likes: 0,
      comments: 0
    };
    setPosts((current) => [newPost, ...current]);
    setComposerText("");
    setImageName("");
    setActiveCity("all");
    setActiveTopic("all");
    setSortMode("latest");
  }

  return (
    <main className="bg-[#fff8ef] text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image src="/images/home/homepage-hero.jpg" alt="China city night" fill priority className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-red-950/30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100">
              留学中国的朋友圈
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              在抵达中国之前，先找到朋友和归属感。
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
              这里像一个面向全球学生的 SilkStudy Facebook：问申请、找室友、约饭搭子、交换语言、参加城市活动，也把你家乡的小小美好带到中国来。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#feed" className="inline-flex min-h-11 items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-950/25 transition hover:bg-red-700">
                进入信息流
              </a>
              <a href="#circles" className="inline-flex min-h-11 items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
                选择城市圈子
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 text-lg font-bold text-red-950">
                {sampleCommunityProfile.avatar}
              </span>
              <div>
                <p className="font-semibold">{sampleCommunityProfile.name}</p>
                <p className="text-sm text-slate-200">{sampleCommunityProfile.country} · {sampleCommunityProfile.city}</p>
              </div>
            </div>
            <p className="mt-4 leading-7 text-slate-100">{sampleCommunityProfile.bio}</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xl font-bold">30+</p>
                <p className="text-slate-200">冷启动帖子</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xl font-bold">5</p>
                <p className="text-slate-200">城市圈子</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xl font-bold">8</p>
                <p className="text-slate-200">话题分类</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr_330px] lg:px-8 lg:py-16">
        <aside className="space-y-6">
          <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">话题导航</h2>
              <Sparkles size={18} className="text-red-600" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 lg:block lg:space-y-2">
              <button
                onClick={() => setActiveTopic("all")}
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition lg:w-full lg:text-left ${activeTopic === "all" ? "bg-red-600 text-white" : "bg-red-50 text-red-950 hover:bg-red-100"}`}
              >
                ✨ 全部话题
              </button>
              {communityTopics.map((topic) => (
                <button
                  key={topic.key}
                  onClick={() => setActiveTopic(topic.key)}
                  className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition lg:w-full lg:text-left ${activeTopic === topic.key ? "bg-red-600 text-white" : "bg-red-50 text-red-950 hover:bg-red-100"}`}
                >
                  {topic.icon} {topic.label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">用户系统</h2>
            <div className="mt-4 grid grid-cols-2 rounded-full bg-amber-50 p-1 text-sm font-semibold">
              <button onClick={() => setAuthMode("register")} className={`min-h-11 rounded-full ${authMode === "register" ? "bg-white text-red-700 shadow-sm" : "text-slate-600"}`}>
                注册
              </button>
              <button onClick={() => setAuthMode("login")} className={`min-h-11 rounded-full ${authMode === "login" ? "bg-white text-red-700 shadow-sm" : "text-slate-600"}`}>
                登录
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <input className="min-h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-red-400" placeholder="邮箱 Email" type="email" />
              <input className="min-h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-red-400" placeholder="密码 Password" type="password" />
              {authMode === "register" ? (
                <button className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
                  <UserPlus size={18} /> 创建个人主页
                </button>
              ) : (
                <button className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
                  <LogIn size={18} /> 登录社区
                </button>
              )}
            </div>
            <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-slate-700">
              <p className="font-semibold text-slate-950">个人主页字段</p>
              <p>头像、昵称、国籍、城市、大学、专业、语言、简介、帖子和交换记录。</p>
            </div>
          </section>
        </aside>

        <div id="feed" className="space-y-6">
          <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                {sampleCommunityProfile.avatar}
              </span>
              <div className="flex-1">
                <textarea
                  value={composerText}
                  onChange={(event) => setComposerText(event.target.value)}
                  className="min-h-28 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none focus:border-red-400 focus:bg-white"
                  placeholder="分享一个问题、一个约饭计划、一次文化体验，或者给后来者一点真实建议..."
                />
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <select value={composerTopic} onChange={(event) => setComposerTopic(event.target.value as CommunityTopicKey)} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
                    {communityTopics.map((topic) => (
                      <option key={topic.key} value={topic.key}>{topic.icon} {topic.label}</option>
                    ))}
                  </select>
                  <select value={composerCity} onChange={(event) => setComposerCity(event.target.value as CommunityCitySlug)} className="min-h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
                    {cityOptions.map((city) => (
                      <option key={city.value} value={city.value}>{city.label}圈子</option>
                    ))}
                  </select>
                  <label className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-red-200 bg-red-50 px-3 text-sm font-semibold text-red-700 hover:bg-red-100">
                    <ImagePlus size={18} />
                    {imageName || "上传图片"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => setImageName(event.target.files?.[0]?.name ?? "")}
                    />
                  </label>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-slate-500">发布后会自动进入对应城市圈子。</p>
                  <button onClick={submitPost} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700">
                    <Send size={18} /> 发布
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold">社区信息流</h2>
                <p className="mt-1 text-sm text-slate-500">按时间倒序浏览，也可以切到热门内容。</p>
              </div>
              <div className="flex rounded-full bg-slate-100 p-1 text-sm font-semibold">
                <button onClick={() => setSortMode("latest")} className={`min-h-11 rounded-full px-4 ${sortMode === "latest" ? "bg-white text-red-700 shadow-sm" : "text-slate-600"}`}>最新</button>
                <button onClick={() => setSortMode("hot")} className={`min-h-11 rounded-full px-4 ${sortMode === "hot" ? "bg-white text-red-700 shadow-sm" : "text-slate-600"}`}>热门</button>
              </div>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              <button onClick={() => setActiveCity("all")} className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${activeCity === "all" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"}`}>
                全部城市
              </button>
              {communityCities.map((city) => (
                <button key={city.slug} onClick={() => setActiveCity(city.slug)} className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${activeCity === city.slug ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"}`}>
                  {city.name}
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            {visiblePosts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-amber-400 font-bold text-white">
                      {post.avatar}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="font-bold">{post.authorName}</p>
                        <p className="text-sm text-slate-500">{post.country}</p>
                        <span className="text-slate-300">·</span>
                        <p className="text-sm text-slate-500">{formatPostTime(post.createdAt)}</p>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                        <span className="rounded-full bg-red-50 px-3 py-1 text-red-700">{topicIcon(post.topic)} {topicLabel(post.topic)}</span>
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800">{post.cityName}圈子</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 whitespace-pre-line text-[15px] leading-7 text-slate-800">{post.content}</p>
                </div>
                {post.image ? (
                  <div className="relative aspect-[16/9] border-y border-slate-100">
                    <Image src={post.image} alt={`${post.cityName} community post`} fill className="object-cover" />
                  </div>
                ) : null}
                <div className="flex items-center gap-5 px-5 py-4 text-sm font-semibold text-slate-500">
                  <button className="inline-flex items-center gap-2 hover:text-red-600"><Heart size={18} /> {post.likes}</button>
                  <button className="inline-flex items-center gap-2 hover:text-red-600"><MessageCircle size={18} /> {post.comments}</button>
                  <button className="inline-flex items-center gap-2 hover:text-red-600"><Camera size={18} /> 分享</button>
                </div>
              </article>
            ))}
          </section>
        </div>

        <aside className="space-y-6">
          <section id="circles" className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">城市圈子</h2>
              <Users size={18} className="text-red-600" />
            </div>
            <div className="mt-4 space-y-4">
              {communityCities.map((city) => {
                const joined = joinedCities.includes(city.slug);
                const event = communityEvents.find((item) => item.citySlug === city.slug);
                return (
                  <div key={city.slug} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                      <Image src={city.image} alt={city.name} fill className="object-cover" />
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="font-bold">{city.name} · {city.enName}</p>
                          <p className="text-sm text-slate-500">{city.members.toLocaleString()} 位成员</p>
                        </div>
                        <button onClick={() => toggleCity(city.slug)} className={`min-h-11 rounded-full px-4 text-sm font-semibold ${joined ? "bg-slate-200 text-slate-700" : "bg-red-600 text-white"}`}>
                          {joined ? "已加入" : "加入"}
                        </button>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{city.tagline}</p>
                      {event ? <p className="mt-2 text-xs font-semibold text-red-700">即将活动：{event.title}</p> : null}
                      <Link href={`${basePath}/community/cities/${city.slug}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-red-700 hover:text-red-800">
                        进入圈子 →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </aside>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-red-600">Exchange beautiful things</p>
            <h2 className="mt-2 text-3xl font-bold">国际物品交换</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              用一个来自家乡的小物件，交换另一个人的故事。它可以是一包咖啡、一张明信片、一件手工艺品，也可以是一段友谊的开始。
            </p>
            <div className="mt-6 grid gap-4">
              {exchangeRequests.map((item) => (
                <article key={item.id} className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold">{item.owner} · {item.country}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-800">{item.city}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6"><span className="font-semibold">我提供：</span>{item.offer}</p>
                  <p className="mt-2 text-sm leading-6"><span className="font-semibold">我想换：</span>{item.wish}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.story}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">交换画廊</h2>
            <p className="mt-3 leading-7 text-slate-600">已经完成的交换，会被记录成温柔的小故事，鼓励更多人把自己的文化带进社区。</p>
            <div className="mt-6 grid gap-4">
              {completedExchangeStories.map((story) => (
                <article key={story.id} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-red-600">{story.people}</p>
                  <h3 className="mt-2 text-xl font-bold">{story.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{story.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ef] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase text-red-600">Offline events</p>
              <h2 className="mt-2 text-3xl font-bold">即将举行的线下活动</h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-600">城市 meetup、语言交换、文化体验和实习分享，让社区从屏幕里走到真实生活里。</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {communityEvents.map((event) => (
              <article key={event.id} className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">{event.type}</span>
                <h3 className="mt-4 text-xl font-bold">{event.title}</h3>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600"><CalendarDays size={17} /> {event.time}</p>
                <p className="mt-2 text-sm text-slate-600">{event.location}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-500">{event.attendees} 人已报名</p>
                  <button className="min-h-11 rounded-full bg-red-600 px-4 text-sm font-bold text-white hover:bg-red-700">报名</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

