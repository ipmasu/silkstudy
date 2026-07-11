export type University = {
  slug: string;
  name: string;
  chineseName: string;
  qsRanking: number;
  tuition: string;
  location: string;
  citySlug: string;
  provinceSlug: string;
  foundedYear: number;
  website: string;
  internationalStudents: string;
  majors: string[];
  scholarships: string[];
  summary: string;
  applicationProfile?: UniversityApplicationProfile;
  campusLife: {
    nearbyLiving: string;
    foodAndDailyLife: string;
    tourism: string;
    internshipsAndCareers: string;
    transportAndSafety: string;
  };
  media?: UniversityMedia[];
  reviews: UniversityReview[];
};

export type UniversityApplicationProfile = {
  sourceTitle: string;
  sourceDate?: string;
  sourceUrl?: string;
  rankingHighlights: string[];
  eligibility: string[];
  languageRequirements: string[];
  applicationSteps: string[];
  fees: {
    application?: string;
    tuition?: string;
    insurance?: string;
    accommodation?: string;
  };
  programNotes: string[];
};

export type UniversityMedia = {
  type: "LOGO" | "COVER" | "PHOTO" | "VIDEO";
  url: string;
  alt?: string;
  publicId?: string;
  sortOrder?: number;
};

export type UniversityReview = {
  authorName: string;
  authorCountry: string;
  program: string;
  rating: number;
  title: string;
  content: string;
  pros: string;
  cons: string;
  isVerified: boolean;
};

export type Province = {
  slug: string;
  name: string;
  cityCount: number;
  universityCount: number;
  topMajors: string[];
  cities: string[];
  summary: string;
};

export type City = {
  slug: string;
  name: string;
  province: string;
  livingCost: string;
  climate: string;
  visaConvenience: string;
  summary: string;
};

export const majors = [
  "Computer Science",
  "Artificial Intelligence",
  "Medicine",
  "Engineering",
  "Business",
  "Chinese Language",
  "Architecture",
  "Aerospace",
  "Physics",
  "Marine Science"
];

export const provinces: Province[] = [
  {
    slug: "beijing",
    name: "Beijing",
    cityCount: 1,
    universityCount: 2,
    topMajors: ["Computer Science", "Engineering", "Chinese Language"],
    cities: ["Beijing"],
    summary: "China's capital and a leading center for research universities, policy, culture, and international exchange."
  },
  {
    slug: "shanghai",
    name: "Shanghai",
    cityCount: 1,
    universityCount: 2,
    topMajors: ["Business", "Medicine", "Artificial Intelligence"],
    cities: ["Shanghai"],
    summary: "A global commercial city with strong international programs and excellent transport access."
  },
  {
    slug: "zhejiang",
    name: "Zhejiang",
    cityCount: 1,
    universityCount: 1,
    topMajors: ["Engineering", "Computer Science", "Medicine"],
    cities: ["Hangzhou"],
    summary: "A technology and innovation province anchored by Hangzhou's digital economy and university ecosystem."
  },
  {
    slug: "jiangsu",
    name: "Jiangsu",
    cityCount: 1,
    universityCount: 2,
    topMajors: ["Engineering", "Computer Science", "Business"],
    cities: ["Nanjing"],
    summary: "A strong education province with historic universities, manufacturing clusters, and fast access to Shanghai."
  },
  {
    slug: "guangdong",
    name: "Guangdong",
    cityCount: 1,
    universityCount: 2,
    topMajors: ["Medicine", "Business", "Engineering"],
    cities: ["Guangzhou"],
    summary: "A southern innovation and trade hub connected to the Greater Bay Area, Shenzhen, Hong Kong, and global supply chains."
  },
  {
    slug: "hubei",
    name: "Hubei",
    cityCount: 1,
    universityCount: 2,
    topMajors: ["Engineering", "Medicine", "Computer Science"],
    cities: ["Wuhan"],
    summary: "Central China's major university hub, known for engineering, medicine, transport, and a large student population."
  },
  {
    slug: "shaanxi",
    name: "Shaanxi",
    cityCount: 1,
    universityCount: 1,
    topMajors: ["Engineering", "Computer Science", "Aerospace"],
    cities: ["Xi'an"],
    summary: "A historic education center with strong engineering, aerospace, electronics, and cultural tourism resources."
  },
  {
    slug: "sichuan",
    name: "Sichuan",
    cityCount: 1,
    universityCount: 1,
    topMajors: ["Medicine", "Engineering", "Chinese Language"],
    cities: ["Chengdu"],
    summary: "A livable western China study destination with medicine, engineering, tech parks, and rich food culture."
  },
  {
    slug: "fujian",
    name: "Fujian",
    cityCount: 1,
    universityCount: 1,
    topMajors: ["Business", "Marine Science", "Chinese Language"],
    cities: ["Xiamen"],
    summary: "A coastal province with a comfortable student lifestyle, Southeast Asia links, and strong business programs."
  },
  {
    slug: "tianjin",
    name: "Tianjin",
    cityCount: 1,
    universityCount: 2,
    topMajors: ["Engineering", "Business", "Medicine"],
    cities: ["Tianjin"],
    summary: "A port city near Beijing with strong engineering universities, lower living costs, and convenient transport."
  },
  {
    slug: "shandong",
    name: "Shandong",
    cityCount: 1,
    universityCount: 1,
    topMajors: ["Engineering", "Medicine", "Business"],
    cities: ["Jinan"],
    summary: "A large coastal province with solid universities, industry, Confucian heritage, and moderate living costs."
  },
  {
    slug: "anhui",
    name: "Anhui",
    cityCount: 1,
    universityCount: 1,
    topMajors: ["Physics", "Computer Science", "Engineering"],
    cities: ["Hefei"],
    summary: "A fast-growing science and technology province centered on Hefei's research institutions and innovation zones."
  },
  {
    slug: "heilongjiang",
    name: "Heilongjiang",
    cityCount: 1,
    universityCount: 1,
    topMajors: ["Engineering", "Aerospace", "Computer Science"],
    cities: ["Harbin"],
    summary: "A northeast engineering education base with distinctive winter culture and strong technical universities."
  },
  {
    slug: "hunan",
    name: "Hunan",
    cityCount: 2,
    universityCount: 2,
    topMajors: ["Medicine", "Engineering", "Business"],
    cities: ["Changsha", "Zhuzhou"],
    summary: "A central China province with energetic student life, growing media and manufacturing sectors, and respected universities."
  }
];

export const cities: City[] = [
  {
    slug: "beijing",
    name: "Beijing",
    province: "Beijing",
    livingCost: "$750-1,100/month",
    climate: "Cold dry winters, warm summers",
    visaConvenience: "Excellent embassy, airport, and university support",
    summary: "Beijing offers the deepest concentration of elite universities and cultural resources in China."
  },
  {
    slug: "shanghai",
    name: "Shanghai",
    province: "Shanghai",
    livingCost: "$850-1,300/month",
    climate: "Humid subtropical with mild winters",
    visaConvenience: "Excellent international transport and student services",
    summary: "Shanghai is ideal for students seeking business, finance, medicine, and global career exposure."
  },
  {
    slug: "hangzhou",
    name: "Hangzhou",
    province: "Zhejiang",
    livingCost: "$650-950/month",
    climate: "Mild and humid with four seasons",
    visaConvenience: "Strong university and city-level support",
    summary: "Hangzhou combines strong research universities with a high-quality student lifestyle."
  },
  {
    slug: "nanjing",
    name: "Nanjing",
    province: "Jiangsu",
    livingCost: "$600-950/month",
    climate: "Hot summers and cool winters",
    visaConvenience: "Strong university support and easy Shanghai access",
    summary: "Nanjing is a historic university city with many research institutions and a lower cost than Shanghai."
  },
  {
    slug: "guangzhou",
    name: "Guangzhou",
    province: "Guangdong",
    livingCost: "$700-1,050/month",
    climate: "Warm humid subtropical climate",
    visaConvenience: "Excellent international airport and consular access",
    summary: "Guangzhou offers strong business, medicine, trade, and Greater Bay Area career exposure."
  },
  {
    slug: "wuhan",
    name: "Wuhan",
    province: "Hubei",
    livingCost: "$500-850/month",
    climate: "Hot summers, cool winters",
    visaConvenience: "Large student population and strong university services",
    summary: "Wuhan is one of China's biggest student cities, with strong engineering and medical universities."
  },
  {
    slug: "xian",
    name: "Xi'an",
    province: "Shaanxi",
    livingCost: "$500-800/month",
    climate: "Dry climate with hot summers and cold winters",
    visaConvenience: "Good university and city support",
    summary: "Xi'an combines engineering education, aerospace industries, and deep historical tourism."
  },
  {
    slug: "chengdu",
    name: "Chengdu",
    province: "Sichuan",
    livingCost: "$550-850/month",
    climate: "Mild humid climate",
    visaConvenience: "Good international student services",
    summary: "Chengdu is known for a relaxed lifestyle, food culture, healthcare, and a growing tech economy."
  },
  {
    slug: "xiamen",
    name: "Xiamen",
    province: "Fujian",
    livingCost: "$600-950/month",
    climate: "Warm coastal climate",
    visaConvenience: "Good coastal transport and university services",
    summary: "Xiamen is a scenic coastal student city with strong links to Southeast Asia."
  },
  {
    slug: "tianjin",
    name: "Tianjin",
    province: "Tianjin",
    livingCost: "$550-850/month",
    climate: "Dry winters and warm summers",
    visaConvenience: "Near Beijing with strong transport access",
    summary: "Tianjin offers lower costs than Beijing while retaining access to northern China career networks."
  },
  {
    slug: "jinan",
    name: "Jinan",
    province: "Shandong",
    livingCost: "$500-800/month",
    climate: "Four seasons with hot summers",
    visaConvenience: "Stable university support",
    summary: "Jinan is a provincial capital with moderate costs, industry links, and traditional cultural resources."
  },
  {
    slug: "hefei",
    name: "Hefei",
    province: "Anhui",
    livingCost: "$500-780/month",
    climate: "Humid subtropical with four seasons",
    visaConvenience: "Good support through research universities",
    summary: "Hefei is increasingly known for science, quantum research, AI, and advanced manufacturing."
  },
  {
    slug: "harbin",
    name: "Harbin",
    province: "Heilongjiang",
    livingCost: "$450-750/month",
    climate: "Very cold winters and mild summers",
    visaConvenience: "Experienced international engineering programs",
    summary: "Harbin is a lower-cost engineering city with distinctive winter culture."
  },
  {
    slug: "nanning",
    name: "Nanning",
    province: "Guangxi",
    livingCost: "$350-650/month",
    climate: "Warm humid subtropical climate",
    visaConvenience: "ASEAN-facing international student and talent services",
    summary: "Nanning is a green, affordable ASEAN-facing city with strong regional universities, food culture, and cross-cultural exchange."
  },
  {
    slug: "changsha",
    name: "Changsha",
    province: "Hunan",
    livingCost: "$500-800/month",
    climate: "Humid subtropical climate",
    visaConvenience: "Growing support for international students",
    summary: "Changsha has energetic youth culture, strong food scenes, and growing manufacturing and media industries."
  },
  {
    slug: "zhuzhou",
    name: "Zhuzhou",
    province: "Hunan",
    livingCost: "$400-700/month",
    climate: "Humid subtropical climate with hot summers and mild winters",
    visaConvenience: "University support with fast rail access to Changsha",
    summary: "Zhuzhou is an affordable rail-transit and manufacturing city in the Changsha-Zhuzhou-Xiangtan metropolitan area."
  }
];

