export type CityGuideImageBlock = {
  title: string;
  zhTitle: string;
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  body: string;
  zhBody: string;
  sourceUrl: string;
};

export type CityGuideDistrict = {
  name: string;
  zhName: string;
  description: string;
  zhDescription: string;
};

export type CityGuideDetail = {
  geography: string;
  zhGeography: string;
  history: string;
  zhHistory: string;
  transport: string;
  zhTransport: string;
  districts: CityGuideDistrict[];
  visualBlocks: CityGuideImageBlock[];
  routes: string[];
  zhRoutes: string[];
  fit: string[];
  zhFit: string[];
};

const makeCityGuide = (input: {
  name: string;
  zhName: string;
  geography: string;
  zhGeography: string;
  history: string;
  zhHistory: string;
  transport: string;
  zhTransport: string;
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  sourceUrl: string;
  districts: [string, string, string, string][];
  routes: string[];
  zhRoutes: string[];
  fit: string[];
  zhFit: string[];
}): CityGuideDetail => ({
  geography: input.geography,
  zhGeography: input.zhGeography,
  history: input.history,
  zhHistory: input.zhHistory,
  transport: input.transport,
  zhTransport: input.zhTransport,
  districts: input.districts.map(([name, zhName, description, zhDescription]) => ({ name, zhName, description, zhDescription })),
  visualBlocks: [
    {
      title: `${input.name} first impression`,
      zhTitle: `${input.zhName}第一印象`,
      image: input.image,
      imageAlt: input.imageAlt,
      zhImageAlt: input.zhImageAlt,
      sourceUrl: input.sourceUrl,
      body: `${input.name}'s city image helps students quickly understand whether the local rhythm, landscape, and daily life match their study-abroad expectations.`,
      zhBody: `${input.zhName}的城市画面能帮助学生快速判断当地节奏、风景和日常生活是否符合自己的留学期待。`
    },
    {
      title: "Study and daily life",
      zhTitle: "学习与日常生活",
      image: input.image,
      imageAlt: input.imageAlt,
      zhImageAlt: input.zhImageAlt,
      sourceUrl: input.sourceUrl,
      body: "Campus location, food, transport, housing, language environment, and local student communities matter as much as the university name.",
      zhBody: "校区位置、饮食、交通、住宿、语言环境和本地学生社群，和学校名气一样会影响真实体验。"
    },
    {
      title: "Weekend discovery",
      zhTitle: "周末探索",
      image: input.image,
      imageAlt: input.imageAlt,
      zhImageAlt: input.zhImageAlt,
      sourceUrl: input.sourceUrl,
      body: "A strong study city should also give students places to explore, photos to share, and reasons to invite friends and family to China.",
      zhBody: "好的留学城市也应该给学生探索的地方、愿意分享的照片，以及邀请朋友和家人来中国的理由。"
    }
  ],
  routes: input.routes,
  zhRoutes: input.zhRoutes,
  fit: input.fit,
  zhFit: input.zhFit
});

