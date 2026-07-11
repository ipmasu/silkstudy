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

type ImageMood = "skyline" | "arrival" | "campus" | "nature" | "street" | "heritage" | "food" | "daily";

function normalizeImageUrl(src: string) {
  return src.startsWith("//") ? `https:${src}` : src;
}

const curatedCityVisualGalleries: Record<string, CityVisualGalleryItem[]> = {
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
