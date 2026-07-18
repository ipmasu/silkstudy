export type UniversityAdmissionsGuide = {
  sourceBatch: string;
  profile: string;
  zhProfile: string;
  levels: string[];
  zhLevels: string[];
  englishPrograms: string[];
  zhEnglishPrograms: string[];
  applicationMaterials: string[];
  zhApplicationMaterials: string[];
  languageRequirements: string[];
  zhLanguageRequirements: string[];
  timeline: string[];
  zhTimeline: string[];
  fees: {
    application: string;
    tuition: string;
    accommodation: string;
    insurance: string;
    livingCost: string;
  };
  zhFees: {
    application: string;
    tuition: string;
    accommodation: string;
    insurance: string;
    livingCost: string;
  };
  scholarships: string[];
  zhScholarships: string[];
  lifeHighlights: string[];
  zhLifeHighlights: string[];
  counselorNote: string;
  zhCounselorNote: string;
};

type SchoolSeed = {
  slug: string;
  name: string;
  zhName: string;
  city: string;
  zhCity: string;
  type: string;
  zhType: string;
  strengths: string[];
  zhStrengths: string[];
  english: string[];
  zhEnglish: string[];
  tuition?: string;
  zhTuition?: string;
  applicationFee?: string;
  zhApplicationFee?: string;
  scholarships?: string[];
  zhScholarships?: string[];
  life?: string[];
  zhLife?: string[];
};

const commonMaterials = [
  "Valid passport information page",
  "Highest diploma or expected graduation certificate",
  "Full academic transcripts",
  "Language proficiency proof, such as HSK, IELTS or TOEFL when required",
  "Physical examination form and no-criminal-record certificate",
  "Study plan, personal statement, CV and recommendation letters where required"
];

const zhCommonMaterials = [
  "有效护照个人信息页",
  "最高学历证明或预毕业证明",
  "完整成绩单",
  "按项目要求提交 HSK、IELTS、TOEFL 等语言成绩",
  "外国人体格检查表和无犯罪记录证明",
  "按层次提交学习计划、个人陈述、简历和推荐信"
];

