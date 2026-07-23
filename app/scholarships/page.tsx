import { Award, Banknote, FileSearch, Globe2, Landmark, School, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { SectionHeading } from "@/components/common/section-heading";
import { ScholarshipMatcher } from "@/components/scholarships/scholarship-matcher";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "China Scholarship Matching",
  description: "Estimate Chinese Government, provincial, municipal, university, and special scholarship routes for studying in China.",
  path: "/scholarships"
});

type ScholarshipPageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  warningTitle: string;
  warning: string;
  consult: string;
  schools: string;
  typesTitle: string;
  typesDescription: string;
  bestFor: string;
  watch: string;
  types: { title: string; body: string; best: string; watch: string; icon: LucideIcon }[];
  verifyTitle: string;
  verifyDescription: string;
  checklist: string[];
  examplesTitle: string;
  examplesDescription: string;
  examples: { school: string; route: string; note: string }[];
};

const officialExamplesEn = [
  { school: "NUAA", route: "CSC, Jiangsu, Nanjing, NUAA Fly-High, academic awards", note: "A clear 2026 case for aerospace, engineering, and computing applicants." },
  { school: "Hohai University", route: "Nanjing Municipal Scholarship and interview notes", note: "Useful for water resources, environment, civil engineering, and management." },
  { school: "ECUPL / SHUPL", route: "Shanghai Government Scholarship and CSC timing", note: "Useful for law, public administration, international law, and compliance tracks." },
  { school: "Hunan University of Technology", route: "High first-year school-level support", note: "A practical low-cost city plus university scholarship example." }
];

