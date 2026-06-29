import type { ProvinceShowcase } from "@/lib/province-showcase";

export type ProvinceInsight = {
  travelSpots: string[];
  zhTravelSpots: string[];
  lifestyle: string;
  zhLifestyle: string;
  internshipIndustries: string[];
  zhInternshipIndustries: string[];
  studentFit: string;
  zhStudentFit: string;
  budgetLevel: string;
  zhBudgetLevel: string;
  mobility: string;
  zhMobility: string;
};

const defaultsByRegion: Record<string, ProvinceInsight> = {
  "Northeast China": {
    travelSpots: ["Winter festivals", "historic streets", "forest and mountain routes"],
    zhTravelSpots: ["冬季节庆", "历史街区", "森林与山地路线"],
    lifestyle: "Lower living costs, direct campus communities, and a practical study rhythm.",
    zhLifestyle: "生活成本相对友好，校园社区集中，学习节奏务实。",
    internshipIndustries: ["advanced manufacturing", "medicine", "agriculture and environment"],
    zhInternshipIndustries: ["先进制造", "医学", "农业与环境"],
    studentFit: "Students who want strong STEM programs, quieter cities, and better cost control.",
    zhStudentFit: "适合重视理工科、希望城市节奏更安静、预算控制更稳定的学生。",
    budgetLevel: "Value-friendly",
    zhBudgetLevel: "预算友好",
    mobility: "Best for students who like rail travel between compact regional cities.",
    zhMobility: "适合喜欢通过铁路串联区域城市的学生。"
  },
  "North China": {
    travelSpots: ["ancient capitals", "museums", "Great Wall routes"],
    zhTravelSpots: ["古都文化", "博物馆", "长城路线"],
    lifestyle: "Dense academic networks, strong public transport, and easy access to national institutions.",
    zhLifestyle: "学术资源密集，公共交通成熟，接近国家级机构与文化资源。",
    internshipIndustries: ["policy and research", "finance", "technology and media"],
    zhInternshipIndustries: ["政策与研究", "金融", "科技与传媒"],
    studentFit: "Students seeking top universities, Chinese history, and professional networking.",
    zhStudentFit: "适合追求顶尖高校、中国历史文化和职业人脉的学生。",
    budgetLevel: "Premium to balanced",
    zhBudgetLevel: "高端到均衡",
    mobility: "High-speed rail makes nearby cultural trips easy during weekends.",
    zhMobility: "高铁网络适合周末进行周边文化旅行。"
  },
  "East China": {
    travelSpots: ["water towns", "coastal cities", "classical gardens"],
    zhTravelSpots: ["江南水乡", "沿海城市", "古典园林"],
    lifestyle: "International city life, polished campuses, and strong access to company ecosystems.",
    zhLifestyle: "国际化城市生活、成熟校园环境，以及接近企业生态的机会。",
    internshipIndustries: ["internet and AI", "finance", "trade and design"],
    zhInternshipIndustries: ["互联网与人工智能", "金融", "贸易与设计"],
    studentFit: "Students who want modern cities, English-taught programs, and career exposure.",
    zhStudentFit: "适合喜欢现代城市、英语授课项目和职业机会曝光的学生。",
    budgetLevel: "Balanced to premium",
    zhBudgetLevel: "均衡到高端",
    mobility: "One of China's easiest regions for high-speed rail and short city-hopping trips.",
    zhMobility: "中国最适合高铁短途城市旅行的区域之一。"
  },
  "Central China": {
    travelSpots: ["riverside cities", "historic sites", "mountain parks"],
    zhTravelSpots: ["江河城市", "历史遗址", "山地公园"],
    lifestyle: "Large student populations, central transport, and a strong balance between cost and opportunity.",
    zhLifestyle: "学生群体庞大，交通位置居中，成本与机会之间比较平衡。",
    internshipIndustries: ["transport and logistics", "education", "biomedicine and engineering"],
    zhInternshipIndustries: ["交通物流", "教育", "生物医药与工程"],
    studentFit: "Students who want scale, affordability, and access to several regions of China.",
    zhStudentFit: "适合想要大城市规模、可控预算和跨区域流动机会的学生。",
    budgetLevel: "Balanced",
    zhBudgetLevel: "均衡",
    mobility: "Central rail hubs make travel to north, east, south, and west China straightforward.",
    zhMobility: "中部铁路枢纽方便前往华北、华东、华南和西部。"
  },
  "South China": {
    travelSpots: ["coastlines", "karst scenery", "tropical islands"],
    zhTravelSpots: ["海岸线", "喀斯特山水", "热带岛屿"],
    lifestyle: "Warm climate, entrepreneurial cities, and a travel-friendly rhythm.",
    zhLifestyle: "气候温暖，城市创业氛围强，生活节奏适合旅行与体验。",
    internshipIndustries: ["cross-border trade", "hardware and manufacturing", "hospitality and tourism"],
    zhInternshipIndustries: ["跨境贸易", "硬件与制造", "文旅与酒店"],
    studentFit: "Students interested in business, technology, tourism, and a warmer lifestyle.",
    zhStudentFit: "适合关注商业、科技、文旅，以及偏好温暖气候的学生。",
    budgetLevel: "Flexible",
    zhBudgetLevel: "选择弹性大",
    mobility: "Good for combining city study with coastal and island trips.",
    zhMobility: "适合把城市学习与海岸、海岛旅行结合起来。"
  },
  "Southwest China": {
    travelSpots: ["mountain cities", "ethnic culture", "tea houses and old towns"],
    zhTravelSpots: ["山地城市", "民族文化", "茶馆与古城"],
    lifestyle: "Relaxed urban rhythm, strong food culture, and distinctive landscapes.",
    zhLifestyle: "城市节奏松弛，美食文化强，地貌和文化辨识度高。",
    internshipIndustries: ["tourism and culture", "energy and infrastructure", "healthcare and education"],
    zhInternshipIndustries: ["文旅文化", "能源与基建", "医疗与教育"],
    studentFit: "Students who want memorable travel, lower pressure, and culture-rich study life.",
    zhStudentFit: "适合想要高记忆点旅行、较低压力和丰富文化体验的学生。",
    budgetLevel: "Value to balanced",
    zhBudgetLevel: "友好到均衡",
    mobility: "Best for slow travel, mountain routes, and multi-city southwest itineraries.",
    zhMobility: "适合慢旅行、山地路线和西南多城市行程。"
  },
  "Northwest China": {
    travelSpots: ["Silk Road sites", "desert scenery", "highland lakes"],
    zhTravelSpots: ["丝路遗址", "大漠风景", "高原湖泊"],
    lifestyle: "Open landscapes, lower density, and a strong sense of cultural discovery.",
    zhLifestyle: "空间开阔，城市密度较低，文化探索感强。",
    internshipIndustries: ["energy", "agriculture technology", "language and regional studies"],
    zhInternshipIndustries: ["能源", "农业科技", "语言与区域研究"],
    studentFit: "Students who want adventure, field research, and a distinctive China experience.",
    zhStudentFit: "适合喜欢探索、田野研究和独特中国体验的学生。",
    budgetLevel: "Value-friendly",
    zhBudgetLevel: "预算友好",
    mobility: "Longer distances reward planned trips and holiday travel blocks.",
    zhMobility: "距离更长，适合提前规划假期式旅行。"
  }
};

