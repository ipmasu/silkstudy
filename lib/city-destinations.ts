import { cities, type University } from "@/lib/site-data";
import { provinceShowcases } from "@/lib/province-showcase";

export type CityDestination = {
  slug: string;
  name: string;
  zhName: string;
  provinceSlug: string;
  provinceName: string;
  zhProvinceName: string;
  livingCost: string;
  zhLivingCost: string;
  climate: string;
  zhClimate: string;
  visaConvenience: string;
  zhVisaConvenience: string;
  summary: string;
  zhSummary: string;
  tourism: string;
  zhTourism: string;
  internships: string;
  zhInternships: string;
  lifestyleTags: string[];
  zhLifestyleTags: string[];
  image: string;
  imageAlt: string;
  zhImageAlt: string;
};

type CityProfile = Partial<Omit<CityDestination, "slug" | "provinceSlug" | "provinceName" | "zhProvinceName" | "image">>;

const cityNameZh: Record<string, string> = {
  anshan: "鞍山",
  beijing: "北京",
  changchun: "长春",
  changsha: "长沙",
  chengdu: "成都",
  chongqing: "重庆",
  dalian: "大连",
  fuzhou: "福州",
  ganzhou: "赣州",
  guangzhou: "广州",
  guilin: "桂林",
  guiyang: "贵阳",
  haikou: "海口",
  hangzhou: "杭州",
  harbin: "哈尔滨",
  hefei: "合肥",
  heihe: "黑河",
  hohhot: "呼和浩特",
  jinan: "济南",
  jingdezhen: "景德镇",
  jingzhou: "荆州",
  jinzhou: "锦州",
  kunming: "昆明",
  lanzhou: "兰州",
  mudanjiang: "牡丹江",
  nanchang: "南昌",
  nanjing: "南京",
  nanning: "南宁",
  ningbo: "宁波",
  qingdao: "青岛",
  qiqihar: "齐齐哈尔",
  qinhuangdao: "秦皇岛",
  shanghai: "上海",
  shantou: "汕头",
  shenyang: "沈阳",
  shihezi: "石河子",
  shijiazhuang: "石家庄",
  suzhou: "苏州",
  taiyuan: "太原",
  tianjin: "天津",
  urumqi: "乌鲁木齐",
  wenzhou: "温州",
  wuhan: "武汉",
  wuxi: "无锡",
  xiamen: "厦门",
  xian: "西安",
  xiangtan: "湘潭",
  xining: "西宁",
  yangzhou: "扬州",
  yanji: "延吉",
  yantai: "烟台",
  yichang: "宜昌",
  yinchuan: "银川",
  zhengzhou: "郑州"
};

