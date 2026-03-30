export default function CausasDoErro() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Análise de combate</p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-headline text-4xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
              Por que ocorreu?
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              Diagnóstico técnico da falha de decisão durante o sparring, organizado para leitura rápida no mobile.
            </p>
          </div>
          <button className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
            Corrigir agora
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="material-symbols-outlined text-4xl text-zinc-300">psychology</span>
            <span className="font-headline text-3xl font-black italic text-brand-red">85%</span>
          </div>
          <h2 className="mt-6 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
            Fator Psicológico
          </h2>
          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Ansiedade e pressa</p>
          <div className="mt-6 space-y-3">
            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[85%] rounded-full bg-brand-red/60" />
            </div>
            <p className="text-sm leading-7 text-zinc-400">
              Aceleração excessiva do ritmo cardíaco interrompeu a estratégia e levou a uma tentativa precipitada de
              finalização.
            </p>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="material-symbols-outlined text-4xl text-zinc-300">visibility</span>
            <span className="font-headline text-3xl font-black italic text-zinc-100">62%</span>
          </div>
          <h2 className="mt-6 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
            Leitura Ruim
          </h2>
          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Falta de antecipação</p>
          <div className="mt-6 space-y-3">
            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[62%] rounded-full bg-zinc-300" />
            </div>
            <p className="text-sm leading-7 text-zinc-400">
              A leitura atrasada da transição para meia-guarda comprometeu a resposta defensiva básica.
            </p>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="material-symbols-outlined text-4xl text-zinc-300">fitness_center</span>
            <span className="font-headline text-3xl font-black italic text-zinc-100">44%</span>
          </div>
          <h2 className="mt-6 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">Físico</h2>
          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Cansaço extremo</p>
          <div className="mt-6 space-y-3">
            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[44%] rounded-full bg-zinc-500" />
            </div>
            <p className="text-sm leading-7 text-zinc-400">
              A fadiga muscular comprometeu a pegada de lapela aos minutos finais do round.
            </p>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="material-symbols-outlined text-4xl text-zinc-300">school</span>
            <span className="font-headline text-3xl font-black italic text-zinc-100">31%</span>
          </div>
          <h2 className="mt-6 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">Técnico</h2>
          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Repertório limitado</p>
          <div className="mt-6 space-y-3">
            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[31%] rounded-full bg-zinc-300" />
            </div>
            <p className="text-sm leading-7 text-zinc-400">
              O déficit em escapes sob pressão manteve o atleta preso em uma posição desfavorável.
            </p>
          </div>
        </article>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Consistência de decisão</p>
        <h2 className="mt-3 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
          Últimos 10 treinos
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[90, 85, 40, 75, 80, 95, 100, 60, 30, 85].map((value, index) => (
            <div key={value} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <div className="flex items-end justify-between gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  Sessão {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-headline text-xl font-black italic text-zinc-100">{value}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full rounded-full bg-brand-red/60" style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <button className="flex items-center justify-between rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-4 text-left text-brand-red transition hover:bg-brand-red/20 active:scale-95">
          <span className="font-headline text-sm font-black uppercase tracking-widest">Corrigir com TatameOS</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button className="flex items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-4 text-zinc-100 transition hover:bg-zinc-800 active:scale-95">
          <span className="material-symbols-outlined">history</span>
          <span className="font-headline text-sm font-black uppercase tracking-widest">Ver histórico</span>
        </button>
      </section>
    </main>
  );
}