const slugOverrides: Record<string, Partial<ProvinceInsight>> = {
  beijing: {
    travelSpots: ["Great Wall", "Forbidden City", "798 Art District"],
    zhTravelSpots: ["长城", "故宫", "798 艺术区"],
    lifestyle: "China's deepest academic and cultural network, with higher rent but unmatched access to institutions.",
    zhLifestyle: "中国最密集的学术与文化网络，租金较高，但机构资源和机会非常集中。",
    internshipIndustries: ["AI and internet", "international organizations", "media and policy"],
    zhInternshipIndustries: ["人工智能与互联网", "国际组织", "传媒与政策"]
  },
  shanghai: {
    travelSpots: ["The Bund", "city galleries", "nearby water towns"],
    zhTravelSpots: ["外滩", "城市艺术空间", "周边水乡"],
    lifestyle: "A highly international lifestyle with strong English access, premium living costs, and excellent transit.",
    zhLifestyle: "高度国际化，英语环境更友好，生活成本偏高，但交通和城市服务成熟。",
    internshipIndustries: ["finance", "luxury and retail", "biotech and AI"],
    zhInternshipIndustries: ["金融", "奢侈品与零售", "生物科技与人工智能"]
  },
  zhejiang: {
    travelSpots: ["West Lake", "tea mountains", "Wuzhen and water towns"],
    zhTravelSpots: ["西湖", "茶山", "乌镇与水乡"],
    internshipIndustries: ["e-commerce", "AI startups", "digital trade"],
    zhInternshipIndustries: ["电商", "人工智能创业", "数字贸易"]
  },
  guangdong: {
    travelSpots: ["Canton culture", "Shenzhen design", "Greater Bay Area day trips"],
    zhTravelSpots: ["广府文化", "深圳设计", "大湾区短途旅行"],
    internshipIndustries: ["hardware", "cross-border e-commerce", "gaming and internet"],
    zhInternshipIndustries: ["硬件制造", "跨境电商", "游戏与互联网"]
  },
  sichuan: {
    travelSpots: ["Chengdu tea houses", "panda base", "western Sichuan road trips"],
    zhTravelSpots: ["成都茶馆", "熊猫基地", "川西路线"],
    lifestyle: "A famously relaxed city rhythm with food, culture, and a fast-growing technology scene.",
    zhLifestyle: "城市节奏松弛，美食和文化体验强，同时科技产业增长很快。"
  },
  gansu: {
    travelSpots: ["Dunhuang", "Mogao Caves", "desert and oasis routes"],
    zhTravelSpots: ["敦煌", "莫高窟", "沙漠与绿洲路线"]
  },
  guangxi: {
    travelSpots: ["Guilin", "Yangshuo", "Li River"],
    zhTravelSpots: ["桂林", "阳朔", "漓江"]
  },
  yunnan: {
    travelSpots: ["Dali", "Lijiang", "mountain and old-town routes"],
    zhTravelSpots: ["大理", "丽江", "山地与古城路线"]
  }
};

export function getProvinceInsight(province: ProvinceShowcase): ProvinceInsight {
  const base = defaultsByRegion[province.region] ?? defaultsByRegion["East China"];
  const override = slugOverrides[province.slug] ?? {};

  return {
    ...base,
    ...override,
    travelSpots: override.travelSpots ?? base.travelSpots,
    zhTravelSpots: override.zhTravelSpots ?? base.zhTravelSpots,
    internshipIndustries: override.internshipIndustries ?? base.internshipIndustries,
    zhInternshipIndustries: override.zhInternshipIndustries ?? base.zhInternshipIndustries
  };
}
