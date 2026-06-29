export type MajorGuide = {
  name: string;
  slug: string;
  zhName: string;
  summary: string;
  zhSummary: string;
  careerPaths: string[];
  zhCareerPaths: string[];
  admissionsSignals: string[];
  zhAdmissionsSignals: string[];
  cityFit: string[];
  zhCityFit: string[];
};

export const majorGuides: MajorGuide[] = [
  {
    name: "Computer Science",
    slug: "computer-science",
    zhName: "计算机科学",
    summary: "Computer Science is one of the strongest pathways for students seeking software, data, AI, fintech, and research opportunities in China.",
    zhSummary: "计算机科学适合希望进入软件、数据、AI、金融科技和科研方向的学生。",
    careerPaths: ["Software engineering", "Data engineering", "Cloud platforms", "Fintech", "Research labs"],
    zhCareerPaths: ["软件工程", "数据工程", "云平台", "金融科技", "科研实验室"],
    admissionsSignals: ["Math foundation", "Programming portfolio", "English or Chinese pathway", "Internship interest"],
    zhAdmissionsSignals: ["数学基础", "编程作品集", "英文或中文授课路径", "实习兴趣"],
    cityFit: ["Beijing", "Shanghai", "Hangzhou", "Shenzhen/Guangzhou", "Wuhan"],
    zhCityFit: ["北京", "上海", "杭州", "深圳/广州", "武汉"]
  },
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    zhName: "人工智能",
    summary: "AI is best evaluated by lab strength, mathematics, computing resources, and links to robotics, healthcare, finance, and manufacturing.",
    zhSummary: "人工智能要重点看实验室实力、数学基础、计算资源，以及机器人、医疗、金融和制造业连接。",
    careerPaths: ["Machine learning", "Computer vision", "Robotics", "AI product", "Healthcare AI"],
    zhCareerPaths: ["机器学习", "计算机视觉", "机器人", "AI 产品", "医疗 AI"],
    admissionsSignals: ["Calculus and linear algebra", "Python experience", "Research motivation", "Strong lab fit"],
    zhAdmissionsSignals: ["微积分与线性代数", "Python 经验", "科研动机", "实验室匹配"],
    cityFit: ["Beijing", "Shanghai", "Hangzhou", "Hefei", "Wuhan"],
    zhCityFit: ["北京", "上海", "杭州", "合肥", "武汉"]
  },
  {
    name: "Medicine",
    slug: "medicine",
    zhName: "医学",
    summary: "Medicine requires careful checking of language route, hospital access, licensing plans, clinical training, and long-term budget.",
    zhSummary: "医学需要认真核验授课语言、医院资源、执照规划、临床训练和长期预算。",
    careerPaths: ["Clinical medicine", "Public health", "Medical research", "Pharmacy", "Healthcare management"],
    zhCareerPaths: ["临床医学", "公共卫生", "医学研究", "药学", "医疗管理"],
    admissionsSignals: ["Biology and chemistry", "Language requirements", "Clinical training plan", "Home-country licensing"],
    zhAdmissionsSignals: ["生物与化学基础", "语言要求", "临床训练安排", "回国执照规划"],
    cityFit: ["Shanghai", "Beijing", "Guangzhou", "Wuhan", "Chengdu"],
    zhCityFit: ["上海", "北京", "广州", "武汉", "成都"]
  },
  {
    name: "Engineering",
    slug: "engineering",
    zhName: "工程",
    summary: "Engineering in China is broad, from civil and mechanical systems to transport, energy, materials, electronics, and advanced manufacturing.",
    zhSummary: "中国工程教育覆盖广，从土木、机械到交通、能源、材料、电子和先进制造。",
    careerPaths: ["Manufacturing", "Transport", "Energy", "Materials", "Electronics"],
    zhCareerPaths: ["制造业", "交通工程", "能源", "材料", "电子"],
    admissionsSignals: ["Math and physics", "Lab and project experience", "English-taught availability", "Industry city fit"],
    zhAdmissionsSignals: ["数学与物理", "实验和项目经历", "英文授课项目", "产业城市匹配"],
    cityFit: ["Beijing", "Shanghai", "Harbin", "Xi'an", "Dalian"],
    zhCityFit: ["北京", "上海", "哈尔滨", "西安", "大连"]
  },
  {
    name: "Business",
    slug: "business",
    zhName: "商科",
    summary: "Business students should compare city economy, internship access, language environment, alumni network, and trade exposure.",
    zhSummary: "商科学生应比较城市经济、实习入口、语言环境、校友网络和贸易曝光。",
    careerPaths: ["Finance", "Trade", "Marketing", "Consulting", "Entrepreneurship"],
    zhCareerPaths: ["金融", "贸易", "市场营销", "咨询", "创业"],
    admissionsSignals: ["English ability", "Quantitative basics", "Internship motivation", "City business ecosystem"],
    zhAdmissionsSignals: ["英语能力", "量化基础", "实习动机", "城市商业生态"],
    cityFit: ["Shanghai", "Beijing", "Guangzhou", "Hangzhou", "Xiamen"],
    zhCityFit: ["上海", "北京", "广州", "杭州", "厦门"]
  },
  {
    name: "Chinese Language",
    slug: "chinese-language",
    zhName: "汉语语言",
    summary: "Chinese Language is often the first step for students who want cultural immersion, future degree study, or China-facing careers.",
    zhSummary: "汉语语言通常是文化沉浸、未来学位学习或面向中国职业路径的第一步。",
    careerPaths: ["Translation", "Education", "China business", "Media", "Future degree pathway"],
    zhCareerPaths: ["翻译", "教育", "中国商务", "媒体", "后续学位路径"],
    admissionsSignals: ["Current Chinese level", "HSK target", "City immersion", "Degree pathway plan"],
    zhAdmissionsSignals: ["当前中文水平", "HSK 目标", "城市沉浸环境", "后续学位计划"],
    cityFit: ["Beijing", "Shanghai", "Nanjing", "Xiamen", "Chengdu"],
    zhCityFit: ["北京", "上海", "南京", "厦门", "成都"]
  }
];

export function slugifyMajor(major: string) {
  return major.toLowerCase().replaceAll(" ", "-");
}

export function getMajorGuide(slugOrName: string) {
  const slug = slugifyMajor(slugOrName);
  return majorGuides.find((guide) => guide.slug === slug);
}

export function buildDefaultMajorGuide(name: string): MajorGuide {
  const slug = slugifyMajor(name);

  return {
    name,
    slug,
    zhName: name,
    summary: `${name} is included in the SilkStudy catalog as a program direction for international students. School, city, scholarship, and career context should be compared before applying.`,
    zhSummary: `${name} 已纳入 SilkStudy 国际学生专业目录。申请前应比较学校、城市、奖学金和职业方向。`,
    careerPaths: ["Industry roles", "Research pathway", "International business", "Further study"],
    zhCareerPaths: ["行业岗位", "科研路径", "国际商务", "继续深造"],
    admissionsSignals: ["Academic background", "Language pathway", "Budget", "City fit"],
    zhAdmissionsSignals: ["学术背景", "语言路径", "预算", "城市匹配"],
    cityFit: ["Beijing", "Shanghai", "Guangzhou", "Wuhan"],
    zhCityFit: ["北京", "上海", "广州", "武汉"]
  };
}
