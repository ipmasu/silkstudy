import type { CityDestination } from "@/lib/city-destinations";
import type { University } from "@/lib/site-data";

export type CityFilterKey = "lowCost" | "culture" | "nightlife" | "coastal" | "elite" | "food" | "climate";

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
    label: "💰 Lower living cost",
    zhLabel: "💰 低生活成本",
    description: "Cities where monthly living costs are usually easier to manage.",
    zhDescription: "月均生活成本较友好，适合重视长期预算稳定的学生。"
  },
  {
    key: "culture",
    label: "🏛️ Historic culture",
    zhLabel: "🏛️ 历史文化名城",
    description: "Cities with strong museums, old capitals, heritage, and Chinese civilization routes.",
    zhDescription: "古都、博物馆、老街和中华文明体验更突出的城市。"
  },
  {
    key: "nightlife",
    label: "🌃 Rich nightlife",
    zhLabel: "🌃 夜生活丰富",
    description: "Cities with night markets, bars, live music, food streets, and youth events.",
    zhDescription: "夜市、酒吧、音乐、美食街和青年活动更丰富的城市。"
  },
  {
    key: "coastal",
    label: "🏖️ Coastal city",
    zhLabel: "🏖️ 沿海城市",
    description: "Cities with sea, bay, island, port, or coastal lifestyle.",
    zhDescription: "拥有海滨、海湾、岛屿、港口或沿海生活方式的城市。"
  },
  {
    key: "elite",
    label: "🎓 Strong universities",
    zhLabel: "🎓 名校聚集",
    description: "Cities with strong 985/211 or nationally recognized university clusters.",
    zhDescription: "985/211 或重点高校资源更集中的城市。"
  },
  {
    key: "food",
    label: "🌶️ Food city",
    zhLabel: "🌶️ 美食之都",
    description: "Cities where food is a major reason students fall in love with daily life.",
    zhDescription: "美食本身就是城市吸引力，适合喜欢用味觉认识中国的学生。"
  },
  {
    key: "climate",
    label: "🌿 Pleasant climate",
    zhLabel: "🌿 气候宜人",
    description: "Cities with softer climate, greenery, lakes, sea breeze, or a more comfortable pace.",
    zhDescription: "气候、绿意、水系或城市节奏更舒适的目的地。"
  }
];

const explicitMatches: Record<CityFilterKey, Set<string>> = {
  lowCost: new Set(["changsha", "chengdu", "chongqing", "xian", "kunming", "guilin", "nanchang", "taiyuan", "nanning", "guiyang", "harbin", "zhengzhou"]),
  culture: new Set(["beijing", "xian", "nanjing", "hangzhou", "chengdu", "changsha", "guangzhou", "suzhou", "zhengzhou", "taiyuan"]),
  nightlife: new Set(["changsha", "chengdu", "chongqing", "shanghai", "guangzhou", "shenzhen", "beijing", "xian", "hangzhou", "harbin"]),
  coastal: new Set(["shanghai", "guangzhou", "shenzhen", "xiamen", "qingdao", "tianjin", "dalian"]),
  elite: new Set(["beijing", "shanghai", "nanjing", "wuhan", "xian", "guangzhou", "chengdu", "changsha", "hangzhou", "tianjin"]),
  food: new Set(["chengdu", "changsha", "guangzhou", "xian", "chongqing", "hangzhou", "nanjing", "suzhou", "kunming"]),
  climate: new Set(["kunming", "guilin", "chengdu", "hangzhou", "xiamen", "nanning", "qingdao"])
};

export function getCityFilterTags(city: CityDestination, universities: University[]): CityFilterKey[] {
  const tags = new Set<CityFilterKey>();

  for (const [key, slugs] of Object.entries(explicitMatches) as Array<[CityFilterKey, Set<string>]>) {
    if (slugs.has(city.slug)) tags.add(key);
  }

  const cityUniversities = universities.filter((university) => university.citySlug === city.slug);
  if (cityUniversities.length >= 3) tags.add("elite");

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

  if (/350|400|430|450|affordable|lower cost|manageable|student-friendly/.test(lowerText)) tags.add("lowCost");
  if (/night|bar|music|market|夜|酒吧|夜市|livehouse|club/.test(lowerText)) tags.add("nightlife");
  if (/coast|sea|bay|port|island|海|港|湾|岛/.test(lowerText)) tags.add("coastal");
  if (/museum|heritage|historic|culture|ancient|history|古|历史|文化|博物馆/.test(lowerText)) tags.add("culture");
  if (/food|cuisine|hotpot|noodle|snack|美食|火锅|小吃|米粉|面/.test(lowerText)) tags.add("food");
  if (/mild|spring|pleasant|lake|green|climate|温和|春城|宜人|海风/.test(lowerText)) tags.add("climate");

  return [...tags];
}

