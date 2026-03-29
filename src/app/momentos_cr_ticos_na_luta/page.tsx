import React from 'react';

export default function MomentosCrTicosNaLuta() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4 border-none bg-[#1C1B1B]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="athlete profile" className="w-full h-full object-cover" data-alt="close-up portrait of a determined martial artist athlete with intense gaze and sweat on forehead, dramatic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYPF3UZ3Da5qDINPoqtanAQQQy1SZu0EEGPK9ZQtbqmI1e6s51fBIfMBsjrqqM0RPHViih-uzWpYwRF22Qy87EuS3YUNX9TYU6qeu8oZCh7Gq7-UX6kEXxT8XvjEYcbR4xIuwAPGhqA8hsMe9K8dvDqrzRzEbUtcZbNbBAsS4FLWQbgQ01JQOOwPlSp3P5v8irCyb4ktclAOqcW-WA-hOQvCO99mz3h_VFoddPm5Tjm2F0OpQ_N1dtSqT52tdfzeflQ49-6dr4W2VN"/>
</div>
<h1 className="text-3xl font-black text-[#E70000] italic dark:text-[#E70000] font-['Lexend'] tracking-tighter uppercase">KINETIC</h1>
</div>
<button className="text-[#353534] hover:bg-[#353534] transition-colors duration-150 active:scale-95 duration-75 p-2">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="pb-24 pt-4 px-4 md:px-8 max-w-6xl mx-auto">
{/*  Video Canvas Section  */}
<section className="mb-8 relative bg-surface-container-lowest overflow-hidden group">
<div className="aspect-video w-full bg-black relative">
<img alt="training video frame" className="w-full h-full object-cover opacity-80" data-alt="wide shot of two jiu-jitsu practitioners grappling on dark mats in a high-intensity training facility with industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2p2kMIJMqWIVj2G2Jj_q4Kj_4hM1cHltVw1j2olygKhlIs1lShgDjhL23dALRqRzwGdByHtwXZ571X4_lg3VlVZj0ysOvwSu9A_W1Omr3KqIo4hulH5PZSU2BKl7kAtOx0beJMdZQWElvoly5FGHYtcUAMMQupyhYxo3ToLNrPFj7_sqMiTSUajhjJr27do2dh_WEqh4WWT_T7t2IGvv8TjXA6Epd5hTB9n8SJXj91T_ExI8W5sMU5PkHjhJRGaWC3qnfGVsG8DB"/>
{/*  Overlay Gradient for UI Legibility  */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
{/*  Play Center Button  */}
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-primary-container text-on-primary-container p-6 active:scale-90 transition-transform shadow-[0_0_40px_rgba(231,0,0,0.3)]">
<span className="material-symbols-outlined !text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</button>
</div>
{/*  Custom Scrubber / Timeline  */}
<div className="absolute bottom-0 left-0 w-full p-4 space-y-2">
<div className="flex justify-between text-[10px] font-bold tracking-widest text-on-surface/60 uppercase">
<span>04:10</span>
<span>12:45</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest/50 relative">
<div className="absolute top-0 left-0 h-full bg-primary-container w-[35%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-on-primary-container shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
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
<span className="text-[10px] font-bold text-primary-container tracking-[0.3em] uppercase">SENSEI ANALYSIS</span>
<h2 className="text-4xl font-black font-headline tracking-tighter uppercase leading-none mt-1">MOMENTOS CRÍTICOS</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="bg-surface-container-high px-4 py-2 text-xs font-bold hover:bg-surface-container-highest transition-colors uppercase tracking-widest">FILTRAR</button>
<button className="bg-primary-container px-4 py-2 text-xs font-bold text-on-primary-container hover:brightness-110 transition-all uppercase tracking-widest">ADICIONAR NOTA</button>
</div>
</div>
{/*  Markers Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Moment Card 1: Queda  */}
<button className="group relative flex flex-col text-left bg-surface-container-low border-l-4 border-transparent hover:border-primary-container hover:bg-surface-container-high transition-all duration-200">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary-container !text-3xl" data-icon="trending_down">trending_down</span>
<span className="font-headline font-bold text-xl text-primary-container tracking-tighter">02:15</span>
</div>
<h3 className="text-lg font-bold font-headline leading-tight mb-2 uppercase">Queda Sofrida</h3>
<p className="text-sm text-tertiary-fixed-dim leading-relaxed">Ponto de desequilíbrio detectado. Transição rápida para a guarda.</p>
</div>
<div className="mt-auto bg-surface-container-highest/30 px-6 py-3 flex items-center gap-2 opacity-60 group-hover:opacity-100">
<span className="material-symbols-outlined text-[16px]" data-icon="play_circle">play_circle</span>
<span className="text-[10px] font-bold tracking-widest uppercase">REVER MOMENTO</span>
</div>
</button>
{/*  Moment Card 2: Active / Guarda  */}
<button className="group relative flex flex-col text-left bg-surface-container-highest border-l-4 border-primary-container shadow-[20px_0_40px_rgba(0,0,0,0.3)] z-10">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary-container !text-3xl" data-icon="shield" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
<span className="font-headline font-bold text-xl text-primary-container tracking-tighter">04:10</span>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="text-[10px] font-black text-primary-container tracking-widest uppercase">PONTO ATUAL</span>
</div>
<h3 className="text-lg font-bold font-headline leading-tight mb-2 uppercase">Guarda Passada</h3>
<p className="text-sm text-on-surface leading-relaxed font-semibold">Falha na reposição de quadril. Oponente progrediu para os 100kg.</p>
</div>
<div className="mt-auto bg-primary-container px-6 py-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-on-primary-container" data-icon="pause_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>pause_circle</span>
<span className="text-[10px] font-bold tracking-widest uppercase text-on-primary-container">ASSISTINDO AGORA</span>
</div>
</button>
{/*  Moment Card 3: Triângulo  */}
<button className="group relative flex flex-col text-left bg-surface-container-low border-l-4 border-transparent hover:border-primary-container hover:bg-surface-container-high transition-all duration-200">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary-container !text-3xl" data-icon="change_history">change_history</span>
<span className="font-headline font-bold text-xl text-primary-container tracking-tighter">05:30</span>
</div>
<h3 className="text-lg font-bold font-headline leading-tight mb-2 uppercase">Tentativa de Triângulo</h3>
<p className="text-sm text-tertiary-fixed-dim leading-relaxed">Abertura estratégica identificada. Finalização quase encaixada.</p>
</div>
<div className="mt-auto bg-surface-container-highest/30 px-6 py-3 flex items-center gap-2 opacity-60 group-hover:opacity-100">
<span className="material-symbols-outlined text-[16px]" data-icon="play_circle">play_circle</span>
<span className="text-[10px] font-bold tracking-widest uppercase">REVER MOMENTO</span>
</div>
</button>
</div>
{/*  Telemetry Data Strip  */}
<div className="mt-8 bg-surface-container-low p-6 flex flex-wrap gap-8 justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.2em] uppercase">INTENSIDADE MÉDIA</span>
<span className="text-3xl font-black font-headline text-on-surface uppercase">84%</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.2em] uppercase">CALORIAS</span>
<span className="text-3xl font-black font-headline text-on-surface uppercase">642 <span className="text-sm font-normal text-tertiary-fixed-dim uppercase tracking-tighter">kcal</span></span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.2em] uppercase">ZONA CARDÍACA</span>
<span className="text-3xl font-black font-headline text-primary-container uppercase">PICO</span>
</div>
<div className="flex flex-col min-w-[120px]">
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.2em] uppercase">PROGRESSO SESSÃO</span>
<div className="h-2 w-full bg-surface-container-highest mt-3 overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-[45%]"></div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch overflow-hidden bg-[#353534]/80 backdrop-blur-xl dark:bg-[#353534]/80 z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)] border-none">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full w-full active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="moving" style={{ /* font-variation-settings: 'FILL' 1; */ }}>moving</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">SENSEI IA</span>
</a>
</nav>

    </>
  );
}
