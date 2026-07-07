import fs from "node:fs";

const admissionPath = "outputs/elic-undergraduate-admissions/undergraduate-admission-records.json";
const outputDir = "outputs/elic-undergraduate-admissions";
const catalogPath = "lib/catalog/international-university-directory.ts";
const siteDataPath = "lib/site-data.ts";

const zhToEnglish = {
  "安徽大学": "Anhui University",
  "安徽师范大学": "Anhui Normal University",
  "北京大学": "Peking University",
  "北京大学医学部": "Peking University",
  "北京电影学院": "Beijing Film Academy",
  "北京电影大学": "Beijing Film Academy",
  "北京工商大学": "Beijing Technology and Business University",
  "北京工业大学": "Beijing University of Technology",
  "北京航空航天大学": "Beihang University",
  "北京航空航天大学（杭州）": "Beihang University",
  "北京化工大学": "Beijing University of Chemical Technology",
  "北京交通大学": "Beijing Jiaotong University",
  "北京科技大学": "University of Science and Technology Beijing",
  "北京理工大学": "Beijing Institute of Technology",
  "北京第二外国语学院": "Beijing International Studies University",
  "北京服装学院": "Beijing Institute of Fashion Technology",
  "北京师范大学": "Beijing Normal University",
  "北京体育大学": "Beijing Sport University",
  "北京外国语大学": "Beijing Foreign Studies University",
  "北京邮电大学": "Beijing University of Posts and Telecommunications",
  "北京语言大学": "Beijing Language and Culture University",
  "北京印刷学院": "Beijing Institute of Graphic Communication",
  "北京中医药大学": "Beijing University of Chinese Medicine",
  "常州大学": "Changzhou University",
  "常州工学院": "Changzhou Institute of Technology",
  "长安大学": "Chang'an University",
  "长春理工大学春季入学": "Changchun University of Science and Technology",
  "长江大学": "Yangtze University",
  "成都理工大学": "Chengdu University of Technology",
  "重庆大学": "Chongqing University",
  "重庆交通大学": "Chongqing Jiaotong University",
  "重庆交通⼤学": "Chongqing Jiaotong University",
  "重庆邮电大学": "Chongqing University of Posts and Telecommunications",
  "大连理工大学": "Dalian University of Technology",
  "电子科技大学": "University of Electronic Science and Technology of China",
  "东北大学": "Northeastern University",
  "东北农业大学": "Northeast Agricultural University",
  "东华大学": "Donghua University",
  "东南大学": "Southeast University",
  "对外经济贸易大学": "University of International Business and Economics",
  "福建医科大学": "Fujian Medical University",
  "复旦大学": "Fudan University",
  "广东财经大学": "Guangdong University of Finance and Economics",
  "广东外语外贸大学": "Guangdong University of Foreign Studies",
  "广州医科大学": "Guangzhou Medical University",
  "贵州大学": "Guizhou University",
  "哈尔滨工程大学": "Harbin Engineering University",
  "哈尔滨工业大学": "Harbin Institute of Technology",
  "哈尔滨工业大学（深圳）": "Harbin Institute of Technology",
  "海南大学": "Hainan University",
  "杭州电子科技大学": "Hangzhou Dianzi University",
  "河北工业大学": "Hebei University of Technology",
  "河北美术学院": "Hebei Academy of Fine Arts",
  "河海大学": "Hohai University",
  "华东理工大学": "East China University of Science and Technology",
  "华东师范大学": "East China Normal University",
  "华东师范大学亚欧商学院工商管理本科 (创新创业方向）中文授课项目": "East China Normal University",
  "华东政法大学": "East China University of Political Science and Law",
  "华南理工大学": "South China University of Technology",
  "华南师范大学": "South China Normal University",
  "华侨大学": "Huaqiao University",
  "华中科技大学": "Huazhong University of Science and Technology",
  "华中师范大学": "Central China Normal University",
  "吉林大学": "Jilin University",
  "集美大学": "Jimei University",
  "暨南大学": "Jinan University",
  "江苏大学": "Jiangsu University",
  "江南大学": "Jiangnan University",
  "南京大学": "Nanjing University",
  "南京工业大学": "Nanjing Tech University",
  "南京航空航天大学": "Nanjing University of Aeronautics and Astronautics",
  "南京林业大学": "Nanjing Forestry University",
  "南京理工大学": "Nanjing University of Science and Technology",
  "南京农业大学": "Nanjing Agricultural University",
  "南京师范大学": "Nanjing Normal University",
  "南京信息工程大学": "Nanjing University of Information Science and Technology",
  "南京医科大学": "Nanjing Medical University",
  "南京艺术学院": "Nanjing University of the Arts",
  "南昌大学": "Nanchang University",
  "南方科技大学": "Southern University of Science and Technology",
  "南方医科大学": "Southern Medical University",
  "南开大学": "Nankai University",
  "宁波大学": "Ningbo University",
  "清华大学": "Tsinghua University",
  "三峡大学": "China Three Gorges University",
  "山东大学": "Shandong University",
  "陕西师范大学": "Shaanxi Normal University",
  "上海财经大学": "Shanghai University of Finance and Economics",
  "上海大学": "Shanghai University",
  "上海第二工业大学": "Shanghai Polytechnic University",
  "上海电机学院": "Shanghai Dianji University",
  "上海电力大学": "Shanghai University of Electric Power",
  "上海工程技术大学": "Shanghai University of Engineering Science",
  "上海海事大学": "Shanghai Maritime University",
  "上海交通大学": "Shanghai Jiao Tong University",
  "上海交通大学（常规批）": "Shanghai Jiao Tong University",
  "上海理工大学": "University of Shanghai for Science and Technology",
  "上海商学院": "Shanghai Business School",
  "上海师范大学": "Shanghai Normal University",
  "上海外国语大学": "Shanghai International Studies University",
  "上海音乐学院": "Shanghai Conservatory of Music",
  "上海对外经贸大学": "Shanghai University of International Business and Economics",
  "上海政法学院": "Shanghai University of Political Science and Law",
  "上海中医药大学": "Shanghai University of Traditional Chinese Medicine",
  "深圳大学": "Shenzhen University",
  "首都经济贸易大学": "Capital University of Economics and Business",
  "首都师范大学": "Capital Normal University",
  "首都医科大学": "Capital Medical University",
  "四川大学": "Sichuan University",
  "苏州大学": "Soochow University",
  "台州学院": "Taizhou University",
  "太原理工大学": "Taiyuan University of Technology",
  "天津财经大学": "Tianjin University of Finance and Economics",
  "天津城建大学": "Tianjin Chengjian University",
  "天津大学": "Tianjin University",
  "天津工业大学": "Tianjin Polytechnic University",
  "天津外国语大学": "Tianjin Foreign Studies University",
  "天津医科大学": "Tianjin Medical University",
  "同济大学": "Tongji University",
  "外交学院": "China Foreign Affairs University",
  "温州医科大学": "Wenzhou Medical University",
  "无锡学院": "Wuxi University",
  "武汉大学": "Wuhan University",
  "西安交通大学": "Xi'an Jiaotong University",
  "西安石油大学": "Xi'an Shiyou University",
  "西北大学": "Northwest University",
  "西北工业大学": "Northwestern Polytechnical University",
  "西北工业大学国际2025年西北工业大学": "Northwestern Polytechnical University",
  "西北农林科技大学": "Northwest A&F University",
  "西交利物浦大学": "Xi'an Jiaotong-Liverpool University",
  "西南财经大学": "Southwestern University of Finance and Economics",
  "西南大学": "Southwest University",
  "西南交通大学": "Southwest Jiaotong University",
  "西南石油大学": "Southwest Petroleum University",
  "西南政法大学": "Southwest University of Political Science and Law",
  "厦门大学": "Xiamen University",
  "云南大学": "Yunnan University",
  "浙江传媒学院": "Communication University of Zhejiang",
  "浙江大学": "Zhejiang University",
  "浙江大学全英授课全球传播与管理本科项目": "Zhejiang University",
  "浙江大学伊利诺伊大学厄巴纳香槟校区联合学院": "Zhejiang University",
  "浙江工商大学": "Zhejiang Gongshang University",
  "浙江工业大学": "Zhejiang University of Technology",
  "浙江科技大学": "Zhejiang University of Science and Technology",
  "浙江师范大学": "Zhejiang Normal University",
  "中南财经政法大学": "Zhongnan University of Economics and Law",
  "中南大学": "Central South University",
  "中国传媒大学": "Communication University of China",
  "中国地质大学（武汉）": "China University of Geosciences Wuhan",
  "中国海洋大学": "Ocean University of China",
  "中国计量大学": "China Jiliang University",
  "中国科学技术大学": "University of Science and Technology of China",
  "中国矿业大学": "China University of Mining and Technology",
  "中国美术学院": "China Academy of Art",
  "中国民航大学": "Civil Aviation University of China",
  "中国民用航空飞行学院": "Civil Aviation Flight University of China",
  "中国农业大学": "China Agricultural University",
  "中国人民大学": "Renmin University of China",
  "中国石油大学（华东）": "China University of Petroleum Huadong",
  "中国药科大学": "China Pharmaceutical University",
  "中国医科大学": "China Medical University",
  "中国音乐学院": "China Conservatory of Music",
  "中国政法大学": "China University of Political Science and Law",
  "中国政法大学外国学生": "China University of Political Science and Law",
  "中央财经大学": "Central University of Finance and Economics",
  "中央美术学院": "Central Academy of Fine Arts",
  "中央民族大学": "Minzu University of China",
  "北京大学（校本部）": "Peking University",
  "合肥工业大学": "Hefei University of Technology",
  "鲁迅美术学院": "Lu Xun Academy of Fine Arts",
  "扬州大学": "Yangzhou University",
  "中山大学": "Sun Yat-sen University"
};

