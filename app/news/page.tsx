import { ArrowRight, BookOpen, Globe2, GraduationCap, Newspaper, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();

  return buildMetadata({
    ...({
  title: "Education News",
  description: "China and global education news for international students: study in China, scholarships, admissions, policy updates, Chinese learning, and student stories.",
  path: "/news"
}),
    locale
  });
}

type Article = {
  category: string;
  title: string;
  summary: string;
  date: string;
  href: string;
  source?: string;
};

const zhArticles: Article[] = [
  {
    category: "头条",
    title: "历史性突破！中国数学家王虹、邓煜双双斩获2026年菲尔兹奖",
    summary: "中国籍数学家首次摘得菲尔兹奖，两位北大数学校友同时站上世界数学之巅。这不仅是个人荣誉，也是中国基础学科教育长期积累的高光时刻。",
    date: "2026-07-24",
    href: "/news/chinese-mathematicians-fields-medal-2026"
  },
  {
    category: "中国教育开放",
    title: "中国继续扩大高水平教育对外开放，鼓励高水平理工类中外合作",
    summary: "从近期教育规划信号看，中国将继续建设具有全球影响力的教育品牌，欢迎高水平外国理工类大学在华开展合作办学，并加强与欧洲、北美、周边国家、一带一路和全球南方伙伴的教育合作。",
    date: "2026-07-06",
    href: "https://www.chinadaily.com.cn/a/202607/06/WS6a4afd37a310986e2b463a36.html",
    source: "China Daily"
  },
  {
    category: "中国-东盟",
    title: "2026中国-东盟教育交流周在贵阳开幕，区域教育合作继续升温",
    summary: "本届交流周在开幕期间设置35项活动，全年还将举办60项常态化主题活动。对东盟学生来说，中国西南地区正在成为教育交流、职业教育和产业人才合作的重要入口。",
    date: "2026-07-29",
    href: "https://www.eguizhou.gov.cn/2026-07/29/c_1201151.htm",
    source: "eGuizhou"
  },
  {
    category: "跨境教育",
    title: "中国释放跨境教育政策延续信号，强调高质量国际合作",
    summary: "英国文化教育协会观察指出，中国在6月继续释放跨境教育政策稳定和延续的信号。对国际学生和合作机构而言，这意味着中国仍把高质量国际教育合作作为长期方向。",
    date: "2026-06-11",
    href: "https://opportunities-insight.britishcouncil.org/short-articles/news/china-reaffirms-policy-continuity-transnational-education",
    source: "British Council"
  },
  {
    category: "全球留学",
    title: "美国学生签证政策收紧：国际学生最长停留期限将被限制为4年",
    summary: "美国国土安全部宣布新规，将改变长期以来按学习身份持续停留的做法。对全球学生来说，签证确定性正在成为选择留学目的地时越来越重要的因素。",
    date: "2026-07-16",
    href: "https://apnews.com/article/trump-student-visa-international-02a22ed8b883096b78c3745fce7892a3",
    source: "AP News"
  },
  {
    category: "全球留学",
    title: "NAFSA预测：美国2026秋季或减少11.1万名国际学生",
    summary: "NAFSA与JB International的研究预计，美国国际学生减少可能带来34亿美元经济损失和近4万个就业岗位影响。全球学生流向正在出现新的再平衡机会。",
    date: "2026-08-11",
    href: "https://www.nafsa.org/fall2026outlook",
    source: "NAFSA"
  },
  {
    category: "国际合作",
    title: "美国国防部要求30所大学审查与外国高校合作，学术合作不确定性上升",
    summary: "AP报道称，美国国防部要求30所大学审查与外国机构的合作关系，重点涉及中国等国家。这提醒学生和高校：国际科研与教育合作正在更深地受到政策环境影响。",
    date: "2026-08-18",
    href: "https://apnews.com/article/pentagon-audit-china-harvard-mit-738832f9f20186dc5f9ef1aa39914636",
    source: "AP News"
  },
  {
    category: "中国留学",
    title: "为什么越来越多国际学生重新关注中国大学？",
    summary: "奖学金、中文学习、产业机会和城市体验正在共同改变学生对中国留学的判断。",
    date: "编辑专题",
    href: "/why-china"
  },
  {
    category: "奖学金动态",
    title: "来中国留学，哪些奖学金路线最值得先评估？",
    summary: "国家、省市、学校和专项项目并不是孤立选择，真正的关键是把学生背景与学校机会匹配起来。",
    date: "持续更新",
    href: "/scholarships"
  },
  {
    category: "城市与生活",
    title: "选择留学城市，不只是选择一所大学。",
    summary: "生活成本、气候、美食、实习机会和城市性格，会直接影响国际学生在中国的幸福感。",
    date: "城市观察",
    href: "/cities"
  }
];

