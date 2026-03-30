import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { usePresencas } from '../../../modules/presencas/hooks/usePresencas';

function formatDate(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(value);
}

function formatHours(value: number) {
  return `${value.toFixed(1)}h`;
}

export default function HistoricoPresencasContent() {
  const {
    alunos,
    historico,
    historicoLoading,
    historicoError,
    loading,
    error,
    carregarHistorico,
    carregar,
  } = usePresencas();
  const [alunoId, setAlunoId] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const filtrosAtuais = useMemo(
    () => ({
      alunoId: alunoId || null,
      dataInicio: dataInicio || null,
      dataFim: dataFim || null,
      limite: 20,
    }),
    [alunoId, dataFim, dataInicio],
  );

  const resumo = useMemo(() => {
    const totalRegistros = historico.length;
    const totalHoras = historico.reduce((acc, item) => acc + Number(item.horasIncrementadas || 0), 0);
    const alunosUnicos = new Set(historico.map((item) => item.alunoId)).size;
    return [
      { label: 'Registros', value: totalRegistros },
      { label: 'Horas lançadas', value: formatHours(totalHoras) },
      { label: 'Alunos distintos', value: alunosUnicos },
    ];
  }, [historico]);

  const pageError = historicoError || error;
  const isLoading = historicoLoading || loading;

  const aplicarFiltros = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await carregarHistorico(filtrosAtuais);
  };

  const limparFiltros = async () => {
    setAlunoId('');
    setDataInicio('');
    setDataFim('');
    await carregarHistorico({});
  };

  useEffect(() => {
    void carregarHistorico({ limite: 20 });
  }, [carregarHistorico]);

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Auditoria de Presenças
            </span>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Histórico da Chamada
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                Consulte as últimas 20 presenças do tenant, filtre por aluno ou por intervalo de datas e valide o progresso da turma.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/area-do-professor/chamada"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">playlist_add_check</span>
              Chamada rápida
            </Link>
            <button
              type="button"
              onClick={() => {
                void carregar();
                void carregarHistorico(filtrosAtuais);
              }}
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Atualizar
            </button>
          </div>
        </div>

        {pageError && (
          <div className="mt-4 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            {pageError}
          </div>
        )}

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {resumo.map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{item.label}</p>
              <p className="mt-2 text-3xl font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-4 shadow-none">
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-white">Filtros</h2>
            <p className="text-sm text-zinc-400">Aplique filtros por aluno e período para auditoria rápida.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void limparFiltros()}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              Limpar
            </button>
          </div>
        </div>

        <form onSubmit={(event) => void aplicarFiltros(event)} className="grid gap-4 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
              Aluno
            </label>
            <select
              value={alunoId}
              onChange={(event) => setAlunoId(event.target.value)}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
            >
              <option value="">Todos os alunos</option>
              {alunos.map((aluno) => (
                <option key={aluno.id} value={aluno.id} className="bg-zinc-950">
                  {aluno.nome}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
              Data inicial
            </label>
            <input
              type="date"
              value={dataInicio}
              onChange={(event) => setDataInicio(event.target.value)}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
              Data final
            </label>
            <input
              type="date"
              value={dataFim}
              onChange={(event) => setDataFim(event.target.value)}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
            />
          </div>

          <div className="flex flex-wrap justify-end gap-3 pt-2 lg:col-span-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              Filtrar
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-4 shadow-none">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-white">Presenças registradas</h2>
            <p className="text-sm text-zinc-400">Últimos lançamentos do tenant atual.</p>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        ) : historico.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/60 p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-zinc-400">history</span>
            <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhuma presença encontrada</p>
            <p className="mt-2 text-sm text-zinc-400">
              Ajuste os filtros ou registre novas chamadas para ver o histórico aqui.
            </p>
            <Link
              to="/area-do-professor/chamada"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              Abrir chamada rápida
            </Link>
          </div>
        ) : (
          <div className="grid gap-3">
            {historico.map((item) => (
              <article key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-lg font-black text-white">{item.alunoNome}</p>
                      <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        {formatHours(item.duracaoPadrao)}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400">Aluno ID: {item.alunoId}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{formatDate(item.data)}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                      +{formatHours(item.horasIncrementadas)}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      {item.id}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
