import { Suspense } from "react";
import { LoginForm } from "@/components/forms/login-form";

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
