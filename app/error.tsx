"use client";

export default function ErrorPage({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-surface py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Something went wrong</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">We could not load this page</h1>
        <p className="mt-4 text-slate-600">Please retry. If the issue continues, the team can inspect the server logs.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 min-h-11 rounded-md bg-primary px-5 text-sm font-semibold text-white"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
