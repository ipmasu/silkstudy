"use client";

import { Plus, RefreshCw, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

type AdminField = {
  name: string;
  label: string;
  type?: "text" | "number" | "url" | "textarea" | "checkbox" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
};

type AdminCrudPageProps = {
  title: string;
  description: string;
  endpoint: string;
  columns: string[];
  fallbackRows: string[][];
  fields?: AdminField[];
  mapRow: (item: Record<string, unknown>) => string[];
  createLabel?: string;
};

type ApiState = {
  status: "loading" | "ready" | "error";
  rows: string[][];
  message?: string;
  source: "api" | "fallback";
};

function fieldValue(value: FormDataEntryValue | null) {
  if (value === null) return "";
  return typeof value === "string" ? value : "";
}

export function AdminCrudPage({
  title,
  description,
  endpoint,
  columns,
  fallbackRows,
  fields = [],
  mapRow,
  createLabel = "Create"
}: AdminCrudPageProps) {
  const [state, setState] = useState<ApiState>({
    status: "ready",
    rows: fallbackRows,
    source: "fallback"
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const hasCreateForm = fields.length > 0;

  const loadRows = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", message: undefined }));

    try {
      const response = await fetch(endpoint);
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setState({
          status: "error",
          rows: fallbackRows,
          message: data?.message ?? "Database API is unavailable. Showing starter dataset.",
          source: "fallback"
        });
        return;
      }

      const results = Array.isArray(data?.results) ? data.results : [];
      setState({
        status: "ready",
        rows: results.map((item: Record<string, unknown>) => mapRow(item)),
        source: "api"
      });
    } catch {
      setState({
        status: "error",
        rows: fallbackRows,
        message: "Could not reach the CMS API. Showing starter dataset.",
        source: "fallback"
      });
    }
  }, [endpoint, fallbackRows, mapRow]);

  useEffect(() => {
    void loadRows();
  }, [loadRows]);

  const visibleRows = useMemo(() => state.rows.length > 0 ? state.rows : fallbackRows, [fallbackRows, state.rows]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("submitting");
    setSubmitMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(fields.map((field) => {
      if (field.type === "checkbox") {
        return [field.name, formData.get(field.name) === "on"];
      }

      return [field.name, fieldValue(formData.get(field.name))];
    }));

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setSubmitStatus("error");
      setSubmitMessage(data?.message ?? "Could not create record. Check login, database, and required fields.");
      return;
    }

    setSubmitStatus("success");
    setSubmitMessage("Record created. The table has been refreshed.");
    event.currentTarget.reset();
    await loadRows();
  }

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">CMS</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">{title}</h1>
            <p className="mt-3 max-w-3xl text-slate-600">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {hasCreateForm ? (
              <button
                type="button"
                onClick={() => setIsFormOpen((value) => !value)}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white"
              >
                <Plus size={16} aria-hidden="true" />
                Add New
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => void loadRows()}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-primary"
            >
              <RefreshCw size={16} aria-hidden="true" />
              Refresh
            </button>
          </div>
        </div>

        {isFormOpen && hasCreateForm ? (
          <form onSubmit={handleSubmit} className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <label key={field.name} className={field.type === "textarea" ? "text-sm font-medium text-ink md:col-span-2" : "text-sm font-medium text-ink"}>
                  {field.label}
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={4}
                      className="mt-2 w-full rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-primary"
                    />
                  ) : field.type === "select" ? (
                    <select
                      name={field.name}
                      required={field.required}
                      className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary"
                    >
                      <option value="">Select</option>
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  ) : field.type === "checkbox" ? (
                    <span className="mt-3 flex min-h-11 items-center gap-3 rounded-md border border-slate-200 px-3">
                      <input name={field.name} type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary" />
                      <span className="text-sm text-slate-600">{field.placeholder ?? "Enabled"}</span>
                    </span>
                  ) : (
                    <input
                      name={field.name}
                      type={field.type ?? "text"}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none focus:border-primary"
                    />
                  )}
                </label>
              ))}
            </div>
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white disabled:bg-slate-400"
            >
              <Send size={16} aria-hidden="true" />
              {submitStatus === "submitting" ? "Saving..." : createLabel}
            </button>
            {submitMessage ? (
              <p className={`mt-4 text-sm font-medium ${submitStatus === "error" ? "text-red-600" : "text-emerald-700"}`}>
                {submitMessage}
              </p>
            ) : null}
          </form>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm">
            <span className="font-semibold text-ink">{visibleRows.length} records</span>
            <span className={`rounded px-2 py-1 text-xs font-bold uppercase ${state.source === "api" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
              {state.source === "api" ? "Live database" : "Starter dataset"}
            </span>
          </div>
          {state.status === "loading" ? (
            <div className="p-6 text-sm text-slate-600">Loading CMS data...</div>
          ) : null}
          {state.status === "error" && state.message ? (
            <div className="border-b border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">{state.message}</div>
          ) : null}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead className="bg-white text-slate-500">
                <tr>
                  {columns.map((column) => (
                    <th key={column} className="px-5 py-4 font-semibold">{column}</th>
                  ))}
                  <th className="px-5 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {visibleRows.map((row, rowIndex) => (
                  <tr key={`${row.join("-")}-${rowIndex}`} className="text-ink">
                    {row.map((cell, cellIndex) => (
                      <td key={`${cell}-${cellIndex}`} className="px-5 py-4">{cell}</td>
                    ))}
                    <td className="px-5 py-4">
                      <button type="button" className="text-sm font-semibold text-primary">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
