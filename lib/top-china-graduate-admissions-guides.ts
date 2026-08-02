import { chinaUniversityRankings } from "./china-university-rankings";
import { universities as staticUniversities } from "./site-data";
import {
  getUniversityAdmissionsGuide as getLegacyUniversityAdmissionsGuide,
  type UniversityAdmissionsGuide
} from "./university-admissions-guides";

const top50GraduateSlugs = [
  "tsinghua-university",
  "peking-university",
  "zhejiang-university",
  "shanghai-jiao-tong-university",
  "fudan-university",
  "nanjing-university",
  "university-of-science-and-technology-of-china",
  "wuhan-university",
  "huazhong-university-of-science-and-technology",
  "xi-an-jiaotong-university",
  "harbin-institute-of-technology",
  "sun-yat-sen-university",
  "beijing-institute-of-technology",
  "southeast-university",
  "sichuan-university",
  "renmin-university-of-china",
  "tongji-university",
  "beijing-normal-university",
  "tianjin-university",
  "nankai-university",
  "shandong-university",
  "northwestern-polytechnical-university",
  "china-agricultural-university",
  "xiamen-university",
  "jilin-university",
  "central-south-university",
  "dalian-university-of-technology",
  "east-china-normal-university",
  "hunan-university",
  "south-china-university-of-technology",
  "university-of-electronic-science-and-technology-of-china",
  "chongqing-university",
  "shanghai-university-of-finance-and-economics",
  "university-of-science-and-technology-beijing",
  "nanjing-university-of-science-and-technology",
  "capital-medical-university",
  "nanjing-university-of-aeronautics-and-astronautics",
  "northeastern-university",
  "xidian-university",
  "lanzhou-university",
  "beijing-jiaotong-university",
  "central-university-of-finance-and-economics",
  "east-china-university-of-science-and-technology",
  "southern-medical-university",
  "zhengzhou-university",
  "huazhong-agricultural-university",
  "soochow-university",
  "northeast-normal-university",
  "southwest-jiaotong-university",
  "beijing-university-of-posts-and-telecommunications"
] as const;

const graduateProfiles: Record<
  (typeof top50GraduateSlugs)[number],
  { city: string; zhCity: string; strengths: string[]; zhStrengths: string[]; type: string; zhType: string }
