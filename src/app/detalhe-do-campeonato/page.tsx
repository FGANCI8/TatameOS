export default function DetalheDoCampeonato() {
  return (
    <>
<main className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
{/*  Header Section: Event Info  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-['Lexend'] text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 mb-2 block">EVENTO ANALISADO</span>
<h2 className="font-['Lexend'] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">MUNDIAL IBJJF 2024</h2>
<div className="flex flex-wrap gap-4 items-center">
<div className="bg-zinc-800/80 px-4 py-2 border-l-4 border-brand-red/20">
<p className="text-[10px] font-bold uppercase text-zinc-400">CATEGORIA</p>
<p className="font-bold text-zinc-100">ADULTO / PRETA / MÉDIO</p>
</div>
<div className="bg-zinc-800/80 px-4 py-2">
<p className="text-[10px] font-bold uppercase text-zinc-400">LOCAL</p>
<p className="font-bold text-zinc-100">LONG BEACH, CA</p>
</div>
<div className="bg-zinc-800/80 px-4 py-2">
<p className="text-[10px] font-bold uppercase text-zinc-400">DATA</p>
<p className="font-bold text-zinc-100">02 JUN 2024</p>
</div>
</div>
</div>
<div className="flex items-center gap-2 bg-brand-red/10 p-6">
<span className="material-symbols-outlined text-4xl text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<div>
<p className="font-['Lexend'] text-3xl font-black leading-none text-white">MEDALHA DE OURO</p>
<p className="text-xs font-bold tracking-widest text-white opacity-80 uppercase">RESULTADO FINAL</p>
</div>
</div>
</div>
</section>
{/*  Stats Grid (Bento Style)  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-brand-red">sports_kabaddi</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-zinc-100">05</h3>
<p className="text-xs font-bold uppercase tracking-widest text-zinc-500">LUTAS TOTAIS</p>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-zinc-300">trending_up</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-zinc-100">42</h3>
<p className="text-xs font-bold uppercase tracking-widest text-zinc-500">PONTOS ACUMULADOS</p>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-brand-red">timer</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-zinc-100">32<span className="text-xl">min</span></h3>
<p className="text-xs font-bold uppercase tracking-widest text-zinc-500">TEMPO EM TATAME</p>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-zinc-300">verified</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-zinc-100">60%</h3>
<p className="text-xs font-bold uppercase tracking-widest text-zinc-500">TAXA DE FINALIZAÇÃO</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
{/*  Tournament Brackets (Luta a Luta)  */}
<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between mb-4">
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tight">CRONOLOGIA DE COMBATE</h3>
<div className="h-[2px] flex-grow mx-6 bg-zinc-800/80"></div>
</div>
{/*  Round 1  */}
<div className="group relative rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 transition-all hover:bg-zinc-900/80">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-hover:w-2 transition-all"></div>
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-zinc-800 text-zinc-100 px-2 py-0.5">ROUND 01 - ELIMINATÓRIAS</span>
<span className="text-[10px] font-bold text-zinc-400 uppercase">DURAÇÃO: 08:45</span>
</div>
<h4 className="text-xl font-bold mb-1">vs. Marcus "The Tank" Henderson</h4>
<p className="text-sm text-zinc-500">Gracie Barra HQ / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-2xl font-black text-zinc-300 uppercase italic">VITÓRIA</span>
<span className="text-xs font-bold text-zinc-400">SUBMISSÃO (TRIÂNGULO)</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/20 flex gap-6">
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">PONTOS</p>
<p className="font-black text-zinc-100">06</p>
</div>
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">VANTAGENS</p>
<p className="font-black text-zinc-100">02</p>
</div>
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">PUNIÇÕES</p>
<p className="font-black text-zinc-100">00</p>
</div>
</div>
</div>
{/*  Round 2  */}
<div className="group relative rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 transition-all hover:bg-zinc-900/80">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-hover:w-2 transition-all"></div>
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-zinc-800 text-zinc-100 px-2 py-0.5">ROUND 02 - QUARTAS DE FINAL</span>
<span className="text-[10px] font-bold text-zinc-400 uppercase">DURAÇÃO: 10:00</span>
</div>
<h4 className="text-xl font-bold mb-1">vs. Leandro Silva</h4>
<p className="text-sm text-zinc-500">Alliance / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-2xl font-black text-zinc-300 uppercase italic">VITÓRIA</span>
<span className="text-xs font-bold text-zinc-400">PONTOS (12 - 2)</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/20 flex gap-6">
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">PONTOS</p>
<p className="font-black text-zinc-100">12</p>
</div>
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">VANTAGENS</p>
<p className="font-black text-zinc-100">03</p>
</div>
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">PUNIÇÕES</p>
<p className="font-black text-zinc-100">01</p>
</div>
</div>
</div>
{/*  Round 3 (Semi)  */}
<div className="group relative rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 transition-all hover:bg-zinc-900/80">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-hover:w-2 transition-all"></div>
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-zinc-800 text-zinc-100 px-2 py-0.5">ROUND 03 - SEMIFINAL</span>
<span className="text-[10px] font-bold text-zinc-400 uppercase">DURAÇÃO: 04:22</span>
</div>
<h4 className="text-xl font-bold mb-1">vs. Fabio Gurgel</h4>
<p className="text-sm text-zinc-500">Dream Art / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-2xl font-black text-zinc-300 uppercase italic">VITÓRIA</span>
<span className="text-xs font-bold text-zinc-400">SUBMISSÃO (ARM-LOCK)</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/20 flex gap-6">
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">PONTOS</p>
<p className="font-black text-zinc-100">04</p>
</div>
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">VANTAGENS</p>
<p className="font-black text-zinc-100">01</p>
</div>
<div className="text-center">
<p className="text-[10px] text-zinc-500 uppercase">PUNIÇÕES</p>
<p className="font-black text-zinc-100">00</p>
</div>
</div>
</div>
{/*  Round 4 (Final)  */}
<div className="group relative bg-zinc-800/80 p-8 transition-all border-l-[8px] border-brand-red/20">
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-brand-red/10 text-white px-2 py-0.5">GRANDE FINAL</span>
<span className="text-[10px] font-bold text-on-background uppercase">DURAÇÃO: 06:15</span>
</div>
<h4 className="text-2xl font-black mb-1 uppercase italic tracking-tight">vs. Nicholas Meregali</h4>
<p className="text-sm text-zinc-500">New Wave / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-3xl font-black text-brand-red uppercase italic">CAMPEÃO</span>
<span className="text-xs font-bold text-zinc-400">SUBMISSÃO (CHAVE DE PÉ)</span>
</div>
</div>
</div>
</div>
{/*  Side Sidebar: Technical Performance  */}
<aside className="space-y-8">
<div>
<h3 className="font-['Lexend'] text-xl font-black uppercase mb-4 tracking-tighter">ANÁLISE DE SCORE</h3>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-6">
{/*  Score Bars  */}
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>PASSAGEM DE GUARDA</span>
<span className="text-zinc-300">08 PONTOS</span>
</div>
<div className="h-2 bg-zinc-800/80 w-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[80%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>QUEDAS / TAKEDOWNS</span>
<span className="text-zinc-300">04 PONTOS</span>
</div>
<div className="h-2 bg-zinc-800/80 w-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[40%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>RASPAGENS / SWEEPS</span>
<span className="text-zinc-300">18 PONTOS</span>
</div>
<div className="h-2 bg-zinc-800/80 w-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>MONTADA / PEGADA COSTAS</span>
<span className="text-zinc-300">12 PONTOS</span>
</div>
<div className="h-2 bg-zinc-800/80 w-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[65%]"></div>
</div>
</div>
</div>
</div>
<div>
<h3 className="font-['Lexend'] text-xl font-black uppercase mb-4 tracking-tighter">SUMMARY DE PERFORMANCE</h3>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
<p className="text-sm text-zinc-500 leading-relaxed mb-4 italic">
                            "Domínio excepcional na guarda aberta. 85% das tentativas de raspagem foram convertidas. Foco necessário em defesa de quedas iniciais, sofrendo 4 pontos no início do round 2."
                        </p>
<div className="bg-brand-red/10 border border-brand-red/20 p-4">
<p className="text-[10px] font-bold text-brand-red uppercase mb-1">FOCO PARA O PRÓXIMO TREINO</p>
<p className="text-xs font-bold text-on-background">Postura defensiva em Singles Legs e finalização rápida de triângulos.</p>
</div>
</div>
</div>
<div className="bg-zinc-800/80 p-6 relative overflow-hidden group">
<div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[150px]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
</div>
<h3 className="font-['Lexend'] text-xs font-bold uppercase tracking-widest text-brand-red mb-4">MAPA TÁTICO</h3>
<div className="flex justify-between items-end">
<div>
<p className="text-3xl font-black">9.8</p>
<p className="text-[10px] font-bold text-zinc-500 uppercase">TECHNICAL RATING</p>
</div>
<button className="bg-zinc-100 text-surface py-2 px-4 text-xs font-black uppercase hover:bg-zinc-800 transition-colors">
                            VER DETALHES BIOMÉTRICOS
                        </button>
</div>
</div>
</aside>
</div>
</main>
    </>
  );
}


