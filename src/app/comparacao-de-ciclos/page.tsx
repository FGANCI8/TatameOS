export default function ComparaODeCiclos() {
  return (
    <>
<main className="pt-20 px-4 space-y-6">
{/*  Hero Section: Performance Comparison  */}
<section className="mt-4">
<h1 className="font-headline text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">ANÁLISE DE CICLO</h1>
<p className="font-label text-xs uppercase tracking-[0.2em] text-zinc-500">Comparativo: Open 2023 vs Nationals 2024</p>
</section>
{/*  Bento Grid: Main Comparison  */}
<div className="grid grid-cols-2 gap-3">
{/*  Card Campeonato A  */}
<div className="bg-zinc-950/60 p-4 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-zinc-900 opacity-10 -rotate-45 translate-x-8 -translate-y-8"></div>
<span className="font-label text-[10px] uppercase tracking-widest text-zinc-500 mb-1 block">EVENTO ANTERIOR</span>
<h3 className="font-headline text-xl font-bold italic mb-4">OPEN 2023</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-1">
<span>TAXA VITÓRIA</span>
<span>64%</span>
</div>
<div className="h-1 bg-zinc-800/80">
<div className="h-full bg-zinc-800 w-[64%]"></div>
</div>
</div>
<div className="flex items-end gap-1">
<span className="font-headline text-3xl font-black italic text-zinc-100">12</span>
<span className="font-label text-[10px] text-zinc-500 pb-1">LUTAS</span>
</div>
</div>
</div>
{/*  Card Campeonato B  */}
<div className="bg-zinc-900 p-4 border-l-4 border-brand-red/20 relative overflow-hidden">
<div className="absolute -bottom-2 -right-2 opacity-5 scale-150">
<span className="material-symbols-outlined text-8xl" data-icon="military_tech">military_tech</span>
</div>
<span className="font-label text-[10px] uppercase tracking-widest text-brand-red mb-1 block">CICLO ATUAL</span>
<h3 className="font-headline text-xl font-bold italic mb-4">NATIONALS 2024</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-1">
<span>TAXA VITÓRIA</span>
<span className="text-brand-red">88%</span>
</div>
<div className="h-1 bg-zinc-800/80">
<div className="h-full kinetic-gradient w-[88%]"></div>
</div>
</div>
<div className="flex items-end gap-1">
<span className="font-headline text-3xl font-black italic text-zinc-100">18</span>
<span className="font-label text-[10px] text-zinc-500 pb-1">LUTAS</span>
</div>
</div>
</div>
{/*  Evolution Tática (Wide Card)  */}
<div className="col-span-2 bg-zinc-950/60 p-5 space-y-4">
<div className="flex justify-between items-center">
<h4 className="font-headline text-lg font-bold italic uppercase">Evolução Tática</h4>
<span className="material-symbols-outlined text-brand-red" data-icon="insights">insights</span>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-zinc-800/20 pt-4">
<div className="text-center">
<span className="block font-headline text-2xl font-black italic text-brand-red">+24%</span>
<span className="font-label text-[9px] uppercase tracking-widest text-zinc-500">Passagem</span>
</div>
<div className="text-center border-x border-zinc-800/20">
<span className="block font-headline text-2xl font-black italic text-zinc-100">+18%</span>
<span className="font-label text-[9px] uppercase tracking-widest text-zinc-500">Raspagem</span>
</div>
<div className="text-center">
<span className="block font-headline text-2xl font-black italic text-zinc-100">-42%</span>
<span className="font-label text-[9px] uppercase tracking-widest text-zinc-500">Falhas</span>
</div>
</div>
</div>
</div>
{/*  Performance Chart Simulation  */}
<section className="space-y-4">
<div className="flex justify-between items-end">
<h4 className="font-headline text-lg font-bold italic uppercase">Consistência de Treino</h4>
<div className="flex gap-2">
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-zinc-800/80"></div>
<span className="text-[8px] font-bold uppercase">2023</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-brand-red/10"></div>
<span className="text-[8px] font-bold uppercase">2024</span>
</div>
</div>
</div>
<div className="bg-zinc-950 h-48 w-full relative flex items-end justify-between px-4 pb-4">
{/*  Grid Lines  */}
<div className="absolute inset-x-0 top-0 h-full flex flex-col justify-between pointer-events-none px-4 opacity-5">
<div className="w-full border-t border-zinc-100"></div>
<div className="w-full border-t border-zinc-100"></div>
<div className="w-full border-t border-zinc-100"></div>
<div className="w-full border-t border-zinc-100"></div>
</div>
{/*  Bar Pairs  */}
<div className="flex items-end gap-1 h-full">
<div className="w-3 bg-zinc-800/80 h-[40%]"></div>
<div className="w-3 bg-brand-red/10 h-[70%]"></div>
</div>
<div className="flex items-end gap-1 h-full">
<div className="w-3 bg-zinc-800/80 h-[55%]"></div>
<div className="w-3 bg-brand-red/10 h-[85%]"></div>
</div>
<div className="flex items-end gap-1 h-full">
<div className="w-3 bg-zinc-800/80 h-[50%]"></div>
<div className="w-3 bg-brand-red/10 h-[95%]"></div>
</div>
<div className="flex items-end gap-1 h-full">
<div className="w-3 bg-zinc-800/80 h-[60%]"></div>
<div className="w-3 bg-brand-red/10 h-[80%]"></div>
</div>
<div className="flex items-end gap-1 h-full">
<div className="w-3 bg-zinc-800/80 h-[45%]"></div>
<div className="w-3 bg-brand-red/10 h-[90%]"></div>
</div>
<div className="flex items-end gap-1 h-full">
<div className="w-3 bg-zinc-800/80 h-[35%]"></div>
<div className="w-3 bg-brand-red/10 h-[100%]"></div>
</div>
</div>
<div className="flex justify-between px-4 text-[10px] font-black uppercase text-zinc-500">
<span>JAN</span><span>FEV</span><span>MAR</span><span>ABR</span><span>MAI</span><span>JUN</span>
</div>
</section>
{/*  Redução de Falhas Module  */}
<section className="bg-zinc-950/60 p-5 relative overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-brand-red/10 to-transparent"></div>
<div className="relative z-10 flex items-center justify-between">
<div>
<h4 className="font-headline text-lg font-bold italic uppercase leading-none mb-1">Redução de Falhas</h4>
<p className="text-xs text-zinc-500">Otimização técnica por período</p>
</div>
<div className="text-right">
<span className="font-headline text-4xl font-black italic text-brand-red">-58%</span>
<span className="block text-[8px] font-bold uppercase text-brand-red tracking-widest">DEFESA DE GUARDA</span>
</div>
</div>
<div className="mt-6 flex items-center gap-4">
<div className="flex-1 space-y-2">
<div className="flex justify-between items-center text-[10px] font-bold uppercase">
<span>PONTOS CEDIDOS</span>
<span className="text-zinc-500">↓ 2.4/LUTA</span>
</div>
<div className="h-2 bg-zinc-800/80">
<div className="h-full kinetic-gradient w-[35%]"></div>
</div>
</div>
<button className="bg-brand-red/10 text-white p-3 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="trending_down">trending_down</span>
</button>
</div>
</section>
{/*  Recent Logs (Editorial Style)  */}
<section className="space-y-3 pb-10">
<h4 className="font-headline text-lg font-bold italic uppercase">Destaques Técnicos</h4>
<div className="bg-zinc-900 p-4 flex gap-4">
<div className="w-16 h-16 bg-zinc-800/80 shrink-0 grayscale hover:grayscale-0 transition-all">
<img alt="Submission Technique" className="w-full h-full object-cover" data-alt="Monochromatic gritty action shot of a jiu-jitsu submission hold, focus on hand grip and tension, dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBam0oE-tMTmko52x2U6FnhqB0MrGSkiu1UhvkVjNWRfF10eLpnllvD05gpFsrbieNNtgc8KjkZR2aLkFaOdbdCE7LcJRwCAFZY2Ig0O95YajdrVJSocTn2tD8yYblZxg0qj2eKmf36WscuCetr6gykEfLSRZmPpDnKeGYlrjEQpGqRPHP5uDgpJa1GJadHUf78XluHCexoevpChJt4Aa4jd6e6B6Yrd4aMzj1y7xlAJovO8hDqFub2bP75eH9Hj4JeI-uh5QFW_4rr"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="text-[9px] font-black uppercase text-zinc-300 tracking-widest">MÉTRICA CHAVE</span>
<h5 className="font-bold text-sm uppercase">EFICIÊNCIA EM FINALIZAÇÕES</h5>
<p className="text-xs text-zinc-500 mt-1">Aumento de 12% em Arm-Locks partindo da guarda fechada.</p>
</div>
</div>
<div className="bg-zinc-950/60 p-4 flex gap-4">
<div className="w-16 h-16 bg-zinc-800/80 shrink-0 grayscale hover:grayscale-0 transition-all">
<img alt="Training Strength" className="w-full h-full object-cover" data-alt="Heavily shadowed gym environment with iron weights and industrial aesthetic, cinematic high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcWp5V1inHomkKPMIbMs3jCOeTinJs6cAG-Aubhs7OhZndlxsGdaGFY9_zGKwrT0AH0r-a_00PtfCVizL2IKPpqVR1v10QvU1j70dMJOrSDh2SXCk_J8bp0GE_sMB6WCDOUChT9SpE1RpwMPmWIXKVZZyVfhVPXd3yvQq1WZErqerOKr9aoqzwXnFzpUY_lLkw5U22lfmm6-6mLwEVHY8quzBfkguveX3nf8wcCUvSuQFNyJp314P0m9Pl5agHhl1dITHl6h9Nl1YJ"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="text-[9px] font-black uppercase text-brand-red tracking-widest">RESISTÊNCIA</span>
<h5 className="font-bold text-sm uppercase">PICO DE VO2 MAX</h5>
<p className="text-xs text-zinc-500 mt-1">Consistência mantida acima de 160BPM por 8min rounds.</p>
</div>
</div>
</section>
</main>
    </>
  );
}


