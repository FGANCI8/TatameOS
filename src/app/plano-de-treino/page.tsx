import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useTrilhasAluno } from '../../modules/trilhas/hooks/useTrilhasAluno';
import { useTreino } from '../../hooks/useTreino';
import type { TrilhaComTecnicas } from '../../modules/trilhas/types';

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  }).format(date);
}

function LoadingState() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 pb-28 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
        <div className="mt-3 h-12 w-full max-w-3xl animate-pulse rounded-2xl bg-zinc-800/60" />
        <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-36 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="h-[360px] animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        <div className="h-[360px] animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
      </section>
    </main>
  );
}

function escolherBloco(trilha?: TrilhaComTecnicas | null) {
  const tecnicas = trilha?.tecnicas ?? [];

  return {
    aquecimento: tecnicas[0]?.nome ?? 'Mobilidade e base',
    blocoPrincipal: tecnicas[1]?.nome ?? trilha?.descricao ?? 'Bloco central da trilha',
    aplicacao: tecnicas[2]?.nome ?? 'Sparring guiado',
  };
}

export default function PlanoDeTreino() {
  const {
    perfil,
    loading: loadingAluno,
    error: errorAluno,
    prontidaoGraduacao,
    actions: { refresh: refreshAluno },
  } = useAluno();
  const {
    trilhas,
    loading: loadingTrilhas,
    error: errorTrilhas,
    actions: { refresh: refreshTrilhas },
  } = useTrilhasAluno(perfil?.faixa ?? null);
  const {
    data: treinos,
    loading: loadingTreinos,
    error: errorTreinos,
    actions: { listarTreinos: refreshTreinos },
  } = useTreino();

  const trilhaAtual = trilhas[0] ?? null;

  const blocos = useMemo(() => escolherBloco(trilhaAtual), [trilhaAtual]);

  const treinosRecentes7d = useMemo(() => {
    const limite = new Date();
    limite.setDate(limite.getDate() - 7);
    return treinos.filter((treino) => treino.data >= limite);
  }, [treinos]);

  const focoPrincipal = trilhaAtual?.titulo ?? 'Sem trilha publicada';
  const resumoFoco = trilhaAtual?.descricao ?? 'Nenhuma trilha publicada para a sua faixa ainda.';
  const tecnicasContagem = trilhaAtual?.tecnicas.length ?? 0;
  const carregaInicial =
    (loadingAluno && !perfil) ||
    (loadingTrilhas && trilhas.length === 0) ||
    (loadingTreinos && treinos.length === 0);
  const falhaGlobal = errorAluno || (errorTrilhas && trilhas.length === 0) || (errorTreinos && treinos.length === 0);

  if (carregaInicial) {
    return <LoadingState />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-28 pt-24 md:px-6">
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 lg:col-span-8">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">
              Plano de treino
            </span>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white md:text-6xl">
              {focoPrincipal}
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Estrutura publicada para a sua faixa atual, conectada ao que o tenant já possui em trilhas, técnicas e histórico de treino.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 hidden w-1/3 bg-zinc-800/40 md:block" />
        </div>

        <div className="flex flex-col justify-between rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-8 lg:col-span-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Faixa atual</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-black text-brand-red">{perfil?.faixa ?? '---'}</span>
              <span className="text-2xl font-bold text-brand-red">G{perfil?.grau ?? 0}</span>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-red/20 pt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Prontidão</span>
            <p className="mt-1 text-xl font-bold uppercase text-white">
              {prontidaoGraduacao?.label ?? 'Aguardando base real'}
            </p>
          </div>
        </div>
      </section>

      {falhaGlobal ? (
        <section className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 text-center">
          <span className="material-symbols-outlined text-4xl text-brand-red">warning</span>
          <h2 className="mt-3 font-headline text-2xl font-black uppercase tracking-tight text-white">
            Não foi possível montar o plano
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            {errorAluno || errorTrilhas || errorTreinos || 'Ainda não há trilhas ou treinos suficientes para construir este plano.'}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                void refreshAluno();
                void refreshTrilhas();
                void refreshTreinos();
              }}
              className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition hover:bg-brand-red/20"
            >
              Tentar novamente
            </button>
            <Link
              to="/dashboard-do-aluno/trilhas"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800"
            >
              Ver trilhas
            </Link>
          </div>
        </section>
      ) : null}

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Trilhas publicadas</p>
          <p className="mt-3 text-4xl font-black uppercase italic text-white">{trilhas.length}</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Conteúdo disponível para a faixa {perfil?.faixa ?? 'atual'} no tenant ativo.
          </p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Técnicas na trilha</p>
          <p className="mt-3 text-4xl font-black uppercase italic text-white">{tecnicasContagem}</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Técnicas já associadas ao caminho publicado.
          </p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Treinos 7 dias</p>
          <p className="mt-3 text-4xl font-black uppercase italic text-white">{treinosRecentes7d.length}</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Volume recente para encaixar a sequência da semana.
          </p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sequência publicada</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                {trilhaAtual ? trilhaAtual.titulo : 'Aguardando publicação'}
              </h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {trilhaAtual ? trilhaAtual.faixaAlvo : 'sem faixa'}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {resumoFoco}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Aquecimento</p>
              <p className="mt-2 text-sm font-black uppercase text-white">{blocos.aquecimento}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Bloco principal</p>
              <p className="mt-2 text-sm font-black uppercase text-white">{blocos.blocoPrincipal}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Aplicação</p>
              <p className="mt-2 text-sm font-black uppercase text-white">{blocos.aplicacao}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/registro-de-treino"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition hover:bg-brand-red/20 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">fitness_center</span>
              Registrar treino
            </Link>
            <Link
              to="/dashboard-do-aluno/checkin"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
              Abrir check-in
            </Link>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sessões recentes</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                Base do ajuste
              </h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {treinos.length > 0 ? formatDate(treinos[0].data) : 'sem sessões'}
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {treinos.length > 0 ? (
              treinos.slice(0, 4).map((treino) => (
                <article key={treino.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        {formatDate(treino.data)}
                      </p>
                      <h3 className="mt-1 font-headline text-lg font-black uppercase italic text-white">
                        Sessão registrada
                      </h3>
                    </div>
                    <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                      {treino.dificuldadePercebida}/5
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {treino.observacoes || 'Sem observações registradas para esta sessão.'}
                  </p>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-3xl text-zinc-400">fitness_center</span>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white">Sem treino para basear o plano</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Registre ao menos uma sessão para que o plano passe a refletir o seu histórico.
                </p>
              </div>
            )}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Leitura de prontidão</p>
          <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
            Estado atual do atleta
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Prontidão</p>
              <p className="mt-2 text-3xl font-black uppercase italic text-white">
                {prontidaoGraduacao?.percentualConclusao.toFixed(1) ?? '0.0'}%
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo grau</p>
              <p className="mt-2 text-3xl font-black uppercase italic text-white">
                {prontidaoGraduacao?.proximoGrau ? `G${prontidaoGraduacao.proximoGrau}` : 'Faixa máxima'}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Como ler este plano</p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              A sequência é montada a partir da trilha publicada para sua faixa. Se o professor ainda não publicou
              conteúdo, a tela avisa sem inventar um plano fictício.
            </p>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Trilha mais próxima</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                {trilhaAtual ? trilhaAtual.titulo : 'Sem trilha publicada'}
              </h2>
            </div>
            <Link
              to="/dashboard-do-aluno/trilhas"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 transition hover:bg-zinc-800"
            >
              Abrir trilhas
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {trilhaAtual?.tecnicas.length ? (
              trilhaAtual.tecnicas.map((tecnica, index) => (
                <article key={tecnica.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        Bloco {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 font-headline text-lg font-black uppercase italic text-white">
                        {tecnica.nome}
                      </h3>
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                      {tecnica.categoria}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {tecnica.descricao || 'Técnica publicada sem descrição adicional.'}
                  </p>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-3xl text-zinc-400">menu_book</span>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white">
                  Nenhuma técnica publicada
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  O professor precisa publicar trilhas para que este plano saia do modo vazio.
                </p>
              </div>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