const enArticles: Article[] = [
  {
    category: "Top Story",
    title: "Historic breakthrough: Chinese mathematicians win the 2026 Fields Medal",
    summary: "Hong Wang and Yu Deng became the first Chinese nationals to receive the Fields Medal, marking a major moment for China's mathematics education and research ecosystem.",
    date: "2026-07-24",
    href: "/news/chinese-mathematicians-fields-medal-2026"
  },
  {
    category: "China Education",
    title: "China signals continued high-level education opening and international cooperation",
    summary: "Recent policy signals point to globally recognized Chinese education brands, more high-quality foreign science and engineering cooperation in China, and stronger links with Europe, North America, neighboring countries, BRI partners, and the Global South.",
    date: "2026-07-06",
    href: "https://www.chinadaily.com.cn/a/202607/06/WS6a4afd37a310986e2b463a36.html",
    source: "China Daily"
  },
  {
    category: "China-ASEAN",
    title: "2026 China-ASEAN Education Cooperation Week opens in Guiyang",
    summary: "The event launched with 35 opening-period activities and 60 year-round thematic activities, showing how Southwest China is becoming a major education, TVET, and talent cooperation gateway for ASEAN students.",
    date: "2026-07-29",
    href: "https://www.eguizhou.gov.cn/2026-07/29/c_1201151.htm",
    source: "eGuizhou"
  },
  {
    category: "Transnational Education",
    title: "China reaffirms policy continuity on transnational education",
    summary: "The British Council observed that China continued to signal stability and continuity for high-quality transnational education cooperation in June, an important signal for institutions and mobile students.",
    date: "2026-06-11",
    href: "https://opportunities-insight.britishcouncil.org/short-articles/news/china-reaffirms-policy-continuity-transnational-education",
    source: "British Council"
  },
  {
    category: "Global Mobility",
    title: "U.S. student visa rule adds four-year stay cap for international students",
    summary: "The U.S. Department of Homeland Security finalized a rule limiting international student stays to four years unless students obtain further approval, making visa certainty a bigger factor in study-destination decisions.",
    date: "2026-07-16",
    href: "https://apnews.com/article/trump-student-visa-international-02a22ed8b883096b78c3745fce7892a3",
    source: "AP News"
  },
  {
    category: "Global Mobility",
    title: "NAFSA projects 111,000 fewer international students in the U.S. this fall",
    summary: "NAFSA and JB International projected that international student declines could cost the U.S. economy $3.4 billion and nearly 40,000 jobs, suggesting a global rebalance in student flows.",
    date: "2026-08-11",
    href: "https://www.nafsa.org/fall2026outlook",
    source: "NAFSA"
  },
  {
    category: "Academic Cooperation",
    title: "Pentagon orders 30 U.S. universities to audit foreign academic partnerships",
    summary: "AP reported that the U.S. Department of Defense ordered 30 universities to review foreign partnerships, especially involving Chinese institutions. For students, policy risk is becoming part of the study-abroad calculation.",
    date: "2026-08-18",
    href: "https://apnews.com/article/pentagon-audit-china-harvard-mit-738832f9f20186dc5f9ef1aa39914636",
    source: "AP News"
  },
  {
    category: "Study in China",
    title: "Why international students are looking at Chinese universities again",
    summary: "Scholarships, Chinese language, industry opportunities, and city life are reshaping how students evaluate China.",
    date: "Editorial",
    href: "/why-china"
  },
  {
    category: "Scholarships",
    title: "Which China scholarship routes should students assess first?",
    summary: "National, provincial, university, and special scholarships work best when matched to a student's real profile.",
    date: "Updated",
    href: "/scholarships"
  },
  {
    category: "Cities",
    title: "Choosing a study city is not only choosing a university",
    summary: "Cost, climate, food, internships, and city character shape the daily happiness of international students in China.",
    date: "City Watch",
    href: "/cities"
  }
];

