export type ProvinceImageOverride = {
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  imageTopic: string;
  zhImageTopic: string;
  imageSourceLabel: string;
  imageSourceUrl?: string;
};

export const provinceImageOverrides: Record<string, ProvinceImageOverride> = {
  // Every override must depict the named topic in the named province. This table is
  // deliberately separate from editorial copy so imagery can be audited and replaced.
  beijing: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/67052-The-Great-Wall%2C_Mutianyu.jpg?width=1200",
    imageAlt: "Mutianyu Great Wall in Beijing",
    zhImageAlt: "北京慕田峪长城",
    imageTopic: "Mutianyu Great Wall",
    zhImageTopic: "慕田峪长城",
    imageSourceLabel: "Wikimedia Commons · CC BY 2.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:67052-The-Great-Wall,_Mutianyu.jpg"
  },
  shanghai: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_skyline_from_the_bund.jpg?width=1200",
    imageAlt: "Shanghai skyline viewed from the Bund",
    zhImageAlt: "从外滩眺望上海天际线",
    imageTopic: "The Bund skyline",
    zhImageTopic: "外滩天际线",
    imageSourceLabel: "Wikimedia Commons · CC0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Shanghai_skyline_from_the_bund.jpg"
  },
  zhejiang: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/WestLake_-_Hangzhou.jpg?width=1200",
    imageAlt: "West Lake in Hangzhou, Zhejiang",
    zhImageAlt: "浙江杭州西湖",
    imageTopic: "Hangzhou West Lake",
    zhImageTopic: "杭州西湖",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:WestLake_-_Hangzhou.jpg"
  },
  hunan: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhangjiajie_National_Forest_Park.jpg?width=1200",
    imageAlt: "Zhangjiajie National Forest Park in Hunan",
    zhImageAlt: "湖南张家界国家森林公园",
    imageTopic: "Zhangjiajie National Forest Park",
    zhImageTopic: "张家界国家森林公园",
    imageSourceLabel: "Wikimedia Commons · CC BY 2.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Zhangjiajie_National_Forest_Park.jpg"
  },
  guangxi: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/20090503_6305_Guilin.jpg?width=1200",
    imageAlt: "Guilin and Li River karst landscape in Guangxi",
    zhImageAlt: "广西桂林漓江喀斯特山水",
    imageTopic: "Guilin and the Li River",
    zhImageTopic: "桂林漓江山水",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:20090503_6305_Guilin.jpg"
  },
  sichuan: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Young_Chengdu_panda.jpg?width=1200",
    imageAlt: "Giant panda at Chengdu in Sichuan",
    zhImageAlt: "四川成都大熊猫",
    imageTopic: "Chengdu giant panda",
    zhImageTopic: "成都大熊猫",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Chengdu_panda.jpg"
  },
  shaanxi: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xi%27an_City_Wall_%2848696360238%29.jpg?width=1200",
    imageAlt: "Xi'an City Wall in Shaanxi",
    zhImageAlt: "陕西西安城墙",
    imageTopic: "Xi'an City Wall",
    zhImageTopic: "西安城墙",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_City_Wall_%2848696360238%29.jpg"
  },
  heilongjiang: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harbin_Ice_%26_Snow_Festival_2026.jpg?width=1200",
    imageAlt: "Harbin Ice and Snow Festival in Heilongjiang",
    zhImageAlt: "黑龙江哈尔滨冰雪节",
    imageTopic: "Harbin Ice and Snow Festival",
    zhImageTopic: "哈尔滨冰雪节",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Harbin_Ice_%26_Snow_Festival_2026.jpg"
  },
  jiangsu: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg?width=1200",
    imageAlt: "Humble Administrator's Garden in Suzhou, Jiangsu",
    zhImageAlt: "江苏苏州拙政园",
    imageTopic: "Suzhou classical gardens",
    zhImageTopic: "苏州古典园林",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 2.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_%2837825378061%29.jpg"
  },
  fujian: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xiamen.jpg?width=1200",
    imageAlt: "Xiamen viewed from Gulangyu Island in Fujian",
    zhImageAlt: "从鼓浪屿眺望福建厦门",
    imageTopic: "Xiamen and Gulangyu",
    zhImageTopic: "厦门与鼓浪屿",
    imageSourceLabel: "Wikimedia Commons · Public domain",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Xiamen.jpg"
  },
  guangdong: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Canton-Tower-001.jpg?width=1200",
    imageAlt: "Canton Tower in Guangzhou, Guangdong",
    zhImageAlt: "广东广州塔",
    imageTopic: "Guangzhou Canton Tower",
    zhImageTopic: "广州塔",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 2.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Canton-Tower-001.jpg"
  },
  hainan: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yalong_Bay%2C_Sanya%2C_Hainan_Island_%2810098682646%29.jpg?width=1200",
    imageAlt: "Yalong Bay in Sanya, Hainan",
    zhImageAlt: "海南三亚亚龙湾",
    imageTopic: "Sanya Yalong Bay",
    zhImageTopic: "三亚亚龙湾",
    imageSourceLabel: "Wikimedia Commons · CC0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Yalong_Bay,_Sanya,_Hainan_Island_%2810098682646%29.jpg"
  },
  chongqing: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing_Skyline_At_Night.png?width=1200",
    imageAlt: "Chongqing skyline, Hongya Cave, and Qiansimen Bridge at night",
    zhImageAlt: "重庆洪崖洞与千厮门大桥夜景",
    imageTopic: "Chongqing mountain-city night",
    zhImageTopic: "重庆山城夜景",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Chongqing_Skyline_At_Night.png"
  },
  shandong: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg?width=1200",
    imageAlt: "Aerial view of coastal Qingdao in Shandong",
    zhImageAlt: "山东青岛海滨城市航拍",
    imageTopic: "Qingdao coastline",
    zhImageTopic: "青岛海滨",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg"
  },
  shanxi: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1_pingyao_ancient_city_aerial_pano_2019.jpg?width=1200",
    imageAlt: "Aerial panorama of Pingyao Ancient City in Shanxi",
    zhImageAlt: "山西平遥古城航拍",
    imageTopic: "Pingyao Ancient City",
    zhImageTopic: "平遥古城",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:1_pingyao_ancient_city_aerial_pano_2019.jpg"
  },
  "inner-mongolia": {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hulunbuir_Grasslands%2C_Inner_Mongolia_-_9758734754.jpg?width=1200",
    imageAlt: "Hulunbuir Grasslands in Inner Mongolia",
    zhImageAlt: "内蒙古呼伦贝尔草原",
    imageTopic: "Hulunbuir Grasslands",
    zhImageTopic: "呼伦贝尔草原",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Hulunbuir_Grasslands,_Inner_Mongolia_-_9758734754.jpg"
  },
  anhui: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dense_fog_over_Huangshan_%28Unsplash%29.jpg?width=1200",
    imageAlt: "Fog over Huangshan mountain ridges in Anhui",
    zhImageAlt: "安徽黄山云雾",
    imageTopic: "Huangshan",
    zhImageTopic: "黄山",
    imageSourceLabel: "Wikimedia Commons · Unsplash",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Dense_fog_over_Huangshan_%28Unsplash%29.jpg"
  },
  hubei: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/East_Lake_Wuhan.JPG?width=1200",
    imageAlt: "East Lake in Wuhan, Hubei",
    zhImageAlt: "湖北武汉东湖",
    imageTopic: "Wuhan East Lake",
    zhImageTopic: "武汉东湖",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:East_Lake_Wuhan.JPG"
  },
  henan: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/27407-Luoyang%2C_Longmen_Grottoes.jpg?width=1200",
    imageAlt: "Longmen Grottoes in Luoyang, Henan",
    zhImageAlt: "河南洛阳龙门石窟",
    imageTopic: "Longmen Grottoes",
    zhImageTopic: "龙门石窟",
    imageSourceLabel: "Wikimedia Commons · CC BY 2.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:27407-Luoyang,_Longmen_Grottoes.jpg"
  },
  yunnan: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dali_Yunnan_China_West-gate-of-old-town-Dali-01.jpg?width=1200",
    imageAlt: "West gate of Dali Old Town in Yunnan",
    zhImageAlt: "云南大理古城苍山门",
    imageTopic: "Dali Old Town",
    zhImageTopic: "大理古城",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Dali_Yunnan_China_West-gate-of-old-town-Dali-01.jpg"
  },
  qinghai: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qinghai_Lake.jpg?width=1200",
    imageAlt: "Qinghai Lake and highland landscape",
    zhImageAlt: "青海湖高原风景",
    imageTopic: "Qinghai Lake",
    zhImageTopic: "青海湖",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 2.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Qinghai_Lake.jpg"
  },
  xizang: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lhasa_Potala.jpg?width=1200",
    imageAlt: "Potala Palace in Lhasa, Xizang",
    zhImageAlt: "西藏拉萨布达拉宫",
    imageTopic: "Lhasa Potala Palace",
    zhImageTopic: "拉萨布达拉宫",
    imageSourceLabel: "Wikimedia Commons · CC0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Lhasa_Potala.jpg"
  },
  jilin: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Changbai-Gebirge.jpg?width=1200",
    imageAlt: "Heaven Lake in the Changbai Mountains, Jilin",
    zhImageAlt: "吉林长白山天池",
    imageTopic: "Changbai Mountain Heaven Lake",
    zhImageTopic: "长白山天池",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Changbai-Gebirge.jpg"
  },
  tianjin: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/21134-Tianjin_%2849063244163%29.jpg?width=1200",
    imageAlt: "Hai River cityscape in Tianjin",
    zhImageAlt: "天津海河城市风景",
    imageTopic: "Tianjin Hai River",
    zhImageTopic: "天津海河",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:21134-Tianjin_%2849063244163%29.jpg"
  },
  hebei: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chengde_Mountain_Resort02.jpg?width=1200",
    imageAlt: "Chengde Mountain Resort in Hebei",
    zhImageAlt: "河北承德避暑山庄",
    imageTopic: "Chengde Mountain Resort",
    zhImageTopic: "承德避暑山庄",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Chengde_Mountain_Resort02.jpg"
  },
  guizhou: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pretty_huangguoshu.jpg?width=1200",
    imageAlt: "Huangguoshu Waterfall in Guizhou",
    zhImageAlt: "贵州黄果树瀑布",
    imageTopic: "Huangguoshu Waterfall",
    zhImageTopic: "黄果树瀑布",
    imageSourceLabel: "Wikimedia Commons · Public domain",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Pretty_huangguoshu.jpg"
  },
  xinjiang: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xinjiang_landscape_IGP4167.jpg?width=1200",
    imageAlt: "Mountain landscape in Xinjiang",
    zhImageAlt: "新疆山地风景",
    imageTopic: "Xinjiang mountain landscape",
    zhImageTopic: "新疆山地风景",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Xinjiang_landscape_IGP4167.jpg"
  },
  "hong-kong": {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Victoria_Harbour_skyline%2C_Hong_Kong_%282008%29.jpg?width=1200",
    imageAlt: "Victoria Harbour skyline in Hong Kong",
    zhImageAlt: "香港维多利亚港天际线",
    imageTopic: "Victoria Harbour",
    zhImageTopic: "维多利亚港",
    imageSourceLabel: "Wikimedia Commons · CC BY 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Victoria_Harbour_skyline,_Hong_Kong_%282008%29.jpg"
  },
  macao: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Ruins_of_St._Paul%27s_in_Macau.jpg?width=1200",
    imageAlt: "Ruins of St. Paul's in Macao",
    zhImageAlt: "澳门大三巴牌坊",
    imageTopic: "Ruins of St. Paul's",
    zhImageTopic: "大三巴牌坊",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:The_Ruins_of_St._Paul%27s_in_Macau.jpg"
  },
  taiwan: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2015_Taipei_skyline_viewed_from_Taipei_101.jpg?width=1200",
    imageAlt: "Taipei skyline viewed from Taipei 101",
    zhImageAlt: "从台北101眺望台北城市风景",
    imageTopic: "Taipei skyline",
    zhImageTopic: "台北城市风景",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:2015_Taipei_skyline_viewed_from_Taipei_101.jpg"
  },
  liaoning: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xinghai_Square_20160916.jpg?width=1200",
    imageAlt: "Xinghai Square in Dalian, Liaoning",
    zhImageAlt: "辽宁大连星海广场",
    imageTopic: "Dalian Xinghai Square",
    zhImageTopic: "大连星海广场",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Xinghai_Square_20160916.jpg"
  },
  jiangxi: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wuyuan.JPG?width=1200",
    imageAlt: "Traditional village scenery in Wuyuan, Jiangxi",
    zhImageAlt: "江西婺源乡村风景",
    imageTopic: "Wuyuan villages",
    zhImageTopic: "婺源村落",
    imageSourceLabel: "Wikimedia Commons · CC BY-SA 3.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Wuyuan.JPG"
  },
  gansu: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mogao_Caves_%2854376968807%29.jpg?width=1200",
    imageAlt: "Mogao Caves near Dunhuang, Gansu",
    zhImageAlt: "甘肃敦煌莫高窟",
    imageTopic: "Dunhuang Mogao Caves",
    zhImageTopic: "敦煌莫高窟",
    imageSourceLabel: "Wikimedia Commons · CC BY 2.0",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Mogao_Caves_%2854376968807%29.jpg"
  },
  ningxia: {
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shapotou.jpg?width=1200",
    imageAlt: "Shapotou desert and Yellow River landscape in Ningxia",
    zhImageAlt: "宁夏沙坡头沙漠与黄河风景",
    imageTopic: "Shapotou desert",
    zhImageTopic: "沙坡头",
    imageSourceLabel: "Wikimedia Commons",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Shapotou.jpg"
  }
};
