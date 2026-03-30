import { useMemo, useState } from 'react';
import { useFrequenciaProfessor } from '../../../modules/frequencia/hooks/useFrequenciaProfessor';
import type { Aluno } from '../../../modules/aluno/types';

function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function faixaTone(faixa: Aluno['faixa']) {
  switch (faixa) {
    case 'Preta':
      return 'border-brand-red/20 bg-brand-red/10 text-brand-red';
    default:
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
  }
}

export default function FrequenciaContent() {
  const { painel, loading, error, actions } = useFrequenciaProfessor();
  const [qrToken, setQrToken] = useState('');
  const [resultado, setResultado] = useState<string | null>(null);
  const [validando, setValidando] = useState(false);
  const [registrandoId, setRegistrandoId] = useState<string | null>(null);

  const resumoCards = useMemo(
    () =>
      painel
        ? [
            { label: 'Alunos ativos', value: painel.resumo.alunosAtivos },
            { label: 'Check-ins hoje', value: painel.resumo.checkinsHoje },
            { label: 'Check-ins no mês', value: painel.resumo.checkinsMes },
            { label: 'Marcos hoje', value: painel.resumo.marcosConquistadosHoje },
          ]
        : [],
    [painel],
  );

  const validarQr = async () => {
    if (!qrToken.trim()) {
      setResultado('Cole o conteúdo do QR antes de validar.');
      return;
    }

    setValidando(true);
    const response = await actions.validarQr(qrToken.trim());
    setValidando(false);

    if (!response.success) {
      setResultado(response.error || 'Falha ao validar o QR.');
      return;
    }

    setResultado(`Presença registrada com sucesso. ID: ${response.data?.presencaId || ''}`);
    setQrToken('');
    await actions.refresh();
  };

  const registrarManual = async (alunoId: string) => {
    setRegistrandoId(alunoId);
    const response = await actions.registrarManual(alunoId);
    setRegistrandoId(null);

    if (!response.success) {
      setResultado(response.error || 'Falha ao registrar presença manual.');
      return;
    }

    setResultado(`Check-in manual registrado. ID: ${response.data?.presencaId || ''}`);
    await actions.refresh();
  };

  if (loading && !painel) {
    return null;
  }

  if (error || !painel) {
    return (
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 text-center">
          <span className="material-symbols-outlined text-4xl text-brand-red">warning</span>
          <h2 className="mt-3 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
            Frequência indisponível
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-400">{error || 'Não foi possível carregar a frequência.'}</p>
          <button
            type="button"
            onClick={() => void actions.refresh()}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Tentar novamente
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-6">
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Leitor de QR</p>
          <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
            Validar presença do aluno
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-400">
            Cole aqui o conteúdo lido pelo scanner para registrar o check-in de forma segura e imediata.
          </p>

          {resultado ? (
            <div className="mt-4 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-sm leading-7 text-brand-red">
              {resultado}
            </div>
          ) : null}

          <div className="mt-4 space-y-3">
            <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
              Conteúdo do QR
            </label>
            <textarea
              value={qrToken}
              onChange={(event) => setQrToken(event.target.value)}
              className="min-h-[180px] w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm leading-7 text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-brand-red/40"
              placeholder="Cole aqui o token do QR do aluno"
            />
          </div>

          <button
            type="button"
            onClick={() => void validarQr()}
            disabled={validando}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="material-symbols-outlined text-[18px]">{validando ? 'hourglass_top' : 'qr_code_scanner'}</span>
            {validando ? 'Validando...' : 'Validar QR'}
          </button>
        </section>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Resumo</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
                Movimento de hoje
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {resumoCards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{item.label}</p>
                  <p className="mt-2 font-headline text-3xl font-black italic text-zinc-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="space-y-6">
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Lista ativa</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
                Check-in manual
              </h2>
            </div>
            <button
              type="button"
              onClick={() => void actions.refresh()}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              Atualizar
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {painel.alunosAtivos.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">person_off</span>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                  Nenhum aluno ativo disponível
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Quando houver alunos ativos neste tenant, eles aparecerão aqui para o check-in manual.
                </p>
              </div>
            ) : (
              painel.alunosAtivos.map((aluno) => (
                <article key={aluno.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-headline text-xl font-black uppercase tracking-tight text-zinc-100">
                          {aluno.nome}
                        </h3>
                        <span
                          className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] ${faixaTone(
                            aluno.faixa,
                          )}`}
                        >
                          {aluno.faixa} {aluno.grau > 0 ? `G${aluno.grau}` : ''}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-zinc-400">{aluno.email}</p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                        Horas totais: {aluno.horasTotais.toFixed(1)}h
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => void registrarManual(aluno.id)}
                      disabled={registrandoId === aluno.id}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {registrandoId === aluno.id ? 'hourglass_top' : 'playlist_add_check'}
                      </span>
                      {registrandoId === aluno.id ? 'Registrando...' : 'Check-in manual'}
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Últimos registros</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
                Histórico recente
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {painel.presencasRecentes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">history</span>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                  Nenhum check-in registrado
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Os registros mais recentes da academia aparecerão aqui.
                </p>
              </div>
            ) : (
              painel.presencasRecentes.map((item) => (
                <article key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-headline text-lg font-black uppercase tracking-tight text-zinc-100">
                        {item.alunoNome}
                      </p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        {formatDateTime(item.data)}
                      </p>
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
                      +{item.horasIncrementadas.toFixed(1)}h
                    </span>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
