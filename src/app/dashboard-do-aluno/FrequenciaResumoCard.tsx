import { Link } from 'react-router-dom';
import type { FrequenciaResumoAluno } from '../../modules/frequencia/types';

interface Props {
  frequenciaResumo: FrequenciaResumoAluno | null;
}

export default function FrequenciaResumoCard({ frequenciaResumo }: Props) {
  if (!frequenciaResumo) {
    return (
      <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
        <div className="mt-3 h-7 w-48 animate-pulse rounded-2xl bg-zinc-800/60" />
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
        </div>
        <div className="mt-4 h-12 animate-pulse rounded-2xl bg-zinc-800/60" />
      </div>
    );
  }

  const proximoMarcoLabel = frequenciaResumo.proximoMarco ? frequenciaResumo.proximoMarco.titulo : 'Meta concluída';

  return (
    <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Frequência</p>
          <h3 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
            Seu ritmo no tatame
          </h3>
        </div>
        <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
          Atualizado
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Sequência atual</p>
          <p className="mt-2 font-headline text-3xl font-black italic text-white">{frequenciaResumo.sequenciaAtual}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Presenças no ano</p>
          <p className="mt-2 font-headline text-3xl font-black italic text-white">{frequenciaResumo.totalPresencasAno}</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo marco</p>
        <p className="mt-2 text-sm leading-7 text-zinc-300">{proximoMarcoLabel}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Último check-in</p>
        <p className="mt-2 text-sm font-black uppercase tracking-tight text-white">
          {frequenciaResumo.ultimoCheckin
            ? new Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              }).format(frequenciaResumo.ultimoCheckin)
            : 'Sem registros recentes'}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/dashboard-do-aluno/checkin"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
          Abrir check-in
        </Link>
        <Link
          to="/dashboard-do-aluno/trilhas"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-zinc-800 active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">insights</span>
          Ver trilhas
        </Link>
      </div>
    </div>
  );
}
