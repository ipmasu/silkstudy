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
  })
};

export function getCityDeepDive(slug: string) {
  return cityDeepDives[slug];
}
