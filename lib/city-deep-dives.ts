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

export const cityDeepDives: Record<string, CityDeepDive> = {
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
  })
};

export function getCityDeepDive(slug: string) {
  return cityDeepDives[slug];
}
