
export default function MeuPlano() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
      {/*  Hero Section / Current Plan  */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/*  Current Plan Card  */}
          <div className="flex-1 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 monolith-gradient opacity-10 blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">     
              <span className="font-['Inter'] uppercase text-[10px] font-bold tracking-[0.2em] text-brand-red mb-2 block">STATUS ATUAL</span>
              <h2 className="font-['Lexend'] text-5xl font-black italic tracking-tighter text-zinc-100 mb-6">KINETIC PRO</h2>
              <div className="space-y-4 mb-8">    
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand-red" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
                  <span className="font-['Inter'] text-sm font-semibold text-zinc-100">Acesso Ilimitado À Biblioteca</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand-red" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
                  <span className="font-['Inter'] text-sm font-semibold text-zinc-100">Análise de IA (Professor) Avançada</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-brand-red" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
                  <span className="font-['Inter'] text-sm font-semibold text-zinc-100">Prioridade em Seminários Online</span>
                </div>
              </div>
              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">PRÓXIMO VENCIMENTO</p>
                  <p className="text-zinc-100 font-black">15 AGO, 2024</p>
                </div>
                <span className="bg-zinc-800/80 px-4 py-2 text-xs font-bold text-zinc-100">R$ 89,90/mês</span>
              </div>
            </div>
          </div>
          {/*  Usage Telemetry  */}
          <div className="w-full md:w-80 bg-zinc-800/80 p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-['Lexend'] text-xl font-black uppercase tracking-tighter mb-8 leading-none">TELEMETRIA DE RECURSOS</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400">TRILHAS EXTRAS</span>
                    <span className="text-[10px] font-bold text-brand-red">8/10</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-900/80">
                    <div className="h-full monolith-gradient" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400">DOWNLOADS HD</span>
                    <span className="text-[10px] font-bold text-brand-red">12/15</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-900/80">
                    <div className="h-full monolith-gradient" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400">CONSULTAS IA</span>
                    <span className="text-[10px] font-bold text-brand-red">92%</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-900/80">
                    <div className="h-full monolith-gradient" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-8 border border-zinc-800 py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-100 hover:text-surface transition-all active:scale-95">    
              GERENCIAR LIMITES
            </button>       
          </div>
        </div>
      </section>
      {/*  Upgrade Section  */}
      <section className="mb-12">
        <h3 className="font-['Lexend'] text-3xl font-black uppercase italic tracking-tighter mb-8 border-l-4 border-brand-red/20 pl-4">Evolua para Elite</h3>
        <div className="grid md:grid-cols-2 gap-px bg-zinc-800/80">
          {/*  Comparison: Kinetic Pro (Current)  */}
          <div className="bg-zinc-950/60 p-10 flex flex-col">
            <span className="text-[10px] font-black tracking-widest text-zinc-400 mb-2">VOCÊ ESTÁ AQUI</span>
            <h4 className="font-['Lexend'] text-2xl font-black mb-6">PRO</h4>       
            <ul className="space-y-4 flex-grow">
              <li className="flex items-center gap-2 text-sm text-zinc-100">        
                <span className="material-symbols-outlined text-xs text-brand-red" data-icon="check">check</span> Aulas em 4K
              </li>       
              <li className="flex items-center gap-2 text-sm text-zinc-100">        
                <span className="material-symbols-outlined text-xs text-brand-red" data-icon="check">check</span> 10 Trilhas Customizadas
              </li>       
              <li className="flex items-center gap-2 text-sm text-zinc-100">        
                <span className="material-symbols-outlined text-xs text-brand-red" data-icon="check">check</span> Suporte em 24h
              </li>       
            </ul>
          </div>
          {/*  Comparison: Kinetic Elite (Target)  */}
          <div className="bg-zinc-900/80 p-10 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 monolith-gradient opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
            <span className="text-[10px] font-black tracking-widest text-brand-red mb-2">PRÓXIMO NÍVEL</span>  
            <h4 className="font-['Lexend'] text-2xl font-black mb-6">ELITE</h4>     
            <ul className="space-y-4 flex-grow mb-10">
              <li className="flex items-center gap-2 text-sm text-zinc-100 font-bold">
                <span className="material-symbols-outlined text-xs text-brand-red" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Trilhas Ilimitadas
              </li>       
              <li className="flex items-center gap-2 text-sm text-zinc-100 font-bold">
                <span className="material-symbols-outlined text-xs text-brand-red" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Feedback de Vídeo do Mestre
              </li>       
              <li className="flex items-center gap-2 text-sm text-zinc-100 font-bold">
                <span className="material-symbols-outlined text-xs text-brand-red" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Acesso antecipado a Camps
              </li>       
              <li className="flex items-center gap-2 text-sm text-zinc-100 font-bold">
                <span className="material-symbols-outlined text-xs text-brand-red" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Desconto de 30% na Loja
              </li>       
            </ul>
            <button className="w-full monolith-gradient py-5 font-['Lexend'] font-black uppercase italic tracking-tighter text-xl text-white active:scale-95 transition-transform">
              FAZER UPGRADE
            </button>       
            <p className="text-center mt-4 text-[10px] font-bold text-zinc-400 tracking-widest">APENAS + R$ 40,00/MÊS</p>
          </div>
        </div>
      </section>
      {/*  Dynamic Card Example  */}      
      <section className="mb-12">
        <div className="bg-zinc-900 flex flex-col md:flex-row items-center p-8 gap-8 border border-brand-red/20">
          <div className="w-full md:w-1/3 aspect-video bg-zinc-950 overflow-hidden">
            <img alt="BJJ Camp" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6JopgjV703P09Gu8o54zMnwcgkN472mckQNkJKmUFJmnlhaVfGwJtWK87lIjm42BNndg29uZr9Vr4UFceC65COSuTakvm3m4LRLCjiXv9yrpjcrJonJNHc9EV83yfatwAWB9x81U1oHeIZ1AQuw6mxFLOr-qkRYMy-IpaAjbMQhq8KTmOuATRX3te9qegcSfbbfF4PXgDLSyEyW9W5lcZrXoMCR1rIQaxZ10B9gy2xIGYMR87rZSVcT3fq6KloyPmNAu0Rd-BnOJ"/>
          </div>
          <div className="flex-1">
            <h5 className="font-['Lexend'] text-xl font-black uppercase mb-2">CAMP EXCLUSIVO: KINETIC ELITE</h5>        
            <p className="text-sm text-zinc-400 mb-6 font-['Inter'] leading-relaxed">Alunos do plano Elite têm acesso prioritário ao nosso próximo camp presencial em Abu Dhabi. Garanta sua vaga antes de todos.</p>
            <div className="flex gap-4">        
              <span className="text-[10px] font-black uppercase px-3 py-1 bg-brand-red/10 text-white tracking-widest italic">VAGAS LIMITADAS</span>
              <span className="text-[10px] font-black uppercase px-3 py-1 bg-zinc-800/80 text-zinc-100 tracking-widest">NOVEMBRO 2024</span>  
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

