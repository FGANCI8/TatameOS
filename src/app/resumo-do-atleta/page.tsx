import { Link } from 'react-router-dom';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useFrequenciaAluno } from '../../modules/frequencia/hooks/useFrequenciaAluno';
import { useTreino } from '../../hooks/useTreino';

function SummarySkeleton() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="h-3 w-40 animate-pulse rounded-full bg-zinc-800/80" />
        <div className="mt-4 h-10 w-80 animate-pulse rounded-2xl bg-zinc-800/80" />
        <div className="mt-3 h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
      </section>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-28 animate-pulse rounded-[28px] border border-zinc-800/80 bg-zinc-900/80" />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="h-72 animate-pulse rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 lg:col-span-2" />
        <div className="h-72 animate-pulse rounded-[28px] border border-zinc-800/80 bg-zinc-900/80" />
      </section>
    </div>
  );
}

export default function ResumoDoAtleta() {
  const { perfil, loading, error, prontidaoGraduacao, historicoRecente, historicoLoading, historicoError } = useAluno();
  const { painel: frequenciaPainel, loading: frequenciaLoading, error: frequenciaError } = useFrequenciaAluno();
  const { data: treinos } = useTreino();

  const horasTotais = prontidaoGraduacao?.horasTotais ?? perfil?.horasTotais ?? 0;
  const sequenciaAtual = frequenciaPainel?.resumo?.sequenciaAtual ?? 0;
  const prontidaoPercentual = prontidaoGraduacao?.percentualConclusao ?? 0;
  const pontosFalta = prontidaoGraduacao?.horasRestantes ?? 0;
  const totalTreinos = treinos.length;
  const tecnicaMaisRecente = treinos[0]?.tecnicaId ?? null;

  if (loading && !perfil) {
    return (
      <main className="mx-auto max-w-7xl px-4 pb-32 pt-24 md:px-6">
        <SummarySkeleton />
      </main>
    );
  }

  if (error && !perfil) {
    return (
      <main className="mx-auto max-w-7xl px-4 pb-32 pt-24 md:px-6">
        <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">Resumo indisponível</p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">Não foi possível carregar o atleta</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-200">{error}</p>
          <Link
            to="/dashboard-do-aluno"
            className="mt-6 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition hover:bg-brand-red/20"
          >
            Voltar ao dashboard
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Resumo do atleta</p>
            <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              {perfil?.nome || 'Atleta'} em foco
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              Visão consolidada com base em treinos, frequência, prontidão de graduação e histórico recente do tenant atual.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Prontidão</p>
            <p className="mt-2 font-headline text-4xl font-black italic text-brand-red">
              {prontidaoPercentual > 0 ? `${prontidaoPercentual.toFixed(1)}%` : '—'}
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Treinos</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">{totalTreinos}</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Consistência</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">{sequenciaAtual} dias</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Horas</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">{horasTotais}h</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Restante</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">
            {pontosFalta > 0 ? `${pontosFalta}h` : 'Meta atingida'}
          </p>
        </article>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 lg:col-span-2">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Linha do tempo</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                Últimos movimentos reais
              </h2>
            </div>
            <Link
              to="/dashboard-do-aluno"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800"
            >
              Abrir dashboard
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {historicoLoading && historicoRecente.length === 0 ? (
              <div className="space-y-3">
                <div className="h-16 animate-pulse rounded-2xl bg-zinc-800/80" />
                <div className="h-16 animate-pulse rounded-2xl bg-zinc-800/80" />
              </div>
            ) : historicoError ? (
              <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4">
                <p className="text-sm text-white">{historicoError}</p>
              </div>
            ) : historicoRecente.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-sm text-zinc-400">
                Nenhuma presença recente disponível para este tenant.
              </div>
            ) : (
              historicoRecente.map((item) => (
                <div key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                      {new Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      }).format(item.data)}
                      </p>
                      <h3 className="mt-1 font-black uppercase tracking-tight text-white">
                        {item.alunoNome}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        {item.horasIncrementadas}h registradas nesta sessão
                      </p>
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                      {item.duracaoPadrao} min
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Leitura rápida</p>
          <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
            Estado atual
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Faixa / Grau</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {perfil?.faixa || 'Branca'} • {perfil?.grau ?? 0} grau(s)
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Técnica recente</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {tecnicaMaisRecente || 'Sem treino registrado'}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Frequência</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {frequenciaLoading ? 'Carregando...' : frequenciaError ? 'Sem leitura' : `${sequenciaAtual} dias seguidos`}
              </p>
            </div>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-brand-red/10"
              style={{ width: `${Math.max(Math.min(prontidaoPercentual, 100), 0)}%` }}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