const moreCityGuideDetails: Record<string, CityGuideDetail> = {
  dalian: makeCityGuide({
    name: "Dalian",
    zhName: "大连",
    geography: "Dalian is a coastal city at the southern tip of Liaoning, combining sea views, hills, squares, ports, universities, and a cleaner northern coastal rhythm.",
    zhGeography: "大连位于辽宁南端，是一座把海景、山丘、广场、港口、大学和北方滨海节奏结合起来的城市。",
    history: "Its port history, maritime education, industry, and international contact make it practical for students interested in engineering, shipping, logistics, medicine, and Japanese/Korean regional links.",
    zhHistory: "大连的港口历史、海事教育、工业和国际交流，使它适合工程、航运、物流、医学以及日韩区域联系相关方向。",
    transport: "Dalian has metro, airport, rail links, port resources, and coastal roads. Daily life is more relaxed than Beijing or Shanghai, while still connected to northeast China.",
    zhTransport: "大连有地铁、机场、铁路、港口和滨海道路。日常节奏比北京、上海更放松，同时仍能连接东北地区。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xinghai_Square_20160916.jpg?width=1200",
    imageAlt: "Xinghai Square in Dalian",
    zhImageAlt: "大连星海广场",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Xinghai_Square_20160916.jpg",
    districts: [["Xinghai and coast", "星海与海边", "Sea views, walking, cafes, and first impressions.", "海景、散步、咖啡馆和第一印象集中。"], ["University areas", "大学区域", "Engineering, maritime, medical, and language-study communities.", "工程、海事、医学和语言学习社群集中。"], ["Port and industry", "港口与产业", "Useful for logistics, shipping, manufacturing, and trade context.", "适合理解物流、航运、制造和贸易背景。"]],
    routes: ["Coastal first day: Xinghai Square, sea road, seafood, and night walk.", "Campus route: DUT or Dalian Maritime area plus student food.", "Regional trip: Shenyang, Dandong, or northeast coastal routes."],
    zhRoutes: ["滨海第一天：星海广场、滨海路、海鲜和夜间散步。", "校园路线：大连理工或大连海事周边，加学生美食。", "区域旅行：沈阳、丹东或东北海岸路线。"],
    fit: ["Students who want coastal life and lower pressure.", "Engineering, maritime, logistics, medicine, and language students.", "Students who like clean air, seafood, and northeast culture."],
    zhFit: ["适合想要滨海生活和较低压力的学生。", "适合工程、海事、物流、医学和语言方向。", "适合喜欢海鲜、清爽城市和东北文化的学生。"]
  }),
  qingdao: makeCityGuide({
    name: "Qingdao",
    zhName: "青岛",
    geography: "Qingdao combines coastline, hills, German-style old streets, beaches, marine research, and Shandong culture.",
    zhGeography: "青岛结合了海岸线、山丘、德式老街、海滩、海洋科研和山东文化。",
    history: "The city is shaped by port trade, modern architecture, beer culture, marine science, and a strong coastal identity.",
    zhHistory: "青岛由港口贸易、近代建筑、啤酒文化、海洋科学和强烈的滨海身份塑造。",
    transport: "Metro, airport, high-speed rail, and coastal roads make Qingdao convenient for daily life and Shandong trips.",
    zhTransport: "地铁、机场、高铁和滨海道路让青岛日常生活和山东周边旅行都较便利。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg?width=1200",
    imageAlt: "Aerial view of Qingdao coastline",
    zhImageAlt: "青岛海岸线航拍",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg",
    districts: [["Old town and coast", "老城与海边", "Architecture, beaches, seafood, and walking routes.", "建筑、海滩、海鲜和步行路线集中。"], ["Laoshan and university zones", "崂山与大学区", "Marine science, campuses, and mountain-sea scenery.", "海洋科学、校区和山海景观。"], ["Business districts", "商务区", "Trade, finance, and coastal city jobs.", "贸易、金融和滨海城市就业资源。"]],
    routes: ["Old town, beach, seafood, and night coast walk.", "Marine science day: university area and Laoshan views.", "Shandong extension: Jinan, Mount Tai, or Qufu."],
    zhRoutes: ["老城、海滩、海鲜和夜间海边散步。", "海洋科学一日：大学区和崂山景观。", "山东延伸：济南、泰山或曲阜。"],
    fit: ["Marine science, medicine, engineering, business, and Chinese language students.", "Students who want coastal scenery with solid university options.", "Students who like Shandong culture and seafood."],
    zhFit: ["适合海洋、医学、工程、商科和中文方向。", "适合想要海景和不错大学选择的学生。", "适合喜欢山东文化和海鲜的学生。"]
  }),
  suzhou: makeCityGuide({
    name: "Suzhou",
    zhName: "苏州",
    geography: "Suzhou sits between Shanghai, lakes, canals, gardens, industrial parks, and water towns, making it both classical and highly modern.",
    zhGeography: "苏州位于上海、湖泊、运河、园林、工业园区和水乡之间，既古典又高度现代。",
    history: "Classical gardens, silk, canals, old streets, and Jiangnan culture make Suzhou one of China's most elegant city experiences.",
    zhHistory: "古典园林、丝绸、运河、老街和江南文化，让苏州成为中国最优雅的城市体验之一。",
    transport: "Suzhou is deeply connected to Shanghai and the Yangtze River Delta by rail and metro-style regional movement.",
    zhTransport: "苏州通过铁路和区域交通与上海及长三角紧密连接。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg?width=1200",
    imageAlt: "Humble Administrator's Garden in Suzhou",
    zhImageAlt: "苏州拙政园",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_%2837825378061%29.jpg",
    districts: [["Old Suzhou", "苏州老城", "Gardens, canals, museums, food, and walking.", "园林、运河、博物馆、美食和步行。"], ["Industrial Park", "工业园区", "Modern offices, lakeside life, and international companies.", "现代办公、湖边生活和国际企业。"], ["University areas", "大学区域", "Student housing, labs, and Yangtze Delta access.", "学生住宿、实验室和长三角连接。"]],
    routes: ["Garden day: classical garden, canal walk, old street, and Suzhou food.", "Modern Suzhou: Jinji Lake, Industrial Park, cafes, and company areas.", "Weekend extension: Shanghai, Wuxi, Hangzhou, or Nanjing."],
    zhRoutes: ["园林一日：古典园林、运河散步、老街和苏州美食。", "现代苏州：金鸡湖、工业园区、咖啡馆和企业区域。", "周末延伸：上海、无锡、杭州或南京。"],
    fit: ["Students who want elegant culture near Shanghai.", "Engineering, business, design, AI, and international-company oriented students.", "Students who want a calmer Yangtze Delta base."],
    zhFit: ["适合想要靠近上海又拥有江南文化的学生。", "适合工程、商科、设计、AI 和外企导向。", "适合想要更安静长三角基地的学生。"]
  }),
  hefei: makeCityGuide({
    name: "Hefei", zhName: "合肥",
    geography: "Hefei is a rising science and innovation city in Anhui, known for research institutes, lower living costs, engineering universities, and access to Huangshan and the Yangtze River Delta.",
    zhGeography: "合肥是安徽快速崛起的科学与创新城市，以科研机构、较低生活成本、工程类高校，以及连接黄山和长三角的区位闻名。",
    history: "The city is increasingly associated with quantum science, advanced manufacturing, laboratories, and practical research culture.",
    zhHistory: "合肥越来越与量子科学、先进制造、实验室和务实科研文化联系在一起。",
    transport: "High-speed rail connects Hefei with Nanjing, Shanghai, Hangzhou, Wuhan, and central China.",
    zhTransport: "高铁把合肥与南京、上海、杭州、武汉和中国中部连接起来。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dense_fog_over_Huangshan_%28Unsplash%29.jpg?width=1200", imageAlt: "Huangshan mountain in Anhui", zhImageAlt: "安徽黄山", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dense_fog_over_Huangshan_%28Unsplash%29.jpg",
    districts: [["Science zones", "科学区域", "Labs, universities, and technology companies.", "实验室、大学和科技企业集中。"], ["City center", "市中心", "Food, shopping, metro, and daily services.", "美食、购物、地铁和日常服务。"], ["Anhui routes", "安徽路线", "Huangshan, villages, and regional culture.", "黄山、古村落和区域文化。"]],
    routes: ["Science city day: campus, lab area, cafe, and student food.", "Anhui culture route: Huangshan or old villages.", "Delta extension: Nanjing or Shanghai by high-speed rail."],
    zhRoutes: ["科学城一日：校园、实验室区域、咖啡馆和学生美食。", "安徽文化路线：黄山或古村落。", "长三角延伸：高铁去南京或上海。"],
    fit: ["Science, physics, AI, engineering, and budget-conscious students.", "Students who want serious research without first-tier city costs.", "Students who like mountain and regional culture trips."],
    zhFit: ["适合科学、物理、AI、工程和预算敏感型学生。", "适合想要认真科研但不想承担一线城市成本的学生。", "适合喜欢山地和区域文化旅行的学生。"]
  }),
  jinan: makeCityGuide({
    name: "Jinan", zhName: "济南",
    geography: "Jinan is Shandong's provincial capital, known for springs, moderate costs, medical and engineering universities, and access to Mount Tai, Qufu, and Qingdao.",
    zhGeography: "济南是山东省会，以泉水、适中生活成本、医学和工程类大学，以及连接泰山、曲阜、青岛的区位闻名。",
    history: "Jinan links Confucian culture, Shandong hospitality, spring landscapes, and practical provincial-capital life.",
    zhHistory: "济南把儒家文化、山东好客、泉水景观和务实的省会生活连接起来。",
    transport: "High-speed rail makes Jinan a strong base for Shandong and north China travel.",
    zhTransport: "高铁让济南成为探索山东和华北的良好基地。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg?width=1200", imageAlt: "Shandong coastal and city context", zhImageAlt: "山东城市与海岸背景", sourceUrl: "https://commons.wikimedia.org/wiki/File:Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg",
    districts: [["Spring city center", "泉城中心", "Springs, parks, food, and daily city life.", "泉水、公园、美食和日常城市生活。"], ["University areas", "大学区域", "Medical, engineering, and comprehensive university communities.", "医学、工程和综合大学社群。"], ["Shandong routes", "山东路线", "Mount Tai, Qufu, Qingdao, and coastal trips.", "泰山、曲阜、青岛和海岸旅行。"]],
    routes: ["Spring city day: Baotu Spring area, old streets, food, and lake walk.", "Culture route: Qufu or Mount Tai.", "Coastal weekend: Qingdao by high-speed rail."],
    zhRoutes: ["泉城一日：趵突泉区域、老街、美食和湖边散步。", "文化路线：曲阜或泰山。", "海边周末：高铁去青岛。"],
    fit: ["Medicine, engineering, Chinese culture, and moderate-budget students.", "Students who want Shandong culture and easier living pressure.", "Students who like rail-based weekend trips."],
    zhFit: ["适合医学、工程、中国文化和中等预算学生。", "适合想体验山东文化和较低生活压力的学生。", "适合喜欢高铁周末旅行的学生。"]
  }),
  changsha: makeCityGuide({
    name: "Changsha", zhName: "长沙",
    geography: "Changsha is a lively central China city known for youth culture, spicy food, media, manufacturing, universities, and access to Zhangjiajie and Hunan travel routes.",
    zhGeography: "长沙是中国中部活力很强的城市，以青年文化、辣味美食、传媒、制造业、大学以及通往张家界等湖南旅行路线闻名。",
    history: "Changsha combines Chu culture, modern history, entertainment media, food streets, and a bold local personality.",
    zhHistory: "长沙结合了楚文化、近现代历史、娱乐传媒、美食街和鲜明的地方性格。",
    transport: "Metro, airport, and high-speed rail connect Changsha to Wuhan, Guangzhou, Shenzhen, Nanchang, and southwest routes.",
    zhTransport: "地铁、机场和高铁把长沙连接到武汉、广州、深圳、南昌和西南方向。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhangjiajie_National_Forest_Park.jpg?width=1200", imageAlt: "Zhangjiajie in Hunan", zhImageAlt: "湖南张家界", sourceUrl: "https://commons.wikimedia.org/wiki/File:Zhangjiajie_National_Forest_Park.jpg",
    districts: [["University and river areas", "大学与湘江区域", "Campuses, river walks, food, and student neighborhoods.", "校园、湘江散步、美食和学生社区。"], ["Media and business zones", "传媒与商务区", "Entertainment, content, commerce, and internships.", "娱乐、内容、商业和实习机会。"], ["Hunan routes", "湖南路线", "Zhangjiajie, Fenghuang, mountains, and old towns.", "张家界、凤凰、山地和古镇。"]],
    routes: ["Food and river day: campus area, spicy snacks, Xiang River, and night market.", "Culture day: museums and old streets.", "Nature weekend: Zhangjiajie or Fenghuang."],
    zhRoutes: ["美食与江边一日：大学区、辣味小吃、湘江和夜市。", "文化一日：博物馆和老街。", "自然周末：张家界或凤凰。"],
    fit: ["Students who want energetic youth culture and lower costs.", "Media, business, engineering, medicine, and Chinese language students.", "Students who like spicy food and dramatic nature trips."],
    zhFit: ["适合想要青年文化和较低成本的学生。", "适合传媒、商科、工程、医学和中文方向。", "适合喜欢辣味美食和震撼自然旅行的学生。"]
  }),
  chongqing: makeCityGuide({
    name: "Chongqing", zhName: "重庆",
    geography: "Chongqing is a mountain city built around rivers, bridges, hills, stairs, monorails, and night views. It feels cinematic and vertical.",
    zhGeography: "重庆是一座围绕江河、桥梁、山坡、楼梯、轻轨和夜景展开的山城，空间感非常立体。",
    history: "Chongqing combines wartime history, port culture, hotpot, manufacturing, western China development, and a strong local identity.",
    zhHistory: "重庆结合了抗战历史、码头文化、火锅、制造业、中国西部发展和强烈地方身份。",
    transport: "Metro, monorail, high-speed rail, and airport links connect the city to Chengdu, Xi'an, Guiyang, Wuhan, and beyond.",
    zhTransport: "轨道交通、高铁和机场连接成都、西安、贵阳、武汉等城市。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Skyline_At_Night.png?width=1200", imageAlt: "Chongqing skyline at night", zhImageAlt: "重庆夜景", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chongqing_Skyline_At_Night.png",
    districts: [["Yuzhong", "渝中", "Dense mountain-city core, night views, food, and old streets.", "高密度山城核心、夜景、美食和老街。"], ["University areas", "大学区域", "Engineering, architecture, medicine, and student life.", "工程、建筑、医学和学生生活。"], ["Industry zones", "产业区", "Automotive, electronics, logistics, and manufacturing.", "汽车、电子、物流和制造业。"]],
    routes: ["Mountain city day: monorail, river views, old streets, hotpot, and night skyline.", "Campus and career day: university area plus industry context.", "Regional weekend: Chengdu, Dazu, Wulong, or Guizhou routes."],
    zhRoutes: ["山城一日：轻轨、江景、老街、火锅和夜景。", "校园与职业一日：大学区加产业背景。", "区域周末：成都、大足、武隆或贵州路线。"],
    fit: ["Students who want a dramatic city and lower costs than coastal megacities.", "Architecture, engineering, manufacturing, logistics, medicine, and business students.", "Students who love food, night views, and western China travel."],
    zhFit: ["适合想要震撼城市体验且成本低于沿海大城市的学生。", "适合建筑、工程、制造、物流、医学和商科方向。", "适合喜欢美食、夜景和中国西部旅行的学生。"]
  }),
  fuzhou: makeCityGuide({
    name: "Fuzhou", zhName: "福州",
    geography: "Fuzhou is Fujian's provincial capital, surrounded by mountains, rivers, coastal routes, tea culture, and strong links to Taiwan and Southeast Asia.",
    zhGeography: "福州是福建省会，被山、水、沿海路线、茶文化以及与台湾和东南亚的联系包围。",
    history: "The city connects maritime trade, overseas Chinese networks, traditional lanes, Fujian culture, and a gentler coastal lifestyle.",
    zhHistory: "福州连接海上贸易、华侨网络、传统街巷、福建文化和较温和的沿海生活方式。",
    transport: "High-speed rail connects Fuzhou with Xiamen, Quanzhou, Hangzhou, Shanghai, and coastal Fujian.",
    zhTransport: "高铁连接福州、厦门、泉州、杭州、上海和福建沿海城市。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xiamen.jpg?width=1200", imageAlt: "Fujian coastal city context", zhImageAlt: "福建沿海城市背景", sourceUrl: "https://commons.wikimedia.org/wiki/File:Xiamen.jpg",
    districts: [["Old lanes", "老街巷", "Historic streets, food, local culture, and walking.", "历史街巷、美食、地方文化和步行。"], ["University areas", "大学区域", "Education, medicine, engineering, and student life.", "教育、医学、工程和学生生活。"], ["Coastal Fujian routes", "福建沿海路线", "Xiamen, Quanzhou, islands, and tea regions.", "厦门、泉州、海岛和茶区。"]],
    routes: ["Old Fuzhou day: lanes, local snacks, river walk, and tea.", "Campus day: university area and student food.", "Coastal weekend: Xiamen, Quanzhou, or island routes."],
    zhRoutes: ["老福州一日：街巷、本地小吃、江边散步和茶。", "校园一日：大学区和学生美食。", "沿海周末：厦门、泉州或海岛路线。"],
    fit: ["Students who want coastal culture without megacity pressure.", "Medicine, education, engineering, Chinese language, and Southeast Asia-related students.", "Students who like tea, old streets, and warm weather."],
    zhFit: ["适合想要沿海文化但不想承受超大城市压力的学生。", "适合医学、教育、工程、中文和东南亚相关方向。", "适合喜欢茶、老街和温暖气候的学生。"]
  }),
  kunming: makeCityGuide({
    name: "Kunming", zhName: "昆明",
    geography: "Kunming is Yunnan's highland capital, famous for mild weather, flowers, lakes, ethnic cultures, and routes toward Dali, Lijiang, Southeast Asia, and mountain landscapes.",
    zhGeography: "昆明是云南高原省会，以温和气候、鲜花、湖泊、民族文化，以及通往大理、丽江、东南亚和山地景观的路线闻名。",
    history: "Kunming helps students understand southwest China, biodiversity, ethnic diversity, regional trade, and a softer pace of life.",
    zhHistory: "昆明帮助学生理解中国西南、生物多样性、民族多样性、区域贸易和更柔和的生活节奏。",
    transport: "Rail and air links connect Kunming with Dali, Lijiang, Chengdu, Guiyang, Nanning, and Southeast Asia-facing routes.",
    zhTransport: "铁路和航空连接昆明、大理、丽江、成都、贵阳、南宁以及面向东南亚的路线。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dali_Yunnan_China_West-gate-of-old-town-Dali-01.jpg?width=1200", imageAlt: "Dali Old Town in Yunnan", zhImageAlt: "云南大理古城", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dali_Yunnan_China_West-gate-of-old-town-Dali-01.jpg",
    districts: [["City lakes and center", "城市湖泊与中心", "Mild weather, parks, food, and daily services.", "温和气候、公园、美食和日常服务。"], ["University areas", "大学区域", "Ethnic studies, ecology, medicine, and Chinese language.", "民族研究、生态、医学和中文。"], ["Yunnan routes", "云南路线", "Dali, Lijiang, mountains, villages, and border culture.", "大理、丽江、山地、村落和边境文化。"]],
    routes: ["Kunming first day: lake, flower market, old street, and Yunnan food.", "Culture route: museums, ethnic culture, and university area.", "Yunnan extension: Dali, Lijiang, or nature routes."],
    zhRoutes: ["昆明第一天：湖泊、花市、老街和云南美食。", "文化路线：博物馆、民族文化和大学区。", "云南延伸：大理、丽江或自然路线。"],
    fit: ["Students who value climate, nature, and regional diversity.", "Ecology, medicine, Chinese language, business, and Southeast Asia-related students.", "Students who want travel to be a major part of study life."],
    zhFit: ["适合重视气候、自然和区域多样性的学生。", "适合生态、医学、中文、商科和东南亚相关方向。", "适合希望旅行成为留学生活重要部分的学生。"]
  }),
  zhengzhou: makeCityGuide({
    name: "Zhengzhou", zhName: "郑州",
    geography: "Zhengzhou sits in central Henan, close to the Yellow River, high-speed rail crossroads, manufacturing zones, and deep Central Plains history.",
    zhGeography: "郑州位于河南中部，靠近黄河、高铁十字路口、制造业区域和深厚的中原历史。",
    history: "The city is useful for understanding early Chinese civilization, Shaolin and Luoyang routes, logistics, industry, and central China growth.",
    zhHistory: "郑州适合理解早期中国文明、少林与洛阳路线、物流、产业和中国中部发展。",
    transport: "Zhengzhou is one of China's major rail hubs, making north-south and east-west travel especially convenient.",
    zhTransport: "郑州是中国重要铁路枢纽，南北和东西方向旅行都很方便。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/27407-Luoyang%2C_Longmen_Grottoes.jpg?width=1200", imageAlt: "Longmen Grottoes in Henan", zhImageAlt: "河南洛阳龙门石窟", sourceUrl: "https://commons.wikimedia.org/wiki/File:27407-Luoyang,_Longmen_Grottoes.jpg",
    districts: [["Rail and city center", "铁路与市中心", "Transport, shopping, food, and daily services.", "交通、购物、美食和日常服务。"], ["University areas", "大学区域", "Medicine, engineering, business, and Chinese language.", "医学、工程、商科和中文。"], ["Henan culture routes", "河南文化路线", "Luoyang, Shaolin, Yellow River, and ancient sites.", "洛阳、少林、黄河和古迹。"]],
    routes: ["Central Plains day: museum, local noodles, Yellow River area.", "Culture weekend: Luoyang Longmen or Shaolin route.", "Rail hub route: compare nearby cities by high-speed rail."],
    zhRoutes: ["中原一日：博物馆、本地面食、黄河区域。", "文化周末：洛阳龙门或少林路线。", "高铁枢纽路线：用高铁比较周边城市。"],
    fit: ["Students who want lower costs and central China mobility.", "Medicine, engineering, logistics, business, and Chinese culture students.", "Students interested in early Chinese civilization."],
    zhFit: ["适合想要较低成本和中国中部机动性的学生。", "适合医学、工程、物流、商科和中国文化方向。", "适合对早期中华文明感兴趣的学生。"]
  })
};

