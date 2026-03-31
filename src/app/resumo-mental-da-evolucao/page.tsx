export default function ResumoMentalDaEvoluO() {
  return (
    <>
      <main className="flex-grow px-6 pb-32 pt-24">
        <section className="mb-10">
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            MINDSET COMPETITIVO
          </span>
          <h2 className="mt-2 mb-6 font-['Lexend'] text-4xl font-black uppercase leading-none">
            Resumo mental da evolução
          </h2>
          <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">psychology</span>
            </div>
            <div className="relative z-10">
              <div className="mb-1 text-5xl font-['Lexend'] font-black text-zinc-100">88%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-red">Estabilidade Emocional</div>
              <p className="mt-4 max-w-[80%] text-sm leading-relaxed text-zinc-400">
                Sua maturidade em situações de pressão aumentou 12% desde o último campeonato. O controle do pânico sob
                submissão está em níveis de elite.
              </p>
            </div>
          </div>
        </section>

        <div className="mb-10 grid grid-cols-2 gap-4">
          <div className="aspect-square flex flex-col justify-between bg-zinc-900 p-5">
            <span className="material-symbols-outlined text-brand-red">shield_with_heart</span>
            <div>
              <div className="text-3xl font-['Lexend'] font-bold">ALTA</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter text-zinc-400">Confiança Técnica</div>
            </div>
          </div>

          <div className="aspect-square flex flex-col justify-between bg-zinc-800/80 p-5">
            <span className="material-symbols-outlined text-zinc-300">verified_user</span>
            <div>
              <div className="text-3xl font-['Lexend'] font-bold">NÍVEL 4</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter text-zinc-400">Maturidade Tática</div>
            </div>
          </div>

          <div className="col-span-2 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <div className="mb-4 flex items-end justify-between">
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Foco &amp; Presença</div>
              <div className="text-xl font-['Lexend'] font-black text-zinc-100">94/100</div>
            </div>
            <div className="h-3 w-full overflow-hidden bg-zinc-800/80">
              <div className="monolith-gradient relative h-full w-[94%]">
                <div className="absolute inset-0 bg-white/10 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold uppercase tracking-tight text-white">
            <span className="h-[2px] w-8 bg-brand-red/10"></span>
            Conquistas Mentais
          </h3>
          <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
            <div className="w-32 flex-shrink-0 border border-zinc-800/15 bg-zinc-950/60 p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center bg-brand-red/20">
                <span className="material-symbols-outlined text-brand-red">workspace_premium</span>
              </div>
              <div className="text-[10px] font-bold uppercase leading-tight">Mente de Aço</div>
            </div>
            <div className="w-32 flex-shrink-0 border border-zinc-800/15 bg-zinc-950/60 p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center bg-tertiary-container/20">
                <span className="material-symbols-outlined text-zinc-400">self_improvement</span>
              </div>
              <div className="text-[10px] font-bold uppercase leading-tight">Zen Combatente</div>
            </div>
            <div className="w-32 flex-shrink-0 border border-zinc-800/15 bg-zinc-950/60 p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center bg-brand-red/20">
                <span className="material-symbols-outlined text-brand-red">timer_10_alt_1</span>
              </div>
              <div className="text-[10px] font-bold uppercase leading-tight">Clutch Performer</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