const cityLife: Record<string, { livingCost: string; zhLivingCost: string; life: string[]; zhLife: string[] }> = {
  Beijing: {
    livingCost: "Reference living cost: about CNY 3,000-5,000/month, higher near Haidian and central districts.",
    zhLivingCost: "生活费参考：约 3,000-5,000 元/月，海淀和市中心周边住宿成本更高。",
    life: [
      "Beijing gives students China’s densest concentration of universities, museums, research institutes and policy resources.",
      "Haidian, Wudaokou, Zhongguancun and Sanlitun make it easy to combine study, Chinese practice and international social life."
    ],
    zhLife: [
      "北京拥有中国最密集的高校、博物馆、科研机构和政策文化资源。",
      "海淀、五道口、中关村和三里屯让学习、中文练习和国际社交自然连接。"
    ]
  },
  Shanghai: {
    livingCost: "Reference living cost: about CNY 3,500-6,000/month; rent varies sharply between central districts and university towns.",
    zhLivingCost: "生活费参考：约 3,500-6,000 元/月，市中心与大学城租金差异明显。",
    life: [
      "Shanghai is strong for students seeking finance, medicine, design, engineering, trade and multinational-company exposure.",
      "Metro, airports, museums, live music, the Bund and Yangtze River Delta trips make daily life convenient and international."
    ],
    zhLife: [
      "上海适合关注金融、医学、设计、工程、贸易和跨国公司机会的学生。",
      "地铁、机场、博物馆、音乐现场、外滩和长三角短途旅行，让生活便利且国际化。"
    ]
  },
  Tianjin: {
    livingCost: "Reference living cost: about CNY 2,500-4,000/month, usually easier than Beijing.",
    zhLivingCost: "生活费参考：约 2,500-4,000 元/月，通常比北京压力小。",
    life: [
      "Tianjin combines strong northern universities with Haihe river walks, historic architecture and fast access to Beijing.",
      "It suits students who want calmer living costs while still staying close to national-level resources."
    ],
    zhLife: [
      "天津把华北高校资源、海河夜景、历史建筑和通往北京的高铁便利结合起来。",
      "适合希望生活成本更平稳，同时又靠近首都资源的学生。"
    ]
  },
  Chongqing: {
    livingCost: "Reference living cost: about CNY 2,000-3,800/month, with strong value for food and housing.",
    zhLivingCost: "生活费参考：约 2,000-3,800 元/月，餐饮和住宿性价比较高。",
    life: [
      "Chongqing is vivid, affordable and memorable: hotpot, rivers, bridges, night views and mountain-city commuting become part of student life.",
      "It is a strong choice for students who want a lower-cost western China hub with a powerful city personality."
    ],
    zhLife: [
      "重庆热烈、有个性且成本友好，火锅、两江、桥梁、夜景和山城通勤都会变成留学记忆。",
      "适合希望用更低成本体验中国西部核心城市的学生。"
    ]
  },
  Chengdu: {
    livingCost: "Reference living cost: about CNY 2,500-4,200/month, with good balance between comfort and cost.",
    zhLivingCost: "生活费参考：约 2,500-4,200 元/月，舒适度和成本平衡较好。",
    life: [
      "Chengdu offers teahouses, hotpot, music, pandas and a softer pace without losing serious university and technology resources.",
      "It suits students who value quality of life, food culture and a welcoming social rhythm."
    ],
    zhLife: [
      "成都有茶馆、火锅、音乐、大熊猫和更松弛的生活节奏，同时不缺高校和科技产业资源。",
      "适合重视生活质量、美食文化和友好社交节奏的学生。"
    ]
  },
  "Xi'an": {
    livingCost: "Reference living cost: about CNY 2,000-3,800/month, student-friendly for long-term study.",
    zhLivingCost: "生活费参考：约 2,000-3,800 元/月，对长期学习较友好。",
    life: [
      "Xi'an lets students study beside ancient city walls, museums, noodles, Tang-style night streets and strong engineering universities.",
      "It is especially attractive for students who want Chinese history, affordable life and serious science or engineering training."
    ],
    zhLife: [
      "西安让学生在古城墙、博物馆、面食、大唐不夜城和理工强校之间生活学习。",
      "适合想要历史文化、亲民成本和扎实理工训练的学生。"
    ]
  },
  Guangzhou: {
    livingCost: "Reference living cost: about CNY 2,800-4,800/month; Tianhe is higher, University Town and Panyu are often gentler.",
    zhLivingCost: "生活费参考：约 2,800-4,800 元/月，天河较高，大学城和番禺通常更友好。",
    life: [
      "Guangzhou is open, practical and delicious, with morning tea, Pearl River nights, trade networks and a strong South China university cluster.",
      "It is friendly to students from Southeast Asia, Africa and the wider trade-facing world."
    ],
    zhLife: [
      "广州开放、务实、好吃，有早茶、珠江夜景、商贸网络和华南高校群。",
      "对东南亚、非洲以及面向国际贸易方向的学生特别友好。"
    ]
  },
  Shenzhen: {
    livingCost: "Reference living cost: about CNY 3,500-6,000/month; housing is the main pressure point.",
    zhLivingCost: "生活费参考：约 3,500-6,000 元/月，住宿是主要压力点。",
    life: [
      "Shenzhen is young and career-facing, especially for technology, AI, engineering, design, business and entrepreneurship.",
      "Coastal weekends, Greater Bay Area access and startup culture make it attractive for ambitious students."
    ],
    zhLife: [
      "深圳年轻、面向职业，尤其适合科技、AI、工程、设计、商科和创业方向。",
      "海边周末、大湾区连接和创业氛围，对目标感强的学生很有吸引力。"
    ]
  },
  Changsha: {
    livingCost: "Reference living cost: about CNY 2,000-4,000/month, with excellent food value.",
    zhLivingCost: "生活费参考：约 2,000-4,000 元/月，餐饮性价比非常高。",
    life: [
      "Changsha is energetic, affordable and social, with Yuelu Mountain, Orange Isle, night markets and strong student neighborhoods.",
      "It suits students who want rich city life without the cost pressure of Beijing, Shanghai or Shenzhen."
    ],
    zhLife: [
      "长沙热烈、亲民、社交感强，有岳麓山、橘子洲、夜市和浓厚学生区。",
      "适合想要丰富城市生活，但不想承受北上深成本压力的学生。"
    ]
  },
  Nanning: {
    livingCost: "Reference living cost: about CNY 1,800-3,500/month, especially friendly for ASEAN students.",
    zhLivingCost: "生活费参考：约 1,800-3,500 元/月，对东盟学生尤其友好。",
    life: [
      "Nanning is China’s ASEAN-facing green city, warm, affordable and culturally close to Southeast Asia.",
      "It suits students interested in Chinese language, medicine, regional business and cross-border exchange."
    ],
    zhLife: [
      "南宁是面向东盟的中国绿城，温暖、低成本，并与东南亚文化距离更近。",
      "适合中文、医学、区域商务和跨境交流方向学生。"
    ]
  },
  Guilin: {
    livingCost: "Reference living cost: about CNY 1,800-3,500/month, with low-cost nature and travel access.",
    zhLivingCost: "生活费参考：约 1,800-3,500 元/月，自然和旅行体验成本较低。",
    life: [
      "Guilin gives students Li River scenery, Yangshuo weekends, rice noodles and a slower China experience.",
      "It suits students who value nature, photography, travel and a less overwhelming study environment."
    ],
    zhLife: [
      "桂林给学生漓江山水、阳朔周末、桂林米粉和更慢一点的中国体验。",
      "适合喜欢自然、摄影、旅行和较低压学习环境的学生。"
    ]
  },
  Kunming: {
    livingCost: "Reference living cost: about CNY 2,000-3,800/month, with comfortable weather year-round.",
    zhLivingCost: "生活费参考：约 2,000-3,800 元/月，全年气候舒适。",
    life: [
      "Kunming is mild, diverse and ASEAN-facing, with flowers, lakes, ethnic cultures and a gentler landing experience.",
      "It suits students from Southeast Asia and anyone who wants a relaxed city with regional exchange value."
    ],
    zhLife: [
      "昆明温和、多元、面向东南亚，有鲜花、湖泊、民族文化和更轻松的适应环境。",
      "适合东南亚学生，以及希望在舒适城市中接触区域交流的人。"
    ]
  },
  Taiyuan: {
    livingCost: "Reference living cost: about CNY 1,800-3,300/month, practical for budget-conscious students.",
    zhLivingCost: "生活费参考：约 1,800-3,300 元/月，适合预算谨慎的学生。",
    life: [
      "Taiyuan is practical and historically deep, with Shanxi noodles, ancient architecture routes and a quieter study environment.",
      "It suits engineering, energy, materials and manufacturing-oriented students who want lower living pressure."
    ],
    zhLife: [
      "太原务实、有历史深度，有山西面食、古建路线和更安静的学习环境。",
      "适合工程、能源、材料和制造相关方向，并希望降低生活压力的学生。"
    ]
  }
};

