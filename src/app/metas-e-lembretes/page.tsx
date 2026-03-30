export default function MetasELembretes() {
  return (
    <>
<main className="px-6 pt-8 space-y-12">
{/*  Hero Section: Progress Visualization  */}
<section className="space-y-6">
<div className="flex flex-col gap-1">
<span className="font-label text-xs uppercase tracking-[0.2em] text-zinc-500">Status da Temporada</span>
<h2 className="font-headline text-4xl font-black italic tracking-tighter uppercase text-zinc-100">DISCIPLINA <span className="text-brand-red">ATIVA</span></h2>
</div>
{/*  Performance Streak Component  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-l-4 border-brand-red/20">
<div className="flex justify-between items-end mb-4">
<div>
<div className="font-headline text-5xl font-black text-zinc-100 tracking-tighter">75%</div>
<div className="font-label text-[10px] uppercase font-bold tracking-widest text-brand-red">Meta Semanal: 3 de 4 Treinos</div>
</div>
<div className="text-right">
<div className="font-label text-xs text-zinc-500 mb-1">RUMO AO PRÓXIMO GRAU</div>
<div className="flex gap-1">
<span className="w-2 h-6 bg-brand-red/10"></span>
<span className="w-2 h-6 bg-brand-red/10"></span>
<span className="w-2 h-6 bg-brand-red/10"></span>
<span className="w-2 h-6 bg-zinc-800/80"></span>
</div>
</div>
</div>
{/*  Shimmer Progress Bar  */}
<div className="h-3 w-full bg-zinc-800/80 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[75%] bg-gradient-to-r from-brand-red to-brand-red"></div>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</section>
{/*  Bento Grid: Reminders & Goals  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Reminders Card  */}
<div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-brand-red" data-icon="lightbulb">lightbulb</span>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">Revisão de Técnica</h3>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-zinc-800/80 border-l-2 border-brand-red/20 transition-all hover:translate-x-1 cursor-pointer">
<span className="material-symbols-outlined text-zinc-500 pt-1" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<div>
<p className="font-bold text-zinc-100">Ajuste de Pegada na De La Riva</p>
<p className="text-xs text-zinc-500 mt-1 font-medium">Revisar vídeo da Aula 14 - Módulo Guarda Aberta</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-zinc-800/80 border-l-2 border-brand-red/20 transition-all hover:translate-x-1 cursor-pointer opacity-60">
<span className="material-symbols-outlined text-brand-red pt-1" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<div>
<p className="font-bold text-zinc-100 line-through">Passagem de Meia Guarda Profunda</p>
<p className="text-xs text-zinc-500 mt-1 font-medium">Focar na distribuição de peso no quadril</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-zinc-800/80 border-l-2 border-brand-red/20 transition-all hover:translate-x-1 cursor-pointer">
<span className="material-symbols-outlined text-zinc-500 pt-1" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<div>
<p className="font-bold text-zinc-100">Escapada de Triângulo</p>
<p className="text-xs text-zinc-500 mt-1 font-medium">Manter postura e braço seguro</p>
</div>
</div>
</div>
</div>
{/*  Focus Metric Card  */}
<div className="bg-brand-red/10 p-6 flex flex-col justify-between text-white relative overflow-hidden">
<span className="material-symbols-outlined absolute -right-4 -top-4 text-9xl opacity-10" data-icon="fitness_center">fitness_center</span>
<div className="relative z-10">
<span className="font-label text-[10px] uppercase font-black tracking-widest bg-black/20 px-2 py-1">Foco Semanal</span>
<h3 className="font-headline text-3xl font-black mt-4 leading-none">MOBILIDADE DE QUADRIL</h3>
</div>
<div className="mt-8 relative z-10">
<p className="text-sm font-bold opacity-90 italic">"A técnica vence a força, mas a disciplina vence o talento."</p>
<button className="mt-6 w-full bg-white text-brand-red font-black py-3 uppercase tracking-tighter active:scale-95 transition-transform">
                        Iniciar Treino
                    </button>
</div>
</div>
</section>
{/*  Long-term Objectives  */}
<section className="space-y-6">
<h3 className="font-headline font-bold text-xl uppercase tracking-tight flex items-center gap-2">
<span className="w-6 h-1 bg-brand-red/10"></span>
                Objetivos de Longo Prazo
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Goal Item  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-b-2 border-zinc-800/80 flex justify-between items-center group hover:bg-zinc-900/80 transition-colors">
<div className="space-y-1">
<p className="font-headline text-lg font-black uppercase text-zinc-100">GRADUAÇÃO FAIXA AZUL</p>
<p className="font-label text-xs text-zinc-500">Estimativa: Dezembro 2024</p>
</div>
<div className="h-12 w-1 bg-zinc-800/80 relative">
<div className="absolute bottom-0 w-full h-[40%] bg-brand-red/10"></div>
</div>
</div>
{/*  Goal Item  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-b-2 border-zinc-800/80 flex justify-between items-center group hover:bg-zinc-900/80 transition-colors">
<div className="space-y-1">
<p className="font-headline text-lg font-black uppercase text-zinc-100">PRIMEIRA COMPETIÇÃO</p>
<p className="font-label text-xs text-zinc-500">Status: Inscrição Pendente</p>
</div>
<div className="h-12 w-1 bg-zinc-800/80 relative">
<div className="absolute bottom-0 w-full h-[15%] bg-brand-red/10"></div>
</div>
</div>
</div>
</section>
{/*  Quick Habits  */}
<section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border border-zinc-800/10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-md">
<h4 className="font-headline font-black text-2xl uppercase italic text-zinc-100">Check-list Diário</h4>
<p className="text-zinc-500 text-sm mt-2 font-medium">Pequenas vitórias diárias constroem o campeão de amanhã.</p>
</div>
<div className="flex flex-wrap gap-3">
<button className="px-6 py-2 bg-zinc-900 border border-zinc-800/30 text-xs font-black uppercase tracking-widest text-zinc-100 hover:bg-brand-red/10 hover:text-white transition-all">Hidratação (3L)</button>
<button className="px-6 py-2 bg-zinc-900 border border-zinc-800/30 text-xs font-black uppercase tracking-widest text-zinc-100 hover:bg-brand-red/10 hover:text-white transition-all">Mobilidade (15m)</button>
<button className="px-6 py-2 bg-zinc-900 border border-zinc-800/30 text-xs font-black uppercase tracking-widest text-zinc-100 hover:bg-brand-red/10 hover:text-white transition-all">Visualização</button>
</div>
</div>
</section>
</main>
    </>
  );
}



