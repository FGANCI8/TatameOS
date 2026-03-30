import { useState } from 'react';
import { useTreino } from '../../hooks/useTreino';

export default function RegistroDeTreino() {
  const { data: treinos, loading, error, actions } = useTreino();

  const [tecnica, setTecnica] = useState('');
  const [esforco, setEsforco] = useState(3);
  const [notas, setNotas] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; msg: string } | null>(null);
  const [tipoAula, setTipoAula] = useState<'GI' | 'NO-GI' | 'DRILLS'>('GI');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!tecnica.trim()) {
      setFeedback({ type: 'error', msg: 'A técnica principal é obrigatória.' });
      return;
    }

    const fullNotas = `[${tipoAula}] ${notas}`;
    const success = await actions.registrarTreino(tecnica, fullNotas, esforco);

    if (success) {
      setFeedback({ type: 'success', msg: 'Sessão registrada com sucesso!' });
      setTecnica('');
      setNotas('');
      setEsforco(3);
    } else {
      setFeedback({ type: 'error', msg: 'Falha ao registrar sessão. Verifique os dados e tente novamente.' });
    }
  };

  return (
    <main className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-32 pt-24 md:px-8">
      <section className="absolute inset-0 -z-10 bg-zinc-950 bg-dot-grid opacity-70" />

      <section className="space-y-8 lg:col-span-7">
        <header>
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Data telemetry</p>
          <h2 className="font-headline text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl">
            Nova sessão
          </h2>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none md:p-8">
          {feedback ? (
            <div
              className={`rounded-2xl border p-4 text-sm font-bold ${
                feedback.type === 'error'
                  ? 'border-brand-red/30 bg-brand-red/10 text-brand-red'
                  : 'border-zinc-800 bg-zinc-950/60 text-zinc-200'
              }`}
            >
              {feedback.msg}
            </div>
          ) : null}

          {error && !feedback ? (
            <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm font-bold text-brand-red">
              Erro ao conectar ao motor de dados.
            </div>
          ) : null}

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Tipo de aula</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: 'GI', label: 'Gi (Kimono)', icon: 'check_circle' },
                { key: 'NO-GI', label: 'No-Gi', icon: 'close' },
                { key: 'DRILLS', label: 'Drills', icon: 'fitness_center' },
              ].map((item) => {
                const active = tipoAula === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setTipoAula(item.key as 'GI' | 'NO-GI' | 'DRILLS')}
                    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border px-4 py-4 transition duration-200 ${
                      active
                        ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                        : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-wider">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Técnica principal</label>
            <input
              value={tecnica}
              onChange={(e) => setTecnica(e.target.value)}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-brand-red/40"
              placeholder="Ex: Passagem de guarda de lapela"
              type="text"
            />
          </div>

          <div className="space-y-6 py-4">
            <div className="flex items-end justify-between">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Nível de esforço</label>
              <span className="font-headline text-3xl font-black italic text-brand-red">
                0{esforco}
                <span className="ml-1 text-xs uppercase italic text-zinc-400">/05</span>
              </span>
            </div>
            <div className="px-2">
              <input
                className="w-full cursor-pointer accent-brand-red"
                max="5"
                min="1"
                type="range"
                value={esforco}
                onChange={(e) => setEsforco(parseInt(e.target.value))}
              />
              <div className="mt-2 flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <span>Recuperação</span>
                <span>Intensidade máxima</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Notas do treino</label>
            <textarea
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              className="min-h-[140px] w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-brand-red/40"
              placeholder="Detalhes da sessão, sparrings notáveis, ajustes técnicos..."
              rows={4}
            />
          </div>

          <button
            disabled={loading}
            data-testid="submit-treino"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-red/20 bg-brand-red/10 py-5 text-sm font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-[1.01] hover:bg-brand-red/20 active:scale-95 disabled:opacity-50"
            type="submit"
          >
            <span className="font-headline text-lg font-black uppercase tracking-widest">
              {loading ? 'Processando...' : 'Registrar performance'}
            </span>
            <span className="material-symbols-outlined text-[18px]">bolt</span>
          </button>
        </form>
      </section>

      <aside className="space-y-8 lg:col-span-5">
        <header>
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Chronological</p>
          <h2 className="font-headline text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl">
            Histórico
          </h2>
        </header>

        <div className="space-y-4">
          {treinos.map((t) => (
            <div key={t.id} className="flex items-start gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
              <div className="flex flex-col items-center">
                <span className="font-headline text-2xl font-black leading-none text-white">{new Date(t.data).getDate()}</span>
                <span className="text-[10px] font-bold uppercase text-zinc-500">Data</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-headline text-lg font-black uppercase leading-none text-white">{t.tecnicaId}</h3>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    LVL 0{t.dificuldadePercebida}
                  </span>
                </div>
                <p className="text-sm leading-snug text-zinc-400">{t.observacoes || 'Sem notas detalhadas.'}</p>
              </div>
            </div>
          ))}

          {treinos.length === 0 && !loading ? (
            <div className="rounded-2xl border border-dashed border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 text-center text-sm text-zinc-400">
              Nenhuma sessão registrada recentemente.
            </div>
          ) : null}
          {loading ? <p className="animate-pulse font-black text-zinc-200">Carregando sessões...</p> : null}
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="relative z-10">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Consistency engine</p>
            <div className="mb-2 flex items-baseline gap-2">
              <span className="font-headline text-6xl font-black italic text-white">{treinos.length}</span>
              <span className="font-headline text-xl font-black uppercase text-zinc-400">Aulas totais</span>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-zinc-800">
              <div className="h-full rounded-full bg-zinc-600" style={{ width: `${Math.min(treinos.length * 5, 100)}%` }} />
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 h-48 w-48 rotate-45 bg-zinc-800/40" />
        </div>
      </aside>
    </main>
  );
}
