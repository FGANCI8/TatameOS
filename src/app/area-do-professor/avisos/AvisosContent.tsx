import { useState, type FormEvent } from 'react';
import { useAvisosProfessor } from '../../../modules/notificacoes/hooks/useAvisosProfessor';
import type { NotificacaoTipo } from '../../../modules/notificacoes/types';

function typeTone(tipo: NotificacaoTipo) {
  switch (tipo) {
    case 'alerta':
      return 'border-brand-red/20 bg-brand-red/10 text-brand-red';
    case 'sucesso':
    case 'info':
    default:
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
  }
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

export default function AvisosContent() {
  const { avisos, loading, sending, error, success, metrics, actions } = useAvisosProfessor();
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState<NotificacaoTipo>('info');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ok = await actions.enviarAvisoGeral({
      titulo,
      mensagem,
      tipo,
    });

    if (ok) {
      setTitulo('');
      setMensagem('');
      setTipo('info');
    }
  };

  return (
    <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
      <div id="novo-aviso" className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
        <div className="mb-6 flex flex-col gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Novo aviso</p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">Comunicar a academia</h2>
          <p className="max-w-xl text-sm leading-7 text-zinc-400">
            Escreva um comunicado curto, direto e útil para os alunos ativos do tenant.
          </p>
        </div>

        {error ? (
          <div className="mb-4 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            {error}
          </div>
        ) : null}

        {success ? (
          <div className="mb-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300">
            {success}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Título</label>
            <input
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
              placeholder="Ex.: Amanhã não haverá treino"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              className="min-h-[180px] w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
              placeholder="Detalhe o comunicado para todos os alunos."
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Tipo</label>
            <select
              value={tipo}
              onChange={(event) => setTipo(event.target.value as NotificacaoTipo)}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
            >
              <option value="info">Informativo</option>
              <option value="alerta">Alerta</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="material-symbols-outlined text-[18px]">{sending ? 'hourglass_top' : 'send'}</span>
            {sending ? 'Enviando...' : 'Enviar aviso'}
          </button>
        </form>
      </div>

      <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
        <div className="mb-6 flex flex-col gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Histórico</p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">Avisos já enviados</h2>
        </div>

        <div className="mb-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Avisos enviados</p>
            <p className="mt-2 text-3xl font-black text-white">{metrics.total}</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Canal</p>
            <p className="mt-2 text-3xl font-black text-white">Bulk</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alvo</p>
            <p className="mt-2 text-3xl font-black text-white">Todos os ativos</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        ) : avisos.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-zinc-400">campaign</span>
            <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhum aviso enviado</p>
            <p className="mt-2 text-sm text-zinc-400">O primeiro comunicado da academia aparecerá aqui.</p>
            <a
              href="#novo-aviso"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              Novo aviso
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            {avisos.map((aviso) => (
              <article key={aviso.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${typeTone(
                          aviso.tipo,
                        )}`}
                      >
                        {aviso.tipo}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        {aviso.destinatariosCount} alunos
                      </span>
                    </div>
                    <h3 className="mt-3 text-sm font-black uppercase tracking-tight text-white">{aviso.titulo}</h3>
                    <p className="mt-1 text-sm leading-7 text-zinc-400">{aviso.mensagem}</p>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      {formatDate(aviso.createdAt)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
