import { lazy, Suspense } from 'react';

const PainelDoProfessorContent = lazy(() => import('./PainelDoProfessorContent'));

function PainelDoProfessorSkeleton() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="h-10 w-80 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-4 w-full max-w-3xl animate-pulse rounded-full bg-zinc-800/60" />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="h-12 w-36 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-12 w-32 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-32 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="h-96 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
        <div className="h-96 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
      </section>
    </main>
  );
}

export default function PainelDoProfessorPage() {
  return (
    <Suspense fallback={<PainelDoProfessorSkeleton />}>
      <PainelDoProfessorContent />
    </Suspense>
  );
}
