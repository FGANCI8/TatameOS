import { Link } from 'react-router-dom';
import { ChurnAlertWidget } from '../../components/ChurnAlertWidget';
import { NotificationCenterWidget } from '../../components/NotificationCenterWidget';
import type { Aluno, AlunoEmRiscoEvasao } from '../../modules/aluno/types';
import type { ResumoFinanceiro } from '../../modules/pagamentos/types';

type ProfessorDashboardContentProps = {
  alunos: Aluno[];
  financeiroLoading: boolean;
  alunosEmRisco: AlunoEmRiscoEvasao[];
  resumo: ResumoFinanceiro | null;
  stats: {
    totalAlunosAtivos: number;
    totalHoras: number;
  };
};

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ProfessorDashboardContent({
  alunos,
  financeiroLoading,
  alunosEmRisco,
  resumo,
  stats,
}: ProfessorDashboardContentProps) {
  return (
    <div className="space-y-8">
      <NotificationCenterWidget
        title="Central de alertas do professor"
        subtitle="Marcos de prontidão, convites e avisos da sua turma"
        emptyActionLabel="Criar novo aviso"
        emptyActionTo="/area-do-professor/avisos"
      />

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Financeiro</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Resumo financeiro</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              Visão rápida da arrecadação e da inadimplência do tenant atual.
            </p>
          </div>
          <Link
            to="/area-do-professor/financeiro"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
          >
            <span className="material-symbols-outlined text-[18px]">account_balance</span>
            Abrir financeiro
          </Link>
        </div>

        {financeiroLoading && !resumo ? (
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        ) : resumo ? (
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">Arrecadado no mês</p>
              <p className="mt-2 text-3xl font-black text-white">{formatCurrency(resumo.totalArrecadado)}</p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">Receita esperada</p>
              <p className="mt-2 text-3xl font-black text-white">{formatCurrency(resumo.receitaEsperada)}</p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">Pendente</p>
              <p className="mt-2 text-3xl font-black text-white">{formatCurrency(resumo.totalPendente)}</p>
            </article>
            <article className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Inadimplência</p>
              <p className="mt-2 text-3xl font-black text-white">{resumo.taxaInadimplencia.toFixed(1)}%</p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Atrasados</p>
              <p className="mt-2 text-3xl font-black text-white">{resumo.totalAtrasados}</p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Realizado / meta</p>
              <p className="mt-2 text-3xl font-black text-white">{resumo.percentualReceitaRealizada.toFixed(1)}%</p>
            </article>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/80 p-6 text-sm leading-7 text-zinc-400">
            Nenhum dado financeiro disponível no momento.
          </div>
        )}
      </section>

      <ChurnAlertWidget
        alunos={alunosEmRisco}
        loading={financeiroLoading && !resumo}
        emptyActionLabel="Abrir financeiro"
        emptyActionTo="/area-do-professor/financeiro"
      />

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Gerenciamento</p>
              <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Turmas e trilhas</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Acesso rápido às áreas operacionais da academia.
              </p>
            </div>
            <Link
              to="/area-do-professor/trilhas"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">groups</span>
              Montar trilhas
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 transition duration-200 hover:border-zinc-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300">
                  <span className="material-symbols-outlined text-4xl" data-weight="fill">
                    groups
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">Turma avançada A1</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Trilha: fundamentos do berimbolo</p>
                  <div className="h-2 w-52 overflow-hidden rounded-full bg-zinc-800">
                    <div className="h-full w-3/4 rounded-full bg-zinc-700" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-right">
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Alunos</span>
                  <span className="mt-1 block text-2xl font-black text-white">{stats.totalAlunosAtivos}</span>
                </div>
                <button
                  type="button"
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Feedbacks</p>
              <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Recentes</h2>
            </div>
            <Link
              to="/area-do-professor/feedbacks"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-200 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              Histórico
            </Link>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm leading-7 text-zinc-400">Feedbacks reais aguardando conexão do módulo de falhas.</p>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300">
                  <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight text-white">Amanda S.</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Relato recente</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 italic">
                Professor, a dica sobre a pegada na lapela durante o berimbolo mudou meu jogo.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alunos base</span>
          <div className="mt-2 text-4xl font-black text-white">{alunos.length}</div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Média de horas</span>
          <div className="mt-2 text-4xl font-black text-white">
            {alunos.length > 0 ? Math.round(stats.totalHoras / alunos.length) : 0}h
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Atividade global</span>
          <div className="mt-2 text-4xl font-black text-white">{stats.totalHoras}h</div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Ativos hoje</span>
          <div className="mt-2 text-4xl font-black text-white">{stats.totalAlunosAtivos}</div>
        </div>
      </section>
    </div>
  );
}
