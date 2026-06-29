import { MapPin, Trophy } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { UniversityLogo } from "@/components/universities/university-logo";
import { UniversityGateVisual } from "@/components/universities/university-gate-visual";
import { getUniversityMedia } from "@/lib/media/university-media";
import type { University } from "@/lib/site-data";

export async function UniversityCard({ university }: { university: University }) {
  const locale = await getLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;
  const media = getUniversityMedia(university);
  const cover = media.find((item) => item.type === "COVER");
  const logo = media.find((item) => item.type === "LOGO");
  const hasVerifiedRanking = university.qsRanking > 0 && university.qsRanking < 900;
  const tuitionLabel = locale === "zh" ? "学费" : locale === "vi" ? "Học phí" : "Tuition";

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-slate-100 bg-[linear-gradient(145deg,#F7FAFC_0%,#EAF5FF_100%)]">
        <UniversityGateVisual name={university.name} chineseName={university.chineseName} gateUrl={cover?.url} gateAlt={cover?.alt} logoUrl={logo?.url} locale={locale} compact />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-ink">{university.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{university.chineseName}</p>
          </div>
          <UniversityLogo name={university.name} src={logo?.url} className="h-12 w-12 shrink-0 rounded-md border border-slate-200" imageClassName="p-1" />
        </div>
        <div className="mt-5 grid gap-3 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <Trophy size={16} aria-hidden="true" />
            {hasVerifiedRanking ? `QS Ranking #${university.qsRanking}` : (locale === "zh" ? "排名待核验" : locale === "vi" ? "Xếp hạng đang xác minh" : "Ranking to verify")}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            {university.location}
          </p>
          <p>{tuitionLabel}: {university.tuition}</p>
        </div>
        <div className="mt-5">
          <ButtonLink href={`${prefix}/universities/${university.slug}`}>{locale === "zh" ? "查看详情" : locale === "vi" ? "Xem chi tiết" : "Apply"}</ButtonLink>
        </div>
      </div>
    </article>
  );
}

