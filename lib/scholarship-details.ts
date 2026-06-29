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
      coverage: "Confirmed policy: all first-year international degree students receive full scholarship support covering tuition and living expenses.",
      eligibility: "International degree applicants admitted to Hunan University of Technology. Final document review and admission decision still apply.",
      renewal: "From the second academic year, support is assessed by academic performance and daily conduct: top students may continue with 100% tuition waiver, followed by 50% and 30% tiers.",
      competitiveness: "Medium",
      bestFor: "Bachelor applicants who need a strong first-year affordability pathway and are willing to maintain good academic performance.",
      note: "This is a high-priority opportunity for cost-sensitive applicants. Confirm the final award wording in the admission notice before payment and visa steps.",
      zhType: "特殊奖学金",
      zhCoverage: "已确认政策：该校学历留学生第一学年均可获得全额奖学金支持，覆盖学费和生活费。",
      zhEligibility: "适用于被湖南工业大学录取的国际学历生，仍需通过材料审核和正式录取流程。",
      zhRenewal: "第二学年起按学习成绩和日常表现评定：优秀学生可继续获得 100% 学费减免，其后有 50% 和 30% 档。",
      zhCompetitiveness: "中等",
      zhBestFor: "适合预算敏感、希望第一年低压力入学，并愿意保持良好成绩的本科申请人。",
      zhNote: "这是目前非常值得重点推荐的机会。付款和签证前仍建议以最终录取通知和奖学金文件为准。",
      viType: "Học bổng đặc biệt",
      viCoverage: "Chính sách đã xác nhận: sinh viên quốc tế hệ bằng cấp năm nhất được hỗ trợ học bổng toàn phần, bao gồm học phí và sinh hoạt phí.",
      viEligibility: "Dành cho sinh viên quốc tế hệ bằng cấp được nhận vào Hunan University of Technology; vẫn cần qua xét duyệt hồ sơ và kết quả nhập học chính thức.",
      viRenewal: "Từ năm thứ hai, học bổng xét theo kết quả học tập và rèn luyện: nhóm xuất sắc có thể tiếp tục miễn 100% học phí, tiếp theo là mức 50% và 30%.",
      viCompetitiveness: "Trung bình",
      viBestFor: "Phù hợp với ứng viên cử nhân cần giảm áp lực tài chính năm đầu và sẵn sàng duy trì thành tích tốt.",
      viNote: "Đây là cơ hội nên ưu tiên tư vấn. Trước khi đóng phí và làm visa, cần đối chiếu với giấy báo trúng tuyển và văn bản học bổng cuối cùng."
    }
  ]
};

function classifyScholarship(name: string): ScholarshipDetail {
  const lower = name.toLowerCase();
  const isCsc = lower.includes("csc") || lower.includes("chinese government");
  const isProvincial = lower.includes("government") || lower.includes("provincial") || lower.includes("beijing") || lower.includes("shanghai") || lower.includes("guangdong") || lower.includes("jiangsu") || lower.includes("zhejiang");
  const isUniversity = lower.includes("university") || lower.includes("fellowship") || lower.includes("presidential") || lower.includes("international scholarship");

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
      zhEligibility: "通常看重成绩、材料完整度、专业匹配、年龄与学历条件、语言能力，以及使馆或学校审核。",
      zhRenewal: "一般每学年按成绩、出勤、纪律表现和奖学金管理规定进行复评。",
      zhCompetitiveness: "非常高",
      zhBestFor: "适合成绩强、学习计划清晰、材料完整且能赶上截止日期的申请人。",
      zhNote: "CSC 名额会因学校、学位、专业、国家渠道和年份不同而变化，需核验 Type A / Type B 具体路径。",
      viType: "Học bổng Chính phủ Trung Quốc",
      viCoverage: "Thường là lộ trình mạnh nhất; có thể bao gồm miễn học phí, hỗ trợ ký túc xá, sinh hoạt phí hàng tháng và bảo hiểm y tế tùy bậc học và quy định từng năm.",
      viEligibility: "Cần thành tích tốt, hồ sơ đầy đủ, ngành phù hợp, đáp ứng tuổi/bậc học, năng lực ngôn ngữ và xét duyệt theo kênh đại sứ quán hoặc trường.",
      viRenewal: "Thường được xét lại hằng năm theo học lực, chuyên cần, kỷ luật và quy định học bổng.",
      viCompetitiveness: "Rất cao",
      viBestFor: "Phù hợp với ứng viên có điểm tốt, kế hoạch học tập rõ, hồ sơ đầy đủ và kịp hạn nộp.",
      viNote: "Số suất CSC thay đổi theo trường, bậc học, ngành, kênh quốc gia và từng năm; cần xác minh rõ Type A / Type B."
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
      zhBestFor: "适合愿意考虑区域强校和低生活成本城市的学生。",
      zhNote: "省市奖学金很实用，但具体金额、截止时间和续评方式必须以当年学校通知为准。",
      viType: "Học bổng cấp tỉnh/thành phố",
      viCoverage: "Thường hỗ trợ giảm học phí, thưởng một lần hoặc hỗ trợ sinh hoạt một phần; mức hỗ trợ thay đổi theo tỉnh, thành phố và năm tuyển sinh.",
      viEligibility: "Thường yêu cầu học lực tốt, hạnh kiểm tốt, năng lực ngôn ngữ phù hợp và được trường hoặc cơ quan địa phương xét chọn.",
      viRenewal: "Có thể là một năm, xét hằng năm hoặc xét theo thành tích tùy quy định địa phương.",
      viCompetitiveness: "Cao",
      viBestFor: "Phù hợp với sinh viên mở rộng lựa chọn tới các trường khu vực mạnh và thành phố chi phí thấp hơn.",
      viNote: "Học bổng tỉnh/thành rất hữu ích, nhưng mức tiền, hạn nộp và cách gia hạn phải kiểm tra theo thông báo mới nhất."
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
      viEligibility: "Thường xét học lực, năng lực ngôn ngữ, chất lượng hồ sơ, phỏng vấn và độ phù hợp ngành.",
      viRenewal: "Thường xét lại hằng năm theo học lực và rèn luyện; một số chỉ áp dụng năm đầu.",
      viCompetitiveness: "Trung bình",
      viBestFor: "Phù hợp với đa số ứng viên cử nhân và tự túc vì đây là cách thực tế để giảm áp lực học phí.",
      viNote: "Học bổng trường có thể kết hợp với chiến lược chọn thành phố chi phí thấp, nhưng mức hỗ trợ cần xác minh theo ngành."
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
    zhBestFor: "适合明确想申请该校、并需要顾问核验最新奖学金通知的学生。",
    zhNote: "不要只依据旧奖学金信息做决策，必须核验当前入学年份。",
    viType: "Cần xác minh",
    viCoverage: "Chi tiết học bổng cần xác minh theo thông báo tuyển sinh mới nhất.",
    viEligibility: "Cần kiểm tra yêu cầu học lực, ngôn ngữ, tuổi, quốc tịch và hồ sơ trước khi nộp.",
    viRenewal: "Chính sách gia hạn cần xác nhận với văn phòng tuyển sinh quốc tế.",
    viCompetitiveness: "Cần xác minh",
    viBestFor: "Phù hợp với ứng viên đã chọn trường này và cần tư vấn xác minh thông báo mới nhất.",
    viNote: "Không nên dựa vào thông tin học bổng cũ nếu chưa kiểm tra năm tuyển sinh hiện tại."
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
