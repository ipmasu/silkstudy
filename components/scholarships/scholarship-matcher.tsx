"use client";

import { useMemo, useState } from "react";
import { Award, Banknote, CheckCircle2, GraduationCap, Languages, Landmark, MapPinned, School } from "lucide-react";

type ScholarshipMatcherProps = {
  locale?: string;
};

const degrees = ["Bachelor", "Master", "PhD", "Language"] as const;
const majors = ["Computer Science", "AI", "Medicine", "Engineering", "Business", "Chinese Language", "Law", "Agriculture"] as const;
const budgets = ["Under $4,000/year", "$4,000-$8,000/year", "$8,000+/year"] as const;
const cityTiers = ["Lower-cost cities", "Balanced cities", "Top-tier cities"] as const;

const labels: Record<string, Record<string, string>> = {
  en: {
    titleSmall: "Rule-based matcher MVP",
    title: "Enter student profile",
    resultSmall: "Matching result",
    resultTitle: "Scholarship routes to verify first",
    verify: "Official verification needed",
    degree: "Target degree",
    major: "Target major",
    budget: "Annual budget",
    city: "City preference",
    csc: "Chinese Government Scholarship",
    provincial: "Provincial / Municipal Scholarship",
    university: "University Scholarship",
    special: "Special Scholarship",
    lowCost: "Low-cost City Strategy",
    cscNote: "Best when academic record is strong and the target program is verified as CSC-eligible.",
    provincialNote: "Useful when the student is open to strong regional universities and verified local awards.",
    universityNote: "Often the most practical first match for bachelor, language, and flexible-budget applicants.",
    specialNote: "Worth checking for Chinese language, Belt and Road, MOFCOM, city, or industry-specific routes.",
    lowCostNote: "Not a scholarship, but often the fastest way to reduce financial pressure."
  },
  zh: {
    titleSmall: "规则型匹配 MVP",
    title: "输入学生背景",
    resultSmall: "匹配结果",
    resultTitle: "优先核验的奖学金方向",
    verify: "需按官网核验",
    degree: "目标学位",
    major: "目标专业",
    budget: "年度预算",
    city: "城市偏好",
    csc: "中国政府奖学金 CSC",
    provincial: "省市级奖学金",
    university: "校级奖学金",
    special: "专项奖学金",
    lowCost: "低成本城市策略",
    cscNote: "适合成绩强、目标专业明确、能提前准备 CSC 渠道和材料的申请人。",
    provincialNote: "适合愿意比较区域强校、省市名额和城市成本的学生。",
    universityNote: "常常是本科、语言项目和自费申请人最现实的降成本路径。",
    specialNote: "适合中文教育、一带一路、商务部、城市专项或行业特色项目。",
    lowCostNote: "这不是奖学金，但常常能比单纯追奖学金更稳定地降低总成本。"
  },
  vi: {
    titleSmall: "Công cụ gợi ý MVP",
    title: "Nhập hồ sơ học sinh",
    resultSmall: "Kết quả gợi ý",
    resultTitle: "Hướng học bổng nên xác minh trước",
    verify: "Cần xác minh chính thức",
    degree: "Bậc học",
    major: "Ngành học",
    budget: "Ngân sách năm",
    city: "Ưu tiên thành phố",
    csc: "Học bổng Chính phủ Trung Quốc",
    provincial: "Học bổng tỉnh/thành",
    university: "Học bổng trường",
    special: "Học bổng chuyên biệt",
    lowCost: "Chiến lược thành phố chi phí thấp",
    cscNote: "Phù hợp khi thành tích tốt và chương trình mục tiêu có tuyến CSC.",
    provincialNote: "Hữu ích khi học sinh mở rộng lựa chọn tới trường khu vực mạnh.",
    universityNote: "Thường là tuyến thực tế cho cử nhân, học tiếng và hồ sơ tự túc.",
    specialNote: "Nên kiểm tra nếu liên quan tiếng Trung, BRI, MOFCOM, thành phố hoặc ngành đặc thù.",
    lowCostNote: "Không phải học bổng, nhưng thường giảm áp lực tài chính nhanh nhất."
  },
  ko: {
    titleSmall: "규칙 기반 매칭 MVP",
    title: "학생 정보 입력",
    resultSmall: "매칭 결과",
    resultTitle: "먼저 확인할 장학금 경로",
    verify: "공식 확인 필요",
    degree: "목표 학위",
    major: "목표 전공",
    budget: "연간 예산",
    city: "도시 선호",
    csc: "중국정부장학금",
    provincial: "지역/시 장학금",
    university: "학교 장학금",
    special: "특별 장학금",
    lowCost: "저비용 도시 전략",
    cscNote: "성적이 좋고 목표 프로그램의 CSC 가능성이 확인될 때 적합합니다.",
    provincialNote: "지역 강점 대학과 지방 장학금을 함께 볼 때 유용합니다.",
    universityNote: "학부, 어학, 자비 지원자에게 가장 현실적인 첫 경로입니다.",
    specialNote: "중국어, BRI, MOFCOM, 도시 또는 산업 특화 경로를 확인하세요.",
    lowCostNote: "장학금은 아니지만 총비용을 낮추는 빠른 방법입니다."
  },
  th: {
    titleSmall: "ตัวช่วยจับคู่แบบ MVP",
    title: "กรอกข้อมูลนักเรียน",
    resultSmall: "ผลการจับคู่",
    resultTitle: "เส้นทางทุนที่ควรตรวจสอบก่อน",
    verify: "ต้องตรวจสอบกับประกาศทางการ",
    degree: "ระดับการศึกษา",
    major: "สาขา",
    budget: "งบประมาณต่อปี",
    city: "เมืองที่สนใจ",
    csc: "ทุนรัฐบาลจีน",
    provincial: "ทุนมณฑล/เมือง",
    university: "ทุนมหาวิทยาลัย",
    special: "ทุนพิเศษ",
    lowCost: "กลยุทธ์เมืองต้นทุนต่ำ",
    cscNote: "เหมาะเมื่อผลการเรียนดีและโปรแกรมเป้าหมายมีเส้นทาง CSC.",
    provincialNote: "เหมาะกับนักเรียนที่เปิดรับมหาวิทยาลัยภูมิภาคที่แข็งแรง.",
    universityNote: "มักเป็นเส้นทางจริงสำหรับปริญญาตรี ภาษา และผู้สมัครจ่ายเอง.",
    specialNote: "ควรตรวจหากเกี่ยวกับภาษาจีน BRI MOFCOM เมือง หรือสาขาเฉพาะ.",
    lowCostNote: "ไม่ใช่ทุน แต่ช่วยลดภาระค่าใช้จ่ายได้เร็ว."
  },
  id: {
    titleSmall: "Pencocok berbasis aturan MVP",
    title: "Masukkan profil siswa",
    resultSmall: "Hasil pencocokan",
    resultTitle: "Jalur beasiswa yang perlu dicek dulu",
    verify: "Perlu verifikasi resmi",
    degree: "Jenjang target",
    major: "Jurusan target",
    budget: "Anggaran tahunan",
    city: "Preferensi kota",
    csc: "Beasiswa Pemerintah Tiongkok",
    provincial: "Beasiswa provinsi/kota",
    university: "Beasiswa universitas",
    special: "Beasiswa khusus",
    lowCost: "Strategi kota biaya rendah",
    cscNote: "Cocok bila akademik kuat dan program target memenuhi jalur CSC.",
    provincialNote: "Berguna bila siswa terbuka pada kampus regional yang kuat.",
    universityNote: "Sering paling praktis untuk S1, bahasa, dan pelamar mandiri.",
    specialNote: "Cek untuk Mandarin, BRI, MOFCOM, kota, atau jalur industri.",
    lowCostNote: "Bukan beasiswa, tetapi cepat menurunkan tekanan biaya."
  },
  ms: {
    titleSmall: "Pemadan berasaskan peraturan MVP",
    title: "Masukkan profil pelajar",
    resultSmall: "Keputusan padanan",
    resultTitle: "Laluan biasiswa untuk disahkan dahulu",
    verify: "Perlu pengesahan rasmi",
    degree: "Tahap sasaran",
    major: "Bidang sasaran",
    budget: "Bajet tahunan",
    city: "Pilihan bandar",
    csc: "Biasiswa Kerajaan China",
    provincial: "Biasiswa wilayah / bandar",
    university: "Biasiswa universiti",
    special: "Biasiswa khas",
    lowCost: "Strategi bandar kos rendah",
    cscNote: "Sesuai apabila rekod akademik kuat dan program sasaran disahkan layak CSC.",
    provincialNote: "Berguna jika pelajar terbuka kepada universiti serantau yang kukuh.",
    universityNote: "Selalunya laluan paling praktikal untuk sarjana muda, bahasa, dan pemohon fleksibel.",
    specialNote: "Semak untuk bahasa Cina, Belt and Road, MOFCOM, bandar, atau laluan industri.",
    lowCostNote: "Bukan biasiswa, tetapi cara cepat mengurangkan tekanan kos."
  },
  my: {
    titleSmall: "စည်းမျဉ်းအခြေခံ ကိုက်ညီမှု MVP",
    title: "ကျောင်းသားပရိုဖိုင် ထည့်ရန်",
    resultSmall: "ကိုက်ညီမှုရလဒ်",
    resultTitle: "ပထမဆုံး စိစစ်သင့်သော ပညာသင်ဆုလမ်းကြောင်းများ",
    verify: "တရားဝင် စိစစ်ရန် လိုအပ်သည်",
    degree: "ရည်မှန်းထားသော အဆင့်",
    major: "ရည်မှန်းထားသော ဘာသာရပ်",
    budget: "နှစ်စဉ် ဘတ်ဂျက်",
    city: "မြို့ရွေးချယ်မှု",
    csc: "တရုတ်အစိုးရ ပညာသင်ဆု",
    provincial: "ပြည်နယ် / မြို့ ပညာသင်ဆု",
    university: "တက္ကသိုလ် ပညာသင်ဆု",
    special: "အထူး ပညာသင်ဆု",
    lowCost: "ကုန်ကျစရိတ်နည်းသော မြို့ မဟာဗျူဟာ",
    cscNote: "ပညာရေးမှတ်တမ်းကောင်းပြီး CSC လျှောက်ထားနိုင်သော ပရိုဂရမ်ဖြစ်ကြောင်း အတည်ပြုထားပါက သင့်တော်သည်။",
    provincialNote: "အားကောင်းသော ဒေသတွင်း တက္ကသိုလ်များကို စဉ်းစားနိုင်သော ကျောင်းသားများအတွက် အသုံးဝင်သည်။",
    universityNote: "ဘွဲ့ကြို၊ ဘာသာစကားနှင့် ကိုယ်ပိုင်ငွေကြေးဖြင့် လျှောက်ထားသူများအတွက် လက်တွေ့ကျသောလမ်းကြောင်းဖြစ်သည်။",
    specialNote: "တရုတ်ဘာသာ၊ Belt and Road၊ MOFCOM၊ မြို့ သို့မဟုတ် စက်မှုနယ်ပယ်ဆိုင်ရာလမ်းကြောင်းများကို စစ်ဆေးသင့်သည်။",
    lowCostNote: "ပညာသင်ဆုမဟုတ်သော်လည်း စုစုပေါင်းကုန်ကျစရိတ်ကို လျှော့ချရာတွင် မြန်ဆန်သည်။"
  },
  km: {
    titleSmall: "ឧបករណ៍ផ្គូផ្គងតាមច្បាប់ MVP",
    title: "បញ្ចូលប្រវត្តិនិស្សិត",
    resultSmall: "លទ្ធផលផ្គូផ្គង",
    resultTitle: "ផ្លូវអាហារូបករណ៍ដែលគួរផ្ទៀងផ្ទាត់មុន",
    verify: "ត្រូវការផ្ទៀងផ្ទាត់ផ្លូវការ",
    degree: "កម្រិតគោលដៅ",
    major: "ជំនាញគោលដៅ",
    budget: "ថវិកាប្រចាំឆ្នាំ",
    city: "ជម្រើសទីក្រុង",
    csc: "អាហារូបករណ៍រដ្ឋាភិបាលចិន",
    provincial: "អាហារូបករណ៍ខេត្ត / ក្រុង",
    university: "អាហារូបករណ៍សាកលវិទ្យាល័យ",
    special: "អាហារូបករណ៍ពិសេស",
    lowCost: "យុទ្ធសាស្ត្រទីក្រុងថ្លៃទាប",
    cscNote: "សមស្របពេលលទ្ធផលសិក្សារឹងមាំ និងកម្មវិធីគោលដៅត្រូវបានបញ្ជាក់ថាសមស្របសម្រាប់ CSC។",
    provincialNote: "មានប្រយោជន៍សម្រាប់និស្សិតដែលបើកចិត្តចំពោះសាកលវិទ្យាល័យតំបន់ខ្លាំង។",
    universityNote: "ជាផ្លូវល្អសម្រាប់បរិញ្ញាបត្រ ភាសា និងអ្នកដាក់ពាក្យដែលត្រូវការកាត់បន្ថយថ្លៃសិក្សា។",
    specialNote: "គួរពិនិត្យសម្រាប់ភាសាចិន Belt and Road, MOFCOM, ទីក្រុង ឬវិស័យឯកទេស។",
    lowCostNote: "មិនមែនជាអាហារូបករណ៍ទេ ប៉ុន្តែជួយកាត់បន្ថយសម្ពាធហិរញ្ញវត្ថុបានលឿន។"
  },
  lo: {
    titleSmall: "ເຄື່ອງຈັບຄູ່ຕາມກົດ MVP",
    title: "ໃສ່ໂປຣໄຟລ໌ນັກສຶກສາ",
    resultSmall: "ຜົນການຈັບຄູ່",
    resultTitle: "ເສັ້ນທາງທຶນທີ່ຄວນກວດກ່ອນ",
    verify: "ຕ້ອງການການຢືນຢັນທາງການ",
    degree: "ລະດັບເປົ້າໝາຍ",
    major: "ສາຂາເປົ້າໝາຍ",
    budget: "ງົບປະມານຕໍ່ປີ",
    city: "ຄວາມມັກເມືອງ",
    csc: "ທຶນລັດຖະບານຈີນ",
    provincial: "ທຶນແຂວງ / ເມືອງ",
    university: "ທຶນມະຫາວິທະຍາໄລ",
    special: "ທຶນພິເສດ",
    lowCost: "ກົນລະຍຸດເມືອງຄ່າໃຊ້ຈ່າຍຕ່ຳ",
    cscNote: "ເໝາະເມື່ອຜົນການຮຽນແຂງແຮງ ແລະໂປຣແກຣມເປົ້າໝາຍຖືກຢືນຢັນວ່າເຂົ້າ CSC ໄດ້.",
    provincialNote: "ມີປະໂຫຍດຖ້ານັກສຶກສາເປີດໃຈຕໍ່ມະຫາວິທະຍາໄລພາກພື້ນທີ່ແຂງແຮງ.",
    universityNote: "ມັກເປັນທາງເລືອກທີ່ໃຊ້ໄດ້ຈິງສຳລັບປະລິນຍາຕີ ພາສາ ແລະຜູ້ສະໝັກທຶນສ່ວນຕົວ.",
    specialNote: "ຄວນກວດສຳລັບພາສາຈີນ Belt and Road, MOFCOM, ເມືອງ ຫຼືເສັ້ນທາງອຸດສາຫະກຳ.",
    lowCostNote: "ບໍ່ແມ່ນທຶນ ແຕ່ຊ່ວຍຫຼຸດຄວາມກົດດັນດ້ານຄ່າໃຊ້ຈ່າຍໄດ້ໄວ."
  },
  tl: {
    titleSmall: "Rule-based matcher MVP",
    title: "Ilagay ang profile ng estudyante",
    resultSmall: "Resulta ng pagtutugma",
    resultTitle: "Mga scholarship route na unang dapat i-verify",
    verify: "Kailangan ng opisyal na beripikasyon",
    degree: "Target na antas",
    major: "Target na kurso",
    budget: "Taunang budget",
    city: "Gustong lungsod",
    csc: "Chinese Government Scholarship",
    provincial: "Provincial / Municipal Scholarship",
    university: "University Scholarship",
    special: "Special Scholarship",
    lowCost: "Low-cost City Strategy",
    cscNote: "Pinakamainam kung malakas ang academic record at verified na CSC-eligible ang target program.",
    provincialNote: "Kapaki-pakinabang kung bukas ang estudyante sa matitibay na regional universities.",
    universityNote: "Madalas ito ang praktikal na unang tugma para sa bachelor, language, at self-funded applicants.",
    specialNote: "Suriin para sa Chinese language, Belt and Road, MOFCOM, city, o industry-specific routes.",
    lowCostNote: "Hindi ito scholarship, pero mabilis nitong nababawasan ang pressure sa gastos."
  },
  ru: {
    titleSmall: "Правиловой подбор MVP",
    title: "Введите профиль студента",
    resultSmall: "Результат",
    resultTitle: "Стипендии для первичной проверки",
    verify: "Нужна официальная проверка",
    degree: "Целевая степень",
    major: "Направление",
    budget: "Годовой бюджет",
    city: "Предпочтение по городу",
    csc: "Стипендия правительства Китая",
    provincial: "Региональная/городская стипендия",
    university: "Университетская стипендия",
    special: "Специальная стипендия",
    lowCost: "Стратегия недорогого города",
    cscNote: "Подходит при сильной академической базе и подтвержденной доступности CSC.",
    provincialNote: "Полезно, если студент открыт к сильным региональным вузам.",
    universityNote: "Часто самый практичный путь для бакалавриата, языка и самостоятельных заявок.",
    specialNote: "Проверьте китайский язык, BRI, MOFCOM, городские и отраслевые программы.",
    lowCostNote: "Это не стипендия, но быстрый способ снизить общие расходы."
  },
  tr: {
    titleSmall: "Kural tabanlı eşleştirici MVP",
    title: "Öğrenci profilini gir",
    resultSmall: "Eşleştirme sonucu",
    resultTitle: "Önce doğrulanacak burs yolları",
    verify: "Resmi doğrulama gerekir",
    degree: "Hedef derece",
    major: "Hedef bölüm",
    budget: "Yıllık bütçe",
    city: "Şehir tercihi",
    csc: "Çin Hükümeti Bursu",
    provincial: "Eyalet/şehir bursu",
    university: "Üniversite bursu",
    special: "Özel burs",
    lowCost: "Düşük maliyetli şehir stratejisi",
    cscNote: "Akademik profil güçlü ve hedef program CSC'ye uygunsa en iyi yoldur.",
    provincialNote: "Güçlü bölgesel üniversitelere açık öğrenciler için yararlıdır.",
    universityNote: "Lisans, dil ve kendi ücretini ödeyen adaylar için pratik bir ilk yoldur.",
    specialNote: "Çince, BRI, MOFCOM, şehir veya sektör odaklı yollar için kontrol edilmelidir.",
    lowCostNote: "Burs değildir ama toplam maliyeti hızlı azaltabilir."
  }
};

