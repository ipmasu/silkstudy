import Link from "next/link";
import { GraduationCap, Menu } from "lucide-react";
import { ButtonLink } from "@/components/common/button-link";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { localizePath, type AppLocale } from "@/lib/i18n/routing";

const navItems = [
  { href: "/provinces", key: "exploreChina" },
  { href: "/culture", key: "culture" },
  { href: "/universities", key: "universities" },
  { href: "/cities", key: "studentLife" },
  { href: "/life", key: "life" },
  { href: "/community", key: "community" },
  { href: "/global-checkin", key: "globalCheckin" },
  { href: "/why-china", key: "scholarships" },
  { href: "/consultation", key: "planJourney" }
] as const;

const navigationCopy: Record<AppLocale, Record<(typeof navItems)[number]["key"] | "freeConsultation" | "mobilePlan", string>> = {
  en: {
    exploreChina: "Explore China",
    culture: "Culture",
    universities: "Universities",
    studentLife: "Cities",
    life: "Life Guide",
    community: "Community",
    globalCheckin: "Global Check-in",
    scholarships: "Scholarships",
    planJourney: "Plan Journey",
    freeConsultation: "Get Your Free Study Plan",
    mobilePlan: "Plan"
  },
  zh: {
    exploreChina: "探索中国",
    culture: "中国文化",
    universities: "大学目录",
    studentLife: "城市",
    life: "生活指南",
    community: "社区",
    globalCheckin: "全球打卡",
    scholarships: "奖学金",
    planJourney: "规划留学",
    freeConsultation: "获取免费留学方案",
    mobilePlan: "规划"
  },
  vi: {
    exploreChina: "Khám phá Trung Quốc",
    culture: "Văn hóa",
    universities: "Trường đại học",
    studentLife: "Thành phố",
    life: "Đời sống",
    community: "Cộng đồng",
    globalCheckin: "Check-in toàn cầu",
    scholarships: "Học bổng",
    planJourney: "Lập kế hoạch",
    freeConsultation: "Tư vấn miễn phí",
    mobilePlan: "Kế hoạch"
  },
  ko: {
    exploreChina: "중국 탐색",
    culture: "중국 문화",
    universities: "대학",
    studentLife: "도시",
    life: "생활 가이드",
    community: "커뮤니티",
    globalCheckin: "글로벌 체크인",
    scholarships: "장학금",
    planJourney: "유학 설계",
    freeConsultation: "무료 상담",
    mobilePlan: "상담"
  },
  th: {
    exploreChina: "สำรวจจีน",
    culture: "วัฒนธรรมจีน",
    universities: "มหาวิทยาลัย",
    studentLife: "เมือง",
    life: "คู่มือชีวิต",
    community: "ชุมชน",
    globalCheckin: "เช็กอินทั่วโลก",
    scholarships: "ทุนการศึกษา",
    planJourney: "วางแผน",
    freeConsultation: "ปรึกษาฟรี",
    mobilePlan: "แผน"
  },
  id: {
    exploreChina: "Jelajahi Tiongkok",
    culture: "Budaya",
    universities: "Universitas",
    studentLife: "Kota",
    life: "Panduan Hidup",
    community: "Komunitas",
    globalCheckin: "Check-in Global",
    scholarships: "Beasiswa",
    planJourney: "Rencana Studi",
    freeConsultation: "Konsultasi gratis",
    mobilePlan: "Rencana"
  },
  ms: {
    exploreChina: "Terokai China",
    culture: "Budaya",
    universities: "Universiti",
    studentLife: "Bandar",
    life: "Panduan Hidup",
    community: "Komuniti",
    globalCheckin: "Daftar masuk global",
    scholarships: "Biasiswa",
    planJourney: "Rancang Pengajian",
    freeConsultation: "Konsultasi percuma",
    mobilePlan: "Rancang"
  },
  my: {
    exploreChina: "တရုတ်ကို လေ့လာရန်",
    culture: "တရုတ်ယဉ်ကျေးမှု",
    universities: "တက္ကသိုလ်များ",
    studentLife: "မြို့များ",
    life: "နေထိုင်မှု လမ်းညွှန်",
    community: "အသိုင်းအဝိုင်း",
    globalCheckin: "ကမ္ဘာလုံးဆိုင်ရာ Check-in",
    scholarships: "ပညာသင်ဆုများ",
    planJourney: "လေ့လာရေး စီစဉ်ရန်",
    freeConsultation: "အခမဲ့ တိုင်ပင်ရန်",
    mobilePlan: "စီစဉ်ရန်"
  },
  km: {
    exploreChina: "ស្វែងយល់ពីចិន",
    culture: "វប្បធម៌ចិន",
    universities: "សាកលវិទ្យាល័យ",
    studentLife: "ទីក្រុង",
    life: "មគ្គុទេសក៍ជីវិត",
    community: "សហគមន៍",
    globalCheckin: "Check-in ពិភពលោក",
    scholarships: "អាហារូបករណ៍",
    planJourney: "រៀបចំផែនការ",
    freeConsultation: "ប្រឹក្សាឥតគិតថ្លៃ",
    mobilePlan: "ផែនការ"
  },
  lo: {
    exploreChina: "ສຳຫຼວດຈີນ",
    culture: "ວັດທະນະທຳຈີນ",
    universities: "ມະຫາວິທະຍາໄລ",
    studentLife: "ເມືອງ",
    life: "ຄູ່ມືຊີວິດ",
    community: "ຊຸມຊົນ",
    globalCheckin: "Check-in ທົ່ວໂລກ",
    scholarships: "ທຶນການສຶກສາ",
    planJourney: "ວາງແຜນການຮຽນ",
    freeConsultation: "ປຶກສາຟຣີ",
    mobilePlan: "ແຜນ"
  },
  tl: {
    exploreChina: "Tuklasin ang Tsina",
    culture: "Kultura",
    universities: "Mga Unibersidad",
    studentLife: "Mga Lungsod",
    life: "Gabay sa Buhay",
    community: "Komunidad",
    globalCheckin: "Global Check-in",
    scholarships: "Scholarships",
    planJourney: "Planuhin ang Pag-aaral",
    freeConsultation: "Libreng konsultasyon",
    mobilePlan: "Plano"
  },
  ru: {
    exploreChina: "Открыть Китай",
    culture: "Культура",
    universities: "Университеты",
    studentLife: "Города",
    life: "Жизнь",
    community: "Сообщество",
    globalCheckin: "Глобальный чек-ин",
    scholarships: "Стипендии",
    planJourney: "План обучения",
    freeConsultation: "Получить бесплатный план учебы",
    mobilePlan: "План"
  },
  tr: {
    exploreChina: "Çin'i keşfet",
    culture: "Kültür",
    universities: "Üniversiteler",
    studentLife: "Şehirler",
    life: "Yaşam Rehberi",
    community: "Topluluk",
    globalCheckin: "Küresel Check-in",
    scholarships: "Burslar",
    planJourney: "Planla",
    freeConsultation: "Ücretsiz eğitim planı al",
    mobilePlan: "Plan"
  }
};

