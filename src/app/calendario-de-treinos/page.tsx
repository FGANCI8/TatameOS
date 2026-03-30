export default function CalendRioDeTreinos() {
  return (
    <>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Calendar Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
<div>
<span className="text-brand-red font-headline font-bold uppercase tracking-[0.2em] text-xs">Agenda de Combate</span>
<h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none mt-2">OUTUBRO</h2>
</div>
<div className="flex gap-2">
<button className="bg-zinc-800/80 p-3 hover:bg-zinc-800/80 transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="bg-zinc-800/80 p-3 hover:bg-zinc-800/80 transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
{/*  Calendar Grid  */}
<div className="grid grid-cols-7 gap-1 border-t border-l border-white/5 bg-white/5">
{/*  Days of week  */}
<div className="bg-zinc-950/60 p-4 text-center font-headline font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-r border-b border-white/5">DOM</div>
<div className="bg-zinc-950/60 p-4 text-center font-headline font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-r border-b border-white/5">SEG</div>
<div className="bg-zinc-950/60 p-4 text-center font-headline font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-r border-b border-white/5">TER</div>
<div className="bg-zinc-950/60 p-4 text-center font-headline font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-r border-b border-white/5">QUA</div>
<div className="bg-zinc-950/60 p-4 text-center font-headline font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-r border-b border-white/5">QUI</div>
<div className="bg-zinc-950/60 p-4 text-center font-headline font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-r border-b border-white/5">SEX</div>
<div className="bg-zinc-950/60 p-4 text-center font-headline font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-r border-b border-white/5">SÁB</div>
{/*  Days (Sample starting from Monday)  */}
<div className="bg-zinc-950 h-24 md:h-32 p-3 opacity-20 border-r border-b border-white/5">29</div>
<div className="bg-zinc-950 h-24 md:h-32 p-3 border-r border-b border-white/5 flex flex-col justify-between">
<span className="font-headline font-bold">01</span>
<div className="w-full h-1 bg-brand-red/10"></div>
</div>
<div className="bg-zinc-950 h-24 md:h-32 p-3 border-r border-b border-white/5 flex flex-col justify-between">
<span className="font-headline font-bold text-brand-red">02</span>
<div className="flex flex-col gap-1">
<div className="w-full h-1 bg-brand-red/10"></div>
<div className="w-full h-1 bg-brand-red/10"></div>
</div>
</div>
<div className="bg-zinc-950 h-24 md:h-32 p-3 border-r border-b border-white/5">
<span className="font-headline font-bold">03</span>
</div>
<div className="bg-zinc-950/60 h-24 md:h-32 p-3 border-r border-b border-white/5 flex flex-col justify-between ring-1 ring-inset ring-brand-red/20">
<span className="font-headline font-bold text-brand-red">04</span>
<span className="text-[8px] font-bold text-brand-red uppercase tracking-tighter">Hoje</span>
</div>
<div className="bg-zinc-950 h-24 md:h-32 p-3 border-r border-b border-white/5">
<span className="font-headline font-bold">05</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
</div>
</div>
<div className="bg-zinc-950 h-24 md:h-32 p-3 border-r border-b border-white/5">
<span className="font-headline font-bold">06</span>
</div>
</div>
</section>
{/*  Training List Asymmetric Layout  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
{/*  Weekly Summary (Bento Style)  */}
<div className="lg:col-span-4 space-y-6">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-l-4 border-brand-red/20">
<h3 className="font-headline font-black text-2xl uppercase italic leading-tight">Status da Trilha</h3>
<div className="mt-6 space-y-4">
<div className="flex justify-between items-end">
<span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Progresso Semanal</span>
<span className="font-headline font-black text-brand-red">75%</span>
</div>
<div className="w-full h-4 bg-zinc-800/80">
<div className="h-full w-3/4 bg-gradient-to-r from-brand-red to-brand-red"></div>
</div>
<p className="text-[10px] text-zinc-500 uppercase leading-relaxed">Você completou 3 de 4 treinos planejados para esta semana. Mantenha a pressão.</p>
</div>
</div>
<div className="bg-brand-red/10 p-6 text-white">
<span className="material-symbols-outlined text-4xl mb-4" data-icon="fitness_center" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<h4 className="font-headline font-bold uppercase tracking-tighter text-xl">Próximo Desafio</h4>
<p className="mt-2 text-sm font-medium opacity-90">Open Mat de Graduados às 18:00. Esteja pronto para 10 rounds de 6 minutos.</p>
</div>
</div>
{/*  Training Details  */}
<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2">
<span className="w-2 h-2 bg-brand-red/10"></span>
                        Sessões de Hoje
                    </h3>
<span className="text-[10px] font-bold uppercase text-zinc-500">4 de Outubro, 2023</span>
</div>
<div className="space-y-4">
{/*  Training Item 1  */}
<div className="group flex bg-zinc-950/60 hover:bg-zinc-900 transition-all duration-300">
<div className="w-2 bg-brand-red/10"></div>
<div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="bg-zinc-800/80 px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">09:00 AM</span>
<span className="text-xs font-bold text-brand-red uppercase tracking-widest">Iniciante</span>
</div>
<h4 className="text-2xl font-black font-headline uppercase">Aula de Fundamentos</h4>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Foco: Postura e Saída de Quadril na Guarda Fechada</p>
</div>
<button className="bg-brand-red/10 hover:bg-brand-red/20 text-white px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest transition-all active:scale-95">
                                Confirmado
                            </button>
</div>
</div>
{/*  Training Item 2  */}
<div className="group flex bg-zinc-950/60 hover:bg-zinc-900 transition-all duration-300">
<div className="w-2 bg-white/10"></div>
<div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="bg-zinc-800/80 px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">17:30 PM</span>
<span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Avançado</span>
</div>
<h4 className="text-2xl font-black font-headline uppercase">Revisão Técnica: Triângulo</h4>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Ajustes finos e transições para chave de braço</p>
</div>
<button className="border border-white/20 hover:border-brand-red/20 hover:text-brand-red px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest transition-all active:scale-95">
                                Agendar
                            </button>
</div>
</div>
{/*  Training Item 3  */}
<div className="group flex bg-zinc-950/60 hover:bg-zinc-900 transition-all duration-300">
<div className="w-2 bg-white/10"></div>
<div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="bg-zinc-800/80 px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">19:00 PM</span>
<span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Todos os Níveis</span>
</div>
<h4 className="text-2xl font-black font-headline uppercase">Open Mat</h4>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Luta livre e intercâmbio técnico</p>
</div>
<button className="border border-white/20 hover:border-brand-red/20 hover:text-brand-red px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest transition-all active:scale-95">
                                Agendar
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}