const pageCopy: Record<string, ScholarshipPageCopy> = {
  en: {
    eyebrow: "Scholarship matching",
    title: "China scholarships can cover tuition and sometimes living support.",
    intro: "A serious China plan compares national, provincial, municipal, university, and special scholarships with degree level, major, language, CSCA, budget, and city cost.",
    warningTitle: "Important note",
    warning: "A scholarship name is not enough. Before payment or visa steps, verify the current official notice, award level, renewal rule, and whether it can be combined with other support.",
    consult: "Check Your Scholarship Eligibility",
    schools: "Browse scholarship schools",
    typesTitle: "Main scholarship types",
    typesDescription: "Use these categories to avoid comparing unrelated awards as if they were the same.",
    bestFor: "Best for:",
    watch: "Watch:",
    types: [
      { title: "Chinese Government Scholarship CSC", body: "Usually the strongest national route, potentially covering tuition, accommodation, stipend, and medical insurance.", best: "Strong academic applicants with clear target programs and complete documents.", watch: "Quota, country channel, degree, major, CSCA, age, and language rules vary by year.", icon: Landmark },
      { title: "Provincial and Municipal Scholarships", body: "Local awards may reduce tuition, provide one-time support, or add living-cost help.", best: "Students open to strong regional universities and lower-cost cities.", watch: "Amount, renewal, quota, and eligible programs change every intake year.", icon: Banknote },
      { title: "University Scholarships", body: "School-level freshman, merit, president, dean, or program scholarships are practical for many bachelor applicants.", best: "Bachelor, language, and self-funded applicants who need tuition pressure reduced.", watch: "Some awards only cover year one; renewal may depend on GPA and conduct.", icon: School },
      { title: "Special Scholarships", body: "Routes include International Chinese Language Teachers Scholarship, MOFCOM, Silk Road, city, and industry-focused programs.", best: "Applicants with a precise language, public-sector, trade, energy, agriculture, or regional-cooperation goal.", watch: "Often require a nominating institution, nationality match, work experience, major fit, or language-study commitment.", icon: Sparkles }
    ],
    verifyTitle: "How to verify",
    verifyDescription: "Good scholarship advice starts with matching the award to the student's route.",
    checklist: ["Choose degree and major before chasing the largest amount.", "Read the current university international office page.", "Check CSCA, HSK, IELTS/TOEFL, interview, and deadline rules.", "Confirm whether tuition, accommodation, living allowance, and insurance are actually covered."],
    examplesTitle: "Official-school examples",
    examplesDescription: "Recent brochures show why the best plan mixes scholarship type, city cost, and school fit.",
    examples: [
      { school: "NUAA", route: "CSC, Jiangsu, Nanjing, NUAA Fly-High", note: "항공우주, 공학, 컴퓨터 분야 지원자에게 참고하기 좋은 2026 사례입니다." },
      { school: "Hohai University", route: "난징시 장학금 및 면접 안내", note: "수자원, 환경, 토목, 관리 분야에 유용합니다." },
      { school: "ECUPL / SHUPL", route: "상하이시 장학금과 CSC 일정", note: "법학, 공공관리, 국제법, 컴플라이언스 분야에 적합합니다." },
      { school: "Hunan University of Technology", route: "첫해 높은 학교 지원", note: "저비용 도시와 학교 장학금 조합의 실용적 사례입니다." }
    ]
  },
  zh: {
    eyebrow: "奖学金匹配",
    title: "中国奖学金有机会覆盖学费，部分还包含住宿和生活补助。",
    intro: "真实方案要把国家级、省市级、校级和专项奖学金，与学位层级、专业、语言、CSCA、预算和城市成本一起比较。",
    warningTitle: "重要提醒",
    warning: "奖学金名称只是起点。付款或签证前，必须核验当年官网通知、覆盖金额、续评规则，以及能否与其他资助叠加。",
    consult: "免费评估奖学金机会",
    schools: "查看有奖学金方向的学校",
    typesTitle: "主要奖学金类型",
    typesDescription: "先把奖学金分清楚，避免把完全不同的奖项当成同一种机会来比较。",
    bestFor: "适合：",
    watch: "注意：",
    types: [
      { title: "中国政府奖学金 CSC", body: "通常是力度最大的国家级奖学金，可能覆盖学费、住宿、生活费和医疗保险。", best: "成绩强、目标专业明确、材料完整、能提前规划截止日期的申请人。", watch: "名额、国家渠道、学位、专业、CSCA、年龄和语言规则每年不同。", icon: Landmark },
      { title: "省市级奖学金", body: "地方奖学金常见形式包括学费减免、一次性奖励或部分生活支持。", best: "愿意考虑区域强校，希望平衡学校质量和城市成本的学生。", watch: "金额、名额、续评和适用项目每年变化很大。", icon: Banknote },
      { title: "校级奖学金", body: "学校新生奖学金、优秀生奖学金、校长/院长奖学金和项目奖学金，常适合本科申请。", best: "本科、语言项目、自费但希望降低学费压力的申请人。", watch: "有些只覆盖第一年，有些按 GPA、出勤和表现续评。", icon: School },
      { title: "专项奖学金", body: "包括国际中文教师奖学金、MOFCOM、丝路/一带一路、城市专项和行业特色项目。", best: "中文教育、公共管理、贸易、能源、农业、法律或区域合作目标明确的学生。", watch: "往往有推荐机构、国别、工作经验、专业或中文学习方向限制。", icon: Sparkles }
    ],
    verifyTitle: "怎么核验",
    verifyDescription: "好的奖学金建议不是先追最大金额，而是判断奖项是否适合学生路线。",
    checklist: ["先定学位和专业，再看奖学金金额。", "优先看学校国际教育学院官网和当年招生简章。", "核验 CSCA、HSK、IELTS/TOEFL、面试和截止日期。", "确认是否真正覆盖学费、住宿、生活费和保险。"],
    examplesTitle: "官网学校案例",
    examplesDescription: "近期官网简章可以看出，最稳的方案通常是奖学金类型、城市成本和学校匹配度的组合。",
    examples: [
      { school: "南京航空航天大学", route: "CSC、江苏省、南京市、NUAA Fly-High、校内学业奖学金", note: "适合航空航天、工程、计算机方向。" },
      { school: "河海大学", route: "南京市政府奖学金、本科申请费与校内面试提醒", note: "水利、环境、土木和工程管理学生可重点比较。" },
      { school: "华东政法大学 / 上海政法学院", route: "上海市政府奖学金、CSC 时间要求", note: "适合法学、国际法、公共管理和合规方向。" },
      { school: "湖南工业大学", route: "新生首年高覆盖奖学金、后续按表现续评", note: "低成本城市和校级奖学金组合案例。" }
    ]
  },
  vi: {
    eyebrow: "Tìm học bổng phù hợp",
    title: "Học bổng Trung Quốc có thể miễn học phí và hỗ trợ sinh hoạt.",
    intro: "Một kế hoạch tốt cần so sánh học bổng quốc gia, tỉnh/thành, trường và chuyên biệt với bậc học, ngành, ngôn ngữ, CSCA, ngân sách và chi phí thành phố.",
    warningTitle: "Lưu ý quan trọng",
    warning: "Tên học bổng chưa đủ. Trước khi đóng phí hoặc làm visa, cần xác minh thông báo chính thức, mức hỗ trợ, quy định gia hạn và khả năng kết hợp.",
    consult: "Nhận tư vấn",
    schools: "Xem trường có học bổng",
    typesTitle: "Các loại học bổng chính",
    typesDescription: "Phân loại trước để không so sánh các học bổng khác nhau như cùng một cơ hội.",
    bestFor: "Phù hợp:",
    watch: "Lưu ý:",
    types: [
      { title: "Học bổng Chính phủ Trung Quốc CSC", body: "Thường là tuyến mạnh nhất, có thể gồm học phí, chỗ ở, sinh hoạt phí và bảo hiểm.", best: "Hồ sơ học thuật mạnh, mục tiêu rõ và hồ sơ đầy đủ.", watch: "Suất, kênh quốc gia, bậc học, ngành, CSCA, tuổi và ngôn ngữ thay đổi theo năm.", icon: Landmark },
      { title: "Học bổng tỉnh/thành", body: "Có thể giảm học phí, hỗ trợ một lần hoặc hỗ trợ sinh hoạt một phần.", best: "Học sinh mở rộng lựa chọn tới trường khu vực mạnh và thành phố chi phí thấp.", watch: "Mức tiền, gia hạn và ngành phù hợp thay đổi theo từng kỳ tuyển sinh.", icon: Banknote },
      { title: "Học bổng trường", body: "Học bổng tân sinh viên, thành tích hoặc chương trình riêng thường thực tế cho bậc cử nhân.", best: "Ứng viên cử nhân, tiếng Trung hoặc tự túc muốn giảm áp lực học phí.", watch: "Một số chỉ áp dụng năm đầu; gia hạn phụ thuộc GPA và rèn luyện.", icon: School },
      { title: "Học bổng chuyên biệt", body: "Gồm học bổng giáo viên tiếng Trung, MOFCOM, Con đường tơ lụa, thành phố và ngành đặc thù.", best: "Ứng viên có mục tiêu ngôn ngữ, khu vực công, thương mại, năng lượng, nông nghiệp hoặc luật.", watch: "Thường cần cơ quan giới thiệu, quốc tịch phù hợp, kinh nghiệm hoặc ngành phù hợp.", icon: Sparkles }
    ],
    verifyTitle: "Cách xác minh",
    verifyDescription: "Tư vấn tốt bắt đầu từ việc học bổng có phù hợp với lộ trình của học sinh hay không.",
    checklist: ["Chọn bậc học và ngành trước.", "Đọc trang quốc tế và brochure mới nhất của trường.", "Kiểm tra CSCA, HSK, IELTS/TOEFL, phỏng vấn và hạn nộp.", "Xác nhận học phí, chỗ ở, sinh hoạt phí và bảo hiểm có được hỗ trợ thật không."],
    examplesTitle: "Ví dụ từ trường",
    examplesDescription: "Các brochure gần đây cho thấy cần kết hợp loại học bổng, chi phí thành phố và độ phù hợp của trường.",
    examples: [
      { school: "NUAA", route: "CSC, Jiangsu, Nanjing, NUAA Fly-High", note: "Phù hợp hàng không, kỹ thuật và máy tính." },
      { school: "Hohai University", route: "Học bổng thành phố Nam Kinh và phỏng vấn", note: "Phù hợp thủy lợi, môi trường, xây dựng và quản lý." },
      { school: "ECUPL / SHUPL", route: "Học bổng Thượng Hải và thời gian CSC", note: "Phù hợp luật, quản lý công và tuân thủ." },
      { school: "Hunan University of Technology", route: "Hỗ trợ cao năm đầu", note: "Ví dụ tốt về thành phố chi phí thấp và học bổng trường." }
    ]
  },
  ko: {
    eyebrow: "장학금 매칭",
    title: "중국 장학금은 등록금을 면제하고 생활 지원까지 포함할 수 있습니다.",
    intro: "좋은 계획은 국가, 지역, 학교, 특별 장학금을 학위, 전공, 언어, CSCA, 예산, 도시 비용과 함께 비교합니다.",
    warningTitle: "중요 안내",
    warning: "장학금 이름만으로는 부족합니다. 납부나 비자 전에는 최신 공식 공지, 지원 범위, 갱신 조건, 중복 수혜 가능 여부를 확인해야 합니다.",
    consult: "상담 받기",
    schools: "장학금 학교 보기",
    typesTitle: "주요 장학금 유형",
    typesDescription: "서로 다른 장학금을 같은 기회처럼 비교하지 않도록 먼저 분류하세요.",
    bestFor: "적합 대상:",
    watch: "주의:",
    types: [
      { title: "중국정부장학금 CSC", body: "가장 강력한 국가 장학금으로 등록금, 숙소, 생활비, 보험을 포함할 수 있습니다.", best: "성적이 좋고 목표 전공과 서류가 명확한 지원자.", watch: "정원, 국가 채널, 학위, 전공, CSCA, 나이, 언어 기준이 매년 다릅니다.", icon: Landmark },
      { title: "지역/시 장학금", body: "등록금 감면, 일회성 지원 또는 생활비 일부 지원이 가능합니다.", best: "지역 강점 대학과 합리적 도시 비용을 함께 고려하는 학생.", watch: "금액, 갱신, 정원, 적용 전공이 매년 달라집니다.", icon: Banknote },
      { title: "학교 장학금", body: "신입생, 성적, 총장/학장, 프로그램 장학금은 학부 지원자에게 현실적입니다.", best: "학부, 어학, 자비 지원자 중 비용 부담을 낮추고 싶은 학생.", watch: "일부는 1년만 적용되고 갱신은 GPA와 생활 태도에 따릅니다.", icon: School },
      { title: "특별 장학금", body: "국제중문교사, MOFCOM, 실크로드, 도시, 산업 특화 장학금 등이 있습니다.", best: "중국어, 공공부문, 무역, 에너지, 농업, 법학 목표가 뚜렷한 학생.", watch: "추천기관, 국적, 경력, 전공 또는 중국어 학습 조건이 있을 수 있습니다.", icon: Sparkles }
    ],
    verifyTitle: "확인 방법",
    verifyDescription: "좋은 장학금 조언은 금액보다 학생 경로와의 적합성에서 시작합니다.",
    checklist: ["학위와 전공을 먼저 정하세요.", "해당 연도 학교 국제처 공지를 읽으세요.", "CSCA, HSK, IELTS/TOEFL, 면접과 마감일을 확인하세요.", "등록금, 숙소, 생활비, 보험 지원 여부를 정확히 확인하세요."],
    examplesTitle: "공식 학교 사례",
    examplesDescription: "최근 모집요강은 장학금 유형, 도시 비용, 학교 적합성을 함께 봐야 함을 보여줍니다.",
    examples: [
      { school: "NUAA", route: "CSC, Jiangsu, Nanjing, NUAA Fly-High", note: "ตัวอย่างที่ดีสำหรับผู้สมัครด้านอวกาศ วิศวกรรม และคอมพิวเตอร์" },
      { school: "Hohai University", route: "ทุนเมืองหนานจิงและการสัมภาษณ์", note: "เหมาะกับทรัพยากรน้ำ สิ่งแวดล้อม วิศวกรรมโยธา และการจัดการ" },
      { school: "ECUPL / SHUPL", route: "ทุนรัฐบาลเซี่ยงไฮ้และเวลา CSC", note: "เหมาะกับกฎหมาย การบริหารรัฐกิจ กฎหมายระหว่างประเทศ และ compliance" },
      { school: "Hunan University of Technology", route: "การสนับสนุนสูงในปีแรก", note: "ตัวอย่างของเมืองต้นทุนต่ำร่วมกับทุนมหาวิทยาลัย" }
    ]
  },
  th: {
    eyebrow: "จับคู่ทุนการศึกษา",
    title: "ทุนจีนอาจครอบคลุมค่าเล่าเรียน และบางทุนยังช่วยค่าครองชีพ",
    intro: "แผนที่ดีต้องเปรียบเทียบทุนรัฐบาล ทุนท้องถิ่น ทุนมหาวิทยาลัย และทุนพิเศษ ร่วมกับระดับการศึกษา สาขา ภาษา CSCA งบประมาณ และค่าครองชีพเมือง",
    warningTitle: "ข้อควรทราบ",
    warning: "ชื่อทุนยังไม่พอ ก่อนจ่ายเงินหรือทำวีซ่า ต้องตรวจสอบประกาศทางการล่าสุด มูลค่าทุน เงื่อนไขต่ออายุ และการรวมกับทุนอื่น",
    consult: "ขอคำปรึกษา",
    schools: "ดูมหาวิทยาลัยที่มีทุน",
    typesTitle: "ประเภททุนหลัก",
    typesDescription: "แยกประเภททุนก่อน เพื่อไม่เปรียบเทียบโอกาสที่แตกต่างกันเหมือนเป็นทุนเดียวกัน",
    bestFor: "เหมาะกับ:",
    watch: "ระวัง:",
    types: [
      { title: "ทุนรัฐบาลจีน CSC", body: "มักเป็นทุนระดับชาติที่ครอบคลุมมาก อาจรวมค่าเรียน ที่พัก ค่าครองชีพ และประกัน", best: "ผู้สมัครผลการเรียนดี เป้าหมายชัด และเอกสารครบ", watch: "โควตา ช่องทางประเทศ ระดับ สาขา CSCA อายุ และภาษาเปลี่ยนได้ทุกปี", icon: Landmark },
      { title: "ทุนมณฑล/เมือง", body: "อาจลดค่าเล่าเรียน ให้เงินสนับสนุนครั้งเดียว หรือช่วยค่าครองชีพบางส่วน", best: "นักเรียนที่เปิดรับมหาวิทยาลัยภูมิภาคและเมืองค่าครองชีพต่ำกว่า", watch: "มูลค่า การต่ออายุ และสาขาที่ใช้ได้เปลี่ยนตามปีรับสมัคร", icon: Banknote },
      { title: "ทุนมหาวิทยาลัย", body: "ทุนเด็กใหม่ ทุนผลการเรียน หรือทุนโครงการเฉพาะ เหมาะกับผู้สมัครปริญญาตรีจำนวนมาก", best: "ผู้สมัครปริญญาตรี ภาษา หรือจ่ายเองที่ต้องการลดค่าเรียน", watch: "บางทุนครอบคลุมแค่ปีแรก และต่ออายุตาม GPA/พฤติกรรม", icon: School },
      { title: "ทุนพิเศษ", body: "รวมทุนครูภาษาจีน MOFCOM เส้นทางสายไหม เมือง และสาขาอุตสาหกรรมเฉพาะ", best: "ผู้สมัครที่มีเป้าหมายภาษา ภาครัฐ การค้า พลังงาน เกษตร หรือกฎหมาย", watch: "มักต้องมีหน่วยงานแนะนำ สัญชาติ ประสบการณ์ หรือสาขาที่ตรงเงื่อนไข", icon: Sparkles }
    ],
    verifyTitle: "วิธีตรวจสอบ",
    verifyDescription: "คำแนะนำที่ดีเริ่มจากดูว่าทุนเหมาะกับเส้นทางของนักเรียนหรือไม่",
    checklist: ["เลือกวุฒิและสาขาก่อน", "อ่านประกาศล่าสุดของสำนักงานนักศึกษาต่างชาติ", "ตรวจ CSCA, HSK, IELTS/TOEFL, สัมภาษณ์ และเดดไลน์", "ยืนยันว่าครอบคลุมค่าเรียน ที่พัก ค่าครองชีพ และประกันจริงหรือไม่"],
    examplesTitle: "ตัวอย่างจากประกาศมหาวิทยาลัย",
    examplesDescription: "ประกาศล่าสุดแสดงให้เห็นว่าต้องดูทุน เมือง และความเหมาะสมของมหาวิทยาลัยร่วมกัน",
    examples: [
      { school: "NUAA", route: "CSC, Jiangsu, Nanjing, NUAA Fly-High", note: "Contoh jelas untuk pelamar aerospace, teknik, dan komputer." },
      { school: "Hohai University", route: "Beasiswa Kota Nanjing dan wawancara", note: "Berguna untuk sumber daya air, lingkungan, sipil, dan manajemen." },
      { school: "ECUPL / SHUPL", route: "Beasiswa Shanghai dan jadwal CSC", note: "Cocok untuk hukum, administrasi publik, hukum internasional, dan compliance." },
      { school: "Hunan University of Technology", route: "Dukungan tinggi tahun pertama", note: "Contoh praktis kota biaya rendah plus beasiswa kampus." }
    ]
  },
  id: {
    eyebrow: "Pencocokan beasiswa",
    title: "Beasiswa Tiongkok dapat menanggung kuliah dan kadang biaya hidup.",
    intro: "Rencana yang baik membandingkan beasiswa nasional, daerah, kampus, dan khusus dengan jenjang, jurusan, bahasa, CSCA, anggaran, dan biaya kota.",
    warningTitle: "Catatan penting",
    warning: "Nama beasiswa saja tidak cukup. Sebelum pembayaran atau visa, cek pengumuman resmi terbaru, cakupan, aturan perpanjangan, dan kombinasi bantuan.",
    consult: "Minta review",
    schools: "Lihat kampus beasiswa",
    typesTitle: "Jenis beasiswa utama",
    typesDescription: "Kelompokkan dulu agar tidak membandingkan penghargaan yang berbeda seolah sama.",
    bestFor: "Cocok untuk:",
    watch: "Perhatikan:",
    types: [
      { title: "Beasiswa Pemerintah Tiongkok CSC", body: "Jalur nasional terkuat; dapat mencakup kuliah, asrama, tunjangan, dan asuransi.", best: "Pelamar akademik kuat dengan program target dan dokumen lengkap.", watch: "Kuota, negara, jenjang, jurusan, CSCA, usia, dan bahasa berubah tiap tahun.", icon: Landmark },
      { title: "Beasiswa provinsi/kota", body: "Dapat berupa pengurangan kuliah, bantuan satu kali, atau dukungan biaya hidup.", best: "Siswa yang terbuka pada kampus regional kuat dan kota berbiaya lebih rendah.", watch: "Nilai, perpanjangan, kuota, dan program yang berlaku berubah setiap intake.", icon: Banknote },
      { title: "Beasiswa universitas", body: "Beasiswa mahasiswa baru, prestasi, rektor/dekan, atau program khusus sangat praktis untuk S1.", best: "Pelamar S1, bahasa, atau mandiri yang ingin menekan biaya kuliah.", watch: "Sebagian hanya tahun pertama; perpanjangan bergantung GPA dan perilaku.", icon: School },
      { title: "Beasiswa khusus", body: "Termasuk guru bahasa Mandarin, MOFCOM, Silk Road, kota, dan program industri.", best: "Pelamar dengan tujuan bahasa, publik, perdagangan, energi, pertanian, atau hukum.", watch: "Sering memerlukan lembaga rekomendasi, kewarganegaraan, pengalaman, atau jurusan tertentu.", icon: Sparkles }
    ],
    verifyTitle: "Cara verifikasi",
    verifyDescription: "Saran beasiswa yang baik dimulai dari kecocokan dengan jalur siswa.",
    checklist: ["Pilih jenjang dan jurusan dulu.", "Baca halaman internasional universitas tahun berjalan.", "Cek CSCA, HSK, IELTS/TOEFL, wawancara, dan deadline.", "Pastikan kuliah, asrama, biaya hidup, dan asuransi benar-benar ditanggung."],
    examplesTitle: "Contoh dari kampus resmi",
    examplesDescription: "Brosur terbaru menunjukkan rencana terbaik menggabungkan jenis beasiswa, biaya kota, dan kecocokan kampus.",
    examples: [
      { school: "NUAA", route: "CSC, Jiangsu, Nanjing, NUAA Fly-High", note: "Понятный пример для авиации, инженерии и компьютерных направлений." },
      { school: "Hohai University", route: "Стипендия Нанкина и интервью", note: "Полезно для водных ресурсов, экологии, строительства и управления." },
      { school: "ECUPL / SHUPL", route: "Стипендия Шанхая и сроки CSC", note: "Подходит для права, госуправления, международного права и комплаенса." },
      { school: "Hunan University of Technology", route: "Сильная поддержка первого года", note: "Практичный пример сочетания недорогого города и университетской стипендии." }
    ]
  },
  ru: {
    eyebrow: "Подбор стипендий",
    title: "Китайские стипендии могут покрывать обучение и иногда расходы на жизнь.",
    intro: "Хороший план сравнивает государственные, региональные, городские, университетские и специальные стипендии с уровнем, направлением, языком, CSCA, бюджетом и стоимостью города.",
    warningTitle: "Важное примечание",
    warning: "Одного названия стипендии недостаточно. До оплаты или визы проверьте официальное объявление, размер поддержки, продление и возможность сочетания с другими программами.",
    consult: "Проверить право на стипендию",
    schools: "Смотреть университеты со стипендиями",
    typesTitle: "Основные типы стипендий",
    typesDescription: "Сначала разделите типы стипендий, чтобы не сравнивать разные программы как одинаковые.",
    bestFor: "Подходит для:",
    watch: "Важно:",
    types: [
      { title: "Стипендия правительства Китая CSC", body: "Обычно самый сильный национальный путь: обучение, жилье, стипендия и страховка.", best: "Сильные академические кандидаты с ясной программой и полными документами.", watch: "Квоты, страна, уровень, направление, CSCA, возраст и язык меняются по годам.", icon: Landmark },
      { title: "Региональные и городские стипендии", body: "Могут снижать оплату, давать разовую поддержку или частично покрывать жизнь.", best: "Студенты, готовые рассмотреть сильные региональные университеты.", watch: "Сумма, продление, квота и программы меняются каждый набор.", icon: Banknote },
      { title: "Университетские стипендии", body: "Стипендии первокурсников, за успеваемость или программы университета часто практичны для бакалавриата.", best: "Бакалавры, языковые и самостоятельные кандидаты, которым нужно снизить оплату.", watch: "Некоторые только на первый год; продление зависит от GPA и поведения.", icon: School },
      { title: "Специальные стипендии", body: "Китайский язык, MOFCOM, Silk Road, городские и отраслевые программы.", best: "Кандидаты с четкой целью: язык, госуправление, торговля, энергетика, агро, право.", watch: "Часто нужны номинация, гражданство, опыт, подходящее направление или языковое обязательство.", icon: Sparkles }
    ],
    verifyTitle: "Как проверять",
    verifyDescription: "Хороший совет начинается с соответствия стипендии маршруту студента.",
    checklist: ["Сначала выберите уровень и направление.", "Читайте свежую страницу международного офиса университета.", "Проверьте CSCA, HSK, IELTS/TOEFL, интервью и дедлайн.", "Уточните, покрываются ли обучение, жилье, жизнь и страховка."],
    examplesTitle: "Примеры официальных вузов",
    examplesDescription: "Свежие брошюры показывают, что нужно сочетать тип стипендии, стоимость города и соответствие университета.",
    examples: [
      { school: "NUAA", route: "CSC, Jiangsu, Nanjing, NUAA Fly-High", note: "Havacılık, mühendislik ve bilgisayar adayları için net bir örnek." },
      { school: "Hohai University", route: "Nanjing şehir bursu ve mülakat notları", note: "Su kaynakları, çevre, inşaat ve yönetim alanları için yararlı." },
      { school: "ECUPL / SHUPL", route: "Şanghay bursu ve CSC takvimi", note: "Hukuk, kamu yönetimi, uluslararası hukuk ve uyum alanlarına uygun." },
      { school: "Hunan University of Technology", route: "İlk yıl güçlü destek", note: "Düşük maliyetli şehir + üniversite bursu için pratik örnek." }
    ]
  },
  tr: {
    eyebrow: "Burs eşleştirme",
    title: "Çin bursları öğrenim ücretini ve bazen yaşam desteğini karşılayabilir.",
    intro: "İyi bir plan; ulusal, bölgesel, şehir, üniversite ve özel bursları derece, bölüm, dil, CSCA, bütçe ve şehir maliyetiyle birlikte karşılaştırır.",
    warningTitle: "Önemli not",
    warning: "Burs adı tek başına yeterli değildir. Ödeme veya vize öncesinde güncel resmi duyuru, destek kapsamı, yenileme kuralı ve diğer desteklerle birleşip birleşmediği doğrulanmalıdır.",
    consult: "Burs uygunluğunu kontrol et",
    schools: "Burslu okullara bak",
    typesTitle: "Ana burs türleri",
    typesDescription: "Farklı bursları aynı fırsat gibi karşılaştırmamak için önce türleri ayırın.",
    bestFor: "Uygun olduğu kişiler:",
    watch: "Dikkat:",
    types: [
      { title: "Çin Hükümeti Bursu CSC", body: "Genelde en güçlü ulusal yol; öğrenim, konaklama, aylık destek ve sigorta içerebilir.", best: "Akademik profili güçlü, hedef programı net ve belgeleri tam adaylar.", watch: "Kontenjan, ülke kanalı, derece, bölüm, CSCA, yaş ve dil kuralları yıla göre değişir.", icon: Landmark },
      { title: "Eyalet/şehir bursları", body: "Öğrenim indirimi, tek seferlik destek veya kısmi yaşam desteği sağlayabilir.", best: "Güçlü bölgesel üniversitelere ve daha düşük maliyetli şehirlere açık öğrenciler.", watch: "Miktar, yenileme, kontenjan ve uygun programlar her alım yılında değişir.", icon: Banknote },
      { title: "Üniversite bursları", body: "Yeni öğrenci, başarı, rektör/dekan veya program bursları lisans için pratiktir.", best: "Lisans, dil veya kendi ücretini ödeyen ve maliyeti azaltmak isteyen adaylar.", watch: "Bazıları sadece ilk yılı kapsar; yenileme GPA ve davranışa bağlıdır.", icon: School },
      { title: "Özel burslar", body: "Çince öğretmenliği, MOFCOM, İpek Yolu, şehir ve sektör odaklı programları içerir.", best: "Dil, kamu sektörü, ticaret, enerji, tarım, hukuk veya bölgesel iş birliği hedefi net adaylar.", watch: "Genelde aday gösteren kurum, milliyet, deneyim, bölüm uyumu veya dil taahhüdü ister.", icon: Sparkles }
    ],
    verifyTitle: "Nasıl doğrulanır",
    verifyDescription: "İyi burs danışmanlığı, bursun öğrencinin rotasına uyup uymadığını kontrol ederek başlar.",
    checklist: ["Önce derece ve bölümü seçin.", "Üniversitenin güncel uluslararası öğrenci sayfasını okuyun.", "CSCA, HSK, IELTS/TOEFL, mülakat ve son tarihleri kontrol edin.", "Öğrenim, konaklama, yaşam desteği ve sigortanın gerçekten kapsanıp kapsanmadığını doğrulayın."],
    examplesTitle: "Resmi okul örnekleri",
    examplesDescription: "Güncel broşürler, en iyi planın burs türü, şehir maliyeti ve okul uyumunu birlikte ele aldığını gösterir.",
    examples: officialExamplesEn
  }
};

