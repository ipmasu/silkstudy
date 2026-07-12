export type CityVisualGalleryItem = {
  title: string;
  zhTitle: string;
  image: string;
  alt: string;
  zhAlt: string;
  note: string;
  zhNote: string;
  sourceUrl?: string;
};

type CityVisualFallback = {
  name: string;
  zhName: string;
  provinceName: string;
  zhProvinceName: string;
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  tourism: string;
  zhTourism: string;
};

type WikipediaMediaItem = {
  title?: string;
  type?: string;
  showInGallery?: boolean;
  caption?: {
    text?: string;
  };
  srcset?: Array<{
    src?: string;
    scale?: string;
  }>;
};

type CommonsSearchPage = {
  title?: string;
  imageinfo?: Array<{
    thumburl?: string;
    url?: string;
    descriptionurl?: string;
    mime?: string;
    extmetadata?: Record<string, { value?: string }>;
  }>;
};

const mediaListEndpoint = (title: string) => `https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(title)}`;
const commonsSearchEndpoint = (query: string) => {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrnamespace: "6",
    gsrlimit: "18",
    gsrsearch: query,
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    iiurlwidth: "1200"
  });

  return `https://commons.wikimedia.org/w/api.php?${params.toString()}`;
};
const commonsPage = (title: string) => `https://commons.wikimedia.org/wiki/${title.replaceAll(" ", "_")}`;
const commonsImage = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1200`;

const unsuitableImagePattern = /\b(map|locator|location|administrative|division|flag|emblem|logo|seal|icon|diagram|chart|linemap|route|population|blank|montage|collage|floods?|disasters?|storms?|hospitals?|maternity|clinics?|temples?|monaster(?:y|ies)|cemeter(?:y|ies)|graves?|tombs?|mausoleums?|ruins?|construction|demolition|industrial|factory|school|court|government|bureau|police|prison|detention|radio and television station|television station building)\b|\bin china\b|\bin [a-z\s]+ province\b/i;
const archivalImagePattern = /\b(postcard|archive|archival|old|historic photograph|historical photo|vintage|black and white|black-white|blackwhite|monochrome|grayscale|greyscale|b&w|bw photo|hsinking|manchukuo|manchu air|tianxin pavilion|tianxin ge)\b/i;
const yearPattern = /\b(18\d{2}|19\d{2}|20\d{2})\b/g;

const cityMediaAliases: Record<string, string[]> = {
  changsha: ["wuyi square", "taiping street", "juzizhou", "orange isle", "yuelu mountain", "hunan university", "changsha ifs"],
  guangzhou: ["canton"],
  hohhot: ["huhehaote"],
  xian: ["xian", "xi an"],
  urumqi: ["urumchi", "ueruemqi"]
};

const cityModernSearchTerms: Record<string, string[]> = {
  changsha: [
    "Changsha IFS",
    "Wuyi Square Changsha",
    "Taiping Street Changsha",
    "Juzizhou Changsha",
    "Orange Isle Changsha",
    "Yuelu Mountain Changsha",
    "Hunan University Changsha"
  ],
  suzhou: [
    "Suzhou Jinji Lake night",
    "Suzhou Pingjiang Road",
    "Suzhou Shantang Street night",
    "Suzhou Humble Administrator Garden",
    "Suzhou Museum",
    "Suzhou Industrial Park skyline"
  ],
  fuzhou: [
    "Fuzhou Sanfang Qixiang",
    "Fuzhou Yantai Mountain",
    "Fuzhou Min River night",
    "Fuzhou Strait Culture and Art Centre",
    "Fuzhou Gushan",
    "Fuzhou Daming Food Street"
  ],
  tianjin: [
    "Tianjin Haihe night",
    "Tianjin Italian Style Town",
    "Tianjin Wudadao",
    "Tianjin Eye night",
    "Tianjin Binhai Library",
    "Tianjin Jinwan Square"
  ],
  harbin: [
    "Harbin Central Street night",
    "Harbin Saint Sophia Cathedral",
    "Harbin Songhua River",
    "Harbin Ice and Snow World",
    "Harbin Grand Theatre",
    "Harbin Sun Island"
  ],
  guilin: [
    "Guilin Li River",
    "Guilin Elephant Trunk Hill",
    "Yangshuo West Street night",
    "Guilin Two Rivers and Four Lakes",
    "Xingping Guilin",
    "Guilin karst landscape"
  ],
  shenzhen: [
    "Shenzhen skyline",
    "Shenzhen Bay Park",
    "Shenzhen Talent Park",
    "Shenzhen Ping An Finance Center",
    "Shenzhen OCT Loft",
    "Shenzhen Nantou Ancient City"
  ],
  taiyuan: [
    "Taiyuan Fen River night",
    "Taiyuan Bell Tower Street",
    "Taiyuan Shanxi Museum",
    "Taiyuan Jinci Temple",
    "Taiyuan Food Street",
    "Taiyuan skyline"
  ],
  zhengzhou: [
    "Zhengzhou Erqi Square",
    "Zhengzhou Big Corn building",
    "Zhengzhou CBD night",
    "Henan Museum Zhengzhou",
    "Zhengzhou Yellow River scenic area",
    "Zhengzhou Dehua Street"
  ]
};

const fallbackRealImages = [
  {
    file: "WestLake_-_Hangzhou.jpg",
    title: "Lakefront city life",
    zhTitle: "湖畔城市生活",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:WestLake_-_Hangzhou.jpg"
  },
  {
    file: "Canton-Tower-001.jpg",
    title: "Modern skyline",
    zhTitle: "现代城市天际线",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Canton-Tower-001.jpg"
  },
  {
    file: "The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg",
    title: "Classical garden",
    zhTitle: "古典园林",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_(37825378061).jpg"
  },
  {
    file: "Young_Chengdu_panda.jpg",
    title: "Nature and wildlife",
    zhTitle: "自然与动物记忆",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Chengdu_panda.jpg"
  },
  {
    file: "Xi%27an_City_Wall_%2848696360238%29.jpg",
    title: "Historic city wall",
    zhTitle: "古城墙步行体验",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_City_Wall_(48696360238).jpg"
  },
  {
    file: "Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg",
    title: "Coastal city view",
    zhTitle: "海滨城市视角",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Qingdao_-_Drone_view_city_with_skyline_(Unsplash).jpg"
  }
];

type CuratedGallerySeed = {
  title: string;
  zhTitle: string;
  file: string;
  alt: string;
  zhAlt: string;
  note: string;
  zhNote: string;
};

const curatedSourceUrl = (file: string) => commonsPage(`File:${file}`);

const cityGalleryBatch = (items: CuratedGallerySeed[]): CityVisualGalleryItem[] =>
  items.map((item) => ({
    title: item.title,
    zhTitle: item.zhTitle,
    image: commonsImage(item.file),
    alt: item.alt,
    zhAlt: item.zhAlt,
    note: item.note,
    zhNote: item.zhNote,
    sourceUrl: curatedSourceUrl(item.file)
  }));

type ImageMood = "skyline" | "arrival" | "campus" | "nature" | "street" | "heritage" | "food" | "daily";

function normalizeImageUrl(src: string) {
  return src.startsWith("//") ? `https:${src}` : src;
}

const curatedCityVisualGalleries: Record<string, CityVisualGalleryItem[]> = {
  suzhou: cityGalleryBatch([
    {
      title: "Jinji Lake skyline",
      zhTitle: "苏州 · 金鸡湖天际线",
      file: "Jinji Lake, Suzhou Jiangsu.jpg",
      alt: "Jinji Lake skyline in Suzhou",
      zhAlt: "苏州金鸡湖城市天际线",
      note: "Jinji Lake shows the modern side of Suzhou: lake walks, restaurants, concerts, shopping, and a metropolitan night rhythm beside Jiangnan elegance.",
      zhNote: "金鸡湖呈现苏州的现代一面：湖畔散步、餐厅、演出、购物，以及江南雅致旁边的都市夜节奏。"
    },
    {
      title: "Gate to the East and Suzhou Center",
      zhTitle: "苏州 · 东方之门与苏州中心",
      file: "Jinji Lake Bridge, Gate to the East, and Suzhou Center.jpg",
      alt: "Gate to the East and Suzhou Center by Jinji Lake",
      zhAlt: "金鸡湖畔东方之门与苏州中心",
      note: "This is the Suzhou international students meet after class: transport, malls, lakeside lights, and a city that can be both classical and global.",
      zhNote: "这是留学生下课后会遇见的苏州：交通、商场、湖边灯光，以及一座既古典又国际化的城市。"
    },
    {
      title: "Pingjiang Road riverside",
      zhTitle: "苏州 · 平江路河边",
      file: "Riverside of Pingjiang Road, Gusu, Suzhou, Jiangsu, China, 215000.jpg",
      alt: "Riverside scenery on Pingjiang Road in Suzhou",
      zhAlt: "苏州平江路河边景致",
      note: "Pingjiang Road is a soft first lesson in Jiangnan life: water, bridges, signs, snacks, tea, and local conversations.",
      zhNote: "平江路是进入江南生活的温柔第一课：水、桥、招牌、小吃、茶和本地人的日常对话。"
    },
    {
      title: "Pingjiang Road gate",
      zhTitle: "苏州 · 平江路入口",
      file: "Gate of Pingjiang Road, Suzhou.jpg",
      alt: "Gate of Pingjiang Road in Suzhou",
      zhAlt: "苏州平江路入口",
      note: "For students, old streets like this make Chinese culture less distant and more walkable.",
      zhNote: "对学生来说，这样的老街会让中国文化不再遥远，而是可以一步步走进去。"
    },
    {
      title: "Shantang River",
      zhTitle: "苏州 · 山塘河",
      file: "2017-04-17 Shantang River, Suzhou 02.jpg",
      alt: "Shantang River in Suzhou",
      zhAlt: "苏州山塘河景观",
      note: "Shantang is a good night-walk route for students who want lights, folk music, snacks, and old-city atmosphere.",
      zhNote: "山塘适合喜欢灯光、民谣、小吃和老城氛围的学生夜游。"
    },
    {
      title: "Humble Administrator's Garden",
      zhTitle: "苏州 · 拙政园",
      file: "The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg",
      alt: "Humble Administrator's Garden in Suzhou",
      zhAlt: "苏州拙政园",
      note: "Suzhou gardens help students understand Chinese aesthetics through space, water, framing, restraint, and quiet attention.",
      zhNote: "苏州园林让学生通过空间、水、框景、克制和安静的注意力理解中国审美。"
    }
  ]),
  fuzhou: cityGalleryBatch([
    {
      title: "Three Lanes and Seven Alleys main street",
      zhTitle: "福州 · 三坊七巷主街",
      file: "Fuzhou Three Lanes and Seven Alleys Mainstreet.jpg",
      alt: "Three Lanes and Seven Alleys main street in Fuzhou",
      zhAlt: "福州三坊七巷主街",
      note: "Sanfang Qixiang gives Fuzhou a walkable cultural heart: old houses, museums, cafes, snacks, and everyday city texture.",
      zhNote: "三坊七巷给福州一个可以步行进入的文化中心：老宅、博物馆、咖啡、小吃和日常城市肌理。"
    },
    {
      title: "Three Lanes and Seven Alleys at night",
      zhTitle: "福州 · 三坊七巷夜色",
      file: "Fuzhou Three Lanes and Seven Alleys Nightview.jpg",
      alt: "Night view of Three Lanes and Seven Alleys in Fuzhou",
      zhAlt: "福州三坊七巷夜景",
      note: "At night the old lanes become softer, perfect for students who like history without losing cafes and city lights.",
      zhNote: "夜里老巷会变得更柔软，适合喜欢历史但也想要咖啡和城市灯光的学生。"
    },
    {
      title: "Min River city view",
      zhTitle: "福州 · 闽江城市风景",
      file: "Fuzhou Minjiang River.jpg",
      alt: "Min River in Fuzhou",
      zhAlt: "福州闽江风景",
      note: "The Min River gives students an easy evening route for walks, photos, river wind, and low-cost social life.",
      zhNote: "闽江给学生一条容易抵达的傍晚路线：散步、拍照、吹江风，也低成本地建立社交生活。"
    },
    {
      title: "Yantai Mountain",
      zhTitle: "福州 · 烟台山",
      file: "Fuzhou Yantai Mountain.jpg",
      alt: "Yantai Mountain area in Fuzhou",
      zhAlt: "福州烟台山片区",
      note: "Yantai Mountain mixes old buildings, cafes, small exhibitions, and a youthful coastal-city mood.",
      zhNote: "烟台山把老建筑、咖啡、小展览和年轻的滨海城市气质放在一起。"
    },
    {
      title: "Strait Culture and Art Centre",
      zhTitle: "福州 · 海峡文化艺术中心",
      file: "Fuzhou Strait Culture and Art Centre.jpg",
      alt: "Fuzhou Strait Culture and Art Centre",
      zhAlt: "福州海峡文化艺术中心",
      note: "Modern cultural venues show that Fuzhou is not only old lanes; it is also performance, design, and public life.",
      zhNote: "现代文化场馆说明福州不只有老巷，也有演出、设计和公共生活。"
    },
    {
      title: "Gushan mountain route",
      zhTitle: "福州 · 鼓山路线",
      file: "Gushan Fuzhou.jpg",
      alt: "Gushan mountain in Fuzhou",
      zhAlt: "福州鼓山",
      note: "Gushan gives students a green weekend option close to the city, useful after exam weeks and intensive language study.",
      zhNote: "鼓山给学生一个离城市很近的绿色周末选择，适合考试周或密集中语学习之后去放松。"
    }
  ]),
  tianjin: cityGalleryBatch([
    {
      title: "Jinwan Plaza and Haihe River",
      zhTitle: "天津 · 津湾广场与海河",
      file: "Jinwan Plaza, Haihe River, Tianjin.jpg",
      alt: "Jinwan Plaza and Haihe River in Tianjin",
      zhAlt: "天津津湾广场与海河",
      note: "The Haihe riverfront gives Tianjin its most romantic first impression: bridges, boats, lights, and old buildings.",
      zhNote: "海河沿岸给天津最浪漫的第一印象：桥、船、灯光和老建筑。"
    },
    {
      title: "Haihe downtown",
      zhTitle: "天津 · 海河市中心",
      file: "Tianjin Haihe river downtown.jpg",
      alt: "Downtown Tianjin along the Haihe River",
      zhAlt: "天津海河市中心景观",
      note: "For students, a river that runs through the city means daily walks do not need to cost money.",
      zhNote: "对学生来说，一条穿城而过的河意味着日常散步不必花钱。"
    },
    {
      title: "Wudadao neighborhood",
      zhTitle: "天津 · 五大道街区",
      file: "Tianjin Wudadao.jpg",
      alt: "Wudadao historic district in Tianjin",
      zhAlt: "天津五大道历史街区",
      note: "Wudadao makes Tianjin useful for architecture, design, history, photography, and slow city walks.",
      zhNote: "五大道让天津适合建筑、设计、历史、摄影和慢速 citywalk。"
    },
    {
      title: "Italian Style Town",
      zhTitle: "天津 · 意式风情区",
      file: "Tianjin Italian Style Town.jpg",
      alt: "Italian Style Town in Tianjin",
      zhAlt: "天津意式风情区",
      note: "Tianjin's old international streets help foreign students feel that the city has always known how to meet the world.",
      zhNote: "天津的老国际街区会让外国学生感觉到，这座城市一直知道如何与世界相遇。"
    },
    {
      title: "Tianjin Eye",
      zhTitle: "天津 · 天津之眼",
      file: "Tianjin Eye 2015.jpg",
      alt: "Tianjin Eye ferris wheel",
      zhAlt: "天津之眼摩天轮",
      note: "The Tianjin Eye is an easy landmark for first-week photos and a simple way to remember the city by the river.",
      zhNote: "天津之眼适合新生第一周拍照，也让人很容易用海河记住这座城市。"
    },
    {
      title: "Binhai Library",
      zhTitle: "天津 · 滨海图书馆",
      file: "Tianjin Binhai Library 2017.jpg",
      alt: "Tianjin Binhai Library",
      zhAlt: "天津滨海图书馆",
      note: "Binhai shows another Tianjin: new districts, public architecture, port economy, and future-facing urban experiments.",
      zhNote: "滨海展示另一个天津：新区、公共建筑、港口经济和面向未来的城市实验。"
    }
  ]),
  harbin: cityGalleryBatch([
    {
      title: "Central Street at night",
      zhTitle: "哈尔滨 · 中央大街夜色",
      file: "201906 Harbin Central Street at night 08.jpg",
      alt: "Harbin Central Street at night",
      zhAlt: "哈尔滨中央大街夜景",
      note: "Central Street is Harbin's social postcard: stone pavement, food, lights, music, and a northern city that stays memorable.",
      zhNote: "中央大街是哈尔滨的社交名片：面包石、食物、灯光、音乐，以及一座很有记忆点的北方城市。"
    },
    {
      title: "Central Street in summer",
      zhTitle: "哈尔滨 · 夏日中央大街",
      file: "Central Street at West 13th St (20230721112501).jpg",
      alt: "Central Street in Harbin in 2023",
      zhAlt: "2023年哈尔滨中央大街",
      note: "Harbin is not only winter. Summer nights are cool, walkable, lively, and good for students.",
      zhNote: "哈尔滨不只有冬天。夏夜凉爽、适合步行、也很热闹，对学生很友好。"
    },
    {
      title: "Saint Sophia Cathedral",
      zhTitle: "哈尔滨 · 圣索菲亚教堂",
      file: "Saint Sophia Cathedral in Harbin.jpg",
      alt: "Saint Sophia Cathedral in Harbin",
      zhAlt: "哈尔滨圣索菲亚教堂",
      note: "Saint Sophia gives students a direct feeling for Harbin's borderland history and Russian-influenced city memory.",
      zhNote: "圣索菲亚让学生直接感受到哈尔滨的边疆历史和俄式城市记忆。"
    },
    {
      title: "Songhua River",
      zhTitle: "哈尔滨 · 松花江",
      file: "Songhua River Harbin.jpg",
      alt: "Songhua River in Harbin",
      zhAlt: "哈尔滨松花江",
      note: "The Songhua River is Harbin's daily release valve: walks, wind, winter ice, summer markets, and weekend gathering.",
      zhNote: "松花江是哈尔滨的日常释放阀：散步、江风、冬季冰面、夏季市集和周末聚会。"
    },
    {
      title: "Ice and Snow Festival",
      zhTitle: "哈尔滨 · 冰雪节",
      file: "Harbin_Ice_%26_Snow_Festival_2026.jpg",
      alt: "Harbin Ice and Snow Festival",
      zhAlt: "哈尔滨冰雪节",
      note: "Harbin turns winter into culture, which is why students remember it so clearly.",
      zhNote: "哈尔滨把冬天变成文化，所以学生会非常清楚地记住它。"
    },
    {
      title: "Harbin Grand Theatre",
      zhTitle: "哈尔滨 · 大剧院",
      file: "Harbin Grand Theatre.jpg",
      alt: "Harbin Grand Theatre",
      zhAlt: "哈尔滨大剧院",
      note: "The Grand Theatre shows a modern, design-forward Harbin beyond old streets and ice.",
      zhNote: "大剧院展示老街和冰雪之外，一个更现代、更有设计感的哈尔滨。"
    }
  ]),
  guilin: cityGalleryBatch([
    {
      title: "Li River landscape",
      zhTitle: "桂林 · 漓江山水",
      file: "Yangshuo-Li-River-2019-Luka-Peternel.jpg",
      alt: "Li River landscape near Yangshuo",
      zhAlt: "阳朔漓江山水",
      note: "The Li River makes Chinese landscape painting feel alive: water, mountains, boats, mist, and a slow rhythm for students.",
      zhNote: "漓江让中国山水画像活着一样：水、山、船、雾和适合学生的慢节奏。"
    },
    {
      title: "Guilin Li River",
      zhTitle: "桂林 · 漓江城市段",
      file: "Guilin li river.jpg",
      alt: "Li River in Guilin",
      zhAlt: "桂林漓江",
      note: "Guilin's strongest advantage is that world-class scenery is close to daily student life.",
      zhNote: "桂林最大的优势，是世界级山水离学生日常生活很近。"
    },
    {
      title: "Elephant Trunk Hill",
      zhTitle: "桂林 · 象鼻山",
      file: "Elephant Trunk Hill, Guilin.jpg",
      alt: "Elephant Trunk Hill in Guilin",
      zhAlt: "桂林象鼻山",
      note: "Elephant Trunk Hill is an easy first landmark, useful for arrival photos and city orientation.",
      zhNote: "象鼻山是很容易进入的第一地标，适合抵达拍照和熟悉城市。"
    },
    {
      title: "Yangshuo West Street",
      zhTitle: "桂林 · 阳朔西街",
      file: "Yangshuo West Street.jpg",
      alt: "Yangshuo West Street",
      zhAlt: "阳朔西街",
      note: "West Street adds multilingual nightlife, cafes, bars, and travel friendships to Guilin's mountain-water calm.",
      zhNote: "西街给桂林的山水安静加入了多语言夜生活、咖啡、酒吧和旅行友谊。"
    },
    {
      title: "Two Rivers and Four Lakes",
      zhTitle: "桂林 · 两江四湖",
      file: "Guilin Two Rivers and Four Lakes.jpg",
      alt: "Two Rivers and Four Lakes in Guilin",
      zhAlt: "桂林两江四湖",
      note: "The city itself becomes an evening route, with water, bridges, lights, and a gentle student pace.",
      zhNote: "城市本身就能成为傍晚路线：水、桥、灯光和温柔的学生节奏。"
    },
    {
      title: "Guilin rice noodles",
      zhTitle: "桂林 · 桂林米粉",
      file: "Guilin rice noodles.jpg",
      alt: "Guilin rice noodles",
      zhAlt: "桂林米粉",
      note: "Rice noodles are not only food here. They are a daily ritual and a low-cost bridge into local life.",
      zhNote: "米粉在桂林不只是食物，而是一种日常仪式，也是进入本地生活的低成本桥梁。"
    }
  ]),
  shenzhen: cityGalleryBatch([
    {
      title: "Shenzhen skyline in 2025",
      zhTitle: "深圳 · 2025年天际线",
      file: "Skyline in Shenzhen (20250327).jpg",
      alt: "Shenzhen skyline in 2025",
      zhAlt: "2025年深圳天际线",
      note: "Shenzhen's skyline is a career signal: technology, finance, design, startups, and Greater Bay Area ambition.",
      zhNote: "深圳天际线是一种职业信号：科技、金融、设计、创业和大湾区野心。"
    },
    {
      title: "Shenzhen skyline from Hong Kong",
      zhTitle: "深圳 · 从香港望向深圳",
      file: "Skyline of Shenzhen from Hong Kong.jpg",
      alt: "Shenzhen skyline seen from Hong Kong",
      zhAlt: "从香港望向深圳天际线",
      note: "The city sits inside a larger cross-border region, which matters for students thinking about future careers.",
      zhNote: "深圳处在更大的跨境区域里，这对考虑未来职业的学生很重要。"
    },
    {
      title: "Shenzhen Bay Park",
      zhTitle: "深圳 · 深圳湾公园",
      file: "Shenzhen Bay Park.jpg",
      alt: "Shenzhen Bay Park",
      zhAlt: "深圳湾公园",
      note: "Free coastal parks soften a high-cost city, giving students sea wind, running routes, and sunset after class.",
      zhNote: "免费滨海公园会柔化高成本城市，给学生海风、跑步路线和下课后的日落。"
    },
    {
      title: "Ping An Finance Center",
      zhTitle: "深圳 · 平安金融中心",
      file: "Ping An Finance Center.jpg",
      alt: "Ping An Finance Center in Shenzhen",
      zhAlt: "深圳平安金融中心",
      note: "This is the vertical image of Shenzhen's opportunity density, especially for business, finance, engineering, and design students.",
      zhNote: "这是深圳机会密度的垂直形象，尤其适合商科、金融、工程和设计方向学生理解。"
    },
    {
      title: "Dongmen pedestrian area",
      zhTitle: "深圳 · 东门街区",
      file: "Shenzhen Dongmen.jpg",
      alt: "Dongmen area in Shenzhen",
      zhAlt: "深圳东门街区",
      note: "Dongmen and night markets reveal the city from below: snacks, crowds, young people, and food from many provinces.",
      zhNote: "东门和夜市从地面展示深圳：小吃、人群、年轻人和来自许多省份的食物。"
    },
    {
      title: "Nantou Ancient City",
      zhTitle: "深圳 · 南头古城",
      file: "Nantou Ancient City Shenzhen.jpg",
      alt: "Nantou Ancient City in Shenzhen",
      zhAlt: "深圳南头古城",
      note: "Nantou reminds students that even a young city has layers, renewal, memory, and local texture.",
      zhNote: "南头提醒学生，即使是年轻城市，也有层次、更新、记忆和本地肌理。"
    }
  ]),
  taiyuan: cityGalleryBatch([
    {
      title: "Fen River Park",
      zhTitle: "太原 · 汾河公园",
      file: "Fen River Park Taiyuan 20110709.jpg",
      alt: "Fen River Park in Taiyuan",
      zhAlt: "太原汾河公园",
      note: "The Fen River gives Taiyuan a calm daily route for walking, running, cycling, and lower-pressure student life.",
      zhNote: "汾河给太原一条安静的日常路线：散步、跑步、骑行和低压力学生生活。"
    },
    {
      title: "Taiyuan Bell Tower Street",
      zhTitle: "太原 · 钟楼街",
      file: "Taiyuan Bell Tower Street.jpg",
      alt: "Bell Tower Street in Taiyuan",
      zhAlt: "太原钟楼街",
      note: "Bell Tower Street shows the younger side of Taiyuan: food, lights, small bars, live music, and renewed old-city life.",
      zhNote: "钟楼街展示太原更年轻的一面：食物、灯光、小酒馆、现场音乐和更新后的老城生活。"
    },
    {
      title: "Shanxi Museum",
      zhTitle: "太原 · 山西博物院",
      file: "Shanxi Museum.jpg",
      alt: "Shanxi Museum in Taiyuan",
      zhAlt: "太原山西博物院",
      note: "Shanxi Museum helps students see a deeper China through bronze, architecture, merchant culture, and regional history.",
      zhNote: "山西博物院帮助学生通过青铜、建筑、晋商和区域历史看到更深的中国。"
    },
    {
      title: "Jinci Temple",
      zhTitle: "太原 · 晋祠",
      file: "Jinci Temple, Taiyuan.jpg",
      alt: "Jinci Temple in Taiyuan",
      zhAlt: "太原晋祠",
      note: "Jinci gives Taiyuan a calm cultural depth, useful for students interested in architecture and heritage.",
      zhNote: "晋祠给太原一种安静的文化深度，适合关注建筑和遗产的学生。"
    },
    {
      title: "Taiyuan Food Street",
      zhTitle: "太原 · 食品街",
      file: "Taiyuan Food Street.jpg",
      alt: "Food Street in Taiyuan",
      zhAlt: "太原食品街",
      note: "Noodles, snacks, old facades, and red lanterns make Food Street a practical first taste of Taiyuan.",
      zhNote: "面食、小吃、老街面和红灯笼，让食品街成为认识太原的实用第一口。"
    },
    {
      title: "Taiyuan skyline",
      zhTitle: "太原 · 城市天际线",
      file: "Taiyuan skyline.jpg",
      alt: "Taiyuan skyline",
      zhAlt: "太原城市天际线",
      note: "Taiyuan is quieter than coastal megacities, but it still gives students a modern northern city base.",
      zhNote: "太原比沿海超大城市安静，但仍然能给学生一个现代北方城市基地。"
    }
  ]),
  zhengzhou: cityGalleryBatch([
    {
      title: "Zhengzhou CBD",
      zhTitle: "郑州 · 郑东CBD",
      file: "Zhengzhou CBD.jpg",
      alt: "Zhengzhou CBD skyline",
      zhAlt: "郑州郑东CBD天际线",
      note: "Zhengzhou's CBD shows the city as a growing central-China hub for transport, finance, logistics, and services.",
      zhNote: "郑东CBD展示郑州作为中部交通、金融、物流和服务枢纽的成长感。"
    },
    {
      title: "Central Business District Station",
      zhTitle: "郑州 · CBD地铁站",
      file: "20250120 Central Business District Station - Concourse 01.jpg",
      alt: "Central Business District Station in Zhengzhou in 2025",
      zhAlt: "2025年郑州CBD地铁站",
      note: "New transit images matter because students need to see how a city actually moves.",
      zhNote: "新的交通照片很重要，因为学生需要看到一座城市真实如何流动。"
    },
    {
      title: "Henan Museum",
      zhTitle: "郑州 · 河南博物院",
      file: "Henan Museum.jpg",
      alt: "Henan Museum in Zhengzhou",
      zhAlt: "郑州河南博物院",
      note: "Henan Museum is a gateway to Central Plains civilization, archaeology, bronze, music, and early Chinese memory.",
      zhNote: "河南博物院是进入中原文明、考古、青铜、音乐和早期中国记忆的入口。"
    },
    {
      title: "Erqi Square",
      zhTitle: "郑州 · 二七广场",
      file: "Zhengzhou Erqi Square.jpg",
      alt: "Erqi Square in Zhengzhou",
      zhAlt: "郑州二七广场",
      note: "Erqi is a simple first landmark for city orientation, shopping, food, and downtown walks.",
      zhNote: "二七是建立城市方向感的简单第一地标，适合购物、美食和市中心步行。"
    },
    {
      title: "Yellow River near Zhengzhou",
      zhTitle: "郑州 · 黄河路线",
      file: "Yellow River Zhengzhou.jpg",
      alt: "Yellow River near Zhengzhou",
      zhAlt: "郑州附近黄河",
      note: "The Yellow River makes Zhengzhou more than a transport hub; it connects geography with Chinese civilization.",
      zhNote: "黄河让郑州不只是交通枢纽，而是把地理和中华文明连接起来。"
    },
    {
      title: "Dehua pedestrian street",
      zhTitle: "郑州 · 德化步行街",
      file: "Zhengzhou Dehua Street.jpg",
      alt: "Dehua pedestrian street in Zhengzhou",
      zhAlt: "郑州德化步行街",
      note: "Dehua Street and night markets give students Zhengzhou's practical side: food, crowds, prices, and everyday city life.",
      zhNote: "德化街和夜市给学生郑州的务实一面：食物、人群、价格和日常城市生活。"
    }
  ]),
  hangzhou: [
    {
      title: "West Lake in 2024",
      zhTitle: "杭州 · 2024年的西湖水光",
      image: commonsImage("West Lake in 2024.jpg"),
      alt: "West Lake in Hangzhou in 2024",
      zhAlt: "2024年的杭州西湖",
      note: "West Lake is still Hangzhou's emotional center: free walks, lake light, bridges, gardens, museums, and the kind of quiet beauty students can return to again and again.",
      zhNote: "西湖仍然是杭州最重要的情感中心：免费的湖边散步、水光、桥、园林、博物馆，以及学生可以一次次回来的安静美感。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:West_Lake_in_2024.jpg"
    },
    {
      title: "West Lake April 2024",
      zhTitle: "杭州 · 春日西湖",
      image: commonsImage("West Lake April 2024.jpg"),
      alt: "West Lake in April 2024",
      zhAlt: "2024年4月杭州西湖",
      note: "A newer West Lake image keeps the city page fresh. Hangzhou's most famous view is not only a postcard; it becomes a student's daily reset route.",
      zhNote: "较新的西湖照片让页面更有当下感。杭州最著名的景色不只是明信片，它会成为学生日常恢复能量的路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:West_Lake_April_2024.jpg"
    },
    {
      title: "West Lake bus route in 2024",
      zhTitle: "杭州 · 西湖边的城市日常",
      image: commonsImage("Hangzhou bus WE1314 in West Lake (July 2024).jpg"),
      alt: "Hangzhou bus route near West Lake in July 2024",
      zhAlt: "2024年7月西湖边的杭州公交",
      note: "This everyday city view matters: students need more than famous scenery. They need buses, routes, small errands, and a city that is easy to live inside.",
      zhNote: "这样的城市日常也很重要：学生需要的不只是著名风景，还需要公交、路线、办事和一座真正容易住进去的城市。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hangzhou_bus_WE1314_in_West_Lake_(July_2024).jpg"
    },
    {
      title: "Grand Canal Hangzhou Steelworks Park",
      zhTitle: "杭州 · 运河与杭钢公园工业遗存",
      image: commonsImage("The Grand Canal Hangzhou Steelworks Park (1), 202507.jpg"),
      alt: "The Grand Canal Hangzhou Steelworks Park in 2025",
      zhAlt: "2025年的杭州运河杭钢公园",
      note: "Hangzhou is not only soft and classical. The Grand Canal and steelworks park show how industrial memory can become music festivals, markets, night walks, and youth culture.",
      zhNote: "杭州不只有柔和古典的一面。运河和杭钢公园展示了工业记忆如何变成音乐节、市集、夜间漫步和年轻人的文化空间。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Grand_Canal_Hangzhou_Steelworks_Park_(1),_202507.jpg"
    },
    {
      title: "Hangzhou Steelworks Park night route",
      zhTitle: "杭州 · 杭钢公园夜间活动空间",
      image: commonsImage("The Grand Canal Hangzhou Steelworks Park (2), 202507.jpg"),
      alt: "Hangzhou Steelworks Park by the Grand Canal in 2025",
      zhAlt: "2025年杭州运河杭钢公园空间",
      note: "The newest Hangzhou nightlife is often found in reused spaces: open-air cinema, concerts, markets, food, and industrial structures turned into shared memory.",
      zhNote: "最新的杭州夜生活常常出现在更新后的空间里：露天电影、演出、市集、美食，以及被改造为公共记忆的工业结构。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Grand_Canal_Hangzhou_Steelworks_Park_(2),_202507.jpg"
    },
    {
      title: "Wulinmen Grand Canal",
      zhTitle: "杭州 · 武林门与京杭大运河",
      image: commonsImage("Wulinmen, Beijing-Hangzhou Grand Canal.jpg"),
      alt: "Wulinmen and the Beijing-Hangzhou Grand Canal",
      zhAlt: "杭州武林门与京杭大运河",
      note: "The canal gives Hangzhou a thousand-year urban line. For students, it connects old commerce, river walks, museums, cafes, and a quieter night route.",
      zhNote: "运河给杭州一条千年城市线索。对学生来说，它连接旧商业、河边散步、博物馆、咖啡馆和更安静的夜间路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wulinmen,_Beijing-Hangzhou_Grand_Canal.jpg"
    },
    {
      title: "Hangzhou Olympic Sports Center",
      zhTitle: "杭州 · 奥体中心",
      image: commonsImage("Hangzhou Olympic Sports Center Stadium2021.jpg"),
      alt: "Hangzhou Olympic Sports Center Stadium",
      zhAlt: "杭州奥体中心体育场",
      note: "The Olympic Sports Center shows the other side of Hangzhou: major events, sports, concerts, riverfront development, and a younger metropolitan confidence.",
      zhNote: "奥体中心展示的是杭州另一面：大型活动、体育、演唱会、江岸发展，以及更年轻的都市自信。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hangzhou_Olympic_Sports_Center_Stadium2021.jpg"
    },
    {
      title: "Hangzhou Olympic Sports Expo Center",
      zhTitle: "杭州 · 奥体博览城",
      image: commonsImage("Hangzhou Olympic Sports Expo Center 10.jpg"),
      alt: "Hangzhou Olympic Sports Expo Center",
      zhAlt: "杭州奥体博览城",
      note: "For international students, modern Hangzhou is also about events, entrepreneurship, digital trade, design, and a city that knows how to stage the future.",
      zhNote: "对国际学生来说，现代杭州也意味着会展、创业、数字贸易、设计，以及一座善于把未来感做成城市现场的地方。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hangzhou_Olympic_Sports_Expo_Center_10.jpg"
    },
    {
      title: "Liangzhu Museum",
      zhTitle: "杭州 · 良渚博物院",
      image: commonsImage("Hangzhou Liangzhu Museum 2015.08.02 13-39-09.jpg"),
      alt: "Liangzhu Museum in Hangzhou",
      zhAlt: "杭州良渚博物院",
      note: "Liangzhu adds deep time to Hangzhou. It helps students see that the city is not only digital and scenic, but also connected to one of China's earliest civilizations.",
      zhNote: "良渚给杭州增加了深时间。它让学生看到，这座城市不只有数字经济和风景，也连接着中国早期文明的重要源头。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hangzhou_Liangzhu_Museum_2015.08.02_13-39-09.jpg"
    },
    {
      title: "Liangzhu Ancient City wall",
      zhTitle: "杭州 · 良渚古城遗址",
      image: commonsImage("West City Wall of Liangzhu Ancient City.JPG"),
      alt: "West city wall of Liangzhu Ancient City",
      zhAlt: "良渚古城西城墙遗址",
      note: "Liangzhu makes Chinese civilization feel walkable. It is a strong route for students who want archaeology, design, jade culture, and ancient urban planning.",
      zhNote: "良渚让中华文明变得可以步行进入。它很适合关注考古、设计、玉文化和早期城市规划的学生。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:West_City_Wall_of_Liangzhu_Ancient_City.JPG"
    },
    {
      title: "Longjing tea fields",
      zhTitle: "杭州 · 龙井茶田",
      image: commonsImage("Longjing Tea field, Dragon Well area, Meijiawu China.jpg"),
      alt: "Longjing tea field near Meijiawu in Hangzhou",
      zhAlt: "杭州梅家坞龙井茶田",
      note: "Longjing tea fields slow Hangzhou down. After coding, applications, or exams, students can step into hills, tea fragrance, village paths, and a calmer China.",
      zhNote: "龙井茶田会让杭州慢下来。写代码、准备申请或考试之后，学生可以走进山、茶香、村路和一个更安静的中国。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Longjing_Tea_field,_Dragon_Well_area,_Meijiawu_China.jpg"
    },
    {
      title: "Xixi Wetland",
      zhTitle: "杭州 · 西溪湿地",
      image: commonsImage("Xixi Wetland Park, Hangzhou, China.jpg"),
      alt: "Xixi Wetland Park in Hangzhou",
      zhAlt: "杭州西溪湿地",
      note: "Xixi Wetland gives Hangzhou breathing space beyond the lake: water paths, reeds, birds, slow boats, and a softer weekend for students.",
      zhNote: "西溪湿地给杭州西湖之外的呼吸空间：水路、芦苇、鸟、慢船，以及适合学生放松的柔和周末。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Xixi_Wetland_Park,_Hangzhou,_China.jpg"
    },
    {
      title: "ColorHub night market mood",
      zhTitle: "杭州 · ColorHub夜市与市集氛围",
      image: "https://c.colorhub.me/uYUnyKe7jfgLw3drPMCpL1OZtJcnJAcCHcW7SLVr/0x500/euc:GYUw9AhhYMwMYgOwFY7ACxwIwE4AmeAbDjhInhABxwAMcMMIE6Nwly1MoUAdAFYAHEAHMgA",
      alt: "Asian night market food stall with warm light",
      zhAlt: "亚洲夜市小吃摊暖光氛围",
      note: "ColorHub free atmosphere image: not a Hangzhou landmark photo, but useful for expressing night markets, creative fairs, food stalls, and summer evening social life.",
      zhNote: "ColorHub 免费氛围补充图：这不是杭州地标实拍，但适合表达夜市、创意市集、小吃摊和夏夜社交氛围。",
      sourceUrl: "https://www.colorhub.me/photos/9bv1O"
    },
    {
      title: "ColorHub live music bar mood",
      zhTitle: "杭州 · ColorHub音乐酒吧氛围",
      image: "https://c.colorhub.me/iWFKrpKCT83AT15m_YThXYcBN2ZXUEv-veqqMUB0/0x500/euc:JwFg9ArAjGDMBGsogGwFMDsGLAEwGNZgAGWXAE2KnwgA5dU0BDNXFYeNfUaAOgCsADmgDmQA",
      alt: "Young people relaxing together in an urban street scene",
      zhAlt: "年轻人在城市街区放松社交",
      note: "ColorHub free atmosphere image: it supports the Hangzhou nightlife story, where bars, live music, games, bookstores, and cultural salons give students gentle ways to meet people.",
      zhNote: "ColorHub 免费氛围补充图：用于补充杭州夜生活叙事，酒吧、Live、游戏、书店和文化沙龙都能成为学生认识朋友的温和方式。",
      sourceUrl: "https://www.colorhub.me/photos/JZ2Xw"
    }
  ],
  chongqing: [
    {
      title: "Hongyadong night lights",
      zhTitle: "重庆 · 洪崖洞夜色",
      image: commonsImage("20250521 Hongyadong (223216).jpg"),
      alt: "Hongyadong night lights in Chongqing",
      zhAlt: "重庆洪崖洞夜景灯光",
      note: "Hongyadong gives Chongqing its most cinematic first impression: layered buildings, river wind, bright lights, food, crowds, and a city that feels vertical after dark.",
      zhNote: "洪崖洞给重庆一个最有电影感的第一印象：层层叠叠的建筑、江风、灯光、小吃、人群，以及入夜后突然变得立体的山城。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:20250521_Hongyadong_(223216).jpg"
    },
    {
      title: "Hongyadong riverside layers",
      zhTitle: "重庆 · 洪崖洞与江边层次",
      image: commonsImage("20250521 Hongyadong (223429).jpg"),
      alt: "Hongyadong riverside buildings in Chongqing",
      zhAlt: "重庆洪崖洞江边建筑层次",
      note: "This newer Hongyadong view keeps the page current and shows why students remember Chongqing as a city of stairs, bridges, riverbanks, and glowing nights.",
      zhNote: "这张较新的洪崖洞照片让页面更有当下感，也能说明为什么学生会把重庆记成一座由台阶、桥、江岸和灯火组成的城市。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:20250521_Hongyadong_(223429).jpg"
    },
    {
      title: "Jiefangbei CBD at night",
      zhTitle: "重庆 · 解放碑夜间CBD",
      image: commonsImage("A close view of Jiefangbei CBD,Central Chongqing at night.jpg"),
      alt: "Jiefangbei CBD in central Chongqing at night",
      zhAlt: "重庆解放碑中央商务区夜景",
      note: "Jiefangbei is where Chongqing feels fast and young: shopping, street food, photos, language practice, and late-night routes can all begin here.",
      zhNote: "解放碑呈现的是重庆快速又年轻的一面：购物、街头小吃、拍照、中文练习和深夜路线，都可以从这里开始。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:A_close_view_of_Jiefangbei_CBD,Central_Chongqing_at_night.jpg"
    },
    {
      title: "Jiefangbei city center",
      zhTitle: "重庆 · 解放碑城市中心",
      image: commonsImage("Chongqing Jiefangbei CBD.jpg"),
      alt: "Jiefangbei CBD in Chongqing",
      zhAlt: "重庆解放碑CBD",
      note: "The city center helps students imagine daily life beyond sightseeing: metro exits, malls, snacks, errands, and meeting points in a dense mountain city.",
      zhNote: "城市中心能让学生想象景点之外的重庆日常：地铁口、商场、小吃、办事路线，以及在一座高密度山城里约朋友见面的地点。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chongqing_Jiefangbei_CBD.jpg"
    },
    {
      title: "Raffles City and Chaotianmen",
      zhTitle: "重庆 · 朝天门与来福士",
      image: commonsImage("RafflesCity Chongqing Bridge.jpg"),
      alt: "Raffles City Chongqing near Chaotianmen",
      zhAlt: "重庆朝天门附近的来福士",
      note: "Chaotianmen turns Chongqing's river geography into a powerful urban scene, where the Yangtze and Jialing rivers meet modern architecture.",
      zhNote: "朝天门把重庆的两江地理变成了强烈的城市画面：长江与嘉陵江交汇，现代建筑和山城空间也在这里相遇。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:RafflesCity_Chongqing_Bridge.jpg"
    },
    {
      title: "Chongqing night skyline",
      zhTitle: "重庆 · 渝中夜景天际线",
      image: commonsImage("Chongqing Night Yuzhong.jpg"),
      alt: "Night skyline of Yuzhong, Chongqing",
      zhAlt: "重庆渝中半岛夜景天际线",
      note: "Chongqing at night is not only beautiful; it helps students feel the city's scale, ambition, and unusual vertical rhythm.",
      zhNote: "夜晚的重庆不只是好看，它能让学生感到这座城市的尺度、发展雄心，以及非常独特的垂直节奏。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chongqing_Night_Yuzhong.jpg"
    },
    {
      title: "Liziba monorail through building",
      zhTitle: "重庆 · 李子坝轻轨穿楼",
      image: commonsImage("A train of Chongqing Rail Transit Line 2 coming through a residential building at Liziba.jpg"),
      alt: "Chongqing Rail Transit Line 2 train passing through a building at Liziba",
      zhAlt: "重庆轨道交通二号线列车穿过李子坝建筑",
      note: "Liziba is the kind of place young visitors instantly understand: Chongqing is not flat, not ordinary, and not easy to forget.",
      zhNote: "李子坝是年轻人一眼就能理解的重庆：它不平、不普通，也很难被忘记。交通本身在这里变成了城市体验。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:A_train_of_Chongqing_Rail_Transit_Line_2_coming_through_a_residential_building_at_Liziba.jpg"
    },
    {
      title: "Liziba Line 2 train",
      zhTitle: "重庆 · 李子坝轨道交通",
      image: commonsImage("CRT Line 2 The 8-car Train Arriving at Liziba Station 20230704.jpg"),
      alt: "Chongqing Rail Transit Line 2 train arriving at Liziba Station in 2023",
      zhAlt: "2023年重庆轨道交通二号线列车抵达李子坝站",
      note: "A recent Liziba image keeps the transit story fresh. For students, Chongqing's metro is both transportation and a daily lesson in mountain-city design.",
      zhNote: "较新的李子坝照片让交通故事更有现实感。对学生来说，重庆地铁既是交通工具，也是理解山城空间设计的日常课堂。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:CRT_Line_2_The_8-car_Train_Arriving_at_Liziba_Station_20230704.jpg"
    },
    {
      title: "Ciqikou old street",
      zhTitle: "重庆 · 磁器口老街",
      image: commonsImage("Street scene in Ciqikou, Chongqing.JPG"),
      alt: "Street scene in Ciqikou, Chongqing",
      zhAlt: "重庆磁器口街景",
      note: "Ciqikou gives Chongqing a slower, older texture: snacks, old shops, dialect, tea, river memory, and a route where students can practice Chinese naturally.",
      zhNote: "磁器口给重庆增添了更慢、更老的质感：小吃、老店、方言、茶、江边记忆，以及学生可以自然练中文的街巷路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Street_scene_in_Ciqikou,_Chongqing.JPG"
    },
    {
      title: "Ciqikou gateway",
      zhTitle: "重庆 · 磁器口入口",
      image: commonsImage("Gateway in Ciqikou, Chongqing.JPG"),
      alt: "Gateway in Ciqikou, Chongqing",
      zhAlt: "重庆磁器口入口牌坊",
      note: "Old-town gateways are useful for first-time students because they make history easy to enter: walk in, eat something, read signs, and let the city explain itself.",
      zhNote: "古镇入口对第一次来的学生很友好，因为它让历史变得容易进入：走进去、吃点东西、看招牌，然后让城市自己讲故事。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gateway_in_Ciqikou,_Chongqing.JPG"
    },
    {
      title: "Three Gorges Museum",
      zhTitle: "重庆 · 三峡博物馆",
      image: commonsImage("Chongqing Three Gorges Museum China.JPG"),
      alt: "Chongqing China Three Gorges Museum",
      zhAlt: "重庆中国三峡博物馆",
      note: "The Three Gorges Museum helps students understand Chongqing beyond internet-famous views: rivers, migration, archaeology, industry, and the memory of western China.",
      zhNote: "三峡博物馆能帮助学生理解网红景观之外的重庆：江河、移民、考古、工业，以及中国西部的历史记忆。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chongqing_Three_Gorges_Museum_China.JPG"
    },
    {
      title: "ColorHub spicy night food",
      zhTitle: "重庆 · ColorHub麻辣夜宵氛围",
      image: "https://c.colorhub.me/BeGEVvW2k71uhCZxneuVahsr1gO0J_FkHK8q6y-D/0x500/euc:OwTg9AhgxmAMUCMCmAzYECMKAsATX82AzCBAgGzCLYQQogJGwbmy2jQB0AVgA5IBzIA",
      alt: "Busy late-night street food stall",
      zhAlt: "热闹的深夜街头小吃摊",
      note: "ColorHub free atmosphere image: not a Chongqing landmark photo, but useful for expressing the hotpot, noodles, night snack, and street-social energy of the city.",
      zhNote: "ColorHub 免费氛围补充图：这不是重庆地标实拍，但适合表达火锅、小面、夜宵和街头社交构成的重庆烟火气。",
      sourceUrl: "https://www.colorhub.me/photos/0B8bw"
    }
  ],
  chengdu: [
    {
      title: "Taikoo Li and IFS city center",
      zhTitle: "成都 · 太古里与IFS的年轻都市感",
      image: commonsImage("Taikoo_Li_and_IFS_at_the_city_centre.jpg"),
      alt: "Taikoo Li and IFS at the city centre of Chengdu",
      zhAlt: "成都太古里与IFS城市中心",
      note: "Chengdu's center shows why the city feels so easy for young people: fashion, cafes, bookstores, food streets, metro lines, and weekend photos all sit close together.",
      zhNote: "成都的市中心很能说明这座城市为什么适合年轻人：时尚街区、咖啡馆、书店、美食、地铁和周末拍照点彼此靠得很近，学习之外的生活不会单调。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Taikoo_Li_and_IFS_at_the_city_centre.jpg"
    },
    {
      title: "Taikoo Li skyline",
      zhTitle: "成都 · 太古里天际线",
      image: commonsImage("Taikoo_Li_Chengdu_skyline.jpg"),
      alt: "Modern skyline around Taikoo Li Chengdu",
      zhAlt: "成都太古里现代天际线",
      note: "Taikoo Li gives Chengdu a contemporary first impression. For international students, it is a visible sign that the city is relaxed but not slow, stylish but still warm.",
      zhNote: "太古里给成都一个很当代的第一印象。对国际学生来说，它会让人感觉这座城市既松弛又不落后，既时髦又保留着烟火气。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Taikoo_Li_Chengdu_skyline.jpg"
    },
    {
      title: "IFS panda on Chunxi Road",
      zhTitle: "成都 · 春熙路IFS熊猫",
      image: commonsImage("The_panda_at_IFS_Chengdu_from_Hongxing_Road.jpg"),
      alt: "The panda installation at IFS Chengdu from Hongxing Road",
      zhAlt: "从红星路看成都IFS熊猫装置",
      note: "The climbing panda has become a cheerful urban symbol. It connects Chengdu's global panda image with the everyday shopping, transit, and social life of students.",
      zhNote: "这只爬楼熊猫已经成为成都很有亲和力的城市符号。它把成都世界级的熊猫IP，与学生日常逛街、坐地铁、约朋友的生活连接在一起。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_panda_at_IFS_Chengdu_from_Hongxing_Road.jpg"
    },
    {
      title: "Giant panda at Chengdu Panda Base",
      zhTitle: "成都 · 熊猫基地的大熊猫",
      image: commonsImage("Chengdu-pandas-d10.jpg"),
      alt: "Giant panda at the Chengdu Research Base of Giant Panda Breeding",
      zhAlt: "成都大熊猫繁育研究基地的大熊猫",
      note: "The panda base is one of Chengdu's strongest global invitations. Go early in the morning, and the city suddenly feels like a place where nature, science, and joy meet.",
      zhNote: "熊猫基地是成都最强的全球邀请之一。清晨去看熊猫进食和活动，会让人感到这座城市把自然、科研和快乐非常自然地放在了一起。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chengdu-pandas-d10.jpg"
    },
    {
      title: "Kuanzhai Alley food stall",
      zhTitle: "成都 · 宽窄巷子的街头味道",
      image: commonsImage("Food_stall_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05324.jpg"),
      alt: "Food stall in Kuanzhai Alleys, Chengdu",
      zhAlt: "成都宽窄巷子里的小吃摊",
      note: "Kuanzhai Alley is not only a tourist stop. It is also a first lesson in Chengdu taste: snacks, tea, courtyards, dialect, and the slow confidence of local life.",
      zhNote: "宽窄巷子不只是景点，也是认识成都味道的第一堂课：小吃、盖碗茶、院落、方言，以及本地生活里那种慢而自信的节奏。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Food_stall_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05324.jpg"
    },
    {
      title: "Kuanzhai Alley shops",
      zhTitle: "成都 · 宽窄巷子的院落与店铺",
      image: commonsImage("Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg"),
      alt: "Shops in Kuanzhai Alleys, Chengdu",
      zhAlt: "成都宽窄巷子里的店铺",
      note: "Old lanes help students understand that Chengdu's comfort is not abstract. It is built from courtyards, shaded streets, food smells, and places where people sit down instead of rushing through.",
      zhNote: "老巷子会让学生明白，成都的舒服不是抽象词。它来自院落、树荫、食物香气，以及人们愿意停下来坐一会儿的公共空间。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shops_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05305.jpg"
    },
    {
      title: "Wuhou Shrine corridor",
      zhTitle: "成都 · 武侯祠的三国记忆",
      image: commonsImage("Corridor_-_Wuhou_Shrine_-_Chengdu,_China_-_DSC05489.jpg"),
      alt: "Corridor at Wuhou Shrine in Chengdu",
      zhAlt: "成都武侯祠走廊",
      note: "Wuhou Shrine makes the Three Kingdoms feel walkable. It is a good Hanfu, history, and Chinese-storytelling route for students who want culture to be more than a textbook.",
      zhNote: "武侯祠让三国文化变得可以步行进入。对想穿汉服、拍照、听中国故事的学生来说，这里让历史不再只是课本里的名字。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Corridor_-_Wuhou_Shrine_-_Chengdu,_China_-_DSC05489.jpg"
    },
    {
      title: "Wuhou Shrine in 2026",
      zhTitle: "成都 · 近年的武侯祠城市文化现场",
      image: commonsImage("Wuhou_Shrine_20260513.jpg"),
      alt: "Wuhou Shrine in Chengdu in 2026",
      zhAlt: "2026年的成都武侯祠",
      note: "A newer Wuhou Shrine photo keeps the page visually current. Chengdu's heritage is not frozen; it is still part of how young people walk, photograph, and learn the city.",
      zhNote: "近年的武侯祠照片能让页面更有当下感。成都的历史不是被封存的，它仍然参与着年轻人的漫步、拍照和城市学习。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wuhou_Shrine_20260513.jpg"
    },
    {
      title: "Du Fu Thatched Cottage Park",
      zhTitle: "成都 · 杜甫草堂的诗意公园",
      image: commonsImage("Chengdu_Sichuan_China_Du-Fu-Thatched-Cottage-Park-01.jpg"),
      alt: "Du Fu Thatched Cottage Park in Chengdu",
      zhAlt: "成都杜甫草堂公园",
      note: "Du Fu Thatched Cottage gives Chengdu a literary softness. It is ideal for students who want to feel Chinese poetry through gardens, paths, bamboo, and quiet afternoons.",
      zhNote: "杜甫草堂给成都增添了文学气质。学生可以在园林、小径、竹影和安静的下午里理解中国诗歌，而不是只背诵诗句。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chengdu_Sichuan_China_Du-Fu-Thatched-Cottage-Park-01.jpg"
    },
    {
      title: "Du Fu Thatched Cottage route",
      zhTitle: "成都 · 草堂里的慢生活路线",
      image: commonsImage("Du_Fu_Thatched_Cottage_-_Chengdu_20161121.jpg"),
      alt: "Du Fu Thatched Cottage in Chengdu",
      zhAlt: "成都杜甫草堂景观",
      note: "This is Chengdu's quieter side: poetry, shade, garden paths, and a way to recover energy after language classes, applications, and exams.",
      zhNote: "这是成都更安静的一面：诗意、树荫、园路，以及在中文课、申请材料和考试之后重新恢复能量的地方。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Du_Fu_Thatched_Cottage_-_Chengdu_20161121.jpg"
    },
    {
      title: "ColorHub late-night street food",
      zhTitle: "成都 · ColorHub夜市烟火气",
      image: "https://c.colorhub.me/BeGEVvW2k71uhCZxneuVahsr1gO0J_FkHK8q6y-D/0x500/euc:OwTg9AhgxmAMUCMCmAzYECMKAsATX82AzCBAgGzCLYQQogJGwbmy2jQB0AVgA5IBzIA",
      alt: "Busy late-night street food stall",
      zhAlt: "深夜街头小吃摊忙碌场景",
      note: "ColorHub free atmosphere image: not a Chengdu landmark photo, but useful for expressing the hotpot, chuanchuan, night-market, and after-class food energy of the city.",
      zhNote: "ColorHub 免费氛围补充图：这不是成都地标实拍，但适合表达成都火锅、串串、夜市和下课后约饭的烟火气。",
      sourceUrl: "https://www.colorhub.me/photos/0B8bw"
    },
    {
      title: "ColorHub cafe afternoon",
      zhTitle: "成都 · ColorHub咖啡与茶馆式下午",
      image: "https://c.colorhub.me/rDyGiTWytHdZ_MjSBFm-cfbi8tD0wu_s4H4EaIhl/0x500/euc:IYVg9ApgTGDMAsUAmsICMDGAzWB2AnLhAGy7EAMAHMGlrktiLhuSGviPLqNAHQBWABwDmQA",
      alt: "Warm cafe table and relaxed afternoon atmosphere",
      zhAlt: "温暖咖啡馆与放松下午氛围",
      note: "ColorHub free atmosphere image: it supports Chengdu's teahouse and cafe rhythm, where students can slow down, talk, read, and make the city feel personal.",
      zhNote: "ColorHub 免费氛围补充图：用于补充成都茶馆、咖啡馆和慢下午的节奏，学生可以在这里聊天、读书，让城市慢慢变成自己的地方。",
      sourceUrl: "https://www.colorhub.me/photos/Wjd0p"
    }
  ],
  changsha: [
    {
      title: "Changsha IFS skyline",
      zhTitle: "长沙 · IFS城市天际线",
      image: commonsImage("Changsha_IFS_20250401B.jpg"),
      alt: "Changsha IFS tower and modern skyline",
      zhAlt: "长沙IFS与现代城市天际线",
      note: "Changsha's skyline helps students see the city's contemporary confidence: commerce, youth culture, restaurants, and nightlife gather close to campus routes.",
      zhNote: "长沙的天际线让学生直观看见这座城市的当代活力：商业、青年文化、餐饮和夜生活，和大学生活并不是割裂的两件事。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Changsha_IFS_20250401B.jpg"
    },
    {
      title: "Changsha IFS city center",
      zhTitle: "长沙 · 五一商圈的年轻气",
      image: commonsImage("Changsha_IFS_20250401E.jpg"),
      alt: "Changsha IFS city center",
      zhAlt: "长沙IFS城市中心",
      note: "This central view is useful for imagining student evenings: meeting friends, taking photos, eating snacks, and feeling the city stay awake after class.",
      zhNote: "这类市中心画面很适合让留学生想象下课后的长沙：见朋友、拍照、吃小吃，在夜晚还亮着的城市里找到自己的节奏。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Changsha_IFS_20250401E.jpg"
    },
    {
      title: "Changsha IFS tower in 2023",
      zhTitle: "长沙 · 2023年的城市高度",
      image: commonsImage("Changsha_IFS_Tower_24_August_2023c.jpg"),
      alt: "Changsha IFS tower in 2023",
      zhAlt: "2023年长沙IFS塔楼",
      note: "The newest Changsha is vertical, fast, and photogenic. For international students, it makes the city feel ambitious without losing street-level warmth.",
      zhNote: "新的长沙是向上生长的、快速的，也很适合拍照。对留学生来说，它有城市野心，但没有失去街头烟火气。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Changsha_IFS_Tower_24_August_2023c.jpg"
    },
    {
      title: "Orange Isle",
      zhTitle: "长沙 · 橘子洲江风",
      image: commonsImage("Orange_Isle_2021122645.jpg"),
      alt: "Orange Isle in Changsha",
      zhAlt: "长沙橘子洲",
      note: "Orange Isle is one of Changsha's easiest first routes: river wind, city views, long walks, and a place where history turns into a weekend habit.",
      zhNote: "橘子洲是初到长沙最容易进入的一条路线：江风、城市视野、长长的散步路，也让历史变成周末可以真实走过的地方。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Orange_Isle_2021122645.jpg"
    },
    {
      title: "Orange Isle riverside route",
      zhTitle: "长沙 · 湘江与橘洲散步",
      image: commonsImage("Orange_Isle_2021122648.jpg"),
      alt: "Riverside route on Orange Isle in Changsha",
      zhAlt: "长沙橘子洲沿江路线",
      note: "For students, this is a low-cost, high-memory city route: walk, talk, take photos, watch the river, and return to campus with a clearer sense of Changsha.",
      zhNote: "对学生来说，这是低成本但很有记忆点的城市路线：散步、聊天、拍照、看江水，然后带着更清楚的长沙印象回到校园。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Orange_Isle_2021122648.jpg"
    },
    {
      title: "Orange Isle landscape",
      zhTitle: "长沙 · 山水洲城的日常面",
      image: commonsImage("Orange_Isle,_Changsha_8.jpg"),
      alt: "Landscape on Orange Isle, Changsha",
      zhAlt: "长沙橘子洲景观",
      note: "Changsha's famous mountain-river-island-city pattern becomes easy to understand here: students can move between nature and downtown in the same afternoon.",
      zhNote: "长沙“山水洲城”的格局，在这里变得非常容易理解：学生可以在同一个下午从自然走回市中心。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Orange_Isle,_Changsha_8.jpg"
    },
    {
      title: "Yuelu Mountain green route",
      zhTitle: "长沙 · 岳麓山绿色路线",
      image: commonsImage("Fulong_Mountain_in_Yuelu_District_of_Changsha_2023022601.jpg"),
      alt: "Green mountain landscape in Yuelu District, Changsha",
      zhAlt: "长沙岳麓区山地绿意",
      note: "Yuelu-side green routes matter because many student stories begin there: campuses, bookstores, food streets, hills, and slow weekend climbs.",
      zhNote: "岳麓一侧的绿色路线很重要，因为很多学生的长沙故事从这里开始：校园、书店、美食街、山路和慢慢爬上去的周末。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fulong_Mountain_in_Yuelu_District_of_Changsha_2023022601.jpg"
    },
    {
      title: "Qingfeng Spring on Yuelu Mountain",
      zhTitle: "长沙 · 岳麓山清风泉",
      image: commonsImage("Qingfeng_Spring_on_Yuelu_Mountain_20230904.jpg"),
      alt: "Qingfeng Spring on Yuelu Mountain",
      zhAlt: "长沙岳麓山清风泉",
      note: "Small places on Yuelu Mountain give Changsha depth: not only nightlife and food, but also shade, water, temples, and quiet study breaks.",
      zhNote: "岳麓山上的小地点让长沙有了厚度：这里不只是夜生活和美食，也有树荫、水声、寺庙和适合让脑子安静下来的课余时间。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Qingfeng_Spring_on_Yuelu_Mountain_20230904.jpg"
    },
    {
      title: "Taiping Street at night",
      zhTitle: "长沙 · 太平街夜色",
      image: commonsImage("Taiping_Street_at_night,_Changsha.jpg"),
      alt: "Taiping Street at night in Changsha",
      zhAlt: "长沙太平街夜景",
      note: "Taiping Street at night catches Changsha at street level: signs, food, crowds, shops, and the easy social energy young people remember.",
      zhNote: "夜晚的太平街抓住的是街面上的长沙：招牌、小吃、人群、店铺，以及年轻人最容易记住的社交气氛。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiping_Street_at_night,_Changsha.jpg"
    },
    {
      title: "Taiping North Road",
      zhTitle: "长沙 · 太平北路街区",
      image: commonsImage("Taiping_North_Road,_Changsha_20250301.jpg"),
      alt: "Taiping North Road in Changsha",
      zhAlt: "长沙太平北路街区",
      note: "Old streets make the city more than a skyline. They give language learners real words to use: ordering food, asking prices, finding shops, and talking with locals.",
      zhNote: "老街让城市不只是天际线。它给学中文的学生很多真实场景：点餐、问价、找店、和本地人说上几句话。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiping_North_Road,_Changsha_20250301.jpg"
    },
    {
      title: "Changsha Taiping Old Street",
      zhTitle: "长沙 · 太平老街",
      image: commonsImage("Changsha_Taiping_Old_Street.jpg"),
      alt: "Changsha Taiping Old Street",
      zhAlt: "长沙太平老街",
      note: "Taiping Old Street is a good first city-walk route: old walls, snacks, shops, photos, and a way to understand Changsha without a museum label.",
      zhNote: "太平老街很适合作为第一次城市漫步路线：老墙、小吃、店铺、照片，以及一种不用展签也能理解长沙的方式。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Changsha_Taiping_Old_Street.jpg"
    },
    {
      title: "Mawangdui lacquer spoon at Hunan Museum",
      zhTitle: "长沙 · 湖南博物院马王堆器物",
      image: commonsImage("A_lacquer_soup_spoon,_Mawangdui,_Changsha,_Hunan,_Hunan_Museum.jpg"),
      alt: "Mawangdui lacquer spoon in Hunan Museum",
      zhAlt: "湖南博物院马王堆漆器",
      note: "Hunan Museum lets students feel that Changsha's history is not abstract. Mawangdui turns ancient China into color, texture, objects, and questions.",
      zhNote: "湖南博物院让学生感到长沙的历史并不抽象。马王堆把古代中国变成颜色、质感、器物和可以继续追问的故事。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:A_lacquer_soup_spoon,_Mawangdui,_Changsha,_Hunan,_Hunan_Museum.jpg"
    },
    {
      title: "ColorHub youth street energy",
      zhTitle: "长沙 · ColorHub青年街头氛围",
      image: "https://c.colorhub.me/iWFKrpKCT83AT15m_YThXYcBN2ZXUEv-veqqMUB0/0x500/euc:JwFg9ArAjGDMBGsogGwFMDsGLAEwGNZgAGWXAE2KnwgA5dU0BDNXFYeNfUaAOgCsADmgDmQA",
      alt: "Young people relaxing together in an urban street scene",
      zhAlt: "城市街头青年休闲互动",
      note: "ColorHub free atmosphere image: not a Changsha landmark, but useful for expressing the youthful street energy that makes Changsha attractive after class.",
      zhNote: "ColorHub 免费氛围补充图：这不是长沙地标实拍，但适合表达长沙吸引年轻人的街头活力、朋友相聚和下课后的城市气氛。",
      sourceUrl: "https://www.colorhub.me/photos/JZ2Xw"
    },
    {
      title: "ColorHub night market food",
      zhTitle: "长沙 · ColorHub夜市美食氛围",
      image: "https://c.colorhub.me/uYUnyKe7jfgLw3drPMCpL1OZtJcnJAcCHcW7SLVr/0x500/euc:GYUw9AhhYMwMYgOwFY7ACxwIwE4AmeAbDjhInhABxwAMcMMIE6Nwly1MoUAdAFYAHEAHMgA",
      alt: "Asian night market food stall with warm light",
      zhAlt: "亚洲夜市小吃摊位暖光",
      note: "ColorHub free atmosphere image: it supports Changsha's food-story section, where night markets and student meals are a real part of city appeal.",
      zhNote: "ColorHub 免费氛围补充图：用于增强长沙美食叙事，夜市、小吃和学生能负担的餐饮，本来就是这座城市吸引力的一部分。",
      sourceUrl: "https://www.colorhub.me/photos/9bv1O"
    },
    {
      title: "ColorHub urban night lights",
      zhTitle: "长沙 · ColorHub城市夜色氛围",
      image: "https://d.colorhub.me/ydbunKej8UkeL52iwoFzDWzOAgX0IIec9CtM0CYW/0x500/euc:KwTg9ALAhmAcCMATApvWB2RA2AzBZIEsATBuvAEY46IBm88tIswW866Io0AdAFYAHAOZA",
      alt: "Modern city night lights and high-rise atmosphere",
      zhAlt: "现代城市夜景灯光氛围",
      note: "ColorHub free atmosphere image: a visual bridge for Changsha's nightlife, neon streets, music bars, and late-night food routes.",
      zhNote: "ColorHub 免费氛围补充图：用于承接长沙夜生活、霓虹街区、音乐酒吧和深夜美食路线的视觉感受。",
      sourceUrl: "https://www.colorhub.me/photos/4er3l"
    },
    {
      title: "ColorHub library study mood",
      zhTitle: "长沙 · ColorHub学习空间氛围",
      image: "https://d.colorhub.me/shX0VvRZwkK09dD4l8RunmWYSRJ_2laAPzcLFjMn/0x500/euc:EwMw9AHApmAszAAwBNkHYCsSkQMwEZYA2YAIylNzQENFdF8RqKoBjKNUaAOgCsAHKAHMgA",
      alt: "Busy library study atmosphere",
      zhAlt: "繁忙图书馆学习氛围",
      note: "ColorHub free atmosphere image: it balances the lively city images with the everyday reality of studying, reading, and preparing for exams.",
      zhNote: "ColorHub 免费氛围补充图：让页面不只呈现热闹，也呈现留学真正的日常：读书、备考和在知识空间里慢慢成长。",
      sourceUrl: "https://www.colorhub.me/photos/OrGOr"
    }
  ],
  kunming: [
    {
      title: "Green Lake Park",
      zhTitle: "昆明 · 翠湖的春城心跳",
      image: commonsImage("Green_Lake_Park_3.jpg"),
      alt: "Green Lake Park in Kunming",
      zhAlt: "昆明翠湖公园",
      note: "Green Lake is Kunming's gentlest first impression: water, trees, old streets, Yunnan University nearby, and a pace that tells students they can breathe here.",
      zhNote: "翠湖是昆明最温柔的第一印象：湖水、树影、老街、旁边的云南大学，以及一种告诉学生“可以慢慢呼吸”的城市节奏。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Lake_Park_3.jpg"
    },
    {
      title: "Green Lake walk",
      zhTitle: "昆明 · 翠湖散步路线",
      image: commonsImage("Green_Lake_Park_6.jpg"),
      alt: "Walking route in Green Lake Park",
      zhAlt: "昆明翠湖公园散步路线",
      note: "A city becomes livable when students have somewhere to go without spending money. Green Lake gives language practice, photos, quiet talks, and daily reset time.",
      zhNote: "一座城市是否适合生活，要看学生有没有不花钱也愿意去的地方。翠湖给了他们练中文、拍照、聊天和恢复精力的空间。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Lake_Park_6.jpg"
    },
    {
      title: "Green Lake daily life",
      zhTitle: "昆明 · 翠湖日常生活",
      image: commonsImage("Green_Lake_Park_8.jpg"),
      alt: "Daily life around Green Lake Park",
      zhAlt: "昆明翠湖日常",
      note: "Kunming's charm is often small-scale: park benches, local residents, birds, trees, and the sense that study life does not need to be rushed.",
      zhNote: "昆明的魅力常常是小尺度的：公园长椅、本地市民、飞鸟、树木，还有一种学习生活不必被催得太急的感觉。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Lake_Park_8.jpg"
    },
    {
      title: "Northeastern Green Lake",
      zhTitle: "昆明 · 2022年的翠湖一角",
      image: commonsImage("Northeastern_of_Kunming_GreenLake,_2022.07.06.jpg"),
      alt: "Northeastern part of Kunming Green Lake in 2022",
      zhAlt: "昆明翠湖东北角",
      note: "Green Lake sits next to one of Kunming's strongest student neighborhoods, making it a natural bridge between class, cafes, old streets, and weekend walks.",
      zhNote: "翠湖旁边就是昆明很有学生气的街区之一，它自然连接课堂、咖啡馆、老街和周末散步。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Northeastern_of_Kunming_GreenLake,_2022.07.06.jpg"
    },
    {
      title: "Dianchi Lake",
      zhTitle: "昆明 · 滇池开阔的风",
      image: commonsImage("Dianchi_Lake.jpg"),
      alt: "Dianchi Lake in Kunming",
      zhAlt: "昆明滇池",
      note: "Dianchi makes Kunming feel open. Students can ride, walk, watch sunset, and understand why the Spring City is also a lake-and-mountain city.",
      zhNote: "滇池让昆明变得开阔。学生可以骑行、散步、看日落，也会理解为什么春城同时是一座湖山之城。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dianchi_Lake.jpg"
    },
    {
      title: "Dianchi lakeside hotel view",
      zhTitle: "昆明 · 滇池边的城市度假感",
      image: commonsImage("InterContinental_Kunming_Hotel_(20180212190002).jpg"),
      alt: "Lakeside view near Dianchi in Kunming",
      zhAlt: "昆明滇池边景观",
      note: "The Dianchi side shows another Kunming: more spacious, resort-like, and suitable for students who want study life to include nature and holidays.",
      zhNote: "滇池边呈现的是昆明的另一面：更开阔、更有度假感，也适合希望学习之外还能亲近自然和假日生活的学生。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:InterContinental_Kunming_Hotel_(20180212190002).jpg"
    },
    {
      title: "Yunnan University at Cuihu North Road",
      zhTitle: "昆明 · 云南大学翠湖北路",
      image: commonsImage("6-24-6640_at_Yunnan_University,_Cuihu_North_Rd_(20240214114708).jpg"),
      alt: "Yunnan University near Cuihu North Road",
      zhAlt: "昆明云南大学翠湖北路",
      note: "Yunnan University gives Kunming's student story a historic center: old campus atmosphere, lake walks, bookstores, cafes, and a serious academic anchor.",
      zhNote: "云南大学给昆明的留学故事一个有历史感的中心：老校区气质、翠湖散步、书店、咖啡馆和扎实的学术锚点。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:6-24-6640_at_Yunnan_University,_Cuihu_North_Rd_(20240214114708).jpg"
    },
    {
      title: "Yunnan University old campus",
      zhTitle: "昆明 · 云大老校区气质",
      image: commonsImage("Kunming_44.JPG"),
      alt: "Yunnan University old campus in Kunming",
      zhAlt: "昆明云南大学老校区",
      note: "Old campus scenes help students imagine something quieter than a brochure: reading paths, shaded buildings, and the feeling of growing slowly in a real place.",
      zhNote: "老校区画面让学生想象到比招生宣传更具体的东西：读书的小路、树荫下的建筑，以及在真实地方慢慢成长的感觉。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kunming_44.JPG"
    },
    {
      title: "Yunnan University campus life",
      zhTitle: "昆明 · 云大校园日常",
      image: commonsImage("Kunming_45.JPG"),
      alt: "Yunnan University campus in Kunming",
      zhAlt: "昆明云南大学校园",
      note: "For international students, a campus is not only classrooms. It is where Chinese practice, friendships, research plans, and daily confidence begin to accumulate.",
      zhNote: "对留学生来说，校园不只是教室。中文练习、朋友关系、研究计划和日常自信，都是在这样的地方一点点积累起来的。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kunming_45.JPG"
    },
    {
      title: "Dounan Flower Market access",
      zhTitle: "昆明 · 斗南花市的入口",
      image: commonsImage("Notice_for_passengers_to_Dounan_Flower_Market_at_L1_Dounan_Station_(20210322152436).jpg"),
      alt: "Passenger notice for Dounan Flower Market at Dounan Station",
      zhAlt: "昆明斗南站通往斗南花市提示",
      note: "Dounan Flower Market explains Kunming's flower identity. Even the metro route feels like a doorway into the everyday economy of the Spring City.",
      zhNote: "斗南花市解释了昆明为什么与鲜花联系得如此紧密。哪怕只是地铁站里的指示，也像是通往春城日常经济的一扇门。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Notice_for_passengers_to_Dounan_Flower_Market_at_L1_Dounan_Station_(20210322152436).jpg"
    },
    {
      title: "Green Lake Park 9",
      zhTitle: "昆明 · 花树与湖光",
      image: commonsImage("Green_Lake_Park_9.jpg"),
      alt: "Trees and lake view at Green Lake Park",
      zhAlt: "昆明翠湖花树湖光",
      note: "The Spring City is convincing because it looks livable in ordinary light: flowers, water, people walking, and a climate that becomes part of the study offer.",
      zhNote: "春城之所以有说服力，是因为它在普通光线里也显得适合生活：花、水、散步的人，以及一种会成为留学理由的气候。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Lake_Park_9.jpg"
    },
    {
      title: "Squirrels in Kunming",
      zhTitle: "昆明 · 校园边的松弛感",
      image: commonsImage("Squirrels_kunming.jpg"),
      alt: "Squirrels in Kunming",
      zhAlt: "昆明松鼠与自然日常",
      note: "Small natural details can matter to young students. They make Kunming feel less like a stressful destination and more like a city where life has room.",
      zhNote: "这些小小的自然细节对年轻学生也重要。它们让昆明不像一个紧张的目的地，而像一座生活有余地的城市。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Squirrels_kunming.jpg"
    },
    {
      title: "ColorHub flower market mood",
      zhTitle: "昆明 · ColorHub鲜花氛围",
      image: "https://c.colorhub.me/KI2hdZ2qLfBZTurv4X-llNET4YsAuJ-lAcMIORIE/0x500/euc:IYdg9ApgHGCcAmBjYBmALANgEZYKwCYAGQlPDNRCARkPPggllUOAK31GgDoArABwgBzIA",
      alt: "Floristry and flower arrangement atmosphere",
      zhAlt: "花艺手工与鲜花生活氛围",
      note: "ColorHub free atmosphere image: not a Dounan documentary photo, but it strengthens Kunming's flower-market identity and the soft daily beauty of the Spring City.",
      zhNote: "ColorHub 免费氛围补充图：这不是斗南花市纪实图，但能强化昆明“鲜花之城”的气质，以及春城日常里的柔软美感。",
      sourceUrl: "https://www.colorhub.me/photos/Zwvyj"
    },
    {
      title: "ColorHub cafe afternoon",
      zhTitle: "昆明 · ColorHub咖啡馆午后",
      image: "https://c.colorhub.me/rDyGiTWytHdZ_MjSBFm-cfbi8tD0wu_s4H4EaIhl/0x500/euc:IYVg9ApgTGDMAsUAmsICMDGAzWB2AnLhAGy7EAMAHMGlrktiLhuSGviPLqNAHQBWABwDmQA",
      alt: "Warm cafe afternoon atmosphere",
      zhAlt: "温暖咖啡馆午后氛围",
      note: "ColorHub free atmosphere image: it matches Kunming's student rhythm around Green Lake, Culture Alley, cafes, reading, and slow conversations.",
      zhNote: "ColorHub 免费氛围补充图：适合承接翠湖、文化巷、咖啡馆、读书和慢慢聊天的昆明学生节奏。",
      sourceUrl: "https://www.colorhub.me/photos/Wjd0p"
    },
    {
      title: "ColorHub quiet lake reflection",
      zhTitle: "昆明 · ColorHub湖光山色氛围",
      image: "https://n.colorhub.me/wNhLPXfG2PYvckjKDNGnLB3K7HNeLCOUeRSeBlTW/0x500/euc:AwRg9AJhYIbAHPCBWAbK4BmA7CEEBjAI03hCIhlQCYJUJMBOVAFiYDMiBTUKAOgBWABy4BzIA",
      alt: "Quiet lake and mountain reflection",
      zhAlt: "宁静山湖倒影",
      note: "ColorHub free atmosphere image: a supplemental visual for Kunming's Dianchi, lake walks, and the emotional spaciousness of plateau life.",
      zhNote: "ColorHub 免费氛围补充图：用于补充昆明滇池、湖边散步和高原生活那种开阔安静的情绪。",
      sourceUrl: "https://www.colorhub.me/photos/3VXP2"
    },
    {
      title: "ColorHub graduation confidence",
      zhTitle: "昆明 · ColorHub毕业与成长氛围",
      image: "https://d.colorhub.me/yM9fkiiEWB7ojrgMvlee9AFChhndcduIg8PoOoAx/0x500/euc:GYTg9AbArGIAwgEzAIwWAYwMxwEYHZEBTCCAEwiMQ31w2DggxAhVy2NGgDoArAByIBzIA",
      alt: "Graduate smiling with confidence",
      zhAlt: "自信毕业生笑容",
      note: "ColorHub free atmosphere image: it helps connect Kunming's affordable study life with the larger promise of graduation, growth, and a wider future.",
      zhNote: "ColorHub 免费氛围补充图：帮助把昆明的实惠留学生活，和毕业、成长、未来打开的可能性连接起来。",
      sourceUrl: "https://www.colorhub.me/photos/q3lgq"
    }
  ],
  nanning: [
    {
      title: "Nanning seen from Qingxiu Mountain",
      zhTitle: "南宁 · 青秀山俯瞰绿城",
      image: commonsImage("Nanning_seen_from_Qingxiu_Mountain.jpg"),
      alt: "Nanning city seen from Qingxiu Mountain",
      zhAlt: "从青秀山俯瞰南宁城市",
      note: "Qingxiu Mountain shows why Nanning is called a green city: the skyline, river air, and subtropical landscape sit close enough for students to reach on an ordinary weekend.",
      zhNote: "青秀山能直接说明南宁为什么被称为“中国绿城”：城市天际线、邕江气息和亚热带绿意离学生生活并不遥远，普通周末就可以抵达。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning_seen_from_Qingxiu_Mountain.jpg"
    },
    {
      title: "China-ASEAN Business Center skyline",
      zhTitle: "南宁 · 中国—东盟商务区",
      image: commonsImage("Skyline_of_China-ASEAN_Business_Center_in_Qingxiu_District.jpg"),
      alt: "Skyline of China-ASEAN Business Center in Nanning",
      zhAlt: "南宁中国—东盟商务区天际线",
      note: "This view makes Nanning's ASEAN-facing identity visible. For international students, the city is not only affordable; it also sits inside a real regional cooperation network.",
      zhNote: "这张图把南宁面向东盟的城市身份变得很直观。对留学生来说，南宁不只是生活成本友好，也处在真实的区域合作网络里。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Skyline_of_China-ASEAN_Business_Center_in_Qingxiu_District.jpg"
    },
    {
      title: "Anthropology Museum of Guangxi",
      zhTitle: "南宁 · 广西民族博物馆",
      image: commonsImage("Anthropology_Museum_of_Guangxi.jpg"),
      alt: "Anthropology Museum of Guangxi in Nanning",
      zhAlt: "南宁广西民族博物馆",
      note: "Guangxi Museum of Nationalities helps students understand Zhuang culture, regional diversity, and the cultural bridge between China and Southeast Asia.",
      zhNote: "广西民族博物馆适合帮助学生理解壮族文化、广西多民族生活，以及中国与东南亚之间的文化连接。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Anthropology_Museum_of_Guangxi.jpg"
    },
    {
      title: "Nanning Confucian Temple and Mount Qingxiu",
      zhTitle: "南宁 · 孔庙与青秀山",
      image: commonsImage("Nanning_Confucian_Temple_and_Mount_Qingxiu_Shan,_June_2023.jpg"),
      alt: "Nanning Confucian Temple and Mount Qingxiu",
      zhAlt: "南宁孔庙与青秀山",
      note: "The Confucian Temple route gives Nanning a quieter cultural layer, useful for students who want Chinese tradition to feel walkable rather than distant.",
      zhNote: "孔庙路线让南宁有了更安静的文化层次。对想理解中国传统的学生来说，它不是遥远概念，而是可以亲自走进去的现场。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning_Confucian_Temple_and_Mount_Qingxiu_Shan,_June_2023.jpg"
    },
    {
      title: "Nanning Bridge",
      zhTitle: "南宁 · 邕江与城市连接",
      image: commonsImage("Nanning_Bridge.jpg"),
      alt: "Nanning Bridge over the Yong River",
      zhAlt: "南宁大桥与邕江",
      note: "The Yong River and its bridges connect Nanning's public life: evening walks, city views, museums, parks, and the ordinary routes that make study life feel settled.",
      zhNote: "邕江和桥梁连接着南宁的公共生活：夜晚散步、城市景观、博物馆、公园和日常通勤，都让留学生活慢慢安定下来。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning_Bridge.jpg"
    },
    {
      title: "Koi Feeding in Mount Qingxiu",
      zhTitle: "南宁 · 青秀山日常绿意",
      image: commonsImage("Koi_Feeding_in_Mt_Qingxiu_Nanning.JPG"),
      alt: "Koi feeding in Mount Qingxiu, Nanning",
      zhAlt: "南宁青秀山锦鲤与湖面",
      note: "Small green scenes like this matter for students too: after classes, a city needs places to slow down, breathe, and feel friendly.",
      zhNote: "这样的绿色日常对学生也很重要：下课之后，一座城市需要有能慢下来、能呼吸、能让人放松的地方。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Koi_Feeding_in_Mt_Qingxiu_Nanning.JPG"
    },
    {
      title: "Minzu Boulevard at night",
      zhTitle: "南宁 · 民族大道夜色",
      image: commonsImage("GX 廣西 Guangxi 南寧市 Nanning 民族大道 Minzu Blvd 青秀路 Qingxiu Road night September 2023 R12S 12.jpg"),
      alt: "Minzu Boulevard and Qingxiu Road at night in Nanning",
      zhAlt: "南宁民族大道与青秀路夜景",
      note: "Night on Minzu Boulevard gives Nanning a more youthful face: lights, buses, shopping streets, and the warm outdoor rhythm that makes evenings feel open.",
      zhNote: "民族大道的夜色让南宁显得更年轻：灯光、公交、商业街和温暖的户外节奏，把下课后的晚上变成可以散步、见朋友、重新认识城市的时间。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:GX_%E5%BB%A3%E8%A5%BF_Guangxi_%E5%8D%97%E5%AF%A7%E5%B8%82_Nanning_%E6%B0%91%E6%97%8F%E5%A4%A7%E9%81%93_Minzu_Blvd_%E9%9D%92%E7%A7%80%E8%B7%AF_Qingxiu_Road_night_September_2023_R12S_12.jpg"
    },
    {
      title: "Nanning Railway Station rail transit concourse",
      zhTitle: "南宁 · 抵达城市的第一站",
      image: commonsImage("Concourse,_Nanning_Railway_Station,_Nanning_Rail_Transit_20240209.jpg"),
      alt: "Concourse at Nanning Railway Station on Nanning Rail Transit",
      zhAlt: "南宁火车站轨道交通站厅",
      note: "A good student city must be easy to arrive in and easy to leave from. Nanning's rail transit makes the city feel practical, connected, and less intimidating for newcomers.",
      zhNote: "一座适合留学的城市，首先要容易抵达，也容易出发。南宁的轨道交通让新来的学生更快建立安全感：城市不是陌生迷宫，而是一张慢慢熟悉起来的地图。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Concourse,_Nanning_Railway_Station,_Nanning_Rail_Transit_20240209.jpg"
    },
    {
      title: "Nanning International Convention and Exhibition Center",
      zhTitle: "南宁 · 国际会展中心",
      image: commonsImage("Nanning_International_Convention_%26_Exhibition_Center.jpg"),
      alt: "Nanning International Convention and Exhibition Center",
      zhAlt: "南宁国际会展中心",
      note: "The convention center is part of Nanning's ASEAN-facing identity. It turns regional cooperation into a visible place that students can point to, visit, and understand.",
      zhNote: "南宁国际会展中心是这座城市面向东盟的重要符号。对留学生来说，区域合作不再只是新闻里的词，而是能被看见、能被走近、能与未来专业方向联系起来的地方。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning_International_Convention_%26_Exhibition_Center.jpg"
    },
    {
      title: "China-ASEAN Expo at Nanning International Convention Center",
      zhTitle: "南宁 · 中国—东盟博览会现场",
      image: commonsImage("南宁国际会展中心，中国—东盟博览会.jpg"),
      alt: "China-ASEAN Expo at Nanning International Convention Center",
      zhAlt: "南宁国际会展中心中国—东盟博览会",
      note: "For Southeast Asian students especially, the China-ASEAN Expo explains why Nanning feels close to home and close to opportunity at the same time.",
      zhNote: "对东南亚学生来说，中国—东盟博览会很能说明南宁的特别之处：它既有熟悉的区域亲近感，也有通向中国市场、中文学习和未来职业机会的现实入口。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%E5%8D%97%E5%AE%81%E5%9B%BD%E9%99%85%E4%BC%9A%E5%B1%95%E4%B8%AD%E5%BF%83%EF%BC%8C%E4%B8%AD%E5%9B%BD%E2%80%94%E4%B8%9C%E7%9B%9F%E5%8D%9A%E8%A7%88%E4%BC%9A.jpg"
    },
    {
      title: "Minzu Avenue daytime street life",
      zhTitle: "南宁 · 民族大道日常街景",
      image: commonsImage("GX 廣西省 Guangxi 南寧市 Nanning 青秀區 Qingxiu District 民族大道 Minzu Avenue September 2023 R12S 14.jpg"),
      alt: "Minzu Avenue street scene in Qingxiu District, Nanning",
      zhAlt: "南宁青秀区民族大道街景",
      note: "Daytime Minzu Avenue shows the daily city rather than a postcard: broad roads, trees, shops, traffic, and the ordinary routes students will actually use.",
      zhNote: "白天的民族大道呈现的不是明信片式景观，而是真正会进入留学生日常的南宁：道路、树荫、商场、公交和每一次去上课、吃饭、见朋友的路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:GX_%E5%BB%A3%E8%A5%BF%E7%9C%81_Guangxi_%E5%8D%97%E5%AF%A7%E5%B8%82_Nanning_%E9%9D%92%E7%A7%80%E5%8D%80_Qingxiu_District_%E6%B0%91%E6%97%8F%E5%A4%A7%E9%81%93_Minzu_Avenue_September_2023_R12S_14.jpg"
    },
    {
      title: "Jinhu Square Station entrance",
      zhTitle: "南宁 · 金湖广场地铁入口",
      image: commonsImage("Exit_F1,_Jinhu_Square_Station,_Nanning_Rail_Transit_20200109.jpg"),
      alt: "Exit F1 at Jinhu Square Station on Nanning Rail Transit",
      zhAlt: "南宁轨道交通金湖广场站 F1 出入口",
      note: "Metro entrances are small but important details for international students. They show whether a city can support independent movement, part-time exploration, and safe evenings out.",
      zhNote: "地铁口是很小的城市细节，却关系到留学生能不能独立行动、能不能自己探索、晚上出门是否安心。南宁的便利感，常常就藏在这样的日常入口里。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Exit_F1,_Jinhu_Square_Station,_Nanning_Rail_Transit_20200109.jpg"
    },
    {
      title: "Chaoyang Road and Minzu Boulevard",
      zhTitle: "南宁 · 朝阳路与民族大道",
      image: commonsImage("N-1732_at_Chaoyang_Rd,_Minzu_Blvd_(20240217074440).jpg"),
      alt: "Bus and street scene at Chaoyang Road and Minzu Boulevard in Nanning",
      zhAlt: "南宁朝阳路与民族大道街景",
      note: "Street-level Nanning is useful for students to imagine real life: buses, crossings, shops, errands, and the rhythm of a city that is affordable without feeling small.",
      zhNote: "街面上的南宁最能帮助学生想象真实生活：公交、路口、商店、日常采购和城市人流。它不昂贵，也不封闭，是一种容易进入的城市节奏。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:N-1732_at_Chaoyang_Rd,_Minzu_Blvd_(20240217074440).jpg"
    },
    {
      title: "Nanning Mosque",
      zhTitle: "南宁 · 多元生活的一角",
      image: commonsImage("Nanning.Qingzhensi.2.jpg"),
      alt: "Nanning Mosque",
      zhAlt: "南宁清真寺",
      note: "This scene adds another layer to Nanning's openness. For Muslim students or students from culturally diverse countries, visible everyday diversity can make a city feel more welcoming.",
      zhNote: "这张图让南宁的开放性多了一层具体感。对穆斯林学生，或来自多元文化国家的学生来说，城市里看得见的日常多样性，会让留学生活更容易产生亲近感。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning.Qingzhensi.2.jpg"
    },
    {
      title: "ColorHub Southeast Asian night market",
      zhTitle: "南宁 · ColorHub东南亚夜市氛围",
      image: "https://n.colorhub.me/5aQrbC71TVELLFe_hBfBlwvULPLleuz_AtEVCTRm/0x500/euc:CYYw9AnAZmDMCmICGBGArLE9ZqgJmCTTxQDZ0B2BApADguABZZYK3RoA6AKwAd4A5kA",
      alt: "Southeast Asian night market walking atmosphere",
      zhAlt: "东南亚夜市漫步氛围",
      note: "ColorHub free atmosphere image: not a Nanning documentary photo, but it fits the city's ASEAN-facing warmth, night life, and regional familiarity.",
      zhNote: "ColorHub 免费氛围补充图：这不是南宁纪实照片，但很贴合南宁面向东盟的温暖感、夜生活和区域亲近感。",
      sourceUrl: "https://www.colorhub.me/photos/Jqjky"
    },
    {
      title: "ColorHub tropical fruit stall",
      zhTitle: "南宁 · ColorHub水果摊与热带气息",
      image: "https://d.colorhub.me/4Lbo3lIrsxCMSfS359aXFkVv5yfnNQGN3YUPLYjZ/0x500/euc:MYQw9AbAnGICxQOxxAVhQRmAZgAy4CMoATCOXAU1UOxIDMEMCL87RoA6AKwAcBzIA",
      alt: "Southeast Asian fruit stall atmosphere",
      zhAlt: "东南亚水果摊氛围",
      note: "ColorHub free atmosphere image: a good supplement for Nanning's warm climate, fruit snacks, suanye flavors, and the comfort many tropical-country students may feel.",
      zhNote: "ColorHub 免费氛围补充图：用于补充南宁温暖气候、水果小吃、酸嘢味觉，以及许多热带国家学生容易感到熟悉的生活气息。",
      sourceUrl: "https://www.colorhub.me/photos/2GwG6"
    },
    {
      title: "ColorHub late-night street food",
      zhTitle: "南宁 · ColorHub深夜小吃摊",
      image: "https://c.colorhub.me/BeGEVvW2k71uhCZxneuVahsr1gO0J_FkHK8q6y-D/0x500/euc:OwTg9AhgxmAMUCMCmAzYECMKAsATX82AzCBAgGzCLYQQogJGwbmy2jQB0AVgA5IBzIA",
      alt: "Busy late-night street food stall",
      zhAlt: "深夜小吃摊忙碌场景",
      note: "ColorHub free atmosphere image: it supports Nanning's food story, where laoyou noodles, suanye, night markets, and affordable snacks shape student life.",
      zhNote: "ColorHub 免费氛围补充图：用于承接南宁老友粉、酸嘢、夜市和实惠小吃构成的学生生活味道。",
      sourceUrl: "https://www.colorhub.me/photos/0B8bw"
    },
    {
      title: "ColorHub multi-cultural food truck",
      zhTitle: "南宁 · ColorHub多元小吃车氛围",
      image: "https://c.colorhub.me/lueva02hdfS6Dt62Ce42sLoMy0_mEjDCMUQd05gN/0x500/euc:Kwdg9AjApmAmBMAjALPAnAZhADgMbZEQDZcUQQBDRRWBABgvhKKSJF1GgDoArABygBzIA",
      alt: "Halal street food truck at night",
      zhAlt: "夜色中的清真小吃车",
      note: "ColorHub free atmosphere image: it echoes Nanning's openness to students from different cultural and dietary backgrounds.",
      zhNote: "ColorHub 免费氛围补充图：呼应南宁对不同文化、不同饮食背景学生的开放度和包容感。",
      sourceUrl: "https://www.colorhub.me/photos/ojK44"
    }
  ]
};

function cleanTitle(title: string) {
  return title
    .replace(/^File:/, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function noteTitle(item: WikipediaMediaItem) {
  return item.caption?.text?.trim() || (item.title ? cleanTitle(item.title) : "city view");
}

function shortTitle(value: string, cityName: string) {
  return value
    .replace(new RegExp(`\\b${cityName}\\b`, "gi"), "")
    .replace(/\s+/g, " ")
    .replace(/^[:：,\s-]+|[:：,\s-]+$/g, "")
    .slice(0, 72)
    .trim() || `${cityName} city view`;
}

function mediaText(value: string) {
  return value.toLowerCase().replace(/[_-]+/g, " ");
}

function hasPre2000Year(text: string) {
  const years = Array.from(text.matchAll(yearPattern), (match) => Number(match[0]));
  return years.some((year) => year < 2000);
}

function isModernVisual(text: string) {
  const normalized = mediaText(text);
  return !archivalImagePattern.test(normalized) && !hasPre2000Year(normalized);
}

function isSuitableScene(text: string) {
  return !unsuitableImagePattern.test(mediaText(text));
}

function isPhotoFile(title: string) {
  const normalized = title.toLowerCase();
  return /\.(jpe?g|webp)$/i.test(normalized);
}

function metadataText(metadata?: Record<string, { value?: string }>) {
  if (!metadata) return "";
  return [
    metadata.DateTimeOriginal?.value,
    metadata.DateTime?.value,
    metadata.ObjectName?.value,
    metadata.ImageDescription?.value
  ]
    .filter(Boolean)
    .join(" ");
}

function imageMood(title: string): ImageMood {
  const value = mediaText(title);
  if (/\b(skyline|tower|cbd|downtown|night|aerial|drone|skyscraper)\b/.test(value)) return "skyline";
  if (/\b(station|railway|airport|terminal|train)\b/.test(value)) return "arrival";
  if (/\b(university|campus|college|library)\b/.test(value)) return "campus";
  if (/\b(lake|river|park|garden|mountain|forest|wetland|coast|beach|bay|panda)\b/.test(value)) return "nature";
  if (/\b(street|road|avenue|square|plaza|market|pedestrian|walk|shopping)\b/.test(value)) return "street";
  if (/\b(temple|museum|pagoda|wall|gate|palace|monument|heritage|historic|ancient|mosque)\b/.test(value)) return "heritage";
  if (/\b(food|restaurant|noodle|tea|snack|cuisine|market)\b/.test(value)) return "food";
  return "daily";
}

function zhGalleryTitle(city: string, title: string, index: number) {
  const labels: Record<ImageMood, string[]> = {
    skyline: ["现代天际线", "城市生长", "灯火与楼群"],
    arrival: ["抵达城市", "车站与远方", "出发的入口"],
    campus: ["校园日常", "读书的地方", "青春坐标"],
    nature: ["山水绿意", "周末去处", "自然呼吸"],
    street: ["街区生活", "城市步调", "人间烟火"],
    heritage: ["历史现场", "文化记忆", "古今之间"],
    food: ["城市味道", "餐桌记忆", "烟火滋味"],
    daily: ["真实一角", "生活切面", "城市表情"]
  };
  const options = labels[imageMood(title)];
  return `${city} · ${options[index % options.length]}`;
}

function cityNote(city: string, title: string, index: number) {
  const mood = imageMood(title);
  const notes: Record<ImageMood, string[]> = {
    skyline: [
      `${title} shows ${city} in motion: new buildings, open horizons, and the visible confidence of a city still growing.`,
      `In this view, ${city} feels contemporary and ambitious, the kind of place where study, internships, and weekend walks can belong to the same rhythm.`
    ],
    arrival: [
      `${title} is not just infrastructure. It is the first threshold of ${city}, where a student's map begins to turn into a real journey.`,
      `Stations and airports tell a quiet truth about ${city}: it is connected, reachable, and ready to carry young people toward new plans.`
    ],
    campus: [
      `${title} brings the idea of studying in ${city} down to earth: libraries, paths, classrooms, and ordinary days with room to grow.`,
      `A campus scene makes ${city} feel less abstract, because the city is no longer only a destination but a place to read, meet people, and become someone new.`
    ],
    nature: [
      `${title} gives ${city} a softer register, with water, trees, or open air balancing the pace of study and urban life.`,
      `This side of ${city} matters for students too: after classes, a city also needs places to breathe, wander, and reset.`
    ],
    street: [
      `${title} catches ${city} at street level, where the real personality of a place usually appears first.`,
      `The everyday movement in ${title} makes ${city} easier to imagine: errands, conversations, meals, and the small discoveries between classes.`
    ],
    heritage: [
      `${title} lets ${city}'s history stay present without turning it into a museum piece; the past becomes part of today's route through the city.`,
      `For international students, this kind of place makes ${city} memorable: culture is not distant here, it can be walked through.`
    ],
    food: [
      `${title} reminds students that a city is learned through taste as much as through classrooms.`,
      `Food is often the fastest doorway into ${city}: it turns unfamiliar streets into places with smell, warmth, and memory.`
    ],
    daily: [
      `${title} gives ${city} a human scale, the kind of detail that helps a student imagine not only arriving, but living here.`,
      `This image keeps ${city} concrete: light, buildings, movement, and the ordinary texture that slowly becomes a student's second home.`
    ]
  };

  return notes[mood][index % notes[mood].length];
}

