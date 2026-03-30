import { lazy, Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAlunos } from '../../modules/aluno/hooks/useAlunos';
import { useFinanceiro } from '../../modules/pagamentos/hooks/useFinanceiro';

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

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-4 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 h-56 animate-pulse rounded-2xl bg-zinc-800/60" />
        </div>
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-4 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-7 w-44 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
    </div>
  );
}

export default function AreaDoProfessor() {
  const { data: alunos, loading } = useAlunos();
  const { resumo, alunosEmRisco, loading: financeiroLoading } = useFinanceiro();

  const stats = useMemo(() => {
    const totalAlunosAtivos = alunos.filter((aluno) => aluno.status === 'Ativo').length;
    const totalHoras = alunos.reduce((sum, aluno) => sum + (aluno.horasTotais || 0), 0);

    return {
      totalAlunosAtivos,
      totalHoras,
    };
  }, [alunos]);

  if (loading && alunos.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 px-8 py-6 text-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 shadow-none">
          Sincronizando academia...
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Painel do professor
            </span>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Área do professor</h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
                Visão executiva da academia com feedbacks, avisos, financeiro e alertas em tempo real.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/area-do-professor/feedbacks"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">post_add</span>
              Revisar feedbacks
            </Link>
            <Link
              to="/area-do-professor/avisos"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">campaign</span>
              Mural de avisos
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={<ProfessorDashboardSkeleton />}>
        <ProfessorDashboardContent
          alunos={alunos}
          financeiroLoading={financeiroLoading}
          alunosEmRisco={alunosEmRisco}
          resumo={resumo}
          stats={stats}
        />
      </Suspense>
    </main>
  );
}
