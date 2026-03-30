export default function DashboardDeEvoluO() {
  return (
    <>
<main className="mt-20 px-6 space-y-8 animate-fade-in">
{/*  Page Title Hero  */}
<section className="mt-4">
<h1 className="font-['Lexend'] font-black italic text-5xl tracking-tighter uppercase leading-none text-zinc-100">
                EVOLUÇÃO <br/> <span className="text-brand-red">COMPETITIVA</span>
</h1>
<p className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-2">
                SISTEMA DE TELEMETRIA DE PERFORMANCE ELITE
            </p>
</section>
{/*  Win/Loss Ratio Bento Grid  */}
<section className="grid grid-cols-2 gap-4">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between border-l-4 border-brand-red/20 h-40">
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase text-zinc-500">VITÓRIAS</span>
<div className="flex items-baseline gap-2">
<span className="font-['Lexend'] font-black text-6xl text-zinc-100">42</span>
<span className="text-brand-red font-black text-xl italic">W</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between border-l-4 border-zinc-100 h-40">
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase text-zinc-500">DERROTAS</span>
<div className="flex items-baseline gap-2">
<span className="font-['Lexend'] font-black text-6xl text-zinc-100">08</span>
<span className="text-zinc-100 font-black text-xl italic">L</span>
</div>
</div>
</section>
{/*  Maturity Level  */}
<section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div className="space-y-1">
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase text-zinc-500">MATURIDADE TÉCNICA</span>
<h2 className="font-['Lexend'] font-black italic text-3xl uppercase text-zinc-100">FAIXA ROXA IV</h2>
</div>
<div className="bg-brand-red/10 px-3 py-1 font-['Lexend'] font-black text-xs italic uppercase">ELITE TIER</div>
</div>
<div className="mt-6 w-full h-2 bg-zinc-950 overflow-hidden">
<div className="h-full bg-gradient-to-r from-zinc-800-container to-zinc-800-fixed-dim w-[78%]"></div>
</div>
<div className="mt-2 flex justify-between items-center">
<span className="font-['Inter'] font-bold text-[10px] text-zinc-500 uppercase tracking-widest">PROGRESSO PARA MARROM</span>
<span className="font-['Lexend'] font-black text-sm text-zinc-400 italic">78%</span>
</div>
{/*  Atmospheric background element  */}
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[160px]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
</section>
{/*  Techniques Mastery (Radial Mimic)  */}
<section className="space-y-4">
<h3 className="font-['Inter'] font-bold text-xs tracking-[0.2em] uppercase text-zinc-100 border-l-2 border-brand-red/20 pl-3">TÉCNICAS DOMINADAS</h3>
<div className="grid grid-cols-1 gap-4">
<div className="bg-zinc-950/60 p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-brand-red" data-icon="lock_open">lock_open</span>
</div>
<div>
<div className="font-['Lexend'] font-black text-lg uppercase leading-tight italic">Guarda De La Riva</div>
<div className="font-['Inter'] font-bold text-[10px] text-zinc-500 uppercase">92% EFICIÊNCIA</div>
</div>
</div>
<div className="w-16 h-1 bg-zinc-800/80">
<div className="h-full bg-brand-red/10 w-[92%]"></div>
</div>
</div>
<div className="bg-zinc-950/60 p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-brand-red" data-icon="handshake">handshake</span>
</div>
<div>
<div className="font-['Lexend'] font-black text-lg uppercase leading-tight italic">Triângulo de Mão</div>
<div className="font-['Inter'] font-bold text-[10px] text-zinc-500 uppercase">85% EFICIÊNCIA</div>
</div>
</div>
<div className="w-16 h-1 bg-zinc-800/80">
<div className="h-full bg-brand-red/10 w-[85%]"></div>
</div>
</div>
<div className="bg-zinc-950/60 p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-brand-red" data-icon="swords">swords</span>
</div>
<div>
<div className="font-['Lexend'] font-black text-lg uppercase leading-tight italic">Passagem Toureando</div>
<div className="font-['Inter'] font-bold text-[10px] text-zinc-500 uppercase">70% EFICIÊNCIA</div>
</div>
</div>
<div className="w-16 h-1 bg-zinc-800/80">
<div className="h-full bg-brand-red/10 w-[70%]"></div>
</div>
</div>
</div>
</section>
{/*  Recurring Failures Section  */}
<section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-2 border-zinc-800/20">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-brand-red" data-icon="report">report</span>
<h3 className="font-['Lexend'] font-black italic text-xl uppercase text-brand-red">FALHAS RECORRENTES</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-zinc-950/60">
<span className="font-['Inter'] font-bold text-xs uppercase tracking-wider">Postura na Meia-Guarda</span>
<span className="font-['Lexend'] font-black text-brand-red text-sm italic">CRÍTICO</span>
</div>
<div className="flex justify-between items-center p-3 bg-zinc-950/60">
<span className="font-['Inter'] font-bold text-xs uppercase tracking-wider">Defesa de Berimbolo</span>
<span className="font-['Lexend'] font-black text-zinc-500 text-sm italic">ATENÇÃO</span>
</div>
<div className="flex justify-between items-center p-3 bg-zinc-950/60">
<span className="font-['Inter'] font-bold text-xs uppercase tracking-wider">Gestão de Gás (Round 3)</span>
<span className="font-['Lexend'] font-black text-zinc-500 text-sm italic">ATENÇÃO</span>
</div>
</div>
<button className="w-full mt-6 bg-zinc-800/80 py-4 font-['Lexend'] font-black text-xs uppercase tracking-[0.3em] text-zinc-100 hover:bg-neutral-800 transition-all active:scale-95">
                ANALISAR DETALHES TÉCNICOS
            </button>
</section>
{/*  CTA Performance Streak  */}
<section className="bg-gradient-to-br from-brand-red to-brand-red p-8 flex flex-col items-center justify-center text-center space-y-4">
<h4 className="font-['Lexend'] font-black italic text-4xl leading-none text-white uppercase">PRONTO PARA<br/>COMBATE?</h4>
<p className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-white/80 uppercase">INSREVA-SE NO PRÓXIMO OPEN</p>
<div className="w-full h-1 bg-white/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-800-fixed-dim to-white opacity-40 animate-pulse"></div>
</div>
</section>
</main>
    </>
  );
}



