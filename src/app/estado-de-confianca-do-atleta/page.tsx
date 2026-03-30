export default function EstadoDeConfianADoAtleta() {
  return (
    <>
<main className="pt-20 pb-28 px-4 max-w-md mx-auto min-h-screen">
{/*  Hero Header  */}
<section className="mt-4 mb-8">
<p className="font-label text-zinc-300 uppercase tracking-[0.2em] text-[10px] mb-1">Status Psicológico</p>
<h2 className="font-headline font-black text-4xl leading-none uppercase tracking-tighter">ESTADO DE <span className="text-brand-red">CONFIANÇA</span></h2>
</section>
{/*  Main Confidence Meter (Bento Style)  */}
<div className="grid grid-cols-6 gap-2 mb-8">
<div className="col-span-6 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 relative overflow-hidden">
<div className="flex justify-between items-end mb-4 relative z-10">
<div>
<span className="font-headline font-black text-6xl text-zinc-100">92</span>
<span className="font-headline font-bold text-xl text-brand-red">%</span>
<p className="font-label text-xs uppercase tracking-widest text-zinc-500">Índice de Prontidão</p>
</div>
<div className="text-right">
<p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-1">Status</p>
<span className="bg-brand-red/10 text-white px-2 py-1 text-[10px] font-black uppercase">Elite</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-2 bg-zinc-800/80 w-full mb-2">
<div className="h-full bg-gradient-to-r from-zinc-800 to-zinc-100 w-[92%]"></div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-9xl">psychology</span>
</div>
</div>
{/*  Kinetic Meters Grid  */}
<div className="col-span-3 bg-zinc-950/60 p-4">
<span className="material-symbols-outlined text-zinc-300 mb-2">electric_bolt</span>
<h3 className="font-label font-bold text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Tensão Muscular</h3>
<div className="flex items-end gap-1 h-12">
<div className="w-full bg-brand-red/10 h-[40%]"></div>
<div className="w-full bg-brand-red/10 h-[35%]"></div>
<div className="w-full bg-brand-red/10 h-[45%]"></div>
<div className="w-full bg-zinc-800/80 h-[10%]"></div>
<div className="w-full bg-zinc-800/80 h-[10%]"></div>
</div>
<p className="font-headline font-black text-xl mt-2">BAIXA</p>
</div>
<div className="col-span-3 bg-zinc-950/60 p-4">
<span className="material-symbols-outlined text-[#FF1A1A] mb-2">speed</span>
<h3 className="font-label font-bold text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Nível de Foco</h3>
<div className="relative h-12 flex items-center justify-center">
<div className="absolute inset-0 border-4 border-zinc-800/80 border-t-brand-red/20 rounded-full rotate-45"></div>
<span className="font-headline font-black text-xl text-zinc-100">MAX</span>
</div>
<p className="font-headline font-black text-xl mt-2">ESTÁVEL</p>
</div>
<div className="col-span-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-4 border-brand-red/20">
<h3 className="font-headline font-black text-lg uppercase tracking-tight mb-2">Insight do Professor</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                    "Seu ritmo cardíaco basal indica calma absoluta. A tensão nos trapézios está mínima. Você está no 'Estado de Fluxo'. O tatame é seu laboratório hoje."
                </p>
</div>
</div>
{/*  Metric Details List  */}
<section className="space-y-3">
<h4 className="font-label font-bold text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Métricas de Combate</h4>
{/*  Recessed Row 1  */}
<div className="flex items-center justify-between p-4 bg-zinc-800/80">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-background">
<span className="material-symbols-outlined text-zinc-300">flare</span>
</div>
<div>
<p className="font-headline font-bold text-sm uppercase">Energia Vital</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Recuperação completa</p>
</div>
</div>
<span className="font-headline font-black text-xl text-zinc-300">98%</span>
</div>
{/*  Recessed Row 2  */}
<div className="flex items-center justify-between p-4 bg-zinc-800/80">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-background">
<span className="material-symbols-outlined text-brand-red">warning</span>
</div>
<div>
<p className="font-headline font-bold text-sm uppercase">Ansiedade Pré-Luta</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Zonamento controlado</p>
</div>
</div>
<span className="font-headline font-black text-xl text-brand-red">12%</span>
</div>
{/*  Recessed Row 3  */}
<div className="flex items-center justify-between p-4 bg-zinc-800/80">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-background">
<span className="material-symbols-outlined text-zinc-100">ads_click</span>
</div>
<div>
<p className="font-headline font-bold text-sm uppercase">Precisão Técnica</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Baseado nos últimos 30 treinos</p>
</div>
</div>
<span className="font-headline font-black text-xl text-zinc-100">85%</span>
</div>
</section>
{/*  CTA Action  */}
<button className="w-full mt-10 bg-brand-red/10 text-white py-5 font-headline font-black text-xl uppercase tracking-widest transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,26,26,0.2)]">
            INICIAR PROTOCOLO DE LUTA
        </button>
</main>
    </>
  );
}



