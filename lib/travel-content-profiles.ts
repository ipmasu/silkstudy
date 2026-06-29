export type TravelEditorialNote = {
  provinceSlug: string;
  title: string;
  zhTitle: string;
  summary: string;
  zhSummary: string;
  highlights: string[];
  zhHighlights: string[];
  sourceType: string;
  zhSourceType: string;
};

const notes: TravelEditorialNote[] = [
  {
    provinceSlug: "zhejiang",
    title: "West Lake, tea mountains, and easy weekend travel",
    zhTitle: "西湖、茶山与轻松周末旅行",
    summary: "Zhejiang works well for students who want a polished city base with calm lakeside walks, tea culture, water towns, and strong digital-economy career exposure.",
    zhSummary: "浙江适合希望拥有成熟城市生活、湖边散步、茶文化、水乡周末旅行，以及数字经济职业机会的学生。",
    highlights: ["West Lake", "Longjing tea", "water towns"],
    zhHighlights: ["西湖", "龙井茶", "江南水乡"],
    sourceType: "Editorial rewrite from destination-source workflow",
    zhSourceType: "来自目的地素材流程的编辑改写"
  },
  {
    provinceSlug: "gansu",
    title: "A Silk Road route for students who want discovery",
    zhTitle: "适合探索型学生的丝路路线",
    summary: "Gansu can become a memorable China experience through Dunhuang, desert landscapes, Mogao Caves, and a slower travel rhythm that feels different from coastal megacities.",
    zhSummary: "甘肃通过敦煌、大漠风景、莫高窟和更慢的旅行节奏，能给学生一种不同于沿海大城市的中国体验。",
    highlights: ["Dunhuang", "Mogao Caves", "desert routes"],
    zhHighlights: ["敦煌", "莫高窟", "大漠路线"],
    sourceType: "Official-tourism-friendly editorial summary",
    zhSourceType: "偏官方文旅来源的编辑摘要"
  },
  {
    provinceSlug: "sichuan",
    title: "Chengdu slow life with real career momentum",
    zhTitle: "成都慢生活与真实职业动能",
    summary: "Sichuan blends food, tea houses, panda trips, mountain routes, and a growing technology scene, making it attractive for students who want culture without losing career potential.",
    zhSummary: "四川把美食、茶馆、熊猫基地、山地路线和增长中的科技产业结合起来，适合想要文化体验同时不放弃职业机会的学生。",
    highlights: ["tea houses", "food culture", "panda base"],
    zhHighlights: ["茶馆", "美食文化", "熊猫基地"],
    sourceType: "Youth lifestyle source rewrite",
    zhSourceType: "青年生活方式素材改写"
  },
  {
    provinceSlug: "guangxi",
    title: "Guilin scenery as a study-abroad memory point",
    zhTitle: "把桂林山水变成留学记忆点",
    summary: "Guangxi is especially useful for students who want nature, lower-pressure cities, language learning, ASEAN-facing context, and weekend trips around Guilin and Yangshuo.",
    zhSummary: "广西适合喜欢自然风景、低压力城市、语言学习、面向东盟语境，以及桂林阳朔周末旅行的学生。",
    highlights: ["Guilin", "Yangshuo", "Li River"],
    zhHighlights: ["桂林", "阳朔", "漓江"],
    sourceType: "Destination guide editorial summary",
    zhSourceType: "目的地指南编辑摘要"
  },
  {
    provinceSlug: "beijing",
    title: "A capital-city study route built around culture and access",
    zhTitle: "围绕文化与资源建立的首都留学路线",
    summary: "Beijing's appeal is not only rankings: students can connect the Great Wall, museums, art districts, research institutions, and international organizations into one powerful study route.",
    zhSummary: "北京的吸引力不只是排名：学生可以把长城、博物馆、艺术区、研究机构和国际组织连接成一条强有力的留学路线。",
    highlights: ["Great Wall", "museums", "research institutions"],
    zhHighlights: ["长城", "博物馆", "研究机构"],
    sourceType: "Capital destination editorial summary",
    zhSourceType: "首都目的地编辑摘要"
  }
];

export function getTravelEditorialNotes(provinceSlug: string) {
  return notes.filter((note) => note.provinceSlug === provinceSlug);
}
