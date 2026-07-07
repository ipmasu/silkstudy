import type { University } from "@/lib/site-data";

export type ScholarshipDetail = {
  name: string;
  type: "CSC" | "Provincial / Municipal" | "University" | "Special" | "To verify";
  coverage: string;
  eligibility: string;
  renewal: string;
  competitiveness: "Very high" | "High" | "Medium" | "Varies" | "To verify";
  bestFor: string;
  note: string;
  zhType: string;
  zhCoverage: string;
  zhEligibility: string;
  zhRenewal: string;
  zhCompetitiveness: string;
  zhBestFor: string;
  zhNote: string;
  viType: string;
  viCoverage: string;
  viEligibility: string;
  viRenewal: string;
  viCompetitiveness: string;
  viBestFor: string;
  viNote: string;
};

const specialScholarships: Record<string, ScholarshipDetail[]> = {
  "hunan-university-of-technology": [
    {
      name: "First-year Full Scholarship for Degree Students",
      type: "Special",
      coverage: "Confirmed policy: first-year international degree students receive strong scholarship support covering tuition and living-cost support, subject to final admission documents.",
      eligibility: "International degree applicants admitted to Hunan University of Technology. Final document review and admission decision still apply.",
      renewal: "From the second academic year, support is assessed by academic performance and daily conduct, with 100%, 50%, and 30% tuition-waiver tiers.",
      competitiveness: "Medium",
      bestFor: "Bachelor applicants who need a strong first-year affordability pathway and are willing to maintain good academic performance.",
      note: "This is a high-priority cost-sensitive opportunity. Confirm the final award wording in the admission notice before payment and visa steps.",
      zhType: "特殊奖学金",
      zhCoverage: "已确认方向：该校第一学年国际学历生可获得较高强度奖学金支持，覆盖学费并包含生活支持，最终以录取和奖学金文件为准。",
      zhEligibility: "适用于被湖南工业大学录取的国际学历生，仍需通过材料审核和正式录取流程。",
      zhRenewal: "第二学年起按学习成绩和日常表现评定，常见为 100%、50%、30% 学费减免档位。",
      zhCompetitiveness: "中等",
      zhBestFor: "适合预算敏感、希望第一年低压力入学，并愿意保持良好成绩的本科申请人。",
      zhNote: "这是目前值得重点推荐的降成本机会。付款和签证前仍建议以最终录取通知和奖学金文件为准。",
      viType: "Học bổng đặc biệt",
      viCoverage: "Chính sách đã xác nhận theo hướng hỗ trợ mạnh cho năm đầu, bao gồm học phí và hỗ trợ sinh hoạt, nhưng cần đối chiếu giấy báo cuối cùng.",
      viEligibility: "Dành cho sinh viên quốc tế hệ bằng cấp được Hunan University of Technology nhận, sau khi hồ sơ được xét duyệt.",
      viRenewal: "Từ năm hai, xét theo học tập và rèn luyện, thường theo các mức miễn giảm học phí 100%, 50%, 30%.",
      viCompetitiveness: "Trung bình",
      viBestFor: "Phù hợp với ứng viên cử nhân cần giảm áp lực chi phí năm đầu và sẵn sàng duy trì kết quả tốt.",
      viNote: "Đây là cơ hội nên ưu tiên cho hồ sơ nhạy cảm về chi phí; cần kiểm tra giấy báo học bổng cuối cùng."
    }
  ]
};