const cityProfiles: Record<string, CityProfile> = {
  beijing: {
    livingCost: "$750-1,100/month",
    zhLivingCost: "约 750-1,100 美元/月",
    climate: "Cold dry winters, warm summers",
    zhClimate: "冬季寒冷干燥，夏季温暖",
    visaConvenience: "Excellent embassy, airport, and university support",
    zhVisaConvenience: "使馆、机场和大学支持资源非常完善",
    summary: "Beijing offers elite universities, policy networks, museums, startups, and the strongest cultural first impression for many students.",
    zhSummary: "北京拥有顶尖大学、政策资源、博物馆、创业网络，也是很多学生理解中国的第一站。",
    tourism: "The Great Wall, Forbidden City, hutongs, galleries, and weekend mountain routes make Beijing highly memorable.",
    zhTourism: "长城、故宫、胡同、艺术区和周末山地路线，让北京有很强记忆点。",
    internships: "Strong for policy, AI, education, media, research labs, international organizations, and startups.",
    zhInternships: "政策、AI、教育、传媒、实验室、国际组织和创业公司机会突出。",
    lifestyleTags: ["Museums", "Startups", "Historic neighborhoods"],
    zhLifestyleTags: ["博物馆", "创业", "历史街区"]
  },
  shanghai: {
    livingCost: "$850-1,300/month",
    zhLivingCost: "约 850-1,300 美元/月",
    climate: "Humid subtropical with mild winters",
    zhClimate: "湿润亚热带气候，冬季较温和",
    visaConvenience: "Excellent international transport and student services",
    zhVisaConvenience: "国际交通和学生服务非常便利",
    summary: "Shanghai is ideal for students seeking business, finance, medicine, design, and global career exposure.",
    zhSummary: "上海适合追求商科、金融、医学、设计和全球职业机会的学生。",
    tourism: "The Bund, museums, creative districts, water towns, and nearby Hangzhou/Suzhou trips make weekends easy.",
    zhTourism: "外滩、博物馆、创意街区、水乡，以及周边杭州苏州旅行都很方便。",
    internships: "Finance, consulting, biotech, design, trade, and multinational company internships are strongest here.",
    zhInternships: "金融、咨询、生物医药、设计、贸易和跨国公司实习资源最突出。",
    lifestyleTags: ["Finance", "Design", "Global city"],
    zhLifestyleTags: ["金融", "设计", "国际都市"]
  },
  hangzhou: {
    livingCost: "$650-950/month",
    zhLivingCost: "约 650-950 美元/月",
    climate: "Mild, humid, four distinct seasons",
    zhClimate: "温和湿润，四季分明",
    summary: "Hangzhou blends a beautiful student lifestyle with China's digital economy and strong research universities.",
    zhSummary: "杭州把高质量学生生活、中国数字经济和研究型大学结合得很好。",
    tourism: "West Lake, tea mountains, temples, canals, and nearby water towns give Hangzhou a calm but premium feel.",
    zhTourism: "西湖、茶山、寺庙、运河和周边水乡，让杭州气质安静但高级。",
    internships: "Strong for internet platforms, e-commerce, AI applications, digital trade, and product roles.",
    zhInternships: "互联网平台、电商、AI 应用、数字贸易和产品岗位机会强。"
  },
  guangzhou: {
    livingCost: "$600-900/month",
    zhLivingCost: "约 600-900 美元/月",
    climate: "Warm and humid subtropical climate",
    zhClimate: "温暖湿润的亚热带气候",
    summary: "Guangzhou is practical, international, food-rich, and connected to the Greater Bay Area career ecosystem.",
    zhSummary: "广州务实、国际化、美食丰富，并连接大湾区职业生态。",
    tourism: "Cantonese food, old neighborhoods, Pearl River nights, and fast access to Shenzhen, Hong Kong, and Macau.",
    zhTourism: "粤菜、老街区、珠江夜景，以及去深圳、香港、澳门的便利交通。",
    internships: "Strong for trade, medicine, manufacturing, supply chain, e-commerce, and Greater Bay Area business.",
    zhInternships: "贸易、医学、制造、供应链、电商和大湾区商科机会突出。"
  },
  wuhan: {
    livingCost: "$450-750/month",
    zhLivingCost: "约 450-750 美元/月",
    climate: "Hot summers and cool winters",
    zhClimate: "夏季炎热，冬季凉爽",
    summary: "Wuhan is one of China's largest student cities, with strong labs, affordable living, and central transport.",
    zhSummary: "武汉是中国最大的学生城市之一，实验室强、生活成本友好、交通居中。",
    tourism: "Yangtze River views, East Lake, campus scenery, breakfast culture, and nearby central-China routes.",
    zhTourism: "长江、东湖、校园风景、过早文化，以及中部周边旅行路线。",
    internships: "Optics Valley, engineering, medicine, transport, automotive, and research labs are key opportunities.",
    zhInternships: "光谷、工程、医学、交通、汽车和科研实验室是核心机会。"
  },
  xian: {
    livingCost: "$430-700/month",
    zhLivingCost: "约 430-700 美元/月",
    climate: "Dry climate with hot summers and cold winters",
    zhClimate: "气候偏干，夏热冬冷",
    summary: "Xi'an combines ancient capital energy with aerospace, electronics, and serious engineering education.",
    zhSummary: "西安结合古都文化、航天电子产业和严肃工程教育。",
    tourism: "Terracotta Warriors, city wall cycling, Muslim Quarter food, museums, and Silk Road history.",
    zhTourism: "兵马俑、古城墙骑行、回民街美食、博物馆和丝路历史。",
    internships: "Aerospace, electronics, semiconductors, rail, research institutes, and engineering companies stand out.",
    zhInternships: "航天、电子、半导体、轨道交通、研究院和工程企业机会突出。"
  },
  chengdu: {
    livingCost: "$500-800/month",
    zhLivingCost: "约 500-800 美元/月",
    climate: "Mild and humid",
    zhClimate: "温和湿润",
    summary: "Chengdu is relaxed, food-rich, student-friendly, and increasingly strong in technology and healthcare.",
    zhSummary: "成都松弛、美食丰富、学生友好，并在科技和医疗方向持续增强。",
    tourism: "Tea houses, old streets, food markets, mountain routes, and western Sichuan trips are major draws.",
    zhTourism: "茶馆、老街、美食市集、山地路线和川西旅行都很有吸引力。",
    internships: "Healthcare, electronics, gaming, software, cultural industries, and western China business are growing.",
    zhInternships: "医疗、电子、游戏、软件、文创和西部商业机会正在增长。"
  },
  kunming: {
    livingCost: "$400-700/month",
    zhLivingCost: "约 400-700 美元/月",
    climate: "Mild spring-like plateau climate",
    zhClimate: "四季温和、春城气候明显的高原城市",
    visaConvenience: "Southwest China gateway with international student services and Southeast Asia links",
    zhVisaConvenience: "面向南亚东南亚的西南门户，大学国际学生服务和城市服务持续完善",
    summary: "Kunming is relaxed, affordable, diverse, and rich in flowers, lakes, food, ethnic culture, and Southeast Asia-facing study routes.",
    zhSummary: "昆明松弛、实惠、多元，拥有鲜花、湖泊、美食、民族文化和面向南亚东南亚的留学路线。",
    tourism: "Green Lake, Dianchi Lake, Dounan Flower Market, Yunnan University, Culture Alley, ethnic routes, Dali, Lijiang, and Yuanyang make Kunming highly attractive.",
    zhTourism: "翠湖、滇池、斗南花市、云南大学、文化巷、民族文化路线，以及大理、丽江、元阳等延伸线路，让昆明很适合年轻人探索。",
    internships: "Chinese language, tourism, agriculture, biodiversity, medicine, engineering, regional trade, education, and Southeast Asia-facing cooperation are strong contexts.",
    zhInternships: "中文、旅游、农业、生物多样性、医学、工程、区域贸易、教育和面向东南亚的合作，是昆明较有潜力的方向。",
    lifestyleTags: ["Spring City climate", "Ethnic culture", "Flower markets"],
    zhLifestyleTags: ["春城气候", "民族文化", "鲜花市场"]
  }
};

