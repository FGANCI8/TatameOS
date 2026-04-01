import { useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode';
import { useFrequenciaAluno } from '../../../modules/frequencia/hooks/useFrequenciaAluno';

function formatCountdown(seconds: number): string {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const remainingSeconds = safe % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function LoadingPanel() {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-8 w-64 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-full max-w-xl animate-pulse rounded-full bg-zinc-800/60" />
        </div>
        <div className="mt-6 aspect-square w-full animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
        </div>
      </article>
      <div className="space-y-6">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-4 w-28 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          </div>
        </div>
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-4 space-y-3">
            <div className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            <div className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CheckinContent() {
  const { painel, loading, error, actions } = useFrequenciaAluno();
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let ativo = true;

    async function gerarQr() {
      if (!painel?.resumo.qrToken) {
        setQrDataUrl('');
        return;
      }

      const dataUrl = await QRCode.toDataURL(painel.resumo.qrToken, {
        errorCorrectionLevel: 'M',
        margin: 1,
        width: 420,
        color: {
          dark: '#ffffff',
          light: '#09090b',
        },
      });

      if (ativo) {
        setQrDataUrl(dataUrl);
      }
    }

    void gerarQr();

    return () => {
      ativo = false;
    };
  }, [painel?.resumo.qrToken]);

  const tempoRestante = useMemo(() => {
    if (!painel?.resumo.expiresAt) {
      return 0;
    }

    return Math.max(0, Math.floor((painel.resumo.expiresAt.getTime() - now) / 1000));
  }, [now, painel?.resumo.expiresAt]);

  const proximoMarco = painel?.resumo.proximoMarco;

  const copiarToken = async () => {
    if (!painel?.resumo.qrToken || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(painel.resumo.qrToken);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  if (loading && !painel) {
    return <LoadingPanel />;
  }

  if (error || !painel) {
    return (
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 text-center">
          <span className="material-symbols-outlined text-4xl text-brand-red">warning</span>
          <h2 className="mt-3 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
            Check-in indisponível
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-400">{error || 'Não foi possível carregar seu QR no momento.'}</p>
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
      <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">QR dinâmico</p>
          <h2 className="font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
            Apresente na entrada
          </h2>
          <p className="text-sm leading-7 text-zinc-400">
            Mostre este código para o professor. O token expira automaticamente e só vale para o seu tenant.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950/60 p-4">
          <div className="aspect-square w-full overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-950">
            {qrDataUrl ? (
              <img alt="QR Code do check-in" className="h-full w-full object-contain p-4" src={qrDataUrl} />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="h-16 w-16 animate-pulse rounded-2xl bg-zinc-800/60" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => void actions.refresh()}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Regerar QR
          </button>
          <button
            type="button"
            onClick={() => void copiarToken()}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">{copied ? 'done' : 'content_copy'}</span>
            {copied ? 'Token copiado' : 'Copiar token'}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Tempo restante</p>
            <p className="mt-2 font-headline text-3xl font-black uppercase italic text-zinc-100">
              {formatCountdown(tempoRestante)}
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Expira em</p>
            <p className="mt-2 text-sm font-black uppercase tracking-tight text-zinc-100">
              {formatDateTime(painel.resumo.expiresAt)}
            </p>
          </div>
        </div>
      </article>

      <div className="space-y-6">
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Seu momento</p>
          <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
            {painel.aluno.nome}
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-400">
            {painel.aluno.faixa} faixa, grau {painel.aluno.grau}. Os marcos de constância ajudam a medir seu ritmo no tatame.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Presenças no ano</p>
              <p className="mt-2 font-headline text-3xl font-black italic text-zinc-100">
                {painel.resumo.totalPresencasAno}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Sequência atual</p>
              <p className="mt-2 font-headline text-3xl font-black italic text-zinc-100">
                {painel.resumo.sequenciaAtual}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Marcos</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {painel.resumo.marcos.map((marco) => (
              <div
                key={marco.chave}
                className={`rounded-2xl border p-4 ${
                  marco.conquistado
                    ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                    : 'border-zinc-800 bg-zinc-950/60 text-zinc-300'
                }`}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] opacity-80">{marco.titulo}</p>
                <p className="mt-2 text-sm leading-7 opacity-90">
                  {marco.conquistado ? 'Conquistado' : `Meta: ${marco.meta} aulas`}
                </p>
              </div>
            ))}
          </div>

          {proximoMarco ? (
            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo marco</p>
              <p className="mt-2 text-sm leading-7 text-zinc-300">
                Continue sua constância para alcançar <strong className="text-zinc-100">{proximoMarco.titulo}</strong>.
              </p>
            </div>
          ) : null}
        </section>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Últimos check-ins</p>
              <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
                Histórico recente
              </h3>
            </div>
            <button
              type="button"
              onClick={() => void actions.refresh()}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              Atualizar
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {painel.presencasRecentes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">history</span>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                  Nenhum check-in encontrado
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Seu histórico aparecerá aqui assim que o professor validar sua presença.
                </p>
              </div>
            ) : (
              painel.presencasRecentes.map((item) => (
                <article key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-headline text-lg font-black uppercase tracking-tight text-zinc-100">
                        {formatDateTime(item.data)}
                      </p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        Horas incrementadas: {item.horasIncrementadas.toFixed(1)}h
                      </p>
                    </div>
                    <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">
                      Confirmado
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