export const cityGuideDetails: Record<string, CityGuideDetail> = {
  ...moreCityGuideDetails,
  beijing: {
    geography:
      "Beijing sits on the northern edge of the North China Plain, where the open plain meets the mountains of northern China. The west and north are shaped by the Taihang and Yan ranges, while the southeast opens toward Tianjin and Hebei. This creates a city with several different personalities rather than one flat urban image: the historic center is organized by the imperial central axis, Haidian is dense with universities and research institutes, Chaoyang is international and commercial, and the northern mountain belts lead to the Great Wall, villages, reservoirs, and weekend hiking routes. For international students, this geography is practical, not just scenic. A campus in Haidian gives easier access to Peking University, Tsinghua, Renmin, BLCU, BFSU, labs, libraries, and student communities. A campus near Chaoyang feels closer to embassies, media, international organizations, galleries, and companies. Suburban campuses often give larger space, quieter living, and lower daily pressure, but require more careful commute planning.",
    zhGeography:
      "北京位于华北平原北部边缘，是平原、山地和国家首都功能交汇的城市。西部和北部受太行山、燕山余脉影响，东南方向连接天津和河北平原，因此北京不是一个单一的“大都市”，而是由多个气质完全不同的区域组成：老城围绕中轴线展开，海淀聚集大学和科研机构，朝阳更国际化和商业化，北部山地通向长城、村落、水库和周末徒步路线。对留学生来说，这种地理差异非常实际。海淀校区更容易进入北大、清华、人大、北语、北外等学校构成的学术社区，也更容易接触实验室、图书馆、语言伙伴和学生社群；朝阳附近更容易接触使馆、国际组织、媒体、艺术空间和跨国企业；郊区校区通常空间更大、生活更安静，但需要提前规划通勤。",
    history:
      "Beijing is one of the best places to understand China because history is not separated from daily life. Since the Yuan, Ming, and Qing dynasties, it has carried the role of capital city, and that role is visible in its urban form: the Forbidden City, Tiananmen, the Temple of Heaven, imperial gardens, hutongs, courtyard houses, city gates, and ritual spaces all sit inside the living city. A student can study Chinese politics, architecture, art history, business, or language in the morning and then walk through the exact spaces where those ideas become visible in the afternoon. Beijing also has a strong modern layer: 798 Art District, Wudaokou student life, Zhongguancun technology culture, Sanlitun's international nightlife, and Olympic Park show how quickly the city has changed. This ancient-modern contrast is the core appeal. Beijing helps young people feel that China is not an abstract country on the news; it is a civilization, a government center, a technology hub, a food city, and a place of ordinary human warmth all at the same time.",
    zhHistory:
      "北京最适合用来理解中国，因为它的历史不是被隔离在博物馆里，而是直接嵌入日常生活。自元、明、清以来，北京长期承担国家都城功能，这种功能清晰地体现在城市空间里：故宫、天安门、天坛、皇家园林、胡同、四合院、城门遗迹和礼制空间，都不是孤立景点，而是和今天的居民生活、大学生活、商业生活并存。一个学生上午可以在课堂上学习中文、政治、建筑、艺术史或商业，下午就能走进这些真实空间。北京也有非常强的现代层次：798 艺术区、五道口学生生活、中关村科技文化、三里屯国际夜生活、奥林匹克公园，都展示了城市快速变化的一面。这种古代与现代的强烈并置，是北京最核心的吸引力。它会让年轻人发现，中国不是新闻里的抽象概念，而是一种文明、一个治理中心、一个科技枢纽、一座美食城市，也是一种真实、热情、有温度的日常生活。",
    transport:
      "Beijing is large, but it is also one of China's easiest cities to navigate once a student understands the metro and rail system. The subway covers most academic, cultural, shopping, museum, nightlife, and internship destinations. Beijing Capital International Airport and Beijing Daxing International Airport connect the city with global routes, while high-speed rail stations link students to Tianjin, Shijiazhuang, Jinan, Qingdao, Shanghai, Xi'an, Harbin, and many other cities. This matters for SilkStudy's positioning: studying in Beijing can become the starting point for discovering China. A student can take classes during the week, visit the Great Wall or Summer Palace on Saturday, and use high-speed rail for a weekend in Tianjin or a longer trip during holidays. The main warning is commute distance. Beijing rewards students who choose housing and campus carefully. A famous school with a far campus may feel very different from a central campus near subway lines.",
    zhTransport:
      "北京城市尺度很大，但只要熟悉地铁和铁路系统，它又是中国最容易移动的城市之一。地铁覆盖了大多数学习、博物馆、购物、夜生活、实习和城市探索场景；首都国际机场和大兴国际机场连接全球航线；北京多个高铁站可以通往天津、石家庄、济南、青岛、上海、西安、哈尔滨等城市。对 SilkStudy 来说，这一点非常重要：在北京留学可以成为探索中国的起点。学生可以工作日上课，周六去长城、颐和园或胡同，假期用高铁去天津、西安、上海、青岛等城市。唯一需要认真提醒的是通勤距离。北京会奖励那些认真选择校区和住宿位置的学生。名校如果校区较远，真实生活体验可能和市中心校区完全不同。",
    districts: [
      {
        name: "Haidian",
        zhName: "海淀",
        description: "China's most famous university and research district. Best for students who want libraries, language partners, labs, affordable student food, and a serious academic atmosphere.",
        zhDescription: "中国最著名的大学和科研区。适合想要图书馆、语言伙伴、实验室、学生食堂、学术氛围和同龄人社群的留学生。"
      },
      {
        name: "Chaoyang",
        zhName: "朝阳",
        description: "More international, commercial, and media-facing. Useful for students interested in embassies, international organizations, galleries, business, lifestyle, and internships.",
        zhDescription: "更国际化、商业化、媒体化。适合关注使馆、国际组织、艺术空间、商务、生活方式和实习机会的学生。"
      },
      {
        name: "Old City",
        zhName: "老城",
        description: "The best area for understanding Beijing's historical texture: hutongs, temples, lakes, museums, courtyard neighborhoods, and the central axis.",
        zhDescription: "最能理解北京历史肌理的区域：胡同、寺庙、湖泊、博物馆、四合院街区和中轴线都集中在这里。"
      },
      {
        name: "Northern mountains",
        zhName: "北部山地",
        description: "Weekend Beijing. Great Wall routes, reservoirs, hiking, villages, autumn leaves, winter snow, and a slower rhythm outside the dense urban core.",
        zhDescription: "北京的周末版本。这里有长城、水库、徒步、村落、秋叶、冬雪，以及脱离高密度城市后的慢节奏。"
      }
    ],
    visualBlocks: [
      {
        title: "Forbidden City and the Central Axis",
        zhTitle: "故宫与北京中轴线",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Forbidden_City_Beijing_Shenwumen_Gate.JPG?width=1200",
        imageAlt: "Forbidden City gate in Beijing",
        zhImageAlt: "北京故宫城门",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Forbidden_City_Beijing_Shenwumen_Gate.JPG",
        body:
          "This is where many students first feel the scale of Chinese history. The Forbidden City is not only a tourist site; it helps explain urban order, imperial culture, architecture, ritual, color, and space.",
        zhBody:
          "这是很多学生第一次真正感受到中国历史尺度的地方。故宫不只是旅游景点，它能帮助学生理解城市秩序、皇城文化、建筑、礼制、色彩和空间。"
      },
      {
        title: "Great Wall weekends",
        zhTitle: "长城周末旅行",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wall_of_China,_Mutianyu_Section.jpg?width=1200",
        imageAlt: "Mutianyu section of the Great Wall near Beijing",
        zhImageAlt: "北京慕田峪长城",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Wall_of_China,_Mutianyu_Section.jpg",
        body:
          "The Great Wall makes Beijing feel different from most global capitals. A normal weekend can become a mountain walk through world heritage, village food, and long views over northern China.",
        zhBody:
          "长城让北京区别于世界上大多数首都。一个普通周末，可以变成穿越世界遗产、山地村落、农家饭和北方山脉景观的旅行。"
      },
      {
        title: "Summer Palace and Haidian campuses",
        zhTitle: "颐和园与海淀大学区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Summer_Palace_scene_1.jpg?width=1200",
        imageAlt: "Kunming Lake at the Summer Palace in Beijing",
        zhImageAlt: "北京颐和园昆明湖",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Summer_Palace_scene_1.jpg",
        body:
          "Haidian combines elite campuses, old royal gardens, language schools, bookstores, cafes, and student restaurants. It is one of the best places in China to feel daily academic life.",
        zhBody:
          "海淀把顶尖校园、皇家园林、语言学校、书店、咖啡馆和学生餐厅放在同一片区域，是中国最容易感受到日常学术生活的地方之一。"
      },
      {
        title: "Hutongs, food, and everyday Beijing",
        zhTitle: "胡同、美食与日常北京",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_hutong_1.jpg?width=1200",
        imageAlt: "Traditional hutong street in Beijing",
        zhImageAlt: "北京传统胡同街巷",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Beijing_hutong_1.jpg",
        body:
          "Hutongs show a softer Beijing: breakfast stalls, bicycles, small shops, courtyards, local conversations, and neighborhood life. They help students see the city beyond landmarks.",
        zhBody:
          "胡同展示的是更柔软的北京：早餐铺、自行车、小店、院落、邻里聊天和真实街区生活。它能让学生看到地标之外的北京。"
      },
      {
        title: "798, Wudaokou, and youth culture",
        zhTitle: "798、五道口与青年文化",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_798_Art_District.jpg?width=1200",
        imageAlt: "798 Art District in Beijing",
        zhImageAlt: "北京798艺术区",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Beijing_798_Art_District.jpg",
        body:
          "Modern Beijing is not only government and history. Art districts, student neighborhoods, music venues, startup spaces, and international restaurants give students a young, social side of the city.",
        zhBody:
          "现代北京不只有政府和历史。艺术区、学生街区、音乐现场、创业空间和国际餐厅，让留学生看到这座城市年轻、社交、开放的一面。"
      }
    ],
    routes: [
      "First Beijing weekend: Forbidden City, Jingshan Park, hutong walk, and a local dinner around Shichahai.",
      "Academic Beijing day: Peking University or Tsinghua campus area, Summer Palace, Yuanmingyuan, and Wudaokou student food.",
      "Great Wall day trip: Mutianyu or Badaling, mountain views, village lunch, and evening return by car or tourist bus.",
      "Modern Beijing route: 798 Art District, Sanlitun, Olympic Park, and a night view of the city.",
      "High-speed rail extension: Tianjin for architecture and food, or Jinan/Qingdao for a longer coastal and Shandong culture trip."
    ],
    zhRoutes: [
      "第一次北京周末：故宫、景山、胡同散步，再到什刹海附近吃一顿本地晚餐。",
      "学术北京一日：北大或清华周边、颐和园、圆明园，再到五道口体验学生餐厅和国际社群。",
      "长城一日：慕田峪或八达岭，看山地景观、吃村落午餐，傍晚回城。",
      "现代北京路线：798 艺术区、三里屯、奥林匹克公园，再看一次北京夜景。",
      "高铁延伸路线：去天津看近代建筑和美食，或者去济南、青岛体验山东文化和海边城市。"
    ],
    fit: [
      "Students who want China's strongest academic concentration and research ecosystem.",
      "Students interested in politics, diplomacy, international relations, media, AI, technology, Chinese language, history, architecture, or arts.",
      "Students who want travel to be part of the study-abroad experience, not just a holiday after graduation.",
      "Students who can accept a large city, higher living costs, winter dryness, and the need to plan commutes carefully."
    ],
    zhFit: [
      "适合想进入中国最密集学术和科研生态的学生。",
      "适合关注政治、外交、国际关系、媒体、AI、科技、中文、历史、建筑和艺术的学生。",
      "适合希望把旅行变成留学体验一部分，而不是毕业以后才旅行的学生。",
      "适合能接受大城市、高一点生活成本、冬季干燥，以及需要认真规划通勤的学生。"
    ]
  },
  shanghai: {
    geography: "Shanghai sits where the Yangtze River Delta meets the sea. Its geography gives the city a very different rhythm from inland China: riverfront skylines, dense metro networks, port logistics, creative districts, nearby water towns, and fast access to Suzhou, Hangzhou, Nanjing, and Ningbo. For international students, Shanghai is the easiest Chinese city to understand at first glance because daily life is highly globalized, but it is also a serious academic and career city with strong universities, hospitals, finance, design, trade, and technology ecosystems.",
    zhGeography: "上海位于长江三角洲入海口，是中国最国际化、最容易让外国学生快速适应的城市之一。它的城市节奏和内陆城市很不一样：黄浦江两岸的天际线、密集的地铁网络、港口物流、创意街区、周边水乡，以及到苏州、杭州、南京、宁波的高铁连接，共同构成了上海的空间优势。对留学生来说，上海既是生活便利的国际都市，也是金融、设计、贸易、医学、科技和跨国企业资源高度集中的职业城市。",
    history: "Shanghai's modern identity grew through trade, port culture, finance, publishing, cinema, education, and global contact. The Bund, former concession districts, Shikumen neighborhoods, universities, museums, and art spaces show how China encountered the modern world and then reshaped it in its own way. This makes Shanghai ideal for students who want to understand contemporary China through business, urban culture, media, design, and international exchange.",
    zhHistory: "上海的现代气质来自贸易、港口、金融、出版、电影、教育和国际交流。外滩、历史街区、石库门、大学、博物馆和艺术空间，展示了中国如何与现代世界相遇，并逐渐形成自己的城市表达。对于想理解当代中国的学生来说，上海非常适合从商业、城市文化、媒体、设计和国际交流角度进入。",
    transport: "Shanghai has one of the world's most convenient metro systems, two major airports, strong high-speed rail links, and easy regional travel. Students can live without a car, move between campuses and internships by metro, and use weekends for Suzhou gardens, Hangzhou West Lake, Nanjing history, or water-town trips. The main challenge is cost: housing and daily spending are higher than most Chinese cities.",
    zhTransport: "上海拥有全球最便利的地铁系统之一，同时有浦东、虹桥两大机场和密集高铁网络。学生不需要汽车，也能用地铁连接学校、实习、博物馆、餐厅和商业区；周末可以去苏州园林、杭州西湖、南京历史街区或江南水乡。主要挑战是成本：住宿和日常消费普遍高于大多数中国城市。",
    districts: [
      { name: "Yangpu", zhName: "杨浦", description: "University-heavy and creative, with Fudan, Tongji, startup spaces, and student neighborhoods.", zhDescription: "大学和创新资源密集，有复旦、同济、创业空间和学生社区。" },
      { name: "Xuhui", zhName: "徐汇", description: "Historic, walkable, and close to culture, cafes, hospitals, and several university campuses.", zhDescription: "历史感强、适合步行，靠近文化空间、咖啡馆、医院和多个校区。" },
      { name: "Pudong", zhName: "浦东", description: "Best for finance, trade, skyline views, airports, and multinational-company exposure.", zhDescription: "适合关注金融、贸易、城市天际线、机场和跨国企业资源的学生。" },
      { name: "Hongqiao and rail corridor", zhName: "虹桥与高铁走廊", description: "Practical for students who want frequent Yangtze River Delta travel.", zhDescription: "适合经常在长三角城市之间旅行、实习和访校的学生。" }
    ],
    visualBlocks: [
      { title: "The Bund skyline", zhTitle: "外滩天际线", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_skyline_from_the_bund.jpg?width=1200", imageAlt: "Shanghai skyline from the Bund", zhImageAlt: "上海外滩天际线", sourceUrl: "https://commons.wikimedia.org/wiki/File:Shanghai_skyline_from_the_bund.jpg", body: "The Bund is the fastest way to feel Shanghai's global city energy: finance, history, river views, and night walks in one place.", zhBody: "外滩最能快速体现上海的国际都市气质：金融、历史、江景和夜间散步都集中在这里。" },
      { title: "Water-town weekends", zhTitle: "江南水乡周末", image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg?width=1200", imageAlt: "Suzhou classical garden near Shanghai", zhImageAlt: "上海周边苏州园林", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_%2837825378061%29.jpg", body: "Shanghai is a launchpad for Jiangnan culture. Students can reach gardens, canals, old streets, and nearby cities by high-speed rail.", zhBody: "上海也是进入江南文化的起点。学生可以通过高铁到达园林、运河、老街和周边城市。" },
      { title: "Campus and career city", zhTitle: "校园与职业城市", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_skyline_from_the_bund.jpg?width=1200", imageAlt: "Shanghai urban skyline", zhImageAlt: "上海城市天际线", sourceUrl: "https://commons.wikimedia.org/wiki/File:Shanghai_skyline_from_the_bund.jpg", body: "Finance, consulting, design, biotech, trade, AI applications, and multinational internships make Shanghai especially career-oriented.", zhBody: "金融、咨询、设计、生物医药、贸易、AI 应用和跨国企业实习，让上海特别适合职业导向强的学生。" }
    ],
    routes: ["First weekend: The Bund, Nanjing Road, Yu Garden area, and a Huangpu River night walk.", "Academic day: Fudan or Tongji area, bookstores, cafes, and Yangpu creative spaces.", "Regional trip: Suzhou gardens or Hangzhou West Lake by high-speed rail."],
    zhRoutes: ["第一次周末：外滩、南京路、豫园周边，再沿黄浦江夜间散步。", "学术一日：复旦或同济周边、书店、咖啡馆和杨浦创意空间。", "区域旅行：坐高铁去苏州园林或杭州西湖。"],
    fit: ["Students who want global convenience and strong career exposure.", "Students in business, finance, design, medicine, media, trade, and technology.", "Students who can manage higher living costs."],
    zhFit: ["适合想要国际化便利和强职业曝光的学生。", "适合商科、金融、设计、医学、媒体、贸易和科技方向。", "适合能接受较高生活成本的学生。"]
  },
  hangzhou: {
    geography: "Hangzhou is built around West Lake, hills, tea villages, wetlands, canals, and the Qiantang River. Compared with Beijing and Shanghai, it feels softer and more scenic, but it is not a small city: it is one of China's most important digital-economy centers. Students can combine lake walks, tea culture, temples, and high-speed rail with technology, e-commerce, AI applications, design, and entrepreneurship.",
    zhGeography: "杭州围绕西湖、群山、茶村、湿地、运河和钱塘江展开。相比北京、上海，它更柔和、更有风景感，但并不是小城市：杭州也是中国数字经济、电子商务、AI 应用、设计和创业非常活跃的城市。留学生在这里可以把湖边散步、茶文化、寺庙、高铁旅行和科技产业结合起来。",
    history: "Hangzhou was a major capital during the Southern Song dynasty and has long been associated with poetry, commerce, silk, tea, canals, gardens, and literati culture. Its charm is not only the famous West Lake view, but the way landscape, food, city life, and technology now coexist.",
    zhHistory: "杭州曾是南宋都城，长期与诗词、商业、丝绸、茶、运河、园林和文人文化联系在一起。它的魅力不只是西湖风景，而是自然山水、美食、城市生活和数字经济共同存在。",
    transport: "Hangzhou has a strong metro network and excellent high-speed rail connections to Shanghai, Nanjing, Suzhou, Ningbo, and other Yangtze River Delta cities. The airport and railway stations make it practical for both domestic travel and international arrival through Shanghai.",
    zhTransport: "杭州地铁网络成熟，高铁可以快速连接上海、南京、苏州、宁波等长三角城市。机场和火车站也让它适合国内旅行，并可通过上海衔接国际航线。",
    districts: [
      { name: "West Lake area", zhName: "西湖周边", description: "Best for scenery, museums, walking, temples, and classic Hangzhou atmosphere.", zhDescription: "最适合看风景、博物馆、步行、寺庙和经典杭州气质。" },
      { name: "Zijingang and university belt", zhName: "紫金港与大学带", description: "Important for Zhejiang University life, research, student housing, and academic services.", zhDescription: "浙江大学生活、科研、学生住宿和学术服务的重要区域。" },
      { name: "Binjiang", zhName: "滨江", description: "Technology, internet platforms, product jobs, and digital-economy internships.", zhDescription: "科技、互联网平台、产品岗位和数字经济实习集中。" }
    ],
    visualBlocks: [
      { title: "West Lake", zhTitle: "西湖", image: "https://commons.wikimedia.org/wiki/Special:FilePath/WestLake_-_Hangzhou.jpg?width=1200", imageAlt: "West Lake in Hangzhou", zhImageAlt: "杭州西湖", sourceUrl: "https://commons.wikimedia.org/wiki/File:WestLake_-_Hangzhou.jpg", body: "West Lake makes Hangzhou one of China's most emotionally memorable student cities.", zhBody: "西湖让杭州成为中国最有记忆点、最容易打动学生的城市之一。" },
      { title: "Tea, temples, and hills", zhTitle: "茶、寺庙与山", image: "https://commons.wikimedia.org/wiki/Special:FilePath/WestLake_-_Hangzhou.jpg?width=1200", imageAlt: "Hangzhou lake and hills", zhImageAlt: "杭州湖山风景", sourceUrl: "https://commons.wikimedia.org/wiki/File:WestLake_-_Hangzhou.jpg", body: "The city's slower cultural side is ideal for students who want calm routines and weekend discovery.", zhBody: "杭州较慢的文化节奏，适合希望拥有稳定日常和周末探索的学生。" },
      { title: "Digital economy", zhTitle: "数字经济", image: "https://commons.wikimedia.org/wiki/Special:FilePath/WestLake_-_Hangzhou.jpg?width=1200", imageAlt: "Hangzhou city landscape", zhImageAlt: "杭州城市景观", sourceUrl: "https://commons.wikimedia.org/wiki/File:WestLake_-_Hangzhou.jpg", body: "Hangzhou is especially attractive for e-commerce, product, AI application, design, and startup-minded students.", zhBody: "杭州尤其适合电子商务、产品、AI 应用、设计和创业导向的学生。" }
    ],
    routes: ["West Lake first day: lake walk, Lingyin Temple, tea village, and evening food street.", "Tech route: university area, Binjiang digital-economy zone, cafes, and product/startup meetups.", "Weekend extension: Shanghai, Suzhou, or Ningbo by high-speed rail."],
    zhRoutes: ["西湖第一天：湖边散步、灵隐寺、茶村和夜间美食街。", "科技路线：大学区、滨江数字经济区、咖啡馆和产品/创业活动。", "周末延伸：高铁去上海、苏州或宁波。"],
    fit: ["Students who want beauty and technology together.", "Students interested in computer science, e-commerce, design, business, or Chinese culture.", "Students who prefer a gentler city than Shanghai but still want opportunity."],
    zhFit: ["适合希望同时拥有风景和科技机会的学生。", "适合计算机、电商、设计、商科和中国文化方向。", "适合想要比上海更温和、但仍有机会的城市体验。"]
  },
  guangzhou: {
    geography: "Guangzhou is the historic core of the Pearl River Delta and one of the key gateways to the Greater Bay Area. The city is warm, practical, food-rich, and connected to Shenzhen, Hong Kong, Macao, Foshan, and Dongguan. For students, this means strong business exposure, medical resources, trade networks, manufacturing links, and easy regional travel.",
    zhGeography: "广州是珠江三角洲的历史核心，也是进入粤港澳大湾区的重要门户。它气候温暖、生活务实、美食丰富，并连接深圳、香港、澳门、佛山、东莞等城市。对留学生来说，这意味着商科、医学、贸易、制造业、供应链和区域旅行资源都很强。",
    history: "Guangzhou has been a major international trade city for centuries. Cantonese culture, port history, overseas Chinese networks, food traditions, and modern Greater Bay Area development make it one of the best places to understand South China.",
    zhHistory: "广州长期是中国对外贸易的重要城市。粤语文化、港口历史、华侨网络、饮食传统和现代大湾区发展，让它成为理解中国南方最好的城市之一。",
    transport: "Guangzhou has a large metro network, a major international airport, high-speed rail to Shenzhen and Hong Kong, and convenient intercity links across the Greater Bay Area. Students can move from campus to internships, hospitals, trade districts, and weekend destinations efficiently.",
    zhTransport: "广州地铁网络发达，有大型国际机场，高铁可快速到深圳、香港，并通过城际交通连接整个大湾区。学生可以比较高效地往返校园、实习、医院、贸易区和周末目的地。",
    districts: [
      { name: "Tianhe", zhName: "天河", description: "Business, shopping, offices, tech services, and modern urban life.", zhDescription: "商务、购物、办公、科技服务和现代城市生活集中。" },
      { name: "Yuexiu and Liwan", zhName: "越秀与荔湾", description: "Old Guangzhou, food, history, parks, traditional streets, and Cantonese culture.", zhDescription: "老广州、美食、历史、公园、传统街区和广府文化。" },
      { name: "University Town", zhName: "大学城", description: "Clustered campuses, student services, libraries, dorm life, and peer community.", zhDescription: "校区集中、学生服务、图书馆、宿舍生活和同龄人社群。" }
    ],
    visualBlocks: [
      { title: "Canton Tower and Pearl River", zhTitle: "广州塔与珠江", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton-Tower-001.jpg?width=1200", imageAlt: "Canton Tower in Guangzhou", zhImageAlt: "广州塔", sourceUrl: "https://commons.wikimedia.org/wiki/File:Canton-Tower-001.jpg", body: "The Pearl River night view gives Guangzhou a warm, open, southern-city atmosphere.", zhBody: "珠江夜景让广州呈现出温暖、开放、南方城市的氛围。" },
      { title: "Cantonese daily life", zhTitle: "广府日常生活", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton-Tower-001.jpg?width=1200", imageAlt: "Guangzhou city view", zhImageAlt: "广州城市景观", sourceUrl: "https://commons.wikimedia.org/wiki/File:Canton-Tower-001.jpg", body: "Dim sum, tea houses, markets, old streets, and metro convenience make Guangzhou easy to love.", zhBody: "早茶、茶楼、市场、老街和便利地铁，让广州很容易被学生喜欢。" },
      { title: "Greater Bay Area access", zhTitle: "大湾区连接", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton-Tower-001.jpg?width=1200", imageAlt: "Greater Bay Area gateway Guangzhou", zhImageAlt: "大湾区门户广州", sourceUrl: "https://commons.wikimedia.org/wiki/File:Canton-Tower-001.jpg", body: "Fast links to Shenzhen, Hong Kong, and Macao give students a wider regional career and travel map.", zhBody: "快速连接深圳、香港和澳门，让学生拥有更广阔的区域职业和旅行地图。" }
    ],
    routes: ["Food and old city day: Yuexiu, Liwan, dim sum, old streets, and Pearl River night view.", "Career day: Tianhe offices, trade areas, university visits, and metro-based exploration.", "Bay Area weekend: Shenzhen, Hong Kong, Macao, or Foshan."],
    zhRoutes: ["美食与老城一日：越秀、荔湾、早茶、老街和珠江夜景。", "职业一日：天河办公区、贸易区、大学参访和地铁探索。", "大湾区周末：深圳、香港、澳门或佛山。"],
    fit: ["Students interested in business, medicine, trade, manufacturing, logistics, and South China culture.", "Students who like warm weather and food-driven city life.", "Students who want regional mobility across the Greater Bay Area."],
    zhFit: ["适合商科、医学、贸易、制造、物流和南方文化方向。", "适合喜欢温暖气候和美食城市生活的学生。", "适合想在大湾区内高频移动的学生。"]
  },
  wuhan: {
    geography: "Wuhan sits where the Yangtze and Han rivers meet, giving the city a broad riverfront structure and three-town identity: Wuchang, Hankou, and Hanyang. It is one of China's biggest student cities, with universities, hospitals, labs, transport hubs, lakes, bridges, breakfast culture, and technology parks spread across a large but affordable urban area.",
    zhGeography: "武汉位于长江与汉江交汇处，形成了武昌、汉口、汉阳三镇格局。它是中国最大的学生城市之一，大学、医院、实验室、交通枢纽、湖泊、桥梁、过早文化和科技园区分布在一座规模很大但成本相对友好的城市里。",
    history: "Wuhan's history is tied to river trade, modern industry, education, revolution, and central China mobility. It feels less polished than Shanghai or Hangzhou, but more energetic, practical, and student-driven.",
    zhHistory: "武汉的历史与长江贸易、近代工业、教育、革命和中国中部交通紧密相关。它可能没有上海、杭州那么精致，但更有学生城市的能量、烟火气和实际生活感。",
    transport: "Wuhan is a national rail hub. Students can reach many Chinese cities by high-speed rail, and the metro connects major campuses, business districts, hospitals, and East Lake areas.",
    zhTransport: "武汉是全国性铁路枢纽，高铁可以连接大量中国城市；地铁也能连接主要校区、商圈、医院和东湖区域。",
    districts: [
      { name: "Wuchang", zhName: "武昌", description: "University-heavy, close to East Lake, museums, and many student neighborhoods.", zhDescription: "大学密集，靠近东湖、博物馆和大量学生生活区。" },
      { name: "Hankou", zhName: "汉口", description: "Commercial, historic, and useful for riverfront walks, food, and urban life.", zhDescription: "商业、历史和江滩生活集中，适合美食和城市漫步。" },
      { name: "Optics Valley", zhName: "光谷", description: "Technology, labs, software, electronics, and internship-oriented student life.", zhDescription: "科技、实验室、软件、电子和实习导向的学生生活集中。" }
    ],
    visualBlocks: [
      { title: "East Lake", zhTitle: "东湖", image: "https://commons.wikimedia.org/wiki/Special:FilePath/East_Lake_Wuhan.JPG?width=1200", imageAlt: "East Lake in Wuhan", zhImageAlt: "武汉东湖", sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Lake_Wuhan.JPG", body: "East Lake gives Wuhan a rare mix of large-city scale and open natural space near major universities.", zhBody: "东湖让武汉在大城市尺度之外，还拥有靠近大学的开阔自然空间。" },
      { title: "Student city energy", zhTitle: "学生城市能量", image: "https://commons.wikimedia.org/wiki/Special:FilePath/East_Lake_Wuhan.JPG?width=1200", imageAlt: "Wuhan student city context", zhImageAlt: "武汉学生城市背景", sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Lake_Wuhan.JPG", body: "Large student populations make Wuhan social, affordable, and full of peer communities.", zhBody: "庞大的学生群体让武汉社交活跃、成本友好，并拥有大量同龄人社区。" },
      { title: "Central China rail hub", zhTitle: "中国中部高铁枢纽", image: "https://commons.wikimedia.org/wiki/Special:FilePath/East_Lake_Wuhan.JPG?width=1200", imageAlt: "Wuhan transport and lake city", zhImageAlt: "武汉交通与湖泊城市", sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Lake_Wuhan.JPG", body: "Wuhan is one of the best bases for students who want to travel across China by rail.", zhBody: "武汉非常适合作为学生用高铁探索中国的中部基地。" }
    ],
    routes: ["East Lake and campus day: university area, lake cycling, museum, and student food.", "River city day: Yellow Crane Tower area, Yangtze River bridge, Hankou riverfront, and breakfast culture.", "Career route: Optics Valley, labs, software parks, hospitals, and university research centers."],
    zhRoutes: ["东湖校园一日：大学区、东湖骑行、博物馆和学生美食。", "江城一日：黄鹤楼区域、长江大桥、汉口江滩和过早文化。", "职业路线：光谷、实验室、软件园、医院和大学科研中心。"],
    fit: ["Students who want strong universities with lower living costs.", "Students in engineering, medicine, optics, computer science, transport, and research.", "Students who like a big peer community and central China travel."],
    zhFit: ["适合想要强大学资源但控制成本的学生。", "适合工程、医学、光电、计算机、交通和科研方向。", "适合喜欢大学生群体和中国中部旅行的学生。"]
  },
  xian: {
    geography: "Xi'an sits in the Guanzhong Plain, surrounded by mountains, historic routes, and the legacy of the Silk Road. It feels more spacious and affordable than coastal megacities, while still offering strong engineering, aerospace, electronics, archaeology, and cultural resources.",
    zhGeography: "西安位于关中平原，周边有秦岭、古道和丝绸之路历史遗产。相比沿海超大城市，它更舒展、生活成本更友好，同时拥有很强的工程、航天、电子、考古和文化资源。",
    history: "As one of China's great ancient capitals, Xi'an gives students direct access to the Tang dynasty imagination, city walls, museums, temples, Muslim Quarter food, and the Terracotta Warriors. It is one of the easiest cities for international students to feel China's historical depth.",
    zhHistory: "西安是中国最重要的古都之一。唐代想象、古城墙、博物馆、寺庙、回民街美食和兵马俑，让留学生很容易感受到中国历史的纵深。",
    transport: "Xi'an is a northwest China transport hub with metro lines, high-speed rail, and flights to western and central China. It is practical for Silk Road routes, mountain travel, and lower-cost student life.",
    zhTransport: "西安是中国西北交通枢纽，有地铁、高铁和通往西部、中部城市的航线。它适合丝路旅行、山地旅行和较低成本的学生生活。",
    districts: [
      { name: "City wall and old center", zhName: "城墙与老城", description: "Best for history, food, museums, and first impressions of ancient China.", zhDescription: "最适合历史、美食、博物馆和古都第一印象。" },
      { name: "University south and west", zhName: "南部与西部大学区", description: "Engineering, electronics, aerospace, and student communities.", zhDescription: "工程、电子、航天和学生社区集中。" },
      { name: "Qinling routes", zhName: "秦岭路线", description: "Weekend mountain air, temples, hiking, and nature outside the urban core.", zhDescription: "适合周末进山、寺庙、徒步和城市之外的自然体验。" }
    ],
    visualBlocks: [
      { title: "Xi'an City Wall", zhTitle: "西安城墙", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi%27an_City_Wall_%2848696360238%29.jpg?width=1200", imageAlt: "Xi'an City Wall", zhImageAlt: "西安城墙", sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_City_Wall_%2848696360238%29.jpg", body: "Cycling or walking the city wall is one of the best first experiences in Xi'an.", zhBody: "骑行或步行西安城墙，是学生初到西安最好的体验之一。" },
      { title: "Silk Road gateway", zhTitle: "丝绸之路起点气质", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi%27an_City_Wall_%2848696360238%29.jpg?width=1200", imageAlt: "Ancient capital Xi'an", zhImageAlt: "古都西安", sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_City_Wall_%2848696360238%29.jpg", body: "Xi'an links Chinese history with Central Asian routes, archaeology, food, and northwest travel.", zhBody: "西安把中国历史、中亚路线、考古、美食和西北旅行连接起来。" },
      { title: "Engineering and aerospace", zhTitle: "工程与航天", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi%27an_City_Wall_%2848696360238%29.jpg?width=1200", imageAlt: "Xi'an city and engineering culture", zhImageAlt: "西安城市与工程文化", sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_City_Wall_%2848696360238%29.jpg", body: "The city is especially attractive for engineering, electronics, aerospace, and research-minded students.", zhBody: "西安尤其适合工程、电子、航天和科研导向的学生。" }
    ],
    routes: ["Ancient capital day: City Wall, Bell Tower area, Muslim Quarter, and museums.", "Terracotta Warriors day trip with local food on the way back.", "Engineering route: university campuses, electronics districts, and research institutes."],
    zhRoutes: ["古都一日：城墙、钟楼区域、回民街和博物馆。", "兵马俑一日游，返程体验本地美食。", "工程路线：大学校区、电子产业区和科研院所。"],
    fit: ["Students who love history and want affordable study life.", "Engineering, electronics, aerospace, archaeology, Chinese language, and culture students.", "Students who want northwest China and Silk Road travel."],
    zhFit: ["适合热爱历史且希望控制生活成本的学生。", "适合工程、电子、航天、考古、中文和文化方向。", "适合想探索西北中国和丝绸之路的学生。"]
  },
  chengdu: {
    geography: "Chengdu sits in the fertile Sichuan Basin, with a relaxed urban rhythm, strong food culture, nearby mountains, and a growing technology and healthcare economy. It is one of China's easiest cities for students to enjoy emotionally.",
    zhGeography: "成都位于四川盆地，城市节奏松弛，美食文化强，周边山地资源丰富，同时科技和医疗经济持续发展。它是中国最容易让学生从情感上喜欢的城市之一。",
    history: "Chengdu has long been associated with tea houses, literature, Sichuan cuisine, relaxed social life, and gateway access to western China. It lets students see a warmer, slower, more everyday side of China.",
    zhHistory: "成都长期与茶馆、文学、川菜、松弛社交和中国西部入口联系在一起。它能让学生看到更温暖、更慢、更日常的一面中国。",
    transport: "Chengdu has strong metro coverage, two airports, and high-speed rail links across western China. Students can reach mountains, old towns, Chongqing, Xi'an, and western Sichuan routes during breaks.",
    zhTransport: "成都地铁覆盖较好，有两个机场和连接西部中国的高铁网络。学生可以在假期去山地、古镇、重庆、西安和川西路线。",
    districts: [
      { name: "University areas", zhName: "大学区域", description: "Comfortable student neighborhoods, food, metro access, and campus services.", zhDescription: "学生社区、美食、地铁和校园服务较便利。" },
      { name: "High-tech Zone", zhName: "高新区", description: "Software, gaming, electronics, healthcare, and startup internships.", zhDescription: "软件、游戏、电子、医疗健康和创业实习集中。" },
      { name: "Old Chengdu", zhName: "老成都", description: "Tea houses, alleys, parks, food, and social rhythm.", zhDescription: "茶馆、巷子、公园、美食和成都社交节奏。" }
    ],
    visualBlocks: [
      { title: "Panda city", zhTitle: "大熊猫城市", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Young_Chengdu_panda.jpg?width=1200", imageAlt: "Giant panda in Chengdu", zhImageAlt: "成都大熊猫", sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Chengdu_panda.jpg", body: "Pandas are only one part of Chengdu's appeal, but they give the city an immediate emotional connection.", zhBody: "熊猫只是成都魅力的一部分，但它能立刻建立情感连接。" },
      { title: "Tea and slow life", zhTitle: "茶馆与慢生活", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Young_Chengdu_panda.jpg?width=1200", imageAlt: "Chengdu lifestyle context", zhImageAlt: "成都生活方式背景", sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Chengdu_panda.jpg", body: "Tea houses, parks, and food streets make Chengdu unusually easy for students to enjoy.", zhBody: "茶馆、公园和美食街，让成都特别容易被学生喜欢。" },
      { title: "Western China gateway", zhTitle: "中国西部门户", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Young_Chengdu_panda.jpg?width=1200", imageAlt: "Chengdu western China gateway", zhImageAlt: "成都西部门户", sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Chengdu_panda.jpg", body: "Chengdu is a base for western Sichuan scenery, Chongqing trips, and western China business.", zhBody: "成都也是川西风景、重庆旅行和中国西部商业的基地。" }
    ],
    routes: ["Slow Chengdu day: park, tea house, old street, hotpot, and night walk.", "Panda and culture day: panda base, museum, and local food.", "Western route: Dujiangyan, Qingcheng Mountain, Chongqing, or western Sichuan."],
    zhRoutes: ["慢成都一日：公园、茶馆、老街、火锅和夜间散步。", "熊猫与文化一日：熊猫基地、博物馆和本地美食。", "西部路线：都江堰、青城山、重庆或川西。"],
    fit: ["Students who want comfort, food, and social life.", "Students in medicine, electronics, software, gaming, business, and Chinese language.", "Students who want western China travel."],
    zhFit: ["适合看重舒适度、美食和社交生活的学生。", "适合医学、电子、软件、游戏、商科和中文方向。", "适合想探索中国西部的学生。"]
  },
  nanjing: {
    geography: "Nanjing sits on the Yangtze River and works as one of China's strongest university cities outside Beijing and Shanghai. It combines riverfront space, old capital history, research universities, museums, lower costs than Shanghai, and fast high-speed rail access across the Yangtze River Delta.",
    zhGeography: "南京位于长江沿岸，是北京、上海之外中国最强的大学城市之一。它把长江空间、古都历史、研究型大学、博物馆、比上海更低的生活成本，以及长三角高铁网络结合在一起。",
    history: "Nanjing has served as a capital in several periods of Chinese history. City walls, Ming Xiaoling, museums, Republic-era architecture, universities, and riverside districts make it an excellent place to understand Chinese history with less pressure than Beijing.",
    zhHistory: "南京在中国历史上多次承担都城功能。城墙、明孝陵、博物馆、民国建筑、大学和江边街区，让它成为一个比北京压力更小、但同样适合理解中国历史的城市。",
    transport: "Nanjing is a high-speed rail powerhouse. Shanghai, Suzhou, Hangzhou, Hefei, Yangzhou, and other cities are easy weekend routes. The metro also connects many campuses and historic districts.",
    zhTransport: "南京是高铁非常便利的城市，上海、苏州、杭州、合肥、扬州等都适合周末出行。地铁也能连接多个校区和历史街区。",
    districts: [
      { name: "Xianlin", zhName: "仙林", description: "Major university district with campuses, student housing, and quieter study life.", zhDescription: "重要大学区，有校区、学生住宿和较安静的学习生活。" },
      { name: "Gulou", zhName: "鼓楼", description: "Historic university atmosphere, hospitals, museums, and central urban life.", zhDescription: "历史大学氛围、医院、博物馆和中心城区生活。" },
      { name: "Hexi and riverside", zhName: "河西与江边", description: "Modern city growth, offices, transport, and riverfront spaces.", zhDescription: "现代城市发展、办公、交通和江边空间集中。" }
    ],
    visualBlocks: [
      { title: "Yangtze River Delta base", zhTitle: "长三角学习基地", image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg?width=1200", imageAlt: "Classical garden in Jiangsu near Nanjing", zhImageAlt: "南京周边江苏园林", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_%2837825378061%29.jpg", body: "Nanjing gives students historic depth while keeping Shanghai, Suzhou, and Hangzhou close by rail.", zhBody: "南京给学生历史纵深，同时又能通过高铁连接上海、苏州和杭州。" },
      { title: "Ancient capital atmosphere", zhTitle: "古都气质", image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg?width=1200", imageAlt: "Jiangsu cultural landscape", zhImageAlt: "江苏文化景观", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_%2837825378061%29.jpg", body: "Walls, museums, tree-lined roads, and old campuses make Nanjing calm but serious.", zhBody: "城墙、博物馆、林荫道路和老校区，让南京安静但很有厚度。" },
      { title: "Affordable research city", zhTitle: "成本友好的研究型城市", image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg?width=1200", imageAlt: "Nanjing and Jiangsu study context", zhImageAlt: "南京与江苏学习背景", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_%2837825378061%29.jpg", body: "Nanjing often feels more manageable than Shanghai while keeping strong university quality.", zhBody: "南京通常比上海更容易承受，同时保留很强的大学质量。" }
    ],
    routes: ["History day: city wall, museum, old campus streets, and evening food.", "University route: Xianlin or Gulou campuses, libraries, cafes, and student neighborhoods.", "Delta weekend: Shanghai, Suzhou, Hangzhou, or Yangzhou by high-speed rail."],
    zhRoutes: ["历史一日：城墙、博物馆、老校区街道和夜间美食。", "大学路线：仙林或鼓楼校区、图书馆、咖啡馆和学生社区。", "长三角周末：高铁去上海、苏州、杭州或扬州。"],
    fit: ["Students who want history, research universities, and manageable costs.", "Students in engineering, medicine, Chinese language, business, law, and humanities.", "Students who want Yangtze River Delta access without Shanghai-level pressure."],
    zhFit: ["适合想要历史、研究型大学和可控成本的学生。", "适合工程、医学、中文、商科、法律和人文方向。", "适合想进入长三角但不想承受上海压力的学生。"]
  },
  xiamen: {
    geography: "Xiamen is a coastal island city in Fujian, known for sea views, Gulangyu, warm weather, Southeast Asia connections, and a relaxed student rhythm. It is smaller and softer than the largest Chinese cities, which makes it attractive for students who want comfort, scenery, and a manageable pace.",
    zhGeography: "厦门是福建的滨海岛城，以海景、鼓浪屿、温暖气候、面向东南亚的联系和较轻松的学生节奏闻名。它比中国最大的城市更小、更柔和，适合想要舒适、风景和可控生活节奏的学生。",
    history: "Xiamen's history is shaped by maritime trade, overseas Chinese communities, island culture, architecture, music, and coastal openness. It helps students understand a different China: maritime, entrepreneurial, outward-looking, and highly livable.",
    zhHistory: "厦门的历史与海上贸易、华侨社群、岛屿文化、建筑、音乐和沿海开放有关。它能帮助学生理解另一种中国：海洋型、创业型、面向外部世界且宜居。",
    transport: "Xiamen has an airport, rail links, buses, BRT, and compact urban distances. It is also a useful base for Fujian coastal trips, tulou routes, Quanzhou, Fuzhou, and Southeast Asia-facing travel.",
    zhTransport: "厦门有机场、铁路、公交、BRT，城市距离相对紧凑。它也适合作为福建沿海旅行、土楼、泉州、福州和面向东南亚旅行的基地。",
    districts: [
      { name: "Xiamen Island", zhName: "厦门岛内", description: "Sea views, food, cafes, culture, hospitals, and convenient daily life.", zhDescription: "海景、美食、咖啡馆、文化、医院和便利日常生活集中。" },
      { name: "Jimei", zhName: "集美", description: "Campus atmosphere, education history, lower pressure, and student-friendly living.", zhDescription: "校园氛围、教育历史、压力较低和学生友好的生活。" },
      { name: "Gulangyu and old streets", zhName: "鼓浪屿与老街", description: "Architecture, music, walking routes, and first-time visitor appeal.", zhDescription: "建筑、音乐、步行路线和初到中国的吸引力。" }
    ],
    visualBlocks: [
      { title: "Xiamen and Gulangyu", zhTitle: "厦门与鼓浪屿", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xiamen.jpg?width=1200", imageAlt: "Xiamen viewed from Gulangyu Island", zhImageAlt: "从鼓浪屿看厦门", sourceUrl: "https://commons.wikimedia.org/wiki/File:Xiamen.jpg", body: "Xiamen's sea, island, and architecture make it one of China's most relaxed study cities.", zhBody: "厦门的海、岛屿和建筑，让它成为中国最放松的留学城市之一。" },
      { title: "Coastal study life", zhTitle: "滨海学习生活", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xiamen.jpg?width=1200", imageAlt: "Xiamen coastal student life", zhImageAlt: "厦门滨海学生生活", sourceUrl: "https://commons.wikimedia.org/wiki/File:Xiamen.jpg", body: "Students can combine classes with sea walks, cafes, cycling, and short island trips.", zhBody: "学生可以把上课、海边散步、咖啡馆、骑行和短途海岛旅行结合起来。" },
      { title: "Fujian travel base", zhTitle: "福建旅行基地", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xiamen.jpg?width=1200", imageAlt: "Xiamen Fujian travel base", zhImageAlt: "厦门福建旅行基地", sourceUrl: "https://commons.wikimedia.org/wiki/File:Xiamen.jpg", body: "Xiamen is a comfortable starting point for Quanzhou, tulou, Fuzhou, and coastal Fujian.", zhBody: "厦门很适合作为泉州、土楼、福州和福建沿海旅行的起点。" }
    ],
    routes: ["First weekend: Gulangyu, old streets, sea walk, and local seafood.", "Campus day: university area, beach road, cafes, and evening market.", "Fujian extension: Quanzhou, tulou, or Fuzhou."],
    zhRoutes: ["第一次周末：鼓浪屿、老街、海边散步和本地海鲜。", "校园一日：大学周边、环岛路、咖啡馆和夜市。", "福建延伸：泉州、土楼或福州。"],
    fit: ["Students who want a beautiful coastal city and manageable pace.", "Students in Chinese language, business, marine studies, medicine, and Southeast Asia-related fields.", "Students who value comfort and scenery as much as rankings."],
    zhFit: ["适合想要美丽滨海城市和可控节奏的学生。", "适合中文、商科、海洋、医学和东南亚相关方向。", "适合把舒适度和风景看得和排名一样重要的学生。"]
  },
  tianjin: {
    geography: "Tianjin is a port city next to Beijing, with Hai River scenery, historic architecture, engineering universities, lower living costs, and direct high-speed rail access to the capital. It is useful for students who want North China resources without Beijing's full cost and pressure.",
    zhGeography: "天津是北京旁边的港口城市，有海河风景、近代建筑、工程类高校、较低生活成本，以及通往北京的高铁。它适合想要华北资源、但不想承担北京完整成本和压力的学生。",
    history: "Tianjin's modern history is visible in riverfront architecture, former concession streets, port culture, business history, and a direct relationship with Beijing. It feels practical, compact, and surprisingly international in its historic districts.",
    zhHistory: "天津的近代历史可以在海河建筑、历史街区、港口文化、商业历史和与北京的关系中看到。它务实、相对紧凑，历史街区也有意外的国际感。",
    transport: "Tianjin's biggest advantage is mobility. Beijing can be reached very quickly by high-speed rail, and the city has metro, airport, port, and rail links across North China.",
    zhTransport: "天津最大的优势是移动便利。高铁可以很快到北京，市内也有地铁、机场、港口和连接华北的铁路网络。",
    districts: [
      { name: "Hai River", zhName: "海河沿线", description: "River views, historic architecture, night walks, and city identity.", zhDescription: "河景、近代建筑、夜间散步和城市形象集中。" },
      { name: "University zones", zhName: "大学区域", description: "Engineering education, student housing, and lower-pressure daily life.", zhDescription: "工程教育、学生住宿和压力较低的日常生活。" },
      { name: "Binhai", zhName: "滨海", description: "Port economy, industry, logistics, and modern development zones.", zhDescription: "港口经济、产业、物流和现代开发区集中。" }
    ],
    visualBlocks: [
      { title: "Hai River cityscape", zhTitle: "海河城市景观", image: "https://commons.wikimedia.org/wiki/Special:FilePath/21134-Tianjin_%2849063244163%29.jpg?width=1200", imageAlt: "Hai River cityscape in Tianjin", zhImageAlt: "天津海河城市景观", sourceUrl: "https://commons.wikimedia.org/wiki/File:21134-Tianjin_%2849063244163%29.jpg", body: "The Hai River gives Tianjin a walkable, historic, and relaxed urban center.", zhBody: "海河让天津拥有适合步行、历史感强且相对放松的城市中心。" },
      { title: "Beijing access", zhTitle: "连接北京", image: "https://commons.wikimedia.org/wiki/Special:FilePath/21134-Tianjin_%2849063244163%29.jpg?width=1200", imageAlt: "Tianjin near Beijing", zhImageAlt: "天津连接北京", sourceUrl: "https://commons.wikimedia.org/wiki/File:21134-Tianjin_%2849063244163%29.jpg", body: "Students can study in a lower-cost city while still reaching Beijing for events, interviews, and travel.", zhBody: "学生可以在成本较低的城市学习，同时仍能去北京参加活动、面试和旅行。" },
      { title: "Port and engineering", zhTitle: "港口与工程", image: "https://commons.wikimedia.org/wiki/Special:FilePath/21134-Tianjin_%2849063244163%29.jpg?width=1200", imageAlt: "Tianjin port and engineering context", zhImageAlt: "天津港口与工程背景", sourceUrl: "https://commons.wikimedia.org/wiki/File:21134-Tianjin_%2849063244163%29.jpg", body: "Engineering, logistics, port economy, and manufacturing are practical strengths.", zhBody: "工程、物流、港口经济和制造业是天津的实际优势。" }
    ],
    routes: ["Hai River first day: historic streets, bridges, river walk, and local food.", "Beijing extension: high-speed rail to museums, universities, or the Great Wall.", "Engineering route: campus visits, port/industry context, and Binhai development zone."],
    zhRoutes: ["海河第一天：历史街区、桥梁、河边散步和本地美食。", "北京延伸：高铁去博物馆、大学或长城。", "工程路线：校园参访、港口/产业背景和滨海新区。"],
    fit: ["Students who want North China access with lower costs.", "Engineering, architecture, medicine, logistics, and business students.", "Students who want to use Beijing without living fully inside Beijing."],
    zhFit: ["适合想要华北资源但控制成本的学生。", "适合工程、建筑、医学、物流和商科方向。", "适合想利用北京资源但不完全住在北京的学生。"]
  },
  harbin: {
    geography: "Harbin is a major northeastern city shaped by cold winters, wide streets, engineering education, Russian-influenced architecture, and ice-and-snow culture. It offers a very different China experience from coastal megacities: lower costs, strong technical universities, and unforgettable winter scenery.",
    zhGeography: "哈尔滨是中国东北的重要城市，以寒冷冬季、宽阔街道、工程教育、俄式建筑和冰雪文化闻名。它提供了不同于沿海大城市的中国体验：成本较低、技术类高校强、冬季景观非常难忘。",
    history: "Harbin's modern identity grew through railway construction, northeast industry, Russian-style streets, music, engineering education, and winter festivals. For students, it is a good place to understand China's northeast, industry, resilience, and seasonal culture.",
    zhHistory: "哈尔滨的现代气质来自铁路建设、东北工业、俄式街区、音乐、工程教育和冰雪节。对学生来说，它适合理解中国东北、工业、坚韧性和季节文化。",
    transport: "Harbin has metro lines, rail connections across northeast China, and an airport. Winter weather requires preparation, but the city rewards students with a distinctive seasonal lifestyle.",
    zhTransport: "哈尔滨有地铁、连接东北各地的铁路和机场。冬季天气需要准备，但这座城市会给学生非常独特的季节生活体验。",
    districts: [
      { name: "Central Street", zhName: "中央大街", description: "Historic architecture, food, walking, and first impressions of Harbin.", zhDescription: "历史建筑、美食、步行和哈尔滨第一印象集中。" },
      { name: "University areas", zhName: "大学区域", description: "Engineering campuses, lower costs, student dining, and research atmosphere.", zhDescription: "工程校区、较低成本、学生餐饮和科研氛围集中。" },
      { name: "Ice and Snow zones", zhName: "冰雪区域", description: "Winter festivals, snow sculpture, river ice, and seasonal tourism.", zhDescription: "冰雪节、雪雕、江面冰雪和季节性旅游集中。" }
    ],
    visualBlocks: [
      { title: "Ice and Snow Festival", zhTitle: "哈尔滨冰雪节", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harbin_Ice_%26_Snow_Festival_2026.jpg?width=1200", imageAlt: "Harbin Ice and Snow Festival", zhImageAlt: "哈尔滨冰雪节", sourceUrl: "https://commons.wikimedia.org/wiki/File:Harbin_Ice_%26_Snow_Festival_2026.jpg", body: "Harbin's winter is not just cold; it is a major cultural and visual experience.", zhBody: "哈尔滨的冬天不只是冷，而是一种大型文化和视觉体验。" },
      { title: "Engineering study city", zhTitle: "工程学习城市", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harbin_Ice_%26_Snow_Festival_2026.jpg?width=1200", imageAlt: "Harbin engineering student city", zhImageAlt: "哈尔滨工程学生城市", sourceUrl: "https://commons.wikimedia.org/wiki/File:Harbin_Ice_%26_Snow_Festival_2026.jpg", body: "Harbin is especially relevant for engineering, aerospace, materials, computing, and technology students.", zhBody: "哈尔滨尤其适合工程、航天、材料、计算机和技术方向的学生。" },
      { title: "Northeast China culture", zhTitle: "东北中国文化", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harbin_Ice_%26_Snow_Festival_2026.jpg?width=1200", imageAlt: "Harbin northeast China winter", zhImageAlt: "哈尔滨东北冬季", sourceUrl: "https://commons.wikimedia.org/wiki/File:Harbin_Ice_%26_Snow_Festival_2026.jpg", body: "Food, winter clothing, heating, direct communication, and snow culture all make Harbin memorable.", zhBody: "美食、冬装、供暖、直爽交流和冰雪文化，让哈尔滨非常有记忆点。" }
    ],
    routes: ["Winter first route: Central Street, river ice, Ice and Snow Festival, and hot northeast food.", "Engineering route: campus visits, labs, student dining, and technology museums.", "Northeast extension: Changchun, Jilin, Dalian, or snow routes during holidays."],
    zhRoutes: ["冬季第一路线：中央大街、江面冰雪、冰雪节和热腾腾东北菜。", "工程路线：校园参访、实验室、学生食堂和科技类场馆。", "东北延伸：假期去长春、吉林、大连或雪景路线。"],
    fit: ["Students who want strong engineering with lower costs.", "Students who are curious about winter, northeast culture, and a different China experience.", "Students who can prepare for cold weather and seasonal life."],
    zhFit: ["适合想要强工程教育和较低成本的学生。", "适合对冬季、东北文化和不同中国体验好奇的学生。", "适合能认真准备寒冷天气和季节生活的学生。"]
  }
};
