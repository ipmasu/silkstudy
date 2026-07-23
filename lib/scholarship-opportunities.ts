export type ScholarshipOpportunity = {
  id: string;
  school: string;
  zhSchool: string;
  city: string;
  zhCity: string;
  degree: string;
  zhDegree: string;
  route: string;
  zhRoute: string;
  fit: string;
  zhFit: string;
  costAngle: string;
  zhCostAngle: string;
  urgency: string;
  zhUrgency: string;
  tags: string[];
  zhTags: string[];
};

export const scholarshipOpportunities: ScholarshipOpportunity[] = [
  {
    id: "hunan-university-of-technology-first-year",
    school: "Hunan University of Technology",
    zhSchool: "湖南工业大学",
    city: "Zhuzhou / Changsha cluster",
    zhCity: "株洲 / 长沙城市圈",
    degree: "Bachelor / Chinese language",
    zhDegree: "本科 / 汉语项目",
    route: "Freshman scholarship and merit-renewal route",
    zhRoute: "新生奖学金 + 后续表现续评路径",
    fit: "Students who need a realistic low-cost first year and are open to a strong regional city.",
    zhFit: "适合希望第一年成本尽量低、愿意考虑区域强校和低成本城市的学生。",
    costAngle: "Low living cost plus school-level support can reduce pressure faster than only chasing famous-city options.",
    zhCostAngle: "低生活成本叠加校级资助，往往比只追一线城市名校更容易降低总成本。",
    urgency: "Verify annual quota, renewal rule, and whether the target major is included.",
    zhUrgency: "需核验当年名额、续评规则，以及目标专业是否覆盖。",
    tags: ["Low cost", "University scholarship", "Bachelor-friendly"],
    zhTags: ["低成本", "校级奖学金", "本科友好"]
  },
  {
    id: "nuaa-multi-route",
    school: "Nanjing University of Aeronautics and Astronautics",
    zhSchool: "南京航空航天大学",
    city: "Nanjing",
    zhCity: "南京",
    degree: "Bachelor / Master / PhD",
    zhDegree: "本科 / 硕士 / 博士",
    route: "CSC, Jiangsu, Nanjing, NUAA Fly-High, and academic awards",
    zhRoute: "CSC、江苏省、南京市、NUAA Fly-High 与校内学业奖学金",
    fit: "Engineering, aerospace, computer science, AI, and strong STEM applicants.",
    zhFit: "适合工程、航空航天、计算机、人工智能等理工方向学生。",
    costAngle: "Multiple routes mean students should not stop after checking only CSC.",
    zhCostAngle: "奖学金层级较多，学生不应只看 CSC 一个通道。",
    urgency: "Compare application windows and whether CSCA or interview rules apply this year.",
    zhUrgency: "需比较各通道截止时间，并核验当年 CSCA 或面试要求。",
    tags: ["Engineering", "Multiple routes", "Nanjing"],
    zhTags: ["工程强校", "多通道", "南京"]
  },
  {
    id: "hohai-nanjing-municipal",
    school: "Hohai University",
    zhSchool: "河海大学",
    city: "Nanjing",
    zhCity: "南京",
    degree: "Bachelor / Master",
    zhDegree: "本科 / 硕士",
    route: "Nanjing municipal and university scholarship verification",
    zhRoute: "南京市政府奖学金与校级奖学金核验路径",
    fit: "Water resources, environment, civil engineering, management, and sustainability applicants.",
    zhFit: "适合水利、环境、土木、管理和可持续发展方向学生。",
    costAngle: "A specialized university can be more efficient than broad-name competition.",
    zhCostAngle: "专业特色强的学校，可能比单纯追综合名校更适合拿到实际机会。",
    urgency: "Check whether the current intake lists interview, application fee, and award conditions.",
    zhUrgency: "需核验当年是否列明面试、申请费和奖学金条件。",
    tags: ["Specialized university", "Municipal award", "Sustainability"],
    zhTags: ["特色强校", "市级奖学金", "可持续方向"]
  },
  {
    id: "east-china-law-shanghai",
    school: "ECUPL / Shanghai University of Political Science and Law",
    zhSchool: "华东政法大学 / 上海政法学院",
    city: "Shanghai",
    zhCity: "上海",
    degree: "Bachelor / Master",
    zhDegree: "本科 / 硕士",
    route: "Shanghai Government Scholarship and university-level verification",
    zhRoute: "上海市政府奖学金与校级奖学金核验",
    fit: "Law, international law, public administration, compliance, and governance applicants.",
    zhFit: "适合法学、国际法、公共管理、合规和治理方向学生。",
    costAngle: "Shanghai is costly, so scholarship coverage and housing rules must be checked early.",
    zhCostAngle: "上海生活成本较高，奖学金覆盖和住宿政策必须提前核验。",
    urgency: "Verify exact coverage because Shanghai awards may differ by school and degree.",
    zhUrgency: "需核验具体覆盖金额，因为上海奖学金会因学校和层次不同而变化。",
    tags: ["Law", "Shanghai", "Government scholarship"],
    zhTags: ["法学", "上海", "政府奖学金"]
  },
  {
    id: "guangxi-asean-window",
    school: "Guangxi universities",
    zhSchool: "广西高校方向",
    city: "Nanning / Guilin",
    zhCity: "南宁 / 桂林",
    degree: "Bachelor / Language / Master",
    zhDegree: "本科 / 汉语 / 硕士",
    route: "ASEAN-facing provincial, municipal, and university routes",
    zhRoute: "面向东盟学生的省市级与校级奖学金方向",
    fit: "Vietnamese, Thai, Indonesian, Malaysian, Cambodian, Lao, and other ASEAN students.",
    zhFit: "适合越南、泰国、印尼、马来西亚、柬埔寨、老挝等东盟学生。",
    costAngle: "Regional fit, language environment, and lower living cost can create a strong value path.",
    zhCostAngle: "区域优势、语言环境和较低生活成本，适合做高性价比路线。",
    urgency: "Check nationality preference, degree level, and whether the school still accepts applications.",
    zhUrgency: "需核验国别倾向、学历层次和学校是否仍在受理申请。",
    tags: ["ASEAN", "Low cost", "Chinese language"],
    zhTags: ["东盟", "低成本", "中文学习"]
  },
  {
    id: "yunnan-south-asia-southeast-asia",
    school: "Yunnan universities",
    zhSchool: "云南高校方向",
    city: "Kunming",
    zhCity: "昆明",
    degree: "Bachelor / Master / Language",
    zhDegree: "本科 / 硕士 / 汉语",
    route: "Yunnan provincial and university scholarship routes",
    zhRoute: "云南省级与校级奖学金方向",
    fit: "Students from South Asia, Southeast Asia, and applicants who value climate and lower living cost.",
    zhFit: "适合南亚、东南亚学生，以及重视气候和生活成本的申请人。",
    costAngle: "Kunming combines a gentle climate, lower pressure, and practical university routes.",
    zhCostAngle: "昆明气候友好、生活压力较低，适合做稳妥型留学方案。",
    urgency: "Verify current intake notices and whether language or foundation routes are funded.",
    zhUrgency: "需核验当年招生简章，以及汉语/预科路径是否有资助。",
    tags: ["Kunming", "Regional scholarships", "Comfortable city"],
    zhTags: ["昆明", "区域奖学金", "舒适城市"]
  },
  {
    id: "central-south-changsha",
    school: "Central South University and Changsha cluster",
    zhSchool: "中南大学与长沙高校群",
    city: "Changsha",
    zhCity: "长沙",
    degree: "Bachelor / Master / PhD",
    zhDegree: "本科 / 硕士 / 博士",
    route: "CSC, provincial, and university scholarship verification",
    zhRoute: "CSC、省级与校级奖学金核验",
    fit: "Medicine, engineering, materials, transportation, business, and Chinese culture-oriented applicants.",
    zhFit: "适合医学、工程、材料、交通、商科和喜欢中国文化生活的学生。",
    costAngle: "Changsha's lower cost and strong student life can make partial awards more useful.",
    zhCostAngle: "长沙生活成本较低，即使是部分奖学金，也可能明显降低总预算。",
    urgency: "Verify program language, hospital/clinical rules, and annual scholarship windows.",
    zhUrgency: "需核验授课语言、医学临床要求和年度奖学金窗口。",
    tags: ["Changsha", "Student life", "STEM"],
    zhTags: ["长沙", "学生生活", "理工医学"]
  },
  {
    id: "chinese-language-teacher-scholarship",
    school: "Chinese language and teacher-training routes",
    zhSchool: "国际中文教育与汉语项目方向",
    city: "Multiple cities",
    zhCity: "多个城市",
    degree: "Language / Bachelor / Master",
    zhDegree: "汉语 / 本科 / 硕士",
    route: "International Chinese Language Teachers Scholarship and related routes",
    zhRoute: "国际中文教师奖学金及相关中文学习路径",
    fit: "Students who already learned Chinese or want Chinese to become their career advantage.",
    zhFit: "适合已经学过中文，或希望把中文变成职业优势的学生。",
    costAngle: "Language-first routes can open lower-cost pathways before degree study.",
    zhCostAngle: "先走中文路径，有时能为后续学历申请打开更低成本入口。",
    urgency: "Verify recommender institution, HSK level, age, and program duration.",
    zhUrgency: "需核验推荐机构、HSK 等级、年龄和项目时长要求。",
    tags: ["Chinese language", "Special scholarship", "Career path"],
    zhTags: ["中文", "专项奖学金", "职业路径"]
  }
];
