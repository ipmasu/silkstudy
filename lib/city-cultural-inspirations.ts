export type CityCulturalInspiration = {
  slug: string;
  title: string;
  zhTitle: string;
  intro: string;
  zhIntro: string;
  sourceNote: string;
  zhSourceNote: string;
  items: {
    name: string;
    zhName: string;
    category: string;
    zhCategory: string;
    district: string;
    zhDistrict: string;
    image: string;
    sourceUrl: string;
    story: string;
    zhStory: string;
    studentAngle: string;
    zhStudentAngle: string;
  }[];
};

const inspiration = (input: CityCulturalInspiration) => input;

export const cityCulturalInspirations: Record<string, CityCulturalInspiration> = {
  changsha: inspiration({
    slug: "changsha",
    title: "Changsha Through Living Local Culture",
    zhTitle: "从风物里看见长沙",
    intro:
      "Changsha is not only a famous food city. Its charm is also hidden in old landmarks, neighborhood streets, green parks, and the way young people turn ordinary evenings into city memories.",
    zhIntro:
      "长沙不只是一个以美食出圈的城市。它真正迷人的地方，也藏在老地标、街区建筑、公园散步和年轻人把普通夜晚过成城市记忆的方式里。",
    sourceNote:
      "Topic cues are organized from the public Huaxia Fengwu index and rewritten in SilkStudy's own youth-friendly voice.",
    zhSourceNote:
      "选题线索整理自华夏风物公开索引，文字由 SilkStudy 面向全球年轻人重新撰写。",
    items: [
      {
        name: "Changsha Zhongshan Pavilion",
        zhName: "长沙中山亭",
        category: "Old-city landmark",
        zhCategory: "老城地标",
        district: "Furong District",
        zhDistrict: "芙蓉区",
        image: "https://image.huaxiafengwu.com/submission/145565/banner/1711005554791",
        sourceUrl: "https://image.huaxiafengwu.com/app/wiki/3/143058/wiki-detail.html?t=1711359324953",
        story:
          "Zhongshan Pavilion gives Changsha a visible old-city anchor. Around it, students can read the city through street corners, shop signs, local snacks, and the rhythm of people meeting after class or work.",
        zhStory:
          "中山亭像是长沙老城的一个时间坐标。站在它附近，学生能从街角、招牌、小吃和下课下班后的人流里，读到这座城市并不端着的历史感。",
        studentAngle:
          "Best for a first city walk: start here, follow the streets into food lanes, then let classmates explain what locals actually love.",
        zhStudentAngle:
          "适合作为第一次 city walk 的起点：从这里出发，顺着街巷走进小吃和老店，再让本地同学讲讲长沙人真正喜欢什么。"
      },
      {
        name: "Beizheng Street Church",
        zhName: "长沙北正街教堂",
        category: "Street architecture",
        zhCategory: "街区建筑",
        district: "Kaifu District",
        zhDistrict: "开福区",
        image: "https://image.huaxiafengwu.com/submission/145564/banner/1711005242805",
        sourceUrl: "https://image.huaxiafengwu.com/app/wiki/3/143057/wiki-detail.html?t=1711353274040",
        story:
          "Beizheng Street Church adds a quiet, layered texture to Changsha. It reminds students that Chinese cities are not one-note: local life, old architecture, faith, commerce, and youth photography can share the same street.",
        zhStory:
          "北正街教堂给长沙增加了一层安静而复杂的质感。它会提醒学生：中国城市不是单一颜色的，市井生活、老建筑、信仰、商业和年轻人的拍照散步，可以同时存在于一条街上。",
        studentAngle:
          "Good for students who like photography, architecture, cafes, and slower conversations away from the loudest tourist routes.",
        zhStudentAngle:
          "适合喜欢摄影、建筑、咖啡和慢一点聊天节奏的学生，也适合从热闹路线里短暂抽身。"
      },
      {
        name: "Wangyue Park",
        zhName: "长沙望月公园",
        category: "Daily green space",
        zhCategory: "日常公园",
        district: "Yuelu District",
        zhDistrict: "岳麓区",
        image: "https://image.huaxiafengwu.com/submission/145563/banner/1711005048517",
        sourceUrl: "https://image.huaxiafengwu.com/app/wiki/3/143056/wiki-detail.html?t=1711352119656",
        story:
          "Wangyue Park shows the softer side of Changsha. For international students, parks like this matter because they make a city livable: morning walks, evening talks, language practice, and a place to breathe between classes.",
        zhStory:
          "望月公园呈现的是长沙柔软的一面。对留学生来说，这样的公园很重要，因为它让城市变得可生活：晨跑、晚间散步、中文练习、课间喘口气，都需要这样的空间。",
        studentAngle:
          "Best for students choosing Yuelu-side campuses or anyone who wants to feel how Changsha balances study, food, hills, and everyday rest.",
        zhStudentAngle:
          "适合考虑岳麓一侧学校的学生，也适合想感受长沙如何在学习、美食、山水和日常休息之间取得平衡的人。"
      }
    ]
  }),
  nanning: inspiration({
    slug: "nanning",
    title: "Nanning Through Green City Life and ASEAN Culture",
    zhTitle: "从绿城与东盟气质里看见南宁",
    intro:
      "Nanning's charm is gentle but distinctive: green mountains, river walks, ASEAN-facing streets, ethnic culture, sour-spicy food, and a warm climate that makes daily life easier for many international students.",
    zhIntro:
      "南宁的魅力不是喧闹型的，而是温暖、绿色、亲近东盟，也很适合日常生活：青山、邕江、东盟街区、民族文化、酸辣鲜香的食物和湿热气候，共同构成了这座城市的留学气质。",
    sourceNote:
      "Topics are rewritten from the Nanning study-city brief, public cultural references, and verified Wikimedia image sources.",
    zhSourceNote:
      "选题根据南宁留学城市文章、公共文化线索和已核验 Wikimedia 真实图片重新整理撰写。",
    items: [
      {
        name: "Qingxiu Mountain",
        zhName: "青秀山",
        category: "Green city landmark",
        zhCategory: "绿城地标",
        district: "Qingxiu District",
        zhDistrict: "青秀区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nanning_seen_from_Qingxiu_Mountain.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning_seen_from_Qingxiu_Mountain.jpg",
        story:
          "Qingxiu Mountain makes Nanning's 'green city' identity visible. It gives students a place for weekend walks, skyline views, subtropical plants, and a quieter way to understand the city beyond classrooms.",
        zhStory:
          "青秀山让南宁“中国绿城”的身份变得很具体。它给学生提供周末散步、俯瞰城市、认识亚热带植物和从课堂之外理解南宁的空间。",
        studentAngle:
          "Best for a first relaxed weekend: bring classmates, take photos, climb for city views, then return to campus without spending heavily.",
        zhStudentAngle:
          "适合作为第一个轻松周末路线：和同学一起拍照、登高看城，再回到校园，不需要花很多钱。"
      },
      {
        name: "China-ASEAN Business Center",
        zhName: "中国—东盟商务区",
        category: "ASEAN gateway",
        zhCategory: "东盟窗口",
        district: "Qingxiu District",
        zhDistrict: "青秀区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Skyline_of_China-ASEAN_Business_Center_in_Qingxiu_District.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Skyline_of_China-ASEAN_Business_Center_in_Qingxiu_District.jpg",
        story:
          "This district turns Nanning's ASEAN orientation into an urban scene. Students can feel that China-ASEAN cooperation is not an abstract policy phrase, but part of the city's buildings, events, and future-facing networks.",
        zhStory:
          "中国—东盟商务区把南宁面向东盟的定位变成了城市现场。学生会感觉到，中国—东盟合作不是抽象政策，而是出现在建筑、活动和未来职业网络里的真实关系。",
        studentAngle:
          "Strong for students interested in business, Chinese language, regional cooperation, translation, tourism, digital trade, or ASEAN-related careers.",
        zhStudentAngle:
          "适合关注商科、中文、区域合作、翻译、旅游、数字贸易和东盟相关职业方向的学生。"
      },
      {
        name: "Guangxi Museum of Nationalities",
        zhName: "广西民族博物馆",
        category: "Ethnic culture",
        zhCategory: "民族文化",
        district: "Yong River area",
        zhDistrict: "邕江沿线",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Anthropology_Museum_of_Guangxi.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Anthropology_Museum_of_Guangxi.jpg",
        story:
          "The museum helps international students understand Guangxi through Zhuang culture, regional diversity, textiles, festivals, and the cultural bridge between China and Southeast Asia.",
        zhStory:
          "广西民族博物馆能帮助留学生从壮族文化、多民族生活、织锦、节庆和中国—东南亚文化连接中理解广西。",
        studentAngle:
          "Good for language learners and culture-curious students: museum routes give vocabulary, stories, and visual memory for explaining China to friends back home.",
        zhStudentAngle:
          "适合学中文和喜欢文化的学生：博物馆路线能提供词汇、故事和视觉记忆，方便他们把中国讲给家乡朋友听。"
      },
      {
        name: "Nanning Confucian Temple",
        zhName: "南宁孔庙",
        category: "Traditional culture",
        zhCategory: "传统文化",
        district: "Qingxiu Mountain route",
        zhDistrict: "青秀山路线",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nanning_Confucian_Temple_and_Mount_Qingxiu_Shan,_June_2023.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning_Confucian_Temple_and_Mount_Qingxiu_Shan,_June_2023.jpg",
        story:
          "The Confucian Temple gives Nanning a quieter cultural layer. It is useful for students who want Chinese tradition to feel walkable, ceremonial, and close to daily city routes.",
        zhStory:
          "南宁孔庙给这座城市增加了更安静的传统文化层次。它适合让学生把中国传统理解成可以走进去、可以参与仪式感、也靠近日常路线的现场。",
        studentAngle:
          "Pair it with Qingxiu Mountain or Guangxi Museum of Nationalities for a gentle culture day rather than a rushed sightseeing checklist.",
        zhStudentAngle:
          "可以和青秀山、广西民族博物馆组合成一天温和的文化路线，而不是匆忙打卡。"
      },
      {
        name: "Yong River and Nanning Bridge",
        zhName: "邕江与南宁大桥",
        category: "River life",
        zhCategory: "邕江生活",
        district: "Yong River corridor",
        zhDistrict: "邕江廊道",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nanning_Bridge.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Nanning_Bridge.jpg",
        story:
          "The Yong River is Nanning's everyday connector. Its bridges and riverside routes turn museums, parks, evening walks, and city views into a livable rhythm.",
        zhStory:
          "邕江是南宁日常生活的连接线。桥梁和沿江路线把博物馆、公园、夜晚散步和城市景观串起来，让南宁显得更适合生活。",
        studentAngle:
          "Useful for students who want inexpensive evening plans: river walks, photos, snacks, and slow conversations after class.",
        zhStudentAngle:
          "适合想要低成本夜晚安排的学生：沿江散步、拍照、吃点小食，下课后慢慢聊天。"
      },
      {
        name: "Qingxiu Mountain Daily Green Space",
        zhName: "青秀山日常绿意",
        category: "Student reset place",
        zhCategory: "学生放松空间",
        district: "Qingxiu District",
        zhDistrict: "青秀区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Koi_Feeding_in_Mt_Qingxiu_Nanning.JPG?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Koi_Feeding_in_Mt_Qingxiu_Nanning.JPG",
        story:
          "Small green scenes matter for study life. Nanning's parks and warm climate help students recover energy, practice Chinese outdoors, and feel the city is friendly rather than overwhelming.",
        zhStory:
          "这些小小的绿色场景对留学生活也很重要。南宁的公园和温暖气候，能帮助学生恢复精力、在户外练中文，并觉得这座城市是友好的，而不是压迫感很强的。",
        studentAngle:
          "Best for students from tropical countries or anyone who needs a calm routine between classes, applications, and language practice.",
        zhStudentAngle:
          "适合来自热带国家的学生，也适合需要在上课、申请和中文练习之间找到平静节奏的人。"
      }
    ]
  }),
  kunming: inspiration({
    slug: "kunming",
    title: "Kunming Through Spring City Life and Yunnan Diversity",
    zhTitle: "从春城气候与云南多元文化里看见昆明",
    intro:
      "Kunming is attractive because it feels gentle without being empty: Green Lake, Yunnan University, Dianchi, flowers, rice noodles, ethnic cultures, cafes, old streets, and a gateway rhythm toward Southeast Asia.",
    zhIntro:
      "昆明吸引年轻人的地方，是它温柔但不空洞：翠湖、云南大学、滇池、鲜花、米线、民族文化、咖啡馆、老街，以及面向东南亚的开放节奏，共同构成了春城的留学气质。",
    sourceNote:
      "Topics are rewritten from the Kunming study-city brief, public cultural references, and verified Wikimedia image sources.",
    zhSourceNote:
      "选题根据昆明留学城市文章、公共文化线索和已核验 Wikimedia 真实图片重新整理撰写。",
    items: [
      {
        name: "Green Lake Park",
        zhName: "翠湖公园",
        category: "Spring City landmark",
        zhCategory: "春城地标",
        district: "Wuhua District",
        zhDistrict: "五华区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_Lake_Park_3.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Lake_Park_3.jpg",
        story:
          "Green Lake is the emotional center of student Kunming. It is free, walkable, close to Yunnan University, and full of the everyday scenes that make a city feel safe and breathable.",
        zhStory:
          "翠湖是学生理解昆明最好的情感入口。它免费、可步行、靠近云南大学，也充满本地市民散步、聊天、看鸟和休息的日常画面，让城市显得安全、松弛、可以呼吸。",
        studentAngle:
          "Best for a first Kunming afternoon: walk from campus to the lake, practice Chinese, find a cafe, and feel why the city is called the Spring City.",
        zhStudentAngle:
          "适合作为抵达昆明后的第一个下午：从校园走到湖边，练中文，找一家咖啡馆，然后慢慢理解为什么这里叫春城。"
      },
      {
        name: "Yunnan University Old Campus",
        zhName: "云南大学老校区",
        category: "Campus and history",
        zhCategory: "校园与历史",
        district: "Cuihu North Road",
        zhDistrict: "翠湖北路",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kunming_44.JPG?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Kunming_44.JPG",
        story:
          "Yunnan University gives Kunming a serious academic anchor. Around the old campus, students can feel that study life is connected with old streets, bookstores, cafes, and the memory of Southwest China's intellectual history.",
        zhStory:
          "云南大学给昆明的留学故事一个扎实的学术锚点。老校区周围，学习生活和老街、书店、咖啡馆、西南学术传统的记忆连在一起，不是孤零零地存在。",
        studentAngle:
          "Strong for students who want a beautiful but academically grounded city: it is easy to combine reading, walking, language practice, and slow discovery.",
        zhStudentAngle:
          "适合希望城市既漂亮又有学术根基的学生：读书、散步、中文练习和慢慢探索，可以自然放在同一天里。"
      },
      {
        name: "Dianchi Lake",
        zhName: "滇池",
        category: "Lake and weekend life",
        zhCategory: "湖泊与周末生活",
        district: "Dianchi area",
        zhDistrict: "滇池片区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dianchi_Lake.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Dianchi_Lake.jpg",
        story:
          "Dianchi gives Kunming a wide horizon. It is where students can ride, walk, watch sunset, and understand that the city is not only mild in weather but also generous in space.",
        zhStory:
          "滇池给昆明打开了一个宽阔视野。学生可以骑行、散步、看日落，也会明白昆明不只是气候温和，它在空间上也很慷慨。",
        studentAngle:
          "Good for low-cost weekends and mental reset, especially after exam weeks or intensive language study.",
        zhStudentAngle:
          "适合低成本周末和恢复状态，尤其适合考试周后，或中文学习比较密集的时候去放松。"
      },
      {
        name: "Dounan Flower Market",
        zhName: "斗南花市",
        category: "Flower economy",
        zhCategory: "鲜花经济",
        district: "Chenggong District",
        zhDistrict: "呈贡区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Notice_for_passengers_to_Dounan_Flower_Market_at_L1_Dounan_Station_(20210322152436).jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Notice_for_passengers_to_Dounan_Flower_Market_at_L1_Dounan_Station_(20210322152436).jpg",
        story:
          "Dounan Flower Market turns Kunming's climate into a visible industry. It is not only romantic; it is a real supply chain where students can understand how flowers, logistics, cities, and everyday beauty meet.",
        zhStory:
          "斗南花市把昆明的气候优势变成了看得见的产业。它不只是浪漫，也是一条真实的供应链，能让学生理解鲜花、物流、城市和日常美好如何连接。",
        studentAngle:
          "Useful for students interested in business, agriculture, design, tourism, social media, and the small economies behind beautiful things.",
        zhStudentAngle:
          "适合关注商科、农业、设计、旅游、社交媒体，以及“美好事物背后的小经济”的学生。"
      },
      {
        name: "Kunming Food Streets",
        zhName: "昆明米线与夜市街区",
        category: "Food and night market",
        zhCategory: "美食与夜市",
        district: "Old city and campus neighborhoods",
        zhDistrict: "老城与校园周边",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_Lake_Park_9.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Lake_Park_9.jpg",
        story:
          "Kunming is learned through taste: crossing-the-bridge rice noodles, small-pot rice noodles, tofu rice noodles, roasted tofu, Yunnan barbecue, fruit, coffee, and night-market snacks.",
        zhStory:
          "昆明很适合通过味觉来认识：过桥米线、小锅米线、豆花米线、烤豆腐、云南烧烤、热带水果、咖啡和夜市小吃，会让学生很快对这座城市产生亲近感。",
        studentAngle:
          "Food is the easiest language exchange route: classmates can explain ingredients, dialect names, prices, and local habits over one bowl of rice noodles.",
        zhStudentAngle:
          "美食是最容易开启语言交换的路线：一碗米线里，同学就可以讲配料、方言叫法、价格和本地习惯。"
      },
      {
        name: "Yunnan Ethnic Culture Routes",
        zhName: "云南民族文化路线",
        category: "Ethnic diversity",
        zhCategory: "民族多样性",
        district: "Kunming and Yunnan weekend routes",
        zhDistrict: "昆明与云南周末路线",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_Lake_Park_7.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_Lake_Park_7.jpg",
        story:
          "Kunming is a gateway to one of China's richest cultural landscapes. From Yunnan Nationalities Village to Jianshui, Yuanyang, Dali, and Lijiang, students can meet China through many languages, clothes, foods, songs, and local memories.",
        zhStory:
          "昆明是进入中国最丰富文化景观之一的入口。从云南民族村到建水、元阳、大理、丽江，学生会通过多种语言、服饰、食物、歌舞和地方记忆来认识中国。",
        studentAngle:
          "Especially strong for students from Southeast Asia, South Asia, and culture-curious countries because Yunnan makes China feel diverse, border-connected, and emotionally close.",
        zhStudentAngle:
          "尤其适合来自东南亚、南亚，以及对文化多样性好奇的学生，因为云南会让中国显得多元、边地相连，也更容易产生情感上的亲近。"
      }
    ]
  })
};

export function getCityCulturalInspiration(slug: string) {
  return cityCulturalInspirations[slug];
}
