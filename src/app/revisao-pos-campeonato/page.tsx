export default function RevisaoPosCampeonato() {
  return (
    <main className="mx-auto mb-28 flex-1 max-w-5xl px-6 pt-20">
      <section className="mb-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block font-headline text-xs font-black uppercase tracking-[0.3em] text-brand-red">
              PÓS-COMPETIÇÃO
            </span>
            <h1 className="text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
              REVISÃO DE PERFORMANCE
            </h1>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="font-label text-[10px] uppercase tracking-widest text-zinc-500">Resultado</span>
              <span className="font-headline text-4xl italic text-brand-red">OURO</span>
            </div>
            <div className="flex flex-col border-l border-zinc-800/30 pl-8">
              <span className="font-label text-[10px] uppercase tracking-widest text-zinc-500">Evento</span>
              <span className="text-lg font-headline font-bold uppercase">Abu Dhabi Grand Slam</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 border-l-4 border-brand-red/20 md:col-span-7 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-brand-red">psychology</span>
            <h2 className="text-xl font-black uppercase tracking-widest">Lições aprendidas</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-800/80 p-4 border border-zinc-800/10">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-300">Ponto de falha</span>
              <p className="text-sm leading-relaxed text-zinc-400">
                Gestão de fôlego no último minuto da final. Preciso economizar energia na guarda fechada.
              </p>
            </div>
            <div className="bg-zinc-800/80 p-4 border border-zinc-800/10">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                Sucesso técnico
              </span>
              <p className="text-sm leading-relaxed text-zinc-400">
                A entrada de Single Leg X funcionou com 100% de eficiência em todas as 4 lutas.
              </p>
            </div>
            <button className="w-full border border-dashed border-zinc-800 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:bg-zinc-900">
              Adicionar nova observação
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-zinc-800/80 p-8 md:col-span-5">
          <div className="absolute right-0 top-0 p-2 opacity-10">
            <span className="material-symbols-outlined text-9xl">track_changes</span>
          </div>
          <div className="relative z-10">
            <h2 className="mb-6 text-xl font-black uppercase tracking-widest">Metas do próximo ciclo</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1 h-8 w-2 bg-brand-red/10" />
                <div>
                  <h3 className="mb-1 text-sm font-bold uppercase tracking-wider">Refinar meia-guarda profunda</h3>
                  <p className="text-xs text-zinc-500">Focar na transição para as costas após a raspagem.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 h-8 w-2 bg-zinc-800" />
                <div>
                  <h3 className="mb-1 text-sm font-bold uppercase tracking-wider">Aumentar volume de drill</h3>
                  <p className="text-xs text-zinc-500">Mínimo de 30 minutos diários de entradas de queda.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 h-8 w-2 bg-zinc-400/20" />
                <div>
                  <h3 className="mb-1 text-sm font-bold uppercase tracking-wider">Controle de peso</h3>
                  <p className="text-xs text-zinc-500">Manter 78kg estável para a próxima seletiva.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-12 md:p-8">
          <h2 className="mb-6 text-xl font-black uppercase tracking-widest">Diário técnico do atleta</h2>
          <div className="min-h-[200px] rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 border-b-2 border-brand-red/20">
            <p className="font-body text-sm leading-loose italic text-zinc-100">
              "O desempenho geral foi excelente. A disciplina tática foi o diferencial. Notei uma hesitação na
              finalização por estrangulamento que custou tempo, mas a recuperação foi rápida. O foco agora deve ser
              100% em transições fluidas. A mentalidade estava inabalável."
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-brand-red/10 px-10 py-4 font-headline text-sm font-black uppercase tracking-widest text-white transition-transform active:scale-95">
              Salvar sessão de revisão
            </button>
          </div>
        </div>

        <div className="h-64 overflow-hidden bg-zinc-900 md:col-span-8">
          <img
            alt="BJJ Action"
            className="h-full w-full object-cover grayscale opacity-50"
            data-alt="Action shot of a Jiu Jitsu match in a high-intensity professional arena with dramatic overhead stadium lighting and grit"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCenRiClsNRU1gTtScUhbBweHTWhgJOPGAu1o_Jh4GAqpCXSBKj71A6Gmotw0-3bKLGfd_I7fxTAbYgG9RKqWYfvjwJ7zaw0dGkixQxJl1j4bcFC5oObJ3juW7uYF5BRy-2BxsnQV1bmudmhw9qQAOE-tbuJCQ90piLJ-iFaKtDHr2DkHOpcV8BNg6OWKdAK70PWpxzF3n5Jl1b5IflgWPBe0XJTtzhJLTRDxjsR6hoPyBmT1HGixeptdmGIUOPtkkivhNyXv4per1y"
          />
        </div>
        <div className="flex flex-col justify-center bg-brand-red/10 p-8 md:col-span-4">
          <span className="mb-2 font-label text-[10px] uppercase tracking-widest text-zinc-500">Status do ciclo</span>
          <h3 className="text-4xl font-headline font-black uppercase leading-none tracking-tighter text-white">
            DISCIPLINA É LIBERDADE
          </h3>
        </div>
      </div>
    </main>
  );
}
