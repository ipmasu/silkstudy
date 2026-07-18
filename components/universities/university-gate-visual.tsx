"use client";

import { useEffect, useState } from "react";
import { UniversityLogo } from "@/components/universities/university-logo";

type UniversityGateVisualProps = {
  name: string;
  chineseName?: string;
  gateUrl?: string;
  gateAlt?: string;
  logoUrl?: string;
  locale?: string;
  compact?: boolean;
};

function ConceptGate({ name, chineseName, compact }: { name: string; chineseName?: string; compact: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-label={`${name} conceptual campus gate`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/university-concept-gate-photoreal.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
      <div className={`absolute left-1/2 top-[39%] w-[37%] -translate-x-1/2 -translate-y-1/2 text-center font-serif font-bold uppercase leading-tight text-[#d9c790] [text-shadow:0_1px_1px_#000,0_-1px_0_#4e493e] ${compact ? "text-[7px]" : "text-[11px] sm:text-xs"}`}>
        <span className="block overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
        {chineseName ? <span className={`mt-0.5 block font-sans font-semibold tracking-[0.12em] ${compact ? "text-[8px]" : "text-xs"}`}>{chineseName}</span> : null}
      </div>
    </div>
  );
}

export function UniversityGateVisual({ name, chineseName, gateUrl, gateAlt, logoUrl, locale = "en", compact = false }: UniversityGateVisualProps) {
  const [imageFailed, setImageFailed] = useState(!gateUrl);

  useEffect(() => {
    setImageFailed(!gateUrl);
  }, [gateUrl]);

  const hasImage = Boolean(gateUrl) && !imageFailed;
  const isGate = hasImage && /\bgate\b|entrance|校门/i.test(gateAlt ?? "");
  const label = hasImage
    ? (isGate ? (locale === "zh" ? "学校校门" : locale === "vi" ? "Cổng trường" : "University gate") : (locale === "zh" ? "校园影像" : locale === "vi" ? "Hình ảnh khuôn viên" : "Campus view"))
    : (locale === "zh" ? "概念校门视觉" : locale === "vi" ? "Hình ảnh cổng trường mô phỏng" : "Concept gate visual");

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-900">
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={gateUrl} alt={gateAlt ?? `${name} campus`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" referrerPolicy="no-referrer" onError={() => setImageFailed(true)} />
      ) : (
        <ConceptGate name={name} chineseName={chineseName} compact={compact} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />
      <UniversityLogo
        name={name}
        src={logoUrl}
        className={`absolute bottom-4 left-4 rounded-lg border border-white/60 shadow-md ${compact ? "h-16 w-16" : "h-20 w-20"}`}
        imageClassName="p-2"
      />
      <p className={`absolute bottom-5 right-4 font-bold text-white ${compact ? "left-24 text-sm" : "left-28 text-base"}`}>
        {label}
      </p>
    </div>
  );
}