const zhChinaTechEducationArticles: Article[] = [
  {
    category: "AI教育",
    title: "五部门印发《“人工智能+教育”行动计划》，推动人工智能融入全学段教育",
    summary: "教育部等五部门对人工智能人才培养、应用创新、基础环境和生态建设作出一体部署，明确高等教育、职业教育、终身教育都要面向智能时代重构能力培养。",
    date: "2026-04-10",
    href: "https://www.moe.gov.cn/srcsite/A16/s3342/202604/t20260410_1433240.html",
    source: "教育部"
  },
  {
    category: "AI教育",
    title: "教育部介绍《“人工智能+教育”行动计划》，强调人才培养与素养提升",
    summary: "新闻发布会回应人工智能如何进入课程、教师培训、学校治理与科研场景，对国际学生理解中国教育数字化方向具有参考价值。",
    date: "2026-04-10",
    href: "https://www.moe.gov.cn/fbh/live/2026/77927/",
    source: "教育部"
  },
  {
    category: "AI教育",
    title: "“人工智能+教育”，“加”什么、如何“加”",
    summary: "教育部文章解释基础教育、高等教育、职业教育和终身教育中 AI 的不同角色，尤其提到高校公共基础课、交叉课程和新专业设置。",
    date: "2026-04-13",
    href: "https://www.moe.gov.cn/jyb_xwfb/s5147/202604/t20260413_1433411.html",
    source: "教育部"
  },
  {
    category: "AI教育",
    title: "2026世界数字教育大会聚焦“人工智能+教育：变革发展治理”",
    summary: "大会在杭州举行，围绕智能技术促进教育公平、质量提升与治理共识展开全球对话，体现中国数字教育国际合作的开放姿态。",
    date: "2026-05-11",
    href: "https://www.moe.gov.cn/jyb_xwfb/xw_zt/moe_357/2026/2026_zt05/",
    source: "教育部"
  },
  {
    category: "AI教育",
    title: "AI时代高校人才培养如何应变",
    summary: "教育部专题关注高校从知识传授转向能力塑造、创造性实践和学科交叉，为想读 AI、数据、工程方向的学生提供趋势判断。",
    date: "2026-05-13",
    href: "https://www.moe.gov.cn/jyb_xwfb/xw_zt/moe_357/2026/2026_zt05/mtbd/202605/t20260513_1436364.html",
    source: "教育部"
  },
  {
    category: "AI教育",
    title: "教育部部署国家教育数字化战略行动2026年工作",
    summary: "会议提出推进“AI for学校教育”“AI for终身教育”“AI for科技创新”，把教育、产业和社会学习连接起来。",
    date: "2026-03-31",
    href: "https://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/moe_1485/202603/t20260331_1432621.html",
    source: "教育部"
  },
  {
    category: "AI教育",
    title: "教育部这场部署会，“人工智能”贯穿全场",
    summary: "报道提到数字学习空间、教师 AI 培训、智能体教学伙伴和“双千”计划微专业，说明中国正在把 AI 能力建设落实到教育系统运行层面。",
    date: "2026-04-02",
    href: "https://hudong.moe.gov.cn/jyb_xwfb/s5147/202604/t20260402_1432730.html",
    source: "教育部"
  },
  {
    category: "AI教育",
    title: "人工智能进课堂，如何学得更好",
    summary: "文章强调 AI 教育要坚持育人为本、素养为先，提醒学生既要拥抱技术，也要形成正确认识和合理应用能力。",
    date: "2026-08-23",
    href: "https://jl.people.com.cn/n2/2026/0823/c349771-41675203.html",
    source: "人民网"
  },
  {
    category: "AI教育",
    title: "中国AI主题夏令营受青睐，青少年科技学习热度上升",
    summary: "新华网报道人工智能、机器人、量子计算相关课程受到家庭关注，显示 AI 正成为中国青少年教育和国际学生观察中国科技教育的重要窗口。",
    date: "2026-07-29",
    href: "https://www.xinhuanet.com/liangzi/20260729/eee1a8a1ca494cde800215baa1537e9b/c.html",
    source: "新华网"
  },
  {
    category: "AI教育",
    title: "人工智能赋能职教提质，上海探索培养“数智工匠”",
    summary: "上海中职教育把 AI 嵌入课程、实训与评价机制，体现职业教育面向产业变化快速调整的能力。",
    date: "2026-07-10",
    href: "https://edu.sh.gov.cn/zyjy_zjzc/20260710/028a44c3c4ff432cafe2ff1338ae53f9.html",
    source: "上海市教委"
  },
  {
    category: "AI教育",
    title: "中国自动化与人工智能教育大会探讨跨越产教“时间差”",
    summary: "经济参考报关注高校育人与产业实践如何协同，提醒学生未来竞争力来自真实问题、真实产业和跨学科能力。",
    date: "2026-08-17",
    href: "https://jjckb.xinhuanet.com/20260817/a6c61d0970b9490c8e5604b4fd512ae3/c.html",
    source: "经济参考报"
  },
  {
    category: "AI教育",
    title: "金华职业技术大学：构建“AI+职教”生态，推动中国职业教育标准出海",
    summary: "学校把 AI 深度融入实习实训，探索职业教育人才培养模式创新，也展示中国职教标准服务国际合作的可能性。",
    date: "2026-04-10",
    href: "https://app.xinhuanet.com/news/article.html?articleId=20260410806d2432f0704942a036341bc962a412",
    source: "新华网"
  },
  {
    category: "AI教育",
    title: "中国科学技术大学全国首设商业人工智能本科专业",
    summary: "新华网报道中国科大打造教育科技人才一体化发展示范区，商业人工智能专业体现 AI 与商业、数据、管理的融合趋势。",
    date: "2026-06-17",
    href: "https://app.xinhuanet.com/news/article.html?articleId=20260617bf77f575a9ac4e7298639155f24ae02b",
    source: "新华网"
  },
  {
    category: "AI教育",
    title: "东南大学扩招600人，推出“AI+工程创新班”",
    summary: "学校面向智能机器人、新型能源、脑机接口、具身智能等方向设计培养方案，对希望读工程和 AI 的学生很有启发。",
    date: "2026-06-29",
    href: "https://app.xinhuanet.com/news/article.html?articleId=20260629aa2531a0a27a4477a1ac225b5b6e1d8d",
    source: "新华网"
  },
  {
    category: "AI教育",
    title: "武汉理工大学新增人工智能学院、新能源与电气工程学院等7个学院",
    summary: "学校围绕材料、交通、汽车、通信、微电子、AI、机器人等方向调整学院与专业布局，反映中国高校服务国家急需的速度。",
    date: "2026-06-25",
    href: "https://www.xinhuanet.com/edu/20260625/fb56ac200608457cbce7ea6cbe1a6774/c.html",
    source: "新华网"
  },
  {
    category: "AI教育",
    title: "北京理工大学介绍智能班与校企协同育人模式",
    summary: "新华网高考情报局报道北理工人工智能学院、领军班和大型企业协同育人机制，凸显高水平工程教育与产业场景结合。",
    date: "2026-06-22",
    href: "https://app.xinhuanet.com/news/article.html?articleId=20260622f0f2687161984ff7b88243af997a9740",
    source: "新华网"
  },
  {
    category: "新能源教育",
    title: "《职业教育专业目录》增补27个新专业，服务新能源等重点产业",
    summary: "教育部组织完成2026年职教专业目录增补，新增专业面向经济社会高质量发展和产业人才短板，适合关注应用型教育的学生阅读。",
    date: "2026-07-16",
    href: "https://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/s5987/202607/t20260715_1443823.html",
    source: "教育部"
  },
  {
    category: "新能源教育",
    title: "教育部解读2026年职业教育专业目录增补",
    summary: "职业教育与成人教育司负责人说明专业目录如何对接新产业、新业态、新职业，新能源等领域成为技能人才培养重点。",
    date: "2026-07-16",
    href: "https://www.moe.gov.cn/jyb_xwfb/s271/202607/t20260715_1443829.html",
    source: "教育部"
  },
  {
    category: "新能源教育",
    title: "教育部同意设置安徽应用技术职业大学，首批含机器人与新能源汽车专业",
    summary: "教育部批复显示，机械设计制造及自动化、机器人技术、新能源汽车工程技术、电子商务等职业本科专业成为新校布局重点。",
    date: "2026-06-16",
    href: "https://www.moe.gov.cn/srcsite/A03/s181/202606/t20260616_1440884.html",
    source: "教育部"
  },
  {
    category: "新能源教育",
    title: "教育部同意设置日照职业技术大学，首批含新能源与智能控制方向",
    summary: "学校首批设置现代水产养殖技术、生态环境工程技术、智能控制技术、新能源汽车工程技术等专业，体现绿色产业与智能制造并进。",
    date: "2026-03-19",
    href: "https://www.moe.gov.cn/srcsite/A03/s181/202603/t20260319_1431469.html",
    source: "教育部"
  },
  {
    category: "新能源教育",
    title: "教育部鼓励继续教育增设先进制造、人工智能、能源、绿色低碳等专业",
    summary: "2026年度高等学历继续教育专业和校外教学点设置通知，鼓励高校服务新产业和民生紧缺领域，提供终身学习通道。",
    date: "2026-04-29",
    href: "https://www.moe.gov.cn/srcsite/A07/moe_743/202604/t20260429_1435190.html",
    source: "教育部"
  },
  {
    category: "新能源教育",
    title: "2026年本科专业目录新增能源科学与工程、交通能源融合工程等方向",
    summary: "教育部门推进专业设置调整，精准对接国家战略、现代产业和未来产业，能源、绿色低碳、农业机器人、商业人工智能等方向进入新目录。",
    date: "2026-04-28",
    href: "https://edu.sh.gov.cn/mbjy_xwzx/20260509/32f7fa0b95d5466682c0d5639d0acf8a.html",
    source: "上海市教委"
  },
  {
    category: "新能源教育",
    title: "高考扩招遇上就业变局，人才培养如何精准匹配产业需求",
    summary: "国家发改委文章提到西安交大、兰州大学、北京科技大学等高校把新增计划投向具身智能、能源、储能、电气、AI等国家急需领域。",
    date: "2026-06-18",
    href: "https://www.ndrc.gov.cn/wsdwhfz/202606/t20260618_1405988.html",
    source: "国家发改委"
  },
  {
    category: "新能源教育",
    title: "人民网关注2026高考招录背后的人才自主培养新图景",
    summary: "报道梳理高校扩招、新工科、新材料、人工智能、集成电路等重点领域，说明中国本科教育正在更紧密服务产业升级。",
    date: "2026-06-09",
    href: "https://edu.people.com.cn/BIG5/n1/2026/0609/c1006-40736427.html",
    source: "人民网"
  },
  {
    category: "新能源教育",
    title: "世界新能源汽车大会泰国专场举办人才培养国际合作高峰论坛",
    summary: "会议以“国际合作与技能全球化”为主题，搭建新能源汽车产业技术交流与产教对接平台，对东盟学生尤其有吸引力。",
    date: "2026-04-05",
    href: "https://world.people.com.cn/n1/2026/0405/c1002-40695570.html",
    source: "人民网"
  },
  {
    category: "新能源教育",
    title: "“AI+电力”双向赋能锻造能源强国建设新引擎",
    summary: "新华网报道算力、电力、绿电和智能调度的协同趋势，提示能源、AI、电气工程学生未来会面对更加交叉的产业场景。",
    date: "2026-08-03",
    href: "https://www.xinhuanet.com/energy/20260803/824c3bd8bab34f03a3a932debc21f7fd/c.html",
    source: "新华网"
  },
  {
    category: "新能源教育",
    title: "人民日报：人工智能赋能教育创新，推动高等教育高质量发展",
    summary: "文章提到高校围绕“双碳”目标、能源安全和 AI 升级学科布局，推动人才链、创新链、产业链有机衔接。",
    date: "2026-02-10",
    href: "https://paper.people.com.cn/rmrb/pc/content/202602/10/content_30139878.html",
    source: "人民日报"
  },
  {
    category: "新能源教育",
    title: "职业教育示范改革聚焦新能源汽车、机器人等高技能人才",
    summary: "教育部专题介绍高技能人才集群培养计划，先期选择新能源汽车、高档数控机床和机器人等制造强国重点领域。",
    date: "2026-01-22",
    href: "https://www.moe.gov.cn/jyb_xwfb/xw_zt/moe_357/2026/2026_zt02/qgsdjyxw/08/202601/t20260122_1427242.html",
    source: "教育部"
  },
  {
    category: "新能源教育",
    title: "职业院校探路特色产业学院建设，服务人工智能、新能源与现代电商",
    summary: "人民日报关注职业院校与龙头企业共建产业学院，探索工业机器人、新能源汽车售后检测、现代电商等方向的人才培养。",
    date: "2026-01-19",
    href: "https://paper.people.com.cn/mszk/pc/content/202601/19/content_30136013.html",
    source: "人民日报"
  },
  {
    category: "电商教育",
    title: "中印尼“AI+跨境电商”人才培养项目启动",
    summary: "来自中印尼30余所职业院校和40余家电商及产业链企业参与，体现中国职教与东南亚数字经济人才培养的结合。",
    date: "2026-05-27",
    href: "https://world.people.com.cn/n1/2026/0527/c1002-40728768.html",
    source: "人民网"
  },
  {
    category: "电商教育",
    title: "教育部同意设置江西外语外贸职业大学，首批含跨境电子商务专业",
    summary: "学校首批设置跨境电子商务、国际经济与贸易、应用英语、供应链管理等职业本科专业，直接服务外贸与数字商务人才需求。",
    date: "2026-06-16",
    href: "https://www.moe.gov.cn/srcsite/A03/s181/202606/t20260616_1440876.html",
    source: "教育部"
  },
  {
    category: "电商教育",
    title: "广西承办丝路电商赋能行动，打造东盟跨境电商人才培养高地",
    summary: "活动发布广西直播电商人才培育倡议、中国—东盟语料库平台和面向东盟的电商赛事计划，适合东盟学生关注。",
    date: "2026-04-10",
    href: "https://gx.people.com.cn/n2/2026/0410/c179462-41548744.html",
    source: "人民网"
  },
  {
    category: "电商教育",
    title: "商务部等6部门发文推进电子商务高质量发展，强调人才精准培养",
    summary: "文件提出更好服务实体经济、指导合规出海、培育本土化人才和加强支撑保障，为跨境电商与数字商务教育提供政策背景。",
    date: "2026-04",
    href: "https://www.mofcom.gov.cn/zcfb/zhzc/art/2026/art_7e1dc12697b744fd89e6110673ac117c.html",
    source: "商务部"
  },
  {
    category: "电商教育",
    title: "商务部解读推进电子商务高质量发展指导意见",
    summary: "解读提到加强人才精准培养、激活数据要素价值和金融支持，说明电商不只是销售岗位，也需要数据、合规、运营和国际化人才。",
    date: "2026-04",
    href: "https://www.mofcom.gov.cn/syxwfb/art/2026/art_83a6e003125e43228b8f744803e8edb7.html",
    source: "商务部"
  },
  {
    category: "电商教育",
    title: "人工智能全面赋能电商大促，AI正在重构购物入口",
    summary: "新华网报道 AI 导购、智能投流、库存预判、文案生成等应用，让电商相关专业从运营走向算法、数据和供应链协同。",
    date: "2026-06-18",
    href: "https://www.xinhuanet.com/tech/20260618/460c1fbecddb418691b192cc06a84aef/c.html",
    source: "新华网"
  },
  {
    category: "电商教育",
    title: "中央财经大学以“电商+多语种+跨境直播”助力农产品出海",
    summary: "教育部典型项目展示高校如何培养多语种跨境直播人才，把财经、语言、数字营销和乡村振兴连接起来。",
    date: "2026-04-16",
    href: "https://www.moe.gov.cn/jyb_xwfb/xw_zt/moe_357/jjyzt_2022/2022_zt04/dianxing/xiangmu/gaoxiao/zhishu9th_1/202604/t20260416_1433933.html",
    source: "教育部"
  },
  {
    category: "电商教育",
    title: "新华网记者手记：中马人才培养合作覆盖电子商务、物流与网络安全",
    summary: "中马合作项目强调课堂学习与实践训练结合，并配套就业安置计划，显示中国职业教育和数字产业培训的国际外溢效应。",
    date: "2026-04-28",
    href: "https://www.xinhuanet.com/20260428/8d4697243d6a4007a025d6c1ea60ab8b/c.html",
    source: "新华网"
  },
  {
    category: "电商教育",
    title: "北京第二外国语学院数字文旅专业获批，培养“文旅+语言+科技”桥梁人才",
    summary: "在 China Travel 热度上升背景下，数字文旅把语言、跨文化传播、科技体验和数字运营结合起来，与电商和国际传播高度相关。",
    date: "2026-06-23",
    href: "https://app.xinhuanet.com/news/article.html?articleId=2026062394c4d95b258d4603973671773d066bcd",
    source: "新华网"
  },
  {
    category: "电商教育",
    title: "新职业潮涌：数字营销等微专业缩短青年从校园到岗位的距离",
    summary: "人民网理论文章指出高校和职业院校要动态调整专业设置，让企业深度参与人才培养，数字营销、电商运营等新职业正在成为年轻人的新路径。",
    date: "2026-03-26",
    href: "https://theory.people.com.cn/n1/2026/0326/c40531-40689158.html",
    source: "人民网"
  }
];

