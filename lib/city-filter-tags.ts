import type { CityDestination } from "@/lib/city-destinations";
import type { University } from "@/lib/site-data";

export type CityFilterKey = "lowCost" | "nightlife" | "coastal" | "medicine" | "engineering" | "culture" | "nature" | "tech";

export type CityFilterOption = {
  key: CityFilterKey;
  label: string;
  zhLabel: string;
  description: string;
  zhDescription: string;
};

export const cityFilterOptions: CityFilterOption[] = [
  {
    key: "lowCost",
    label: "Lower living cost",
    zhLabel: "生活成本低",
    description: "Cities where daily budget pressure is usually easier to manage.",
    zhDescription: "日常预算压力相对更容易控制的城市。"
  },
  {
    key: "nightlife",
    label: "Rich nightlife",
    zhLabel: "夜生活丰富",
    description: "Cities with night markets, bars, music, food streets, and youth events.",
    zhDescription: "有夜市、酒吧、音乐、美食街和青年活动的城市。"
  },
  {
    key: "coastal",
    label: "Near the sea",
    zhLabel: "靠近海边",
    description: "Coastal or port cities with sea, bay, island, or river-to-sea routes.",
    zhDescription: "拥有海湾、港口、岛屿或滨海路线的城市。"
  },
  {
    key: "medicine",
    label: "Medicine / TCM fit",
    zhLabel: "医学/中医药方向",
    description: "Cities with visible medicine, pharmacy, or traditional Chinese medicine study context.",
    zhDescription: "医学、药学或中医药学习语境比较明显的城市。"
  },
  {
    key: "engineering",
    label: "Engineering strength",
    zhLabel: "工程科技强",
    description: "Good fit for engineering, manufacturing, transport, architecture, or applied science.",
    zhDescription: "适合工程、制造、交通、建筑或应用理科方向。"
  },
  {
    key: "culture",
    label: "Deep culture",
    zhLabel: "文化历史深",
    description: "Cities where museums, heritage, old streets, and Chinese civilization routes are strong.",
    zhDescription: "博物馆、遗产、老街和中华文明路线较强的城市。"
  },
  {
    key: "nature",
    label: "Nature and weekends",
    zhLabel: "自然周末强",
    description: "Cities with mountains, lakes, rivers, parks, or nearby travel routes.",
    zhDescription: "拥有山水、湖泊、公园或周边旅行路线的城市。"
  },
  {
    key: "tech",
    label: "Tech / startup access",
    zhLabel: "科技/创业机会",
    description: "Cities with digital economy, startups, AI, finance, or innovation ecosystems.",
    zhDescription: "数字经济、创业、AI、金融或创新生态较强的城市。"
  }
];

const coastalCities = new Set(["dalian", "fuzhou", "guangzhou", "haikou", "ningbo", "qingdao", "shanghai", "shantou", "shenzhen", "tianjin", "xiamen", "yantai"]);
const nightlifeCities = new Set(["beijing", "changsha", "chengdu", "chongqing", "fuzhou", "guangzhou", "guilin", "hangzhou", "harbin", "nanjing", "shanghai", "shenzhen", "suzhou", "taiyuan", "tianjin", "wuhan", "xian", "zhengzhou"]);
const techCities = new Set(["beijing", "chengdu", "guangzhou", "hangzhou", "hefei", "nanjing", "shanghai", "shenzhen", "suzhou", "wuhan", "xian"]);
const natureCities = new Set(["chengdu", "chongqing", "dalian", "guilin", "guiyang", "haikou", "hangzhou", "harbin", "kunming", "lanzhou", "nanning", "qingdao", "taiyuan", "wuhan", "xiamen", "xian"]);
const cultureCities = new Set(["beijing", "changsha", "chengdu", "guilin", "hangzhou", "harbin", "kunming", "nanjing", "shanghai", "suzhou", "taiyuan", "tianjin", "xian", "zhengzhou"]);
const lowCostProvinceSlugs = new Set(["anhui", "chongqing", "gansu", "guangxi", "guizhou", "heilongjiang", "henan", "hubei", "hunan", "jiangxi", "jilin", "ningxia", "qinghai", "shanxi", "shaanxi", "yunnan"]);

function hasMajorSignal(universities: University[], citySlug: string, words: string[]) {
  return universities
    .filter((university) => university.citySlug === citySlug)
    .some((university) => {
      const text = [
        university.name,
        university.chineseName,
        university.summary,
        university.campusLife.nearbyLiving,
        university.campusLife.foodAndDailyLife,
        university.campusLife.internshipsAndCareers,
        ...university.majors
      ].join(" ").toLowerCase();

      return words.some((word) => text.includes(word.toLowerCase()));
    });
}

export function getCityFilterTags(city: CityDestination, universities: University[]): CityFilterKey[] {
  const tags = new Set<CityFilterKey>();
  const lowerText = [
    city.summary,
    city.zhSummary,
    city.tourism,
    city.zhTourism,
    city.internships,
    city.zhInternships,
    city.livingCost,
    ...city.lifestyleTags,
    ...city.zhLifestyleTags
  ].join(" ").toLowerCase();

  if (lowCostProvinceSlugs.has(city.provinceSlug) || /350|400|450|低|实惠|affordable|lower cost|manageable/.test(lowerText)) tags.add("lowCost");
  if (nightlifeCities.has(city.slug) || /夜|night|bar|music|market|市集|酒吧|夜市/.test(lowerText)) tags.add("nightlife");
  if (coastalCities.has(city.slug) || /coast|sea|bay|port|island|海|港|湾|岛/.test(lowerText)) tags.add("coastal");
  if (techCities.has(city.slug) || /tech|startup|ai|digital|software|internet|科技|创业|数字|人工智能|互联网/.test(lowerText)) tags.add("tech");
  if (natureCities.has(city.slug) || /mountain|lake|river|park|nature|山|湖|江|河|自然|公园/.test(lowerText)) tags.add("nature");
  if (cultureCities.has(city.slug) || /museum|heritage|historic|culture|古|历史|文化|博物馆|遗产/.test(lowerText)) tags.add("culture");
  if (hasMajorSignal(universities, city.slug, ["medicine", "medical", "pharmacy", "nursing", "clinical", "chinese medicine", "中医", "医学", "药学", "护理", "临床"])) tags.add("medicine");
  if (hasMajorSignal(universities, city.slug, ["engineering", "technology", "architecture", "transport", "manufacturing", "computer", "工程", "技术", "建筑", "交通", "制造", "计算机"])) tags.add("engineering");

  return [...tags];
}
