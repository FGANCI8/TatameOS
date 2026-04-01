import { Link } from 'react-router-dom';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useFrequenciaAluno } from '../../modules/frequencia/hooks/useFrequenciaAluno';
import { useTreino } from '../../hooks/useTreino';

function EvolutionSkeleton() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="h-3 w-44 animate-pulse rounded-full bg-zinc-800/80" />
        <div className="mt-4 h-10 w-96 animate-pulse rounded-2xl bg-zinc-800/80" />
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
    </main>
  );
}

export default function DashboardDeEvolucao() {
  const { perfil, loading, error, prontidaoGraduacao, historicoRecente, historicoLoading, historicoError } = useAluno();
  const { painel: frequenciaPainel, loading: frequenciaLoading, error: frequenciaError } = useFrequenciaAluno();
  const { data: treinos } = useTreino();

  const totalTreinos = treinos.length;
  const horasTotais = prontidaoGraduacao?.horasTotais ?? perfil?.horasTotais ?? 0;
  const sequenciaAtual = frequenciaPainel?.resumo?.sequenciaAtual ?? 0;
  const prontidaoPercentual = prontidaoGraduacao?.percentualConclusao ?? 0;
  const tecnicaMaisRecente = treinos[0]?.tecnicaId ?? 'Sem treino registrado';

  if (loading && !perfil) {
    return <EvolutionSkeleton />;
  }

  if (error && !perfil) {
    return (
      <main className="mx-auto max-w-7xl px-4 pb-32 pt-24 md:px-6">
        <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">Dashboard indisponível</p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">Não foi possível carregar a evolução</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-200">{error}</p>
          <Link
            to="/dashboard-do-aluno"
            className="mt-6 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition hover:bg-brand-red/20"
          >
            Abrir dashboard principal
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
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Evolução competitiva</p>
            <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              {perfil?.nome || 'Atleta'} em ritmo real
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              Painel consolidado com base em treinos, frequência e prontidão de graduação do tenant atual.
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
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Vitórias técnicas</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">{totalTreinos}</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sequência</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">{sequenciaAtual} dias</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Horas</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">{horasTotais}h</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Técnica recente</p>
          <p className="mt-2 text-sm font-black uppercase tracking-tight text-white">{tecnicaMaisRecente}</p>
        </article>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 lg:col-span-2">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Leitura rápida</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                Linha temporal real
              </h2>
            </div>
            <Link
              to="/resumo-do-atleta"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800"
            >
              Abrir resumo
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
                Nenhum histórico recente disponível para este tenant.
              </div>
            ) : (
              historicoRecente.map((item) => (
                <div key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                    {new Intl.DateTimeFormat('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    }).format(item.data)}
                  </p>
                  <h3 className="mt-1 font-black uppercase tracking-tight text-white">{item.alunoNome}</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {item.horasIncrementadas}h agregadas nesta sessão
                  </p>
                </div>
              ))
            )}
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Condição atual</p>
          <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
            Estado do ciclo
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Prontidão</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {prontidaoPercentual > 0 ? `${prontidaoPercentual.toFixed(1)}%` : 'Sem leitura'}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Frequência</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {frequenciaLoading ? 'Carregando...' : frequenciaError ? 'Sem leitura' : `${sequenciaAtual} dias seguidos`}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Uso do tatame</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">{horasTotais} horas totais</p>
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
