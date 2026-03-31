export default function BoasVindas() {
  return (
    <>
      <section className="relative min-h-[618px] overflow-hidden px-6 pb-12 pt-24">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover grayscale opacity-35 brightness-50"
            data-alt="Imagem cinematográfica em preto e branco de dois atletas de jiu-jitsu em luta."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQS_3NdC0DkLrj3p7eUmdd3pqa_26AjtFc5-MCwUgI-VPNDTr5i1jOaXleXcsQHW-ia5u4ItDwrkQGgjQBvXdGZOyMv1hn2GqI_byAu_HZh0sHnPEAhtJUAmPt62dHyMcWvWJZPf17iOoaJqiouyTh1jM974VLpS_t_uRD3ZUbM2hPFrP_749DZ1_7MH2yriwhW4KAGeHQF5y-Q9m1gagZyMlUHQUsb_gbE3dJh69kFUh4nFlCEuNBNtGwvII18hplM91sMS31YPUV"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,26,26,0.18),transparent_35%),linear-gradient(180deg,rgba(3,7,18,0.45),rgba(3,7,18,0.95))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">
            Performance elite
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-headline text-5xl font-black uppercase leading-none tracking-tighter text-white md:text-8xl">
              DOMINE A <br />
              <span className="text-brand-red">ARTE SUAVE</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              Bem-vindo ao Tatame OSS. Uma plataforma pensada para elevar seu Jiu-Jitsu com tecnologia, consistência e
              visão de evolução.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 transition duration-200 hover:scale-[1.01] hover:border-brand-red/20">
            <span className="material-symbols-outlined mb-4 text-brand-red">menu_book</span>
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Biblioteca</h3>
            <p className="mt-2 text-sm leading-snug text-zinc-400">
              Acesso total a técnicas categorizadas por posição e nível, com vídeos em alta qualidade.
            </p>
          </article>

          <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 transition duration-200 hover:scale-[1.01] hover:border-brand-red/20">
            <span className="material-symbols-outlined mb-4 text-brand-red">rebase_edit</span>
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Trilhas</h3>
            <p className="mt-2 text-sm leading-snug text-zinc-400">
              Caminhos estruturados para o treino de hoje, a graduação e o próximo objetivo.
            </p>
          </article>

          <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 transition duration-200 hover:scale-[1.01] hover:border-brand-red/20">
            <span className="material-symbols-outlined mb-4 text-brand-red">psychology</span>
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Assistente IA</h3>
            <p className="mt-2 text-sm leading-snug text-zinc-400">
              Dúvidas táticas, revisão e contexto para acelerar sua tomada de decisão no tatame.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <h2 className="font-headline text-3xl font-black uppercase italic tracking-tight text-white md:text-5xl">
              Resultados <span className="text-brand-red">mensuráveis</span>
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <div className="text-4xl font-black text-white">1.2K+</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Aulas HD</div>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
                <div className="text-4xl font-black text-white">50+</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Professores</div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 text-brand-red">
                <span className="material-symbols-outlined">fitness_center</span>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Status atual</div>
                <div className="font-headline text-lg font-black uppercase text-white">Nível: Iniciante</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <span>Performance</span>
                <span>0%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-2 rounded-full bg-brand-red" />
              </div>
            </div>

            <p className="mt-6 text-xs italic leading-tight text-zinc-300">
              "O Jiu-Jitsu é a ratificação do intelecto sobre a força bruta." - Helio Gracie
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:flex-row md:p-8">
          <div className="hidden md:block">
            <span className="font-headline text-2xl font-black italic text-brand-red">Tatame OSS</span>
          </div>
          <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-8 py-4 text-white transition duration-200 hover:scale-105 hover:bg-brand-red/20 md:w-auto">
            <span className="font-headline text-lg font-black uppercase tracking-[0.22em] text-brand-red">
              Iniciar jornada
            </span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </>
  );
}
