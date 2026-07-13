import { ButtonLink } from "@/components/common/button-link";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { localePrefix } from "@/lib/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { BookOpenText, CalendarHeart, Coffee, Compass, Globe2, HeartHandshake, Languages, MessageCircleHeart, PenLine, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = buildMetadata({
  title: "中国文化体验 — SilkStudy",
  description: "在申请大学之前，先爱上中国。了解中国的美食、节日、历史、艺术和青年文化——5000年的故事，正等着你的篇章。",
  path: "/culture",
  keywords: [
    "中国文化体验",
    "中国留学",
    "Chinese culture",
    "study in China",
    "learn Chinese",
    "international students in China"
  ],
  image: "/images/student-city-life.png"
});

const heroImage = "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=2200&q=85";
const sectionImages = [
  "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=1200&q=80"
];

const charms = [
  {
    title: "🏮 第一重：历史的重量 — 活的文明史",
    body: "不是书本里死去的朝代，而是你身边呼吸的遗产。在西安，你脚下踩着的土地，唐朝诗人也踩过；在北京，故宫的红墙不仅是风景，更是600年的见证；在杭州，西湖的水面倒映着苏轼凝视过的月光。在这里，历史不是“过去”，而是你留学生活的一部分。",
    image: sectionImages[0]
  },
  {
    title: "🍜 第二重：生活的温度 — 市井烟火气",
    body: "中国的文化不在博物馆里，在街头巷尾。凌晨两点的夜市，烧烤摊前围坐的年轻人；清晨六点的公园，打太极的老人和跳广场舞的阿姨；茶馆里，陌生人能因为一壶茶聊成朋友。这是一座“不装”的文化——热闹、真实、让人上瘾。",
    image: sectionImages[1]
  },
  {
    title: "🌏 第三重：未来的高度 — 传统与现代的碰撞",
    body: "5000年的文明，今天正在和5G、高铁、AI碰撞出新的火花。穿上汉服逛商场，用手机支付在百年老店买糕点，在古老的城墙下听电子音乐。中国不是“古老”的，也不是“新潮”的——它是两者的奇妙融合。",
    image: sectionImages[2]
  }
];

const keywords: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: HeartHandshake, title: "和合", body: "中国文化的核心哲学。人与自然和合、人与人和合、传统与现代和合。不追求对抗，而追求平衡。你会在中国人的相处方式、建筑风格、饮食搭配中处处感受到这种“和”。" },
  { icon: Coffee, title: "生活", body: "在中国，“吃了吗？”是问候，“热乎的”是最高评价。中国人把对生活的热爱倾注在一日三餐里——这不是“饮食文化”，这就是生活本身。" },
  { icon: Languages, title: "汉字", body: "每一个汉字都是一幅画、一个故事。“家”是房子里有一头猪，“好”是女人抱着孩子。学中文不只是学一门语言，更是开始用中国人的眼睛看世界。" },
  { icon: Compass, title: "功夫", body: "功夫不只是打架，而是一种修行——是身体的哲学，是千万次重复后的优雅。真正的“功夫”也藏在每一个中国人的日常里：耐心、专注、不放弃。" },
  { icon: Sparkles, title: "国潮", body: "年轻人正在重新定义“中国风”。汉服复兴、国货崛起、中国设计走向世界——这不是怀旧，是创造。传统文化正在被穿在身上、用进生活。" },
  { icon: Globe2, title: "面面俱到", body: "中国很大，大到每个角落都有自己的方言、食物和脾气。你不可能真正“走完”中国，但你每次出发，都会发现一个新世界。" }
];

const experiences = [
  ["✍️ 学写毛笔字", "大学文化工作坊、社区活动", "握笔的手在抖，但写出第一个汉字时，想拍照发给妈妈"],
  ["🥟 包饺子", "春节、大学活动、寄宿家庭", "包了20个，只有3个没破皮，但吃的时候觉得这是世界上最好吃的饺子"],
  ["🏮 过春节", "全中国（1-2月）", "被中国朋友拉去家里吃年夜饭、收红包、看烟花——发现你多了一大家人"],
  ["🥋 练功夫", "武馆、大学社团、公园清晨", "你以为自己能飞檐走壁，结果第一个动作是站了20分钟马步"],
  ["👘 穿汉服", "西安大唐不夜城、杭州西湖、南京夫子庙", "走在街上有人叫你“姑娘”“公子”，那一刻你穿越了"],
  ["🌃 逛夜市", "每个城市都有", "从头吃到尾，花不到100块，但快乐值拉满"]
];

const studentQuotes = [
  {
    quote: "我来中国之前，以为这里的人很严肃、很保守。来了之后才发现——他们比谁都爱笑，比谁都爱热闹，比我认识的任何人都更懂得享受生活。",
    name: "迈克尔",
    meta: "英国，在北京留学"
  },
  {
    quote: "我第一次过春节，被中国朋友邀请去她家。她妈妈包了三种馅的饺子，虽然我一个都吃不下了，但她说‘再吃一个，这个是幸运的’——那是我吃过最撑的一餐，也是最温暖的一餐。",
    name: "安娜",
    meta: "俄罗斯，在长春留学"
  },
  {
    quote: "在中国，我学会了‘慢慢来’——事情总会解决，饭总会做好，朋友总会认识。这种心态让我整个人都放松了。",
    name: "索菲亚",
    meta: "法国，在成都留学"
  },
  {
    quote: "中国不止一种味道。四川是麻辣的，广东是清淡的，西安是面香的，上海是甜糯的——用舌头旅行中国，是留学生最奢侈的福利。",
    name: "卡洛斯",
    meta: "墨西哥，在广州留学"
  }
];

