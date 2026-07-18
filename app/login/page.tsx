import { Suspense } from "react";
import { LoginForm } from "@/components/forms/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  robots: {
    index: false,
    follow: false
  }
};

export default function LoginPage() {
  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-md px-4">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
