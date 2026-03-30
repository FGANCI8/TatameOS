export default function EnviarFeedback() {
  return (
    <main className="mx-auto mb-24 max-w-4xl px-6 py-12">
      <section className="mb-12">
        <h2 className="mb-2 font-headline text-5xl font-black uppercase tracking-tighter text-zinc-100">
          Feedback <span className="text-brand-red">do professor</span>
        </h2>
        <p className="font-label text-xs uppercase tracking-widest text-zinc-400">
          Análise de performance e revisão tática
        </p>
      </section>

      <form className="space-y-12">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-2 md:p-8">
            <div>
              <label className="mb-6 block font-headline text-xs font-bold uppercase tracking-widest text-zinc-500">
                Selecionar aluno
              </label>
              <select className="w-full cursor-pointer border-b-2 border-transparent bg-zinc-950 px-0 py-4 font-headline text-2xl font-black uppercase tracking-tight text-zinc-100 transition-all focus:border-zinc-800 focus:ring-0">
                <option>Marcus "The Axe" Almeida</option>
                <option>Gabriella Garcia</option>
                <option>Nicholas Meregali</option>
                <option>Beatriz Mesquita</option>
              </select>
            </div>
            <div className="mt-12 flex gap-8">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase text-zinc-400">Faixa atual</p>
                <p className="font-headline font-black text-zinc-100">Faixa roxa</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase text-zinc-400">Presença</p>
                <p className="font-headline font-black text-zinc-100">94%</p>
              </div>
            </div>
          </div>

          <div className="flex aspect-square flex-col justify-end bg-brand-red/10 p-8 md:aspect-auto">
            <span className="material-symbols-outlined mb-4 text-5xl text-white" data-weight="fill">
              monitoring
            </span>
            <h3 className="font-headline text-xl font-black uppercase leading-tight text-white">
              Analisar fluxo técnico
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          {[
            ['Técnica', 'Precisão mecânica e execução', '8.5'],
            ['Postura', 'Consciência espacial e estabilidade de base', '7.0'],
            ['Disciplina', 'Fortaleza mental e disciplina', '9.5'],
          ].map(([title, subtitle, value]) => (
            <div key={title} className="group rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h4 className="font-headline text-2xl font-black uppercase italic leading-none text-zinc-100">
                    {title}
                  </h4>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">{subtitle}</p>
                </div>
                <span className="font-headline text-4xl font-black text-brand-red">{value}</span>
              </div>
              <input className="w-full" max="10" min="0" step="0.5" type="range" value={value} readOnly />
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <label className="mb-4 block font-headline text-xs font-bold uppercase tracking-widest text-zinc-500">
            Observações táticas
          </label>
          <textarea
            className="w-full resize-none border-none bg-zinc-950 p-4 font-body text-zinc-100 placeholder:text-zinc-700 focus:ring-1 focus:ring-brand-red/20"
            placeholder="Digite as observações da performance aqui..."
            rows={4}
          />
        </div>

        <div className="pt-6">
          <button
            className="flex w-full items-center justify-center gap-4 bg-brand-red/10 py-6 transition-transform active:scale-[0.98]"
            type="submit"
          >
            <span className="font-headline text-xl font-black uppercase tracking-widest text-white">
              Enviar feedback
            </span>
            <span className="material-symbols-outlined text-white transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </button>
          <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Transmissão segura • TatameOS 4.0
          </p>
        </div>
      </form>
    </main>
  );
}
