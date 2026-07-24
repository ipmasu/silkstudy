"use client";

import Link from "next/link";
import { localizePath, type AppLocale } from "@/lib/i18n/routing";

type FooterCopy = {
  intro: string;
  explore: string;
  universities: string;
  map: string;
  cities: string;
  life: string;
  community: string;
  start: string;
  consultation: string;
  scholarships: string;
  dashboard: string;
};

const footerCopy: Partial<Record<AppLocale, FooterCopy>> = {
  en: {
    intro: "Helping young people worldwide find the right Chinese university and a city where they want to live, travel, and grow.",
    explore: "Explore China",
    universities: "Universities",
    map: "China destination map",
    cities: "Cities and student life",
    life: "Stories and life guide",
    community: "Student and traveler community",
    start: "Start the journey",
    consultation: "Get Your Free Study Plan",
    scholarships: "Scholarship matching",
    dashboard: "Study and travel planning"
  },
  zh: {
    intro: "帮助全球年轻人找到适合的中国大学，也找到一座愿意生活、旅行和成长的中国城市。",
    explore: "探索中国",
    universities: "大学目录",
    map: "中国目的地地图",
    cities: "城市与学生生活",
    life: "故事与生活指南",
    community: "留学生与旅行者社区",
    start: "开始旅程",
    consultation: "获取免费留学方案",
    scholarships: "奖学金匹配",
    dashboard: "留学与旅行规划"
  },
  vi: {
    intro: "Giúp học sinh toàn cầu tìm đúng trường đại học Trung Quốc và một thành phố để học tập, du lịch và trưởng thành.",
    explore: "Khám phá Trung Quốc",
    universities: "Danh sách trường",
    map: "Bản đồ điểm đến Trung Quốc",
    cities: "Thành phố và đời sống sinh viên",
    life: "Câu chuyện và hướng dẫn đời sống",
    community: "Cộng đồng sinh viên và du khách",
    start: "Bắt đầu hành trình",
    consultation: "Tư vấn miễn phí",
    scholarships: "Ghép học bổng",
    dashboard: "Kế hoạch học tập và du lịch"
  },
  ko: {
    intro: "전 세계 학생들이 자신에게 맞는 중국 대학과 생활하고 성장할 도시를 찾도록 돕습니다.",
    explore: "중국 탐색",
    universities: "대학 목록",
    map: "중국 목적지 지도",
    cities: "도시와 학생 생활",
    life: "생활 이야기와 가이드",
    community: "학생과 여행자 커뮤니티",
    start: "여정 시작",
    consultation: "무료 상담",
    scholarships: "장학금 매칭",
    dashboard: "유학 및 여행 계획"
  },
  th: {
    intro: "ช่วยนักเรียนทั่วโลกค้นหามหาวิทยาลัยจีนที่เหมาะสม และเมืองที่อยากใช้ชีวิต เดินทาง และเติบโต",
    explore: "สำรวจจีน",
    universities: "รายชื่อมหาวิทยาลัย",
    map: "แผนที่จุดหมายในจีน",
    cities: "เมืองและชีวิตนักศึกษา",
    life: "เรื่องราวและคู่มือชีวิต",
    community: "ชุมชนนักศึกษาและนักเดินทาง",
    start: "เริ่มต้นเส้นทาง",
    consultation: "ปรึกษาฟรี",
    scholarships: "จับคู่ทุนการศึกษา",
    dashboard: "แผนการเรียนและเดินทาง"
  },
  id: {
    intro: "Membantu pelajar global menemukan universitas Tiongkok yang tepat dan kota untuk belajar, bepergian, dan berkembang.",
    explore: "Jelajahi Tiongkok",
    universities: "Daftar universitas",
    map: "Peta destinasi Tiongkok",
    cities: "Kota dan kehidupan mahasiswa",
    life: "Cerita dan panduan hidup",
    community: "Komunitas mahasiswa dan pelancong",
    start: "Mulai perjalanan",
    consultation: "Konsultasi gratis",
    scholarships: "Pencocokan beasiswa",
    dashboard: "Rencana studi dan perjalanan"
  },
  ms: {
    intro: "Membantu anak muda seluruh dunia mencari universiti China yang sesuai dan bandar untuk belajar, mengembara, dan berkembang.",
    explore: "Terokai China",
    universities: "Katalog universiti",
    map: "Peta destinasi China",
    cities: "Bandar dan kehidupan pelajar",
    life: "Cerita dan panduan hidup",
    community: "Komuniti pelajar dan pengembara",
    start: "Mulakan perjalanan",
    consultation: "Konsultasi percuma",
    scholarships: "Padanan biasiswa",
    dashboard: "Perancangan belajar dan perjalanan"
  },
  my: {
    intro: "ကမ္ဘာတစ်ဝှမ်းရှိ လူငယ်များကို သင့်တော်သော တရုတ်တက္ကသိုလ်နှင့် နေထိုင်၊ ခရီးသွား၊ ကြီးထွားနိုင်သော မြို့ကို ရှာဖွေရာတွင် ကူညီသည်။",
    explore: "တရုတ်ကို လေ့လာရန်",
    universities: "တက္ကသိုလ် စာရင်း",
    map: "တရုတ် ဦးတည်ရာမြေပုံ",
    cities: "မြို့များနှင့် ကျောင်းသားဘဝ",
    life: "ပုံပြင်များနှင့် နေထိုင်မှုလမ်းညွှန်",
    community: "ကျောင်းသားနှင့် ခရီးသွား အသိုင်းအဝိုင်း",
    start: "ခရီးစဉ် စတင်ရန်",
    consultation: "အခမဲ့ တိုင်ပင်ရန်",
    scholarships: "ပညာသင်ဆု ကိုက်ညီမှု",
    dashboard: "လေ့လာရေးနှင့် ခရီးသွား အစီအစဉ်"
  },
  km: {
    intro: "ជួយយុវជនទូទាំងពិភពលោករកសាកលវិទ្យាល័យចិនសមស្រប និងទីក្រុងសម្រាប់រស់នៅ ធ្វើដំណើរ និងរីកចម្រើន។",
    explore: "ស្វែងយល់ពីចិន",
    universities: "បញ្ជីសាកលវិទ្យាល័យ",
    map: "ផែនទីគោលដៅចិន",
    cities: "ទីក្រុង និងជីវិតនិស្សិត",
    life: "រឿងរ៉ាវ និងមគ្គុទេសក៍ជីវិត",
    community: "សហគមន៍និស្សិត និងអ្នកធ្វើដំណើរ",
    start: "ចាប់ផ្តើមដំណើរ",
    consultation: "ប្រឹក្សាឥតគិតថ្លៃ",
    scholarships: "ផ្គូផ្គងអាហារូបករណ៍",
    dashboard: "ផែនការសិក្សា និងធ្វើដំណើរ"
  },
  lo: {
    intro: "ຊ່ວຍຊາວໜຸ່ມທົ່ວໂລກຫາມະຫາວິທະຍາໄລຈີນທີ່ເໝາະສົມ ແລະເມືອງສຳລັບຮຽນ ເດີນທາງ ແລະເຕີບໂຕ.",
    explore: "ສຳຫຼວດຈີນ",
    universities: "ລາຍຊື່ມະຫາວິທະຍາໄລ",
    map: "ແຜນທີ່ຈຸດໝາຍໃນຈີນ",
    cities: "ເມືອງ ແລະຊີວິດນັກສຶກສາ",
    life: "ເລື່ອງລາວ ແລະຄູ່ມືຊີວິດ",
    community: "ຊຸມຊົນນັກສຶກສາ ແລະນັກເດີນທາງ",
    start: "ເລີ່ມຕົ້ນການເດີນທາງ",
    consultation: "ປຶກສາຟຣີ",
    scholarships: "ຈັບຄູ່ທຶນການສຶກສາ",
    dashboard: "ແຜນການຮຽນ ແລະການເດີນທາງ"
  },
  tl: {
    intro: "Tinutulungan ang mga kabataan sa buong mundo na mahanap ang tamang unibersidad sa Tsina at lungsod para matuto, maglakbay, at lumago.",
    explore: "Tuklasin ang Tsina",
    universities: "Listahan ng unibersidad",
    map: "Mapa ng mga destinasyon sa Tsina",
    cities: "Mga lungsod at buhay-estudyante",
    life: "Mga kuwento at gabay sa buhay",
    community: "Komunidad ng estudyante at manlalakbay",
    start: "Simulan ang paglalakbay",
    consultation: "Libreng konsultasyon",
    scholarships: "Pagtutugma ng scholarship",
    dashboard: "Plano sa pag-aaral at paglalakbay"
  },
  ru: {
    intro: "Помогаем студентам со всего мира найти подходящий китайский университет и город для учебы, жизни и роста.",
    explore: "Открыть Китай",
    universities: "Каталог университетов",
    map: "Карта направлений Китая",
    cities: "Города и студенческая жизнь",
    life: "Истории и гид по жизни",
    community: "Сообщество студентов и путешественников",
    start: "Начать путь",
    consultation: "Получить бесплатный план учебы",
    scholarships: "Подбор стипендий",
    dashboard: "План учебы и поездки"
  },
  tr: {
    intro: "Dünyanın farklı ülkelerinden öğrencilerin doğru Çin üniversitesini ve yaşayabilecekleri şehri bulmasına yardımcı oluyoruz.",
    explore: "Çin'i keşfet",
    universities: "Üniversite kataloğu",
    map: "Çin destinasyon haritası",
    cities: "Şehirler ve öğrenci hayatı",
    life: "Hikayeler ve yaşam rehberi",
    community: "Öğrenci ve gezgin topluluğu",
    start: "Yolculuğa başla",
    consultation: "Ücretsiz eğitim planı al",
    scholarships: "Burs eşleştirme",
    dashboard: "Eğitim ve seyahat planı"
  }
};

