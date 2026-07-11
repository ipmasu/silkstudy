import type { City, Province } from "@/lib/site-data";

type Locale = "en" | "zh" | string;

const provinceZh: Record<string, { name: string; summary: string }> = {
  beijing: { name: "北京", summary: "中国首都，也是研究型大学、政策、文化和国际交流资源最密集的城市之一。" },
  shanghai: { name: "上海", summary: "全球商业城市，拥有强国际项目、便利交通和丰富职业机会。" },
  zhejiang: { name: "浙江", summary: "以杭州数字经济和创新生态为核心的科技与教育强省。" },
  jiangsu: { name: "江苏", summary: "教育资源密集，兼具历史名校、制造业集群和通往上海的便利交通。" },
  guangdong: { name: "广东", summary: "连接大湾区、深圳、香港和全球供应链的南方创新与贸易中心。" },
  hubei: { name: "湖北", summary: "中国中部重要大学中心，以工程、医学、交通和庞大学生群体闻名。" },
  shaanxi: { name: "陕西", summary: "历史文化深厚，工程、航天、电子和文化旅游资源突出。" },
  sichuan: { name: "四川", summary: "宜居的西部留学目的地，医学、工程、科技园区和美食文化突出。" },
  fujian: { name: "福建", summary: "舒适的沿海省份，生活节奏友好，并与东南亚联系紧密。" },
  tianjin: { name: "天津", summary: "靠近北京的港口城市，工程高校实力强，生活成本相对更低。" },
  shandong: { name: "山东", summary: "沿海大省，大学基础扎实，产业、儒家文化和生活成本优势明显。" },
  anhui: { name: "安徽", summary: "以合肥科研机构和创新区为核心，科技发展速度很快。" },
  heilongjiang: { name: "黑龙江", summary: "东北工程教育基地，拥有鲜明冬季文化和技术类高校优势。" },
  hunan: { name: "湖南", summary: "中部省份，学生生活活跃，传媒、制造业和高校资源持续发展。" },
  guangxi: { name: "广西", summary: "连接中国与东盟的南方门户，山水旅行、医学和语言项目具有吸引力。" },
  yunnan: { name: "云南", summary: "多民族文化、温和气候和面向东南亚的区位优势突出。" },
  liaoning: { name: "辽宁", summary: "东北沿海工业与教育基地，大连和沈阳拥有成熟的国际学生资源。" },
  jilin: { name: "吉林", summary: "东北重要教育省份，汽车、医学、语言和冰雪文化资源鲜明。" },
  gansu: { name: "甘肃", summary: "丝绸之路文化与西北科研教育资源结合，适合喜欢历史和自然景观的学生。" },
  xinjiang: { name: "新疆", summary: "中国西北门户，拥有独特民族文化、能源产业和广阔自然景观。" },
  hainan: { name: "海南", summary: "热带海岛省份，旅游、健康、语言和国际交流氛围持续提升。" },
  henan: { name: "河南", summary: "中原文化核心区，人口与产业基础深厚，医学和工程资源稳步发展。" },
  hebei: { name: "河北", summary: "环绕北京天津，连接华北产业、交通和海滨城市资源。" },
  jiangxi: { name: "江西", summary: "生活成本友好，拥有陶瓷文化、红色文化、生态旅行和医学教育资源。" },
  guizhou: { name: "贵州", summary: "山地生态、民族文化和大数据产业特色明显，生活成本较低。" },
  innermongolia: { name: "内蒙古", summary: "草原文化、能源产业和北方城市生活体验鲜明。" },
  ningxia: { name: "宁夏", summary: "西北小而精的留学目的地，生活成本低，文化体验独特。" },
  qinghai: { name: "青海", summary: "高原自然风景、民族文化和生态研究资源突出。" },
  shanxi: { name: "山西", summary: "历史建筑、能源产业和华北教育资源结合，生活成本相对友好。" },
  chongqing: { name: "重庆", summary: "山城生活、火锅文化、制造业和西部开放门户优势突出。" },
  neimenggu: { name: "内蒙古", summary: "草原文化、能源产业和北方城市生活体验鲜明。" }
};

