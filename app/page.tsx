import { ButtonLink } from "@/components/common/button-link";
import { JsonLd } from "@/components/common/json-ld";
import { SearchPanel } from "@/components/search/search-panel";
import { getAllUniversitiesView } from "@/lib/content/universities";
import { localePrefix } from "@/lib/i18n/routing";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { provinces } from "@/lib/site-data";
import { Award, BookOpen, Building2, Globe2, Handshake, HeartHandshake, Landmark, Languages, Map, MessageCircle, Rocket, Share2, ShieldCheck, TrainFront, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Study in China with Scholarships | SilkStudy",
  description: "SilkStudy helps global young people find Chinese universities, scholarships, cities, majors, Chinese-language pathways, and free study consultation.",
  keywords: [
    "study in China",
    "China scholarships",
    "Chinese universities for international students",
    "learn Chinese in China",
    "CSC scholarship",
    "SilkStudy"
  ]
});

type LocaleCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  scholarshipBadge: string;
  browse: string;
  consult: string;
  scholarshipCta: string;
  searchPlaceholder: string;
  stats: [string, string][];
  missionTitle: string;
  missionBody: string;
  reasonsTitle: string;
  reasonsBody: string;
  reasons: { icon: LucideIcon; title: string; body: string }[];
  scholarshipTitle: string;
  scholarshipBody: string;
  scholarshipPoints: string[];
  countriesTitle: string;
  countriesBody: string;
  countryGroups: string[];
  pathTitle: string;
  pathSteps: string[];
  finalTitle: string;
  finalBody: string;
  exchangeLabel: string;
};

