import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { auth } from "@/auth";
import { AdminShell } from "@/components/admin/admin-shell";

const adminRoles = new Set(["ADMIN", "SUPER_ADMIN", "COUNSELOR"]);

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session?.user?.role || !adminRoles.has(String(session.user.role))) {
    redirect("/login?callbackUrl=/admin");
  }

  return <AdminShell userName={session.user.name ?? session.user.email}>{children}</AdminShell>;
}
