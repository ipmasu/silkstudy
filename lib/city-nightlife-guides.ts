export type CityNightlifeVenue = {
  name: string;
  zhName: string;
  area?: string;
  zhArea?: string;
  price?: string;
  zhPrice?: string;
  hours?: string;
  zhHours?: string;
  highlight: string;
  zhHighlight: string;
};

export type CityNightlifeGuide = {
  slug: string;
  title: string;
  zhTitle: string;
  intro: string;
  zhIntro: string;
  note: string;
  zhNote: string;
  venues: CityNightlifeVenue[];
};

const guide = (input: CityNightlifeGuide) => input;

export const cityNightlifeGuides: Record<string, CityNightlifeGuide> = {
  chengdu: guide({
    slug: "chengdu",
    title: "Chengdu Bars, Lounges, and Clubs for Student Nights",
    zhTitle: "成都酒吧、清吧与夜店推荐",
    intro: "Chengdu's nightlife can be relaxed, stylish, affordable, or high-energy. Students can choose from Chinese-style cocktail bars, craft beer rooms, Taikoo Li terraces, IFS hotel lounges, Lan Kwai Fong, and panda-themed clubs.",
    zhIntro: "成都夜生活可以很松弛、很精致、很实惠，也可以很高能。学生可以从国风鸡尾酒、精酿小馆、太古里露台、IFS酒店酒廊、兰桂坊和国潮夜店中选择。",
    note: "Prices and opening hours may change. Check current listings before going.",
    zhNote: "人均消费与营业时间可能变化，实际到店前建议再通过平台确认。",
    venues: [
      { name: "Chinese Room", zhName: "夜鹃 Chinese Room", area: "Qinglian Shang Street", zhArea: "青莲上街68号", price: "About ¥123", zhPrice: "人均约¥123", hours: "19:30-02:00", zhHours: "19:30-02:00", highlight: "A 2026 China Top 50 bar with a fantasy Chinese theme and a cocktail menu built around the twelve traditional time periods.", zhHighlight: "2026中国50酒吧，奇幻国风主题，酒单采用“十二时辰”概念，暖光与复古插画很适合慢慢坐。" },
      { name: "MEDISN", zhName: "MEDISN·葯廠", area: "Yulin West Road", zhArea: "玉林西路165号附25号", highlight: "Craft beer-focused venue with tattoo-like visual design and many imported or niche brewery selections.", zhHighlight: "精酿啤酒氛围强，纹身设计感明显，酒款以外國廠牌尖货为主。" },
      { name: "Ralph's Bar Taikoo Li", zhName: "Ralph's Bar（太古里店）", area: "Sino-Ocean Taikoo Li", zhArea: "中纱帽街8号远洋太古里2224B三楼", highlight: "American vintage style by Ralph Lauren, with a terrace overlooking Taikoo Li and a hidden cigar-bar feel.", zhHighlight: "Ralph Lauren旗下美式复古酒吧，露台可俯瞰太古里，暗门机关可进入私密雪茄吧。" },
      { name: "The Bar at IFS", zhName: "酒廊 The Bar（IFS国际金融中心店）", area: "Niccolo Chengdu, IFS", zhArea: "红星路三段1号IFS尼依格罗酒店三楼", highlight: "Known for classic cocktails and a terrace overlooking Chengdu's night skyline.", zhHighlight: "以经典鸡尾酒闻名，露台可饱览都市夜景。" },
      { name: "Wizar Bar", zhName: "Wizar Bar", area: "Jingronghui", zhArea: "下东大街99号晶融汇1楼", price: "About ¥124", zhPrice: "人均约¥124", hours: "15:00-02:00", zhHours: "15:00-02:00", highlight: "Convenient downtown bar for afternoon-to-late-night drinks.", zhHighlight: "市中心便利清吧，下午到深夜都适合小聚。" },
      { name: "Lan Kwai Fong Chengdu", zhName: "成都兰桂坊酒吧", price: "About ¥86", zhPrice: "人均约¥86", hours: "19:30-06:00", zhHours: "19:30-06:00", highlight: "Classic Chengdu nightlife zone with late hours and many venue choices.", zhHighlight: "成都经典夜生活区域，营业到很晚，适合想集中选择酒吧的学生。" },
      { name: "OROCHI", zhName: "OROCHI双舞台夜店", highlight: "Dance performances usually start after 22:00 and become more energetic after 01:00.", zhHighlight: "表演约晚上10点后开始，男团女团热舞暖场，凌晨1点后气氛更高。" },
      { name: "Panda Club", zhName: "熊猫酒吧/Panda Club", area: "Chengdu 339", zhArea: "成都339广场、熊猫电视塔旁", highlight: "Large guochao-style club near the Panda TV Tower, with about 1,400 square meters of space.", zhHighlight: "中国西南国潮夜店代表，位于339广场、熊猫电视塔旁，空间大、视觉强。" },
      { name: "Shiwanjing Bar", zhName: "十万鲸酒吧", price: "Student sets about ¥30-50", zhPrice: "学生党小聚套餐约人均¥30-50", highlight: "Budget-friendly small-group option, with regular cocktails from around ¥58.", zhHighlight: "适合学生小聚，套餐约人均30-50元，常规鸡尾酒单杯58元起。" }
    ]
  }),
  chongqing: guide({
    slug: "chongqing",
    title: "Chongqing Jiujie Clubs, Cocktail Bars, and River-View Nights",
    zhTitle: "重庆九街夜店、鸡尾酒吧与夜景酒馆",
    intro: "Chongqing nightlife is visual and intense: red-brick bunker clubs, Jiujie dance floors, western-themed cocktail rooms, high-energy LED stages, affordable bistros, and Nanshan night-view bars.",
    zhIntro: "重庆夜生活很有画面感：红砖地堡、九街舞池、西部牛仔主题鸡尾酒、LED高能夜店、性价比餐酒吧和南山夜景酒馆都很有辨识度。",
    note: "Confirm queue rules, minimum spend, and transport before late-night visits.",
    zhNote: "夜间出行建议提前确认排队、低消、打车与返程安排。",
    venues: [
      { name: "ORANGUTAN Bunker Jiujie", zhName: "猩猩地堡酒吧/ORANGUTAN Bunker（九街店）", area: "Jiujie, Jiangbei", zhArea: "江北区北城天街48号九街东区2楼", highlight: "Red-brick bunker design inspired by wartime shelters, now a Jiujie landmark.", zhHighlight: "全红砖设计，高度还原庇护所风格，是重庆九街新地标。" },
      { name: "ESMI NIGHT CLUB Jiangbei", zhName: "ESMI NIGHT CLUB（江北店）", area: "Liyuchi, Jiangbei", zhArea: "重庆鲤鱼池三村42号", highlight: "Strong visual performances and high-energy music for a full club-night experience.", zhHighlight: "花式表演和劲爆音律，适合想体验强氛围夜店的学生。" },
      { name: "Canyon Cocktail", zhName: "Canyon Cocktail 峡谷镇（重庆店）", area: "Beicheng Tianjie", zhArea: "北城天街46号", highlight: "Western-cowboy theme with detailed decor and DJ sets.", zhHighlight: "西部牛仔主题，装修别致，DJ打歌氛围好。" },
      { name: "TEETHGOLD Jiujie", zhName: "TEETHGOLD两颗金牙（九街店）", area: "Beicheng Tianjie", zhArea: "北城天街40号2幢22-2号", highlight: "Colorful lights, strong DJ control, and a fashionable crowd.", zhHighlight: "俊男美女聚集，灯光炫彩，DJ控场能力强。" },
      { name: "BOOMSHAKE Chongqing", zhName: "BOOMSHAKE（重庆店）", area: "Guanyinqiao", zhArea: "观音桥北城天街38号万汇乐奇世界1层", highlight: "LED ceiling design and high-energy rhythms.", zhHighlight: "LED天花板设计新颖，高能量旋律燃翻全场。" },
      { name: "Laputa Bistro Bar", zhName: "Laputa餐酒吧", price: "About ¥86", zhPrice: "人均约¥86", highlight: "A cost-effective bistro option for groups.", zhHighlight: "性价比高，适合多人聚会。" },
      { name: "Denghuang World Tavern", zhName: "灯晃世界酒馆", area: "Hengda Zhongyu Plaza", zhArea: "红锦大道100号恒大中渝广场L1层", price: "About ¥83", zhPrice: "人均约¥83", hours: "10:00-02:00", zhHours: "10:00-02:00", highlight: "Long opening hours and easy casual drinks.", zhHighlight: "营业时间长，适合日间到夜间的轻松小聚。" },
      { name: "Nanshan Bistro Bar", zhName: "南山餐酒吧", area: "Nanshan One Tree Viewing Deck", zhArea: "南山一棵树观景台", highlight: "One of the best bar routes for Chongqing night views.", zhHighlight: "坐拥重庆夜景视野，适合把城市夜景和小酌结合。" }
    ]
  }),
  guangzhou: guide({
    slug: "guangzhou",
    title: "Guangzhou Rooftop Bars, Dongshankou Drinks, and Craft-Beer Routes",
    zhTitle: "广州高空酒吧、东山口清吧与精酿路线",
    intro: "Guangzhou nightlife ranges from Pearl River skyline bars to Dongshankou neighborhood drinks, club nights, Liuyun community bar-hopping, and affordable craft beer.",
    zhIntro: "广州夜生活从珠江新城高空酒吧、东山口清吧，到越秀Club、六运小区串吧和实惠精酿都有，适合不同预算和性格。",
    note: "High-rise bars can be pricier; neighborhood bars are better for student budgets.",
    zhNote: "高空酒吧消费可能较高，学生预算可优先选择东山口、六运小区和精酿小店。",
    venues: [
      { name: "The Bar at Park Hyatt Guangzhou", zhName: "广州柏悦酒店·悦吧（顶楼露天酒吧）", area: "70F, Park Hyatt Guangzhou", zhArea: "珠江新城华夏路16号广州柏悦酒店70层", price: "About ¥236", zhPrice: "人均约¥236", hours: "18:00-01:00", zhHours: "18:00-01:00", highlight: "Asia Top 50-style rooftop experience overlooking Canton Tower.", zhHighlight: "2026亚洲50酒吧榜，高空俯瞰广州塔夜景。" },
      { name: "Miaoqian Ice Room Dongshankou", zhName: "庙前冰室（东山口店）", area: "Dongshankou", zhArea: "庙前西街58号", price: "About ¥80", zhPrice: "人均约¥80", hours: "19:00-02:00", zhHours: "19:00-凌晨02:00", highlight: "Neighborhood bar for a slower Dongshankou evening.", zhHighlight: "东山口氛围清吧，适合慢节奏聊天。" },
      { name: "Denglong Club", zhName: "灯龙Club", area: "Yuexiu", zhArea: "越秀区恒福路18号", price: "About ¥85", zhPrice: "人均约¥85", hours: "20:00-04:00", zhHours: "20:00-凌晨4:00", highlight: "Club with view seats, outdoor seating, and private rooms.", zhHighlight: "设有景观位、露天位及包厢。" },
      { name: "Liuyun Neighborhood Bars", zhName: "六运小区酒吧群", highlight: "Six distinctive bars within a 10-minute walking loop, with some drinks around ¥20+.", zhHighlight: "10分钟步行圈串联多家特色酒吧，人均20多元也能体验不同风格调酒。" },
      { name: "Guangzhou Craft Beer Route", zhName: "广州精酿酒吧", price: "About ¥50-120", zhPrice: "人均约¥50-120", highlight: "Craft beer can be very affordable in casual venues, while Zhujiang New Town high-rise bars may cost more.", zhHighlight: "精酿小店可压到50元以下，珠江新城高空酒吧可能破百。" }
    ]
  }),
  nanchang: guide({
    slug: "nanchang",
    title: "Nanchang Honggutan Cocktail Bars and Minde Road Nights",
    zhTitle: "南昌红谷滩鸡尾酒吧与民德路夜生活",
    intro: "Nanchang's nightlife is more varied than many students expect: space-themed whisky bars, live-music craft beer rooms, French vintage cocktail spaces, speakeasy photo spots, and Minde Road bar-hopping.",
    zhIntro: "南昌夜生活比很多学生想象更丰富：太空主题威士忌、精酿音乐现场、法式复古鸡尾酒、隐藏式打卡酒吧和民德路酒吧街都能组合起来。",
    note: "Use ride-hailing for late-night returns and check venue updates before going.",
    zhNote: "夜间返程建议打车，部分店铺信息建议出发前再确认。",
    venues: [
      { name: "Bar Specials Whisky & Cocktail", zhName: "Bar Specials Whisky&Cocktail（红谷滩联泰店）", area: "Honggutan", zhArea: "世贸路699号联泰时代广场1幢310室", highlight: "Space-themed bar with whisky, many cocktails, and photogenic floor-to-ceiling windows.", zhHighlight: "太空主题酒吧，威士忌齐全，鸡尾酒种类多，大落地窗很出片。" },
      { name: "PIKE Live Music", zhName: "啤客走廊PIKE•音乐现场（万寿宫店）", area: "Wanshougong", zhArea: "山路708号", highlight: "Craft beer, live singers, and consistently good background music.", zhHighlight: "精酿啤酒选择多，驻唱好听，BGM品味在线。" },
      { name: "North Island Cocktail & Whisky", zhName: "北岛Cocktail&Whisky Bar（红谷滩店）", area: "Honggutan", zhArea: "飞虹路盛世洪城小区", highlight: "French vintage tent-like style with bronze Venus decor, good for photos.", zhHighlight: "法式复古风，帐篷式空间和铜色维纳斯装饰，适合拍照。" },
      { name: "MAO Speakeasy", zhName: "MAO SPEAKEASY隐藏式bar（红谷滩店）", area: "Honggutan", zhArea: "红谷中大道1996号世茂天城铂豪戴斯酒店旁", highlight: "Hidden bar entered through a barber-shop-style cabinet, with costume photo check-ins.", zhHighlight: "隐藏式酒吧，推开伪装成理发店的橱柜进入，还提供免费换装打卡。" },
      { name: "Minde Road Bar Street", zhName: "民德路酒吧一条街", highlight: "Known Nanchang bar street with multiple small venues and Chinese-style cocktails.", zhHighlight: "南昌知名酒吧街，汇集多家宝藏酒馆，云顶spring等中式风格店适合串吧。" }
    ]
  }),
  xiamen: guide({
    slug: "xiamen",
    title: "Xiamen Sea-View Lounges, Jazz Bars, and Sunset Music",
    zhTitle: "厦门海景酒廊、爵士酒馆与落日音乐",
    intro: "Xiamen nightlife is coastal and romantic: twin-tower skyline bars, live jazz, sunset music by the sea, Zhongshan Road cocktails, underground cocktail rooms, and budget-friendly music bars around Zengcuoan.",
    zhIntro: "厦门夜生活是滨海和浪漫的：双子塔高空酒廊、爵士驻场、海边落日音乐、中山路鸡尾酒、地下清吧和曾厝垵实惠音乐酒吧都很适合年轻人。",
    note: "Sea-view venues are weather-sensitive; check sunset time and reservations.",
    zhNote: "海景和落日类场所受天气影响，建议提前看天气、日落时间和预约情况。",
    venues: [
      { name: "Fly Up Sky Lounge", zhName: "Fly up天空酒廊（海景双子塔店）", area: "Shimao Strait Towers", zhArea: "演武西路180号世茂海峡大厦A塔60楼6001", highlight: "Cloud-level view over Xiamen night scenery with a constellation theme.", zhHighlight: "置身云端俯瞰厦门夜景，星座主题神秘浪漫。" },
      { name: "Midai Jazz Tavern", zhName: "迷待爵士酒馆", area: "Lianyue Road", zhArea: "莲岳路221号筼筜天虹场1层1031室", price: "About ¥100-150", zhPrice: "人均约¥100-150", hours: "21:30-00:30 live jazz", zhHours: "每晚21:30-00:30爵士驻场", highlight: "Professional jazz band every night, with a Saturday jazz-bus activity.", zhHighlight: "每晚专业爵士乐队驻场，周六还有“爵士巴士”活动。" },
      { name: "Sea U Sunset Music", zhName: "Sea U海云餐酒吧·落日音乐会", area: "Huandao South Road", zhArea: "思明区环岛南路256-2号", price: "About ¥66", zhPrice: "人均约¥66", highlight: "Romantic seaside sunset music venue.", zhHighlight: "海边落日音乐会，氛围浪漫。" },
      { name: "Dream BAR", zhName: "梦BAR·驻唱歌手音乐酒吧", area: "Zhongshan Road", zhArea: "中山路步行街73号", highlight: "Live singers and photogenic cocktails such as plum-flavored and ocean-themed drinks.", zhHighlight: "驻唱歌手音乐酒吧，高颜值鸡尾酒适合拍照。" },
      { name: "MY WAY Cocktail Bar", zhName: "MY WAY地下鸡尾酒吧", area: "Zhonghua Street", zhArea: "中华街道释仔街99-2-101", highlight: "European-American basement-style cocktail bar with classic drinks.", zhHighlight: "欧美地下室风格清吧，酒单经典款丰富。" },
      { name: "Xiayu Music Bar", zhName: "厦遇音乐酒吧（曾厝垵）", price: "Under ¥50", zhPrice: "人均不到¥50", highlight: "Music under the stars with cold drinks, good for budget evenings.", zhHighlight: "星空下听音乐，冰爽酒水搭配动人音乐，预算友好。" }
    ]
  }),
  beijing: guide({
    slug: "beijing",
    title: "Beijing Gongti Clubs, Houhai Bars, and Value Craft-Beer Picks",
    zhTitle: "北京工体夜店、后海酒吧与性价比精酿",
    intro: "Beijing nightlife is wide-ranging: Gongti clubs, CBD lounges, Houhai casual bars, Sanlitun craft beer and wine, and value routes without table fees or hidden costs.",
    zhIntro: "北京夜生活跨度很大：工体夜店、CBD酒廊、后海清吧、三里屯精酿葡萄酒，以及无开台费、无强制低消的性价比路线都可以选择。",
    note: "Large clubs can be crowded. Students should check entry rules and return transport.",
    zhNote: "大型夜店人流较多，学生应提前确认入场规则、低消和返程交通。",
    venues: [
      { name: "Supermiami", zhName: "Supermiami超级迈阿密酒吧", area: "Workers' Stadium", zhArea: "工人体育场", highlight: "One of the largest Gongti bar-street venues, with a large dance floor.", zhHighlight: "工体酒吧街规模较大，拥有全工体很有辨识度的舞池。" },
      { name: "SIR.TEEN CLUB", zhName: "十三先生酒吧/SIR.TEEN CLUB", area: "Gongti West Road", zhArea: "朝阳区工人体育场西路6号二层", highlight: "Club brand emphasizing art, culture, craft, and entertainment.", zhHighlight: "CLUB领先品牌，强调艺术、文化、匠心、娱乐理念。" },
      { name: "CLUB ME", zhName: "CLUB ME", area: "Yintai Center", zhArea: "建国路银泰中心A座6层", price: "About ¥342", zhPrice: "人均约¥342", highlight: "CBD club/lounge option for a higher-budget night.", zhHighlight: "CBD区域较高预算夜生活选择。" },
      { name: "July 7 Sunny Bar Houhai", zhName: "七月七日晴酒吧（后海店）", area: "Houhai", zhArea: "西城区后海南沿乙10号", price: "About ¥84", zhPrice: "人均约¥84", highlight: "Casual Houhai option for relaxed drinks by the water.", zhHighlight: "后海轻松小酌选择，适合水边聊天。" },
      { name: "Fugeer Craft Beer & Wine", zhName: "福嗝er精酿·葡萄酒（三里屯）", highlight: "Budget-friendly drinks from around ¥45 and snacks around ¥20+.", zhHighlight: "45元/杯酒加20多元小食，适合学生预算；下酒小食口碑好。" },
      { name: "Beijing Value Bar Route", zhName: "北京性价比酒吧TOP10", price: "About ¥70-130", zhPrice: "约¥70-130可玩一晚", highlight: "No table fee, no forced minimum, beer around ¥15-40 and cocktails around ¥50-80 in selected venues.", zhHighlight: "无开台费、无强制低消、无隐形消费，啤酒15-40元、特调50-80元左右。" }
    ]
  }),
  xian: guide({
    slug: "xian",
    title: "Xi'an Hip-Hop Clubs, Live Shows, and City-Wall Bars",
    zhTitle: "西安Hip-Hop夜店、Live Show与城墙边酒吧",
    intro: "Xi'an nightlife links old city walls with hip-hop clubs, Qujiang live venues, jazz bars, and many smaller bars around the old city.",
    zhIntro: "西安夜生活把古城墙和年轻音乐放在一起：Hip-Hop夜店、曲江Live、爵士酒吧、老城根酒吧和城墙附近小酒馆都值得列入路线。",
    note: "Some venues change address or event schedules; check current listings.",
    zhNote: "部分场所地址和演出日程可能变化，建议出发前确认。",
    venues: [
      { name: "ORANGUTAN BUNKER", zhName: "猩猩地堡酒吧/ORANGUTAN BUNKER", area: "Xi'an", zhArea: "西安市（具体地址可查询）", highlight: "Hip-hop-based bar popular with stylish young crowds.", zhHighlight: "HIP-HOP基调酒吧，西安潮男潮女聚集地。" },
      { name: "FANTASY CLUB", zhName: "范特西酒吧/FANTASY CLUB", area: "Beilin", zhArea: "碑林区南大街46号福康大厦二楼", highlight: "Central club option near the old city.", zhHighlight: "位于碑林区南大街，适合老城夜生活路线。" },
      { name: "Kongpingzi LIVE SHOW", zhName: "空瓶子LIVE SHOW", area: "Qujiang", zhArea: "雁塔区雁南一路659号曲江海港城9街5号", highlight: "Live-show venue in Qujiang for music-oriented nights.", zhHighlight: "曲江Live Show空间，适合想听现场的学生。" },
      { name: "Laochenggen Bar", zhName: "老城根酒吧", area: "Yuxiangmen", zhArea: "青年路街道玉祥门外南侧环城公园", price: "About ¥181", zhPrice: "人均约¥181", hours: "19:00-02:00", zhHours: "19:00-02:00", highlight: "Bar near the old city-wall park, good for combining night walks and drinks.", zhHighlight: "靠近环城公园，适合把城墙夜游和小酌结合。" },
      { name: "Meeting Jazz Bar", zhName: "Meeting Jazz Bar", area: "Zhuquemen", zhArea: "朱雀门里顺城南路西段20米2F", price: "About ¥90", zhPrice: "人均约¥90", hours: "19:30-02:00", zhHours: "19:30-02:00", highlight: "Jazz choice for students who prefer music and conversation.", zhHighlight: "适合喜欢爵士、聊天和慢节奏夜晚的学生。" },
      { name: "City-Wall Bar Route", zhName: "城墙附近酒吧群", highlight: "Qujiang has many bars, while the old city and city-wall area offer smaller venues such as Bar Takefive.", zhHighlight: "曲江新区聚集大量酒吧，老城区尤其城墙附近也有许多小酒馆。" }
    ]
  }),
  harbin: guide({
    slug: "harbin",
    title: "Harbin LiveHouse, Red-Brick Bars, and Electronic Nights",
    zhTitle: "哈尔滨LiveHouse、红砖酒吧与电音夜场",
    intro: "Harbin nightlife works especially well in renovated industrial spaces, livehouses, red-brick bars, performance venues, and electronic-music clubs.",
    zhIntro: "哈尔滨夜生活很适合放在工业改造空间、LiveHouse、红砖酒吧、演艺酒吧和电音工厂里体验。",
    note: "Winter weather can affect late-night transport. Plan return routes early.",
    zhNote: "冬季夜间出行受天气影响较大，建议提前安排返程。",
    venues: [
      { name: "TIMES LiveHouse", zhName: "TIMES LiveHouse（西城红场店）", area: "Xicheng Red Square", zhArea: "南岗区哈西大街西城红场4号老厂房", price: "About ¥202", zhPrice: "人均约¥202", highlight: "LiveHouse in an old factory space, good for music-focused nights.", zhHighlight: "位于老厂房空间，适合现场音乐夜晚。" },
      { name: "Commune Haxi", zhName: "Commune（哈西大街店）", area: "Haxi Street", zhArea: "南岗区哈西街299号西城红场4号厂房内", highlight: "Spacious and quiet, with billiards and photogenic vintage red-brick walls.", zhHighlight: "空间宽敞安静，有台球区，复古红砖墙上镜，几乎无烟味。" },
      { name: "Scala Performance Bar", zhName: "斯卡拉演艺酒吧", price: "Tables from about ¥700+", zhPrice: "小台平日约¥700起", highlight: "Performance-bar format with table pricing by party size and day.", zhHighlight: "演艺酒吧形式，桌台费用按人数和平日/周末区分。" },
      { name: "Y-PARTY", zhName: "御派对电音工厂/Y-PARTY", area: "Qunli, Daoli", zhArea: "道里区群力友谊西路1966号", highlight: "High-end electronic-entertainment venue with large investment and strong stage production.", zhHighlight: "斥资打造的高端商务娱乐平台，适合电音和舞台氛围。" }
    ]
  }),
  guilin: guide({
    slug: "guilin",
    title: "Guilin Rooftop Lounges, Craft Beer, and Yangshuo West Street",
    zhTitle: "桂林顶楼酒廊、精酿与阳朔西街酒吧",
    intro: "Guilin nightlife is smaller and scenic: rooftop views of the Two Rivers and Four Lakes, craft beer near Lijiang Road, Yangshuo West Street bars, and casual venues near Qixing.",
    zhIntro: "桂林夜生活规模不大，但胜在山水和松弛：两江四湖顶楼酒廊、漓江路精酿、阳朔西街酒吧和七星区轻松小馆都适合学生体验。",
    note: "For Yangshuo bars, plan accommodation or transport before drinking.",
    zhNote: "去阳朔西街喝酒前，建议提前安排住宿或返程交通。",
    venues: [
      { name: "Galaxy Lounge", zhName: "星河酒廊", area: "Elephant Trunk Hill / Two Rivers Four Lakes", zhArea: "象鼻山/两江四湖区域", highlight: "Rooftop bar with views over Sun and Moon Pagodas and the Two Rivers and Four Lakes.", zhHighlight: "顶楼酒吧，可将日月双塔和两江四湖尽收眼底。" },
      { name: "Bandian Craft Beer", zhName: "半颠精酿酒馆（漓江路店）", area: "Lijiang Road", zhArea: "漓江路17号", price: "About ¥75", zhPrice: "人均约¥75", highlight: "Craft beer option near Lijiang Road.", zhHighlight: "漓江路附近精酿选择，适合轻松小聚。" },
      { name: "On The Road Bar", zhName: "在路上酒吧（阳朔西街）", area: "Yangshuo West Street", zhArea: "阳朔县西街双月桥旁", price: "About ¥56", zhPrice: "人均约¥56", highlight: "Budget-friendly West Street bar for traveler-style nights.", zhHighlight: "阳朔西街预算友好酒吧，适合旅行者氛围的夜晚。" },
      { name: "SUPER ME Bar", zhName: "SUPER ME酒吧", area: "Qixing District", zhArea: "七星区穿山路31号兴进·塔山悦坊#1号楼", highlight: "Casual Guilin city bar option beyond Yangshuo.", zhHighlight: "桂林市区酒吧选择，适合不去阳朔时的小聚。" }
    ]
  }),
  shenzhen: guide({
    slug: "shenzhen",
    title: "Shenzhen Bay Terraces, Shopping Park Clubs, and LiveHouse Nights",
    zhTitle: "深圳湾露台、购物公园夜店与LiveHouse夜晚",
    intro: "Shenzhen nightlife is fast, international, and varied: bay-view terraces, Shopping Park hip-hop clubs, cyber-vintage bars, wine buffets, and Thai-food livehouse venues.",
    zhIntro: "深圳夜生活速度快、国际化，也很多元：深圳湾露台、购物公园Hip-Hop夜店、赛博复古酒吧、葡萄酒自助和泰餐LiveHouse都能形成路线。",
    note: "Shenzhen can be expensive; compare minimum spend and happy-hour rules.",
    zhNote: "深圳夜生活消费差异较大，建议提前比较低消、畅饮规则和活动时段。",
    venues: [
      { name: "DEW Lounge Shenzhen Bay", zhName: "DEW Lounge（深圳湾店）", price: "About ¥133", zhPrice: "人均约¥133", hours: "18:00-02:00", zhHours: "18:00-02:00", highlight: "A 2026 China Top 50 bar with terrace views over Shenzhen Bay.", zhHighlight: "2026中国50酒吧，露台可眺望深圳湾美景。" },
      { name: "ORANGUTAN Bunker Shopping Park", zhName: "猩猩地堡酒吧（购物公园店）", area: "Futian Shopping Park", zhArea: "福田区购物公园", highlight: "Hip-hop club mixing Afro, reggaeton, Memphis sounds, rappers, international DJs, and Function-One audio.", zhHighlight: "Hip-Hop主题夜店，融合Afro、雷击顿、孟菲斯等曲风，常有说唱歌手与国际DJ驻场。" },
      { name: "PPROOM Shopping Park", zhName: "PPROOM·佩佩酒吧（购物公园店）", area: "Futian Shopping Park", zhArea: "福田区购物公园", highlight: "American vintage plus cyber-neon style, photogenic, with self-service drinks and no minimum in the source notes.", zhHighlight: "美式复古×赛博霓虹风格，很出片，自助酒柜无低消。" },
      { name: "Vinup Brunch & Bistro", zhName: "Vinup薇葡·Brunch＆Bistro", area: "Futian", zhArea: "福田区福山社区辛诚花园海田路32号", price: "From ¥69.9 for 2 hours", zhPrice: "2小时¥69.9起", highlight: "Global wine buffet for casual student gatherings.", zhHighlight: "全球葡萄酒自助无限畅饮，适合轻松小聚。" },
      { name: "Red Dot LiveHouse", zhName: "红点LiveHouse（金光华广场）", area: "Luohu", zhArea: "罗湖区金光华广场", price: "Under ¥100", zhPrice: "人均不到¥100", highlight: "LiveHouse and restaurant-bar hybrid with Thai food and no weekday table fee in the source notes.", zhHighlight: "LiveHouse与餐吧结合，提供泰国菜，平日免开台费。" }
    ]
  }),
  taiyuan: guide({
    slug: "taiyuan",
    title: "Taiyuan LiveHouses, Lounges, and Bell-Tower-Area Clubs",
    zhTitle: "太原LiveHouse、Lounge与鼓楼周边夜场",
    intro: "Taiyuan's nightlife is becoming younger through livehouses, lounge bars, clubs near old-city routes, and late-night venues in Xiaodian.",
    zhIntro: "太原夜生活正在变年轻：LiveHouse、Lounge、老城周边Club和小店区夜场都可以作为学生夜间路线。",
    note: "Some venues in the source list have limited public details, so confirm before going.",
    zhNote: "部分场所公开信息较少，建议出发前确认地址、营业时间和消费规则。",
    venues: [
      { name: "Huahai Live House", zhName: "花海Live House", area: "APM Zhonghuan Plaza", zhArea: "小店区南中环与长治路口APM中环广场2号楼一层", highlight: "Focuses on atmosphere and music quality, positioned as a public art exchange space.", zhHighlight: "注重空间氛围感和音乐品质，倡导公共艺术交流空间。" },
      { name: "Mengtian Live House", zhName: "梦田Live house", area: "APM Zhonghuan Plaza", zhArea: "长治路与南中环交叉口东北角APM中环广场2层", highlight: "Livehouse option in the same active student-friendly commercial area.", zhHighlight: "位于APM中环广场，适合音乐现场和学生小聚。" },
      { name: "Temple Club", zhName: "聖殿Club", area: "Near Gulou Street", zhArea: "杏花岭/迎泽区巴黎大街香奈儿5号（近鼓楼街）", price: "About ¥69", zhPrice: "人均约¥69", highlight: "Affordable club option near the old-city nightlife area.", zhHighlight: "靠近鼓楼街，价格相对友好的Club选择。" },
      { name: "Maise Lounge", zhName: "麥澀·Maise Lounge", highlight: "Lounge option included in the user's Taiyuan nightlife list.", zhHighlight: "太原夜生活清单中的Lounge选择。" },
      { name: "Lan Kwai Fong Yue", zhName: "蘭桂坊·悦（北园街胡同店）", highlight: "Neighborhood bar option for smaller gatherings.", zhHighlight: "适合小范围聚会的胡同店酒吧。" },
      { name: "Mr. Drunk", zhName: "醉先生（亲贤街店）", highlight: "Casual drink option near Qin贤 Street.", zhHighlight: "亲贤街附近轻松小酌选择。" },
      { name: "V Mansion", zhName: "V公馆夜总会", area: "Xiaodian", zhArea: "小店区建设南路", hours: "19:00-03:30", zhHours: "19:00-凌晨3:30", highlight: "Late-night venue for students who want a more formal club-night experience.", zhHighlight: "营业到凌晨，适合想体验更正式夜场的人。" }
    ]
  }),
  zhengzhou: guide({
    slug: "zhengzhou",
    title: "Zhengzhou Clubs, Hiphop Bars, and Cocktail Lounges",
    zhTitle: "郑州夜店、Hiphop酒吧与鸡尾酒Lounge",
    intro: "Zhengzhou's nightlife is growing around Longhuli, Zijingshan, Guomao 360, Zhenghong City, Xidigang, and Haihuigang, with clubs, hip-hop bars, whisky rooms, and value drink deals.",
    zhIntro: "郑州夜生活围绕龙湖里、紫荆山、国贸360、正弘城、熙地港和海汇港展开，有夜店、Hiphop酒吧、威士忌鸡尾酒和畅饮活动。",
    note: "Check current events and drink-deal times before going.",
    zhNote: "建议出发前确认活动日程、畅饮时间和消费规则。",
    venues: [
      { name: "BOOMSHAKE Longhuli", zhName: "BOOMSHAKE（龙湖里店）", area: "Longhuli, Jinshui", zhArea: "金水区龙湖里D区4楼", highlight: "Fashionable club crowd and high-energy nightclub setting.", zhHighlight: "夜店顾客颜值高，网红富二代聚集，氛围高能。" },
      { name: "MEXX Bar", zhName: "MEXX酒吧", area: "Zijingshan", zhArea: "紫荆山商业区", highlight: "Laser-heavy, high-motion club atmosphere.", zhHighlight: "激光四射，动感十足。" },
      { name: "CHERRY ZHENGZHOU", zhName: "CHERRY ZHENGZHOU", area: "Guomao 360 / Zhenghong City", zhArea: "国贸360广场/正弘城", highlight: "Young, fashionable hip-hop and Korean-trend-style bar.", zhHighlight: "年轻时尚Hiphop韩式潮流风酒吧。" },
      { name: "Shanhai Whisky & Cocktail", zhName: "山海 whisky&cocktail bar（熙地港店）", area: "Xidigang", zhArea: "熙地港", highlight: "Friendly bartenders can recommend drinks by taste preference.", zhHighlight: "调酒师专业亲切，能根据客人喜好推荐酒水。" },
      { name: "SEPT. Restaurant & Bar", zhName: "SEPT. Restaurant&Bar（海汇港店）", area: "Haihuigang", zhArea: "东风南路与康宁街交叉口海汇港2号楼5层", highlight: "Cocktail all-you-can-drink deal around ¥118 for two hours in the source notes.", zhHighlight: "鸡尾酒118元畅饮2小时，适合预算明确的小聚。" }
    ]
  })
};

export function getCityNightlifeGuide(slug: string) {
  return cityNightlifeGuides[slug];
}
