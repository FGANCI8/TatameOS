export default function EvoluODeFalhas() {
  return (
    <>
<main className="pt-24 pb-32 px-6 min-h-screen bg-mesh">
{/*  Hero Metric: Technical Confidence  */}
<section className="mb-12">
<span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Status da Evolução</span>
<div className="flex items-baseline gap-2 mt-2">
<h2 className="font-headline text-7xl font-black text-zinc-100 leading-none">88%</h2>
<span className="font-headline text-xl font-bold text-zinc-300 uppercase italic">Confiança</span>
</div>
<p className="mt-4 text-zinc-500 max-w-xs leading-relaxed">Sua exposição a falhas críticas reduziu drasticamente nos últimos 30 dias de treino intenso.</p>
</section>
{/*  Bento Grid: Analytics  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Performance Streak: Reduction in Guard Pass  */}
<div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
<div className="flex justify-between items-start">
<div>
<span className="material-symbols-outlined text-brand-red mb-2" data-icon="shield_lock">shield_lock</span>
<h3 className="font-headline text-xl font-black uppercase italic tracking-tighter">Guarda Passada</h3>
</div>
<span className="text-brand-red font-headline text-2xl font-black">-32%</span>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-500">Taxa de Erro</span>
<span className="font-label text-[10px] font-bold text-zinc-100">MELHORIA CONSTANTE</span>
</div>
{/*  Custom Performance Streak Bar  */}
<div className="h-4 bg-zinc-800/80 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-100 w-[68%]">
<div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
</div>
</div>
</div>
</div>
{/*  Heatmap / Activity Mini Card  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between">
<h3 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Consistência</h3>
<div className="grid grid-cols-4 gap-2 my-4">
<div className="aspect-square bg-brand-red/10"></div>
<div className="aspect-square bg-brand-red/10 opacity-80"></div>
<div className="aspect-square bg-brand-red/10"></div>
<div className="aspect-square bg-zinc-800/80"></div>
<div className="aspect-square bg-brand-red/10"></div>
<div className="aspect-square bg-brand-red/10"></div>
<div className="aspect-square bg-brand-red/10 opacity-60"></div>
<div className="aspect-square bg-brand-red/10"></div>
</div>
<div className="text-zinc-100 font-headline font-black text-lg">12 Dias <span className="text-brand-red italic">Streak</span></div>
</div>
{/*  Specific Failure Reduction List  */}
<div className="md:col-span-3 space-y-4 mt-4">
<h4 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Falhas Corrigidas vs Pendentes</h4>
{/*  Item 1: Postura no Triângulo  */}
<div className="flex items-center justify-between p-5 bg-zinc-900/80">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-300" data-icon="straighten">straighten</span>
</div>
<div>
<p className="font-label text-xs font-bold text-zinc-500 uppercase tracking-widest">Postura no Triângulo</p>
<p className="text-zinc-100 font-bold">Correção de Alinhamento</p>
</div>
</div>
<div className="text-right">
<p className="text-zinc-300 font-headline font-black italic">ESTÁVEL</p>
<p className="text-[10px] font-label uppercase text-zinc-500">95% Êxito</p>
</div>
</div>
{/*  Item 2: Exposição de Costas  */}
<div className="flex items-center justify-between p-5 bg-zinc-900/80">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-brand-red" data-icon="warning">warning</span>
</div>
<div>
<p className="font-label text-xs font-bold text-zinc-500 uppercase tracking-widest">Exposição de Costas</p>
<p className="text-zinc-100 font-bold">Saída de Meia-Guarda</p>
</div>
</div>
<div className="text-right">
<p className="text-brand-red font-headline font-black italic">-15% ERROS</p>
<p className="text-[10px] font-label uppercase text-zinc-500">Em progresso</p>
</div>
</div>
{/*  Item 3: Pegada Morta  */}
<div className="flex items-center justify-between p-5 bg-zinc-900/80 border-l-4 border-brand-red/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-brand-red" data-icon="front_hand" style={{ /* font-variation-settings: 'FILL' 1; */ }}>front_hand</span>
</div>
<div>
<p className="font-label text-xs font-bold text-zinc-500 uppercase tracking-widest">Pegada Morta</p>
<p className="text-zinc-100 font-bold">Eficiência de Grip</p>
</div>
</div>
<div className="text-right">
<p className="text-zinc-100 font-headline font-black italic">NOVO ALVO</p>
<p className="text-[10px] font-label uppercase text-zinc-500">Análise Pendente</p>
</div>
</div>
</div>
</div>
{/*  Visualisation: Progress Over Time  */}
<section className="mt-12 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border border-white/5 relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline text-2xl font-black uppercase italic tracking-tighter text-zinc-100 mb-8">Histórico de Melhoria</h3>
<div className="h-48 flex items-end justify-between gap-2">
<div className="w-full bg-zinc-800/80 h-[20%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-zinc-100 text-surface text-[8px] font-black px-1 py-0.5 opacity-0 group-hover:opacity-100 uppercase">Sem 01</div>
</div>
<div className="w-full bg-zinc-800/80 h-[40%]"></div>
<div className="w-full bg-zinc-800/80 h-[35%]"></div>
<div className="w-full bg-primary h-[65%]"></div>
<div className="w-full bg-primary h-[55%]"></div>
<div className="w-full bg-primary h-[85%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] font-black px-1 py-0.5 opacity-100 uppercase">ATUAL</div>
</div>
</div>
<div className="mt-4 flex justify-between font-label text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
<span>Semana 01</span>
<span>Semana 06</span>
</div>
</div>
{/*  Background Image Accent  */}
<div className="absolute top-0 right-0 w-1/3 h-full opacity-10 grayscale mix-blend-overlay">
<img alt="Texture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBvb-d94CG-YM4AvmUl8wHLP_mNHuTc_85YdSyKww3LLCRYOFht98GZOP1E6jYnbN_ej_AP8FnvU8etqeTB91veB4G0aCpntvXTbTATvHRfEpropzNg3rqNcYSnwoNI0a1g70QbOqVAbf1GAI_zgbN6Q91lwL9OmSthlOovHmif22Zb0YA0KYGGZObEiE4HtynyJ81CyO8tpaf16UvqmAbyL9WWwFtY0N7Vwg7T1vdF6k5bnpXLWVm8LTOJGXR8_8x4hb4JJgodx2E"/>
</div>
</section>
{/*  CTA Section  */}
<section className="mt-12">
<button className="w-full py-5 bg-brand-red/10 text-white font-headline font-black uppercase italic tracking-widest text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                Gerar Relatório Professor
            </button>
</section>
</main>
    </>
  );
}


