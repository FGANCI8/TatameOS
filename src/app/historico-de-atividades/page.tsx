export default function HistRicoDeAtividades() {
  return (
    <>
<main className="pt-20 px-4 max-w-2xl mx-auto">
{/*  Performance Goals Summary  */}
<section className="mb-10">
<div className="grid grid-cols-2 gap-4">
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between h-40 border-l-4 border-brand-red/20">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Progresso Semanal</span>
<div className="mt-auto">
<div className="text-4xl font-black font-headline tracking-tighter">85<span className="text-lg text-brand-red">%</span></div>
<div className="w-full bg-zinc-800/80 h-1 mt-2">
<div className="bg-gradient-to-r from-brand-red to-brand-red h-full" style={{ /* width: 85% */ }}></div>
</div>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between h-40 border-l-4 border-zinc-800">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Técnicas Dominadas</span>
<div className="mt-auto">
<div className="text-4xl font-black font-headline tracking-tighter text-zinc-300">12<span className="text-lg text-zinc-300">/15</span></div>
<p className="text-[10px] text-zinc-400 mt-2 uppercase font-bold">Meta do Mês</p>
</div>
</div>
</div>
</section>
{/*  Timeline Section  */}
<section className="relative">
<h2 className="font-headline font-black text-xl uppercase tracking-widest mb-8 flex items-center gap-3">
<span className="w-2 h-6 bg-brand-red/10"></span>
                Histórico de Atividades
            </h2>
{/*  Timeline Vertical Line  */}
<div className="absolute left-[19px] top-16 bottom-0 w-[2px] bg-zinc-800/80"></div>
{/*  Activity Items  */}
<div className="space-y-12 relative">
{/*  Treino Concluído  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-weight="fill">fitness_center</span>
</div>
</div>
<div className="flex-1 bg-zinc-900/80 p-5 transition-all hover:bg-zinc-900 border-b border-brand-red/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Treino Concluído</h3>
<span className="text-[10px] font-bold text-zinc-500 bg-zinc-800/80 px-2 py-1 uppercase">Hoje, 08:30</span>
</div>
<p className="text-sm text-zinc-400 font-body mb-4">Sessão intensiva de Sparring e Passagem de Guarda. Volume total de 90 min.</p>
<div className="flex gap-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-brand-red text-sm">bolt</span>
<span className="text-[11px] font-black font-headline">742 KCAL</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-brand-red text-sm">favorite</span>
<span className="text-[11px] font-black font-headline">165 BPM AVG</span>
</div>
</div>
</div>
</div>
{/*  Desafio Batido  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-weight="fill">military_tech</span>
</div>
</div>
<div className="flex-1 bg-zinc-900/80 p-5 transition-all hover:bg-zinc-900 border-b border-brand-red/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Desafio Batido</h3>
<span className="text-[10px] font-bold text-zinc-500 bg-zinc-800/80 px-2 py-1 uppercase">Ontem</span>
</div>
<p className="text-sm text-zinc-400 font-body">"Constância de Ferro": Você completou 5 treinos consecutivos nesta semana.</p>
<div className="mt-4 flex items-center gap-2 text-brand-red">
<span className="text-[10px] font-black tracking-widest uppercase">Prêmio: +500 Pontos de Experiência</span>
</div>
</div>
</div>
{/*  Técnica Estudada  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-zinc-900 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-100" data-weight="fill">psychology</span>
</div>
</div>
<div className="flex-1 bg-zinc-900/80 p-5 transition-all hover:bg-zinc-900 border-b border-zinc-800/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Técnica Estudada</h3>
<span className="text-[10px] font-bold text-zinc-500 bg-zinc-800/80 px-2 py-1 uppercase">15 Out</span>
</div>
<div className="flex items-center gap-4 mb-3">
<div className="w-16 h-10 bg-zinc-950 border border-zinc-800/10 overflow-hidden">
<img alt="Technique Study" className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYiykZZuv41Xy0ZXBQzHNrgouH_cLcrYHkqzqr-uGCWOb0N43E2IjmIEI01WVJIJcpU3M7O62s5QB6819_ARA7wYcRfdmw89csOjkuSoCLFJziYlEwTh-GOaWuK4wZZwI0J288J6AUdau9jEoqDiNw_YvNwEvKld7iYj_nnVbTUTXph5vgbzRLdkhrX4bjHke4pQUD9-M9USskcLz-n0SU6p_ZDIrPDw5vdzOfD_rDjL6ccG323iq2kJKt2bhR5loXs1iRFnu1mjX"/>
</div>
<div>
<h4 className="text-xs font-bold text-zinc-100 uppercase tracking-wide">Triângulo Invertido</h4>
<p className="text-[11px] text-zinc-100 uppercase">Módulo: Guarda Aberta</p>
</div>
</div>
<p className="text-sm text-zinc-400 font-body">Revisão teórica de ajustes de quadril e distribuição de peso na finalização.</p>
</div>
</div>
{/*  Treino Concluído (Old)  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-500" data-weight="fill">history</span>
</div>
</div>
<div className="flex-1 bg-zinc-900/80 p-5 opacity-60 transition-all hover:opacity-100 hover:bg-zinc-900 border-b border-zinc-800/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Aula de Fundamentos</h3>
<span className="text-[10px] font-bold text-zinc-500 bg-zinc-800/80 px-2 py-1 uppercase">14 Out</span>
</div>
<p className="text-sm text-zinc-400 font-body">Foco em rolamentos e quedas básicas (Ukemi). Participação de 60 min.</p>
</div>
</div>
</div>
</section>
{/*  Load More Button  */}
<div className="mt-12 mb-8 flex justify-center">
<button className="bg-zinc-900 text-zinc-100 px-8 py-3 font-headline font-black uppercase text-xs tracking-[0.2em] border border-zinc-800/20 hover:bg-brand-red/10 transition-all active:scale-95">
                Carregar Histórico Antigo
            </button>
</div>
</main>
    </>
  );
}



