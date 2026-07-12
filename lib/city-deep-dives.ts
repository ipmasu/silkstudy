export type CityDeepDive = {
  slug: string;
  title: string;
  zhTitle: string;
  intro: string;
  zhIntro: string;
  proofPoints: string[];
  zhProofPoints: string[];
  sections: {
    title: string;
    zhTitle: string;
    body: string;
    zhBody: string;
    bullets: string[];
    zhBullets: string[];
  }[];
};

const deepDive = (input: CityDeepDive) => input;

type BatchDeepDiveInput = {
  slug: string;
  title: string;
  zhTitle: string;
  intro: string;
  zhIntro: string;
  proofPoints: string[];
  zhProofPoints: string[];
  sections: CityDeepDive["sections"];
};

const cityBatchDeepDive = (input: BatchDeepDiveInput) => deepDive(input);

export const cityDeepDives: Record<string, CityDeepDive> = {
  hangzhou: deepDive({
    slug: "hangzhou",
    title: "Why Hangzhou Is a Poetic and Digital China City for Global Students",
    zhTitle: "为什么杭州正在成为外国年轻人读懂诗意中国与数字中国的理想之地",
    intro:
      "Hangzhou is powerful because it does not ask students to choose between beauty and opportunity. West Lake, the Grand Canal, Liangzhu, Longjing tea hills, Qiantang River lights, universities, digital economy, e-commerce, music bars, creative markets, and a softer nightlife all sit inside one highly livable city.",
    zhIntro:
      "杭州真正强大的地方，在于它不要求学生在美感和机会之间二选一。西湖、运河、良渚、龙井茶山、钱塘江灯光、高校资源、数字经济、电商产业、音乐酒吧、创意市集和更柔和的夜生活，都被放进了一座高度宜居的城市里。",
    proofPoints: [
      "Hangzhou combines strong universities with one of China's most active digital-economy and e-commerce ecosystems.",
      "Living costs are generally lower than Beijing and Shanghai while still offering a refined new first-tier city lifestyle.",
      "The city gives students both free scenic routines around West Lake and modern youth culture through markets, music, creative parks, and riverside events."
    ],
    zhProofPoints: [
      "杭州把优质高校资源与中国最活跃的数字经济、电商和创新生态之一结合在一起。",
      "杭州生活成本整体低于北京、上海，同时仍能提供精致的新一线城市生活方式。",
      "这座城市既有西湖周边免费的日常风景，也有市集、音乐、创意园区和江岸活动构成的年轻文化。"
    ],
    sections: [
      {
        title: "Universities, Research, and Digital-Economy Momentum",
        zhTitle: "高校、科研与数字经济动能",
        body:
          "Hangzhou is especially attractive for students who want China to feel both academically serious and professionally current. It is strong for engineering, business, e-commerce, AI applications, design, product thinking, Chinese language, culture, and entrepreneurship.",
        zhBody:
          "杭州尤其适合那些希望中国既有学术深度、又有当代职业机会的学生。工程、商科、电商、AI应用、设计、产品思维、中文、文化和创业方向，都能在杭州找到比较自然的结合点。",
        bullets: [
          "Zhejiang University is one of China's leading comprehensive universities and anchors Hangzhou's research reputation.",
          "Zhejiang Gongshang University, Zhejiang University of Technology, Hangzhou Normal University, Hangzhou Dianzi University, and other institutions add choices across business, engineering, information technology, education, and applied fields.",
          "Hangzhou's digital economy, e-commerce companies, creative parks, and startup networks make the city especially relevant for students who want internships, projects, or future China-facing careers."
        ],
        zhBullets: [
          "浙江大学是中国顶尖综合性大学之一，为杭州提供了强有力的研究型大学底色。",
          "浙江工商大学、浙江工业大学、杭州师范大学、杭州电子科技大学等高校，让商科、工程、信息技术、教育和应用型学科学生有更多选择。",
          "杭州的数字经济、电商企业、创意园区和创业网络，让想寻找实习、项目和未来中国相关职业机会的学生更容易看到具体路径。"
        ]
      },
      {
        title: "A Refined New First-Tier City With Manageable Costs",
        zhTitle: "一座精致但成本相对可控的新一线城市",
        body:
          "Hangzhou is not the cheapest city in China, but it often feels more manageable than Beijing or Shanghai. Students can enjoy a sophisticated city life while still using campus neighborhoods, local food streets, public transit, and free scenic routes to control daily spending.",
        zhBody:
          "杭州不是中国最便宜的城市，但通常比北京、上海更可控。学生可以享受精致的城市生活，同时通过校园周边、本地美食街、公共交通和免费风景路线来控制日常支出。",
        bullets: [
          "West Lake and many everyday walking routes cost nothing, which matters for students who want beauty without constant spending.",
          "Campus neighborhoods and local food streets give students practical options beyond expensive scenic-area restaurants.",
          "High-speed rail access to Shanghai, Suzhou, Nanjing, Ningbo, and other Yangtze River Delta cities makes Hangzhou a strong regional base."
        ],
        zhBullets: [
          "西湖和很多日常步行路线都不需要门票，这对希望低成本拥有城市美感的学生很重要。",
          "校园周边和本地美食街能提供比景区餐厅更实用、更适合学生预算的选择。",
          "高铁可以快速连接上海、苏州、南京、宁波等长三角城市，让杭州成为很好的区域学习和旅行 base。"
        ]
      },
      {
        title: "Jiangnan Food, Student Streets, and Night Markets",
        zhTitle: "江南味道、学生街与夜间市集",
        body:
          "Hangzhou food is gentler than Sichuan or Hunan food, but it has a deep local memory. West Lake vinegar fish, Dongpo pork, Longjing shrimp, beggar's chicken, food streets, night markets, and campus-area restaurants help students understand Jiangnan through taste.",
        zhBody:
          "杭州的食物不像川湘那样热烈，但有很深的地方记忆。西湖醋鱼、东坡肉、龙井虾仁、叫花鸡、美食街、夜市和校园周边餐馆，能让学生用味觉理解江南。",
        bullets: [
          "Shengli River food street is useful for students who want a direct local-food route without over-planning.",
          "Hefang Street, Wushan night routes, and old-city snack streets connect food with old Hangzhou atmosphere.",
          "The 2026 Hangzhou night-event rhythm described in the source material adds citywide markets, cultural goods, handmade products, museum merchandise, and summer food scenes."
        ],
        zhBullets: [
          "胜利河美食街适合学生用一条路线直接进入本地餐饮，不需要过度规划。",
          "河坊街、吴山夜间路线和老城小吃街，把食物和老杭州氛围连接起来。",
          "你提供的 2026 杭州夜间活动素材里，全城夜市、市集、文博好物、手作产品和夏夜美食，都能增强杭州对年轻人的吸引力。"
        ]
      },
      {
        title: "West Lake, Liangzhu, Canal, Tea Hills, and a Thousand-Year Cultural Line",
        zhTitle: "西湖、良渚、运河、茶山与千年文化线索",
        body:
          "Hangzhou's cultural depth is unusual because it is not held in one monument. It spreads through water: West Lake, the Grand Canal, wetlands, tea villages, and Liangzhu's ancient water systems and city walls.",
        zhBody:
          "杭州的文化深度很特别，因为它并不只被放在某一个纪念性建筑里，而是通过水系展开：西湖、运河、湿地、茶村，以及良渚古城的水利系统和城墙遗址。",
        bullets: [
          "West Lake gives students a world-heritage daily route: walking, cycling, museums, temples, and evening conversations by the water.",
          "Liangzhu Ancient City and Liangzhu Museum help students understand Chinese civilization at a much earlier historical scale.",
          "Longjing tea villages and Xixi Wetland give Hangzhou a calmer weekend rhythm that balances the digital economy."
        ],
        zhBullets: [
          "西湖给学生一条世界遗产级日常路线：散步、骑行、博物馆、寺庙和湖边傍晚聊天。",
          "良渚古城遗址和良渚博物院能帮助学生从更早的历史尺度理解中华文明。",
          "龙井茶村和西溪湿地给杭州一种更慢的周末节奏，平衡了数字经济城市的速度。"
        ]
      },
      {
        title: "Gentle Nightlife: Bars, Bookstores, Games, Music, and Creative Markets",
        zhTitle: "温和夜生活：酒吧、书店、游戏、音乐与创意市集",
        body:
          "Hangzhou nightlife is attractive because it does not have to be overwhelming. The user's notes describe a city where game bars, whisky bars, live music bars, bookstore bars, creative markets, industrial parks, and citywide summer night events all give students different levels of social energy.",
        zhBody:
          "杭州夜生活的吸引力，在于它不一定是压迫感很强的。你提供的素材里，游戏酒吧、威士忌吧、音乐酒吧、书店酒馆、创意市集、工业遗存公园和全城夏夜活动，为学生提供了不同强度的社交选择。",
        bullets: [
          "Homebar-style social bars, Mission Mars game-bar formats, and music venues such as TZ House make it easier for new students to meet people.",
          "Bookstore-adjacent culture bars and quieter cocktail spaces give students who prefer conversation a softer social route.",
          "Tianmuli markets, Hangzhou Steelworks Park, beer festivals, music events, open-air cinema, and citywide summer night programs make Hangzhou feel young after dark."
        ],
        zhBullets: [
          "桃岸 homebar 这类社交酒吧、Mission Mars 这类游戏酒吧，以及 TZ House 等音乐空间，能帮助新学生更自然地认识朋友。",
          "书店旁的文化酒馆和更安静的鸡尾酒空间，为偏好聊天、阅读和小范围社交的学生提供了柔和路线。",
          "天目里市集、杭钢公园、啤酒节、音乐活动、露天电影和全城夏夜项目，让杭州在夜晚也显得年轻。"
        ]
      },
      {
        title: "The Best Fit: Students Who Want China to Be Beautiful and Useful",
        zhTitle: "最适合的人群：希望中国既美又有用的学生",
        body:
          "Hangzhou is not only a scenic city and not only a technology city. Its strongest appeal is the combination: students can study, build career exposure, learn Chinese, walk by a lake, drink tea in the hills, go to a music bar, and take a high-speed train across the Yangtze River Delta.",
        zhBody:
          "杭州不只是风景城市，也不只是科技城市。它最强的吸引力是组合感：学生可以学习、积累职业曝光、练中文、湖边散步、山里喝茶、去音乐酒吧，再坐高铁进入整个长三角。",
        bullets: [
          "Good for students interested in AI applications, e-commerce, business, design, media, Chinese language, culture, and entrepreneurship.",
          "Good for students who want a city softer than Shanghai but still connected to the Yangtze River Delta's opportunities.",
          "Good for families who care about safety, scenery, transport, university quality, and a high-quality daily environment."
        ],
        zhBullets: [
          "适合关注 AI 应用、电商、商科、设计、媒体、中文、文化和创业的学生。",
          "适合希望城市比上海更柔和，但仍然连接长三角机会的学生。",
          "适合重视安全、风景、交通、高校质量和高品质日常环境的家庭。"
        ]
      }
    ]
  }),
  chongqing: deepDive({
    slug: "chongqing",
    title: "Why Chongqing Is a Dramatic Western China Gateway for Global Students",
    zhTitle: "为什么重庆正在成为外国年轻人读懂中国西部的魔幻入口",
    intro:
      "Chongqing attracts international students because it is impossible to confuse with anywhere else: a mountain city where rivers, bridges, hotpot, monorails, night lights, manufacturing, universities, and western-China openness all rise in layers.",
    zhIntro:
      "重庆吸引国际学生的地方，在于它几乎不可能被误认为任何其他城市：这是一座山城，江河、桥梁、火锅、轻轨、夜景、制造业、高校资源和中国西部开放门户的气质，都以层层叠叠的方式生长在一起。",
    proofPoints: [
      "Chongqing is one of China's major municipalities and a key western gateway, with universities offering undergraduate, master's, doctoral, and Chinese-language routes for international students.",
      "The city can be more budget-friendly than many coastal megacities, with student food costs often kept manageable through campus canteens and local restaurants.",
      "Scholarship and support channels include Chinese Government Scholarship routes, Chongqing municipal scholarships, joint scholarship programs, and university-level support."
    ],
    zhProofPoints: [
      "重庆是中国重要直辖市和西部开放门户，多所高校面向国际学生开放本科、硕士、博士和中文进修路径。",
      "相比不少沿海超大城市，重庆生活成本更友好；校园食堂、本地小面馆和街头餐饮能帮助学生控制日常预算。",
      "奖学金与支持路径包括中国政府奖学金、重庆市级奖学金、联合奖学金项目以及高校层面的资助。"
    ],
    sections: [
      {
        title: "Universities Across Engineering, Communications, Business, and Culture",
        zhTitle: "覆盖工程、通信、商科与文化的高校资源",
        body:
          "Chongqing gives students a practical university map. It is especially relevant for students interested in engineering, architecture, information technology, communications, transportation, Chinese language, business, law, and western-China development.",
        zhBody:
          "重庆给学生的是一张很务实的高校地图。它尤其适合关注工程、建筑、信息技术、通信、交通、中文、商科、法律和中国西部发展机会的学生。",
        bullets: [
          "Chongqing University recruits full-time international undergraduate students, with many degree routes generally taking four years and architecture-related routes often longer.",
          "Chongqing University of Posts and Telecommunications offers international undergraduate and postgraduate programs and is especially visible for information, communications, and digital fields.",
          "Chongqing Normal University, Chongqing Technology and Business University, Chongqing Jiaotong University, and other institutions add options across language, education, business, law, transport, and applied disciplines."
        ],
        zhBullets: [
          "重庆大学面向国际学生招收全日制来华留学本科生，多数专业学制一般为 4 年，建筑学等专业常见学制更长。",
          "重庆邮电大学面向外国留学生开设本科和研究生项目，在信息、通信和数字技术相关方向上辨识度很高。",
          "重庆师范大学、重庆工商大学、重庆交通大学等高校，为语言、教育、商科、法律、交通和应用型学科学生提供更多选择。"
        ]
      },
      {
        title: "A Lower-Pressure Budget in a Giant City",
        zhTitle: "巨型城市里的相对低压力预算",
        body:
          "Chongqing is large, energetic, and visually intense, but daily spending can be more forgiving than in Beijing, Shanghai, Shenzhen, or other coastal first-tier cities. For many students, this makes Chongqing a serious option rather than only a travel fantasy.",
        zhBody:
          "重庆很大、很热烈、视觉冲击也很强，但日常开销通常比北京、上海、深圳等沿海一线城市更温和。对许多学生来说，这让重庆不只是旅游幻想，而是一个可以认真考虑的留学城市。",
        bullets: [
          "Campus canteens and neighborhood restaurants help students keep food costs manageable.",
          "Chongqing noodles, simple rice meals, hotpot shared by classmates, and local snacks make eating social without always becoming expensive.",
          "The city fits students who want big-city energy, lower relative costs, and strong public transportation."
        ],
        zhBullets: [
          "校园食堂和大学周边餐馆可以帮助学生控制餐饮成本。",
          "重庆小面、简餐、同学合吃火锅和本地小吃，让吃饭既有社交感，也不必总是很贵。",
          "重庆适合希望拥有大城市能量、相对可控生活成本和便利公共交通的学生。"
        ]
      },
      {
        title: "Hotpot, Noodles, Night Snacks, and a City That Eats Together",
        zhTitle: "火锅、小面、夜宵，以及一座一起吃饭的城市",
        body:
          "Chongqing food is direct, hot, and emotional. Hotpot is the city signature, but daily Chongqing is also noodles, grilled snacks, street food, and underground food plazas where students can begin friendship before their Chinese is perfect.",
        zhBody:
          "重庆的食物很直接、很热烈，也很有情绪。火锅是最响亮的名片，但真正日常的重庆还有小面、烧烤、街头小吃和地下美食广场。学生即使中文还不够流利，也可以先从一起吃饭开始交朋友。",
        bullets: [
          "Chongqing hotpot gives students a powerful first taste of the city: spicy broth, shared tables, noisy conversation, and strong memory.",
          "Chongqing noodles are a daily ritual and an affordable way to enter local life.",
          "Jiefangbei Bayi Road food street and Guanyinqiao food areas work well for first food walks, especially at night."
        ],
        zhBullets: [
          "重庆火锅给学生的是强烈的第一口城市记忆：麻辣锅底、共享餐桌、热闹聊天和很难忘的味觉冲击。",
          "重庆小面是这座城市的日常仪式，也是学生以较低成本进入本地生活的方式。",
          "解放碑八一路好吃街、观音桥美食区等地方，很适合作为第一次重庆美食漫步路线，尤其适合晚上去。"
        ]
      },
      {
        title: "A 3D City of Rivers, Bridges, Monorails, and Night Views",
        zhTitle: "由江河、桥梁、轻轨与夜景组成的 3D 山城",
        body:
          "Chongqing's travel appeal is not a list of separate spots. The whole city is the experience: bridges crossing rivers, stairs climbing hills, monorails passing buildings, and night lights stacked above the water.",
        zhBody:
          "重庆的旅行吸引力不是几个分散景点的清单，而是整座城市本身就是体验：桥跨过江河，台阶爬上山坡，轻轨穿过建筑，夜景在江面之上层层亮起。",
        bullets: [
          "Hongyadong is the classic first-night landmark, especially for students who want a dramatic visual memory.",
          "Liziba Station turns public transportation into a city lesson about mountain terrain, architecture, and adaptation.",
          "Chaotianmen, Raffles City, the Yangtze River, and the Jialing River help students understand why Chongqing's geography matters."
        ],
        zhBullets: [
          "洪崖洞适合作为第一次重庆夜景路线，尤其适合想迅速获得强烈视觉记忆的学生。",
          "李子坝站把公共交通变成了理解山地地形、建筑和城市适应能力的现场课堂。",
          "朝天门、来福士、长江和嘉陵江，能帮助学生理解重庆为什么必须从地理开始读懂。"
        ]
      },
      {
        title: "Museums, Old Streets, and Culture Beyond Internet-Famous Views",
        zhTitle: "博物馆、老街与网红景观之外的文化厚度",
        body:
          "The deeper Chongqing is found in museums, old streets, intangible-heritage workshops, river memories, and campus cultural activities. These routes help students understand that the city is not only visually spectacular, but historically layered.",
        zhBody:
          "更深的重庆藏在博物馆、老街、非遗体验、江河记忆和高校文化活动里。这些路线能让学生明白，重庆不只是视觉奇观，也是一座历史层次很厚的城市。",
        bullets: [
          "Ciqikou gives students old-street food, tea, dialect, signs, and a slower way to practice Chinese.",
          "Chongqing China Three Gorges Museum connects rivers, archaeology, migration, industry, and western-China transformation.",
          "International student activities have included visits to Three Gorges Museum, People's Auditorium, Jiefangbei, Chaotianmen, and old streets, helping students connect city views with cultural context."
        ],
        zhBullets: [
          "磁器口给学生老街美食、茶、方言、招牌和更慢的中文练习方式。",
          "重庆中国三峡博物馆把江河、考古、移民、工业和中国西部转型连接起来。",
          "不少国际学生城市活动会走进三峡博物馆、人民大礼堂、解放碑、朝天门和老街区，让学生把城市景观与文化背景连接起来。"
        ]
      },
      {
        title: "Services, Scholarships, and Western China Opportunities",
        zhTitle: "来华服务、奖学金与中国西部机会",
        body:
          "Chongqing is building service systems for overseas students and returned talents, while also offering scholarship routes that make the city more accessible for students with different budgets.",
        zhBody:
          "重庆正在完善面向海外学生和留学回国人才的服务体系，同时也通过多层次奖学金路径，让不同预算背景的学生更容易把重庆纳入选择范围。",
        bullets: [
          "Chongqing has promoted one-stop service ideas for overseas and returned talents, linking policies, jobs, and city services more directly.",
          "The city offers municipal scholarship references for foreign students, while some universities connect students with Chinese Government Scholarship and joint scholarship programs.",
          "Chongqing fits students who want China to feel bold, affordable, visually powerful, industrial, and connected to western development."
        ],
        zhBullets: [
          "重庆推动留学回国人才等群体的“一站式”服务思路，让政策、岗位和城市服务连接得更直接。",
          "重庆设有面向外国留学生的市级奖学金参考路径，部分高校也连接中国政府奖学金和联合奖学金项目。",
          "重庆适合希望中国留学体验呈现为热烈、实惠、视觉强烈、产业基础扎实，并连接西部发展机会的学生。"
        ]
      }
    ]
  }),
  chengdu: deepDive({
    slug: "chengdu",
    title: "Why Chengdu Is Becoming a Warm China City for Global Youth",
    zhTitle: "为什么成都正在成为外国年轻人读懂中国的温暖入口",
    intro:
      "Chengdu works because it gives international students something rare: strong universities, scholarship routes, a lower-cost big-city life, food that immediately creates friendships, pandas, tea houses, old lanes, western Sichuan weekend routes, and a talent-friendly city rhythm under the image of a park city below snow mountains.",
    zhIntro:
      "成都真正吸引国际学生的地方，在于它把很多难得的东西放在了一起：优质高校、奖学金机会、相对实惠的大城市生活、能迅速拉近人与人距离的美食、熊猫、茶馆、老巷子、川西周末路线，以及一座“雪山下的公园城市”对青年人才释放出的友好节奏。",
    proofPoints: [
      "Chengdu is one of western China's most dynamic new first-tier cities, attracting students from the United States, Germany, Thailand, Pakistan, and many other countries.",
      "A practical student budget can often sit around RMB 3,500-5,000 per month, depending on housing and lifestyle, with campus housing often much lower than private apartments.",
      "Scholarship channels include Chinese Government Scholarship, International Chinese Language Teachers Scholarship, Chengdu Government Scholarship, and university-level awards."
    ],
    zhProofPoints: [
      "成都是中国西部最具活力的新一线城市之一，正在吸引来自美国、德国、泰国、巴基斯坦等不同国家的年轻人。",
      "在控制住宿和生活方式后，学生月均总开销常可参考 3500-5000 元区间；校内住宿通常明显低于校外单间。",
      "奖学金路径包括中国政府奖学金、国际中文教师奖学金、成都市政府奖学金以及高校层面的优秀学生奖学金等。"
    ],
    sections: [
      {
        title: "Strong Universities and Scholarship Routes",
        zhTitle: "优质高校与多层次奖学金路径",
        body:
          "Chengdu's higher-education ecosystem is broad enough for students interested in comprehensive universities, engineering, transportation, medicine, traditional Chinese medicine, tourism, design, Chinese language, and applied fields.",
        zhBody:
          "成都的高等教育资源覆盖面很广，适合关注综合类大学、工程、交通、医学、中医药、旅游、设计、中文和应用型专业的学生。它不是只有一所名校撑场面的城市，而是能提供不同学科路径和不同预算选择的留学城市。",
        bullets: [
          "Sichuan University offers international student routes and scholarship references including Chinese Government Scholarship, International Chinese Language Teachers Scholarship, Chengdu Government Scholarship, and Sichuan University Excellent Student Scholarship.",
          "Southwest Jiaotong University, Chengdu University of Technology, Chengdu University of Traditional Chinese Medicine, Sichuan International Studies University, Chengdu University, and other institutions add choices across engineering, medicine, language, culture, and applied majors.",
          "Chengdu University has received more than 4,600 international students from 78 countries, while Sichuan Tourism University is especially distinctive for tourism and culinary-related strengths."
        ],
        zhBullets: [
          "四川大学面向国际学生开放申请，并可参考中国政府奖学金、国际中文教师奖学金、成都市政府奖学金、四川大学优秀学生奖学金等多层次资助。",
          "西南交通大学、成都理工大学、成都中医药大学、四川外国语大学、成都大学等高校，让工程、医学、语言、文化和应用型专业学生都有更多选择。",
          "成都大学累计已招收来自 78 个国家的 4600 余名留学生；四川旅游学院则在旅游与烹饪相关学科上具有鲜明特色。"
        ]
      },
      {
        title: "A Big City Where the Budget Can Still Breathe",
        zhTitle: "一座让预算还能喘口气的大城市",
        body:
          "Chengdu gives students a rare balance: big-city services, international food and transit, but daily pressure that can be much gentler than in China's most expensive coastal cities.",
        zhBody:
          "成都给学生的平衡感很珍贵：它有大城市的服务、交通、商业、国际化餐饮和活动机会，但日常生活压力通常比最昂贵的一线沿海城市更温和。对许多来自发展中国家的学生来说，这种性价比非常重要。",
        bullets: [
          "Sichuan University campus dormitory references are around RMB 800-1,200 per month, while off-campus single rooms may sit around RMB 2,000-3,500 depending on area and quality.",
          "A practical monthly total, including local food, transport, and daily life, can often be planned around RMB 3,500-5,000.",
          "Compared with Shanghai-level costs, Chengdu can feel like a city where students get comfort, food, social life, and space without exhausting their budget."
        ],
        zhBullets: [
          "四川大学校内宿舍可参考每月约 800-1200 元；校外单人间根据地段和条件不同，常见参考区间约 2000-3500 元。",
          "如果包含本地餐饮、交通和日常生活，学生月均总开销可大致按 3500-5000 元规划。",
          "相比上海等高成本城市，成都更容易让学生用可承受的预算获得舒适居住、美食社交和有质量的城市生活。"
        ]
      },
      {
        title: "Hotpot, Chuanchuan, Night Markets, and Friendship Through Food",
        zhTitle: "火锅、串串、夜市，以及从食物开始的友谊",
        body:
          "Chengdu is a UNESCO City of Gastronomy, but its food culture is not only a title. Hotpot, chuanchuan, bobo chicken, dan dan noodles, Long chaoshou, and fuqi feipian make the city immediately memorable, especially because eating is social here.",
        zhBody:
          "成都是联合国教科文组织认证的“美食之都”，但这不是一个冷冰冰的称号。火锅、串串香、钵钵鸡、担担面、龙抄手、夫妻肺片，会让学生很快用味觉记住这座城市；更重要的是，在成都，吃饭本来就是社交。",
        bullets: [
          "Fuqin Night Market keeps more old Chengdu neighborhood feeling, with local shops, late-night meals, and friendly prices.",
          "Jianshe Lane is a student snack paradise, while Kuixinglou Street near Kuanzhai Alley is convenient for first-time food walks.",
          "Sanse Road Night Market and Jinjiang evening routes show the playful, young, after-dark side of Chengdu."
        ],
        zhBullets: [
          "抚琴夜市更像本地人的深夜食堂，社区老店多、价格亲民，也保留了更多老成都的市井气。",
          "建设巷是学生小吃天堂；紧邻宽窄巷子的奎星楼街适合作为第一次成都美食漫步路线。",
          "三色路夜市与锦江傍晚路线，会呈现成都年轻、松弛、入夜以后仍然很有生命力的一面。"
        ]
      },
      {
        title: "A Park City Below Snow Mountains",
        zhTitle: "雪山下的公园城市：熊猫、都江堰、青城山与慢生活",
        body:
          "Chengdu's tourism value is not only in big landmarks. It is the way students can move from pandas to tea houses, from old lanes to riverside evenings, and from the city to Dujiangyan, Qingcheng Mountain, or western Sichuan weekend landscapes.",
        zhBody:
          "成都的旅行价值不只在几个著名景点，而在它能让学生从熊猫基地走到茶馆，从老巷子走到锦江夜色，再从城市出发去都江堰、青城山和川西周末风景。它很适合把旅行变成生活的一部分。",
        bullets: [
          "Chengdu Research Base of Giant Panda Breeding is one of the city's strongest global symbols; morning visits are usually better for seeing active pandas.",
          "Dujiangyan and Qingcheng Mountain connect students with ancient water engineering, Daoist culture, mountains, forests, and world-heritage routes.",
          "Huanglongxi Ancient Town, Kuanzhai Alley, Heming Teahouse in People's Park, Danjing Terrace, Sancha Lake, and nearby villages give students many low-pressure weekend options."
        ],
        zhBullets: [
          "成都大熊猫繁育研究基地是成都最强的世界级名片之一；清晨更适合看到熊猫户外进食和活动。",
          "都江堰与青城山把学生带到古代水利工程、道教文化、山林和世界遗产路线之中。",
          "黄龙溪古镇、宽窄巷子、人民公园鹤鸣茶社、丹景台、三岔湖和周边乡村，都能成为低压力、高记忆度的周末路线。"
        ]
      },
      {
        title: "Immersive Culture Students Can Touch",
        zhTitle: "可以亲手触摸的沉浸式文化",
        body:
          "Chengdu is especially strong when culture becomes something students can wear, make, taste, and discuss. University activities around Wuhou Shrine, Pengzhou study trips, bamboo villages, wine villages, Jinsha Site, Shuijingfang, and traditional Chinese medicine routes turn the city into a living classroom.",
        zhBody:
          "成都的文化吸引力，最强的时候不是停留在介绍文字里，而是变成学生可以穿上、亲手制作、品尝和讨论的体验。武侯祠汉服路线、彭州研学、道明竹艺村、天府酒村、金沙遗址、水井坊和中医药文化实践，都会让城市变成活的课堂。",
        bullets: [
          "Students can enter Three Kingdoms culture through Wuhou Shrine and nearby old streets, where Hanfu photography and historical storytelling naturally meet.",
          "Southwestern University of Finance and Economics and other campuses have organized international students into bamboo-art villages, wine villages, and Pengzhou study experiences involving mugwort hammers and herbal sachets.",
          "Chengdu University of Traditional Chinese Medicine summer activities connect students with TCM museums, Panda Valley, Jinsha Site, Shuijingfang, and clinical medicine exchange."
        ],
        zhBullets: [
          "学生可以通过武侯祠和周边古祠街巷进入三国文化，汉服拍照与历史叙事在这里自然结合。",
          "西南财经大学等高校曾组织留学生走进竹艺村、天府酒村和彭州研学活动，亲手制作艾草锤、中药香囊等。",
          "成都中医药大学相关夏令营和研学项目，将中医药博物馆、熊猫谷、金沙遗址、水井坊和临床医学交流连接起来。"
        ]
      },
      {
        title: "Talent Policies and a City That Gives Young People Room",
        zhTitle: "人才政策与一座愿意给年轻人留空间的城市",
        body:
          "Chengdu is not only attractive for study years. The city is also building routes for overseas talent, internships, innovation, entrepreneurship, and post-study possibilities.",
        zhBody:
          "成都的吸引力不只停留在读书阶段。这座城市正在为海外青年人才、实习、创新创业和毕业后的发展可能性搭建更清晰的路径。",
        bullets: [
          "Chengdu has introduced support measures for overseas talent innovation and entrepreneurship.",
          "The 2026 overseas talent internship plan references at least 300 master and doctoral young talents from well-known global universities, with industry visits, internships, cultural exchange, employment tracking, and entrepreneurship guidance.",
          "Excellent overseas talents coming to Chengdu for innovation and entrepreneurship may receive matching support of up to RMB 300,000 under relevant policy references."
        ],
        zhBullets: [
          "成都已出台面向优秀海外人才创新创业的支持政策。",
          "成都市 2026 年海外人才实习生计划面向世界知名高校遴选不少于 300 名硕博青年人才，并配套产业考察、跟岗实习、文化交流、就业跟踪和创业指导。",
          "符合条件的优秀海外人才来蓉创新创业，可参考最高 30 万元匹配资助等政策支持。"
        ]
      }
    ]
  }),
  changsha: deepDive({
    slug: "changsha",
    title: "Why Changsha Is Becoming a First China City for Global Youth",
    zhTitle: "为什么长沙正在成为外国年轻人读懂中国的第一站",
    intro:
      "Changsha works because it gives international students a rare balance: a lower cost of living than the largest coastal cities, strong universities, loud food culture, real nightlife, museums, mountains, rivers, and a city personality that actively welcomes young curiosity.",
    zhIntro:
      "长沙真正吸引外国年轻人的地方，在于它提供了一种很难得的平衡：生活成本低于北上广深，大学资源扎实，美食热烈，夜生活丰富，又有博物馆、山水、老街和一种愿意拥抱年轻好奇心的城市性格。",
    proofPoints: [
      "Recognized for multiple years as one of the most attractive Chinese cities in the eyes of foreign talent.",
      "A practical monthly student budget can often sit around RMB 2,000-4,000, depending on housing and lifestyle.",
      "International students from Russia, Nigeria, Gabon, Gambia, and many other countries are already building real lives here."
    ],
    zhProofPoints: [
      "连续多年入选“外籍人才眼中最具吸引力的中国城市”，说明它不只是本地人觉得好玩，也被外来者持续认可。",
      "学生每月生活费通常可控制在 2000-4000 元左右，餐饮日常支出约 50-70 元也能吃得不错。",
      "从俄罗斯、尼日利亚、加蓬到冈比亚，越来越多不同国家的学生在长沙学习、交朋友、过节、旅行，并留下自己的故事。"
    ],
    sections: [
      {
        title: "A Comfortable Life Without Coastal Megacity Pressure",
        zhTitle: "用不高的成本，过上充实的生活",
        body:
          "For many students, Changsha feels like a city where the budget finally breathes. It has the services and excitement of a new first-tier city, but daily spending can be much gentler than Beijing, Shanghai, Guangzhou, or Shenzhen.",
        zhBody:
          "对许多留学生来说，长沙最大的友好之处，是预算终于可以喘口气。它有新一线城市的便利和热闹，却没有北上广深那样高的日常压力。",
        bullets: [
          "Good for students who want comfort, food, transport, and weekend life without overspending.",
          "Daily meals can be student-friendly, especially around campus neighborhoods.",
          "The city supports hobbies: calligraphy, music, skateboarding, motorcycle clubs, language exchange, and nature trips."
        ],
        zhBullets: [
          "适合希望生活舒服、有吃有玩、交通方便，但又不想过度消耗预算的学生。",
          "大学周边餐饮价格友好，预算有限也能吃得丰富。",
          "长沙很支持年轻人的爱好：书法、音乐、滑板、摩托车俱乐部、语言交换、周末骑行和自然探索，都能找到同伴。"
        ]
      },
      {
        title: "Food That Makes the City Unforgettable",
        zhTitle: "一座用“热辣滚烫”征服味蕾的城市",
        body:
          "Changsha's food is not a side note. It is often the first emotional door into the city: stinky tofu, sugar-oil baba, spicy crayfish, late-night barbecue, and university-street meals that students can actually afford.",
        zhBody:
          "长沙的美食不是附属品，而是很多外国学生爱上这座城市的第一个入口：臭豆腐、糖油粑粑、口味虾、小龙虾、深夜烧烤，还有学生真的吃得起的大学城街巷小店。",
        bullets: [
          "Yuelu Mountain University Town is a strong first route for student food walks.",
          "Lushan South Road, campus canteens, and small local restaurants make daily life affordable.",
          "Yangfan Night Market and Dongguashan Night Market show the noisy, generous, social side of Changsha."
        ],
        zhBullets: [
          "岳麓山大学城很适合作为留学生第一次长沙美食探索路线。",
          "麓山南路、校园食堂和本地小馆，让日常吃饭既便宜又有地方味。",
          "扬帆夜市和冬瓜山夜市呈现的是长沙最热闹、最慷慨、最适合结伴社交的一面。"
        ]
      },
      {
        title: "Nightlife, Bars, Neon, and the City That Does Not Sleep",
        zhTitle: "夜生活、酒吧、霓虹和不夜城气质",
        body:
          "For young people, Changsha is memorable after dark. Wuyi Square, Jiefang West Road, Pozi Street, street grills, music bars, and neon signs make the city feel alive long after class ends.",
        zhBody:
          "对年轻人来说，长沙最难忘的时刻常常发生在夜晚。五一广场、解放西路、坡子街、烧烤摊、音乐酒吧和霓虹招牌，让下课之后的城市依然充满生命力。",
        bullets: [
          "Wuyi Square works as a first-night route for lights, crowds, snacks, and photos.",
          "Jiefang West Road gives Changsha its bar-street reputation.",
          "Late-night food turns social life into something easy: classmates can start with snacks even before they share a language perfectly."
        ],
        zhBullets: [
          "五一广场适合作为初到长沙的第一条夜游路线：灯光、人流、小吃和拍照点都集中。",
          "解放西路让长沙有了鲜明的酒吧街记忆。",
          "深夜美食让社交变得简单：即使中文还不流利，留学生也可以从一起吃夜宵开始认识朋友。"
        ]
      },
      {
        title: "Mountains, River, Island, and Easy Student Travel",
        zhTitle: "山水洲城，学生也能轻松旅行",
        body:
          "Changsha's geography is unusually student-friendly. Orange Isle, the Xiang River, Yuelu Mountain, and Yuelu Academy are not distant postcard places; they are weekend routines that can fit between classes.",
        zhBody:
          "长沙的“山水洲城”格局对学生特别友好。橘子洲、湘江、岳麓山和岳麓书院不是遥远的明信片景点，而是可以塞进周末和课余生活的真实路线。",
        bullets: [
          "Orange Isle is best at sunset and at night along the river.",
          "Yuelu Mountain gives students hiking, cable-car views, temples, bamboo paths, and city overlooks.",
          "Yuelu Academy makes Chinese intellectual history feel close to campus life."
        ],
        zhBullets: [
          "橘子洲适合傍晚和夜晚去，江风、日落和夜景都很有记忆点。",
          "岳麓山适合徒步、坐缆车、看寺庙竹林，也能从高处看长沙城。",
          "岳麓书院让中国书院传统和学生生活靠得很近，不只是景点，也是理解中国教育文化的入口。"
        ]
      },
      {
        title: "Museums and Culture You Can Touch",
        zhTitle: "博物馆与可以亲手触摸的湖湘文化",
        body:
          "Changsha is strong for students who want Chinese culture to feel real. Hunan Museum, the Mawangdui Han tomb finds, Tianxin Pavilion activities, bamboo-slip culture classes, and intangible-heritage workshops turn history into something students can see, write, wear, taste, and make.",
        zhBody:
          "长沙很适合想真正理解中国文化的学生。湖南博物院、马王堆汉墓、天心阁文化活动、简牍课堂和非遗体验，不会让历史停在展柜里，而是让学生能看见、书写、穿上、品尝并亲手制作。",
        bullets: [
          "Hunan Museum is a must for Mawangdui, silk, lacquerware, bamboo slips, and Han-dynasty imagination.",
          "Tianxin Pavilion and local culture parks work well for language practice and Hanfu photos.",
          "Workshops around paper-cutting, shadow puppetry, embroidery, bamboo slips, herbal traditions, and festival customs help students remember China through the body, not only through textbooks."
        ],
        zhBullets: [
          "湖南博物院是必去的人文入口：马王堆、素纱襌衣、漆器、竹简和汉代想象都很震撼。",
          "天心阁和城市文化公园适合中文练习、汉服拍照和沉浸式活动。",
          "剪纸、皮影、湘绣、简牍、中医药和节日习俗等体验，会让学生用身体记住中国，而不只是从课本理解中国。"
        ]
      },
      {
        title: "A City That Lets Foreign Students Find Their Own Place",
        zhTitle: "一座让外国学生找到自己位置的城市",
        body:
          "The strongest Changsha stories are personal. Some students first love the smell of barbecue when they arrive by high-speed rail; some stay because they find Chinese friends, medical training, design inspiration, music, riding routes, or festival warmth.",
        zhBody:
          "长沙最动人的地方，往往不是宏大的城市口号，而是个人故事。有人从高铁站出来闻到烧烤、自然和历史混合的气息就喜欢上这里；有人因为中国朋友、医学学习、设计灵感、音乐、骑行路线和春节活动慢慢留下来。",
        bullets: [
          "Good for students from developing countries who want quality of life at a controllable cost.",
          "Good for medical, digital media, design, engineering, Chinese language, business, and culture-curious students.",
          "Good for students who want China to feel young, warm, affordable, and alive."
        ],
        zhBullets: [
          "适合来自发展中国家、希望以可承受成本获得高质量生活的学生。",
          "适合医学、数字媒体、设计、工程、中文、商科，以及真正对中国文化好奇的学生。",
          "适合希望中国不只是“强大”，而是年轻、温暖、实惠、鲜活的学生。"
        ]
      }
    ]
  }),
  nanning: deepDive({
    slug: "nanning",
    title: "Why Nanning Is a Natural China Gateway for ASEAN and Global Youth",
    zhTitle: "为什么南宁正在成为东盟与全球青年读懂中国的第一站",
    intro:
      "Nanning is different from China's louder megacities. It is green, warm, affordable, ASEAN-facing, and culturally open. For students from Southeast Asia, South Asia, Africa, and other developing regions, it can feel like a practical and welcoming doorway into China.",
    zhIntro:
      "南宁和中国那些声量更大的超大城市不一样。它绿色、温暖、实惠，面向东盟，也天然带着跨文化交流的气质。对来自东南亚、南亚、非洲以及许多发展中国家的学生来说，南宁像是一扇更亲近、更可负担、更容易进入中国的门。",
    proofPoints: [
      "Nanning is Guangxi's capital and one of China's most important city windows toward ASEAN cooperation.",
      "Daily meals around campuses and local restaurants can be very student-friendly, with some references around RMB 14-30 per day for simple eating.",
      "Scholarship routes include Guangxi ASEAN student scholarships, Chinese Government Scholarship channels, and university-level support."
    ],
    zhProofPoints: [
      "南宁是广西首府，也是中国面向东盟开放合作的重要城市窗口。",
      "学校食堂和周边餐馆价格对学生友好，简单日常餐饮可低至每天约 14-30 元。",
      "奖学金路径丰富，包括广西政府东盟国家留学生奖学金、中国政府奖学金项目，以及高校和企业支持项目。"
    ],
    sections: [
      {
        title: "Education and Scholarships With an ASEAN Advantage",
        zhTitle: "面向东盟的教育资源与奖学金优势",
        body:
          "Nanning's universities are especially meaningful for students who care about China-ASEAN cooperation, medicine, engineering, Chinese language, ethnic culture, tourism, digital fields, and regional development.",
        zhBody:
          "南宁的高校资源，特别适合关注中国—东盟合作、医学、工程、中文、民族文化、旅游、数字科技和区域发展的学生。",
        bullets: [
          "Guangxi University is a Double First-Class university with scholarship channels and strengths in engineering, agriculture, business, and regional studies.",
          "Guangxi Minzu University is highly visible among ASEAN students and offers degree and Chinese-language routes for international students.",
          "Guangxi Medical University, Nanning Normal University, Guangxi University of Chinese Medicine, and other institutions give students choices across medicine, education, humanities, and applied fields."
        ],
        zhBullets: [
          "广西大学是“双一流”建设高校，拥有奖学金通道，在工程、农业、商科和区域研究等方向具备代表性。",
          "广西民族大学在东盟国家学生中知名度高，面向国际学生提供本科、研究生和汉语进修等路径。",
          "广西医科大学、南宁师范大学、广西中医药大学等高校，让医学、教育、人文和应用型专业学生都有选择空间。"
        ]
      },
      {
        title: "Lower Living Cost, Warm Weather, and Easier Daily Life",
        zhTitle: "更低生活成本、温暖气候和更轻松的日常",
        body:
          "Nanning is one of those cities where international students can feel daily pressure become lighter. Food, rent, transport, and everyday services are generally gentler than in Beijing, Shanghai, Guangzhou, or Shenzhen.",
        zhBody:
          "南宁是一座能让留学生感到日常压力变轻的城市。餐饮、住宿、交通和生活服务整体比北上广深更温和，特别适合预算有限但希望生活质量稳定的学生。",
        bullets: [
          "Campus meals and neighborhood restaurants make student budgeting easier.",
          "The warm, humid subtropical climate is familiar and comfortable for many students from tropical countries.",
          "Airport, rail stations, buses, phone cards, and internet services make arrival and daily communication practical."
        ],
        zhBullets: [
          "校园食堂和大学周边餐馆价格友好，学生更容易控制预算。",
          "南宁温暖湿润、少有严寒，对于许多来自热带国家的学生更亲切。",
          "机场、火车站、公交网络、电话卡和互联网服务都比较完善，抵达和日常联系更方便。"
        ]
      },
      {
        title: "A Food City Built on Sour, Spicy, Fresh, and Fragrant Flavors",
        zhTitle: "一座用“酸辣鲜香”征服味蕾的城市",
        body:
          "Nanning food is memorable because it is bright and alive. Laoyou rice noodles, suanye pickled fruits and vegetables, fermented rice noodles, lemon duck, roll rice noodles, Binyang sour noodles, and dumpling-like rice snacks give students an immediate taste of Guangxi.",
        zhBody:
          "南宁的美食记忆点很鲜明：酸、辣、鲜、香，轻快而有生命力。老友粉、酸嘢、生榨米粉、白切柠檬鸭、卷筒粉、宾阳酸粉和粉饺，都能让留学生很快尝到广西的地方性格。",
        bullets: [
          "Laoyou rice noodles are the city's most direct food identity: hot broth, sour bamboo shoots, garlic, chili, fermented black beans, and a strong street aroma.",
          "Suanye is perfect for Nanning weather: pickled fruits and vegetables that are sour, sweet, spicy, crisp, and refreshing.",
          "Zhongshan Road, Jianzheng Road, and Xiguan night markets let students understand Nanning through food, lights, shopping, and late-night crowds."
        ],
        zhBullets: [
          "老友粉是南宁最直接的味觉名片：热汤、酸笋、蒜蓉、小米辣、豆豉和街头镬气，很容易让人记住。",
          "酸嘢非常适合南宁湿热天气：瓜果蔬菜被腌成酸甜鲜辣、清爽解腻的小吃。",
          "中山路、建政路和西关夜市让学生通过食物、灯光、购物和夜晚人流理解南宁。"
        ]
      },
      {
        title: "Green City Travel: Mountains, River, Museums, and Weekend Borders",
        zhTitle: "绿城旅行：青秀山、邕江、博物馆与边境周末",
        body:
          "Nanning's travel rhythm is softer than a blockbuster tourist city, but very livable. Students can move from tropical greenery to river walks, museums, old streets, theme parks, and short trips toward Vietnam-facing border landscapes.",
        zhBody:
          "南宁的旅行节奏不像爆款旅游城市那样喧闹，但非常适合生活。学生可以从热带绿意走到邕江，从博物馆走到老街，从东盟主题乐园走到面向中越边境的周末路线。",
        bullets: [
          "Qingxiu Mountain is the city landmark: tropical and subtropical plants, a forest-like atmosphere, night garden events, and views from Longxiang Tower.",
          "The Yong River links Qingxiu Mountain, Jinhuiruyifang, Nanning Confucius Temple Museum, and Guangxi Museum of Nationalities.",
          "Detian Transnational Waterfall gives adventurous students a rare borderland weekend route."
        ],
        zhBullets: [
          "青秀山是南宁城市名片：热带、亚热带植物，森林氧吧般的氛围，夜花园活动，以及龙象塔上的城市视野。",
          "邕江串联青秀山、金汇如意坊、南宁孔庙博物馆和广西民族博物馆，是理解城市空间的一条线。",
          "德天跨国瀑布给喜欢探索的学生提供了很有记忆点的边境周末路线。"
        ]
      },
      {
        title: "ASEAN Culture Is Not Decoration Here",
        zhTitle: "东盟文化在这里不是装饰，而是城市底色",
        body:
          "Nanning's strongest difference is its ASEAN orientation. The China-ASEAN Expo, ASEAN student exchanges, Fantawild Asian Legend, Guangxi Museum of Nationalities, and university networks make cross-cultural life part of the city structure.",
        zhBody:
          "南宁最独特的地方，是它的东盟面向。中国—东盟博览会、东盟留学生交流、方特东盟神画、广西民族博物馆和高校合作网络，让跨文化生活成为城市结构的一部分，而不是旅游宣传里的装饰。",
        bullets: [
          "For ASEAN students, Nanning can feel like a second home inside China.",
          "For non-ASEAN students, it is a good place to understand Southeast Asia while studying in China.",
          "Fantawild Asian Legend and ASEAN-themed events make culture easy to experience visually, socially, and emotionally."
        ],
        zhBullets: [
          "对东盟学生来说，南宁很容易成为在中国的“第二故乡”。",
          "对非东盟国家学生来说，南宁也是在中国理解东南亚文化的好窗口。",
          "方特东盟神画和各类东盟主题活动，让文化不只是知识，而是可以看见、参与和产生情感连接的体验。"
        ]
      },
      {
        title: "Intangible Heritage, Festivals, and Services That Help Students Stay",
        zhTitle: "非遗、节庆与让学生留下来的服务温度",
        body:
          "Nanning gives international students many chances to enter local culture through the body: Zhuang brocade weaving, qipao and arcade architecture walks, Cantonese opera gestures, art exhibitions, dragon boat racing, Chinese-language storytelling, and campus service events.",
        zhBody:
          "南宁给国际学生很多通过身体进入本地文化的机会：壮锦织锦、骑楼建筑参访、粤剧身段学习、美术馆沉浸体验、龙舟赛、中文讲述和校园服务活动，都让留学不只是上课。",
        bullets: [
          "Zhuang brocade classes are especially powerful for ASEAN students because they can weave home-country colors into Chinese intangible heritage.",
          "One-stop foreign talent and work-service platforms make post-study planning more concrete for students who may stay in Guangxi.",
          "Nanning fits students who want China to feel warm, affordable, regional, green, and internationally connected."
        ],
        zhBullets: [
          "壮锦课程很适合东盟学生，因为他们可以把自己家乡的色彩织进中国非遗里。",
          "外国人才“一站式”服务平台、来华工作服务专窗和南宁—东盟国际人才港，让毕业后可能留桂发展的学生看到更具体的路径。",
          "南宁适合希望中国是温暖、实惠、有区域特色、绿色并且国际连接紧密的学生。"
        ]
      }
    ]
  }),
  kunming: deepDive({
    slug: "kunming",
    title: "Why Kunming Is a Spring-City Gateway for Global Students",
    zhTitle: "为什么昆明正在成为外国年轻人读懂中国西南的理想之地",
    intro:
      "Kunming attracts students because it offers something rare: strong universities, scholarship routes, a mild climate, lower living costs, rich food, ethnic diversity, and a slower rhythm that still connects outward to Southeast Asia and the wider world.",
    zhIntro:
      "昆明吸引外国年轻人的地方，在于它提供了一种很难得的组合：优质高校、奖学金机会、四季如春的气候、较低生活成本、丰富美食、多元民族文化，以及一种不急不慢却面向东南亚和世界打开的城市节奏。",
    proofPoints: [
      "Kunming has repeatedly appeared among attractive Chinese cities in the eyes of foreign professionals since 2019.",
      "A practical student budget can often sit around RMB 2,500-3,500 per month for basic but comfortable life, depending on housing and lifestyle.",
      "Students from Vietnam, Myanmar, Laos, the United Kingdom, and many other places already use Kunming as a China pathway."
    ],
    zhProofPoints: [
      "自2019年以来，昆明多次入选外国专家眼中具有吸引力的中国城市，说明它的舒适度和开放度被外来者持续感知。",
      "如果住宿和生活方式控制得当，许多学生每月约 2500-3500 元就能维持相对舒适的生活，饮食和基础开支也更容易管理。",
      "从越南、缅甸、老挝到英国，不同国家的学生已经把昆明作为进入中国、理解中国西南和学习中文的重要目的地。"
    ],
    sections: [
      {
        title: "Strong Universities and Layered Scholarship Routes",
        zhTitle: "优质高校与多层次奖学金机会",
        body:
          "Kunming's higher-education ecosystem is broader than many students expect. Yunnan University, Kunming University of Science and Technology, Kunming Medical University, Yunnan Agricultural University, Yunnan University of Finance and Economics, Yunnan Minzu University, Yunnan Normal University, and Yunnan Arts University create choices across humanities, engineering, medicine, agriculture, business, Chinese language, education, and arts.",
        zhBody:
          "昆明的高等教育资源比很多人想象得更丰富。云南大学、昆明理工大学、昆明医科大学、云南农业大学、云南财经大学、云南民族大学、云南师范大学、云南艺术学院等高校，覆盖文、理、工、医、农、商、中文、教育和艺术等方向。",
        bullets: [
          "Yunnan University is a Double First-Class comprehensive university with Chinese Government Scholarship, Yunnan provincial scholarship, and university scholarship channels.",
          "Kunming Medical University offers medical pathways including English-taught clinical medicine references and postgraduate scholarship support.",
          "Yunnan Agricultural University, Yunnan Minzu University, Yunnan Normal University, and other institutions make Kunming attractive for agriculture, ethnic culture, Chinese language, education, business, and Southeast Asia-facing students."
        ],
        zhBullets: [
          "云南大学是“双一流”建设高校，设有中国政府奖学金、云南省政府奖学金及学校国际学生奖学金等资助通道。",
          "昆明医科大学提供临床医学英文授课本科等医学路径，硕博阶段也有免学费、住宿、保险和生活费支持的奖学金参考。",
          "云南农业大学、云南民族大学、云南师范大学等高校，让农业、民族文化、中文教育、商科和面向南亚东南亚发展的学生都有具体选择。"
        ]
      },
      {
        title: "A Lower-Cost Life in a City That Lets Students Breathe",
        zhTitle: "实惠生活成本与可以呼吸的城市节奏",
        body:
          "Kunming is one of China's most emotionally comfortable study cities. It is modern enough for daily convenience, but not so rushed that students feel swallowed by the city. Rent, meals, transport, and everyday services are generally friendlier than in Beijing or Shanghai.",
        zhBody:
          "昆明是中国很容易让留学生感到舒适的城市之一。它足够现代，能满足日常便利；又没有大城市那种把人卷进去的急促感。房租、餐饮、交通和日常服务整体上比北京、上海等城市更亲民。",
        bullets: [
          "Students often report that RMB 2,500-3,500 per month can support a basic but comfortable routine when housing is managed carefully.",
          "Single rooms in many urban areas can be much cheaper than in top-tier cities, while Green Lake-area apartments are higher but still attractive for lifestyle.",
          "Campus meals often sit around RMB 10-20, making daily budgeting easier for students from different economic backgrounds."
        ],
        zhBullets: [
          "许多学生在控制住宿和生活方式后，每月约 2500-3500 元就能维持相对舒适的生活。",
          "主城区不少单间和一房一厅价格明显低于一线城市，翠湖周边房源更贵一些，但生活体验很有吸引力。",
          "学校食堂一顿饭通常约 10-20 元，对来自不同经济背景的学生都比较友好。"
        ]
      },
      {
        title: "Rice Noodles, Barbecue, Flowers, and the Taste of Yunnan",
        zhTitle: "米线、烧烤、鲜花和云南味道",
        body:
          "Kunming food gives students a fast emotional connection to the city. Crossing-the-bridge rice noodles are famous, but daily Kunming is also small-pot rice noodles, tofu rice noodles, cold rice noodles, roasted tofu, Yunnan barbecue, fruit, coffee, and night-market snacks.",
        zhBody:
          "昆明的美食很容易让留学生快速和城市建立情感连接。过桥米线是最有名的名片，但真正日常的昆明还有小锅米线、豆花米线、凉米线、烤豆腐、云南烧烤、热带水果、咖啡和夜市小吃。",
        bullets: [
          "Rice noodles are a practical first Chinese lesson: students learn ingredients, spice levels, local names, and how to order.",
          "Nanqiang pedestrian streets, Daguan night markets, campus neighborhoods, and small restaurants make eating social and affordable.",
          "Dounan Flower Market turns Kunming's climate into daily beauty and a real flower economy that students can visit by transit."
        ],
        zhBullets: [
          "米线可以成为最实际的第一堂中文课：学生会学配料、辣度、本地叫法和点餐方式。",
          "南强步行街、大观夜市、校园周边和小餐馆，让吃饭既有社交感，也不容易超预算。",
          "斗南花市把昆明的气候优势变成日常美好和真实产业，学生可以乘坐公共交通去感受春城的鲜花经济。"
        ]
      },
      {
        title: "Green Lake, Dianchi, Culture Alley, and Low-Cost Weekends",
        zhTitle: "翠湖、滇池、文化巷与低成本周末",
        body:
          "Kunming's travel value is not only in faraway Yunnan trips. The city itself gives students Green Lake, Yunnan University, Yunnan Military Academy, Culture Alley, Dianchi Lake, Dounan Flower Market, botanical routes, parks, cafes, and old streets.",
        zhBody:
          "昆明的旅行价值不只在云南远方路线。城市内部就有翠湖、云南大学、云南陆军讲武堂、文化巷、滇池、斗南花市、植物园路线、公园、咖啡馆和老街，非常适合学生以低成本慢慢探索。",
        bullets: [
          "Green Lake and Yunnan University can become a first-day walking route for almost every new international student.",
          "Dianchi and the lakeside greenway give students sunset, cycling, birds, water, and a wider sense of the plateau city.",
          "Culture Alley is especially useful for international students because cafes, restaurants, bars, languages, and campus life overlap there."
        ],
        zhBullets: [
          "翠湖与云南大学可以成为几乎每个新留学生的第一天步行路线。",
          "滇池与湖滨绿道提供日落、骑行、飞鸟、水面和高原城市更开阔的一面。",
          "文化巷对国际学生尤其友好，因为咖啡馆、餐厅、小酒馆、多种语言和校园生活在这里重叠。"
        ]
      },
      {
        title: "Ethnic Diversity and a Softer Way to Understand China",
        zhTitle: "民族多样性与理解中国的另一种方式",
        body:
          "Kunming is a gateway to Yunnan's ethnic diversity. For international students, this matters because China no longer appears as one single cultural image. Languages, clothes, food, festivals, weaving, music, villages, and borderland memories all become part of the learning experience.",
        zhBody:
          "昆明是进入云南民族多样性的入口。对留学生来说，这很重要，因为中国不再只是单一文化图像。语言、服饰、食物、节庆、纺织、音乐、村寨和边地记忆，都会成为学习中国的一部分。",
        bullets: [
          "Yunnan Nationalities Village and nearby cultural routes introduce many ethnic cultures in a form students can walk through and discuss.",
          "Trips toward Jianshui, Yuanyang terraces, Dali, Lijiang, and Xishuangbanna make Kunming a base for understanding Southwest China.",
          "Students from Southeast Asia and South Asia may find familiar climate, food notes, and borderland connections while still discovering something new."
        ],
        zhBullets: [
          "云南民族村及周边文化路线，让学生能用步行和讨论的方式进入多民族文化现场。",
          "建水、元阳梯田、大理、丽江、西双版纳等路线，让昆明成为理解中国西南的出发地。",
          "来自东南亚和南亚的学生，可能会在气候、食物和边地联系中感到熟悉，同时又不断发现新的中国。"
        ]
      },
      {
        title: "Cultural Activities and Services That Help Students Stay",
        zhTitle: "文化活动与帮助学生留下来的服务温度",
        body:
          "Kunming's universities and city services create many real entry points for international students: summer camps, flower-market Chinese practice, Dragon Boat Festival gatherings, community visits, theatre exchange, calligraphy, tie-dye, ethnic museum visits, and one-stop foreign talent services.",
        zhBody:
          "昆明的高校和城市服务给国际学生提供了很多真实入口：夏令营、斗南花市中文实践、端午雅集、社区参访、戏剧交流、书法、扎染、民族博物馆参观，以及面向外国人才的“一站式”服务。",
        bullets: [
          "University cultural festivals bring students from Laos, Pakistan, Thailand, Vietnam, and other countries into shared food, performance, and language scenes.",
          "Foreign talent and residence-permit service improvements make post-study work and family planning more concrete for qualified students.",
          "Kunming fits students who want China to feel beautiful, affordable, diverse, safe, and emotionally spacious."
        ],
        zhBullets: [
          "高校文化节让来自老挝、巴基斯坦、泰国、越南等国家的学生在美食、表演和语言场景里真正互动。",
          "外国人才和居留许可服务的优化，让符合条件的学生能更具体地考虑毕业后的工作、居住和家庭安排。",
          "昆明适合希望中国留学是美丽、实惠、多元、安全，并且在情感上有空间感的学生。"
        ]
      }
    ]
  }),
  suzhou: cityBatchDeepDive({
    slug: "suzhou",
    title: "Why Suzhou Works for Global Students Who Want Jiangnan Beauty and Modern Opportunity",
    zhTitle: "为什么苏州适合想要江南美感与现代机会的国际学生",
    intro:
      "Suzhou is attractive because it is graceful without being sleepy. Classical gardens, canals, museums, high-speed rail, Suzhou Industrial Park, Jinji Lake, XJTLU-style international education, student food streets, and gentle nightlife all sit close together.",
    zhIntro:
      "苏州的吸引力在于它优雅但并不沉睡。园林、运河、博物馆、高铁、苏州工业园区、金鸡湖、国际化教育资源、学生美食街和温柔夜生活，彼此距离都不远。",
    proofPoints: [
      "Suzhou offers strong university choices and is closely connected to Shanghai, Hangzhou, Nanjing, and the Yangtze River Delta job market.",
      "Daily costs can be easier to manage than Shanghai while still offering refined urban life.",
      "The city gives students both classical Chinese culture and modern lakefront nightlife."
    ],
    zhProofPoints: [
      "苏州有较强高校选择，并紧密连接上海、杭州、南京和长三角就业市场。",
      "日常成本通常比上海更容易控制，但仍能享受精致城市生活。",
      "这座城市同时给学生古典中国文化和现代湖畔夜生活。"
    ],
    sections: [
      {
        title: "Universities and a Yangtze River Delta Base",
        zhTitle: "高校资源与长三角基地",
        body:
          "Suzhou is suitable for students who want a calmer city while staying close to China's most dynamic economic region. Soochow University, Xi'an Jiaotong-Liverpool University, and applied universities give options across Chinese language, engineering, business, design, science, and international programs.",
        zhBody:
          "苏州适合那些希望城市更安静、但仍然靠近中国最活跃经济区域的学生。苏州大学、西交利物浦大学以及应用型高校，为中文、工程、商科、设计、理科和国际化项目提供了选择。",
        bullets: [
          "High-speed rail makes Shanghai and Hangzhou practical weekend or career-exposure routes.",
          "Suzhou Industrial Park gives the city a modern business and technology context.",
          "The city is especially friendly to students who want study, beauty, safety, and regional mobility in one place."
        ],
        zhBullets: [
          "高铁让上海和杭州成为现实的周末与职业探索路线。",
          "苏州工业园区给这座城市带来现代商务和科技语境。",
          "这座城市尤其适合同时重视学习、美感、安全和区域流动性的学生。"
        ]
      },
      {
        title: "Gardens, Canals, and a Daily Route Into Chinese Aesthetics",
        zhTitle: "园林、运河和进入中国审美的日常路线",
        body:
          "Suzhou makes Chinese aesthetics walkable. Students can enter gardens, sit by canals, listen to Pingtan, visit Suzhou Museum, and understand that Chinese culture is not only ancient text but also space, water, shadow, and restraint.",
        zhBody:
          "苏州让中国审美变得可以步行进入。学生可以走进园林，坐在河边，听评弹，参观苏州博物馆，理解中国文化不只是古书里的文字，也是空间、水、光影和克制。",
        bullets: [
          "Pingjiang Road and Shantang Street are good language-practice and photography routes.",
          "Classical gardens help design, architecture, art, and culture students understand Jiangnan taste.",
          "Museums, bookstores, cafes, and old lanes give students a low-pressure way to spend weekends."
        ],
        zhBullets: [
          "平江路和山塘街很适合练中文、拍照和熟悉城市。",
          "古典园林能帮助设计、建筑、艺术和文化方向学生理解江南趣味。",
          "博物馆、书店、咖啡馆和古巷，让学生可以低压力地度过周末。"
        ]
      },
      {
        title: "Gentle Nightlife: Lake Bars, Folk Music, and Summer Markets",
        zhTitle: "温柔夜生活：湖景酒吧、民谣和夏夜市集",
        body:
          "Suzhou's nightlife is not only clubs. The user's notes show a city of folk taverns on Shantang Street, Jinji Lake music restaurants, immersive performance spaces, markets on Shiquan Street, and citywide summer events.",
        zhBody:
          "苏州的夜生活不只是夜店。你给的素材里有山塘街民谣小酒馆、金鸡湖音乐餐厅、沉浸式演艺空间、十全街市集和全城夏季活动。",
        bullets: [
          "This rhythm is good for students who like conversation, music, and atmosphere.",
          "Food and markets make social life easier for newcomers.",
          "Suzhou is a strong fit for students who want China to feel elegant, modern, and not overwhelming."
        ],
        zhBullets: [
          "这种节奏适合喜欢聊天、音乐和氛围的学生。",
          "美食和市集能帮助新生更容易进入社交生活。",
          "苏州适合希望中国显得优雅、现代、但不过度压迫的人。"
        ]
      }
    ]
  }),
  fuzhou: cityBatchDeepDive({
    slug: "fuzhou",
    title: "Why Fuzhou Is a Warm Coastal Study City With Fujian Flavor",
    zhTitle: "为什么福州是一座有闽味、有温度的滨海留学城市",
    intro:
      "Fuzhou attracts students through warmth: warm climate, warm food, warm old lanes, riverfront nights, university-town life, and a coastal openness that connects Fujian culture with Southeast Asia.",
    zhIntro:
      "福州吸引学生的地方在于温度：温暖气候、温暖食物、温暖老巷、江边夜色、大学城生活，以及把福建文化和东南亚联系起来的滨海开放性。",
    proofPoints: [
      "Fuzhou has major provincial universities across engineering, education, medicine, agriculture, language, and applied fields.",
      "Food and daily living are generally more student-friendly than China's most expensive megacities.",
      "Historic lanes, riverside routes, and university-town events give students many low-cost ways to enter local life."
    ],
    zhProofPoints: [
      "福州拥有工程、教育、医学、农业、语言和应用学科方向的省会高校资源。",
      "饮食和日常生活整体比中国最贵的一线城市更适合学生预算。",
      "历史街巷、江边路线和大学城活动，让学生有很多低成本进入本地生活的方式。"
    ],
    sections: [
      {
        title: "A Provincial Capital With Practical University Choices",
        zhTitle: "一座高校选择务实的省会城市",
        body:
          "Fuzhou's university map is practical for students who want Fujian, coastal China, and Southeast Asia-facing opportunities. Fuzhou University, Fujian Normal University, Fujian Agriculture and Forestry University, Fujian Medical University, and other institutions cover many applied paths.",
        zhBody:
          "福州的高校地图很务实，适合希望进入福建、沿海中国以及面向东南亚机会的学生。福州大学、福建师范大学、福建农林大学、福建医科大学等高校覆盖了许多应用型方向。",
        bullets: [
          "Engineering, education, medicine, agriculture, language, and business all have visible local context.",
          "University-town neighborhoods give students food, transport, and peer communities.",
          "Fuzhou is especially relevant for students who want a coastal city with lower pressure than Shanghai or Shenzhen."
        ],
        zhBullets: [
          "工程、教育、医学、农业、语言和商科都能找到明确的本地语境。",
          "大学城周边能提供食物、交通和同龄人社区。",
          "福州尤其适合想要沿海城市，但不想承受上海或深圳压力的学生。"
        ]
      },
      {
        title: "Fish Balls, Rouyan, Guobianhu, and Food Streets",
        zhTitle: "鱼丸、肉燕、锅边糊和美食街",
        body:
          "Fuzhou food is gentle but memorable. Fish balls, rouyan, guobianhu, peanut soup, taro paste, oyster cakes, Daming food street, Xiangban night market, and campus snacks help students enter the city through taste.",
        zhBody:
          "福州食物温和但有记忆点。鱼丸、肉燕、锅边糊、花生汤、芋泥、海蛎饼、达明美食街、祥坂夜市和校园小吃，能让学生用味觉进入城市。",
        bullets: [
          "Food is an easy first Chinese-practice route because prices, ingredients, and local names can become daily conversation.",
          "Daming food street connects Fujian, Taiwan, and Southeast Asian food memories.",
          "University-town waterfront markets make student nights social without needing a big budget."
        ],
        zhBullets: [
          "食物很适合作为中文实践入口，因为价格、配料和本地叫法都能变成日常对话。",
          "达明美食街连接了福建、台湾和东南亚的饮食记忆。",
          "大学城水岸市集能让学生不用大预算也拥有社交夜晚。"
        ]
      },
      {
        title: "Sanfang Qixiang, Yantai Mountain, Min River, and Night Culture",
        zhTitle: "三坊七巷、烟台山、闽江和夜间文化",
        body:
          "Fuzhou has a soft cultural depth. Students can walk Sanfang Qixiang, explore Yantai Mountain, take Min River night routes, visit Guling, and then choose hip-hop bars, sake bars, music restaurants, or food streets after dark.",
        zhBody:
          "福州有柔和的文化深度。学生可以走三坊七巷，探索烟台山，夜游闽江，去鼓岭，再在夜晚选择 hip-hop 小厅、清酒吧、音乐餐吧或美食街。",
        bullets: [
          "The city works well for students who want old streets and coastal modernity together.",
          "Nightlife is diverse enough for different personalities: music, food, quiet bars, and markets.",
          "Fuzhou can feel especially welcoming to students from Southeast Asia because of climate, food, and regional ties."
        ],
        zhBullets: [
          "这座城市适合希望老街和沿海现代性同时存在的学生。",
          "夜生活足够多样：音乐、美食、安静酒吧和市集都能对应不同性格。",
          "因为气候、食物和区域联系，福州会让东南亚学生更容易感到亲近。"
        ]
      }
    ]
  }),
  tianjin: cityBatchDeepDive({
    slug: "tianjin",
    title: "Why Tianjin Gives Students North China Access With Lower Pressure",
    zhTitle: "为什么天津能用较低压力连接华北留学机会",
    intro:
      "Tianjin is close to Beijing but has its own personality: Haihe lights, Wudadao architecture, Nankai and Tianjin University traditions, funny street culture, lower costs, and a food scene built for students.",
    zhIntro:
      "天津靠近北京，但有自己的性格：海河灯火、五大道建筑、南开与天大传统、幽默街头文化、相对较低成本，以及非常适合学生的美食现场。",
    proofPoints: [
      "Tianjin connects students to Beijing and North China while keeping living costs more manageable.",
      "The city has strong universities across engineering, medicine, language, business, and applied fields.",
      "Riverfront routes, old neighborhoods, university-town night markets, and courtyard bars make daily life warm."
    ],
    zhProofPoints: [
      "天津能把学生连接到北京和华北机会，同时生活成本更容易控制。",
      "这座城市在工程、医学、语言、商科和应用学科上都有高校资源。",
      "河岸路线、老街区、大学城夜市和四合院酒吧，让日常生活更有温度。"
    ],
    sections: [
      {
        title: "Strong Universities Beside Beijing",
        zhTitle: "北京旁边的强高校城市",
        body:
          "Tianjin University, Nankai University, Tianjin Foreign Studies University, Tianjin Medical University, Tianjin University of Science and Technology, and other institutions make Tianjin a serious study choice rather than only a weekend trip from Beijing.",
        zhBody:
          "天津大学、南开大学、天津外国语大学、天津医科大学、天津科技大学等高校，让天津不是北京周边的周末目的地，而是一个可以认真选择的留学城市。",
        bullets: [
          "Engineering, chemistry, architecture, medicine, language, and business are visible strengths.",
          "High-speed rail makes Beijing reachable while students live in a calmer city.",
          "Families often appreciate the balance of opportunity, transport, and relative affordability."
        ],
        zhBullets: [
          "工程、化学、建筑、医学、语言和商科都有明显优势。",
          "高铁让北京触手可及，而学生仍能住在更松弛的城市里。",
          "这种机会、交通和相对实惠之间的平衡，对家庭也有吸引力。"
        ]
      },
      {
        title: "Haihe, Wudadao, and a Walkable City Memory",
        zhTitle: "海河、五大道与可步行的城市记忆",
        body:
          "Tianjin is easy to love on foot. Haihe night routes, Wudadao, the Italian Style Area, Jinwan Square, and the Tianjin Eye make the city visual, romantic, and easy to explain to friends back home.",
        zhBody:
          "天津是一座适合步行喜欢上的城市。海河夜线、五大道、意式风情区、津湾广场和天津之眼，让这座城市很有画面感、很浪漫，也容易讲给家乡朋友听。",
        bullets: [
          "Many city experiences are free or low-cost.",
          "Architecture routes are useful for design, history, and photography students.",
          "The river gives students a daily place to walk, talk, and reset."
        ],
        zhBullets: [
          "许多城市体验都是免费或低成本的。",
          "建筑路线适合设计、历史和摄影方向学生。",
          "海河给学生一个日常散步、聊天和恢复状态的地方。"
        ]
      },
      {
        title: "Jianbing, Night Markets, River Bars, and Local Humor",
        zhTitle: "煎饼、夜市、河边酒吧和天津幽默",
        body:
          "Tianjin's food and nightlife are friendly to students: jianbing guozi, local snacks, Yao Village night market, Binjiang Road, Wandezhuang food street, river-deck bars, courtyard music, retro bars, and hip-hop spaces.",
        zhBody:
          "天津的食物和夜生活很适合学生：煎饼果子、本地小吃、姚村夜市、滨江道、万德庄美食街、海河露台酒吧、四合院民谣、复古酒吧和 hip-hop 空间。",
        bullets: [
          "The city is good for students who want North China access but prefer a warmer social texture.",
          "Nightlife can be lively without being as expensive as Beijing.",
          "Tianjin's humor helps students feel that language learning can be playful, not only academic."
        ],
        zhBullets: [
          "这座城市适合想连接华北机会、但也希望社交氛围更温暖的学生。",
          "夜生活可以热闹，但不一定像北京那样昂贵。",
          "天津的幽默感会让学生觉得学中文也可以很好玩，而不只是课堂任务。"
        ]
      }
    ]
  }),
  harbin: cityBatchDeepDive({
    slug: "harbin",
    title: "Why Harbin Is a Memorable Northern China Study City",
    zhTitle: "为什么哈尔滨是一座很有记忆点的中国北方留学城市",
    intro:
      "Harbin is ideal for students who want China to feel different: cold winters, cool summers, Russian-style streets, engineering universities, ice culture, generous food, and a strong northern identity.",
    zhIntro:
      "哈尔滨适合那些希望看到不一样中国的学生：寒冷冬季、凉爽夏天、俄式街区、工程强校、冰雪文化、分量十足的食物，以及非常鲜明的北方身份。",
    proofPoints: [
      "Harbin is strong for engineering, aerospace, marine, medicine, language, forestry, and applied science fields.",
      "Living costs are usually lower than major coastal cities.",
      "Central Street, Saint Sophia, Songhua River, ice festivals, and summer night markets create a city identity students remember."
    ],
    zhProofPoints: [
      "哈尔滨在工程、航天、船舶、医学、语言、林业和应用理科方向都很有辨识度。",
      "生活成本通常低于主要沿海大城市。",
      "中央大街、圣索菲亚、松花江、冰雪节和夏夜市集，共同创造了很难忘的城市身份。"
    ],
    sections: [
      {
        title: "Engineering, Aerospace, Medicine, and Northern Research",
        zhTitle: "工程、航天、医学和北方科研",
        body:
          "Harbin Institute of Technology, Harbin Engineering University, Harbin Medical University, Heilongjiang University, Northeast Forestry University, and other institutions make the city serious for students who want research strength with lower living pressure.",
        zhBody:
          "哈尔滨工业大学、哈尔滨工程大学、哈尔滨医科大学、黑龙江大学、东北林业大学等高校，让这座城市适合想要科研实力、但又希望生活压力较低的学生。",
        bullets: [
          "Engineering and aerospace are major signals for the city.",
          "Medicine, language, forestry, and Russian-related regional studies add variety.",
          "The city is especially relevant for students from colder regions or Russian-speaking backgrounds."
        ],
        zhBullets: [
          "工程和航天是这座城市最强的信号之一。",
          "医学、语言、林业和俄语区域研究也提供了更多选择。",
          "来自寒冷地区或俄语背景的学生，可能会更容易适应哈尔滨。"
        ]
      },
      {
        title: "A City That Turns Climate Into Culture",
        zhTitle: "把气候变成文化的城市",
        body:
          "Harbin does not hide winter; it turns winter into identity. Ice and Snow World, Central Street, Saint Sophia, Songhua River, hot food, and indoor music scenes make the season part of the study experience.",
        zhBody:
          "哈尔滨不回避冬天，而是把冬天变成身份。冰雪大世界、中央大街、圣索菲亚、松花江、热乎食物和室内音乐现场，让季节成为留学体验的一部分。",
        bullets: [
          "Winter gives students one of China's most distinctive travel memories.",
          "Summer is cool and lively, with night markets, river walks, beer, and outdoor events.",
          "Food such as guobaorou, red sausage, and Madier ice cream helps students remember the city by taste."
        ],
        zhBullets: [
          "冬天会给学生最有辨识度的中国旅行记忆之一。",
          "夏天则凉爽热闹，有夜市、江边散步、啤酒和户外活动。",
          "锅包肉、红肠和马迭尔冰棍，会让学生用味觉记住这座城市。"
        ]
      },
      {
        title: "Central Street, Music Bars, and Night Markets",
        zhTitle: "中央大街、音乐酒馆和夜市",
        body:
          "The user's notes show Harbin after dark as more than ice tourism: Central Street bars, Commune, TIMES LiveHouse, high-rise music bars, Normal University night market, Anjing Street, and Songhua River weekend markets.",
        zhBody:
          "你给的素材里，夜晚的哈尔滨不只是冰雪旅游：中央大街酒吧、Commune、TIMES LiveHouse、高空音乐酒吧、师大夜市、安静街和松花江周末市集，都让城市在夜晚继续有生活。",
        bullets: [
          "Harbin is a good fit for students who like music, winter culture, and strong city personality.",
          "Lower costs can make student social life more accessible.",
          "The city is not soft in climate, but it is generous in memory."
        ],
        zhBullets: [
          "哈尔滨适合喜欢音乐、冬季文化和强烈城市性格的学生。",
          "较低生活成本会让学生社交生活更容易开始。",
          "这座城市在气候上并不柔软，但在记忆上非常慷慨。"
        ]
      }
    ]
  }),
  guilin: cityBatchDeepDive({
    slug: "guilin",
    title: "Why Guilin Is a Low-Pressure Landscape City for International Students",
    zhTitle: "为什么桂林是一座低压力的山水留学城市",
    intro:
      "Guilin is powerful because it gives students beauty without needing luxury: karst mountains, Li River routes, rice noodles, Yangshuo, affordable daily life, and a slower rhythm that helps students stay curious.",
    zhIntro:
      "桂林的力量在于它用不奢侈的方式给学生美：喀斯特山水、漓江路线、桂林米粉、阳朔、相对实惠的日常生活，以及让人保持好奇的慢节奏。",
    proofPoints: [
      "Guilin has university options across education, electronic information, engineering, tourism, language, and applied fields.",
      "Living costs and local food can be friendly to students.",
      "The city gives students immediate access to one of China's most famous natural landscapes."
    ],
    zhProofPoints: [
      "桂林在教育、电子信息、工程、旅游、语言和应用学科方向有高校选择。",
      "生活成本和本地饮食对学生较友好。",
      "这座城市让学生很快接触到中国最著名的自然山水之一。"
    ],
    sections: [
      {
        title: "Study in a City That Breathes",
        zhTitle: "在一座会呼吸的城市里学习",
        body:
          "Guangxi Normal University, Guilin University of Electronic Technology, Guilin University of Technology, and other institutions give Guilin a practical academic base while the city itself remains relaxed, scenic, and less expensive than major megacities.",
        zhBody:
          "广西师范大学、桂林电子科技大学、桂林理工大学等高校，为桂林提供了务实的学术基础，而城市本身仍然松弛、山水感强，生活成本低于许多超大城市。",
        bullets: [
          "Electronic information, engineering, tourism, education, Chinese language, and culture studies all have local relevance.",
          "The city is suitable for students who prefer nature and slower daily rhythm.",
          "Guilin can be a gentle first China experience for students who feel overwhelmed by megacities."
        ],
        zhBullets: [
          "电子信息、工程、旅游、教育、中文和文化研究都能找到本地语境。",
          "这座城市适合偏爱自然和慢日常节奏的学生。",
          "对容易被超大城市压倒的学生来说，桂林可以成为温柔的中国第一站。"
        ]
      },
      {
        title: "Li River, Yangshuo, West Street, and Weekend Freedom",
        zhTitle: "漓江、阳朔、西街和周末自由",
        body:
          "Guilin's travel value is built into daily life. Students can go from class to riverside walks, from city food streets to Yangshuo, from quiet mountains to West Street's multilingual nightlife.",
        zhBody:
          "桂林的旅行价值就嵌在日常生活里。学生可以从课堂走到江边，从城市美食街去阳朔，从安静山水走到西街多语言夜生活。",
        bullets: [
          "Li River and Xingping are useful for photography, language exchange, and nature study.",
          "West Street has long made Guilin feel international and friendly to foreigners.",
          "Many scenic routes are manageable for student budgets with careful planning."
        ],
        zhBullets: [
          "漓江和兴坪适合摄影、语言交换和自然观察。",
          "西街长期让桂林显得国际化，也对外国人更友好。",
          "许多山水路线只要认真规划，就能适合学生预算。"
        ]
      },
      {
        title: "Rice Noodles, Beer Fish, and Night Food Streets",
        zhTitle: "米粉、啤酒鱼和夜间美食街",
        body:
          "Guilin's food scene is simple, affordable, and memorable. Rice noodles can become a daily ritual, while beer fish, snails, Zhengyang Street, Dongxi Lane, Wayao night market, and West Street give students easy social routes.",
        zhBody:
          "桂林的食物简单、实惠、有记忆点。米粉会成为日常仪式，而啤酒鱼、田螺、正阳街、东西巷、瓦窑夜市和西街，则给学生提供轻松的社交路线。",
        bullets: [
          "Food is a low-cost way to build friendships in the first semester.",
          "The city is strong for tourism, ecology, cultural exchange, and Chinese-language immersion.",
          "Guilin sells not pressure, but the possibility of living beautifully with less."
        ],
        zhBullets: [
          "食物是第一学期低成本建立友情的方式。",
          "这座城市适合旅游、生态、文化交流和中文沉浸方向。",
          "桂林卖的不是压力，而是用更少成本把生活过得很美的可能性。"
        ]
      }
    ]
  }),
  shenzhen: cityBatchDeepDive({
    slug: "shenzhen",
    title: "Why Shenzhen Is a High-Speed Study City for Ambitious Global Students",
    zhTitle: "为什么深圳适合有野心的全球学生",
    intro:
      "Shenzhen is not the cheapest city, but it is one of China's clearest opportunity cities: tech companies, startups, finance, hardware, design, maker culture, coastal parks, global food, and a young population that moves fast.",
    zhIntro:
      "深圳不是最便宜的城市，但它是中国机会感最清晰的城市之一：科技公司、创业、金融、硬件、设计、创客文化、滨海公园、全球美食，以及快速移动的年轻人口。",
    proofPoints: [
      "Shenzhen is strong for technology, engineering, business, design, finance, hardware, AI, and Greater Bay Area careers.",
      "Living costs are higher, but free parks, public transport, and student budgeting can make daily life more manageable.",
      "The city is especially appealing to students who want China as future-facing, global, and entrepreneurial."
    ],
    zhProofPoints: [
      "深圳在科技、工程、商科、设计、金融、硬件、AI 和大湾区职业机会方面很强。",
      "生活成本较高，但免费公园、公共交通和学生预算规划能帮助日常生活更可控。",
      "这座城市尤其吸引那些希望看到面向未来、全球化、创业型中国的学生。"
    ],
    sections: [
      {
        title: "Universities Inside an Innovation Ecosystem",
        zhTitle: "创新生态里的大学",
        body:
          "Shenzhen University, Southern University of Science and Technology, Shenzhen Technology University, The Chinese University of Hong Kong, Shenzhen, and other institutions place students inside the Greater Bay Area's technology and business ecosystem.",
        zhBody:
          "深圳大学、南方科技大学、深圳技术大学、香港中文大学（深圳）等高校，把学生放进大湾区科技与商业生态之中。",
        bullets: [
          "Engineering, computing, business, design, finance, life sciences, and innovation programs all match the city.",
          "Internship and project exposure can be stronger than in many quieter cities.",
          "Students should plan budgets carefully because rent and services can be expensive."
        ],
        zhBullets: [
          "工程、计算机、商科、设计、金融、生命科学和创新项目都与城市匹配。",
          "实习和项目曝光可能强于许多更安静的城市。",
          "学生需要认真规划预算，因为租房和服务价格可能较高。"
        ]
      },
      {
        title: "Bay Parks, Maker Spaces, and a City That Looks Forward",
        zhTitle: "湾区公园、创客空间和向前看的城市",
        body:
          "Shenzhen's advantage is that ambition is visible. Ping An Finance Center, Shenzhen Bay Park, Talent Park, OCT Loft, Nantou Ancient City renewal, hardware markets, and design districts all show different layers of the same city.",
        zhBody:
          "深圳的优势在于野心是可见的。平安金融中心、深圳湾公园、人才公园、华侨城创意园、南头古城更新、硬件市场和设计街区，展示的是同一座城市的不同层次。",
        bullets: [
          "Free coastal parks help balance the pressure of a high-cost city.",
          "Maker culture is useful for students who learn by building things.",
          "The city is highly relevant for students interested in China's next industries."
        ],
        zhBullets: [
          "免费滨海公园能平衡高成本城市带来的压力。",
          "创客文化适合那些通过动手做东西来学习的学生。",
          "这座城市非常适合关注中国下一阶段产业的学生。"
        ]
      },
      {
        title: "Cyberpunk Nights, Night Markets, and Food From Everywhere",
        zhTitle: "赛博夜色、夜市和来自全国的食物",
        body:
          "The user's notes capture Shenzhen's nights well: high-rise bars, hotel terraces, vintage lounges, Xixiang Yantian night market, Fanshen night market, Yantian port views, Shuiwei 1368, Qianhai HOP, and food streets born from migration.",
        zhBody:
          "你给的素材很好地抓住了深圳的夜晚：高空酒吧、酒店露台、复古清吧、西乡盐田夜市、翻身夜市、盐田港晚霞、水围 1368、前海 HOP，以及因移民城市而形成的全国美食街。",
        bullets: [
          "Shenzhen suits energetic students who want opportunity density.",
          "The city can feel expensive, but it also gives many free public spaces and fast-growth networks.",
          "For global youth, Shenzhen is a clear way to see China's high-speed development dividend."
        ],
        zhBullets: [
          "深圳适合精力充沛、希望机会密度很高的学生。",
          "城市会显得昂贵，但也提供许多免费公共空间和快速成长网络。",
          "对全球年轻人来说，深圳是理解中国高速发展红利的清晰入口。"
        ]
      }
    ]
  }),
  taiyuan: cityBatchDeepDive({
    slug: "taiyuan",
    title: "Why Taiyuan Is an Affordable Northern City With Deep Jin Culture",
    zhTitle: "为什么太原是一座实惠而有晋文化深度的北方留学城市",
    intro:
      "Taiyuan is not trying to be a coastal megacity. Its value is different: lower costs, engineering universities, Shanxi history, Fen River walks, museums, noodles, old streets, and a nightlife slowly becoming younger.",
    zhIntro:
      "太原并不试图成为沿海超大城市。它的价值在别处：较低成本、工程高校、山西历史、汾河散步、博物馆、面食、老街，以及正在变年轻的夜生活。",
    proofPoints: [
      "Taiyuan offers practical university options in engineering, medicine, finance, science, and applied disciplines.",
      "Living costs are generally more student-friendly than first-tier cities.",
      "Jin culture, Fen River, Shanxi Museum, Jinci, Bell Tower Street, and Food Street give students a grounded city life."
    ],
    zhProofPoints: [
      "太原在工程、医学、财经、理科和应用学科方面有务实高校选择。",
      "生活成本整体比一线城市更适合学生。",
      "晋文化、汾河、山西博物院、晋祠、钟楼街和食品街，让学生拥有扎实的城市生活。"
    ],
    sections: [
      {
        title: "A Lower-Cost Study Base in North China",
        zhTitle: "华北较低成本留学基地",
        body:
          "Taiyuan University of Technology, Shanxi University, Shanxi Medical University, Shanxi University of Finance and Economics, and other institutions make the city practical for students who want affordability and academic choices.",
        zhBody:
          "太原理工大学、山西大学、山西医科大学、山西财经大学等高校，让太原成为一个兼具实惠生活和学科选择的务实留学城市。",
        bullets: [
          "Engineering, medicine, finance, science, and Chinese language all have clear pathways.",
          "Daily food and transport can be easier to manage than in coastal megacities.",
          "The city fits students who prefer steady life over constant stimulation."
        ],
        zhBullets: [
          "工程、医学、财经、理科和中文方向都有较清晰路径。",
          "日常餐饮和交通成本比沿海超大城市更容易控制。",
          "这座城市适合偏好稳定生活，而不是持续刺激的学生。"
        ]
      },
      {
        title: "Shanxi Museum, Jinci, and a Serious Historical Texture",
        zhTitle: "山西博物院、晋祠和厚重历史质感",
        body:
          "Taiyuan helps students read a deeper China. Shanxi Museum, Jinci Temple, merchant culture, old city streets, and nearby ancient architecture routes make history feel close rather than abstract.",
        zhBody:
          "太原能帮助学生读到更深层的中国。山西博物院、晋祠、晋商文化、老城街道和周边古建筑路线，让历史不再抽象，而是变得很近。",
        bullets: [
          "Strong for students interested in Chinese civilization, architecture, heritage, archaeology, and regional economy.",
          "Weekend routes can extend to Shanxi's famous ancient buildings and old towns.",
          "The city gives cultural depth without the price level of larger tourist cities."
        ],
        zhBullets: [
          "适合关注中国文明、建筑、遗产、考古和区域经济的学生。",
          "周末路线可以延伸到山西著名古建和古城。",
          "这座城市能提供文化深度，但成本不必达到热门旅游大城水平。"
        ]
      },
      {
        title: "Noodles, Fenjiu Bars, Bell Tower Street, and Liuxiang",
        zhTitle: "面食、汾酒小馆、钟楼街和柳巷",
        body:
          "Taiyuan's student life is built from solid food and renewed old streets: knife-cut noodles, tounao, Food Street, Liuxiang, Bell Tower Street, Fenjiu-themed bars, folk music, live houses, and Yijing snacks.",
        zhBody:
          "太原的学生生活由扎实食物和更新后的老街组成：刀削面、头脑、食品街、柳巷、钟楼街、汾酒主题小馆、民谣、Livehouse 和义井小吃。",
        bullets: [
          "Food gives international students an easy route into local conversation.",
          "Bell Tower Street shows Taiyuan's younger side.",
          "Taiyuan is a good fit for students who want China to feel grounded, affordable, and culturally thick."
        ],
        zhBullets: [
          "食物能让国际学生轻松进入本地对话。",
          "钟楼街展示了太原更年轻的一面。",
          "太原适合希望中国显得扎实、实惠、有文化厚度的学生。"
        ]
      }
    ]
  }),
  zhengzhou: cityBatchDeepDive({
    slug: "zhengzhou",
    title: "Why Zhengzhou Is a Practical Central China Gateway for International Students",
    zhTitle: "为什么郑州是务实的中部中国留学入口",
    intro:
      "Zhengzhou is attractive because it is practical: big universities, transport connections, lower daily costs, Henan food, Central Plains history, CBD nights, and access to the Yellow River, Luoyang, Kaifeng, and many cultural routes.",
    zhIntro:
      "郑州的吸引力在于务实：大型高校、交通连接、较低日常成本、河南美食、中原历史、CBD夜色，以及通往黄河、洛阳、开封等文化路线的入口。",
    proofPoints: [
      "Zhengzhou is a major transport hub and connects students to central China quickly.",
      "The city offers university choices across comprehensive, engineering, agriculture, medicine, business, and applied fields.",
      "Food, museums, night markets, and regional travel routes are affordable and culturally dense."
    ],
    zhProofPoints: [
      "郑州是重要交通枢纽，能让学生快速连接中部中国。",
      "这座城市在综合、工程、农业、医学、商科和应用学科上有高校选择。",
      "美食、博物馆、夜市和区域旅行路线成本较低、文化密度高。"
    ],
    sections: [
      {
        title: "Universities and Transport Hub Advantage",
        zhTitle: "高校资源与交通枢纽优势",
        body:
          "Zhengzhou University, Henan Agricultural University, Henan University of Economics and Law, and other institutions make Zhengzhou a practical base for students who want central China access and manageable costs.",
        zhBody:
          "郑州大学、河南农业大学、河南财经政法大学等高校，让郑州成为希望进入中部中国、同时控制生活成本学生的务实基地。",
        bullets: [
          "High-speed rail makes regional travel and internships easier to plan.",
          "The city is relevant for logistics, agriculture, engineering, business, medicine, and regional development.",
          "Students can compare Zhengzhou with Wuhan, Xi'an, and Changsha as central China options."
        ],
        zhBullets: [
          "高铁让区域旅行和实习探索更容易规划。",
          "这座城市适合物流、农业、工程、商科、医学和区域发展方向。",
          "学生可以把郑州与武汉、西安、长沙一起作为中部中国选项来比较。"
        ]
      },
      {
        title: "Henan Museum, Yellow River, and Central Plains Memory",
        zhTitle: "河南博物院、黄河和中原记忆",
        body:
          "Zhengzhou helps students understand China through the Central Plains. Henan Museum, Yellow River routes, nearby Luoyang and Kaifeng, ancient capitals, and archaeological stories make the city much deeper than its railway-hub image.",
        zhBody:
          "郑州能帮助学生通过中原理解中国。河南博物院、黄河路线、周边洛阳和开封、古都与考古故事，让这座城市远比“铁路枢纽”的印象更深。",
        bullets: [
          "History and archaeology students can find strong cultural context.",
          "Yellow River routes make geography and civilization feel connected.",
          "Nearby ancient cities give students rich weekend learning routes."
        ],
        zhBullets: [
          "历史和考古方向学生能找到很强的文化语境。",
          "黄河路线会让地理与文明变得有连接感。",
          "周边古都给学生提供了丰富的周末学习路线。"
        ]
      },
      {
        title: "Hu La Tang, Night Markets, CBD Bars, and Growing Youth Culture",
        zhTitle: "胡辣汤、夜市、CBD酒吧和正在生长的年轻文化",
        body:
          "Zhengzhou's daily charm is in food and night routes: hu la tang, hui mian, Health Road night market, Dehua Street, Taiheli food street, Financial Island, Nongke Road bars, CBD live music, and Erqi-area city walks.",
        zhBody:
          "郑州的日常魅力在食物和夜间路线里：胡辣汤、烩面、健康路夜市、德化街、泰和里好吃街、金融岛、农科路酒吧、CBD驻唱和二七区 citywalk。",
        bullets: [
          "Food is affordable and good for first-semester friendships.",
          "Night routes are becoming more diverse, from street food to skyline bars.",
          "Zhengzhou fits students who want a real, growing, central-China city rather than a polished postcard."
        ],
        zhBullets: [
          "食物实惠，很适合第一学期建立朋友关系。",
          "夜间路线越来越多样，从街头小吃到天际线酒吧都有。",
          "郑州适合想要真实、成长中、中部中国城市，而不是精修明信片的学生。"
        ]
      }
    ]
  })
};

export function getCityDeepDive(slug: string) {
  return cityDeepDives[slug];
}