function makeGuide(seed: SchoolSeed): UniversityAdmissionsGuide {
  const city = cityLife[seed.city];
  const scholarships = seed.scholarships ?? [
    "Chinese Government Scholarship (CSC), where the university is an eligible host or pathway",
    `${seed.city} or provincial/municipal government scholarship where available`,
    `${seed.name} university-level scholarships, subject to annual quota and review`
  ];
  const zhScholarships = seed.zhScholarships ?? [
    "中国政府奖学金 CSC（以该校当年可申报项目和受理路径为准）",
    `${seed.zhCity}或所在省市政府奖学金（以当年政策为准）`,
    `${seed.zhName}校级奖学金，名额和覆盖范围以年度评审为准`
  ];

  return {
    sourceBatch: "SilkStudy key university admissions guide batch, organized 2026-07-18",
    profile: `${seed.name} is a ${seed.type} university in ${seed.city}. For international students, its strongest decision points are ${seed.strengths.join(", ")}, admission competitiveness, scholarship fit and the daily-life cost of ${seed.city}.`,
    zhProfile: `${seed.zhName}位于${seed.zhCity}，是一所以${seed.zhType}见长的重点高校。留学生选校时应重点比较${seed.zhStrengths.join("、")}、录取竞争度、奖学金匹配度和${seed.zhCity}生活成本。`,
    levels: ["Chinese language / non-degree study", "Bachelor's programs", "Master's programs", "Doctoral programs", "Visiting or exchange study where offered"],
    zhLevels: ["语言生 / 非学历项目", "本科项目", "硕士项目", "博士项目", "访问生或交换项目（以学校开放项目为准）"],
    englishPrograms: seed.english,
    zhEnglishPrograms: seed.zhEnglish,
    applicationMaterials: commonMaterials,
    zhApplicationMaterials: zhCommonMaterials,
    languageRequirements: [
      "Chinese-taught programs usually require HSK, with level varying by degree, major and school.",
      "English-taught programs usually require IELTS, TOEFL or proof of prior English-medium education.",
      "Graduate applicants often need recommendation letters, study plan or research proposal; elite programs may add interview or department review."
    ],
    zhLanguageRequirements: [
      "中文授课项目通常要求 HSK，具体等级按学历层次、专业和学校年度简章确认。",
      "英文授课项目通常要求 IELTS、TOEFL 或前置学历全英文授课证明。",
      "研究生申请通常需要推荐信、学习计划或研究计划，重点项目可能增加面试或院系审核。"
    ],
    timeline: [
      "Most autumn-intake applications open between October and March, with final deadlines often between March and June.",
      "Scholarship tracks normally close earlier than self-funded applications.",
      "Admission, JW form, visa, insurance, dormitory and registration steps should be planned backward from September enrollment."
    ],
    zhTimeline: [
      "秋季入学通常在前一年 10 月至当年 3 月陆续开放，最终截止多集中在 3-6 月。",
      "奖学金通道通常早于自费申请截止，建议提前准备。",
      "录取、JW 表、签证、保险、宿舍和报到应从 9 月入学倒推安排。"
    ],
    fees: {
      application: seed.applicationFee ?? "Application fee varies by annual notice, commonly around CNY 400-800.",
      tuition: seed.tuition ?? "Tuition varies by degree level, major and language route; confirm from the current annual guide.",
      accommodation: "Dormitory availability and room fees vary by campus and room type; confirm before accepting admission.",
      insurance: "International students normally need approved medical insurance, often around CNY 800/year.",
      livingCost: city.livingCost
    },
    zhFees: {
      application: seed.zhApplicationFee ?? "报名费以年度简章为准，常见区间约 400-800 元。",
      tuition: seed.zhTuition ?? "学费按学历层次、专业和授课语言不同而变化，以当年招生简章为准。",
      accommodation: "住宿名额、校区和房型费用差异较大，接受录取前应确认。",
      insurance: "来华留学生通常需购买指定医疗保险，常见约 800 元/年。",
      livingCost: city.zhLivingCost
    },
    scholarships,
    zhScholarships,
    lifeHighlights: seed.life ?? city.life,
    zhLifeHighlights: seed.zhLife ?? city.zhLife,
    counselorNote: "SilkStudy should verify the latest annual prospectus before advising a student, then compare scholarship coverage, language route, city cost and realistic admission probability.",
    zhCounselorNote: "SilkStudy 顾问应在对接学生前核对当年最新简章，再综合奖学金覆盖、授课语言、城市成本和真实录取概率给出方案。"
  };
}