function titleFromSlug(slug: string) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function tierCost(slug: string, provinceSlug: string) {
  if (["beijing", "shanghai"].includes(slug)) return ["$750-1,300/month", "约 750-1,300 美元/月"];
  if (["hangzhou", "guangzhou", "xiamen", "nanjing", "dalian", "qingdao", "tianjin"].includes(slug)) return ["$550-950/month", "约 550-950 美元/月"];
  if (["xinjiang", "gansu", "qinghai", "ningxia", "guizhou", "jiangxi", "shanxi", "heilongjiang", "jilin"].includes(provinceSlug)) return ["$350-650/month", "约 350-650 美元/月"];
  return ["$430-780/month", "约 430-780 美元/月"];
}

function defaultProfile(slug: string, name: string, zhName: string, provinceSlug: string, provinceName: string, zhProvinceName: string, provinceTags: string[]): Required<CityProfile> {
  const [livingCost, zhLivingCost] = tierCost(slug, provinceSlug);

  return {
    name,
    zhName,
    livingCost,
    zhLivingCost,
    climate: "Seasonal city climate; verify details before arrival",
    zhClimate: "城市气候具有季节变化，出发前建议核验细节",
    visaConvenience: "University international offices guide registration, residence permits, and arrival steps",
    zhVisaConvenience: "大学国际办公室通常会协助注册、居留许可和入境后流程",
    summary: `${name} is a study city in ${provinceName}. It connects local universities with daily life, regional culture, weekend travel, and industry exposure that should be compared before applying.`,
    zhSummary: `${zhName}是${zhProvinceName}的留学城市，可把当地高校、日常生活、区域文化、周末旅行和产业机会一起比较。`,
    tourism: `${provinceTags.slice(0, 3).join(", ")} are useful travel and culture signals for students considering ${name}.`,
    zhTourism: `${provinceTags.slice(0, 3).join("、")} 是学生考虑 ${zhName} 时可以关注的旅行与文化线索。`,
    internships: `Internship fit depends on ${name}'s local industries, the student's major, language ability, and university partnerships.`,
    zhInternships: `${zhName}的实习匹配取决于本地产业、学生专业、语言能力和学校合作资源。`,
    lifestyleTags: provinceTags.slice(0, 3),
    zhLifestyleTags: provinceTags.slice(0, 3),
    imageAlt: `${name} student city and travel context`,
    zhImageAlt: `${zhName}学生城市与旅行背景`
  };
}