> = {
  "tsinghua-university": { city: "Beijing", zhCity: "北京", type: "top comprehensive research university with exceptional engineering and technology depth", zhType: "综合研究型、理工和创新资源极强", strengths: ["engineering", "computer science", "AI", "architecture", "management"], zhStrengths: ["工程", "计算机", "人工智能", "建筑", "管理"] },
  "peking-university": { city: "Beijing", zhCity: "北京", type: "top comprehensive research university", zhType: "综合研究型", strengths: ["humanities", "sciences", "medicine", "economics", "management"], zhStrengths: ["人文社科", "理科", "医学", "经济", "管理"] },
  "zhejiang-university": { city: "Hangzhou", zhCity: "杭州", type: "large comprehensive research university connected to Hangzhou's innovation economy", zhType: "综合研究型、与杭州创新经济连接紧密", strengths: ["engineering", "computer science", "medicine", "agriculture", "management"], zhStrengths: ["工程", "计算机", "医学", "农业", "管理"] },
  "shanghai-jiao-tong-university": { city: "Shanghai", zhCity: "上海", type: "research-intensive university strong in engineering, medicine and innovation", zhType: "工程、医学与创新见长的研究型高校", strengths: ["engineering", "AI", "medicine", "business", "innovation"], zhStrengths: ["工程", "人工智能", "医学", "商科", "创新"] },
  "fudan-university": { city: "Shanghai", zhCity: "上海", type: "comprehensive research university with elite medicine, humanities and social sciences", zhType: "医学、人文社科和理科优势突出的综合研究型高校", strengths: ["medicine", "management", "social sciences", "humanities", "science"], zhStrengths: ["医学", "管理", "社科", "人文", "理科"] },
  "nanjing-university": { city: "Nanjing", zhCity: "南京", type: "comprehensive research university with strong sciences and humanities", zhType: "理科与人文兼具的综合研究型高校", strengths: ["science", "computer science", "Chinese studies", "environment", "business"], zhStrengths: ["理科", "计算机", "中国研究", "环境", "商科"] },
  "university-of-science-and-technology-of-china": { city: "Hefei", zhCity: "合肥", type: "highly selective science and technology research university", zhType: "高选择性理工研究型高校", strengths: ["physics", "quantum science", "computer science", "engineering", "mathematics"], zhStrengths: ["物理", "量子科学", "计算机", "工程", "数学"] },
  "wuhan-university": { city: "Wuhan", zhCity: "武汉", type: "scenic comprehensive research university in central China", zhType: "中部地区综合研究型高校", strengths: ["law", "medicine", "computer science", "surveying", "Chinese studies"], zhStrengths: ["法学", "医学", "计算机", "测绘", "中国研究"] },
  "huazhong-university-of-science-and-technology": { city: "Wuhan", zhCity: "武汉", type: "engineering and medical research university", zhType: "工程与医学实力突出的研究型高校", strengths: ["engineering", "medicine", "computer science", "public health", "AI"], zhStrengths: ["工程", "医学", "计算机", "公共卫生", "人工智能"] },
  "xi-an-jiaotong-university": { city: "Xi'an", zhCity: "西安", type: "engineering and management research university", zhType: "工程、能源和管理见长的研究型高校", strengths: ["engineering", "energy", "management", "medicine", "computer science"], zhStrengths: ["工程", "能源", "管理", "医学", "计算机"] },
  "harbin-institute-of-technology": { city: "Harbin", zhCity: "哈尔滨", type: "top engineering university with aerospace and robotics strength", zhType: "航空航天、机器人和工程见长的顶尖理工高校", strengths: ["aerospace", "robotics", "materials", "computer science", "mechanical engineering"], zhStrengths: ["航空航天", "机器人", "材料", "计算机", "机械工程"] },
  "sun-yat-sen-university": { city: "Guangzhou", zhCity: "广州", type: "comprehensive research university in the Greater Bay Area", zhType: "粤港澳大湾区综合研究型高校", strengths: ["medicine", "business", "science", "humanities", "marine science"], zhStrengths: ["医学", "商科", "理科", "人文", "海洋科学"] },
  "beijing-institute-of-technology": { city: "Beijing", zhCity: "北京", type: "engineering university with strong information and automation programs", zhType: "信息、自动化和工程见长的理工高校", strengths: ["engineering", "automation", "vehicle engineering", "information technology", "materials"], zhStrengths: ["工程", "自动化", "车辆工程", "信息技术", "材料"] },
  "southeast-university": { city: "Nanjing", zhCity: "南京", type: "engineering university known for architecture, civil engineering and electronics", zhType: "建筑、土木与电子信息见长的理工高校", strengths: ["architecture", "civil engineering", "electronics", "transportation", "computer science"], zhStrengths: ["建筑", "土木工程", "电子信息", "交通", "计算机"] },
  "sichuan-university": { city: "Chengdu", zhCity: "成都", type: "comprehensive research university in western China", zhType: "中国西部综合研究型高校", strengths: ["medicine", "engineering", "Chinese language", "business", "humanities"], zhStrengths: ["医学", "工程", "中文", "商科", "人文"] },
  "renmin-university-of-china": { city: "Beijing", zhCity: "北京", type: "leading humanities and social sciences university", zhType: "人文社科顶尖高校", strengths: ["law", "economics", "journalism", "public administration", "Chinese studies"], zhStrengths: ["法学", "经济", "新闻传播", "公共管理", "中国研究"] },
  "tongji-university": { city: "Shanghai", zhCity: "上海", type: "engineering, architecture and design university", zhType: "工程、建筑与设计见长", strengths: ["civil engineering", "architecture", "urban planning", "design", "vehicle engineering"], zhStrengths: ["土木工程", "建筑", "城市规划", "设计", "车辆工程"] },
  "beijing-normal-university": { city: "Beijing", zhCity: "北京", type: "normal and comprehensive research university", zhType: "师范与综合研究型", strengths: ["education", "psychology", "Chinese language", "environment", "humanities"], zhStrengths: ["教育学", "心理学", "中文", "环境", "人文"] },
  "tianjin-university": { city: "Tianjin", zhCity: "天津", type: "engineering research university", zhType: "工程研究型高校", strengths: ["chemical engineering", "architecture", "civil engineering", "management", "automation"], zhStrengths: ["化工", "建筑", "土木", "管理", "自动化"] },
  "nankai-university": { city: "Tianjin", zhCity: "天津", type: "comprehensive research university", zhType: "综合研究型高校", strengths: ["economics", "chemistry", "mathematics", "history", "business"], zhStrengths: ["经济", "化学", "数学", "历史", "商科"] },
  "shandong-university": { city: "Jinan", zhCity: "济南", type: "large comprehensive university with multiple Shandong campuses", zhType: "多校区综合研究型高校", strengths: ["medicine", "engineering", "Chinese studies", "materials", "business"], zhStrengths: ["医学", "工程", "中国研究", "材料", "商科"] },
  "northwestern-polytechnical-university": { city: "Xi'an", zhCity: "西安", type: "aerospace, aviation and marine engineering university", zhType: "航空、航天、航海特色鲜明的理工高校", strengths: ["aerospace", "aviation", "marine engineering", "materials", "AI"], zhStrengths: ["航天", "航空", "航海", "材料", "人工智能"] },
  "china-agricultural-university": { city: "Beijing", zhCity: "北京", type: "agriculture and life-science research university", zhType: "农业与生命科学研究型高校", strengths: ["agriculture", "food science", "animal science", "life science", "rural development"], zhStrengths: ["农业", "食品科学", "动物科学", "生命科学", "乡村发展"] },
  "xiamen-university": { city: "Xiamen", zhCity: "厦门", type: "coastal comprehensive research university", zhType: "滨海综合研究型高校", strengths: ["economics", "business", "marine science", "chemistry", "Southeast Asia studies"], zhStrengths: ["经济", "商科", "海洋科学", "化学", "东南亚研究"] },
  "jilin-university": { city: "Changchun", zhCity: "长春", type: "large comprehensive research university", zhType: "大型综合研究型高校", strengths: ["medicine", "engineering", "law", "vehicle engineering", "chemistry"], zhStrengths: ["医学", "工程", "法学", "车辆工程", "化学"] },
  "central-south-university": { city: "Changsha", zhCity: "长沙", type: "comprehensive university strong in medicine, materials and engineering", zhType: "医学、材料与工程见长的综合高校", strengths: ["medicine", "materials", "transportation", "mining", "AI"], zhStrengths: ["医学", "材料", "交通", "矿业", "人工智能"] },
  "dalian-university-of-technology": { city: "Dalian", zhCity: "大连", type: "engineering research university in a coastal city", zhType: "滨海城市理工研究型高校", strengths: ["chemical engineering", "mechanical engineering", "civil engineering", "computer science", "management"], zhStrengths: ["化工", "机械", "土木", "计算机", "管理"] },
  "east-china-normal-university": { city: "Shanghai", zhCity: "上海", type: "normal and comprehensive research university", zhType: "师范与综合研究型高校", strengths: ["education", "psychology", "Chinese language", "data science", "humanities"], zhStrengths: ["教育", "心理", "中文", "数据科学", "人文"] },
  "hunan-university": { city: "Changsha", zhCity: "长沙", type: "comprehensive research university with Yuelu Academy heritage", zhType: "兼具岳麓书院文脉的综合研究型高校", strengths: ["engineering", "business", "design", "chemistry", "computer science"], zhStrengths: ["工程", "商科", "设计", "化学", "计算机"] },
  "south-china-university-of-technology": { city: "Guangzhou", zhCity: "广州", type: "engineering and technology university in South China", zhType: "华南地区工程技术强校", strengths: ["engineering", "architecture", "materials", "computer science", "food science"], zhStrengths: ["工程", "建筑", "材料", "计算机", "食品科学"] },
  "university-of-electronic-science-and-technology-of-china": { city: "Chengdu", zhCity: "成都", type: "electronic information research university", zhType: "电子信息领域强校", strengths: ["electronic engineering", "communication", "computer science", "AI", "cybersecurity"], zhStrengths: ["电子工程", "通信", "计算机", "人工智能", "网络安全"] },
  "chongqing-university": { city: "Chongqing", zhCity: "重庆", type: "comprehensive engineering research university", zhType: "工程见长的综合研究型高校", strengths: ["engineering", "architecture", "business", "computer science", "energy"], zhStrengths: ["工程", "建筑", "商科", "计算机", "能源"] },
  "shanghai-university-of-finance-and-economics": { city: "Shanghai", zhCity: "上海", type: "finance and economics university", zhType: "财经类强校", strengths: ["finance", "economics", "accounting", "statistics", "business"], zhStrengths: ["金融", "经济", "会计", "统计", "商科"] },
  "university-of-science-and-technology-beijing": { city: "Beijing", zhCity: "北京", type: "engineering university known for materials and metallurgy", zhType: "材料与冶金特色鲜明的理工高校", strengths: ["materials", "metallurgy", "engineering", "computer science", "management"], zhStrengths: ["材料", "冶金", "工程", "计算机", "管理"] },
  "nanjing-university-of-science-and-technology": { city: "Nanjing", zhCity: "南京", type: "engineering university with strong information and intelligent manufacturing programs", zhType: "信息与智能制造见长的理工高校", strengths: ["engineering", "computer science", "automation", "materials", "management"], zhStrengths: ["工程", "计算机", "自动化", "材料", "管理"] },
  "capital-medical-university": { city: "Beijing", zhCity: "北京", type: "medical university connected to Beijing clinical resources", zhType: "依托北京临床资源的医学高校", strengths: ["clinical medicine", "public health", "stomatology", "pharmacy", "nursing"], zhStrengths: ["临床医学", "公共卫生", "口腔医学", "药学", "护理"] },
  "nanjing-university-of-aeronautics-and-astronautics": { city: "Nanjing", zhCity: "南京", type: "aerospace and engineering university", zhType: "航空航天与工程强校", strengths: ["aerospace", "mechanical engineering", "computer science", "automation", "materials"], zhStrengths: ["航空航天", "机械工程", "计算机", "自动化", "材料"] },
  "northeastern-university": { city: "Shenyang", zhCity: "沈阳", type: "engineering university with automation and materials strength", zhType: "自动化与材料见长的理工高校", strengths: ["automation", "computer science", "materials", "software", "management"], zhStrengths: ["自动化", "计算机", "材料", "软件", "管理"] },
  "xidian-university": { city: "Xi'an", zhCity: "西安", type: "electronic information university", zhType: "电子信息领域强校", strengths: ["electronic engineering", "communication", "cybersecurity", "computer science", "AI"], zhStrengths: ["电子工程", "通信", "网络安全", "计算机", "人工智能"] },
  "lanzhou-university": { city: "Lanzhou", zhCity: "兰州", type: "comprehensive research university in northwest China", zhType: "中国西北综合研究型高校", strengths: ["chemistry", "ecology", "physics", "medicine", "Chinese studies"], zhStrengths: ["化学", "生态", "物理", "医学", "中国研究"] },
  "beijing-jiaotong-university": { city: "Beijing", zhCity: "北京", type: "transportation and engineering university", zhType: "交通运输与工程强校", strengths: ["transportation", "rail transit", "information systems", "logistics", "engineering"], zhStrengths: ["交通运输", "轨道交通", "信息系统", "物流", "工程"] },
  "central-university-of-finance-and-economics": { city: "Beijing", zhCity: "北京", type: "finance and economics university", zhType: "财经类强校", strengths: ["applied economics", "finance", "public finance", "investment", "law"], zhStrengths: ["应用经济", "金融", "财政", "投资", "法学"] },
  "east-china-university-of-science-and-technology": { city: "Shanghai", zhCity: "上海", type: "science and engineering university", zhType: "理工类高校", strengths: ["chemical engineering", "materials", "pharmacy", "engineering", "business"], zhStrengths: ["化工", "材料", "药学", "工程", "商科"] },
  "southern-medical-university": { city: "Guangzhou", zhCity: "广州", type: "medical university in South China", zhType: "华南地区医学高校", strengths: ["clinical medicine", "public health", "pharmacy", "biomedicine", "nursing"], zhStrengths: ["临床医学", "公共卫生", "药学", "生物医学", "护理"] },
  "zhengzhou-university": { city: "Zhengzhou", zhCity: "郑州", type: "large comprehensive university in central China", zhType: "中部地区大型综合高校", strengths: ["medicine", "chemistry", "materials", "engineering", "business"], zhStrengths: ["医学", "化学", "材料", "工程", "商科"] },
  "huazhong-agricultural-university": { city: "Wuhan", zhCity: "武汉", type: "agriculture and life-science university", zhType: "农业与生命科学强校", strengths: ["agriculture", "life sciences", "food science", "animal science", "resource environment"], zhStrengths: ["农业", "生命科学", "食品科学", "动物科学", "资源环境"] },
  "soochow-university": { city: "Suzhou", zhCity: "苏州", type: "comprehensive university in the Yangtze River Delta", zhType: "长三角综合高校", strengths: ["medicine", "materials", "textile science", "law", "business"], zhStrengths: ["医学", "材料", "纺织科学", "法学", "商科"] },
  "northeast-normal-university": { city: "Changchun", zhCity: "长春", type: "normal university strong in education and basic disciplines", zhType: "教育与基础学科见长的师范高校", strengths: ["education", "Chinese language", "psychology", "life sciences", "physics"], zhStrengths: ["教育", "中文", "心理", "生命科学", "物理"] },
  "southwest-jiaotong-university": { city: "Chengdu", zhCity: "成都", type: "transportation and engineering university", zhType: "交通运输与工程强校", strengths: ["rail transit", "civil engineering", "mechanical engineering", "logistics", "transportation"], zhStrengths: ["轨道交通", "土木工程", "机械", "物流", "交通运输"] },
  "beijing-university-of-posts-and-telecommunications": { city: "Beijing", zhCity: "北京", type: "information and telecommunications university", zhType: "信息通信强校", strengths: ["telecommunications", "software", "computer science", "cybersecurity", "AI"], zhStrengths: ["通信", "软件", "计算机", "网络安全", "人工智能"] }
};

