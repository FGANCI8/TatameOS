export default function ResumoDoAtleta() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Resumo do atleta</p>
            <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Evolução consolidada
            </h1>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Avaliação</p>
            <p className="mt-2 font-headline text-4xl font-black italic text-brand-red">9.8</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Treinos', '124'],
          ['Consistência', '92%'],
          ['Horas', '78h'],
          ['Sequência', '12 dias'],
        ].map(([label, value]) => (
          <article key={label} className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{label}</p>
            <p className="mt-2 font-headline text-4xl font-black italic text-white">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 lg:col-span-2">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Linha temporal</p>
          <div className="mt-6 space-y-3">
            {['Treino técnico', 'Sparring intenso', 'Check-in completo'].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="font-black uppercase tracking-tight text-zinc-100">{item}</p>
                <p className="mt-1 text-sm text-zinc-400">Resumo curto do evento e impacto na evolução.</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Métrica chave</p>
          <p className="mt-2 font-headline text-4xl font-black italic text-white">94%</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[92%] rounded-full bg-zinc-700" />
          </div>
        </article>
      </section>
    </main>
  );
}
