type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={`text-sm font-semibold uppercase tracking-wide ${dark ? "text-secondary" : "text-primary"}`}>{eyebrow}</p> : null}
      <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}
