export default function ComparativoTatico() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
              Análise de Performance
            </span>
            <h1 className="font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Divergência Tática
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
              Comparação direta entre a escolha feita e a alternativa mais eficiente para o mesmo cenário.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Eficiência global</p>
            <p className="mt-2 font-headline text-4xl font-black italic text-brand-red">64%</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-[28px] border border-brand-red/20 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sua escolha</p>
              <h2 className="mt-2 font-headline text-3xl font-black uppercase tracking-tight text-white">
                Insistiu na força na americana
              </h2>
            </div>
            <span className="material-symbols-outlined text-4xl text-brand-red">warning</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <img
              alt="BJJ Technical error"
              className="h-64 w-full object-cover opacity-70"
              data-alt="Detailed capture of a jiu-jitsu americana lock attempt showing excessive muscular tension and incorrect leverage, dark cinematic studio lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3sB_7_6AHnzSIG0kZJ2lZZx56FaJeefvpwyl-pYIj5XG-hP1ZS2_BPL4Wuml_wNL0DbzYzeAAqVXoMLvVht9GdKSDypLkJvCKU1MNFFEN0o9PjF4jiy_Hmu6S_RkbBmIQ_PY6Ywi4y8gF752WT3d3AGrlR4UnJTc8Xchx5ioQaOhfgjA6TvCegd09BSgAw350IeXlMXYyvGBng09d6T51O3z_OJgpyjkSih_ByVykxPrqzC8zK-m_x2bx-J0TAf4_oehw39e0JdCu"
            />
          </div>

          <div className="mt-6 grid gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Gasto energético</span>
              <span className="font-headline text-xl font-black text-brand-red">88%</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Risco de raspagem</span>
              <span className="font-headline text-xl font-black text-brand-red">Alto</span>
            </div>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Ideal professor</p>
              <h2 className="mt-2 font-headline text-3xl font-black uppercase tracking-tight text-white">
                Transição para o norte-sul
              </h2>
            </div>
            <span className="material-symbols-outlined text-4xl text-zinc-300">psychology</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <img
              alt="BJJ Ideal Technique"
              className="h-64 w-full object-cover opacity-80"
              data-alt="Technical jiu-jitsu transition to North-South position, fluid motion, professional lighting, athlete wearing white gi, dark grey mats"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1H8jPLXssz9s9GYCYR4FvFLoGmSLFxIFsBYIKK-Rcsz0aVQfrRt8FsNeDFeIIPmitFMtzZH7gSVxcgPY-ghFqmNOe52TtsGNcnOPr3FERdfetI-OIwGnTsTS7Sq8iRWehO9EshNDZeRtdbXY4lpwA5D7i5fIcZGG0rdpSw88n9K31-XjZT2suvENjx2J5TPMMMKDapOKDnoM5XJHaBwH2t1u5yNk459_47rQxdBx8wy9PKAMPCZpsGA-r6UEiA0HhNhe9CjVINRbr"
            />
          </div>

          <div className="mt-6 grid gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Gasto energético</span>
              <span className="font-headline text-xl font-black text-zinc-300">22%</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Controle de quadril</span>
              <span className="font-headline text-xl font-black text-zinc-300">Total</span>
            </div>
          </div>
        </article>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:col-span-2 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Raio-X técnico</p>
          <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">Vantagem tática</h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Ao insistir na americana contra um oponente que já defendeu o ângulo inicial, você compromete sua base.
            A transição para o Norte-Sul aproveita a força do oponente para deslizar seu quadril, eliminando o espaço
            necessário para a reposição de guarda.
          </p>
        </article>

        <article className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Consequência</p>
          <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">Perda de montada</h3>
          <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
            Em 4.2 segundos
          </p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Feedback cognitivo</p>
          <p className="mt-3 font-headline text-5xl font-black italic text-white">A-</p>
          <p className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Ponto de atenção</p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:col-span-2 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Próximo drill</p>
              <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                Transição fluida: americana para norte-sul
              </h3>
            </div>
            <button className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
              Iniciar treino
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
