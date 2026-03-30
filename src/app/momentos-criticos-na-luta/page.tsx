export default function MomentosCrTicosNaLuta() {
  return (
    <>
<main className="pb-24 pt-4 px-4 md:px-8 max-w-6xl mx-auto">
{/*  Video Canvas Section  */}
<section className="mb-8 relative bg-zinc-950 overflow-hidden group">
<div className="aspect-video w-full bg-black relative">
<img alt="training video frame" className="w-full h-full object-cover opacity-80" data-alt="wide shot of two jiu-jitsu practitioners grappling on dark mats in a high-intensity training facility with industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2p2kMIJMqWIVj2G2Jj_q4Kj_4hM1cHltVw1j2olygKhlIs1lShgDjhL23dALRqRzwGdByHtwXZ571X4_lg3VlVZj0ysOvwSu9A_W1Omr3KqIo4hulH5PZSU2BKl7kAtOx0beJMdZQWElvoly5FGHYtcUAMMQupyhYxo3ToLNrPFj7_sqMiTSUajhjJr27do2dh_WEqh4WWT_T7t2IGvv8TjXA6Epd5hTB9n8SJXj91T_ExI8W5sMU5PkHjhJRGaWC3qnfGVsG8DB"/>
{/*  Overlay Gradient for UI Legibility  */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
{/*  Play Center Button  */}
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-brand-red/10 text-white p-6 active:scale-90 transition-transform shadow-[0_0_40px_rgba(255,26,26,0.3)]">
<span className="material-symbols-outlined !text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</button>
</div>
{/*  Custom Scrubber / Timeline  */}
<div className="absolute bottom-0 left-0 w-full p-4 space-y-2">
<div className="flex justify-between text-[10px] font-bold tracking-widest text-zinc-100/60 uppercase">
<span>04:10</span>
<span>12:45</span>
</div>
<div className="h-1.5 w-full bg-zinc-800/80/50 relative">
<div className="absolute top-0 left-0 h-full bg-brand-red/10 w-[35%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
</div>
{/*  Marker Highlights on Timeline  */}
<div className="absolute top-0 left-[18%] h-full w-1 bg-white/80"></div>
<div className="absolute top-0 left-[35%] h-full w-1 bg-white/80"></div>
<div className="absolute top-0 left-[45%] h-full w-1 bg-white/80"></div>
</div>
</div>
</div>
</section>
{/*  Dynamic Header for Markers  */}
<div className="flex items-end justify-between mb-6">
<div>
<span className="text-[10px] font-bold text-brand-red tracking-[0.3em] uppercase">SENSEI ANALYSIS</span>
<h2 className="text-4xl font-black font-headline tracking-tighter uppercase leading-none mt-1">MOMENTOS CRÍTICOS</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="bg-zinc-900 px-4 py-2 text-xs font-bold hover:bg-zinc-800/80 transition-colors uppercase tracking-widest">FILTRAR</button>
<button className="bg-brand-red/10 px-4 py-2 text-xs font-bold text-white hover:brightness-110 transition-all uppercase tracking-widest">ADICIONAR NOTA</button>
</div>
</div>
{/*  Markers Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Moment Card 1: Queda  */}
<button className="group relative flex flex-col text-left bg-zinc-950/60 border-l-4 border-transparent hover:border-brand-red/20 hover:bg-zinc-900 transition-all duration-200">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-brand-red !text-3xl" data-icon="trending_down">trending_down</span>
<span className="font-headline font-bold text-xl text-brand-red tracking-tighter">02:15</span>
</div>
<h3 className="text-lg font-bold font-headline leading-tight mb-2 uppercase">Queda Sofrida</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Ponto de desequilíbrio detectado. Transição rápida para a guarda.</p>
</div>
<div className="mt-auto bg-zinc-800/80/30 px-6 py-3 flex items-center gap-2 opacity-60 group-hover:opacity-100">
<span className="material-symbols-outlined text-[16px]" data-icon="play_circle">play_circle</span>
<span className="text-[10px] font-bold tracking-widest uppercase">REVER MOMENTO</span>
</div>
</button>
{/*  Moment Card 2: Active / Guarda  */}
<button className="group relative flex flex-col text-left bg-zinc-800/80 border-l-4 border-brand-red/20 shadow-[20px_0_40px_rgba(0,0,0,0.3)] z-10">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-brand-red !text-3xl" data-icon="shield" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
<span className="font-headline font-bold text-xl text-brand-red tracking-tighter">04:10</span>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-brand-red/10 animate-pulse"></span>
<span className="text-[10px] font-black text-brand-red tracking-widest uppercase">PONTO ATUAL</span>
</div>
<h3 className="text-lg font-bold font-headline leading-tight mb-2 uppercase">Guarda Passada</h3>
<p className="text-sm text-zinc-100 leading-relaxed font-semibold">Falha na reposição de quadril. Oponente progrediu para os 100kg.</p>
</div>
<div className="mt-auto bg-brand-red/10 px-6 py-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-white" data-icon="pause_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>pause_circle</span>
<span className="text-[10px] font-bold tracking-widest uppercase text-white">ASSISTINDO AGORA</span>
</div>
</button>
{/*  Moment Card 3: Triângulo  */}
<button className="group relative flex flex-col text-left bg-zinc-950/60 border-l-4 border-transparent hover:border-brand-red/20 hover:bg-zinc-900 transition-all duration-200">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-brand-red !text-3xl" data-icon="change_history">change_history</span>
<span className="font-headline font-bold text-xl text-brand-red tracking-tighter">05:30</span>
</div>
<h3 className="text-lg font-bold font-headline leading-tight mb-2 uppercase">Tentativa de Triângulo</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Abertura estratégica identificada. Finalização quase encaixada.</p>
</div>
<div className="mt-auto bg-zinc-800/80/30 px-6 py-3 flex items-center gap-2 opacity-60 group-hover:opacity-100">
<span className="material-symbols-outlined text-[16px]" data-icon="play_circle">play_circle</span>
<span className="text-[10px] font-bold tracking-widest uppercase">REVER MOMENTO</span>
</div>
</button>
</div>
{/*  Telemetry Data Strip  */}
<div className="mt-8 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-wrap gap-8 justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase">INTENSIDADE MÉDIA</span>
<span className="text-3xl font-black font-headline text-zinc-100 uppercase">84%</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase">CALORIAS</span>
<span className="text-3xl font-black font-headline text-zinc-100 uppercase">642 <span className="text-sm font-normal text-zinc-500 uppercase tracking-tighter">kcal</span></span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase">ZONA CARDÍACA</span>
<span className="text-3xl font-black font-headline text-brand-red uppercase">PICO</span>
</div>
<div className="flex flex-col min-w-[120px]">
<span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase">PROGRESSO SESSÃO</span>
<div className="h-2 w-full bg-zinc-800/80 mt-3 overflow-hidden">
<div className="h-full bg-gradient-to-r from-zinc-800 to-zinc-100 w-[45%]"></div>
</div>
</div>
</div>
</main>
    </>
  );
}