function zhCityNote(city: string, title: string, index: number) {
  const mood = imageMood(title);
  const notes: Record<ImageMood, string[]> = {
    skyline: [
      `这类画面最能说明${city}不是停在旧照片里的名字。楼群、天光和城市轮廓一起向前，学生来到这里，感受到的是正在发生的中国。`,
      `${title}里的${city}很有当代感：道路打开，建筑生长，年轻人可以把学习、实习和周末探索放进同一座城市。`
    ],
    arrival: [
      `车站和机场不只是交通节点，它们像是${city}递给远方学生的第一只手。一个人拖着行李抵达，新的生活就从这里开始有了方向。`,
      `${title}让${city}显得很可抵达。对留学生来说，城市的连接能力本身就是安全感，也是走向更大中国的起点。`
    ],
    campus: [
      `${title}把“来${city}读书”变得具体：不是一句招生文字，而是清晨的路、图书馆的灯、课后同行的人。`,
      `校园画面有一种安静的力量。它提醒学生，${city}不只是目的地，也会慢慢变成写论文、交朋友、重新认识自己的地方。`
    ],
    nature: [
      `${title}给${city}留出柔软的一面。水面、树影或山色会把学习的紧张感放慢，让周末也有可以呼吸的去处。`,
      `一座适合读书的城市，也要有让人恢复能量的角落。${title}展示的正是${city}这种松弛而真实的生活底色。`
    ],
    street: [
      `${title}里的${city}贴近地面，也贴近生活。街道、广场和人流会告诉学生：这里不是遥远的符号，而是每天都能走进去的日常。`,
      `城市的性格常常藏在街区里。看见${title}，就能想象在${city}买一杯热饮、等一班车、和新朋友慢慢熟悉这座城。`
    ],
    heritage: [
      `${title}让${city}的历史留在今天的路线上。它不是被封存的背景，而是学生可以亲自走过、停留、理解的文化现场。`,
      `对国际学生来说，${city}最迷人的地方之一，是过去和现在并不分开。${title}让这种时间的层次变得清楚。`
    ],
    food: [
      `认识${city}，有时候从一口味道开始比从一张地图开始更快。${title}让城市有了香气、温度和可以分享的记忆。`,
      `${title}把${city}的烟火气带出来了。留学生活不会只有课堂，也会有夜市、餐桌和那些让人想念的本地味道。`
    ],
    daily: [
      `${title}让${city}有了具体的表情。真正影响留学体验的，往往正是这些光线、街景、公共空间和慢慢熟悉起来的人间细节。`,
      `这不是一张为了“好看”而存在的图，它更像${city}生活的一小段证词：年轻人可以在这里学习，也可以在这里把日子过出形状。`
    ]
  };

  return notes[mood][index % notes[mood].length];
}

