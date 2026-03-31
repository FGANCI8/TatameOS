import { ChurnAlertWidget } from '../../../components/ChurnAlertWidget';
import { useGym } from '../../../contexts/GymContext';
import { useFinanceiro } from '../../../modules/pagamentos/hooks/useFinanceiro';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function FinanceiroWidget() {
  const { selectedGym } = useGym();
  const { resumo, alunosEmRisco, loading, error } = useFinanceiro(selectedGym?.id ?? null);

  if (!selectedGym) {
    return (
      <section className="rounded-[28px] border border-dashed border-zinc-800/80 bg-zinc-900/60 p-6 text-sm text-zinc-400">
        Aguardando seleção de academia
      </section>
    );
  }

  if (loading && !resumo) {
    return (
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
        <div className="mt-3 h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-6 text-sm text-brand-red">
        {error}
      </section>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Financeiro</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Resumo financeiro</h2>
          </div>
          {resumo ? (
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {resumo.periodo.mesReferencia}
            </span>
          ) : null}
        </div>

        {resumo ? (
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
        loading={loading && !resumo}
        emptyActionLabel="Abrir financeiro"
        emptyActionTo="/area-do-professor/financeiro"
      />
    </div>
  );
}
