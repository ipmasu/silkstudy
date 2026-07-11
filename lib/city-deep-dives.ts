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
  })
};

export function getCityDeepDive(slug: string) {
  return cityDeepDives[slug];
}
