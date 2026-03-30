export default function PreparaOParaCampeonato() {
  return (
    <>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Section: Status Overview  */}
<section className="mb-12">
<h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter text-zinc-100 mb-2">PREPARAÇÃO</h2>
<p className="font-label uppercase tracking-[0.2em] text-zinc-500 text-sm mb-8">CAMPEONATO NACIONAL • SEMANA FINAL</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48 border-l-4 border-brand-red/20">
<span className="font-label uppercase text-xs tracking-widest text-zinc-500">Status Mental</span>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-6xl text-zinc-100">100</span>
<span className="font-headline font-bold text-2xl text-brand-red">%</span>
</div>
<span className="font-label text-xs font-bold text-brand-red uppercase">FOCO TOTAL</span>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between h-48">
<span className="font-label uppercase text-xs tracking-widest text-zinc-500">Categoria</span>
<span className="font-headline font-black text-4xl text-zinc-100 leading-none uppercase">ADULTO<br/>PENA</span>
<span className="font-label text-xs text-zinc-500 uppercase">LIMITE: 76.0 KG</span>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48">
<span className="font-label uppercase text-xs tracking-widest text-zinc-500">Documentos</span>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-brand-red text-4xl" data-icon="verified">verified</span>
<span className="font-headline font-bold text-2xl text-zinc-100 uppercase">CHECK OK</span>
</div>
<span className="font-label text-xs text-zinc-500 uppercase">IDENTIDADE &amp; FILIAÇÃO</span>
</div>
</div>
</section>
{/*  Bento Grid: Preparation Metrics  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
{/*  Weight Tracking Card  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between aspect-square md:aspect-auto">
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-widest mb-6">PESO ATUAL</h3>
<div className="flex items-baseline gap-4">
<span className="font-headline font-black text-8xl text-zinc-100">75.4</span>
<span className="font-headline font-bold text-3xl text-brand-red">KG</span>
</div>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-xs text-zinc-500 uppercase tracking-widest">META: 76.0KG</span>
<span className="font-label text-xs text-brand-red font-bold">-0.6KG UNDER</span>
</div>
<div className="h-3 bg-zinc-800/80 w-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-brand-red to-brand-red w-[92%]"></div>
</div>
</div>
</div>
{/*  Training Progress Card  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between aspect-square md:aspect-auto relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[12rem]" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-widest mb-6">TREINOS DA SEMANA</h3>
<div className="flex gap-2 mb-8">
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center border-2 border-dashed border-zinc-800">
<span className="font-headline font-bold text-outline">5</span>
</div>
</div>
<p className="font-headline font-black text-5xl text-zinc-100">4 / 5</p>
</div>
<p className="font-body text-sm text-zinc-500 max-w-[240px]">Última sessão de drill técnico agendada para amanhã às 18:00.</p>
</div>
</section>
{/*  Final Plan Action  */}
<section className="bg-zinc-800/80 p-1 bg-gradient-to-br from-brand-red/20 to-transparent">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-6">
<div className="bg-brand-red/10 w-16 h-16 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-white" data-icon="picture_as_pdf">picture_as_pdf</span>
</div>
<div>
<h3 className="font-headline font-bold text-2xl uppercase tracking-tighter text-zinc-100">PLANO FINAL DE LUTA</h3>
<p className="font-body text-sm text-zinc-500">Estratégias específicas, plano de corte e horários.</p>
</div>
</div>
<button className="w-full md:w-auto bg-brand-red/10 hover:bg-brand-red/20 text-white px-10 py-4 font-headline font-black uppercase tracking-widest transition-all active:scale-95">
                    VISUALIZAR PDF
                </button>
</div>
</section>
</main>
    </>
  );
}


