export default function ChecklistMentalPrLuta() {
  return (
    <>
<main className="pt-24 px-6 space-y-8">
{/*  Hero Header  */}
<section className="space-y-2">
<span className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-[#FF1A1A] uppercase">PROTOCOLO DE ELITE</span>
<h2 className="font-['Lexend'] font-black text-5xl leading-none uppercase italic tracking-tighter">CHECKLIST MENTAL</h2>
<div className="h-1 w-24 bg-[#FF1A1A]"></div>
</section>
{/*  Progress Overview  */}
<section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-4">
<div className="flex justify-between items-end">
<div className="space-y-1">
<p className="font-['Inter'] text-[10px] font-bold tracking-widest text-zinc-400">STATUS ATUAL</p>
<p className="font-['Lexend'] text-3xl font-bold">60% PRONTO</p>
</div>
<div className="text-[#FF1A1A] font-['Lexend'] font-black italic text-xl">WARRIOR MODE</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-4 bg-zinc-800/80 overflow-hidden">
<div className="h-full w-3/5 bg-gradient-to-r from-[#FF1A1A] to-[#C00100] relative">
<div className="absolute inset-0 bg-white/10" style={{ /* clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%); */ }}></div>
</div>
</div>
</section>
{/*  Checklist Bento Grid  */}
<div className="grid grid-cols-1 gap-4">
{/*  Item 1: Respiracão  */}
<div className="bg-zinc-900 p-5 flex items-center justify-between border-l-4 border-[#FF1A1A]">
<div className="flex items-center gap-4">
<div className="text-[#FF1A1A]">
<span className="material-symbols-outlined text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>air</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight">RESPIRAÇÃO DIAFRAGMÁTICA</h3>
<p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">ACALMAR O SISTEMA NERVOSO</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-[#FF1A1A] flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-[#FF1A1A]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check</span>
</div>
</div>
{/*  Item 2: Visualização  */}
<div className="bg-zinc-900 p-5 flex items-center justify-between border-l-4 border-[#FF1A1A]">
<div className="flex items-center gap-4">
<div className="text-[#FF1A1A]">
<span className="material-symbols-outlined text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>visibility</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight">VISUALIZAÇÃO DE VITÓRIA</h3>
<p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">EXECUTAR A PASSAGEM PERFEITA</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-[#FF1A1A] flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-[#FF1A1A]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check</span>
</div>
</div>
{/*  Item 3: Revisão Estratégica  */}
<div className="bg-zinc-900 p-5 flex items-center justify-between border-l-4 border-zinc-800/80">
<div className="flex items-center gap-4">
<div className="text-zinc-400">
<span className="material-symbols-outlined text-3xl">ads_click</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight text-zinc-100">REVISÃO ESTRATÉGICA</h3>
<p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">PLANO A, B E DEFESA</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-zinc-800/80 flex items-center justify-center">
</div>
</div>
{/*  Item 4: Aquecimento Cognitivo  */}
<div className="bg-zinc-900 p-5 flex items-center justify-between border-l-4 border-zinc-800/80">
<div className="flex items-center gap-4">
<div className="text-zinc-400">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight text-zinc-100">FOCO SENSORIAL</h3>
<p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">CONECTAR COM O AMBIENTE</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-zinc-800/80 flex items-center justify-center">
</div>
</div>
</div>
{/*  Strategy Insight Card  */}
<section className="bg-brand-red/10 p-6 relative overflow-hidden">
<div className="relative z-10 space-y-3">
<h4 className="font-['Lexend'] font-black italic text-2xl uppercase text-white leading-none">MANTRA DO COMBATE</h4>
<p className="font-['Inter'] font-bold text-sm text-white/90 uppercase tracking-tight">"A DISCIPLINA SUPERA O TALENTO QUANDO O TALENTO NÃO TEM DISCIPLINA."</p>
<div className="flex items-center gap-2 pt-2">
<span className="w-2 h-2 bg-white animate-pulse"></span>
<span className="text-[10px] font-black tracking-widest text-white">FOCO TOTAL ATIVADO</span>
</div>
</div>
{/*  Aesthetic Background Texture  */}
<div className="absolute -right-4 -bottom-4 opacity-20">
<span className="material-symbols-outlined text-[120px] text-white">fitness_center</span>
</div>
</section>
{/*  CTA Action  */}
<button className="w-full bg-zinc-800/80 border border-zinc-800 py-5 font-['Lexend'] font-black text-xl uppercase italic tracking-tighter text-[#FF1A1A] hover:bg-[#FF1A1A] hover:text-white transition-colors duration-300">
            INICIAR COMBATE AGORA
        </button>
</main>
    </>
  );
}