const normalizeZh = (value) =>
  (value ?? "")
    .replace(/\u2f24/g, "大")
    .replace(/[（]/g, "（")
    .trim();

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const admissions = JSON.parse(fs.readFileSync(admissionPath, "utf8"));
const siteData = fs.readFileSync(siteDataPath, "utf8");
const catalogText = fs.readFileSync(catalogPath, "utf8");

const universitiesStart = siteData.indexOf("export const universities: University[] = [");
const universitiesEnd = siteData.indexOf("export function getProvince", universitiesStart);
const universitiesSection =
  universitiesStart >= 0 && universitiesEnd > universitiesStart
    ? siteData.slice(universitiesStart, universitiesEnd)
    : "";
const staticMatches = [
  ...universitiesSection.matchAll(/slug:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?chineseName:\s*"([^"]+)"/g)
];
const byChineseName = new Map(staticMatches.map((match) => [normalizeZh(match[3]), { slug: match[1], name: match[2] }]));

const catalogNamesMatch = catalogText.match(/export const cscInternationalUniversityNames = \[([\s\S]*?)\] as const;/);
const catalogNames = catalogNamesMatch
  ? [...catalogNamesMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1])
  : [];
const catalogSlugs = new Map(catalogNames.map((name) => [name, slugify(name)]));

