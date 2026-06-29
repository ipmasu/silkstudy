"use client";

import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type AdminApiTableProps = {
  endpoint: string;
  title: string;
  description: string;
  columns: string[];
  mapRow: (item: Record<string, unknown>) => string[];
};

type ApiState = {
  status: "loading" | "ready" | "error";
  rows: string[][];
  message?: string;
};

export function AdminApiTable({ endpoint, title, description, columns, mapRow }: AdminApiTableProps) {
  const [state, setState] = useState<ApiState>({ status: "loading", rows: [] });

  const loadRows = useCallback(async () => {
    setState({ status: "loading", rows: [] });

    const response = await fetch(endpoint);
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setState({
        status: "error",
        rows: [],
        message: data?.message ?? "Could not load CMS data."
      });
      return;
    }

    const results = Array.isArray(data?.results) ? data.results : [];
    setState({
      status: "ready",
      rows: results.map((item: Record<string, unknown>) => mapRow(item))
    });
  }, [endpoint, mapRow]);

  useEffect(() => {
    void loadRows();
  }, [loadRows]);

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">CMS</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">{title}</h1>
            <p className="mt-3 max-w-3xl text-slate-600">{description}</p>
          </div>
          <button
            type="button"
            onClick={() => void loadRows()}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-primary"
          >
            <RefreshCw size={16} aria-hidden="true" />
            Refresh
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          {state.status === "loading" ? (
            <div className="p-6 text-sm text-slate-600">Loading CMS data...</div>
          ) : null}
          {state.status === "error" ? (
            <div className="p-6 text-sm text-red-600">{state.message}</div>
          ) : null}
          {state.status === "ready" ? (
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  {columns.map((column) => (
                    <th key={column} className="px-5 py-4 font-semibold">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {state.rows.length > 0 ? state.rows.map((row, rowIndex) => (
                  <tr key={`${row.join("-")}-${rowIndex}`} className="text-ink">
                    {row.map((cell, cellIndex) => (
                      <td key={`${cell}-${cellIndex}`} className="px-5 py-4">{cell}</td>
                    ))}
                  </tr>
                )) : (
                  <tr>
                    <td className="px-5 py-6 text-slate-600" colSpan={columns.length}>No records yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </main>
  );
}
