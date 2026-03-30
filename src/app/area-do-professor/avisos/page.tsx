import { lazy, Suspense } from 'react';

const AvisosContent = lazy(() => import('./AvisosContent'));

function AvisosSkeleton() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="h-9 w-72 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="h-12 w-36 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-12 w-28 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-60 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-14 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
          <div className="mt-6 h-12 w-40 animate-pulse rounded-2xl bg-zinc-800/60" />
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AreaDoProfessorAvisosPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Comunicação
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Mural de avisos</h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Envie comunicados para toda a academia e acompanhe o histórico dos avisos já disparados.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<AvisosSkeleton />}>
        <AvisosContent />
      </Suspense>
    </main>
  );
}
