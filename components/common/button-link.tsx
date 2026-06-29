import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-primary text-white shadow-sm hover:bg-blue-700",
    secondary: "bg-secondary text-ink shadow-sm hover:bg-cyan-300",
    ghost: "border border-slate-200 bg-white text-ink hover:border-primary hover:text-primary"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
