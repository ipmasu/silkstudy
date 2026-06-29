export type CityFoodTravelGuide = {
  slug: string;
  title: string;
  zhTitle: string;
  overview: string;
  zhOverview: string;
  signatureFoods: { name: string; zhName: string; note: string; zhNote: string }[];
  foodAreas: { name: string; zhName: string; vibe: string; zhVibe: string }[];
  travelScenes: { name: string; zhName: string; experience: string; zhExperience: string }[];
  studentTips: string[];
  zhStudentTips: string[];
};

const foodGuide = (input: CityFoodTravelGuide) => input;

export const cityFoodTravelGuides: Record<string, CityFoodTravelGuide> = {
  beijing: foodGuide({
    slug: "beijing",
    title: "Royal flavors, hutong snacks, museums, and Great Wall weekends",
    zhTitle: "皇家风味、胡同小吃、博物馆与长城周末",
    overview: "Beijing food is not only Peking duck. For students, the real charm is the range: old Beijing snacks, university-area canteens, lamb hotpot, Muslim restaurants, coffee in hutongs, and serious regional food from every province of China. Tourism and food fit naturally here: visit a museum, walk through an old neighborhood, then end with a shared meal.",
    zhOverview: "北京美食不只是烤鸭。对学生来说，真正有吸引力的是选择范围：老北京小吃、大学区食堂、涮羊肉、清真餐厅、胡同咖啡，以及来自中国各省的地方菜。北京的旅行和美食很容易串起来：看一个博物馆，走一段老城街巷，最后用一顿饭结束。",
    signatureFoods: [
      { name: "Peking duck", zhName: "北京烤鸭", note: "Best for a first formal meal with classmates or visiting family.", zhNote: "适合第一次和同学、来访家人吃的正式体验。" },
      { name: "Lamb hotpot", zhName: "涮羊肉", note: "A warm social meal in winter, especially good for group dinners.", zhNote: "冬天很适合聚餐，热气腾腾，也容易拉近关系。" },
      { name: "Zhajiang noodles", zhName: "炸酱面", note: "Affordable, local, and easy for students to try near campuses.", zhNote: "价格友好、本地感强，校园周边也容易找到。" },
      { name: "Hutong snacks", zhName: "胡同小吃", note: "Use snacks as a walking route through old Beijing.", zhNote: "可以把小吃当成穿过老北京街巷的步行路线。" }
    ],
    foodAreas: [
      { name: "Haidian university areas", zhName: "海淀大学区", vibe: "Canteens, student restaurants, cafes, and international food around major campuses.", zhVibe: "强校周边有食堂、学生餐厅、咖啡馆和国际餐。" },
      { name: "Hutong neighborhoods", zhName: "胡同街区", vibe: "Small restaurants, courtyard cafes, local snacks, and evening walks.", zhVibe: "小馆、四合院咖啡、本地小吃和夜间散步很适合组合。" },
      { name: "Sanlitun and embassy area", zhName: "三里屯与使馆区", vibe: "International restaurants and social spaces for newcomers.", zhVibe: "国际餐厅和社交空间多，适合刚到中国的新生。" }
    ],
    travelScenes: [
      { name: "Forbidden City and Jingshan", zhName: "故宫与景山", experience: "A classic visual route for understanding imperial Beijing.", zhExperience: "理解帝都北京最经典、最有画面感的路线。" },
      { name: "Great Wall day trip", zhName: "长城一日", experience: "The most memorable first outdoor trip for many international students.", zhExperience: "很多留学生最难忘的第一次中国户外旅行。" },
      { name: "798 and galleries", zhName: "798与艺术区", experience: "Good for design, media, photography, and weekend social life.", zhExperience: "适合设计、传媒、摄影和周末社交。" }
    ],
    studentTips: ["Use campus canteens for daily budget control.", "Reserve Peking duck for group meals, not daily eating.", "Combine museums with hutong food walks to avoid long cross-city travel."],
    zhStudentTips: ["日常控制预算优先用学校食堂。", "烤鸭适合聚餐，不适合当日常消费。", "把博物馆和胡同美食放在同一天，避免跨城奔波。"]
  }),
  shanghai: foodGuide({
    slug: "shanghai",
    title: "Lane food, riverfront nights, global restaurants, and Jiangnan weekends",
    zhTitle: "弄堂美食、江边夜色、国际餐厅与江南周末",
    overview: "Shanghai's food is refined, international, and highly walkable. Students can try local noodles, soup dumplings, pan-fried buns, coffee streets, creative bakeries, and restaurants from almost every country. The best Shanghai experience is often a city walk: old lanes, a gallery, a small restaurant, then the Huangpu River skyline.",
    zhOverview: "上海的美食精致、国际化，也很适合步行探索。学生可以尝试本帮面、小笼包、生煎、咖啡街区、创意面包店，以及几乎来自世界各地的餐厅。最好的上海体验常常是一段 city walk：老弄堂、画廊、小餐馆，再到黄浦江天际线。",
    signatureFoods: [
      { name: "Xiaolongbao", zhName: "小笼包", note: "A simple first bite of Jiangnan flavor.", zhNote: "最容易入门的江南味道。" },
      { name: "Shengjianbao", zhName: "生煎包", note: "Cheap, filling, and perfect for a student snack meal.", zhNote: "便宜、顶饱，很适合学生当小吃正餐。" },
      { name: "Scallion oil noodles", zhName: "葱油拌面", note: "A humble local dish that explains Shanghai's everyday taste.", zhNote: "很日常，却能说明上海本地口味。" },
      { name: "Creative bakery and coffee", zhName: "创意面包与咖啡", note: "Part of Shanghai's youth and design culture.", zhNote: "是上海青年文化和设计气质的一部分。" }
    ],
    foodAreas: [
      { name: "Former French Concession", zhName: "衡复与老洋房街区", vibe: "Coffee, bakeries, small restaurants, galleries, and slow walks.", zhVibe: "咖啡、面包店、小餐馆、画廊和慢步行很集中。" },
      { name: "University neighborhoods", zhName: "大学周边", vibe: "More affordable food and everyday student rhythm.", zhVibe: "价格更友好，也更接近真实学生生活。" },
      { name: "Bund and riverfront", zhName: "外滩与江边", vibe: "Best for visual impact, evening walks, and visiting family.", zhVibe: "适合看城市画面、夜间散步和带家人朋友参观。" }
    ],
    travelScenes: [
      { name: "The Bund at night", zhName: "外滩夜景", experience: "The strongest first impression of modern Shanghai.", zhExperience: "现代上海最强的第一印象。" },
      { name: "Museum and gallery day", zhName: "博物馆与画廊日", experience: "A good route for art, business, design, and architecture students.", zhExperience: "适合艺术、商科、设计和建筑学生。" },
      { name: "Water-town weekend", zhName: "水乡周末", experience: "A soft contrast to Shanghai's speed.", zhExperience: "和上海速度形成柔和对比。" }
    ],
    studentTips: ["Shanghai can be expensive, so mix campus meals with occasional city walks.", "Use metro lines to plan food routes by district.", "Book popular restaurants early on weekends."],
    zhStudentTips: ["上海消费可高可低，日常用校园餐，周末再做城市美食路线。", "按地铁线路规划吃饭和逛街区域。", "热门餐厅周末最好提前预约。"]
  }),
  hangzhou: foodGuide({
    slug: "hangzhou",
    title: "West Lake meals, tea villages, canals, and gentle night markets",
    zhTitle: "西湖餐桌、茶村、运河与温柔夜市",
    overview: "Hangzhou's food and travel are gentle rather than loud. Students can connect West Lake walking, Longjing tea villages, local dishes, canals, night markets, and digital-economy districts into a calm but premium lifestyle. It is a city where food often feels tied to scenery.",
    zhOverview: "杭州的美食和旅行不是吵闹型，而是温柔型。学生可以把西湖步行、龙井茶村、本地菜、运河、夜市和数字经济街区串成一种安静但高级的生活方式。这里的食物常常和风景连在一起。",
    signatureFoods: [
      { name: "West Lake vinegar fish", zhName: "西湖醋鱼", note: "A famous local dish to understand traditional Hangzhou flavor.", zhNote: "理解杭州传统口味的代表菜。" },
      { name: "Dongpo pork", zhName: "东坡肉", note: "Rich, soft, and tied to Hangzhou's literary memory.", zhNote: "浓郁软糯，也和杭州文人记忆有关。" },
      { name: "Longjing tea", zhName: "龙井茶", note: "More than a drink; it is a landscape and social experience.", zhNote: "不只是饮品，也是风景和社交体验。" },
      { name: "Pian'erchuan noodles", zhName: "片儿川", note: "Affordable everyday noodle choice for students.", zhNote: "适合学生日常尝试的本地面食。" }
    ],
    foodAreas: [
      { name: "West Lake area", zhName: "西湖周边", vibe: "Scenery, classic restaurants, tea, and slow walks.", zhVibe: "风景、经典餐厅、茶和慢步行适合组合。" },
      { name: "Longjing and tea villages", zhName: "龙井与茶村", vibe: "Tea fields, quiet meals, photos, and relaxed weekends.", zhVibe: "茶田、安静餐食、拍照和松弛周末。" },
      { name: "Canal and night market areas", zhName: "运河与夜市区域", vibe: "More casual, affordable, and student-friendly.", zhVibe: "更日常、更便宜，也更适合学生。" }
    ],
    travelScenes: [
      { name: "West Lake loop", zhName: "西湖环线", experience: "Walking or cycling makes the city feel poetic and easy.", zhExperience: "步行或骑行会让城市显得诗意又轻松。" },
      { name: "Tea village afternoon", zhName: "茶村下午", experience: "A calm way to introduce Chinese hospitality to foreign friends.", zhExperience: "向外国朋友介绍中国待客方式的温柔入口。" },
      { name: "Wuzhen weekend", zhName: "乌镇周末", experience: "Water-town scenery gives students the Jiangnan memory point.", zhExperience: "水乡景观会给学生一个江南记忆点。" }
    ],
    studentTips: ["Use bike routes around West Lake when weather is good.", "Tea villages are better on weekdays or early mornings.", "Local noodle shops are better for budget than lake-view restaurants."],
    zhStudentTips: ["天气好时优先骑行或步行西湖。", "茶村最好选择工作日或早上去。", "控制预算时，本地面馆比湖景餐厅更适合日常。"]
  }),
  guangzhou: foodGuide({
    slug: "guangzhou",
    title: "Dim sum, Cantonese warmth, old streets, and Greater Bay Area trips",
    zhTitle: "早茶、广府人情、老街与大湾区旅行",
    overview: "Guangzhou may be one of the easiest Chinese cities to love through food. Morning tea, roast meats, congee, rice rolls, herbal tea, seafood, and late-night meals make the city generous and social. For international students, food is also the fastest way to understand Cantonese culture.",
    zhOverview: "广州可能是最容易通过美食爱上的中国城市之一。早茶、烧腊、粥、肠粉、凉茶、海鲜和夜宵，让这座城市显得慷慨又有人情味。对留学生来说，美食也是理解广府文化最快的入口。",
    signatureFoods: [
      { name: "Dim sum morning tea", zhName: "早茶点心", note: "A social ritual, not only breakfast.", zhNote: "这不是单纯早餐，而是一种社交仪式。" },
      { name: "Roast goose and char siu", zhName: "烧鹅与叉烧", note: "Classic Cantonese comfort food for visitors.", zhNote: "很适合外地朋友入门的广府经典。" },
      { name: "Rice rolls", zhName: "肠粉", note: "Cheap, soft, fast, and perfect for student mornings.", zhNote: "便宜、软滑、快速，很适合学生早上吃。" },
      { name: "Herbal tea", zhName: "凉茶", note: "A small drink that opens a door to Lingnan health culture.", zhNote: "一杯小小凉茶能打开岭南养生文化。" }
    ],
    foodAreas: [
      { name: "Old Xiguan", zhName: "西关老街区", vibe: "Traditional snacks, arcades, old houses, and Cantonese memory.", zhVibe: "传统小吃、骑楼、老房子和广府记忆集中。" },
      { name: "Tianhe", zhName: "天河", vibe: "Modern malls, international food, internships, and young office life.", zhVibe: "现代商场、国际餐、实习机会和年轻职场生活。" },
      { name: "University districts", zhName: "大学城与校园周边", vibe: "Student prices, simple meals, and easy social circles.", zhVibe: "学生价格、简单餐食和容易形成社交圈。" }
    ],
    travelScenes: [
      { name: "Pearl River night", zhName: "珠江夜景", experience: "A warm first impression of southern Chinese city life.", zhExperience: "理解南方城市生活的温暖第一印象。" },
      { name: "Old Canton walk", zhName: "广府老城步行", experience: "Best for food, architecture, and local storytelling.", zhExperience: "最适合把美食、建筑和地方故事放在一起。" },
      { name: "Bay Area weekend", zhName: "大湾区周末", experience: "Shenzhen, Zhuhai, Foshan, Hong Kong, and Macao are natural extensions.", zhExperience: "深圳、珠海、佛山、香港和澳门都是自然延展。" }
    ],
    studentTips: ["Morning tea is best with a group so everyone can share dishes.", "Try small local shops before only choosing malls.", "Guangzhou is humid, so light clothing and hydration matter."],
    zhStudentTips: ["早茶最好多人去，点心可以一起分享。", "不要只去商场，老街小店更能理解广州。", "广州湿热，轻便衣物和补水很重要。"]
  }),
  wuhan: foodGuide({
    slug: "wuhan",
    title: "Breakfast culture, rivers, lakes, and student energy",
    zhTitle: "过早文化、江河湖泊与学生能量",
    overview: "Wuhan is a city where food starts early. Hot dry noodles, doupi, soup dumplings, lotus-root soup, river fish, and night markets make it affordable and lively. The city works especially well for students because food, campuses, lakes, and public transport are closely tied together.",
    zhOverview: "武汉是一座从早餐就开始热闹的城市。热干面、豆皮、汤包、藕汤、江鱼和夜市，让它既便宜又有生命力。它特别适合学生，因为美食、校园、湖泊和公共交通联系很紧密。",
    signatureFoods: [
      { name: "Hot dry noodles", zhName: "热干面", note: "The essential Wuhan breakfast and a student budget hero.", zhNote: "武汉早餐灵魂，也是学生预算救星。" },
      { name: "Doupi", zhName: "豆皮", note: "Filling, local, and perfect before a full day of classes.", zhNote: "顶饱、本地，适合上课前吃。" },
      { name: "Lotus-root soup", zhName: "藕汤", note: "A warm Hubei dish that feels like home cooking.", zhNote: "很有湖北家常感的一道暖菜。" },
      { name: "Night-market snacks", zhName: "夜市小吃", note: "Good for group social life after study.", zhNote: "适合学习之后和朋友一起放松。" }
    ],
    foodAreas: [
      { name: "University neighborhoods", zhName: "大学周边", vibe: "Affordable, dense, and full of student food.", zhVibe: "便宜、密集，学生餐选择非常多。" },
      { name: "Jianghan Road and old Hankou", zhName: "江汉路与老汉口", vibe: "Walking, snacks, old buildings, and night life.", zhVibe: "步行、小吃、老建筑和夜生活适合组合。" },
      { name: "East Lake area", zhName: "东湖周边", vibe: "Cycling, cafes, campus scenery, and lakeside breaks.", zhVibe: "骑行、咖啡、校园风景和湖边休息。" }
    ],
    travelScenes: [
      { name: "East Lake cycling", zhName: "东湖骑行", experience: "A signature student-friendly outdoor route.", zhExperience: "非常适合学生的标志性户外路线。" },
      { name: "Yangtze River bridges", zhName: "长江大桥", experience: "Shows Wuhan's scale and central-China identity.", zhExperience: "展示武汉的尺度和中部身份。" },
      { name: "Breakfast street route", zhName: "过早街区路线", experience: "The best way to understand the city's everyday personality.", zhExperience: "理解武汉日常性格的最好方式。" }
    ],
    studentTips: ["Wake up early at least once to experience real breakfast culture.", "Wuhan is large, so choose housing near campus or metro.", "East Lake is excellent for low-cost weekends."],
    zhStudentTips: ["至少早起一次体验真正的过早文化。", "武汉很大，住宿尽量靠近学校或地铁。", "东湖是低成本周末的好选择。"]
  }),
  xian: foodGuide({
    slug: "xian",
    title: "Noodles, Muslim Quarter, city wall, and Silk Road flavor",
    zhTitle: "面食、回民街、城墙与丝路味道",
    overview: "Xi'an is one of China's best cities for students who love filling, affordable food. Noodles, roujiamo, lamb soup, biangbiang noodles, persimmon cakes, and Muslim Quarter snacks connect daily eating with Silk Road history. The city is easy to explore through food walks.",
    zhOverview: "西安是中国最适合喜欢实在、便宜美食的学生城市之一。面食、肉夹馍、羊肉泡馍、biangbiang面、柿子饼和回民街小吃，把日常吃饭和丝路历史连接起来。它很适合用美食步行来探索。",
    signatureFoods: [
      { name: "Roujiamo", zhName: "肉夹馍", note: "Portable, cheap, and iconic for student life.", zhNote: "方便、便宜，是学生生活里的标志性食物。" },
      { name: "Biangbiang noodles", zhName: "Biangbiang面", note: "Big, expressive noodles that feel like Shaanxi personality.", zhNote: "宽大、有表现力，很像陕西性格。" },
      { name: "Lamb paomo", zhName: "羊肉泡馍", note: "A slow meal that carries local ritual and warmth.", zhNote: "一顿慢慢吃的饭，有本地仪式感和温度。" },
      { name: "Persimmon cakes", zhName: "柿子饼", note: "A sweet snack to try during old-city walks.", zhNote: "逛老城时适合尝试的甜点。" }
    ],
    foodAreas: [
      { name: "Muslim Quarter", zhName: "回民街片区", vibe: "Dense snacks, evening crowds, and strong Silk Road atmosphere.", zhVibe: "小吃密集、夜间热闹，丝路氛围强。" },
      { name: "City wall area", zhName: "城墙周边", vibe: "Cycling, old streets, restaurants, and night views.", zhVibe: "骑行、老街、餐馆和夜景容易串联。" },
      { name: "University areas", zhName: "大学周边", vibe: "Noodles, budget meals, and engineering-student rhythm.", zhVibe: "面食、平价餐和工程学生节奏明显。" }
    ],
    travelScenes: [
      { name: "City wall cycling", zhName: "城墙骑行", experience: "A memorable, low-cost way to feel the old capital.", zhExperience: "低成本感受古都的经典方式。" },
      { name: "Terracotta Warriors", zhName: "兵马俑", experience: "The most powerful history route for first-time visitors.", zhExperience: "第一次来西安最有冲击力的历史路线。" },
      { name: "Food walk in old city", zhName: "老城美食步行", experience: "Turns dinner into a Silk Road cultural route.", zhExperience: "把晚餐变成丝路文化路线。" }
    ],
    studentTips: ["Xi'an is excellent for budget eating.", "Many famous foods are filling, so share portions when exploring.", "Use food walks after museum days to keep the schedule relaxed."],
    zhStudentTips: ["西安非常适合预算型吃饭。", "很多名小吃很顶饱，探索时可以多人分食。", "博物馆日之后安排美食步行，节奏会更舒服。"]
  }),
  chengdu: foodGuide({
    slug: "chengdu",
    title: "Hotpot, tea houses, pandas, parks, and slow happiness",
    zhTitle: "火锅、茶馆、熊猫、公园与慢幸福",
    overview: "Chengdu is one of the strongest food cities for attracting global students. Hotpot, chuanchuan, dan dan noodles, mapo tofu, rabbit dishes, tea houses, and street snacks make the city immediately lovable. Food is also social here: it is how students make friends, relax, and understand local warmth.",
    zhOverview: "成都是最能通过美食吸引全球学生的城市之一。火锅、串串、担担面、麻婆豆腐、兔头、茶馆和街头小吃，让城市很快变得可爱。这里的美食也是社交方式：学生通过吃饭认识朋友、放松，也理解本地的温暖。",
    signatureFoods: [
      { name: "Hotpot", zhName: "火锅", note: "The most social Chengdu meal; best with a group.", zhNote: "成都最有社交感的一顿饭，适合多人一起。" },
      { name: "Chuanchuan", zhName: "串串", note: "Casual, affordable, and very student-friendly.", zhNote: "随意、价格友好，非常适合学生。" },
      { name: "Dan dan noodles", zhName: "担担面", note: "A small bowl with big Sichuan flavor.", zhNote: "一小碗里有很强的四川味道。" },
      { name: "Tea-house snacks", zhName: "茶馆小吃", note: "A gentle way to spend an afternoon with friends.", zhNote: "和朋友消磨下午的温柔方式。" }
    ],
    foodAreas: [
      { name: "Old neighborhoods and parks", zhName: "老街区与公园", vibe: "Tea, snacks, local pace, and everyday warmth.", zhVibe: "茶、小吃、本地节奏和日常温度集中。" },
      { name: "University zones", zhName: "大学周边", vibe: "Hotpot, noodles, cafes, and student prices.", zhVibe: "火锅、面食、咖啡馆和学生价格。" },
      { name: "Taikoo Li and creative districts", zhName: "太古里与创意街区", vibe: "Modern Chengdu, fashion, coffee, and youth culture.", zhVibe: "现代成都、时尚、咖啡和青年文化。" }
    ],
    travelScenes: [
      { name: "Panda base", zhName: "熊猫基地", experience: "A globally lovable reason to visit Chengdu.", zhExperience: "让全球年轻人都容易喜欢成都的理由。" },
      { name: "Tea-house afternoon", zhName: "茶馆下午", experience: "The best way to feel Chengdu's relaxed rhythm.", zhExperience: "感受成都松弛节奏的最佳方式。" },
      { name: "Western Sichuan trips", zhName: "川西旅行", experience: "Mountains, valleys, and road trips create unforgettable long-weekend memories.", zhExperience: "山谷、公路和高原风景会制造难忘长周末。" }
    ],
    studentTips: ["Start with mild spice and increase slowly.", "Hotpot is cheaper and more fun with a group.", "Parks and tea houses are excellent low-cost social spaces."],
    zhStudentTips: ["刚来先从微辣开始，慢慢增加辣度。", "火锅多人吃更便宜也更有趣。", "公园和茶馆是低成本社交空间。"]
  }),
  nanjing: foodGuide({
    slug: "nanjing",
    title: "Duck dishes, Qinhuai nights, museums, and leafy streets",
    zhTitle: "鸭味美食、秦淮夜色、博物馆与梧桐街道",
    overview: "Nanjing's food is calm, historical, and deeply tied to daily life. Salted duck, duck blood vermicelli soup, tangbao, sesame pancakes, and Qinhuai snacks make the city feel warm without being overwhelming. It is a good city for students who like history, walking, museums, and steady routines.",
    zhOverview: "南京美食安静、有历史感，也和日常生活联系很深。盐水鸭、鸭血粉丝汤、汤包、烧饼和秦淮小吃，让城市温暖但不压迫。它适合喜欢历史、散步、博物馆和稳定生活节奏的学生。",
    signatureFoods: [
      { name: "Salted duck", zhName: "盐水鸭", note: "The city's most representative table dish.", zhNote: "南京最有代表性的餐桌味道。" },
      { name: "Duck blood vermicelli soup", zhName: "鸭血粉丝汤", note: "Affordable, warming, and easy for students.", zhNote: "便宜、热乎，很适合学生。" },
      { name: "Tangbao", zhName: "汤包", note: "A soft Jiangnan-style breakfast or snack.", zhNote: "温柔的江南式早餐或小吃。" },
      { name: "Qinhuai snacks", zhName: "秦淮小吃", note: "Best paired with evening river walks.", zhNote: "最适合和夜游秦淮河搭配。" }
    ],
    foodAreas: [
      { name: "Qinhuai River area", zhName: "秦淮河片区", vibe: "Night scenery, snacks, old streets, and visitor-friendly routes.", zhVibe: "夜景、小吃、老街和游客友好路线集中。" },
      { name: "University neighborhoods", zhName: "大学周边", vibe: "Canteens, noodles, cafes, and affordable daily meals.", zhVibe: "食堂、面馆、咖啡馆和平价日常餐。" },
      { name: "Museum and old-city areas", zhName: "博物馆与老城片区", vibe: "Good for slow walks after exhibitions.", zhVibe: "适合看展之后慢慢散步。" }
    ],
    travelScenes: [
      { name: "Nanjing Museum", zhName: "南京博物院", experience: "A strong cultural anchor for understanding the city.", zhExperience: "理解南京很重要的文化锚点。" },
      { name: "Qinhuai night walk", zhName: "秦淮夜游", experience: "A classic night route for students and visiting families.", zhExperience: "适合学生和来访家人的经典夜间路线。" },
      { name: "Plane-tree avenues", zhName: "梧桐大道", experience: "A quiet visual symbol of Nanjing's scholarly character.", zhExperience: "南京书卷气质的安静视觉符号。" }
    ],
    studentTips: ["Nanjing is good for balanced living, not extreme nightlife.", "Duck blood vermicelli soup is a budget-friendly comfort meal.", "Museums and food streets pair well in one day."],
    zhStudentTips: ["南京适合均衡生活，不是极端夜生活型城市。", "鸭血粉丝汤是预算友好的安慰餐。", "博物馆和美食街可以安排在同一天。"]
  }),
  xiamen: foodGuide({
    slug: "xiamen",
    title: "Seafood, island cafes, Fujian snacks, and coastal walks",
    zhTitle: "海鲜、海岛咖啡、福建小吃与海岸散步",
    overview: "Xiamen feels easy to love because food and scenery are close together. Students can eat seafood, satay noodles, oyster omelets, peanut soup, Fujian snacks, and then walk by the sea. It is especially attractive for students from warm coastal regions and Southeast Asia.",
    zhOverview: "厦门容易让人喜欢，因为美食和风景离得很近。学生可以吃海鲜、沙茶面、海蛎煎、花生汤、福建小吃，然后去海边散步。它对来自温暖沿海地区和东南亚的学生尤其有亲近感。",
    signatureFoods: [
      { name: "Satay noodles", zhName: "沙茶面", note: "A warm, rich bowl that feels very Xiamen.", zhNote: "一碗温暖浓郁、很有厦门味道的面。" },
      { name: "Oyster omelet", zhName: "海蛎煎", note: "A coastal snack with strong local character.", zhNote: "非常有本地感的海岸小吃。" },
      { name: "Seafood meals", zhName: "海鲜餐", note: "Best for sharing with classmates after a coastal walk.", zhNote: "海边散步后和同学分享很合适。" },
      { name: "Peanut soup", zhName: "花生汤", note: "A sweet, simple comfort food.", zhNote: "简单甜润的安慰小吃。" }
    ],
    foodAreas: [
      { name: "Gulangyu and old streets", zhName: "鼓浪屿与老街", vibe: "Island walks, snacks, music, cafes, and photos.", zhVibe: "海岛散步、小吃、音乐、咖啡和拍照。" },
      { name: "Xiamen University coast", zhName: "厦大海岸", vibe: "Campus views, seaside roads, and student-friendly food.", zhVibe: "校园景观、海边道路和学生友好餐食。" },
      { name: "Local markets", zhName: "本地市场", vibe: "More everyday, more affordable, and better for real local flavor.", zhVibe: "更日常、更便宜，也更能吃到本地味道。" }
    ],
    travelScenes: [
      { name: "Gulangyu island", zhName: "鼓浪屿", experience: "A soft, photogenic route for first-time visitors.", zhExperience: "适合第一次来厦门的柔和拍照路线。" },
      { name: "Coastal road walk", zhName: "环岛路散步", experience: "A low-cost way to feel why students like Xiamen.", zhExperience: "低成本理解学生为什么喜欢厦门。" },
      { name: "Fujian Tulou weekend", zhName: "福建土楼周末", experience: "Adds heritage and rural architecture to the coastal story.", zhExperience: "给海岸故事增加遗产和乡村建筑层次。" }
    ],
    studentTips: ["Seafood prices vary, so check menus before ordering.", "Coastal walks are free and excellent for social life.", "Xiamen is comfortable but humid; light clothes help."],
    zhStudentTips: ["海鲜价格差异大，点菜前看清菜单。", "海边散步免费，而且很适合社交。", "厦门舒适但潮湿，轻便衣物很重要。"]
  }),
  harbin: foodGuide({
    slug: "harbin",
    title: "Northeast portions, Russian-style bakeries, snow trips, and warm rooms",
    zhTitle: "东北大分量、俄式面包房、冰雪旅行与温暖室内",
    overview: "Harbin food is hearty, warming, and perfect for winter. Students can try guobaorou, stews, dumplings, Russian-style bread, red sausage, ice cream in winter, and big shared meals. The city is especially memorable because cold outdoor travel is balanced by warm indoor food.",
    zhOverview: "哈尔滨美食分量大、热乎，特别适合冬天。学生可以尝试锅包肉、炖菜、饺子、俄式面包、红肠、冬天吃冰棍和大桌聚餐。这座城市难忘的地方在于：外面冰天雪地，室内热气腾腾。",
    signatureFoods: [
      { name: "Guobaorou", zhName: "锅包肉", note: "Sweet-sour, crispy, and very northeast China.", zhNote: "酸甜酥脆，非常东北。" },
      { name: "Harbin red sausage", zhName: "哈尔滨红肠", note: "A Russian-influenced local classic.", zhNote: "带有俄式影响的本地经典。" },
      { name: "Dumplings and stews", zhName: "饺子与炖菜", note: "Best for warming group dinners.", zhNote: "最适合冬天多人热乎聚餐。" },
      { name: "Russian-style bread", zhName: "俄式面包", note: "A bakery culture students can explore on Central Street.", zhNote: "学生可以在中央大街探索的面包房文化。" }
    ],
    foodAreas: [
      { name: "Central Street", zhName: "中央大街", vibe: "Architecture, bakeries, red sausage, ice cream, and winter lights.", zhVibe: "建筑、面包房、红肠、冰棍和冬季灯光集中。" },
      { name: "University neighborhoods", zhName: "大学周边", vibe: "Big portions, affordable meals, and warm indoor social life.", zhVibe: "大分量、平价餐和温暖室内社交。" },
      { name: "Winter festival areas", zhName: "冰雪节区域", vibe: "Tourism, photos, cold-weather adventure, and hot meals after.", zhVibe: "旅游、拍照、寒冷冒险和之后的一顿热饭。" }
    ],
    travelScenes: [
      { name: "Ice and Snow World", zhName: "冰雪大世界", experience: "A spectacular winter memory for international students.", zhExperience: "国际学生很难忘的冬季视觉记忆。" },
      { name: "Central Street walk", zhName: "中央大街步行", experience: "Food, architecture, and winter city atmosphere in one route.", zhExperience: "一条路线里有美食、建筑和冬季城市气氛。" },
      { name: "Ski or snow-town weekend", zhName: "滑雪或雪乡周末", experience: "For students who want a northern China adventure.", zhExperience: "适合想体验北方中国冒险的学生。" }
    ],
    studentTips: ["Winter clothing is essential, not optional.", "Shared dishes are large, so order slowly.", "Warm cafes and bakeries are useful study and social spaces."],
    zhStudentTips: ["冬季衣物是必需品，不是可选项。", "东北菜分量大，点菜慢一点。", "温暖咖啡馆和面包房适合学习与社交。"]
  })
};

export function getCityFoodTravelGuide(slug: string) {
  return cityFoodTravelGuides[slug];
}
