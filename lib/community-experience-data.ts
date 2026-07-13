export type CommunityTopicKey =
  | "application"
  | "housing"
  | "food"
  | "travel"
  | "study"
  | "career"
  | "friendship"
  | "culture";

export type CommunityCitySlug = "changsha" | "chengdu" | "beijing" | "xian" | "hangzhou";

export type CommunityPost = {
  id: string;
  authorName: string;
  avatar: string;
  country: string;
  citySlug: CommunityCitySlug;
  cityName: string;
  topic: CommunityTopicKey;
  createdAt: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
};

export const communityTopics: Array<{ key: CommunityTopicKey; label: string; icon: string }> = [
  { key: "application", label: "申请咨询", icon: "📝" },
  { key: "housing", label: "住宿生活", icon: "🏠" },
  { key: "food", label: "美食探店", icon: "🍜" },
  { key: "travel", label: "旅行攻略", icon: "🧭" },
  { key: "study", label: "学习考试", icon: "📚" },
  { key: "career", label: "实习就业", icon: "💼" },
  { key: "friendship", label: "交友情感", icon: "💬" },
  { key: "culture", label: "文化活动", icon: "🏮" }
];

export const communityCities: Array<{
  slug: CommunityCitySlug;
  name: string;
  enName: string;
  members: number;
  image: string;
  tagline: string;
}> = [
  {
    slug: "changsha",
    name: "长沙",
    enName: "Changsha",
    members: 1820,
    image: "/images/home/changsha.jpg",
    tagline: "夜市、媒体、湘江和永远不缺朋友的大学城"
  },
  {
    slug: "chengdu",
    name: "成都",
    enName: "Chengdu",
    members: 1645,
    image: "/images/home/chengdu.jpg",
    tagline: "熊猫、火锅、茶馆和慢下来的生活节奏"
  },
  {
    slug: "beijing",
    name: "北京",
    enName: "Beijing",
    members: 2310,
    image: "/images/home/homepage-hero.jpg",
    tagline: "高校密集、文化厚重，第一次读懂中国的地方"
  },
  {
    slug: "xian",
    name: "西安",
    enName: "Xi'an",
    members: 1260,
    image: "/images/home/xian.jpg",
    tagline: "古都、面食、汉服和青年人的长安夜"
  },
  {
    slug: "hangzhou",
    name: "杭州",
    enName: "Hangzhou",
    members: 1490,
    image: "/images/home/hangzhou.jpg",
    tagline: "西湖、互联网、龙井茶和江南的现代感"
  }
];

export const communityEvents = [
  {
    id: "evt-changsha-language",
    citySlug: "changsha" as CommunityCitySlug,
    title: "岳麓山语言交换野餐",
    time: "周六 15:00",
    location: "长沙 · 岳麓山南门",
    attendees: 48,
    type: "语言交换"
  },
  {
    id: "evt-chengdu-hotpot",
    citySlug: "chengdu" as CommunityCitySlug,
    title: "新生火锅破冰夜",
    time: "周五 19:30",
    location: "成都 · 春熙路附近",
    attendees: 62,
    type: "城市 Meetup"
  },
  {
    id: "evt-beijing-museum",
    citySlug: "beijing" as CommunityCitySlug,
    title: "国家博物馆文化同行",
    time: "周日 10:00",
    location: "北京 · 天安门东",
    attendees: 35,
    type: "文化体验"
  },
  {
    id: "evt-xian-hanfu",
    citySlug: "xian" as CommunityCitySlug,
    title: "大唐不夜城汉服夜拍",
    time: "周六 20:00",
    location: "西安 · 大唐不夜城",
    attendees: 57,
    type: "文化体验"
  },
  {
    id: "evt-hangzhou-startup",
    citySlug: "hangzhou" as CommunityCitySlug,
    title: "留学生互联网实习分享会",
    time: "下周三 18:30",
    location: "杭州 · 滨江",
    attendees: 41,
    type: "实习就业"
  }
];