const cityLivingCost: Record<string, string> = {
  Beijing: "Reference living cost: about CNY 3,000-5,000/month; dormitory availability and off-campus rent vary greatly by district.",
  Shanghai: "Reference living cost: about CNY 3,500-6,000/month; professional programs and central-area housing can be higher.",
  Hangzhou: "Reference living cost: about CNY 2,800-4,800/month, with strong technology-sector internships and a comfortable city environment.",
  Nanjing: "Reference living cost: about CNY 2,500-4,200/month, usually friendly for long-term graduate study.",
  Wuhan: "Reference living cost: about CNY 2,200-4,000/month, with strong value for research students.",
  "Xi'an": "Reference living cost: about CNY 2,000-3,800/month, student-friendly for long-term master's or doctoral study.",
  Chengdu: "Reference living cost: about CNY 2,500-4,200/month, with a good balance between comfort and cost.",
  Guangzhou: "Reference living cost: about CNY 2,800-4,800/month; university-town housing can be gentler than central business districts.",
  Tianjin: "Reference living cost: about CNY 2,500-4,000/month, usually easier than Beijing while staying close to national resources."
};

const zhCityLivingCost: Record<string, string> = {
  北京: "生活费参考约 3,000-5,000 元/月；宿舍名额和校外租金会因校区、区位差异很大。",
  上海: "生活费参考约 3,500-6,000 元/月；专业学位项目和市中心住宿成本可能更高。",
  杭州: "生活费参考约 2,800-4,800 元/月；科技产业实习机会多，城市舒适度较高。",
  南京: "生活费参考约 2,500-4,200 元/月，适合长期硕博学习。",
  武汉: "生活费参考约 2,200-4,000 元/月，对研究生阶段性价比较高。",
  西安: "生活费参考约 2,000-3,800 元/月，对长期硕士或博士学习较友好。",
  成都: "生活费参考约 2,500-4,200 元/月，舒适度和成本平衡较好。",
  广州: "生活费参考约 2,800-4,800 元/月；大学城等区域通常比核心商务区更友好。",
  天津: "生活费参考约 2,500-4,000 元/月，通常比北京压力小，同时靠近国家级资源。"
};

