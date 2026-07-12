export type CityStudentStory = {
  quote: string;
  zhQuote: string;
  student: string;
  zhStudent: string;
  story: string;
  zhStory: string;
};

export const cityStudentStories: Record<string, CityStudentStory> = {
  changsha: {
    quote: "Changsha is the city that understands me best.",
    zhQuote: "长沙是最懂我的城市。",
    student: "Alina, a Russian student who studied digital media design in Changsha",
    zhStudent: "俄罗斯留学生 Alina，在长沙学习数字媒体设计",
    story:
      "For Alina, Changsha was not only a university choice. It became calligraphy classes, guitar, skateboarding, motorcycle rides, rice fields, neon streets, barbecue smoke, and a city that kept telling her there was always something worth trying.",
    zhStory:
      "对 Alina 来说，长沙不只是一个大学选择。它变成了书法课、吉他、滑板、摩托骑行、稻田、霓虹街道、烧烤烟火，以及一座不断告诉她“总有值得尝试的事”的城市。"
  },
  nanning: {
    quote: "Here, Southeast Asia does not feel far away from China.",
    zhQuote: "在这里，东南亚和中国并不遥远。",
    student: "An ASEAN student describing Nanning's everyday warmth",
    zhStudent: "一位东盟学生谈南宁的日常亲近感",
    story:
      "Nanning often wins students through small details: warm weather, ASEAN faces on campus, laoyou noodles, night markets, easier living costs, and a city rhythm that helps newcomers feel less like strangers.",
    zhStory:
      "南宁常常是通过细节打动学生：温暖天气、校园里的东盟面孔、老友粉、夜市、较低生活成本，以及一种让新来者不那么像外人的城市节奏。"
  },
  kunming: {
    quote: "The city feels like spring is waiting for you after class.",
    zhQuote: "这座城市像是下课后仍然有春天在等你。",
    student: "A Southeast Asian student exploring Kunming's lakes and flower markets",
    zhStudent: "一位在昆明探索湖泊与花市的东南亚学生",
    story:
      "Kunming attracts students who need space to breathe: Green Lake walks, Dianchi sunsets, Dounan flowers, rice noodles, ethnic culture, and a softer gateway toward Southwest China and Southeast Asia.",
    zhStory:
      "昆明吸引的是那些需要呼吸空间的学生：翠湖散步、滇池日落、斗南鲜花、米线、民族文化，以及通往中国西南与东南亚的柔和入口。"
  },
  hangzhou: {
    quote: "After class, I can walk by a world-famous lake.",
    zhQuote: "下课后，我可以走到一座世界闻名的湖边。",
    student: "An international student describing Hangzhou's daily poetry",
    zhStudent: "一位国际学生谈杭州的日常诗意",
    story:
      "Hangzhou's power is that beauty is not saved for holidays. West Lake, tea hills, Liangzhu, the Grand Canal, digital-economy companies, music bars, and creative markets can all become part of a student's weekly life.",
    zhStory:
      "杭州的力量在于美并不只留给假期。西湖、茶山、良渚、大运河、数字经济公司、音乐酒吧和创意市集，都可以进入学生的一周生活。"
  },
  chengdu: {
    quote: "In Chengdu, study and life both know how to slow down.",
    zhQuote: "在成都，学习和生活都知道怎样慢下来。",
    student: "A global student drawn to Chengdu's teahouses and campuses",
    zhStudent: "一位被成都茶馆与校园吸引的国际学生",
    story:
      "Chengdu gives students a rare balance: strong universities and technology sectors, but also teahouses, pandas, hotpot, live music, parks, and a daily rhythm that makes China feel easy to love.",
    zhStory:
      "成都给学生一种少见的平衡：有强高校和科技产业，也有茶馆、熊猫、火锅、现场音乐、公园，以及一种让中国很容易被喜欢上的日常节奏。"
  },
  shenzhen: {
    quote: "This city makes the future feel very close.",
    zhQuote: "这座城市让未来显得很近。",
    student: "A student interested in technology, design, and Greater Bay Area careers",
    zhStudent: "一位关注科技、设计和大湾区职业机会的学生",
    story:
      "Shenzhen is demanding, but it is honest about its promise: if a student wants technology, hardware, AI, design, finance, startups, sea parks, and global speed, the city puts those signals everywhere.",
    zhStory:
      "深圳有压力，但它对自己的承诺很清楚：如果学生想要科技、硬件、AI、设计、金融、创业、滨海公园和全球速度，这座城市会把这些信号摆在眼前。"
  },
  suzhou: {
    quote: "Suzhou lets me study near Shanghai, but breathe in Jiangnan.",
    zhQuote: "苏州让我靠近上海学习，却在江南里呼吸。",
    student: "A student choosing Suzhou for calm life and Yangtze River Delta access",
    zhStudent: "一位因为安静生活与长三角机会选择苏州的学生",
    story:
      "Suzhou is attractive to students who do not want to choose between elegance and opportunity: gardens, canals, Jinji Lake, international campuses, industrial parks, folk bars, and fast trains all work together.",
    zhStory:
      "苏州吸引的是不想在优雅和机会之间二选一的学生：园林、运河、金鸡湖、国际化校园、工业园区、民谣小酒馆和高铁网络彼此配合。"
  },
  fuzhou: {
    quote: "Fuzhou feels warm before you fully understand it.",
    zhQuote: "福州是在你完全理解它之前，就先让你觉得温暖。",
    student: "A coastal student remembering Fuzhou's lanes, river wind, and food",
    zhStudent: "一位滨海背景学生回忆福州的巷子、江风与食物",
    story:
      "Fuzhou is gentle in a way that helps students settle: Sanfang Qixiang, Min River evenings, fish balls, university-town markets, old overseas links, and a coastal rhythm connected to Southeast Asia.",
    zhStory:
      "福州的温柔很适合让学生安顿下来：三坊七巷、闽江傍晚、鱼丸、大学城市集、侨乡联系，以及与东南亚相连的滨海节奏。"
  },
  tianjin: {
    quote: "I can reach Beijing, but I do not have to live inside Beijing's pressure.",
    zhQuote: "我可以抵达北京，但不必住进北京的压力里。",
    student: "A student choosing Tianjin for North China access",
    zhStudent: "一位因为华北机会选择天津的学生",
    story:
      "Tianjin often wins students with balance: Haihe lights, Nankai and Tianjin University traditions, Wudadao walks, cheaper daily life than Beijing, courtyard music, and food that feels generous.",
    zhStory:
      "天津常常用平衡打动学生：海河灯火、南开与天大传统、五大道漫步、低于北京的日常成本、四合院民谣，以及很慷慨的食物。"
  },
  harbin: {
    quote: "The winter is serious, but the city is unforgettable.",
    zhQuote: "冬天很认真，但这座城市很难忘。",
    student: "An engineering student describing Harbin's northern identity",
    zhStudent: "一位工程类学生谈哈尔滨的北方性格",
    story:
      "Harbin gives students a China with snow, music, engineering strength, Russian echoes, Central Street, hot food, cool summers, and a seasonal culture that becomes part of the study story.",
    zhStory:
      "哈尔滨给学生的是一个有雪、有音乐、有工程实力、有俄式回声的中国：中央大街、热乎食物、凉爽夏天和季节文化，都会成为留学故事的一部分。"
  },
  guilin: {
    quote: "Here, even an ordinary weekend can look like a painting.",
    zhQuote: "在这里，一个普通周末也可以像一幅画。",
    student: "A student spending weekends between Guilin and Yangshuo",
    zhStudent: "一位在桂林与阳朔之间度过周末的学生",
    story:
      "Guilin is powerful because it does not need to be loud: Li River mountains, rice noodles, Yangshuo West Street, lower costs, and a slower rhythm can make study life feel spacious.",
    zhStory:
      "桂林的力量在于它不需要喧哗：漓江山水、桂林米粉、阳朔西街、较低成本和慢节奏，会让留学生活变得有空间。"
  },
  taiyuan: {
    quote: "Taiyuan is quiet, but it has depth under every street.",
    zhQuote: "太原很安静，但每条街下面都有深度。",
    student: "A student interested in Jin culture and lower-cost study life",
    zhStudent: "一位关注晋文化与低成本留学生活的学生",
    story:
      "Taiyuan is for students who prefer grounded China: Fen River walks, Shanxi Museum, Jinci, noodles, Bell Tower Street, engineering universities, and a cost profile that gives families more room.",
    zhStory:
      "太原适合那些喜欢扎实中国的学生：汾河散步、山西博物院、晋祠、面食、钟楼街、工程高校，以及给家庭更多余地的生活成本。"
  },
  zhengzhou: {
    quote: "From Zhengzhou, Chinese history and modern railways both feel close.",
    zhQuote: "从郑州出发，中国历史和现代高铁都显得很近。",
    student: "A student using Zhengzhou as a Central China base",
    zhStudent: "一位把郑州作为中部中国基地的学生",
    story:
      "Zhengzhou is practical in the best way: universities, high-speed rail, Henan Museum, Yellow River routes, hu la tang, night markets, CBD lights, and fast access to Luoyang and Kaifeng.",
    zhStory:
      "郑州的务实是它最好的地方：高校、高铁、河南博物院、黄河路线、胡辣汤、夜市、CBD灯光，以及去洛阳和开封的便利。"
  }
};

export function getCityStudentStory(slug: string) {
  return cityStudentStories[slug];
}
