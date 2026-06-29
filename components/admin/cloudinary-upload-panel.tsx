"use client";

import { UploadCloud } from "lucide-react";
import { useState } from "react";

type SignatureResponse = {
  cloudName?: string;
  apiKey?: string;
  timestamp: number;
  folder: string;
  signature: string;
};

export function CloudinaryUploadPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [folder, setFolder] = useState("silkstudy/universities/general");
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");

  async function handleUpload() {
    if (!file) {
      setStatus("error");
      setMessage("Choose an image or video first.");
      return;
    }

    setStatus("uploading");
    setMessage("");
    setUploadedUrl("");

    const signatureResponse = await fetch("/api/admin/cloudinary-signature", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folder })
    });
    const signature = await signatureResponse.json().catch(() => null) as SignatureResponse | null;

    if (!signatureResponse.ok || !signature?.cloudName || !signature.apiKey) {
      setStatus("error");
      setMessage("Cloudinary is not configured. Add credentials to .env first.");
      return;
    }

    const formData = new FormData();
    formData.set("file", file);
    formData.set("api_key", signature.apiKey);
    formData.set("timestamp", String(signature.timestamp));
    formData.set("folder", signature.folder);
    formData.set("signature", signature.signature);

    const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${signature.cloudName}/auto/upload`, {
      method: "POST",
      body: formData
    });
    const upload = await uploadResponse.json().catch(() => null);

    if (!uploadResponse.ok || typeof upload?.secure_url !== "string") {
      setStatus("error");
      setMessage(upload?.error?.message ?? "Upload failed.");
      return;
    }

    setStatus("success");
    setUploadedUrl(upload.secure_url);
    setMessage("Upload complete. Copy this URL into the school media form or API payload.");
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
          <UploadCloud size={22} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-ink">Cloudinary media upload</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Upload logos, covers, campus photos, and videos. After upload, attach the returned URL to a university media record.
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_auto]">
        <label className="text-sm font-medium text-ink">
          Folder
          <input
            value={folder}
            onChange={(event) => setFolder(event.target.value)}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          File
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          onClick={() => void handleUpload()}
          disabled={status === "uploading"}
          className="self-end inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white disabled:bg-slate-400"
        >
          {status === "uploading" ? "Uploading..." : "Upload"}
        </button>
      </div>
      {message ? (
        <p className={`mt-4 text-sm font-medium ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>{message}</p>
      ) : null}
      {uploadedUrl ? (
        <input readOnly value={uploadedUrl} className="mt-3 h-11 w-full rounded-md border border-slate-200 bg-surface px-3 text-sm text-slate-700" />
      ) : null}
    </section>
  );
}
