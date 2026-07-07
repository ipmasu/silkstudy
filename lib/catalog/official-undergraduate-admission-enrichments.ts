import type { UniversityProfileEnrichment } from "@/lib/catalog/university-profile-enrichments";

export const officialUndergraduateAdmissionEnrichments: Record<string, UniversityProfileEnrichment> = {
  "east-china-university-of-science-and-technology": {
    website: "https://cie.ecust.edu.cn/",
    summary: "A Shanghai engineering and applied science university with strengths in chemical engineering, materials, biotechnology, pharmacy, business, computer science, and joint international pathways.",
    majors: ["Engineering", "Computer Science", "Business", "Pharmacy"],
    applicationProfile: {
      sourceTitle: "ECUST 2026 Admission Information on Undergraduate Programs for International Students",
      sourceDate: "Official ECUST notice dated December 20, 2025",
      sourceUrl: "https://cie.ecust.edu.cn/notices/514.html",
      rankingHighlights: [
        "ECUST is a Shanghai university especially relevant for chemical engineering, materials, biotechnology, pharmacy, applied engineering, business, and international joint programs.",
        "Shanghai gives applicants access to Yangtze River Delta industry, laboratories, internships, and a large international student ecosystem."
      ],
      eligibility: [
        "Applicants should hold valid foreign passports, be in good health, and have a high-school degree or above.",
        "Applicants should be at least 16; applicants under 18 before August 31 of the application year need to submit the required guardian guarantee statement.",
        "Applicants with Chinese nationality background must comply with Ministry of Education nationality-document rules."
      ],
      languageRequirements: [
        "Chinese-taught programs require the HSK level specified by the program.",
        "English-taught or joint programs may require IELTS, TOEFL, prior English-medium study proof, or school review.",
        "Applicants should confirm whether the selected major requires CSCA subjects for the 2026 intake."
      ],
      applicationSteps: [
        "Open ECUST's official international college notice and confirm the selected undergraduate program, language route, deadline, CSCA requirement, tuition, and scholarship option.",
        "Prepare passport, high-school diploma or pre-graduation certificate, transcripts, language proof, physical examination, no-criminal-record materials, and guardian documents if under 18.",
        "Submit through the university's official international student application channel and monitor review, interview, scholarship, admission, JW form, visa, and registration notices."
      ],
      fees: {
        application: "Confirm the current application fee in the ECUST online system before submission.",
        tuition: "Program-specific undergraduate tuition should be confirmed from the official notice and selected major.",
        insurance: "International students normally purchase approved medical insurance before registration.",
        accommodation: "Dormitory fees vary by campus and room type; confirm availability before arrival."
      },
      programNotes: [
        "Scholarship options may include Chinese Government Scholarship routes, Shanghai Government Scholarship, and university or program scholarships where available.",
        "Joint multi-degree and English-taught options can be useful for students who want a China base plus overseas degree mobility.",
        "ECUST is a practical fit for students comparing Shanghai industry access with a more applied engineering profile."
      ]
    }
  },
  "central-university-of-finance-and-economics": {
    website: "https://sice.cufe.edu.cn/",
    summary: "A Beijing finance and economics university strong in finance, economics, accounting, actuarial science, public finance, statistics, management, and policy-oriented business education.",
    majors: ["Finance", "Economics", "Accounting", "Business"],
    applicationProfile: {
      sourceTitle: "Application Guide for 2026 CUFE International Students, Undergraduate Programs",
      sourceDate: "Official CUFE notice dated November 6, 2025; English-offered finance guide dated December 25, 2025",
      sourceUrl: "https://sice.cufe.edu.cn/admissions/info/1045/3420.htm",
      rankingHighlights: [
        "CUFE is a key Beijing university focused on finance, economics, public finance, accounting, insurance, statistics, and management.",
        "The 2026 guide includes Chinese-taught undergraduate pathways and an English-offered undergraduate finance route for international students."
      ],
      eligibility: [
        "Applicants should be non-Chinese citizens with valid passports, appropriate high-school credentials, good health, and complete application documents.",
        "Applicants must confirm nationality-document rules, age requirements, and guardian requirements for minors in the current CUFE guide.",
        "Applicants should prepare academic records, passport materials, physical examination, no-criminal-record proof, financial documents, and program-specific materials."
      ],
      languageRequirements: [
        "Chinese-taught undergraduate programs require the HSK level stated in the current CUFE guide.",
        "The English-offered finance program requires English-language readiness through accepted proof or CUFE review.",
        "Applicants should confirm whether CSCA or entrance assessment is required for the selected major."
      ],
      applicationSteps: [
        "Review the current CUFE undergraduate guide and the English-offered finance guide if applying in English.",
        "Apply through CUFE's official admissions website and upload academic, passport, language, health, financial, and conduct documents.",
        "Track review, interview or assessment, scholarship review, admission notice, JW form, visa, tuition payment, housing, and registration steps."
      ],
      fees: {
        application: "Confirm the current application fee in CUFE's official system.",
        tuition: "Tuition varies by Chinese-taught or English-offered program; confirm by selected major before payment.",
        insurance: "Approved international student medical insurance is normally required.",
        accommodation: "Confirm Beijing campus dormitory availability and off-campus alternatives early."
      },
      programNotes: [
        "Scholarship planning should compare Chinese Government Scholarship, Beijing municipal scholarship routes, and CUFE school-level awards when open.",
        "CUFE is a strong fit for students targeting finance, accounting, economics, actuarial science, public finance, and policy-linked business careers.",
        "Beijing living costs are higher than many regional cities, so scholarship amount and housing plan matter."
      ]
    }
  },
  "hohai-university": {
    website: "https://ie.hhu.edu.cn/",
    summary: "A Nanjing university known for water resources, hydrology, civil engineering, environmental engineering, energy, management, and applied engineering fields.",
    majors: ["Engineering", "Environmental Science", "Business", "Computer Science"],
    applicationProfile: {
      sourceTitle: "Hohai University undergraduate and scholarship information for international students",
      sourceDate: "Official Hohai international education undergraduate and scholarship pages checked 2026",
      sourceUrl: "https://ie.hhu.edu.cn/16289/listm.htm",
      rankingHighlights: [
        "Hohai University is especially relevant for water conservancy, hydrology, civil engineering, environmental engineering, energy, and river-basin management.",
        "Nanjing offers a lower-cost and research-heavy alternative to Shanghai while keeping access to the Yangtze River Delta."
      ],
      eligibility: [
        "Undergraduate applicants should confirm passport, high-school completion, academic transcripts, health, conduct, and nationality-document requirements in the current guide.",
        "All undergraduate candidates may need to attend an interview organized by the university.",
        "Scholarship applicants must satisfy the specific requirements of the selected scholarship category."
      ],
      languageRequirements: [
        "Chinese-taught programs require the HSK level stated by Hohai for the selected major.",
        "English-taught programs require accepted English-language proof or school review.",
        "Applicants should confirm CSCA requirements by major for the current intake."
      ],
      applicationSteps: [
        "Apply through Hohai University's online application system and upload required documents.",
        "If applying for Nanjing Municipal Government Scholarship, download and complete the scholarship application form and upload it as an attachment.",
        "Track application review, interview, scholarship review, admission, visa materials, accommodation, and registration notices."
      ],
      fees: {
        application: "The undergraduate guide lists an application fee of CNY 400 or USD 60.",
        tuition: "Confirm the latest undergraduate tuition by major and language route.",
        insurance: "Approved medical insurance is required for international students.",
        accommodation: "Confirm Nanjing campus room type and fee before arrival."
      },
      programNotes: [
        "The official undergraduate page lists Nanjing Municipal Government Scholarship at CNY 10,000/year for eligible applicants.",
        "Hohai's CSC Type A and Type B pages are especially relevant for graduate applicants; bachelor applicants should verify current undergraduate scholarship availability.",
        "This is a strong school to include when students want engineering quality, scholarship chances, and a manageable city cost."
      ]
    }
  },
  "nanjing-agricultural-university": {
    website: "https://coieen.njau.edu.cn/",
    summary: "A Nanjing agricultural and life-science university strong in agriculture, plant science, animal science, food science, resource and environmental science, economics, and management.",
    majors: ["Agriculture", "Food Science", "Environmental Science", "Business"],
    applicationProfile: {
      sourceTitle: "2026 Nanjing Agricultural University Undergraduate Admission and scholarship pages",
      sourceDate: "Official NAU undergraduate notice dated November 14, 2025; scholarship pages checked 2026",
      sourceUrl: "https://coieen.njau.edu.cn/info/1109/5350.htm",
      rankingHighlights: [
        "Nanjing Agricultural University is a strong fit for agriculture, plant science, animal science, food science, ecology, resources, and agricultural economics.",
        "The official international college site provides separate admissions and scholarship sections for international students."
      ],
      eligibility: [
        "Undergraduate applicants should confirm passport, high-school graduation, transcripts, health, conduct, age, and nationality-document requirements in the current guide.",
        "Applicants should review the official CSCA subject file for NAU majors where required.",
        "Scholarship requirements differ for undergraduate, graduate, exchange, and short-term programs."
      ],
      languageRequirements: [
        "Chinese-taught programs require the HSK level specified by the selected program.",
        "English-language proof may be required for English-taught or bilingual routes where available.",
        "Applicants should verify whether interviews, CSCA subjects, or program-specific science requirements apply."
      ],
      applicationSteps: [
        "Review NAU's official 2026 undergraduate admission notice and CSCA subject attachment.",
        "Prepare passport, academic credentials, transcripts, language proof, health and conduct documents, financial materials, and scholarship forms where relevant.",
        "Submit through NAU's official application channel and track review, scholarship, admission, JW form, visa, housing, and registration instructions."
      ],
      fees: {
        tuition: "Confirm tuition by major and scholarship category in the current NAU guide.",
        insurance: "International students normally need approved medical insurance.",
        accommodation: "Confirm Nanjing campus accommodation availability and costs before arrival."
      },
      programNotes: [
        "NAU scholarship pages list multiple scholarship notices; applicants should match the scholarship type to degree level and program.",
        "Agriculture, food, veterinary-adjacent, ecology, and rural-development applicants should compare NAU with China Agricultural University and Northwest A&F University.",
        "Nanjing's cost profile can make partial scholarships more useful than in Beijing or Shanghai."
      ]
    }
  },
  "nanjing-university-of-aeronautics-and-astronautics": {
    website: "https://cie.nuaa.edu.cn/",
    summary: "A Nanjing engineering university known for aeronautics, astronautics, mechanical engineering, automation, computer science, electronics, transportation, and management.",
    majors: ["Aerospace", "Engineering", "Computer Science", "Artificial Intelligence"],
    applicationProfile: {
      sourceTitle: "2026 International Undergraduate Admission Brochure, Nanjing University of Aeronautics and Astronautics",
      sourceDate: "Official NUAA notice dated November 21, 2025",
      sourceUrl: "https://cie.nuaa.edu.cn/2025/1121/c16499a388281/page.htm",
      rankingHighlights: [
        "NUAA is a specialist engineering university for aviation, aerospace, mechanical engineering, automation, electronics, computing, and transport technology.",
        "The 2026 undergraduate brochure lists scholarship renewal rules for CSC, Jiangsu Government, Nanjing Government, and NUAA Fly-High awards."
      ],
      eligibility: [
        "Applicants should confirm passport, high-school completion, transcripts, health, conduct, age, nationality-document, and major-specific requirements in the 2026 brochure.",
        "Scholarship applicants must meet the specific rules of CSC, Jiangsu Government Scholarship, Nanjing Government Scholarship, or NUAA Fly-High Scholarship.",
        "From year two, students compete for academic scholarship based on annual GPA and comprehensive review."
      ],
      languageRequirements: [
        "Chinese- or English-taught routes require the language proof stated by the selected NUAA program.",
        "Applicants should confirm CSCA subjects and any math, physics, or engineering prerequisites for the chosen major.",
        "Interview or additional assessment may be required by the program."
      ],
      applicationSteps: [
        "Apply from November 15, 2025 to May 30, 2026 according to the official 2026 undergraduate brochure.",
        "Prepare passport, academic credentials, transcripts, language proof, health and conduct documents, and scholarship materials.",
        "Track university review, scholarship classification, admission, visa materials, accommodation, and registration."
      ],
      fees: {
        tuition: "Confirm tuition by undergraduate program in the current brochure.",
        insurance: "Comprehensive medical insurance is required under university rules.",
        accommodation: "Confirm Nanjing campus dormitory fee and room type before arrival."
      },
      programNotes: [
        "Chinese Government Scholarship and Jiangsu Government Scholarship renew annually if academic and conduct requirements are met.",
        "Nanjing Government Scholarship and NUAA Fly-High Scholarship are single-year awards.",
        "From year two, students may compete for NUAA Academic Scholarship of up to CNY 10,000 based on GPA and comprehensive review."
      ]
    }
  },
  "north-china-electric-power-university": {
    website: "https://english.ncepu.edu.cn/",
    summary: "A power and energy university with Beijing and Baoding links, strong in electrical engineering, energy, power systems, automation, environmental engineering, and management.",
    majors: ["Engineering", "Environmental Science", "Artificial Intelligence", "Business"],
    applicationProfile: {
      sourceTitle: "North China Electric Power University 2026 International Admission",
      sourceDate: "Official 2026 international admission notice checked 2026",
      sourceUrl: "https://xxgk.ncepu.edu.cn/dwjlyhzxx/48lhlxsgl/8a900bebdcee49398bbfb227bd3a1620.htm",
      rankingHighlights: [
        "NCEPU is highly relevant for applicants targeting power engineering, energy systems, electrical engineering, automation, environment, and energy management.",
        "Its 2026 international admission notice identifies multiple scholarship directions, including IEIS for bachelor students and CIS for Chinese-language study."
      ],
      eligibility: [
        "Applicants should confirm passport, high-school completion, transcripts, health, conduct, age, and nationality-document requirements in the current admission notice.",
        "IEIS is described as supporting bachelor students, while other scholarships may target Chinese language, exchange, or graduate routes.",
        "Applicants should not assume that every scholarship applies to every degree level."
      ],
      languageRequirements: [
        "Chinese-taught programs require the HSK level stated by the selected major.",
        "English-taught programs require accepted English-language proof or university review.",
        "Chinese-language scholarship applicants should follow the recommending institution and language-study rules."
      ],
      applicationSteps: [
        "Review NCEPU's 2026 international admission notice and the Study at NCEPU application website.",
        "Select the correct scholarship route before preparing documents, because bachelor, Chinese-language, and graduate routes differ.",
        "Submit academic, passport, language, health, financial, and scholarship materials through the official system and track review, admission, visa, and registration."
      ],
      fees: {
        tuition: "Confirm tuition by major and campus in the current NCEPU system.",
        insurance: "Approved medical insurance is normally required.",
        accommodation: "Confirm Beijing or Baoding campus accommodation arrangements before arrival."
      },
      programNotes: [
        "The official 2026 notice states that CIS is a full scholarship for Chinese-language students recommended by local Confucius Institutes.",
        "The same notice states that IEIS supports bachelor students.",
        "Energy and power-sector applicants should compare NCEPU with engineering universities in Beijing, Shanghai, Nanjing, and Wuhan."
      ]
    }
  },
  "east-china-university-of-political-science-and-law": {
    website: "https://study.ecupl.edu.cn/",
    summary: "A Shanghai law and politics university focused on law, international law, business law, public administration, criminology, political science, and China legal studies.",
    majors: ["Law", "Business", "International Relations", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "2026 East China University of Political Science and Law Shanghai Municipal Government Scholarship notice",
      sourceDate: "Official ECUPL notice dated December 25, 2025",
      sourceUrl: "https://study.ecupl.edu.cn/2025/1225/c10482a223929/page.htm",
      rankingHighlights: [
        "ECUPL is a specialist Shanghai university for law, political science, public administration, criminology, and business-law fields.",
        "Shanghai is especially valuable for legal, finance, trade, arbitration, compliance, and international business exposure."
      ],
      eligibility: [
        "Scholarship applicants should be non-Chinese citizens in good health.",
        "The Shanghai Municipal Government Scholarship notice states age requirements for master's and doctoral applicants; bachelor applicants should verify undergraduate eligibility separately.",
        "Applicants should not receive other Chinese government scholarships at the same time unless the current rules allow it."
      ],
      languageRequirements: [
        "Chinese-taught legal studies normally require HSK proof at the level stated by ECUPL.",
        "English-taught or international-law routes may require English proficiency proof.",
        "Applicants should confirm whether interviews, writing samples, or legal-background expectations apply."
      ],
      applicationSteps: [
        "Review ECUPL's current international student admissions page and the Shanghai Municipal Government Scholarship notice.",
        "Prepare passport, academic credentials, transcripts, language proof, health and conduct documents, study plan, and scholarship forms.",
        "Submit through the official ECUPL route and track review, scholarship result, admission, visa materials, housing, and registration."
      ],
      fees: {
        tuition: "Confirm current tuition by degree and law-related program.",
        insurance: "Approved medical insurance is normally required.",
        accommodation: "Confirm Shanghai campus housing availability and cost early."
      },
      programNotes: [
        "This is a targeted option for law, compliance, public administration, international relations, and business-law applicants.",
        "Shanghai Government Scholarship rules and quotas vary by year and degree level.",
        "Students should compare scholarship value against Shanghai's higher living cost."
      ]
    }
  },
  "shanghai-university-of-political-science-and-law": {
    website: "https://iso.shupl.edu.cn/english/",
    summary: "A Shanghai university focused on law, politics, public administration, economics, business, Chinese language, and international legal education.",
    majors: ["Law", "Business", "International Relations", "Chinese Language"],
    applicationProfile: {
      sourceTitle: "Enrollment application of 2026 International Student for Autumn Admission, SHUPL",
      sourceDate: "Official SHUPL notice dated October 29, 2025",
      sourceUrl: "https://iso.shupl.edu.cn/english/2025/1029/c3356a143603/page.htm",
      rankingHighlights: [
        "SHUPL is a Shanghai law and political science university useful for law, public administration, economics, Chinese language, and China legal studies.",
        "The 2026 autumn admission notice explicitly references CSCA, scholarship timing, tuition, accommodation, insurance, and application steps."
      ],
      eligibility: [
        "Master applicants are listed as age 18 to 45 with bachelor degree or above; undergraduate applicants should confirm the exact degree-level requirement in the current notice.",
        "Applicants for Chinese Government Scholarship should take CSCA by the April session at the latest and submit applications by May at the latest.",
        "Applicants should prepare degree-level academic, passport, language, health, conduct, and scholarship materials."
      ],
      languageRequirements: [
        "Chinese-language programs and Chinese-taught degree programs require Chinese-language readiness as stated by SHUPL.",
        "The notice lists Chinese-language study options from two weeks to one year.",
        "Applicants should confirm CSCA and language requirements for the selected degree program."
      ],
      applicationSteps: [
        "Take the CSCA where required by the selected route.",
        "Log in to SHUPL's official application channel, complete the application, and upload documents.",
        "Track document review, scholarship review, admission, visa, accommodation, insurance, and registration."
      ],
      fees: {
        application: "The 2026 notice lists an application fee of CNY 400/person.",
        tuition: "Chinese language tuition listed in the notice ranges from CNY 1,200 for two weeks to CNY 18,000 for one year; degree tuition should be confirmed by program.",
        accommodation: "The notice lists accommodation at CNY 30/day for a double room.",
        insurance: "The notice lists insurance at CNY 1,000/year."
      },
      programNotes: [
        "SHUPL can be a practical law-focused Shanghai option for applicants below the most selective university tier.",
        "The notice's CSCA timing is important for Chinese Government Scholarship applicants.",
        "Students should confirm degree-level eligibility because the same notice includes multiple program types."
      ]
    }
  }
};
