import { provinceImageOverrides } from "@/lib/province-image-overrides";

export type ProvinceShowcase = {
  slug: string;
  name: string;
  zhName: string;
  region: string;
  zhRegion: string;
  viewBoxPath: string;
  label: { x: number; y: number };
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  imageTopic: string;
  zhImageTopic: string;
  imageQuery: string;
  imageSourceLabel: string;
  imageSourceUrl?: string;
  travelTitle: string;
  zhTravelTitle: string;
  travelSummary: string;
  zhTravelSummary: string;
  cultureTags: string[];
  zhCultureTags: string[];
  topSchools: { name: string; zhName?: string; slug: string; href?: string; note: string; zhNote: string }[];
};

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const provinceImageContext: Record<string, { query: string; topic: string; zhTopic: string }> = {
  heilongjiang: { query: "Harbin ice festival winter China", topic: "Harbin Ice Festival", zhTopic: "哈尔滨冰雪节" },
  jilin: { query: "Changbai Mountain Jilin winter China", topic: "Changbai Mountain", zhTopic: "长白山" },
  liaoning: { query: "Dalian coastline Liaoning China", topic: "Dalian coast", zhTopic: "大连海岸" },
  beijing: { query: "Great Wall Beijing China", topic: "Great Wall", zhTopic: "长城" },
  tianjin: { query: "Tianjin Haihe river China", topic: "Haihe riverfront", zhTopic: "海河夜景" },
  hebei: { query: "Chengde mountain resort Hebei China", topic: "Chengde Mountain Resort", zhTopic: "承德避暑山庄" },
  henan: { query: "Luoyang Longmen Grottoes Henan China", topic: "Longmen Grottoes", zhTopic: "龙门石窟" },
  shandong: { query: "Qingdao coast Shandong China", topic: "Qingdao coast", zhTopic: "青岛海岸" },
  shanxi: { query: "Pingyao ancient city Shanxi China", topic: "Pingyao Ancient City", zhTopic: "平遥古城" },
  "inner-mongolia": { query: "Inner Mongolia grassland China", topic: "Grassland horizon", zhTopic: "内蒙古草原" },
  jiangsu: { query: "Suzhou garden Jiangsu China", topic: "Suzhou gardens", zhTopic: "苏州园林" },
  shanghai: { query: "Shanghai Bund skyline China", topic: "The Bund skyline", zhTopic: "上海外滩" },
  zhejiang: { query: "West Lake Hangzhou Zhejiang China", topic: "West Lake", zhTopic: "西湖" },
  anhui: { query: "Huangshan mountain Anhui China", topic: "Huangshan", zhTopic: "黄山" },
  hubei: { query: "Wuhan East Lake Hubei China", topic: "Wuhan East Lake", zhTopic: "武汉东湖" },
  hunan: { query: "Zhangjiajie Hunan China", topic: "Zhangjiajie peaks", zhTopic: "张家界峰林" },
  jiangxi: { query: "Jingdezhen porcelain Jiangxi China", topic: "Jingdezhen porcelain", zhTopic: "景德镇陶瓷" },
  fujian: { query: "Xiamen Gulangyu Fujian China", topic: "Gulangyu Island", zhTopic: "鼓浪屿" },
  guangdong: { query: "Guangzhou Shenzhen Greater Bay Area China", topic: "Greater Bay Area", zhTopic: "粤港澳大湾区" },
  guangxi: { query: "Guilin karst mountains Guangxi China", topic: "Guilin karst", zhTopic: "桂林山水" },
  hainan: { query: "Sanya tropical beach Hainan China", topic: "Sanya beach", zhTopic: "三亚海岸" },
  sichuan: { query: "Chengdu Sichuan panda tea house China", topic: "Chengdu slow life", zhTopic: "成都慢生活" },
  chongqing: { query: "Chongqing mountain city night China", topic: "Mountain city night", zhTopic: "山城夜景" },
  guizhou: { query: "Guizhou Miao village waterfall China", topic: "Miao villages and waterfalls", zhTopic: "苗寨与瀑布" },
  yunnan: { query: "Dali Lijiang Yunnan China", topic: "Dali and Lijiang", zhTopic: "大理丽江" },
  shaanxi: { query: "Xian city wall terracotta warriors Shaanxi China", topic: "Xi'an ancient capital", zhTopic: "西安古都" },
  gansu: { query: "Dunhuang desert Silk Road Gansu China", topic: "Dunhuang Silk Road", zhTopic: "敦煌丝路" },
  ningxia: { query: "Ningxia desert Yellow River China", topic: "Desert and Yellow River", zhTopic: "大漠黄河" },
  xizang: { query: "Tibet Lhasa highland China", topic: "Lhasa highland", zhTopic: "拉萨高原" },
  qinghai: { query: "Qinghai Lake highland China", topic: "Qinghai Lake", zhTopic: "青海湖" },
  xinjiang: { query: "Xinjiang desert Silk Road China", topic: "Xinjiang Silk Road", zhTopic: "新疆丝路" },
  "hong-kong": { query: "Hong Kong skyline Victoria Harbour campus China", topic: "Victoria Harbour", zhTopic: "维多利亚港" },
  macao: { query: "Macao historic centre university China", topic: "Historic Macao", zhTopic: "澳门历史城区" },
  taiwan: { query: "Taiwan Taipei mountain coast university", topic: "Taipei and island landscapes", zhTopic: "台北与海岛风景" }
};

type RawProvinceShowcase = Omit<ProvinceShowcase, "imageTopic" | "zhImageTopic" | "imageQuery" | "imageSourceLabel" | "imageSourceUrl">;