function isSuitableMediaItem(item: WikipediaMediaItem) {
  if (item.type !== "image" || item.showInGallery === false || !item.title || !item.srcset?.length) return false;
  const title = item.title.toLowerCase();
  const searchableText = `${item.title} ${item.caption?.text ?? ""}`;
  if (!isPhotoFile(title) || title.endsWith(".svg") || title.endsWith(".gif") || title.endsWith(".tif") || title.endsWith(".tiff")) return false;
  return isSuitableScene(searchableText) && isModernVisual(searchableText);
}

function matchesCity(text: string, fallback: CityVisualFallback, slug: string) {
  const normalized = text.toLowerCase().replace(/['’]/g, "").replace(/[_-]+/g, " ");
  const cityName = fallback.name.toLowerCase().replace(/['’]/g, "").replace(/[_-]+/g, " ");
  const zhName = fallback.zhName.toLowerCase();
  const aliases = cityMediaAliases[slug] ?? [];

  return normalized.includes(cityName) || normalized.includes(zhName) || aliases.some((alias) => normalized.includes(alias));
}

function isLocalMediaItem(item: WikipediaMediaItem, fallback: CityVisualFallback, slug: string) {
  return matchesCity(`${item.title ?? ""} ${item.caption?.text ?? ""}`, fallback, slug);
}

function isSuitableCommonsPage(page: CommonsSearchPage, fallback: CityVisualFallback, slug: string) {
  if (!page.title || !page.imageinfo?.[0]?.thumburl) return false;
  const title = page.title.toLowerCase();
  const imageInfo = page.imageinfo[0];
  const searchableText = `${page.title} ${imageInfo.descriptionurl ?? ""} ${metadataText(imageInfo.extmetadata)}`;
  const mime = imageInfo.mime ?? "";
  if (!mime.startsWith("image/")) return false;
  if (!isPhotoFile(title) || title.endsWith(".svg") || title.endsWith(".gif") || title.endsWith(".tif") || title.endsWith(".tiff")) return false;
  return isSuitableScene(searchableText) && isModernVisual(searchableText) && matchesCity(page.title, fallback, slug);
}

function toGalleryItem(item: WikipediaMediaItem, fallback: CityVisualFallback, index: number): CityVisualGalleryItem | null {
  const src = item.srcset?.find((entry) => entry.scale === "2x")?.src ?? item.srcset?.[0]?.src;
  if (!item.title || !src) return null;

  const title = noteTitle(item);
  const displayTitle = shortTitle(title, fallback.name);

  return {
    title: displayTitle,
    zhTitle: zhGalleryTitle(fallback.zhName, displayTitle, index),
    image: normalizeImageUrl(src),
    alt: `${fallback.name}: ${displayTitle}`,
    zhAlt: `${fallback.zhName}城市图像 ${index + 1}`,
    note: cityNote(fallback.name, displayTitle, index),
    zhNote: zhCityNote(fallback.zhName, displayTitle, index),
    sourceUrl: commonsPage(item.title)
  };
}

function commonsPageToGalleryItem(page: CommonsSearchPage, fallback: CityVisualFallback, index: number): CityVisualGalleryItem | null {
  const imageInfo = page.imageinfo?.[0];
  if (!page.title || !imageInfo?.thumburl) return null;
  const title = shortTitle(cleanTitle(page.title), fallback.name);

  return {
    title,
    zhTitle: zhGalleryTitle(fallback.zhName, title, index),
    image: imageInfo.thumburl || imageInfo.url || commonsImage(page.title.replace(/^File:/, "")),
    alt: `${fallback.name}: ${title}`,
    zhAlt: `${fallback.zhName}城市图像 ${index + 1}`,
    note: cityNote(fallback.name, title, index),
    zhNote: zhCityNote(fallback.zhName, title, index),
    sourceUrl: imageInfo.descriptionurl || commonsPage(page.title)
  };
}

async function fetchWikipediaGallery(slug: string, fallback: CityVisualFallback) {
  try {
    const response = await fetch(mediaListEndpoint(fallback.name), {
      headers: {
        "User-Agent": "SilkStudy/1.0 (https://silkstudy.com)"
      },
      next: {
        revalidate: 60 * 60 * 24 * 7
      }
    });

    if (!response.ok) return [];
    const data = await response.json().catch(() => null) as { items?: WikipediaMediaItem[] } | null;
    const seen = new Set<string>();

    return (data?.items ?? [])
      .filter(isSuitableMediaItem)
      .filter((item) => isLocalMediaItem(item, fallback, slug))
      .filter((item) => {
        if (!item.title || seen.has(item.title)) return false;
        seen.add(item.title);
        return true;
      })
      .map((item, index) => toGalleryItem(item, fallback, index))
      .filter((item): item is CityVisualGalleryItem => Boolean(item))
      .slice(0, 6);
  } catch {
    return [];
  }
}

async function fetchCommonsSearchGallery(slug: string, fallback: CityVisualFallback, startIndex = 0) {
  const queries = [
    ...(cityModernSearchTerms[slug] ?? []),
    `${fallback.name} skyline China`,
    `${fallback.name} night skyline`,
    `${fallback.name} CBD China`,
    `${fallback.name} downtown China`,
    `${fallback.name} shopping street`,
    `${fallback.name} pedestrian street`,
    `${fallback.name} university China`,
    `${fallback.name} campus China`,
    `${fallback.name} railway station`,
    `${fallback.name} metro station`,
    `${fallback.name} park China`,
    `${fallback.name} street China`,
    `${fallback.name} China city photo`,
    `${fallback.name} 2024`,
    `${fallback.name} 2023`,
    `${fallback.name} 2022`,
    `${fallback.name} landmark`
  ];
  const seen = new Set<string>();
  const items: CityVisualGalleryItem[] = [];

  for (const query of queries) {
    try {
      const response = await fetch(commonsSearchEndpoint(query), {
        headers: {
          "User-Agent": "SilkStudy/1.0 (https://silkstudy.com)"
        },
        next: {
          revalidate: 60 * 60 * 24 * 14
        }
      });

      if (!response.ok) continue;
      const data = await response.json().catch(() => null) as { query?: { pages?: Record<string, CommonsSearchPage> } } | null;
      const pages = Object.values(data?.query?.pages ?? {});
      let queryAdded = 0;

      for (const page of pages) {
        if (!isSuitableCommonsPage(page, fallback, slug) || !page.title || seen.has(page.title)) continue;
        const item = commonsPageToGalleryItem(page, fallback, startIndex + items.length);
        if (!item) continue;
        seen.add(page.title);
        items.push(item);
        queryAdded += 1;
        if (items.length >= 6) return items;
        if (queryAdded >= 2) break;
      }
    } catch {
      continue;
    }
  }

  return items;
}

function fallbackGallery(fallback: CityVisualFallback, startIndex = 0) {
  return fallbackRealImages.map((item, index) => {
    const sequence = startIndex + index;

    return {
      title: `${fallback.name}: ${item.title}`,
      zhTitle: zhGalleryTitle(fallback.zhName, item.title, sequence),
      image: commonsImage(item.file),
      alt: `${fallback.name}: ${item.title}`,
      zhAlt: `${fallback.zhName}城市图像 ${sequence + 1}`,
      note: cityNote(fallback.name, item.title, sequence),
      zhNote: zhCityNote(fallback.zhName, item.zhTitle, sequence),
      sourceUrl: item.sourceUrl
    };
  });
}

export async function getCityVisualGallery(slug: string, fallback?: CityVisualFallback) {
  if (!fallback) return [];
  if (curatedCityVisualGalleries[slug]) return curatedCityVisualGalleries[slug];

  const commonsItems = await fetchCommonsSearchGallery(slug, fallback);
  const wikipediaItems = commonsItems.length >= 6 ? [] : await fetchWikipediaGallery(slug, fallback);
  const supplements = fallbackGallery(fallback, commonsItems.length + wikipediaItems.length);
  const seenImages = new Set<string>();

  return [...commonsItems, ...wikipediaItems, ...supplements]
    .filter((item) => {
      if (seenImages.has(item.image)) return false;
      seenImages.add(item.image);
      return true;
    })
    .slice(0, 6);
}
