
export default function SuporteEAjuda() {
  return (
    <main className="flex-grow pt-4 pb-24 px-6">
      {/*  Hero Section  */}
      <section className="mb-10">
        <h2 className="font-headline font-black text-4xl italic uppercase tracking-tighter text-zinc-100 mb-2">Central de <span className="text-brand-red">Ajuda</span></h2>      
        <p className="font-body text-zinc-400 text-sm leading-relaxed max-w-[80%]">Estamos aqui para garantir que sua jornada no tatame seja impecável.</p>
      </section>
      {/*  Quick Search  */}
      <div className="mb-10">
        <div className="relative flex items-center bg-zinc-950 p-4 group border-b-2 border-transparent focus-within:border-brand-red/20 transition-all">
          <span className="material-symbols-outlined text-zinc-400 mr-3">search</span>
          <input className="bg-transparent border-none text-zinc-100 focus:ring-0 w-full font-body placeholder:text-zinc-400/40" placeholder="Como podemos ajudar hoje?" type="text"/>      
        </div>
      </div>
      {/*  Support Actions Bento Grid  */}
      <div className="grid grid-cols-2 gap-3 mb-12">
        <div className="col-span-2 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between min-h-[160px] relative overflow-hidden">
          <div className="z-10">
            <span className="font-label font-bold text-[10px] uppercase tracking-widest text-brand-red mb-2 block">Contato Direto</span>
            <h3 className="font-headline font-extrabold text-2xl uppercase italic">Falar com a Academia</h3>
          </div>
          <button className="bg-brand-red/10 text-white font-label font-bold text-xs uppercase tracking-widest py-4 px-6 w-fit z-10 active:scale-95 transition-transform flex items-center gap-2">
            <span className="material-symbols-outlined text-sm" style={{ /* font-variation-settings: 'FILL' 1; */ }}>chat</span>
            Iniciar Chat    
          </button>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-[120px]" style={{ /* font-variation-settings: 'wght' 700; */ }}>support_agent</span>
          </div>
        </div>
        <div className="bg-zinc-900 p-5 flex flex-col justify-between min-h-[140px]">
          <span className="material-symbols-outlined text-brand-red">bug_report</span>
          <div>
            <h4 className="font-headline font-bold text-sm uppercase mb-1">Suporte Técnico</h4>
            <p className="font-body text-[10px] text-zinc-400 uppercase tracking-tight">Relatar erro no App</p>
          </div>
        </div>
        <div className="bg-zinc-900 p-5 flex flex-col justify-between min-h-[140px]">
          <span className="material-symbols-outlined text-brand-red">payments</span>
          <div>
            <h4 className="font-headline font-bold text-sm uppercase mb-1">Financeiro</h4>
            <p className="font-body text-[10px] text-zinc-400 uppercase tracking-tight">Planos e Faturas</p>
          </div>
        </div>
      </div>
      {/*  FAQ Section  */}
      <section className="mb-12">
        <div className="flex items-end gap-2 mb-6">
          <h3 className="font-headline font-black text-2xl uppercase italic tracking-tighter">Dúvidas Comuns</h3>    
          <div className="h-1 flex-grow bg-zinc-800/80 mb-2"></div> 
        </div>
        <div className="space-y-3">
          {/*  Accordion Item 1  */}
          <div className="bg-zinc-950/60 border-l-4 border-transparent hover:border-brand-red/20 transition-all">
            <details className="group">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                <span className="font-body font-bold text-sm uppercase tracking-wide">Como agendar uma aula?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-brand-red">expand_more</span>
              </summary>
              <div className="px-5 pb-5 font-body text-sm text-zinc-500 leading-relaxed">
                Acesse a aba 'Treino' no menu inferior, selecione o horário desejado e confirme sua presença. Lembre-se de agendar com pelo menos 1 hora de antecedência.
              </div>      
            </details>
          </div>
          {/*  Accordion Item 2  */}
          <div className="bg-zinc-950/60 border-l-4 border-transparent hover:border-brand-red/20 transition-all">
            <details className="group">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                <span className="font-body font-bold text-sm uppercase tracking-wide">Política de cancelamento</span>      
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-brand-red">expand_more</span>
              </summary>
              <div className="px-5 pb-5 font-body text-sm text-zinc-500 leading-relaxed">
                Cancelamentos de aulas devem ser feitos com no mínimo 2 horas de antecedência para liberar a vaga para outro atleta.
              </div>      
            </details>
          </div>
          {/*  Accordion Item 3  */}
          <div className="bg-zinc-950/60 border-l-4 border-transparent hover:border-brand-red/20 transition-all">
            <details className="group">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                <span className="font-body font-bold text-sm uppercase tracking-wide">Esqueci minha senha</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-brand-red">expand_more</span>
              </summary>
              <div className="px-5 pb-5 font-body text-sm text-zinc-500 leading-relaxed">
                Na tela de login, clique em 'Recuperar Senha'. Um link de redefinição será enviado para o seu e-mail cadastrado instantaneamente.
              </div>      
            </details>
          </div>
          {/*  Accordion Item 4  */}
          <div className="bg-zinc-950/60 border-l-4 border-transparent hover:border-brand-red/20 transition-all">
            <details className="group">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                <span className="font-body font-bold text-sm uppercase tracking-wide">Graduação e Faixas</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-brand-red">expand_more</span>
              </summary>
              <div className="px-5 pb-5 font-body text-sm text-zinc-500 leading-relaxed">
                O sistema de graduação segue as normas da IBJJF. Você pode acompanhar seu progresso e horas de tatame na aba 'Trilha'.
              </div>      
            </details>
          </div>
        </div>
      </section>
      {/*  Technical Footer Link  */}     
      <div className="flex justify-center mb-8">
        <a className="font-label font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-brand-red transition-colors flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-xs">info</span>
          Versão do App 2.4.0 • Termos de Uso
        </a>
      </div>
    </main>
  );
}
