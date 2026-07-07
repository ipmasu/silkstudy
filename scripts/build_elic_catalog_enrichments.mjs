import fs from "node:fs";

const inputPath = "outputs/elic-undergraduate-admissions/matched-all.json";
const outputPath = "lib/catalog/elic-undergraduate-admission-enrichments.ts";

const records = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const scoreRecord = (record) => {
  const summary = record.summary ?? {};
  const fields = ["eligibility", "language", "fees", "scholarship", "majors", "application"];
  return fields.reduce((score, key) => score + (summary[key] ? 1 : 0), 0);
};

const chooseBestBySlug = (items) => {
  const bySlug = new Map();
  for (const record of items) {
    const current = bySlug.get(record.slug);
    if (!current) {
      bySlug.set(record.slug, record);
      continue;
    }

    const currentScore = scoreRecord(current);
    const nextScore = scoreRecord(record);
    const currentIsMainCampus = current.schoolZh === "北京大学";
    const nextIsMainCampus = record.schoolZh === "北京大学";
    if (
      record.date > current.date ||
      (record.date === current.date && nextScore > currentScore) ||
      (record.slug === "peking-university" && nextIsMainCampus && !currentIsMainCampus)
    ) {
      bySlug.set(record.slug, record);
    }
  }

  return Array.from(bySlug.values()).sort((a, b) => a.slug.localeCompare(b.slug));
};

const inferMajors = (record) => {
  const text = `${record.name} ${record.title} ${record.summary?.majors ?? ""}`;
  const majors = new Set(["Chinese Language"]);
  if (/Medical|Medicine|Pharmaceutical|中医|医学|药|护理|临床|口腔/i.test(text)) majors.add("Medicine");
  if (/Engineering|Technology|Jiaotong|Transport|Posts|Telecommunications|Aerospace|Mining|Petroleum|Chemical|Maritime|Electronic|工业|工程|理工|交通|航空|电子|信息|石油|矿业/i.test(text)) {
    majors.add("Engineering");
    majors.add("Computer Science");
  }
  if (/Finance|Economics|Business|Trade|Commerce|Management|财经|经贸|工商|管理/i.test(text)) majors.add("Business");
  if (/Normal|Education|Teacher|师范|教育/i.test(text)) majors.add("Education");
  if (/Art|Arts|Music|Drama|Film|美术|艺术|音乐|电影|戏剧/i.test(text)) majors.add("Arts");
  if (/Agricultural|Forestry|Ocean|Marine|农业|林业|海洋/i.test(text)) majors.add("Agriculture");
  if (/Law|Political|政法|法学/i.test(text)) majors.add("Law");
  if (majors.size < 3) majors.add("Business");
  if (majors.size < 3) majors.add("Engineering");
  return Array.from(majors).slice(0, 4);
};

const has = (record, key) => Boolean(record.summary?.[key]);

const quote = (value) => JSON.stringify(value);
const array = (items) => `[${items.map((item) => quote(item)).join(", ")}]`;

