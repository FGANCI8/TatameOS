import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const ProfessorTrilhasContent = lazy(() => import('./ProfessorTrilhasContent'));

function ProfessorTrilhasSkeleton() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-28 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-8 w-72 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <div className="h-12 w-full animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-28 w-full animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="grid gap-3 md:grid-cols-2">
            <div className="h-12 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-12 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
        </div>

        <div className="mt-6 space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function TrilhasProfessorPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Trilhas de evolução
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Montar trilhas
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Estruture caminhos de aprendizado com técnicas da biblioteca, sem duplicar dados e mantendo o tenant isolado.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/area-do-professor"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Voltar ao painel
            </Link>
            <Link
              to="/area-do-professor/alunos"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              <span className="material-symbols-outlined text-[18px]">group</span>
              Ver alunos
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={<ProfessorTrilhasSkeleton />}>
        <ProfessorTrilhasContent />
      </Suspense>
    </main>
  );
}
