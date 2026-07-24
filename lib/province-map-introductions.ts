import { getProvinceShowcase } from "@/lib/province-showcase";

export type ProvinceMapIntroduction = {
  climate: string;
  food: string;
  culture: string;
  scenery: string;
  studentFit: string;
  zhClimate: string;
  zhFood: string;
  zhCulture: string;
  zhScenery: string;
  zhStudentFit: string;
};

export type ProvinceMapDisplay = {
  zhName: string;
  zhRegion: string;
};

export const provinceMapDisplay: Record<string, ProvinceMapDisplay> = {
  heilongjiang: { zhName: "黑龙江", zhRegion: "东北" },
  jilin: { zhName: "吉林", zhRegion: "东北" },
  liaoning: { zhName: "辽宁", zhRegion: "东北" },
  beijing: { zhName: "北京", zhRegion: "华北" },
  tianjin: { zhName: "天津", zhRegion: "华北" },
  hebei: { zhName: "河北", zhRegion: "华北" },
  shandong: { zhName: "山东", zhRegion: "华东" },
  shanxi: { zhName: "山西", zhRegion: "华北" },
  "inner-mongolia": { zhName: "内蒙古", zhRegion: "华北 / 北疆" },
  jiangsu: { zhName: "江苏", zhRegion: "华东" },
  shanghai: { zhName: "上海", zhRegion: "华东" },
  zhejiang: { zhName: "浙江", zhRegion: "华东" },
  anhui: { zhName: "安徽", zhRegion: "华东" },
  hubei: { zhName: "湖北", zhRegion: "华中" },
  hunan: { zhName: "湖南", zhRegion: "华中" },
  henan: { zhName: "河南", zhRegion: "华中" },
  jiangxi: { zhName: "江西", zhRegion: "华东" },
  fujian: { zhName: "福建", zhRegion: "华东 / 东南沿海" },
  guangdong: { zhName: "广东", zhRegion: "华南" },
  guangxi: { zhName: "广西", zhRegion: "华南 / 东盟门户" },
  hainan: { zhName: "海南", zhRegion: "华南海岛" },
  sichuan: { zhName: "四川", zhRegion: "西南" },
  chongqing: { zhName: "重庆", zhRegion: "西南" },
  guizhou: { zhName: "贵州", zhRegion: "西南" },
  yunnan: { zhName: "云南", zhRegion: "西南" },
  shaanxi: { zhName: "陕西", zhRegion: "西北" },
  gansu: { zhName: "甘肃", zhRegion: "西北 / 丝路" },
  ningxia: { zhName: "宁夏", zhRegion: "西北" },
  xizang: { zhName: "西藏", zhRegion: "青藏高原" },
  qinghai: { zhName: "青海", zhRegion: "青藏高原" },
  xinjiang: { zhName: "新疆", zhRegion: "西北 / 丝路" },
  "hong-kong": { zhName: "香港", zhRegion: "粤港澳大湾区" },
  macao: { zhName: "澳门", zhRegion: "粤港澳大湾区" },
  taiwan: { zhName: "台湾", zhRegion: "海岛区域" }
};

const intro = (
  zhClimate: string,
  zhFood: string,
  zhCulture: string,
  zhScenery: string,
  zhStudentFit: string,
  climate: string,
  food: string,
  culture: string,
  scenery: string,
  studentFit: string
): ProvinceMapIntroduction => ({
  climate,
  food,
  culture,
  scenery,
  studentFit,
  zhClimate,
  zhFood,
  zhCulture,
  zhScenery,
  zhStudentFit
});

