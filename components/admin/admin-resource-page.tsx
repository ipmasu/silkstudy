type AdminResourcePageProps = {
  title: string;
  description: string;
  columns: string[];
  rows: string[][];
};

export function AdminResourcePage({ title, description, columns, rows }: AdminResourcePageProps) {
  return (
    <main className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">CMS</p>
            <h1 className="mt-3 text-4xl font-bold text-ink">{title}</h1>
            <p className="mt-3 max-w-3xl text-slate-600">{description}</p>
          </div>
          <button type="button" className="min-h-11 rounded-md bg-primary px-5 text-sm font-semibold text-white">
            Add New
          </button>
        </div>
        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                {columns.map((column) => (
                  <th key={column} className="px-5 py-4 font-semibold">{column}</th>
                ))}
                <th className="px-5 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, rowIndex) => (
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
    </main>
  );
}