const enChinaTechEducationArticles: Article[] = zhChinaTechEducationArticles.map((article) => ({
  ...article,
  category:
    article.category === "AI教育"
      ? "AI Education"
      : article.category === "新能源教育"
        ? "New Energy Talent"
        : "E-commerce Talent",
  title: article.title,
  summary: article.summary
}));

const zhCategories = [
  ["AI教育", "人工智能进入高校、职业教育、教师发展和青少年科技学习。"],
  ["新能源教育", "新能源汽车、绿色低碳、能源电力和智能制造相关人才培养。"],
  ["电商教育", "跨境电商、数字营销、直播电商和国际商务人才培养。"],
  ["中国留学", "政策、趋势、招生变化和国际学生真实需求。"],
  ["奖学金动态", "国家、省市、学校和专项奖学金的机会观察。"],
  ["大学招生", "本科、硕士、语言项目、英文授课和申请节点。"],
  ["全球教育", "各国教育政策、人才流动和国际合作趋势。"],
  ["中文学习", "中文能力、HSK、文化体验和职业竞争力。"],
  ["学生故事", "让学生用自己的经历讲述为什么选择中国。"]
];

const enCategories = [
  ["AI Education", "AI in universities, vocational education, teacher development, and youth tech learning."],
  ["New Energy Talent", "New-energy vehicles, green transition, power systems, and smart manufacturing education."],
  ["E-commerce Talent", "Cross-border e-commerce, digital marketing, livestream commerce, and international business talent."],
  ["Study in China", "Policy, trends, admissions updates, and real student needs."],
  ["Scholarships", "National, provincial, university, and special scholarship opportunity watch."],
  ["Admissions", "Bachelor, master, language, English-taught programs, and application timing."],
  ["Global Education", "Education policies, talent mobility, and international cooperation."],
  ["Chinese Learning", "Chinese language, HSK, culture, and career advantage."],
  ["Student Stories", "Students explaining why China became their choice."]
];

