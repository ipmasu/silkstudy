import type { UniversityProfileEnrichment } from "@/lib/catalog/university-profile-enrichments";

type UploadedGuideInput = {
  name: string;
  website: string;
  sourceTitle: string;
  sourceDate: string;
  sourceUrl: string;
  summary: string;
  majors: string[];
  focus: string;
  city: string;
  exact?: Partial<UniversityProfileEnrichment["applicationProfile"]>;
};

function uploadedGuide(input: UploadedGuideInput): UniversityProfileEnrichment {
  return {
    website: input.website,
    summary: input.summary,
    majors: input.majors,
    applicationProfile: {
      sourceTitle: input.sourceTitle,
      sourceDate: input.sourceDate,
      sourceUrl: input.sourceUrl,
      rankingHighlights: input.exact?.rankingHighlights ?? [
        `${input.name} is included in the uploaded undergraduate admissions materials for international students.`,
        `${input.city} gives applicants a study base connected to ${input.focus}.`
      ],
      eligibility: input.exact?.eligibility ?? [
        "Undergraduate applicants should generally be non-Chinese citizens with valid passports, good health, and high school graduation or equivalent qualifications.",
        "Age limits, nationality-document rules, guardian documents for minors, medical checks, and no-criminal-record requirements must be confirmed in the current annual guide.",
        "For 2026-entry undergraduate applications, applicants should confirm whether CSCA results are required for the selected school and major."
      ],
      languageRequirements: input.exact?.languageRequirements ?? [
        "Chinese-taught undergraduate programs usually require an HSK certificate at the level specified by the program.",
        "English-taught undergraduate programs usually require IELTS, TOEFL, Duolingo, prior English-medium education proof, or an interview.",
        "Medical, art, architecture, and language-related programs may set additional portfolio, interview, science, or language thresholds."
      ],
      applicationSteps: input.exact?.applicationSteps ?? [
        "Use the uploaded admissions guide as the source note, then open the official admissions page to confirm the current program list, deadline, language requirement, CSCA subjects, tuition, and scholarship route.",
        "Prepare passport, high school diploma or pre-graduation certificate, transcripts, language proof, physical examination, no-criminal-record certificate, and financial materials.",
        "Submit through the university's official international student application system or the portal linked from the international office.",
        "Track document review, interview or entrance assessment, scholarship decision, admission notice, JW form, visa, dormitory, and registration instructions."
      ],
      fees: input.exact?.fees ?? {
        application: "Application fee varies by annual guide and should be confirmed before submission.",
        tuition: "Undergraduate tuition varies by major and language of instruction; confirm from the uploaded guide and current official notice.",
        insurance: "International students in China are normally required to purchase approved medical insurance; many universities list about CNY 800/year.",
        accommodation: "Dormitory availability and fees vary by campus and room type; confirm before accepting admission."
      },
      programNotes: input.exact?.programNotes ?? [
        "This profile is based on the uploaded admissions brochure set and should be reconfirmed against the latest official annual notice before advising an applicant.",
        "Scholarships may include Chinese Government Scholarship, provincial or municipal scholarships, and university scholarships, but award level and eligibility vary by year.",
        "Students should compare language of instruction, city cost, campus location, internship access, scholarship probability, and visa timing before applying."
      ]
    }
  };
}