const copy: Record<string, LocaleCopy> = {
  en: {
    eyebrow: "Your China story starts here",
    title: "Study in China. Live the Story.",
    subtitle: "Find the right university and a city you want to call home. Study, travel, make friends, and experience the future taking shape across China.",
    scholarshipBadge: "Full or high-value scholarships may cover tuition, housing, and living allowance. Final terms must be verified by school and year.",
    browse: "Browse universities",
    consult: "Get free consultation",
    scholarshipCta: "Explore scholarships",
    searchPlaceholder: "Search university, major, city, or scholarship route",
    stats: [["Scholarship routes", "national, provincial, city, university, and special"], ["Catalog schools", "Chinese universities for international students"], ["Languages", "built for students who want China and Chinese language"]],
    missionTitle: "Why this site exists",
    missionBody: "We want more young people to understand today's China directly: its universities, cities, high-speed development, technology, culture, and daily life. Study abroad is not only a degree. It is a bridge for mutual trust, language learning, and long-term cooperation.",
    reasonsTitle: "Scholarships can open the door to China.",
    reasonsBody: "Some scholarships can waive tuition and may include accommodation or living support. More importantly, studying here lets students share the dividend of China's fast, high-quality development while learning Chinese and building real exchange.",
    reasons: [
      { icon: Award, title: "Rich scholarships", body: "CSC, provincial, municipal, university, and special scholarships may reduce or fully cover study costs." },
      { icon: Rocket, title: "Fast high-quality development", body: "China is a living classroom for AI, new energy, e-commerce, smart manufacturing, infrastructure, and modern services." },
      { icon: BookOpen, title: "Chinese language advantage", body: "Learning Chinese in China gives students language, culture, and career advantages that are hard to copy elsewhere." },
      { icon: ShieldCheck, title: "Stable study life", body: "Well-managed campuses, public transport, and city services help families feel safer about sending students abroad." }
    ],
    scholarshipTitle: "The scholarship attraction is real",
    scholarshipBody: "For many families, the decisive point is simple: a strong Chinese university plus a scholarship can be more realistic than an expensive self-funded route elsewhere.",
    scholarshipPoints: ["Some scholarships waive tuition.", "Some include accommodation or living allowance.", "Some city and university awards reduce first-year pressure.", "Every award must be checked against the current official notice."],
    countriesTitle: "Priority student markets",
    countriesBody: "Students from these regions often combine demand for affordable quality education with interest in Chinese language, China careers, trade, technology, or regional cooperation.",
    countryGroups: ["Southeast Asia: Vietnam, Thailand, Indonesia, Malaysia, Laos", "Northeast Asia: Korea, Japan, Mongolia", "Central Asia and Eurasia: Kazakhstan, Russia, Turkey", "South Asia and Belt and Road partners: Pakistan, Bangladesh, Nepal, Sri Lanka"],
    pathTitle: "How SilkStudy helps",
    pathSteps: ["Match school, city, major, budget, and scholarship route.", "Verify official admission and scholarship notices.", "Prepare language, CSCA, documents, timing, and visa steps.", "Help students feel ready for life in China, not just admission."],
    finalTitle: "Bring students to China with a real plan.",
    finalBody: "The scholarship is the door-opener. The deeper goal is exchange: more students learning Chinese, seeing China themselves, and building friendships and cooperation.",
    exchangeLabel: "Exchange"
  },
  zh: {
    eyebrow: "你的中国故事，从这里开始",
    title: "来中国学习，也来经历一个更大的世界。",
    subtitle: "找到适合你的大学，也找到一座愿意生活的城市。认识真实的中国，在这里学习、旅行、交朋友，并参与正在发生的未来。",
    scholarshipBadge: "部分全额或高额奖学金可能覆盖学费、住宿和生活费，最终以学校当年官网通知为准。",
    browse: "浏览大学",
    consult: "免费咨询",
    scholarshipCta: "查看奖学金",
    searchPlaceholder: "搜索大学、专业、城市或奖学金方向",
    stats: [["奖学金类型", "国家、省市、学校、专项多层次"], ["学校目录", "面向国际学生的中国高校"], ["目标学生", "想来中国，也愿意学习中文的年轻人"]],
    missionTitle: "我们做这个网站的目的",
    missionBody: "我们希望让更多国家的年轻人直接了解今天的中国：大学、城市、高铁、科技、文化和真实生活。留学不只是拿文凭，更是增进中国与各国之间理解、信任、语言学习和长期合作的桥梁。",
    reasonsTitle: "中国留学可以做到免学费，也有机会获得生活补助。",
    reasonsBody: "国家、省市、学校和专项奖学金非常丰富，部分项目可覆盖学费、住宿甚至生活支持。对学生来说，这不仅是降低留学成本，更是亲身来到中国、学习中文、享受中国高速高质量发展红利的机会。",
    reasons: [
      { icon: Award, title: "奖学金丰富", body: "CSC、省市、学校和专项奖学金，部分项目可大幅降低成本，甚至覆盖学费和生活支持。" },
      { icon: Rocket, title: "高速高质量发展", body: "中国是理解人工智能、新能源、电商、智能制造、基础设施和现代服务业的真实课堂。" },
      { icon: BookOpen, title: "中文能力红利", body: "在中国学习中文，不只是语言学习，也是在获得文化理解、就业和合作优势。" },
      { icon: ShieldCheck, title: "稳定安全的生活", body: "成熟交通、校园管理和城市服务，让家长和学生更安心地选择中国。" }
    ],
    scholarshipTitle: "奖学金就是最大的吸引力之一",
    scholarshipBody: "对很多家庭来说，关键很直接：一所不错的中国大学，加上高覆盖奖学金，可能比去其他国家高额自费更现实。",
    scholarshipPoints: ["部分奖学金可免学费。", "部分奖学金包含住宿或生活补助。", "部分省市和校级奖学金能显著降低第一年压力。", "每个奖项都必须按当年学校官网核验。"],
    countriesTitle: "优先关注的学生市场",
    countriesBody: "这些地区往往同时具备来华留学需求、中文学习意愿、与中国贸易/技术/区域合作的现实连接。",
    countryGroups: ["东南亚：越南、泰国、印尼、马来西亚、老挝", "东北亚：韩国、日本、蒙古", "中亚与欧亚：哈萨克斯坦、俄罗斯、土耳其", "南亚与一带一路伙伴：巴基斯坦、孟加拉、尼泊尔、斯里兰卡"],
    pathTitle: "SilkStudy 如何帮助学生",
    pathSteps: ["匹配学校、城市、专业、预算和奖学金路线。", "核验学校官网招生简章和奖学金通知。", "准备语言、CSCA、材料、时间线和签证步骤。", "让学生不只是被录取，也真正准备好在中国生活。"],
    finalTitle: "用真实方案把学生带到中国。",
    finalBody: "奖学金是入口，更深层的目标是交流：让更多学生学习中文、亲眼看见中国，并建立长期友谊与合作。",
    exchangeLabel: "交流"
  },
  vi: {
    eyebrow: "Du học Trung Quốc, chia sẻ cơ hội phát triển",
    title: "Học bổng có thể giúp du học Trung Quốc rất dễ tiếp cận.",
    subtitle: "Một số học bổng chính thức có thể miễn học phí và hỗ trợ ký túc xá hoặc sinh hoạt phí. SilkStudy giúp học sinh tận dụng cơ hội này để học tiếng Trung, vào đại học Trung Quốc và kết nối với Trung Quốc thật sự.",
    scholarshipBadge: "Một số học bổng toàn phần hoặc giá trị cao có thể gồm học phí, chỗ ở và sinh hoạt phí; cần xác minh theo thông báo từng trường.",
    browse: "Xem trường",
    consult: "Tư vấn miễn phí",
    scholarshipCta: "Xem học bổng",
    searchPlaceholder: "Tìm trường, ngành, thành phố hoặc học bổng",
    stats: [["Loại học bổng", "quốc gia, tỉnh/thành, trường, chuyên biệt"], ["Danh mục trường", "đại học Trung Quốc cho sinh viên quốc tế"], ["Đối tượng", "học sinh muốn đến Trung Quốc và học tiếng Trung"]],
    missionTitle: "Vì sao chúng tôi xây dựng SilkStudy",
    missionBody: "Chúng tôi muốn nhiều bạn trẻ hiểu Trung Quốc ngày nay qua trường học, thành phố, công nghệ, văn hóa và đời sống thật. Du học không chỉ là bằng cấp, mà còn là cây cầu cho ngôn ngữ, niềm tin và hợp tác lâu dài.",
    reasonsTitle: "Vì sao nên chọn Trung Quốc lúc này",
    reasonsBody: "Sự phát triển chất lượng cao của Trung Quốc có thể được nhìn thấy trong tàu cao tốc, thanh toán số, AI, năng lượng mới, sản xuất thông minh, đời sống đô thị an toàn và hệ thống học bổng hấp dẫn.",
    reasons: [
      { icon: Award, title: "Học bổng phong phú", body: "CSC, học bổng tỉnh/thành, trường và chương trình chuyên biệt có thể giảm mạnh chi phí." },
      { icon: Rocket, title: "Phát triển nhanh và chất lượng", body: "Trung Quốc là lớp học thực tế về AI, năng lượng mới, thương mại điện tử và hạ tầng hiện đại." },
      { icon: BookOpen, title: "Lợi thế tiếng Trung", body: "Học tiếng Trung tại Trung Quốc tạo lợi thế về ngôn ngữ, văn hóa và nghề nghiệp." },
      { icon: ShieldCheck, title: "Đời sống ổn định", body: "Giao thông, quản lý trường và dịch vụ đô thị giúp gia đình yên tâm hơn." }
    ],
    scholarshipTitle: "Học bổng là sức hút rất lớn",
    scholarshipBody: "Với nhiều gia đình, một trường Trung Quốc tốt cộng học bổng cao có thể thực tế hơn nhiều so với tuyến tự túc đắt đỏ.",
    scholarshipPoints: ["Có học bổng miễn học phí.", "Có học bổng hỗ trợ ký túc xá hoặc sinh hoạt.", "Học bổng địa phương/trường có thể giảm áp lực năm đầu.", "Cần kiểm tra thông báo chính thức từng năm."],
    countriesTitle: "Thị trường học sinh ưu tiên",
    countriesBody: "Các khu vực này thường có nhu cầu giáo dục chất lượng với chi phí hợp lý và quan tâm đến tiếng Trung, thương mại, công nghệ hoặc hợp tác khu vực.",
    countryGroups: ["Đông Nam Á: Việt Nam, Thái Lan, Indonesia, Malaysia, Lào", "Đông Bắc Á: Hàn Quốc, Nhật Bản, Mông Cổ", "Trung Á và Á-Âu: Kazakhstan, Nga, Thổ Nhĩ Kỳ", "Nam Á và đối tác Vành đai-Con đường: Pakistan, Bangladesh, Nepal, Sri Lanka"],
    pathTitle: "SilkStudy hỗ trợ như thế nào",
    pathSteps: ["Ghép trường, thành phố, ngành, ngân sách và học bổng.", "Xác minh thông báo tuyển sinh và học bổng chính thức.", "Chuẩn bị ngôn ngữ, CSCA, hồ sơ, thời gian và visa.", "Giúp học sinh sẵn sàng cho đời sống tại Trung Quốc."],
    finalTitle: "Đưa học sinh đến Trung Quốc bằng kế hoạch thật.",
    finalBody: "Học bổng là cánh cửa. Mục tiêu sâu hơn là giao lưu: học tiếng Trung, nhìn thấy Trung Quốc bằng mắt mình và xây dựng tình bạn.",
    exchangeLabel: "Giao lưu"
  },
  ko: {
    eyebrow: "중국 유학, 중국 성장의 기회를 함께 누리다",
    title: "중국 유학은 장학금으로 학비 부담을 크게 낮출 수 있습니다.",
    subtitle: "일부 공식 장학금은 등록금 면제와 기숙사 또는 생활비 지원까지 포함할 수 있습니다. SilkStudy는 학생들이 중국어를 배우고 중국 대학에 진학하며 중국과 세계를 잇는 교류를 만들도록 돕습니다.",
    scholarshipBadge: "고액 또는 전액 장학금은 등록금, 숙소, 생활비를 포함할 수 있으며 최종 조건은 매년 학교 공지를 확인해야 합니다.",
    browse: "대학 보기",
    consult: "무료 상담",
    scholarshipCta: "장학금 보기",
    searchPlaceholder: "대학, 전공, 도시 또는 장학금 검색",
    stats: [["장학금", "국가, 지역, 학교, 특별 프로그램"], ["대학 목록", "국제학생 대상 중국 대학"], ["대상 학생", "중국과 중국어에 관심 있는 학생"]],
    missionTitle: "SilkStudy의 목적",
    missionBody: "더 많은 젊은이들이 오늘의 중국을 직접 이해하길 바랍니다. 대학, 도시, 기술, 문화, 생활을 경험하는 유학은 학위 이상의 일이며, 중국과 각국 사이의 신뢰와 협력을 만드는 다리입니다.",
    reasonsTitle: "지금 중국을 선택하는 이유",
    reasonsBody: "중국의 고속·고품질 발전은 실제 생활에서 보입니다. 고속철도, 모바일 결제, AI, 신에너지, 스마트 제조, 안전한 도시 생활과 장학금 시스템을 직접 경험할 수 있습니다.",
    reasons: [
      { icon: Award, title: "풍부한 장학금", body: "CSC, 지역, 학교, 특별 장학금이 학비와 생활비 부담을 크게 줄일 수 있습니다." },
      { icon: Rocket, title: "빠른 고품질 성장", body: "중국은 AI, 신에너지, 전자상거래, 인프라를 배우는 살아있는 교실입니다." },
      { icon: BookOpen, title: "중국어의 가치", body: "중국 현지에서 배우는 중국어는 문화와 커리어 경쟁력으로 이어집니다." },
      { icon: ShieldCheck, title: "안정적인 생활", body: "교통, 캠퍼스 관리, 도시 서비스가 학생과 가족에게 안정감을 줍니다." }
    ],
    scholarshipTitle: "장학금은 가장 큰 매력입니다",
    scholarshipBody: "좋은 중국 대학과 높은 장학금이 결합되면, 비싼 자비 유학보다 훨씬 현실적인 선택이 될 수 있습니다.",
    scholarshipPoints: ["일부 장학금은 등록금을 면제합니다.", "일부는 숙소 또는 생활비를 지원합니다.", "지역/학교 장학금은 첫해 부담을 낮춥니다.", "모든 장학금은 최신 공식 공지를 확인해야 합니다."],
    countriesTitle: "우선 학생 시장",
    countriesBody: "이 지역 학생들은 합리적 비용의 고품질 교육, 중국어, 중국 커리어와 지역 협력에 관심이 높습니다.",
    countryGroups: ["동남아: 베트남, 태국, 인도네시아, 말레이시아, 라오스", "동북아: 한국, 일본, 몽골", "중앙아시아와 유라시아: 카자흐스탄, 러시아, 튀르키예", "남아시아 및 일대일로 파트너: 파키스탄, 방글라데시, 네팔, 스리랑카"],
    pathTitle: "SilkStudy의 지원",
    pathSteps: ["학교, 도시, 전공, 예산, 장학금 경로를 매칭합니다.", "공식 모집요강과 장학금 공지를 확인합니다.", "언어, CSCA, 서류, 일정, 비자를 준비합니다.", "입학뿐 아니라 중국 생활 준비까지 돕습니다."],
    finalTitle: "실제 계획으로 학생을 중국으로 연결합니다.",
    finalBody: "장학금은 문을 여는 힘입니다. 더 깊은 목표는 중국어, 직접 경험, 우정과 협력입니다.",
    exchangeLabel: "교류"
  },
  th: {
    eyebrow: "เรียนต่อจีน และรับโอกาสจากการพัฒนาของจีน",
    title: "ทุนจีนสามารถทำให้ค่าเรียนและค่าครองชีพลดลงอย่างมาก",
    subtitle: "ทุนทางการบางประเภทอาจยกเว้นค่าเล่าเรียน และสนับสนุนที่พักหรือค่าครองชีพ SilkStudy ช่วยนักเรียนใช้โอกาสนี้เพื่อเรียนภาษาจีน เข้ามหาวิทยาลัยจีน และสร้างการแลกเปลี่ยนระหว่างประเทศ",
    scholarshipBadge: "ทุนเต็มจำนวนหรือทุนมูลค่าสูงบางรายการอาจครอบคลุมค่าเรียน ที่พัก และค่าครองชีพ ต้องตรวจสอบประกาศล่าสุดของแต่ละมหาวิทยาลัย",
    browse: "ดูมหาวิทยาลัย",
    consult: "ปรึกษาฟรี",
    scholarshipCta: "ดูทุนการศึกษา",
    searchPlaceholder: "ค้นหามหาวิทยาลัย สาขา เมือง หรือทุน",
    stats: [["เส้นทางทุน", "รัฐบาล มณฑล เมือง มหาวิทยาลัย และทุนพิเศษ"], ["รายชื่อมหาวิทยาลัย", "มหาวิทยาลัยจีนสำหรับนักศึกษาต่างชาติ"], ["นักเรียนเป้าหมาย", "ผู้ที่สนใจจีนและอยากเรียนภาษาจีน"]],
    missionTitle: "เหตุผลที่เราทำเว็บไซต์นี้",
    missionBody: "เราอยากให้เยาวชนจากหลายประเทศเข้าใจจีนยุคปัจจุบันโดยตรง ผ่านมหาวิทยาลัย เมือง เทคโนโลยี วัฒนธรรม และชีวิตจริง การเรียนต่อคือสะพานของภาษา ความเข้าใจ และความร่วมมือระยะยาว",
    reasonsTitle: "ทำไมตอนนี้จีนจึงน่าสนใจ",
    reasonsBody: "การพัฒนาคุณภาพสูงของจีนเห็นได้จากรถไฟความเร็วสูง การชำระเงินดิจิทัล AI พลังงานใหม่ การผลิตอัจฉริยะ เมืองที่ปลอดภัย และระบบทุนที่ดึงดูดนักเรียนจริงจัง",
    reasons: [
      { icon: Award, title: "ทุนหลากหลาย", body: "ทุนรัฐบาลจีน ทุนท้องถิ่น ทุนมหาวิทยาลัย และทุนพิเศษช่วยลดค่าใช้จ่ายได้มาก" },
      { icon: Rocket, title: "การพัฒนาเร็วและมีคุณภาพ", body: "จีนคือห้องเรียนจริงของ AI พลังงานใหม่ อีคอมเมิร์ซ และโครงสร้างพื้นฐานสมัยใหม่" },
      { icon: BookOpen, title: "ข้อได้เปรียบภาษาจีน", body: "การเรียนภาษาจีนในจีนช่วยเพิ่มโอกาสด้านภาษา วัฒนธรรม และอาชีพ" },
      { icon: ShieldCheck, title: "ชีวิตที่มั่นคง", body: "ระบบขนส่ง มหาวิทยาลัย และบริการเมืองช่วยให้ครอบครัวมั่นใจมากขึ้น" }
    ],
    scholarshipTitle: "ทุนการศึกษาเป็นแรงดึงดูดสำคัญ",
    scholarshipBody: "สำหรับหลายครอบครัว มหาวิทยาลัยจีนที่ดีพร้อมทุนสูงอาจเป็นทางเลือกที่เป็นจริงกว่าการเรียนต่างประเทศแบบจ่ายเองทั้งหมด",
    scholarshipPoints: ["บางทุนยกเว้นค่าเล่าเรียน", "บางทุนรวมที่พักหรือค่าครองชีพ", "ทุนเมืองและมหาวิทยาลัยช่วยลดภาระปีแรก", "ต้องตรวจสอบประกาศล่าสุดทุกปี"],
    countriesTitle: "ตลาดนักเรียนที่ควรให้ความสำคัญ",
    countriesBody: "ภูมิภาคเหล่านี้มีความต้องการการศึกษาคุณภาพในราคาที่เข้าถึงได้ และสนใจภาษาจีน เทคโนโลยี การค้า หรือความร่วมมือกับจีน",
    countryGroups: ["เอเชียตะวันออกเฉียงใต้: เวียดนาม ไทย อินโดนีเซีย มาเลเซีย ลาว", "เอเชียตะวันออกเฉียงเหนือ: เกาหลี ญี่ปุ่น มองโกเลีย", "เอเชียกลางและยูเรเชีย: คาซัคสถาน รัสเซีย ตุรกี", "เอเชียใต้และพันธมิตร BRI: ปากีสถาน บังกลาเทศ เนปาล ศรีลังกา"],
    pathTitle: "SilkStudy ช่วยอย่างไร",
    pathSteps: ["จับคู่มหาวิทยาลัย เมือง สาขา งบประมาณ และทุน", "ตรวจสอบประกาศทางการของมหาวิทยาลัย", "เตรียมภาษา CSCA เอกสาร เวลา และวีซ่า", "ช่วยให้นักเรียนพร้อมใช้ชีวิตในจีน"],
    finalTitle: "พานักเรียนไปจีนด้วยแผนที่เป็นจริง",
    finalBody: "ทุนคือประตูแรก เป้าหมายที่ลึกกว่าคือการแลกเปลี่ยน ภาษา มิตรภาพ และความร่วมมือ",
    exchangeLabel: "การแลกเปลี่ยน"
  },
  id: {
    eyebrow: "Studi di Tiongkok, ikut merasakan peluang pertumbuhannya",
    title: "Beasiswa dapat membuat studi di Tiongkok jauh lebih terjangkau.",
    subtitle: "Sebagian beasiswa resmi dapat membebaskan biaya kuliah dan memberi dukungan asrama atau biaya hidup. SilkStudy membantu siswa memakai peluang ini untuk belajar bahasa Mandarin, masuk universitas Tiongkok, dan membangun pertukaran nyata.",
    scholarshipBadge: "Beasiswa penuh atau bernilai tinggi dapat mencakup kuliah, tempat tinggal, dan tunjangan hidup; syarat akhir harus dicek tiap sekolah dan tahun.",
    browse: "Lihat universitas",
    consult: "Konsultasi gratis",
    scholarshipCta: "Lihat beasiswa",
    searchPlaceholder: "Cari universitas, jurusan, kota, atau beasiswa",
    stats: [["Jalur beasiswa", "nasional, provinsi, kota, universitas, khusus"], ["Katalog kampus", "universitas Tiongkok untuk mahasiswa internasional"], ["Target siswa", "ingin ke Tiongkok dan belajar Mandarin"]],
    missionTitle: "Tujuan SilkStudy",
    missionBody: "Kami ingin lebih banyak anak muda memahami Tiongkok hari ini secara langsung: universitas, kota, teknologi, budaya, dan kehidupan nyata. Studi luar negeri adalah jembatan bahasa, kepercayaan, dan kerja sama jangka panjang.",
    reasonsTitle: "Mengapa memilih Tiongkok sekarang",
    reasonsBody: "Perkembangan berkualitas Tiongkok terlihat dalam kereta cepat, pembayaran digital, AI, energi baru, manufaktur cerdas, kota aman, dan sistem beasiswa yang menarik.",
    reasons: [
      { icon: Award, title: "Beasiswa kaya pilihan", body: "CSC, beasiswa daerah, kampus, dan program khusus dapat sangat mengurangi biaya." },
      { icon: Rocket, title: "Pertumbuhan cepat berkualitas", body: "Tiongkok adalah kelas nyata untuk AI, energi baru, e-commerce, dan infrastruktur modern." },
      { icon: BookOpen, title: "Keunggulan Mandarin", body: "Belajar Mandarin di Tiongkok memberi keuntungan bahasa, budaya, dan karier." },
      { icon: ShieldCheck, title: "Kehidupan stabil", body: "Transportasi, layanan kota, dan kampus yang tertata membantu keluarga merasa aman." }
    ],
    scholarshipTitle: "Beasiswa adalah daya tarik besar",
    scholarshipBody: "Bagi banyak keluarga, universitas Tiongkok yang baik ditambah beasiswa besar bisa lebih realistis daripada jalur mandiri yang mahal.",
    scholarshipPoints: ["Sebagian beasiswa membebaskan biaya kuliah.", "Sebagian mencakup asrama atau tunjangan hidup.", "Beasiswa kota/kampus mengurangi tekanan tahun pertama.", "Semua harus dicek dengan pengumuman resmi terbaru."],
    countriesTitle: "Pasar siswa prioritas",
    countriesBody: "Wilayah ini sering menggabungkan kebutuhan pendidikan berkualitas yang terjangkau dengan minat pada Mandarin, karier Tiongkok, perdagangan, teknologi, dan kerja sama regional.",
    countryGroups: ["Asia Tenggara: Vietnam, Thailand, Indonesia, Malaysia, Laos", "Asia Timur Laut: Korea, Jepang, Mongolia", "Asia Tengah dan Eurasia: Kazakhstan, Rusia, Turki", "Asia Selatan dan mitra BRI: Pakistan, Bangladesh, Nepal, Sri Lanka"],
    pathTitle: "Cara SilkStudy membantu",
    pathSteps: ["Mencocokkan kampus, kota, jurusan, anggaran, dan beasiswa.", "Memverifikasi panduan resmi penerimaan dan beasiswa.", "Menyiapkan bahasa, CSCA, dokumen, jadwal, dan visa.", "Membantu siswa siap hidup di Tiongkok."],
    finalTitle: "Bawa siswa ke Tiongkok dengan rencana nyata.",
    finalBody: "Beasiswa membuka pintu. Tujuan lebih dalamnya adalah pertukaran, bahasa, persahabatan, dan kerja sama.",
    exchangeLabel: "Pertukaran"
  },
  ru: {
    eyebrow: "Учеба в Китае и участие в его развитии",
    title: "Стипендии могут сделать учебу в Китае очень доступной.",
    subtitle: "Некоторые официальные стипендии покрывают обучение и дают поддержку на проживание или общежитие. SilkStudy помогает студентам использовать этот шанс, изучать китайский язык и поступать в китайские университеты.",
    scholarshipBadge: "Полные или крупные стипендии могут покрывать обучение, жилье и стипендию на жизнь. Условия нужно проверять по официальному объявлению университета.",
    browse: "Смотреть университеты",
    consult: "Бесплатная консультация",
    scholarshipCta: "Смотреть стипендии",
    searchPlaceholder: "Поиск университета, направления, города или стипендии",
    stats: [["Типы стипендий", "государственные, региональные, городские, университетские, специальные"], ["Каталог вузов", "китайские университеты для иностранных студентов"], ["Целевая аудитория", "студенты, интересующиеся Китаем и китайским языком"]],
    missionTitle: "Зачем мы создали SilkStudy",
    missionBody: "Мы хотим, чтобы больше молодых людей напрямую понимали современный Китай: университеты, города, технологии, культуру и повседневную жизнь. Учеба за рубежом — это мост доверия, языка и долгосрочного сотрудничества.",
    reasonsTitle: "Почему Китай стоит выбрать сейчас",
    reasonsBody: "Высококачественное развитие Китая видно в скоростных поездах, цифровых платежах, ИИ, новой энергетике, умном производстве, безопасных городах и сильной системе стипендий.",
    reasons: [
      { icon: Award, title: "Много стипендий", body: "CSC, региональные, университетские и специальные стипендии могут значительно снизить расходы." },
      { icon: Rocket, title: "Быстрое развитие", body: "Китай — практическая среда для ИИ, новой энергетики, электронной коммерции и инфраструктуры." },
      { icon: BookOpen, title: "Преимущество китайского", body: "Изучение китайского в Китае дает языковое, культурное и карьерное преимущество." },
      { icon: ShieldCheck, title: "Стабильная жизнь", body: "Транспорт, кампусы и городские сервисы делают учебу более спокойной для студентов и семей." }
    ],
    scholarshipTitle: "Стипендии — сильный стимул",
    scholarshipBody: "Для многих семей хороший китайский университет плюс крупная стипендия реалистичнее, чем дорогая самостоятельная учеба в другой стране.",
    scholarshipPoints: ["Некоторые стипендии покрывают обучение.", "Некоторые включают жилье или поддержку на жизнь.", "Городские и университетские стипендии снижают нагрузку первого года.", "Каждую стипендию нужно проверять по свежему официальному объявлению."],
    countriesTitle: "Приоритетные рынки студентов",
    countriesBody: "В этих регионах часто сочетаются интерес к доступному качественному образованию, китайскому языку, торговле, технологиям и сотрудничеству с Китаем.",
    countryGroups: ["Юго-Восточная Азия: Вьетнам, Таиланд, Индонезия, Малайзия, Лаос", "Северо-Восточная Азия: Корея, Япония, Монголия", "Центральная Азия и Евразия: Казахстан, Россия, Турция", "Южная Азия и партнеры BRI: Пакистан, Бангладеш, Непал, Шри-Ланка"],
    pathTitle: "Как помогает SilkStudy",
    pathSteps: ["Подбираем университет, город, направление, бюджет и стипендию.", "Проверяем официальные правила приема и стипендий.", "Готовим язык, CSCA, документы, сроки и визу.", "Помогаем подготовиться к реальной жизни в Китае."],
    finalTitle: "Привести студента в Китай с реальным планом.",
    finalBody: "Стипендия открывает дверь. Более глубокая цель — обмен, язык, дружба и сотрудничество.",
    exchangeLabel: "Обмен"
  },
  tr: {
    eyebrow: "Çin'de oku, Çin'in gelişim fırsatlarını paylaş",
    title: "Burslar Çin'de eğitimi şaşırtıcı derecede erişilebilir kılabilir.",
    subtitle: "Bazı resmi burslar öğrenim ücretini kaldırabilir, yurt veya yaşam desteği sağlayabilir. SilkStudy öğrencilerin bu fırsatla Çince öğrenmesine, Çin üniversitelerine girmesine ve gerçek kültürel değişim kurmasına yardımcı olur.",
    scholarshipBadge: "Tam veya yüksek değerli burslar öğrenim, konaklama ve yaşam desteği içerebilir. Son şartlar okul ve yıl bazında doğrulanmalıdır.",
    browse: "Üniversitelere bak",
    consult: "Ücretsiz danışmanlık",
    scholarshipCta: "Bursları keşfet",
    searchPlaceholder: "Üniversite, bölüm, şehir veya burs ara",
    stats: [["Burs yolları", "ulusal, bölgesel, şehir, üniversite ve özel"], ["Okul kataloğu", "uluslararası öğrenciler için Çin üniversiteleri"], ["Hedef öğrenciler", "Çin'e gelmek ve Çince öğrenmek isteyenler"]],
    missionTitle: "SilkStudy neden var",
    missionBody: "Daha fazla gencin bugünün Çin'ini doğrudan anlamasını istiyoruz: üniversiteler, şehirler, teknoloji, kültür ve günlük yaşam. Yurtdışı eğitim sadece diploma değil, dil, güven ve uzun vadeli iş birliği köprüsüdür.",
    reasonsTitle: "Neden şimdi Çin",
    reasonsBody: "Çin'in yüksek kaliteli gelişimi hızlı tren, dijital ödeme, yapay zeka, yeni enerji, akıllı üretim, güvenli şehir yaşamı ve güçlü burs sistemiyle doğrudan görülebilir.",
    reasons: [
      { icon: Award, title: "Zengin burs seçenekleri", body: "CSC, yerel, üniversite ve özel burslar eğitim maliyetini ciddi biçimde düşürebilir." },
      { icon: Rocket, title: "Hızlı kaliteli gelişim", body: "Çin; yapay zeka, yeni enerji, e-ticaret ve modern altyapı için canlı bir sınıftır." },
      { icon: BookOpen, title: "Çince avantajı", body: "Çinceyi Çin'de öğrenmek dil, kültür ve kariyer avantajı sağlar." },
      { icon: ShieldCheck, title: "Düzenli yaşam", body: "Ulaşım, kampüs yönetimi ve şehir hizmetleri öğrenci ve ailelere güven verir." }
    ],
    scholarshipTitle: "Burs en büyük çekim noktalarından biridir",
    scholarshipBody: "Birçok aile için iyi bir Çin üniversitesi ve güçlü burs, pahalı tamamen ücretli seçeneklerden daha gerçekçi olabilir.",
    scholarshipPoints: ["Bazı burslar öğrenim ücretini kaldırır.", "Bazıları yurt veya yaşam desteği içerir.", "Şehir ve okul bursları ilk yıl baskısını azaltır.", "Her burs güncel resmi duyurudan kontrol edilmelidir."],
    countriesTitle: "Öncelikli öğrenci pazarları",
    countriesBody: "Bu bölgelerde uygun maliyetli kaliteli eğitim, Çince, Çin kariyerleri, ticaret, teknoloji ve bölgesel iş birliği ilgisi birlikte görülür.",
    countryGroups: ["Güneydoğu Asya: Vietnam, Tayland, Endonezya, Malezya, Laos", "Kuzeydoğu Asya: Kore, Japonya, Moğolistan", "Orta Asya ve Avrasya: Kazakistan, Rusya, Türkiye", "Güney Asya ve BRI ortakları: Pakistan, Bangladeş, Nepal, Sri Lanka"],
    pathTitle: "SilkStudy nasıl yardımcı olur",
    pathSteps: ["Okul, şehir, bölüm, bütçe ve burs yolunu eşleştirir.", "Resmi kabul ve burs duyurularını doğrular.", "Dil, CSCA, belge, takvim ve vize adımlarını hazırlar.", "Öğrenciyi sadece kabule değil Çin'de yaşama da hazırlar."],
    finalTitle: "Öğrenciyi gerçek bir planla Çin'e getir.",
    finalBody: "Burs kapıyı açar. Daha derin hedef ise değişimdir: Çince öğrenmek, Çin'i yerinde görmek, dostluk ve iş birliği kurmak.",
    exchangeLabel: "Değişim"
  }
};