export const provinceMapIntroductions: Record<string, ProvinceMapIntroduction> = {
  heilongjiang: intro(
    "冬季漫长、冰雪厚重，夏天凉爽开阔，是理解中国北方气候差异最直观的地方。",
    "锅包肉、红肠、炖菜、俄式面包和东北烧烤很有代表性，分量足，味道直接热烈。",
    "哈尔滨的欧式街区、冰雪节和老工业记忆，让这里既有边疆气质，也有工程教育传统。",
    "中央大街、松花江、雪乡、五大连池和扎龙湿地，适合冬季摄影和自然观察。",
    "适合喜欢冰雪、工程、医学、林业生态和低生活成本的学生。",
    "Long winters, deep snow, and cool summers make Heilongjiang the clearest gateway to China's far north.",
    "Guobaorou, Harbin sausage, stews, Russian-style bread, and generous barbecue shape its hearty food culture.",
    "European streets, the Ice Festival, and old industrial memory give it a strong frontier and engineering identity.",
    "Central Street, the Songhua River, Snow Town, Wudalianchi, and Zhalong wetland reward winter and nature lovers.",
    "Best for students who like snow, engineering, medicine, forestry, ecology, and lower living costs."
  ),
  jilin: intro(
    "四季分明，冬天有雾凇与雪原，夏秋清爽，长白山区域更有高山气候。",
    "延边冷面、朝鲜族烤肉、锅包肉和东北家常菜，让留学生能感到浓厚的边疆风味。",
    "长春有汽车工业与电影记忆，延边则呈现多民族语言文化，是学习东北与边境文化的窗口。",
    "长白山天池、吉林雾凇岛、伪满皇宫博物院和延边风情线路都很有辨识度。",
    "适合学习汽车、医学、师范、语言和区域文化的学生。",
    "Jilin has clear seasons, snowy winters, cool summers, and mountain weather around Changbai Mountain.",
    "Yanbian cold noodles, Korean-style barbecue, guobaorou, and northeastern home cooking define the table.",
    "Changchun carries automobile and film history, while Yanbian opens a window onto multilingual border culture.",
    "Changbai Mountain, Rime Island, Changchun history sites, and Yanbian routes are distinctive.",
    "Good for automotive, medicine, teacher education, language, and regional culture students."
  ),
  liaoning: intro(
    "沿海与内陆并存，冬季比南方冷但海风带来开放感，夏季适合去大连海边。",
    "海鲜、烧烤、饺子、鸡架和东北菜共同构成辽宁的学生日常。",
    "沈阳有清代早期历史和重工业底色，大连则带来海港城市、物流与国际化气息。",
    "沈阳故宫、大连海岸、旅顺口、本溪水洞和丹东鸭绿江都适合周末探索。",
    "适合工科、自动化、材料、海事物流、医学和想体验海港城市的学生。",
    "Liaoning blends coast and inland, with cold winters, open sea air, and pleasant Dalian summers.",
    "Seafood, barbecue, dumplings, chicken racks, and northeastern dishes shape everyday student meals.",
    "Shenyang carries early Qing history and heavy industry, while Dalian adds port, logistics, and global flavor.",
    "Shenyang Palace, Dalian coast, Lushunkou, Benxi caves, and the Yalu River are strong weekend routes.",
    "Strong for engineering, automation, materials, maritime logistics, medicine, and coastal life."
  ),
  beijing: intro(
    "四季分明，春秋最舒服，冬天干冷、夏天炎热，是典型北方大城市气候。",
    "烤鸭、炸酱面、涮羊肉、豆汁和胡同小吃，让学生从餐桌理解老北京。",
    "北京把帝都历史、国家级博物馆、国际组织、科技产业和高校资源压缩在一座城市里。",
    "故宫、长城、颐和园、胡同、国家博物馆和各类演出空间，几乎每周都有新内容。",
    "适合想要顶尖高校、中文环境、实习机会、国际视野和深度文化资源的学生。",
    "Beijing has four clear seasons: dry cold winters, hot summers, and especially pleasant spring and autumn.",
    "Roast duck, zhajiang noodles, hotpot lamb, douzhi, and hutong snacks explain old Beijing through food.",
    "Imperial history, national museums, global institutions, tech industries, and elite universities meet here.",
    "The Forbidden City, Great Wall, Summer Palace, hutongs, museums, and performance spaces never run out.",
    "Ideal for elite universities, Mandarin immersion, internships, global exposure, and deep culture."
  ),
  tianjin: intro(
    "海河平原城市，气候接近北京但更有海港湿度，春秋适合散步看建筑。",
    "煎饼果子、狗不理包子、耳朵眼炸糕、锅巴菜和海河边小吃很有津味。",
    "天津有万国建筑、曲艺相声、近代工商业和港口文化，节奏比北京松弛。",
    "五大道、意式风情区、海河夜景、天津之眼和滨海新区构成城市层次。",
    "适合工程、建筑、医学、经济管理，以及想靠近北京又希望生活成本更温和的学生。",
    "Tianjin sits on the Haihe plain, close to Beijing's climate but with more port-city humidity.",
    "Jianbing, baozi, fried cakes, guobacai, and riverside snacks give it a distinct local taste.",
    "Foreign-style architecture, cross-talk comedy, modern commerce, and port culture make Tianjin relaxed but rich.",
    "Five Great Avenues, the Italian Style Area, Haihe night views, the Eye, and Binhai show many layers.",
    "Good for engineering, architecture, medicine, management, and students who want Beijing access at gentler cost."
  ),
  hebei: intro(
    "环绕北京天津，北部山地凉爽，南部平原四季分明，沿海秦皇岛夏季很受欢迎。",
    "驴肉火烧、棋子烧饼、白洋淀鱼虾、坝上羊肉和各地面食都很接地气。",
    "河北承接燕赵文化、长城文化、皇家避暑文化和近代工业，是理解华北的重要拼图。",
    "承德避暑山庄、山海关、北戴河、白洋淀、正定古城和坝上草原都值得看。",
    "适合医学、工程、材料、农业、师范和想在京津冀区域学习生活的学生。",
    "Hebei surrounds Beijing and Tianjin, with cool northern mountains, clear-season plains, and summer coastlines.",
    "Donkey burger, sesame cakes, Baiyangdian fish, Bashang lamb, and noodles keep the food grounded.",
    "Yan-Zhao culture, Great Wall routes, imperial summer history, and modern industry define North China here.",
    "Chengde, Shanhaiguan, Beidaihe, Baiyangdian, Zhengding, and Bashang grassland are strong highlights.",
    "Good for medicine, engineering, materials, agriculture, education, and the Beijing-Tianjin-Hebei region."
  ),
  shandong: intro(
    "半岛与平原结合，沿海城市湿润清爽，内陆四季分明，是北方里很适合生活的省份。",
    "鲁菜讲究火候和鲜味，葱烧海参、煎饼卷大葱、把子肉、青岛海鲜和啤酒都很有代表性。",
    "孔孟之乡让山东自带儒家文化底色，同时青岛、烟台、威海又体现海洋与近代开放。",
    "泰山、曲阜三孔、青岛海岸、崂山、趵突泉和蓬莱阁构成山海人文线。",
    "适合医学、海洋科学、能源、工程、中文和想要稳健生活环境的学生。",
    "Shandong combines peninsula and plains, with breezy coastal cities and clear inland seasons.",
    "Shandong cuisine values technique and freshness: seafood, pancakes, braised dishes, Qingdao beer, and more.",
    "The home of Confucius and Mencius also carries coastal modernity in Qingdao, Yantai, and Weihai.",
    "Mount Tai, Qufu, Qingdao coast, Laoshan, Baotu Spring, and Penglai form a strong route.",
    "Good for medicine, marine science, energy, engineering, Chinese studies, and stable daily life."
  ),
  shanxi: intro(
    "黄土高原气候，昼夜温差明显，冬季干冷，夏季比很多平原城市更爽利。",
    "刀削面、莜面、过油肉、醋文化和各种面食，是山西最容易打动学生的日常。",
    "山西是中国古建筑密度极高的省份，晋商文化、佛教石窟和大院建筑都很厚重。",
    "平遥古城、云冈石窟、五台山、晋祠、壶口瀑布和王家大院适合深度旅行。",
    "适合历史建筑、能源、工程、医学和喜欢低成本慢节奏城市的学生。",
    "Shanxi has loess plateau weather, dry cold winters, and noticeable day-night temperature differences.",
    "Knife-cut noodles, oat noodles, pork dishes, vinegar culture, and endless noodles define local life.",
    "It has one of China's richest concentrations of ancient architecture, merchant culture, grottoes, and courtyards.",
    "Pingyao, Yungang, Wutai Mountain, Jinci, Hukou Waterfall, and old courtyards reward slow travel.",
    "Good for architecture history, energy, engineering, medicine, and lower-cost living."
  ),
  "inner-mongolia": intro(
    "地域跨度很大，草原、沙漠、森林和城市气候差异明显，昼夜温差常常很强。",
    "手把肉、奶茶、奶皮子、烤羊腿、莜面和蒙餐火锅让学生感到草原文化的豪爽。",
    "蒙古族文化、草原游牧记忆、边境贸易和生态保护，是这里最独特的学习背景。",
    "呼伦贝尔草原、响沙湾、额济纳胡杨林、阿尔山和大兴安岭都很有冲击力。",
    "适合生态、农业、能源、语言教育、民族文化和喜欢开阔自然的学生。",
    "Inner Mongolia spans grassland, desert, forest, and cities, with big climate differences and strong day-night shifts.",
    "Lamb, milk tea, dairy snacks, roasted legs, oat noodles, and Mongolian hotpot make meals generous.",
    "Mongolian culture, nomadic memory, border trade, and ecology form its special learning context.",
    "Hulunbuir, Xiangshawan, Ejina poplar forests, Arxan, and the Greater Khingan range are striking.",
    "Good for ecology, agriculture, energy, education, ethnic culture, and wide-open landscapes."
  ),
  jiangsu: intro(
    "长江与太湖水网密集，气候湿润，春秋温和，夏季偏热但城市生活便利。",
    "苏式汤面、盐水鸭、淮扬菜、小笼包、阳澄湖蟹和街头糕点体现江南精致。",
    "南京有六朝与民国记忆，苏州有园林与工艺，江苏整体兼具制造业、科教和江南审美。",
    "苏州园林、南京夫子庙、扬州瘦西湖、无锡太湖和连云港海滨都容易串联。",
    "适合工科、建筑、医学、商科、中文和希望靠近上海经济圈的学生。",
    "Jiangsu is humid and water-rich, with mild spring and autumn, hot summers, and convenient cities.",
    "Suzhou noodles, salted duck, Huaiyang cuisine, soup dumplings, crabs, and pastries show refined Jiangnan taste.",
    "Nanjing history, Suzhou gardens, craft traditions, manufacturing, science, and education sit together.",
    "Suzhou gardens, Nanjing, Yangzhou, Taihu, Wuxi, and Lianyungang create easy travel loops.",
    "Good for engineering, architecture, medicine, business, Chinese, and access to the Shanghai region."
  ),
  shanghai: intro(
    "海派城市气候湿润，冬天阴冷、夏天闷热，但公共交通和城市服务非常成熟。",
    "本帮菜偏甜鲜，小笼包、生煎、红烧肉、葱油拌面和国际餐饮都很容易找到。",
    "上海把近代都市、金融贸易、设计时尚、艺术展览和国际社区浓缩在高密度城市里。",
    "外滩、武康路、浦江两岸、各类美术馆、迪士尼和周边水乡都能丰富学生生活。",
    "适合商科、金融、设计、医学、工程、国际传播和想要强实习机会的学生。",
    "Shanghai is humid, with chilly damp winters and hot muggy summers, balanced by mature urban services.",
    "Local cuisine is sweet-savory, from xiaolongbao and shengjian to noodles, braised pork, and global food.",
    "Modern urban history, finance, trade, design, art, and international communities are densely packed here.",
    "The Bund, Wukang Road, Huangpu River, museums, Disney, and nearby water towns enrich life.",
    "Good for business, finance, design, medicine, engineering, media, and strong internship access."
  ),
  zhejiang: intro(
    "江南湿润温和，沿海、山地和湖泊气候层次丰富，杭州春秋尤其舒服。",
    "西湖醋鱼、龙井茶、片儿川、宁波海鲜、温州小吃和绍兴黄酒体现细腻口味。",
    "浙江既有宋韵、书院、茶文化和水乡，也有互联网经济、民营商业和数字产业。",
    "西湖、良渚、乌镇、西塘、普陀山、千岛湖和雁荡山让周末选择非常多。",
    "适合互联网、商科、设计、医学、中文、茶文化和喜欢高质量城市生活的学生。",
    "Zhejiang is humid and mild, with coast, mountains, lakes, and especially pleasant Hangzhou seasons.",
    "West Lake fish, Longjing tea, Hangzhou noodles, Ningbo seafood, Wenzhou snacks, and Shaoxing wine shape its palate.",
    "Song culture, academies, tea, water towns, private business, and digital industry meet here.",
    "West Lake, Liangzhu, Wuzhen, Xitang, Putuo, Qiandao Lake, and Yandang Mountain are easy escapes.",
    "Good for internet industry, business, design, medicine, Chinese, tea culture, and polished city life."
  ),
  anhui: intro(
    "南北差异明显，皖南多山湿润，皖北更接近华北平原，四季层次清楚。",
    "徽菜讲究火腿、笋、臭鳜鱼、毛豆腐和山野味，味道比想象中更有记忆点。",
    "徽州文化、宗族村落、徽派建筑和科教城市合肥，让安徽既古典又有科研气质。",
    "黄山、宏村、西递、九华山、天柱山和合肥科技馆线索非常清晰。",
    "适合理科、AI、工程、材料、传统建筑和想用较低成本接近长三角的学生。",
    "Anhui varies sharply: humid southern mountains and northern plains, with clear seasonal layers.",
    "Huizhou cuisine features ham, bamboo shoots, stinky mandarin fish, tofu, and mountain flavors.",
    "Huizhou culture, clan villages, architecture, and Hefei's research identity make it both classical and scientific.",
    "Huangshan, Hongcun, Xidi, Jiuhua Mountain, Tianzhu Mountain, and Hefei science routes are clear.",
    "Good for science, AI, engineering, materials, heritage architecture, and lower-cost Yangtze Delta access."
  ),
  hubei: intro(
    "江汉平原与湖泊密集，夏季炎热，春秋舒服，武汉的江湖气质很鲜明。",
    "热干面、豆皮、武昌鱼、藕汤、小龙虾和早餐文化让学生很快融入本地节奏。",
    "湖北是楚文化核心区域，武汉又是中部高铁枢纽和高校重镇，传统与现代都很强。",
    "东湖、黄鹤楼、湖北省博物馆、武当山、神农架和三峡线路都值得探索。",
    "适合医学、工程、材料、交通、中文和想从中部高铁探索中国的学生。",
    "Hubei is lake-rich and hot in summer, with pleasant shoulder seasons and Wuhan's river-lake personality.",
    "Hot dry noodles, doupi, Wuchang fish, lotus root soup, crayfish, and breakfast culture pull students in.",
    "Chu culture, Wuhan's rail hub role, and major universities make tradition and modernity strong.",
    "East Lake, Yellow Crane Tower, Hubei Museum, Wudang Mountain, Shennongjia, and Three Gorges routes stand out.",
    "Good for medicine, engineering, materials, transport, Chinese, and exploring China by central rail."
  ),
  hunan: intro(
    "湘江流域湿润，夏天热烈，冬天湿冷，山地与城市之间切换很快。",
    "湘菜香辣鲜明，臭豆腐、口味虾、剁椒鱼头、糖油粑粑和夜市小吃很容易让人上瘾。",
    "湖湘文化有书院、革命记忆、媒体娱乐和年轻夜生活，长沙尤其适合国际学生进入中国日常。",
    "岳麓山、橘子洲、湖南博物院、张家界、凤凰古城和韶山构成山水人文线。",
    "适合医学、工程、媒体艺术、中文、美食夜生活和预算友好型留学。",
    "Hunan is humid, hot in summer, damp-cold in winter, and quick to switch between city and mountains.",
    "Spicy Hunan food, stinky tofu, crayfish, chopped chili fish head, sweets, and night markets are addictive.",
    "Academies, revolutionary memory, media culture, and youth nightlife make Changsha especially approachable.",
    "Yuelu Mountain, Orange Isle, Hunan Museum, Zhangjiajie, Fenghuang, and Shaoshan create a vivid route.",
    "Good for medicine, engineering, media arts, Chinese, food, nightlife, and budget-friendly study."
  ),
  henan: intro(
    "中原腹地四季分明，夏热冬冷，平原城市生活节奏朴实直接。",
    "胡辣汤、烩面、水席、道口烧鸡和各类面食，是理解中原烟火气的入口。",
    "河南是中华文明核心区域之一，洛阳、开封、安阳、郑州把古都、文字和商都记忆串起来。",
    "龙门石窟、少林寺、殷墟、清明上河园、云台山和老君山都很有代表性。",
    "适合中文、历史、考古、医学、工程、食品科学和想了解中国文明源头的学生。",
    "Henan has clear central plains seasons, hot summers, cold winters, and straightforward city life.",
    "Hulatang, stewed noodles, Luoyang water banquet, roast chicken, and wheat foods define the table.",
    "A core cradle of Chinese civilization, Henan links ancient capitals, characters, commerce, and archaeology.",
    "Longmen Grottoes, Shaolin Temple, Yinxu, Kaifeng, Yuntai Mountain, and Laojun Mountain stand out.",
    "Good for Chinese, history, archaeology, medicine, engineering, food science, and civilization origins."
  ),
  jiangxi: intro(
    "丘陵、湖泊和江河交织，气候湿润，夏季较热，山地避暑资源丰富。",
    "瓦罐汤、南昌拌粉、赣菜辣味、米粉和鄱阳湖水产构成朴素但有冲击力的味道。",
    "江西有陶瓷、书院、革命记忆和山水隐逸传统，景德镇尤其适合艺术与设计学生。",
    "庐山、景德镇、滕王阁、婺源、三清山和井冈山都适合做文化旅行。",
    "适合陶瓷艺术、财经、工程、中文、生态和喜欢山水慢旅行的学生。",
    "Jiangxi is humid, hilly, lake-rich, hot in summer, and full of mountain retreats.",
    "Clay-pot soup, Nanchang rice noodles, spicy Gan cuisine, rice flour dishes, and Poyang Lake fish are memorable.",
    "Ceramics, academies, revolutionary memory, and landscape retreat culture define the province.",
    "Lushan, Jingdezhen, Tengwang Pavilion, Wuyuan, Sanqing Mountain, and Jinggangshan are key routes.",
    "Good for ceramic art, finance, engineering, Chinese, ecology, and slower landscape travel."
  ),
  fujian: intro(
    "山海相接，沿海湿润温暖，台风季需要注意，但一年中有很多舒适的海风天气。",
    "佛跳墙、沙茶面、鱼丸、土笋冻、福州小吃和闽南茶点体现山海混合口味。",
    "福建有海丝文化、侨乡传统、闽南语、客家土楼和茶文化，是理解中国对外交流的重要窗口。",
    "鼓浪屿、武夷山、福建土楼、三坊七巷、平潭海岛和泉州古城都很有吸引力。",
    "适合海洋、商科、医学、茶文化、建筑遗产和想靠近东南亚交流圈的学生。",
    "Fujian is warm, humid, mountainous and coastal, with sea breezes and typhoon seasons to note.",
    "Buddha Jumps Over the Wall, satay noodles, fish balls, Fuzhou snacks, and Minnan tea foods mix mountain and sea.",
    "Maritime Silk Road culture, overseas Chinese heritage, Minnan language, Hakka tulou, and tea are central.",
    "Gulangyu, Wuyi Mountain, Fujian Tulou, Fuzhou lanes, Pingtan, and Quanzhou are powerful draws.",
    "Good for ocean studies, business, medicine, tea culture, heritage architecture, and Southeast Asia links."
  ),
  guangdong: intro(
    "亚热带沿海气候，夏季长而湿热，冬天温和，湾区城市节奏快、机会多。",
    "早茶、烧腊、肠粉、潮汕牛肉火锅、海鲜和糖水，是广东最有国际吸引力的生活方式。",
    "广东是岭南文化、千年商贸、改革开放和大湾区创新的交汇点，外向度很高。",
    "广州塔、珠江夜景、深圳湾、潮汕古城、丹霞山、开平碉楼和海岛线路很丰富。",
    "适合商科、医学、电子信息、设计、国际贸易、创业和喜欢多元城市的学生。",
    "Guangdong is subtropical, humid, long-summered, mild in winter, and full of fast Greater Bay Area opportunity.",
    "Dim sum, roast meats, rice rolls, Chaoshan beef hotpot, seafood, and desserts are globally appealing.",
    "Lingnan culture, old trade, reform-era energy, and Bay Area innovation make it outward-looking.",
    "Canton Tower, Pearl River nights, Shenzhen Bay, Chaoshan, Danxia Mountain, Kaiping, and islands offer variety.",
    "Good for business, medicine, electronics, design, trade, startups, and diverse city life."
  ),
  guangxi: intro(
    "南方湿润温暖，喀斯特山水明显，南宁四季绿意足，桂林山水季节变化很美。",
    "老友粉、螺蛳粉、桂林米粉、啤酒鱼、酸嘢和东盟风味让这里非常适合东南亚学生。",
    "壮族文化、边境交流、中国-东盟合作和山水诗意，是广西最鲜明的身份。",
    "桂林漓江、阳朔西街、德天瀑布、北海银滩、龙脊梯田和南宁青秀山都很适合打卡。",
    "适合医学、东盟交流、电子工程、中文、旅游管理和喜欢自然山水的学生。",
    "Guangxi is warm, humid, green, and defined by karst landscapes from Nanning to Guilin.",
    "Luosifen, Guilin rice noodles, laoyou noodles, beer fish, sour snacks, and ASEAN flavors feel familiar to Southeast Asian students.",
    "Zhuang culture, border exchange, China-ASEAN cooperation, and poetic landscapes define the region.",
    "Li River, Yangshuo, Detian Waterfall, Beihai, Longji terraces, and Qingxiu Mountain are photogenic.",
    "Good for medicine, ASEAN exchange, electronics, Chinese, tourism, and nature-loving students."
  ),
  hainan: intro(
    "热带海岛气候，全年温暖，夏季湿热，冬天是中国最舒服的避寒目的地之一。",
    "海南粉、文昌鸡、清补凉、椰子鸡、海鲜和热带水果非常适合年轻人社交。",
    "海南有海洋文化、黎苗文化、自由贸易港建设和国际旅游岛定位，开放感很强。",
    "三亚海湾、蜈支洲岛、万宁冲浪、海口骑楼、热带雨林和环岛旅行都很吸引人。",
    "适合旅游管理、海洋科学、热带农业、中文和想要轻松海岛生活的学生。",
    "Hainan is tropical, warm year-round, humid in summer, and one of China's best winter escapes.",
    "Hainan noodles, Wenchang chicken, coconut desserts, coconut chicken, seafood, and tropical fruits are social foods.",
    "Marine culture, Li and Miao heritage, free trade port development, and international tourism define it.",
    "Sanya bays, Wuzhizhou, Wanning surfing, Haikou arcades, rainforests, and island road trips are highlights.",
    "Good for tourism, ocean science, tropical agriculture, Chinese, and relaxed island life."
  ),
  sichuan: intro(
    "盆地湿润，成都冬天阴冷但少极端，川西高原则有完全不同的雪山气候。",
    "火锅、串串、担担面、回锅肉、兔头、茶馆小吃和川菜体系让留学生很难不爱。",
    "四川有巴蜀文化、茶馆生活、熊猫名片、三国记忆和西部科技教育中心的双重身份。",
    "都江堰、青城山、乐山大佛、峨眉山、九寨沟、川西雪山和成都街巷都值得慢慢看。",
    "适合医学、电子信息、交通工程、中文、休闲生活和想探索中国西部的学生。",
    "Sichuan's basin is humid and mild, while western Sichuan brings dramatic snowy plateau climates.",
    "Hotpot, skewers, dan dan noodles, twice-cooked pork, rabbit, tea-house snacks, and Sichuan cuisine are magnetic.",
    "Bashu culture, teahouses, pandas, Three Kingdoms memory, and western China's education-tech role meet here.",
    "Dujiangyan, Qingcheng, Leshan, Emei, Jiuzhaigou, western mountains, and Chengdu alleys reward slow travel.",
    "Good for medicine, electronics, transport engineering, Chinese, relaxed life, and exploring western China."
  ),
  chongqing: intro(
    "山城湿润多雾，夏季炎热，冬天阴冷，城市高差和江风让生活很有戏剧性。",
    "火锅、小面、江湖菜、烤鱼、冰粉和夜宵文化，是重庆最强的社交语言。",
    "码头文化、抗战记忆、山城建筑、轨道交通穿楼和年轻夜生活构成重庆的独特性。",
    "洪崖洞、解放碑、磁器口、长江索道、武隆喀斯特、大足石刻和两江夜景都很有画面感。",
    "适合建筑、工程、医学、中文、城市影像和喜欢强烈城市性格的学生。",
    "Chongqing is humid, foggy, hot in summer, chilly in winter, and dramatic because of hills and rivers.",
    "Hotpot, small noodles, river cuisine, grilled fish, ice jelly, and late-night eating are social languages.",
    "Dock culture, wartime memory, hillside architecture, rail-through-buildings, and nightlife make it unique.",
    "Hongya Cave, Jiefangbei, Ciqikou, Yangtze cableway, Wulong, Dazu, and river nights are cinematic.",
    "Good for architecture, engineering, medicine, Chinese, urban media, and bold city personalities."
  ),
  guizhou: intro(
    "高原湿润凉爽，夏天非常舒服，山地、峡谷和云雾让气候有层次。",
    "酸汤鱼、丝娃娃、肠旺面、折耳根、糯米饭和苗侗风味很有辨识度。",
    "贵州有多民族村寨、非遗银饰蜡染、山地生态和大数据产业，是传统与科技并存的地方。",
    "黄果树瀑布、荔波小七孔、西江千户苗寨、梵净山、青岩古镇和中国天眼都很特别。",
    "适合大数据、生态、民族文化、旅游管理、中文和喜欢凉爽山地生活的学生。",
    "Guizhou is a cool, humid plateau province with mountains, valleys, clouds, and comfortable summers.",
    "Sour fish soup, siwawa, noodles, houttuynia, sticky rice, and Miao-Dong flavors are distinctive.",
    "Ethnic villages, silverwork, batik, mountain ecology, and big data industry coexist here.",
    "Huangguoshu, Libo, Xijiang Miao Village, Fanjing Mountain, Qingyan, and FAST are special.",
    "Good for big data, ecology, ethnic culture, tourism, Chinese, and cool mountain living."
  ),
  yunnan: intro(
    "立体气候非常明显，昆明四季如春，滇西北高原清凉，南部热带感强。",
    "过桥米线、鲜花饼、野生菌、傣味烧烤、汽锅鸡和普洱茶构成多民族餐桌。",
    "云南是中国民族多样性最直观的省份之一，也是连接南亚、东南亚的重要文化走廊。",
    "滇池、大理、丽江、香格里拉、西双版纳、元阳梯田和梅里雪山都非常适合国际学生。",
    "适合中文、民族文化、生态、旅游管理、医学和喜欢慢生活与自然的人。",
    "Yunnan has dramatic vertical climates: spring-like Kunming, cool northwest plateaus, and tropical south.",
    "Crossing-the-bridge noodles, flower cakes, mushrooms, Dai barbecue, steam-pot chicken, and Pu'er tea show diversity.",
    "It is one of China's clearest windows onto ethnic diversity and links with South and Southeast Asia.",
    "Dianchi, Dali, Lijiang, Shangri-La, Xishuangbanna, Yuanyang, and Meili Snow Mountain are unforgettable.",
    "Good for Chinese, ethnic culture, ecology, tourism, medicine, slow life, and nature."
  ),
  shaanxi: intro(
    "关中平原四季分明，冬冷夏热，陕北黄土高原则更干燥粗犷。",
    "肉夹馍、凉皮、羊肉泡馍、臊子面、biangbiang 面和夜市碳水让学生很有幸福感。",
    "陕西是周秦汉唐的重要舞台，也是丝绸之路起点，历史厚度极强。",
    "兵马俑、西安城墙、大唐不夜城、华山、陕历博、法门寺和延安线路很完整。",
    "适合工程、电子信息、航天、医学、中文、历史和想读懂古代中国的学生。",
    "Shaanxi has clear Guanzhong seasons, hot summers, cold winters, and drier northern loess landscapes.",
    "Roujiamo, liangpi, lamb soup, saozi noodles, biangbiang noodles, and night-market carbs bring joy.",
    "Zhou, Qin, Han, Tang history and the Silk Road beginning give it immense depth.",
    "Terracotta Warriors, Xi'an Wall, Tang-style nightlife, Huashan, Shaanxi Museum, Famen Temple, and Yan'an form a complete route.",
    "Good for engineering, electronics, aerospace, medicine, Chinese, history, and ancient China."
  ),
  gansu: intro(
    "狭长省份横跨黄土、高原、戈壁和绿洲，气候干燥，昼夜温差明显。",
    "兰州牛肉面、手抓羊肉、浆水面、酿皮和西北烧烤让人很快记住甘肃。",
    "甘肃是丝绸之路最有画面感的省份之一，佛教石窟、边塞诗意和多民族交流都在这里。",
    "敦煌莫高窟、鸣沙山月牙泉、张掖丹霞、嘉峪关、麦积山和甘南草原都很震撼。",
    "适合生态、历史、考古、交通工程、中文和喜欢丝路大地景观的学生。",
    "Gansu is long and dry, crossing loess, plateau, desert, and oasis landscapes with big day-night shifts.",
    "Lanzhou beef noodles, lamb, sour noodles, liangpi, and northwest barbecue make it memorable.",
    "It is one of the most visual Silk Road provinces, with grottoes, frontier poetry, and multiethnic exchange.",
    "Dunhuang, Mingsha Mountain, Zhangye Danxia, Jiayuguan, Maijishan, and Gannan grasslands are dramatic.",
    "Good for ecology, history, archaeology, transport engineering, Chinese, and Silk Road landscapes."
  ),
  ningxia: intro(
    "黄河灌区与沙漠并存，气候干燥、日照充足，四季分明但尺度紧凑。",
    "手抓羊肉、羊杂碎、枸杞、烩小吃、滩羊和西北面食很有地方味。",
    "宁夏把黄河文明、回族文化、葡萄酒产业和沙漠旅游放在一个不大的区域里。",
    "沙坡头、西夏陵、贺兰山岩画、镇北堡西部影城和黄河岸线都容易串联。",
    "适合医学、农业、葡萄酒、民族文化、中文和喜欢安静低成本城市的学生。",
    "Ningxia combines Yellow River irrigation and desert, with dry sunshine and compact seasonal variety.",
    "Lamb, offal soups, goji berries, local snacks, Tan sheep, and northwest noodles are central.",
    "Yellow River civilization, Hui culture, wine industry, and desert tourism sit close together.",
    "Shapotou, Western Xia tombs, Helan rock art, film studios, and Yellow River routes are easy to combine.",
    "Good for medicine, agriculture, wine studies, ethnic culture, Chinese, and quiet lower-cost life."
  ),
  xizang: intro(
    "高原气候明显，日照强、空气稀薄，昼夜温差大，初到需要慢慢适应。",
    "酥油茶、青稞、牦牛肉、藏面和甜茶馆让人感到高原生活的节奏。",
    "这里有藏文化、宗教艺术、高原生态和边疆研究价值，体验强度很高。",
    "布达拉宫、大昭寺、纳木错、羊卓雍错、珠峰区域和林芝桃花都非常震撼。",
    "适合民族文化、生态、藏医药、高原研究和心理准备充分的学生。",
    "Xizang has strong plateau climate, intense sunshine, thin air, and large day-night temperature differences.",
    "Butter tea, barley, yak meat, Tibetan noodles, and sweet tea houses express plateau rhythm.",
    "Tibetan culture, religious art, plateau ecology, and frontier studies make the experience intense.",
    "Potala Palace, Jokhang, Namtso, Yamdrok, Everest areas, and Nyingchi blossoms are powerful.",
    "Good for ethnic culture, ecology, Tibetan medicine, plateau studies, and well-prepared students."
  ),
  qinghai: intro(
    "高原湖泊与草原气候，夏天凉爽，冬天寒冷，紫外线和昼夜温差都需要注意。",
    "手抓羊肉、牦牛酸奶、酿皮、青稞、甜醅和清真风味体现高原与多民族融合。",
    "青海连接藏、回、土、蒙古等文化，也是黄河、长江、澜沧江源头生态的重要区域。",
    "青海湖、茶卡盐湖、塔尔寺、祁连山、可可西里和三江源都适合自然教育。",
    "适合生态、民族文化、医学、师范、中文和喜欢高原自然的学生。",
    "Qinghai has plateau lakes and grasslands, cool summers, cold winters, strong UV, and large day-night shifts.",
    "Lamb, yak yogurt, liangpi, barley, fermented grains, and halal flavors show plateau diversity.",
    "Tibetan, Hui, Tu, Mongolian cultures meet in a vital ecological source region.",
    "Qinghai Lake, Chaka Salt Lake, Kumbum Monastery, Qilian, Hoh Xil, and Sanjiangyuan are nature classrooms.",
    "Good for ecology, ethnic culture, medicine, education, Chinese, and plateau nature."
  ),
  xinjiang: intro(
    "地域极大，沙漠、绿洲、雪山和草原共存，气候干燥，昼夜温差明显。",
    "大盘鸡、烤包子、抓饭、羊肉串、馕、葡萄和瓜果让人很快爱上西域味道。",
    "新疆是丝路文化、多民族音乐舞蹈、绿洲城市和边疆地理的集中呈现。",
    "天山天池、喀纳斯、赛里木湖、喀什古城、吐鲁番和那拉提草原都很有冲击力。",
    "适合能源、农业、医学、民族文化、中文和喜欢宏大自然景观的学生。",
    "Xinjiang is vast, dry, and diverse, with deserts, oases, snowy mountains, grasslands, and big day-night shifts.",
    "Big plate chicken, baked buns, pilaf, lamb skewers, naan, grapes, and melons make the food unforgettable.",
    "Silk Road culture, music, dance, oasis cities, and frontier geography define it.",
    "Tianshan, Kanas, Sayram Lake, Kashgar, Turpan, and Nalati are visually powerful.",
    "Good for energy, agriculture, medicine, ethnic culture, Chinese, and grand landscapes."
  ),
  "hong-kong": intro(
    "亚热带海港气候，夏季湿热多雨，冬季温和，城市密度高但山海近在身边。",
    "港式茶餐厅、点心、烧腊、云吞面、蛋挞和国际餐饮让生活非常多元。",
    "香港有中西交汇、金融法治、电影流行文化和双语教育环境，国际连接度极高。",
    "维港、太平山、离岛、香港故宫文化博物馆、街市和郊野公园都很值得体验。",
    "适合商科、法律、金融、传媒、科技和希望在双语国际环境学习的学生。",
    "Hong Kong is a subtropical harbor city: humid summers, mild winters, dense streets, and nearby mountains and sea.",
    "Cha chaan teng food, dim sum, roast meats, wonton noodles, egg tarts, and global cuisine keep life diverse.",
    "Chinese-Western exchange, finance, law, cinema, pop culture, and bilingual education make it highly connected.",
    "Victoria Harbour, the Peak, outlying islands, museums, markets, and country parks are essential.",
    "Good for business, law, finance, media, technology, and bilingual international study."
  ),
  macao: intro(
    "亚热带海滨气候，夏季湿热，冬季温和，城市小而紧凑，步行体验很好。",
    "葡挞、猪扒包、葡国菜、杏仁饼、牛杂和粤式茶点体现中葡融合。",
    "澳门有世界遗产老城、葡语文化、旅游会展、酒店管理和湾区联系。",
    "大三巴、妈阁庙、历史城区、路环、澳门科学馆和横琴连接都很适合学生认识城市。",
    "适合酒店管理、旅游、葡语、商科、设计和喜欢小城市国际感的学生。",
    "Macao is subtropical, humid in summer, mild in winter, compact, and walkable.",
    "Egg tarts, pork chop buns, Portuguese dishes, almond cookies, beef offal, and Cantonese dim sum show fusion.",
    "World heritage streets, Lusophone culture, tourism, conventions, hospitality, and Bay Area links define it.",
    "Ruins of St. Paul's, A-Ma Temple, historic streets, Coloane, museums, and Hengqin links are useful routes.",
    "Good for hospitality, tourism, Portuguese, business, design, and compact international city life."
  ),
  taiwan: intro(
    "海岛气候明显，北部湿润多雨，南部更温暖，山地与海岸让气候变化丰富。",
    "牛肉面、卤肉饭、夜市小吃、珍珠奶茶、海鲜和各地小吃构成强烈生活吸引力。",
    "台湾有闽南、客家、原住民、现代设计与流行文化，多层文化很适合观察。",
    "台北街区、阿里山、日月潭、太鲁阁、垦丁海岸和夜市生活都很有代表性。",
    "适合科技、设计、中文、传媒、商科和喜欢海岛城市节奏的学生。",
    "Taiwan has island climate: rainy north, warmer south, and rich variation between mountains and coast.",
    "Beef noodles, braised pork rice, night markets, bubble tea, seafood, and local snacks are highly appealing.",
    "Minnan, Hakka, Indigenous, modern design, and pop culture layers make it rich to observe.",
    "Taipei neighborhoods, Alishan, Sun Moon Lake, Taroko, Kenting, and night markets are representative.",
    "Good for technology, design, Chinese, media, business, and island-city rhythm."
  )
};