export default async function CulturePage() {
  const locale = await getCurrentLocale();
  const prefix = localePrefix(locale);
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;

  return (
    <main className="bg-[#fff8ee] text-[#281815]">
      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-[#120b09] text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroImage} alt="中国山水与历史文化意象" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120b09]/90 via-[#120b09]/62 to-[#120b09]/25" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fff8ee] to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border-l-2 border-[#d6a441] pl-3 text-sm font-bold uppercase tracking-wide text-[#ffd98a]">
              <Sparkles size={16} aria-hidden="true" />
              中国文化体验
            </p>
            <h1 className="mt-7 max-w-5xl font-serif text-5xl font-black leading-tight tracking-normal sm:text-6xl lg:text-7xl">
              5000年的故事，正等着你的篇章
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[#fff3dc]">
              文化不是博物馆里的展品，而是你每天呼吸的空气。在你决定去哪座城市之前，先感受中国的文化心跳。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={localize("/cities")}>探索城市 →</ButtonLink>
              <ButtonLink href={localize("/consultation")} variant="secondary">了解如何申请 →</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[#b45309]">Three Layers</p>
            <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-[#281815] sm:text-5xl">中国文化的三重魅力</h2>
            <p className="mt-5 text-lg leading-8 text-[#6d4b3f]">它不是游客相册里的背景，而是留学生每天会遇见、会参与、会慢慢爱上的生活方式。</p>
          </div>
          <div className="mt-12 grid gap-7">
            {charms.map((item, index) => (
              <article key={item.title} className={`grid overflow-hidden rounded-lg border border-[#ead8bd] bg-white shadow-sm lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="min-h-[310px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <h3 className="font-serif text-3xl font-black leading-tight text-[#281815]">{item.title}</h3>
                  <p className="mt-5 text-base leading-8 text-[#624438]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2a1712] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[#ffd98a]">Six Words</p>
            <h2 className="mt-3 font-serif text-4xl font-black leading-tight sm:text-5xl">六个文化关键词</h2>
            <p className="mt-5 text-lg leading-8 text-[#f6dfc0]">如果你想真正理解中国，可以先从这些词开始。它们会在语言、餐桌、街道、节日和朋友关系里反复出现。</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {keywords.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/8 p-6 backdrop-blur">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#d6a441] text-[#281815]">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#f6dfc0]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <CalendarHeart size={34} className="text-[#b45309]" aria-hidden="true" />
              <h2 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-5xl">来到这里，你会亲手体验……</h2>
              <p className="mt-5 text-lg leading-8 text-[#6d4b3f]">文化不是被讲懂的，而是被你亲手揉进饺子皮、写进毛笔字、穿进汉服、吃进深夜的热汤里。</p>
            </div>
            <div className="overflow-hidden rounded-lg border border-[#ead8bd] bg-white shadow-sm">
              {experiences.map(([name, where, feeling]) => (
                <article key={name} className="grid gap-3 border-b border-[#ead8bd] p-5 last:border-b-0 md:grid-cols-[0.75fr_0.9fr_1.35fr]">
                  <h3 className="font-serif text-xl font-black text-[#281815]">{name}</h3>
                  <p className="text-sm font-bold leading-6 text-[#9a5b16]">{where}</p>
                  <p className="text-sm leading-6 text-[#624438]">{feeling}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <MessageCircleHeart size={34} className="text-[#b45309]" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-5xl">留学生说文化</h2>
            <p className="mt-5 text-lg leading-8 text-[#6d4b3f]">真正打动人的，往往不是宏大的词，而是一个朋友、一顿饭、一次节日邀请，和忽然发现“我也属于这里”的瞬间。</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {studentQuotes.map((item) => (
              <blockquote key={item.name} className="rounded-lg border border-[#ead8bd] bg-[#fff8ee] p-6">
                <BookOpenText size={24} className="text-[#b45309]" aria-hidden="true" />
                <p className="mt-4 text-base leading-8 text-[#3c2923]">“{item.quote}”</p>
                <footer className="mt-5 text-sm font-bold text-[#9a5b16]">— {item.name}，{item.meta}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#2a1712] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,164,65,0.25),transparent_35%),linear-gradient(135deg,rgba(120,31,18,0.7),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#ffd98a]">
              <PenLine size={16} aria-hidden="true" />
              Start Your Chapter
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight sm:text-5xl">当你准备好了，中国有许多座城市在等你。</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#f6dfc0]">每个城市都有自己的脾性、味道和夜生活。你不需要一次走完它们——你只需要选一个，住下来，然后慢慢探索。</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href={localize("/cities")} variant="secondary">探索城市 →</ButtonLink>
            <ButtonLink href={localize("/consultation")} variant="ghost">了解如何申请 →</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