function getCopy(locale: string) {
  return copy[locale] ?? copy.en;
}

type PromotionCopy = {
  label: string;
  title: string;
  body: string;
  cards: { icon: LucideIcon; title: string; body: string; href: string }[];
  shareTitle: string;
  shareLines: string[];
  ambassadorTitle: string;
  ambassadorBody: string;
  ambassadorCta: string;
  consultCta: string;
};

type CultureBridgeCopy = {
  title: string;
  body: string;
  cta: string;
  points: string[];
};

const promotionCopy: Record<string, PromotionCopy> = {
  en: {
    label: "Global Growth",
    title: "Built to spread among young people.",
    body: "SilkStudy should be easy to share in a group chat, a short video caption, a school community, or a language-learning circle. The message is simple: China is close, modern, affordable, and full of scholarships.",
    cards: [
      { icon: MessageCircle, title: "Group-chat ready", body: "Clear scholarship hooks and city pages that students can send to friends, parents, teachers, and agents.", href: "/scholarships" },
      { icon: Share2, title: "Social story friendly", body: "Young people can share cities, check-ins, reviews, and cultural exchange moments, not only admission information.", href: "/global-checkin" },
      { icon: Languages, title: "Language-first growth", body: "Students who already learn Chinese, or want to start, get a stronger reason to choose China now.", href: "/life" },
      { icon: UsersRound, title: "Community trust", body: "Real questions, comments, check-ins, and exchange posts can make the platform feel alive across countries.", href: "/community" }
    ],
    shareTitle: "Short messages for promotion",
    shareLines: [
      "Study in China can be more affordable than you think. Scholarships may cover tuition, housing, and living support.",
      "Learn Chinese in China, discover modern cities, and build a future connected to the world's fastest-changing market.",
      "SilkStudy helps students compare universities, cities, majors, scholarships, and free consultation routes."
    ],
    ambassadorTitle: "Invite global youth ambassadors",
    ambassadorBody: "Let the first students from each country check in, introduce their home culture, and become visible bridges between China and their communities.",
    ambassadorCta: "Join global check-in",
    consultCta: "Ask about China study"
  },
  zh: {
    label: "全球推广",
    title: "让全球年轻人愿意转发、愿意咨询、愿意来到中国。",
    body: "SilkStudy 的传播重点要简单有力：来中国不只是留学，也是学习中文、看到高速发展的中国、认识朋友、获得奖学金机会，并把人生打开到更大的世界。",
    cards: [
      { icon: MessageCircle, title: "适合群聊传播", body: "奖学金、免学费、城市生活、大学选择都要能被学生转发给朋友、家长、老师和中介。", href: "/scholarships" },
      { icon: Share2, title: "适合短视频表达", body: "不仅讲录取，也讲城市打卡、学生生活、国家文化交换和真实体验。", href: "/global-checkin" },
      { icon: Languages, title: "抓住中文学习人群", body: "已经学中文或想学中文的年轻人，是最容易被中国机会打动的一批学生。", href: "/life" },
      { icon: UsersRound, title: "用社区建立信任", body: "打卡、留言、评论、物品交换和真实咨询，会让网站像一个活的全球青年社区。", href: "/community" }
    ],
    shareTitle: "适合推广时使用的短句",
    shareLines: [
      "来中国留学，奖学金可能覆盖学费、住宿，甚至生活补助。",
      "在中国学习中文，亲眼看到高速发展的城市、科技和真实生活。",
      "SilkStudy 帮你比较中国大学、城市、专业、奖学金，并获得免费咨询。"
    ],
    ambassadorTitle: "邀请全球青年成为第一批国家打卡者",
    ambassadorBody: "让每个国家的第一个学生点亮地图，介绍自己的国家，也成为连接中国与本国青年社区的桥梁。",
    ambassadorCta: "去全球打卡",
    consultCta: "咨询中国留学"
  },
  vi: {
    label: "Tăng trưởng toàn cầu",
    title: "Dễ chia sẻ cho bạn trẻ toàn cầu.",
    body: "Thông điệp cần rõ ràng: Trung Quốc hiện đại, gần gũi, nhiều học bổng, phù hợp để học tiếng Trung và mở rộng tương lai.",
    cards: [
      { icon: MessageCircle, title: "Dễ gửi trong nhóm chat", body: "Học bổng, miễn học phí, thành phố và trường học được trình bày để học sinh dễ gửi cho gia đình.", href: "/scholarships" },
      { icon: Share2, title: "Hợp với mạng xã hội", body: "Không chỉ tuyển sinh, mà còn có check-in, đời sống, văn hóa và trải nghiệm thật.", href: "/global-checkin" },
      { icon: Languages, title: "Tập trung vào tiếng Trung", body: "Những bạn đã học hoặc muốn học tiếng Trung có lý do mạnh hơn để chọn Trung Quốc.", href: "/life" },
      { icon: UsersRound, title: "Xây dựng niềm tin", body: "Câu hỏi, bình luận, check-in và trao đổi văn hóa giúp nền tảng sống động hơn.", href: "/community" }
    ],
    shareTitle: "Câu ngắn để quảng bá",
    shareLines: [
      "Du học Trung Quốc có thể dễ tiếp cận hơn bạn nghĩ nhờ học bổng.",
      "Học tiếng Trung tại Trung Quốc và trải nghiệm các thành phố hiện đại.",
      "SilkStudy giúp so sánh trường, ngành, thành phố, học bổng và tư vấn miễn phí."
    ],
    ambassadorTitle: "Mời đại sứ trẻ toàn cầu",
    ambassadorBody: "Sinh viên đầu tiên từ mỗi quốc gia có thể check-in, giới thiệu quê hương và kết nối cộng đồng với Trung Quốc.",
    ambassadorCta: "Check-in toàn cầu",
    consultCta: "Hỏi tư vấn"
  },
  ru: {
    label: "Глобальное продвижение",
    title: "Платформа, которую молодые люди захотят пересылать.",
    body: "Главная идея проста: Китай современный, доступный, связан с будущими профессиями и предлагает реальные стипендии.",
    cards: [
      { icon: MessageCircle, title: "Готово для чатов", body: "Стипендии, города и университеты можно быстро отправить друзьям, семье или преподавателям.", href: "/scholarships" },
      { icon: Share2, title: "Подходит для соцсетей", body: "Можно делиться городами, чек-инами, отзывами и культурным обменом.", href: "/global-checkin" },
      { icon: Languages, title: "Рост через китайский язык", body: "Тем, кто учит китайский или хочет начать, легче увидеть ценность учебы в Китае.", href: "/life" },
      { icon: UsersRound, title: "Доверие через сообщество", body: "Вопросы, комментарии и чек-ины делают сайт живым международным пространством.", href: "/community" }
    ],
    shareTitle: "Короткие тексты для продвижения",
    shareLines: [
      "Учеба в Китае может быть доступнее благодаря стипендиям.",
      "Изучай китайский в Китае и увидь современные города своими глазами.",
      "SilkStudy помогает сравнить вузы, города, направления, стипендии и консультации."
    ],
    ambassadorTitle: "Пригласить молодежных амбассадоров",
    ambassadorBody: "Первые студенты из каждой страны могут отметить себя на карте и стать мостом между Китаем и своим сообществом.",
    ambassadorCta: "Глобальный чек-ин",
    consultCta: "Задать вопрос"
  },
  tr: {
    label: "Küresel büyüme",
    title: "Gençlerin paylaşmak isteyeceği şekilde tasarlandı.",
    body: "Mesaj net: Çin modern, ulaşılabilir, burslarla güçlü ve Çince öğrenmek isteyen gençler için gerçek bir gelecek kapısı.",
    cards: [
      { icon: MessageCircle, title: "Sohbet gruplarına uygun", body: "Burs, şehir ve üniversite bilgileri öğrencilerin ailesine ve arkadaşlarına gönderebileceği kadar nettir.", href: "/scholarships" },
      { icon: Share2, title: "Sosyal medyaya uygun", body: "Sadece kabul değil; şehirler, check-in, yorumlar ve kültürel değişim de paylaşılır.", href: "/global-checkin" },
      { icon: Languages, title: "Çince odaklı büyüme", body: "Çince öğrenen veya öğrenmek isteyen gençler için Çin daha güçlü bir seçenek olur.", href: "/life" },
      { icon: UsersRound, title: "Topluluk güveni", body: "Sorular, yorumlar ve check-inler platformu yaşayan bir gençlik alanına dönüştürür.", href: "/community" }
    ],
    shareTitle: "Tanıtım için kısa cümleler",
    shareLines: [
      "Çin'de okumak burslarla düşündüğünden daha erişilebilir olabilir.",
      "Çinceyi Çin'de öğren, modern şehirleri gör ve geleceğini Çin'le bağla.",
      "SilkStudy üniversite, şehir, bölüm, burs ve ücretsiz danışmanlığı karşılaştırmana yardımcı olur."
    ],
    ambassadorTitle: "Küresel gençlik elçilerini davet et",
    ambassadorBody: "Her ülkeden ilk öğrenciler haritada check-in yapabilir, kültürünü tanıtabilir ve Çin'le köprü kurabilir.",
    ambassadorCta: "Küresel check-in",
    consultCta: "Danışmanlık al"
  }
};