function getStaticScholarships(slug: string, name: string) {
  return staticUniversities.find((university) => university.slug === slug)?.scholarships ?? [
    "Chinese Government Scholarship (CSC), where the university is an eligible host or pathway",
    `${name} university-level scholarship opportunities, subject to annual quota and review`,
    "Provincial or municipal scholarship routes where available"
  ];
}

function makeTop50Guide(slug: (typeof top50GraduateSlugs)[number]): UniversityAdmissionsGuide {
  const ranking = chinaUniversityRankings[slug];
  const profile = graduateProfiles[slug];
  const name = ranking?.nameEn ?? slug;
  const zhName = ranking?.nameCn ?? name;
  const rankText = ranking?.rank ?? "top-50";
  const scholarships = getStaticScholarships(slug, name);
  const zhScholarships = scholarships.map((item) => {
    if (item.includes("CSC") || item.includes("Chinese Government")) return "中国政府奖学金（CSC）：需核验该校当年可申请项目、受理机构和名额。";
    if (item.includes("Provincial") || item.includes("Government")) return "省市级奖学金：以学校国际学生办公室当年通知为准。";
    return `${zhName} 校级奖学金：覆盖比例、续评规则和名额以当年招生简章为准。`;
  });

  const fields = profile.strengths.slice(0, 4).join(", ");
  const zhFields = profile.zhStrengths.slice(0, 4).join("、");

  return {
    sourceBatch: "SilkStudy top-50 China graduate admissions prospectus layer, organized from 2026 China ranking scope and official annual graduate-admission verification workflow. Always verify the current university notice before submission.",
    profile: `${name} is a ${profile.type} in ${profile.city}. In the SilkStudy China top-50 graduate track, it is especially worth checking for master's and doctoral applicants interested in ${fields}, scholarship fit, supervisor match and realistic admission probability.`,
    zhProfile: `${zhName}位于${profile.zhCity}，是一所${profile.zhType}。在 SilkStudy 中国大学前 50 硕博申请路线中，适合重点核验${zhFields}等方向的硕士、博士项目，同时比较奖学金覆盖、导师匹配和真实录取概率。`,
    levels: [
      "Master's degree programs for international students",
      "Doctoral degree programs for international students",
      "Research, visiting or exchange study where offered",
      "Chinese language bridge route when the target program is Chinese-taught"
    ],
    zhLevels: [
      "国际学生硕士项目",
      "国际学生博士项目",
      "研究进修、访问或交换项目（以学校开放项目为准）",
      "中文授课项目前的汉语衔接路线"
    ],
    englishPrograms: [
      `${profile.strengths[0]} and related master's / doctoral programs`,
      `${profile.strengths[1]} and interdisciplinary graduate research where offered`,
      `${profile.strengths[2]} or China-focused programs subject to the annual catalog`,
      "English-taught options, joint institutes and professional degrees must be checked against the current program list"
    ],
    zhEnglishPrograms: [
      `${profile.zhStrengths[0]}及相关硕士、博士项目`,
      `${profile.zhStrengths[1]}及交叉学科研究生方向（以当年目录为准）`,
      `${profile.zhStrengths[2]}或中国相关研究方向（以年度项目目录为准）`,
      "英文授课项目、联合学院和专业学位需逐项核验当年专业目录"
    ],
    applicationMaterials: [
      "Valid passport information page and recent ID photo",
      "Highest diploma or expected graduation certificate, plus full academic transcripts",
      "Master's applicants usually prepare two recommendation letters; doctoral applicants should also prepare a research proposal and supervisor-fit materials",
      "Language proof: HSK for Chinese-taught programs, or IELTS / TOEFL / prior English-medium proof for English-taught programs",
      "Physical examination form, no-criminal-record certificate and financial or scholarship documents where required",
      "Portfolio, writing sample, publication list, supervisor acceptance or interview materials when required by the school or department"
    ],
    zhApplicationMaterials: [
      "有效护照个人信息页和近期证件照",
      "最高学历证明或预毕业证明，以及完整成绩单",
      "硕士申请通常准备两封推荐信；博士申请还应准备研究计划、导师匹配材料",
      "语言证明：中文授课看 HSK，英文授课看 IELTS、TOEFL 或前置英文授课证明",
      "外国人体格检查表、无犯罪记录证明，以及学校要求的经济或奖学金材料",
      "作品集、写作样本、论文成果、导师接收意见或面试材料，以院系要求为准"
    ],
    languageRequirements: [
      "Chinese-taught master's and doctoral programs normally require HSK; many top universities ask for higher levels by discipline.",
      "English-taught programs normally require IELTS, TOEFL or accepted proof of previous English-medium education.",
      "Doctoral admission is strongly affected by research fit, supervisor capacity, publications or research potential, not only GPA.",
      "Medical, law, finance, architecture, design and MBA-type programs may have extra professional requirements."
    ],
    zhLanguageRequirements: [
      "中文授课硕士、博士通常要求 HSK，前 50 高校往往会按学科提高要求。",
      "英文授课项目通常要求 IELTS、TOEFL 或被认可的前置英文授课证明。",
      "博士录取高度取决于研究方向、导师名额、论文成果或研究潜力，不只是 GPA。",
      "医学、法学、金融、建筑、设计、MBA 等专业可能有额外职业或作品要求。"
    ],
    timeline: [
      "Autumn-intake graduate applications often open from the previous October to the following spring.",
      "CSC and high-coverage scholarship tracks usually close earlier than self-funded applications.",
      "Doctoral applicants should contact potential supervisors and prepare research materials before the deadline window.",
      "After admission, plan JW form, visa, insurance, housing and registration backward from September enrollment."
    ],
    zhTimeline: [
      "秋季入学硕博申请通常从前一年 10 月至次年春季陆续开放。",
      "CSC 和高覆盖奖学金通道通常早于自费申请截止。",
      "博士申请建议在截止窗口前完成导师沟通和研究材料准备。",
      "录取后需从 9 月入学倒推 JW 表、签证、保险、住宿和报到安排。"
    ],
    fees: {
      application: "Application fee varies by university and annual notice, commonly around CNY 400-800 for graduate applications.",
      tuition: "Graduate tuition varies by degree, discipline and language route. Professional degrees, medicine, MBA and English-taught programs can be higher.",
      accommodation: "Dormitory availability and room fees vary by campus and room type; confirm before accepting admission.",
      insurance: "International students normally need approved medical insurance, often around CNY 800/year.",
      livingCost: cityLivingCost[profile.city] ?? "Reference living cost: about CNY 2,000-4,500/month, depending on city, campus and housing choice."
    },
    zhFees: {
      application: "研究生申请报名费按学校年度通知执行，常见约 400-800 元。",
      tuition: "研究生学费按学历层次、学科和授课语言变化；专业学位、医学、MBA 和英文授课项目可能更高。",
      accommodation: "宿舍名额、校区和房型费用差异较大，接受录取前应确认。",
      insurance: "来华留学生通常需购买指定医疗保险，常见约 800 元/年。",
      livingCost: zhCityLivingCost[profile.zhCity] ?? "生活费参考约 2,000-4,500 元/月，取决于城市、校区和住宿选择。"
    },
    scholarships,
    zhScholarships,
    lifeHighlights: [
      `${profile.city} gives graduate students access to university labs, libraries, academic seminars and Chinese-language practice in daily life.`,
      `${name}'s China ranking reference is ${rankText}; use it together with discipline strength, supervisor fit and scholarship coverage instead of ranking alone.`,
      "SilkStudy can help students compare full-scholarship, partial-scholarship and low-cost routes before choosing a final application list."
    ],
    zhLifeHighlights: [
      `${profile.zhCity}能为硕博学生提供实验室、图书馆、学术讲座和日常中文实践环境。`,
      `${zhName}的中国排名参考为${rankText}；选校时应把排名与学科实力、导师匹配和奖学金覆盖一起判断。`,
      "SilkStudy 可以帮助学生在确定申请名单前比较全奖、半奖和低成本路线。"
    ],
    counselorNote: "For master's applicants, compare program language, scholarship quota and employability. For doctoral applicants, start with supervisor fit, research proposal quality and funding route, then verify the current official prospectus.",
    zhCounselorNote: "硕士申请重点比较授课语言、奖学金名额和就业方向；博士申请先看导师匹配、研究计划质量和资助路线，再核验学校当年官方招生简章。"
  };
}

const top50GraduateGuides = Object.fromEntries(
  top50GraduateSlugs.map((slug) => [slug, makeTop50Guide(slug)])
) as Record<string, UniversityAdmissionsGuide>;

export function getEnhancedUniversityAdmissionsGuide(slug: string) {
  return top50GraduateGuides[slug] ?? getLegacyUniversityAdmissionsGuide(slug);
}

export function getTop50GraduateGuideCoverage() {
  return {
    total: top50GraduateSlugs.length,
    slugs: [...top50GraduateSlugs],
    withGuide: top50GraduateSlugs.filter((slug) => Boolean(top50GraduateGuides[slug])).length
  };
}
