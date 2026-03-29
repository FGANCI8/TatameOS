import React from 'react';

export default function PlayerDeReplayDaLuta() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#1C1B1B] docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Intense close-up of a professional athlete's eyes with beads of sweat, dramatic high-contrast lighting in a dark gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcuHjwBMRDsPEhZLUUJk5XmfMVnPUqf1fZx2t9X3gDF2i2Xaj3gU6WgSP___hIDSTO7ijgsLUsr7ZTemu6Ey8PNb73PaHbnEl8fCybL3zDrIMc7ZlC7zm_BLhty4D7emiTMLoxRq6K6-kOllTrzzAUSrASEDQ_-TNOi4VL8IAmhTo4l_G31gl_HlNen3YQQiSSiYdAMh0QdB1oPnhP4h6ty-m7Xa01PUQjsJkgRAc1ZIbcJHvrZNl6L1GRz07Ai5MH7Uy7M8GFV4oY"/>
</div>
<h1 className="font-headline font-black tracking-tighter uppercase text-3xl italic text-[#E70000]">KINETIC</h1>
</div>
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer hover:bg-[#353534] transition-colors duration-150 p-2">settings</span>
</div>
</header>
<main className="pb-24 lg:pb-0">
{/*  Video Player Section  */}
<section className="relative w-full aspect-video bg-black group">
<img className="w-full h-full object-cover opacity-80" data-alt="Wide shot of two MMA fighters in a cage, one delivering a mid-kick, high-speed photography, cinematic lighting with atmospheric dust" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8ENgBhTD6aN6MSnPI-evP3THZv_FB6r4CfxdZUww-HUvETRWarDriDSMo6AeIKtNUe-z-qfj6fzqfUjd7qV3_txZ8uWGWPDF1bw7rF_C7b5vAd6-o_4bMKJNaw3ZAvw57ofP63dil13pqbKa5ctI8p2lt1qpnXQUpDi6KwmSuhBUgCFCOcJqZPFI1OPAkcRCiJsduSEXJNBAwFgW_YpVBh2d-FpQnV1-a34s2ps8-lJyyDDw9tl9X5kES3OgWZ6Mqmz_aGg9PJ-h"/>
{/*  Video Overlay UI  */}
<div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-black/40">
<div className="flex justify-between items-start">
<div className="bg-primary-container/20 backdrop-blur-md px-4 py-2 border-l-4 border-primary-container">
<p className="text-[10px] font-bold tracking-[0.2em] text-primary-container">REPLAY MODE</p>
<h2 className="font-headline text-xl font-black uppercase">CHAMPIONSHIP FINALS: ROUND 3</h2>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2 bg-surface-container-highest/60 px-3 py-1">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-mono text-sm font-bold">04:12 / 05:00</span>
</div>
<span className="text-[10px] font-bold text-tertiary">ULTRA HD 4K</span>
</div>
</div>
{/*  Center Play Focus  */}
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-20 h-20 bg-primary-container flex items-center justify-center text-on-primary-container hover:scale-110 active:scale-95 transition-all">
<span className="material-symbols-outlined text-5xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</button>
</div>
{/*  Bottom Controls Quick Bar  */}
<div className="flex items-end justify-between">
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-bold tracking-widest text-tertiary">P1 SCORE</span>
<span className="font-headline text-2xl font-black italic">28</span>
</div>
<div className="w-px h-10 bg-surface-container-highest"></div>
<div className="flex flex-col">
<span className="text-[10px] font-bold tracking-widest text-tertiary text-right">P2 SCORE</span>
<span className="font-headline text-2xl font-black italic text-right">24</span>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-white/10 transition-colors"><span className="material-symbols-outlined">fullscreen</span></button>
<button className="p-2 hover:bg-white/10 transition-colors"><span className="material-symbols-outlined">volume_up</span></button>
</div>
</div>
</div>
</section>
{/*  Timeline & Precision Controls  */}
<section className="bg-surface-container-low p-6 space-y-8">
{/*  Timeline Visual  */}
<div className="relative pt-4">
<div className="h-2 w-full bg-surface-container-highest relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[84%] bg-gradient-to-r from-primary-container to-inverse-primary"></div>
{/*  Interaction zones  */}
<div className="absolute top-0 left-[20%] w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"></div>
<div className="absolute top-0 left-[45%] w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"></div>
<div className="absolute top-0 left-[78%] w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"></div>
</div>
{/*  Marker Labels  */}
<div className="mt-2 flex justify-between font-mono text-[10px] text-tertiary-fixed-dim">
<span>00:00</span>
<span className="text-on-surface">ROUND START</span>
<span className="text-on-surface">KNOCKDOWN</span>
<span className="text-on-surface">CRITICAL HIT</span>
<span>05:00</span>
</div>
</div>
{/*  Precision Playback Controls  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
{/*  Left: Speeds  */}
<div className="flex items-center gap-2">
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter border border-outline-variant hover:bg-primary-container hover:text-white transition-all">0.5X</button>
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter bg-surface-container-highest text-on-surface">1.0X</button>
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter border border-outline-variant hover:bg-primary-container hover:text-white transition-all">1.5X</button>
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter border border-outline-variant hover:bg-primary-container hover:text-white transition-all">2.0X</button>
</div>
{/*  Center: Main Transport  */}
<div className="flex justify-center items-center gap-8">
<button className="text-tertiary hover:text-on-surface active:scale-90 transition-all">
<span className="material-symbols-outlined text-4xl">replay_10</span>
</button>
<button className="w-16 h-16 bg-on-surface text-surface flex items-center justify-center active:scale-95 transition-all">
<span className="material-symbols-outlined text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>pause</span>
</button>
<button className="text-tertiary hover:text-on-surface active:scale-90 transition-all">
<span className="material-symbols-outlined text-4xl">forward_10</span>
</button>
</div>
{/*  Right: Analysis Toggles  */}
<div className="flex justify-end gap-4">
<button className="flex items-center gap-2 bg-surface-container-high px-4 py-2 text-[10px] font-bold uppercase tracking-widest border-b-2 border-primary-container">
<span className="material-symbols-outlined text-sm">analytics</span> SENSEI AI
                    </button>
<button className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">layers</span> OVERLAY
                    </button>
</div>
</div>
</section>
{/*  Stats Grid (Bento Style)  */}
<section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-1">
<div className="bg-surface-container p-6 border-l-2 border-primary-container">
<p className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.3em] uppercase mb-2">Total Strikes</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl font-black">142</span>
<span className="text-primary-container font-black text-sm">▲ 12%</span>
</div>
</div>
<div className="bg-surface-container p-6">
<p className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.3em] uppercase mb-2">Intensity Score</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl font-black">9.4</span>
<span className="text-tertiary-fixed-dim text-xs font-mono">PEAK</span>
</div>
</div>
<div className="bg-surface-container p-6">
<p className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.3em] uppercase mb-2">Heart Rate Avg</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl font-black">176</span>
<span className="text-tertiary-fixed-dim text-xs font-mono">BPM</span>
</div>
</div>
<div className="bg-surface-container p-6">
<p className="text-[10px] font-bold text-tertiary-fixed-dim tracking-[0.3em] uppercase mb-2">Energy Level</p>
<div className="w-full bg-surface-container-highest h-1 mt-4 relative">
<div className="absolute top-0 left-0 h-full w-[65%] bg-primary-container"></div>
</div>
<p className="mt-2 font-mono text-xs text-right">65.8%</p>
</div>
</section>
{/*  Key Moments Feed  */}
<section className="p-6">
<h3 className="font-headline text-xl font-black uppercase mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-primary-container"></span>
                Key Analysis Moments
            </h3>
