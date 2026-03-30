import { Suspense, lazy } from 'react';

const FinanceiroDashboardContent = lazy(() => import('./FinanceiroDashboardContent'));

function FinanceiroSkeleton() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-4 w-28 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-9 w-72 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="h-3 w-20 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
          <div className="flex gap-3">
            <div className="h-12 w-36 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-12 w-28 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-4 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-48 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function FinanceiroProfessorPage() {
  return (
    <Suspense fallback={<FinanceiroSkeleton />}>
      <FinanceiroDashboardContent />
    </Suspense>
  );
}
