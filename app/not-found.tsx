import { ButtonLink } from "@/components/common/button-link";

export default function NotFound() {
  return (
    <main className="bg-surface py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page may have moved, or the university, city, province, or major is not in the current dataset.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Back to homepage</ButtonLink>
        </div>
      </div>
    </main>
  );
}