const bySchool = new Map();
for (const record of admissions) {
  const school = normalizeZh(record.schoolZh);
  if (!school) continue;
  const existing = bySchool.get(school);
  if (!existing || record.date > existing.date) bySchool.set(school, record);
}

const matched = [];
const unmatched = [];
for (const [school, record] of bySchool) {
  const staticHit = byChineseName.get(school);
  const aliasName = zhToEnglish[school];
  const catalogSlug = aliasName ? catalogSlugs.get(aliasName) ?? slugify(aliasName) : null;

  if (staticHit) {
    matched.push({ ...record, schoolZh: school, name: staticHit.name, slug: staticHit.slug, matchType: "static-chineseName" });
  } else if (aliasName && catalogSlug) {
    matched.push({ ...record, schoolZh: school, name: aliasName, slug: catalogSlug, matchType: catalogSlugs.has(aliasName) ? "catalog-alias" : "alias-new-slug" });
  } else {
    unmatched.push({ ...record, schoolZh: school });
  }
}

matched.sort((a, b) => a.slug.localeCompare(b.slug));
unmatched.sort((a, b) => a.schoolZh.localeCompare(b.schoolZh, "zh-Hans-CN"));

fs.writeFileSync(`${outputDir}/matched-all.json`, JSON.stringify(matched, null, 2), "utf8");
fs.writeFileSync(`${outputDir}/unmatched-after-aliases.json`, JSON.stringify(unmatched, null, 2), "utf8");

let report = "# ELIC undergraduate admission alias matching\n\n";
report += `- Deduped schools: ${bySchool.size}\n`;
report += `- Matched after aliases: ${matched.length}\n`;
report += `- Remaining unmatched: ${unmatched.length}\n\n`;
report += "## Matched\n\n| School | English name | Slug | Type | Date | Title |\n| --- | --- | --- | --- | --- | --- |\n";
for (const item of matched) {
  report += `| ${item.schoolZh} | ${item.name} | ${item.slug} | ${item.matchType} | ${item.date} | ${item.title} |\n`;
}
report += "\n## Remaining Unmatched\n\n| School | Date | Title | Link |\n| --- | --- | --- | --- |\n";
for (const item of unmatched) {
  report += `| ${item.schoolZh} | ${item.date} | ${item.title} | ${item.link} |\n`;
}
fs.writeFileSync(`${outputDir}/alias-matching-report.md`, report, "utf8");

console.log(JSON.stringify({ dedupedSchools: bySchool.size, matched: matched.length, unmatched: unmatched.length }, null, 2));
