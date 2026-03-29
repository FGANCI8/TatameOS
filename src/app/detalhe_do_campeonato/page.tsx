import React from 'react';

export default function DetalheDoCampeonato() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex justify-between items-center px-6 py-4 w-full bg-[#131313] sticky top-0 z-50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#E70000] text-2xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>sports_martial_arts</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-[#E70000] text-xl">WARRIOR ANALYTICS</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-[#1C1B1B] transition-colors active:scale-95 duration-75">
<span className="material-symbols-outlined text-[#C6C6C7]">search</span>
</button>
<button className="p-2 hover:bg-[#1C1B1B] transition-colors active:scale-95 duration-75">
<span className="material-symbols-outlined text-[#C6C6C7]">notifications</span>
</button>
</div>
</header>
<div className="bg-[#1C1B1B] h-[2px] w-full"></div>
<main className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
{/*  Header Section: Event Info  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-['Lexend'] text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">EVENTO ANALISADO</span>
<h2 className="font-['Lexend'] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">MUNDIAL IBJJF 2024</h2>
<div className="flex flex-wrap gap-4 items-center">
<div className="bg-surface-container-highest px-4 py-2 border-l-4 border-primary-container">
<p className="text-[10px] font-bold uppercase text-tertiary">CATEGORIA</p>
<p className="font-bold text-on-surface">ADULTO / PRETA / MÉDIO</p>
</div>
<div className="bg-surface-container-highest px-4 py-2">
<p className="text-[10px] font-bold uppercase text-tertiary">LOCAL</p>
<p className="font-bold text-on-surface">LONG BEACH, CA</p>
</div>
<div className="bg-surface-container-highest px-4 py-2">
<p className="text-[10px] font-bold uppercase text-tertiary">DATA</p>
<p className="font-bold text-on-surface">02 JUN 2024</p>
</div>
</div>
</div>
<div className="flex items-center gap-2 bg-primary-container p-6">
<span className="material-symbols-outlined text-4xl text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<div>
<p className="font-['Lexend'] text-3xl font-black leading-none text-on-primary-container">MEDALHA DE OURO</p>
<p className="text-xs font-bold tracking-widest text-on-primary-container opacity-80 uppercase">RESULTADO FINAL</p>
</div>
</div>
</div>
</section>
{/*  Stats Grid (Bento Style)  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
<div className="bg-surface-container-low p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-primary-container">sports_kabaddi</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-on-surface">05</h3>
<p className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">LUTAS TOTAIS</p>
</div>
</div>
<div className="bg-surface-container-high p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-secondary">trending_up</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-on-surface">42</h3>
<p className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">PONTOS ACUMULADOS</p>
</div>
</div>
<div className="bg-surface-container-low p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-primary-container">timer</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-on-surface">32<span className="text-xl">min</span></h3>
<p className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">TEMPO EM TATAME</p>
</div>
</div>
<div className="bg-surface-container-high p-8 flex flex-col justify-between h-48">
<span className="material-symbols-outlined text-secondary">verified</span>
<div>
<h3 className="font-['Lexend'] text-5xl font-black text-on-surface">60%</h3>
<p className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">TAXA DE FINALIZAÇÃO</p>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
{/*  Tournament Brackets (Luta a Luta)  */}
<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between mb-4">
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tight">CRONOLOGIA DE COMBATE</h3>
<div className="h-[2px] flex-grow mx-6 bg-surface-container-highest"></div>
</div>
{/*  Round 1  */}
<div className="group relative bg-surface-container-low p-6 transition-all hover:bg-surface-container">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary group-hover:w-2 transition-all"></div>
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-secondary text-on-secondary px-2 py-0.5">ROUND 01 - ELIMINATÓRIAS</span>
<span className="text-[10px] font-bold text-tertiary uppercase">DURAÇÃO: 08:45</span>
</div>
<h4 className="text-xl font-bold mb-1">vs. Marcus "The Tank" Henderson</h4>
<p className="text-sm text-tertiary-fixed-dim">Gracie Barra HQ / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-2xl font-black text-secondary uppercase italic">VITÓRIA</span>
<span className="text-xs font-bold text-on-surface-variant">SUBMISSÃO (TRIÂNGULO)</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/20 flex gap-6">
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">PONTOS</p>
<p className="font-black text-on-surface">06</p>
</div>
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">VANTAGENS</p>
<p className="font-black text-on-surface">02</p>
</div>
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">PUNIÇÕES</p>
<p className="font-black text-on-surface">00</p>
</div>
</div>
</div>
{/*  Round 2  */}
<div className="group relative bg-surface-container-low p-6 transition-all hover:bg-surface-container">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary group-hover:w-2 transition-all"></div>
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-secondary text-on-secondary px-2 py-0.5">ROUND 02 - QUARTAS DE FINAL</span>
<span className="text-[10px] font-bold text-tertiary uppercase">DURAÇÃO: 10:00</span>
</div>
<h4 className="text-xl font-bold mb-1">vs. Leandro Silva</h4>
<p className="text-sm text-tertiary-fixed-dim">Alliance / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-2xl font-black text-secondary uppercase italic">VITÓRIA</span>
<span className="text-xs font-bold text-on-surface-variant">PONTOS (12 - 2)</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/20 flex gap-6">
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">PONTOS</p>
<p className="font-black text-on-surface">12</p>
</div>
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">VANTAGENS</p>
<p className="font-black text-on-surface">03</p>
</div>
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">PUNIÇÕES</p>
<p className="font-black text-on-surface">01</p>
</div>
</div>
</div>
{/*  Round 3 (Semi)  */}
<div className="group relative bg-surface-container-low p-6 transition-all hover:bg-surface-container">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary group-hover:w-2 transition-all"></div>
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-secondary text-on-secondary px-2 py-0.5">ROUND 03 - SEMIFINAL</span>
<span className="text-[10px] font-bold text-tertiary uppercase">DURAÇÃO: 04:22</span>
</div>
<h4 className="text-xl font-bold mb-1">vs. Fabio Gurgel</h4>
<p className="text-sm text-tertiary-fixed-dim">Dream Art / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-2xl font-black text-secondary uppercase italic">VITÓRIA</span>
<span className="text-xs font-bold text-on-surface-variant">SUBMISSÃO (ARM-LOCK)</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/20 flex gap-6">
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">PONTOS</p>
<p className="font-black text-on-surface">04</p>
</div>
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">VANTAGENS</p>
<p className="font-black text-on-surface">01</p>
</div>
<div className="text-center">
<p className="text-[10px] text-tertiary-fixed-dim uppercase">PUNIÇÕES</p>
<p className="font-black text-on-surface">00</p>
</div>
</div>
</div>
{/*  Round 4 (Final)  */}
<div className="group relative bg-surface-container-highest p-8 transition-all border-l-[8px] border-primary-container">
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold bg-primary-container text-on-primary-container px-2 py-0.5">GRANDE FINAL</span>
<span className="text-[10px] font-bold text-on-background uppercase">DURAÇÃO: 06:15</span>
</div>
<h4 className="text-2xl font-black mb-1 uppercase italic tracking-tight">vs. Nicholas Meregali</h4>
<p className="text-sm text-tertiary-fixed-dim">New Wave / Faixa Preta</p>
</div>
<div className="flex flex-col items-end justify-center text-right">
<span className="text-3xl font-black text-primary-container uppercase italic">CAMPEÃO</span>
<span className="text-xs font-bold text-on-surface-variant">SUBMISSÃO (CHAVE DE PÉ)</span>
</div>
</div>
</div>
</div>
{/*  Side Sidebar: Technical Performance  */}
<aside className="space-y-8">
<div>
<h3 className="font-['Lexend'] text-xl font-black uppercase mb-4 tracking-tighter">ANÁLISE DE SCORE</h3>
<div className="bg-surface-container-lowest p-6 space-y-6">
{/*  Score Bars  */}
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>PASSAGEM DE GUARDA</span>
<span className="text-secondary">08 PONTOS</span>
</div>
<div className="h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="h-full bg-secondary w-[80%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>QUEDAS / TAKEDOWNS</span>
<span className="text-secondary">04 PONTOS</span>
</div>
<div className="h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="h-full bg-secondary w-[40%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>RASPAGENS / SWEEPS</span>
<span className="text-secondary">18 PONTOS</span>
</div>
<div className="h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="h-full bg-secondary w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase mb-2">
<span>MONTADA / PEGADA COSTAS</span>
<span className="text-secondary">12 PONTOS</span>
</div>
<div className="h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="h-full bg-secondary w-[65%]"></div>
</div>
</div>
</div>
</div>
<div>
<h3 className="font-['Lexend'] text-xl font-black uppercase mb-4 tracking-tighter">SUMMARY DE PERFORMANCE</h3>
<div className="bg-surface-container-low p-6">
<p className="text-sm text-tertiary-fixed-dim leading-relaxed mb-4 italic">
                            "Domínio excepcional na guarda aberta. 85% das tentativas de raspagem foram convertidas. Foco necessário em defesa de quedas iniciais, sofrendo 4 pontos no início do round 2."
                        </p>
<div className="bg-primary-container/10 border border-primary-container/20 p-4">
<p className="text-[10px] font-bold text-primary-container uppercase mb-1">FOCO PARA O PRÓXIMO TREINO</p>
<p className="text-xs font-bold text-on-background">Postura defensiva em Singles Legs e finalização rápida de triângulos.</p>
</div>
</div>
</div>
<div className="bg-surface-container-highest p-6 relative overflow-hidden group">
<div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[150px]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
</div>
<h3 className="font-['Lexend'] text-xs font-bold uppercase tracking-widest text-primary-container mb-4">MAPA TÁTICO</h3>
<div className="flex justify-between items-end">
<div>
<p className="text-3xl font-black">9.8</p>
<p className="text-[10px] font-bold text-tertiary-fixed-dim uppercase">TECHNICAL RATING</p>
</div>
<button className="bg-on-surface text-surface py-2 px-4 text-xs font-black uppercase hover:bg-secondary transition-colors">
                            VER DETALHES BIOMÉTRICOS
                        </button>
</div>
</div>
</aside>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-4 bg-[#353534]/80 backdrop-blur-md z-50 shadow-[0_-4px_20px_rgba(189,194,255,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">HISTORY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined" data-icon="sports_kabaddi" style={{ /* font-variation-settings: 'FILL' 1; */ }}>sports_kabaddi</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">FIGHTS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">PERFORMANCE</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined" data-icon="error_outline">error_outline</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">ERRORS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined" data-icon="military_tech">military_tech</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">MEDALS</span>
</a>
</nav>

    </>
  );
}