const footerOverrides: Partial<Record<AppLocale, FooterCopy>> = {
  vi: {
    intro: "Giúp người trẻ trên toàn thế giới tìm trường đại học Trung Quốc phù hợp và một thành phố để học tập, du lịch và trưởng thành.",
    explore: "Khám phá Trung Quốc",
    universities: "Danh sách trường",
    map: "Bản đồ điểm đến Trung Quốc",
    cities: "Thành phố và đời sống sinh viên",
    life: "Câu chuyện và hướng dẫn đời sống",
    community: "Cộng đồng sinh viên và du khách",
    start: "Bắt đầu hành trình",
    consultation: "Nhận kế hoạch du học miễn phí",
    scholarships: "Ghép học bổng",
    dashboard: "Kế hoạch học tập và du lịch"
  },
  fr: {
    intro: "Aider les jeunes du monde entier à trouver la bonne université chinoise et une ville où étudier, voyager et grandir.",
    explore: "Explorer la Chine",
    universities: "Catalogue des universités",
    map: "Carte des destinations en Chine",
    cities: "Villes et vie étudiante",
    life: "Histoires et guide de vie",
    community: "Communauté d'étudiants et de voyageurs",
    start: "Commencer le voyage",
    consultation: "Recevoir mon plan d'études gratuit",
    scholarships: "Recherche de bourses",
    dashboard: "Planification des études et du voyage"
  }
};

