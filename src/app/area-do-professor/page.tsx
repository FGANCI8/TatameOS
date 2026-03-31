import { lazy, Suspense } from 'react';

const ProfessorDashboardContent = lazy(() => import('./ProfessorDashboardContent'));

function ProfessorDashboardSkeleton() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="h-3 w-28 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="h-9 w-72 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="h-12 w-36 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-12 w-32 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-44 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-7 w-64 animate-pulse rounded-2xl bg-zinc-800/60" />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function AreaDoProfessor() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <Suspense fallback={<ProfessorDashboardSkeleton />}>
        <ProfessorDashboardContent />
      </Suspense>
    </main>
  );
}