const buildEntry = (record) => {
  const majors = inferMajors(record);
  const eligibility = [
    has(record, "eligibility")
      ? "The ELIC undergraduate guide includes applicant eligibility rules covering nationality, passport, health, conduct, academic background, and any age or guardian requirements."
      : "Confirm undergraduate eligibility in the current official guide, including nationality, passport, health, age, and high-school graduation requirements.",
    "For 2026 undergraduate entry, many Chinese universities require CSCA results; applicants should confirm the exact subjects and exemptions for this school and major.",
    "Students with Chinese nationality background or prior Chinese citizenship should verify Ministry of Education nationality-document rules before applying."
  ];
  const languageRequirements = [
    has(record, "language")
      ? "The ELIC guide includes language requirements; Chinese-taught programs usually require HSK, while English-taught programs may require IELTS, TOEFL, Duolingo, prior English-medium study, or an interview."
      : "Language requirements vary by program; confirm whether the selected major is Chinese-taught or English-taught and which HSK or English proof is required.",
    "Applicants planning to study in Chinese should prepare HSK evidence early, especially if they are also applying for scholarships."
  ];
  const applicationSteps = [
    "Open the ELIC source guide and the university's official international student portal before advising an applicant.",
    has(record, "application")
      ? "Follow the guide's application path, deadline, material checklist, review, interview or entrance-assessment, admission, visa, dormitory, and registration instructions."
      : "Prepare passport, high-school diploma or pre-graduation certificate, transcripts, language proof, physical examination, no-criminal-record certificate, financial proof, and scholarship materials where required.",
    "Track scholarship review, admission notice, JW form, X1 visa, insurance, housing, and on-campus registration steps."
  ];
  const rankingHighlights = [
    `${record.name} has an ELIC-indexed undergraduate admissions guide for international students, giving applicants a source-traced entry point for the current school profile.`,
    `${record.name} appears in the ELIC undergraduate admissions collection; verify final major list, tuition, deadlines, and scholarship rules against the university portal.`
  ];
  const programNotes = [
    has(record, "scholarship")
      ? "The ELIC guide includes scholarship information; compare Chinese Government Scholarship, provincial or municipal scholarships, and university-level awards for coverage of tuition, accommodation, insurance, and living allowance."
      : "Scholarship availability should be checked against national, provincial or municipal, and school-level routes before submission.",
    has(record, "fees")
      ? "The ELIC guide includes fee information; confirm the latest application fee, tuition, accommodation, and insurance standards before payment."
      : "Fees change by year and major; confirm current tuition, accommodation, insurance, and application fee before payment.",
    has(record, "majors")
      ? "The guide includes undergraduate major information; students should compare language of instruction, CSCA subjects, and scholarship fit by major."
      : "Program availability should be confirmed by major and language route in the latest official catalog."
  ];

  return `  ${quote(record.slug)}: {
    website: ${quote(record.link)},
    summary: ${quote(`${record.name} is linked to an ELIC undergraduate admissions guide for international students, with source-traced application, scholarship, fee, and program details queued for school-by-school refinement.`)},
    majors: ${array(majors)},
    applicationProfile: {
      sourceTitle: ${quote(`ELIC undergraduate admissions source: ${record.name}`)},
      sourceDate: ${quote(`ELIC post dated ${record.date}`)},
      sourceUrl: ${quote(record.link)},
      rankingHighlights: ${array(rankingHighlights)},
      eligibility: ${array(eligibility)},
      languageRequirements: ${array(languageRequirements)},
      applicationSteps: ${array(applicationSteps)},
      fees: {
        application: ${quote("Confirm the current application fee in the ELIC source guide and the university application system.")},
        tuition: ${quote(has(record, "fees") ? "The ELIC guide contains fee details; verify the final tuition by major and language route before payment." : "Confirm current undergraduate tuition by major and language route before payment.")},
        insurance: ${quote("International students in China normally need approved medical insurance; many universities list about CNY 800/year, but the current notice controls.")},
        accommodation: ${quote("Confirm campus, room type, availability, and scholarship housing coverage before arrival.")}
      },
      programNotes: ${array(programNotes)}
    }
  }`;
};

const chosen = chooseBestBySlug(records);
let content = `import type { UniversityProfileEnrichment } from "@/lib/catalog/university-profile-enrichments";

// Generated from outputs/elic-undergraduate-admissions/matched-all.json.
// Rebuild with: node scripts/build_elic_catalog_enrichments.mjs
export const elicUndergraduateAdmissionEnrichments: Record<string, UniversityProfileEnrichment> = {
${chosen.map(buildEntry).join(",\n")}
};
`;

fs.writeFileSync(outputPath, content, "utf8");
console.log(JSON.stringify({ records: records.length, uniqueSlugs: chosen.length, outputPath }, null, 2));
