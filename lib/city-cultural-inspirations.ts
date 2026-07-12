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

type InspirationPoint = {
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
};

const cityBatchInspiration = (
  slug: string,
  title: string,
  zhTitle: string,
  intro: string,
  zhIntro: string,
  items: InspirationPoint[]
) =>
  inspiration({
    slug,
    title,
    zhTitle,
    intro,
    zhIntro,
    sourceNote:
      "Topics are rewritten from the user's city briefs, public cultural references, and verified public-domain or freely licensed image sources.",
    zhSourceNote:
      "内容根据你提供的城市素材、公开文化线索，以及 Wikimedia 等可核验公共图片来源重新整理撰写。",
    items
  });

export const cityCulturalInspirations: Record<string, CityCulturalInspiration> = {
  hangzhou: inspiration({
    slug: "hangzhou",
    title: "Hangzhou Through West Lake, Liangzhu, Tea Hills, Digital Economy, and Night Markets",
    zhTitle: "从西湖、良渚、茶山、数字经济与夜市里看见杭州",
    intro:
      "Hangzhou attracts global youth because it can be poetic and modern at the same time: West Lake, the Grand Canal, Liangzhu, Longjing tea hills, Qiantang River lights, digital economy, creative parks, music bars, and summer night markets all belong to the same city.",
    zhIntro:
      "杭州吸引全球年轻人的地方，在于它可以同时诗意和摩登：西湖、运河、良渚、龙井茶山、钱塘江灯光、数字经济、创意园区、音乐酒吧和夏夜市集，都在同一座城市里自然并存。",
    sourceNote:
      "Topics are rewritten from the Hangzhou study-city brief, the user's nightlife notes, public cultural references, and verified Wikimedia and ColorHub image sources.",
    zhSourceNote:
      "选题根据杭州留学城市文章、你提供的夜生活素材、公共文化线索，以及已核验的 Wikimedia 与 ColorHub 图片来源重新整理撰写。",
    items: [
      {
        name: "West Lake",
        zhName: "西湖",
        category: "Poetic city center",
        zhCategory: "诗意城市中心",
        district: "West Lake area",
        zhDistrict: "西湖周边",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/West%20Lake%20in%202024.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:West_Lake_in_2024.jpg",
        story:
          "West Lake makes Hangzhou feel emotionally available. It gives students a free, repeatable route for walking, taking photos, talking, reading, and recovering after classes.",
        zhStory:
          "西湖让杭州变得很容易产生情感连接。它给学生一条免费、可反复回来的路线：散步、拍照、聊天、阅读，以及在上课之后恢复能量。",
        studentAngle:
          "Best for first impressions and quiet daily life. A city that lets students walk by a world-famous lake after class has a special kind of kindness.",
        zhStudentAngle:
          "适合第一印象，也适合日常生活。一座能让学生下课后走到世界级湖边的城市，本身就有一种特别的温柔。"
      },
      {
        name: "Grand Canal and Hangzhou Steelworks Park",
        zhName: "大运河与杭钢公园",
        category: "Industrial memory and youth events",
        zhCategory: "工业记忆与青年活动",
        district: "Gongshu District",
        zhDistrict: "拱墅区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Grand%20Canal%20Hangzhou%20Steelworks%20Park%20(1),%20202507.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Grand_Canal_Hangzhou_Steelworks_Park_(1),_202507.jpg",
        story:
          "The canal and steelworks park show a newer Hangzhou: industrial structures become concerts, markets, open-air cinema, beer festivals, and a place where young people can gather at night.",
        zhStory:
          "运河和杭钢公园展示的是更新后的杭州：工业结构被转化为演出、市集、露天电影、啤酒节和年轻人夜间聚集的公共空间。",
        studentAngle:
          "Strong for students who like music festivals, design, urban renewal, photography, and a less conventional Hangzhou than the postcard West Lake.",
        zhStudentAngle:
          "适合喜欢音乐节、设计、城市更新、摄影，以及想看到西湖明信片之外杭州的学生。"
      },
      {
        name: "Liangzhu",
        zhName: "良渚",
        category: "Ancient civilization and design",
        zhCategory: "古文明与设计",
        district: "Yuhang District",
        zhDistrict: "余杭区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/West%20City%20Wall%20of%20Liangzhu%20Ancient%20City.JPG?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:West_City_Wall_of_Liangzhu_Ancient_City.JPG",
        story:
          "Liangzhu gives Hangzhou a civilization-scale depth. Jade, water systems, ancient city walls, museums, and night events help students understand China before the familiar dynastic timeline.",
        zhStory:
          "良渚给杭州一种文明尺度的深度。玉器、水利系统、古城墙、博物馆和夜间活动，能帮助学生理解更早于常见王朝叙事的中国。",
        studentAngle:
          "Good for archaeology, design, museum studies, anthropology, history, and students who want Chinese culture to feel older and more complex.",
        zhStudentAngle:
          "适合考古、设计、博物馆、人类学、历史方向学生，也适合希望看到更古老、更复杂中国文化的人。"
      },
      {
        name: "Longjing Tea Hills",
        zhName: "龙井茶山",
        category: "Tea, hills, and slow weekends",
        zhCategory: "茶、山与慢周末",
        district: "Meijiawu and West Lake hills",
        zhDistrict: "梅家坞与西湖群山",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Longjing%20Tea%20field,%20Dragon%20Well%20area,%20Meijiawu%20China.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Longjing_Tea_field,_Dragon_Well_area,_Meijiawu_China.jpg",
        story:
          "Longjing tea hills balance Hangzhou's digital speed. Students can drink tea, walk village roads, learn local etiquette, and discover that Chinese modernity can still keep a quiet rural doorway.",
        zhStory:
          "龙井茶山会平衡杭州的数字速度。学生可以喝茶、走村路、学习本地礼仪，也会发现中国的现代化仍然可以保留一个安静的乡村入口。",
        studentAngle:
          "Ideal after exams or internships: a low-pressure route for language practice, photos, and slowing the mind down.",
        zhStudentAngle:
          "适合考试或实习之后去：低压力、适合练中文、拍照，也适合让脑子慢下来。"
      },
      {
        name: "Olympic Sports Center and Qiantang River Life",
        zhName: "奥体中心与钱塘江生活",
        category: "Modern events and riverfront city",
        zhCategory: "现代活动与江岸城市",
        district: "Binjiang and Qianjiang New City area",
        zhDistrict: "滨江与钱江新城片区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hangzhou%20Olympic%20Sports%20Center%20Stadium2021.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Hangzhou_Olympic_Sports_Center_Stadium2021.jpg",
        story:
          "The Olympic Sports Center and Qiantang River side show Hangzhou's metropolitan ambition: concerts, sports, skyline walks, night lights, and a city that knows how to host global attention.",
        zhStory:
          "奥体中心和钱塘江一带展示杭州的都市雄心：演唱会、体育、天际线散步、夜间灯光，以及这座城市承接全球目光的能力。",
        studentAngle:
          "Strong for students who want a city with both scenery and event energy, especially around design, media, e-commerce, and digital trade.",
        zhStudentAngle:
          "适合希望城市既有风景又有活动能量的学生，尤其适合设计、媒体、电商和数字贸易方向。"
      },
      {
        name: "Hangzhou Night Markets and Culture Bars",
        zhName: "杭州夜市、市集与文化酒馆",
        category: "Gentle nightlife",
        zhCategory: "温和夜生活",
        district: "Tianmuli, Binjiang, canal areas, and bookstore neighborhoods",
        zhDistrict: "天目里、滨江、运河片区与书店周边",
        image: "https://c.colorhub.me/uYUnyKe7jfgLw3drPMCpL1OZtJcnJAcCHcW7SLVr/0x500/euc:GYUw9AhhYMwMYgOwFY7ACxwIwE4AmeAbDjhInhABxwAMcMMIE6Nwly1MoUAdAFYAHEAHMgA",
        sourceUrl: "https://www.colorhub.me/photos/9bv1O",
        story:
          "Hangzhou nightlife can be gentle rather than loud: game bars, whisky bars, live music, bookstore bars, creative markets, beer festivals, and summer city events give students many ways to meet people safely.",
        zhStory:
          "杭州的夜生活可以不是喧闹型，而是更温和的：游戏酒吧、威士忌吧、Live、书店酒馆、创意市集、啤酒节和夏季城市活动，为学生提供很多相对安全、自然认识朋友的方式。",
        studentAngle:
          "Good for students who want nightlife but still care about comfort, safety, conversation, culture, and a softer social rhythm than megacity clubbing.",
        zhStudentAngle:
          "适合想体验夜生活，但也在意舒适、安全、聊天、文化和更柔和社交节奏的学生。"
      }
    ]
  }),
  chongqing: inspiration({
    slug: "chongqing",
    title: "Chongqing Through Mountain-City Nights, Hotpot, Monorails, and Two Rivers",
    zhTitle: "从山城夜景、火锅、轻轨与两江里看见重庆",
    intro:
      "Chongqing is one of China's most visually unforgettable study cities. It gives global youth a city of cliffs, bridges, rivers, hotpot, noodles, monorails, night markets, museums, and a bold western-China energy that feels different from flat coastal cities.",
    zhIntro:
      "重庆是中国最有视觉记忆点的留学城市之一。它给全球年轻人的不是一座平面的城市，而是一座由坡坎、桥梁、两江、火锅、小面、轻轨、夜市、博物馆和中国西部发展能量组成的立体城市。",
    sourceNote:
      "Topics are rewritten from the Chongqing study-city brief, public cultural references, and verified Wikimedia and ColorHub image sources.",
    zhSourceNote:
      "选题根据重庆留学城市文章、公共文化线索，以及已核验的 Wikimedia 与 ColorHub 图片来源重新整理撰写。",
    items: [
      {
        name: "Hongyadong",
        zhName: "洪崖洞",
        category: "Mountain-city night landmark",
        zhCategory: "山城夜景地标",
        district: "Yuzhong District",
        zhDistrict: "渝中区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/20250521%20Hongyadong%20(223216).jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:20250521_Hongyadong_(223216).jpg",
        story:
          "Hongyadong turns Chongqing's vertical geography into a night scene students never forget. Buildings hang along the river, lights stack above each other, and food streets make the city feel social immediately.",
        zhStory:
          "洪崖洞把重庆的立体地理变成了让学生很难忘记的夜景。建筑临江而起，灯光层层叠叠，小吃街又让这座城市一开始就带着社交感。",
        studentAngle:
          "Best for a first evening route: go with classmates, take photos, eat snacks, and understand why Chongqing becomes famous so quickly online.",
        zhStudentAngle:
          "适合作为第一次重庆夜游：和同学一起去拍照、吃小吃，也理解为什么重庆这么容易在互联网上出圈。"
      },
      {
        name: "Jiefangbei",
        zhName: "解放碑",
        category: "City center and student nights",
        zhCategory: "城市中心与学生夜生活",
        district: "Yuzhong District",
        zhDistrict: "渝中区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20close%20view%20of%20Jiefangbei%20CBD,Central%20Chongqing%20at%20night.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:A_close_view_of_Jiefangbei_CBD,Central_Chongqing_at_night.jpg",
        story:
          "Jiefangbei gives students Chongqing's busiest urban rhythm: shopping, metro exits, food streets, neon, crowds, and a strong sense that the city is always moving.",
        zhStory:
          "解放碑给学生的是重庆最忙碌的城市节奏：购物、地铁口、美食街、霓虹、人群，以及这座城市一直在向前生长的感觉。",
        studentAngle:
          "Good for students who want practical orientation: meeting points, transport, shopping, meals, and first-night city confidence.",
        zhStudentAngle:
          "适合学生建立城市方向感：约见地点、交通、购物、吃饭和抵达重庆后的第一份夜间安全感，都能从这里开始。"
      },
      {
        name: "Liziba Station",
        zhName: "李子坝站",
        category: "Transit as city spectacle",
        zhCategory: "交通即城市奇观",
        district: "Yuzhong District",
        zhDistrict: "渝中区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20train%20of%20Chongqing%20Rail%20Transit%20Line%202%20coming%20through%20a%20residential%20building%20at%20Liziba.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:A_train_of_Chongqing_Rail_Transit_Line_2_coming_through_a_residential_building_at_Liziba.jpg",
        story:
          "Liziba shows that Chongqing's transportation is part of its personality. A train passing through a building is not only a photo spot; it explains how the city adapts to mountains.",
        zhStory:
          "李子坝说明重庆的交通本身就是城市性格的一部分。轻轨穿楼不只是拍照点，它也解释了这座城市如何在山地空间里生长。",
        studentAngle:
          "Strong for engineering, architecture, urban design, transport, and social-media-minded students.",
        zhStudentAngle:
          "适合工程、建筑、城市设计、交通和喜欢社交媒体记录的学生。"
      },
      {
        name: "Chaotianmen and Raffles City",
        zhName: "朝天门与来福士",
        category: "Two-river gateway",
        zhCategory: "两江门户",
        district: "Yuzhong Peninsula",
        zhDistrict: "渝中半岛",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/RafflesCity%20Chongqing%20Bridge.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:RafflesCity_Chongqing_Bridge.jpg",
        story:
          "Chaotianmen is where students can feel Chongqing's geography directly: the Yangtze and Jialing rivers meet, modern buildings rise, and the city opens toward western China and the world.",
        zhStory:
          "朝天门能让学生直接感到重庆的地理力量：长江与嘉陵江交汇，现代建筑拔地而起，城市也从这里面向中国西部和世界打开。",
        studentAngle:
          "Good for understanding Chongqing as more than a tourist city: it is a port, logistics hub, manufacturing base, and western opening gateway.",
        zhStudentAngle:
          "适合理解重庆不只是旅游城市：它也是港口、物流枢纽、制造业基地和中国西部开放门户。"
      },
      {
        name: "Ciqikou Old Town",
        zhName: "磁器口古镇",
        category: "Old street and food memory",
        zhCategory: "老街与美食记忆",
        district: "Shapingba District",
        zhDistrict: "沙坪坝区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Street%20scene%20in%20Ciqikou,%20Chongqing.JPG?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Street_scene_in_Ciqikou,_Chongqing.JPG",
        story:
          "Ciqikou gives Chongqing a slower cultural route: old streets, snacks, tea houses, dialect, small shops, and river memories that balance the city's dramatic skyline.",
        zhStory:
          "磁器口给重庆一条更慢的文化路线：老街、小吃、茶馆、方言、小店和江边记忆，会平衡重庆强烈的天际线和夜景冲击。",
        studentAngle:
          "Useful for Chinese practice because students can order snacks, read signs, ask prices, and talk with shop owners in real situations.",
        zhStudentAngle:
          "对中文练习很有用，因为学生可以在真实场景里点小吃、看招牌、问价格、和店主聊天。"
      },
      {
        name: "Chongqing China Three Gorges Museum",
        zhName: "重庆中国三峡博物馆",
        category: "River history and western China",
        zhCategory: "江河历史与中国西部",
        district: "Yuzhong District",
        zhDistrict: "渝中区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chongqing%20Three%20Gorges%20Museum%20China.JPG?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Chongqing_Three_Gorges_Museum_China.JPG",
        story:
          "The Three Gorges Museum helps students understand the deeper Chongqing: rivers, archaeology, migration, industry, mountain settlements, and the transformation of western China.",
        zhStory:
          "三峡博物馆能帮助学生看到更深的重庆：江河、考古、移民、工业、山地聚落，以及中国西部的现代转型。",
        studentAngle:
          "Good for students who want culture beyond photo spots, especially those interested in history, geography, engineering, and development.",
        zhStudentAngle:
          "适合想看网红拍照点之外内容的学生，尤其适合关注历史、地理、工程和发展议题的人。"
      }
    ]
  }),
  chengdu: inspiration({
    slug: "chengdu",
    title: "Chengdu Through Pandas, Tea Houses, Hotpot, and Snow-Mountain Park Life",
    zhTitle: "从熊猫、茶馆、火锅与雪山下的公园城市里看见成都",
    intro:
      "Chengdu attracts global youth because it is relaxed without being empty: pandas, hotpot, teahouses, Taikoo Li, Kuanzhai Alley, Wuhou Shrine, Du Fu poetry, parks, weekend trips, and a talent-friendly city rhythm all sit inside one livable place.",
    zhIntro:
      "成都吸引全球年轻人的地方，在于它松弛但不空洞：熊猫、火锅、茶馆、太古里、宽窄巷子、武侯祠、杜甫草堂、公园、周末旅行和面向青年人才的城市机会，都被放进了一座真正适合生活的城市里。",
    sourceNote:
      "Topics are rewritten from the Chengdu study-city brief, public cultural references, and verified Wikimedia and ColorHub image sources.",
    zhSourceNote:
      "选题根据成都留学城市文章、公共文化线索，以及已核验的 Wikimedia 与 ColorHub 图片来源重新整理撰写。",
    items: [
      {
        name: "Taikoo Li and Chunxi Road",
        zhName: "太古里与春熙路",
        category: "Youth city center",
        zhCategory: "年轻都市中心",
        district: "Jinjiang District",
        zhDistrict: "锦江区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taikoo_Li_and_IFS_at_the_city_centre.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Taikoo_Li_and_IFS_at_the_city_centre.jpg",
        story:
          "Taikoo Li and Chunxi Road show Chengdu's contemporary side: fashion, food, cafes, bookstores, metro connections, and the famous IFS panda. It is where many students first feel that Chengdu is international but still easygoing.",
        zhStory:
          "太古里和春熙路呈现的是成都当代的一面：时尚、美食、咖啡、书店、地铁连接和IFS熊猫都在这里。许多学生第一次意识到，成都既有国际化的一面，又没有大城市常见的紧绷感。",
        studentAngle:
          "Good for a first city walk after arrival: eat, shop lightly, take photos, practice Chinese, and understand how young Chengdu spends an evening.",
        zhStudentAngle:
          "适合作为抵达成都后的第一条 city walk：吃饭、轻松逛街、拍照、练中文，也观察年轻成都人怎样度过一个晚上。"
      },
      {
        name: "Chengdu Panda Base",
        zhName: "成都大熊猫繁育研究基地",
        category: "Global nature icon",
        zhCategory: "世界级自然名片",
        district: "Chenghua District",
        zhDistrict: "成华区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chengdu-pandas-d10.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Chengdu-pandas-d10.jpg",
        story:
          "The panda base gives Chengdu one of the world's most recognizable city identities. For students, it turns wildlife protection, science, tourism, and pure happiness into a morning route.",
        zhStory:
          "熊猫基地让成都拥有了世界上最容易被记住的城市名片之一。对学生来说，它把野生动物保护、科学研究、旅游和单纯的快乐变成了一条清晨就能出发的路线。",
        studentAngle:
          "Best in the morning. It is also a strong route for social media, biology and ecology interests, and a gentle introduction to Chinese conservation work.",
        zhStudentAngle:
          "建议清晨前往。这里也很适合社交媒体记录、生命科学和生态兴趣学生，以及想温和进入中国自然保护议题的人。"
      },
      {
        name: "Kuanzhai Alley",
        zhName: "宽窄巷子",
        category: "Old lanes and Chengdu taste",
        zhCategory: "老巷子与成都味道",
        district: "Qingyang District",
        zhDistrict: "青羊区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Food_stall_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05324.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Food_stall_-_Kuanzhai_Alleys_-_Chengdu,_China_-_DSC05324.jpg",
        story:
          "Kuanzhai Alley is a compact introduction to Chengdu's texture: courtyard memory, snacks, tea, dialect, small shops, tourists, locals, and the feeling that the city prefers sitting down to rushing through.",
        zhStory:
          "宽窄巷子像一份压缩版的成都质感：院落记忆、小吃、盖碗茶、方言、小店、游客、本地人，以及这座城市更愿意坐下来而不是匆忙经过的生活态度。",
        studentAngle:
          "Useful for language learners because the route is full of ordering, asking prices, reading signs, and hearing local accents.",
        zhStudentAngle:
          "对中文学习者很有用，因为一路上会不断遇到点餐、问价、看招牌、听本地口音的真实场景。"
      },
      {
        name: "Wuhou Shrine",
        zhName: "武侯祠",
        category: "Three Kingdoms memory",
        zhCategory: "三国文化记忆",
        district: "Wuhou District",
        zhDistrict: "武侯区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Corridor_-_Wuhou_Shrine_-_Chengdu,_China_-_DSC05489.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Corridor_-_Wuhou_Shrine_-_Chengdu,_China_-_DSC05489.jpg",
        story:
          "Wuhou Shrine lets students meet the Three Kingdoms as a living cultural route. Hanfu photos, old trees, plaques, courtyards, and Jinli nearby make history social and memorable.",
        zhStory:
          "武侯祠让学生把三国文化理解成一条还在今天继续被走过的路线。汉服照片、古树、匾额、院落和旁边的锦里，会让历史变得可社交、可记忆。",
        studentAngle:
          "Strong for students who like history, storytelling, costume culture, Chinese literature, or immersive cultural photos.",
        zhStudentAngle:
          "适合喜欢历史、故事、服饰文化、中国文学和沉浸式文化拍照的学生。"
      },
      {
        name: "Du Fu Thatched Cottage",
        zhName: "杜甫草堂",
        category: "Poetry and quiet gardens",
        zhCategory: "诗歌与安静园林",
        district: "Qingyang District",
        zhDistrict: "青羊区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chengdu_Sichuan_China_Du-Fu-Thatched-Cottage-Park-01.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Chengdu_Sichuan_China_Du-Fu-Thatched-Cottage-Park-01.jpg",
        story:
          "Du Fu Thatched Cottage gives Chengdu literary depth. It is one of the best places for students to understand that Chinese culture is not only spectacular, but also quiet, humane, and close to daily life.",
        zhStory:
          "杜甫草堂给成都增加了文学深度。它很适合让学生理解，中国文化不只有宏大的奇观，也有安静、含蓄、有人情味并且贴近日常生活的一面。",
        studentAngle:
          "Pair it with a teahouse or cafe afternoon. It is a gentle reset route after exams, applications, or intensive language classes.",
        zhStudentAngle:
          "可以和茶馆或咖啡馆下午组合在一起。考试、申请或高强度中文课之后，这是一条很温柔的恢复路线。"
      },
      {
        name: "Hotpot, Chuanchuan, and Teahouse Afternoons",
        zhName: "火锅、串串与茶馆下午",
        category: "Daily Chengdu lifestyle",
        zhCategory: "成都日常生活方式",
        district: "Campus neighborhoods and old city",
        zhDistrict: "校园周边与老城街区",
        image: "https://c.colorhub.me/BeGEVvW2k71uhCZxneuVahsr1gO0J_FkHK8q6y-D/0x500/euc:OwTg9AhgxmAMUCMCmAzYECMKAsATX82AzCBAgGzCLYQQogJGwbmy2jQB0AVgA5IBzIA",
        sourceUrl: "https://www.colorhub.me/photos/0B8bw",
        story:
          "Chengdu is learned through the body: hotpot steam, chuanchuan skewers, tea bowls, street stools, campus meals, and long conversations. This is where classmates become friends.",
        zhStory:
          "成都很适合用身体来认识：火锅热气、串串签子、盖碗茶、街边小凳、校园饭局和一聊很久的夜晚。很多同学就是在这样的场景里变成朋友的。",
        studentAngle:
          "Best for social integration. Even before Chinese becomes fluent, sharing food can make the city feel close.",
        zhStudentAngle:
          "最适合帮助学生融入社交。中文还不够流利的时候，一起吃饭也能让城市变得亲近。"
      }
    ]
  }),
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
  }),
  suzhou: cityBatchInspiration(
    "suzhou",
    "Suzhou Through Gardens, Jinji Lake, Pingtan, Indie Bars, and Student Walks",
    "从园林、金鸡湖、评弹、微醺小馆和学生漫步里看见苏州",
    "Suzhou is not only a classical garden city. For international students it can be a quiet, elegant, highly connected Jiangnan base: old lanes, museums, lakeside nights, XJTLU-style global campuses, music taverns, markets, and quick trains to Shanghai and Hangzhou.",
    "苏州不只是园林城市。对国际学生来说，它也是一座安静、雅致、交通便利的江南留学基地：古巷、博物馆、湖畔夜色、国际化校园、音乐小酒馆、市集，以及通往上海和杭州的高铁网络。",
    [
      {
        name: "Pingjiang Road",
        zhName: "平江路",
        category: "Old lanes and daily Jiangnan",
        zhCategory: "古巷与日常江南",
        district: "Gusu District",
        zhDistrict: "姑苏区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pingjiang%20Road,%20Suzhou.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Pingjiang_Road,_Suzhou.jpg",
        story: "Pingjiang Road lets Suzhou speak softly: canals, stone bridges, tea, small shops, local snacks, and the feeling that history can still be part of an ordinary walk.",
        zhStory: "平江路让苏州用很轻的声音说话：河道、石桥、茶馆、小店、本地小吃，还有一种历史仍然可以进入日常散步的感觉。",
        studentAngle: "A good first Chinese-practice route: order snacks, read signs, ask directions, and take friends through a city that never needs to shout.",
        zhStudentAngle: "很适合作为中文实践路线：点小吃、看招牌、问路，带朋友慢慢走进一座不需要大声喧哗的城市。"
      },
      {
        name: "Jinji Lake",
        zhName: "金鸡湖",
        category: "Modern lakefront nightlife",
        zhCategory: "现代湖畔夜生活",
        district: "Suzhou Industrial Park",
        zhDistrict: "苏州工业园区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Suzhou%20Jinji%20Lake.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Suzhou_Jinji_Lake.jpg",
        story: "Jinji Lake is Suzhou's modern counterpoint: skyline, malls, lakeside walks, concerts, restaurants, and a night view that gives students a metropolitan rhythm without leaving Jiangnan.",
        zhStory: "金鸡湖是苏州的现代回应：天际线、商场、湖畔步道、演出、餐厅和夜景，让学生不离开江南，也能感受到都市节奏。",
        studentAngle: "Useful for students who want quiet study days but still need modern social life, dating routes, concerts, and city confidence.",
        zhStudentAngle: "适合希望白天安静学习、晚上仍然有现代社交、约会路线、演出和城市自信的学生。"
      },
      {
        name: "Shantang Street and Music Taverns",
        zhName: "山塘街与音乐小酒馆",
        category: "Night walk and folk music",
        zhCategory: "夜游与民谣",
        district: "Shantang Street",
        zhDistrict: "山塘街",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shantang%20Street%20Suzhou.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Shantang_Street_Suzhou.jpg",
        story: "The user's notes describe Suzhou nights as folk songs, warm lights, small drinks, lakeside bars, immersive performance spaces, and markets where old streets meet young voices.",
        zhStory: "你给的素材里，苏州的夜晚有民谣、暖灯、小酌、湖景酒吧、沉浸式演艺空间，也有老街与年轻声音相遇的市集。",
        studentAngle: "A softer nightlife choice for students who prefer music, conversation, and atmosphere over high-pressure clubbing.",
        zhStudentAngle: "适合更喜欢音乐、聊天和氛围，而不是高压夜店体验的学生。"
      }
    ]
  ),
  fuzhou: cityBatchInspiration(
    "fuzhou",
    "Fuzhou Through Sanfang Qixiang, Min River Nights, Fish Balls, and Youth Waterfronts",
    "从三坊七巷、闽江夜色、鱼丸和青年水岸里看见福州",
    "Fuzhou gives international students a warm coastal capital with old houses, river wind, university towns, Fujian food, Southeast Asia connections, and a nightlife that mixes hip-hop, sake bars, food streets, and campus waterfront markets.",
    "福州给国际学生的，是一座温暖的滨海省会：老宅、江风、大学城、闽味美食、面向东南亚的联系，以及把 hip-hop、清酒吧、美食街和校园水岸市集混合在一起的夜生活。",
    [
      {
        name: "Sanfang Qixiang",
        zhName: "三坊七巷",
        category: "Historic living texture",
        zhCategory: "历史生活肌理",
        district: "Gulou District",
        zhDistrict: "鼓楼区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanfang%20Qixiang,%20Fuzhou.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Sanfang_Qixiang,_Fuzhou.jpg",
        story: "Sanfang Qixiang makes Fuzhou feel intimate: white walls, old lanes, family houses, museums, cafes, and the kind of heritage students can actually walk into.",
        zhStory: "三坊七巷让福州显得很亲近：白墙、巷道、老宅、博物馆、咖啡馆，还有那种学生真的可以走进去的城市文脉。",
        studentAngle: "Good for language practice and first city orientation because culture, food, signs, and daily crowds are all in one walkable area.",
        zhStudentAngle: "适合练中文和建立第一印象，因为文化、食物、招牌和日常人流都集中在一个适合步行的区域里。"
      },
      {
        name: "Min River Night Route",
        zhName: "闽江夜游路线",
        category: "River wind and night skyline",
        zhCategory: "江风与夜景",
        district: "Min River riverfront",
        zhDistrict: "闽江沿岸",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fuzhou%20Minjiang%20River.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Fuzhou_Minjiang_River.jpg",
        story: "The Min River gives Fuzhou a relaxed evening rhythm. Students can walk, take photos, ride by the river, and feel the city cool down after class.",
        zhStory: "闽江给福州一种松弛的傍晚节奏。学生可以散步、拍照、沿江骑行，在下课后感到整座城市慢慢降温。",
        studentAngle: "A low-cost route for friendships, dates, photography, and building emotional attachment to the city.",
        zhStudentAngle: "这是低成本建立友情、约会、拍照和城市情感连接的路线。"
      },
      {
        name: "Daming Food Street and University Town Waterfront",
        zhName: "达明美食街与大学城水岸",
        category: "Food, markets, and student nights",
        zhCategory: "美食、市集与学生夜晚",
        district: "Gulou and University Town",
        zhDistrict: "鼓楼与大学城",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fuzhou%20Yantai%20Mountain.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Fuzhou_Yantai_Mountain.jpg",
        story: "Fuzhou's youth life is not only historic. Daming food street, Xiangban night market, and University Town waterfront events turn fish balls, rouyan, light shows, music, and non-heritage workshops into student memory.",
        zhStory: "福州的年轻生活不只有历史。达明美食街、祥坂夜市和大学城水岸活动，会把鱼丸、肉燕、光影秀、音乐和非遗体验变成学生记忆。",
        studentAngle: "Strong for students from Southeast Asia and coastal cultures who may find the food, climate, and river-city rhythm emotionally close.",
        zhStudentAngle: "尤其适合来自东南亚和滨海文化背景的学生，食物、气候和江城节奏会让人更容易亲近。"
      }
    ]
  ),
  tianjin: cityBatchInspiration(
    "tianjin",
    "Tianjin Through Haihe Lights, Wudadao, Courtyard Bars, and University-Town Night Markets",
    "从海河灯火、五大道、四合院小酒馆和大学城夜市里看见天津",
    "Tianjin is a generous study city near Beijing: lower pressure, strong universities, European-style streets, river nights, hearty food, and a humorous local spirit that helps international students feel at ease.",
    "天津是一座靠近北京、但生活压力更低的留学城市：高校资源、欧式街区、海河夜色、扎实的美食，以及幽默松弛的本地气质，都会让国际学生更容易安顿下来。",
    [
      {
        name: "Haihe River",
        zhName: "海河",
        category: "River night and city identity",
        zhCategory: "河岸夜色与城市性格",
        district: "Central Tianjin",
        zhDistrict: "天津中心城区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tianjin%20Haihe%20River%20at%20night.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Tianjin_Haihe_River_at_night.jpg",
        story: "Haihe is Tianjin's evening classroom: bridges, boats, lights, wind, and old buildings make the city easy to understand in one walk.",
        zhStory: "海河像天津的傍晚课堂：桥、船、灯光、晚风和老建筑，让学生用一次散步就能理解这座城市。",
        studentAngle: "A perfect arrival-night route, especially for students who want a romantic but affordable first impression.",
        zhStudentAngle: "很适合作为抵达后的第一晚路线，尤其适合想要浪漫、但又不想花太多钱的学生。"
      },
      {
        name: "Wudadao and Italian Style Area",
        zhName: "五大道与意式风情区",
        category: "Architecture and city walks",
        zhCategory: "建筑与城市漫步",
        district: "Heping District",
        zhDistrict: "和平区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tianjin%20Wudadao.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Tianjin_Wudadao.jpg",
        story: "Tianjin's old neighborhoods make Chinese modern history visible. Students can move from architecture to cafes, from museums to riverfront bars, without a complicated plan.",
        zhStory: "天津的老街区让中国近现代史变得可见。学生可以从建筑走到咖啡馆，从博物馆走到河边酒吧，不需要复杂规划。",
        studentAngle: "Useful for students in architecture, design, history, urban studies, photography, and anyone who likes slow city walks.",
        zhStudentAngle: "适合建筑、设计、历史、城市研究、摄影方向的学生，也适合所有喜欢慢慢走城市的人。"
      },
      {
        name: "Yao Village Night Market and Courtyard Bars",
        zhName: "姚村夜市与四合院酒吧",
        category: "Student food and gentle nightlife",
        zhCategory: "学生美食与温柔夜生活",
        district: "University Town and old city",
        zhDistrict: "大学城与老城",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tianjin%20Jinwan%20Square.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Tianjin_Jinwan_Square.jpg",
        story: "The user's notes show Tianjin's nightlife as river decks, courtyard music, retro bars, hip-hop spaces, university-town snacks, and streets where students can eat well without spending like Beijing.",
        zhStory: "你给的素材里，天津的夜生活有河边露台、四合院民谣、复古酒吧、hip-hop 空间、大学城小吃，也有不用像北京一样花费很高就能吃得很满足的夜市。",
        studentAngle: "Good for students who want access to North China opportunities while living in a warmer, funnier, more relaxed city.",
        zhStudentAngle: "适合希望连接华北机会，同时又想生活在更松弛、更幽默、更有人情味城市里的学生。"
      }
    ]
  ),
  harbin: cityBatchInspiration(
    "harbin",
    "Harbin Through Central Street, Ice Culture, Russian Echoes, and Summer Night Markets",
    "从中央大街、冰雪文化、俄式回声和夏夜市集里看见哈尔滨",
    "Harbin gives global students a China that feels northern, bold, musical, and memorable: engineering universities, winter festivals, Russian-style streets, generous portions, cool summer nights, and a city identity unlike anywhere else.",
    "哈尔滨给全球学生的是一种很北方、很鲜明、很有音乐感的中国：工程强校、冰雪节、俄式街区、分量十足的食物、凉爽夏夜，以及一种别处很难复制的城市性格。",
    [
      {
        name: "Central Street",
        zhName: "中央大街",
        category: "Northern city icon",
        zhCategory: "北方城市名片",
        district: "Daoli District",
        zhDistrict: "道里区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harbin%20Central%20Street.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Harbin_Central_Street.jpg",
        story: "Central Street is where Harbin introduces itself: stone pavement, old facades, ice cream, music, crowds, and the feeling of a northern city that likes being remembered.",
        zhStory: "中央大街是哈尔滨介绍自己的方式：面包石、老建筑、冰棍、音乐、人群，还有一座北方城市愿意被人记住的性格。",
        studentAngle: "A strong first-week route for international students because it combines food, architecture, photos, and easy public life.",
        zhStudentAngle: "很适合作为留学生第一周路线，因为它把美食、建筑、拍照和容易进入的公共生活放在一起。"
      },
      {
        name: "Saint Sophia Cathedral",
        zhName: "圣索菲亚教堂",
        category: "Architecture and memory",
        zhCategory: "建筑与城市记忆",
        district: "Daoli District",
        zhDistrict: "道里区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint%20Sophia%20Cathedral%20in%20Harbin.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Saint_Sophia_Cathedral_in_Harbin.jpg",
        story: "Saint Sophia gives Harbin a dramatic silhouette. For students, it is a reminder that Chinese cities can hold many cultural layers at once.",
        zhStory: "圣索菲亚给哈尔滨一个非常有辨识度的轮廓。对学生来说，它也提醒人们：中国城市可以同时容纳许多文化层次。",
        studentAngle: "Good for Russian-speaking students, architecture lovers, photographers, and anyone curious about China's borderland modern history.",
        zhStudentAngle: "适合俄语区学生、建筑爱好者、摄影者，以及所有对中国边疆近现代史好奇的人。"
      },
      {
        name: "Songhua River and Summer Night Markets",
        zhName: "松花江与夏夜市集",
        category: "Cool nights and student food",
        zhCategory: "凉爽夜晚与学生美食",
        district: "Songhua River area",
        zhDistrict: "松花江沿岸",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Songhua%20River%20Harbin.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Songhua_River_Harbin.jpg",
        story: "Harbin's summer is underrated: river wind, Normal University night market, Anjing Street snacks, craft beer, outdoor movies, and weekend markets make the city social after dark.",
        zhStory: "哈尔滨的夏天被低估了：江风、师大夜市、安静街小吃、精酿、露天电影和周末市集，让这座城市在夜晚很有社交感。",
        studentAngle: "Useful for students who want lower costs, strong engineering education, winter magic, and a surprisingly lively summer.",
        zhStudentAngle: "适合想要较低成本、强工程教育、冬季魔法感，以及一个出乎意料热闹夏天的学生。"
      }
    ]
  ),
  guilin: cityBatchInspiration(
    "guilin",
    "Guilin Through Li River Mountains, West Street, Rice Noodles, and Slow Student Weekends",
    "从漓江山水、西街、桂林米粉和慢周末里看见桂林",
    "Guilin is a dreamlike but practical study city: karst mountains, affordable living, rice noodles, river trips, Yangshuo nights, and a slower rhythm that helps students breathe while learning China.",
    "桂林是一座梦幻但很实际的留学城市：喀斯特山水、较低生活成本、桂林米粉、漓江旅行、阳朔夜晚，以及一种能让学生在学习中国时真正喘口气的慢节奏。",
    [
      {
        name: "Li River",
        zhName: "漓江",
        category: "Landscape as identity",
        zhCategory: "山水即城市名片",
        district: "Guilin and Yangshuo",
        zhDistrict: "桂林与阳朔",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Li%20River%20Guilin.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Li_River_Guilin.jpg",
        story: "The Li River makes Guilin instantly understandable: mountains rise from water, boats move slowly, and students can see why Chinese landscape painting feels alive here.",
        zhStory: "漓江让桂林一眼就能被理解：山从水里生长出来，船慢慢经过，学生会明白为什么中国山水画在这里像活着一样。",
        studentAngle: "A world-class low-pressure weekend route for students who want nature, photography, and emotional reset.",
        zhStudentAngle: "这是世界级但低压力的周末路线，适合想亲近自然、拍照和恢复能量的学生。"
      },
      {
        name: "Yangshuo West Street",
        zhName: "阳朔西街",
        category: "International small-town nightlife",
        zhCategory: "国际化小镇夜生活",
        district: "Yangshuo",
        zhDistrict: "阳朔",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yangshuo%20West%20Street.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Yangshuo_West_Street.jpg",
        story: "West Street has long been a meeting place for travelers. Bars, cafes, live music, restaurants, and many languages make Guilin feel open and easy to enter.",
        zhStory: "西街长期是旅行者相遇的地方。酒吧、咖啡馆、驻唱、餐厅和许多语言，让桂林显得开放，也容易进入。",
        studentAngle: "Good for language exchange, tourism students, hospitality majors, and anyone who wants China to feel relaxed and global at the same time.",
        zhStudentAngle: "适合语言交换、旅游管理、酒店管理方向学生，也适合希望中国既放松又国际化的人。"
      },
      {
        name: "Rice Noodles and Night Food Streets",
        zhName: "桂林米粉与夜市小吃",
        category: "Affordable daily food",
        zhCategory: "实惠日常美食",
        district: "City center and campus areas",
        zhDistrict: "市中心与校园周边",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Guilin%20rice%20noodles.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Guilin_rice_noodles.jpg",
        story: "Guilin's food culture is student-friendly: rice noodles, beer fish, snails, Zhengyang Street, Dongxi Lane, Wayao night market, and small stalls make daily life delicious without being expensive.",
        zhStory: "桂林的饮食对学生很友好：米粉、啤酒鱼、田螺、正阳街、东西巷、瓦窑夜市和小摊，让日常生活好吃但不贵。",
        studentAngle: "A strong choice for students who care about nature, affordability, tourism culture, and a slower social rhythm.",
        zhStudentAngle: "适合重视自然、生活成本、旅游文化和更慢社交节奏的学生。"
      }
    ]
  ),
  shenzhen: cityBatchInspiration(
    "shenzhen",
    "Shenzhen Through Bay Parks, Skyscrapers, Maker Culture, and Cyberpunk Nights",
    "从湾区公园、摩天楼、创客文化和赛博夜色里看见深圳",
    "Shenzhen is the China of speed and possibility: young, coastal, entrepreneurial, expensive but full of free parks, tech exposure, global companies, food from everywhere, and night markets that never feel sleepy.",
    "深圳是速度和可能性的中国：年轻、滨海、创业气质强，生活成本较高但免费公园很多，科技产业密集、全球公司聚集，全国美食汇合，夜市也从不困倦。",
    [
      {
        name: "Shenzhen Bay and Talent Park",
        zhName: "深圳湾与人才公园",
        category: "Coastal city life",
        zhCategory: "滨海城市生活",
        district: "Nanshan District",
        zhDistrict: "南山区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shenzhen%20Bay%20Park.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Shenzhen_Bay_Park.jpg",
        story: "Shenzhen's free public spaces are important. Students can walk by the bay, see Hong Kong across the water, and feel that global ambition can also have sea wind.",
        zhStory: "深圳的免费公共空间很重要。学生可以在海边散步，看见水对面的香港，也会感到全球化的野心并不一定冰冷，它也可以有海风。",
        studentAngle: "Good for students who want tech opportunities but still need running routes, sunsets, and open space.",
        zhStudentAngle: "适合想要科技机会，但也需要跑步路线、日落和开阔空间的学生。"
      },
      {
        name: "Ping An Finance Center and Tech Districts",
        zhName: "平安金融中心与科技城区",
        category: "Future-facing city",
        zhCategory: "面向未来的城市",
        district: "Futian and Nanshan",
        zhDistrict: "福田与南山",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ping%20An%20Finance%20Center.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Ping_An_Finance_Center.jpg",
        story: "Shenzhen's skyline is not decoration; it is a career signal. Hardware, AI applications, design, finance, cross-border trade, and startups are all part of the city vocabulary.",
        zhStory: "深圳的天际线不是装饰，而是一种职业信号。硬件、AI 应用、设计、金融、跨境贸易和创业，都属于这座城市的词汇。",
        studentAngle: "A strong match for students in engineering, business, design, computing, innovation, and Greater Bay Area careers.",
        zhStudentAngle: "非常适合工程、商科、设计、计算机、创新创业和大湾区职业发展方向的学生。"
      },
      {
        name: "Night Markets and Urban Villages",
        zhName: "夜市与城中村烟火",
        category: "Food from everywhere",
        zhCategory: "全国美食汇合",
        district: "Bao'an, Futian, Longhua, and Yantian",
        zhDistrict: "宝安、福田、龙华与盐田",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shenzhen%20Dongmen.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Shenzhen_Dongmen.jpg",
        story: "The user's notes capture Shenzhen after dark: Xixiang Yantian night market, Fanshen night market, Yantian port views, Qianhai HOP, Shuiwei 1368, and creative food streets built for young people.",
        zhStory: "你给的素材抓住了夜晚的深圳：西乡盐田夜市、翻身夜市、盐田港晚霞、前海 HOP、水围 1368，以及围绕年轻人形成的创意美食街区。",
        studentAngle: "Best for energetic students who can handle higher costs in exchange for dense opportunity and global-city speed.",
        zhStudentAngle: "最适合精力充沛、愿意用更高生活成本换取密集机会和全球城市速度的学生。"
      }
    ]
  ),
  taiyuan: cityBatchInspiration(
    "taiyuan",
    "Taiyuan Through Fen River Lights, Jin Culture, Noodles, and Bell Tower Nights",
    "从汾河灯光、晋文化、面食和钟楼夜色里看见太原",
    "Taiyuan gives international students a lower-cost northern base with engineering universities, deep Jin culture, serious noodles, river walks, museum routes, and a nightlife that is becoming younger around Bell Tower Street.",
    "太原给国际学生的是一个生活成本较低的北方留学基地：工程高校、深厚晋文化、扎实面食、汾河散步、博物馆路线，以及围绕钟楼街逐渐年轻起来的夜生活。",
    [
      {
        name: "Fen River",
        zhName: "汾河",
        category: "Riverfront daily life",
        zhCategory: "河岸日常生活",
        district: "Central Taiyuan",
        zhDistrict: "太原中心城区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fen%20River%20Taiyuan.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Fen_River_Taiyuan.jpg",
        story: "The Fen River gives Taiyuan space to breathe. After class, students can walk, run, cycle, watch lights, and feel a calmer northern city rhythm.",
        zhStory: "汾河给太原留出了呼吸空间。下课后，学生可以散步、跑步、骑行、看灯光，感受一种更沉稳的北方城市节奏。",
        studentAngle: "Good for students who want lower living costs, less pressure, and a city that does not overwhelm them on arrival.",
        zhStudentAngle: "适合想要较低生活成本、较小压力，以及抵达后不会被城市压倒的学生。"
      },
      {
        name: "Shanxi Museum and Jin Culture",
        zhName: "山西博物院与晋文化",
        category: "Deep China history",
        zhCategory: "深层中国历史",
        district: "Wanbailin District",
        zhDistrict: "万柏林区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shanxi%20Museum.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Shanxi_Museum.jpg",
        story: "Taiyuan is a strong city for students who want China to feel old, layered, and serious. Jin culture, merchant history, temples, and museums give the city quiet depth.",
        zhStory: "太原很适合希望中国显得古老、层次深、气质沉稳的学生。晋文化、晋商历史、寺庙和博物馆，让城市有安静的深度。",
        studentAngle: "Useful for history, architecture, archaeology, finance history, cultural heritage, and Chinese civilization studies.",
        zhStudentAngle: "适合历史、建筑、考古、金融史、文化遗产和中国文明研究方向的学生。"
      },
      {
        name: "Bell Tower Street and Food Street",
        zhName: "钟楼街与食品街",
        category: "Noodles, baijiu bars, and youth nights",
        zhCategory: "面食、汾酒小馆与年轻夜晚",
        district: "Yingze District",
        zhDistrict: "迎泽区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taiyuan%20Bell%20Tower%20Street.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiyuan_Bell_Tower_Street.jpg",
        story: "The user's notes show a younger Taiyuan: Fenjiu-themed bars, folk music, Modern Sky live events, Food Street, Liuxiang, and Yijing snacks turn the old city into a student night route.",
        zhStory: "你给的素材里有一个更年轻的太原：汾酒主题小馆、民谣、摩登天空演出、食品街、柳巷和义井小吃，把老城变成了学生夜游路线。",
        studentAngle: "Strong for students who want affordable northern food culture and a city that is quietly renewing itself.",
        zhStudentAngle: "适合想体验实惠北方面食文化，也愿意看见一座城市安静更新的学生。"
      }
    ]
  ),
  zhengzhou: cityBatchInspiration(
    "zhengzhou",
    "Zhengzhou Through Central Plains History, CBD Nights, Hu La Tang, and Yellow River Routes",
    "从中原历史、CBD夜色、胡辣汤和黄河路线里看见郑州",
    "Zhengzhou is a central-China study city with practical power: transport hub, affordable food, Henan history, big universities, CBD lights, night markets, and easy access to the Yellow River and ancient capitals.",
    "郑州是一座很务实的中部留学城市：交通枢纽、实惠美食、河南历史、综合性高校、CBD灯光、夜市，以及通往黄河和古都线路的便利入口。",
    [
      {
        name: "Henan Museum",
        zhName: "河南博物院",
        category: "Central Plains civilization",
        zhCategory: "中原文明",
        district: "Jinshui District",
        zhDistrict: "金水区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Henan%20Museum.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Henan_Museum.jpg",
        story: "Henan Museum helps students understand why the Central Plains matter. Bronze, jade, music, writing, and ancient states make Chinese civilization feel concrete.",
        zhStory: "河南博物院会帮助学生理解为什么中原重要。青铜、玉器、音乐、文字和古国历史，让中华文明变得具体。",
        studentAngle: "A must for students who want China beyond skylines: history, archaeology, language, art, and cultural identity.",
        zhStudentAngle: "适合想在天际线之外理解中国的学生：历史、考古、语言、艺术和文化身份都能在这里找到入口。"
      },
      {
        name: "Zhengdong CBD",
        zhName: "郑东新区CBD",
        category: "Modern central-city energy",
        zhCategory: "现代中部城市能量",
        district: "Zhengdong New Area",
        zhDistrict: "郑东新区",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zhengzhou%20CBD.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Zhengzhou_CBD.jpg",
        story: "The CBD and the 'Big Corn' skyline show Zhengzhou's ambition as a transport, finance, logistics, and service hub in central China.",
        zhStory: "郑东CBD和“大玉米”天际线，展示了郑州作为中部交通、金融、物流和服务业枢纽的城市野心。",
        studentAngle: "Good for students in business, logistics, rail transport, urban development, economics, and China market studies.",
        zhStudentAngle: "适合商科、物流、轨道交通、城市发展、经济学和中国市场研究方向的学生。"
      },
      {
        name: "Night Markets and Yellow River Trips",
        zhName: "夜市与黄河路线",
        category: "Food and regional travel",
        zhCategory: "美食与区域旅行",
        district: "Jinshui, Erqi, and Yellow River areas",
        zhDistrict: "金水、二七与黄河沿线",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yellow%20River%20Zhengzhou.jpg?width=1200",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Yellow_River_Zhengzhou.jpg",
        story: "The user's notes make Zhengzhou feel young after dark: Nongke Road bars, CBD live music, Health Road night market, Dehua Street, Taiheli food street, Financial Island, and Yellow River weekend routes.",
        zhStory: "你给的素材让郑州的夜晚变得年轻：农科路酒吧、CBD驻唱、健康路夜市、德化街、泰和里好吃街、金融岛，还有黄河周末路线。",
        studentAngle: "A practical choice for students who want lower costs, transport convenience, deep history, and a city still growing fast.",
        zhStudentAngle: "适合想要较低成本、交通便利、深厚历史，以及一座仍在快速生长城市的学生。"
      }
    ]
  )
};

export function getCityCulturalInspiration(slug: string) {
  return cityCulturalInspirations[slug];
}
