export type CityExperienceGuide = {
  slug: string;
  mood: string;
  zhMood: string;
  story: string;
  zhStory: string;
  colorTags: string[];
  zhColorTags: string[];
  dayPlan: string[];
  zhDayPlan: string[];
  weekend: string[];
  zhWeekend: string[];
  socialLife: string;
  zhSocialLife: string;
  travelHook: string;
  zhTravelHook: string;
  imageIdeas: string[];
  zhImageIdeas: string[];
};

const guide = (input: CityExperienceGuide) => input;

export const cityExperienceGuides: Record<string, CityExperienceGuide> = {
  beijing: guide({
    slug: "beijing",
    mood: "Grand, academic, historic, and ambitious",
    zhMood: "宏大、学术、历史深厚，也充满雄心",
    story: "Beijing is where many students first understand China's scale. A normal week can include a top university lecture, a museum evening, a technology event, a hutong dinner, and a weekend at the Great Wall. The city rewards curious students who want to connect history, policy, research, entrepreneurship, and everyday Chinese life.",
    zhStory: "北京是很多学生第一次真正理解中国尺度的地方。普通一周里，可以有顶尖大学讲座、博物馆夜场、科技活动、胡同晚餐和长城周末。它适合好奇心强、想把历史、政策、科研、创业和中国日常生活连接起来的学生。",
    colorTags: ["Great Wall weekends", "Museum nights", "AI and policy networks", "Hutong food"],
    zhColorTags: ["长城周末", "博物馆夜场", "AI与政策网络", "胡同美食"],
    dayPlan: ["Morning campus walk in Haidian", "Afternoon museum or gallery", "Hutong dinner with classmates", "Evening talk, startup event, or language exchange"],
    zhDayPlan: ["上午在海淀校园区散步", "下午去博物馆或艺术区", "晚上和同学吃胡同小馆", "夜间参加讲座、创业活动或语言交换"],
    weekend: ["Great Wall and mountain villages", "798 Art District plus cafes", "Temple of Heaven and old-city walking route"],
    zhWeekend: ["长城与山村线路", "798艺术区与咖啡馆", "天坛和老城步行线"],
    socialLife: "Social life is diverse but spread out. Students should join campus clubs, embassy cultural events, sport groups, and language exchanges early.",
    zhSocialLife: "北京社交选择很多但空间分散，学生应该尽早加入校园社团、使馆文化活动、运动小组和语言交换。",
    travelHook: "For global students, Beijing is the most direct proof that ancient civilization and modern ambition can exist in the same subway map.",
    zhTravelHook: "对全球学生来说，北京最能证明：古老文明和现代雄心可以存在于同一张地铁图里。",
    imageIdeas: ["Great Wall", "Forbidden City roofs", "Hutong alleys", "University campus gates"],
    zhImageIdeas: ["长城", "故宫屋脊", "胡同街巷", "大学校门"]
  }),
  shanghai: guide({
    slug: "shanghai",
    mood: "Fast, polished, global, and career-facing",
    zhMood: "快速、精致、国际化、面向职业",
    story: "Shanghai feels like China's international front room. Students can move from a finance internship interview to a design exhibition, from a hospital campus to a jazz bar, from the Bund skyline to a nearby water town. It is ideal for students who want strong city services and a global rhythm.",
    zhStory: "上海像中国面向世界的客厅。学生可以从金融实习面试走到设计展，从医学校园走到爵士酒吧，从外滩天际线走到周边水乡。它适合想要成熟城市服务和国际化节奏的学生。",
    colorTags: ["The Bund", "Design districts", "Finance internships", "Water-town weekends"],
    zhColorTags: ["外滩", "设计街区", "金融实习", "水乡周末"],
    dayPlan: ["Morning metro to campus", "Lunch in a student-friendly mall or local lane", "Afternoon gallery or company visit", "Night skyline walk along the Huangpu River"],
    zhDayPlan: ["早上坐地铁去校园", "中午在学生友好商圈或弄堂吃饭", "下午看展或参访企业", "晚上沿黄浦江看天际线"],
    weekend: ["Suzhou gardens", "Hangzhou West Lake", "Creative districts and museums"],
    zhWeekend: ["苏州园林", "杭州西湖", "创意街区与博物馆"],
    socialLife: "Shanghai is easier for English-speaking newcomers than many cities, but real depth comes when students join Chinese clubs, local volunteer groups, and professional meetups.",
    zhSocialLife: "上海对英语环境的新生相对友好，但真正深入城市，需要加入中文社团、本地志愿活动和职业交流会。",
    travelHook: "Shanghai helps students show their families a China that is efficient, stylish, safe, and globally connected.",
    zhTravelHook: "上海能让学生向家人展示一个高效、时髦、安全、与全球连接的中国。",
    imageIdeas: ["Bund skyline", "Former French Concession streets", "West Bund galleries", "Metro and riverfront"],
    zhImageIdeas: ["外滩天际线", "老洋房街区", "西岸画廊", "地铁与江边"]
  }),
  hangzhou: guide({
    slug: "hangzhou",
    mood: "Beautiful, calm, digital, and poetic",
    zhMood: "美、安静、数字化、带诗意",
    story: "Hangzhou is one of the easiest cities for young people to love. West Lake gives daily beauty, tea villages slow the pace down, while internet companies and digital trade give the city strong career energy. It is a rare place where a student can study AI or business and still feel surrounded by landscape culture.",
    zhStory: "杭州是最容易让年轻人喜欢上的城市之一。西湖给日常生活提供美感，茶村让节奏慢下来，而互联网公司和数字贸易又提供强职业能量。学生可以学习AI或商科，同时被山水文化包围。",
    colorTags: ["West Lake", "Tea villages", "Digital economy", "Water towns"],
    zhColorTags: ["西湖", "茶村", "数字经济", "水乡"],
    dayPlan: ["Morning walk or bike near West Lake", "Campus study block", "Tea village afternoon", "Night market or riverside walk"],
    zhDayPlan: ["早上西湖边散步或骑行", "白天校园学习", "下午去茶村", "晚上逛夜市或江边"],
    weekend: ["Wuzhen or Xitang", "Ningbo coast", "Moganshan mountain stay"],
    zhWeekend: ["乌镇或西塘", "宁波海岸", "莫干山山居"],
    socialLife: "Hangzhou social life is softer than Shanghai: cafes, cycling groups, student clubs, startup events, and lake walks are natural ways to meet people.",
    zhSocialLife: "杭州社交比上海更柔和，咖啡馆、骑行小组、学生社团、创业活动和湖边散步都适合认识朋友。",
    travelHook: "Hangzhou proves that studying in China can be both technologically serious and emotionally beautiful.",
    zhTravelHook: "杭州证明：中国留学可以既有科技含量，也有情绪上的美。",
    imageIdeas: ["West Lake bridges", "Longjing tea fields", "Canals", "Digital economy districts"],
    zhImageIdeas: ["西湖桥", "龙井茶田", "运河", "数字经济街区"]
  }),
  guangzhou: guide({
    slug: "guangzhou",
    mood: "Warm, practical, delicious, and globally commercial",
    zhMood: "温暖、务实、好吃、商业感强",
    story: "Guangzhou is a city where students can feel trade, food, medicine, manufacturing, and southern hospitality at the same time. It is less showy than Shanghai but extremely useful: Cantonese food, old neighborhoods, hospitals, wholesale markets, and Greater Bay Area links make it a strong everyday base.",
    zhStory: "广州是一座能同时感受到贸易、美食、医学、制造业和南方人情味的城市。它没有上海那么高调，但非常实用：粤菜、老街区、医院、批发市场和大湾区连接，让它成为很强的日常 base。",
    colorTags: ["Dim sum mornings", "Pearl River nights", "Canton Fair energy", "Bay Area careers"],
    zhColorTags: ["早茶", "珠江夜景", "广交会气质", "大湾区职业"],
    dayPlan: ["Morning dim sum", "Campus or hospital visit", "Old neighborhood walk", "Pearl River night cruise"],
    zhDayPlan: ["早上喝早茶", "白天校园或医院参访", "下午老街区散步", "晚上珠江夜游"],
    weekend: ["Shenzhen tech day", "Zhuhai and Macao", "Foshan culture and food"],
    zhWeekend: ["深圳科技一日", "珠海与澳门", "佛山文化与美食"],
    socialLife: "Food is the easiest door into local life. Students can build friendships through shared meals, language exchange, sports, and business communities.",
    zhSocialLife: "美食是进入广州本地生活最容易的入口。学生可以通过聚餐、语言交换、运动和商业社群建立朋友关系。",
    travelHook: "Guangzhou shows international students a China that is open for business, generous with food, and close to Southeast Asia.",
    zhTravelHook: "广州向国际学生展示一个重商、好客、美食丰富且靠近东南亚的中国。",
    imageIdeas: ["Pearl River skyline", "Dim sum tables", "Old Xiguan streets", "Canton Tower"],
    zhImageIdeas: ["珠江天际线", "早茶餐桌", "西关老街", "广州塔"]
  }),
  wuhan: guide({
    slug: "wuhan",
    mood: "Large, student-heavy, central, and energetic",
    zhMood: "大、学生多、居中、有能量",
    story: "Wuhan is one of China's true student cities. It has huge campuses, lakes, bridges, breakfast culture, research labs, hospitals, and central high-speed rail. It is practical for students who want a big-city experience without the highest coastal prices.",
    zhStory: "武汉是真正的中国学生城市之一。这里有大型校园、湖泊、桥梁、过早文化、实验室、医院和居中的高铁网络。适合想要大城市体验但不想承担最高沿海成本的学生。",
    colorTags: ["East Lake", "Breakfast culture", "Optics Valley", "Yangtze River"],
    zhColorTags: ["东湖", "过早文化", "光谷", "长江"],
    dayPlan: ["Breakfast street experience", "Campus and lab area", "East Lake cycling", "Yangtze River bridge sunset"],
    zhDayPlan: ["早上体验过早", "白天校园与实验室区", "下午东湖骑行", "傍晚看长江大桥"],
    weekend: ["Wudang Mountains", "Yichang and Three Gorges", "Changsha by rail"],
    zhWeekend: ["武当山", "宜昌与三峡", "高铁去长沙"],
    socialLife: "Because the student population is huge, Wuhan is strong for clubs, sports, music, language exchange, and affordable group activities.",
    zhSocialLife: "因为学生人口巨大，武汉在社团、运动、音乐、语言交换和低成本集体活动方面很强。",
    travelHook: "Wuhan makes China feel young, busy, affordable, and connected in every direction.",
    zhTravelHook: "武汉让中国显得年轻、热闹、可负担，并且通向四面八方。",
    imageIdeas: ["East Lake", "Yangtze bridge", "University cherry blossoms", "Breakfast streets"],
    zhImageIdeas: ["东湖", "长江大桥", "大学樱花", "早餐街"]
  }),
  xian: guide({
    slug: "xian",
    mood: "Ancient, grounded, affordable, and engineering-minded",
    zhMood: "古老、扎实、成本友好、工程气质强",
    story: "Xi'an is where students can feel that China is both ancient and future-facing. The city wall, Terracotta Warriors, Muslim Quarter, aerospace industry, electronics, and engineering universities create a powerful identity at a more manageable cost than first-tier coastal cities.",
    zhStory: "西安能让学生感受到：中国既古老，也面向未来。城墙、兵马俑、回民街、航天产业、电子产业和工程强校，在比一线沿海城市更友好的成本下形成强烈身份。",
    colorTags: ["City wall cycling", "Terracotta Warriors", "Muslim Quarter", "Aerospace"],
    zhColorTags: ["城墙骑行", "兵马俑", "回民街", "航天"],
    dayPlan: ["Morning campus and lab visit", "Afternoon city wall cycling", "Muslim Quarter food evening", "Night view around old city gates"],
    zhDayPlan: ["上午校园与实验室参访", "下午城墙骑行", "晚上回民街美食", "夜间看古城门"],
    weekend: ["Terracotta Warriors", "Huashan mountain", "Silk Road museum route"],
    zhWeekend: ["兵马俑", "华山", "丝路博物馆路线"],
    socialLife: "Xi'an is friendly to students who like food, history, engineering communities, and lower-cost hangouts.",
    zhSocialLife: "西安适合喜欢美食、历史、工程社群和低成本聚会的学生。",
    travelHook: "Xi'an is one of the strongest cities for making foreign students feel the depth of Chinese civilization.",
    zhTravelHook: "西安是最能让外国学生感受到中华文明厚度的城市之一。",
    imageIdeas: ["Ancient city wall", "Terracotta Warriors", "Muslim Quarter food", "University campuses"],
    zhImageIdeas: ["古城墙", "兵马俑", "回民街美食", "大学校园"]
  }),
  chengdu: guide({
    slug: "chengdu",
    mood: "Relaxed, tasty, friendly, and creative",
    zhMood: "松弛、好吃、友好、有创造力",
    story: "Chengdu has a rare emotional advantage: students feel welcomed quickly. Tea houses, hotpot, pandas, music, parks, software parks, hospitals, and western Sichuan travel routes make the city both comfortable and exciting.",
    zhStory: "成都有一种很少见的情绪优势：学生会很快感到被欢迎。茶馆、火锅、熊猫、音乐、公园、软件园、医院和川西旅行路线，让这座城市既舒服又让人兴奋。",
    colorTags: ["Tea houses", "Hotpot", "Pandas", "Western Sichuan trips"],
    zhColorTags: ["茶馆", "火锅", "熊猫", "川西旅行"],
    dayPlan: ["Morning park and tea", "Campus study", "Panda or museum afternoon", "Hotpot and music night"],
    zhDayPlan: ["上午公园喝茶", "白天校园学习", "下午熊猫或博物馆", "晚上火锅与音乐"],
    weekend: ["Dujiangyan and Qingcheng Mountain", "Jiuzhaigou long trip", "Western Sichuan road route"],
    zhWeekend: ["都江堰与青城山", "九寨沟长线", "川西公路旅行"],
    socialLife: "Chengdu is strong for low-pressure friendship: food tables, cafes, board games, music venues, parks, and language exchange feel natural.",
    zhSocialLife: "成都很适合低压力交朋友：饭桌、咖啡馆、桌游、音乐现场、公园和语言交换都很自然。",
    travelHook: "Chengdu can make students fall in love with China through warmth before they even talk about rankings.",
    zhTravelHook: "成都可以先用温暖让学生爱上中国，然后再谈排名。",
    imageIdeas: ["Tea houses", "Panda base", "Hotpot table", "Chengdu parks"],
    zhImageIdeas: ["茶馆", "熊猫基地", "火锅餐桌", "成都公园"]
  }),
  nanjing: guide({
    slug: "nanjing",
    mood: "Historic, scholarly, green, and balanced",
    zhMood: "历史深、书卷气、绿色、均衡",
    story: "Nanjing gives students a balanced version of China: major universities, old capital history, leafy streets, museums, riverside life, and access to Shanghai and Suzhou. It feels serious without being overwhelming.",
    zhStory: "南京给学生一种很均衡的中国体验：强校、古都历史、梧桐街道、博物馆、江边生活，以及通往上海和苏州的便利。它很有学术和历史气质，但不至于压迫。",
    colorTags: ["Museums", "Plane-tree streets", "Yangtze River", "History and research"],
    zhColorTags: ["博物馆", "梧桐街道", "长江", "历史与科研"],
    dayPlan: ["Campus morning", "Museum afternoon", "Old street dinner", "Riverside walk at night"],
    zhDayPlan: ["上午校园", "下午博物馆", "晚上老街吃饭", "夜间江边散步"],
    weekend: ["Suzhou gardens", "Shanghai day trip", "Yangzhou food and canals"],
    zhWeekend: ["苏州园林", "上海一日", "扬州美食与运河"],
    socialLife: "Nanjing is comfortable for students who like reading, walking, museums, student clubs, and calmer social circles.",
    zhSocialLife: "南京适合喜欢阅读、散步、博物馆、学生社团和相对安静社交圈的学生。",
    travelHook: "Nanjing helps students understand China's modern history and university culture without losing daily comfort.",
    zhTravelHook: "南京能让学生在舒适生活中理解中国近现代历史和大学文化。",
    imageIdeas: ["City wall", "Museums", "Plane-tree avenues", "Qinhuai River"],
    zhImageIdeas: ["城墙", "博物馆", "梧桐大道", "秦淮河"]
  }),
  xiamen: guide({
    slug: "xiamen",
    mood: "Coastal, relaxed, warm, and Southeast-Asia-facing",
    zhMood: "沿海、松弛、温暖、面向东南亚",
    story: "Xiamen is one of China's most comfortable student cities for people who love the sea. It offers island streets, university scenery, cafes, music, coastal walks, and Fujian culture, while keeping strong links to Southeast Asia and maritime business.",
    zhStory: "厦门是中国最适合喜欢海的学生城市之一。这里有海岛街巷、大学风景、咖啡馆、音乐、海岸步道和福建文化，同时与东南亚和海洋商业保持紧密联系。",
    colorTags: ["Island walks", "Gulangyu", "Coastal campus", "Fujian food"],
    zhColorTags: ["海岛散步", "鼓浪屿", "沿海校园", "福建美食"],
    dayPlan: ["Campus and coast morning", "Cafe or language study afternoon", "Gulangyu or old street walk", "Seafood dinner"],
    zhDayPlan: ["上午校园与海岸", "下午咖啡馆或语言学习", "傍晚鼓浪屿或老街", "晚上吃海鲜"],
    weekend: ["Fujian Tulou", "Fuzhou", "Quanzhou heritage route"],
    zhWeekend: ["福建土楼", "福州", "泉州遗产线路"],
    socialLife: "Xiamen is good for slower friendships: cafes, beach walks, music, photography groups, and international student circles.",
    zhSocialLife: "厦门适合慢一点建立友谊：咖啡馆、海边散步、音乐、摄影小组和国际学生圈都很自然。",
    travelHook: "Xiamen shows a softer coastal China that can feel familiar to students from Southeast Asia.",
    zhTravelHook: "厦门展示的是更柔和的海岸中国，对东南亚学生尤其容易产生亲近感。",
    imageIdeas: ["Gulangyu", "Xiamen University coast", "Seaside roads", "Fujian old streets"],
    zhImageIdeas: ["鼓浪屿", "厦大海岸", "环海路", "福建老街"]
  }),
  tianjin: guide({
    slug: "tianjin",
    mood: "Port-city, humorous, affordable, and Beijing-connected",
    zhMood: "港口气质、幽默、成本友好、连接北京",
    story: "Tianjin is a clever choice for students who want northern China without Beijing's full pressure. It has riverfront life, historic architecture, engineering universities, port logistics, and a famously direct local humor.",
    zhStory: "天津适合想要华北资源、但不想承受北京全部压力的学生。这里有海河生活、历史建筑、工程高校、港口物流，还有非常直接幽默的本地气质。",
    colorTags: ["Haihe River", "Port economy", "Beijing rail", "Street snacks"],
    zhColorTags: ["海河", "港口经济", "京津高铁", "街头小吃"],
    dayPlan: ["Morning campus", "Historic street walk", "Riverfront evening", "Local snack night"],
    zhDayPlan: ["上午校园", "下午历史街区散步", "傍晚海河边", "晚上本地小吃"],
    weekend: ["Beijing museums", "Qinhuangdao coast", "Hebei Great Wall routes"],
    zhWeekend: ["北京博物馆", "秦皇岛海岸", "河北长城线路"],
    socialLife: "Tianjin is easier when students enjoy local humor, food markets, sports, and smaller friend groups.",
    zhSocialLife: "天津适合喜欢本地幽默、美食市场、运动和小型朋友圈的学生。",
    travelHook: "Tianjin is a value-friendly northern base that still keeps Beijing close.",
    zhTravelHook: "天津是成本更友好的北方 base，同时又把北京放得很近。",
    imageIdeas: ["Haihe River", "Historic European-style streets", "University gates", "Port scenes"],
    zhImageIdeas: ["海河", "欧式历史街区", "大学校门", "港口场景"]
  }),
  harbin: guide({
    slug: "harbin",
    mood: "Snowy, bold, engineering-focused, and cinematic",
    zhMood: "冰雪感强、大气、工程气质、很有电影感",
    story: "Harbin is unforgettable in winter. Ice festivals, Russian-style streets, strong engineering universities, aerospace culture, and lower living costs make it attractive for students who want a very different China experience.",
    zhStory: "哈尔滨的冬天很难忘。冰雪节、俄式街区、强工程高校、航天文化和较低生活成本，让它适合想体验完全不同中国的学生。",
    colorTags: ["Ice Festival", "Engineering", "Russian-style streets", "Winter travel"],
    zhColorTags: ["冰雪节", "工程", "俄式街区", "冬季旅行"],
    dayPlan: ["Campus morning", "Central Street walk", "Local food and bakery stop", "Winter lights or riverside night"],
    zhDayPlan: ["上午校园", "下午中央大街", "本地餐馆和面包房", "夜间看冰雪灯光或江边"],
    weekend: ["Ice and Snow World", "Yabuli ski route", "Northeast forest and snow towns"],
    zhWeekend: ["冰雪大世界", "亚布力滑雪", "东北森林与雪乡线路"],
    socialLife: "Harbin friendships often form through warm indoor spaces: cafeterias, labs, winter sports groups, dorm gatherings, and food.",
    zhSocialLife: "哈尔滨的友谊常常在温暖室内空间形成：食堂、实验室、冬季运动小组、宿舍聚会和饭桌。",
    travelHook: "Harbin lets students discover that China also has a powerful northern winter personality.",
    zhTravelHook: "哈尔滨让学生发现：中国也有非常鲜明的北方冬季性格。",
    imageIdeas: ["Ice sculptures", "Central Street", "Snow campus", "Engineering labs"],
    zhImageIdeas: ["冰雕", "中央大街", "雪中校园", "工程实验室"]
  })
};

export function getCityExperienceGuide(slug: string) {
  return cityExperienceGuides[slug];
}
