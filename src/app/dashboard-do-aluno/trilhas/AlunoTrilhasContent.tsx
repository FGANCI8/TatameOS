import { Link } from 'react-router-dom';
import { useAluno } from '../../../modules/aluno/hooks/useAluno';
import { useTrilhasAluno } from '../../../modules/trilhas/hooks/useTrilhasAluno';

function formatDate(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

export default function AlunoTrilhasContent() {
  const { perfil, loading: perfilLoading } = useAluno();
  const faixaAtual = perfil?.faixa ?? null;
  const { trilhas, loading, error } = useTrilhasAluno(faixaAtual);

  if (perfilLoading && !perfil) {
    return (
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-8 w-64 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="mt-6 h-28 animate-pulse rounded-2xl bg-zinc-800/60" />
        </div>
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Sua faixa</p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">{faixaAtual || 'Branca'}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              As trilhas abaixo foram publicadas para a sua fase atual de evolução.
            </p>
          </div>
          <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
            {trilhas.length} trilha(s)
          </span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Aluno</p>
            <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">{perfil?.nome || 'Atleta'}</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Prontidão</p>
            <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">
              {perfil?.horasTotais ? `${perfil.horasTotais.toFixed(1)}h` : '0.0h'}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm leading-7 text-zinc-400">
          Trilhas são caminhos guiados pelo professor. Cada módulo conecta técnicas, vídeos e objetivos de faixa.
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Módulos publicados</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Trilhas da sua faixa</h2>
          </div>
          <Link
            to="/meu-plano"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
          >
            <span className="material-symbols-outlined text-[18px]">route</span>
            Ver plano
          </Link>
        </div>

        <div className="mt-6 space-y-3">
          {loading ? (
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-red">
              {error}
            </div>
          ) : trilhas.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-zinc-400">route</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhuma trilha disponível</p>
              <p className="mt-2 text-sm text-zinc-400">Ainda não há módulos publicados para a sua faixa atual.</p>
            </div>
          ) : (
            trilhas.map((trilha) => (
              <article key={trilha.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                        {trilha.status}
                      </span>
                      <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        Faixa {trilha.faixaAlvo}
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">{trilha.titulo}</h3>
                    <p className="text-sm leading-7 text-zinc-400">{trilha.descricao}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                      Atualizada {formatDate(trilha.updatedAt)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {trilha.tecnicas.map((tecnica) => (
                    <span
                      key={tecnica.id}
                      className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300"
                    >
                      {tecnica.nome}
                    </span>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