function copyFor(locale: string) {
  return pageCopy[locale] ?? pageCopy.en;
}

export default async function ScholarshipsPage() {
  const locale = await getCurrentLocale();
  const c = copyFor(locale);
  const prefix = localePrefix(locale);

  return (
    <main className="bg-surface py-16">
      <JsonLd
        data={faqJsonLd([
          {
            question: "Can China scholarships cover full tuition?",
            answer: "Yes. Chinese Government Scholarship, some provincial or municipal scholarships, and selected university scholarships can cover tuition. Some routes may also include accommodation, insurance, or living support."
          },
          {
            question: "Which scholarship type should international students compare first?",
            answer: "Students should compare national, provincial, municipal, university, and special scholarships against their degree level, major, language route, budget, city cost, and current official admissions notice."
          },
          {
            question: "What must be verified before applying?",
            answer: "Verify the current official notice, eligibility, deadline, CSCA or language requirements, award coverage, renewal rule, and whether the award can be combined with other support."
          }
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{c.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">{c.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`${prefix}/consultation`}>{c.consult}</ButtonLink>
              <ButtonLink href={`${prefix}/scholarship-opportunities`} variant="secondary">{locale === "zh" ? "查看奖学金机会库" : "Scholarship Watchlist"}</ButtonLink>
              <ButtonLink href={`${prefix}/universities?scholarship=true`} variant="secondary">{c.schools}</ButtonLink>
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-6">
            <ShieldCheck className="text-primary" size={28} aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold text-ink">{c.warningTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{c.warning}</p>
          </aside>
        </section>

        <section className="mt-12">
          <ScholarshipMatcher locale={locale} />
        </section>

        <section className="mt-14">
          <SectionHeading title={c.typesTitle} description={c.typesDescription} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {c.types.map(({ title, body, best, watch, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <Icon size={24} className="text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-bold text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                <p className="mt-4 text-sm font-semibold text-ink">{c.bestFor}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{best}</p>
                <p className="mt-4 text-sm font-semibold text-ink">{c.watch}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{watch}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading title={c.verifyTitle} description={c.verifyDescription} />
            <div className="mt-8 grid gap-4">
              {c.checklist.map((item, index) => (
                <article key={item} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-3">
                    {[Award, FileSearch, Globe2, Banknote][index] ? (() => {
                      const Icon = [Award, FileSearch, Globe2, Banknote][index];
                      return <Icon size={20} className="mt-1 shrink-0 text-primary" aria-hidden="true" />;
                    })() : null}
                    <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title={c.examplesTitle} description={c.examplesDescription} />
            <div className="mt-8 grid gap-4">
              {c.examples.map((item) => (
                <article key={item.school} className="rounded-lg border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-bold text-ink">{item.school}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{item.route}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