const cityZh: Record<string, { name: string; province: string; climate: string; visaConvenience: string; summary: string }> = {
  beijing: { name: "北京", province: "北京", climate: "冬季寒冷干燥，夏季温暖", visaConvenience: "使馆、机场和大学支持资源非常完善", summary: "北京拥有中国最密集的顶尖大学和文化资源。" },
  shanghai: { name: "上海", province: "上海", climate: "湿润亚热带气候，冬季较温和", visaConvenience: "国际交通和学生服务非常便利", summary: "上海适合追求商科、金融、医学和全球职业机会的学生。" },
  hangzhou: { name: "杭州", province: "浙江", climate: "四季分明，温和湿润", visaConvenience: "大学和城市层面的支持较强", summary: "杭州把研究型大学资源与高质量学生生活结合得很好。" },
  nanjing: { name: "南京", province: "江苏", climate: "夏季炎热，冬季较冷", visaConvenience: "大学支持完善，去上海也很方便", summary: "南京是历史悠久的大学城，科研机构多，生活成本低于上海。" },
  guangzhou: { name: "广州", province: "广东", climate: "温暖湿润的亚热带气候", visaConvenience: "国际机场和领事资源便利", summary: "广州在商科、医学、贸易和大湾区职业曝光方面优势明显。" },
  wuhan: { name: "武汉", province: "湖北", climate: "夏季炎热，冬季凉爽", visaConvenience: "学生群体庞大，大学服务体系成熟", summary: "武汉是中国最大的学生城市之一，工程和医学高校实力突出。" },
  xian: { name: "西安", province: "陕西", climate: "气候偏干，夏热冬冷", visaConvenience: "大学和城市支持较好", summary: "西安结合工程教育、航天产业和深厚历史旅游资源。" },
  chengdu: { name: "成都", province: "四川", climate: "温和湿润", visaConvenience: "国际学生服务较好", summary: "成都以松弛生活方式、美食、医疗资源和成长中的科技经济闻名。" },
  xiamen: { name: "厦门", province: "福建", climate: "温暖沿海气候", visaConvenience: "沿海交通和大学服务较好", summary: "厦门是风景优美的沿海学生城市，与东南亚联系紧密。" },
  tianjin: { name: "天津", province: "天津", climate: "冬季干燥，夏季温暖", visaConvenience: "靠近北京，交通便利", summary: "天津生活成本低于北京，同时能连接华北职业网络。" },
  jinan: { name: "济南", province: "山东", climate: "四季分明，夏季较热", visaConvenience: "大学支持稳定", summary: "济南是省会城市，生活成本适中，产业和传统文化资源兼具。" },
  hefei: { name: "合肥", province: "安徽", climate: "湿润亚热带，四季分明", visaConvenience: "研究型大学支持较好", summary: "合肥在科学、量子研究、AI 和先进制造方面越来越受关注。" },
  harbin: { name: "哈尔滨", province: "黑龙江", climate: "冬季非常寒冷，夏季温和", visaConvenience: "工程类国际项目经验丰富", summary: "哈尔滨是生活成本较低的工程教育城市，冬季文化鲜明。" },
  changsha: { name: "长沙", province: "湖南", climate: "湿润亚热带气候", visaConvenience: "国际学生支持正在增长", summary: "长沙青年文化活跃，美食、制造业和传媒产业都有特色。" },
  kunming: { name: "昆明", province: "云南", climate: "四季温和的高原春城气候", visaConvenience: "面向南亚东南亚的城市服务和高校国际学生支持持续完善", summary: "昆明松弛、实惠、多元，拥有鲜花、湖泊、美食、民族文化和面向东南亚的留学路线。" }
};

const majorZh: Record<string, string> = {
  "Computer Science": "计算机科学",
  "Artificial Intelligence": "人工智能",
  Medicine: "医学",
  Engineering: "工程",
  Business: "商科",
  "Chinese Language": "汉语语言",
  Architecture: "建筑学",
  Aerospace: "航空航天",
  Physics: "物理",
  "Marine Science": "海洋科学"
};

const majorVi: Record<string, string> = {
  "Computer Science": "Khoa học máy tính",
  "Artificial Intelligence": "Trí tuệ nhân tạo",
  Medicine: "Y khoa",
  Engineering: "Kỹ thuật",
  Business: "Kinh doanh",
  "Chinese Language": "Ngôn ngữ Trung Quốc",
  Architecture: "Kiến trúc",
  Aerospace: "Hàng không vũ trụ",
  Physics: "Vật lý",
  "Marine Science": "Khoa học biển",
  "Materials Science": "Khoa học vật liệu"
};

function normalizeSlug(slug: string) {
  return slug.replaceAll("-", "");
}

export function displayMajor(major: string, locale: Locale) {
  if (locale === "zh") return majorZh[major] ?? major;
  if (locale === "vi") return majorVi[major] ?? major;
  return major;
}

export function displayProvince(province: Province, locale: Locale) {
  if (locale !== "zh") return province;
  const localized = provinceZh[province.slug] ?? provinceZh[normalizeSlug(province.slug)];
  return {
    ...province,
    name: localized?.name ?? province.name,
    summary: localized?.summary ?? province.summary,
    cities: province.cities.map((city) => cityZh[city.toLowerCase().replaceAll("'", "").replaceAll(" ", "-")]?.name ?? city),
    topMajors: province.topMajors.map((major) => displayMajor(major, locale))
  };
}

export function displayCity(city: City, locale: Locale) {
  if (locale !== "zh") return city;
  const localized = cityZh[city.slug];
  return {
    ...city,
    name: localized?.name ?? city.name,
    province: localized?.province ?? city.province,
    climate: localized?.climate ?? city.climate,
    visaConvenience: localized?.visaConvenience ?? city.visaConvenience,
    summary: localized?.summary ?? city.summary
  };
}