const rawProvinceShowcases: RawProvinceShowcase[] = [
  {
    slug: "heilongjiang",
    name: "Heilongjiang",
    zhName: "黑龙江",
    region: "Northeast China",
    zhRegion: "东北",
    viewBoxPath: "M712 52L790 45L842 88L830 150L772 180L700 154L676 96Z",
    label: { x: 756, y: 112 },
    image: image("photo-1519681393784-d120267933ba"),
    imageAlt: "Winter travel scenery in northeast China",
    zhImageAlt: "中国东北冬季旅行风景",
    travelTitle: "Ice city energy and engineering culture",
    zhTravelTitle: "冰雪城市与工程气质",
    travelSummary: "Harbin brings winter festivals, European-style streets, lower living costs, and strong engineering universities.",
    zhTravelSummary: "哈尔滨有冰雪节、欧式街区、较低生活成本和强工程类高校。",
    cultureTags: ["Harbin Ice Festival", "Russian-style streets", "Aerospace engineering"],
    zhCultureTags: ["哈尔滨冰雪节", "俄式街区", "航天工程"],
    topSchools: [
      { name: "Harbin Institute of Technology", zhName: "哈尔滨工业大学", slug: "harbin-institute-of-technology", note: "Elite engineering and aerospace", zhNote: "工程与航天强校" },
      { name: "Harbin Medical University", slug: "harbin-medical-university", note: "Medicine and life sciences", zhNote: "医学与生命科学" },
      { name: "Northeast Forestry University", slug: "northeast-forestry-university", note: "Forestry and ecology", zhNote: "林业与生态方向" }
    ]
  },
  {
    slug: "jilin",
    name: "Jilin",
    zhName: "吉林",
    region: "Northeast China",
    zhRegion: "东北",
    viewBoxPath: "M660 118L704 150L694 214L622 224L590 176L612 130Z",
    label: { x: 650, y: 174 },
    image: image("photo-1548013146-72479768bada"),
    imageAlt: "Historic city culture and campus life",
    zhImageAlt: "历史城市文化与校园生活",
    travelTitle: "Automotive industry, language study, and snow culture",
    zhTravelTitle: "汽车产业、语言学习与冰雪文化",
    travelSummary: "Changchun and Yanbian combine research universities, northeast food, and winter travel routes.",
    zhTravelSummary: "长春与延边连接研究型大学、东北美食和冬季旅行线路。",
    cultureTags: ["Changchun", "Yanbian culture", "Winter travel"],
    zhCultureTags: ["长春", "延边文化", "冬季旅行"],
    topSchools: [
      { name: "Jilin University", zhName: "吉林大学", slug: "jilin-university", note: "Comprehensive research university", zhNote: "综合研究型大学" },
      { name: "Northeast Normal University", slug: "northeast-normal-university", note: "Education and language programs", zhNote: "教育与语言项目" },
      { name: "Yanbian University", slug: "yanbian-university", note: "Border culture and medicine", zhNote: "边疆文化与医学" }
    ]
  },
  {
    slug: "liaoning",
    name: "Liaoning",
    zhName: "辽宁",
    region: "Northeast China",
    zhRegion: "东北",
    viewBoxPath: "M602 224L680 218L704 276L658 326L584 304L560 254Z",
    label: { x: 632, y: 272 },
    image: image("photo-1500530855697-b586d89ba3ee"),
    imageAlt: "Coastal city and cultural travel",
    zhImageAlt: "沿海城市与文化旅行",
    travelTitle: "Dalian coast, Shenyang industry, and student-friendly costs",
    zhTravelTitle: "大连海岸、沈阳产业与学生友好成本",
    travelSummary: "Liaoning gives students a mix of port-city life, heavy industry exposure, and northeast culture.",
    zhTravelSummary: "辽宁兼具港口城市生活、重工业实习机会和东北文化体验。",
    cultureTags: ["Dalian coast", "Shenyang industry", "Seafood"],
    zhCultureTags: ["大连海岸", "沈阳工业", "海鲜"],
    topSchools: [
      { name: "Dalian University of Technology", slug: "dalian-university-of-technology", note: "Engineering and technology", zhNote: "工程与技术强校" },
      { name: "Northeastern University", slug: "northeastern-university", note: "Automation and materials", zhNote: "自动化与材料" },
      { name: "Dalian Maritime University", slug: "dalian-maritime-university", note: "Maritime and logistics", zhNote: "海事与物流" }
    ]
  },
  {
    slug: "beijing",
    name: "Beijing",
    zhName: "北京",
    region: "North China",
    zhRegion: "华北",
    viewBoxPath: "M560 292L592 286L606 318L580 344L548 326Z",
    label: { x: 578, y: 316 },
    image: image("photo-1508804185872-d7badad00f7d"),
    imageAlt: "The Great Wall near Beijing",
    zhImageAlt: "北京附近的长城",
    travelTitle: "Top universities, museums, policy, and the Great Wall",
    zhTravelTitle: "顶尖大学、博物馆、政策资源与长城",
    travelSummary: "Beijing is the strongest first stop for students who want academic prestige and China's cultural depth in one city.",
    zhTravelSummary: "北京适合想同时获得学术声望和中国文化纵深的学生。",
    cultureTags: ["Great Wall", "Forbidden City", "Startup and policy networks"],
    zhCultureTags: ["长城", "故宫", "创业与政策网络"],
    topSchools: [
      { name: "Peking University", zhName: "北京大学", slug: "peking-university", note: "Humanities, science, medicine", zhNote: "人文、理科、医学" },
      { name: "Tsinghua University", zhName: "清华大学", slug: "tsinghua-university", note: "Engineering, AI, business", zhNote: "工程、AI、商科" },
      { name: "Renmin University of China", slug: "renmin-university-of-china", note: "Social sciences and economics", zhNote: "社科与经济" }
    ]
  },
  {
    slug: "tianjin",
    name: "Tianjin",
    zhName: "天津",
    region: "North China",
    zhRegion: "华北",
    viewBoxPath: "M606 320L636 316L648 350L622 372L596 348Z",
    label: { x: 622, y: 344 },
    image: image("photo-1523731407965-2430cd12f5e4"),
    imageAlt: "Historic urban waterfront",
    zhImageAlt: "历史城市滨水街区",
    travelTitle: "Lower-cost gateway beside Beijing",
    zhTravelTitle: "北京旁边的低成本门户",
    travelSummary: "Tianjin offers port culture, strong engineering schools, and easy rail access to Beijing.",
    zhTravelSummary: "天津有港口文化、工程强校，并可高铁快速连接北京。",
    cultureTags: ["Haihe River", "Port economy", "Fast rail to Beijing"],
    zhCultureTags: ["海河", "港口经济", "高铁到北京"],
    topSchools: [
      { name: "Tianjin University", zhName: "天津大学", slug: "tianjin-university", note: "Engineering and architecture", zhNote: "工程与建筑" },
      { name: "Nankai University", zhName: "南开大学", slug: "nankai-university", note: "Science, economics, medicine", zhNote: "理科、经济、医学" },
      { name: "Tianjin Medical University", slug: "tianjin-medical-university", note: "Medical programs", zhNote: "医学项目" }
    ]
  },
  {
    slug: "hebei",
    name: "Hebei",
    zhName: "河北",
    region: "North China",
    zhRegion: "华北",
    viewBoxPath: "M520 282L560 268L598 282L594 340L548 356L506 326Z",
    label: { x: 536, y: 314 },
    image: image("photo-1528127269322-539801943592"),
    imageAlt: "Mountain and historic travel landscape",
    zhImageAlt: "山地与历史旅行景观",
    travelTitle: "North China access with mountain and coast routes",
    zhTravelTitle: "连接华北的山海旅行路线",
    travelSummary: "Hebei surrounds Beijing and Tianjin, making it useful for students who want nearby industry and travel options.",
    zhTravelSummary: "河北环绕京津，适合希望靠近产业网络和旅行线路的学生。",
    cultureTags: ["Chengde", "Qinhuangdao coast", "Great Wall routes"],
    zhCultureTags: ["承德", "秦皇岛海岸", "长城线路"],
    topSchools: [
      { name: "Hebei University", slug: "hebei-university", note: "Comprehensive programs", zhNote: "综合项目" },
      { name: "Yanshan University", slug: "yanshan-university", note: "Engineering and materials", zhNote: "工程与材料" },
      { name: "Hebei Medical University", slug: "hebei-medical-university", note: "Medicine", zhNote: "医学" }
    ]
  },
  {
    slug: "shandong",
    name: "Shandong",
    zhName: "山东",
    region: "North China",
    zhRegion: "华北",
    viewBoxPath: "M622 360L702 348L754 386L734 438L654 432L604 398Z",
    label: { x: 682, y: 396 },
    image: image("photo-1518005020951-eccb494ad742"),
    imageAlt: "Coastal and cultural city scenery",
    zhImageAlt: "沿海与文化城市风景",
    travelTitle: "Confucian heritage, Qingdao coast, and solid costs",
    zhTravelTitle: "儒家文化、青岛海岸与稳定成本",
    travelSummary: "Shandong works well for students who want medicine, engineering, coastal weekends, and traditional culture.",
    zhTravelSummary: "山东适合医学、工程学生，也适合周末去海边和体验传统文化。",
    cultureTags: ["Qingdao", "Mount Tai", "Confucius culture"],
    zhCultureTags: ["青岛", "泰山", "孔子文化"],
    topSchools: [
      { name: "Shandong University", zhName: "山东大学", slug: "shandong-university", note: "Comprehensive and medicine", zhNote: "综合与医学" },
      { name: "Ocean University of China", slug: "ocean-university-of-china", note: "Marine science", zhNote: "海洋科学" },
      { name: "China University of Petroleum Beijing", slug: "china-university-of-petroleum-beijing", note: "Energy and engineering", zhNote: "能源与工程" }
    ]
  },
  {
    slug: "shanxi",
    name: "Shanxi",
    zhName: "山西",
    region: "North China",
    zhRegion: "华北",
    viewBoxPath: "M474 326L522 318L548 368L522 426L468 408L446 362Z",
    label: { x: 502, y: 374 },
    image: image("photo-1500534314209-a25ddb2bd429"),
    imageAlt: "Historic architecture and mountain travel",
    zhImageAlt: "历史建筑与山地旅行",
    travelTitle: "Ancient architecture and affordable north China living",
    zhTravelTitle: "古建旅行与华北低成本生活",
    travelSummary: "Shanxi is compelling for history lovers and students watching budget while staying near north China industry.",
    zhTravelSummary: "山西适合热爱历史建筑、重视预算且希望接近华北产业的学生。",
    cultureTags: ["Pingyao", "Ancient temples", "Energy industry"],
    zhCultureTags: ["平遥", "古寺", "能源产业"],
    topSchools: [
      { name: "Shanxi University", slug: "shanxi-university", note: "Comprehensive programs", zhNote: "综合项目" },
      { name: "Taiyuan University of Technology", slug: "taiyuan-university-of-technology", note: "Engineering", zhNote: "工程" },
      { name: "Shanxi Medical University", slug: "shanxi-medical-university", href: "/universities?province=shanxi", note: "Medicine and health sciences", zhNote: "医学与健康科学" }
    ]
  },
  {
    slug: "inner-mongolia",
    name: "Inner Mongolia",
    zhName: "内蒙古",
    region: "North China",
    zhRegion: "华北",
    viewBoxPath: "M296 214L422 178L562 210L612 262L520 290L384 280L286 248Z",
    label: { x: 452, y: 240 },
    image: image("photo-1470770841072-f978cf4d019e"),
    imageAlt: "Wide grassland landscape",
    zhImageAlt: "辽阔草原风景",
    travelTitle: "Grasslands, energy industry, and northern culture",
    zhTravelTitle: "草原、能源产业与北方文化",
    travelSummary: "Inner Mongolia offers a distinctive China experience with grassland routes, lower costs, and energy-sector exposure.",
    zhTravelSummary: "内蒙古能提供草原线路、较低成本和能源产业曝光。",
    cultureTags: ["Grasslands", "Hohhot", "Energy"],
    zhCultureTags: ["草原", "呼和浩特", "能源"],
    topSchools: [
      { name: "Inner Mongolia University", slug: "inner-mongolia-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Inner Mongolia Agricultural University", slug: "inner-mongolia-agricultural-university", note: "Agriculture and ecology", zhNote: "农业与生态" },
      { name: "Inner Mongolia Normal University", slug: "inner-mongolia-normal-university", note: "Language and education", zhNote: "语言与教育" }
    ]
  },
  {
    slug: "jiangsu",
    name: "Jiangsu",
    zhName: "江苏",
    region: "East China",
    zhRegion: "华东",
    viewBoxPath: "M642 442L716 430L748 474L716 520L650 502L620 462Z",
    label: { x: 686, y: 472 },
    image: image("photo-1494526585095-c41746248156"),
    imageAlt: "Classical garden and canal culture",
    zhImageAlt: "古典园林与运河文化",
    travelTitle: "Gardens, canals, manufacturing, and Nanjing universities",
    zhTravelTitle: "园林、运河、制造业与南京高校",
    travelSummary: "Jiangsu combines dense universities, Suzhou gardens, historic Nanjing, and quick access to Shanghai.",
    zhTravelSummary: "江苏结合密集高校、苏州园林、历史南京和通往上海的便利交通。",
    cultureTags: ["Suzhou gardens", "Nanjing history", "Manufacturing"],
    zhCultureTags: ["苏州园林", "南京历史", "制造业"],
    topSchools: [
      { name: "Nanjing University", zhName: "南京大学", slug: "nanjing-university", note: "Research and science", zhNote: "研究与理科" },
      { name: "Southeast University", zhName: "东南大学", slug: "southeast-university", note: "Engineering and architecture", zhNote: "工程与建筑" },
      { name: "Soochow University", slug: "soochow-university", note: "Medicine and materials", zhNote: "医学与材料" }
    ]
  },
  {
    slug: "shanghai",
    name: "Shanghai",
    zhName: "上海",
    region: "East China",
    zhRegion: "华东",
    viewBoxPath: "M738 484L774 482L790 512L764 540L732 522Z",
    label: { x: 760, y: 510 },
    image: image("photo-1548919973-5cef591cdbc9"),
    imageAlt: "Shanghai skyline and riverfront",
    zhImageAlt: "上海天际线与滨江",
    travelTitle: "Global internships, skyline weekends, and international programs",
    zhTravelTitle: "全球实习、天际线周末与国际项目",
    travelSummary: "Shanghai is the clearest choice for students prioritizing business, finance, design, medicine, and global exposure.",
    zhTravelSummary: "上海适合重视商科、金融、设计、医学和全球职业曝光的学生。",
    cultureTags: ["The Bund", "Finance", "Creative industries"],
    zhCultureTags: ["外滩", "金融", "创意产业"],
    topSchools: [
      { name: "Fudan University", zhName: "复旦大学", slug: "fudan-university", note: "Comprehensive elite university", zhNote: "综合顶尖高校" },
      { name: "Shanghai Jiao Tong University", zhName: "上海交通大学", slug: "shanghai-jiao-tong-university", note: "Engineering and medicine", zhNote: "工程与医学" },
      { name: "Tongji University", slug: "tongji-university", note: "Architecture and engineering", zhNote: "建筑与工程" }
    ]
  },
  {
    slug: "zhejiang",
    name: "Zhejiang",
    zhName: "浙江",
    region: "East China",
    zhRegion: "华东",
    viewBoxPath: "M682 522L748 516L770 574L720 618L656 588L642 546Z",
    label: { x: 708, y: 560 },
    image: image("photo-1500534314209-a25ddb2bd429"),
    imageAlt: "Lake, tea mountains, and city travel",
    zhImageAlt: "湖泊、茶山与城市旅行",
    travelTitle: "West Lake, digital economy, and startup energy",
    zhTravelTitle: "西湖、数字经济与创业能量",
    travelSummary: "Zhejiang blends beautiful weekend travel with Hangzhou's internet economy and strong research universities.",
    zhTravelSummary: "浙江把周末旅行美感、杭州互联网经济和研究型大学结合起来。",
    cultureTags: ["West Lake", "Tea culture", "Digital economy"],
    zhCultureTags: ["西湖", "茶文化", "数字经济"],
    topSchools: [
      { name: "Zhejiang University", zhName: "浙江大学", slug: "zhejiang-university", note: "Comprehensive top university", zhNote: "综合顶尖高校" },
      { name: "Ningbo University", slug: "ningbo-university", note: "Coastal programs", zhNote: "沿海城市项目" },
      { name: "Wenzhou Medical University", slug: "wenzhou-medical-university", note: "Medicine", zhNote: "医学" }
    ]
  },
  {
    slug: "anhui",
    name: "Anhui",
    zhName: "安徽",
    region: "East China",
    zhRegion: "华东",
    viewBoxPath: "M572 468L642 456L662 522L620 570L552 544L534 500Z",
    label: { x: 604, y: 512 },
    image: image("photo-1501785888041-af3ef285b470"),
    imageAlt: "Mountain and village landscape",
    zhImageAlt: "山地与村落景观",
    travelTitle: "Huangshan scenery and science city momentum",
    zhTravelTitle: "黄山风景与科学城市动能",
    travelSummary: "Anhui offers lower costs, standout science research in Hefei, and one of China's most iconic mountain trips.",
    zhTravelSummary: "安徽兼具较低成本、合肥科研优势和中国标志性的黄山旅行。",
    cultureTags: ["Huangshan", "Quantum research", "Hui culture"],
    zhCultureTags: ["黄山", "量子科研", "徽州文化"],
    topSchools: [
      { name: "University of Science and Technology of China", zhName: "中国科学技术大学", slug: "university-of-science-and-technology-of-china", note: "Science and AI", zhNote: "理科与 AI" },
      { name: "Hefei University of Technology", slug: "hefei-university-of-technology", note: "Engineering", zhNote: "工程" },
      { name: "Anhui University", slug: "anhui-university", note: "Comprehensive programs", zhNote: "综合项目" }
    ]
  },
  {
    slug: "hubei",
    name: "Hubei",
    zhName: "湖北",
    region: "Central China",
    zhRegion: "华中",
    viewBoxPath: "M490 514L566 500L604 554L570 610L486 606L444 558Z",
    label: { x: 530, y: 558 },
    image: image("photo-1528127269322-539801943592"),
    imageAlt: "River city and student life",
    zhImageAlt: "江城与学生生活",
    travelTitle: "China's student city with river, food, and engineering strength",
    zhTravelTitle: "江河、美食与工程实力汇聚的学生城市",
    travelSummary: "Wuhan is one of China's biggest student hubs, with strong labs, affordable daily life, and central transport.",
    zhTravelSummary: "武汉是中国最大的学生城市之一，实验室强、生活成本友好、交通居中。",
    cultureTags: ["Yangtze River", "Breakfast culture", "Optics Valley"],
    zhCultureTags: ["长江", "过早文化", "光谷"],
    topSchools: [
      { name: "Wuhan University", zhName: "武汉大学", slug: "wuhan-university", note: "Beautiful campus and research", zhNote: "校园与研究实力" },
      { name: "Huazhong University of Science and Technology", zhName: "华中科技大学", slug: "huazhong-university-of-science-and-technology", note: "Engineering and medicine", zhNote: "工程与医学" },
      { name: "Wuhan University of Technology", slug: "wuhan-university-of-technology", note: "Materials and transport", zhNote: "材料与交通" }
    ]
  },
  {
    slug: "hunan",
    name: "Hunan",
    zhName: "湖南",
    region: "Central China",
    zhRegion: "华中",
    viewBoxPath: "M500 604L578 594L606 666L562 724L494 704L458 650Z",
    label: { x: 538, y: 656 },
    image: image("photo-1500530855697-b586d89ba3ee"),
    imageAlt: "Youth culture and mountain travel",
    zhImageAlt: "青年文化与山地旅行",
    travelTitle: "Youth culture, spicy food, media, and mountain trips",
    zhTravelTitle: "青年文化、辣味美食、传媒与山地旅行",
    travelSummary: "Changsha feels young and energetic, with strong food scenes, media culture, and access to dramatic nature routes.",
    zhTravelSummary: "长沙年轻、热闹，有美食、传媒文化，也能连接张家界等自然路线。",
    cultureTags: ["Changsha nightlife", "Spicy food", "Zhangjiajie"],
    zhCultureTags: ["长沙夜生活", "湘菜", "张家界"],
    topSchools: [
      { name: "Central South University", zhName: "中南大学", slug: "central-south-university", note: "Medicine and engineering", zhNote: "医学与工程" },
      { name: "Hunan University", slug: "hunan-university", note: "Engineering and business", zhNote: "工程与商科" },
      { name: "Hunan Normal University", slug: "hunan-normal-university", note: "Language and education", zhNote: "语言与教育" }
    ]
  },
  {
    slug: "henan",
    name: "Henan",
    zhName: "河南",
    region: "Central China",
    zhRegion: "华中",
    viewBoxPath: "M508 420L594 414L628 464L584 510L508 502L462 462Z",
    label: { x: 552, y: 462 },
    image: image("photo-1500534314209-a25ddb2bd429"),
    imageAlt: "Historic central China travel",
    zhImageAlt: "中原历史旅行",
    travelTitle: "Central plains culture and practical study costs",
    zhTravelTitle: "中原文化与务实留学成本",
    travelSummary: "Henan offers deep Chinese history, transport convenience, and growing medicine and engineering options.",
    zhTravelSummary: "河南有深厚中原历史、交通便利和持续发展的医学工程资源。",
    cultureTags: ["Shaolin Temple", "Luoyang", "Central rail hub"],
    zhCultureTags: ["少林寺", "洛阳", "中部铁路枢纽"],
    topSchools: [
      { name: "Zhengzhou University", slug: "zhengzhou-university", note: "Large comprehensive university", zhNote: "大型综合大学" },
      { name: "Henan University", slug: "henan-university", note: "Humanities and medicine", zhNote: "人文与医学" },
      { name: "Henan University of Technology", slug: "henan-university-of-technology", note: "Engineering and food science", zhNote: "工程与食品科学" }
    ]
  },
  {
    slug: "jiangxi",
    name: "Jiangxi",
    zhName: "江西",
    region: "East China",
    zhRegion: "华东",
    viewBoxPath: "M586 596L650 582L682 646L646 714L574 700L548 644Z",
    label: { x: 622, y: 650 },
    image: image("photo-1501785888041-af3ef285b470"),
    imageAlt: "Mountains, lakes, and cultural towns",
    zhImageAlt: "山湖与文化小镇",
    travelTitle: "Lower costs, ceramics, mountains, and lake routes",
    zhTravelTitle: "低成本、陶瓷、山湖旅行",
    travelSummary: "Jiangxi is attractive for budget-conscious students who still want nature, ceramics, and central access.",
    zhTravelSummary: "江西适合重视预算，同时想体验自然、陶瓷文化和中部交通的学生。",
    cultureTags: ["Jingdezhen", "Lushan", "Poyang Lake"],
    zhCultureTags: ["景德镇", "庐山", "鄱阳湖"],
    topSchools: [
      { name: "Nanchang University", slug: "nanchang-university", note: "Comprehensive programs", zhNote: "综合项目" },
      { name: "Jiangxi University of Finance and Economics", slug: "jiangxi-university-of-finance-and-economics", note: "Business and finance", zhNote: "商科与财经" },
      { name: "Jingdezhen Ceramic Institute", slug: "jingdezhen-ceramic-institute", note: "Art and ceramics", zhNote: "艺术与陶瓷" }
    ]
  },
  {
    slug: "fujian",
    name: "Fujian",
    zhName: "福建",
    region: "Southeast China",
    zhRegion: "东南",
    viewBoxPath: "M664 660L724 634L764 688L736 760L674 742L642 704Z",
    label: { x: 708, y: 700 },
    image: image("photo-1507525428034-b723cf961d3e"),
    imageAlt: "Coastal island and sea travel",
    zhImageAlt: "沿海海岛旅行",
    travelTitle: "Xiamen coast, Southeast Asia links, and relaxed student life",
    zhTravelTitle: "厦门海岸、东南亚连接与松弛学生生活",
    travelSummary: "Fujian feels coastal, international, and comfortable, especially for business, language, and marine programs.",
    zhTravelSummary: "福建沿海、国际化且舒适，适合商科、语言和海洋相关项目。",
    cultureTags: ["Xiamen", "Tulou villages", "Southeast Asia links"],
    zhCultureTags: ["厦门", "土楼", "东南亚连接"],
    topSchools: [
      { name: "Xiamen University", zhName: "厦门大学", slug: "xiamen-university", note: "Coastal campus and business", zhNote: "海滨校园与商科" },
      { name: "Fuzhou University", slug: "fuzhou-university", note: "Engineering", zhNote: "工程" },
      { name: "Fujian Medical University", slug: "fujian-medical-university", note: "Medicine", zhNote: "医学" }
    ]
  },
  {
    slug: "guangdong",
    name: "Guangdong",
    zhName: "广东",
    region: "South China",
    zhRegion: "华南",
    viewBoxPath: "M560 720L652 708L704 768L676 838L584 850L522 794Z",
    label: { x: 618, y: 778 },
    image: image("photo-1548919973-5cef591cdbc9"),
    imageAlt: "Modern city skyline in southern China",
    zhImageAlt: "中国南方现代城市天际线",
    travelTitle: "Greater Bay Area careers, food, trade, and warm weather",
    zhTravelTitle: "大湾区职业、美食、贸易与温暖气候",
    travelSummary: "Guangdong is ideal for students who want business, medicine, engineering, internships, and fast-moving city life.",
    zhTravelSummary: "广东适合追求商科、医学、工程、实习和快速城市生活的学生。",
    cultureTags: ["Cantonese food", "Shenzhen tech", "Greater Bay Area"],
    zhCultureTags: ["粤菜", "深圳科技", "大湾区"],
    topSchools: [
      { name: "Sun Yat-sen University", zhName: "中山大学", slug: "sun-yat-sen-university", note: "Medicine and business", zhNote: "医学与商科" },
      { name: "South China University of Technology", zhName: "华南理工大学", slug: "south-china-university-of-technology", note: "Engineering and industry", zhNote: "工程与产业" },
      { name: "Jinan University", slug: "jinan-university", note: "International student heritage", zhNote: "国际学生传统" }
    ]
  },
  {
    slug: "guangxi",
    name: "Guangxi",
    zhName: "广西",
    region: "South China",
    zhRegion: "华南",
    viewBoxPath: "M458 724L548 724L580 806L528 868L432 836L406 780Z",
    label: { x: 498, y: 790 },
    image: image("photo-1500534314209-a25ddb2bd429"),
    imageAlt: "Karst mountain travel landscape",
    zhImageAlt: "喀斯特山水旅行风景",
    travelTitle: "Guilin landscapes and ASEAN gateway programs",
    zhTravelTitle: "桂林山水与东盟门户项目",
    travelSummary: "Guangxi pairs beautiful karst travel with medicine, language, and Southeast Asia-facing study routes.",
    zhTravelSummary: "广西结合喀斯特山水旅行、医学、语言和面向东盟的学习路线。",
    cultureTags: ["Guilin", "Karst scenery", "ASEAN gateway"],
    zhCultureTags: ["桂林", "喀斯特山水", "东盟门户"],
    topSchools: [
      { name: "Guangxi University", slug: "guangxi-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Guangxi Medical University", slug: "guangxi-medical-university", note: "Medicine", zhNote: "医学" },
      { name: "Guilin University of Electronic Technology", slug: "guilin-university-of-electronic-technology", note: "Electronics and engineering", zhNote: "电子与工程" }
    ]
  },
  {
    slug: "hainan",
    name: "Hainan",
    zhName: "海南",
    region: "South China",
    zhRegion: "华南",
    viewBoxPath: "M548 884L602 876L624 922L584 956L534 934Z",
    label: { x: 584, y: 916 },
    image: image("photo-1507525428034-b723cf961d3e"),
    imageAlt: "Tropical island coastline",
    zhImageAlt: "热带海岛海岸线",
    travelTitle: "Tropical island study and tourism economy",
    zhTravelTitle: "热带海岛学习与旅游经济",
    travelSummary: "Hainan is a warmer, tourism-driven option for students interested in hospitality, language, and health industries.",
    zhTravelSummary: "海南适合关注旅游、语言、健康产业并喜欢热带海岛生活的学生。",
    cultureTags: ["Sanya", "Tropical coast", "Tourism economy"],
    zhCultureTags: ["三亚", "热带海岸", "旅游经济"],
    topSchools: [
      { name: "Hainan University", slug: "hainan-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Hainan Normal University", slug: "hainan-normal-university", note: "Language and education", zhNote: "语言与教育" },
      { name: "Hainan Tropical Ocean University", slug: "hainan-tropical-ocean-university", href: "/universities?province=hainan", note: "Tourism and ocean programs", zhNote: "旅游与海洋项目" }
    ]
  },
  {
    slug: "sichuan",
    name: "Sichuan",
    zhName: "四川",
    region: "West China",
    zhRegion: "西南",
    viewBoxPath: "M330 566L454 548L496 648L454 742L330 734L266 654Z",
    label: { x: 392, y: 646 },
    image: image("photo-1500530855697-b586d89ba3ee"),
    imageAlt: "Mountain city, food, and west China travel",
    zhImageAlt: "山城、美食与西部旅行",
    travelTitle: "Food, relaxed life, medicine, and western tech growth",
    zhTravelTitle: "美食、松弛生活、医学与西部科技增长",
    travelSummary: "Sichuan is emotionally powerful for students: strong schools, great food, lower costs, and unforgettable travel.",
    zhTravelSummary: "四川对学生很有情绪吸引力：强校、美食、低成本和难忘旅行体验。",
    cultureTags: ["Chengdu food", "Jiuzhaigou", "Tech parks"],
    zhCultureTags: ["成都美食", "九寨沟", "科技园区"],
    topSchools: [
      { name: "Sichuan University", zhName: "四川大学", slug: "sichuan-university", note: "Medicine and engineering", zhNote: "医学与工程" },
      { name: "University of Electronic Science and Technology of China", slug: "university-of-electronic-science-and-technology-of-china", note: "Electronics and AI", zhNote: "电子与 AI" },
      { name: "Southwest Jiaotong University", slug: "southwest-jiaotong-university", note: "Transport engineering", zhNote: "交通工程" }
    ]
  },
  {
    slug: "chongqing",
    name: "Chongqing",
    zhName: "重庆",
    region: "West China",
    zhRegion: "西南",
    viewBoxPath: "M418 666L494 656L528 718L486 780L410 760L380 708Z",
    label: { x: 464, y: 718 },
    image: image("photo-1523731407965-2430cd12f5e4"),
    imageAlt: "Mountain megacity night and river travel",
    zhImageAlt: "山城夜景与江河旅行",
    travelTitle: "Mountain megacity, hotpot, and manufacturing internships",
    zhTravelTitle: "山城、火锅与制造业实习",
    travelSummary: "Chongqing gives students a cinematic city experience with strong western China industry connections.",
    zhTravelSummary: "重庆给学生很强的城市体验，也连接西部制造业和开放门户机会。",
    cultureTags: ["Hotpot", "Yangtze River", "Manufacturing"],
    zhCultureTags: ["火锅", "长江", "制造业"],
    topSchools: [
      { name: "Chongqing University", slug: "chongqing-university", note: "Engineering and architecture", zhNote: "工程与建筑" },
      { name: "Southwest University", slug: "southwest-university", note: "Education and agriculture", zhNote: "教育与农业" },
      { name: "Chongqing Medical University", slug: "chongqing-medical-university", note: "Medicine", zhNote: "医学" }
    ]
  },
  {
    slug: "guizhou",
    name: "Guizhou",
    zhName: "贵州",
    region: "Southwest China",
    zhRegion: "西南",
    viewBoxPath: "M368 736L448 744L476 814L422 870L344 844L326 786Z",
    label: { x: 402, y: 804 },
    image: image("photo-1501785888041-af3ef285b470"),
    imageAlt: "Mountain villages and nature travel",
    zhImageAlt: "山地村寨与自然旅行",
    travelTitle: "Mountain culture, lower costs, and data economy",
    zhTravelTitle: "山地文化、低生活成本与大数据经济",
    travelSummary: "Guizhou is emerging as a lower-cost study destination with strong nature travel and distinctive minority culture.",
    zhTravelSummary: "贵州是成本较低的新兴目的地，有自然旅行和鲜明民族文化。",
    cultureTags: ["Miao villages", "Waterfalls", "Big data"],
    zhCultureTags: ["苗寨", "瀑布", "大数据"],
    topSchools: [
      { name: "Guizhou University", slug: "guizhou-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Guizhou Minzu University", slug: "guizhou-minzu-university", note: "Culture and regional studies", zhNote: "民族文化与区域研究" },
      { name: "Guizhou Normal University", slug: "guizhou-normal-university", note: "Language and education", zhNote: "语言与教育" }
    ]
  },
  {
    slug: "yunnan",
    name: "Yunnan",
    zhName: "云南",
    region: "Southwest China",
    zhRegion: "西南",
    viewBoxPath: "M264 744L356 760L386 846L330 916L230 886L202 814Z",
    label: { x: 300, y: 832 },
    image: image("photo-1500530855697-b586d89ba3ee"),
    imageAlt: "Southwest China mountain and ethnic culture",
    zhImageAlt: "中国西南山地与民族文化",
    travelTitle: "Mild climate, ethnic culture, and Southeast Asia routes",
    zhTravelTitle: "温和气候、民族文化与东南亚路线",
    travelSummary: "Yunnan is one of China's most emotionally attractive study destinations for students who love travel and culture.",
    zhTravelSummary: "云南是最容易打动年轻人的留学目的地之一，旅行和文化吸引力很强。",
    cultureTags: ["Dali", "Lijiang", "Southeast Asia gateway"],
    zhCultureTags: ["大理", "丽江", "东南亚门户"],
    topSchools: [
      { name: "Yunnan University", slug: "yunnan-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Kunming University of Science and Technology", slug: "kunming-university-of-science-and-technology", note: "Engineering", zhNote: "工程" },
      { name: "Yunnan Normal University", slug: "yunnan-normal-university", note: "Language and education", zhNote: "语言与教育" }
    ]
  },
  {
    slug: "shaanxi",
    name: "Shaanxi",
    zhName: "陕西",
    region: "Northwest China",
    zhRegion: "西北",
    viewBoxPath: "M390 368L466 356L492 452L456 554L382 548L354 454Z",
    label: { x: 424, y: 466 },
    image: image("photo-1508804185872-d7badad00f7d"),
    imageAlt: "Ancient city wall and cultural travel",
    zhImageAlt: "古城墙与文化旅行",
    travelTitle: "Ancient capital, aerospace, electronics, and low costs",
    zhTravelTitle: "古都、航天、电子与低成本",
    travelSummary: "Xi'an gives international students deep Chinese history plus serious engineering and aerospace networks.",
    zhTravelSummary: "西安把中国历史纵深、工程教育和航天产业网络结合起来。",
    cultureTags: ["Terracotta Warriors", "City wall", "Aerospace"],
    zhCultureTags: ["兵马俑", "古城墙", "航天"],
    topSchools: [
      { name: "Xi'an Jiaotong University", zhName: "西安交通大学", slug: "xi-an-jiaotong-university", note: "Engineering and medicine", zhNote: "工程与医学" },
      { name: "Northwest University", slug: "northwest-university", note: "Science and humanities", zhNote: "理科与人文" },
      { name: "Xidian University", slug: "xidian-university", note: "Electronics and AI", zhNote: "电子与 AI" }
    ]
  },
  {
    slug: "gansu",
    name: "Gansu",
    zhName: "甘肃",
    region: "Northwest China",
    zhRegion: "西北",
    viewBoxPath: "M246 328L376 332L396 404L342 476L232 446L190 382Z",
    label: { x: 306, y: 394 },
    image: image("photo-1500534314209-a25ddb2bd429"),
    imageAlt: "Silk Road and desert landscape",
    zhImageAlt: "丝绸之路与荒漠景观",
    travelTitle: "Silk Road culture and northwest research routes",
    zhTravelTitle: "丝绸之路文化与西北科研路线",
    travelSummary: "Gansu is for students drawn to history, archaeology, desert landscapes, and northwest science programs.",
    zhTravelSummary: "甘肃适合被历史、考古、荒漠景观和西北科研项目吸引的学生。",
    cultureTags: ["Dunhuang", "Silk Road", "Lanzhou"],
    zhCultureTags: ["敦煌", "丝绸之路", "兰州"],
    topSchools: [
      { name: "Lanzhou University", slug: "lanzhou-university", note: "Science and ecology", zhNote: "理科与生态" },
      { name: "Northwest Normal University", slug: "northwest-normal-university", note: "Education and language", zhNote: "教育与语言" },
      { name: "Lanzhou Jiaotong University", slug: "lanzhou-jiaotong-university", note: "Transport engineering", zhNote: "交通工程" }
    ]
  },
  {
    slug: "ningxia",
    name: "Ningxia",
    zhName: "宁夏",
    region: "Northwest China",
    zhRegion: "西北",
    viewBoxPath: "M318 424L366 418L388 470L358 526L306 508L286 462Z",
    label: { x: 340, y: 474 },
    image: image("photo-1470770841072-f978cf4d019e"),
    imageAlt: "Northwest China desert and river landscape",
    zhImageAlt: "中国西北沙漠与河流景观",
    travelTitle: "Compact northwest living with desert and river culture",
    zhTravelTitle: "紧凑西北生活、沙漠与黄河文化",
    travelSummary: "Ningxia is compact, affordable, and culturally distinctive for students who want a quieter China experience.",
    zhTravelSummary: "宁夏紧凑、低成本、文化独特，适合想要安静中国体验的学生。",
    cultureTags: ["Yellow River", "Desert routes", "Yinchuan"],
    zhCultureTags: ["黄河", "沙漠路线", "银川"],
    topSchools: [
      { name: "Ningxia University", slug: "ningxia-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Ningxia Medical University", slug: "ningxia-medical-university", note: "Medicine", zhNote: "医学" },
      { name: "North Minzu University", slug: "north-minzu-university", href: "/universities?province=ningxia", note: "Regional culture and applied programs", zhNote: "区域文化与应用项目" }
    ]
  },
  {
    slug: "xizang",
    name: "Xizang",
    zhName: "西藏",
    region: "Southwest China",
    zhRegion: "西南",
    viewBoxPath: "M78 520L172 500L286 604L276 724L204 816L94 760L36 640Z",
    label: { x: 156, y: 642 },
    image: image("photo-1501785888041-af3ef285b470"),
    imageAlt: "Highland mountains and cultural travel",
    zhImageAlt: "高原山地与文化旅行",
    travelTitle: "Highland culture, ecology, and once-in-a-lifetime travel",
    zhTravelTitle: "高原文化、生态与一生难忘的旅行",
    travelSummary: "Xizang is included as a real map region and will be enriched carefully with verified international-program data.",
    zhTravelSummary: "西藏作为真实地图区域保留，后续会用核验过的国际项目数据谨慎补全。",
    cultureTags: ["Highland ecology", "Lhasa culture", "Responsible travel"],
    zhCultureTags: ["高原生态", "拉萨文化", "负责任旅行"],
    topSchools: [
      { name: "Xizang University", zhName: "西藏大学", slug: "xizang-university", href: "/universities?province=xizang", note: "Profile pending verification", zhNote: "资料待核验" },
      { name: "Xizang Minzu University", zhName: "西藏民族大学", slug: "xizang-minzu-university", href: "/universities?province=xizang", note: "Profile pending verification", zhNote: "资料待核验" },
      { name: "Xizang Tibetan Medical University", zhName: "西藏藏医药大学", slug: "xizang-tibetan-medical-university", href: "/universities?province=xizang", note: "Profile pending verification", zhNote: "资料待核验" }
    ]
  },
  {
    slug: "qinghai",
    name: "Qinghai",
    zhName: "青海",
    region: "Northwest China",
    zhRegion: "西北",
    viewBoxPath: "M176 430L298 420L334 520L278 600L166 578L120 498Z",
    label: { x: 232, y: 516 },
    image: image("photo-1501785888041-af3ef285b470"),
    imageAlt: "Highland lake and mountain scenery",
    zhImageAlt: "高原湖泊与山地风景",
    travelTitle: "Highland ecology and quiet study life",
    zhTravelTitle: "高原生态与安静学习生活",
    travelSummary: "Qinghai offers highland scenery, ecology themes, and a slower student rhythm.",
    zhTravelSummary: "青海提供高原风景、生态主题和更慢节奏的学生生活。",
    cultureTags: ["Qinghai Lake", "Highland ecology", "Xining"],
    zhCultureTags: ["青海湖", "高原生态", "西宁"],
    topSchools: [
      { name: "Qinghai University", slug: "qinghai-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Qinghai Nationalities University", slug: "qinghai-nationalities-university", note: "Culture and regional studies", zhNote: "文化与区域研究" },
      { name: "Qinghai Normal University", slug: "qinghai-normal-university", href: "/universities?province=qinghai", note: "Education and language", zhNote: "教育与语言" }
    ]
  },
  {
    slug: "xinjiang",
    name: "Xinjiang",
    zhName: "新疆",
    region: "Northwest China",
    zhRegion: "西北",
    viewBoxPath: "M38 242L216 222L286 322L228 426L78 416L22 330Z",
    label: { x: 142, y: 330 },
    image: image("photo-1470770841072-f978cf4d019e"),
    imageAlt: "Vast northwest China landscape",
    zhImageAlt: "辽阔的中国西北风景",
    travelTitle: "Vast landscapes, energy industry, and Silk Road diversity",
    zhTravelTitle: "辽阔风景、能源产业与丝路多元文化",
    travelSummary: "Xinjiang is visually unforgettable and strategically important for energy, language, and westward routes.",
    zhTravelSummary: "新疆视觉冲击力强，也在能源、语言和向西通道方面有战略意义。",
    cultureTags: ["Urumqi", "Silk Road", "Energy"],
    zhCultureTags: ["乌鲁木齐", "丝绸之路", "能源"],
    topSchools: [
      { name: "Xinjiang University", slug: "xinjiang-university", note: "Regional flagship", zhNote: "区域旗舰高校" },
      { name: "Shihezi University", slug: "shihezi-university", note: "Agriculture and medicine", zhNote: "农业与医学" },
      { name: "Xinjiang Medical University", slug: "xinjiang-medical-university", note: "Medicine", zhNote: "医学" }
    ]
  }
  ,
  {
    slug: "hong-kong",
    name: "Hong Kong SAR",
    zhName: "香港特别行政区",
    region: "South China",
    zhRegion: "华南",
    viewBoxPath: "M646 664L660 660L666 672L654 682L640 676Z",
    label: { x: 654, y: 708 },
    image: image("photo-1536599018102-9f803c140fc1"),
    imageAlt: "Hong Kong skyline and Victoria Harbour",
    zhImageAlt: "香港天际线与维多利亚港",
    travelTitle: "Harbour skyline, global finance, and international campuses",
    zhTravelTitle: "海港天际线、国际金融与国际化校园",
    travelSummary: "Hong Kong connects Chinese culture, global finance, English-speaking academic environments, and compact city travel.",
    zhTravelSummary: "香港连接中国文化、全球金融、英语学术环境和高密度城市旅行体验。",
    cultureTags: ["Victoria Harbour", "Finance", "International city"],
    zhCultureTags: ["维多利亚港", "金融", "国际化城市"],
    topSchools: [
      { name: "The University of Hong Kong", zhName: "香港大学", slug: "the-university-of-hong-kong", href: "/universities?province=hong-kong", note: "Global research university", zhNote: "全球研究型大学" },
      { name: "The Chinese University of Hong Kong", zhName: "香港中文大学", slug: "the-chinese-university-of-hong-kong", href: "/universities?province=hong-kong", note: "Research and bilingual strengths", zhNote: "研究与双语优势" },
      { name: "The Hong Kong University of Science and Technology", zhName: "香港科技大学", slug: "the-hong-kong-university-of-science-and-technology", href: "/universities?province=hong-kong", note: "Science, technology, and business", zhNote: "科技与商科优势" }
    ]
  },
  {
    slug: "macao",
    name: "Macao SAR",
    zhName: "澳门特别行政区",
    region: "South China",
    zhRegion: "华南",
    viewBoxPath: "M630 676L638 672L644 680L636 688L628 684Z",
    label: { x: 620, y: 720 },
    image: image("photo-1553649033-3fbc8d0fa3cb"),
    imageAlt: "Historic Macao streets and city landmarks",
    zhImageAlt: "澳门历史街区与城市地标",
    travelTitle: "Historic streets, hospitality, and compact study life",
    zhTravelTitle: "历史街区、文旅产业与紧凑学习生活",
    travelSummary: "Macao offers a compact international environment with heritage sites, hospitality, tourism, and growing higher-education options.",
    zhTravelSummary: "澳门提供紧凑的国际化环境，兼具历史遗产、酒店文旅产业和不断发展的高等教育选择。",
    cultureTags: ["Historic centre", "Hospitality", "World heritage"],
    zhCultureTags: ["历史城区", "酒店文旅", "世界遗产"],
    topSchools: [
      { name: "University of Macau", zhName: "澳门大学", slug: "university-of-macau", href: "/universities?province=macao", note: "Comprehensive public university", zhNote: "综合型公立大学" },
      { name: "Macao Polytechnic University", zhName: "澳门理工大学", slug: "macao-polytechnic-university", href: "/universities?province=macao", note: "Applied education", zhNote: "应用型教育" },
      { name: "Macau University of Science and Technology", zhName: "澳门科技大学", slug: "macau-university-of-science-and-technology", href: "/universities?province=macao", note: "Technology, business, and medicine", zhNote: "科技、商科与医学" }
    ]
  },
  {
    slug: "taiwan",
    name: "Taiwan",
    zhName: "台湾",
    region: "East China",
    zhRegion: "华东",
    viewBoxPath: "M742 628L772 666L764 738L732 770L710 730L720 666Z",
    label: { x: 742, y: 710 },
    image: image("photo-1507525428034-b723cf961d3e"),
    imageAlt: "Taiwan island coastline and mountain scenery",
    zhImageAlt: "台湾海岸线与山地风景",
    travelTitle: "Island cities, mountains, technology, and culture",
    zhTravelTitle: "海岛城市、山地风景、科技与文化",
    travelSummary: "Taiwan is included on the China map to keep the destination view complete, with strong technology, culture, and island travel context.",
    zhTravelSummary: "台湾纳入中国地图目的地视图，呈现科技、文化与海岛旅行语境的完整性。",
    cultureTags: ["Taipei", "Technology", "Island travel"],
    zhCultureTags: ["台北", "科技", "海岛旅行"],
    topSchools: [
      { name: "National Taiwan University", zhName: "台湾大学", slug: "national-taiwan-university", href: "/universities?province=taiwan", note: "Comprehensive research university", zhNote: "综合研究型大学" },
      { name: "National Tsing Hua University", zhName: "台湾清华大学", slug: "national-tsing-hua-university", href: "/universities?province=taiwan", note: "Science and engineering", zhNote: "理工优势" },
      { name: "National Cheng Kung University", zhName: "成功大学", slug: "national-cheng-kung-university", href: "/universities?province=taiwan", note: "Engineering and medicine", zhNote: "工程与医学" }
    ]
  }
];

export const provinceShowcases: ProvinceShowcase[] = rawProvinceShowcases.map((province) => ({
  ...province,
  image: provinceImageOverrides[province.slug]?.image ?? province.image,
  imageAlt: provinceImageOverrides[province.slug]?.imageAlt ?? province.imageAlt,
  zhImageAlt: provinceImageOverrides[province.slug]?.zhImageAlt ?? province.zhImageAlt,
  imageTopic: provinceImageOverrides[province.slug]?.imageTopic ?? provinceImageContext[province.slug]?.topic ?? province.travelTitle,
  zhImageTopic: provinceImageOverrides[province.slug]?.zhImageTopic ?? provinceImageContext[province.slug]?.zhTopic ?? province.zhTravelTitle,
  imageQuery: provinceImageContext[province.slug]?.query ?? `${province.name} China travel culture`,
  imageSourceLabel: provinceImageOverrides[province.slug]?.imageSourceLabel ?? "Curated destination image",
  imageSourceUrl: provinceImageOverrides[province.slug]?.imageSourceUrl
}));

export function getProvinceShowcase(slug: string) {
  return provinceShowcases.find((province) => province.slug === slug);
}
