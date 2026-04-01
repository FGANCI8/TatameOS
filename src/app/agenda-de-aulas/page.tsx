type Session = {
  time: string;
  duration: string;
  title: string;
  instructor: string;
  slots: string;
  progress: number;
  active: boolean;
  soldOut?: boolean;
};

const sessions: Session[] = [
  {
    time: '07:00',
    duration: '60 min',
    title: 'BJJ Fundamentos',
    instructor: 'Prof. Marco Aurélio',
    slots: '12/20 slots',
    progress: 60,
    active: false,
  },
  {
    time: '12:00',
    duration: '90 min',
    title: 'No-Gi Advanced',
    instructor: 'Prof. Renan Costa',
    slots: '18/20 slots',
    progress: 90,
    active: true,
  },
  {
    time: '18:30',
    duration: '120 min',
    title: 'Tatame Competição',
    instructor: 'Mestre K. Silva',
    slots: 'Lotado',
    progress: 100,
    active: false,
    soldOut: true,
  },
  {
    time: '16:00',
    duration: '50 min',
    title: 'BJJ Kids (7-12)',
    instructor: 'Instr. Alice V.',
    slots: '08/15 slots',
    progress: 53,
    active: false,
  },
];

export default function AgendaDeAulas() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Agenda semanal</p>
            <h1 className="mt-3 font-headline text-4xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
              Kinetic Arena
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              Visualização mobile-first da semana com cards compactos e ações táteis para reserva rápida.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Janela atual</p>
            <p className="mt-2 font-headline text-3xl font-black italic text-zinc-100">08–14</p>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Dias ativos</p>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => {
            const active = index === 1;
            return (
              <button
                key={day}
                className={`flex h-20 min-w-[5.5rem] flex-none flex-col items-center justify-center rounded-2xl border px-4 py-3 text-center transition duration-200 ${
                  active
                    ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                    : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{day}</span>
                <span className="mt-1 font-headline text-xl font-black">0{index + 8}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        {sessions.map((session) => (
          <article
            key={`${session.time}-${session.title}`}
            className={`rounded-[28px] border p-6 md:p-8 ${
              session.active ? 'border-brand-red/20 bg-brand-red/10' : 'border-zinc-800/80 bg-zinc-900/80'
            }`}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-center">
                  <p className="font-headline text-3xl font-black text-zinc-100">{session.time}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    {session.duration}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sessão</p>
                  <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100">
                    {session.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{session.instructor}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="w-full sm:w-36">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    <span>Vagas</span>
                    <span>{session.slots}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className={`h-full rounded-full ${
                        session.soldOut ? 'bg-zinc-500' : session.active ? 'bg-brand-red/60' : 'bg-zinc-300'
                      }`}
                      style={{ width: `${session.progress}%` }}
                    />
                  </div>
                </div>

                <button
                  className={`rounded-2xl border px-6 py-3 text-[10px] font-black uppercase tracking-widest transition active:scale-95 ${
                    session.soldOut
                      ? 'cursor-not-allowed border-zinc-800 bg-zinc-950/60 text-zinc-500'
                      : 'border-brand-red/20 bg-brand-red/10 text-brand-red hover:bg-brand-red/20'
                  }`}
                  disabled={session.soldOut}
                >
                  {session.soldOut ? 'Esgotado' : 'Reservar'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
