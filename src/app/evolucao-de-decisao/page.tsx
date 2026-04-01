export default function EvoluODeDecisO() {
  return (
    <>
<main className="pt-24 pb-32 px-4 max-w-5xl mx-auto space-y-10">
{/*  Hero Section: Title & Achievement Seal  */}
<section className="flex flex-col md:flex-row justify-between items-end gap-6">
<div className="space-y-1">
<span className="text-zinc-300 font-headline font-bold text-xs tracking-[0.3em] uppercase">Módulo de Desempenho</span>
<h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none">MATURIDADE TÁTICA</h2>
</div>
<div className="bg-brand-red/10 px-6 py-4 flex items-center gap-4 border-l-8 border-white">
<span className="material-symbols-outlined text-4xl text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>verified</span>
<div>
<p className="text-[10px] font-headline font-bold text-white/80 uppercase tracking-widest">Status Atual</p>
<p className="text-xl font-headline font-black text-white uppercase italic">Evolução Detectada</p>
</div>
</div>
</section>
{/*  Main Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Evolution Chart (Decision Errors)  */}
<div className="md:col-span-8 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-8">
<div className="flex justify-between items-center">
<div className="space-y-1">
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">Erros de Decisão</h3>
<p className="text-zinc-500 text-xs uppercase tracking-widest">Últimos 90 dias de Sparring</p>
</div>
<div className="text-right">
<p className="text-4xl font-headline font-black text-brand-red leading-none">-42%</p>
<p className="text-[10px] font-bold text-brand-red tracking-widest uppercase">Redução Nominal</p>
</div>
</div>
{/*  Custom Bar Chart Visual  */}
<div className="h-64 flex items-end justify-between gap-4 pt-4 border-b-2 border-zinc-800/80">
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full bg-zinc-800/80 h-[90%] relative">
<div className="absolute inset-0 bg-red-900/30 opacity-50"></div>
</div>
<span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Mês 01</span>
</div>
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full bg-zinc-800/80 h-[65%] relative">
<div className="absolute inset-0 bg-red-700/40 opacity-70"></div>
</div>
<span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Mês 02</span>
</div>
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full kinetic-gradient h-[38%] relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2">
<span className="bg-white text-black px-2 py-0.5 text-[10px] font-black italic">OTIMIZADO</span>
</div>
</div>
<span className="text-[10px] font-black text-brand-red uppercase tracking-widest">Atual</span>
</div>
</div>
<div className="flex gap-8">
<div className="flex items-center gap-2">
<div className="w-3 h-3 kinetic-gradient"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Decisão Correta</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-zinc-800/80"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Erro Analítico</span>
</div>
</div>
</div>
{/*  Side Metrics  */}
<div className="md:col-span-4 space-y-4">
{/*  Consistency Card  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between h-1/2">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-zinc-300 text-3xl">target</span>
<div className="text-right">
<span className="text-zinc-300 font-headline font-black text-3xl">8.4</span>
<p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Score / 10</p>
</div>
</div>
<div className="space-y-2 pt-8">
<p className="font-headline font-bold uppercase text-sm tracking-widest">Consistência Tática</p>
<div className="h-2 bg-zinc-950">
<div className="h-full data-shimmer w-[84%]"></div>
</div>
<p className="text-[10px] text-zinc-500 leading-relaxed">Você está mantendo o plano de luta sob pressão em 84% dos rolas.</p>
</div>
</div>
{/*  Patience Card  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between h-1/2">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-brand-red text-3xl">hourglass_empty</span>
<div className="text-right">
<span className="text-brand-red font-headline font-black text-3xl">92%</span>
<p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Retenção</p>
</div>
</div>
<div className="space-y-2 pt-8">
<p className="font-headline font-bold uppercase text-sm tracking-widest">Paciência no Tatame</p>
<div className="h-2 bg-zinc-950">
<div className="h-full kinetic-gradient w-[92%]"></div>
</div>
<p className="text-[10px] text-zinc-500 leading-relaxed">Redução significativa em tentativas de finalização precipitadas.</p>
</div>
</div>
</div>
</div>
{/*  Historical Comparison (Bento Grid Style)  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-1 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-4 border-zinc-800">
<h4 className="font-headline font-black text-3xl uppercase italic leading-none mb-2">FAIXA AZUL <br/><span className="text-zinc-300 text-xl">Early Stage</span></h4>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">Fevereiro 2024</p>
<div className="space-y-3">
<div className="flex justify-between items-end border-b border-zinc-800/80 pb-2">
<span className="text-[10px] font-bold uppercase text-neutral-400">Eficiência de Pegada</span>
<span className="font-headline text-lg font-bold text-zinc-400">45%</span>
</div>
<div className="flex justify-between items-end border-b border-zinc-800/80 pb-2">
<span className="text-[10px] font-bold uppercase text-neutral-400">Tempo de Reação</span>
<span className="font-headline text-lg font-bold text-zinc-400">1.2s</span>
</div>
</div>
</div>
<div className="md:col-span-2 bg-zinc-800/80/20 p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
{/*  Background Image Decor  */}
<div className="absolute right-0 top-0 w-1/2 h-full opacity-10 grayscale group-hover:scale-110 transition-transform duration-1000">
<img alt="Grappling detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigiF-bzZOcNlCjuQ7kesoKs8vbCDM5nHuzWhGYhICqxu4OAPWANihdwFinmMSTn13ulRPXRD29oXc_R3MjY6qvNRaUL9c-Iai9GglsmdriWYRHD2lfu9DNxTR60sDD1WdJLdA_B08S2eYYbSK84qrAULNaKq1ef_GthlbPXyHrz4OdI3TC2W9C24izohMnaxoBXA3KazJle7dmXcBRFl4izraVI-C3zkIRT-e6akG3yZ78Fb83HzuGy1vvdlGPNw_veglTLlxYfg0"/>
</div>
<div className="relative z-10 flex flex-col justify-center">
<div className="bg-zinc-800 text-zinc-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] mb-4 w-fit">Análise de IA</div>
<h4 className="font-headline font-black text-4xl uppercase tracking-tighter leading-none mb-4">MUDANÇA DE PARADIGMA</h4>
<p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                        Seu jogo evoluiu de "Reativo" para "Preditivo". A economia de energia aumentou em 28%, permitindo ataques mais explosivos nos minutos finais do round.
                    </p>
</div>
<div className="relative z-10 ml-auto rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col items-center justify-center min-w-[140px]">
<span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Impacto Global</span>
<span className="text-5xl font-headline font-black text-white italic">+14</span>
<span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mt-1">Nível Tático</span>
</div>
</div>
</section>
{/*  Rewards / Gratification  */}
<section className="bg-gradient-to-r from-neutral-900 via-zinc-800 to-neutral-900 p-1 text-center">
<div className="bg-zinc-950 p-12 space-y-6">
<div className="flex justify-center gap-2">
<span className="material-symbols-outlined text-brand-red text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<span className="material-symbols-outlined text-brand-red text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<span className="material-symbols-outlined text-brand-red text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
<h3 className="font-headline font-black text-3xl md:text-5xl uppercase tracking-tighter">VOCÊ ESTÁ MAIS PERIGOSO.</h3>
<p className="text-neutral-400 uppercase tracking-[0.4em] text-xs font-bold">Continue afiando sua mente tanto quanto sua técnica.</p>
<button className="bg-brand-red/10 hover:bg-brand-red/20 text-white font-headline font-bold uppercase tracking-widest px-10 py-4 active:translate-y-1 transition-all">
                    Ver Plano de Treino Sugerido
                </button>
</div>
</section>
</main>
    </>
  );
}



