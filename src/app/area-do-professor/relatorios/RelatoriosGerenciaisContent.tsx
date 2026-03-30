import { useMemo } from 'react';
import { useRelatoriosGerenciais } from '../../../modules/relatorios-gerenciais/hooks/useRelatoriosGerenciais';

function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function monthOptions() {
  return [
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Fev' },
    { value: 3, label: 'Mar' },
    { value: 4, label: 'Abr' },
    { value: 5, label: 'Mai' },
    { value: 6, label: 'Jun' },
    { value: 7, label: 'Jul' },
    { value: 8, label: 'Ago' },
    { value: 9, label: 'Set' },
    { value: 10, label: 'Out' },
    { value: 11, label: 'Nov' },
    { value: 12, label: 'Dez' },
  ];
}

export default function RelatoriosGerenciaisContent() {
  const { resumo, loading, error, mes, ano, setMes, setAno, carregarResumo } = useRelatoriosGerenciais();
  const months = useMemo(() => monthOptions(), []);
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return [currentYear - 1, currentYear, currentYear + 1];
  }, []);

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Período analisado</p>
            <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
              Ajustar janela
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              Os indicadores abaixo consolidam os dados do tenant e usam o período selecionado como referência principal.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <label className="flex min-w-[140px] flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Mês</span>
              <select
                value={mes}
                onChange={(event) => void setMes(Number(event.target.value))}
                className="bg-transparent text-sm font-bold text-white outline-none"
              >
                {months.map((item) => (
                  <option key={item.value} value={item.value} className="bg-zinc-950">
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex min-w-[120px] flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Ano</span>
              <select
                value={ano}
                onChange={(event) => void setAno(Number(event.target.value))}
                className="bg-transparent text-sm font-bold text-white outline-none"
              >
                {years.map((year) => (
                  <option key={year} value={year} className="bg-zinc-950">
                    {year}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => void carregarResumo(mes, ano)}
              className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
            >
              Atualizar
            </button>
          </div>
        </div>

        {error ? (
          <div className="mt-4 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            {error}
          </div>
        ) : null}
      </section>

      {resumo ? (
        <>
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Alunos ativos</p>
              <p className="mt-3 font-headline text-4xl font-black italic text-white">{resumo.alunosAtivos}</p>
              <p className="mt-2 text-sm text-zinc-400">{resumo.alunosSuspensos} suspensos e {resumo.alunosInativos} inativos</p>
            </article>

            <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Churn mensal</p>
              <p className="mt-3 font-headline text-4xl font-black italic text-white">{resumo.churnRateMensal.toFixed(1)}%</p>
              <p className="mt-2 text-sm text-zinc-400">Base estimada no período selecionado</p>
            </article>

            <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">LTV estimado</p>
              <p className="mt-3 font-headline text-4xl font-black italic text-white">{formatCurrency(resumo.ltvEstimado)}</p>
              <p className="mt-2 text-sm text-zinc-400">Receita média por aluno versus churn</p>
            </article>

            <article className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">Convites</p>
              <p className="mt-3 font-headline text-4xl font-black italic text-white">{resumo.convites.taxaConversaoPercentual.toFixed(1)}%</p>
              <p className="mt-2 text-sm text-brand-red/80">
                {resumo.convites.convitesConsumidos} convertidos de {resumo.convites.totalConvites}
              </p>
            </article>
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Tendência</p>
                  <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                    Churn e receita em 6 meses
                  </h3>
                </div>
                <p className="text-sm text-zinc-400">Métricas consolidadas por mês</p>
              </div>

              <div className="mt-6 space-y-3">
                {resumo.serie6Meses.map((item) => (
                  <div key={item.mesReferencia} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-black uppercase tracking-tight text-white">{item.label}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
                          {item.cancelamentos} cancelamento(s) | base {item.baseAtivaEstimativa}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Churn</p>
                        <p className="font-headline text-2xl font-black italic text-white">{item.churnRate.toFixed(1)}%</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-brand-red/60"
                          style={{ width: `${Math.min(100, item.churnRate * 5 + 5)}%` }}
                        />
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-zinc-300"
                          style={{ width: `${Math.min(100, resumo.receitaMediaMensal > 0 ? (item.receita / resumo.receitaMediaMensal) * 100 : 0)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Distribuição</p>
                <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                  Sinais de risco
                </h3>

                <div className="mt-6 space-y-3">
                  {resumo.topSinaisRisco.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-black uppercase tracking-tight text-white">{item.label}</span>
                        <span className="font-headline text-2xl font-black italic text-brand-red">{item.total}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Motivos de cancelamento</p>
                <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                  Origem da evasão
                </h3>

                <div className="mt-6 space-y-3">
                  {resumo.motivosCancelamento.length > 0 ? (
                    resumo.motivosCancelamento.map((item) => (
                      <div key={item.chave} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-black uppercase tracking-tight text-white">{item.label}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{item.percentual.toFixed(1)}%</p>
                          </div>
                          <span className="font-headline text-2xl font-black italic text-white">{item.total}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm text-zinc-400">
                      Ainda não há eventos suficientes para classificar motivos de cancelamento.
                    </div>
                  )}
                </div>
              </section>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Faturamento no mês</p>
              <p className="mt-3 font-headline text-3xl font-black italic text-white">{formatCurrency(resumo.faturamentoMensal)}</p>
            </article>

            <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Receita média</p>
              <p className="mt-3 font-headline text-3xl font-black italic text-white">{formatCurrency(resumo.receitaMediaMensal)}</p>
            </article>

            <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Churn acumulado 6m</p>
              <p className="mt-3 font-headline text-3xl font-black italic text-white">{resumo.churnRateAcumulado6m.toFixed(1)}%</p>
            </article>

            <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Inadimplentes ativos</p>
              <p className="mt-3 font-headline text-3xl font-black italic text-white">{resumo.inadimplentesAtivos}</p>
            </article>
          </section>
        </>
      ) : loading ? (
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 text-sm text-zinc-400">
          Carregando relatório gerencial...
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-zinc-800 bg-zinc-900/80 p-6 text-sm text-zinc-400">
          Nenhum dado disponível para o período selecionado.
        </div>
      )}
    </div>
  );
}