export function SiteHeader({ locale }: { locale: AppLocale }) {
  const copy = navigationCopy[locale] ?? navigationCopy.en;
  const localize = (href: string) => localizePath(href, locale);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-4 lg:px-8">
        <Link href={localize("/")} className="flex items-center gap-2 text-lg font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          SilkStudy
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-600 lg:gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={localize(item.href)} className="hover:text-primary">
              {copy[item.key]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <LanguageSwitcher locale={locale} />
          <ButtonLink href={localize("/consultation")}>{copy.freeConsultation}</ButtonLink>
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher locale={locale} compact />
          <details className="relative">
            <summary className="flex min-h-9 list-none cursor-pointer items-center justify-center rounded-md border border-slate-200 px-2 text-slate-600">
              <Menu size={17} aria-hidden="true" />
              <span className="sr-only">Menu</span>
            </summary>
            <nav className="absolute right-0 top-11 z-50 grid w-52 overflow-hidden rounded-md border border-slate-200 bg-white py-2 text-sm font-semibold text-slate-700 shadow-lg">
              {navItems.map((item) => (
                <Link key={item.href} href={localize(item.href)} className="flex min-h-11 items-center px-4 py-2 hover:bg-blue-50 hover:text-primary">
                  {copy[item.key]}
                </Link>
              ))}
            </nav>
          </details>
        </div>
        <Link href={localize("/consultation")} className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-white shadow-sm sm:hidden">
          {copy.freeConsultation}
        </Link>
      </div>
    </header>
  );
}
