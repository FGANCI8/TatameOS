const plans = [
  {
    name: 'Iniciante',
    subtitle: 'Acesso básico',
    price: 'R$ 0',
    period: '/mês',
    features: ['Acesso a 5 técnicas semanais', 'Cronômetro de treino básico', 'Perfil de atleta público'],
    highlighted: false,
  },
  {
    name: 'Tatame Pro',
    subtitle: 'Performance elite',
    price: 'R$ 49,90',
    period: '/mês',
    features: ['Feedback IA ilimitado', 'Trilhas avançadas', 'Vídeos em alta definição', 'Chat de análise técnica'],
    highlighted: true,
  },
] as const;

export default function PlanosDeAcesso() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Evolução sem limites</p>
        <h1 className="mt-3 font-headline text-4xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
          Escolha seu nível
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          Planos desenhados para manter leitura clara no celular e apresentar o upgrade premium com hierarquia
          visual consistente.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex h-full flex-col rounded-[28px] border p-6 md:p-8 ${
              plan.highlighted ? 'border-brand-red/20 bg-brand-red/10' : 'border-zinc-800/80 bg-zinc-900/80'
            }`}
          >
            {plan.highlighted ? (
              <span className="absolute right-4 top-4 rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
                Recomendado
              </span>
            ) : null}

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{plan.subtitle}</p>
              <h2 className="mt-3 font-headline text-3xl font-black uppercase tracking-tight text-zinc-100">
                {plan.name}
              </h2>
            </div>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <span className={`material-symbols-outlined mt-0.5 text-[18px] ${plan.highlighted ? 'text-brand-red' : 'text-zinc-300'}`}>
                    check_circle
                  </span>
                  <span className="text-sm leading-7 text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex items-end gap-2">
                <span className="font-headline text-5xl font-black italic text-zinc-100">{plan.price}</span>
                <span className="pb-2 text-sm font-black uppercase tracking-[0.3em] text-zinc-400">{plan.period}</span>
              </div>
              <button
                className={`mt-6 w-full rounded-2xl border px-6 py-3 text-[10px] font-black uppercase tracking-widest transition active:scale-95 ${
                  plan.highlighted
                    ? 'border-brand-red/20 bg-brand-red/10 text-brand-red hover:bg-brand-red/20'
                    : 'border-zinc-800 bg-zinc-950/60 text-zinc-100 hover:bg-zinc-800'
                }`}
              >
                {plan.highlighted ? 'Assinar agora' : 'Plano atual'}
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Comparativo técnico</p>
        <div className="mt-6 overflow-hidden rounded-[24px] border border-zinc-800">
          {[
            ['Biblioteca de técnicas', 'Limitada', 'Ilimitada'],
            ['Qualidade de vídeo', '720p', '4K'],
            ['Feedback de IA', 'Não incluso', 'Tempo real'],
            ['Trilhas customizadas', 'Não incluso', 'Incluso'],
          ].map(([label, free, pro], index) => (
            <div
              key={label}
              className={`grid grid-cols-1 gap-2 border-b border-zinc-800 p-4 md:grid-cols-[1.4fr_1fr_1fr] md:items-center ${
                index % 2 === 0 ? 'bg-zinc-950/60' : 'bg-zinc-900/80'
              }`}
            >
              <div className="font-black uppercase tracking-tight text-zinc-100">{label}</div>
              <div className="text-sm text-zinc-400 md:text-center">{free}</div>
              <div className="text-sm font-black text-zinc-300 md:text-center">{pro}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
