export type ProvinceTourismHighlight = {
  name: string;
  zhName: string;
  viName: string;
  description: string;
  zhDescription: string;
  viDescription: string;
  sourceUrl?: string;
};

export type ProvinceTourismGuide = {
  slug: string;
  title: string;
  zhTitle: string;
  viTitle: string;
  overview: string;
  zhOverview: string;
  viOverview: string;
  routes: string[];
  zhRoutes: string[];
  viRoutes: string[];
  studentAngle: string;
  zhStudentAngle: string;
  viStudentAngle: string;
  highlights: ProvinceTourismHighlight[];
  sourceLinks: { label: string; url: string }[];
};

const unesco = (id: string) => `https://whc.unesco.org/en/list/${id}/`;

export const provinceTourismGuides: Record<string, ProvinceTourismGuide> = {
  beijing: {
    slug: "beijing",
    title: "Imperial history, research institutions, and city-scale discovery",
    zhTitle: "帝都历史、研究机构与城市级探索",
    viTitle: "Lịch sử kinh đô, viện nghiên cứu và trải nghiệm đô thị lớn",
    overview: "Beijing is the clearest first chapter for understanding China: ancient capitals, museums, policy institutions, technology districts, and elite universities sit in one transport-connected city. For international students, the travel value is not separate from study life; weekends can move from campus libraries to imperial architecture, hutong streets, art districts, and the Great Wall.",
    zhOverview: "北京是理解中国最直接的第一站：古都遗产、博物馆、政策机构、科技园区和顶尖高校集中在同一座交通成熟的城市。对留学生来说，旅行价值和学习生活并不是分开的，周末可以从校园图书馆走到皇家建筑、胡同、艺术区和长城。",
    viOverview: "Bắc Kinh là chương mở đầu rõ nhất để hiểu Trung Quốc: di sản cố đô, bảo tàng, cơ quan chính sách, khu công nghệ và đại học hàng đầu cùng nằm trong một thành phố có giao thông phát triển. Với du học sinh, trải nghiệm du lịch gắn trực tiếp với đời sống học tập.",
    routes: ["Campus and museum day: university district to National Museum", "Classic China weekend: Forbidden City, Temple of Heaven, and hutong food", "Outdoor reset: Great Wall section plus village homestay"],
    zhRoutes: ["校园与博物馆一日线：大学区到国家博物馆", "经典中国周末线：故宫、天坛与胡同美食", "户外放松线：长城段落与周边村落体验"],
    viRoutes: ["Một ngày trường và bảo tàng: khu đại học đến Bảo tàng Quốc gia", "Cuối tuần Trung Hoa kinh điển: Cố Cung, Thiên Đàn và ẩm thực hutong", "Đổi gió ngoài trời: Vạn Lý Trường Thành và làng quanh Bắc Kinh"],
    studentAngle: "Best for students who want top academic networks, strong Chinese culture exposure, and access to internships in technology, policy, media, and international organizations.",
    zhStudentAngle: "适合重视顶尖学术网络、深度中国文化体验，以及科技、政策、传媒和国际组织实习机会的学生。",
    viStudentAngle: "Phù hợp với sinh viên muốn mạng lưới học thuật mạnh, tiếp xúc sâu với văn hóa Trung Quốc và cơ hội thực tập trong công nghệ, chính sách, truyền thông.",
    highlights: [
      {
        name: "Temple of Heaven",
        zhName: "天坛",
        viName: "Thiên Đàn",
        description: "A calm way to read Beijing's imperial planning, ritual culture, and public-park life in one place.",
        zhDescription: "在一个空间里理解北京的皇家规划、礼制文化和市民公园生活。",
        viDescription: "Một nơi giúp hiểu quy hoạch hoàng gia, văn hóa nghi lễ và đời sống công viên của Bắc Kinh.",
        sourceUrl: unesco("881")
      },
      {
        name: "Great Wall routes",
        zhName: "长城线路",
        viName: "Tuyến Vạn Lý Trường Thành",
        description: "The most memorable first outdoor trip for many students arriving in northern China.",
        zhDescription: "很多留学生抵达华北后的第一个高记忆点户外旅行。",
        viDescription: "Chuyến đi ngoài trời đáng nhớ đầu tiên với nhiều du học sinh tại miền Bắc Trung Quốc."
      },
      {
        name: "Hutongs and art districts",
        zhName: "胡同与艺术区",
        viName: "Hutong và khu nghệ thuật",
        description: "Useful for seeing Beijing beyond monuments: small restaurants, galleries, cafes, and youth culture.",
        zhDescription: "帮助学生看到宏大古迹之外的北京：小餐馆、画廊、咖啡馆和青年文化。",
        viDescription: "Giúp sinh viên nhìn thấy Bắc Kinh ngoài di tích lớn: quán ăn nhỏ, phòng tranh, cà phê và văn hóa trẻ."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Temple of Heaven", url: unesco("881") }]
  },
  shanghai: {
    slug: "shanghai",
    title: "Global city energy beside Jiangnan weekend routes",
    zhTitle: "国际都市能量与江南周末线路",
    viTitle: "Năng lượng đô thị quốc tế và hành trình cuối tuần Giang Nam",
    overview: "Shanghai gives international students a fast, global-facing version of China: finance, design, biomedicine, creative industries, dense metro access, and nearby water-town travel. Its tourism appeal is urban rather than scenic only; the Bund, museums, food streets, galleries, and high-speed rail weekends make the city feel easy to share with friends abroad.",
    zhOverview: "上海给留学生展示的是中国高度国际化、速度很快的一面：金融、设计、生物医药、创意产业、密集地铁和周边水乡旅行都很集中。它的旅行吸引力不只是自然风景，而是外滩、博物馆、美食街、画廊和高铁周末组成的城市体验。",
    viOverview: "Thượng Hải thể hiện một Trung Quốc hiện đại và quốc tế: tài chính, thiết kế, y sinh, sáng tạo, tàu điện dày đặc và các chuyến đi cuối tuần đến vùng sông nước.",
    routes: ["Urban first impression: Bund, Pudong skyline, and museum evening", "Creative weekend: West Bund, galleries, coffee, and design stores", "Rail escape: Suzhou, Hangzhou, or water towns"],
    zhRoutes: ["城市第一印象：外滩、浦东天际线与博物馆夜场", "创意周末：西岸、画廊、咖啡与设计店", "高铁短途：苏州、杭州或水乡古镇"],
    viRoutes: ["Ấn tượng đô thị: Bến Thượng Hải, skyline Phố Đông và bảo tàng buổi tối", "Cuối tuần sáng tạo: West Bund, gallery, cà phê và cửa hàng thiết kế", "Đi tàu nhanh: Tô Châu, Hàng Châu hoặc cổ trấn sông nước"],
    studentAngle: "Best for business, finance, design, medicine, AI, and students who want international internships without losing access to Chinese culture.",
    zhStudentAngle: "适合商科、金融、设计、医学、AI，以及希望获得国际化实习但仍接触中国文化的学生。",
    viStudentAngle: "Phù hợp với sinh viên kinh doanh, tài chính, thiết kế, y khoa, AI và người muốn thực tập quốc tế nhưng vẫn tiếp cận văn hóa Trung Quốc.",
    highlights: [
      {
        name: "The Bund and Pudong skyline",
        zhName: "外滩与浦东天际线",
        viName: "Bến Thượng Hải và skyline Phố Đông",
        description: "A compact visual introduction to modern Chinese urban ambition.",
        zhDescription: "用最直观的方式理解现代中国城市发展的雄心。",
        viDescription: "Một hình ảnh cô đọng về tham vọng đô thị hiện đại của Trung Quốc."
      },
      {
        name: "Museum and gallery belt",
        zhName: "博物馆与画廊带",
        viName: "Dải bảo tàng và phòng tranh",
        description: "Strong for students in design, art, architecture, media, and business.",
        zhDescription: "对设计、艺术、建筑、传媒和商科学生都很有启发。",
        viDescription: "Hữu ích cho sinh viên thiết kế, nghệ thuật, kiến trúc, truyền thông và kinh doanh."
      },
      {
        name: "Jiangnan rail weekends",
        zhName: "江南高铁周末",
        viName: "Cuối tuần Giang Nam bằng tàu nhanh",
        description: "Shanghai can be a base for Suzhou gardens, Hangzhou West Lake, and water-town culture.",
        zhDescription: "上海可以作为去苏州园林、杭州西湖和江南水乡的基地。",
        viDescription: "Có thể dùng Thượng Hải làm điểm xuất phát đến vườn Tô Châu, Tây Hồ Hàng Châu và cổ trấn."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Suzhou Gardens", url: unesco("813") }, { label: "UNESCO: West Lake", url: unesco("1334") }]
  },
  zhejiang: {
    slug: "zhejiang",
    title: "West Lake aesthetics, tea culture, and China's digital economy",
    zhTitle: "西湖审美、茶文化与中国数字经济",
    viTitle: "Thẩm mỹ Tây Hồ, văn hóa trà và kinh tế số Trung Quốc",
    overview: "Zhejiang is one of the easiest provinces to make students fall in love with China. Hangzhou gives a polished city base with West Lake, tea villages, temples, cycling routes, and internet-economy companies, while nearby water towns and coastal cities make weekend travel gentle and photogenic.",
    zhOverview: "浙江是最容易让年轻人爱上中国的省份之一。杭州提供成熟、精致的城市 base：西湖、茶村、寺庙、骑行线路和互联网经济公司都很集中，周边水乡和沿海城市又让周末旅行轻松、有画面感。",
    viOverview: "Chiết Giang rất dễ khiến người trẻ yêu Trung Quốc. Hàng Châu có Tây Hồ, làng trà, chùa, tuyến đạp xe và hệ sinh thái internet; các cổ trấn và thành phố ven biển tạo nên cuối tuần nhẹ nhàng.",
    routes: ["West Lake slow day: lake walk, temple, tea village", "Digital economy day: campus, startup district, and night market", "Weekend extension: Wuzhen, Ningbo, or coastal islands"],
    zhRoutes: ["西湖慢行线：湖边步行、寺庙、茶村", "数字经济线：校园、创业街区与夜市", "周末延展线：乌镇、宁波或海岛"],
    viRoutes: ["Một ngày chậm ở Tây Hồ: đi bộ ven hồ, chùa và làng trà", "Kinh tế số: trường học, khu startup và chợ đêm", "Cuối tuần mở rộng: Ô Trấn, Ninh Ba hoặc đảo ven biển"],
    studentAngle: "Best for students who want a beautiful daily environment plus real exposure to e-commerce, AI, digital trade, and entrepreneurship.",
    zhStudentAngle: "适合希望日常环境很美，同时接触电商、AI、数字贸易和创业机会的学生。",
    viStudentAngle: "Phù hợp với sinh viên muốn môi trường sống đẹp và tiếp xúc với thương mại điện tử, AI, thương mại số, khởi nghiệp.",
    highlights: [
      {
        name: "West Lake",
        zhName: "西湖",
        viName: "Tây Hồ",
        description: "A classic Chinese landscape students can experience through walking, cycling, tea, and photography.",
        zhDescription: "留学生可以通过散步、骑行、喝茶和摄影体验的经典中国山水。",
        viDescription: "Cảnh quan kinh điển có thể trải nghiệm bằng đi bộ, đạp xe, uống trà và chụp ảnh.",
        sourceUrl: unesco("1334")
      },
      {
        name: "Longjing tea villages",
        zhName: "龙井茶村",
        viName: "Làng trà Long Tỉnh",
        description: "Good for introducing everyday Chinese hospitality and slow social life.",
        zhDescription: "适合展示中国人的日常待客方式和松弛社交生活。",
        viDescription: "Phù hợp để hiểu sự hiếu khách và nhịp sống xã hội thư thái của người Trung Quốc."
      },
      {
        name: "Wuzhen and water towns",
        zhName: "乌镇与水乡",
        viName: "Ô Trấn và cổ trấn sông nước",
        description: "A gentle weekend contrast to Hangzhou's innovation districts.",
        zhDescription: "与杭州创新街区形成温柔对比的周末路线。",
        viDescription: "Một tương phản nhẹ nhàng với các khu đổi mới của Hàng Châu."
      }
    ],
    sourceLinks: [{ label: "UNESCO: West Lake Cultural Landscape", url: unesco("1334") }]
  },
  jiangsu: {
    slug: "jiangsu",
    title: "Classical gardens, historic capitals, and practical industry access",
    zhTitle: "古典园林、历史名城与务实产业机会",
    viTitle: "Vườn cổ điển, cố đô và cơ hội công nghiệp thực tế",
    overview: "Jiangsu is dense, educated, and easy to travel. Nanjing brings capital-city history and major universities; Suzhou adds classical gardens, canals, and manufacturing strength; Wuxi and other cities connect students to industry. For young international students, Jiangsu feels like a bridge between old China, modern campuses, and Shanghai-area careers.",
    zhOverview: "江苏教育资源密集，城市之间高铁便利。南京有古都历史和强校，苏州有古典园林、运河和制造业，无锡等城市连接产业机会。对国际学生来说，江苏像是古代中国、现代校园和上海周边职业机会之间的桥。",
    viOverview: "Giang Tô có giáo dục dày đặc và giao thông thuận tiện. Nam Kinh có lịch sử cố đô và đại học mạnh; Tô Châu có vườn cổ, kênh đào và sản xuất; các thành phố khác kết nối cơ hội công nghiệp.",
    routes: ["Nanjing history day: city wall, museum, riverside", "Suzhou culture day: gardens, canals, and night streets", "Career weekend: Suzhou Industrial Park and Shanghai rail access"],
    zhRoutes: ["南京历史线：城墙、博物馆与江边", "苏州文化线：园林、运河与夜色街区", "职业周末线：苏州工业园区与上海高铁圈"],
    viRoutes: ["Nam Kinh lịch sử: tường thành, bảo tàng và ven sông", "Tô Châu văn hóa: vườn, kênh đào và phố đêm", "Cuối tuần nghề nghiệp: Khu công nghiệp Tô Châu và tàu nhanh đến Thượng Hải"],
    studentAngle: "Best for students who want strong universities, balanced costs, Jiangnan culture, and manufacturing or engineering exposure near Shanghai.",
    zhStudentAngle: "适合希望拥有强校、均衡成本、江南文化，以及靠近上海的制造业或工程机会的学生。",
    viStudentAngle: "Phù hợp với sinh viên muốn đại học mạnh, chi phí cân bằng, văn hóa Giang Nam và cơ hội kỹ thuật gần Thượng Hải.",
    highlights: [
      {
        name: "Classical Gardens of Suzhou",
        zhName: "苏州古典园林",
        viName: "Vườn cổ điển Tô Châu",
        description: "A refined entry point into Chinese spatial design, poetry, and slow urban life.",
        zhDescription: "理解中国空间审美、诗意生活和慢城市节奏的精致入口。",
        viDescription: "Cửa ngõ tinh tế để hiểu thẩm mỹ không gian, thơ ca và nhịp sống chậm của Trung Quốc.",
        sourceUrl: unesco("813")
      },
      {
        name: "Nanjing heritage",
        zhName: "南京历史遗产",
        viName: "Di sản Nam Kinh",
        description: "Good for students who want museums, republican-era streets, riverside walks, and serious universities.",
        zhDescription: "适合喜欢博物馆、民国街区、江边散步和研究型大学的学生。",
        viDescription: "Phù hợp với sinh viên thích bảo tàng, phố lịch sử, dạo ven sông và đại học nghiên cứu."
      },
      {
        name: "Canals and water towns",
        zhName: "运河与水乡",
        viName: "Kênh đào và cổ trấn sông nước",
        description: "Short trips that make Jiangnan culture easy to understand and photograph.",
        zhDescription: "让江南文化更容易被理解和记录的短途旅行。",
        viDescription: "Những chuyến đi ngắn giúp dễ hiểu và ghi lại văn hóa Giang Nam."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Classical Gardens of Suzhou", url: unesco("813") }]
  },
  guangdong: {
    slug: "guangdong",
    title: "Greater Bay Area opportunity, Cantonese life, and coastal weekends",
    zhTitle: "大湾区机会、广府生活与海岸周末",
    viTitle: "Cơ hội Vùng Vịnh Lớn, đời sống Quảng Đông và cuối tuần ven biển",
    overview: "Guangdong is where study, business, manufacturing, food, and travel move quickly. Guangzhou offers Cantonese culture and medical/business education; Shenzhen gives hardware, AI, design, and startup energy; the wider Greater Bay Area helps students imagine careers across China and global trade routes.",
    zhOverview: "广东是学习、商业、制造、美食和旅行节奏都很快的省份。广州有广府文化和医学、商科资源，深圳有硬件、AI、设计和创业能量，整个大湾区能帮助学生看到中国与全球贸易连接的职业想象。",
    viOverview: "Quảng Đông là nơi học tập, kinh doanh, sản xuất, ẩm thực và du lịch đều chuyển động nhanh. Quảng Châu mạnh về văn hóa, y khoa và kinh doanh; Thâm Quyến mạnh về phần cứng, AI, thiết kế và startup.",
    routes: ["Guangzhou culture day: old streets, dim sum, museums", "Shenzhen innovation day: campus, tech district, design stores", "Coastal reset: Zhuhai, Dapeng, or bay-area rail trips"],
    zhRoutes: ["广州文化线：老街、早茶与博物馆", "深圳创新线：校园、科技园与设计店", "海岸放松线：珠海、大鹏或湾区高铁短途"],
    viRoutes: ["Văn hóa Quảng Châu: phố cũ, dim sum và bảo tàng", "Đổi mới Thâm Quyến: trường, khu công nghệ và thiết kế", "Nghỉ ven biển: Châu Hải, Đại Bằng hoặc tàu vùng vịnh"],
    studentAngle: "Best for business, engineering, medicine, design, hardware, cross-border trade, and students who like warm weather and fast opportunity.",
    zhStudentAngle: "适合商科、工程、医学、设计、硬件、跨境贸易，以及喜欢温暖气候和快速机会的学生。",
    viStudentAngle: "Phù hợp với kinh doanh, kỹ thuật, y khoa, thiết kế, phần cứng, thương mại xuyên biên giới và sinh viên thích khí hậu ấm.",
    highlights: [
      {
        name: "Cantonese food culture",
        zhName: "广府饮食文化",
        viName: "Ẩm thực Quảng Đông",
        description: "Dim sum, tea restaurants, seafood, and late-night food make social life easy for new students.",
        zhDescription: "早茶、茶餐厅、海鲜和夜宵让新留学生更容易进入本地社交生活。",
        viDescription: "Dim sum, trà quán, hải sản và ăn đêm giúp sinh viên mới dễ hòa nhập."
      },
      {
        name: "Shenzhen innovation districts",
        zhName: "深圳创新街区",
        viName: "Khu đổi mới Thâm Quyến",
        description: "A strong visual story for students interested in China's technology growth.",
        zhDescription: "对关注中国科技成长的学生非常有画面感。",
        viDescription: "Một câu chuyện trực quan mạnh cho sinh viên quan tâm tăng trưởng công nghệ Trung Quốc."
      },
      {
        name: "Danxia landscapes",
        zhName: "丹霞地貌",
        viName: "Địa mạo Đan Hà",
        description: "Red cliffs and subtropical landscapes add a nature route beyond the megacities.",
        zhDescription: "红色崖壁和亚热带景观，让广东不只是大城市，也有自然路线。",
        viDescription: "Vách đá đỏ và cảnh quan cận nhiệt đới cho thấy Quảng Đông không chỉ có đô thị lớn.",
        sourceUrl: unesco("1335")
      }
    ],
    sourceLinks: [{ label: "UNESCO: China Danxia", url: unesco("1335") }]
  },
  hubei: {
    slug: "hubei",
    title: "River-city student life, central rail access, and mountain heritage",
    zhTitle: "江城学生生活、中部高铁与山水遗产",
    viTitle: "Đời sống sinh viên thành phố sông, đường sắt miền Trung và di sản núi",
    overview: "Hubei is anchored by Wuhan, one of China's strongest student cities. The province combines Yangtze River life, lakes, affordable big-city energy, optics and engineering industries, and mountain heritage such as Wudang. It works well for students who want scale without the highest coastal-city costs.",
    zhOverview: "湖北以武汉为核心，是中国学生氛围最强的区域之一。这里有长江生活、湖泊、相对友好的大城市成本、光电与工程产业，也能连接武当山等山地文化遗产。适合想要城市规模但不想承担最高沿海成本的学生。",
    viOverview: "Hồ Bắc lấy Vũ Hán làm trung tâm, là một trong các vùng có không khí sinh viên mạnh nhất Trung Quốc. Có sông Trường Giang, hồ, chi phí thành phố lớn hợp lý, ngành quang điện và kỹ thuật, cùng di sản núi Võ Đang.",
    routes: ["Wuhan student day: campus, East Lake, riverfront food", "Culture day: museum and Yellow Crane Tower area", "Mountain break: Wudang Mountains during a longer weekend"],
    zhRoutes: ["武汉学生线：校园、东湖与江边美食", "文化线：博物馆与黄鹤楼片区", "山地假期线：长周末去武当山"],
    viRoutes: ["Ngày sinh viên Vũ Hán: trường, Đông Hồ và ẩm thực ven sông", "Văn hóa: bảo tàng và khu Hoàng Hạc Lâu", "Nghỉ núi: Võ Đang Sơn vào cuối tuần dài"],
    studentAngle: "Best for engineering, medicine, optics, central-China mobility, and students who want a large peer community.",
    zhStudentAngle: "适合工程、医学、光电、中部交通流动，以及想要大型同龄学生社群的学生。",
    viStudentAngle: "Phù hợp với kỹ thuật, y khoa, quang điện, di chuyển miền Trung và sinh viên muốn cộng đồng bạn học lớn.",
    highlights: [
      {
        name: "East Lake and Wuhan campus life",
        zhName: "东湖与武汉校园生活",
        viName: "Đông Hồ và đời sống trường Vũ Hán",
        description: "Large lakes, campuses, breakfast culture, and riverside life make Wuhan easy to live in.",
        zhDescription: "湖泊、校园、过早文化和江边生活让武汉很适合长期学习。",
        viDescription: "Hồ lớn, trường học, văn hóa ăn sáng và đời sống ven sông khiến Vũ Hán dễ sống."
      },
      {
        name: "Wudang Mountains",
        zhName: "武当山",
        viName: "Võ Đang Sơn",
        description: "A mountain route that connects architecture, Taoist culture, and outdoor travel.",
        zhDescription: "把建筑、道教文化和户外旅行连接起来的山地线路。",
        viDescription: "Tuyến núi kết nối kiến trúc, văn hóa Đạo giáo và du lịch ngoài trời.",
        sourceUrl: unesco("705")
      },
      {
        name: "Yangtze River mobility",
        zhName: "长江与中部交通",
        viName: "Trường Giang và giao thông miền Trung",
        description: "Wuhan's central position helps students travel north, east, south, and west by rail.",
        zhDescription: "武汉的中部位置方便学生通过高铁前往全国多个方向。",
        viDescription: "Vị trí trung tâm của Vũ Hán giúp đi tàu đến nhiều vùng của Trung Quốc."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Wudang Mountains", url: unesco("705") }]
  },
  shaanxi: {
    slug: "shaanxi",
    title: "Ancient capital depth with aerospace and engineering momentum",
    zhTitle: "古都纵深与航天工程动能",
    viTitle: "Chiều sâu cố đô cùng động lực hàng không vũ trụ và kỹ thuật",
    overview: "Shaanxi, especially Xi'an, gives students a rare combination: China's ancient capital memory, Silk Road identity, serious engineering universities, aerospace industry, and lower living costs than the coast. It is one of the best provinces for telling international students that China is both ancient and technologically ambitious.",
    zhOverview: "陕西尤其是西安，给留学生一种很少见的组合：中国古都记忆、丝绸之路身份、强工程高校、航天产业和低于沿海的生活成本。它非常适合向国际学生说明：中国既古老，也充满科技雄心。",
    viOverview: "Thiểm Tây, đặc biệt là Tây An, kết hợp ký ức cố đô, bản sắc Con đường Tơ lụa, đại học kỹ thuật mạnh, công nghiệp hàng không vũ trụ và chi phí thấp hơn vùng ven biển.",
    routes: ["Ancient capital day: city wall, museum, Muslim Quarter", "World heritage day: Terracotta Warriors and Qin history", "Engineering route: campus visits and aerospace industry context"],
    zhRoutes: ["古都一日线：城墙、博物馆与回民街", "世界遗产线：兵马俑与秦代历史", "工程线：校园参观与航天产业背景"],
    viRoutes: ["Một ngày cố đô: tường thành, bảo tàng và phố Hồi", "Di sản thế giới: Binh Mã Dũng và lịch sử Tần", "Kỹ thuật: thăm trường và bối cảnh hàng không vũ trụ"],
    studentAngle: "Best for engineering, aerospace, computer science, archaeology, Chinese history, and students who want a strong China identity at manageable cost.",
    zhStudentAngle: "适合工程、航天、计算机、考古、中国历史，以及希望低成本体验强烈中国身份的学生。",
    viStudentAngle: "Phù hợp với kỹ thuật, hàng không vũ trụ, máy tính, khảo cổ, lịch sử Trung Quốc và chi phí hợp lý.",
    highlights: [
      {
        name: "Terracotta Warriors",
        zhName: "秦始皇兵马俑",
        viName: "Binh Mã Dũng",
        description: "A global-level visual symbol that makes Chinese history instantly memorable.",
        zhDescription: "让中国历史立刻变得有画面感的世界级符号。",
        viDescription: "Biểu tượng toàn cầu khiến lịch sử Trung Quốc trở nên dễ nhớ.",
        sourceUrl: "https://whc.unesco.org/en/list/441/"
      },
      {
        name: "Xi'an City Wall",
        zhName: "西安城墙",
        viName: "Tường thành Tây An",
        description: "A student-friendly cycling and photography route around the old city.",
        zhDescription: "围绕古城的学生友好骑行与摄影路线。",
        viDescription: "Tuyến đạp xe và chụp ảnh thân thiện quanh thành cổ."
      },
      {
        name: "Silk Road starting point",
        zhName: "丝绸之路起点",
        viName: "Điểm khởi đầu Con đường Tơ lụa",
        description: "Connects SilkStudy's brand story with Xi'an's long history of international exchange.",
        zhDescription: "把 SilkStudy 的品牌故事与西安长期国际交流历史连接起来。",
        viDescription: "Kết nối câu chuyện thương hiệu SilkStudy với lịch sử giao lưu quốc tế lâu dài của Tây An.",
        sourceUrl: unesco("1442")
      }
    ],
    sourceLinks: [{ label: "UNESCO: Silk Roads Chang'an-Tianshan Corridor", url: unesco("1442") }, { label: "UNESCO: Mausoleum of the First Qin Emperor", url: "https://whc.unesco.org/en/list/441/" }]
  },
  sichuan: {
    slug: "sichuan",
    title: "Food, pandas, relaxed city life, and dramatic mountain routes",
    zhTitle: "美食、熊猫、松弛城市与壮阔山地线路",
    viTitle: "Ẩm thực, gấu trúc, nhịp sống thư thái và núi non hùng vĩ",
    overview: "Sichuan is emotionally powerful for young visitors: Chengdu's tea houses, food, pandas, music, and relaxed rhythm make daily life warm, while western Sichuan and Jiuzhaigou show landscapes students will remember for life. It also has serious universities, medicine, engineering, and a growing tech economy.",
    zhOverview: "四川对年轻人有很强的情绪吸引力：成都的茶馆、美食、熊猫、音乐和松弛节奏让日常生活很温暖，川西和九寨沟又能提供一生难忘的山水体验。同时这里也有强校、医学、工程和成长中的科技经济。",
    viOverview: "Tứ Xuyên rất giàu cảm xúc với người trẻ: trà quán, ẩm thực, gấu trúc, âm nhạc và nhịp sống Thành Đô ấm áp; miền Tây Tứ Xuyên và Cửu Trại Câu đem lại phong cảnh khó quên.",
    routes: ["Chengdu slow day: campus, tea house, hotpot, music bar", "Panda and park day: panda base plus city parks", "Long holiday: Jiuzhaigou or western Sichuan road trip"],
    zhRoutes: ["成都慢生活线：校园、茶馆、火锅与音乐小酒馆", "熊猫与公园线：熊猫基地加城市公园", "长假线：九寨沟或川西自驾/包车线路"],
    viRoutes: ["Ngày chậm ở Thành Đô: trường, trà quán, lẩu và nhạc", "Gấu trúc và công viên: cơ sở gấu trúc plus công viên thành phố", "Kỳ nghỉ dài: Cửu Trại Câu hoặc miền Tây Tứ Xuyên"],
    studentAngle: "Best for students who want friendly city life, strong food culture, medicine and engineering programs, and unforgettable nature trips.",
    zhStudentAngle: "适合喜欢友好城市生活、美食文化、医学工程项目，以及难忘自然旅行的学生。",
    viStudentAngle: "Phù hợp với sinh viên thích đời sống thân thiện, ẩm thực, y khoa/kỹ thuật và thiên nhiên đáng nhớ.",
    highlights: [
      {
        name: "Jiuzhaigou Valley",
        zhName: "九寨沟",
        viName: "Cửu Trại Câu",
        description: "A once-in-China landscape route known for lakes, forests, waterfalls, and highland color.",
        zhDescription: "以湖泊、森林、瀑布和高原色彩著称的一生难忘中国风景线。",
        viDescription: "Tuyến cảnh quan nổi tiếng với hồ, rừng, thác và sắc màu cao nguyên.",
        sourceUrl: unesco("637")
      },
      {
        name: "Chengdu tea houses",
        zhName: "成都茶馆",
        viName: "Trà quán Thành Đô",
        description: "A soft landing into Chinese social life for students who may be nervous at first.",
        zhDescription: "帮助刚来中国、还有点紧张的学生温柔进入本地社交。",
        viDescription: "Cách nhẹ nhàng để sinh viên mới bớt lo và hòa vào đời sống địa phương."
      },
      {
        name: "Panda culture",
        zhName: "熊猫文化",
        viName: "Văn hóa gấu trúc",
        description: "A globally recognizable reason for students and families to feel curious about Sichuan.",
        zhDescription: "让学生和家长立刻对四川产生兴趣的全球识别符号。",
        viDescription: "Biểu tượng toàn cầu khiến sinh viên và gia đình tò mò về Tứ Xuyên."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Jiuzhaigou Valley", url: unesco("637") }]
  },
  fujian: {
    slug: "fujian",
    title: "Coastal campuses, island life, and Southeast Asia connections",
    zhTitle: "沿海校园、海岛生活与东南亚连接",
    viTitle: "Trường ven biển, đời sống đảo và kết nối Đông Nam Á",
    overview: "Fujian is warm, coastal, and culturally layered. Xiamen gives an easy student lifestyle with sea views and relaxed streets; Fuzhou connects public universities and provincial resources; inland tulou villages show distinctive communal architecture. The province is especially attractive for students from Southeast Asia and families who value a gentler coastal rhythm.",
    zhOverview: "福建温暖、沿海，文化层次丰富。厦门有海景和松弛街区，福州连接省会资源和公办高校，内陆土楼则展示独特的聚落建筑。对东南亚学生和重视温和海岸生活的家庭尤其有吸引力。",
    viOverview: "Phúc Kiến ấm áp, ven biển và đa tầng văn hóa. Hạ Môn có biển và phố thư thái; Phúc Châu có nguồn lực tỉnh; thổ lâu nội địa thể hiện kiến trúc cộng đồng độc đáo.",
    routes: ["Xiamen island day: campus, coast, cafes, Gulangyu", "Fuzhou culture day: riverfront, old streets, local food", "Heritage weekend: Fujian Tulou villages"],
    zhRoutes: ["厦门海岛线：校园、海岸、咖啡馆与鼓浪屿", "福州文化线：江边、老街与本地美食", "遗产周末线：福建土楼村落"],
    viRoutes: ["Ngày đảo Hạ Môn: trường, bờ biển, cà phê và Cổ Lãng Dữ", "Văn hóa Phúc Châu: ven sông, phố cũ và món địa phương", "Cuối tuần di sản: thổ lâu Phúc Kiến"],
    studentAngle: "Best for students who want coastal comfort, business and language routes, marine themes, and Southeast Asia-facing cultural familiarity.",
    zhStudentAngle: "适合重视沿海舒适度、商科语言路线、海洋主题，以及与东南亚文化连接的学生。",
    viStudentAngle: "Phù hợp với sinh viên muốn đời sống ven biển, kinh doanh/ngôn ngữ, chủ đề biển và kết nối Đông Nam Á.",
    highlights: [
      {
        name: "Fujian Tulou",
        zhName: "福建土楼",
        viName: "Thổ lâu Phúc Kiến",
        description: "A distinctive architecture route that shows community, family structure, and rural China.",
        zhDescription: "展示社区、家族结构和中国乡村的独特建筑线路。",
        viDescription: "Tuyến kiến trúc độc đáo thể hiện cộng đồng, cấu trúc gia đình và nông thôn Trung Quốc.",
        sourceUrl: unesco("1113")
      },
      {
        name: "Xiamen coast",
        zhName: "厦门海岸",
        viName: "Bờ biển Hạ Môn",
        description: "A friendly everyday environment for students who want walkable coastal life.",
        zhDescription: "适合喜欢可步行海岸生活的留学生。",
        viDescription: "Môi trường thân thiện cho sinh viên thích đời sống ven biển dễ đi bộ."
      },
      {
        name: "Gulangyu",
        zhName: "鼓浪屿",
        viName: "Cổ Lãng Dữ",
        description: "Island streets, music culture, and architecture make it one of Fujian's easiest stories to share.",
        zhDescription: "海岛街巷、音乐文化和建筑让它成为福建最容易传播的旅行名片之一。",
        viDescription: "Phố đảo, âm nhạc và kiến trúc khiến nơi này rất dễ kể với bạn bè."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Fujian Tulou", url: unesco("1113") }]
  },
  shandong: {
    slug: "shandong",
    title: "Confucian roots, sacred mountains, coastlines, and practical costs",
    zhTitle: "儒家根脉、名山海岸与务实成本",
    viTitle: "Nguồn gốc Nho học, núi thiêng, bờ biển và chi phí thực tế",
    overview: "Shandong is a strong option for students who want stable costs, medicine and engineering options, coastal weekends, and traditional Chinese culture. Qingdao gives sea views and international history; Jinan has provincial capital resources; Qufu and Mount Tai connect students with Confucian and sacred mountain traditions.",
    zhOverview: "山东适合希望成本稳定、医学工程选择多、周末能去海边，同时接触中国传统文化的学生。青岛有海景与国际历史，济南有省会资源，曲阜与泰山把学生带入儒家和名山文化。",
    viOverview: "Sơn Đông phù hợp với sinh viên muốn chi phí ổn định, y khoa/kỹ thuật, cuối tuần ven biển và văn hóa truyền thống Trung Quốc.",
    routes: ["Qingdao coast day: campus, old town, sea walk", "Jinan day: springs, museum, food streets", "Heritage weekend: Qufu and Mount Tai"],
    zhRoutes: ["青岛海岸线：校园、老城与海边散步", "济南一日线：泉水、博物馆与美食街", "文化周末线：曲阜与泰山"],
    viRoutes: ["Ngày bờ biển Thanh Đảo: trường, phố cũ và đi dạo biển", "Một ngày Tế Nam: suối, bảo tàng và phố ăn", "Cuối tuần di sản: Khúc Phụ và Thái Sơn"],
    studentAngle: "Best for medicine, engineering, marine science, traditional culture, and students who want moderate living costs.",
    zhStudentAngle: "适合医学、工程、海洋科学、中国传统文化，以及希望生活成本适中的学生。",
    viStudentAngle: "Phù hợp với y khoa, kỹ thuật, khoa học biển, văn hóa truyền thống và chi phí vừa phải.",
    highlights: [
      {
        name: "Mount Taishan",
        zhName: "泰山",
        viName: "Thái Sơn",
        description: "A major cultural and natural symbol for understanding ancient Chinese belief and scholarship.",
        zhDescription: "理解中国古代信仰、文人传统与山岳文化的重要象征。",
        viDescription: "Biểu tượng văn hóa và tự nhiên quan trọng để hiểu tín ngưỡng và học thuật Trung Hoa cổ.",
        sourceUrl: unesco("437")
      },
      {
        name: "Qingdao coast",
        zhName: "青岛海岸",
        viName: "Bờ biển Thanh Đảo",
        description: "Sea, old streets, and universities make Qingdao easy for international students to like.",
        zhDescription: "海、老街和大学让青岛很容易被国际学生喜欢。",
        viDescription: "Biển, phố cũ và đại học khiến Thanh Đảo dễ được sinh viên quốc tế yêu thích."
      },
      {
        name: "Confucius culture",
        zhName: "孔子文化",
        viName: "Văn hóa Khổng Tử",
        description: "A meaningful route for students studying Chinese language, philosophy, education, or history.",
        zhDescription: "对学习中文、哲学、教育或历史的学生尤其有意义。",
        viDescription: "Có ý nghĩa với sinh viên học tiếng Trung, triết học, giáo dục hoặc lịch sử."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Mount Taishan", url: unesco("437") }]
  },
  anhui: {
    slug: "anhui",
    title: "Huangshan scenery, Hui culture, and Hefei research momentum",
    zhTitle: "黄山风景、徽州文化与合肥科研动能",
    viTitle: "Hoàng Sơn, văn hóa Huy Châu và động lực nghiên cứu Hợp Phì",
    overview: "Anhui is underrated for students: living costs are often friendlier than the coast, Hefei has strong science and technology resources, and Huangshan plus southern Anhui villages offer some of China's most recognizable mountain and village imagery. It is a good province for students who want research value and memorable weekend travel.",
    zhOverview: "安徽对留学生来说被低估了：生活成本通常比沿海友好，合肥有很强的科技科研资源，黄山和皖南古村落又提供极具中国辨识度的山水与村落画面。适合既看重科研价值，又希望周末旅行有记忆点的学生。",
    viOverview: "An Huy thường bị đánh giá thấp: chi phí dễ chịu hơn ven biển, Hợp Phì có nguồn lực khoa học mạnh, còn Hoàng Sơn và làng cổ miền Nam An Huy tạo nên hình ảnh Trung Quốc rất đặc trưng.",
    routes: ["Hefei research day: campus, science district, local food", "Huangshan weekend: mountain sunrise and hot springs", "Village culture: Xidi, Hongcun, and Hui architecture"],
    zhRoutes: ["合肥科研线：校园、科学城与本地美食", "黄山周末线：山顶日出与温泉", "古村文化线：西递、宏村与徽派建筑"],
    viRoutes: ["Ngày nghiên cứu Hợp Phì: trường, khu khoa học và món địa phương", "Cuối tuần Hoàng Sơn: bình minh trên núi và suối nóng", "Văn hóa làng cổ: Tây Đệ, Hoành Thôn và kiến trúc Huy"],
    studentAngle: "Best for science, engineering, cost control, and students who want famous landscapes without living in a megacity.",
    zhStudentAngle: "适合理科、工程、预算控制，以及不想住超大城市但想接近著名山水的学生。",
    viStudentAngle: "Phù hợp với khoa học, kỹ thuật, kiểm soát chi phí và sinh viên muốn cảnh nổi tiếng nhưng không sống ở siêu đô thị.",
    highlights: [
      {
        name: "Xidi and Hongcun",
        zhName: "西递与宏村",
        viName: "Tây Đệ và Hoành Thôn",
        description: "Village architecture and landscapes help students see another side of Chinese civilization.",
        zhDescription: "通过村落建筑和山水格局看到中国文明的另一面。",
        viDescription: "Kiến trúc làng và cảnh quan giúp sinh viên thấy một mặt khác của văn minh Trung Hoa.",
        sourceUrl: unesco("1002")
      },
      {
        name: "Huangshan",
        zhName: "黄山",
        viName: "Hoàng Sơn",
        description: "A high-impact mountain trip with sunrise, pine trees, clouds, and classical Chinese visual language.",
        zhDescription: "日出、松树、云海和中国古典山水审美共同构成高冲击力旅行。",
        viDescription: "Bình minh, thông, biển mây và thẩm mỹ sơn thủy cổ điển tạo nên chuyến đi ấn tượng."
      },
      {
        name: "Hefei science base",
        zhName: "合肥科研基地",
        viName: "Cơ sở nghiên cứu Hợp Phì",
        description: "A practical city angle for students who care about laboratories and technology growth.",
        zhDescription: "对关心实验室和科技成长的学生很有现实意义。",
        viDescription: "Góc nhìn thực tế cho sinh viên quan tâm phòng thí nghiệm và tăng trưởng công nghệ."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Ancient Villages in Southern Anhui", url: unesco("1002") }]
  },
  hunan: {
    slug: "hunan",
    title: "Youth culture, spicy food, media energy, and surreal mountains",
    zhTitle: "青年文化、辣味美食、传媒能量与奇峰山水",
    viTitle: "Văn hóa trẻ, ẩm thực cay, truyền thông và núi kỳ ảo",
    overview: "Hunan is energetic and easy to market to young global visitors. Changsha has night food, music, entertainment media, and a lively student mood; Zhangjiajie and Wulingyuan add dramatic sandstone peaks that feel instantly shareable. It is a province where the travel story can strongly support study interest.",
    zhOverview: "湖南很有年轻气质，也很适合面向全球年轻人传播。长沙有夜宵、音乐、娱乐传媒和热闹学生氛围，张家界与武陵源提供极具传播性的奇峰景观。这里的旅行故事能强烈反过来促进留学兴趣。",
    viOverview: "Hồ Nam trẻ trung và dễ truyền thông tới giới trẻ toàn cầu. Trường Sa có đồ ăn đêm, âm nhạc, truyền thông giải trí và không khí sinh viên; Trương Gia Giới tạo điểm nhấn cảnh quan mạnh.",
    routes: ["Changsha night day: campus, riverside, food, music", "Culture day: museums and Yuelu Academy area", "Nature weekend: Zhangjiajie and Wulingyuan"],
    zhRoutes: ["长沙夜生活线：校园、江边、美食与音乐", "文化线：博物馆与岳麓书院片区", "自然周末线：张家界与武陵源"],
    viRoutes: ["Trường Sa về đêm: trường, ven sông, đồ ăn và âm nhạc", "Văn hóa: bảo tàng và khu Nhạc Lộc", "Cuối tuần thiên nhiên: Trương Gia Giới và Vũ Lăng Nguyên"],
    studentAngle: "Best for students who want energetic city life, media and engineering exposure, lower costs, and high-impact nature trips.",
    zhStudentAngle: "适合喜欢热闹城市生活、传媒和工程机会、较低成本，以及高视觉冲击自然旅行的学生。",
    viStudentAngle: "Phù hợp với sinh viên thích thành phố sôi động, truyền thông/kỹ thuật, chi phí thấp và thiên nhiên ấn tượng.",
    highlights: [
      {
        name: "Wulingyuan",
        zhName: "武陵源",
        viName: "Vũ Lăng Nguyên",
        description: "A dramatic landscape of sandstone peaks that can become a student's strongest China memory.",
        zhDescription: "由砂岩峰林构成的强视觉景观，可能成为学生最深的中国记忆之一。",
        viDescription: "Cảnh quan cột đá sa thạch mạnh mẽ, dễ trở thành ký ức Trung Quốc sâu sắc.",
        sourceUrl: unesco("640")
      },
      {
        name: "Changsha food and nightlife",
        zhName: "长沙美食与夜生活",
        viName: "Ẩm thực và đời sống đêm Trường Sa",
        description: "Good for students who want an expressive, social, affordable city rhythm.",
        zhDescription: "适合想要表达性强、社交感强且成本友好的城市节奏的学生。",
        viDescription: "Phù hợp với sinh viên muốn nhịp sống xã hội, biểu đạt và chi phí dễ chịu."
      },
      {
        name: "Media and entertainment culture",
        zhName: "传媒与娱乐文化",
        viName: "Văn hóa truyền thông và giải trí",
        description: "Adds a career and youth-culture layer beyond sightseeing.",
        zhDescription: "在观光之外增加职业和青年文化层次。",
        viDescription: "Bổ sung lớp nghề nghiệp và văn hóa trẻ ngoài du lịch."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Wulingyuan", url: unesco("640") }]
  },
  chongqing: {
    slug: "chongqing",
    title: "Mountain-city drama, hotpot, rivers, and western China industry",
    zhTitle: "山城戏剧感、火锅、江河与西部产业",
    viTitle: "Thành phố núi, lẩu, sông và công nghiệp miền Tây",
    overview: "Chongqing gives students a city experience unlike anywhere else in China: hills, bridges, light rail through buildings, river views, hotpot, and dense night scenes. It also connects western China manufacturing, logistics, and inland opening-up opportunities.",
    zhOverview: "重庆给留学生的城市体验非常独特：山地、桥梁、穿楼轻轨、江景、火锅和密集夜景共同构成强记忆点。同时它也连接中国西部制造业、物流和内陆开放机会。",
    viOverview: "Trùng Khánh đem lại trải nghiệm đô thị rất khác: núi, cầu, tàu điện xuyên tòa nhà, cảnh sông, lẩu và đêm rực rỡ; đồng thời kết nối sản xuất và logistics miền Tây.",
    routes: ["Mountain city day: rail, bridges, riverfront, night view", "Food route: hotpot, noodles, old streets", "Heritage extension: Dazu Rock Carvings or karst routes"],
    zhRoutes: ["山城一日线：轻轨、桥梁、江边与夜景", "美食线：火锅、小面与老街", "遗产延展线：大足石刻或喀斯特路线"],
    viRoutes: ["Một ngày thành phố núi: tàu điện, cầu, ven sông và cảnh đêm", "Ẩm thực: lẩu, mì và phố cũ", "Mở rộng di sản: Đại Túc Thạch Khắc hoặc tuyến karst"],
    studentAngle: "Best for students who want a visually exciting city, lower western-China costs, logistics, manufacturing, architecture, and urban studies.",
    zhStudentAngle: "适合喜欢强视觉城市、较低西部成本、物流制造、建筑和城市研究的学生。",
    viStudentAngle: "Phù hợp với sinh viên thích thành phố ấn tượng, chi phí miền Tây, logistics, sản xuất, kiến trúc và đô thị học.",
    highlights: [
      {
        name: "Dazu Rock Carvings",
        zhName: "大足石刻",
        viName: "Đại Túc Thạch Khắc",
        description: "A heritage route that adds religious art and historical depth to Chongqing's modern city image.",
        zhDescription: "为重庆现代山城形象增加宗教艺术和历史纵深的遗产线路。",
        viDescription: "Tuyến di sản bổ sung nghệ thuật tôn giáo và chiều sâu lịch sử cho hình ảnh Trùng Khánh.",
        sourceUrl: "https://whc.unesco.org/en/list/912/"
      },
      {
        name: "Hotpot and river nights",
        zhName: "火锅与江边夜景",
        viName: "Lẩu và đêm bên sông",
        description: "A high-energy first impression that young visitors remember and share.",
        zhDescription: "年轻游客很容易记住和分享的高能量第一印象。",
        viDescription: "Ấn tượng đầu tiên giàu năng lượng, dễ nhớ và dễ chia sẻ."
      },
      {
        name: "Mountain urbanism",
        zhName: "山地城市形态",
        viName: "Đô thị núi",
        description: "Useful for architecture, transport, planning, and civil-engineering students.",
        zhDescription: "对建筑、交通、规划和土木工程学生很有启发。",
        viDescription: "Hữu ích cho sinh viên kiến trúc, giao thông, quy hoạch và xây dựng."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Dazu Rock Carvings", url: "https://whc.unesco.org/en/list/912/" }]
  },
  yunnan: {
    slug: "yunnan",
    title: "Mild climate, old towns, ethnic cultures, and Southeast Asia routes",
    zhTitle: "温和气候、古城、民族文化与东南亚线路",
    viTitle: "Khí hậu ôn hòa, cổ trấn, văn hóa dân tộc và tuyến Đông Nam Á",
    overview: "Yunnan may be China's most emotionally attractive province for students who love travel. Kunming is mild and relaxed; Dali and Lijiang offer old-town life and mountain-lake scenery; the province connects ethnic cultures, biodiversity, tea routes, and Southeast Asia-facing mobility.",
    zhOverview: "云南可能是最容易在情感上打动热爱旅行学生的省份。昆明气候温和，生活松弛；大理和丽江有古城生活、山湖风景；整个省份连接民族文化、生物多样性、茶路和面向东南亚的流动性。",
    viOverview: "Vân Nam có sức hút cảm xúc rất mạnh với sinh viên thích du lịch. Côn Minh ôn hòa, Đại Lý và Lệ Giang có cổ trấn, núi hồ; tỉnh này kết nối văn hóa dân tộc, đa dạng sinh học, trà và Đông Nam Á.",
    routes: ["Kunming slow day: campus, lake, market, flowers", "Dali and Lijiang weekend: old towns, cafes, mountains", "Long route: tea mountains, Xishuangbanna, or border culture"],
    zhRoutes: ["昆明慢生活线：校园、湖泊、市场与鲜花", "大理丽江周末线：古城、咖啡馆与山景", "长线旅行：茶山、西双版纳或边境文化"],
    viRoutes: ["Ngày chậm Côn Minh: trường, hồ, chợ và hoa", "Cuối tuần Đại Lý - Lệ Giang: cổ trấn, cà phê và núi", "Tuyến dài: núi trà, Tây Song Bản Nạp hoặc văn hóa biên giới"],
    studentAngle: "Best for students who value climate comfort, language and anthropology interests, tourism, biodiversity, and Southeast Asia links.",
    zhStudentAngle: "适合重视气候舒适、语言与人类学兴趣、旅游、生物多样性和东南亚连接的学生。",
    viStudentAngle: "Phù hợp với sinh viên coi trọng khí hậu, ngôn ngữ/nhân học, du lịch, đa dạng sinh học và kết nối Đông Nam Á.",
    highlights: [
      {
        name: "Old Town of Lijiang",
        zhName: "丽江古城",
        viName: "Cổ thành Lệ Giang",
        description: "A strong old-town route for understanding architecture, water systems, and local culture.",
        zhDescription: "理解建筑、水系和地方文化的高识别度古城线路。",
        viDescription: "Tuyến cổ trấn nổi bật để hiểu kiến trúc, hệ thống nước và văn hóa địa phương.",
        sourceUrl: unesco("811")
      },
      {
        name: "Dali and Erhai",
        zhName: "大理与洱海",
        viName: "Đại Lý và Nhĩ Hải",
        description: "A youth-friendly travel scene with cycling, cafes, old streets, and mountain-lake views.",
        zhDescription: "骑行、咖啡、古街和山湖景观组成的年轻友好旅行场景。",
        viDescription: "Không gian trẻ trung với đạp xe, cà phê, phố cổ và cảnh núi hồ."
      },
      {
        name: "Ethnic culture and tea routes",
        zhName: "民族文化与茶路",
        viName: "Văn hóa dân tộc và tuyến trà",
        description: "Adds depth beyond sightseeing and supports language, culture, and tourism study interests.",
        zhDescription: "在观光之外增加深度，也支持语言、文化和旅游方向的学习兴趣。",
        viDescription: "Tạo chiều sâu ngoài tham quan, phù hợp với học ngôn ngữ, văn hóa và du lịch."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Old Town of Lijiang", url: unesco("811") }]
  },
  guangxi: {
    slug: "guangxi",
    title: "Karst landscapes, ASEAN gateway, and gentle student cities",
    zhTitle: "喀斯特山水、东盟门户与温和学生城市",
    viTitle: "Cảnh quan karst, cửa ngõ ASEAN và thành phố sinh viên nhẹ nhàng",
    overview: "Guangxi is visually powerful and regionally strategic. Guilin and Yangshuo are among the easiest China landscapes to market globally; Nanning connects ASEAN trade and culture; costs are often friendlier than coastal megacities. It is strong for students from Southeast Asia, language learners, medicine, tourism, and business.",
    zhOverview: "广西既有强视觉吸引力，也有区域战略意义。桂林和阳朔是最容易向全球传播的中国山水之一，南宁连接东盟贸易与文化，生活成本通常比沿海超大城市更友好。适合东南亚学生、语言学习、医学、旅游和商科方向。",
    viOverview: "Quảng Tây có sức hút thị giác và vị trí chiến lược. Quế Lâm, Dương Sóc rất dễ truyền thông toàn cầu; Nam Ninh kết nối ASEAN; chi phí thường dễ chịu hơn đô thị ven biển lớn.",
    routes: ["Nanning city day: campus, ASEAN culture, night markets", "Guilin weekend: Li River and karst scenery", "Yangshuo youth route: cycling, cafes, river views"],
    zhRoutes: ["南宁城市线：校园、东盟文化与夜市", "桂林周末线：漓江与喀斯特山水", "阳朔青年线：骑行、咖啡馆与江景"],
    viRoutes: ["Nam Ninh: trường, văn hóa ASEAN và chợ đêm", "Cuối tuần Quế Lâm: sông Ly và cảnh karst", "Dương Sóc: đạp xe, cà phê và cảnh sông"],
    studentAngle: "Best for ASEAN-facing students, Chinese language, medicine, tourism, business, and lower-pressure city life.",
    zhStudentAngle: "适合面向东盟的学生、中文学习、医学、旅游、商科和低压力城市生活。",
    viStudentAngle: "Phù hợp với sinh viên hướng ASEAN, tiếng Trung, y khoa, du lịch, kinh doanh và đời sống ít áp lực.",
    highlights: [
      {
        name: "Guilin and Li River",
        zhName: "桂林与漓江",
        viName: "Quế Lâm và sông Ly",
        description: "A globally recognizable China landscape for first-time student travelers.",
        zhDescription: "第一次来中国的学生很容易记住的全球级中国山水。",
        viDescription: "Cảnh quan Trung Quốc dễ nhận biết với sinh viên lần đầu du lịch."
      },
      {
        name: "South China Karst",
        zhName: "中国南方喀斯特",
        viName: "Karst Nam Trung Quốc",
        description: "Karst landscapes connect Guangxi with a wider southwest China nature route.",
        zhDescription: "喀斯特地貌把广西连接到更大的中国西南自然旅行线路。",
        viDescription: "Địa mạo karst kết nối Quảng Tây với tuyến thiên nhiên Tây Nam rộng hơn.",
        sourceUrl: unesco("1248")
      },
      {
        name: "ASEAN-facing Nanning",
        zhName: "面向东盟的南宁",
        viName: "Nam Ninh hướng ASEAN",
        description: "Good for students who want a practical bridge between China and Southeast Asia.",
        zhDescription: "适合希望在中国与东南亚之间建立实际连接的学生。",
        viDescription: "Phù hợp với sinh viên muốn cầu nối thực tế giữa Trung Quốc và Đông Nam Á."
      }
    ],
    sourceLinks: [{ label: "UNESCO: South China Karst", url: unesco("1248") }]
  },
  gansu: {
    slug: "gansu",
    title: "Silk Road memory, desert landscapes, and northwest discovery",
    zhTitle: "丝路记忆、沙漠景观与西北探索",
    viTitle: "Ký ức Con đường Tơ lụa, sa mạc và khám phá Tây Bắc",
    overview: "Gansu is perfect for SilkStudy's deeper story: China was never only coastal cities and megacampuses. Lanzhou gives a practical study base; Dunhuang and the Hexi Corridor show Buddhist art, desert-oasis routes, ancient passes, and Silk Road exchange. It is a province for students who want discovery, history, and field-trip energy.",
    zhOverview: "甘肃非常适合承载 SilkStudy 更深的品牌故事：中国不只是沿海城市和超大校园。兰州提供务实学习基地，敦煌与河西走廊展示佛教艺术、沙漠绿洲、古关隘和丝绸之路交流。这里适合喜欢探索、历史和田野旅行感的学生。",
    viOverview: "Cam Túc rất phù hợp với câu chuyện SilkStudy: Trung Quốc không chỉ có đô thị ven biển. Lan Châu là điểm học tập thực tế; Đôn Hoàng và hành lang Hà Tây thể hiện nghệ thuật Phật giáo, sa mạc - ốc đảo và giao lưu Con đường Tơ lụa.",
    routes: ["Lanzhou base day: campus, Yellow River, local noodles", "Dunhuang route: Mogao Caves, desert, night market", "Hexi Corridor holiday: Jiayuguan, Zhangye, ancient passes"],
    zhRoutes: ["兰州基地线：校园、黄河与牛肉面", "敦煌线：莫高窟、沙漠与夜市", "河西走廊假期线：嘉峪关、张掖与古关隘"],
    viRoutes: ["Lan Châu: trường, Hoàng Hà và mì bò", "Đôn Hoàng: hang Mạc Cao, sa mạc và chợ đêm", "Kỳ nghỉ hành lang Hà Tây: Gia Dục Quan, Trương Dịch và cửa ải cổ"],
    studentAngle: "Best for archaeology, history, Chinese language, regional studies, energy, agriculture, and students who want a rare China route.",
    zhStudentAngle: "适合考古、历史、中文、区域研究、能源、农业，以及想要稀缺中国路线的学生。",
    viStudentAngle: "Phù hợp với khảo cổ, lịch sử, tiếng Trung, nghiên cứu khu vực, năng lượng, nông nghiệp và tuyến Trung Quốc hiếm gặp.",
    highlights: [
      {
        name: "Mogao Caves",
        zhName: "莫高窟",
        viName: "Hang Mạc Cao",
        description: "A major Silk Road art site that makes cultural exchange tangible.",
        zhDescription: "让丝绸之路文化交流变得非常具体的艺术遗产。",
        viDescription: "Di sản nghệ thuật khiến giao lưu Con đường Tơ lụa trở nên cụ thể.",
        sourceUrl: unesco("440")
      },
      {
        name: "Hexi Corridor",
        zhName: "河西走廊",
        viName: "Hành lang Hà Tây",
        description: "A long-form travel route linking oases, passes, fortresses, and desert towns.",
        zhDescription: "连接绿洲、关隘、城堡和沙漠城镇的长线旅行。",
        viDescription: "Tuyến dài nối ốc đảo, cửa ải, pháo đài và thị trấn sa mạc.",
        sourceUrl: unesco("1442")
      },
      {
        name: "Yellow River Lanzhou",
        zhName: "兰州黄河",
        viName: "Hoàng Hà Lan Châu",
        description: "A practical daily-life anchor for students studying in the northwest.",
        zhDescription: "在西北学习的学生很现实的日常生活锚点。",
        viDescription: "Điểm neo đời sống thực tế cho sinh viên học ở Tây Bắc."
      }
    ],
    sourceLinks: [{ label: "UNESCO: Mogao Caves", url: unesco("440") }, { label: "UNESCO: Silk Roads", url: unesco("1442") }]
  },
  tianjin: {
    slug: "tianjin",
    title: "Port-city comfort beside Beijing",
    zhTitle: "北京旁边的港口城市舒适感",
    viTitle: "Thien Tan: thanh pho cang de song can Bac Kinh",
    overview: "Tianjin is a practical choice for students who want north-China access without Beijing's full cost and intensity. The city combines riverfront streets, European-style architecture, engineering universities, port logistics, and very fast rail access to Beijing.",
    zhOverview: "天津适合想要华北资源、但不想承担北京全部成本和强度的学生。这里有海河街区、欧式建筑、工程高校、港口物流，以及非常便捷的京津高铁。",
    viOverview: "Thien Tan phu hop voi sinh vien muon tiep can mien Bac Trung Quoc nhung chi phi va nhip song nhe hon Bac Kinh. Thanh pho co bo song, kien truc Au, dai hoc ky thuat va logistics cang.",
    routes: ["Haihe river walk, historic streets, and local food", "Engineering campus day plus port-economy context", "Fast rail weekend to Beijing museums and internships"],
    zhRoutes: ["海河步行、历史街区与本地美食", "工程校园与港口经济理解线", "高铁周末前往北京博物馆和实习资源"],
    viRoutes: ["Dao song Hai Ha, pho lich su va mon dia phuong", "Ngay truong ky thuat va boi canh kinh te cang", "Cuoi tuan tau nhanh den bao tang va co hoi Bac Kinh"],
    studentAngle: "Best for engineering, logistics, architecture, business, and students who want Beijing access with a calmer daily base.",
    zhStudentAngle: "适合工程、物流、建筑、商科，以及想接近北京但日常更松弛的学生。",
    viStudentAngle: "Phu hop voi ky thuat, logistics, kien truc, kinh doanh va sinh vien muon gan Bac Kinh nhung song nhe nhang hon.",
    highlights: [
      { name: "Haihe River", zhName: "海河", viName: "Song Hai Ha", description: "The best everyday route for understanding Tianjin's riverfront character.", zhDescription: "理解天津滨河城市气质的最佳日常线路。", viDescription: "Tuyen hang ngay tot nhat de hieu tinh cach ven song cua Thien Tan." },
      { name: "Historic concessions", zhName: "历史风貌区", viName: "Khu pho lich su", description: "Architecture and street life give the city a distinct northern port identity.", zhDescription: "建筑和街道生活让天津拥有独特北方港口身份。", viDescription: "Kien truc va doi song pho tao nen ban sac cang mien Bac." },
      { name: "Beijing rail access", zhName: "京津高铁", viName: "Tau nhanh Bac Kinh - Thien Tan", description: "A major advantage for students comparing cost, internships, and travel.", zhDescription: "学生比较成本、实习和旅行时的重要优势。", viDescription: "Loi the lon khi sinh vien so sanh chi phi, thuc tap va du lich." }
    ],
    sourceLinks: []
  },
  hebei: {
    slug: "hebei",
    title: "Great Wall routes, imperial resorts, coast, and Beijing-adjacent value",
    zhTitle: "长城线路、皇家山庄、海岸与京津周边价值",
    viTitle: "Tuyen Truong Thanh, son trang hoang gia, bo bien va gia tri gan Bac Kinh",
    overview: "Hebei surrounds Beijing and Tianjin, which makes it useful for students who want lower costs, northern-China industry, and strong weekend travel. Chengde, Qinhuangdao, Shanhaiguan, and Great Wall routes give it more tourism depth than many students expect.",
    zhOverview: "河北环绕北京和天津，因此适合想要较低成本、华北产业机会和周末旅行线路的学生。承德、秦皇岛、山海关和长城路线让它的旅游深度比很多学生想象得更强。",
    viOverview: "Ha Bac bao quanh Bac Kinh va Thien Tan, phu hop voi sinh vien muon chi phi thap hon, co hoi cong nghiep mien Bac va chuyen di cuoi tuan. Thua Duc, Tan Hoang Dao va cac tuyen Truong Thanh tao chieu sau du lich.",
    routes: ["Chengde imperial resort weekend", "Qinhuangdao coast and Shanhaiguan pass", "Beijing-adjacent industry and campus route"],
    zhRoutes: ["承德避暑山庄周末线", "秦皇岛海岸与山海关线路", "京津周边产业与校园线路"],
    viRoutes: ["Cuoi tuan Son trang nghi mat Thua Duc", "Bo bien Tan Hoang Dao va Son Hai Quan", "Tuyen truong va cong nghiep gan Bac Kinh"],
    studentAngle: "Best for students who want north-China access, value-friendly living, civil engineering, medicine, and weekend heritage travel.",
    zhStudentAngle: "适合想要华北资源、预算友好生活、土木工程、医学和周末遗产旅行的学生。",
    viStudentAngle: "Phu hop voi sinh vien muon tiep can mien Bac, chi phi hop ly, xay dung, y khoa va du lich di san cuoi tuan.",
    highlights: [
      { name: "Chengde Mountain Resort", zhName: "承德避暑山庄", viName: "Son trang nghi mat Thua Duc", description: "A strong imperial landscape route outside Beijing.", zhDescription: "北京之外很有代表性的皇家园林线路。", viDescription: "Tuyen canh quan hoang gia tieu bieu ngoai Bac Kinh.", sourceUrl: unesco("703") },
      { name: "Shanhaiguan and Great Wall", zhName: "山海关与长城", viName: "Son Hai Quan va Truong Thanh", description: "Connects coastal travel with one of China's most recognizable historical routes.", zhDescription: "把海岸旅行和中国最具识别度的历史路线连接起来。", viDescription: "Ket noi du lich ven bien voi tuyen lich su de nhan biet nhat Trung Quoc." },
      { name: "Qinhuangdao coast", zhName: "秦皇岛海岸", viName: "Bo bien Tan Hoang Dao", description: "A relaxed summer break option for students in north China.", zhDescription: "华北学生夏季放松的海岸选择。", viDescription: "Lua chon nghi he ven bien cho sinh vien mien Bac." }
    ],
    sourceLinks: [{ label: "UNESCO: Chengde Mountain Resort", url: unesco("703") }]
  },
  henan: {
    slug: "henan",
    title: "Central Plains origin stories and strong rail mobility",
    zhTitle: "中原文明源头与强高铁流动性",
    viTitle: "Nguon goc Trung Nguyen va kha nang di chuyen duong sat manh",
    overview: "Henan helps students understand where many Chinese civilization stories begin. Zhengzhou is a central rail hub; Luoyang and Kaifeng carry ancient capital memory; Shaolin culture and Longmen Grottoes make history visible. It is also practical for students watching budget and transport.",
    zhOverview: "河南能帮助学生理解许多中国文明故事从哪里开始。郑州是中部高铁枢纽，洛阳和开封承载古都记忆，少林文化与龙门石窟让历史变得可见。它对重视预算和交通的学生也很务实。",
    viOverview: "Ha Nam giup sinh vien hieu noi nhieu cau chuyen van minh Trung Hoa bat dau. Trinh Chau la nut duong sat, Lac Duong va Khai Phong co ky uc co do, Thieu Lam va Long Mon lam lich su tro nen truc quan.",
    routes: ["Zhengzhou rail-hub city day", "Luoyang heritage weekend: Longmen and old city", "Shaolin and Songshan culture route"],
    zhRoutes: ["郑州高铁枢纽城市线", "洛阳遗产周末线：龙门与老城", "少林与嵩山文化线"],
    viRoutes: ["Ngay thanh pho nut duong sat Trinh Chau", "Cuoi tuan di san Lac Duong: Long Mon va pho co", "Tuyen Thieu Lam va Tung Son"],
    studentAngle: "Best for Chinese language, history, transport, medicine, engineering, and students who want lower-cost central access.",
    zhStudentAngle: "适合中文、历史、交通、医学、工程，以及希望低成本进入中国中部的学生。",
    viStudentAngle: "Phu hop voi tieng Trung, lich su, giao thong, y khoa, ky thuat va chi phi mien Trung thap hon.",
    highlights: [
      { name: "Longmen Grottoes", zhName: "龙门石窟", viName: "Hang Long Mon", description: "A major visual route into Buddhist art and ancient Luoyang.", zhDescription: "进入佛教艺术和古都洛阳的重要视觉线路。", viDescription: "Tuyen truc quan quan trong vao nghe thuat Phat giao va Lac Duong co.", sourceUrl: unesco("1003") },
      { name: "Shaolin and Songshan", zhName: "少林与嵩山", viName: "Thieu Lam va Tung Son", description: "A globally recognizable cultural signal for students interested in martial arts and tradition.", zhDescription: "对武术和传统文化感兴趣的学生很容易识别的全球文化符号。", viDescription: "Bieu tuong van hoa toan cau voi sinh vien quan tam vo thuat va truyen thong." },
      { name: "Central rail hub", zhName: "中部高铁枢纽", viName: "Nut tau nhanh mien Trung", description: "Makes Henan useful for multi-city China exploration.", zhDescription: "让河南适合多城市中国探索。", viDescription: "Giup Ha Nam phu hop de kham pha nhieu thanh pho Trung Quoc." }
    ],
    sourceLinks: [{ label: "UNESCO: Longmen Grottoes", url: unesco("1003") }]
  },
  shanxi: {
    slug: "shanxi",
    title: "Ancient architecture, budget-friendly cities, and north-China heritage",
    zhTitle: "古建筑、预算友好城市与华北遗产",
    viTitle: "Kien truc co, thanh pho chi phi hop ly va di san Hoa Bac",
    overview: "Shanxi is one of China's richest provinces for ancient architecture. Taiyuan offers a practical city base, while Pingyao, Yungang, temples, courtyards, and old towns help students understand China through built heritage rather than only megacity life.",
    zhOverview: "山西是中国古建筑资源最丰富的省份之一。太原提供务实城市 base，平遥、云冈、寺庙、院落和古城让学生通过建筑遗产理解中国，而不只是通过大城市。",
    viOverview: "Son Tay rat giau kien truc co. Thai Nguyen la diem song thuc te; Binh Dao, Van Cuong, chua, san vien va co thanh giup sinh vien hieu Trung Quoc qua di san kien truc.",
    routes: ["Taiyuan base day and local food", "Pingyao Ancient City weekend", "Yungang Grottoes and temple architecture route"],
    zhRoutes: ["太原城市 base 与本地美食", "平遥古城周末线", "云冈石窟与寺庙建筑线"],
    viRoutes: ["Thai Nguyen va mon dia phuong", "Cuoi tuan co thanh Binh Dao", "Hang Van Cuong va kien truc chua"],
    studentAngle: "Best for history, architecture, archaeology, energy studies, and students who want lower living costs.",
    zhStudentAngle: "适合历史、建筑、考古、能源研究，以及希望生活成本较低的学生。",
    viStudentAngle: "Phu hop voi lich su, kien truc, khao co, nang luong va chi phi thap.",
    highlights: [
      { name: "Pingyao Ancient City", zhName: "平遥古城", viName: "Co thanh Binh Dao", description: "A preserved old-city route that turns Chinese urban history into a walkable experience.", zhDescription: "把中国城市历史变成可步行体验的古城线路。", viDescription: "Tuyen co thanh giup lich su do thi Trung Quoc tro nen co the di bo trai nghiem.", sourceUrl: unesco("812") },
      { name: "Yungang Grottoes", zhName: "云冈石窟", viName: "Hang Van Cuong", description: "A major Buddhist art site for students interested in history and visual culture.", zhDescription: "适合历史和视觉文化学生深入理解的佛教艺术遗产。", viDescription: "Di san nghe thuat Phat giao lon cho sinh vien lich su va van hoa thi giac.", sourceUrl: unesco("1039") },
      { name: "Courtyards and temples", zhName: "院落与寺庙", viName: "San vien va chua", description: "A quieter but highly distinctive China travel route.", zhDescription: "安静但辨识度很高的中国旅行线路。", viDescription: "Tuyen du lich Trung Quoc yen tinh nhung rat dac trung." }
    ],
    sourceLinks: [{ label: "UNESCO: Ping Yao", url: unesco("812") }, { label: "UNESCO: Yungang Grottoes", url: unesco("1039") }]
  },
  guizhou: {
    slug: "guizhou",
    title: "Waterfalls, mountain villages, big-data growth, and lower costs",
    zhTitle: "瀑布、山地村寨、大数据增长与低成本",
    viTitle: "Thac nuoc, ban lang nui, tang truong du lieu lon va chi phi thap",
    overview: "Guizhou is emerging as a lower-cost, high-nature destination. Guiyang is compact and increasingly connected with big-data industries; waterfalls, karst, villages, and mountain routes make the province visually memorable for students who want a different China.",
    zhOverview: "贵州正在成为低成本、高自然吸引力的目的地。贵阳紧凑，并与大数据产业联系增强；瀑布、喀斯特、村寨和山地线路让学生看到一个不同于沿海的中国。",
    viOverview: "Quy Chau dang noi len nhu diem den chi phi thap va thien nhien manh. Quy Duong gon, gan voi du lieu lon; thac, karst, lang nui tao trai nghiem Trung Quoc khac biet.",
    routes: ["Guiyang city base and food day", "Waterfall weekend: Huangguoshu route", "Village and karst culture route"],
    zhRoutes: ["贵阳城市 base 与美食线", "瀑布周末线：黄果树线路", "村寨与喀斯特文化线"],
    viRoutes: ["Quy Duong va am thuc", "Cuoi tuan thac: Hoang Qua Thu", "Tuyen lang va van hoa karst"],
    studentAngle: "Best for tourism, ecology, data economy, anthropology, and students who want affordable mountain life.",
    zhStudentAngle: "适合旅游、生态、大数据、人类学，以及希望山地生活成本友好的学生。",
    viStudentAngle: "Phu hop voi du lich, sinh thai, kinh te du lieu, nhan hoc va doi song nui chi phi hop ly.",
    highlights: [
      { name: "South China Karst", zhName: "中国南方喀斯特", viName: "Karst Nam Trung Quoc", description: "Karst terrain makes Guizhou one of China's most distinctive nature provinces.", zhDescription: "喀斯特地貌让贵州成为中国最有辨识度的自然省份之一。", viDescription: "Dia hinh karst khien Quy Chau la mot trong cac tinh thien nhien dac trung nhat Trung Quoc.", sourceUrl: unesco("1248") },
      { name: "Fanjingshan", zhName: "梵净山", viName: "Pham Tinh Son", description: "A biodiversity and mountain route for students interested in ecology.", zhDescription: "适合生态方向学生关注的生物多样性与山地线路。", viDescription: "Tuyen nui va da dang sinh hoc cho sinh vien sinh thai.", sourceUrl: unesco("1559") },
      { name: "Miao and Dong villages", zhName: "苗侗村寨", viName: "Lang Mieu va Dong", description: "Adds local culture, festivals, textiles, and music to the travel story.", zhDescription: "为旅行故事增加地方文化、节庆、织物和音乐。", viDescription: "Bo sung van hoa dia phuong, le hoi, det may va am nhac." }
    ],
    sourceLinks: [{ label: "UNESCO: Fanjingshan", url: unesco("1559") }, { label: "UNESCO: South China Karst", url: unesco("1248") }]
  },
  xinjiang: {
    slug: "xinjiang",
    title: "Silk Road scale, mountains, deserts, and western gateway context",
    zhTitle: "丝路尺度、雪山沙漠与向西门户",
    viTitle: "Quy mo Con duong To lua, nui tuyet, sa mac va cua ngo phia Tay",
    overview: "Xinjiang gives students an immense sense of geography: mountains, deserts, oases, languages, agriculture, energy, and Silk Road cities. It is a destination for planned holiday travel rather than casual weekends, but the memory value is extremely high.",
    zhOverview: "新疆给学生的是辽阔地理感：雪山、沙漠、绿洲、语言、农业、能源和丝路城市。这里更适合假期式深度旅行，而不是随意周末短途，但记忆价值极高。",
    viOverview: "Tan Cuong dem lai cam giac dia ly rong lon: nui tuyet, sa mac, oc dao, ngon ngu, nong nghiep, nang luong va thanh pho Con duong To lua. Phu hop voi ky nghi dai hon la cuoi tuan ngan.",
    routes: ["Urumqi city base and museum day", "Tianshan nature route", "Long holiday: Kashgar, oases, and desert edges"],
    zhRoutes: ["乌鲁木齐城市 base 与博物馆", "天山自然线路", "长假线：喀什、绿洲与沙漠边缘"],
    viRoutes: ["Urumqi va bao tang", "Tuyen thien nhien Thien Son", "Ky nghi dai: Kashgar, oc dao va ria sa mac"],
    studentAngle: "Best for energy, agriculture, language, regional studies, ecology, and students who want a once-in-a-lifetime China route.",
    zhStudentAngle: "适合能源、农业、语言、区域研究、生态，以及想要一生难忘中国线路的学生。",
    viStudentAngle: "Phu hop voi nang luong, nong nghiep, ngon ngu, nghien cuu khu vuc, sinh thai va trai nghiem Trung Quoc hiem co.",
    highlights: [
      { name: "Xinjiang Tianshan", zhName: "新疆天山", viName: "Thien Son Tan Cuong", description: "High mountains, valleys, and ecology give Xinjiang its strongest nature identity.", zhDescription: "高山、峡谷和生态构成新疆最强的自然身份。", viDescription: "Nui cao, thung lung va sinh thai tao nen ban sac thien nhien manh nhat.", sourceUrl: unesco("1414") },
      { name: "Kashgar and oasis culture", zhName: "喀什与绿洲文化", viName: "Kashgar va van hoa oc dao", description: "A route for understanding Silk Road trade, language, and urban life.", zhDescription: "理解丝路贸易、语言和城市生活的线路。", viDescription: "Tuyen de hieu thuong mai Con duong To lua, ngon ngu va doi song do thi." },
      { name: "Desert and agriculture routes", zhName: "沙漠与农业线路", viName: "Tuyen sa mac va nong nghiep", description: "Useful for students interested in environment, water, food systems, and energy.", zhDescription: "对关注环境、水资源、粮食系统和能源的学生有意义。", viDescription: "Huu ich voi sinh vien quan tam moi truong, nuoc, he thong luong thuc va nang luong." }
    ],
    sourceLinks: [{ label: "UNESCO: Xinjiang Tianshan", url: unesco("1414") }]
  },
  macao: {
    slug: "macao",
    title: "Compact world-heritage streets and hospitality education",
    zhTitle: "紧凑世界遗产街区与文旅酒店教育",
    viTitle: "Pho di san nho gon va giao duc khach san du lich",
    overview: "Macao is small but highly international. It gives students a compact mix of Chinese and Portuguese heritage, hospitality industries, tourism management, and easy walking routes. For SilkStudy, it is useful as a gateway story about cultural encounter and service-economy learning.",
    zhOverview: "澳门面积不大，但国际化程度高。这里把中葡历史街区、酒店文旅产业、旅游管理和可步行城市路线集中在一起。对 SilkStudy 来说，它适合讲述文化相遇和服务经济学习的故事。",
    viOverview: "Ma Cao nho nhung quoc te. Noi day ket hop di san Trung - Bo, nganh khach san du lich, quan tri du lich va tuyen di bo de trai nghiem.",
    routes: ["Historic centre walking day", "Hospitality and tourism industry route", "Greater Bay Area extension to Zhuhai and Guangzhou"],
    zhRoutes: ["历史城区步行线", "酒店文旅产业理解线", "大湾区延展：珠海与广州"],
    viRoutes: ["Di bo khu lich su", "Tuyen nganh khach san va du lich", "Mo rong Vung Vinh: Chau Hai va Quang Chau"],
    studentAngle: "Best for tourism, hospitality, business, cultural studies, and students who want a compact international environment.",
    zhStudentAngle: "适合旅游、酒店管理、商科、文化研究，以及喜欢紧凑国际化环境的学生。",
    viStudentAngle: "Phu hop voi du lich, khach san, kinh doanh, van hoa va moi truong quoc te nho gon.",
    highlights: [
      { name: "Historic Centre of Macao", zhName: "澳门历史城区", viName: "Khu lich su Ma Cao", description: "A walkable world-heritage route showing centuries of cultural exchange.", zhDescription: "用步行方式理解数百年文化交流的世界遗产线路。", viDescription: "Tuyen di san the gioi co the di bo, the hien nhieu the ky giao luu van hoa.", sourceUrl: unesco("1110") },
      { name: "Hospitality economy", zhName: "酒店文旅经济", viName: "Kinh te khach san du lich", description: "Gives students a clear industry context beyond sightseeing.", zhDescription: "在观光之外给学生清晰的产业背景。", viDescription: "Cho sinh vien boi canh nganh ro rang ngoai tham quan." },
      { name: "Greater Bay Area access", zhName: "大湾区连接", viName: "Ket noi Vung Vinh Lon", description: "Useful for linking Macao study with nearby mainland cities.", zhDescription: "便于把澳门学习与周边内地城市连接起来。", viDescription: "Huu ich de noi viec hoc o Ma Cao voi thanh pho noi dia lan can." }
    ],
    sourceLinks: [{ label: "UNESCO: Historic Centre of Macao", url: unesco("1110") }]
  },
  "hong-kong": {
    slug: "hong-kong",
    title: "Harbour skyline, global universities, and compact nature escapes",
    zhTitle: "海港天际线、全球大学与紧凑自然逃离",
    viTitle: "Cang bien, dai hoc toan cau va thien nhien gan gon",
    overview: "Hong Kong gives students an English-friendly, globally connected academic environment with Chinese cultural depth. The city is compact but layered: finance districts, universities, ferries, hiking trails, beaches, markets, and museums can all fit into student life.",
    zhOverview: "香港提供英语友好、全球连接强，同时又有中国文化深度的学术环境。城市紧凑但层次丰富：金融区、大学、渡轮、徒步、海滩、市场和博物馆都可以进入学生生活。",
    viOverview: "Hong Kong co moi truong hoc thuat than thien tieng Anh, ket noi toan cau va chieu sau van hoa Trung Hoa. Thanh pho nho nhung nhieu lop: tai chinh, dai hoc, pha, hiking, bai bien, cho va bao tang.",
    routes: ["Harbour day: campus, ferry, skyline, museum", "Career day: Central, fintech, creative industries", "Nature reset: hiking trail or island beach"],
    zhRoutes: ["海港一日线：校园、渡轮、天际线与博物馆", "职业线：中环、金融科技与创意产业", "自然放松线：徒步路线或离岛海滩"],
    viRoutes: ["Ngay cang: truong, pha, skyline va bao tang", "Nghe nghiep: Central, fintech va sang tao", "Thien nhien: hiking hoac bai bien dao"],
    studentAngle: "Best for business, finance, law, medicine, creative industries, and students who want English-medium options in a Chinese city context.",
    zhStudentAngle: "适合商科、金融、法律、医学、创意产业，以及希望在中国城市语境中选择英语项目的学生。",
    viStudentAngle: "Phu hop voi kinh doanh, tai chinh, luat, y khoa, sang tao va chuong trinh tieng Anh trong boi canh thanh pho Trung Hoa.",
    highlights: [
      { name: "Victoria Harbour", zhName: "维多利亚港", viName: "Cang Victoria", description: "A compact visual symbol of Hong Kong's international city identity.", zhDescription: "香港国际城市身份最紧凑的视觉符号。", viDescription: "Bieu tuong thi giac co dong cua ban sac quoc te Hong Kong." },
      { name: "Hiking and islands", zhName: "徒步与离岛", viName: "Hiking va dao", description: "Nature is unusually close to campuses and business districts.", zhDescription: "自然环境离校园和商业区都非常近。", viDescription: "Thien nhien rat gan truong hoc va khu kinh doanh." },
      { name: "Global academic network", zhName: "全球学术网络", viName: "Mang luoi hoc thuat toan cau", description: "Strong for students comparing mainland, Asia, and global career pathways.", zhDescription: "适合比较内地、亚洲和全球职业路径的学生。", viDescription: "Phu hop voi sinh vien so sanh lo trinh nghe nghiep noi dia, chau A va toan cau." }
    ],
    sourceLinks: []
  }
};

export function getProvinceTourismGuide(slug: string) {
  return provinceTourismGuides[slug];
}
