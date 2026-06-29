import { auth } from "@/auth";

const adminRoles = new Set(["ADMIN", "SUPER_ADMIN", "COUNSELOR"]);

export async function requireAdmin() {
  const session = await auth();

  if (!session?.user?.role || !adminRoles.has(String(session.user.role))) {
    return null;
  }

  return session;
}