function classifyScholarship(name: string): ScholarshipDetail {
  const lower = name.toLowerCase();
  const isCsc = lower.includes("csc") || lower.includes("chinese government");
  const isSpecial = lower.includes("mofcom") || lower.includes("silk road") || lower.includes("belt and road") || lower.includes("chinese language teachers") || lower.includes("cis");
  const isProvincial = lower.includes("provincial") || lower.includes("municipal") || lower.includes("beijing") || lower.includes("shanghai") || lower.includes("guangdong") || lower.includes("jiangsu") || lower.includes("zhejiang") || lower.includes("nanjing");
  const isUniversity = lower.includes("university") || lower.includes("fellowship") || lower.includes("presidential") || lower.includes("international scholarship") || lower.includes("freshman") || lower.includes("merit");

  if (isCsc) {
    return {
      name,
      type: "CSC",
      coverage: "Usually the strongest route: may include tuition waiver, accommodation subsidy, monthly stipend, and medical insurance depending on degree level and annual rules.",
      eligibility: "Strong academics, complete documents, suitable major, age and degree eligibility, language readiness, and official nomination or university review.",
      renewal: "Normally reviewed yearly by academic performance, attendance, conduct, and scholarship regulations.",
      competitiveness: "Very high",
      bestFor: "Applicants with strong grades, clear study plan, complete documents, and enough time before the deadline.",
      note: "CSC availability differs by school, degree, major, country channel, and year. Always verify the exact Type A / Type B route.",
      zhType: "中国政府奖学金",
      zhCoverage: "通常是力度最大的奖学金方向，按年度政策和学位层次，可能覆盖学费、住宿补贴、生活费和医疗保险。",
      zhEligibility: "通常看重成绩、材料完整度、专业匹配、年龄与学历条件、语言能力，以及使领馆或学校审核。",
      zhRenewal: "一般每学年按成绩、出勤、纪律表现和奖学金管理规定进行复评。",
      zhCompetitiveness: "非常高",
      zhBestFor: "适合成绩强、学习计划清晰、材料完整且能赶上截止日期的申请人。",
      zhNote: "CSC 名额会因学校、学位、专业、国家渠道和年份不同而变化，必须核验 Type A / Type B 具体路径。",
      viType: "Học bổng Chính phủ Trung Quốc",
      viCoverage: "Thường là tuyến hỗ trợ mạnh nhất, có thể gồm học phí, ký túc xá, sinh hoạt phí và bảo hiểm y tế tùy bậc học và quy định năm đó.",
      viEligibility: "Cần thành tích tốt, hồ sơ đầy đủ, ngành phù hợp, đáp ứng tuổi/bậc học, năng lực ngôn ngữ và xét duyệt theo kênh chính thức.",
      viRenewal: "Thường được xét lại hằng năm theo học tập, chuyên cần, kỷ luật và quy định học bổng.",
      viCompetitiveness: "Rất cao",
      viBestFor: "Phù hợp với hồ sơ học thuật mạnh, kế hoạch học tập rõ và chuẩn bị sớm.",
      viNote: "Suất CSC thay đổi theo trường, bậc học, ngành, quốc gia và năm; cần xác minh Type A / Type B."
    };
  }

  if (isSpecial) {
    return {
      name,
      type: "Special",
      coverage: "Coverage varies by route. Some special scholarships can be full awards; others are targeted tuition or language-study support.",
      eligibility: "Often tied to a specific country, recommending institution, Chinese-language route, public-sector background, or strategic field.",
      renewal: "Depends on the special program rules and annual review.",
      competitiveness: "Varies",
      bestFor: "Applicants whose background matches a precise language, development, Belt and Road, public-sector, or industry-focused route.",
      note: "Special scholarships can be excellent, but they are narrow. Verify nomination, nationality, degree, and major restrictions first.",
      zhType: "专项奖学金",
      zhCoverage: "覆盖力度因项目而异；部分专项可能接近全额，也有些只支持学费、语言学习或特定费用。",
      zhEligibility: "常与国别、推荐机构、中文学习方向、公共部门背景或特定战略专业有关。",
      zhRenewal: "按专项项目规则和年度审核执行。",
      zhCompetitiveness: "视项目而定",
      zhBestFor: "适合背景与中文教育、发展合作、一带一路、公共部门或行业特色方向高度匹配的学生。",
      zhNote: "专项奖学金可能很有价值，但限制也更窄；要先核验推荐渠道、国别、学位和专业限制。",
      viType: "Học bổng chuyên biệt",
      viCoverage: "Mức hỗ trợ tùy chương trình; có tuyến gần như toàn phần, có tuyến chỉ hỗ trợ học phí hoặc học tiếng.",
      viEligibility: "Thường gắn với quốc gia, cơ quan giới thiệu, học tiếng Trung, khu vực công hoặc lĩnh vực chiến lược.",
      viRenewal: "Theo quy định riêng của chương trình và xét duyệt hằng năm.",
      viCompetitiveness: "Tùy chương trình",
      viBestFor: "Phù hợp với hồ sơ khớp rõ với ngôn ngữ, phát triển, Vành đai và Con đường, khu vực công hoặc ngành đặc thù.",
      viNote: "Học bổng chuyên biệt rất hữu ích nhưng giới hạn hẹp; cần kiểm tra kênh giới thiệu, quốc tịch, bậc học và ngành."
    };
  }

  if (isProvincial) {
    return {
      name,
      type: "Provincial / Municipal",
      coverage: "Often provides tuition reduction, one-time award, or partial living support. Coverage varies widely by province, city, and intake year.",
      eligibility: "Good academic record, clean conduct record, language readiness, and selection by the university or local education authority.",
      renewal: "May be one-year, annual, or performance-based depending on local rules.",
      competitiveness: "High",
      bestFor: "Students open to strong regional universities and cities with lower living costs.",
      note: "Provincial and city awards are useful, but exact amount and deadline must be checked in the current university notice.",
      zhType: "省市级奖学金",
      zhCoverage: "通常提供学费减免、一次性奖励或部分生活支持，具体力度因省份、城市和年度招生政策差异较大。",
      zhEligibility: "通常要求成绩良好、无不良记录、语言能力达标，并由学校或地方教育主管部门评审。",
      zhRenewal: "可能是一年制、按年申请或按表现续评，需看地方规则。",
      zhCompetitiveness: "高",
      zhBestFor: "适合愿意考虑区域强校和较低生活成本城市的学生。",
      zhNote: "省市奖学金很实用，但具体金额、截止时间和续评方式必须以当年学校通知为准。",
      viType: "Học bổng tỉnh/thành phố",
      viCoverage: "Thường hỗ trợ giảm học phí, thưởng một lần hoặc hỗ trợ sinh hoạt một phần; mức hỗ trợ thay đổi theo địa phương và năm tuyển sinh.",
      viEligibility: "Thường yêu cầu học lực tốt, hạnh kiểm tốt, ngôn ngữ phù hợp và được trường hoặc cơ quan địa phương xét chọn.",
      viRenewal: "Có thể là một năm, xét hằng năm hoặc theo thành tích tùy quy định địa phương.",
      viCompetitiveness: "Cao",
      viBestFor: "Phù hợp với sinh viên sẵn sàng chọn trường khu vực mạnh và thành phố chi phí thấp hơn.",
      viNote: "Cần kiểm tra số tiền, hạn nộp và điều kiện gia hạn theo thông báo mới nhất của trường."
    };
  }

  if (isUniversity) {
    return {
      name,
      type: "University",
      coverage: "Usually a school-level tuition waiver, merit award, or partial scholarship. Some universities offer full or high-value freshman awards.",
      eligibility: "Academic merit, language readiness, application quality, interview result, and program fit.",
      renewal: "Usually based on yearly academic performance and conduct. Some awards are only for the first year.",
      competitiveness: "Medium",
      bestFor: "Most bachelor and self-funded applicants because it is often the most practical route to reduce tuition pressure.",
      note: "University scholarships are often easier to combine with a lower-cost city strategy, but exact coverage must be verified by program.",
      zhType: "校级奖学金",
      zhCoverage: "通常为学校层面的学费减免、优秀生奖励或部分奖学金；部分学校会提供全额或高额新生奖学金。",
      zhEligibility: "通常看成绩、语言能力、申请材料质量、面试表现和专业匹配度。",
      zhRenewal: "一般按年度成绩和表现续评，部分奖项只覆盖第一年。",
      zhCompetitiveness: "中等",
      zhBestFor: "适合多数本科和自费申请人，是降低学费压力最实际的路径之一。",
      zhNote: "校级奖学金常与低成本城市策略组合使用，但具体覆盖比例需按专业核验。",
      viType: "Học bổng trường",
      viCoverage: "Thường là miễn/giảm học phí, học bổng thành tích hoặc hỗ trợ một phần; một số trường có học bổng tân sinh viên giá trị cao.",
      viEligibility: "Thường xét thành tích, ngôn ngữ, chất lượng hồ sơ, phỏng vấn và độ phù hợp ngành.",
      viRenewal: "Thường xét theo kết quả học tập và rèn luyện hằng năm; một số chỉ áp dụng năm đầu.",
      viCompetitiveness: "Trung bình",
      viBestFor: "Phù hợp với nhiều ứng viên cử nhân và tự túc vì thực tế trong việc giảm áp lực học phí.",
      viNote: "Có thể kết hợp với chiến lược thành phố chi phí thấp, nhưng cần xác minh mức hỗ trợ theo ngành."
    };
  }

  return {
    name,
    type: "To verify",
    coverage: "Scholarship details are pending verification from the current admissions notice.",
    eligibility: "Check academic, language, age, nationality, and document requirements before applying.",
    renewal: "Renewal policy must be confirmed with the international admissions office.",
    competitiveness: "To verify",
    bestFor: "Applicants who want this school and need a counselor to verify the newest scholarship notice.",
    note: "Do not rely on old scholarship information without checking the current intake year.",
    zhType: "待核验",
    zhCoverage: "奖学金细节需根据当年招生简章继续核验。",
    zhEligibility: "申请前需核验成绩、语言、年龄、国籍和材料要求。",
    zhRenewal: "续评政策需向学校国际招生办公室确认。",
    zhCompetitiveness: "待核验",
    zhBestFor: "适合明确想申请该校，并需要顾问核验最新奖学金通知的学生。",
    zhNote: "不要只依据旧奖学金信息做决策，必须核验当前入学年份。",
    viType: "Cần xác minh",
    viCoverage: "Chi tiết học bổng cần xác minh theo thông báo tuyển sinh mới nhất.",
    viEligibility: "Cần kiểm tra yêu cầu học lực, ngôn ngữ, tuổi, quốc tịch và hồ sơ trước khi nộp.",
    viRenewal: "Chính sách gia hạn cần xác nhận với văn phòng tuyển sinh quốc tế.",
    viCompetitiveness: "Cần xác minh",
    viBestFor: "Phù hợp với ứng viên muốn trường này và cần tư vấn xác minh thông tin mới nhất.",
    viNote: "Không nên dựa vào thông tin cũ nếu chưa kiểm tra năm tuyển sinh hiện tại."
  };
}

export function getScholarshipDetails(university: University): ScholarshipDetail[] {
  const special = specialScholarships[university.slug] ?? [];
  const names = university.scholarships.filter((name) => !special.some((item) => item.name === name));
  const details = names.map(classifyScholarship);

  if (special.length === 0 && details.length === 0) {
    return [classifyScholarship("Scholarship information pending verification")];
  }

  return [...special, ...details];
}
