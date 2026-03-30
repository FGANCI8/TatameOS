import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useFinanceiroExecutivo } from '../../../modules/financeiro-executivo/hooks/useFinanceiroExecutivo';

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function toneForRisk(status: 'saudavel' | 'atencao' | 'critico') {
  switch (status) {
    case 'critico':
      return 'border-brand-red/20 bg-brand-red/10 text-brand-red';
    case 'atencao':
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-200';
    default:
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
  }
}

function SectionSkeleton() {
  return <div className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />;
}

export default function FinanceiroDashboardContent() {
  const { resumo, loading, error, mes, ano, setMes, setAno, carregarResumo } = useFinanceiroExecutivo();

  const monthOptions = useMemo(
    () =>
      MONTHS.map((monthName, index) => ({
        value: index + 1,
        label: monthName,
      })),
    [],
  );

  const yearOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return [currentYear - 1, currentYear, currentYear + 1];
  }, []);

  const maxForecastValue = useMemo(() => {
    if (!resumo?.fluxoCaixa6Meses.length) {
      return 0;
    }

    return Math.max(...resumo.fluxoCaixa6Meses.map((item) => item.saldoAcumulado), 0);
  }, [resumo]);

  return (
    <main className="relative isolate mx-auto max-w-7xl space-y-8 overflow-hidden px-4 pb-32 pt-24 md:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-20"
      />

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Painel executivo
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Dashboard Financeiro Consolidado
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Projeção de fluxo de caixa para os próximos 6 meses com base em alunos ativos, valores atuais e
              inadimplência do tenant.
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
            <button
              type="button"
              onClick={() => void carregarResumo(mes, ano)}
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Atualizar
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Período base</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Filtrar consolidado</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <label className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Mês</span>
              <select
                value={mes}
                onChange={(event) => setMes(Number(event.target.value))}
                className="min-w-[150px] bg-transparent text-sm font-bold text-white outline-none"
              >
                {monthOptions.map((month) => (
                  <option key={month.value} value={month.value} className="bg-zinc-950">
                    {month.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Ano</span>
              <select
                value={ano}
                onChange={(event) => setAno(Number(event.target.value))}
                className="min-w-[120px] bg-transparent text-sm font-bold text-white outline-none"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year} className="bg-zinc-950">
                    {year}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {loading && !resumo ? (
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <SectionSkeleton key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="mt-6 rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-red">
            {error}
          </div>
        ) : resumo ? (
          <>
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Base mensal</p>
                <p className="mt-2 text-3xl font-black text-white">{formatCurrency(resumo.valorMensalBase)}</p>
                <p className="mt-2 text-xs text-zinc-500">Receita recorrente dos alunos ativos.</p>
              </article>
              <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alunos em atraso</p>
                <p className="mt-2 text-3xl font-black text-white">{resumo.alunosEmAtraso}</p>
                <p className="mt-2 text-xs text-zinc-500">Cobrança prioritária no tenant atual.</p>
              </article>
              <article className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Valor em atraso</p>
                <p className="mt-2 text-3xl font-black text-white">{formatCurrency(resumo.valorEmAtraso)}</p>
                <p className="mt-2 text-xs text-brand-red/80">Impacto financeiro já acumulado.</p>
              </article>
              <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Cobertura histórica</p>
                <p className="mt-2 text-3xl font-black text-white">
                  {(resumo.coberturaHistoricaMedia * 100).toFixed(0)}%
                </p>
                <p className="mt-2 text-xs text-zinc-500">Média dos últimos 6 meses.</p>
              </article>
              <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Saldo projetado</p>
                <p className="mt-2 text-3xl font-black text-white">{formatCurrency(resumo.saldoProjetado6Meses)}</p>
                <p className="mt-2 text-xs text-zinc-500">Somatório dos próximos 6 meses.</p>
              </article>
              <article className={`rounded-2xl border p-4 ${toneForRisk(resumo.statusRisco)}`}>
                <p className="text-[10px] font-black uppercase tracking-[0.25em]">Risco financeiro</p>
                <p className="mt-2 text-3xl font-black uppercase text-white">{resumo.statusRisco}</p>
                <p className="mt-2 text-xs opacity-80">Status consolidado do tenant.</p>
              </article>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Fluxo de caixa</p>
                    <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">6 meses projetados</h3>
                  </div>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                    {resumo.fluxoCaixa6Meses.length} períodos
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {resumo.fluxoCaixa6Meses.map((item) => (
                    <article key={item.mesReferencia} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                            {item.label}
                          </p>
                          <h4 className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                            Fluxo {item.mesReferencia}
                          </h4>
                        </div>
                        <span
                          className={`rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                            item.alerta
                              ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                              : 'border-zinc-800 bg-zinc-900/80 text-zinc-300'
                          }`}
                        >
                          {item.alerta || 'Estável'}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          <span>Receita bruta</span>
                          <span>{formatCurrency(item.receitaBrutaProjetada)}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          <span>Inadimplência</span>
                          <span>{formatCurrency(item.inadimplenciaProjetada)}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          <span>Recuperação</span>
                          <span>{formatCurrency(item.recuperacaoProjetada)}</span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          <span>Saldo do mês</span>
                          <span>{formatCurrency(item.saldoProjetado)}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-brand-red/70 to-brand-red"
                            style={{
                              width: `${maxForecastValue > 0 ? Math.min((item.saldoAcumulado / maxForecastValue) * 100, 100) : 0}%`,
                            }}
                          />
                        </div>
                        <p className="text-xs text-zinc-500">
                          Acumulado: {formatCurrency(item.saldoAcumulado)}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <div className="space-y-6">
                <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Cobrança ativa</p>
                      <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">
                        Alunos em atraso
                      </h3>
                    </div>
                    <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                      {resumo.alunosEmAtrasoDetalhes.length}
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {resumo.alunosEmAtrasoDetalhes.length === 0 ? (
                      <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-sm text-zinc-400">
                        Nenhum aluno está em atraso neste período.
                      </div>
                    ) : (
                      resumo.alunosEmAtrasoDetalhes.slice(0, 5).map((aluno) => (
                        <article key={aluno.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-sm font-black uppercase tracking-tight text-white">{aluno.nome}</h4>
                              <p className="mt-1 text-sm text-zinc-400">
                                {aluno.faixa} {aluno.grau} · {formatCurrency(aluno.valorMensalidade || 0)}
                              </p>
                              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                                Vencimento: dia {aluno.vencimentoMensalidade ?? '--'}
                              </p>
                            </div>
                            <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                              {aluno.statusFinanceiro}
                            </span>
                          </div>
                        </article>
                      ))
                    )}
                  </div>
                </section>

                <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Stripe</p>
                      <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">
                        Infraestrutura pronta
                      </h3>
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                      adapter / service
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Clientes</p>
                      <p className="mt-2 text-xl font-black uppercase text-white">Mapeado</p>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Assinaturas</p>
                      <p className="mt-2 text-xl font-black uppercase text-white">Esqueleto</p>
                    </div>
                    <div className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Webhooks</p>
                      <p className="mt-2 text-xl font-black uppercase text-white">Preparado</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    A próxima fase conecta eventos do Stripe ao tenant e automatiza a mudança de status financeiro.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
                    >
                      Conectar Stripe
                    </button>
                    <button
                      type="button"
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-200 transition hover:bg-zinc-800 active:scale-95"
                    >
                      Ver webhooks
                    </button>
                  </div>
                </section>
              </div>
            </div>

            <section className="mt-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Resumo final</p>
                  <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Saldo acumulado</h3>
                </div>
                <p className="text-sm text-zinc-400">
                  {formatCurrency(resumo.saldoProjetado6Meses)} projetados nos próximos seis meses.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  <span>Projeção acumulada</span>
                  <span>{formatCurrency(resumo.saldoProjetado6Meses)}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-red/70 to-brand-red transition-all duration-300"
                    style={{ width: `${Math.min(100, (resumo.saldoProjetado6Meses / (maxForecastValue || 1)) * 100)}%` }}
                  />
                </div>
              </div>

              {resumo.observacoes.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {resumo.observacoes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </section>
          </>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/80 p-6 text-sm leading-7 text-zinc-400">
            Nenhum dado financeiro disponível no momento.
          </div>
        )}
      </section>
    </main>
  );
}