const optionLabels: Record<string, Record<string, string>> = {
  zh: { Bachelor: "本科", Master: "硕士", PhD: "博士", Language: "语言项目", "Computer Science": "计算机科学", AI: "人工智能", Medicine: "医学", Engineering: "工程", Business: "商科", "Chinese Language": "汉语", Law: "法学", Agriculture: "农业", "Under $4,000/year": "每年 4,000 美元以下", "$4,000-$8,000/year": "每年 4,000-8,000 美元", "$8,000+/year": "每年 8,000 美元以上", "Lower-cost cities": "低成本城市", "Balanced cities": "平衡型城市", "Top-tier cities": "一线城市" },
  vi: { Bachelor: "Cử nhân", Master: "Thạc sĩ", PhD: "Tiến sĩ", Language: "Tiếng Trung", "Computer Science": "Khoa học máy tính", AI: "AI", Medicine: "Y khoa", Engineering: "Kỹ thuật", Business: "Kinh doanh", "Chinese Language": "Tiếng Trung", Law: "Luật", Agriculture: "Nông nghiệp", "Under $4,000/year": "Dưới 4.000 USD/năm", "$4,000-$8,000/year": "4.000-8.000 USD/năm", "$8,000+/year": "Trên 8.000 USD/năm", "Lower-cost cities": "Thành phố chi phí thấp", "Balanced cities": "Thành phố cân bằng", "Top-tier cities": "Thành phố tuyến đầu" },
  ko: { Bachelor: "학사", Master: "석사", PhD: "박사", Language: "어학", "Computer Science": "컴퓨터공학", AI: "AI", Medicine: "의학", Engineering: "공학", Business: "경영", "Chinese Language": "중국어", Law: "법학", Agriculture: "농업", "Under $4,000/year": "연 4,000달러 이하", "$4,000-$8,000/year": "연 4,000-8,000달러", "$8,000+/year": "연 8,000달러 이상", "Lower-cost cities": "저비용 도시", "Balanced cities": "균형형 도시", "Top-tier cities": "대도시" },
  th: { Bachelor: "ปริญญาตรี", Master: "ปริญญาโท", PhD: "ปริญญาเอก", Language: "ภาษา", "Computer Science": "วิทยาการคอมพิวเตอร์", AI: "AI", Medicine: "แพทย์", Engineering: "วิศวกรรม", Business: "ธุรกิจ", "Chinese Language": "ภาษาจีน", Law: "กฎหมาย", Agriculture: "เกษตร", "Under $4,000/year": "ต่ำกว่า 4,000 ดอลลาร์/ปี", "$4,000-$8,000/year": "4,000-8,000 ดอลลาร์/ปี", "$8,000+/year": "มากกว่า 8,000 ดอลลาร์/ปี", "Lower-cost cities": "เมืองต้นทุนต่ำ", "Balanced cities": "เมืองสมดุล", "Top-tier cities": "เมืองใหญ่" },
  id: { Bachelor: "S1", Master: "S2", PhD: "S3", Language: "Bahasa", "Computer Science": "Ilmu komputer", AI: "AI", Medicine: "Kedokteran", Engineering: "Teknik", Business: "Bisnis", "Chinese Language": "Mandarin", Law: "Hukum", Agriculture: "Pertanian", "Under $4,000/year": "Di bawah $4.000/tahun", "$4,000-$8,000/year": "$4.000-$8.000/tahun", "$8,000+/year": "Di atas $8.000/tahun", "Lower-cost cities": "Kota biaya rendah", "Balanced cities": "Kota seimbang", "Top-tier cities": "Kota utama" },
  ms: { Bachelor: "Sarjana muda", Master: "Sarjana", PhD: "PhD", Language: "Bahasa", "Computer Science": "Sains komputer", AI: "AI", Medicine: "Perubatan", Engineering: "Kejuruteraan", Business: "Perniagaan", "Chinese Language": "Bahasa Cina", Law: "Undang-undang", Agriculture: "Pertanian", "Under $4,000/year": "Bawah $4,000/tahun", "$4,000-$8,000/year": "$4,000-$8,000/tahun", "$8,000+/year": "Lebih $8,000/tahun", "Lower-cost cities": "Bandar kos rendah", "Balanced cities": "Bandar seimbang", "Top-tier cities": "Bandar utama" },
  my: { Bachelor: "ဘွဲ့ကြို", Master: "မာစတာ", PhD: "ပါရဂူ", Language: "ဘာသာစကား", "Computer Science": "ကွန်ပျူတာသိပ္ပံ", AI: "AI", Medicine: "ဆေးပညာ", Engineering: "အင်ဂျင်နီယာ", Business: "စီးပွားရေး", "Chinese Language": "တရုတ်ဘာသာ", Law: "ဥပဒေ", Agriculture: "စိုက်ပျိုးရေး", "Under $4,000/year": "တစ်နှစ် $4,000 အောက်", "$4,000-$8,000/year": "တစ်နှစ် $4,000-$8,000", "$8,000+/year": "တစ်နှစ် $8,000 အထက်", "Lower-cost cities": "ကုန်ကျစရိတ်နည်းသော မြို့များ", "Balanced cities": "မျှတသော မြို့များ", "Top-tier cities": "အဓိကမြို့များ" },
  km: { Bachelor: "បរិញ្ញាបត្រ", Master: "អនុបណ្ឌិត", PhD: "បណ្ឌិត", Language: "ភាសា", "Computer Science": "វិទ្យាសាស្ត្រកុំព្យូទ័រ", AI: "AI", Medicine: "វេជ្ជសាស្ត្រ", Engineering: "វិស្វកម្ម", Business: "ពាណិជ្ជកម្ម", "Chinese Language": "ភាសាចិន", Law: "ច្បាប់", Agriculture: "កសិកម្ម", "Under $4,000/year": "ក្រោម $4,000/ឆ្នាំ", "$4,000-$8,000/year": "$4,000-$8,000/ឆ្នាំ", "$8,000+/year": "លើស $8,000/ឆ្នាំ", "Lower-cost cities": "ទីក្រុងថ្លៃទាប", "Balanced cities": "ទីក្រុងសមតុល្យ", "Top-tier cities": "ទីក្រុងកំពូល" },
  lo: { Bachelor: "ປະລິນຍາຕີ", Master: "ປະລິນຍາໂທ", PhD: "ປະລິນຍາເອກ", Language: "ພາສາ", "Computer Science": "ວິທະຍາການຄອມພິວເຕີ", AI: "AI", Medicine: "ແພດສາດ", Engineering: "ວິສະວະກຳ", Business: "ທຸລະກິດ", "Chinese Language": "ພາສາຈີນ", Law: "ກົດໝາຍ", Agriculture: "ກະສິກຳ", "Under $4,000/year": "ຕ່ຳກວ່າ $4,000/ປີ", "$4,000-$8,000/year": "$4,000-$8,000/ປີ", "$8,000+/year": "ເກີນ $8,000/ປີ", "Lower-cost cities": "ເມືອງຄ່າໃຊ້ຈ່າຍຕ່ຳ", "Balanced cities": "ເມືອງສົມດຸນ", "Top-tier cities": "ເມືອງຊັ້ນນຳ" },
  tl: { Bachelor: "Bachelor", Master: "Master", PhD: "PhD", Language: "Wika", "Computer Science": "Computer Science", AI: "AI", Medicine: "Medisina", Engineering: "Engineering", Business: "Negosyo", "Chinese Language": "Chinese Language", Law: "Batas", Agriculture: "Agrikultura", "Under $4,000/year": "Mas mababa sa $4,000/taon", "$4,000-$8,000/year": "$4,000-$8,000/taon", "$8,000+/year": "Higit sa $8,000/taon", "Lower-cost cities": "Mas murang lungsod", "Balanced cities": "Balanseng lungsod", "Top-tier cities": "Pangunahing lungsod" },
  ru: { Bachelor: "Бакалавриат", Master: "Магистратура", PhD: "PhD", Language: "Язык", "Computer Science": "Информатика", AI: "ИИ", Medicine: "Медицина", Engineering: "Инженерия", Business: "Бизнес", "Chinese Language": "Китайский язык", Law: "Право", Agriculture: "Сельское хозяйство", "Under $4,000/year": "До $4 000/год", "$4,000-$8,000/year": "$4 000-$8 000/год", "$8,000+/year": "Более $8 000/год", "Lower-cost cities": "Недорогие города", "Balanced cities": "Сбалансированные города", "Top-tier cities": "Крупные города" },
  tr: { Bachelor: "Lisans", Master: "Yüksek lisans", PhD: "Doktora", Language: "Dil", "Computer Science": "Bilgisayar bilimi", AI: "Yapay zeka", Medicine: "Tıp", Engineering: "Mühendislik", Business: "İşletme", "Chinese Language": "Çince", Law: "Hukuk", Agriculture: "Tarım", "Under $4,000/year": "Yılda 4.000 USD altı", "$4,000-$8,000/year": "Yılda 4.000-8.000 USD", "$8,000+/year": "Yılda 8.000 USD üzeri", "Lower-cost cities": "Düşük maliyetli şehirler", "Balanced cities": "Dengeli şehirler", "Top-tier cities": "Büyük şehirler" }
};

