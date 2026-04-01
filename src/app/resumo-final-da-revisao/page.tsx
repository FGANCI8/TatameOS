export default function ResumoFinalDaRevisao() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 pb-32">
      <section className="mb-16 grid grid-cols-1 gap-0 border-l-8 border-brand-red/20 lg:grid-cols-12">
        <div className="bg-zinc-950/60 p-10 lg:col-span-8">
          <span className="mb-4 block font-label text-[12px] font-bold uppercase tracking-[0.3em] text-brand-red">
            SESSÃO FINALIZADA
          </span>
          <h2 className="mb-6 font-headline text-5xl font-black leading-none md:text-7xl">
            REVISÃO DE PERFORMANCE
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-500">
            Sua última sessão de sparring revelou padrões críticos. Consolidamos os dados biomecânicos para otimizar
            sua próxima subida ao ringue.
          </p>
        </div>
        <div className="flex flex-col justify-center border-l border-zinc-800/80 bg-zinc-900 p-10 lg:col-span-4">
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-8xl font-black leading-none tracking-tighter text-zinc-100">84</span>
            <span className="font-label text-xl font-bold uppercase italic text-brand-red">%</span>
          </div>
          <span className="mt-2 font-label text-xs font-bold uppercase tracking-widest text-zinc-500">
            SCORE DE EFICIÊNCIA
          </span>
        </div>
      </section>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-t-2 border-brand-red/20">
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-brand-red">warning</span>
            <h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">Erros detectados</h3>
          </div>
          <div className="space-y-6">
            <div>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-brand-red">Crítico</span>
              <p className="mt-1 font-bold uppercase text-zinc-100">Guarda baixa no contra-ataque</p>
              <p className="mt-1 text-sm text-zinc-500">Sua mão direita cai 15cm ao lançar o jab de esquerda.</p>
            </div>
            <div className="border-t border-zinc-800/80 pt-4">
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">Técnico</span>
              <p className="mt-1 font-bold uppercase text-zinc-100">Pivot do pé traseiro incompleto</p>
              <p className="mt-1 text-sm text-zinc-500">Perda de 22% de potência no direto por falta de rotação.</p>
            </div>
            <div className="border-t border-zinc-800/80 pt-4">
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">Técnico</span>
              <p className="mt-1 font-bold uppercase text-zinc-100">Exposição do queixo no clinch</p>
              <p className="mt-1 text-sm text-zinc-500">Ângulo de cabeça vulnerável a uppercuts curtos.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-t-2 border-zinc-800">
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-zinc-300">verified</span>
            <h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">Pontos fortes</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined mt-1 text-zinc-300">check_box</span>
              <div>
                <p className="font-bold uppercase leading-tight text-zinc-100">Velocidade de reação</p>
                <p className="text-sm text-zinc-500">Esquivas laterais 0.1s mais rápidas que a média.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined mt-1 text-zinc-300">check_box</span>
              <div>
                <p className="font-bold uppercase leading-tight text-zinc-100">Volume de golpes</p>
                <p className="text-sm text-zinc-500">Consistência de 45 golpes por round mantida.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined mt-1 text-zinc-300">check_box</span>
              <div>
                <p className="font-bold uppercase leading-tight text-zinc-100">Controle de distância</p>
                <p className="text-sm text-zinc-500">Excelente uso do alcance para ditar o ritmo.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-6 lg:row-span-1">
          <div className="flex h-full flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-4 border-brand-red/20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-red">psychology</span>
                <h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">Insight do assistente IA</h3>
              </div>
              <p className="mb-4 text-lg font-bold italic leading-snug text-zinc-100">
                "Sua agressividade é sua maior arma, mas a imprudência defensiva é o seu maior risco."
              </p>
              <div className="bg-zinc-900/80 p-4">
                <p className="mb-2 text-xs uppercase tracking-widest font-bold text-zinc-500">FOCO DA PRÓXIMA SESSÃO</p>
                <p className="font-bold uppercase text-brand-red">Transição defensiva post-shot</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <h3 className="mb-6 flex items-center gap-2 font-headline text-2xl font-black uppercase tracking-tighter">
        <span className="h-[2px] w-8 bg-brand-red/10" />
        Técnicas recomendadas
      </h3>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          ['Check Hook Drill', 'Melhore sua saída lateral enquanto neutraliza oponentes agressivos.'],
          ['Footwork Mastery', 'Exercícios de pivot para maximizar a transferência de peso no direto.'],
          ['High Guard Recovery', 'Reprogramação muscular para manter a guarda alta após cada ataque.'],
        ].map(([title, desc]) => (
          <div key={title} className="group cursor-pointer bg-zinc-950/60 transition-all hover:bg-zinc-900">
            <div className="relative h-48 overflow-hidden">
              <img
                alt="technique thumbnail"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDau4q-2kxuP1w0rcTaLgmSpenJVnVqtJtF8laA5_ndaZY90GMUT1E3ABxJ4yKDWJbec00c1dtKEeZxanW1MajcrpNFj3B80P8gkMJRwkTRyk7FaXwnrb_pHkjjYkBXHOzCZORhbBST8qYcZP9LCzMlNI9KMgerUQm7LhqbjaHSS7BIT70nl65NfwP3ap74opsvTHG1HR4wj5jksVcEI4TiQozCJ7enIG4DaeYOis5Pn_TM8NS2DWd2ODRkXoWONQwcOvINMLSSAqW_"
              />
              <div className="absolute bottom-4 right-4 bg-brand-red/10 p-2">
                <span className="material-symbols-outlined text-white">play_arrow</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="mb-2 text-lg font-bold uppercase text-zinc-100">{title}</h4>
              <p className="text-sm text-zinc-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-zinc-800/80 p-1 lg:p-1">
        <div className="flex flex-col items-center justify-between gap-10 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 lg:flex-row lg:p-12">
          <div className="flex-1">
            <span className="mb-4 inline-block bg-brand-red/10 px-3 py-1 font-label text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Plano adaptativo gerado
            </span>
            <h2 className="mb-4 font-headline text-4xl font-black uppercase leading-tight">
              Plano de treino de correção
            </h2>
            <p className="max-w-xl text-zinc-500">
              Baseado nas falhas detectadas, geramos um circuito de 45 minutos focado exclusivamente em eliminar os
              pontos de vulnerabilidade defensiva e otimizar seu pivot.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <button className="flex w-full items-center justify-center gap-4 bg-brand-red/10 px-12 py-6 font-headline text-xl font-black uppercase tracking-tighter text-white transition-all active:scale-95 hover:brightness-110 lg:w-auto">
              Iniciar treino de correção
              <span className="material-symbols-outlined" data-icon="fitness_center">
                fitness_center
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