const cultureBridgeCopy: Record<string, CultureBridgeCopy> = {
  en: {
    title: "For young people who love Chinese culture.",
    body: "Some students first meet China through music, dramas, food, festivals, kung fu, tea, calligraphy, games, high-speed rail, or a Chinese friend. SilkStudy gives that curiosity a place to grow.",
    cta: "Discover Chinese culture",
    points: ["Chinese language", "Festivals and food", "Modern cities", "Youth exchange"]
  },
  zh: {
    title: "给所有喜欢中国文化的年轻人。",
    body: "有些学生是因为音乐、影视、美食、节日、功夫、茶、书法、游戏、高铁或一个中国朋友开始喜欢中国。SilkStudy 要给这种好奇心一个继续生长的地方。",
    cta: "了解中国文化",
    points: ["中文语言", "节日与美食", "现代城市", "青年交流"]
  },
  vi: {
    title: "Dành cho bạn trẻ yêu văn hóa Trung Quốc.",
    body: "Nhiều bạn bắt đầu yêu Trung Quốc từ âm nhạc, phim, món ăn, lễ hội, trà, thư pháp, tàu cao tốc hoặc một người bạn Trung Quốc. SilkStudy giúp sự tò mò đó phát triển.",
    cta: "Khám phá văn hóa Trung Quốc",
    points: ["Tiếng Trung", "Lễ hội và ẩm thực", "Thành phố hiện đại", "Giao lưu trẻ"]
  },
  ru: {
    title: "Для молодежи, которая любит китайскую культуру.",
    body: "Интерес к Китаю может начаться с музыки, дорам, еды, праздников, чая, каллиграфии, скоростных поездов или китайского друга. SilkStudy помогает этому интересу расти.",
    cta: "Открыть культуру Китая",
    points: ["Китайский язык", "Праздники и еда", "Современные города", "Молодежный обмен"]
  },
  tr: {
    title: "Çin kültürünü seven gençler için.",
    body: "Birçok genç Çin'i müzik, dizi, yemek, festivaller, çay, kaligrafi, hızlı tren veya Çinli bir arkadaşla sevmeye başlar. SilkStudy bu merakı büyütür.",
    cta: "Çin kültürünü keşfet",
    points: ["Çince", "Festival ve yemek", "Modern şehirler", "Gençlik değişimi"]
  }
};