function label(locale: string, value: string) {
  return optionLabels[locale]?.[value] ?? value;
}

function copy(locale: string) {
  return labels[locale] ?? labels.en;
}

function scoreProfile(degree: string, major: string, budget: string, cityTier: string, locale: string) {
  let csc = 62;
  let provincial = 58;
  let university = 70;
  let special = 48;
  let lowCost = 64;

  if (["Master", "PhD"].includes(degree)) csc += 18;
  if (degree === "Bachelor") {
    university += 8;
    provincial += 5;
  }
  if (degree === "Language") {
    university += 10;
    special += 18;
    provincial += 7;
  }
  if (["Engineering", "AI", "Computer Science", "Medicine", "Agriculture"].includes(major)) {
    csc += 8;
    university += 6;
  }
  if (["Chinese Language", "Law", "Agriculture"].includes(major)) special += 12;
  if (budget === "Under $4,000/year") {
    csc += 10;
    lowCost += 18;
  }
  if (cityTier === "Lower-cost cities") {
    lowCost += 16;
    provincial += 8;
  }
  if (cityTier === "Top-tier cities") {
    university += 6;
    provincial += 4;
    lowCost -= 14;
  }

  const c = copy(locale);
  return [
    { name: c.csc, score: csc, note: c.cscNote, icon: Landmark },
    { name: c.provincial, score: provincial, note: c.provincialNote, icon: Banknote },
    { name: c.university, score: university, note: c.universityNote, icon: School },
    { name: c.special, score: special, note: c.specialNote, icon: CheckCircle2 },
    { name: c.lowCost, score: lowCost, note: c.lowCostNote, icon: CheckCircle2 }
  ]
    .map((item) => ({ ...item, score: Math.max(20, Math.min(95, Number(item.score))) }))
    .sort((a, b) => b.score - a.score);
}

