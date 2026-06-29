"use client";

import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

type UniversityLogoProps = {
  name: string;
  src?: string;
  className?: string;
  imageClassName?: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => !["of", "and", "the"].includes(part.toLowerCase()))
    .map((part) => part[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();
}

export function UniversityLogo({ name, src, className = "", imageClassName = "" }: UniversityLogoProps) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  return (
    <div className={`flex items-center justify-center overflow-hidden bg-white ${className}`}>
      {!failed && src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${name} official mark`}
          className={`h-full w-full object-contain ${imageClassName}`}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(145deg,#F2F7FF_0%,#E8FBFF_100%)] text-primary">
          <GraduationCap size={24} aria-hidden="true" />
          <span className="mt-1 text-xs font-black">{initials(name)}</span>
        </div>
      )}
    </div>
  );
}

