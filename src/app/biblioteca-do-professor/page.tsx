export default function BibliotecaDoProfessor() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Biblioteca do professor</p>
            <h1 className="font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Destaque da semana
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
              Conteúdos, trilhas e materiais organizados em uma grade simples para revisão rápida no celular.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
            Assistir agora
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {[
          ['Branca', 'Fundamentos'],
          ['Azul', 'Consolidação'],
          ['Roxa', 'Refinamento'],
          ['Marrom', 'Eficiência'],
          ['Preta', 'Mestria'],
        ].map(([title, subtitle], index) => (
          <article key={title} className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{subtitle}</p>
            <h2 className="mt-2 font-headline text-3xl font-black uppercase tracking-tight text-white">{title}</h2>
            <div className="mt-6 h-32 rounded-2xl border border-zinc-800 bg-zinc-950/60" />
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Trilhas</p>
              <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                Sistema de passagem de guarda
              </h3>
            </div>
            <button className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-300 transition hover:bg-zinc-800">
              Continuar
            </button>
          </div>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[65%] rounded-full bg-brand-red/10" />
          </div>
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Progresso: 65%</p>
        </article>

        <aside className="grid gap-4">
          <div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Curta duração</p>
            <h3 className="mt-2 font-headline text-xl font-black uppercase tracking-tight text-white">
              Drills de mobilidade
            </h3>
          </div>
          <div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Estratégia</p>
            <h3 className="mt-2 font-headline text-xl font-black uppercase tracking-tight text-white">
              Mentalidade de competição
            </h3>
          </div>
        </aside>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Adicionados recentemente</p>
          <button className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20">
            Novo vídeo
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {[
            ['Faixa Azul', 'Knee cut pass: variações de pegada'],
            ['Faixa Roxa', 'Controle de lapela na guarda de hook'],
            ['Faixa Branca', 'Saída básica da montada'],
          ].map(([rank, title]) => (
            <article key={title} className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 lg:flex-row lg:items-center">
              <div className="h-32 w-full rounded-2xl border border-zinc-800 bg-zinc-900 lg:h-20 lg:w-32" />
              <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{rank}</p>
                <h4 className="mt-1 font-headline text-xl font-black uppercase tracking-tight text-white">{title}</h4>
              </div>
              <span className="material-symbols-outlined text-zinc-500">chevron_right</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
