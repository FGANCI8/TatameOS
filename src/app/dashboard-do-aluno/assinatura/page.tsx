import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const AssinaturaContent = lazy(() => import('./AssinaturaContent'));

function AssinaturaSkeleton() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-8 w-72 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
        </div>
        <div className="mt-6 space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default function AssinaturaAlunoPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Autoatendimento
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Minha assinatura
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Acompanhe o status da sua assinatura, veja o histórico básico e acesse o portal oficial do Stripe quando disponível.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard-do-aluno"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Voltar ao painel
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={<AssinaturaSkeleton />}>
        <AssinaturaContent />
      </Suspense>
    </main>
  );
}