export const communityPosts: CommunityPost[] = [
  {
    id: "cs-01",
    authorName: "Alina",
    avatar: "A",
    country: "俄罗斯",
    citySlug: "changsha",
    cityName: "长沙",
    topic: "friendship",
    createdAt: "2026-07-13T08:30:00+08:00",
    content: "刚到长沙的同学不要害怕一个人吃饭。五一广场附近很多小店都很适合拼桌，老板会教你怎么点不太辣的版本。这里真的会慢慢变成你的城市。",
    image: "/images/home/changsha.jpg",
    likes: 128,
    comments: 34
  },
  {
    id: "cs-02",
    authorName: "Samuel",
    avatar: "S",
    country: "尼日利亚",
    citySlug: "changsha",
    cityName: "长沙",
    topic: "food",
    createdAt: "2026-07-12T21:05:00+08:00",
    content: "第一次吃臭豆腐之前我拒绝了三次，第四次之后我开始推荐给所有朋友。建议从大学城的小份开始，配冰豆奶，快乐很直接。",
    likes: 96,
    comments: 22
  },
  {
    id: "cs-03",
    authorName: "Mina",
    avatar: "M",
    country: "越南",
    citySlug: "changsha",
    cityName: "长沙",
    topic: "housing",
    createdAt: "2026-07-12T17:40:00+08:00",
    content: "找房优先看地铁和学校班车，长沙夏天很热，通勤少十分钟就是幸福。女生合租可以先约白天看房，问清水电和押金。",
    likes: 74,
    comments: 18
  },
  {
    id: "cs-04",
    authorName: "Kenji",
    avatar: "K",
    country: "日本",
    citySlug: "changsha",
    cityName: "长沙",
    topic: "travel",
    createdAt: "2026-07-11T19:10:00+08:00",
    content: "周末路线：上午湖南省博物馆，下午橘子洲，晚上湘江边散步。城市不大，但节奏很满，一天能把历史和夜生活都摸到一点。",
    likes: 89,
    comments: 16
  },
  {
    id: "cs-05",
    authorName: "Amina",
    avatar: "A",
    country: "加蓬",
    citySlug: "changsha",
    cityName: "长沙",
    topic: "study",
    createdAt: "2026-07-10T13:25:00+08:00",
    content: "医学专业的中文术语一开始很难，我的方法是把病房常用词做成卡片，每天和中国同学互考十分钟。坚持两周就会明显轻松。",
    likes: 58,
    comments: 12
  },
  {
    id: "cs-06",
    authorName: "Diego",
    avatar: "D",
    country: "墨西哥",
    citySlug: "changsha",
    cityName: "长沙",
    topic: "culture",
    createdAt: "2026-07-09T20:20:00+08:00",
    content: "在天心阁参加过一次非遗体验，老师教我们做漆扇。最有意思的是，每个人做出来的纹路都不一样，像把自己的心情留在扇面上。",
    likes: 82,
    comments: 14
  },
  {
    id: "cd-01",
    authorName: "Sofia",
    avatar: "S",
    country: "法国",
    citySlug: "chengdu",
    cityName: "成都",
    topic: "food",
    createdAt: "2026-07-13T07:50:00+08:00",
    content: "成都火锅不用一开始就挑战特辣。点鸳鸯锅，先从微辣开始，再喝一碗冰粉，你会理解为什么大家说这里适合生活。",
    image: "/images/home/chengdu.jpg",
    likes: 141,
    comments: 37
  },
  {
    id: "cd-02",
    authorName: "Lucas",
    avatar: "L",
    country: "巴西",
    citySlug: "chengdu",
    cityName: "成都",
    topic: "application",
    createdAt: "2026-07-12T15:30:00+08:00",
    content: "申请成都的学校时，建议把奖学金材料和专业动机写得具体一点。不要只写喜欢中国，要写你想在中国解决什么问题。",
    likes: 77,
    comments: 19
  },
  {
    id: "cd-03",
    authorName: "Fatima",
    avatar: "F",
    country: "摩洛哥",
    citySlug: "chengdu",
    cityName: "成都",
    topic: "housing",
    createdAt: "2026-07-11T22:00:00+08:00",
    content: "成都租房看起来选择很多，但一定确认能不能办住宿登记。这个对签证和居留许可很重要，别只看装修漂亮。",
    likes: 66,
    comments: 20
  },
  {
    id: "cd-04",
    authorName: "Minh",
    avatar: "M",
    country: "越南",
    citySlug: "chengdu",
    cityName: "成都",
    topic: "friendship",
    createdAt: "2026-07-11T10:15:00+08:00",
    content: "想找羽毛球搭子！我在川大附近，周三和周末都可以。水平普通，但愿意请第一杯茶。",
    likes: 52,
    comments: 25
  },
  {
    id: "cd-05",
    authorName: "Nora",
    avatar: "N",
    country: "德国",
    citySlug: "chengdu",
    cityName: "成都",
    topic: "career",
    createdAt: "2026-07-10T16:45:00+08:00",
    content: "成都游戏、设计和新媒体岗位不少。留学生找实习可以准备一份中文简历，哪怕中文不完美，也会让HR看到你的诚意。",
    likes: 84,
    comments: 17
  },
  {
    id: "cd-06",
    authorName: "Tariq",
    avatar: "T",
    country: "巴基斯坦",
    citySlug: "chengdu",
    cityName: "成都",
    topic: "travel",
    createdAt: "2026-07-09T12:05:00+08:00",
    content: "第一次去青城山，发现成都附近的自然很容易抵达。坐高铁和地铁组合，周末也能逃离城市。",
    likes: 61,
    comments: 11
  },
  {
    id: "bj-01",
    authorName: "Michael",
    avatar: "M",
    country: "英国",
    citySlug: "beijing",
    cityName: "北京",
    topic: "culture",
    createdAt: "2026-07-13T09:20:00+08:00",
    content: "我来北京之前以为文化会很严肃，来了以后发现胡同里的大爷大妈比任何人都爱聊天。中国文化不只在博物馆，在早餐摊旁边。",
    image: "/images/home/homepage-hero.jpg",
    likes: 156,
    comments: 42
  },
  {
    id: "bj-02",
    authorName: "Yuna",
    avatar: "Y",
    country: "韩国",
    citySlug: "beijing",
    cityName: "北京",
    topic: "application",
    createdAt: "2026-07-12T18:35:00+08:00",
    content: "北京高校多，申请竞争也强。推荐提前整理成绩单翻译、公证、推荐信，别等网申开放才开始找老师签字。",
    likes: 91,
    comments: 28
  },
  {
    id: "bj-03",
    authorName: "Omar",
    avatar: "O",
    country: "埃及",
    citySlug: "beijing",
    cityName: "北京",
    topic: "study",
    createdAt: "2026-07-11T14:55:00+08:00",
    content: "HSK备考建议找一个固定语伴。北京的语言交换活动很多，但真正有用的是每周固定见面，不要只加微信不练习。",
    likes: 73,
    comments: 19
  },
  {
    id: "bj-04",
    authorName: "Grace",
    avatar: "G",
    country: "肯尼亚",
    citySlug: "beijing",
    cityName: "北京",
    topic: "career",
    createdAt: "2026-07-10T11:20:00+08:00",
    content: "北京的国际组织、研究机构、科技公司资源很多。参加讲座时带一页简历和二维码，机会经常来自一次聊天。",
    likes: 88,
    comments: 13
  },
  {
    id: "bj-05",
    authorName: "Anya",
    avatar: "A",
    country: "俄罗斯",
    citySlug: "beijing",
    cityName: "北京",
    topic: "housing",
    createdAt: "2026-07-09T22:45:00+08:00",
    content: "北京通勤距离很重要。地图上看起来不远，早晚高峰可能完全不同。看房前一定用通勤时间搜索学校地址。",
    likes: 69,
    comments: 21
  },
  {
    id: "bj-06",
    authorName: "Carlos",
    avatar: "C",
    country: "墨西哥",
    citySlug: "beijing",
    cityName: "北京",
    topic: "food",
    createdAt: "2026-07-08T19:30:00+08:00",
    content: "北京烤鸭当然要试，但我更推荐早餐：豆腐脑、包子、煎饼。一个城市的性格，早上最容易看见。",
    likes: 81,
    comments: 15
  },
  {
    id: "xa-01",
    authorName: "Elif",
    avatar: "E",
    country: "土耳其",
    citySlug: "xian",
    cityName: "西安",
    topic: "travel",
    createdAt: "2026-07-13T06:40:00+08:00",
    content: "西安适合把历史穿在身上。晚上去大唐不夜城，街上很多人穿汉服，你不会觉得自己是游客，而像进入了一个共同的梦。",
    image: "/images/home/xian.jpg",
    likes: 133,
    comments: 31
  },
  {
    id: "xa-02",
    authorName: "Ravi",
    avatar: "R",
    country: "印度",
    citySlug: "xian",
    cityName: "西安",
    topic: "food",
    createdAt: "2026-07-12T20:10:00+08:00",
    content: "西安的碳水非常友好。面、馍、凉皮都适合学生预算。清真餐厅也多，很多国际学生会觉得适应更容易。",
    likes: 104,
    comments: 26
  },
  {
    id: "xa-03",
    authorName: "Lina",
    avatar: "L",
    country: "哈萨克斯坦",
    citySlug: "xian",
    cityName: "西安",
    topic: "application",
    createdAt: "2026-07-11T09:05:00+08:00",
    content: "申请材料里的学习计划最好写清楚你为什么选择西安。丝绸之路、历史、工程教育都可以成为很自然的理由。",
    likes: 64,
    comments: 18
  },
  {
    id: "xa-04",
    authorName: "Jonas",
    avatar: "J",
    country: "瑞典",
    citySlug: "xian",
    cityName: "西安",
    topic: "study",
    createdAt: "2026-07-10T14:10:00+08:00",
    content: "在西安学中文很有意思，因为你会同时遇到普通话、陕西话和很多历史词汇。不要怕听不懂，先学会问“这个怎么说”。",
    likes: 55,
    comments: 10
  },
  {
    id: "xa-05",
    authorName: "Maryam",
    avatar: "M",
    country: "伊朗",
    citySlug: "xian",
    cityName: "西安",
    topic: "culture",
    createdAt: "2026-07-09T17:15:00+08:00",
    content: "我在书院门第一次试着写毛笔字。写得很歪，但老师说“先有心，再有形”。这句话我记了很久。",
    likes: 78,
    comments: 12
  },
  {
    id: "xa-06",
    authorName: "Victor",
    avatar: "V",
    country: "加纳",
    citySlug: "xian",
    cityName: "西安",
    topic: "friendship",
    createdAt: "2026-07-08T21:00:00+08:00",
    content: "有没有西安足球局？我在雁塔区，周末想踢球，也可以一起吃面。",
    likes: 47,
    comments: 23
  },
  {
    id: "hz-01",
    authorName: "Anna",
    avatar: "A",
    country: "波兰",
    citySlug: "hangzhou",
    cityName: "杭州",
    topic: "travel",
    createdAt: "2026-07-13T10:05:00+08:00",
    content: "杭州的好处是，你可以上午在图书馆写论文，傍晚去西湖边走一圈，情绪就被重新整理好了。",
    image: "/images/home/hangzhou.jpg",
    likes: 119,
    comments: 29
  },
  {
    id: "hz-02",
    authorName: "Hassan",
    avatar: "H",
    country: "马来西亚",
    citySlug: "hangzhou",
    cityName: "杭州",
    topic: "career",
    createdAt: "2026-07-12T13:55:00+08:00",
    content: "杭州互联网公司很多，建议国际学生把作品集做成中英双语。项目不一定大，但要能说明你解决了什么问题。",
    likes: 97,
    comments: 18
  },
  {
    id: "hz-03",
    authorName: "Camila",
    avatar: "C",
    country: "哥伦比亚",
    citySlug: "hangzhou",
    cityName: "杭州",
    topic: "application",
    createdAt: "2026-07-11T16:20:00+08:00",
    content: "杭州的学校很适合想学数字经济、设计、传媒的同学。写申请时可以把城市产业和专业目标连接起来。",
    likes: 70,
    comments: 16
  },
  {
    id: "hz-04",
    authorName: "Linh",
    avatar: "L",
    country: "越南",
    citySlug: "hangzhou",
    cityName: "杭州",
    topic: "housing",
    createdAt: "2026-07-10T18:50:00+08:00",
    content: "杭州租房要注意雨季和通风。看房时别只看白天照片，晚上去一次，看看周边是不是安静、安全、好回学校。",
    likes: 63,
    comments: 14
  },
  {
    id: "hz-05",
    authorName: "Ethan",
    avatar: "E",
    country: "美国",
    citySlug: "hangzhou",
    cityName: "杭州",
    topic: "study",
    createdAt: "2026-07-09T11:35:00+08:00",
    content: "中文演讲课救了我的口语。每周三分钟，主题从龙井茶到移动支付，刚开始紧张，后来发现这就是了解中国的方式。",
    likes: 59,
    comments: 9
  },
  {
    id: "hz-06",
    authorName: "Sara",
    avatar: "S",
    country: "意大利",
    citySlug: "hangzhou",
    cityName: "杭州",
    topic: "food",
    createdAt: "2026-07-08T12:15:00+08:00",
    content: "杭州菜比我想象中温柔。第一次吃东坡肉觉得像一个城市在说：别急，慢慢来。",
    likes: 68,
    comments: 13
  }
];

