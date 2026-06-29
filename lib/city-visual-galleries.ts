export type CityVisualGalleryItem = {
  title: string;
  zhTitle: string;
  image: string;
  alt: string;
  zhAlt: string;
  note: string;
  zhNote: string;
  sourceUrl?: string;
};

type CityVisualFallback = {
  name: string;
  zhName: string;
  provinceName: string;
  zhProvinceName: string;
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  tourism: string;
  zhTourism: string;
};

const commonsImage = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1200`;

export const cityVisualGalleries: Record<string, CityVisualGalleryItem[]> = {
  beijing: [
    {
      title: "Great Wall weekend",
      zhTitle: "长城周末",
      image: commonsImage("The_Great_Wall_of_China_at_Jinshanling-edit.jpg"),
      alt: "Great Wall near Beijing",
      zhAlt: "北京周边长城",
      note: "The strongest first outdoor memory for many students in northern China.",
      zhNote: "很多留学生在华北最强烈的第一次户外记忆。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
    },
    {
      title: "Forbidden City roofs",
      zhTitle: "故宫屋脊",
      image: commonsImage("Forbidden_City_Beijing_Shenwumen_Gate.JPG"),
      alt: "Forbidden City in Beijing",
      zhAlt: "北京故宫",
      note: "A visual route into imperial architecture, museums, and old Beijing.",
      zhNote: "进入皇家建筑、博物馆和老北京的一条视觉路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Forbidden_City_Beijing_Shenwumen_Gate.JPG"
    },
    {
      title: "Hutong streets",
      zhTitle: "胡同街巷",
      image: commonsImage("Beijing_hutong_2009.JPG"),
      alt: "Beijing hutong street",
      zhAlt: "北京胡同街巷",
      note: "Good for food walks, cafes, language practice, and everyday city texture.",
      zhNote: "适合美食步行、咖啡、语言练习和理解日常城市肌理。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Beijing_hutong_2009.JPG"
    }
  ],
  shanghai: [
    {
      title: "Bund skyline",
      zhTitle: "外滩天际线",
      image: commonsImage("Shanghai_Skyline_2017.jpg"),
      alt: "Shanghai skyline",
      zhAlt: "上海天际线",
      note: "A direct image of modern China for students and visiting families.",
      zhNote: "学生和来访家人理解现代中国的直接画面。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shanghai_Skyline_2017.jpg"
    },
    {
      title: "Historic lanes",
      zhTitle: "历史街区",
      image: commonsImage("Shanghai_French_Concession_Street.JPG"),
      alt: "Former French Concession street in Shanghai",
      zhAlt: "上海老街区",
      note: "Coffee, bakeries, galleries, and walkable youth culture.",
      zhNote: "咖啡、面包店、画廊和适合步行的青年文化。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shanghai_French_Concession_Street.JPG"
    },
    {
      title: "Water-town weekends",
      zhTitle: "水乡周末",
      image: commonsImage("Zhujiajiao_Canal.jpg"),
      alt: "Zhujiajiao water town near Shanghai",
      zhAlt: "上海周边水乡",
      note: "A soft contrast to Shanghai's speed and density.",
      zhNote: "与上海的速度和密度形成温柔对比。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Zhujiajiao_Canal.jpg"
    }
  ],
  hangzhou: [
    {
      title: "West Lake",
      zhTitle: "西湖",
      image: commonsImage("West_Lake,_Hangzhou.jpg"),
      alt: "West Lake in Hangzhou",
      zhAlt: "杭州西湖",
      note: "The everyday visual anchor of Hangzhou student life.",
      zhNote: "杭州学生生活最重要的日常视觉锚点。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:West_Lake,_Hangzhou.jpg"
    },
    {
      title: "Longjing tea fields",
      zhTitle: "龙井茶田",
      image: commonsImage("Longjing_tea_fields_-_Hangzhou.jpg"),
      alt: "Longjing tea fields in Hangzhou",
      zhAlt: "杭州龙井茶田",
      note: "A calm afternoon route for Chinese tea culture and hospitality.",
      zhNote: "理解中国茶文化和待客方式的安静下午路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Longjing_tea_fields_-_Hangzhou.jpg"
    },
    {
      title: "Canal life",
      zhTitle: "运河生活",
      image: commonsImage("Grand_Canal_Hangzhou_China.jpg"),
      alt: "Grand Canal in Hangzhou",
      zhAlt: "杭州运河",
      note: "Good for night walks, local food, and slower city rhythm.",
      zhNote: "适合夜间散步、本地美食和更慢的城市节奏。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Grand_Canal_Hangzhou_China.jpg"
    }
  ],
  guangzhou: [
    {
      title: "Pearl River night",
      zhTitle: "珠江夜景",
      image: commonsImage("Guangzhou_CBD_and_Canton_Tower_at_night.jpg"),
      alt: "Guangzhou skyline and Canton Tower",
      zhAlt: "广州天际线与广州塔",
      note: "A warm first impression of south China city life.",
      zhNote: "理解中国南方城市生活的温暖第一印象。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Guangzhou_CBD_and_Canton_Tower_at_night.jpg"
    },
    {
      title: "Old Canton streets",
      zhTitle: "广府老街",
      image: commonsImage("Shangxiajiu_Pedestrian_Street_Guangzhou.jpg"),
      alt: "Old Canton pedestrian street in Guangzhou",
      zhAlt: "广州老街",
      note: "Food, arcades, local memory, and walkable culture.",
      zhNote: "美食、骑楼、本地记忆和可步行文化。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Shangxiajiu_Pedestrian_Street_Guangzhou.jpg"
    },
    {
      title: "Dim sum table",
      zhTitle: "早茶餐桌",
      image: commonsImage("Dim_sum_breakfast.jpg"),
      alt: "Cantonese dim sum table",
      zhAlt: "广式早茶点心",
      note: "The easiest social ritual for understanding Cantonese life.",
      zhNote: "理解广府生活最容易进入的社交仪式。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dim_sum_breakfast.jpg"
    }
  ],
  wuhan: [
    {
      title: "East Lake cycling",
      zhTitle: "东湖骑行",
      image: commonsImage("East_Lake_Wuhan.jpg"),
      alt: "East Lake in Wuhan",
      zhAlt: "武汉东湖",
      note: "A student-friendly outdoor route that connects campuses, cafes, and lakeside breaks.",
      zhNote: "把校园、咖啡馆和湖边休息串起来的学生友好户外路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Lake_Wuhan.jpg"
    },
    {
      title: "Yangtze River bridge",
      zhTitle: "长江大桥",
      image: commonsImage("Wuhan_Yangtze_River_Bridge.jpg"),
      alt: "Wuhan Yangtze River Bridge",
      zhAlt: "武汉长江大桥",
      note: "The bridge gives first-time visitors a clear sense of Wuhan's scale and central-China identity.",
      zhNote: "让第一次来的人立刻感受到武汉的尺度和中国中部城市身份。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wuhan_Yangtze_River_Bridge.jpg"
    },
    {
      title: "Yellow Crane Tower",
      zhTitle: "黄鹤楼",
      image: commonsImage("Yellow_Crane_Tower_Wuhan.jpg"),
      alt: "Yellow Crane Tower in Wuhan",
      zhAlt: "武汉黄鹤楼",
      note: "A direct visual connection between poetry, river culture, and city history.",
      zhNote: "把诗词、江河文化和城市历史连接起来的经典画面。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Yellow_Crane_Tower_Wuhan.jpg"
    }
  ],
  nanjing: [
    {
      title: "Qinhuai night walk",
      zhTitle: "秦淮夜游",
      image: commonsImage("Qinhuai_River_Nanjing.jpg"),
      alt: "Qinhuai River in Nanjing",
      zhAlt: "南京秦淮河",
      note: "A classic night route for students, parents, and first-time visitors.",
      zhNote: "适合学生、家长和第一次来中国朋友的经典夜间路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Qinhuai_River_Nanjing.jpg"
    },
    {
      title: "Scholarly avenues",
      zhTitle: "梧桐大道",
      image: commonsImage("Nanjing_Platanus_road.jpg"),
      alt: "Plane-tree avenue in Nanjing",
      zhAlt: "南京梧桐大道",
      note: "The quiet visual symbol of Nanjing's academic and historical character.",
      zhNote: "南京学术气质和历史感的安静视觉符号。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanjing_Platanus_road.jpg"
    },
    {
      title: "Museum city",
      zhTitle: "博物馆之城",
      image: commonsImage("Nanjing_Museum.jpg"),
      alt: "Nanjing Museum",
      zhAlt: "南京博物院",
      note: "A strong cultural anchor for students who want depth beyond sightseeing.",
      zhNote: "适合希望不止打卡、还要理解中国文化深度的学生。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanjing_Museum.jpg"
    }
  ],
  xiamen: [
    {
      title: "Gulangyu island",
      zhTitle: "鼓浪屿",
      image: commonsImage("Gulangyu_Island.jpg"),
      alt: "Gulangyu Island in Xiamen",
      zhAlt: "厦门鼓浪屿",
      note: "Island walks, music history, cafes, and soft coastal scenery in one route.",
      zhNote: "一条路线里有海岛散步、音乐历史、咖啡馆和温柔海岸风景。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gulangyu_Island.jpg"
    },
    {
      title: "Coastal campus mood",
      zhTitle: "海岸校园感",
      image: commonsImage("Xiamen_University_campus.jpg"),
      alt: "Xiamen University campus",
      zhAlt: "厦门大学校园",
      note: "Xiamen's campus appeal is strongly connected to the sea, trees, and walkable neighborhoods.",
      zhNote: "厦门的校园吸引力和海、树、步行街区紧密相关。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Xiamen_University_campus.jpg"
    },
    {
      title: "Coastal road",
      zhTitle: "环岛路",
      image: commonsImage("Xiamen_Huandao_Road.jpg"),
      alt: "Coastal road in Xiamen",
      zhAlt: "厦门环岛路",
      note: "A low-cost walk or ride that explains why students remember Xiamen.",
      zhNote: "低成本步行或骑行，就能理解为什么学生容易记住厦门。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Xiamen_Huandao_Road.jpg"
    }
  ],
  tianjin: [
    {
      title: "Haihe riverfront",
      zhTitle: "海河岸线",
      image: commonsImage("Haihe_River_Tianjin.jpg"),
      alt: "Haihe River in Tianjin",
      zhAlt: "天津海河",
      note: "Evening river walks show Tianjin's relaxed northern port-city rhythm.",
      zhNote: "夜间沿河散步能看到天津轻松的北方港口城市节奏。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Haihe_River_Tianjin.jpg"
    },
    {
      title: "European-style streets",
      zhTitle: "五大道街区",
      image: commonsImage("Five_Great_Avenues_Tianjin.jpg"),
      alt: "Five Great Avenues in Tianjin",
      zhAlt: "天津五大道",
      note: "Architecture, cafes, museums, and cycling make a friendly first weekend route.",
      zhNote: "建筑、咖啡馆、博物馆和骑行，可以组成很友好的第一个周末路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Five_Great_Avenues_Tianjin.jpg"
    },
    {
      title: "High-speed rail gateway",
      zhTitle: "高铁门户",
      image: commonsImage("Tianjin_Railway_Station.jpg"),
      alt: "Tianjin railway station and city transport",
      zhAlt: "天津铁路交通",
      note: "Tianjin is close to Beijing while offering a calmer study and living base.",
      zhNote: "天津离北京近，同时生活节奏更舒缓，适合作为学习和生活基地。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tianjin_Railway_Station.jpg"
    }
  ],
  chengdu: [
    {
      title: "Panda base",
      zhTitle: "熊猫基地",
      image: commonsImage("Panda_in_Chengdu_Research_Base_of_Giant_Panda_Breeding.jpg"),
      alt: "Panda in Chengdu",
      zhAlt: "成都熊猫",
      note: "A globally lovable reason for students and families to remember Chengdu.",
      zhNote: "让学生和家人都容易记住成都的全球符号。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Panda_in_Chengdu_Research_Base_of_Giant_Panda_Breeding.jpg"
    },
    {
      title: "Tea-house afternoon",
      zhTitle: "茶馆下午",
      image: commonsImage("Chengdu_teahouse.jpg"),
      alt: "Chengdu tea house",
      zhAlt: "成都茶馆",
      note: "The best low-pressure way to feel Chengdu's rhythm.",
      zhNote: "低压力感受成都节奏的最好方式。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chengdu_teahouse.jpg"
    },
    {
      title: "Hotpot social meal",
      zhTitle: "火锅社交",
      image: commonsImage("Sichuan_hotpot.jpg"),
      alt: "Sichuan hotpot",
      zhAlt: "四川火锅",
      note: "Food becomes friendship here, especially for new international students.",
      zhNote: "在成都，美食很容易变成友谊，尤其对新留学生。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Sichuan_hotpot.jpg"
    }
  ],
  xian: [
    {
      title: "Ancient city wall",
      zhTitle: "古城墙",
      image: commonsImage("Xi'an_City_Wall.jpg"),
      alt: "Xi'an city wall",
      zhAlt: "西安城墙",
      note: "A low-cost cycling route that immediately explains the old capital.",
      zhNote: "低成本骑行路线，马上让人理解古都气质。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi'an_City_Wall.jpg"
    },
    {
      title: "Terracotta Warriors",
      zhTitle: "兵马俑",
      image: commonsImage("Terracotta_Army,_View_of_Pit_1.jpg"),
      alt: "Terracotta Warriors in Xi'an",
      zhAlt: "西安兵马俑",
      note: "The most powerful history image for first-time visitors.",
      zhNote: "第一次来中国最有冲击力的历史画面之一。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg"
    },
    {
      title: "Muslim Quarter food",
      zhTitle: "回民街美食",
      image: commonsImage("Muslim_Quarter_Xi'an.jpg"),
      alt: "Muslim Quarter in Xi'an",
      zhAlt: "西安回民街",
      note: "A food walk that connects student life with Silk Road memory.",
      zhNote: "把学生生活和丝路记忆连接起来的美食步行路线。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Muslim_Quarter_Xi'an.jpg"
    }
  ],
  harbin: [
    {
      title: "Ice city",
      zhTitle: "冰雪城市",
      image: commonsImage("Harbin_Ice_and_Snow_World.jpg"),
      alt: "Harbin Ice and Snow World",
      zhAlt: "哈尔滨冰雪大世界",
      note: "A winter image that makes northern China unforgettable.",
      zhNote: "让中国北方变得难忘的冬季画面。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Harbin_Ice_and_Snow_World.jpg"
    },
    {
      title: "Central Street",
      zhTitle: "中央大街",
      image: commonsImage("Zhongyang_Street,_Harbin.jpg"),
      alt: "Central Street in Harbin",
      zhAlt: "哈尔滨中央大街",
      note: "Architecture, bakeries, red sausage, and winter lights in one route.",
      zhNote: "建筑、面包房、红肠和冬季灯光集中在一条路线上。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Zhongyang_Street,_Harbin.jpg"
    },
    {
      title: "Snow campus mood",
      zhTitle: "雪中校园气质",
      image: commonsImage("Harbin_Institute_of_Technology_in_winter.jpg"),
      alt: "Harbin campus in winter",
      zhAlt: "哈尔滨冬季校园",
      note: "Engineering campuses feel especially vivid in the snow season.",
      zhNote: "工程类校园在雪季尤其有画面感。",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Harbin_Institute_of_Technology_in_winter.jpg"
    }
  ]
};

export function getCityVisualGallery(slug: string, fallback?: CityVisualFallback) {
  const gallery = cityVisualGalleries[slug];
  if (gallery || !fallback) return gallery ?? [];

  return [
    {
      title: `${fallback.name} first impression`,
      zhTitle: `${fallback.zhName}第一印象`,
      image: fallback.image,
      alt: fallback.imageAlt,
      zhAlt: fallback.zhImageAlt,
      note: fallback.tourism,
      zhNote: fallback.zhTourism
    },
    {
      title: "Campus and study life",
      zhTitle: "校园与学习生活",
      image: "/images/campus-hero.png",
      alt: "International student campus life in China",
      zhAlt: "中国国际学生校园生活",
      note: `${fallback.name} should be evaluated through campus support, nearby transport, food, housing, and weekend routes.`,
      zhNote: `选择${fallback.zhName}时，可以一起比较校园支持、周边交通、餐饮、住宿和周末路线。`
    },
    {
      title: `${fallback.provinceName} weekend culture`,
      zhTitle: `${fallback.zhProvinceName}周末文化`,
      image: "/images/student-city-life.png",
      alt: "Student city life, food, and local culture in China",
      zhAlt: "中国学生城市生活、美食与地方文化",
      note: "Food streets, public transport, parks, museums, and local festivals turn study abroad into a real China experience.",
      zhNote: "美食街、公共交通、公园、博物馆和地方节庆，会把留学变成真正的中国体验。"
    }
  ];
}