export function SiteFooter({ locale }: { locale: AppLocale }) {
  const copy = footerOverrides[locale] ?? footerCopy[locale] ?? footerCopy.en!;
  const localize = (href: string) => localizePath(href, locale);

  return (
    <>
      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
          <div>
            <p className="text-lg font-bold">SilkStudy</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{copy.intro}</p>
          </div>
          <div>
            <p className="font-semibold">{copy.explore}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><Link href={localize("/universities")} className="hover:text-white">{copy.universities}</Link></li>
              <li><Link href={localize("/china-map")} className="hover:text-white">{copy.map}</Link></li>
              <li><Link href={localize("/cities")} className="hover:text-white">{copy.cities}</Link></li>
              <li><Link href={localize("/life")} className="hover:text-white">{copy.life}</Link></li>
              <li><Link href={localize("/community")} className="hover:text-white">{copy.community}</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">{copy.start}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><Link href={localize("/consultation")} className="hover:text-white">{copy.consultation}</Link></li>
              <li><Link href={localize("/scholarships")} className="hover:text-white">{copy.scholarships}</Link></li>
              <li><Link href={localize("/scholarship-opportunities")} className="hover:text-white">{locale === "zh" ? "奖学金机会库" : "Scholarship watchlist"}</Link></li>
              <li><Link href={localize("/dashboard")} className="hover:text-white">{copy.dashboard}</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="h-20 sm:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur sm:hidden">
        <Link href={localize("/consultation")} className="flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-bold text-white shadow-sm">
          {copy.consultation}
        </Link>
      </div>
    </>
  );
}