const seeds: SchoolSeed[] = [
  { slug: "tsinghua-university", name: "Tsinghua University", zhName: "清华大学", city: "Beijing", zhCity: "北京", type: "comprehensive research university with engineering and technology strength", zhType: "综合研究型、理工见长", strengths: ["engineering", "computer science", "AI", "architecture", "management"], zhStrengths: ["工程", "计算机", "人工智能", "建筑", "管理"], english: ["Schwarzman Scholars", "Global Business Journalism", "MBA and selected graduate programs", "Shenzhen International Graduate School programs"], zhEnglish: ["苏世民书院", "全球财经新闻", "MBA 和部分研究生项目", "深圳国际研究生院相关项目"], tuition: "Graduate tuition examples often start around CNY 33,000/year for Chinese-taught programs and can be higher for English-taught or professional programs.", zhTuition: "研究生中文授课项目常见约 33,000 元/年起，英文授课和专业学位项目可能更高。", applicationFee: "CNY 800 for graduate applications in many admissions cycles.", zhApplicationFee: "研究生申请常见报名费约 800 元。" },
  { slug: "peking-university", name: "Peking University", zhName: "北京大学", city: "Beijing", zhCity: "北京", type: "comprehensive research university", zhType: "综合研究型", strengths: ["humanities", "sciences", "medicine", "economics", "management"], zhStrengths: ["人文", "理科", "医学", "经济", "管理"], english: ["Computer science and engineering-related options", "School of Transnational Law", "Yenching Academy", "selected graduate programs"], zhEnglish: ["计算机和工程相关方向", "国际法学院", "燕京学堂", "部分英文研究生项目"], applicationFee: "CNY 800 in many degree-program applications.", zhApplicationFee: "学历项目申请常见报名费约 800 元。" },
  { slug: "renmin-university-of-china", name: "Renmin University of China", zhName: "中国人民大学", city: "Beijing", zhCity: "北京", type: "humanities and social sciences university", zhType: "人文社科", strengths: ["law", "economics", "journalism", "public administration", "Chinese studies"], zhStrengths: ["法学", "经济", "新闻传播", "公共管理", "中国研究"], english: ["Contemporary China Studies", "global leadership and selected social-science programs"], zhEnglish: ["当代中国研究", "全球领导力及部分社科英文项目"] },
  { slug: "beijing-normal-university", name: "Beijing Normal University", zhName: "北京师范大学", city: "Beijing", zhCity: "北京", type: "normal and comprehensive university", zhType: "师范与综合研究型", strengths: ["education", "psychology", "Chinese language", "environment", "humanities"], zhStrengths: ["教育学", "心理学", "中文", "环境", "人文"], english: ["Selected master's and doctoral programs subject to annual catalog"], zhEnglish: ["部分硕博英文项目，以年度目录为准"] },
  { slug: "beihang-university", name: "Beihang University", zhName: "北京航空航天大学", city: "Beijing", zhCity: "北京", type: "aerospace and engineering university", zhType: "航空航天与工程", strengths: ["aerospace", "mechanical engineering", "computer science", "AI", "automation"], zhStrengths: ["航空航天", "机械工程", "计算机", "人工智能", "自动化"], english: ["Aeronautical engineering", "computer science", "software engineering", "selected graduate engineering programs"], zhEnglish: ["航空工程", "计算机科学", "软件工程", "部分工程类研究生项目"] },
  { slug: "beijing-institute-of-technology", name: "Beijing Institute of Technology", zhName: "北京理工大学", city: "Beijing", zhCity: "北京", type: "engineering university", zhType: "理工", strengths: ["engineering", "automation", "vehicle engineering", "information technology", "materials"], zhStrengths: ["工程", "自动化", "车辆工程", "信息技术", "材料"], english: ["Mechanical engineering", "information and communication engineering", "computer and selected graduate programs"], zhEnglish: ["机械工程", "信息与通信工程", "计算机及部分研究生项目"] },
  { slug: "china-agricultural-university", name: "China Agricultural University", zhName: "中国农业大学", city: "Beijing", zhCity: "北京", type: "agricultural and life-science university", zhType: "农业与生命科学", strengths: ["agriculture", "food science", "animal science", "life science", "rural development"], zhStrengths: ["农业", "食品科学", "动物科学", "生命科学", "乡村发展"], english: ["Agriculture, food science and selected graduate programs subject to annual catalog"], zhEnglish: ["农业、食品科学及部分研究生英文项目，以年度目录为准"] },
  { slug: "minzu-university-of-china", name: "Minzu University of China", zhName: "中央民族大学", city: "Beijing", zhCity: "北京", type: "ethnic studies and comprehensive university", zhType: "民族学与综合", strengths: ["ethnology", "Chinese language", "arts", "social sciences", "regional studies"], zhStrengths: ["民族学", "中文", "艺术", "社会科学", "区域研究"], english: ["Selected China studies and social-science programs subject to annual catalog"], zhEnglish: ["部分中国研究和社科项目，以年度目录为准"] },
  { slug: "beijing-jiaotong-university", name: "Beijing Jiaotong University", zhName: "北京交通大学", city: "Beijing", zhCity: "北京", type: "transportation and engineering university", zhType: "交通运输与工程", strengths: ["transportation", "rail transit", "information systems", "logistics", "engineering"], zhStrengths: ["交通运输", "轨道交通", "信息系统", "物流", "工程"], english: ["Transportation engineering", "logistics", "information technology and selected graduate programs"], zhEnglish: ["交通运输工程", "物流", "信息技术及部分研究生项目"] },
  { slug: "beijing-university-of-posts-and-telecommunications", name: "Beijing University of Posts and Telecommunications", zhName: "北京邮电大学", city: "Beijing", zhCity: "北京", type: "information and telecommunications university", zhType: "信息通信", strengths: ["telecommunications", "software", "computer science", "cybersecurity", "AI"], zhStrengths: ["通信", "软件", "计算机", "网络安全", "人工智能"], english: ["Software engineering", "telecommunications engineering", "computer science and technology"], zhEnglish: ["软件工程", "通信工程", "计算机科学与技术"], tuition: "Examples include CNY 20,000/year for language study, CNY 24,600/year for undergraduate study, and higher graduate fees by field.", zhTuition: "常见示例包括语言生约 20,000 元/年、本科约 24,600 元/年，研究生按学科更高。" },
  { slug: "university-of-international-business-and-economics", name: "University of International Business and Economics", zhName: "对外经济贸易大学", city: "Beijing", zhCity: "北京", type: "finance, trade and business university", zhType: "财经商贸", strengths: ["international trade", "finance", "business", "law", "logistics"], zhStrengths: ["国际贸易", "金融", "商科", "法学", "物流"], english: ["Finance", "international business", "IMBA", "international law", "customs administration", "digital economy"], zhEnglish: ["金融学", "国际商务", "IMBA", "国际法", "海关管理", "数字经济"], applicationFee: "CNY 660 in many international program applications.", zhApplicationFee: "国际项目申请常见报名费约 660 元。" },
  { slug: "beijing-foreign-studies-university", name: "Beijing Foreign Studies University", zhName: "北京外国语大学", city: "Beijing", zhCity: "北京", type: "language and international studies university", zhType: "语言与国际研究", strengths: ["languages", "translation", "diplomacy", "Chinese studies", "international communication"], zhStrengths: ["语言", "翻译", "外交", "中国研究", "国际传播"], english: ["Chinese studies and selected language or international studies programs"], zhEnglish: ["中国研究及部分语言、国际研究项目"], tuition: "Examples include CNY 26,000/year for many undergraduate programs, CNY 30,000/year for master's programs and CNY 34,000/year for doctoral programs.", zhTuition: "常见示例：本科约 26,000 元/年，硕士约 30,000 元/年，博士约 34,000 元/年。" },
  { slug: "central-university-of-finance-and-economics", name: "Central University of Finance and Economics", zhName: "中央财经大学", city: "Beijing", zhCity: "北京", type: "finance and economics university", zhType: "财经", strengths: ["applied economics", "finance", "public finance", "investment", "law"], zhStrengths: ["应用经济", "金融", "财政", "投资", "法学"], english: ["Finance, public finance, regional economics, investment and selected graduate programs"], zhEnglish: ["金融、财政、区域经济、投资及部分英文研究生项目"], applicationFee: "CNY 600 in many application cycles.", zhApplicationFee: "申请常见报名费约 600 元。" },
  { slug: "fudan-university", name: "Fudan University", zhName: "复旦大学", city: "Shanghai", zhCity: "上海", type: "comprehensive research university", zhType: "综合研究型", strengths: ["medicine", "management", "social sciences", "humanities", "science"], zhStrengths: ["医学", "管理", "社科", "人文", "理科"], english: ["MBBS and selected medicine, management, economics and China studies programs"], zhEnglish: ["MBBS 及部分医学、管理、经济、中国研究项目"] },
  { slug: "shanghai-jiao-tong-university", name: "Shanghai Jiao Tong University", zhName: "上海交通大学", city: "Shanghai", zhCity: "上海", type: "research-intensive engineering and medical university", zhType: "研究型、工程与医学见长", strengths: ["engineering", "AI", "medicine", "business", "innovation"], zhStrengths: ["工程", "人工智能", "医学", "商科", "创新"], english: ["Engineering, AI, medicine, business and selected joint-school programs"], zhEnglish: ["工程、AI、医学、商科及部分联合学院项目"] },
  { slug: "tongji-university", name: "Tongji University", zhName: "同济大学", city: "Shanghai", zhCity: "上海", type: "engineering, architecture and design university", zhType: "工程、建筑与设计", strengths: ["civil engineering", "architecture", "urban planning", "design", "vehicle engineering"], zhStrengths: ["土木工程", "建筑", "城市规划", "设计", "车辆工程"], english: ["Architecture, urban planning, design, engineering and selected international programs"], zhEnglish: ["建筑、城市规划、设计、工程及部分国际项目"] },
  { slug: "east-china-normal-university", name: "East China Normal University", zhName: "华东师范大学", city: "Shanghai", zhCity: "上海", type: "normal and comprehensive research university", zhType: "师范与综合研究型", strengths: ["education", "psychology", "Chinese language", "data science", "humanities"], zhStrengths: ["教育", "心理", "中文", "数据科学", "人文"], english: ["Education, China studies, business and selected graduate programs"], zhEnglish: ["教育、中国研究、商科及部分研究生项目"] },
  { slug: "shanghai-university-of-finance-and-economics", name: "Shanghai University of Finance and Economics", zhName: "上海财经大学", city: "Shanghai", zhCity: "上海", type: "finance and economics university", zhType: "财经", strengths: ["finance", "economics", "accounting", "statistics", "business"], zhStrengths: ["金融", "经济", "会计", "统计", "商科"], english: ["Finance, economics, accounting, business and selected graduate programs"], zhEnglish: ["金融、经济、会计、商科及部分研究生项目"] },
  { slug: "shanghai-international-studies-university", name: "Shanghai International Studies University", zhName: "上海外国语大学", city: "Shanghai", zhCity: "上海", type: "language and international studies university", zhType: "语言与国际研究", strengths: ["languages", "translation", "international communication", "business", "Chinese language"], zhStrengths: ["语言", "翻译", "国际传播", "商科", "中文"], english: ["International relations, Chinese studies, translation and selected communication programs"], zhEnglish: ["国际关系、中国研究、翻译和部分传播项目"] },
  { slug: "east-china-university-of-science-and-technology", name: "East China University of Science and Technology", zhName: "华东理工大学", city: "Shanghai", zhCity: "上海", type: "science and engineering university", zhType: "理工", strengths: ["chemical engineering", "materials", "pharmacy", "engineering", "business"], zhStrengths: ["化工", "材料", "药学", "工程", "商科"], english: ["Chemical engineering, materials, business and selected graduate programs"], zhEnglish: ["化工、材料、商科及部分研究生项目"] },
  { slug: "shanghai-university", name: "Shanghai University", zhName: "上海大学", city: "Shanghai", zhCity: "上海", type: "comprehensive university", zhType: "综合", strengths: ["engineering", "arts", "film", "business", "Chinese language"], zhStrengths: ["工程", "艺术", "影视", "商科", "中文"], english: ["Business, engineering, arts and selected international programs"], zhEnglish: ["商科、工程、艺术及部分国际项目"] },
  { slug: "donghua-university", name: "Donghua University", zhName: "东华大学", city: "Shanghai", zhCity: "上海", type: "textile, fashion and engineering university", zhType: "纺织、服装与工程", strengths: ["fashion design", "textile science", "materials", "engineering", "business"], zhStrengths: ["服装设计", "纺织科学", "材料", "工程", "商科"], english: ["Fashion, textile engineering, materials and selected business programs"], zhEnglish: ["服装、纺织工程、材料及部分商科项目"] },
  { slug: "shanghai-university-of-traditional-chinese-medicine", name: "Shanghai University of Traditional Chinese Medicine", zhName: "上海中医药大学", city: "Shanghai", zhCity: "上海", type: "traditional Chinese medicine university", zhType: "中医药", strengths: ["traditional Chinese medicine", "acupuncture", "pharmacy", "clinical practice", "health sciences"], zhStrengths: ["中医学", "针灸", "中药", "临床实践", "健康科学"], english: ["Traditional Chinese medicine, acupuncture and selected health-science programs subject to annual catalog"], zhEnglish: ["中医学、针灸及部分健康科学项目，以年度目录为准"] },
  { slug: "nankai-university", name: "Nankai University", zhName: "南开大学", city: "Tianjin", zhCity: "天津", type: "comprehensive research university", zhType: "综合研究型", strengths: ["economics", "chemistry", "mathematics", "history", "business"], zhStrengths: ["经济", "化学", "数学", "历史", "商科"], english: ["Economics, business, chemistry and selected graduate programs"], zhEnglish: ["经济、商科、化学及部分研究生项目"] },
  { slug: "tianjin-university", name: "Tianjin University", zhName: "天津大学", city: "Tianjin", zhCity: "天津", type: "engineering research university", zhType: "工程研究型", strengths: ["chemical engineering", "architecture", "civil engineering", "management", "automation"], zhStrengths: ["化工", "建筑", "土木", "管理", "自动化"], english: ["Chemical engineering, civil engineering, architecture, management and selected graduate programs"], zhEnglish: ["化工、土木、建筑、管理及部分研究生项目"] },
  { slug: "tianjin-medical-university", name: "Tianjin Medical University", zhName: "天津医科大学", city: "Tianjin", zhCity: "天津", type: "medical university", zhType: "医学", strengths: ["clinical medicine", "MBBS", "public health", "pharmacy", "nursing"], zhStrengths: ["临床医学", "MBBS", "公共卫生", "药学", "护理"], english: ["MBBS and selected medical programs"], zhEnglish: ["MBBS 及部分医学项目"] },
  { slug: "chongqing-university", name: "Chongqing University", zhName: "重庆大学", city: "Chongqing", zhCity: "重庆", type: "comprehensive engineering research university", zhType: "综合研究型、工程见长", strengths: ["engineering", "architecture", "business", "computer science", "energy"], zhStrengths: ["工程", "建筑", "商科", "计算机", "能源"], english: ["Engineering, architecture, business and selected graduate programs"], zhEnglish: ["工程、建筑、商科及部分研究生项目"] },
  { slug: "southwest-university", name: "Southwest University", zhName: "西南大学", city: "Chongqing", zhCity: "重庆", type: "comprehensive university", zhType: "综合", strengths: ["education", "agriculture", "psychology", "Chinese language", "life sciences"], zhStrengths: ["教育", "农业", "心理", "中文", "生命科学"], english: ["Education, agriculture, psychology and selected programs"], zhEnglish: ["教育、农业、心理及部分项目"] },
  { slug: "chongqing-medical-university", name: "Chongqing Medical University", zhName: "重庆医科大学", city: "Chongqing", zhCity: "重庆", type: "medical university", zhType: "医学", strengths: ["clinical medicine", "pediatrics", "public health", "pharmacy", "MBBS"], zhStrengths: ["临床医学", "儿科", "公共卫生", "药学", "MBBS"], english: ["MBBS and selected medical programs"], zhEnglish: ["MBBS 及部分医学项目"] },
  { slug: "sichuan-university", name: "Sichuan University", zhName: "四川大学", city: "Chengdu", zhCity: "成都", type: "comprehensive research university", zhType: "综合研究型", strengths: ["medicine", "engineering", "Chinese language", "business", "humanities"], zhStrengths: ["医学", "工程", "中文", "商科", "人文"], english: ["Medicine, engineering, business and selected graduate programs"], zhEnglish: ["医学、工程、商科及部分研究生项目"] },
  { slug: "university-of-electronic-science-and-technology-of-china", name: "University of Electronic Science and Technology of China", zhName: "电子科技大学", city: "Chengdu", zhCity: "成都", type: "electronic information university", zhType: "电子信息", strengths: ["electronic engineering", "communication", "computer science", "AI", "cybersecurity"], zhStrengths: ["电子工程", "通信", "计算机", "人工智能", "网络安全"], english: ["Electronic information, computer science, communication and selected graduate programs"], zhEnglish: ["电子信息、计算机、通信及部分研究生项目"] },
  { slug: "southwest-jiaotong-university", name: "Southwest Jiaotong University", zhName: "西南交通大学", city: "Chengdu", zhCity: "成都", type: "transportation and engineering university", zhType: "交通运输与工程", strengths: ["rail transit", "civil engineering", "mechanical engineering", "logistics", "transportation"], zhStrengths: ["轨道交通", "土木工程", "机械", "物流", "交通运输"], english: ["Transportation, civil engineering, mechanical engineering and selected graduate programs"], zhEnglish: ["交通、土木、机械及部分研究生项目"] },
  { slug: "southwestern-university-of-finance-and-economics", name: "Southwestern University of Finance and Economics", zhName: "西南财经大学", city: "Chengdu", zhCity: "成都", type: "finance and economics university", zhType: "财经", strengths: ["finance", "economics", "accounting", "insurance", "business"], zhStrengths: ["金融", "经济", "会计", "保险", "商科"], english: ["Finance, economics, business and selected graduate programs"], zhEnglish: ["金融、经济、商科及部分研究生项目"] },
  { slug: "sichuan-agricultural-university", name: "Sichuan Agricultural University", zhName: "四川农业大学", city: "Chengdu", zhCity: "成都", type: "agricultural university", zhType: "农业", strengths: ["agriculture", "animal science", "forestry", "food science", "life sciences"], zhStrengths: ["农业", "动物科学", "林学", "食品科学", "生命科学"], english: ["Agriculture, food science and selected graduate programs"], zhEnglish: ["农业、食品科学及部分研究生项目"] },
  { slug: "xi-an-jiaotong-university", name: "Xi'an Jiaotong University", zhName: "西安交通大学", city: "Xi'an", zhCity: "西安", type: "comprehensive engineering research university", zhType: "综合研究型、工程见长", strengths: ["engineering", "energy", "management", "medicine", "computer science"], zhStrengths: ["工程", "能源", "管理", "医学", "计算机"], english: ["Engineering, management, medicine and selected graduate programs"], zhEnglish: ["工程、管理、医学及部分研究生项目"] },
  { slug: "northwestern-polytechnical-university", name: "Northwestern Polytechnical University", zhName: "西北工业大学", city: "Xi'an", zhCity: "西安", type: "aerospace, aviation and marine engineering university", zhType: "航空航天航海工程", strengths: ["aerospace", "aviation", "marine engineering", "materials", "AI"], zhStrengths: ["航天", "航空", "航海", "材料", "人工智能"], english: ["Aerospace engineering, marine engineering, materials and selected graduate programs"], zhEnglish: ["航空航天、航海、材料及部分研究生项目"] },
  { slug: "northwest-aandf-university", name: "Northwest A&F University", zhName: "西北农林科技大学", city: "Xi'an", zhCity: "杨凌", type: "agriculture, forestry and life-science university", zhType: "农林与生命科学", strengths: ["agriculture", "forestry", "water resources", "food science", "ecology"], zhStrengths: ["农业", "林学", "水利", "食品科学", "生态"], english: ["Agriculture, forestry, ecology and selected graduate programs"], zhEnglish: ["农业、林学、生态及部分研究生项目"] },
  { slug: "xidian-university", name: "Xidian University", zhName: "西安电子科技大学", city: "Xi'an", zhCity: "西安", type: "electronic information university", zhType: "电子信息", strengths: ["electronic engineering", "communication", "cybersecurity", "computer science", "AI"], zhStrengths: ["电子工程", "通信", "网络安全", "计算机", "人工智能"], english: ["Electronic information, communication, computer science and selected graduate programs"], zhEnglish: ["电子信息、通信、计算机及部分研究生项目"] },
  { slug: "chang-an-university", name: "Chang'an University", zhName: "长安大学", city: "Xi'an", zhCity: "西安", type: "transportation, civil engineering and geology university", zhType: "交通、土木与地质", strengths: ["highway transport", "civil engineering", "geology", "vehicle engineering", "urban planning"], zhStrengths: ["公路交通", "土木", "地质", "车辆工程", "城市规划"], english: ["Transportation, civil engineering, geology and selected graduate programs"], zhEnglish: ["交通、土木、地质及部分研究生项目"] },
  { slug: "shaanxi-normal-university", name: "Shaanxi Normal University", zhName: "陕西师范大学", city: "Xi'an", zhCity: "西安", type: "normal and humanities university", zhType: "师范与人文", strengths: ["education", "Chinese language", "history", "psychology", "teacher education"], zhStrengths: ["教育", "中文", "历史", "心理", "教师教育"], english: ["Education, Chinese studies and selected humanities programs"], zhEnglish: ["教育、中国研究及部分人文项目"] },
  { slug: "northwest-university", name: "Northwest University", zhName: "西北大学", city: "Xi'an", zhCity: "西安", type: "comprehensive university", zhType: "综合", strengths: ["archaeology", "geology", "economics", "Chinese language", "history"], zhStrengths: ["考古", "地质", "经济", "中文", "历史"], english: ["Archaeology, geology, Chinese studies and selected graduate programs"], zhEnglish: ["考古、地质、中国研究及部分研究生项目"] },
  { slug: "sun-yat-sen-university", name: "Sun Yat-sen University", zhName: "中山大学", city: "Guangzhou", zhCity: "广州", type: "comprehensive research university", zhType: "综合研究型", strengths: ["medicine", "business", "science", "humanities", "marine science"], zhStrengths: ["医学", "商科", "理科", "人文", "海洋科学"], english: ["Medicine, business, science and selected graduate programs"], zhEnglish: ["医学、商科、理科及部分研究生项目"] },
  { slug: "south-china-university-of-technology", name: "South China University of Technology", zhName: "华南理工大学", city: "Guangzhou", zhCity: "广州", type: "engineering and technology university", zhType: "工程技术", strengths: ["engineering", "architecture", "materials", "computer science", "food science"], zhStrengths: ["工程", "建筑", "材料", "计算机", "食品科学"], english: ["Engineering, architecture, computer science and selected graduate programs"], zhEnglish: ["工程、建筑、计算机及部分研究生项目"] },
  { slug: "jinan-university", name: "Jinan University", zhName: "暨南大学", city: "Guangzhou", zhCity: "广州", type: "comprehensive overseas-Chinese university", zhType: "综合、华侨教育特色", strengths: ["Chinese language", "business", "journalism", "medicine", "international communication"], zhStrengths: ["中文", "商科", "新闻传播", "医学", "国际传播"], english: ["Business, journalism, medicine and selected international programs"], zhEnglish: ["商科、新闻、医学及部分国际项目"] },
  { slug: "south-china-normal-university", name: "South China Normal University", zhName: "华南师范大学", city: "Guangzhou", zhCity: "广州", type: "normal and comprehensive university", zhType: "师范与综合", strengths: ["education", "psychology", "Chinese language", "AI education", "humanities"], zhStrengths: ["教育", "心理", "中文", "人工智能教育", "人文"], english: ["Education, psychology, Chinese studies and selected programs"], zhEnglish: ["教育、心理、中国研究及部分项目"] },
  { slug: "shenzhen-university", name: "Shenzhen University", zhName: "深圳大学", city: "Shenzhen", zhCity: "深圳", type: "young comprehensive university", zhType: "年轻综合型", strengths: ["computer science", "design", "business", "engineering", "innovation"], zhStrengths: ["计算机", "设计", "商科", "工程", "创新"], english: ["Computer science, business, design and selected international programs"], zhEnglish: ["计算机、商科、设计及部分国际项目"] },
  { slug: "southern-university-of-science-and-technology", name: "Southern University of Science and Technology", zhName: "南方科技大学", city: "Shenzhen", zhCity: "深圳", type: "science and technology research university", zhType: "理工研究型", strengths: ["science", "engineering", "AI", "materials", "biomedicine"], zhStrengths: ["理科", "工程", "人工智能", "材料", "生物医学"], english: ["Science, engineering and research-oriented graduate programs"], zhEnglish: ["理科、工程及研究型研究生项目"] },
  { slug: "guangzhou-university-of-chinese-medicine", name: "Guangzhou University of Chinese Medicine", zhName: "广州中医药大学", city: "Guangzhou", zhCity: "广州", type: "traditional Chinese medicine university", zhType: "中医药", strengths: ["traditional Chinese medicine", "acupuncture", "pharmacy", "clinical practice", "health sciences"], zhStrengths: ["中医学", "针灸", "中药", "临床实践", "健康科学"], english: ["Traditional Chinese medicine, acupuncture and selected health-science programs"], zhEnglish: ["中医学、针灸及部分健康科学项目"] },
  { slug: "hunan-university", name: "Hunan University", zhName: "湖南大学", city: "Changsha", zhCity: "长沙", type: "comprehensive research university", zhType: "综合研究型", strengths: ["engineering", "business", "design", "chemistry", "Yuelu Academy heritage"], zhStrengths: ["工程", "商科", "设计", "化学", "岳麓书院文脉"], english: ["Engineering, business, design and selected graduate programs"], zhEnglish: ["工程、商科、设计及部分研究生项目"] },
  { slug: "hunan-normal-university", name: "Hunan Normal University", zhName: "湖南师范大学", city: "Changsha", zhCity: "长沙", type: "normal and comprehensive university", zhType: "师范与综合", strengths: ["education", "Chinese language", "medicine", "life sciences", "humanities"], zhStrengths: ["教育", "中文", "医学", "生命科学", "人文"], english: ["Education, Chinese studies and selected programs"], zhEnglish: ["教育、中国研究及部分项目"] },
  { slug: "xiangtan-university", name: "Xiangtan University", zhName: "湘潭大学", city: "Changsha", zhCity: "湘潭", type: "comprehensive university", zhType: "综合", strengths: ["law", "mathematics", "materials", "Chinese language", "engineering"], zhStrengths: ["法学", "数学", "材料", "中文", "工程"], english: ["Law, engineering, Chinese studies and selected programs"], zhEnglish: ["法学、工程、中国研究及部分项目"] },
  { slug: "changsha-university-of-science-and-technology", name: "Changsha University of Science and Technology", zhName: "长沙理工大学", city: "Changsha", zhCity: "长沙", type: "engineering university", zhType: "理工", strengths: ["transportation", "civil engineering", "electric power", "engineering", "computer science"], zhStrengths: ["交通", "土木", "电力", "工程", "计算机"], english: ["Transportation, civil engineering, electric power and selected engineering programs"], zhEnglish: ["交通、土木、电力及部分工程项目"] },
  { slug: "hunan-university-of-chinese-medicine", name: "Hunan University of Chinese Medicine", zhName: "湖南中医药大学", city: "Changsha", zhCity: "长沙", type: "traditional Chinese medicine university", zhType: "中医药", strengths: ["traditional Chinese medicine", "acupuncture", "pharmacy", "clinical practice", "health sciences"], zhStrengths: ["中医学", "针灸", "中药", "临床实践", "健康科学"], english: ["Traditional Chinese medicine, acupuncture and selected health programs"], zhEnglish: ["中医学、针灸及部分健康项目"] },
  { slug: "guangxi-university", name: "Guangxi University", zhName: "广西大学", city: "Nanning", zhCity: "南宁", type: "comprehensive regional university", zhType: "区域综合型", strengths: ["engineering", "agriculture", "business", "Chinese language", "ASEAN studies"], zhStrengths: ["工程", "农业", "商科", "中文", "东盟研究"], english: ["Engineering, agriculture, business and selected ASEAN-facing programs"], zhEnglish: ["工程、农业、商科及部分面向东盟项目"] },
  { slug: "guangxi-medical-university", name: "Guangxi Medical University", zhName: "广西医科大学", city: "Nanning", zhCity: "南宁", type: "medical university", zhType: "医学", strengths: ["clinical medicine", "public health", "stomatology", "pharmacy", "MBBS"], zhStrengths: ["临床医学", "公共卫生", "口腔", "药学", "MBBS"], english: ["MBBS and selected medical programs"], zhEnglish: ["MBBS 及部分医学项目"] },
  { slug: "guilin-university-of-electronic-technology", name: "Guilin University of Electronic Technology", zhName: "桂林电子科技大学", city: "Guilin", zhCity: "桂林", type: "electronic information university", zhType: "电子信息", strengths: ["electronic engineering", "communication", "computer science", "AI", "engineering"], zhStrengths: ["电子工程", "通信", "计算机", "人工智能", "工程"], english: ["Electronic information, communication, computer science and selected programs"], zhEnglish: ["电子信息、通信、计算机及部分项目"] },
  { slug: "yunnan-university", name: "Yunnan University", zhName: "云南大学", city: "Kunming", zhCity: "昆明", type: "comprehensive regional research university", zhType: "区域综合研究型", strengths: ["ethnic studies", "ecology", "Chinese language", "regional studies", "biology"], zhStrengths: ["民族学", "生态", "中文", "区域研究", "生物"], english: ["Ecology, regional studies, Chinese studies and selected graduate programs"], zhEnglish: ["生态、区域研究、中国研究及部分研究生项目"] },
  { slug: "kunming-university-of-science-and-technology", name: "Kunming University of Science and Technology", zhName: "昆明理工大学", city: "Kunming", zhCity: "昆明", type: "engineering and applied science university", zhType: "工程与应用科学", strengths: ["metallurgy", "materials", "engineering", "environment", "computer science"], zhStrengths: ["冶金", "材料", "工程", "环境", "计算机"], english: ["Engineering, materials, environment and selected graduate programs"], zhEnglish: ["工程、材料、环境及部分研究生项目"] },
  { slug: "yunnan-normal-university", name: "Yunnan Normal University", zhName: "云南师范大学", city: "Kunming", zhCity: "昆明", type: "normal and comprehensive university", zhType: "师范与综合", strengths: ["education", "Chinese language", "tourism", "regional culture", "teacher education"], zhStrengths: ["教育", "中文", "旅游", "区域文化", "教师教育"], english: ["Education, Chinese language and selected regional-culture programs"], zhEnglish: ["教育、中文及部分区域文化项目"] },
  { slug: "taiyuan-university-of-technology", name: "Taiyuan University of Technology", zhName: "太原理工大学", city: "Taiyuan", zhCity: "太原", type: "engineering university", zhType: "理工", strengths: ["engineering", "materials", "energy", "mining", "computer science"], zhStrengths: ["工程", "材料", "能源", "矿业", "计算机"], english: ["Engineering, materials, energy and selected graduate programs"], zhEnglish: ["工程、材料、能源及部分研究生项目"] },
  { slug: "shanxi-university", name: "Shanxi University", zhName: "山西大学", city: "Taiyuan", zhCity: "太原", type: "comprehensive university", zhType: "综合", strengths: ["philosophy", "physics", "Chinese language", "history", "chemistry"], zhStrengths: ["哲学", "物理", "中文", "历史", "化学"], english: ["Chinese studies, sciences and selected graduate programs"], zhEnglish: ["中国研究、理科及部分研究生项目"] },
  { slug: "north-university-of-china", name: "North University of China", zhName: "中北大学", city: "Taiyuan", zhCity: "太原", type: "engineering university", zhType: "理工", strengths: ["instrumentation", "mechanical engineering", "materials", "information engineering", "safety engineering"], zhStrengths: ["仪器科学", "机械", "材料", "信息工程", "安全工程"], english: ["Mechanical engineering, materials, information engineering and selected programs"], zhEnglish: ["机械、材料、信息工程及部分项目"] }
];

const guides = Object.fromEntries(seeds.map((seed) => [seed.slug, makeGuide(seed)])) as Record<string, UniversityAdmissionsGuide>;

export function getUniversityAdmissionsGuide(slug: string) {
  return guides[slug];
}
