import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTreino } from '../../hooks/useTreino';

type TipoAula = 'GI' | 'NO-GI' | 'DRILL';

const TIPO_OPCOES: { key: TipoAula; label: string; icon: string }[] = [
  { key: 'GI', label: 'Gi', icon: 'checkroom' },
  { key: 'NO-GI', label: 'No-Gi', icon: 'dry_cleaning' },
  { key: 'DRILL', label: 'Drill', icon: 'exercise' },
];

export default function CheckInDeTreino() {
  const { loading, actions } = useTreino();
  const [tipoAula, setTipoAula] = useState<TipoAula>('NO-GI');
  const [sensacao, setSensacao] = useState(7);
  const [foco, setFoco] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (submitting) return;

    setFeedback(null);
    setSubmitting(true);

    const notas = `[${tipoAula}] Sensação: ${sensacao}/10. ${foco}`.trim();
    const success = await actions.registrarTreino(`Check-in ${tipoAula}`, notas, Math.ceil(sensacao / 2));

    if (success) {
      setFeedback({ type: 'success', msg: 'Check-in registrado com sucesso!' });
      setFoco('');
      setSensacao(7);
    } else {
      setFeedback({ type: 'error', msg: 'Falha ao registrar check-in. Tente novamente.' });
    }

    setSubmitting(false);
  };

  const sensacaoColors = [
    'bg-[#343d96]', 'bg-[#4A4EB8]', 'bg-[#6162D6]', 'bg-[#8487E0]', 'bg-[#C6C6C7]',
    'bg-[#E7BD6D]', 'bg-[#E78C4A]', 'bg-[#E75D30]', 'bg-[#E72E15]', 'bg-[#FF1A1A]',
  ];

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 pb-32 pt-24">
      <section className="mb-10">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-300">Check-in de Atleta</p>
        <h2 className="mb-4 font-headline text-4xl font-black uppercase leading-none tracking-tighter">
          Registro de<br /><span className="text-brand-red">Performance</span>
        </h2>
        <div className="h-1 w-16 bg-brand-red/10" />
      </section>

      {feedback ? (
        <div
          className={`mb-8 rounded-2xl border p-4 text-center text-sm font-bold ${
            feedback.type === 'error'
              ? 'border-brand-red/30 bg-brand-red/10 text-brand-red'
              : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
          }`}
        >
          {feedback.msg}
          {feedback.type === 'success' ? (
            <div className="mt-3 flex justify-center gap-3">
              <Link
                to="/dashboard-do-aluno"
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-zinc-800"
              >
                Voltar ao dashboard
              </Link>
              <button
                type="button"
                onClick={() => setFeedback(null)}
                className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20"
              >
                Novo check-in
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Training Type Selection */}
      <section className="mb-12">
        <label className="mb-4 block text-[10px] font-black uppercase tracking-widest text-zinc-400">
          Selecione o Tipo de Aula
        </label>
        <div className="grid grid-cols-3 gap-3">
          {TIPO_OPCOES.map((opcao) => {
            const active = tipoAula === opcao.key;
            return (
              <button
                key={opcao.key}
                type="button"
                onClick={() => setTipoAula(opcao.key)}
                className={`group flex flex-col items-center justify-center rounded-2xl border py-6 transition-all active:scale-95 ${
                  active
                    ? 'border-brand-red/20 bg-zinc-900 text-brand-red'
                    : 'border-transparent bg-zinc-950/60 text-zinc-400 hover:border-brand-red/20'
                }`}
              >
                <span className="material-symbols-outlined mb-2 text-3xl text-brand-red">{opcao.icon}</span>
                <span className="font-headline text-sm font-bold uppercase tracking-tighter">{opcao.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Physical Feeling Scale */}
      <section className="mb-12">
        <div className="mb-4 flex items-end justify-between">
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sensação Física</label>
          <span className="font-headline text-2xl font-black italic text-zinc-300">
            {String(sensacao).padStart(2, '0')} / 10
          </span>
        </div>
        <div className="flex h-12 gap-1">
          {sensacaoColors.map((color, index) => {
            const value = index + 1;
            const isSelected = value === sensacao;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setSensacao(value)}
                className={`flex-1 transition-all ${color} ${
                  isSelected
                    ? 'scale-y-110 border-2 border-white shadow-lg'
                    : 'hover:brightness-125'
                }`}
                aria-label={`Sensação ${value}`}
              />
            );
          })}
        </div>
        <div className="mt-2 flex justify-between text-[9px] font-black uppercase tracking-widest text-neutral-500">
          <span>Recuperado</span>
          <span>Exausto</span>
        </div>
      </section>

      {/* Focus Text Field */}
      <section className="mb-12">
        <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-zinc-400">
          Foco do Treino
        </label>
        <div className="relative border-b-2 border-zinc-800 bg-zinc-950 transition-colors focus-within:border-brand-red/20">
          <textarea
            className="w-full border-none bg-transparent px-0 py-4 font-body text-sm text-zinc-100 placeholder:text-neutral-600 focus:ring-0 focus:outline-none"
            placeholder="Ex: Passagem de guarda, finalizações do triângulo..."
            rows={3}
            value={foco}
            onChange={(e) => setFoco(e.target.value)}
          />
        </div>
      </section>

      {/* Confirmation Button */}
      <section className="mt-8">
        <button
          type="button"
          disabled={submitting || loading}
          onClick={handleSubmit}
          className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red to-brand-red py-6 transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="mr-3 font-headline text-xl font-black uppercase tracking-[0.2em] text-white">
            {submitting ? 'Registrando...' : 'Confirmar Treino'}
          </span>
          <span className="material-symbols-outlined text-white">
            {submitting ? 'hourglass_top' : 'arrow_forward'}
          </span>
        </button>
      </section>
    </main>
  );
}
