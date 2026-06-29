"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { BarChart3, Database, FileSearch, GraduationCap, Import, LogOut, MapPinned, MessageSquareText, Plane, Users } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { href: "/admin", label: "Overview", icon: BarChart3 },
  { href: "/admin/universities", label: "Schools", icon: GraduationCap },
  { href: "/admin/catalog", label: "Catalog QA", icon: Database },
  { href: "/admin/cities", label: "Cities", icon: MapPinned },
  { href: "/admin/majors", label: "Majors", icon: FileSearch },
  { href: "/admin/consultations", label: "CRM", icon: Users },
  { href: "/admin/reviews", label: "Reviews", icon: MessageSquareText },
  { href: "/admin/community", label: "Community", icon: MessageSquareText },
  { href: "/admin/social-imports", label: "Social Imports", icon: Import },
  { href: "/admin/travel-imports", label: "Travel Imports", icon: Plane },
  { href: "/admin/seo", label: "SEO", icon: BarChart3 }
];

export function AdminShell({ children, userName }: { children: ReactNode; userName?: string | null }) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">SilkStudy CMS</p>
            <p className="mt-1 text-sm text-slate-500">Signed in as {userName ?? "Admin"}</p>
          </div>
          <button
            type="button"
            onClick={() => void signOut({ callbackUrl: "/login" })}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary"
          >
            <LogOut size={16} aria-hidden="true" />
            Sign out
          </button>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-primary"
              >
                <Icon size={16} aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      {children}
    </div>
  );
}
