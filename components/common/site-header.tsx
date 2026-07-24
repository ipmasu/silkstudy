"use client";

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

type NavKey = (typeof navItems)[number]["key"] | "freeConsultation" | "mobilePlan";

const navigationCopy: Record<AppLocale, Record<NavKey, string>> = {
  en: {
    exploreChina: "Explore China Map",
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
    exploreChina: "探索中国地图",
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
    exploreChina: "Bản đồ Trung Quốc",
    culture: "Văn hóa",
    universities: "Đại học",
    studentLife: "Thành phố",
    life: "Hướng dẫn sống",
    community: "Cộng đồng",
    globalCheckin: "Check-in toàn cầu",
    scholarships: "Học bổng",
    planJourney: "Lập kế hoạch",
    freeConsultation: "Nhận tư vấn miễn phí",
    mobilePlan: "Kế hoạch"
  },
  fr: {
    exploreChina: "Carte de Chine",
    culture: "Culture",
    universities: "Universités",
    studentLife: "Villes",
    life: "Guide de vie",
    community: "Communauté",
    globalCheckin: "Check-in mondial",
    scholarships: "Bourses",
    planJourney: "Planifier",
    freeConsultation: "Recevoir mon plan gratuit",
    mobilePlan: "Plan"
  },
  ko: {
    exploreChina: "중국 지도",
    culture: "문화",
    universities: "대학",
    studentLife: "도시",
    life: "생활 가이드",
    community: "커뮤니티",
    globalCheckin: "글로벌 체크인",
    scholarships: "장학금",
    planJourney: "유학 계획",
    freeConsultation: "무료 유학 플랜",
    mobilePlan: "계획"
  },
  th: {
    exploreChina: "แผนที่จีน",
    culture: "วัฒนธรรม",
    universities: "มหาวิทยาลัย",
    studentLife: "เมือง",
    life: "คู่มือชีวิต",
    community: "ชุมชน",
    globalCheckin: "เช็กอินทั่วโลก",
    scholarships: "ทุนการศึกษา",
    planJourney: "วางแผนเรียน",
    freeConsultation: "รับแผนเรียนฟรี",
    mobilePlan: "แผน"
  },
  id: {
    exploreChina: "Peta Tiongkok",
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
    exploreChina: "Peta China",
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
    exploreChina: "China Map",
    culture: "Culture",
    universities: "Universities",
    studentLife: "Cities",
    life: "Life Guide",
    community: "Community",
    globalCheckin: "Global Check-in",
    scholarships: "Scholarships",
    planJourney: "Plan Study",
    freeConsultation: "Free study plan",
    mobilePlan: "Plan"
  },
  km: {
    exploreChina: "China Map",
    culture: "Culture",
    universities: "Universities",
    studentLife: "Cities",
    life: "Life Guide",
    community: "Community",
    globalCheckin: "Global Check-in",
    scholarships: "Scholarships",
    planJourney: "Plan Study",
    freeConsultation: "Free study plan",
    mobilePlan: "Plan"
  },
  lo: {
    exploreChina: "China Map",
    culture: "Culture",
    universities: "Universities",
    studentLife: "Cities",
    life: "Life Guide",
    community: "Community",
    globalCheckin: "Global Check-in",
    scholarships: "Scholarships",
    planJourney: "Plan Study",
    freeConsultation: "Free study plan",
    mobilePlan: "Plan"
  },
  tl: {
    exploreChina: "Mapa ng Tsina",
    culture: "Kultura",
    universities: "Mga Unibersidad",
    studentLife: "Mga Lungsod",
    life: "Gabay sa Buhay",
    community: "Komunidad",
    globalCheckin: "Global Check-in",
    scholarships: "Scholarships",
    planJourney: "Planuhin",
    freeConsultation: "Libreng study plan",
    mobilePlan: "Plano"
  },
  ru: {
    exploreChina: "Карта Китая",
    culture: "Культура",
    universities: "Университеты",
    studentLife: "Города",
    life: "Гид по жизни",
    community: "Сообщество",
    globalCheckin: "Глобальный check-in",
    scholarships: "Стипендии",
    planJourney: "План обучения",
    freeConsultation: "Бесплатный план",
    mobilePlan: "План"
  },
  tr: {
    exploreChina: "Çin Haritası",
    culture: "Kültür",
    universities: "Üniversiteler",
    studentLife: "Şehirler",
    life: "Yaşam Rehberi",
    community: "Topluluk",
    globalCheckin: "Küresel Check-in",
    scholarships: "Burslar",
    planJourney: "Planla",
    freeConsultation: "Ücretsiz eğitim planı",
    mobilePlan: "Plan"
  }
};

const mobileExtraItems = [
  { href: "/china-map", label: { en: "China Map", zh: "中国地图", vi: "Bản đồ Trung Quốc", fr: "Carte de Chine" } },
  { href: "/scholarship-opportunities", label: { en: "Scholarship Watchlist", zh: "奖学金机会库", vi: "Danh sách học bổng", fr: "Bourses à vérifier" } }
] as const;

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
                <Link
                  key={item.href}
                  href={localize(item.href)}
                  onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                  className="flex min-h-11 items-center px-4 py-2 hover:bg-blue-50 hover:text-primary"
                >
                  {copy[item.key]}
                </Link>
              ))}
              {mobileExtraItems.map((item) => (
                <Link
                  key={item.href}
                  href={localize(item.href)}
                  onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                  className="flex min-h-11 items-center px-4 py-2 text-primary hover:bg-blue-50"
                >
                  {item.label[locale as keyof typeof item.label] ?? item.label.en}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
