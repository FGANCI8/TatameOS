import { useMemo } from 'react';
import { usePresencas } from '../../../modules/presencas/hooks/usePresencas';
import type { AlunoChamadaItem } from '../../../modules/presencas/types';

function faixaTone(faixa: string) {
  switch (faixa) {
    case 'Preta':
      return 'bg-zinc-900 text-white border-zinc-700';
    case 'Marrom':
      return 'bg-zinc-900 text-zinc-300 border-zinc-700';
    case 'Roxa':
      return 'bg-zinc-900 text-zinc-300 border-zinc-700';
    case 'Azul':
      return 'bg-zinc-900 text-zinc-300 border-zinc-700';
    default:
      return 'bg-zinc-900 text-zinc-100 border-zinc-700';
  }
}

export default function AreaDoProfessorChamadaPage() {
  const {
    alunos,
    loading,
    registrandoId,
    error,
    success,
    metrics,
    registrarPresenca,
    carregar,
  } = usePresencas();

  const resumo = useMemo(() => ([
    { label: 'Total', value: metrics.total },
    { label: 'Ativos', value: metrics.prontos },
  ]), [metrics]);

  return (
    <div className="relative isolate min-h-full overflow-hidden space-y-6 px-4 py-6 md:px-8 lg:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:22px_22px] opacity-20" />
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Chamada Rápida
            </span>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Registro de Presença
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                Faça check-in dos alunos do seu tenant e incremente horas totais de forma atômica.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => void carregar()}
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Atualizar
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
            {success}
          </div>
        )}

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {resumo.map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{item.label}</p>
              <p className="mt-2 text-3xl font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.32)]">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-white">Lista de alunos</h2>
            <p className="text-sm text-zinc-400">Use o botão de check-in ao lado de cada aluno.</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        ) : alunos.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-zinc-300">person_off</span>
            <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhum aluno disponível</p>
            <p className="mt-2 text-sm text-zinc-400">
              Apenas alunos do tenant autenticado aparecem nesta chamada.
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {alunos.map((aluno: AlunoChamadaItem) => (
              <div key={aluno.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 transition duration-200 hover:scale-[1.01] hover:border-zinc-700">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-lg font-black text-white">{aluno.nome}</p>
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${faixaTone(aluno.faixa)}`}>
                        {aluno.faixa} {aluno.grau > 0 ? `G${aluno.grau}` : ''}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400">{aluno.email}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      Horas totais: {aluno.horasTotais.toFixed(1)}h
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => void registrarPresenca(aluno.id)}
                    disabled={registrandoId === aluno.id}
                    className="inline-flex items-center gap-2 rounded-2xl bg-zinc-300 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950 transition duration-200 hover:scale-105 hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="material-symbols-outlined text-[18px]">{registrandoId === aluno.id ? 'hourglass_top' : 'playlist_add_check'}</span>
                    {registrandoId === aluno.id ? 'Registrando...' : 'Check-in'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}





