"use client";

import { Link2 } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

const mediaTypes = ["LOGO", "COVER", "PHOTO", "VIDEO"];

export function UniversityMediaAttachPanel() {
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const universityId = String(formData.get("universityId") ?? "").trim();
    const payload = {
      type: String(formData.get("type") ?? "PHOTO"),
      url: String(formData.get("url") ?? ""),
      alt: String(formData.get("alt") ?? ""),
      publicId: String(formData.get("publicId") ?? ""),
      sortOrder: Number(formData.get("sortOrder") ?? 0)
    };

    const response = await fetch(`/api/admin/universities/${universityId}/media`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setStatus("error");
      setMessage(data?.message ?? "Could not attach media. Confirm login, database, university ID, and URL.");
      return;
    }

    setStatus("success");
    setMessage("Media record attached to the university.");
    event.currentTarget.reset();
  }

  return (
    <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
          <Link2 size={22} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-ink">Attach media to university</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use the university slug or database ID with the Cloudinary URL returned above.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          University slug or ID
          <input name="universityId" required placeholder="peking-university" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          Type
          <select name="type" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary">
            {mediaTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-ink md:col-span-2">
          Media URL
          <input name="url" type="url" required className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          Alt text
          <input name="alt" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          Public ID
          <input name="publicId" className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <label className="text-sm font-medium text-ink">
          Sort order
          <input name="sortOrder" type="number" defaultValue={0} className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary" />
        </label>
        <div className="flex items-end">
          <button
            type="submit"
            disabled={status === "saving"}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white disabled:bg-slate-400"
          >
            {status === "saving" ? "Saving..." : "Attach Media"}
          </button>
        </div>
      </form>
      {message ? <p className={`mt-4 text-sm font-medium ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>{message}</p> : null}
    </section>
  );
}