export const universities: University[] = [
  {
    slug: "peking-university",
    name: "Peking University",
    chineseName: "北京大学",
    qsRanking: 14,
    tuition: "$4,000-$6,500/year",
    location: "Beijing",
    citySlug: "beijing",
    provinceSlug: "beijing",
    foundedYear: 1898,
    website: "https://english.pku.edu.cn",
    internationalStudents: "7,000+",
    majors: ["Computer Science", "Business", "Chinese Language"],
    scholarships: ["CSC Scholarship", "Peking University Scholarship"],
    summary: "A comprehensive research university with globally recognized programs across sciences, humanities, medicine, and business.",
    applicationProfile: {
      sourceTitle: "Peking University International Students undergraduate admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://www.isd.pku.edu.cn/",
      rankingHighlights: [
        "One of China's most selective comprehensive research universities.",
        "Strong global recognition across humanities, sciences, social sciences, economics, management, and medicine.",
        "Located in Beijing's Haidian university district, close to research institutes and national cultural resources."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and appropriate academic preparation for undergraduate study.",
        "Final eligibility, nationality documentation, age rules, and document requirements must be checked against the current PKU annual admission notice.",
        "Competitive programs may require entrance assessment, interview, portfolio, or additional department review."
      ],
      languageRequirements: [
        "Chinese-taught programs normally require demonstrated Chinese proficiency, usually through HSK or equivalent evidence.",
        "English-taught or bilingual options may require IELTS, TOEFL, or prior English-medium education evidence.",
        "Exact language thresholds vary by program and application year."
      ],
      applicationSteps: [
        "Review the current international undergraduate admission notice and program list.",
        "Prepare passport, graduation proof, transcripts, language proof, personal statement, recommendation materials, and any program-specific documents.",
        "Submit the online application through the official PKU international student system.",
        "Track review, assessment, admission, scholarship, and visa-material steps through official channels."
      ],
      fees: {
        tuition: "Program-specific tuition should be confirmed from the annual PKU admission notice.",
        accommodation: "Campus accommodation and off-campus housing availability should be confirmed during admission and registration."
      },
      programNotes: [
        "PKU is especially attractive for students targeting Chinese language, humanities, economics, management, sciences, medicine, and research-intensive pathways.",
        "Beijing location makes it strong for policy, culture, research, media, technology, and international-organization exposure.",
        "Applicants should start early because top programs are highly competitive and document review can be strict."
      ]
    },
    campusLife: {
      nearbyLiving: "Haidian District is dense with universities, bookstores, cafes, budget restaurants, gyms, and student apartments. Daily life is convenient, but rent near campus is higher than outer Beijing districts.",
      foodAndDailyLife: "Students can find campus dining, international food around Wudaokou, halal options, vegetarian restaurants, and many affordable Chinese meals near subway stations.",
      tourism: "The Summer Palace, Yuanmingyuan, Tsinghua campus, the Forbidden City, and hutong neighborhoods are reachable by subway or short ride-hailing trips.",
      internshipsAndCareers: "Beijing offers strong internship access in technology, policy research, media, education, finance, international organizations, and startup ecosystems around Zhongguancun.",
      transportAndSafety: "The area is well connected by subway and buses. It is generally safe for students, with busy streets late into the evening around major university zones."
    },
    reviews: [
      {
        authorName: "Amina R.",
        authorCountry: "Pakistan",
        program: "Chinese Language",
        rating: 5,
        title: "Academic pressure is real, but the city opens many doors",
        content: "The campus is beautiful and the international office helped me settle in. Beijing can feel intense at first, but the university network and city resources are excellent.",
        pros: "Strong academics, many lectures, convenient subway access",
        cons: "Housing near campus is expensive",
        isVerified: true
      },
      {
        authorName: "Minh T.",
        authorCountry: "Vietnam",
        program: "Business",
        rating: 4,
        title: "Great for networking and language progress",
        content: "I improved my Chinese quickly because daily life pushes you to practice. There are many student clubs and professional events.",
        pros: "Networking, student clubs, city opportunities",
        cons: "Winter air and cold weather need adjustment",
        isVerified: true
      }
    ]
  },
  {
    slug: "tsinghua-university",
    name: "Tsinghua University",
    chineseName: "清华大学",
    qsRanking: 20,
    tuition: "$4,500-$7,000/year",
    location: "Beijing",
    citySlug: "beijing",
    provinceSlug: "beijing",
    foundedYear: 1911,
    website: "https://www.tsinghua.edu.cn/en",
    internationalStudents: "5,000+",
    majors: ["Artificial Intelligence", "Engineering", "Computer Science"],
    scholarships: ["CSC Scholarship", "Beijing Government Scholarship"],
    summary: "A top engineering and technology university with a strong global reputation and growing English-taught programs.",
    applicationProfile: {
      sourceTitle: "Tsinghua University international undergraduate admission and application procedures",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://international.join-tsinghua.edu.cn/",
      rankingHighlights: [
        "One of China's strongest universities for engineering, technology, computer science, architecture, design, economics, and management.",
        "Highly selective undergraduate admission with a strong international applicant pool.",
        "Located in Beijing's Haidian innovation and university district, close to Zhongguancun technology networks."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and appropriate high-school completion credentials.",
        "Application eligibility, nationality rules, age requirements, and document formats should be checked against the current Tsinghua annual admission notice.",
        "Some programs may require additional tests, interviews, portfolios, or department-level review."
      ],
      languageRequirements: [
        "Chinese-taught undergraduate programs generally require Chinese proficiency evidence such as HSK.",
        "English-taught pathways may require IELTS, TOEFL, or equivalent proof of English-medium education.",
        "Program-specific language thresholds should be verified in the official application system."
      ],
      applicationSteps: [
        "Create an account in the official Tsinghua international admissions system.",
        "Choose program direction and upload required academic, passport, language, recommendation, and personal-statement materials.",
        "Complete review, assessment, and interview steps if required.",
        "Follow official admission, scholarship, residence, and visa-material instructions after results are released."
      ],
      fees: {
        tuition: "Program-specific tuition should be confirmed from the official Tsinghua admission notice.",
        accommodation: "Dormitory availability and fees vary by campus arrangement and admission year."
      },
      programNotes: [
        "Best suited for students seeking intense engineering, AI, computer science, robotics, clean energy, architecture, design, business, or research pathways.",
        "Applicants should show strong academic preparation, project experience, and clear motivation.",
        "The university's location makes internships and research exposure especially strong for technology-focused students."
      ]
    },
    campusLife: {
      nearbyLiving: "Tsinghua sits in Haidian's university district, close to Peking University, Wudaokou, study cafes, bicycle routes, and technology communities.",
      foodAndDailyLife: "Campus dining is broad and affordable. Wudaokou and Zhongguancun add international food, coffee shops, electronics stores, and student-friendly services.",
      tourism: "Students often visit the Summer Palace, Olympic Park, university museums, and central Beijing on weekends.",
      internshipsAndCareers: "The location is excellent for AI, engineering, semiconductor, clean energy, robotics, and startup internships, especially around Zhongguancun.",
      transportAndSafety: "Cycling is common on and near campus. Subway access makes commuting manageable, and the campus environment is highly structured and safe."
    },
    reviews: [
      {
        authorName: "Daniel K.",
        authorCountry: "Kenya",
        program: "Engineering",
        rating: 5,
        title: "Best fit if you want engineering intensity",
        content: "The workload is heavy, but labs and classmates are impressive. Career talks and project opportunities are frequent.",
        pros: "Labs, engineering culture, career access",
        cons: "Very competitive environment",
        isVerified: true
      }
    ]
  },
  {
    slug: "fudan-university",
    name: "Fudan University",
    chineseName: "复旦大学",
    qsRanking: 39,
    tuition: "$3,800-$6,800/year",
    location: "Shanghai",
    citySlug: "shanghai",
    provinceSlug: "shanghai",
    foundedYear: 1905,
    website: "https://www.fudan.edu.cn/en",
    internationalStudents: "6,000+",
    majors: ["Medicine", "Business", "Chinese Language"],
    scholarships: ["CSC Scholarship", "Shanghai Government Scholarship"],
    summary: "A major research university in Shanghai, known for medicine, management, social sciences, and international programs.",
    applicationProfile: {
      sourceTitle: "Fudan University international student admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://iso.fudan.edu.cn/",
      rankingHighlights: [
        "A major comprehensive research university in Shanghai with strong medicine, management, social sciences, humanities, and science programs.",
        "Shanghai location gives students access to multinational companies, hospitals, finance, trade, design, and media ecosystems.",
        "Strong fit for students who want an internationally accessible Chinese megacity with serious academic resources."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and appropriate prior academic credentials.",
        "Undergraduate, graduate, and language-program eligibility varies by program and annual admission notice.",
        "Medical, management, and selective programs may require additional review or program-specific materials."
      ],
      languageRequirements: [
        "Chinese-taught programs normally require HSK or equivalent Chinese proficiency evidence.",
        "English-taught programs may require IELTS, TOEFL, or proof of prior English-medium education.",
        "Exact thresholds should be checked against the current Fudan admission notice."
      ],
      applicationSteps: [
        "Review the current international student admission notice and program catalog.",
        "Prepare passport, transcripts, graduation proof, language proof, personal statement, and recommendations.",
        "Submit the online application through Fudan's international student admission system.",
        "Follow assessment, admission, scholarship, housing, visa, and registration instructions from the university."
      ],
      fees: {
        tuition: "Tuition varies by degree level and program; confirm with the annual admission notice.",
        accommodation: "Dormitory and off-campus housing details should be checked before arrival because Shanghai housing costs vary."
      },
      programNotes: [
        "Fudan is particularly strong for students interested in medicine, management, economics, social sciences, humanities, Chinese language, and urban career exposure.",
        "Shanghai's international services make transition easier for first-time China students.",
        "Applicants should consider both academic competitiveness and Shanghai living cost."
      ]
    },
    campusLife: {
      nearbyLiving: "Fudan's Yangpu area has a strong student atmosphere with malls, cafes, hospitals, libraries, sports venues, and many rental options.",
      foodAndDailyLife: "Shanghai is one of China's easiest cities for international daily life, with global food, delivery services, English-friendly venues, and excellent healthcare access.",
      tourism: "The Bund, Yu Garden, museums, art districts, Disneyland, Suzhou, and Hangzhou are popular weekend options.",
      internshipsAndCareers: "Shanghai is ideal for finance, consulting, medicine, biotech, retail, trade, marketing, and multinational company internships.",
      transportAndSafety: "Metro coverage is excellent. Shanghai is generally easy for first-time international students because services are modern and predictable."
    },
    reviews: [
      {
        authorName: "Sofia M.",
        authorCountry: "Italy",
        program: "Medicine",
        rating: 5,
        title: "Shanghai makes international life easier",
        content: "The city is convenient and modern. Clinical exposure and academic expectations are serious, but support systems are much better than I expected.",
        pros: "International city, hospitals, transport",
        cons: "Living cost is higher than smaller cities",
        isVerified: true
      }
    ]
  },
  {
    slug: "zhejiang-university",
    name: "Zhejiang University",
    chineseName: "浙江大学",
    qsRanking: 47,
    tuition: "$3,500-$6,200/year",
    location: "Hangzhou",
    citySlug: "hangzhou",
    provinceSlug: "zhejiang",
    foundedYear: 1897,
    website: "https://www.zju.edu.cn/english",
    internationalStudents: "7,000+",
    majors: ["Engineering", "Computer Science", "Medicine"],
    scholarships: ["CSC Scholarship", "Zhejiang University Scholarship"],
    summary: "A comprehensive university with strong research output and a campus environment connected to Hangzhou's tech economy.",
    applicationProfile: {
      sourceTitle: "Zhejiang University international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://iczu.zju.edu.cn/",
      rankingHighlights: [
        "One of China's strongest comprehensive research universities with broad strength in engineering, computer science, medicine, agriculture, sciences, and management.",
        "Connected to Hangzhou's digital economy, e-commerce, cloud computing, fintech, and AI application ecosystem.",
        "Campus and city setting are attractive for students balancing serious research with a scenic, livable environment."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and appropriate academic qualifications for the chosen degree level.",
        "Undergraduate eligibility, document rules, nationality requirements, and assessment steps should be checked against the latest ZJU international admission notice.",
        "Some programs may require subject background, interview, or department review."
      ],
      languageRequirements: [
        "Chinese-taught programs normally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, Duolingo-style evidence where accepted, or prior English-medium education evidence.",
        "Program-specific language thresholds must be verified with the current program catalog."
      ],
      applicationSteps: [
        "Check the latest international student program catalog and scholarship options.",
        "Prepare academic transcripts, graduation proof, passport, language proof, personal statement, recommendations, and program-specific materials.",
        "Submit through Zhejiang University's official international student application channel.",
        "Track admission review, scholarship result, housing, visa, and registration instructions."
      ],
      fees: {
        tuition: "Tuition depends on degree level and program; confirm with the current ZJU admission notice.",
        accommodation: "Dormitory availability and fees should be checked with the university before arrival."
      },
      programNotes: [
        "ZJU is a strong fit for students interested in computer science, AI, engineering, medicine, agriculture, business, and digital-economy careers.",
        "Hangzhou gives students scenic travel value through West Lake, tea culture, canals, and water towns.",
        "Chinese ability can meaningfully improve internship access in Hangzhou's tech ecosystem."
      ]
    },
    campusLife: {
      nearbyLiving: "Hangzhou offers a calmer lifestyle than Beijing or Shanghai, with strong cafes, lakeside areas, student housing, and a growing international community.",
      foodAndDailyLife: "Daily costs are moderate for a major city. Students enjoy local Zhejiang cuisine, delivery apps, supermarkets, and quiet study spaces.",
      tourism: "West Lake, Lingyin Temple, tea villages, Xixi Wetland, and nearby water towns make Hangzhou one of China's most pleasant student cities.",
      internshipsAndCareers: "Hangzhou is strong for e-commerce, cloud computing, fintech, AI applications, logistics, and digital media internships.",
      transportAndSafety: "The city is clean, organized, and generally safe. Metro and bike-sharing make student mobility easy."
    },
    reviews: [
      {
        authorName: "Lucas P.",
        authorCountry: "Brazil",
        program: "Computer Science",
        rating: 4,
        title: "A good balance of study and lifestyle",
        content: "Hangzhou is beautiful and not as overwhelming as bigger cities. The tech scene is real, and it is easier to focus here.",
        pros: "Lifestyle, tech companies, scenery",
        cons: "Some internships require Chinese ability",
        isVerified: true
      }
    ]
  },
  {
    slug: "shanghai-jiao-tong-university",
    name: "Shanghai Jiao Tong University",
    chineseName: "上海交通大学",
    qsRanking: 45,
    tuition: "$4,000-$6,900/year",
    location: "Shanghai",
    citySlug: "shanghai",
    provinceSlug: "shanghai",
    foundedYear: 1896,
    website: "https://en.sjtu.edu.cn",
    internationalStudents: "4,000+",
    majors: ["Artificial Intelligence", "Engineering", "Business"],
    scholarships: ["CSC Scholarship", "Shanghai Jiao Tong University Scholarship"],
    summary: "A research-intensive university especially strong in engineering, computer science, medicine, and innovation programs.",
    applicationProfile: {
      sourceTitle: "Shanghai Jiao Tong University international admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://isc.sjtu.edu.cn/",
      rankingHighlights: [
        "A research-intensive university with major strength in engineering, computer science, AI, medicine, business, and innovation.",
        "Shanghai location gives strong access to multinational employers, hospitals, engineering companies, finance, and Yangtze River Delta industry.",
        "Especially attractive for students seeking a high-rigor academic environment with strong career exposure."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials appropriate for the target program.",
        "Eligibility, nationality rules, age requirements, and program-specific documents should be checked against the current SJTU international admission notice.",
        "Selective programs may require interviews, entrance assessment, or school-level review."
      ],
      languageRequirements: [
        "Chinese-taught programs usually require Chinese proficiency evidence such as HSK.",
        "English-taught programs usually require English proficiency evidence such as IELTS, TOEFL, or accepted equivalent proof.",
        "Medical and professional programs may have additional language and academic background requirements."
      ],
      applicationSteps: [
        "Review the latest SJTU international program list, campus information, and scholarship options.",
        "Prepare passport, transcripts, graduation proof, language proof, personal statement, recommendations, and any program-specific documents.",
        "Submit through the official SJTU international student application system.",
        "Follow university review, interview, admission, scholarship, housing, and visa-material steps."
      ],
      fees: {
        tuition: "Tuition varies by program, especially between engineering, business, and medical tracks; confirm from the annual admission notice.",
        accommodation: "Campus and housing arrangement vary by program and campus location."
      },
      programNotes: [
        "SJTU is especially strong for engineering, AI, computer science, medicine, business, and innovation-oriented students.",
        "Campus location matters for daily commute and lifestyle; students should compare program campus before choosing.",
        "Shanghai creates strong internship value but also higher living-cost pressure."
      ]
    },
    campusLife: {
      nearbyLiving: "Depending on campus, students may experience either central Shanghai convenience or a larger suburban campus setting with more space and lower daily costs.",
      foodAndDailyLife: "Shanghai's food, shopping, sports, healthcare, and entertainment options are among the best in China, with many international services.",
      tourism: "Students can explore the Bund, French Concession, museums, live music venues, and weekend trips to Suzhou, Hangzhou, and Nanjing.",
      internshipsAndCareers: "The university has strong links to engineering, automotive, AI, biotech, finance, consulting, and multinational employers in the Yangtze River Delta.",
      transportAndSafety: "Shanghai's metro and high-speed rail access are major advantages. Campuses are safe, though commute time varies by campus."
    },
    reviews: [
      {
        authorName: "Noura A.",
        authorCountry: "Egypt",
        program: "Artificial Intelligence",
        rating: 5,
        title: "Strong career exposure in Shanghai",
        content: "The coursework is demanding, but Shanghai gives you many ways to meet companies and understand the market.",
        pros: "Career events, engineering reputation, city access",
        cons: "Campus location matters a lot",
        isVerified: true
      }
    ]
  },
  {
    slug: "nanjing-university",
    name: "Nanjing University",
    chineseName: "南京大学",
    qsRanking: 145,
    tuition: "$3,500-$6,000/year",
    location: "Nanjing",
    citySlug: "nanjing",
    provinceSlug: "jiangsu",
    foundedYear: 1902,
    website: "https://www.nju.edu.cn/en",
    internationalStudents: "3,000+",
    majors: ["Computer Science", "Business", "Chinese Language"],
    scholarships: ["CSC Scholarship", "Nanjing University Scholarship"],
    summary: "A comprehensive research university in a historic city, strong in sciences, humanities, and international programs.",
    applicationProfile: {
      sourceTitle: "Nanjing University international undergraduate admission notice",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://istudy.nju.edu.cn/",
      rankingHighlights: [
        "A leading comprehensive research university in a historic capital with strengths in sciences, humanities, computer science, business, and Chinese language.",
        "Nanjing offers lower living costs than Shanghai while staying connected to the Yangtze River Delta.",
        "Strong fit for students who want an academic city with museums, city walls, lakes, and fast rail access."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and high-school or higher academic credentials for undergraduate study.",
        "Annual notices should be checked for age, health, nationality-document, and guardian requirements.",
        "Recent undergraduate admission guidance indicates CSCA reporting is becoming important for international undergraduate applicants."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught options may require IELTS, TOEFL, or accepted proof of English-medium education.",
        "Program-specific thresholds and exemptions should be confirmed with the current NJU admission notice."
      ],
      applicationSteps: [
        "Review the current NJU international undergraduate program list and admission notice.",
        "Prepare passport, transcripts, graduation proof, language proof, recommendation materials, and personal statement.",
        "Submit the online application through the official NJU international student channel.",
        "Follow review, CSCA or assessment, admission, scholarship, visa, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current NJU admission notice.",
        accommodation: "Dormitory and off-campus housing costs should be checked before arrival."
      },
      programNotes: [
        "Best suited for students interested in sciences, Chinese language, humanities, computer science, business, and a classic academic city.",
        "Nanjing's transport makes Shanghai, Suzhou, Hangzhou, and other Yangtze River Delta cities easy weekend options.",
        "The city offers a strong balance of historical depth, affordability, and career access."
      ]
    },
    campusLife: {
      nearbyLiving: "Nanjing offers a classic university-city lifestyle with lower rent than Shanghai, strong subway access, and many student neighborhoods.",
      foodAndDailyLife: "Students can find affordable local food, campus canteens, cafes, bookstores, and convenient delivery services.",
      tourism: "Popular weekend places include Xuanwu Lake, Confucius Temple, Purple Mountain, city walls, and nearby Suzhou or Shanghai.",
      internshipsAndCareers: "Nanjing connects students to software, finance, manufacturing, education, and Yangtze River Delta employers.",
      transportAndSafety: "The city is well connected by metro and high-speed rail, and student areas are generally safe."
    },
    reviews: [
      {
        authorName: "Sara L.",
        authorCountry: "Malaysia",
        program: "Chinese Language",
        rating: 4,
        title: "A comfortable city for serious study",
        content: "Nanjing feels academic and affordable. It is easier to settle in than some larger cities, while still having enough opportunities.",
        pros: "Historic city, lower costs, strong academic atmosphere",
        cons: "Summer can be hot",
        isVerified: true
      }
    ]
  },
  {
    slug: "southeast-university",
    name: "Southeast University",
    chineseName: "东南大学",
    qsRanking: 450,
    tuition: "$3,200-$5,500/year",
    location: "Nanjing",
    citySlug: "nanjing",
    provinceSlug: "jiangsu",
    foundedYear: 1902,
    website: "https://www.seu.edu.cn/english",
    internationalStudents: "2,000+",
    majors: ["Engineering", "Computer Science", "Business"],
    scholarships: ["CSC Scholarship", "Southeast University Scholarship"],
    summary: "A leading engineering university in Nanjing, known for architecture, civil engineering, electronics, and transport.",
    applicationProfile: {
      sourceTitle: "Southeast University international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://cis.seu.edu.cn/",
      rankingHighlights: [
        "A strong engineering university in Nanjing with recognized programs in architecture, civil engineering, electronics, transport, computer science, and biomedical engineering.",
        "Good fit for students who want practical engineering training in a lower-cost Yangtze River Delta city.",
        "Nanjing gives access to regional employers while keeping historic and cultural travel close."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials matching the chosen degree level.",
        "Annual SEU admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Engineering and architecture-related programs may require strong mathematics, science, design, or portfolio preparation."
      ],
      languageRequirements: [
        "Chinese-taught programs usually require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or prior English-medium education evidence.",
        "Exact thresholds vary by program and intake."
      ],
      applicationSteps: [
        "Check the official SEU international admissions page and program catalog.",
        "Prepare academic documents, passport, language proof, personal statement, recommendations, and department-specific materials.",
        "Submit the online application through SEU's international student channel.",
        "Track review, admission, scholarship, visa, housing, and registration steps."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current SEU admission notice.",
        accommodation: "Dormitory availability and cost should be confirmed before arrival."
      },
      programNotes: [
        "Especially relevant for architecture, civil engineering, transport engineering, electronics, computer science, and practical engineering applicants.",
        "Nanjing is useful for students who want industry access without Shanghai-level living costs.",
        "Chinese ability improves internship and project communication in local engineering settings."
      ]
    },
    campusLife: {
      nearbyLiving: "Campus life is practical and student-focused, with convenient food, libraries, and access to Nanjing's city center.",
      foodAndDailyLife: "Daily costs are manageable, with many student dining options and affordable local restaurants.",
      tourism: "Students can explore Nanjing's historical sites, riverside districts, museums, and nearby Yangtze River Delta cities.",
      internshipsAndCareers: "Nanjing provides opportunities in civil engineering, electronics, software, rail transit, and manufacturing.",
      transportAndSafety: "Metro and campus transport make commuting easy; the city is generally safe for students."
    },
    reviews: [
      {
        authorName: "Omar H.",
        authorCountry: "Jordan",
        program: "Engineering",
        rating: 4,
        title: "Good choice for engineering students",
        content: "The engineering environment is strong and practical. Some courses are demanding, but the city is comfortable.",
        pros: "Engineering focus, affordable city, good campus",
        cons: "English support varies by department",
        isVerified: true
      }
    ]
  },
  {
    slug: "sun-yat-sen-university",
    name: "Sun Yat-sen University",
    chineseName: "中山大学",
    qsRanking: 323,
    tuition: "$3,500-$6,500/year",
    location: "Guangzhou",
    citySlug: "guangzhou",
    provinceSlug: "guangdong",
    foundedYear: 1924,
    website: "https://www.sysu.edu.cn/sysuen",
    internationalStudents: "3,500+",
    majors: ["Medicine", "Business", "Chinese Language"],
    scholarships: ["CSC Scholarship", "Guangdong Government Scholarship"],
    summary: "A major comprehensive university in South China with strengths in medicine, business, sciences, and international exchange.",
    applicationProfile: {
      sourceTitle: "2026 Sun Yat-sen University Bachelor's Degree Programs for International Students",
      sourceDate: "Official 2026 bachelor's admission guide",
      sourceUrl: "https://iso.sysu.edu.cn/en/application/selffunded/1420575.htm",
      rankingHighlights: [
        "A major comprehensive university in South China with strengths in medicine, business, sciences, humanities, and international exchange.",
        "Guangzhou location connects students to the Greater Bay Area, trade, hospitals, logistics, finance, and cross-border business.",
        "Strong for students who want warm weather, Cantonese culture, and access to Shenzhen, Hong Kong, and Macao."
      ],
      eligibility: [
        "Applicants must be non-Chinese citizens holding valid ordinary passports, in good physical and mental health, and hold a high school diploma or above.",
        "All undergraduate applicants must take the CSCA and submit valid results for their selected program.",
        "Applicants must comply with the university's nationality-document rules and any program-specific academic requirements."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK Level 5 with a score of 180 or above.",
        "The Chinese Language undergraduate program requires HSK Level 4 with a score of 180 or above.",
        "Applicants should check the official program list for any additional language requirements."
      ],
      applicationSteps: [
        "Review the official 2026 undergraduate program list and required CSCA subjects.",
        "Prepare passport, diploma, transcripts, CSCA report, language proof, health and conduct documents, and other required materials.",
        "Apply through Sun Yat-sen University's official international student application system during an application round.",
        "Track assessment, admission, visa, housing, and registration instructions."
      ],
      fees: {
        application: "CNY 400",
        tuition: "Humanities: CNY 26,000/year; science, engineering, and agriculture: CNY 33,800/year; medicine: CNY 48,000/year.",
        insurance: "CNY 800/year",
        accommodation: "Housing arrangement and costs vary by campus and should be confirmed before arrival."
      },
      programNotes: [
        "2026 application rounds: January 1-February 28 and March 1-April 30.",
        "Strong fit for medicine, business, Chinese language, science, public health, and Greater Bay Area career exposure.",
        "Students should compare campus locations because SYSU has multiple campuses."
      ]
    },
    campusLife: {
      nearbyLiving: "Guangzhou offers convenient urban living, diverse food, and access to the Greater Bay Area.",
      foodAndDailyLife: "Cantonese food, international restaurants, halal options, and delivery services are widely available.",
      tourism: "Students often visit Shamian Island, Canton Tower, museums, Shenzhen, Hong Kong, and Macau.",
      internshipsAndCareers: "The city is strong for trade, medicine, finance, logistics, e-commerce, and multinational internships.",
      transportAndSafety: "Metro coverage is strong and the city is experienced with international visitors."
    },
    reviews: [
      {
        authorName: "Linh P.",
        authorCountry: "Vietnam",
        program: "Business",
        rating: 5,
        title: "Great location for business and trade",
        content: "Guangzhou is active and international. It is a good place to understand business in South China.",
        pros: "Business environment, food, city access",
        cons: "Humid weather takes adjustment",
        isVerified: true
      }
    ]
  },
  {
    slug: "south-china-university-of-technology",
    name: "South China University of Technology",
    chineseName: "华南理工大学",
    qsRanking: 392,
    tuition: "$3,300-$5,800/year",
    location: "Guangzhou",
    citySlug: "guangzhou",
    provinceSlug: "guangdong",
    foundedYear: 1952,
    website: "https://www.scut.edu.cn/en",
    internationalStudents: "2,000+",
    majors: ["Engineering", "Computer Science", "Business"],
    scholarships: ["CSC Scholarship", "SCUT International Scholarship"],
    summary: "A strong engineering and technology university connected to manufacturing, design, and the Greater Bay Area economy.",
    applicationProfile: {
      sourceTitle: "South China University of Technology international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://www2.scut.edu.cn/sie_en/",
      rankingHighlights: [
        "A leading South China engineering and technology university with strengths in materials, chemical engineering, architecture, food science, design, computer science, and business.",
        "Located in Guangzhou with access to the Greater Bay Area manufacturing, hardware, product design, software, and trade ecosystem.",
        "Practical fit for students targeting engineering careers and industry-linked projects."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials matching the target program.",
        "Annual SCUT admission notices should be checked for age, nationality-document, health, and program-specific requirements.",
        "Engineering and design-related programs may require strong mathematics, science, or portfolio preparation."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted equivalent English proof.",
        "Exact requirements vary by program and application year."
      ],
      applicationSteps: [
        "Review the SCUT School of International Education program list and admission notice.",
        "Prepare passport, transcripts, graduation proof, language proof, recommendations, and study plan.",
        "Submit the online application through the official international student system.",
        "Follow university review, admission, scholarship, visa, housing, and registration steps."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the latest SCUT admission notice.",
        accommodation: "Campus and dormitory arrangements should be confirmed before arrival."
      },
      programNotes: [
        "Especially strong for engineering, materials, architecture, food science, design, computer science, and industry-facing business paths.",
        "Guangzhou and Shenzhen create strong internship possibilities in hardware, manufacturing, software, product design, and supply chain.",
        "Chinese communication ability can substantially improve project and internship access."
      ]
    },
    campusLife: {
      nearbyLiving: "Students benefit from Guangzhou's mature transport, food, and commercial services.",
      foodAndDailyLife: "Campus and city food options are broad, and daily services are convenient for international students.",
      tourism: "The Greater Bay Area gives easy weekend access to Shenzhen, Hong Kong, Macau, and coastal destinations.",
      internshipsAndCareers: "Guangzhou and Shenzhen offer engineering, product design, hardware, software, and supply chain internships.",
      transportAndSafety: "Metro access and campus security are strong; commuting depends on campus and company location."
    },
    reviews: [
      {
        authorName: "Ravi S.",
        authorCountry: "India",
        program: "Engineering",
        rating: 4,
        title: "Useful for practical engineering careers",
        content: "The university has a practical engineering feel and Guangzhou gives many business connections.",
        pros: "Industry access, engineering focus, affordable food",
        cons: "Some opportunities need Chinese communication",
        isVerified: true
      }
    ]
  },
  {
    slug: "wuhan-university",
    name: "Wuhan University",
    chineseName: "武汉大学",
    qsRanking: 194,
    tuition: "$3,000-$5,500/year",
    location: "Wuhan",
    citySlug: "wuhan",
    provinceSlug: "hubei",
    foundedYear: 1893,
    website: "https://en.whu.edu.cn",
    internationalStudents: "3,000+",
    majors: ["Computer Science", "Medicine", "Chinese Language"],
    scholarships: ["CSC Scholarship", "Wuhan University Scholarship"],
    summary: "A scenic comprehensive university in central China, known for campus beauty, sciences, medicine, and engineering.",
    applicationProfile: {
      sourceTitle: "Wuhan University international student admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://admission.whu.edu.cn/",
      rankingHighlights: [
        "A major comprehensive university in central China with strong campus identity, sciences, medicine, engineering, humanities, and international programs.",
        "Wuhan is one of China's largest student cities, making it attractive for students who want a large peer community and lower costs than coastal megacities.",
        "East Lake, cherry blossom season, and central China rail access give Wuhan strong study-travel appeal."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials matching the target program.",
        "Degree level, age, nationality-document, and health requirements should be checked against the current WHU admission notice.",
        "Medical and selective programs may require additional academic background or program-level assessment."
      ],
      languageRequirements: [
        "Chinese-taught programs usually require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or proof of prior English-medium education.",
        "Exact thresholds vary by program and annual notice."
      ],
      applicationSteps: [
        "Review the official WHU international admissions program list and scholarship options.",
        "Prepare passport, transcripts, graduation proof, language proof, recommendations, and personal statement.",
        "Submit through the official online application channel.",
        "Track review, admission, scholarship, visa, and arrival instructions from the university."
      ],
      fees: {
        tuition: "Tuition varies by degree level and program; confirm from the annual WHU admission notice.",
        accommodation: "Dormitory and living-cost details should be confirmed before arrival."
      },
      programNotes: [
        "Good fit for students considering medicine, Chinese language, computer science, engineering, humanities, and central China city life.",
        "Wuhan's lower living cost can reduce budget pressure for students applying without full scholarships.",
        "The city is strong for transport, healthcare, optics, software, automotive, and logistics exposure."
      ]
    },
    campusLife: {
      nearbyLiving: "Wuhan is a large student city with affordable living and many campuses, malls, hospitals, and food streets.",
      foodAndDailyLife: "Local breakfast culture, campus dining, cafes, and delivery services make daily life affordable.",
      tourism: "East Lake, Yellow Crane Tower, museums, riverfront areas, and cherry blossom season are major highlights.",
      internshipsAndCareers: "Wuhan offers opportunities in optics, automotive, healthcare, software, logistics, and education.",
      transportAndSafety: "Metro coverage is broad, and university districts are active and student-friendly."
    },
    reviews: [
      {
        authorName: "Fatima A.",
        authorCountry: "Morocco",
        program: "Medicine",
        rating: 4,
        title: "Affordable city with a big student community",
        content: "Wuhan has many students and the cost is much lower than Shanghai. The campus is beautiful.",
        pros: "Cost, campus, student community",
        cons: "Summer weather is very hot",
        isVerified: true
      }
    ]
  },
  {
    slug: "huazhong-university-of-science-and-technology",
    name: "Huazhong University of Science and Technology",
    chineseName: "华中科技大学",
    qsRanking: 275,
    tuition: "$3,200-$5,800/year",
    location: "Wuhan",
    citySlug: "wuhan",
    provinceSlug: "hubei",
    foundedYear: 1952,
    website: "https://english.hust.edu.cn",
    internationalStudents: "3,000+",
    majors: ["Engineering", "Medicine", "Computer Science"],
    scholarships: ["CSC Scholarship", "HUST Scholarship"],
    summary: "A top engineering and medical university in Wuhan with strong research output and large campus resources.",
    applicationProfile: {
      sourceTitle: "Huazhong University of Science and Technology international student admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://iso.hust.edu.cn/",
      rankingHighlights: [
        "A major research university in Wuhan with strong engineering, medicine, computer science, optoelectronics, AI, public health, and manufacturing links.",
        "Located near Optics Valley, giving students exposure to software, photonics, electronics, AI applications, and medical technology industries.",
        "Large campus and lower Wuhan living costs make it practical for technical and medical students."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials appropriate for the chosen degree level.",
        "Annual HUST admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Medical and engineering programs may require strong science background or additional review."
      ],
      languageRequirements: [
        "Chinese-taught programs usually require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted proof of English-medium education.",
        "Exact program thresholds should be confirmed through the current admission guide."
      ],
      applicationSteps: [
        "Review HUST's official international admissions guide and program catalog.",
        "Prepare passport, transcripts, graduation proof, language proof, recommendations, and study plan.",
        "Submit through the official international student application system.",
        "Track assessment, admission, scholarship, visa, housing, and registration steps."
      ],
      fees: {
        tuition: "Tuition depends on program and degree level; confirm from the current HUST admission notice.",
        accommodation: "Dormitory and living-cost information should be verified before arrival."
      },
      programNotes: [
        "Strong for engineering, computer science, AI, optoelectronics, medicine, public health, and medical technology applicants.",
        "Optics Valley gives career relevance beyond classroom learning.",
        "Wuhan offers a large student environment and lower daily costs than Beijing, Shanghai, or Shenzhen."
      ]
    },
    campusLife: {
      nearbyLiving: "HUST has a large campus environment with practical student services and affordable nearby housing.",
      foodAndDailyLife: "Campus canteens and nearby food streets keep daily costs low.",
      tourism: "Students enjoy East Lake, Optics Valley, museums, and central Wuhan attractions.",
      internshipsAndCareers: "Optics Valley provides opportunities in software, optoelectronics, AI, medical technology, and manufacturing.",
      transportAndSafety: "The area is connected by metro and is familiar with large student populations."
    },
    reviews: [
      {
        authorName: "Kevin M.",
        authorCountry: "Ghana",
        program: "Computer Science",
        rating: 4,
        title: "Strong technical environment",
        content: "It is a good fit if you want engineering or computer science and a lower-cost city.",
        pros: "Technical programs, affordable, large campus",
        cons: "Campus is big, so travel time matters",
        isVerified: true
      }
    ]
  },
  {
    slug: "xian-jiaotong-university",
    name: "Xi'an Jiaotong University",
    chineseName: "西安交通大学",
    qsRanking: 291,
    tuition: "$3,000-$5,600/year",
    location: "Xi'an",
    citySlug: "xian",
    provinceSlug: "shaanxi",
    foundedYear: 1896,
    website: "https://en.xjtu.edu.cn",
    internationalStudents: "2,500+",
    majors: ["Engineering", "Computer Science", "Business"],
    scholarships: ["CSC Scholarship", "Xi'an Jiaotong University Scholarship"],
    summary: "A historic engineering and research university with strong links to western China industries.",
    applicationProfile: {
      sourceTitle: "Xi'an Jiaotong University international undergraduate admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://sie.xjtu.edu.cn/",
      rankingHighlights: [
        "A historic research university with major strength in engineering, energy, electronics, management, medicine, and western China industry links.",
        "Xi'an combines serious engineering culture with ancient-capital tourism, lower living costs, and strong rail access.",
        "A strong destination for students who want technical training and a deeper historical China experience."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and appropriate previous academic credentials.",
        "Annual undergraduate eligibility, age, nationality, health, and document rules should be verified with XJTU's current international admission notice.",
        "Some programs may require mathematics, science, interview, or department review."
      ],
      languageRequirements: [
        "Chinese-taught programs normally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted equivalent English proof.",
        "Engineering and medical programs may have additional academic-background expectations."
      ],
      applicationSteps: [
        "Check the current XJTU international student admission guide and program catalog.",
        "Prepare passport, transcripts, graduation certificate, language proof, personal statement, recommendations, and program-specific documents.",
        "Submit through the official XJTU School of International Education application channel.",
        "Follow admission, scholarship, JW/visa material, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current XJTU admission guide.",
        accommodation: "Dormitory and living-cost details should be checked with the School of International Education."
      },
      programNotes: [
        "Especially relevant for engineering, computer science, energy, electronics, rail, management, and medicine applicants.",
        "Xi'an is compelling for students who want affordable living plus Terracotta Warriors, city walls, Muslim Quarter, museums, and mountain trips.",
        "Chinese language ability helps unlock more internships in local industry and research settings."
      ]
    },
    campusLife: {
      nearbyLiving: "Xi'an has affordable living, strong food culture, and a slower pace than coastal megacities.",
      foodAndDailyLife: "Noodle shops, halal food, campus dining, and markets are easy to find.",
      tourism: "Terracotta Warriors, ancient city walls, Muslim Quarter, museums, and mountains are weekend highlights.",
      internshipsAndCareers: "Xi'an is strong in aerospace, electronics, energy, rail, software, and advanced manufacturing.",
      transportAndSafety: "Metro access is improving, and student areas are generally safe."
    },
    reviews: [
      {
        authorName: "Aziz K.",
        authorCountry: "Uzbekistan",
        program: "Engineering",
        rating: 4,
        title: "Affordable and serious engineering culture",
        content: "The city is affordable and the engineering culture is strong. It is less international than Shanghai but easier on budget.",
        pros: "Cost, engineering, history",
        cons: "Fewer English-speaking services",
        isVerified: true
      }
    ]
  },
  {
    slug: "sichuan-university",
    name: "Sichuan University",
    chineseName: "四川大学",
    qsRanking: 355,
    tuition: "$3,000-$5,800/year",
    location: "Chengdu",
    citySlug: "chengdu",
    provinceSlug: "sichuan",
    foundedYear: 1896,
    website: "https://en.scu.edu.cn",
    internationalStudents: "3,000+",
    majors: ["Medicine", "Engineering", "Chinese Language"],
    scholarships: ["CSC Scholarship", "Sichuan University Scholarship"],
    summary: "A major western China university in Chengdu, known for medicine, engineering, humanities, and student lifestyle.",
    applicationProfile: {
      sourceTitle: "Sichuan University international student admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://en.scu.edu.cn/",
      rankingHighlights: [
        "A major comprehensive university in western China with strengths in medicine, engineering, humanities, sciences, and regional research.",
        "Chengdu is a high-appeal student city with food culture, tea houses, technology growth, and access to western Sichuan travel routes.",
        "Strong fit for students who want a lower-pressure lifestyle than coastal megacities while keeping medical and engineering options."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials suitable for the chosen degree level.",
        "Specific nationality, age, health, and document requirements should be verified with the current SCU international admission notice.",
        "Medical, engineering, and selective programs may require additional program-level review."
      ],
      languageRequirements: [
        "Chinese-taught programs usually require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof of English ability.",
        "Language requirements vary by program and should be confirmed before application."
      ],
      applicationSteps: [
        "Review the latest SCU international admissions guide, program list, and scholarship information.",
        "Prepare passport, academic transcripts, graduation proof, language proof, personal statement, and recommendation materials.",
        "Submit the official online application and monitor review status.",
        "Follow admission, scholarship, visa, housing, and registration instructions from the university."
      ],
      fees: {
        tuition: "Tuition depends on degree level and program; confirm with the current SCU admission notice.",
        accommodation: "Dormitory and off-campus housing options should be verified before arrival."
      },
      programNotes: [
        "Strong for students interested in medicine, dentistry, engineering, Chinese language, humanities, and western China development.",
        "Chengdu adds major lifestyle value through food, tea culture, panda trips, temples, mountains, and western Sichuan travel.",
        "The city is also useful for software, gaming, healthcare, electronics, and western China business exposure."
      ]
    },
    campusLife: {
      nearbyLiving: "Chengdu is comfortable, affordable, and known for a relaxed student lifestyle.",
      foodAndDailyLife: "Sichuan cuisine, cafes, tea houses, campus dining, and delivery services are excellent.",
      tourism: "Students can visit pandas, temples, mountains, ancient towns, and western Sichuan landscapes.",
      internshipsAndCareers: "Chengdu offers opportunities in healthcare, software, gaming, electronics, and western China business.",
      transportAndSafety: "Metro access is strong and Chengdu is considered a friendly city for students."
    },
    reviews: [
      {
        authorName: "Maya N.",
        authorCountry: "Thailand",
        program: "Chinese Language",
        rating: 5,
        title: "Very livable and welcoming",
        content: "Chengdu is one of the easiest cities to enjoy as a student. Food and daily life are great.",
        pros: "Lifestyle, food, friendly city",
        cons: "Internships may need Chinese",
        isVerified: true
      }
    ]
  },
  {
    slug: "xiamen-university",
    name: "Xiamen University",
    chineseName: "厦门大学",
    qsRanking: 362,
    tuition: "$3,000-$5,800/year",
    location: "Xiamen",
    citySlug: "xiamen",
    provinceSlug: "fujian",
    foundedYear: 1921,
    website: "https://en.xmu.edu.cn",
    internationalStudents: "2,500+",
    majors: ["Business", "Chinese Language", "Engineering"],
    scholarships: ["CSC Scholarship", "Xiamen University Scholarship"],
    summary: "A scenic coastal university with strengths in business, economics, marine science, and Southeast Asia links.",
    applicationProfile: {
      sourceTitle: "Xiamen University international undergraduate admissions",
      sourceDate: "2026 official admissions pages; verify program details before submission",
      sourceUrl: "https://admissions.xmu.edu.cn/Admissions/Undergraduate_Students.htm",
      rankingHighlights: [
        "A scenic coastal research university with strengths in economics, business, marine science, Chinese language, engineering, and Southeast Asia studies.",
        "Xiamen combines a comfortable international student environment with beaches, Gulangyu, coastal walks, and regional trade links.",
        "Strong destination for students prioritizing campus beauty, coastal lifestyle, and Southeast Asia-facing opportunities."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and appropriate high-school completion credentials.",
        "Annual admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Applicants must provide authentic application materials and meet the university's international student admission regulations."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted proof of prior English-medium education.",
        "Applicants from countries where English is an official language may qualify for exemptions under the applicable program rules."
      ],
      applicationSteps: [
        "Review XMU's current international undergraduate program guide and scholarship options.",
        "Prepare passport, transcripts, graduation proof, language proof, personal statement, and program-specific materials.",
        "Submit through Xiamen University's official international admissions system.",
        "Follow admission, scholarship, insurance, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program; confirm from the current XMU admission guide.",
        insurance: "Official admission information lists medical insurance at CNY 800/year.",
        accommodation: "Dormitory availability and cost should be confirmed before arrival."
      },
      programNotes: [
        "Especially attractive for business, economics, marine science, Chinese language, engineering, and Southeast Asia-focused study.",
        "Xiamen offers a compact, clean, coastal lifestyle that can be easier for first-time international students.",
        "Trade, tourism, logistics, finance, and cross-border business are useful local career themes."
      ]
    },
    campusLife: {
      nearbyLiving: "Xiamen is scenic, coastal, and comfortable, with a more relaxed pace than major inland cities.",
      foodAndDailyLife: "Seafood, cafes, campus dining, and Southeast Asia-influenced food are common.",
      tourism: "Gulangyu Island, beaches, coastal roads, temples, and nearby Fujian villages are popular.",
      internshipsAndCareers: "Xiamen offers opportunities in trade, tourism, finance, logistics, marine economy, and cross-border business.",
      transportAndSafety: "The city is compact, clean, and generally safe for international students."
    },
    reviews: [
      {
        authorName: "Grace W.",
        authorCountry: "Indonesia",
        program: "Business",
        rating: 5,
        title: "Beautiful campus and coastal lifestyle",
        content: "The city is peaceful and the campus environment helps you focus. It is a good fit for students from Southeast Asia.",
        pros: "Campus, weather, lifestyle",
        cons: "Fewer big-city internships than Shanghai",
        isVerified: true
      }
    ]
  },
  {
    slug: "tianjin-university",
    name: "Tianjin University",
    chineseName: "天津大学",
    qsRanking: 285,
    tuition: "$3,000-$5,600/year",
    location: "Tianjin",
    citySlug: "tianjin",
    provinceSlug: "tianjin",
    foundedYear: 1895,
    website: "https://www.tju.edu.cn/english",
    internationalStudents: "2,500+",
    majors: ["Engineering", "Business", "Architecture"],
    scholarships: ["CSC Scholarship", "Tianjin University Scholarship"],
    summary: "China's first modern university, strong in engineering, architecture, chemical engineering, and management.",
    applicationProfile: {
      sourceTitle: "Tianjin University admission for international students",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://en.tju.edu.cn/Admissions1.htm",
      rankingHighlights: [
        "China's first modern university, with major strengths in engineering, architecture, chemical engineering, management, and applied research.",
        "Tianjin offers lower living costs than Beijing while remaining connected by fast high-speed rail.",
        "Strong fit for students who want engineering value, port-industry exposure, and access to the Beijing-Tianjin-Hebei region."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials appropriate for the chosen program.",
        "Admission is based on academic background, capability review, and interview where required.",
        "Annual notices should be checked for age, health, nationality-document, and program-specific rules."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted proof of English-medium education.",
        "Exact thresholds and exemptions vary by program."
      ],
      applicationSteps: [
        "Review the current TJU international program list and scholarship information.",
        "Prepare passport, transcripts, graduation proof, language proof, personal statement, and recommendations.",
        "Submit through the official Tianjin University international application channel.",
        "After admission, follow the university's visa, physical examination, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current TJU admission notice.",
        accommodation: "Dormitory and living-cost details should be confirmed before arrival."
      },
      programNotes: [
        "Especially relevant for architecture, chemical engineering, civil engineering, engineering management, and applied science applicants.",
        "Tianjin combines engineering and port-industry access with frequent Beijing day trips.",
        "The university also participates in foundation-program pathways for some international undergraduates."
      ]
    },
    campusLife: {
      nearbyLiving: "Tianjin gives students northern China access with lower living costs than Beijing.",
      foodAndDailyLife: "Local snacks, campus canteens, malls, and cafes are affordable and easy to reach.",
      tourism: "Italian Style Town, Haihe River, museums, and Beijing day trips are common.",
      internshipsAndCareers: "Tianjin connects to engineering, port logistics, architecture, manufacturing, and Beijing-Tianjin-Hebei employers.",
      transportAndSafety: "High-speed rail to Beijing is fast, and city districts around universities are generally safe."
    },
    reviews: [
      {
        authorName: "Ahmed E.",
        authorCountry: "Egypt",
        program: "Architecture",
        rating: 4,
        title: "Good engineering value near Beijing",
        content: "Tianjin is cheaper than Beijing but close enough for weekend trips and career events.",
        pros: "Cost, engineering history, Beijing access",
        cons: "Less international than Shanghai",
        isVerified: true
      }
    ]
  },
  {
    slug: "nankai-university",
    name: "Nankai University",
    chineseName: "南开大学",
    qsRanking: 384,
    tuition: "$3,000-$5,500/year",
    location: "Tianjin",
    citySlug: "tianjin",
    provinceSlug: "tianjin",
    foundedYear: 1919,
    website: "https://en.nankai.edu.cn",
    internationalStudents: "2,000+",
    majors: ["Business", "Chinese Language", "Computer Science"],
    scholarships: ["CSC Scholarship", "Nankai University Scholarship"],
    summary: "A respected comprehensive university known for economics, business, chemistry, mathematics, and international education.",
    applicationProfile: {
      sourceTitle: "Nankai University international undergraduate admission",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://ensie.nankai.edu.cn/DEGREE_PROGRAMS/UNDERGRADUATE/ADMISSION.htm",
      rankingHighlights: [
        "A respected comprehensive university known for economics, business, chemistry, mathematics, Chinese language, and international education.",
        "Tianjin gives students a quieter and more affordable urban base with quick access to Beijing.",
        "Strong fit for students interested in business, economics, science, language, and international exchange."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and official senior-high-school credentials or current academic transcripts.",
        "Annual admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Admitted students use the Admission Notice and JW201/JW202 form when applying for an X1 student visa."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof.",
        "Exact requirements vary by undergraduate program."
      ],
      applicationSteps: [
        "Review Nankai's current undergraduate program list and detailed professional requirements.",
        "Prepare passport, transcripts, graduation proof, language proof, and required personal materials.",
        "Submit through Nankai University's official international student admission channel.",
        "Follow assessment, admission, scholarship, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current Nankai admission notice.",
        accommodation: "Dormitory and living-cost details should be checked before arrival."
      },
      programNotes: [
        "Strong for economics, business, chemistry, mathematics, Chinese language, and international education.",
        "Tianjin living costs can be more manageable than Beijing or Shanghai.",
        "Fast rail makes Beijing career events, museums, and travel routes accessible."
      ]
    },
    campusLife: {
      nearbyLiving: "Students get a quieter urban study environment with access to Tianjin malls, parks, and lower-cost housing.",
      foodAndDailyLife: "Campus dining, local breakfast, cafes, and daily services are affordable.",
      tourism: "Haihe River, historic concessions, museums, and Beijing trips are popular.",
      internshipsAndCareers: "Tianjin and nearby Beijing support finance, education, trade, consulting, and technology opportunities.",
      transportAndSafety: "The city is easy to navigate and generally safe around university districts."
    },
    reviews: [
      {
        authorName: "Julia S.",
        authorCountry: "Russia",
        program: "Business",
        rating: 4,
        title: "Quiet but academically strong",
        content: "It is a good place if you want serious study without the pressure and cost of Beijing.",
        pros: "Academics, cost, calm city",
        cons: "Nightlife is limited",
        isVerified: true
      }
    ]
  },
  {
    slug: "university-of-science-and-technology-of-china",
    name: "University of Science and Technology of China",
    chineseName: "中国科学技术大学",
    qsRanking: 133,
    tuition: "$3,500-$6,000/year",
    location: "Hefei",
    citySlug: "hefei",
    provinceSlug: "anhui",
    foundedYear: 1958,
    website: "https://en.ustc.edu.cn",
    internationalStudents: "1,500+",
    majors: ["Computer Science", "Physics", "Engineering"],
    scholarships: ["CSC Scholarship", "USTC Fellowship"],
    summary: "A highly selective science and technology university known for physics, computing, quantum research, and engineering.",
    applicationProfile: {
      sourceTitle: "University of Science and Technology of China international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://isa.ustc.edu.cn/",
      rankingHighlights: [
        "A highly selective science and technology university known for physics, mathematics, computer science, quantum research, engineering, and research-intensive education.",
        "Hefei is a major national science center with strong laboratories and lower living costs than China's largest coastal cities.",
        "Best suited for students who prioritize research depth and technical training over megacity lifestyle."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and strong academic credentials appropriate for the target program.",
        "Annual USTC admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Science and engineering applicants should demonstrate strong mathematics and science preparation."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught graduate and selected degree programs may require IELTS, TOEFL, or accepted proof of English-medium education.",
        "Exact thresholds vary by program and intake."
      ],
      applicationSteps: [
        "Review USTC's current international admissions guide, program list, and fellowship options.",
        "Prepare passport, transcripts, graduation proof, language proof, recommendations, study plan, and research materials where required.",
        "Submit through the official USTC international student application channel.",
        "Follow academic review, interview, fellowship, admission, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by degree level and program; confirm from the current USTC admission notice.",
        accommodation: "Dormitory and living-cost details should be checked before arrival."
      },
      programNotes: [
        "Especially strong for physics, mathematics, computer science, quantum information, engineering, and research-focused students.",
        "The academic environment is intensive and may suit students seeking laboratories and research mentorship.",
        "Hefei offers science-city career exposure with more manageable living costs."
      ]
    },
    campusLife: {
      nearbyLiving: "Hefei is quieter and cheaper than coastal megacities, with a strong science campus atmosphere.",
      foodAndDailyLife: "Daily costs are low, and students rely on campus services, local restaurants, and malls.",
      tourism: "Students can visit local parks, museums, Huangshan trips, Nanjing, and Shanghai by high-speed rail.",
      internshipsAndCareers: "Hefei is growing in AI, quantum technology, displays, EV supply chains, and advanced manufacturing.",
      transportAndSafety: "The city is manageable, calm, and generally safe for focused study."
    },
    reviews: [
      {
        authorName: "Chen L.",
        authorCountry: "Singapore",
        program: "Physics",
        rating: 5,
        title: "Excellent for research-focused students",
        content: "The academic environment is intense and research-oriented. It suits students who want science more than big-city life.",
        pros: "Research, science culture, low cost",
        cons: "City is quieter",
        isVerified: true
      }
    ]
  },
  {
    slug: "harbin-institute-of-technology",
    name: "Harbin Institute of Technology",
    chineseName: "哈尔滨工业大学",
    qsRanking: 252,
    tuition: "$3,000-$5,800/year",
    location: "Harbin",
    citySlug: "harbin",
    provinceSlug: "heilongjiang",
    foundedYear: 1920,
    website: "https://en.hit.edu.cn",
    internationalStudents: "2,000+",
    majors: ["Engineering", "Computer Science", "Aerospace"],
    scholarships: ["CSC Scholarship", "HIT Scholarship"],
    summary: "A top engineering university in northeast China, especially known for aerospace, robotics, materials, and computing.",
    applicationProfile: {
      sourceTitle: "Harbin Institute of Technology international student application system",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://hit.at0086.cn/StuApplication/Login.aspx",
      rankingHighlights: [
        "A top engineering university with major strengths in aerospace, robotics, materials, computing, mechanical engineering, and advanced manufacturing.",
        "Harbin offers lower living costs and one of China's most distinctive winter-city experiences.",
        "Strong destination for students who prioritize technical depth, laboratories, and engineering culture."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials appropriate for the chosen degree level.",
        "Annual HIT admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Engineering programs may expect strong mathematics, physics, and science preparation."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted proof of prior English-medium education.",
        "Exact thresholds and exemptions should be checked in the current HIT admission guide."
      ],
      applicationSteps: [
        "Review HIT's current international program list and scholarship information.",
        "Prepare passport, academic transcripts, graduation proof, language proof, recommendations, and study plan.",
        "Submit through the official HIT international student application system.",
        "Follow review, admission, scholarship, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current HIT admission notice.",
        accommodation: "Dormitory and living-cost details should be checked before arrival."
      },
      programNotes: [
        "Especially strong for aerospace, robotics, computer science, materials, mechanical engineering, and advanced manufacturing.",
        "Students should prepare carefully for Harbin's cold winter climate.",
        "Ice and Snow World, winter festivals, Russian-influenced architecture, and northeast landscapes add distinctive travel value."
      ]
    },
    campusLife: {
      nearbyLiving: "Harbin is low-cost and engineering-focused, with a very cold winter climate.",
      foodAndDailyLife: "Campus dining is affordable, and the city offers northeastern Chinese and Russian-influenced food.",
      tourism: "Ice and Snow World, Saint Sophia Cathedral, winter festivals, and northeast landscapes are highlights.",
      internshipsAndCareers: "HIT links to aerospace, robotics, machinery, materials, software, and defense-related engineering sectors.",
      transportAndSafety: "Students should prepare for winter, but campus and city transport are stable."
    },
    reviews: [
      {
        authorName: "Pavel D.",
        authorCountry: "Kazakhstan",
        program: "Engineering",
        rating: 4,
        title: "Cold city, strong engineering",
        content: "The winter is serious, but engineering resources are excellent and the cost is manageable.",
        pros: "Engineering, low cost, labs",
        cons: "Very cold winters",
        isVerified: true
      }
    ]
  },
  {
    slug: "shandong-university",
    name: "Shandong University",
    chineseName: "山东大学",
    qsRanking: 360,
    tuition: "$3,000-$5,500/year",
    location: "Jinan",
    citySlug: "jinan",
    provinceSlug: "shandong",
    foundedYear: 1901,
    website: "https://www.en.sdu.edu.cn",
    internationalStudents: "2,500+",
    majors: ["Medicine", "Engineering", "Business"],
    scholarships: ["CSC Scholarship", "Shandong University Scholarship"],
    summary: "A large comprehensive university with medicine, engineering, humanities, and multiple campuses in Shandong.",
    applicationProfile: {
      sourceTitle: "Shandong University international student admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://www.istudy.sdu.edu.cn/",
      rankingHighlights: [
        "A large comprehensive university with strong medicine, engineering, humanities, economics, management, and regional research strengths.",
        "Shandong offers a mix of lower living costs, coastal travel, Confucian heritage, manufacturing, healthcare, and trade exposure.",
        "Good fit for students seeking solid academics without the daily cost pressure of Beijing or Shanghai."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials appropriate for the chosen degree level.",
        "Annual SDU admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Medicine, engineering, and selective programs may require additional academic background or review."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof.",
        "Exact language thresholds vary by program and should be confirmed with the latest SDU admission guide."
      ],
      applicationSteps: [
        "Review Shandong University's official international student admission notice and program catalog.",
        "Prepare passport, transcripts, graduation proof, language proof, personal statement, and recommendation materials.",
        "Submit through the official international student application channel.",
        "Follow university review, admission, scholarship, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current SDU admission notice.",
        accommodation: "Dormitory and living-cost information should be verified before arrival."
      },
      programNotes: [
        "Especially relevant for students interested in medicine, engineering, Chinese language, business, humanities, and regional industry.",
        "Jinan gives moderate costs and access to Baotu Spring, Daming Lake, Mount Tai, Qingdao, and Confucian cultural sites.",
        "Shandong can be positioned as a practical value destination for students balancing academic quality, cost, and travel."
      ]
    },
    campusLife: {
      nearbyLiving: "Jinan offers moderate costs, practical services, and a less hectic pace than first-tier cities.",
      foodAndDailyLife: "Local food, campus dining, and affordable daily services are easy to access.",
      tourism: "Baotu Spring, Daming Lake, Mount Tai, Qingdao, and Confucian heritage sites are popular.",
      internshipsAndCareers: "Shandong connects to manufacturing, healthcare, trade, engineering, and regional business opportunities.",
      transportAndSafety: "Jinan is well connected by rail and generally safe around university areas."
    },
    reviews: [
      {
        authorName: "Maryam B.",
        authorCountry: "Iran",
        program: "Medicine",
        rating: 4,
        title: "Good value for medicine",
        content: "The cost is reasonable and teachers are serious. It is not as international as Shanghai, but support is improving.",
        pros: "Medicine, cost, local culture",
        cons: "Need Chinese for daily life",
        isVerified: true
      }
    ]
  },
  {
    slug: "central-south-university",
    name: "Central South University",
    chineseName: "中南大学",
    qsRanking: 499,
    tuition: "From CNY 18,000/year; dual-degree programs may be higher",
    location: "Changsha",
    citySlug: "changsha",
    provinceSlug: "hunan",
    foundedYear: 2000,
    website: "https://en.csu.edu.cn",
    internationalStudents: "2,000+",
    majors: ["Medicine", "Engineering", "Artificial Intelligence", "Computer Science", "Materials Science", "Business"],
    scholarships: ["CSC Scholarship", "Central South University Scholarship", "Provincial and university-level scholarship routes"],
    summary: "A Project 985 and 211 comprehensive university in Changsha with strong medicine, engineering, materials, transport, mining, AI, computer science, and international undergraduate pathways.",
    applicationProfile: {
      sourceTitle: "Application Guide to International Undergraduate Programs in Central South University",
      sourceDate: "2026 PDF guide provided by user",
      sourceUrl: "https://csu.17gz.org/",
      rankingHighlights: [
        "ARWU world ranking #96 and Chinese Mainland #13 in the guide.",
        "U.S. News Best Global Universities #146 and Chinese Mainland #18 in the guide.",
        "Project 985 and Project 211 university with 11 subject categories.",
        "10 disciplines listed in ESI global top 1 per mille and 20 disciplines in ESI global top 1%."
      ],
      eligibility: [
        "Non-Chinese citizens in good health with a valid foreign passport.",
        "Applicants should have obtained a high school diploma.",
        "Applicants are generally expected to be aged 18-25; applicants under 18 but above 16 need an eligible guardian living in China.",
        "Applicants must take the China Scholastic Competency Assessment (CSCA) and obtain required subject scores according to the latest official guide."
      ],
      languageRequirements: [
        "Chinese-taught science and engineering programs require at least HSK 4 with a score of 260.",
        "Chinese-taught arts, social sciences, and medicine programs require at least HSK 5 with a score of 200.",
        "English-taught programs require IELTS 6.0 or TOEFL 85.",
        "Language proof may be waived when Chinese or English is the applicant's native or official language, or when the prior degree was taught in Chinese or English."
      ],
      applicationSteps: [
        "Submit the online application and scanned documents through the CSU International Student Service System.",
        "Wait for initial review before paying the application fee.",
        "Pay the CNY 500 application fee after passing the initial review.",
        "CSU completes comprehensive evaluation and issues the admission letter and JW visa form according to the final result."
      ],
      fees: {
        application: "CNY 500/person",
        tuition: "Chinese-taught undergraduate programs generally start from CNY 18,000/year; program fees are subject to the latest CSU guide.",
        insurance: "CNY 800/year/person",
        accommodation: "Around CNY 5,000/year; dormitories include air conditioner, water heater, shared kitchen, refrigerator, and washing machine."
      },
      programNotes: [
        "Chinese-taught undergraduate programs usually last 4-5 years.",
        "English-taught dual bachelor's degree programs are operated with the University of Dundee and require meeting both CSU and UoD admission requirements.",
        "The undergraduate major list may change annually, so final program availability should be checked with the School of International Education, CSU.",
        "Representative undergraduate areas include clinical medicine, dental medicine, nursing, AI, computer science, software engineering, civil engineering, transportation, materials, finance, law, and Chinese language and literature."
      ]
    },
    campusLife: {
      nearbyLiving: "Changsha has energetic youth culture, affordable food, and a lively student environment.",
      foodAndDailyLife: "Hunan food is spicy and popular, with many affordable student restaurants and malls.",
      tourism: "Yuelu Mountain, Orange Isle, Hunan Museum, Changsha media districts, and longer trips to Zhangjiajie make the city a strong study-and-travel destination.",
      internshipsAndCareers: "CSU's strengths connect naturally with Changsha opportunities in engineering, rail transit, medical services, materials, construction, advanced manufacturing, and digital industries.",
      transportAndSafety: "Changsha metro, high-speed rail, and ride-hailing are convenient; student districts are active, practical, and generally safe for international students."
    },
    reviews: [
      {
        authorName: "Samuel O.",
        authorCountry: "Nigeria",
        program: "Medicine",
        rating: 4,
        title: "Lively city and solid medical training",
        content: "Changsha is fun and affordable. The program is serious and the city has a strong youth culture.",
        pros: "Cost, food, student life",
        cons: "Spicy food and humid weather",
        isVerified: true
      }
    ]
  },
  {
    slug: "hunan-university-of-technology",
    name: "Hunan University of Technology",
    chineseName: "湖南工业大学",
    qsRanking: 999,
    tuition: "CNY 10,000-16,000/year before scholarships",
    location: "Zhuzhou",
    citySlug: "zhuzhou",
    provinceSlug: "hunan",
    foundedYear: 1958,
    website: "http://www.hut.edu.cn",
    internationalStudents: "Accepts international degree and language students",
    majors: ["Computer Science", "Artificial Intelligence", "Engineering", "Architecture", "Business", "Chinese Language"],
    scholarships: [
      "Freshman Full Scholarship: first-year tuition and living costs covered for all international degree students",
      "Merit Scholarship: 100%, 50%, or 30% tuition coverage from the second year based on performance",
      "Hunan Provincial Belt and Road Scholarship for Chinese Language Students"
    ],
    summary: "A comprehensive applied university in Zhuzhou with distinctive strengths in packaging, materials, engineering, computer science, artificial intelligence, design, business, aerospace technology, and international education.",
    applicationProfile: {
      sourceTitle: "2026 Application Guide to Degree Programmes for International Students, Hunan University of Technology",
      sourceDate: "2026 guide provided by user; living-cost scholarship scope confirmed by school leadership",
      sourceUrl: "https://admission.hut.istudyedu.com/",
      rankingHighlights: [
        "Offers undergraduate, master's, doctoral, and Chinese language pathways for international students.",
        "National first-class undergraduate programs include computer science and technology, mechanical design and automation, packaging design, packaging engineering, marketing, business administration, accounting, physical education, and advertising.",
        "Distinctive academic strengths include packaging, materials, intelligent manufacturing, AI, computer science, design, low-altitude technology, engineering, and business."
      ],
      eligibility: [
        "Applicants must be non-Chinese citizens and physically and mentally healthy.",
        "Bachelor applicants should be senior high school graduates aged 18-28.",
        "Master applicants should hold a bachelor's degree and be no more than 35 years old.",
        "PhD applicants should hold a master's degree and be no more than 40 years old.",
        "Applications for the 2026 intake should be submitted by June 25, 2026."
      ],
      languageRequirements: [
        "Chinese-taught bachelor's programs require HSK 4 with a minimum score of 180.",
        "Chinese-taught master's and PhD programs require HSK 4 with a minimum score of 210.",
        "English-taught programs require IELTS 5.5, TOEFL 68, Duolingo 85, or accepted equivalent proof.",
        "Language proof exemptions may apply when Chinese or English is the applicant's first or official language, or when a prior degree was taught in that language."
      ],
      applicationSteps: [
        "Create an account and submit the online application through HUT's international student application system.",
        "Upload academic certificate and transcripts, passport, language proof, no-criminal-record certificate, physical examination, and bank deposit certificate.",
        "Degree applicants should provide proof of at least CNY 40,000 in funds; language-program applicants should provide at least CNY 20,000.",
        "Postgraduate applicants should add an 800-word study and research plan and two recommendation letters.",
        "Upload a 1-3 minute self-introduction video in English, or in Chinese for Chinese-taught programs."
      ],
      fees: {
        application: "Registration fee: CNY 300",
        tuition: "Bachelor: CNY 10,000/year Chinese-taught or CNY 12,000/year English-taught; Master: CNY 13,000/year Chinese-taught or CNY 15,000/year English-taught; PhD: CNY 16,000/year Chinese-taught.",
        insurance: "CNY 800/year; visa or residence permit CNY 400-800/year",
        accommodation: "On-campus double room: CNY 3,000/year; four-person room: CNY 1,200/year. Electricity and water are not included."
      },
      programNotes: [
        "Freshman scholarship: the 2026 guide confirms that all international degree students receive 100% first-year tuition coverage.",
        "School-leadership-confirmed policy: all first-year international degree students also receive living-cost support, so the first-year award covers tuition and living expenses.",
        "From the second year, merit scholarships are assessed using academic and daily performance: top 50% receive 100% tuition, next 30% receive 50%, and remaining 20% receive 30%.",
        "Chinese language students may apply for the Hunan Provincial Belt and Road Scholarship of CNY 15,000; the guide lists self-funded language tuition at CNY 5,000.",
        "Representative English-taught undergraduate options include Computer Science and Technology, International Economy and Trade, Mechanical Design Manufacturing and Automation, Civil Engineering, and Architecture."
      ]
    },
    campusLife: {
      nearbyLiving: "Zhuzhou is an affordable industrial city in the Changsha-Zhuzhou-Xiangtan metropolitan area, with convenient daily services and lower living costs than China's largest cities.",
      foodAndDailyLife: "Students can experience Hunan cuisine, affordable campus dining, local markets, and easy access to Changsha's larger shopping and entertainment districts.",
      tourism: "Zhuzhou connects easily to Changsha, Yuelu Mountain, Orange Isle, Hunan Museum, Hengshan, and longer high-speed rail trips to Zhangjiajie.",
      internshipsAndCareers: "The city is a major rail-transit and manufacturing center, creating relevant exposure for engineering, materials, automation, design, packaging, and business students.",
      transportAndSafety: "Zhuzhou is connected by high-speed rail and regional transport to Changsha and other Chinese cities; the university area offers a practical and generally safe student environment."
    },
    reviews: []
  },
  {
    slug: "guangxi-university",
    name: "Guangxi University",
    chineseName: "广西大学",
    qsRanking: 0,
    tuition: "Confirm by current program guide",
    location: "Nanning",
    citySlug: "nanning",
    provinceSlug: "guangxi",
    foundedYear: 1928,
    website: "https://www.gxu.edu.cn/",
    internationalStudents: "Accepts international degree and language students",
    majors: ["Engineering", "Agriculture", "Computer Science", "Business", "Chinese Language"],
    scholarships: ["Chinese Government Scholarship", "Silk Road Scholarship", "University scholarship opportunities"],
    summary: "A Double First-Class comprehensive university in Nanning with strengths in engineering, agriculture, business, Chinese language, and China-ASEAN regional cooperation.",
    campusLife: {
      nearbyLiving: "Nanning offers a warm climate, moderate living costs, campus dining, local restaurants, and accessible student neighborhoods.",
      foodAndDailyLife: "Students can try laoyou rice noodles, suanye, night markets, campus canteens, and affordable local meals around university areas.",
      tourism: "Qingxiu Mountain, the Yong River, Guangxi Museum of Nationalities, Three Streets and Two Lanes, and ASEAN-themed routes are useful weekend options.",
      internshipsAndCareers: "Nanning is a gateway for China-ASEAN trade, agriculture, engineering, logistics, language services, and regional business exposure.",
      transportAndSafety: "The city has airport, rail, bus, and campus support services; daily life is generally practical for international students."
    },
    reviews: []
  },
  {
    slug: "guangxi-medical-university",
    name: "Guangxi Medical University",
    chineseName: "广西医科大学",
    qsRanking: 0,
    tuition: "Confirm by current program guide",
    location: "Nanning",
    citySlug: "nanning",
    provinceSlug: "guangxi",
    foundedYear: 1934,
    website: "https://www.gxmu.edu.cn/",
    internationalStudents: "Accepts international medical students",
    majors: ["Medicine", "Public Health", "Pharmacy", "Nursing"],
    scholarships: ["Chinese Government Scholarship channels", "Guangxi scholarship opportunities"],
    summary: "A medical university in Nanning offering international student pathways in clinical medicine, public health, pharmacy, nursing, and related health fields.",
    campusLife: {
      nearbyLiving: "Medical students can live in a lower-cost provincial-capital environment with hospitals, campus services, and practical city transport.",
      foodAndDailyLife: "Nanning's campus meals, local rice noodles, night markets, and fruit-based snacks are affordable and friendly to student budgets.",
      tourism: "Students can balance intensive medical study with Qingxiu Mountain, Yong River walks, museums, old streets, and Guangxi weekend routes.",
      internshipsAndCareers: "Medicine, public health, tropical medicine, nursing, and pharmacy are relevant to Guangxi's regional and ASEAN-facing health context.",
      transportAndSafety: "University and city services support registration, daily transport, and international student arrival needs."
    },
    reviews: []
  },
  {
    slug: "guangxi-university-for-nationalities",
    name: "Guangxi University for Nationalities",
    chineseName: "广西民族大学",
    qsRanking: 0,
    tuition: "Confirm by current program guide",
    location: "Nanning",
    citySlug: "nanning",
    provinceSlug: "guangxi",
    foundedYear: 1952,
    website: "https://www.gxun.edu.cn/",
    internationalStudents: "One of Nanning's representative universities for ASEAN and international students",
    majors: ["Chinese Language", "Business", "Education", "International Relations", "Digital Media"],
    scholarships: ["Guangxi ASEAN student scholarship opportunities", "University scholarship opportunities"],
    summary: "A Nanning university known for ethnic culture, Chinese language, ASEAN exchange, humanities, education, and cross-cultural student life.",
    campusLife: {
      nearbyLiving: "The university is strongly connected with ASEAN student exchange and offers a culturally diverse environment in Nanning.",
      foodAndDailyLife: "Students can explore laoyou noodles, suanye, campus dining, night markets, and Guangxi food culture at manageable costs.",
      tourism: "Three Streets and Two Lanes, Guangxi Museum of Nationalities, Fantawild Asian Legend, Qingxiu Mountain, and Yong River routes fit culture-focused students.",
      internshipsAndCareers: "Chinese language, ASEAN cooperation, education, tourism, business, cultural communication, and translation are natural career contexts.",
      transportAndSafety: "Nanning's warm climate, transit links, and international-student service environment are practical for ASEAN and global students."
    },
    reviews: []
  }
];

export function getProvince(slug: string) {
  return provinces.find((province) => province.slug === slug);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getUniversity(slug: string) {
  return universities.find((university) => university.slug === slug);
}

export function getMajor(slug: string) {
  const normalized = slug.replace(/-/g, " ").toLowerCase();
  return majors.find((major) => major.toLowerCase() === normalized);
}