export const exchangeRequests = [
  {
    id: "ex-01",
    owner: "Mina",
    country: "越南",
    city: "长沙",
    offer: "越南手工咖啡滤杯和一包家乡咖啡",
    wish: "一本中国同学推荐的中文小说",
    story: "我想用家乡早晨的味道，换一个中国朋友眼里真正好看的故事。"
  },
  {
    id: "ex-02",
    owner: "Lucas",
    country: "巴西",
    city: "成都",
    offer: "巴西足球队围巾",
    wish: "成都本地茶馆的杯垫或明信片",
    story: "足球让我认识很多朋友，也想把成都茶馆的慢生活带回宿舍墙上。"
  },
  {
    id: "ex-03",
    owner: "Elif",
    country: "土耳其",
    city: "西安",
    offer: "土耳其蓝眼睛护身符",
    wish: "一件小型汉服配饰",
    story: "两个古老文明的小物件放在一起，像一场很小但很温柔的丝路重逢。"
  },
  {
    id: "ex-04",
    owner: "Grace",
    country: "肯尼亚",
    city: "北京",
    offer: "肯尼亚手工串珠手链",
    wish: "一支毛笔或书法练习纸",
    story: "我想把妈妈教我的颜色，换成中国老师教我的第一笔横。"
  },
  {
    id: "ex-05",
    owner: "Hassan",
    country: "马来西亚",
    city: "杭州",
    offer: "马来西亚香料小套装",
    wish: "一份龙井茶或茶叶罐",
    story: "味道是最快的朋友。希望交换之后，我们可以一起做饭、泡茶、聊天。"
  }
];

export const completedExchangeStories = [
  {
    id: "done-01",
    title: "咖啡换书法",
    people: "越南 Mina × 中国 林同学",
    summary: "一包越南咖啡换来一套毛笔字帖，两个人后来每周固定练中文和越南语。"
  },
  {
    id: "done-02",
    title: "围巾换茶盏",
    people: "巴西 Lucas × 成都 阿杰",
    summary: "足球围巾挂进了茶馆，茶盏被带回宿舍，交换结束后他们约了第一场火锅。"
  },
  {
    id: "done-03",
    title: "明信片换手链",
    people: "肯尼亚 Grace × 北京 小雨",
    summary: "一张故宫雪景明信片，换来一串手工珠链，两个国家的颜色留在同一张照片里。"
  }
];

export const sampleCommunityProfile = {
  name: "Alina Petrova",
  avatar: "A",
  country: "俄罗斯",
  city: "长沙",
  university: "中南大学",
  major: "数字媒体设计",
  languages: "俄语 / 英语 / 中文",
  bio: "喜欢书法、滑板和骑摩托探索湖南乡村。希望帮后来中国的同学少走一点弯路。"
};