export function ScholarshipMatcher({ locale = "en" }: ScholarshipMatcherProps) {
  const c = copy(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const [degree, setDegree] = useState("Master");
  const [major, setMajor] = useState("Engineering");
  const [budget, setBudget] = useState("Under $4,000/year");
  const [cityTier, setCityTier] = useState("Lower-cost cities");
  const matches = useMemo(() => scoreProfile(degree, major, budget, cityTier, locale), [degree, major, budget, cityTier, locale]);

  const fields = [
    [c.degree, degrees, degree, setDegree, GraduationCap],
    [c.major, majors, major, setMajor, Award],
    [c.budget, budgets, budget, setBudget, Banknote],
    [c.city, cityTiers, cityTier, setCityTier, MapPinned]
  ] as const;

  return (
    <div className="grid gap-6 lg:grid-cols-[390px_1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{c.titleSmall}</p>
        <h2 className="mt-3 text-2xl font-bold text-ink">{c.title}</h2>
        <div className="mt-6 grid gap-5">
          {fields.map(([fieldLabel, options, value, setter, Icon]) => (
            <label key={fieldLabel} className="text-sm font-semibold text-ink">
              <span className="flex items-center gap-2">
                <Icon size={16} className="text-primary" aria-hidden="true" />
                {fieldLabel}
              </span>
              <select
                value={value}
                onChange={(event) => setter(event.target.value)}
                className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              >
                {options.map((option) => (
                  <option key={option} value={option}>{label(locale, option)}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{c.resultSmall}</p>
            <h2 className="mt-3 text-2xl font-bold text-ink">{c.resultTitle}</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700">
            <Languages size={14} aria-hidden="true" />
            {c.verify}
          </span>
        </div>
        <div className="mt-6 grid gap-4">
          {matches.map((match) => {
            const Icon = match.icon;
            return (
              <article key={match.name} className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Icon className="text-primary" size={20} aria-hidden="true" />
                    <h3 className="font-bold text-ink">{match.name}</h3>
                  </div>
                  <span className="text-lg font-bold text-primary">{match.score}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${match.score}%` }} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{match.note}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
          <a href={`${prefix}/scholarship-opportunities`} className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-white hover:bg-blue-700">
            {locale === "zh" ? "查看机会库" : "View Watchlist"}
          </a>
          <a href={`${prefix}/consultation?topic=scholarship-matcher`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-200 px-4 text-sm font-bold text-ink hover:border-primary hover:text-primary">
            {locale === "zh" ? "提交资料核验" : "Verify My Profile"}
          </a>
        </div>
      </div>
    </div>
  );
}