export function getCityDestinations(universities: University[]) {
  const grouped = new Map<string, University[]>();

  universities
    .filter((university) => university.citySlug && university.citySlug !== "china")
    .forEach((university) => {
      grouped.set(university.citySlug, [...(grouped.get(university.citySlug) ?? []), university]);
    });

  return [...grouped.entries()]
    .map(([slug, items]) => {
      const first = items[0];
      const staticCity = cities.find((city) => city.slug === slug);
      const province = provinceShowcases.find((item) => item.slug === first.provinceSlug);
      const name = staticCity?.name ?? first.location ?? titleFromSlug(slug);
      const zhName = cityNameZh[slug] ?? name;
      const provinceName = province?.name ?? first.provinceSlug;
      const zhProvinceName = province?.zhName ?? provinceName;
      const profile = cityProfiles[slug] ?? defaultProfile(slug, name, zhName, first.provinceSlug, provinceName, zhProvinceName, province?.cultureTags ?? []);

      return {
        slug,
        name: profile.name ?? name,
        zhName: profile.zhName ?? zhName,
        provinceSlug: first.provinceSlug,
        provinceName,
        zhProvinceName,
        livingCost: profile.livingCost ?? staticCity?.livingCost ?? "$430-780/month",
        zhLivingCost: profile.zhLivingCost ?? staticCity?.livingCost ?? "约 430-780 美元/月",
        climate: profile.climate ?? staticCity?.climate ?? "Seasonal city climate",
        zhClimate: profile.zhClimate ?? "城市气候具有季节变化",
        visaConvenience: profile.visaConvenience ?? staticCity?.visaConvenience ?? "University international offices support arrival and residence steps",
        zhVisaConvenience: profile.zhVisaConvenience ?? "大学国际办公室通常会支持入境和居留流程",
        summary: profile.summary ?? staticCity?.summary ?? `${name} is a China study city with university and lifestyle data queued for enrichment.`,
        zhSummary: profile.zhSummary ?? `${zhName}是中国留学城市，学校与生活资料会继续补全。`,
        tourism: profile.tourism ?? `${name} travel context will be expanded through editorial enrichment.`,
        zhTourism: profile.zhTourism ?? `${zhName}旅行背景会继续通过编辑核验补全。`,
        internships: profile.internships ?? `Internship opportunities in ${name} should be evaluated by major and university partnerships.`,
        zhInternships: profile.zhInternships ?? `${zhName}实习机会需要结合专业和学校合作资源评估。`,
        lifestyleTags: profile.lifestyleTags ?? province?.cultureTags.slice(0, 3) ?? ["Campus life", "Weekend travel", "Local culture"],
        zhLifestyleTags: profile.zhLifestyleTags ?? province?.zhCultureTags.slice(0, 3) ?? ["校园生活", "周末旅行", "地方文化"],
        image: province?.image ?? "/images/student-city-life.png",
        imageAlt: profile.imageAlt ?? `${name} student city`,
        zhImageAlt: profile.zhImageAlt ?? `${zhName}学生城市`
      } satisfies CityDestination;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCityDestination(slug: string, universities: University[]) {
  return getCityDestinations(universities).find((city) => city.slug === slug);
}
