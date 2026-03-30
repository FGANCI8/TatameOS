import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const FrequenciaContent = lazy(() => import('./FrequenciaContent'));

function FrequenciaSkeleton() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-28 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-9 w-72 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-4 w-28 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-4 space-y-3">
            <div className="h-12 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-24 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-12 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="mt-4 space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FrequenciaPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Frequência avançada</p>
            <h1 className="font-headline text-4xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
              Validação de check-in
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Valide o QR do aluno ou faça o check-in manual da turma com precisão e isolamento por tenant.
            </p>
          </div>

          <Link
            to="/area-do-professor"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Voltar ao painel
          </Link>
        </div>
      </section>

      <Suspense fallback={<FrequenciaSkeleton />}>
        <FrequenciaContent />
      </Suspense>
    </main>
  );
}
