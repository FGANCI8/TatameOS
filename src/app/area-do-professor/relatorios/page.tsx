import { lazy, Suspense } from 'react';

const RelatoriosGerenciaisContent = lazy(() => import('./RelatoriosGerenciaisContent'));

function RelatoriosSkeleton() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-10 w-80 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-28 animate-pulse rounded-[28px] border border-zinc-800/80 bg-zinc-800/60" />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-64 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 space-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-14 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AreaDoProfessorRelatoriosPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Relatórios gerenciais
            </span>
            <h1 className="font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Retenção e churn
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Consolidação executiva da base, convites, faturamento e sinais de evasão do tenant atual.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<RelatoriosSkeleton />}>
        <RelatoriosGerenciaisContent />
      </Suspense>
    </main>
  );
}
