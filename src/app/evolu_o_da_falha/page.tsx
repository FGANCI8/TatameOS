import React from 'react';

export default function EvoluODaFalha() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none bg-[#131313] dark:bg-black/80 backdrop-blur-md flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white cursor-pointer active:scale-95 duration-100">menu</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl italic text-[#E70000] tracking-widest">KINETIC BJJ</h1>
</div>
<div className="flex items-center">
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close up profile portrait of a focused brazilian jiu jitsu athlete in a black gi looking intense" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeKdjp6COXbdi3iFpaP-G-kTQDUvdOOIcgb45o1-A8vQNHFM04Zm3_G_PzjASboSm-VhZRQGmm4KDOM_gCbTJzTQRIxRldn9Gq9NPWNdGqLcBoSva__OCOqme-yK86ju92ePTE-zJtqqIeKyKRUbaD319TT-OQTpPK9R1Bcgm-_bZtwSdh2I5puDBQr2rlqQWhjejwAPrvRSLoTiqjwIpYmXTnyTob95W32irqCW9HMekCFyV0uvvTZMwN4wpjLmdHbLcQziBU4Gol"/>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Metric Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.3em] text-[#E70000] mb-2 block">Análise de Performance</span>
<h2 className="font-headline font-black text-5xl md:text-7xl leading-none uppercase tracking-tighter">MAPA DA<br/>EVOLUÇÃO</h2>
</div>
<div className="bg-surface-container-highest p-6 border-l-4 border-[#E70000] min-w-[240px]">
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Taxa de Recorrência</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-headline font-black text-on-primary-container">-42%</span>
<span className="material-symbols-outlined text-[#E70000] text-3xl">trending_down</span>
</div>
<p className="text-xs text-on-surface-variant mt-1">Redução drástica na falha "Passagem de Guarda Lateral" nos últimos 30 dias.</p>
</div>
</div>
</section>
{/*  Bento Grid Visualization  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Main Chart Area  */}
<div className="md:col-span-8 bg-surface-container-low p-8 relative overflow-hidden group">
<div className="flex justify-between items-start mb-12">
<div>
<h3 className="font-headline font-bold text-xl uppercase italic">Frequência da Falha</h3>
<p className="text-sm text-tertiary-fixed-dim">Ocorrências por sessão de sparring</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold border border-outline-variant">MESES</span>
<span className="px-3 py-1 bg-primary-container text-[10px] font-bold text-on-primary-container">SEMANAS</span>
</div>
</div>
{/*  Custom Visual Progress "Chart" (The Kinetic Monolith Style)  */}
<div className="h-64 flex items-end justify-between gap-2 relative">
{/*  Grid Lines Background  */}
<div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
</div>
{/*  Bars with Gradient Shimmer  */}
<div className="flex-1 bg-surface-container-highest h-[95%] relative group/bar">
<div className="absolute bottom-0 w-full bg-tertiary-container h-[90%] opacity-20"></div>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover/bar:opacity-100 transition-opacity">12</span>
</div>
<div className="flex-1 bg-surface-container-highest h-[80%] relative group/bar">
<div className="absolute bottom-0 w-full bg-tertiary-container h-[80%] opacity-20"></div>
</div>
<div className="flex-1 bg-surface-container-highest h-[85%] relative group/bar">
<div className="absolute bottom-0 w-full bg-tertiary-container h-[85%] opacity-20"></div>
</div>
<div className="flex-1 bg-surface-container-highest h-[60%] relative group/bar border-t-2 border-[#E70000]">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-[#E70000]/20 to-transparent h-full"></div>
</div>
<div className="flex-1 bg-surface-container-highest h-[45%] relative group/bar border-t-2 border-[#E70000]">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-[#E70000]/30 to-transparent h-full"></div>
</div>
<div className="flex-1 bg-surface-container-highest h-[30%] relative group/bar border-t-2 border-[#E70000]">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-[#E70000]/40 to-transparent h-full"></div>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#E70000]">4</span>
</div>
</div>
<div className="flex justify-between mt-6 text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">
<span>Semana 01</span>
<span>Semana 02</span>
<span>Semana 03</span>
<span>Semana 04</span>
<span>Semana 05</span>
<span>ATUAL</span>
</div>
</div>
{/*  Side Metrics  */}
<div className="md:col-span-4 flex flex-col gap-6">
{/*  Confidence Indicator  */}
<div className="bg-surface-container-high p-6 flex flex-col justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#E70000]">Nível de Confiança</span>
<h4 className="font-headline font-black text-4xl mt-2 italic">88%</h4>
</div>
<div className="mt-8">
<div className="h-1 bg-surface-container-lowest w-full relative">
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#C00100] to-[#E70000] w-[88%]"></div>
</div>
<p className="text-[10px] mt-2 uppercase text-tertiary-fixed-dim font-bold">Consistência técnica elevada</p>
</div>
</div>
{/*  Action Card  */}
<div className="bg-[#E70000] p-6 text-on-primary-container flex flex-col justify-between group cursor-pointer active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<div className="mt-8">
<h4 className="font-headline font-black text-xl leading-tight uppercase">Ajuste do Sensei</h4>
<p className="text-xs font-bold opacity-80 mt-2 uppercase">Próximo passo: "Bloqueio de Quadril Antecipado"</p>
</div>
<div className="mt-4 flex justify-end">
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
{/*  Detailed Breakdown  */}
<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Data Point 1  */}
<div className="bg-surface-container p-6 border-b-2 border-outline-variant">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary">verified</span>
<span className="text-xs font-bold uppercase tracking-widest">Tempo de Reação</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-headline font-black">0.8s</span>
<span className="text-[10px] text-secondary font-bold">-0.3s VS MÊS ANT.</span>
</div>
</div>
{/*  Data Point 2  */}
<div className="bg-surface-container p-6 border-b-2 border-outline-variant">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary">fitness_center</span>
<span className="text-xs font-bold uppercase tracking-widest">Sucesso Defensivo</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-headline font-black">74%</span>
<span className="text-[10px] text-secondary font-bold">+15% CRESCIMENTO</span>
</div>
</div>
{/*  Data Point 3  */}
<div className="bg-surface-container p-6 border-b-2 border-outline-variant">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary">bolt</span>
<span className="text-xs font-bold uppercase tracking-widest">Intensidade Média</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-headline font-black">HR 165</span>
<span className="text-[10px] text-secondary font-bold">ZONA DE PERFORMANCE</span>
</div>
</div>
</div>
{/*  Technical Narrative Section  */}
<div className="md:col-span-12 bg-surface-container-lowest p-10 flex flex-col md:flex-row gap-10 items-center">
<div className="w-full md:w-1/3 aspect-square bg-surface-container relative overflow-hidden">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="black and white dynamic high contrast photography of two people practicing brazilian jiu jitsu focusing on a hip escape movement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnT8bOyfeANW1FQ2sAc1g7NMqP7Z-E9QFZfvNhNCkzEFxSd4HxM245zrhcYXo7Lpy6PJQcsLUO_AljoJKF805VA7XUi0ex1dTV9ODwJb4NbL6rrLirnrDDR7FMp5dnOsYVwnIeiBiEdFM7eqtsOCz0ZgmgLyP_MbFVgnAQ5FjC3axVkzGQ6HUCMweWcJWxuCrGgJI1z4OSmgD3hLet5dx8Ev1qMENR3mu8dls8Z9ydpXrBuY4T5KCSJZvJOSoCpVFG2pOdLByZiDhK"/>
<div className="absolute inset-0 bg-[#E70000]/10 mix-blend-multiply"></div>
</div>
<div className="flex-1">
<h3 className="font-headline font-black text-3xl uppercase italic mb-6">Diagnóstico Técnico</h3>
<div className="space-y-6">
<div className="flex gap-4">
<span className="text-[#E70000] font-headline font-bold text-lg italic">01.</span>
<p className="text-sm leading-relaxed text-on-surface-variant">Sua base de apoio na guarda X está 20cm mais larga, o que estabilizou seu centro de gravidade e reduziu as quedas por desequilíbrio.</p>
</div>
<div className="flex gap-4">
<span className="text-[#E70000] font-headline font-bold text-lg italic">02.</span>
<p className="text-sm leading-relaxed text-on-surface-variant">A pegada no tríceps durante a tentativa de raspagem agora é feita com 0.5s de antecedência, anulando a defesa do oponente.</p>
</div>
<div className="flex gap-4">
<span className="text-[#E70000] font-headline font-bold text-lg italic">03.</span>
<p className="text-sm leading-relaxed text-on-surface-variant">Foco para a próxima semana: Transição fluida entre a meia-guarda profunda e o Single Leg.</p>
</div>
</div>
<button className="mt-10 bg-surface-container-highest hover:bg-surface-bright text-white px-8 py-4 font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-3 transition-colors border border-outline-variant">
                        Ver Relatório Completo
                        <span className="material-symbols-outlined text-sm">history</span>
</button>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-20 bg-gradient-to-b from-[#1C1B1B] to-[#131313] z-50 flex justify-around items-center px-4 pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
