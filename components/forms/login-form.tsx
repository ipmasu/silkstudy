"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin";
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const response = await signIn("credentials", {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      redirect: false,
      callbackUrl
    });

    setIsSubmitting(false);

    if (response?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold text-ink">Admin login</h1>
      <label className="mt-6 block text-sm font-medium text-ink">
        Email
        <input name="email" type="email" required className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
      </label>
      <label className="mt-4 block text-sm font-medium text-ink">
        Password
        <input name="password" type="password" required className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
      </label>
      <button type="submit" disabled={isSubmitting} className="mt-6 min-h-11 w-full rounded-md bg-primary px-5 text-sm font-semibold text-white disabled:bg-slate-400">
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
      {error ? <p className="mt-4 text-sm font-medium text-red-600">{error}</p> : null}
    </form>
  );
}
