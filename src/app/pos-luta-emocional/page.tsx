export default function PSLutaEmocional() {
  return (
    <>
<main className="flex-grow pt-24 pb-32 px-6 max-w-lg mx-auto w-full">
{/*  Header Section  */}
<section className="mb-10">
<span className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-zinc-400 uppercase block mb-2">Pós-Treino / Combate</span>
<h2 className="font-['Lexend'] text-4xl font-black leading-none uppercase mb-4 tracking-tighter">ANÁLISE <br/><span className="text-brand-red">EMOCIONAL</span></h2>
<p className="text-zinc-500 text-sm leading-relaxed border-l-2 border-brand-red/20 pl-4">A luta termina, o aprendizado continua. Como você se sente agora?</p>
</section>
{/*  Emotion Grid (Asymmetric)  */}
<section className="mb-12">
<h3 className="font-['Inter'] font-bold text-xs tracking-widest text-zinc-100 uppercase mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-brand-red/10"></span> SELECIONE O ESTADO DOMINANTE
            </h3>
<div className="grid grid-cols-2 gap-3">
{/*  Frustração  */}
<button className="flex flex-col items-start p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors text-left group">
<span className="material-symbols-outlined text-brand-red mb-4 text-3xl">sentiment_dissatisfied</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Frustração</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 opacity-60">Foco no erro</span>
</button>
{/*  Confiança  */}
<button className="flex flex-col items-start p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors text-left group">
<span className="material-symbols-outlined text-brand-red mb-4 text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>workspace_premium</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Confiança</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 opacity-60">Fluxo técnico</span>
</button>
{/*  Aprendizado (Wide)  */}
<button className="col-span-2 flex items-center justify-between p-5 bg-zinc-800/80 border-l-4 border-brand-red/20 transition-colors text-left">
<div>
<span className="font-['Lexend'] font-bold text-xl uppercase leading-tight block">Evolução Técnica</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 opacity-60">Consciência de novos detalhes</span>
</div>
<span className="material-symbols-outlined text-brand-red text-4xl">psychology</span>
</button>
{/*  Nervosismo  */}
<button className="flex flex-col items-start p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors text-left">
<span className="material-symbols-outlined text-brand-red mb-4 text-3xl">air</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Ansiedade</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 opacity-60">Ritmo ofegante</span>
</button>
{/*  Motivação  */}
<button className="flex flex-col items-start p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors text-left">
<span className="material-symbols-outlined text-brand-red mb-4 text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>local_fire_department</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Motivação</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 opacity-60">Pronto para a próxima</span>
</button>
</div>
</section>
{/*  Reflection Area  */}
<section className="mb-12">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border border-zinc-800/10">
<div className="flex justify-between items-end mb-4">
<h3 className="font-['Inter'] font-bold text-xs tracking-widest text-zinc-100 uppercase">REFLEXÃO DO TATAME</h3>
<span className="text-[10px] text-zinc-400 uppercase font-mono">ID: 8829-X</span>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-zinc-100 placeholder:text-zinc-500/30 text-sm h-32 resize-none p-0" placeholder="Descreva o que passou pela sua mente durante a finalização ou a raspagem..."></textarea>
<div className="mt-4 pt-4 border-t border-zinc-800/10 flex justify-between items-center">
<div className="flex gap-2">
<span className="material-symbols-outlined text-zinc-400 text-lg">mic</span>
<span className="material-symbols-outlined text-zinc-400 text-lg">photo_camera</span>
</div>
<span className="text-[10px] text-brand-red font-black uppercase tracking-tighter">Gravação iniciada</span>
</div>
</div>
</section>
{/*  Call to Action  */}
<button className="w-full bg-brand-red/10 text-white py-5 font-['Lexend'] font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
            REGISTRAR PERFORMANCE
            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</main>
    </>
  );
}

