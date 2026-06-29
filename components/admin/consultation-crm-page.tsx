"use client";

import Link from "next/link";
import { Mail, Phone, RefreshCw, Save } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type LeadRecord = {
  id?: string;
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phone?: string | null;
  targetDegree?: string | null;
  targetMajor?: string | null;
  budgetUsd?: number | null;
  preferredCity?: string | null;
  status: string;
  createdAt?: string;
  crmNotes?: { id?: string; content: string; createdAt?: string }[];
};

type CrmState = {
  status: "loading" | "ready" | "error";
  leads: LeadRecord[];
  message?: string;
  source: "api" | "fallback";
};

const statuses = ["NEW", "CONTACTED", "APPLIED", "CONVERTED", "LOST"];

function formatDate(value?: string) {
  if (!value) return "Starter";
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function formatBudget(value?: number | null) {
  if (!value) return "Not set";
  return `$${value.toLocaleString()}`;
}

export function ConsultationCrmPage({ fallbackLeads }: { fallbackLeads: LeadRecord[] }) {
  const [state, setState] = useState<CrmState>({
    status: "ready",
    leads: fallbackLeads,
    source: "fallback"
  });
  const [savingId, setSavingId] = useState<string | null>(null);
  const [statusDrafts, setStatusDrafts] = useState<Record<string, string>>({});
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});
  const statusCounts = statuses.reduce<Record<string, number>>((counts, status) => {
    counts[status] = state.leads.filter((lead) => lead.status === status).length;
    return counts;
  }, {});
  const activeLeads = state.leads.filter((lead) => !["CONVERTED", "LOST"].includes(lead.status)).length;

  const loadLeads = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", message: undefined }));

    try {
      const response = await fetch("/api/admin/consultations");
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setState({
          status: "error",
          leads: fallbackLeads,
          message: data?.message ?? "CRM API is unavailable. Showing starter leads.",
          source: "fallback"
        });
        return;
      }

      const results = Array.isArray(data?.results) ? data.results as LeadRecord[] : [];
      setState({
        status: "ready",
        leads: results,
        source: "api"
      });
      setStatusDrafts(Object.fromEntries(results.filter((lead) => lead.id).map((lead) => [lead.id, lead.status])));
    } catch {
      setState({
        status: "error",
        leads: fallbackLeads,
        message: "Could not reach the CRM API. Showing starter leads.",
        source: "fallback"
      });
    }
  }, [fallbackLeads]);

  useEffect(() => {
    void loadLeads();
  }, [loadLeads]);

  async function updateLead(lead: LeadRecord) {
    if (!lead.id) return;

    setSavingId(lead.id);
    const response = await fetch(`/api/admin/consultations/${lead.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: statusDrafts[lead.id] ?? lead.status,
        note: noteDrafts[lead.id] ?? ""
      })
    });

    if (response.ok) {
      setNoteDrafts((drafts) => ({ ...drafts, [lead.id as string]: "" }));
      await loadLeads();
    }

    setSavingId(null);
  }

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">CRM</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">Consultation CRM</h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              View leads, update statuses, add CRM notes, and export reports for counselors.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/api/admin/consultations/export" className="inline-flex min-h-11 items-center rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-primary">
              Export Excel CSV
            </Link>
            <button
              type="button"
              onClick={() => void loadLeads()}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-primary"
            >
              <RefreshCw size={16} aria-hidden="true" />
              Refresh
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <div className="rounded-lg border border-slate-200 bg-white p-4 lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Active Leads</p>
            <p className="mt-2 text-3xl font-bold text-ink">{activeLeads}</p>
            <p className="mt-1 text-xs text-slate-500">Open counselor workload</p>
          </div>
          {statuses.map((status) => (
            <div key={status} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{status}</p>
              <p className="mt-2 text-2xl font-bold text-primary">{statusCounts[status] ?? 0}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm">
            <span className="font-semibold text-ink">{state.leads.length} leads</span>
            <span className={`rounded px-2 py-1 text-xs font-bold uppercase ${state.source === "api" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
              {state.source === "api" ? "Live database" : "Starter dataset"}
            </span>
          </div>
          {state.status === "loading" ? <div className="p-6 text-sm text-slate-600">Loading CRM data...</div> : null}
          {state.status === "error" && state.message ? <div className="border-b border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">{state.message}</div> : null}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1320px] border-collapse text-left text-sm">
              <thead className="bg-white text-slate-500">
                <tr>
                  {["Lead", "Contact", "Study Goal", "Budget / City", "Status", "Latest Note", "Follow-up Note", "Actions"].map((column) => (
                    <th key={column} className="px-5 py-4 font-semibold">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {state.leads.map((lead, index) => {
                  const key = lead.id ?? `fallback-${index}`;
                  const live = Boolean(lead.id);

                  return (
                    <tr key={key} className="align-top text-ink">
                      <td className="px-5 py-4">
                        <p className="font-semibold">{lead.firstName} {lead.lastName}</p>
                        <p className="mt-1 text-xs text-slate-500">{lead.country}</p>
                        <p className="mt-1 text-xs text-slate-500">{formatDate(lead.createdAt)}</p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="flex items-center gap-2"><Mail size={14} className="text-primary" /> {lead.email}</p>
                        <p className="mt-2 flex items-center gap-2 text-slate-600"><Phone size={14} className="text-primary" /> {lead.phone || "No phone"}</p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-semibold">{lead.targetMajor || "Not set"}</p>
                        <p className="mt-1 text-xs text-slate-500">{lead.targetDegree || "Degree not set"}</p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-semibold">{formatBudget(lead.budgetUsd)}</p>
                        <p className="mt-1 text-xs text-slate-500">{lead.preferredCity || "City not set"}</p>
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={statusDrafts[key] ?? lead.status}
                          disabled={!live}
                          onChange={(event) => setStatusDrafts((drafts) => ({ ...drafts, [key]: event.target.value }))}
                          className="h-10 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-primary disabled:bg-slate-100"
                        >
                          {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
                        </select>
                      </td>
                      <td className="px-5 py-4 max-w-[260px]">
                        <p className="text-sm text-slate-600">{lead.crmNotes?.[0]?.content ?? "No notes yet"}</p>
                      </td>
                      <td className="px-5 py-4">
                        <textarea
                          value={noteDrafts[key] ?? ""}
                          disabled={!live}
                          onChange={(event) => setNoteDrafts((drafts) => ({ ...drafts, [key]: event.target.value }))}
                          placeholder={live ? "Add counselor note" : "Connect database to add notes"}
                          rows={2}
                          className="w-64 rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-primary disabled:bg-slate-100"
                        />
                      </td>
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          disabled={!live || savingId === lead.id}
                          onClick={() => void updateLead(lead)}
                          className="inline-flex min-h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-white disabled:bg-slate-400"
                        >
                          <Save size={15} aria-hidden="true" />
                          {savingId === lead.id ? "Saving" : "Save"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
