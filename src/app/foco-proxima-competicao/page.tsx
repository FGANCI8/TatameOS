export default function FocoPrXimaCompetiO() {
  return (
    <>
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-12">
{/*  Hero: Command Center Header  */}
<section className="grid md:grid-cols-2 gap-8 items-end">
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-brand-red/10 animate-pulse"></span>
<span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Módulo de Foco Ativo</span>
</div>
<h2 className="font-headline text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">Próxima<br/><span className="text-brand-red">Competição</span></h2>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-4 border-l-4 border-brand-red/20">
<div className="flex justify-between items-baseline">
<span className="font-label text-xs font-bold text-zinc-400 uppercase">Contagem Regressiva</span>
<span className="font-headline text-4xl font-black text-zinc-100 tracking-widest italic">28:14:02</span>
</div>
<div className="w-full h-2 bg-zinc-800/80 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-brand-red to-brand-red"></div>
</div>
<p className="text-sm font-bold uppercase tracking-wider text-brand-red">Fase Atual: Refinamento Técnico</p>
</div>
</section>
{/*  Bento Grid: Essentials & Priorities  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Priority 1: Drill Sequence  */}
<div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 font-headline text-8xl opacity-10 font-black italic">01</div>
<div className="relative z-10 space-y-8">
<h3 className="font-headline text-3xl font-black uppercase italic tracking-tighter">Sequência de Treino Recomendada</h3>
<div className="space-y-4">
<div className="flex items-center gap-6 p-4 bg-zinc-950 hover:bg-zinc-950-variant transition-colors group/item">
<span className="font-headline text-2xl font-black text-brand-red italic">01</span>
<div className="flex-1">
<h4 className="font-bold uppercase tracking-tight">Entradas de Queda (Uchi-komi)</h4>
<p className="text-xs text-zinc-400 uppercase font-medium">15 Minutos • Alta Intensidade</p>
</div>
<span className="material-symbols-outlined text-brand-red group-hover/item:translate-x-1 transition-transform">play_arrow</span>
</div>
<div className="flex items-center gap-6 p-4 bg-zinc-950 hover:bg-zinc-950-variant transition-colors group/item">
<span className="font-headline text-2xl font-black text-brand-red italic">02</span>
<div className="flex-1">
<h4 className="font-bold uppercase tracking-tight">Transição: Passagem de Guarda X</h4>
<p className="text-xs text-zinc-400 uppercase font-medium">20 Minutos • Precisão Técnica</p>
</div>
<span className="material-symbols-outlined text-brand-red group-hover/item:translate-x-1 transition-transform">play_arrow</span>
</div>
<div className="flex items-center gap-6 p-4 bg-zinc-950 hover:bg-zinc-950-variant transition-colors group/item">
<span className="font-headline text-2xl font-black text-brand-red italic">03</span>
<div className="flex-1">
<h4 className="font-bold uppercase tracking-tight">Escapes de Montada Sob Pressão</h4>
<p className="text-xs text-zinc-400 uppercase font-medium">10 Minutos • Resiliência</p>
</div>
<span className="material-symbols-outlined text-brand-red group-hover/item:translate-x-1 transition-transform">play_arrow</span>
</div>
</div>
</div>
</div>
{/*  Priority 2: Visual Priority Card  */}
<div className="bg-brand-red/10 p-8 flex flex-col justify-between group">
<div className="space-y-4">
<span className="material-symbols-outlined text-4xl text-white">warning</span>
<h3 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter text-white">Prioridade Semanal</h3>
</div>
<div className="space-y-6">
<p className="text-white font-black text-xl italic uppercase leading-tight">Manutenção de Peso e Explosão Muscular</p>
<button className="w-full bg-white text-brand-red font-headline py-4 font-black uppercase tracking-widest text-sm hover:invert transition-all">Ver Detalhes</button>
</div>
</div>
{/*  Calendar: 4-Week Roadmap  */}
<div className="md:col-span-3 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-t-8 border-zinc-800/80">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<h3 className="font-headline text-3xl font-black uppercase italic tracking-tighter">Cronograma de 4 Semanas</h3>
<div className="flex gap-2">
<div className="px-3 py-1 bg-zinc-800/80 text-[10px] font-bold uppercase tracking-widest text-zinc-300">Fase: Preparação</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 bg-zinc-900 border-b-4 border-brand-red/20 space-y-4">
<span className="font-headline text-4xl font-black text-brand-red opacity-50 italic">W1</span>
<p className="font-bold text-xs uppercase tracking-widest">Volume e Técnica Base</p>
</div>
<div className="p-6 bg-zinc-800/80 border-b-4 border-brand-red/20 space-y-4">
<span className="font-headline text-4xl font-black text-brand-red italic">W2</span>
<p className="font-bold text-xs uppercase tracking-widest">Estratégia e Combinações</p>
<span className="inline-block px-2 py-1 bg-brand-red/10 text-[8px] font-black uppercase tracking-tighter">Atual</span>
</div>
<div className="p-6 bg-zinc-900 opacity-50 space-y-4">
<span className="font-headline text-4xl font-black text-zinc-400 italic">W3</span>
<p className="font-bold text-xs uppercase tracking-widest">Ajuste de Peso &amp; Polimento</p>
</div>
<div className="p-6 bg-zinc-900 opacity-50 space-y-4">
<span className="font-headline text-4xl font-black text-zinc-400 italic">W4</span>
<p className="font-bold text-xs uppercase tracking-widest">Descanso &amp; Mentalidade</p>
</div>
</div>
</div>
</section>
{/*  Performance Metrics Section  */}
<section className="grid md:grid-cols-2 gap-12 items-center py-12">
<div className="space-y-8">
<h3 className="font-headline text-4xl font-black uppercase tracking-tighter">Status do <span className="text-zinc-300">Atleta</span></h3>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between font-label text-xs font-bold uppercase tracking-widest">
<span>Condicionamento Cardíaco</span>
<span>92%</span>
</div>
<div className="h-1 w-full bg-zinc-800/80">
<div className="h-full w-[92%] bg-zinc-800"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label text-xs font-bold uppercase tracking-widest">
<span>Taxa de Finalização (Drills)</span>
<span>78%</span>
</div>
<div className="h-1 w-full bg-zinc-800/80">
<div className="h-full w-[78%] bg-zinc-800"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label text-xs font-bold uppercase tracking-widest">
<span>Foco Mental</span>
<span>100%</span>
</div>
<div className="h-1 w-full bg-zinc-800/80">
<div className="h-full w-full bg-zinc-800 shadow-[0_0_15px_rgba(189,194,255,0.4)]"></div>
</div>
</div>
</div>
</div>
<div className="relative aspect-video bg-zinc-950/60 overflow-hidden group">
<img alt="Training Session Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Dramatic high-contrast photo of a gritty BJJ gym interior with light streaming through industrial windows onto a blue mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk8V6Dw-omTHOmVj0C5iuy0QhNfHfEQSeVyrE4OHlgRLQJCcoDZcjigXqyIs8AkPjg002p9udKSZQT-Flzi_wpsrOoKB2-fLDxaW7FuDkS7MNMkRmWKRYOCB5CchYBbDvUi-GMtJgULNKooLX6C4m2vPdfdde58BgMFWQVpAsHE71K6ADbS6APNdV0holNqfG8rpRutclWircd_UsmJmV0eWqfs1XRPdcuNCfrsf3CAB-Njt0_ufNoxK2QLAkbRw9BWr7eutQRuJYi"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent flex items-end p-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
<span className="font-headline font-black uppercase italic text-xl tracking-tighter">Assistir Análise de Luta</span>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}