export const uploadedUndergraduateAdmissionEnrichments: Record<string, UniversityProfileEnrichment> = {
  "shanghai-university": uploadedGuide({
    name: "Shanghai University",
    website: "https://en.shu.edu.cn/",
    sourceTitle: "2024-2025 Shanghai University international undergraduate admission guide",
    sourceDate: "Uploaded 2024-2025 undergraduate guide",
    sourceUrl: "https://apply.shu.edu.cn/",
    summary: "A large comprehensive Shanghai university with strengths in engineering, business, computer science, arts, communication, materials, and international education.",
    majors: ["Engineering", "Business", "Computer Science", "Chinese Language"],
    focus: "Shanghai industry, engineering, business, arts, communication, and international education",
    city: "Shanghai"
  }),
  "southeast-university": uploadedGuide({
    name: "Southeast University",
    website: "https://www.seu.edu.cn/",
    sourceTitle: "2024 Southeast University undergraduate admission guide for international students",
    sourceDate: "Uploaded 2024 undergraduate guide; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://cis.seu.edu.cn/",
    summary: "A major Nanjing research university known for architecture, engineering, computer science, electronics, transportation, medicine, and applied sciences.",
    majors: ["Engineering", "Architecture", "Computer Science", "Medicine"],
    focus: "Nanjing research universities, architecture, engineering, electronics, and transportation",
    city: "Nanjing"
  }),
  "peking-university": uploadedGuide({
    name: "Peking University",
    website: "https://english.pku.edu.cn/",
    sourceTitle: "2024 Peking University undergraduate entrance examination guide and undergraduate department list",
    sourceDate: "Uploaded 2024 undergraduate examination guide and major list",
    sourceUrl: "https://www.isd.pku.edu.cn/",
    summary: "A top Beijing comprehensive research university with broad undergraduate pathways across sciences, humanities, social sciences, economics, management, law, engineering, and medicine-related fields.",
    majors: ["Computer Science", "Business", "Physics", "Chinese Language"],
    focus: "Beijing research, elite undergraduate education, broad liberal arts and science pathways",
    city: "Beijing",
    exact: {
      programNotes: [
        "The uploaded department list states that undergraduate international students apply by school or department preference; specific major streaming usually happens after enrollment.",
        "Listed pathways include mathematics, physics, computer science, engineering, chemistry, Chinese language and literature, history, archaeology, sociology, philosophy, international relations, economics, Guanghua management, law, government, journalism, arts, and Yuanpei experimental tracks.",
        "Applicants should verify the latest exam arrangement, department list, and Chinese-language requirements with PKU's international student division."
      ]
    }
  }),
  "wuhan-university": uploadedGuide({
    name: "Wuhan University",
    website: "https://en.whu.edu.cn/",
    sourceTitle: "2024 Wuhan University undergraduate programs admission guide for international students",
    sourceDate: "Uploaded 2024 undergraduate guide",
    sourceUrl: "https://admission.whu.edu.cn/",
    summary: "A major Wuhan comprehensive university with strong programs in medicine, engineering, computer science, law, economics, humanities, sciences, and Chinese language.",
    majors: ["Medicine", "Engineering", "Computer Science", "Business"],
    focus: "central China research universities, medicine, engineering, computer science, law, and humanities",
    city: "Wuhan"
  }),
  "shenzhen-university": uploadedGuide({
    name: "Shenzhen University",
    website: "https://en.szu.edu.cn/",
    sourceTitle: "2024 Shenzhen University undergraduate program admission guide for international students",
    sourceDate: "Uploaded 2024 undergraduate guide",
    sourceUrl: "https://lxs.szu.edu.cn/",
    summary: "A fast-growing university in Shenzhen with strengths in computer science, engineering, business, design, communication, medicine-related fields, and Greater Bay Area industry links.",
    majors: ["Computer Science", "Engineering", "Business", "Design"],
    focus: "Shenzhen technology, entrepreneurship, design, business, and Greater Bay Area opportunities",
    city: "Shenzhen"
  }),
  "northeast-agricultural-university": uploadedGuide({
    name: "Northeast Agricultural University",
    website: "https://www.neau.edu.cn/",
    sourceTitle: "2025 Admissions Guide for International Students of Northeast Agricultural University",
    sourceDate: "Uploaded 2025 admissions guide",
    sourceUrl: "https://gjjyxy.neau.edu.cn/",
    summary: "A Harbin agricultural university with strengths in agriculture, animal science, food science, life sciences, engineering, and business.",
    majors: ["Agriculture", "Animal Science", "Food Science", "Business"],
    focus: "agriculture, food systems, animal science, cold-region research, and Harbin student life",
    city: "Harbin"
  }),
  "soochow-university": uploadedGuide({
    name: "Soochow University",
    website: "https://eng.suda.edu.cn/",
    sourceTitle: "2025-2026 Soochow University international undergraduate program admission guide",
    sourceDate: "Uploaded 2025-2026 undergraduate guide",
    sourceUrl: "https://eng.suda.edu.cn/Admission/",
    summary: "A comprehensive Suzhou university with broad undergraduate options across medicine, engineering, business, Chinese language, humanities, sciences, and arts.",
    majors: ["Medicine", "Engineering", "Business", "Chinese Language"],
    focus: "Suzhou technology, classical culture, medicine, engineering, business, and Chinese language study",
    city: "Suzhou"
  }),
  "jilin-university": uploadedGuide({
    name: "Jilin University",
    website: "https://global.jlu.edu.cn/",
    sourceTitle: "2026-2027 Jilin University international student admission brochure",
    sourceDate: "Uploaded 2026-2027 Chinese guide; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://apply.jlu.edu.cn/",
    summary: "A large comprehensive Changchun research university with broad study choices across medicine, engineering, sciences, law, humanities, business, and Chinese language.",
    majors: ["Medicine", "Engineering", "Computer Science", "Business"],
    focus: "Changchun automotive industry, medicine, engineering, sciences, law, and broad comprehensive study",
    city: "Changchun"
  }),
  "chongqing-university-of-posts-and-telecommunications": uploadedGuide({
    name: "Chongqing University of Posts and Telecommunications",
    website: "https://english.cqupt.edu.cn/",
    sourceTitle: "2026-2027 CQUPT international undergraduate admission guide",
    sourceDate: "Uploaded 2026-2027 undergraduate guide",
    sourceUrl: "https://international.cqupt.edu.cn/",
    summary: "A Chongqing technology university with strengths in communications, computer science, software, automation, electronics, AI, and digital media.",
    majors: ["Computer Science", "Telecommunications", "Engineering", "Artificial Intelligence"],
    focus: "communications, software, electronics, AI, digital media, and Chongqing industry",
    city: "Chongqing"
  }),
  "china-agricultural-university": uploadedGuide({
    name: "China Agricultural University",
    website: "https://en.cau.edu.cn/",
    sourceTitle: "2026 China Agricultural University undergraduate admission guide for international students",
    sourceDate: "Uploaded 2026 undergraduate guide",
    sourceUrl: "https://en.cau.edu.cn/col/col32411/index.html",
    summary: "A leading Beijing university for agriculture, food science, life sciences, veterinary medicine, environmental science, engineering, and rural development.",
    majors: ["Agriculture", "Engineering", "Food Science", "Business"],
    focus: "agriculture, food systems, sustainability, veterinary science, and Beijing research resources",
    city: "Beijing"
  }),
  "nanjing-university-of-science-and-technology": uploadedGuide({
    name: "Nanjing University of Science and Technology",
    website: "https://www.njust.edu.cn/",
    sourceTitle: "2026 NJUST undergraduate admission guide for international students",
    sourceDate: "Uploaded 2026 undergraduate guide",
    sourceUrl: "https://study.njust.edu.cn/",
    summary: "A Double First-Class engineering university in Nanjing with strengths in engineering, computer science, automation, electronics, materials, business, and applied sciences.",
    majors: ["Engineering", "Computer Science", "Artificial Intelligence", "Business"],
    focus: "Nanjing engineering, automation, electronics, materials, computer science, and applied research",
    city: "Nanjing",
    exact: {
      fees: {
        tuition: "Chinese-taught undergraduate programs: CNY 18,000/year; English-taught undergraduate programs: CNY 19,800/year.",
        accommodation: "Confirm current Nanjing campus accommodation fees in the official guide.",
        insurance: "Confirm the current international student medical insurance requirement before registration."
      },
      programNotes: [
        "The uploaded guide is a 2026 undergraduate admissions guide and should be used for current-year CSCA and program-list confirmation.",
        "NJUST scholarship routes include Chinese Government Scholarship and university scholarship programs.",
        "Nanjing provides strong engineering, research, manufacturing, and technology career access."
      ]
    }
  }),
  "xiamen-university": uploadedGuide({
    name: "Xiamen University",
    website: "https://en.xmu.edu.cn/",
    sourceTitle: "2026 Xiamen University international admissions guide",
    sourceDate: "Uploaded 2026 international admissions guide; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://admissions.xmu.edu.cn/",
    summary: "A coastal research university in Xiamen with strengths in economics, management, marine science, chemistry, humanities, engineering, medicine, and Chinese language.",
    majors: ["Business", "Marine Science", "Engineering", "Chinese Language"],
    focus: "coastal campus life, economics, marine science, Southeast Asia links, and Xiamen student experience",
    city: "Xiamen"
  }),
  "northwest-university": uploadedGuide({
    name: "Northwest University",
    website: "https://english.nwu.edu.cn/",
    sourceTitle: "2026 Northwest University undergraduate admission guide for international students",
    sourceDate: "Uploaded 2026 undergraduate guide",
    sourceUrl: "https://sie.nwu.edu.cn/",
    summary: "A Xi'an comprehensive university with strengths in archaeology, geology, economics, Chinese language, literature, computer science, and Silk Road regional studies.",
    majors: ["Archaeology", "Geosciences", "Computer Science", "Business"],
    focus: "Xi'an history, archaeology, geology, economics, Chinese language, and Silk Road study",
    city: "Xi'an",
    exact: {
      eligibility: [
        "Applicants should be physically and mentally healthy, with no infectious disease or condition that affects normal study.",
        "Applicants must be no older than 30 by September 1, 2026 and must have obtained a high-school diploma by September 1, 2026.",
        "Applicants should show good academic ability through SAT, IB, A-Level, regional high-school exam results, or other academic evidence.",
        "Applicants must provide CSCA results; NWU accepts an April 2026 or earlier CSCA registration screenshot first, with final results due by May 20, 2026."
      ],
      languageRequirements: [
        "Chinese-taught programs require HSK Level 4 with a score of 180 or above.",
        "English-taught programs require IELTS 5.5, TOEFL 70, or above."
      ],
      applicationSteps: [
        "Apply in the first round from January 1 to February 25, 2026 or the second round from March 1 to May 30, 2026.",
        "Submit self-funded or non-CSC applications through nwu.17gz.org.",
        "Pay the application fee after the system sends the payment notice and monitor the application system and registered email for pre-admission, tuition payment, and final admission updates.",
        "CSC scholarship applicants also complete the Campus China system; International Chinese Language Teachers Scholarship applicants apply through cis.chinese.cn."
      ],
      fees: {
        application: "Self-funded applicants: CNY 400; scholarship applicants: CNY 600; non-refundable.",
        insurance: "CNY 800/year.",
        accommodation: "Accommodation deposit: CNY 1,000/person; room fee varies by arrangement.",
        tuition: "Program-specific tuition is listed in the official guide; confirm the selected major before payment."
      },
      programNotes: [
        "Scholarship routes include Chinese Government Scholarship, International Chinese Language Teachers Scholarship, Xi'an Central Asia Five Countries Scholarship, and Xi'an Belt and Road Scholarship.",
        "Undergraduate study duration is four years.",
        "Contact email in the guide: tonwu@nwu.edu.cn; online application: http://nwu.17gz.org."
      ]
    }
  }),
  "guangdong-university-of-finance-and-economics": uploadedGuide({
    name: "Guangdong University of Finance and Economics",
    website: "https://english.gdufe.edu.cn/",
    sourceTitle: "Guangdong University of Finance and Economics undergraduate admissions materials",
    sourceDate: "Uploaded undergraduate admission materials",
    sourceUrl: "https://english.gdufe.edu.cn/",
    summary: "A Guangzhou business and economics university with programs connected to finance, economics, accounting, business, law, statistics, and Greater Bay Area commerce.",
    majors: ["Business", "Economics", "Finance", "Law"],
    focus: "Guangzhou finance, economics, accounting, law, business, and Greater Bay Area commerce",
    city: "Guangzhou",
    exact: {
      languageRequirements: [
        "English-taught applicants should provide IELTS 5.5, TOEFL iBT 70, or equivalent accepted English proof unless exempt as native speakers.",
        "Chinese-taught applicants should provide HSK Level 4 or equivalent Chinese-language proof.",
        "Applicants submit language certificates as part of the application document set."
      ],
      applicationSteps: [
        "Submit the international student application form, valid passport, academic documents, study plan, language certificate, physical examination, no-criminal-record certificate, and scholarship form if applying.",
        "Use the GDUFE application system listed in the uploaded guide: gdufe.at0086.cn/student.",
        "Follow registration, visa, housing, and document-verification instructions after admission."
      ],
      programNotes: [
        "The uploaded guide mentions Guangdong Government Outstanding International Student Scholarship materials.",
        "Contact in the guide: fao3@gdufe.edu.cn.",
        "Students should verify the latest program list on the official English website before applying."
      ]
    }
  }),
  "northeastern-university": uploadedGuide({
    name: "Northeastern University",
    website: "https://english.neu.edu.cn/",
    sourceTitle: "Northeastern University 2026 undergraduate admissions guide for international students",
    sourceDate: "Uploaded 2026 undergraduate guide",
    sourceUrl: "http://studyinneu.neu.edu.cn/",
    summary: "A major Shenyang research university known for automation, control science, computer science, software, metallurgy, materials, engineering, and management.",
    majors: ["Engineering", "Computer Science", "Artificial Intelligence", "Business"],
    focus: "Northeast China manufacturing, automation, computing, software, metallurgy, and materials",
    city: "Shenyang",
    exact: {
      eligibility: [
        "Applicants must be non-Chinese citizens, in good physical and mental health, with no criminal record.",
        "Applicants need a high-school level graduation certificate or above and must be over 16 years old.",
        "Applicants with Chinese nationality background must satisfy the Ministry of Education nationality and residence rules described in the guide.",
        "All undergraduate applicants must take the CSCA; CSCA results are required review and admission materials."
      ],
      languageRequirements: [
        "Chinese-taught programs require HSK Level 5 with a score of 180 or above; applicants without Chinese proficiency should apply for Chinese-language study first.",
        "English majors and English-taught majors require native English background, official-language English background, TOEFL, IELTS, or other accepted English proficiency proof."
      ],
      applicationSteps: [
        "Self-sponsored application period: December 30, 2025 to June 30, 2026.",
        "Take the CSCA in advance and obtain the score report.",
        "Apply through http://studyinneu.neu.edu.cn or http://neu.17gz.org using an email registration.",
        "Track document review, entrance assessment, admission review, visa, housing, and registration."
      ],
      fees: {
        application: "Self-sponsored applicant application fee: CNY 500.",
        tuition: "CNY 18,000-21,000/year depending on undergraduate program.",
        accommodation: "On-campus rooms are listed at about CNY 32-60/person/day depending on room type.",
        insurance: "Self-sponsored students must purchase required insurance; the guide lists at least CNY 800/year."
      },
      programNotes: [
        "CSC undergraduate scholarship applicants apply through the Chinese embassy or consulate in their country; NEU states there is no Type-B bachelor route directly through the university.",
        "CSC scholarship may cover tuition, dormitory, insurance, and a CNY 2,500/month stipend.",
        "This profile refers to Northeastern University in Shenyang, China, not the similarly named US university."
      ]
    }
  }),
  "renmin-university-of-china": uploadedGuide({
    name: "Renmin University of China",
    website: "https://en.ruc.edu.cn/",
    sourceTitle: "Renmin University of China uploaded undergraduate admissions brochure",
    sourceDate: "Uploaded undergraduate guide; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://iso.ruc.edu.cn/",
    summary: "A leading Beijing university for economics, finance, law, journalism, sociology, public administration, philosophy, humanities, and social sciences.",
    majors: ["Business", "Economics", "Law", "Chinese Language"],
    focus: "Beijing social sciences, economics, finance, law, journalism, and public policy",
    city: "Beijing"
  }),
  "china-medical-university": uploadedGuide({
    name: "China Medical University",
    website: "https://english.cmu.edu.cn/",
    sourceTitle: "China Medical University uploaded international student admissions brochure",
    sourceDate: "Uploaded medical university guide",
    sourceUrl: "https://english.cmu.edu.cn/",
    summary: "A Shenyang medical university with programs and clinical training across medicine, dentistry, public health, nursing, pharmacy, and biomedical sciences.",
    majors: ["Medicine", "Pharmacy", "Public Health", "Nursing"],
    focus: "medical education, clinical training, public health, pharmacy, and Shenyang healthcare networks",
    city: "Shenyang"
  }),
  "china-university-of-geosciences-wuhan": uploadedGuide({
    name: "China University of Geosciences Wuhan",
    website: "https://en.cug.edu.cn/",
    sourceTitle: "China University of Geosciences Wuhan undergraduate admissions information for international students",
    sourceDate: "Uploaded undergraduate admissions guide",
    sourceUrl: "https://admission.cug.edu.cn/member/login.do",
    summary: "A Wuhan university known for geosciences, earth resources, environmental science, engineering, gemology, computer science, and China-focused undergraduate pathways.",
    majors: ["Geosciences", "Engineering", "Environmental Science", "Computer Science"],
    focus: "earth sciences, resources, environmental science, engineering, and Wuhan university life",
    city: "Wuhan",
    exact: {
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports, good conduct, and respect for Chinese laws and university regulations.",
        "Applicants should meet academic-performance requirements through high-school transcripts, graduation exam results, or standardized tests such as SAT, ACT, A-Level, AP, or IB.",
        "Applicants should meet physical examination requirements and have no serious illness, infectious disease, or severe physical condition affecting admission."
      ],
      languageRequirements: [
        "Chinese-taught applicants should provide a valid HSK certificate or equivalent Chinese-proficiency proof.",
        "Students who do not pass HSK Level 4 before degree study may need to attend Chinese-language study at CUG Wuhan first.",
        "English-language ability evidence such as TOEFL or IELTS may be considered for relevant programs."
      ],
      fees: {
        tuition: "Science and engineering undergraduate programs: CNY 22,000/year; humanities programs: CNY 18,000/year.",
        accommodation: "Campus accommodation may be covered by full scholarships; self-funded applicants should confirm room fees.",
        insurance: "Comprehensive medical insurance is included in full scholarship packages; self-funded students should confirm annual insurance rules."
      },
      programNotes: [
        "The Silk Road Scholarship route may cover tuition, CNY 2,500/month living allowance, on-campus accommodation, and medical insurance when available.",
        "CUG Wuhan President Scholarship may cover full tuition, half tuition, 20% tuition, or 10% tuition for the first academic year.",
        "Tuition and fees remain subject to the latest approved university charging standards."
      ]
    }
  }),
  "ocean-university-of-china": uploadedGuide({
    name: "Ocean University of China",
    website: "https://eweb.ouc.edu.cn/",
    sourceTitle: "2026 Ocean University of China international student admissions brochure",
    sourceDate: "Uploaded 2026 guide; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://sie.ouc.edu.cn/",
    summary: "A Qingdao research university especially strong in oceanography, marine science, fisheries, environmental science, engineering, and coastal studies.",
    majors: ["Marine Science", "Engineering", "Computer Science", "Business"],
    focus: "marine science, oceanography, coastal engineering, Qingdao port economy, and coastal student life",
    city: "Qingdao"
  }),
  "the-central-academy-of-drama": uploadedGuide({
    name: "The Central Academy of Drama",
    website: "https://en.chntheatre.edu.cn/",
    sourceTitle: "Central Academy of Drama uploaded international student admissions brochure",
    sourceDate: "Uploaded arts admissions brochure; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://en.chntheatre.edu.cn/",
    summary: "A Beijing performing arts academy focused on drama, directing, acting, stage design, theatre studies, film, television, and related creative fields.",
    majors: ["Arts", "Film", "Design", "Chinese Language"],
    focus: "Beijing performing arts, theatre, acting, directing, stage design, film, and creative industries",
    city: "Beijing"
  }),
  "sun-yat-sen-university": uploadedGuide({
    name: "Sun Yat-sen University",
    website: "https://www.sysu.edu.cn/sysuen/",
    sourceTitle: "Sun Yat-sen University Office of International Students Affairs uploaded admissions materials",
    sourceDate: "Uploaded international student admissions materials",
    sourceUrl: "https://iso.sysu.edu.cn/",
    summary: "A major Guangzhou and Greater Bay Area research university with broad strengths in medicine, business, engineering, sciences, humanities, law, and public affairs.",
    majors: ["Medicine", "Business", "Engineering", "Computer Science"],
    focus: "Greater Bay Area research, medicine, business, engineering, sciences, and humanities",
    city: "Guangzhou"
  }),
  "beijing-university-of-chinese-medicine": uploadedGuide({
    name: "Beijing University of Chinese Medicine",
    website: "https://english.bucm.edu.cn/",
    sourceTitle: "Beijing University of Chinese Medicine International School uploaded admissions materials",
    sourceDate: "Uploaded international education materials",
    sourceUrl: "https://english.bucm.edu.cn/",
    summary: "A Beijing university focused on traditional Chinese medicine, acupuncture, rehabilitation, pharmacy, nursing, and integrative health education.",
    majors: ["Chinese Medicine", "Medicine", "Pharmacy", "Nursing"],
    focus: "traditional Chinese medicine, acupuncture, pharmacy, clinical practice, and Beijing healthcare resources",
    city: "Beijing"
  }),
  "beijing-university-of-technology": uploadedGuide({
    name: "Beijing University of Technology",
    website: "https://english.bjut.edu.cn/",
    sourceTitle: "Beijing University of Technology preparatory and undergraduate admissions brochure",
    sourceDate: "Uploaded undergraduate admissions brochure",
    sourceUrl: "https://bjut.17gz.org/",
    summary: "A Beijing Double First-Class engineering university with undergraduate options across computing, software, AI, electronics, automation, materials, environment, business, design, and preparatory Chinese study.",
    majors: ["Engineering", "Computer Science", "Architecture", "Business"],
    focus: "Beijing engineering, computer science, software, AI, electronics, materials, and preparatory Chinese study",
    city: "Beijing",
    exact: {
      eligibility: [
        "Applicants should be non-Chinese citizens in good physical and mental health.",
        "Preparatory applicants are generally 18 to 24; undergraduate applicants are generally 18 to 25.",
        "Applicants need high-school graduation or above and must provide high-school transcripts and supporting materials."
      ],
      languageRequirements: [
        "Preparatory level I has no Chinese foundation requirement; preparatory level II requires HSK 3 with 180 or above.",
        "Direct undergraduate applicants need new HSK Level 4 or above.",
        "The preparatory curriculum covers Chinese up to HSK 4 or HSK 5 depending on class level."
      ],
      applicationSteps: [
        "Apply through BJUT's online system at bjut.17gz.org.",
        "Prepare the system-generated application form, passport page, high-school graduation or pre-graduation proof, transcripts, resume, language proof, and other required documents.",
        "Application period in the brochure runs from November 1 to May 31 of the following year.",
        "Pay the application fee and monitor the system for review, scholarship, admission, visa, and registration notices."
      ],
      fees: {
        application: "CNY 500.",
        tuition: "CNY 21,000/year.",
        accommodation: "Confirm current dormitory availability and campus arrangement before arrival."
      },
      programNotes: [
        "Scholarship routes include Chinese Government Scholarship and Beijing International Student Scholarship, including partial or full tuition support.",
        "Preparatory scholarships may support half or full tuition, and preparatory graduates admitted to undergraduate programs may receive priority consideration for freshman scholarships.",
        "Architecture and urban planning are five-year programs; most listed undergraduate programs are four years."
      ]
    }
  }),
  "south-china-university-of-technology": uploadedGuide({
    name: "South China University of Technology",
    website: "https://www.scut.edu.cn/en/",
    sourceTitle: "South China University of Technology uploaded international undergraduate admissions materials",
    sourceDate: "Uploaded guide; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://www2.scut.edu.cn/sie_en/",
    summary: "A Guangzhou research university with strengths in engineering, architecture, materials, computer science, business, design, and Greater Bay Area industry links.",
    majors: ["Engineering", "Architecture", "Computer Science", "Business"],
    focus: "Guangzhou engineering, architecture, materials, computer science, design, and Greater Bay Area industry",
    city: "Guangzhou"
  }),
  "nanjing-university": uploadedGuide({
    name: "Nanjing University",
    website: "https://www.nju.edu.cn/en/",
    sourceTitle: "Nanjing University uploaded application guide",
    sourceDate: "Uploaded application guide",
    sourceUrl: "https://hwxy.nju.edu.cn/",
    summary: "A leading Nanjing comprehensive research university with strengths in sciences, humanities, social sciences, computer science, business, and international education.",
    majors: ["Computer Science", "Business", "Physics", "Chinese Language"],
    focus: "Nanjing research, sciences, humanities, social sciences, computing, and international education",
    city: "Nanjing"
  }),
  "southern-medical-university": uploadedGuide({
    name: "Southern Medical University",
    website: "https://portal.smu.edu.cn/en/",
    sourceTitle: "Southern Medical University International Education uploaded admissions guide",
    sourceDate: "Uploaded international education guide",
    sourceUrl: "https://portal.smu.edu.cn/gjjy/",
    summary: "A Guangzhou medical university with strengths in clinical medicine, public health, nursing, pharmacy, biomedical engineering, and extensive hospital-based training.",
    majors: ["Medicine", "Engineering", "Pharmacy", "Chinese Language"],
    focus: "clinical medicine, public health, pharmacy, nursing, hospital training, and Guangzhou healthcare networks",
    city: "Guangzhou"
  }),
  "sichuan-university": uploadedGuide({
    name: "Sichuan University",
    website: "https://en.scu.edu.cn/",
    sourceTitle: "Sichuan University uploaded international student admissions brochure",
    sourceDate: "Uploaded admissions brochure; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://global.scu.edu.cn/",
    summary: "A major Chengdu comprehensive research university with strengths in medicine, engineering, computer science, humanities, business, and Chinese language.",
    majors: ["Medicine", "Engineering", "Computer Science", "Chinese Language"],
    focus: "Chengdu campus life, medicine, engineering, computer science, humanities, and western China opportunities",
    city: "Chengdu"
  }),
  "university-of-international-business-and-economics": uploadedGuide({
    name: "University of International Business and Economics",
    website: "https://english.uibe.edu.cn/",
    sourceTitle: "University of International Business and Economics Chinese-taught bachelor's degree program brochure",
    sourceDate: "Uploaded undergraduate brochure",
    sourceUrl: "https://sie.uibe.edu.cn/",
    summary: "A specialist Beijing university known for international business, economics, finance, trade, law, and multilingual professional education.",
    majors: ["Business", "Chinese Language", "Computer Science"],
    focus: "Beijing international business, economics, finance, trade, law, and multilingual professional education",
    city: "Beijing",
    exact: {
      eligibility: [
        "Applicants should prepare high-school graduation proof and transcripts, passport or identity document copy, financial guarantee materials, no-criminal-record proof, and photos.",
        "Applicants under guardianship or with special documentation needs should confirm notarized guardian documents with the admissions and program development office.",
        "Application materials are accepted in Chinese or English and are not returned regardless of admission result."
      ],
      languageRequirements: [
        "Chinese-taught bachelor's applicants need new HSK Level 4 or above; applicants whose previous degree was fully Chinese-taught may submit proof of Chinese-medium instruction instead.",
        "Business English applicants need IELTS 6.0, TOEFL iBT 86 or above, or other English-language proof plus a personal statement in English."
      ],
      applicationSteps: [
        "Complete UIBE's online application form and prepare the listed academic, passport, financial, no-criminal-record, language, and photo documents.",
        "Take the entrance examination normally held in May or June.",
        "Entrance examination subjects include Chinese written test with listening, comprehensive written test including mathematics and English, and interview.",
        "Follow admission, tuition prepayment, visa, registration, and first-year tuition payment instructions."
      ],
      fees: {
        application: "CNY 660 application fee; non-refundable.",
        tuition: "Chinese-taught bachelor's programs: CNY 24,800/year; first-year tuition is paid at registration.",
        accommodation: "Confirm Beijing dormitory or off-campus housing arrangements before arrival."
      },
      programNotes: [
        "The brochure lists a CNY 4,000 tuition prepayment collected when admission is confirmed and credited toward total tuition after enrollment.",
        "Relevant UIBE undergraduate fields include international economics and trade, finance, accounting, insurance, law, business administration, and related business disciplines.",
        "Admissions contact in the brochure includes degreeinchinese@163.com and sie@uibe.edu.cn."
      ]
    }
  }),
  "shandong-university": uploadedGuide({
    name: "Shandong University",
    website: "https://www.en.sdu.edu.cn/",
    sourceTitle: "Shandong University uploaded undergraduate admissions image",
    sourceDate: "Uploaded PNG admissions material; image requires visual/OCR review",
    sourceUrl: "https://www.istudy.sdu.edu.cn/",
    summary: "A major Jinan and Qingdao comprehensive university with strengths in medicine, engineering, business, humanities, sciences, and Chinese language.",
    majors: ["Medicine", "Engineering", "Business", "Chinese Language"],
    focus: "Shandong comprehensive study, medicine, engineering, business, humanities, and Jinan/Qingdao city options",
    city: "Jinan"
  }),
  "jinan-university": uploadedGuide({
    name: "Jinan University",
    website: "https://english.jnu.edu.cn/",
    sourceTitle: "2024 Jinan University admission guide for Chinese-heritage and other international students",
    sourceDate: "Uploaded 2024 admissions guide",
    sourceUrl: "https://admission.jnu.edu.cn/",
    summary: "A Guangzhou university with strong links to overseas Chinese education and programs in business, medicine, journalism, Chinese language, computer science, and international education.",
    majors: ["Business", "Medicine", "Communication", "Chinese Language"],
    focus: "Guangzhou, overseas Chinese education, business, medicine, journalism, and Chinese language",
    city: "Guangzhou"
  }),
  "hunan-university-of-technology": uploadedGuide({
    name: "Hunan University of Technology",
    website: "https://www.hut.edu.cn/",
    sourceTitle: "2026 Application Guide to Degree Programmes for International Students, Hunan University of Technology",
    sourceDate: "Uploaded 2026 degree-program application guide",
    sourceUrl: "https://admission.hut.istudyedu.com/",
    summary: "A Zhuzhou university with undergraduate options in computer science, artificial intelligence, international trade, mechanical engineering, civil engineering, biomedical engineering, music, dance, ceramics, and applied engineering fields.",
    majors: ["Engineering", "Computer Science", "Business", "Arts"],
    focus: "Zhuzhou manufacturing, rail transit, computer science, AI, ceramics, arts, and applied engineering",
    city: "Zhuzhou",
    exact: {
      languageRequirements: [
        "Chinese-taught bachelor's applicants need HSK Level 4 with a minimum score of 180.",
        "English-taught programs require IELTS 5.5, TOEFL 68, Duolingo 85, or equivalent accepted proof.",
        "Applicants whose first language or official national language is Chinese or English, or who completed a degree taught in Chinese or English, may qualify for language-proof exemptions."
      ],
      applicationSteps: [
        "Apply through HUT's Online Service System for International Students at admission.hut.istudyedu.com.",
        "Submit the online form and required academic, passport, language, financial, physical-exam, and no-criminal-record documents.",
        "Submit application materials by June 25, 2026.",
        "Follow document review, admission, JW202, visa, housing, and registration instructions from the International Office."
      ],
      fees: {
        application: "Registration fee: CNY 300.",
        tuition: "Bachelor's programs: CNY 10,000/year for Chinese-taught programs and CNY 12,000/year for English-taught programs; the guide also lists CNY 10,000/year in a fee summary.",
        accommodation: "On-campus double room: CNY 3,000/year; four-person room: CNY 1,200/year; electricity and water are not included.",
        insurance: "CNY 800/year; visa or residence permit cost listed at about CNY 400-800/year."
      },
      programNotes: [
        "Basic textbooks are listed at CNY 900/year and air-conditioning fee at CNY 100/year.",
        "All degree-program students may be eligible for Freshman Scholarship covering 100% of first-year tuition; Merit Scholarship is also listed.",
        "Contact in the guide: admission@hut.edu.cn; telephone 0086-731-22183886."
      ]
    }
  }),
  "university-of-electronic-science-and-technology-of-china": uploadedGuide({
    name: "University of Electronic Science and Technology of China",
    website: "https://en.uestc.edu.cn/",
    sourceTitle: "UESTC uploaded international student admissions brochure",
    sourceDate: "Uploaded admissions brochure; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://en.uestc.edu.cn/Admission.htm",
    summary: "A Chengdu technology university known for electronics, communications, computer science, AI, cybersecurity, microelectronics, and information engineering.",
    majors: ["Computer Science", "Artificial Intelligence", "Engineering"],
    focus: "Chengdu electronics, communications, AI, cybersecurity, microelectronics, and software",
    city: "Chengdu"
  }),
  "fujian-medical-university": uploadedGuide({
    name: "Fujian Medical University",
    website: "https://www.fjmu.edu.cn/",
    sourceTitle: "Fujian Medical University uploaded admissions brochure",
    sourceDate: "Uploaded medical admissions guide",
    sourceUrl: "https://oec.fjmu.edu.cn/",
    summary: "A Fuzhou medical university with strengths in clinical medicine, public health, pharmacy, nursing, and medical technology.",
    majors: ["Medicine", "Public Health", "Pharmacy", "Nursing"],
    focus: "clinical medicine, public health, pharmacy, nursing, and Fuzhou healthcare networks",
    city: "Fuzhou"
  }),
  "southwest-university-of-political-science-and-law": uploadedGuide({
    name: "Southwest University of Political Science and Law",
    website: "https://english.swupl.edu.cn/",
    sourceTitle: "2024 SWUPL international undergraduate admission guide",
    sourceDate: "Uploaded 2024 international undergraduate guide",
    sourceUrl: "https://gjxy.swupl.edu.cn/",
    summary: "A Chongqing law university focused on law, political science, public administration, business law, international relations, and Chinese legal studies.",
    majors: ["Law", "International Relations", "Business", "Chinese Language"],
    focus: "law, political science, public administration, international relations, and Chongqing city life",
    city: "Chongqing"
  }),
  "southwest-university-of-finance-and-economics": uploadedGuide({
    name: "Southwestern University of Finance and Economics",
    website: "https://e.swufe.edu.cn/",
    sourceTitle: "2026 SWUFE undergraduate admission guide for international students",
    sourceDate: "Uploaded 2026 undergraduate guide",
    sourceUrl: "https://international.swufe.edu.cn/",
    summary: "A Chengdu finance and economics university known for finance, economics, accounting, business analytics, management, statistics, and law.",
    majors: ["Finance", "Economics", "Accounting", "Business"],
    focus: "Chengdu finance, economics, accounting, business analytics, management, and statistics",
    city: "Chengdu"
  }),
  "southwestern-university-of-finance-and-economics": uploadedGuide({
    name: "Southwestern University of Finance and Economics",
    website: "https://e.swufe.edu.cn/",
    sourceTitle: "2026 SWUFE undergraduate admission guide for international students",
    sourceDate: "Uploaded 2026 undergraduate guide",
    sourceUrl: "https://international.swufe.edu.cn/",
    summary: "A Chengdu finance and economics university known for finance, economics, accounting, business analytics, management, statistics, and law.",
    majors: ["Finance", "Economics", "Accounting", "Business"],
    focus: "Chengdu finance, economics, accounting, business analytics, management, and statistics",
    city: "Chengdu"
  }),
  "xidian-university": uploadedGuide({
    name: "Xidian University",
    website: "https://en.xidian.edu.cn/",
    sourceTitle: "Xidian University uploaded international student admissions brochure",
    sourceDate: "Uploaded admissions guide",
    sourceUrl: "https://sie.xidian.edu.cn/EN/Home.htm",
    summary: "A Xi'an technology university known for electronic engineering, communications, computer science, cybersecurity, artificial intelligence, and information systems.",
    majors: ["Engineering", "Computer Science", "Artificial Intelligence"],
    focus: "Xi'an electronics, communications, cybersecurity, computing, AI, and information systems",
    city: "Xi'an"
  }),
  "chongqing-university": uploadedGuide({
    name: "Chongqing University",
    website: "https://english.cqu.edu.cn/",
    sourceTitle: "Chongqing University uploaded undergraduate admission guide",
    sourceDate: "Uploaded undergraduate guide; existing 2026 profile also cross-checks CQU details",
    sourceUrl: "https://study.cqu.edu.cn/",
    summary: "A major western China research university known for engineering, architecture, business, energy, manufacturing, and mountain-city campus life.",
    majors: ["Engineering", "Architecture", "Computer Science", "Business"],
    focus: "Chongqing engineering, architecture, manufacturing, energy, business, and mountain-city life",
    city: "Chongqing"
  }),
  "capital-medical-university": uploadedGuide({
    name: "Capital Medical University",
    website: "https://www.ccmu.edu.cn/",
    sourceTitle: "Capital Medical University uploaded admissions brochure",
    sourceDate: "Uploaded medical admissions guide; PDF text extraction requires visual/OCR review",
    sourceUrl: "https://siec.ccmu.edu.cn/",
    summary: "A Beijing medical university with clinical medicine, stomatology, public health, nursing, biomedical sciences, and hospital-based training.",
    majors: ["Medicine", "Dentistry", "Public Health", "Nursing"],
    focus: "Beijing clinical medicine, stomatology, public health, nursing, and affiliated hospitals",
    city: "Beijing"
  })
};