export default async function NewsPage() {
  const locale = await getCurrentLocale();
  const isZh = locale === "zh";
  const prefix = localePrefix(locale);
  const articles = isZh ? [...zhArticles, ...zhChinaTechEducationArticles] : [...enArticles, ...enChinaTechEducationArticles];
  const categories = isZh ? zhCategories : enCategories;
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;
  const articleHref = (href: string) => href.startsWith("http") ? href : localize(href);
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <main className="bg-[#fff8ef]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: isZh ? "教育资讯" : "Education News",
          description: isZh
            ? "面向国际学生的中国与全球教育资讯入口。"
            : "China and global education news for international students.",
          url: `https://www.silkstudy.com${localize("/news")}`
        }}
      />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_360px] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber-300">
              <Newspaper size={18} aria-hidden="true" />
              {isZh ? "教育资讯" : "Education News"}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {isZh ? "读懂中国教育，也看见全球年轻人的新选择。" : "Understand China education and the new choices of global youth."}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              {isZh
                ? "这里报道中国乃至全球教育方面的新闻：留学政策、大学招生、奖学金机会、中文学习、国际教育趋势和真实学生故事。资讯不是为了堆砌消息，而是帮助学生更早做出正确判断。"
                : "News on China and global education: policies, admissions, scholarships, Chinese learning, international education trends, and real student stories. The goal is not noise, but better decisions."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localize("/scholarships")}>{isZh ? "先看奖学金机会" : "View Scholarships"}</ButtonLink>
              <ButtonLink href={localize("/consultation")} variant="secondary">{isZh ? "免费咨询" : "Free Consultation"}</ButtonLink>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <ShieldCheck className="text-amber-300" size={30} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">{isZh ? "编辑原则" : "Editorial Principle"}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              {isZh
                ? "重要政策、奖学金和招生信息，正式申请前仍需回到学校官网和主管部门通知核验。SilkStudy 会把资讯转化为更清楚的申请判断。"
                : "Before formal application, policies, scholarships, and admissions details must still be checked against official school and authority notices."}
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.title} className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${index === 0 ? "border-red-200 md:col-span-2" : "border-slate-200"}`}>
              {index === 0 ? (
                <div className="relative aspect-[16/9]">
                  <Image src="/images/news/fields-medal-2026.png" alt={isZh ? "数学黑板前的学术讨论场景" : "Academic mathematics discussion at a chalkboard"} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
                </div>
              ) : null}
              <div className="p-6">
                <p className="text-sm font-bold text-red-700">{article.category}</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-950">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.summary}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{article.date}{article.source ? ` · ${article.source}` : ""}</span>
                  {isExternal(article.href) ? (
                    <a href={articleHref(article.href)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-red-700 hover:text-red-800">
                      {isZh ? "查看来源" : "View source"} <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={articleHref(article.href)} className="inline-flex items-center gap-1 text-sm font-bold text-red-700 hover:text-red-800">
                      {isZh ? "阅读全文" : "Read more"} <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-red-700">
              {isZh ? "栏目规划" : "Sections"}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              {isZh ? "未来这里会持续更新这些方向。" : "This page will grow around these beats."}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, body], index) => {
              const icons = [GraduationCap, Sparkles, BookOpen, Globe2, Newspaper, ShieldCheck];
              const Icon = icons[index] ?? Newspaper;
              return (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon size={22} className="text-red-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-red-600 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-wide text-red-100">{isZh ? "从资讯到申请" : "From news to action"}</p>
          <h2 className="mt-3 text-3xl font-bold">
            {isZh ? "看到一条政策或奖学金消息，不等于知道自己能不能申请。" : "Reading an update is not the same as knowing whether you can apply."}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-red-50">
            {isZh
              ? "把你的国家、成绩、专业、语言、预算和目标城市告诉我们，我们会帮你把资讯变成可执行的学校与奖学金路线。"
              : "Share your country, grades, major, language, budget, and target city. We turn information into a practical school and scholarship route."}
          </p>
          <Link href={localize("/free-study-plan")} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-red-700 hover:bg-amber-50">
            {isZh ? "获取免费留学方案" : "Get a free study plan"}
          </Link>
        </section>
      </section>
    </main>
  );
}