function getPromotionCopy(locale: string, base: LocaleCopy): PromotionCopy {
  if (promotionCopy[locale]) return promotionCopy[locale];

  return {
    label: base.exchangeLabel,
    title: base.finalTitle,
    body: base.finalBody,
    cards: base.reasons.map((reason, index) => ({
      icon: reason.icon,
      title: reason.title,
      body: reason.body,
      href: ["/scholarships", "/global-checkin", "/life", "/community"][index] ?? "/consultation"
    })),
    shareTitle: base.scholarshipTitle,
    shareLines: base.scholarshipPoints.slice(0, 3),
    ambassadorTitle: base.countriesTitle,
    ambassadorBody: base.countriesBody,
    ambassadorCta: base.exchangeLabel,
    consultCta: base.consult
  };
}

function getCultureBridgeCopy(locale: string, base: LocaleCopy): CultureBridgeCopy {
  return cultureBridgeCopy[locale] ?? {
    title: base.missionTitle,
    body: base.missionBody,
    cta: base.exchangeLabel,
    points: base.stats.map(([value]) => value)
  };
}

export default async function HomePage() {
  const locale = await getCurrentLocale();
  const c = getCopy(locale);
  const promo = getPromotionCopy(locale, c);
  const culture = getCultureBridgeCopy(locale, c);
  const prefix = localePrefix(locale);
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;
  const allUniversities = await getAllUniversitiesView();

  return (
    <main>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/campus-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 border-l-2 border-secondary pl-3 text-sm font-semibold uppercase tracking-wide text-cyan-100">
              <Globe2 size={16} aria-hidden="true" />
              {c.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">{c.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">{c.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localize("/universities")}>{c.browse}</ButtonLink>
              <ButtonLink href={localize("/consultation")} variant="secondary">{c.consult}</ButtonLink>
              <ButtonLink href={localize("/scholarships")} variant="ghost">{c.scholarshipCta}</ButtonLink>
            </div>
            <div className="mt-8 max-w-2xl">
              <SearchPanel locale={locale} />
            </div>
          </div>
          <aside className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur">
            <Award size={32} className="text-secondary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">{c.scholarshipTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-100">{c.scholarshipBody}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-100">
              {c.scholarshipPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {c.stats.map(([value, label]) => (
            <div key={value} className="bg-white py-7">
              <p className="text-2xl font-bold text-ink">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{c.missionTitle}</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-ink lg:text-6xl">{c.reasonsTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{c.missionBody}</p>
            <p className="mt-5 text-base leading-7 text-slate-600">{c.reasonsBody}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.reasons.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-primary">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-slate-200 p-6">
            <Building2 size={28} className="text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold text-ink">{c.countriesTitle}</h2>
            <p className="mt-4 leading-7 text-slate-600">{c.countriesBody}</p>
            <div className="mt-6 grid gap-3">
              {c.countryGroups.map((group) => (
                <p key={group} className="rounded-md bg-surface px-4 py-3 text-sm font-semibold text-slate-700">{group}</p>
              ))}
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 p-6">
            <Handshake size={28} className="text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold text-ink">{c.pathTitle}</h2>
            <ol className="mt-6 grid gap-4">
              {c.pathSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">{index + 1}</span>
                  <p className="pt-1 text-sm font-semibold leading-6 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{c.exchangeLabel}</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-ink">{culture.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{culture.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {culture.points.map((point) => (
                <span key={point} className="rounded-md bg-blue-50 px-3 py-2 text-sm font-bold text-primary">{point}</span>
              ))}
            </div>
            <div className="mt-7">
              <ButtonLink href={localize("/culture")}>{culture.cta}</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/student-city-life.png" alt="" className="h-full min-h-[320px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">{promo.label}</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-ink">{promo.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{promo.body}</p>
              <div className="mt-7 rounded-lg border border-slate-200 bg-white p-5">
                <Share2 size={24} className="text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-bold text-ink">{promo.shareTitle}</h3>
                <div className="mt-4 grid gap-3">
                  {promo.shareLines.map((line) => (
                    <p key={line} className="rounded-md bg-blue-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700">{line}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {promo.cards.map(({ icon: Icon, title, body, href }) => (
                <a key={title} href={localize(href)} className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-5 rounded-lg bg-slate-950 p-6 text-white md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{promo.ambassadorTitle}</p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">{promo.ambassadorBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={localize("/global-checkin")} variant="secondary">{promo.ambassadorCta}</ButtonLink>
              <ButtonLink href={localize("/consultation")} variant="ghost">{promo.consultCta}</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            [TrainFront, `${allUniversities.length}+`, c.stats[1][1]],
            [Map, `${provinces.length}`, c.stats[0][1]],
            [Landmark, "CSC", c.scholarshipPoints[0]],
            [HeartHandshake, c.exchangeLabel, c.finalBody]
          ].map(([Icon, value, label]) => {
            const Visual = Icon as LucideIcon;
            return (
              <div key={String(value)} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <Visual size={24} className="text-secondary" aria-hidden="true" />
                <p className="mt-4 text-2xl font-bold">{String(value)}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{String(label)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">{c.finalTitle}</h2>
            <p className="mt-3 max-w-2xl text-blue-100">{c.finalBody}</p>
          </div>
          <ButtonLink href={localize("/consultation")} variant="secondary">{c.consult}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
