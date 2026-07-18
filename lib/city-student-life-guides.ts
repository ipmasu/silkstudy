export type CityStudentLifeGuide = {
  title: string;
  zhTitle: string;
  intro: string;
  zhIntro: string;
  campusZones: {
    name: string;
    zhName: string;
    note: string;
    zhNote: string;
  }[];
  highlights: {
    title: string;
    zhTitle: string;
    items: string[];
    zhItems: string[];
  }[];
  practical: {
    title: string;
    zhTitle: string;
    body: string;
    zhBody: string;
  }[];
  budget: string;
  zhBudget: string;
};

const guides: Record<string, CityStudentLifeGuide> = {
  beijing: {
    title: "Beijing student life: big ambitions, real neighborhoods",
    zhTitle: "北京留学生生活：大格局，也有真实街区",
    intro:
      "Beijing is not only the political and cultural capital. For international students, it is a city of university clusters, serious academic resources, language immersion, and weekend routes that can move from an ancient alley to a startup cafe in one subway ride.",
    zhIntro:
      "北京不只是首都和文化地标。对留学生来说，它更像一座由大学圈、语言环境、学术资源和真实街区组成的巨大课堂：上午在海淀上课，傍晚进胡同吃饭，周末从博物馆走到创业咖啡馆。",
    campusZones: [
      {
        name: "Wudaokou and Haidian",
        zhName: "五道口与海淀高校圈",
        note: "Tsinghua, Peking University, BLCU, Beihang and many research institutes make this the most international student-facing area in Beijing.",
        zhNote: "清华、北大、北语、北航和大量科研机构聚集，五道口被留学生称作“宇宙中心”，语言、社交、实习资源都密集。"
      },
      {
        name: "Shahe and northern campuses",
        zhName: "沙河与北部校区",
        note: "A quieter and more affordable campus belt for students who want lower rent and a focused study rhythm.",
        zhNote: "适合预算更谨慎、希望生活节奏更安静的学生，通勤时间更长，但住宿压力明显小一些。"
      },
      {
        name: "Liangxiang and southern university town",
        zhName: "良乡大学城",
        note: "A developing student area with newer campuses, lower living costs, and convenient access to central Beijing by metro.",
        zhNote: "新校区多、生活成本相对温和，地铁进城方便，适合把学习放在第一位的学生。"
      }
    ],
    highlights: [
      {
        title: "Food and daily rhythm",
        zhTitle: "吃饭与日常节奏",
        items: ["Wudaokou has Korean, Japanese, Western, halal and Chinese food within walking distance.", "Guijie and hutong restaurants are ideal for late-night meals with classmates.", "Campus canteens keep everyday meals affordable even in a high-cost city."],
        zhItems: ["五道口步行范围内就能吃到韩餐、日料、西餐、清真餐和中餐。", "簋街、胡同餐馆和夜宵小店适合同学聚餐，能很快感受到北京的烟火气。", "北京生活成本高，但大学食堂能把日常餐饮预算稳住。"]
      },
      {
        title: "Culture and social life",
        zhTitle: "文化与社交生活",
        items: ["Museums, theatres, bookshops and university lectures make Beijing especially strong for students who love ideas.", "Sanlitun, Gongti and Wudaokou cover different styles of nightlife.", "Chinese practice opportunities are everywhere if students are willing to speak."],
        zhItems: ["博物馆、剧场、书店和高校讲座密集，适合真正喜欢思想、历史和文化的学生。", "三里屯、工体、五道口代表了不同层次的夜生活与国际社交。", "只要愿意开口，北京的中文练习机会几乎无处不在。"]
      },
      {
        title: "Weekend routes",
        zhTitle: "周末路线",
        items: ["A good weekend can be Forbidden City, hutongs, Olympic Park, the Great Wall or a mountain hike in the suburbs.", "High-speed rail makes Tianjin and nearby northern cities easy short trips."],
        zhItems: ["周末可以去故宫、胡同、奥林匹克公园、长城，也可以去郊区徒步。", "高铁让天津和华北周边城市成为轻松的一日或两日旅行。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Rent near Wudaokou and central districts is expensive, so many students balance price and commute from Shahe, Tiantongyuan, Longze or university dorms.",
        zhBody: "五道口和市中心租金较高，很多学生会在沙河、天通苑、龙泽或校内宿舍之间平衡预算和通勤。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who want top academic resources, strong Mandarin immersion, policy/business/culture exposure, and can accept a faster rhythm.",
        zhBody: "适合追求顶级学术资源、中文环境、政策商业文化机会，并且能适应大城市节奏的学生。"
      }
    ],
    budget: "High by Chinese standards, but controllable with dorms, campus dining and outer university districts.",
    zhBudget: "在中国城市中成本偏高，但通过宿舍、食堂和外围大学区可以有效控制。"
  },
  shanghai: {
    title: "Shanghai student life: global city, local alleys",
    zhTitle: "上海留学生生活：全球城市，也有本地巷弄",
    intro:
      "Shanghai gives international students the closest feeling to a global metropolis in China: finance, design, media, technology, museums, live houses, riverside walks and an efficient metro network.",
    zhIntro:
      "上海给留学生的第一感觉往往是国际化：金融、设计、传媒、科技、博物馆、Livehouse、滨江夜景和高效地铁网络都在同一座城市里。",
    campusZones: [
      {
        name: "Wujiaochang university circle",
        zhName: "五角场高校圈",
        note: "Fudan, Tongji and Shanghai University of Finance and Economics create a dense student environment with food, study spaces and career exposure.",
        zhNote: "复旦、同济、上海财经大学等高校聚集，学习氛围强，餐饮、书店、咖啡馆和实习信息都很集中。"
      },
      {
        name: "Minhang campus belt",
        zhName: "闵行校区带",
        note: "SJTU and ECNU bring a more campus-focused rhythm with larger spaces and lower pressure than downtown.",
        zhNote: "交大、华师大等校区空间更大，生活节奏更校园化，比市中心更适合沉下心学习。"
      },
      {
        name: "Songjiang university town",
        zhName: "松江大学城",
        note: "A budget-friendly area with many universities, student restaurants and a strong young community.",
        zhNote: "大学密集、租金相对友好、学生餐饮多，是上海更有“学生城市”感觉的区域。"
      }
    ],
    highlights: [
      {
        title: "Night and culture",
        zhTitle: "夜生活与文化",
        items: ["The Bund, Xintiandi, Fuxing Park and live music venues give students many ways to socialize.", "Museums and galleries are strong enough to turn weekends into a cultural routine.", "The city is very friendly to students who want internships in finance, tech, design or trade."],
        zhItems: ["外滩、新天地、复兴公园和音乐现场让社交选择非常丰富。", "博物馆和美术馆密度高，周末可以自然变成文化探索。", "金融、科技、设计、贸易等方向的实习机会对目标明确的学生很有吸引力。"]
      },
      {
        title: "Food map",
        zhTitle: "美食地图",
        items: ["Shanghai food is sweet and delicate, but the city also gathers food from every province.", "Student neighborhoods offer cheaper noodles, rice bowls, bakeries and international food.", "Late-night food is easy to find near major commercial areas."],
        zhItems: ["本帮菜偏甜、精致，但上海真正的优势是全国各地和全球风味都容易找到。", "高校周边有便宜的面馆、盖饭、烘焙店和国际餐。", "商圈附近夜宵方便，适合课后和朋友慢慢探索。"]
      },
      {
        title: "Weekend mobility",
        zhTitle: "周末流动性",
        items: ["Suzhou, Hangzhou, Nanjing and water towns are easy high-speed rail trips.", "The metro and airports make Shanghai one of the easiest cities for international travel."],
        zhItems: ["苏州、杭州、南京和江南水乡都能成为轻松周末短途。", "地铁、虹桥、浦东机场让上海非常适合经常旅行和国际往来的学生。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Downtown rent is high. Students often choose dorms, shared apartments in outer districts, or university-town neighborhoods.",
        zhBody: "市中心租金高，学生通常在宿舍、外围合租和大学城区域之间选择。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for independent students who want global exposure, career possibilities and a highly convenient urban life.",
        zhBody: "适合独立性强、希望接触国际资源、寻找职业机会，并喜欢便利都市生活的学生。"
      }
    ],
    budget: "High, but flexible if students live near campus or in university towns instead of central districts.",
    zhBudget: "整体偏高，但住在校园附近或大学城，而不是核心商圈，预算会灵活很多。"
  },
  guangzhou: {
    title: "Guangzhou student life: food, trade and southern warmth",
    zhTitle: "广州留学生生活：美食、商贸与南方温度",
    intro:
      "Guangzhou is practical, open and delicious. International students can study in a strong southern university cluster while experiencing Cantonese food culture, the Pearl River night view and China’s trade-facing energy.",
    zhIntro:
      "广州务实、开放、好吃。留学生可以在华南高校圈学习，也能在早茶、珠江夜景、国际商贸和岭南文化里感受一座城市的日常生命力。",
    campusZones: [
      {
        name: "University Town",
        zhName: "广州大学城",
        note: "A concentrated student island with multiple universities, lower daily costs and clear campus rhythm.",
        zhNote: "多所高校集中，生活成本相对温和，学生氛围强，适合刚来中国的留学生适应生活。"
      },
      {
        name: "Tianhe and Shipai",
        zhName: "天河与石牌高校商圈",
        note: "SCUT, South China Normal and Jinan University sit close to one of Guangzhou’s strongest business districts.",
        zhNote: "华工、华师、暨大等学校与天河商圈相连，学习、购物、实习和社交都很方便。"
      },
      {
        name: "Haizhu and SYSU area",
        zhName: "海珠与中大周边",
        note: "A greener, more local student area near old neighborhoods and riverside routes.",
        zhNote: "中大周边更有老广州生活感，绿树、江边、社区餐馆和校园气质结合得很好。"
      }
    ],
    highlights: [
      {
        title: "Food first",
        zhTitle: "先从吃开始",
        items: ["Morning tea teaches students that food can be slow, social and ceremonial.", "Rice rolls, wonton noodles, roast goose and dim sum make everyday life feel generous.", "Halal, African, Southeast Asian and international food are easier to find than in many inland cities."],
        zhItems: ["早茶会让留学生明白，吃饭也可以很慢、很社交、很有仪式感。", "肠粉、云吞面、烧鹅、点心让日常生活充满幸福感。", "清真餐、非洲餐、东南亚餐和国际餐比许多内陆城市更容易找到。"]
      },
      {
        title: "City experiences",
        zhTitle: "城市体验",
        items: ["Pearl River night cruises and Canton Tower make the city easy to love at first sight.", "Old arcades, markets and tea houses keep the city grounded.", "Chimelong and nearby coastal routes make weekends varied."],
        zhItems: ["珠江夜游和广州塔很容易让人第一眼喜欢上这座城市。", "骑楼、市场和茶楼让广州保持真实的市井底色。", "长隆、周边海岸和湾区城市让周末选择很多。"]
      },
      {
        title: "Career angle",
        zhTitle: "职业角度",
        items: ["Trade, logistics, medicine, language and business programs have strong local relevance.", "The Canton Fair gives students a direct window into global commerce."],
        zhItems: ["贸易、物流、医学、语言、商科等专业与本地产业联系明显。", "广交会能让学生直接看到中国与世界做生意的方式。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Tianhe is convenient but expensive. University Town, Haizhu and Panyu often give students more space for the same budget.",
        zhBody: "天河方便但价格高，大学城、海珠、番禺通常能用同样预算换到更宽松的生活。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who like food, warm weather, business opportunities and a multicultural southern city.",
        zhBody: "适合喜欢美食、温暖气候、商业机会和多元文化氛围的学生。"
      }
    ],
    budget: "Medium to high. Food can be very affordable, while rent varies greatly by district.",
    zhBudget: "中等偏高。吃饭可以很实惠，但租金因区域差异很大。"
  },
  shenzhen: {
    title: "Shenzhen student life: study beside the future",
    zhTitle: "深圳留学生生活：在未来旁边读书",
    intro:
      "Shenzhen is young, fast and career-facing. It is ideal for students who want China’s innovation scene, coastal weekends, technology companies and a city that feels like it is still being written.",
    zhIntro:
      "深圳年轻、快速、面向未来。它适合想靠近中国创新产业、海边周末、科技公司和新城市气质的学生。",
    campusZones: [
      {
        name: "Nanshan and Shenzhen University",
        zhName: "南山与深圳大学周边",
        note: "Close to technology companies, cafes, coastline and internship opportunities.",
        zhNote: "靠近科技企业、咖啡馆、海岸线和实习机会，是深圳学生生活最有代表性的区域之一。"
      },
      {
        name: "Xili university belt",
        zhName: "西丽高校带",
        note: "SUSTech, Shenzhen University Town and research institutes create a science-focused campus atmosphere.",
        zhNote: "南科大、深圳大学城和科研机构聚集，理工科与科研氛围更强。"
      },
      {
        name: "Longgang and CUHK-Shenzhen",
        zhName: "龙岗与港中大深圳",
        note: "More spacious and quieter, with strong links to the Greater Bay Area education ecosystem.",
        zhNote: "空间更大、生活更安静，与大湾区教育和国际化资源联系紧密。"
      }
    ],
    highlights: [
      {
        title: "Innovation life",
        zhTitle: "创新生活",
        items: ["Students can feel hardware, AI, design and cross-border business in daily life.", "Huaqiangbei, Nanshan and Qianhai show different faces of China’s innovation economy.", "Part-time and internship goals need planning because competition is real."],
        zhItems: ["硬件、AI、设计、跨境商业不是抽象词，而是深圳日常的一部分。", "华强北、南山、前海展示了中国创新经济的不同面。", "实习和兼职机会多，但竞争也真实，需要提前规划。"]
      },
      {
        title: "Coastal weekends",
        zhTitle: "海边周末",
        items: ["Dameisha, Xiaomeisha, Shenzhen Bay and seaside parks help students reset after intense study.", "Hong Kong, Guangzhou and other Bay Area cities are easy short trips."],
        zhItems: ["大梅沙、小梅沙、深圳湾和海边公园能让学生在紧张学习后放松。", "香港、广州和大湾区其他城市都适合短途探索。"]
      },
      {
        title: "Young city rhythm",
        zhTitle: "年轻城市节奏",
        items: ["The city is migrant-friendly: many people are new here, so it is easier to start conversations.", "Nightlife is modern, but daily life is also practical and efficient."],
        zhItems: ["深圳外来人口多，很多人都是新来的，留学生更容易找到共同起点。", "夜生活现代，但日常生活也非常务实、高效。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Nanshan is expensive. Students often compare campus housing, Xili, Longgang, Bao’an and metro-connected shared apartments.",
        zhBody: "南山租金高，学生常在校内宿舍、西丽、龙岗、宝安和地铁沿线合租之间比较。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for ambitious students in technology, business, design, engineering and entrepreneurship.",
        zhBody: "适合科技、商科、设计、工程、创业方向且目标感强的学生。"
      }
    ],
    budget: "High, especially housing. The career exposure can be worth it for the right major.",
    zhBudget: "成本偏高，尤其是住宿。但对合适专业来说，产业和职业暴露度很有价值。"
  },
  chengdu: {
    title: "Chengdu student life: relaxed days, serious flavor",
    zhTitle: "成都留学生生活：松弛日常，认真好吃",
    intro:
      "Chengdu is famous for comfort, but it is not lazy. It combines strong universities, teahouse culture, hotpot nights, live music, pandas and a slower rhythm that helps many students feel at home.",
    zhIntro:
      "成都以安逸出名，但它并不懒散。高校资源、茶馆文化、火锅夜晚、音乐现场、大熊猫和相对松弛的生活节奏，让很多留学生很快产生归属感。",
    campusZones: [
      {
        name: "Sichuan University Wangjiang area",
        zhName: "川大望江周边",
        note: "Central, lively and close to restaurants, bars and old neighborhoods.",
        zhNote: "位置中心、生活热闹，餐馆、酒吧和老街区都近，学生社交便利。"
      },
      {
        name: "UESTC Shahe and Qingshuihe",
        zhName: "电子科大沙河与清水河",
        note: "A strong engineering and tech atmosphere, with different rhythms between old and new campuses.",
        zhNote: "理工科和科技氛围强，新老校区节奏不同，适合目标明确的学生。"
      },
      {
        name: "Wenjiang and Xipu",
        zhName: "温江与犀浦高校带",
        note: "More affordable and calmer, with campus life, metro access and local food streets.",
        zhNote: "成本更友好、生活更安静，有校园生活、地铁连接和本地美食街。"
      }
    ],
    highlights: [
      {
        title: "Food and comfort",
        zhTitle: "美食与松弛感",
        items: ["Hotpot is a social ritual, not just dinner.", "Tea houses teach students how Chengdu people spend time without rushing.", "Street food, noodles and snacks make daily life affordable and happy."],
        zhItems: ["火锅不是一顿饭，而是一种社交仪式。", "茶馆会让留学生理解成都人为什么懂得慢下来。", "街头小吃、面馆和小吃店让日常生活又实惠又快乐。"]
      },
      {
        title: "Culture and weekends",
        zhTitle: "文化与周末",
        items: ["Panda Base, Kuanzhai Alley, Taikoo Li and live houses give different weekend moods.", "Qingcheng Mountain, Dujiangyan and nearby ancient towns are easy escapes.", "Sichuan opera and teahouse performances make culture feel close."],
        zhItems: ["熊猫基地、宽窄巷子、太古里和音乐现场给周末不同的情绪。", "青城山、都江堰和周边古镇适合短途放松。", "川剧、茶馆表演让文化不再遥远。"]
      },
      {
        title: "Social life",
        zhTitle: "社交生活",
        items: ["Chengdu is friendly to students who want to make Chinese friends through food, music and hobbies.", "Jiuyanqiao and university areas have active nightlife without losing the city’s relaxed temperament."],
        zhItems: ["成都适合通过吃饭、音乐和兴趣活动认识中国朋友。", "九眼桥和高校周边夜生活活跃，但城市整体仍保持松弛气质。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Costs are more comfortable than Beijing or Shanghai. Metro-connected districts can offer good value.",
        zhBody: "整体比北京上海舒适，地铁沿线区域常能找到性价比较好的选择。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who want culture, food, a softer pace, and a city where daily life itself feels rewarding.",
        zhBody: "适合重视文化、美食、生活质量和日常幸福感的学生。"
      }
    ],
    budget: "Medium and student-friendly, especially compared with China’s most expensive coastal cities.",
    zhBudget: "中等且对学生友好，尤其比一线沿海城市轻松很多。"
  },
  chongqing: {
    title: "Chongqing student life: mountain city, hotpot soul",
    zhTitle: "重庆留学生生活：山城立体感，火锅烟火气",
    intro:
      "Chongqing is dramatic, affordable and full of personality. International students remember its hills, hotpot, night views, rivers, bridges and the feeling that the whole city is a movie set.",
    zhIntro:
      "重庆立体、热烈、性价比高。留学生常记住这里的山路、火锅、夜景、两江、桥梁，以及整座城市像电影场景一样的魔幻感。",
    campusZones: [
      {
        name: "Shapingba university area",
        zhName: "沙坪坝高校区",
        note: "Chongqing University and nearby campuses create a classic student neighborhood with local food and affordable life.",
        zhNote: "重大等高校聚集，学生氛围浓，本地餐饮多，生活成本相对友好。"
      },
      {
        name: "University Town",
        zhName: "重庆大学城",
        note: "A more spacious and organized student zone with many campuses and lower daily costs.",
        zhNote: "校区多、空间大、节奏更校园化，适合预算谨慎和喜欢安静学习的学生。"
      },
      {
        name: "Beibei and Southwest University",
        zhName: "北碚与西南大学",
        note: "Greener and calmer, close to mountains and more suitable for students who like nature.",
        zhNote: "更安静、更绿，靠近山水，适合喜欢自然和慢节奏的学生。"
      }
    ],
    highlights: [
      {
        title: "Food and night",
        zhTitle: "美食与夜晚",
        items: ["Hotpot, small noodles and Jianghu dishes make Chongqing one of China’s strongest food cities.", "Hongyadong, Jiefangbei and Nanbin Road are unforgettable at night.", "Nightlife is lively, local and comparatively affordable."],
        zhItems: ["火锅、小面、江湖菜让重庆成为中国最有味道的城市之一。", "洪崖洞、解放碑、南滨路的夜景很容易让人难忘。", "夜生活热闹、本地感强，花费也相对可控。"]
      },
      {
        title: "City adventure",
        zhTitle: "城市冒险",
        items: ["Cable cars, light rail through buildings and steep streets make daily commuting feel cinematic.", "Students who like photography and short videos will never run out of scenes."],
        zhItems: ["索道、穿楼轻轨和坡坡坎坎让日常通勤也像电影。", "喜欢摄影、短视频和城市探索的学生会有拍不完的素材。"]
      },
      {
        title: "Weekend routes",
        zhTitle: "周末路线",
        items: ["Wulong, Dazu Rock Carvings and hot spring routes add strong weekend variety.", "Chengdu is also reachable for a two-city western China experience."],
        zhItems: ["武隆、大足石刻、温泉路线让周末选择丰富。", "成都也适合联动，形成西南双城体验。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Rent is generally friendly. Pay attention to hills, transfer routes and whether walking paths are comfortable.",
        zhBody: "租金总体友好，但要注意坡度、换乘路线和步行舒适度。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who want strong personality, low living costs, food culture and a vivid urban experience.",
        zhBody: "适合喜欢城市个性、低生活成本、美食文化和强烈城市体验的学生。"
      }
    ],
    budget: "Medium-low. One of the stronger choices for value and city character.",
    zhBudget: "中等偏低，是兼顾性价比和城市个性的强选择。"
  },
  xian: {
    title: "Xi'an student life: ancient capital, young nights",
    zhTitle: "西安留学生生活：古都底色，年轻夜色",
    intro:
      "Xi'an lets students live beside history without giving up youth culture. Ancient walls, noodles, university clusters, Tang-style night streets and affordable living make it a powerful first city for understanding China.",
    zhIntro:
      "西安让留学生住在历史旁边，却不失去年轻人的生活。城墙、面食、高校圈、大唐不夜城和亲民成本，让它很适合作为读懂中国的第一站。",
    campusZones: [
      {
        name: "Beilin and Yanta university belt",
        zhName: "碑林与雁塔高校带",
        note: "XJTU, Northwest University and nearby campuses connect study life with museums, old streets and food.",
        zhNote: "交大、西北大学等高校与博物馆、老街和美食区相连，文化触手可及。"
      },
      {
        name: "Chang'an university district",
        zhName: "长安大学城",
        note: "A larger and more affordable campus area with many universities and a quieter study rhythm.",
        zhNote: "高校集中、空间更大、生活成本更低，适合更安静的学习节奏。"
      },
      {
        name: "High-tech zone",
        zhName: "高新区",
        note: "Better for students looking at engineering, technology, internships and modern city life.",
        zhNote: "适合理工科、科技实习和希望接触现代城市产业的学生。"
      }
    ],
    highlights: [
      {
        title: "History you can walk through",
        zhTitle: "可以走进去的历史",
        items: ["City Wall, museums, Tang-style streets and old neighborhoods make history part of weekly life.", "Wearing Hanfu in Xi'an feels natural rather than staged.", "International students can understand Chinese civilization through daily routes, not just textbooks."],
        zhItems: ["城墙、博物馆、唐风街区和老社区让历史进入每周生活。", "在西安穿汉服很自然，不像刻意表演。", "留学生能通过日常路线理解中国文明，而不只是课本。"]
      },
      {
        title: "Food for students",
        zhTitle: "学生友好美食",
        items: ["Roujiamo, biangbiang noodles, paomo and liangpi are filling, local and affordable.", "Muslim Quarter is famous, but Sajinqiao and campus-side streets feel more local."],
        zhItems: ["肉夹馍、biangbiang面、泡馍、凉皮分量足、有地方味，也适合学生预算。", "回民街有名，但洒金桥和高校周边小街更有本地生活感。"]
      },
      {
        title: "Weekend trips",
        zhTitle: "周末路线",
        items: ["Terracotta Warriors, Mount Hua and nearby heritage routes are easy to arrange.", "High-speed rail connects Xi'an with many northern and western cities."],
        zhItems: ["兵马俑、华山和周边历史路线都适合周末安排。", "高铁让西安与西北、华北多个城市连接方便。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Student districts are generally affordable. Choose by campus location because cross-city commuting can be tiring.",
        zhBody: "学生区整体亲民，但要按校区选住处，因为跨区通勤会比较累。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who want history, affordable life, food culture and a strong sense of Chinese identity.",
        zhBody: "适合想体验历史、控制预算、热爱美食并感受中国文化身份的学生。"
      }
    ],
    budget: "Medium-low and friendly for long-term study.",
    zhBudget: "中等偏低，适合长期学习生活。"
  },
  changsha: {
    title: "Changsha student life: low cost, high voltage",
    zhTitle: "长沙留学生生活：低成本，高能量",
    intro:
      "Changsha is one of the easiest Chinese cities for young people to fall into: affordable meals, late-night streets, Yuelu Mountain, Orange Isle, strong universities and a cultural confidence that feels youthful.",
    zhIntro:
      "长沙很容易让年轻人陷进去：饭不贵、夜不早、岳麓山在身后、橘子洲在江中，高校资源扎实，城市又有年轻、热辣、敢表达的文化自信。",
    campusZones: [
      {
        name: "Yuelu University Town",
        zhName: "岳麓山大学城",
        note: "Hunan University, Central South University and Hunan Normal University shape a dense student area below Yuelu Mountain.",
        zhNote: "湖南大学、中南大学、湖南师范大学等高校聚集在岳麓山下，是长沙最适合留学生扎根的区域。"
      },
      {
        name: "Lushan South Road",
        zhName: "麓山南路",
        note: "A famous student food street where snacks, small restaurants and campus energy meet.",
        zhNote: "长沙学生美食核心线路之一，小吃、小馆、社团和校园生活都很集中。"
      },
      {
        name: "Xiangya and medical campus area",
        zhName: "湘雅与医学高校周边",
        note: "Important for medical students, with hospital resources and a practical city-life rhythm.",
        zhNote: "医学留学生尤其要关注湘雅相关资源，这里医院、课程和城市生活联系紧密。"
      }
    ],
    highlights: [
      {
        title: "Food and night markets",
        zhTitle: "美食与夜市",
        items: ["Stinky tofu, sugar-oil baba, crayfish and Hunan dishes make the city unforgettable.", "Yangfan Night Market and Dongguashan are classic night routes.", "University-area meals can be very affordable for students."],
        zhItems: ["臭豆腐、糖油粑粑、小龙虾和湘菜让长沙很难被忘记。", "扬帆夜市、冬瓜山夜市是留学生认识长沙夜晚的经典路线。", "大学城周边餐饮亲民，预算有限也能吃得开心。"]
      },
      {
        title: "Culture and weekends",
        zhTitle: "文化与周末",
        items: ["Yuelu Mountain, Yuelu Academy, Orange Isle and Hunan Museum create a strong study-life loop.", "The city is good for students who like museums, local history, music and short countryside rides."],
        zhItems: ["岳麓山、岳麓书院、橘子洲、湖南省博物馆共同构成学生周末生活线。", "喜欢博物馆、本地历史、音乐和周边乡村骑行的学生会很容易爱上长沙。"]
      },
      {
        title: "Social energy",
        zhTitle: "社交能量",
        items: ["Jiefang West Road and Wuyi Square show why Changsha is called a city that does not sleep.", "Media, entertainment and youth culture make the city expressive and friendly to creators."],
        zhItems: ["解放西路和五一广场会让人理解为什么长沙被称为不夜城。", "媒体、娱乐和青年文化让长沙特别适合喜欢表达、拍摄、分享的学生。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Costs are friendly. University Town gives students a strong balance between price, food and campus access.",
        zhBody: "成本友好，岳麓大学城在价格、餐饮和校园便利之间平衡得很好。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who want rich city life, low living costs, food culture and a welcoming young atmosphere.",
        zhBody: "适合想要丰富生活、低成本、美食文化和年轻城市氛围的学生。"
      }
    ],
    budget: "Medium-low. A strong choice for quality of life on a student budget.",
    zhBudget: "中等偏低，非常适合用学生预算获得高质量生活体验。"
  },
  tianjin: {
    title: "Tianjin student life: river breeze, northern humor",
    zhTitle: "天津留学生生活：海河晚风，北方幽默",
    intro:
      "Tianjin is close to Beijing but has its own rhythm: riverside walks, European-style buildings, universities, breakfast culture, seafood access and a friendlier cost level.",
    zhIntro:
      "天津离北京很近，却有自己的节奏：海河散步、万国建筑、大学资源、早点文化、滨海气质和更友好的生活成本。",
    campusZones: [
      {
        name: "Nankai and Tianjin University area",
        zhName: "南开与天大周边",
        note: "A classic academic zone with strong student services, food streets and transport access.",
        zhNote: "南开、天大所在区域学术氛围浓，生活配套成熟，交通和餐饮都方便。"
      },
      {
        name: "Xiqing university area",
        zhName: "西青大学城",
        note: "More spacious and affordable, with many campuses and student-friendly daily costs.",
        zhNote: "空间更大、成本更低，高校聚集，适合长期学习。"
      },
      {
        name: "Binhai routes",
        zhName: "滨海新区路线",
        note: "Useful for students interested in ports, logistics, marine industries and weekend seaside trips.",
        zhNote: "适合关注港口、物流、海洋产业和周末看海的学生。"
      }
    ],
    highlights: [
      {
        title: "Riverside city",
        zhTitle: "海河城市",
        items: ["Haihe night walks, Italian Style Town and Five Great Avenues give Tianjin a romantic student route.", "Courtyard bars, riverside terraces and small live music spaces create a gentler nightlife."],
        zhItems: ["海河夜走、意式风情区、五大道组成天津很浪漫的学生路线。", "四合院酒吧、河畔露台和小型音乐现场让夜生活更温柔。"]
      },
      {
        title: "Food personality",
        zhTitle: "食物个性",
        items: ["Jianbing guozi, baozi, mahua and seafood make the city easy to approach through breakfast and snacks.", "Yao Village Night Market and university streets are student-friendly."],
        zhItems: ["煎饼果子、包子、麻花和海鲜让天津很适合从早点和小吃开始认识。", "姚村夜市和高校周边小街对学生很友好。"]
      },
      {
        title: "Regional advantage",
        zhTitle: "区域优势",
        items: ["Beijing is reachable by high-speed rail, so students can enjoy Tianjin’s calmer living cost while accessing capital resources."],
        zhItems: ["高铁去北京方便，学生可以享受天津更舒缓的成本，同时接触首都资源。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Generally more affordable than Beijing. Check whether the campus is in the central area, Xiqing or Binhai before choosing housing.",
        zhBody: "整体比北京友好。选住宿前要确认校区在市区、西青还是滨海。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who want northern culture, moderate cost, river scenery and access to Beijing.",
        zhBody: "适合喜欢北方文化、适中成本、河畔城市感，并希望靠近北京的学生。"
      }
    ],
    budget: "Medium and practical, with good value for northern China.",
    zhBudget: "中等且务实，在华北城市中性价比不错。"
  },
  kunming: {
    title: "Kunming student life: spring weather, borderland openness",
    zhTitle: "昆明留学生生活：春城气候，边地开放",
    intro:
      "Kunming is gentle, diverse and unusually comfortable. It is especially attractive to students from Southeast Asia and anyone who wants flowers, lakes, ethnic culture, mild weather and a lower-cost city.",
    zhIntro:
      "昆明温和、多元、舒服。它尤其吸引东南亚学生，也适合喜欢鲜花、湖泊、民族文化、温暖气候和低成本生活的留学生。",
    campusZones: [
      {
        name: "Chenggong university area",
        zhName: "呈贡大学城",
        note: "A spacious student district with Yunnan University and other campuses, lower costs and a calmer rhythm.",
        zhNote: "云南大学等高校聚集，空间大、成本低、学习节奏更安静。"
      },
      {
        name: "Cuihu and old city",
        zhName: "翠湖与老城",
        note: "A cultural area with cafes, bookstores, local streets and an easygoing international feel.",
        zhNote: "咖啡馆、书店、老街和翠湖生活气息浓，国际化但不紧张。"
      },
      {
        name: "Minzu University area",
        zhName: "民族大学周边",
        note: "Useful for students interested in ethnic cultures, languages and Southeast Asian connections.",
        zhNote: "适合关注民族文化、语言和东南亚交流的学生。"
      }
    ],
    highlights: [
      {
        title: "Everyday comfort",
        zhTitle: "日常舒适感",
        items: ["The weather makes outdoor life easier almost all year.", "Crossing-bridge rice noodles, flower cakes and Yunnan mushrooms give the city a clear food identity.", "Dounan Flower Market turns flowers into part of ordinary student life."],
        zhItems: ["四季温和让户外生活几乎全年都舒服。", "过桥米线、鲜花饼、云南菌子让昆明有很强的食物记忆点。", "斗南花市会让留学生发现鲜花也可以是日常生活的一部分。"]
      },
      {
        title: "Culture and nature",
        zhTitle: "文化与自然",
        items: ["Green Lake, Dianchi Lake and nearby mountains make weekends easy and restorative.", "Ethnic cultures and borderland histories help students see a plural China."],
        zhItems: ["翠湖、滇池和周边山水让周末很容易恢复能量。", "民族文化和边地历史能让学生看到一个更加多元的中国。"]
      },
      {
        title: "Regional gateway",
        zhTitle: "区域门户",
        items: ["Kunming is a natural hub for students from ASEAN countries and South Asia.", "It is suitable for Chinese-language study, medicine, tourism, ecology and regional studies."],
        zhItems: ["昆明天然适合东盟和南亚方向学生。", "中文、医学、旅游、生态和区域研究都与城市气质匹配。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Rent is friendly. Chenggong is cheaper and quieter; old-city areas are more atmospheric but can cost more.",
        zhBody: "租金友好。呈贡更便宜安静，老城区更有氛围但价格可能高一些。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who want mild weather, cultural diversity, nature and a gentler landing city.",
        zhBody: "适合喜欢温和气候、多元文化、自然环境，并希望轻松适应中国生活的学生。"
      }
    ],
    budget: "Medium-low and very livable for international students.",
    zhBudget: "中等偏低，对留学生非常宜居。"
  },
  nanning: {
    title: "Nanning student life: ASEAN window, green city rhythm",
    zhTitle: "南宁留学生生活：东盟窗口，绿城节奏",
    intro:
      "Nanning is one of the most natural landing cities for ASEAN students. It is warm, green, affordable and connected to Southeast Asia through language, food, trade and education exchanges.",
    zhIntro:
      "南宁是东盟学生来中国很自然的落点。它温暖、绿色、成本友好，并通过语言、美食、商贸和教育交流与东南亚紧密相连。",
    campusZones: [
      {
        name: "Guangxi University area",
        zhName: "广西大学周边",
        note: "A classic student district with affordable food, campus services and strong local life.",
        zhNote: "广西大学周边学生氛围浓，餐饮实惠，校园服务和本地生活都方便。"
      },
      {
        name: "Qingxiu and ASEAN business district",
        zhName: "青秀与东盟商务区",
        note: "More modern, international and useful for students interested in ASEAN-China business.",
        zhNote: "更现代、更国际化，适合关注中国与东盟商业交流的学生。"
      },
      {
        name: "Medical university area",
        zhName: "医学高校周边",
        note: "Important for medical students, with hospital access and practical daily services.",
        zhNote: "医学留学生要重点关注医院资源、实习环境和日常服务。"
      }
    ],
    highlights: [
      {
        title: "ASEAN-friendly life",
        zhTitle: "东盟友好生活",
        items: ["Students from Vietnam, Thailand, Laos, Cambodia, Malaysia and Indonesia may find cultural familiarity more quickly.", "ASEAN events and trade fairs make the city feel outward-looking.", "The climate and food are easier for many Southeast Asian students to adapt to."],
        zhItems: ["越南、泰国、老挝、柬埔寨、马来西亚、印尼等学生更容易找到文化熟悉感。", "东盟相关活动和会展让城市保持面向外部的气质。", "气候和饮食对许多东南亚学生更容易适应。"]
      },
      {
        title: "Food and green weekends",
        zhTitle: "美食与绿色周末",
        items: ["Laoyou rice noodles, sour-spicy flavors and Guangxi snacks make daily meals lively.", "Qingxiu Mountain, parks and riverside routes make weekends relaxed.", "Night markets and campus streets keep costs low."],
        zhItems: ["老友粉、酸辣风味和广西小吃让日常吃饭很有记忆点。", "青秀山、公园和江边路线让周末轻松。", "夜市和高校小街让生活成本保持友好。"]
      },
      {
        title: "Study direction",
        zhTitle: "学习方向",
        items: ["Chinese language, medicine, agriculture, international business and ASEAN studies match the city well."],
        zhItems: ["中文、医学、农业、国际商务和东盟研究都与南宁城市定位匹配。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Costs are generally friendly. Living near campus is usually the easiest choice for first-year students.",
        zhBody: "总体成本友好。第一年住在学校附近通常最省心。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for ASEAN students and anyone who wants a warm, green, affordable city with regional exchange opportunities.",
        zhBody: "适合东盟学生，以及想要温暖、绿色、低成本和区域交流机会的学生。"
      }
    ],
    budget: "Low to medium. Strong value for students from Southeast Asia.",
    zhBudget: "低到中等，对东南亚学生尤其有性价比。"
  },
  taiyuan: {
    title: "Taiyuan student life: practical city, deep Shanxi roots",
    zhTitle: "太原留学生生活：务实城市，晋地根脉",
    intro:
      "Taiyuan is not flashy, but it is affordable, practical and historically deep. Students can experience Shanxi food, ancient architecture, coal-to-new-industry transformation and a quieter study environment.",
    zhIntro:
      "太原不张扬，但它成本友好、生活务实、历史很深。留学生可以在这里接触山西面食、古建文化、能源转型和更安静的学习环境。",
    campusZones: [
      {
        name: "Taiyuan University of Technology area",
        zhName: "太原理工周边",
        note: "A practical engineering-oriented student area with local restaurants and stable campus life.",
        zhNote: "理工科氛围明显，周边餐饮本地化，校园生活稳定。"
      },
      {
        name: "Shanxi University area",
        zhName: "山西大学周边",
        note: "A more comprehensive academic environment with student food streets and quieter neighborhoods.",
        zhNote: "综合性学术环境更强，学生餐饮和安静社区结合。"
      },
      {
        name: "Zhonglou and Liuxiang",
        zhName: "钟楼街与柳巷",
        note: "The city’s commercial and night-food core, good for understanding local urban life.",
        zhNote: "太原商业和夜间美食核心，适合留学生认识本地城市生活。"
      }
    ],
    highlights: [
      {
        title: "Food identity",
        zhTitle: "面食身份",
        items: ["Knife-cut noodles, vinegar culture and Shanxi snacks make food affordable and filling.", "Food Street and Liuxiang are useful first routes for newcomers."],
        zhItems: ["刀削面、醋文化和山西小吃便宜、扎实、很有地方性。", "食品街和柳巷适合作为新生认识太原的第一条路线。"]
      },
      {
        title: "Culture and trips",
        zhTitle: "文化与短途",
        items: ["Jinci Temple, Pingyao Ancient City and Shanxi ancient architecture routes give students a powerful cultural map.", "The city is calmer, which can help students focus on study."],
        zhItems: ["晋祠、平遥古城和山西古建路线能给留学生非常强的文化地图。", "城市更安静，有助于学生专注学习。"]
      },
      {
        title: "Career angle",
        zhTitle: "职业角度",
        items: ["Engineering, energy, materials and manufacturing-related majors have strong regional relevance."],
        zhItems: ["工程、能源、材料、制造等专业与区域产业联系较强。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Rent is friendly. Campus-side housing usually gives the best balance of price and convenience.",
        zhBody: "租金友好，学校周边通常在价格和便利之间最平衡。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for budget-conscious students who want a calm city, engineering resources and deep northern culture.",
        zhBody: "适合预算谨慎、喜欢安静城市、关注工程资源和北方文化的学生。"
      }
    ],
    budget: "Low to medium. Very practical for long-term study.",
    zhBudget: "低到中等，非常适合长期学习。"
  },
  guilin: {
    title: "Guilin student life: mountains, rivers and a slower China",
    zhTitle: "桂林留学生生活：山水之间，慢一点的中国",
    intro:
      "Guilin is a nature-first study city. It is smaller than China’s megacities, but its mountains, rivers, rice noodles, Yangshuo routes and international traveler culture give students a memorable lifestyle.",
    zhIntro:
      "桂林是一座山水优先的留学城市。它没有超大城市的压迫感，却用喀斯特山水、漓江、米粉、阳朔路线和国际旅行者文化给学生很鲜明的生活记忆。",
    campusZones: [
      {
        name: "Qixing university area",
        zhName: "七星高校周边",
        note: "Close to campuses, local food, parks and daily services.",
        zhNote: "靠近高校、本地餐饮、公园和日常服务，适合稳定学习生活。"
      },
      {
        name: "Downtown and Zhengyang Road",
        zhName: "市中心与正阳步行街",
        note: "A convenient area for food, shopping, night walks and access to Two Rivers and Four Lakes.",
        zhNote: "吃饭、购物、夜间散步和两江四湖路线都方便。"
      },
      {
        name: "Yangshuo weekend route",
        zhName: "阳朔周末路线",
        note: "A classic international traveler area with cafes, bars, cycling and Li River landscapes.",
        zhNote: "经典国际旅行者聚集地，有咖啡馆、酒吧、骑行和漓江山水。"
      }
    ],
    highlights: [
      {
        title: "Nature lifestyle",
        zhTitle: "自然生活方式",
        items: ["Li River, karst mountains and riverside walks make nature part of weekly life.", "Cycling, hiking and photography are easy hobbies to develop here.", "The city is good for students who do not want an overwhelming metropolis."],
        zhItems: ["漓江、喀斯特山峰和江边散步让自然成为每周生活的一部分。", "骑行、徒步、摄影很容易在这里变成日常爱好。", "适合不想被超大城市淹没的学生。"]
      },
      {
        title: "Food and night",
        zhTitle: "美食与夜晚",
        items: ["Guilin rice noodles are cheap, local and perfect for student life.", "Dongxi Lane, Zhengyang Road and night markets offer compact and easy routes.", "Yangshuo West Street gives a more international night scene."],
        zhItems: ["桂林米粉便宜、本地、有辨识度，非常适合学生日常。", "东西巷、正阳路和夜市路线集中，容易上手。", "阳朔西街提供更国际化的夜生活场景。"]
      },
      {
        title: "Study angle",
        zhTitle: "学习角度",
        items: ["Tourism, Chinese language, ecology, design and international communication can all connect naturally with the city."],
        zhItems: ["旅游、中文、生态、设计和国际传播等方向都能自然连接城市资源。"]
      }
    ],
    practical: [
      {
        title: "Housing",
        zhTitle: "住宿",
        body: "Costs are friendly. First-year students should prioritize campus access and simple transport.",
        zhBody: "成本友好。第一年建议优先考虑离校近和交通简单。"
      },
      {
        title: "Best fit",
        zhTitle: "适合谁",
        body: "Best for students who love nature, photography, travel, Chinese language and a slower study rhythm.",
        zhBody: "适合热爱自然、摄影、旅行、中文学习和慢节奏生活的学生。"
      }
    ],
    budget: "Low to medium. A gentle choice for students who value scenery and simplicity.",
    zhBudget: "低到中等，适合重视风景和简单生活的学生。"
  }
};

export function getCityStudentLifeGuide(slug: string) {
  return guides[slug];
}