export function getProvinceMapIntroduction(slug: string): ProvinceMapIntroduction {
  const province = getProvinceShowcase(slug);
  return provinceMapIntroductions[slug] ?? intro(
    `${province?.zhName ?? "这个地区"}有自己的气候、饮食和文化层次，适合在真实生活中慢慢理解中国。`,
    "从本地小吃、家庭餐桌到夜市味道，饮食会成为留学生融入当地最快的入口。",
    "这里的历史、人文、方言和城市性格，会帮助学生看到中国不止一种面貌。",
    "山水、街区、博物馆和周边旅行线路，适合把学习生活变成持续探索。",
    "适合想把大学选择和真实生活体验一起考虑的学生。",
    `${province?.name ?? "This region"} has its own climate, food, and cultural layers for students to discover slowly.`,
    "Local snacks, family-style meals, and markets help international students enter daily life quickly.",
    "History, language, and local personality show that China has many different faces.",
    "Landscapes, streets, museums, and weekend routes turn study life into ongoing exploration.",
    "Good for students who want to choose a university together with a real living environment."
  );
}

export function getProvinceMapDisplay(slug: string): ProvinceMapDisplay {
  const province = getProvinceShowcase(slug);
  return provinceMapDisplay[slug] ?? {
    zhName: province?.zhName ?? province?.name ?? slug,
    zhRegion: province?.zhRegion ?? province?.region ?? "中国"
  };
}
