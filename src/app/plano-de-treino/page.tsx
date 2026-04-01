export default function PlanoDeTreino() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-28 pt-24 md:px-8">
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 lg:col-span-8">
          <div className="relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red">Prioridade máxima</span>
            <h2 className="mt-2 mb-4 text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl">
              Forja da falha
            </h2>
            <p className="max-w-xl leading-relaxed text-zinc-400">
              Não treine até conseguir. Treine até que seja impossível errar. Este cronograma foca na correção cirúrgica dos seus
              pontos de pressão.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 hidden w-1/3 bg-zinc-800/40 md:block" />
        </div>

        <div className="flex flex-col justify-between rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-8 lg:col-span-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Frequência semanal</span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-6xl font-black text-brand-red">04</span>
              <span className="text-2xl font-bold text-brand-red">Sessões</span>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-red/20 pt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Meta de melhoria</span>
            <p className="mt-1 text-xl font-bold uppercase text-white">Reposição de guarda sob pressão</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col space-y-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">Checklist técnico</h3>
            <span className="material-symbols-outlined text-brand-red">fact_check</span>
          </div>
          <div className="space-y-4">
            {['Postura de Defesa (Shell)', 'Fuga de Quadril Explosiva', 'Esgrima Reativa', 'Bloqueio de Joelho'].map((item) => (
              <label key={item} className="group flex cursor-pointer items-center gap-4">
                <input
                  className="h-6 w-6 rounded-none border-2 border-zinc-800 bg-transparent text-brand-red focus:ring-0"
                  type="checkbox"
                />
                <span className="text-sm font-bold uppercase tracking-wide text-zinc-400 transition-colors group-hover:text-white">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">Drills de exaustão</h3>
          <div className="flex-1 space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 transition-all hover:bg-zinc-900">
              <div className="flex items-start justify-between">
                <span className="text-2xl font-black text-zinc-400">01</span>
                <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-2 py-1 text-[10px] font-bold uppercase tracking-tighter text-zinc-400">
                  10 min
                </span>
              </div>
              <h4 className="mt-2 text-sm font-bold uppercase text-white">Passagem de toureando</h4>
              <p className="mt-1 text-xs text-zinc-400">Velocidade máxima com foco no posicionamento dos pés.</p>
            </div>
            <div className="rounded-2xl border border-brand-red/20 bg-zinc-950/60 p-4 transition-all hover:bg-zinc-900">
              <div className="flex items-start justify-between">
                <span className="text-2xl font-black text-brand-red">02</span>
                <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-2 py-1 text-[10px] font-bold uppercase tracking-tighter text-brand-red">
                  15 min
                </span>
              </div>
              <h4 className="mt-2 text-sm font-bold uppercase text-white">Saída de montada</h4>
              <p className="mt-1 text-xs text-zinc-400">Foco em ponte explosiva e fuga de quadril conectada.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div>
            <h3 className="mb-6 text-xl font-extrabold uppercase tracking-tight text-white">Progresso disciplinar</h3>
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <span>Consistência</span>
                  <span>85%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="relative h-full w-[85%] overflow-hidden rounded-full bg-zinc-600">
                    <div className="absolute inset-0 bg-white/10" />
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <span>Intensidade</span>
                  <span>60%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[60%] rounded-full bg-brand-red" />
                </div>
              </div>
            </div>
          </div>
          <button className="mt-8 rounded-2xl border border-brand-red/20 bg-brand-red/10 py-4 text-sm font-black uppercase tracking-widest text-brand-red transition duration-100 active:scale-95">
            Iniciar sessão hoje
          </button>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-10">
        <h3 className="mb-10 inline-block border-b-4 border-brand-red/20 text-3xl font-black uppercase tracking-tighter text-white">
          Cronograma de guerra
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {[
            { day: 'SEG', num: '12', active: false, accent: true },
            { day: 'TER', num: '13', active: true, accent: true },
            { day: 'QUA', num: '14', active: false, accent: false },
            { day: 'QUI', num: '15', active: false, accent: true },
            { day: 'SEX', num: '16', active: false, accent: false },
            { day: 'SAB', num: '17', active: false, accent: false },
            { day: 'DOM', num: '18', active: false, accent: false },
          ].map((item) => (
            <div
              key={item.day}
              className={`flex flex-col items-center justify-center space-y-2 rounded-2xl p-4 ${
                item.active ? 'border border-brand-red/20 bg-brand-red/10' : 'border border-zinc-800 bg-zinc-950/60'
              }`}
            >
              <span className={`text-[10px] font-black uppercase ${item.active ? 'text-brand-red' : 'text-zinc-500'}`}>
                {item.day}
              </span>
              <span className={`text-3xl font-black ${item.active ? 'text-brand-red' : 'text-white'}`}>{item.num}</span>
              {item.active ? (
                <span className="material-symbols-outlined text-lg text-brand-red">fitness_center</span>
              ) : item.accent ? (
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-[28px] border border-zinc-800/80 bg-black">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
          alt="close-up dramático em preto e branco de mãos de um lutador amarrando a faixa preta com textura detalhada do tecido"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5K_OgmNhrVikjXAtFU6zthQYxup79koKUZVNRW9Nr8gOI9qWrpFINvhBwChEXOcAPY5qsci1M1Yu2jAE3YC48x39ZjY7IWJARQq26iGc5hQRWYua9D4y1tZ3RV4nzoLohEYy7EHP2RsZ8mLl1Fve0H3eYcKCvvxoVMrxRn9RHdCFx11GJ36xnLS2U3Bvb6tPqvVFD2GeaVsep1FCsuvWPHKH-0sjK6JGIgzQwvNyZjhYs7vWdhuuaPgLUBBm1rML6VvJH9H76EWnQ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        <div className="relative z-10 px-4 text-center">
          <h4 className="text-3xl font-black uppercase tracking-tighter italic text-white md:text-5xl">
            A disciplina supera o talento.
          </h4>
          <p className="mt-4 text-xs font-bold tracking-[0.3em] text-brand-red">Resiliência é a única regra</p>
        </div>
      </section>
    </main>
  );
}
