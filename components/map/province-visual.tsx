"use client";

import { useEffect, useState } from "react";
import { ImageIcon, MapPin } from "lucide-react";

type ProvinceVisualProps = {
  src: string;
  alt: string;
  provinceName: string;
  topic: string;
  region: string;
};

export function ProvinceVisual({ src, alt, provinceName, topic, region }: ProvinceVisualProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(145deg,#0052CC_0%,#0079BF_48%,#00B8D9_100%)] p-5 text-white">
        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-md border border-white/20 bg-white/10">
          <ImageIcon size={24} aria-hidden="true" />
        </div>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cyan-100">
          <MapPin size={14} aria-hidden="true" />
          {region}
        </p>
        <p className="mt-2 text-3xl font-bold">{provinceName}</p>
        <p className="mt-1 text-sm text-blue-50">{topic}</p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={src}
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
