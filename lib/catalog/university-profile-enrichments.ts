import type { UniversityApplicationProfile } from "@/lib/site-data";
import { bulkUndergraduateAdmissionEnrichments } from "@/lib/catalog/bulk-undergraduate-admission-enrichments";

export type UniversityProfileEnrichment = {
  website: string;
  summary: string;
  majors: string[];
  applicationProfile: UniversityApplicationProfile;
};

export const universityProfileEnrichments: Record<string, UniversityProfileEnrichment> = {
  ...bulkUndergraduateAdmissionEnrichments,
  "tongji-university": {
    website: "https://en.tongji.edu.cn/",
    summary: "A major Shanghai research university especially known for architecture, urban planning, civil engineering, transport, design, environmental studies, and German cooperation.",
    majors: ["Architecture", "Engineering", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "Tongji University international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://study.tongji.edu.cn/",
      rankingHighlights: [
        "A major Shanghai research university known for architecture, urban planning, civil engineering, transport, design, environmental studies, and German cooperation.",
        "Shanghai location provides strong career access across design, engineering, automotive, consulting, construction, and multinational companies.",
        "Strong fit for students interested in cities, infrastructure, sustainability, and design."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials appropriate for the target program.",
        "Annual Tongji admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Architecture, design, and selective programs may require portfolios, interviews, or additional review."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted equivalent English proof.",
        "Exact requirements vary by program and intake."
      ],
      applicationSteps: [
        "Review Tongji's current international program guide and scholarship options.",
        "Prepare passport, transcripts, graduation proof, language proof, personal statement, recommendations, and portfolio where required.",
        "Submit through the official Tongji international student application channel.",
        "Follow review, interview, admission, scholarship, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by program and degree level; confirm from the current Tongji admission notice.",
        accommodation: "Shanghai housing and dormitory costs should be checked before arrival."
      },
      programNotes: [
        "Especially relevant for architecture, urban planning, civil engineering, transport, environmental studies, design, and automotive engineering.",
        "Shanghai gives strong career access but creates higher living-cost pressure.",
        "Applicants to design-oriented programs should prepare portfolios early."
      ]
    }
  },
  "lanzhou-university": {
    website: "https://en.lzu.edu.cn/",
    summary: "A major northwest China research university with strengths in sciences, ecology, medicine, chemistry, atmospheric science, and Silk Road studies.",
    majors: ["Engineering", "Medicine", "Chinese Language", "Physics"],
    applicationProfile: {
      sourceTitle: "Lanzhou University international student admission information",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://sice.lzu.edu.cn/",
      rankingHighlights: [
        "A major northwest China research university with strengths in sciences, ecology, medicine, chemistry, atmospheric science, and regional studies.",
        "Lanzhou offers lower living costs and access to Silk Road culture, the Yellow River, deserts, and northwest travel routes.",
        "Good fit for research-oriented students who want a distinctive, less commercial China experience."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports and academic credentials appropriate for the chosen degree level.",
        "Annual LZU admission notices should be checked for age, health, nationality-document, and program-specific requirements.",
        "Science, medical, and graduate research programs may require additional academic preparation."
      ],
      languageRequirements: [
        "Chinese-taught programs generally require HSK or equivalent Chinese proficiency.",
        "English-taught programs may require IELTS, TOEFL, or accepted proof of English-medium education.",
        "Exact thresholds should be confirmed through the current admission guide."
      ],
      applicationSteps: [
        "Review Lanzhou University's current international admission guide and scholarship options.",
        "Prepare passport, academic documents, language proof, recommendations, and study or research plan.",
        "Submit through the official international student application channel.",
        "Follow review, admission, scholarship, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Tuition varies by degree level and program; confirm from the current LZU admission notice.",
        accommodation: "Dormitory and living-cost details should be checked before arrival."
      },
      programNotes: [
        "Strong for sciences, ecology, chemistry, atmospheric science, medicine, Chinese language, and northwest regional research.",
        "Lanzhou can be significantly more affordable than coastal megacities.",
        "Silk Road routes, the Yellow River, Dunhuang, and desert landscapes add unique travel value."
      ]
    }
  },
  "chongqing-university": {
    website: "https://english.cqu.edu.cn/",
    summary: "A major western China research university known for engineering, architecture, business, energy, manufacturing, and mountain-city campus life.",
    majors: ["Engineering", "Architecture", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "2026 Application Guide for Undergraduate Programs for International Students, Chongqing University",
      sourceDate: "Official 2026 undergraduate guide",
      sourceUrl: "https://study.cqu.edu.cn/info/1887/2789.htm",
      rankingHighlights: [
        "A major western China research university known for engineering, architecture, energy, manufacturing, business, and applied research.",
        "Chongqing offers a visually distinctive mountain-city experience with strong western China industry connections.",
        "Strong destination for students seeking engineering careers, lower costs, and energetic city life."
      ],
      eligibility: [
        "Applicants must be non-Chinese citizens holding valid ordinary passports, in sound physical and mental health, with strong academic performance and conduct.",
        "Applicants must hold a high school diploma or above and meet the academic requirements of the selected program.",
        "Self-funded applicants must be over 18 and under 30; scholarship applicants must be over 18 and under 25.",
        "All undergraduate applicants must submit a valid CSCA transcript; arts applicants must also submit a portfolio."
      ],
      languageRequirements: [
        "Chinese-taught programs require HSK Level 4 with a score of 210 or above; selected programs require HSK Level 5.",
        "Non-native English speakers applying to English-taught programs need IELTS 6.0, TOEFL iBT 80, proof of previous English-medium education, or more than one year of study in an English-speaking country."
      ],
      applicationSteps: [
        "Select a program from the official 2026 undergraduate program list and confirm its CSCA subjects.",
        "Prepare passport, notarized diploma, transcripts, CSCA report, language proof, physical examination, and an 800-word personal statement.",
        "Apply through Chongqing University's official international application system by May 31, 2026.",
        "Complete qualification review, academic review, and an interview if shortlisted."
      ],
      fees: {
        application: "CNY 600",
        tuition: "Chinese-taught programs: CNY 18,000-22,000/year; English-taught programs: CNY 25,000-30,000/year.",
        accommodation: "CNY 5,000-9,000/year."
      },
      programNotes: [
        "Application deadline: May 31, 2026 Beijing Time; individual scholarship deadlines may be earlier.",
        "Full-time undergraduate programs last four to five years and are offered in Chinese or English.",
        "Chongqing connects students to automotive, electronics, construction, logistics, and western China business."
      ]
    }
  },
  "beijing-normal-university": {
    website: "https://english.bnu.edu.cn/",
    summary: "A leading Beijing research university especially strong in education, psychology, humanities, sciences, environment, and teacher development.",
    majors: ["Chinese Language", "Business", "Computer Science", "Engineering"],
    applicationProfile: {
      sourceTitle: "Beijing Normal University international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://iso.bnu.edu.cn/",
      rankingHighlights: ["A leading university for education, psychology, humanities, sciences, and environmental studies.", "Beijing location supports research, culture, policy, and education-sector exposure."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and appropriate academic credentials.", "Check the current BNU notice for age, health, nationality-document, and program rules."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review the current program and scholarship guide.", "Prepare academic documents, passport, language proof, recommendations, and study plan.", "Submit through BNU's official international application channel.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm program-specific tuition from the current BNU admission notice.", accommodation: "Confirm dormitory availability and cost before arrival." },
      programNotes: ["Strong for education, psychology, Chinese language, humanities, science, and environmental studies.", "Beijing provides exceptional cultural and education-sector access."]
    }
  },
  "beijing-language-and-culture-university": {
    website: "https://english.blcu.edu.cn/",
    summary: "A Beijing university internationally known for Chinese-language education, translation, linguistics, international education, and cross-cultural study.",
    majors: ["Chinese Language", "Business", "Computer Science"],
    applicationProfile: {
      sourceTitle: "Application Guide for Undergraduate Students of Beijing Language and Culture University",
      sourceDate: "Official undergraduate guide updated for Fall 2026 CSCA requirements",
      sourceUrl: "https://admission.blcu.edu.cn/en/39/list.htm",
      rankingHighlights: ["One of China's best-known destinations for Chinese-language and cross-cultural education.", "A highly international campus in Beijing's Haidian university district."],
      eligibility: ["Applicants must be non-Chinese citizens holding ordinary foreign passports and have a high school diploma or equivalent.", "Applicants are generally aged 18-55; applicants under 18 need university consent and notarized guardianship documents.", "Starting with Fall 2026, all international undergraduate applicants must submit CSCA results."],
      languageRequirements: ["Requirements vary by program; Chinese-taught and joint programs specify their required HSK level.", "English-taught finance, international economics and trade, accounting, and special education require IELTS 5.5 with each component at least 5.5, TOEFL 80, or TOEIC 650, plus an interview.", "English-taught Sinology requires IELTS 6.5 or TOEFL 90."],
      applicationSteps: ["Choose an undergraduate major and review its language, interview, tuition, and CSCA requirements.", "Prepare passport, high school qualification, language proof, CSCA result, and required supporting documents.", "Apply through BLCU's official online application system.", "Follow interview, admission, visa, payment, housing, and registration instructions."],
      fees: { tuition: "English-taught finance, international economics and trade, and accounting are listed at CNY 39,000/year; other programs vary.", accommodation: "Multiple housing arrangements may be available; verify before arrival." },
      programNotes: ["September 2026 undergraduate application deadline: June 30, 2026; selected March-entry majors had a January 12, 2026 deadline.", "Especially strong for Chinese language, translation, linguistics, international education, China studies, and multilingual joint programs.", "The official guide includes program-by-program tuition and entry requirements."]
    }
  },
  "university-of-international-business-and-economics": {
    website: "https://english.uibe.edu.cn/",
    summary: "A specialist Beijing university known for international business, economics, finance, trade, law, and multilingual professional education.",
    majors: ["Business", "Chinese Language", "Computer Science"],
    applicationProfile: {
      sourceTitle: "UIBE international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://sie.uibe.edu.cn/",
      rankingHighlights: ["A specialist university for international business, economics, finance, trade, and law.", "Beijing location supports access to companies, embassies, policy networks, and international organizations."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and appropriate academic credentials.", "Check the current UIBE guide for program-specific and nationality-document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught business programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Select the current international business, economics, finance, or language program.", "Prepare academic documents, passport, language proof, recommendations, and personal statement.", "Apply through UIBE's official international student channel.", "Follow admission, scholarship, visa, housing, and registration steps."],
      fees: { tuition: "Confirm program-specific tuition from the current UIBE admission guide.", accommodation: "Confirm Beijing dormitory and housing costs before arrival." },
      programNotes: ["Strong for international business, economics, finance, trade, law, and professional Chinese.", "Applicants should budget for Beijing while considering its unusually strong networking value."]
    }
  },
  "dalian-university-of-technology": {
    website: "https://en.dlut.edu.cn/",
    summary: "A major coastal engineering university with strengths in chemical engineering, mechanical engineering, civil engineering, computing, materials, and applied research.",
    majors: ["Engineering", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "Dalian University of Technology international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://sie.dlut.edu.cn/",
      rankingHighlights: ["A major engineering university with strong applied research and industry links.", "Dalian adds coastal lifestyle, port-industry exposure, and lower costs than Beijing or Shanghai."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Check annual DLUT notices for age, health, academic background, and document rules."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review DLUT's current program and scholarship catalog.", "Prepare passport, transcripts, graduation proof, language proof, recommendations, and study plan.", "Submit through the official application channel.", "Follow review, admission, visa, housing, and registration steps."],
      fees: { tuition: "Confirm tuition from the current DLUT admission notice.", accommodation: "Confirm dormitory and Dalian living costs before arrival." },
      programNotes: ["Strong for chemical, mechanical, civil, materials, computing, and engineering management.", "Dalian offers beaches, port culture, seafood, and a student-friendly coastal environment."]
    }
  },
  "ocean-university-of-china": {
    website: "https://eweb.ouc.edu.cn/",
    summary: "A Qingdao research university especially strong in oceanography, marine science, fisheries, environmental science, engineering, and coastal studies.",
    majors: ["Marine Science", "Engineering", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "Ocean University of China international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://sie.ouc.edu.cn/",
      rankingHighlights: ["A leading Chinese university for oceanography, marine science, fisheries, and coastal environmental research.", "Qingdao offers beaches, port-industry links, and strong coastal-city appeal."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and appropriate academic credentials.", "Check annual OUC notices for program, age, health, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require English proficiency evidence."],
      applicationSteps: ["Review the current OUC international program and scholarship guide.", "Prepare passport, academic records, language proof, recommendations, and study plan.", "Submit through OUC's official application system.", "Follow admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm program-specific tuition from the current OUC guide.", accommodation: "Confirm dormitory and Qingdao living costs before arrival." },
      programNotes: ["Especially strong for marine science, oceanography, fisheries, environmental science, and coastal engineering.", "Qingdao combines academic specialization with beaches, seafood, sailing, and port-economy careers."]
    }
  },
  "northwestern-polytechnical-university": {
    website: "https://en.nwpu.edu.cn/",
    summary: "A Xi'an engineering university internationally recognized for aerospace, aviation, marine engineering, materials, mechanics, computing, and advanced manufacturing.",
    majors: ["Aerospace", "Engineering", "Computer Science"],
    applicationProfile: {
      sourceTitle: "Northwestern Polytechnical University international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://studyat.nwpu.edu.cn/",
      rankingHighlights: ["A leading engineering university for aviation, aerospace, marine engineering, materials, and advanced manufacturing.", "Xi'an combines serious engineering networks with ancient-capital travel and manageable costs."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and strong academic preparation.", "Check annual NPU notices for age, health, mathematics, science, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review the current international program catalog and scholarship options.", "Prepare academic documents, passport, language proof, recommendations, and study plan.", "Apply through NPU's official international admissions channel.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm tuition from the current NPU admission guide.", accommodation: "Confirm dormitory and Xi'an living costs before arrival." },
      programNotes: ["Especially strong for aerospace, aviation, marine engineering, materials, mechanics, and computing.", "Xi'an adds city walls, museums, Terracotta Warriors, mountains, and aerospace-industry exposure."]
    }
  },
  "university-of-electronic-science-and-technology-of-china": {
    website: "https://en.uestc.edu.cn/",
    summary: "A Chengdu technology university known for electronics, communications, computer science, AI, cybersecurity, microelectronics, and information engineering.",
    majors: ["Computer Science", "Artificial Intelligence", "Engineering"],
    applicationProfile: {
      sourceTitle: "UESTC international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://en.uestc.edu.cn/Admission.htm",
      rankingHighlights: ["A major Chinese university for electronics, communications, computer science, AI, and microelectronics.", "Chengdu adds a strong technology ecosystem and highly attractive student lifestyle."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Check annual UESTC notices for mathematics, science, age, health, and document rules."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review UESTC's current program and scholarship guide.", "Prepare passport, transcripts, graduation proof, language evidence, recommendations, and study plan.", "Apply through the official international student system.", "Follow admission, visa, housing, and registration steps."],
      fees: { tuition: "Confirm program-specific tuition from the current UESTC guide.", accommodation: "Confirm Chengdu dormitory and living costs before arrival." },
      programNotes: ["Strong for electronics, communications, computer science, AI, cybersecurity, and microelectronics.", "Chengdu combines tech careers with food, tea houses, pandas, and western China travel."]
    }
  },
  "southwest-jiaotong-university": {
    website: "https://en.swjtu.edu.cn/",
    summary: "A Chengdu engineering university with historic strength in rail transport, civil engineering, mechanical engineering, electrical engineering, and transportation systems.",
    majors: ["Engineering", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "Southwest Jiaotong University international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://sie.swjtu.edu.cn/",
      rankingHighlights: ["A historic transport-engineering university known for rail, civil, mechanical, and electrical engineering.", "Chengdu provides major high-speed rail, infrastructure, manufacturing, and technology career context."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and appropriate academic preparation.", "Check annual SWJTU notices for age, health, mathematics, science, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review the current SWJTU international program and scholarship guide.", "Prepare passport, academic documents, language proof, recommendations, and study plan.", "Apply through the official international admissions channel.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm program-specific tuition from the current SWJTU guide.", accommodation: "Confirm dormitory and Chengdu living costs before arrival." },
      programNotes: ["Especially strong for rail transport, civil, mechanical, electrical, and transportation engineering.", "Chengdu adds strong lifestyle appeal and access to western China travel routes."]
    }
  },
  "renmin-university-of-china": {
    website: "https://en.ruc.edu.cn/",
    summary: "A leading Beijing university for humanities, social sciences, economics, finance, law, journalism, public administration, and business.",
    majors: ["Business", "Chinese Language", "Computer Science"],
    applicationProfile: {
      sourceTitle: "Renmin University of China international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://iso.ruc.edu.cn/",
      rankingHighlights: ["A leading Chinese university for humanities, social sciences, economics, finance, law, journalism, and public administration.", "Beijing location provides exceptional policy, media, business, and cultural exposure."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Check the current RUC admission notice for age, health, nationality-document, and program rules."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review RUC's current program and scholarship catalog.", "Prepare passport, academic documents, language proof, recommendations, and study plan.", "Submit through the official international student system.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm program-specific tuition from the current RUC admission catalog.", accommodation: "Confirm Beijing dormitory and housing costs before arrival." },
      programNotes: ["Especially strong for economics, finance, law, journalism, sociology, public administration, and business.", "A strong choice for students interested in understanding Chinese society, policy, and business."]
    }
  },
  "beijing-foreign-studies-university": {
    website: "https://global.bfsu.edu.cn/",
    summary: "A leading language and international studies university known for translation, diplomacy, foreign languages, journalism, law, finance, and international business.",
    majors: ["Chinese Language", "Business"],
    applicationProfile: {
      sourceTitle: "2026 BFSU undergraduate admissions prospectus for international students",
      sourceDate: "2026 official undergraduate prospectus",
      sourceUrl: "https://osao.bfsu.edu.cn/info/1042/2427.htm",
      rankingHighlights: ["China's longest-established foreign-language university with an unusually wide range of language programs.", "Strong pathways into diplomacy, translation, journalism, law, finance, and international business."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and appropriate high-school credentials.", "Check the 2026 prospectus for program-specific documents and admission requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "Foreign-language and English-taught programs may require relevant language proficiency evidence."],
      applicationSteps: ["Review the 2026 undergraduate catalog and choose a four-year program.", "Prepare passport, transcripts, graduation proof, language evidence, and required statements.", "Apply through BFSU's official international student channel.", "Follow admission, scholarship, visa, dormitory, and registration instructions."],
      fees: { tuition: "The 2026 catalog lists examples such as CNY 26,000/year for selected four-year undergraduate programs.", accommodation: "Confirm dormitory availability and Beijing living costs before arrival." },
      programNotes: ["Strong for foreign languages, translation, diplomacy, journalism, law, finance, international business, and Chinese studies.", "A highly international campus for students interested in global communication."]
    }
  },
  "beijing-university-of-posts-and-telecommunications": {
    website: "https://english.bupt.edu.cn/",
    summary: "A specialist Beijing technology university known for communications, information engineering, computer science, cybersecurity, AI, networks, and digital infrastructure.",
    majors: ["Computer Science", "Artificial Intelligence", "Engineering"],
    applicationProfile: {
      sourceTitle: "BUPT international student admission information",
      sourceDate: "Official admissions materials, annual details to verify before submission",
      sourceUrl: "https://iss.bupt.edu.cn/",
      rankingHighlights: ["A specialist university for communications, information engineering, computer science, cybersecurity, and digital infrastructure.", "Beijing location connects students to major technology, telecom, and internet employers."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and strong academic preparation.", "Check annual BUPT materials for mathematics, science, age, health, and document rules."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review the current BUPT international program guide.", "Prepare passport, academic records, language proof, recommendations, and study plan.", "Submit through the official application channel.", "Follow review, admission, JW202/visa, housing, and registration steps."],
      fees: { tuition: "Confirm program-specific tuition from the current BUPT guide.", accommodation: "Confirm Beijing dormitory and living costs before arrival." },
      programNotes: ["Strong for communications, networks, cybersecurity, AI, computer science, and information engineering.", "Best suited for students targeting China's digital and telecom industries."]
    }
  },
  "beihang-university": {
    website: "https://ev.buaa.edu.cn/",
    summary: "A leading Beijing engineering university known for aerospace, aviation, computer science, robotics, mechanics, materials, and advanced technology.",
    majors: ["Aerospace", "Engineering", "Computer Science", "Artificial Intelligence"],
    applicationProfile: {
      sourceTitle: "Beihang University undergraduate programs for international students",
      sourceDate: "Official admissions pages, checked 2026",
      sourceUrl: "https://ev.buaa.edu.cn/Admissions/Undergraduate_Program.htm",
      rankingHighlights: ["A leading university for aerospace, aviation, computer science, robotics, mechanics, and advanced engineering.", "International undergraduate programs use a foundation-first, specialization-later training model."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and strong high-school preparation.", "Check annual Beihang notices for mathematics, physics, age, health, and document rules."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review Beihang's current undergraduate program and scholarship guide.", "Prepare academic documents, passport, language evidence, recommendations, and study plan.", "Apply through the official international admissions channel.", "Follow review, admission, visa, housing, and registration steps."],
      fees: { tuition: "Confirm program-specific tuition from the current Beihang guide.", accommodation: "Confirm Beijing dormitory and housing costs before arrival." },
      programNotes: ["The standard undergraduate duration is generally four years, with a maximum study period described by the official program page.", "Strong for aerospace, aviation, robotics, computing, mechanics, and materials."]
    }
  },
  "beijing-institute-of-technology": {
    website: "https://english.bit.edu.cn/",
    summary: "A leading Beijing engineering university known for intelligent systems, vehicles, mechanical engineering, computer science, AI, materials, and advanced technology.",
    majors: ["Engineering", "Computer Science", "Artificial Intelligence"],
    applicationProfile: {
      sourceTitle: "Beijing Institute of Technology international student admissions",
      sourceDate: "Official admissions pages, annual details to verify before submission",
      sourceUrl: "https://isc.bit.edu.cn/",
      rankingHighlights: ["A leading Beijing engineering university for intelligent systems, vehicles, mechanics, computing, AI, and materials.", "Strong technical networks and Beijing career access."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and strong academic credentials.", "Check annual BIT notices for age, health, mathematics, science, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review BIT's current international program and scholarship guide.", "Prepare passport, academic records, language proof, recommendations, and study plan.", "Apply through the official international student channel.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm program-specific tuition from the current BIT admission guide.", accommodation: "Confirm Beijing dormitory and living costs before arrival." },
      programNotes: ["Strong for vehicles, intelligent systems, mechanical engineering, AI, computing, and materials.", "Applicants should show strong mathematics and science preparation."]
    }
  },
  "china-agricultural-university": {
    website: "https://en.cau.edu.cn/",
    summary: "A leading Beijing university for agriculture, food science, life sciences, veterinary medicine, environmental science, engineering, and rural development.",
    majors: ["Engineering", "Business", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "China Agricultural University international student admissions",
      sourceDate: "Official international student information, annual details to verify before submission",
      sourceUrl: "https://en.cau.edu.cn/col/col32411/index.html",
      rankingHighlights: ["A leading Chinese university for agriculture, food science, life sciences, veterinary medicine, and rural development.", "CAU has recruited international students since 1954 and has hosted students from more than 90 countries."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Check annual CAU notices for age, health, science background, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require accepted English proficiency evidence."],
      applicationSteps: ["Review CAU's current international program and scholarship guide.", "Prepare passport, academic documents, language proof, recommendations, and study plan.", "Apply through the official international student channel.", "Follow review, admission, visa, housing, and registration steps."],
      fees: { tuition: "Confirm program-specific tuition from the current CAU guide.", accommodation: "Confirm Beijing dormitory and living costs before arrival." },
      programNotes: ["Strong for agriculture, food science, life sciences, veterinary medicine, environment, and agricultural engineering.", "Useful for students interested in sustainability, food systems, and global development."]
    }
  },
  "east-china-normal-university": {
    website: "https://english.ecnu.edu.cn/",
    summary: "A leading Shanghai university for education, psychology, humanities, Chinese language, sciences, data, environment, and international programs.",
    majors: ["Chinese Language", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "East China Normal University international student admission",
      sourceDate: "Official admissions pages, checked 2026",
      sourceUrl: "https://lxs.ecnu.edu.cn/en/admission/",
      rankingHighlights: ["A leading university for education, psychology, humanities, Chinese language, sciences, and international programs.", "Shanghai location combines academic resources with global-city career and travel access."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and appropriate academic credentials.", "Check the current ECNU admission notice for age, health, nationality-document, and program requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review ECNU's current degree, Chinese-language, and scholarship options.", "Prepare passport, academic records, language proof, recommendations, and study plan.", "Submit through ECNU's official international application system.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm program-specific tuition from the current ECNU guide.", accommodation: "Confirm Shanghai dormitory and living costs before arrival." },
      programNotes: ["Strong for education, psychology, Chinese language, humanities, sciences, and international studies.", "Shanghai provides strong internship access but requires a higher living budget."]
    }
  },
  "shanghai-university": {
    website: "https://en.shu.edu.cn/",
    summary: "A large comprehensive Shanghai university with strengths in engineering, business, arts, communication, computer science, materials, and international education.",
    majors: ["Engineering", "Business", "Computer Science", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "2026-2027 Shanghai University international undergraduate admission",
      sourceDate: "2026-2027 official undergraduate admission materials",
      sourceUrl: "https://apply.shu.edu.cn/",
      rankingHighlights: ["A large comprehensive Shanghai university with engineering, business, arts, communication, computing, and materials strengths.", "Shanghai University has admitted international students since 1966 and has hosted students from many countries."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable high-school credentials.", "Check the 2026-2027 guide for program-specific, age, health, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review the 2026-2027 international undergraduate guide and program catalog.", "Prepare passport, transcripts, graduation proof, language evidence, and required statements.", "Apply through Shanghai University's official application system.", "Follow assessment, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Program fees vary; official materials list examples such as CNY 30,000/year for selected English-taught business programs.", accommodation: "Confirm Shanghai dormitory and housing costs before arrival." },
      programNotes: ["Strong for engineering, business, computer science, arts, communication, and materials.", "A practical option for students seeking Shanghai opportunities beyond the city's most selective universities."]
    }
  },
  "donghua-university": {
    website: "https://english.dhu.edu.cn/",
    summary: "A Shanghai university with distinctive strengths in textiles, fashion, materials, design, engineering, business, and international cultural exchange.",
    majors: ["Engineering", "Business", "Computer Science", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "2026 Application Guide for Bachelor's Degree Program, Donghua University",
      sourceDate: "Official 2026 bachelor's guide published November 21, 2025",
      sourceUrl: "https://english.dhu.edu.cn/2025/1121/c5218a369002/page.htm",
      rankingHighlights: ["Distinctive strengths in textiles, fashion, materials, design, engineering, and business.", "Its International Education Center provides admissions support, cultural activities, and international student services in Shanghai."],
      eligibility: ["Applicants must be non-Chinese citizens in good physical and mental health with a higher-secondary graduation certificate or international equivalent.", "Self-funded applicants must be at least 16 and under 35; scholarship routes have their own age limits.", "All undergraduate applicants must take the CSCA and submit the subjects required by their selected program."],
      languageRequirements: ["Chinese-taught applications require at least HSK Level 4 score 180; admitted students must reach HSK Level 5 score 180 before enrollment.", "English-taught programs require IELTS Academic 5.5 or TOEFL iBT 72."],
      applicationSteps: ["Choose one program and review its official 2026 CSCA subject requirements.", "Apply through admissions.dhu.edu.cn from March 1, 2026 and upload the required color scans.", "Pay the non-refundable CNY 800 application fee and ensure the status shows Submitted.", "Monitor the application status and email for returned materials, exams, interviews, and admission results."],
      fees: { application: "CNY 800", tuition: "Confirm program-specific tuition in the official 2026 bachelor's program list.", accommodation: "Confirm campus-specific Shanghai housing costs before arrival." },
      programNotes: ["Scholarship application deadline: April 15, 2026; self-funded deadline: May 31, 2026.", "Applicants may apply for only one program major.", "Particularly relevant for textiles, fashion, design, materials, engineering, and international business."]
    }
  },
  "jilin-university": {
    website: "https://global.jlu.edu.cn/",
    summary: "A major comprehensive research university in Changchun with broad programs across medicine, engineering, sciences, humanities, law, business, and Chinese language.",
    majors: ["Medicine", "Engineering", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "Jilin University International Student Service System",
      sourceDate: "Official application system, checked 2026",
      sourceUrl: "https://apply.jlu.edu.cn/",
      rankingHighlights: ["A large comprehensive research university offering unusually broad multidisciplinary study choices.", "Changchun provides a lower-cost study environment with strong automotive, engineering, and medical links."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and the academic qualification required for their chosen degree.", "Medicine and other specialist programs may have additional academic, health, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review the latest Jilin University program and scholarship notices.", "Prepare passport, academic records, language proof, study plan, and program-specific documents.", "Submit through Jilin University's official international student service system.", "Follow review, admission, visa, housing, and registration steps."],
      fees: { tuition: "Confirm current tuition by degree and program in the official application system.", accommodation: "Confirm campus-specific Changchun dormitory costs before arrival." },
      programNotes: ["Strong breadth across medicine, engineering, sciences, humanities, law, and business.", "Applicants to medicine should use the latest specialist program guide rather than general admission summaries."]
    }
  },
  "xidian-university": {
    website: "https://en.xidian.edu.cn/",
    summary: "A Xi'an technology university known for electronic engineering, communications, computer science, cybersecurity, artificial intelligence, and information systems.",
    majors: ["Engineering", "Computer Science", "Artificial Intelligence"],
    applicationProfile: {
      sourceTitle: "Xidian University international student admissions",
      sourceDate: "Official international admissions contact and current program information",
      sourceUrl: "https://sie.xidian.edu.cn/EN/Home.htm",
      rankingHighlights: ["A specialist technology university with strengths in electronics, communications, computing, cybersecurity, and AI.", "Xi'an combines a major technology and aerospace economy with exceptional historical and travel resources."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and strong academic preparation.", "Check the current Xidian guide for mathematics, science, age, health, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent evidence."],
      applicationSteps: ["Review the current Xidian international degree-program guide.", "Prepare passport, academic records, language evidence, study plan, and required supporting documents.", "Submit through the official international application channel.", "Follow review, admission, visa, campus assignment, and registration steps."],
      fees: { tuition: "Confirm program-specific tuition from the current Xidian guide.", accommodation: "Confirm North or South Campus housing costs before arrival." },
      programNotes: ["Strong for electronics, communications, cybersecurity, computing, and artificial intelligence.", "Applicants should show strong mathematics and science preparation."]
    }
  },
  "soochow-university": {
    website: "https://eng.suda.edu.cn/",
    summary: "A comprehensive university in Suzhou offering broad undergraduate and graduate study, Chinese language programs, and multiple scholarship routes for international students.",
    majors: ["Medicine", "Engineering", "Business", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "Soochow University international admissions",
      sourceDate: "Official admissions pages, checked 2026",
      sourceUrl: "https://eng.suda.edu.cn/Admission/",
      rankingHighlights: ["The university reports 134 undergraduate programs across 24 faculties and broad graduate study fields.", "Its official admissions page reports more than 2,200 international students from 85 countries."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and the academic qualification required for their selected program.", "Check the current guide for program-specific, age, health, and documentation requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review Soochow University's undergraduate, graduate, or Chinese-language options.", "Prepare passport, academic records, language proof, study plan, and required supporting documents.", "Apply through the official international admissions channel.", "Follow assessment, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm program-specific tuition from the current Soochow University guide.", accommodation: "Confirm Suzhou dormitory and living costs before arrival." },
      programNotes: ["Official scholarship routes include Chinese Government, Jiangsu Government, and university scholarships.", "Suzhou combines classical gardens and canals with a major modern technology and manufacturing economy."]
    }
  },
  "central-university-of-finance-and-economics": {
    website: "https://en.cufe.edu.cn/",
    summary: "A specialist Beijing university focused on finance, economics, accounting, taxation, insurance, statistics, management, and public policy.",
    majors: ["Business", "Economics", "Finance", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "Central University of Finance and Economics international admissions",
      sourceDate: "Official university and international education materials, checked 2026",
      sourceUrl: "https://sice.cufe.edu.cn/",
      rankingHighlights: ["CUFE is a specialist university with deep strengths in applied economics, finance, accounting, taxation, insurance, and statistics.", "Its Beijing location provides access to financial institutions, regulators, consulting firms, and major employers."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and qualifications appropriate for the selected degree.", "Check the latest guide for nationality-document, age, academic, health, and program-specific requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent evidence."],
      applicationSteps: ["Review CUFE's latest international program and scholarship guide.", "Prepare passport, academic records, language proof, study plan, and required supporting documents.", "Apply through the official international education channel.", "Follow assessment, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm current tuition by program from CUFE's official guide.", accommodation: "Confirm Beijing campus and dormitory costs before arrival." },
      programNotes: ["Strong fit for finance, economics, accounting, taxation, insurance, statistics, and public policy.", "Applicants should verify whether their target program is taught in Chinese or English."]
    }
  },
  "shanghai-international-studies-university": {
    website: "https://en.shisu.edu.cn/",
    summary: "A leading Shanghai university for languages, translation, international relations, journalism, communication, business, and Chinese studies.",
    majors: ["Chinese Language", "Business", "International Relations", "Communication"],
    applicationProfile: {
      sourceTitle: "Shanghai International Studies University international student admissions",
      sourceDate: "Official international student office materials, checked 2026",
      sourceUrl: "https://www.oisa.shisu.edu.cn/",
      rankingHighlights: ["A leading specialist university for languages, translation, international relations, journalism, and global communication.", "Shanghai provides an exceptional environment for multilingual study, international business, media, and cultural exchange."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Check the current SISU guide for degree-specific, age, health, and documentation requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "Programs taught in another language may require proof of proficiency in that instructional language."],
      applicationSteps: ["Review SISU's latest degree, language, and scholarship options.", "Prepare passport, academic records, language proof, study plan, and required documents.", "Apply through the official international student channel.", "Follow review, admission, accommodation reservation, visa, and registration instructions."],
      fees: { tuition: "Confirm tuition by program and instructional language in the current SISU guide.", accommodation: "Confirm campus-specific Shanghai accommodation costs before arrival." },
      programNotes: ["Strong for language study, translation, international relations, journalism, communication, and global business.", "Students should check which campus hosts their selected program."]
    }
  },
  "shanghai-university-of-finance-and-economics": {
    website: "https://english.sufe.edu.cn/",
    summary: "A leading specialist university in Shanghai for finance, economics, management, accounting, law, statistics, and international business.",
    majors: ["Business", "Economics", "Finance", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "Shanghai University of Finance and Economics international student programs",
      sourceDate: "Official university and Shanghai study information, checked 2026",
      sourceUrl: "https://iecoenglish.sufe.edu.cn/",
      rankingHighlights: ["SUFE focuses on finance and economics while offering coordinated study in management, law, arts, and science.", "Official information describes Chinese- and English-taught undergraduate, master's, and doctoral options plus Mandarin and business-Mandarin programs."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Check the current SUFE guide for degree-specific, nationality-document, age, and health requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review SUFE's latest international program catalog.", "Prepare passport, academic records, language proof, study plan, and required supporting documents.", "Apply through SUFE's official international admissions channel.", "Follow assessment, admission, visa, housing, and registration steps."],
      fees: { tuition: "Confirm current tuition by program from SUFE's official admissions materials.", accommodation: "Confirm Shanghai housing and dormitory arrangements before arrival." },
      programNotes: ["Popular international-student fields include finance, international economics and trade, and international Chinese education.", "Shanghai offers strong finance and business internships but requires a higher living budget."]
    }
  },
  "beijing-university-of-chinese-medicine": {
    website: "https://english.bucm.edu.cn/",
    summary: "A national key university specializing in traditional Chinese medicine, acupuncture, Chinese materia medica, nursing, health sciences, and integrative medicine.",
    majors: ["Medicine", "Chinese Language", "Business"],
    applicationProfile: {
      sourceTitle: "Beijing University of Chinese Medicine International School admissions",
      sourceDate: "Official admissions and scholarship pages, checked 2026",
      sourceUrl: "https://iec.bucm.edu.cn/english/admissions/undergraduate/index.htm",
      rankingHighlights: ["BUCM is a national key university specializing in traditional Chinese medicine education.", "Programs span Chinese medicine, acupuncture, Chinese materia medica, nursing, health promotion, and integrative medicine."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports, suitable prior qualifications, and good physical and mental health.", "Medical study may include additional nationality-document, age, health, and clinical-training requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught options may still include required Chinese-language learning for study and clinical communication."],
      applicationSteps: ["Review the latest BUCM International School guide.", "Prepare the application form, passport, academic records, language proof, health documents, and other required materials.", "Submit documents for BUCM assessment.", "After admission, complete JW202/visa, arrival, housing, and registration steps."],
      fees: { tuition: "Confirm current tuition by program from BUCM International School.", accommodation: "Confirm Beijing dormitory and clinical-campus arrangements before arrival." },
      programNotes: ["Official scholarship routes include Chinese Government, Beijing international student, and BUCM scholarships.", "Applicants planning clinical practice should verify licensing and recognition rules in their intended country."]
    }
  },
  "china-pharmaceutical-university": {
    website: "https://en.cpu.edu.cn/",
    summary: "A specialist Nanjing university for pharmacy, medicinal chemistry, traditional Chinese pharmacy, life sciences, biomedical engineering, and pharmaceutical business.",
    majors: ["Medicine", "Engineering", "Business"],
    applicationProfile: {
      sourceTitle: "China Pharmaceutical University international education and admissions",
      sourceDate: "Official university information, checked 2026",
      sourceUrl: "https://international.cpu.edu.cn/",
      rankingHighlights: ["A specialist university focused on pharmacy, medicinal chemistry, traditional Chinese pharmacy, life science, and pharmaceutical business.", "The official English site reports students from more than 66 nationalities, over 110 global partnerships, and more than 600 current international students."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic and science preparation.", "Check the current CPU guide for degree-specific, health, age, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs require accepted English proficiency evidence."],
      applicationSteps: ["Review CPU's current international program and scholarship guide.", "Prepare passport, academic records, language proof, study plan, and program-specific materials.", "Apply through the official School of International Education channel.", "Follow review, admission, visa, campus assignment, and registration steps."],
      fees: { tuition: "Confirm current program-specific tuition from CPU's official guide.", accommodation: "Confirm Jiangning or Xuanwumen campus housing arrangements before arrival." },
      programNotes: ["Strong for pharmacy, drug discovery, medicinal chemistry, life sciences, and pharmaceutical business.", "Applicants should verify laboratory, health, and science prerequisite requirements."]
    }
  },
  "nanjing-normal-university": {
    website: "https://english.njnu.edu.cn/",
    summary: "A major Nanjing university with strengths in education, psychology, Chinese language, geography, humanities, sciences, arts, and international education.",
    majors: ["Chinese Language", "Education", "Business", "Computer Science"],
    applicationProfile: {
      sourceTitle: "Nanjing Normal University international student admissions",
      sourceDate: "Official university information; annual details to verify before submission",
      sourceUrl: "https://admission.njnu.edu.cn/",
      rankingHighlights: ["A major normal university with strengths in education, psychology, Chinese language, geography, humanities, sciences, and arts.", "Nanjing offers deep historical resources, strong university networks, and a more moderate living budget than Beijing or Shanghai."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic qualifications.", "Check the current guide for program-specific, nationality-document, age, health, and documentation requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require accepted English proficiency evidence."],
      applicationSteps: ["Review the latest Nanjing Normal University international program guide.", "Prepare passport, academic records, language proof, study plan, and required documents.", "Apply through the official international admissions channel.", "Follow review, admission, visa, housing, health check, and registration steps."],
      fees: { tuition: "Confirm current tuition by program from the official guide.", accommodation: "Confirm campus-specific Nanjing dormitory costs before arrival." },
      programNotes: ["Strong for education, psychology, Chinese language, geography, humanities, and arts.", "Students should verify which campus hosts their selected program."]
    }
  },
  "jiangnan-university": {
    website: "https://english.jiangnan.edu.cn/",
    summary: "A Wuxi university known for food science, biotechnology, design, textiles, Internet of Things, engineering, business, and medicine.",
    majors: ["Engineering", "Computer Science", "Business", "Medicine"],
    applicationProfile: {
      sourceTitle: "Jiangnan University admissions for international students",
      sourceDate: "Official admissions page, checked 2026",
      sourceUrl: "https://english.jiangnan.edu.cn/ADMISSIONS.htm",
      rankingHighlights: ["The official admissions page states that all university programs accept international students and selected majors are offered in English.", "Nearly 1,000 international students study across food science, biotechnology, textiles, Internet of Things, business, design, medicine, and other schools."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and qualifications suitable for the selected degree.", "Check the current guide for program-specific academic, age, health, and documentation requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "Selected English-taught majors require accepted English proficiency evidence."],
      applicationSteps: ["Review Jiangnan University's current regular-student, language, or exchange options.", "Prepare passport, academic records, language proof, study plan, and required materials.", "Apply through the School of International Education's official channel.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm tuition by program in Jiangnan University's current guide.", accommodation: "Confirm Wuxi campus dormitory costs before arrival." },
      programNotes: ["Distinctive strengths include food science, biotechnology, design, textiles, and Internet of Things.", "Wuxi combines lakeside quality of life with access to the wider Yangtze River Delta economy."]
    }
  },
  "beijing-jiaotong-university": {
    website: "https://en.bjtu.edu.cn/",
    summary: "A Beijing research university with strengths in transportation, railway systems, logistics, electrical engineering, computer science, economics, and management.",
    majors: ["Engineering", "Computer Science", "Business", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "Beijing Jiaotong University international education and admissions",
      sourceDate: "Official university information, checked 2026",
      sourceUrl: "https://international.bjtu.edu.cn/",
      rankingHighlights: ["A major university for transportation, railway systems, logistics, electrical engineering, computing, economics, and management.", "The official university site reports international students from more than 80 countries and broad global partnerships."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Check the latest BJTU guide for degree-specific, age, health, and documentation requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent proof."],
      applicationSteps: ["Review BJTU's latest international program and scholarship guide.", "Prepare passport, academic records, language proof, study plan, and required supporting documents.", "Apply through the official international student service system.", "Follow review, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm current tuition by program from BJTU's official guide.", accommodation: "Confirm Beijing campus dormitory costs before arrival." },
      programNotes: ["Strong for transport, railway engineering, logistics, electrical engineering, computing, and management.", "Chinese-language, preparatory, and short-term study options are also available."]
    }
  },
  "northeastern-university": {
    website: "https://english.neu.edu.cn/",
    summary: "A major Shenyang research university known for automation, control science, computer science, software, metallurgy, materials, engineering, and management.",
    majors: ["Engineering", "Computer Science", "Artificial Intelligence", "Business"],
    applicationProfile: {
      sourceTitle: "Northeastern University China international student programs",
      sourceDate: "Official university and international education materials, checked 2026",
      sourceUrl: "https://sie.neu.edu.cn/",
      rankingHighlights: ["A major engineering university with distinctive strengths in automation, control science, computer science, software, metallurgy, and materials.", "Shenyang provides access to Northeast China's advanced manufacturing, automotive, robotics, and industrial economy."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and qualifications appropriate for the chosen degree.", "Check the current NEU guide for academic, age, health, nationality-document, and program requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent evidence."],
      applicationSteps: ["Review the latest NEU international program and scholarship guide.", "Prepare passport, academic records, language proof, study plan, and required supporting documents.", "Apply through the official School of International Education channel.", "Follow assessment, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm current tuition by program from NEU's official guide.", accommodation: "Confirm Shenyang campus dormitory costs before arrival." },
      programNotes: ["Strong for automation, control, computing, software, metallurgy, materials, and industrial engineering.", "This profile refers to Northeastern University in Shenyang, China, not the similarly named US university."]
    }
  },
  "dalian-maritime-university": {
    website: "https://english.dlmu.edu.cn/",
    summary: "A specialist coastal university in Dalian for maritime transport, navigation, marine engineering, logistics, shipping economics, law, and information technology.",
    majors: ["Engineering", "Marine Science", "Business", "Computer Science"],
    applicationProfile: {
      sourceTitle: "Dalian Maritime University international student admissions",
      sourceDate: "Official international education materials, checked 2026",
      sourceUrl: "https://iec.dlmu.edu.cn/",
      rankingHighlights: ["A specialist university for maritime transport, navigation, marine engineering, logistics, shipping economics, and maritime law.", "Dalian offers a scenic coastal setting and a major port, logistics, shipbuilding, and international trade economy."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic qualifications.", "Maritime and navigation programs may impose additional health, vision, science, or professional requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs require accepted English proficiency evidence."],
      applicationSteps: ["Review DMU's latest international program guide.", "Prepare passport, academic records, language proof, health documents, study plan, and required materials.", "Apply through the official international education channel.", "Follow review, admission, visa, housing, medical examination, and registration steps."],
      fees: { tuition: "Confirm tuition by program from DMU's current official guide.", accommodation: "Confirm Dalian campus dormitory costs before arrival." },
      programNotes: ["Strong for maritime transport, navigation, marine engineering, logistics, shipping, and maritime law.", "Applicants to seafaring programs should verify medical and professional certification requirements."]
    }
  },
  "china-medical-university": {
    website: "https://english.cmu.edu.cn/",
    summary: "A major medical university in Shenyang with programs and clinical training across medicine, dentistry, public health, nursing, pharmacy, and biomedical sciences.",
    majors: ["Medicine", "Pharmacy", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "China Medical University international student admissions",
      sourceDate: "Official university information; annual medical-program details to verify",
      sourceUrl: "https://www.cmu.edu.cn/",
      rankingHighlights: ["A major medical university with affiliated hospitals and broad clinical, public-health, nursing, pharmacy, and biomedical training.", "Shenyang provides a comparatively moderate living budget and a large regional healthcare network."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports, suitable science preparation, and good physical and mental health.", "Medical programs may impose additional age, health, laboratory, clinical, and qualification requirements."],
      languageRequirements: ["Chinese-taught medical programs generally require HSK.", "English-taught programs require accepted English proficiency, while clinical training may still require Chinese."],
      applicationSteps: ["Review the latest international medical-program guide.", "Prepare passport, academic and science records, language proof, health documents, and required statements.", "Apply through the university's official international admissions channel.", "Follow assessment, admission, visa, medical examination, housing, and registration steps."],
      fees: { tuition: "Confirm current tuition from the latest official program guide.", accommodation: "Confirm Shenyang dormitory and affiliated-hospital arrangements before arrival." },
      programNotes: ["Applicants should verify medical degree recognition and licensing rules in their intended country.", "Clinical placements may require stronger Chinese proficiency than classroom study."]
    }
  },
  "southern-medical-university": {
    website: "https://portal.smu.edu.cn/en/",
    summary: "A Guangzhou medical university with strengths in clinical medicine, public health, nursing, pharmacy, biomedical engineering, and extensive hospital-based training.",
    majors: ["Medicine", "Engineering", "Pharmacy", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "Southern Medical University international student admissions",
      sourceDate: "Official university materials; annual program details to verify",
      sourceUrl: "https://portal.smu.edu.cn/gjjy/",
      rankingHighlights: ["A major Guangzhou medical university with extensive affiliated-hospital and clinical-training resources.", "Strengths include clinical medicine, public health, nursing, pharmacy, biomedical science, and biomedical engineering."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports, suitable science preparation, and good physical and mental health.", "Medical programs may have additional academic, health, age, clinical, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught medical programs require accepted English evidence, while clinical communication may require Chinese."],
      applicationSteps: ["Review the current SMU international program catalog.", "Prepare passport, academic and science records, language proof, health documents, and required statements.", "Apply through the official international education channel.", "Follow assessment, admission, visa, medical examination, housing, and registration steps."],
      fees: { tuition: "Confirm current tuition by program from SMU's official guide.", accommodation: "Confirm Guangzhou campus and clinical-placement housing before arrival." },
      programNotes: ["Guangzhou provides access to major hospitals and the Greater Bay Area healthcare economy.", "Applicants should verify degree recognition and licensing requirements in their destination country."]
    }
  },
  "south-china-normal-university": {
    website: "https://english.scnu.edu.cn/",
    summary: "A major Guangzhou university known for education, psychology, Chinese language, humanities, sciences, technology, business, and international teacher education.",
    majors: ["Education", "Chinese Language", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "South China Normal University undergraduate admissions",
      sourceDate: "Official admissions information, checked 2026",
      sourceUrl: "https://english.scnu.edu.cn/ADMISSION/",
      rankingHighlights: ["A Double First-Class and Project 211 university with strengths in education, psychology, Chinese language, humanities, sciences, and technology.", "The official admissions site reports more than 1,000 international students."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and suitable academic credentials.", "Official documents uploaded during application must be accurate and originals are required for verification after admission."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require IELTS, TOEFL, or accepted equivalent evidence."],
      applicationSteps: ["Review SCNU's current undergraduate, graduate, language, and scholarship options.", "Prepare passport, academic records, language proof, study plan, and required supporting documents.", "Apply through SCNU's official international student online platform.", "Follow assessment, admission, original-document verification, visa, housing, and registration steps."],
      fees: { tuition: "Confirm current tuition by program in SCNU's official guide.", accommodation: "Confirm Guangzhou campus-specific dormitory costs before arrival." },
      programNotes: ["Strong for education, psychology, Chinese language, teacher training, sciences, and technology.", "Guangzhou offers warm weather and strong access to the Greater Bay Area."]
    }
  },
  "guangxi-university": {
    website: "https://www.gxu.edu.cn/",
    summary: "A comprehensive university in Nanning with strengths in engineering, agriculture, business, ASEAN studies, Chinese language, and regional cooperation.",
    majors: ["Engineering", "Business", "Chinese Language", "Agriculture"],
    applicationProfile: {
      sourceTitle: "Guangxi University international student admissions",
      sourceDate: "Official university information; annual details to verify",
      sourceUrl: "https://gjy.gxu.edu.cn/",
      rankingHighlights: ["A comprehensive university with strengths in engineering, agriculture, business, Chinese language, and regional studies.", "Nanning is a key gateway for China-ASEAN trade, culture, education, and travel."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and qualifications suitable for the chosen degree.", "Check the current GXU guide for degree-specific, age, health, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require accepted English proficiency evidence."],
      applicationSteps: ["Review GXU's latest international program and scholarship guide.", "Prepare passport, academic records, language proof, study plan, and required materials.", "Apply through the official international education channel.", "Follow assessment, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm current tuition by program from GXU's official guide.", accommodation: "Confirm Nanning dormitory costs before arrival." },
      programNotes: ["Good fit for students interested in ASEAN relations, agriculture, engineering, trade, and Chinese language.", "Nanning offers a warm climate and comparatively moderate living costs."]
    }
  },
  "yunnan-university": {
    website: "https://english.ynu.edu.cn/",
    summary: "A comprehensive university in Kunming known for ecology, biodiversity, ethnic studies, international relations, economics, humanities, and Southwest Asian regional studies.",
    majors: ["Ecology", "Business", "Chinese Language", "Computer Science"],
    applicationProfile: {
      sourceTitle: "Yunnan University international student admissions",
      sourceDate: "Official university and international admission information, checked 2026",
      sourceUrl: "https://www.ynu.edu.cn/",
      rankingHighlights: ["A comprehensive university with distinctive strengths in ecology, biodiversity, ethnic studies, international relations, and Southwest regional studies.", "Kunming's mild climate and connections to South and Southeast Asia create a distinctive study and travel environment."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and qualifications appropriate for the target program.", "Check the current YNU guide for academic, age, health, nationality-document, and program requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught programs may require accepted English proficiency evidence."],
      applicationSteps: ["Review YNU's current degree and scholarship notices.", "Prepare passport, academic records, language proof, study plan, and required documents.", "Apply through the official international student channel.", "Follow assessment, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Confirm current tuition by program from YNU's official guide.", accommodation: "Confirm Kunming campus dormitory costs before arrival." },
      programNotes: ["Strong for ecology, biodiversity, ethnic studies, regional studies, economics, and humanities.", "Kunming is attractive for students prioritizing mild weather, nature, and regional travel."]
    }
  },
  "liaoning-university": {
    website: "https://ie.lnu.edu.cn/",
    summary: "A comprehensive university in Shenyang with strengths in economics, business, law, humanities, sciences, Chinese language, communication, and regional studies.",
    majors: ["Business", "Chinese Language", "Law", "Computer Science"],
    applicationProfile: {
      sourceTitle: "2026 International Students Admission Guidelines, Liaoning University",
      sourceDate: "Official 2026 international admission guide",
      sourceUrl: "https://ie.lnu.edu.cn/info/10594/2201.htm",
      rankingHighlights: ["A comprehensive university in Shenyang with established strengths in economics, business, law, humanities, sciences, and Chinese language.", "Shenyang offers lower living costs and access to Northeast China's industrial, cultural, and historical resources."],
      eligibility: ["Undergraduate applicants must hold a diploma equivalent to a Chinese general high school diploma and obtain it before September 2026.", "All undergraduate applicants must take the CSCA and meet the academic, language, and program requirements.", "Applicants must provide a valid passport, physical examination, and no-criminal-record certificate; applicants under 18 need guardianship documents."],
      languageRequirements: ["Chinese-taught programs require HSK Level 4 with a score of 180 or above.", "English-taught programs require IELTS 5.0 or TOEFL 60; certificates must be valid at application."],
      applicationSteps: ["Apply through lnu.17gz.org and upload passport, diploma or pre-graduation certificate, transcripts, CSCA report, and language proof.", "Upload the physical examination, no-criminal-record certificate, resume, and guardianship documents where applicable.", "After initial review, pay the CNY 800 application fee.", "Complete CSCA and an interview; admission results are sent by email after comprehensive assessment."],
      fees: { application: "CNY 800", tuition: "Undergraduate degree programs: CNY 18,000/year; special and fully English-taught programs may differ.", insurance: "CNY 800/year", accommodation: "Single room: CNY 64/day; double room: CNY 32/day." },
      programNotes: ["Undergraduate application deadline: July 31, 2026.", "CSCA sessions are scheduled across December 2025 and January, March, April, and June 2026; interviews run from May to August.", "Chinese Language applicants with valid HSK Level 4 may be exempt from the Professional Chinese CSCA subject."]
    }
  },
  "china-university-of-petroleum-beijing": {
    website: "https://www.cup.edu.cn/overseas/",
    summary: "A specialist Beijing research university with strengths in petroleum engineering, energy, geosciences, chemical engineering, environmental science, computer science, and business.",
    majors: ["Engineering", "Computer Science", "Geosciences", "Business"],
    applicationProfile: {
      sourceTitle: "2026 Application Guide for Undergraduate Programs for International Students, China University of Petroleum Beijing",
      sourceDate: "Official 2026 undergraduate guide",
      sourceUrl: "https://www.cup.edu.cn/overseas/docs/2025-12/4f172880f5954983ade954df3c014db7.pdf",
      rankingHighlights: ["A specialist national university focused on petroleum, energy, geosciences, chemical engineering, environmental science, and related technologies.", "Its Changping campus provides access to Beijing while supporting focused engineering and research study."],
      eligibility: ["Applicants must be non-Chinese citizens who are physically and mentally healthy, law-abiding, friendly toward China, and without a criminal record.", "Applicants need a high school diploma or expected-graduation certificate, an average score above 70%, and GPA of at least 3.0/5.0.", "All bachelor applicants must take the CSCA and submit valid results.", "Applicants must provide a bank reference showing at least CNY 49,000 held for at least one month."],
      languageRequirements: ["English-taught undergraduate programs require IELTS 6.0, TOEFL 75, TOEFL Essentials 8, or accepted equivalent evidence.", "Applicants should confirm Chinese-language thresholds and program-specific CSCA subjects in the official program list."],
      applicationSteps: ["Review the 2026 undergraduate program and CSCA subject lists.", "Apply through cie-registration.cup.edu.cn and upload the required passport, academic, language, health, conduct, financial, and CSCA documents.", "For CSC Type B, also submit through the Chinese Government Scholarship system.", "Complete the application and scholarship route by its stated deadline."],
      fees: { application: "CNY 400 or USD 70; CSC Type A applicants are exempt.", tuition: "CNY 25,000/year.", accommodation: "CNY 800 or CNY 1,200/month per person, depending on room type." },
      programNotes: ["CSC Type A applications generally run from December 2025 to March 2026.", "CSC Type B, self-funded, and Beijing Government Scholarship applications run from October 25, 2025 to June 15, 2026.", "CSC undergraduate support covers the normal study duration and may also cover an additional required Chinese-language year."]
    }
  },
  "wenzhou-kean-university": {
    website: "https://www.wku.edu.cn/en",
    summary: "A Sino-American university in Wenzhou offering English-medium undergraduate education with U.S.-style holistic admissions and programs across business, computing, design, architecture, psychology, and sciences.",
    majors: ["Business", "Computer Science", "Architecture", "Psychology"],
    applicationProfile: {
      sourceTitle: "Undergraduate International Admissions, Wenzhou-Kean University",
      sourceDate: "Official Fall 2026 international undergraduate admissions guide",
      sourceUrl: "https://admission.wku.edu.cn/en/internationalstudents",
      rankingHighlights: ["A Sino-American university delivering English-medium education and U.S.-style holistic admissions in Wenzhou.", "Programs connect international students to business, computing, design, architecture, psychology, and science pathways."],
      eligibility: ["Applicants must be non-Chinese citizens holding foreign passports and must have graduated from high school or provide a pre-graduation certificate.", "Applicants should be in good physical and mental health, have strong academic and moral standing, be friendly toward China, and have no criminal record.", "Freshman applicants may enroll only in the fall; spring entry is reserved for transfer students."],
      languageRequirements: ["The university uses a holistic, test-optional review for the 2026-2027 application cycle.", "English proficiency and standardized scores may strengthen an application and can qualify applicants for freshman scholarships."],
      applicationSteps: ["Apply through intlapply.wku.edu.cn by June 30, 2026 for Fall 2026 entry.", "Upload passport, photograph, academic transcript, diploma or pre-graduation certificate, and a one-to-two-page personal essay.", "Optionally submit SAT, ACT, A-Level, AP, IB, UEC, or other standardized results.", "Transfer applicants with non-U.S. educational backgrounds must submit a NACES-approved credential evaluation."],
      fees: { application: "CNY 400, payable upon admission", tuition: "CNY 88,000/year for the 2026-2027 academic year; latest approved price prevails.", insurance: "CNY 800/year", accommodation: "CNY 8,000-10,000 for ten months; admitted students also pay a CNY 10,000 deposit applied to tuition." },
      programNotes: ["Fall 2026 application deadline: June 30, 2026.", "First-class freshman scholarship reduces annual tuition by 60%; second-class reduces annual tuition by 30%, subject to renewal requirements.", "Scholarship review occurs with admission; applicants indicate scholarship interest and upload evidence in the application system."]
    }
  },
  "zhejiang-normal-university": {
    website: "https://www.zjnu.edu.cn/",
    summary: "A comprehensive university in Jinhua with strengths in teacher education, Chinese language, humanities, sciences, business, computer science, and international education.",
    majors: ["Education", "Chinese Language", "Computer Science", "Business"],
    applicationProfile: {
      sourceTitle: "2026 Admission Guide for Undergraduate Programs, Zhejiang Normal University",
      sourceDate: "Official 2026 undergraduate guide",
      sourceUrl: "https://iso.zjnu.edu.cn/2020/0103/c19185a517263/page.htm",
      rankingHighlights: ["A comprehensive university particularly known for teacher education, Chinese language, humanities, sciences, and international education.", "Jinhua offers a lower-cost student environment with convenient access to Hangzhou, Yiwu, and the wider Yangtze River Delta."],
      eligibility: ["Non-Chinese citizens holding a valid ordinary passport.", "Generally aged 18-25, in good physical and mental health, with no criminal record or drug-abuse history.", "Recent high school graduates or holders of a high school diploma with good academic performance.", "All undergraduate applicants must submit a CSCA transcript."],
      languageRequirements: ["Chinese-taught programs require a valid HSK certificate according to the program catalog.", "Non-native English speakers applying to English-taught programs must submit TOEFL, IELTS, or Duolingo English Test results."],
      applicationSteps: ["Apply online through admission.zjnu.edu.cn from March 1 to July 15, 2026.", "Upload passport, high school diploma and transcripts, CSCA transcript, language proof, physical examination, and no-criminal-record certificate.", "Provide a bank statement showing at least CNY 30,000 and a study plan of at least 1,000 words.", "Monitor the application system, email, phone, and WeChat for assessment notices."],
      fees: { application: "Confirm the current application fee in the official application system.", tuition: "Tuition varies by program; consult the official 2026 program catalog.", accommodation: "Confirm Jinhua campus dormitory fees before arrival." },
      programNotes: ["Application period: March 1-July 15, 2026.", "Passport should expire after February 28, 2027.", "Standardized results such as A Level, AP, IB, SAT, ACT, or UEC may be submitted when applicable."]
    }
  },
  "northeast-normal-university": {
    website: "https://www.nenu.edu.cn/",
    summary: "A Double First-Class university in Changchun with major strengths in education, psychology, Chinese language, humanities, sciences, geography, and teacher training.",
    majors: ["Education", "Chinese Language", "Computer Science", "Physics"],
    applicationProfile: {
      sourceTitle: "Admission Guidelines for Bachelor's Programs for International Students of Northeast Normal University 2026-2027",
      sourceDate: "Official 2026-2027 bachelor's guide",
      sourceUrl: "https://iso.nenu.edu.cn/Admission/Bachelor_Program.htm",
      rankingHighlights: ["A major national teacher-education and research university with strengths in education, psychology, Chinese language, humanities, sciences, and geography.", "Offers Chinese Government Scholarship, International Chinese Language Teachers Scholarship, and a full NENU Presidential Scholarship for outstanding new students."],
      eligibility: ["Non-Chinese citizens in good physical and mental health with strong academic performance and conduct.", "Bachelor applicants must be aged 18-25 and hold a high school diploma or equivalent.", "All bachelor applicants must take the CSCA; Chinese Language applicants with HSK 4 score 180 or above are exempt from Humanities Chinese."],
      languageRequirements: ["Language requirements vary by major and must be checked in the 2026 bachelor program catalog.", "Applicants should submit valid language proof; Malaysian Independent Chinese Secondary School applicants are exempt from Chinese proof."],
      applicationSteps: ["Apply by June 22, 2026 through studyatnenu.nenu.edu.cn or nenu.17gz.org.", "Pay the CNY 400 application fee online.", "Submit passport, diploma, transcripts, CSCA report, language proof, a study plan of at least 600 words, physical examination, and no-criminal-record certificate.", "Complete academic review and online interview; final results are issued by email before July 2026."],
      fees: { application: "CNY 400", tuition: "Humanities, social sciences, and natural sciences: CNY 16,000/year; arts and physical education: CNY 19,600/year.", insurance: "CNY 800/year", accommodation: "Single room: CNY 40/day; meals are estimated at CNY 1,000-1,500/month." },
      programNotes: ["Application deadline: June 22, 2026.", "The NENU Presidential Scholarship for Outstanding International Students is a full scholarship awarded after comprehensive evaluation.", "Admission notices and JW202 forms are issued after final review."]
    }
  },
  "nanjing-university-of-science-and-technology": {
    website: "https://www.njust.edu.cn/",
    summary: "A Double First-Class engineering university in Nanjing with strengths in engineering, computer science, automation, electronics, materials, business, and applied sciences.",
    majors: ["Engineering", "Computer Science", "Artificial Intelligence", "Business"],
    applicationProfile: {
      sourceTitle: "2026 NJUST International Undergraduate Students Admission Guide",
      sourceDate: "Official 2026 undergraduate guide",
      sourceUrl: "https://study.njust.edu.cn/74/72/c4390a357490/page.htm",
      rankingHighlights: ["A major Nanjing engineering and applied-science university with strong computer science, automation, electronics, materials, and innovation resources.", "Undergraduate programs are offered in Chinese and English, with CSCA scores used as an important admissions indicator from 2026."],
      eligibility: ["Applicants should be non-Chinese citizens holding valid ordinary passports, with appropriate high school qualifications and good health.", "All 2026 undergraduate applicants must take the CSCA and submit valid results.", "Program-specific subjects and academic requirements should be checked in the official guide."],
      languageRequirements: ["Chinese-taught programs require HSK according to the chosen program.", "English-taught programs require accepted English proficiency evidence or equivalent English-medium education."],
      applicationSteps: ["Review the official 2026 undergraduate major list and CSCA subject requirements.", "Prepare passport, high school diploma and transcripts, CSCA report, language proof, health documents, and supporting materials.", "Submit through NJUST's official international student application channel.", "Track academic review, scholarship, admission, visa, housing, and registration notices."],
      fees: { tuition: "Chinese-taught undergraduate programs: CNY 18,000/year; English-taught undergraduate programs: CNY 19,800/year.", accommodation: "Confirm current Nanjing campus accommodation fees in the official guide." },
      programNotes: ["CSCA is a new required admissions signal for the 2026 intake.", "NJUST scholarship routes include Chinese Government Scholarship and university scholarship programs.", "Nanjing provides strong engineering, research, manufacturing, and technology career access."]
    }
  },
  "jiangsu-university-of-science-and-technology": {
    website: "https://www.just.edu.cn/",
    summary: "An applied science and engineering university in Zhenjiang with strengths in computer science, business, naval architecture, marine engineering, automation, materials, and shipbuilding.",
    majors: ["Computer Science", "Business", "Engineering", "Marine Science"],
    applicationProfile: {
      sourceTitle: "Enrollment Guideline for International Students 2026, Jiangsu University of Science and Technology",
      sourceDate: "Official guide published April 9, 2026",
      sourceUrl: "https://admission.just.edu.cn/2026/0409/c10116a372087/page.htm",
      rankingHighlights: ["2026 English-taught bachelor options include Computer Science and Technology and Business Administration.", "Distinctive strengths include shipbuilding, naval architecture, marine engineering, automation, materials, food science, and business."],
      eligibility: ["Bachelor applicants must hold a high school diploma, A-Level, or equivalent and be aged 24 or below.", "Applicants need a valid foreign passport, good health, complete documents, and competitive academic results.", "The application period is April 10-June 10, 2026."],
      languageRequirements: ["English-taught bachelor programs require TOEFL iBT 75 or IELTS 5.5; non-native speakers also complete an online interview.", "Chinese-taught programs require a recent HSK Level 4 certificate."],
      applicationSteps: ["Apply exclusively online through https://just.17gz.org/.", "Upload passport, high school qualification, language proof, physical examination, and no-criminal-record certificate.", "Monitor the portal for conditional admission, then pay required fees and upload the receipt.", "Admission documents are scheduled to be issued before August 15, 2026."],
      fees: { application: "CNY 400", tuition: "English-taught bachelor program: CNY 11,250/year.", insurance: "Approximately CNY 600/year", accommodation: "Double room: CNY 3,000/year." },
      programNotes: ["JUST Bachelor Scholarship: CNY 7,000/year.", "Undergraduate academic scholarships range from CNY 2,000 to CNY 8,000/year based on previous-year GPA ranking.", "The Jiangsu Provincial Full Scholarship can include tuition, accommodation, insurance, and living allowance.", "If an English-taught bachelor cohort does not reach the minimum size, students may need to transfer to another program."]
    }
  },
  "northwest-aandf-university": {
    website: "https://en.nwafu.edu.cn/",
    summary: "A national research university in Yangling specializing in agriculture, forestry, food science, water resources, ecology, life sciences, and rural development.",
    majors: ["Agriculture", "Engineering", "Ecology", "Business"],
    applicationProfile: {
      sourceTitle: "Northwest A&F University international student application guide",
      sourceDate: "Official international education pages and 2026 materials",
      sourceUrl: "https://gjs.nwafu.edu.cn/en/",
      rankingHighlights: ["A national research university specializing in agriculture, forestry, food science, water resources, ecology, life sciences, and rural development.", "The international education site provides application guides, scholarship information, fees, programs, and an official application system."],
      eligibility: ["Applicants should be non-Chinese citizens with valid passports and qualifications suitable for the selected degree.", "Check the latest NWAFU guide for academic background, age, health, supervisor, and document requirements."],
      languageRequirements: ["Chinese-taught programs generally require HSK.", "English-taught graduate programs may require accepted English proficiency evidence."],
      applicationSteps: ["Review NWAFU's current application guide, program catalog, and scholarship options.", "Prepare passport, academic records, language proof, study plan or research proposal, and required documents.", "Apply through the official NWAFU international student application system.", "Follow assessment, admission, visa, housing, and registration instructions."],
      fees: { tuition: "Check the current official fees and bank-account information page.", accommodation: "Confirm Yangling campus dormitory costs before arrival." },
      programNotes: ["Excellent fit for agriculture, food systems, forestry, ecology, water resources, and rural development.", "Yangling is a specialist agricultural science town near Xi'an, with a quieter and lower-cost environment."]
    }
  }
};