<div className="space-y-4">
<div className="flex items-center gap-6 bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="font-headline text-2xl font-black text-outline-variant group-hover:text-primary-container transition-colors italic">01:24</div>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Counter-Punch Sequence</h4>
<p className="text-xs text-tertiary-fixed-dim">Perfect lateral movement leading into a 3-strike combo.</p>
</div>
<div className="text-right">
<span className="text-[10px] font-black bg-surface-container-highest px-2 py-1 text-on-surface">HIGH IMPACT</span>
</div>
</div>
<div className="flex items-center gap-6 bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors group cursor-pointer border-l-4 border-primary-container">
<div className="font-headline text-2xl font-black text-primary-container italic">03:45</div>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Takedown Defense</h4>
<p className="text-xs text-tertiary-fixed-dim">Sprawl efficiency at 98%. Neutralized heavy grapple attempt.</p>
</div>
<div className="text-right">
<span className="text-[10px] font-black bg-primary-container px-2 py-1 text-white">ELITE SKILL</span>
</div>
</div>
<div className="flex items-center gap-6 bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="font-headline text-2xl font-black text-outline-variant group-hover:text-primary-container transition-colors italic">04:52</div>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Final Exchange</h4>
<p className="text-xs text-tertiary-fixed-dim">High energy output in the closing seconds of the round.</p>
</div>
<div className="text-right">
<span className="text-[10px] font-black bg-surface-container-highest px-2 py-1 text-on-surface">CLUTCH</span>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch overflow-hidden bg-[#353534]/80 backdrop-blur-xl z-50 md:hidden">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full w-full brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="bookmarks" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bookmarks</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">SENSEI IA</span>
</a>
</nav>

    </>
  );
}
