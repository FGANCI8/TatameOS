export default function PlayerDeReplayDaLuta() {
  return (
    <>
<main className="pb-24 lg:pb-0">
{/*  Video Player Section  */}
<section className="relative w-full aspect-video bg-black group">
<img className="w-full h-full object-cover opacity-80" data-alt="Wide shot of two MMA fighters in a cage, one delivering a mid-kick, high-speed photography, cinematic lighting with atmospheric dust" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8ENgBhTD6aN6MSnPI-evP3THZv_FB6r4CfxdZUww-HUvETRWarDriDSMo6AeIKtNUe-z-qfj6fzqfUjd7qV3_txZ8uWGWPDF1bw7rF_C7b5vAd6-o_4bMKJNaw3ZAvw57ofP63dil13pqbKa5ctI8p2lt1qpnXQUpDi6KwmSuhBUgCFCOcJqZPFI1OPAkcRCiJsduSEXJNBAwFgW_YpVBh2d-FpQnV1-a34s2ps8-lJyyDDw9tl9X5kES3OgWZ6Mqmz_aGg9PJ-h"/>
{/*  Video Overlay UI  */}
<div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-black/40">
<div className="flex justify-between items-start">
<div className="bg-brand-red/20 backdrop-blur-md px-4 py-2 border-l-4 border-brand-red/20">
<p className="text-[10px] font-bold tracking-[0.2em] text-brand-red">REPLAY MODE</p>
<h2 className="font-headline text-xl font-black uppercase">CHAMPIONSHIP FINALS: ROUND 3</h2>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2 bg-zinc-800/80/60 px-3 py-1">
<span className="w-2 h-2 rounded-full bg-brand-red/10 animate-pulse"></span>
<span className="font-mono text-sm font-bold">04:12 / 05:00</span>
</div>
<span className="text-[10px] font-bold text-zinc-400">ULTRA HD 4K</span>
</div>
</div>
{/*  Center Play Focus  */}
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-20 h-20 bg-brand-red/10 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all">
<span className="material-symbols-outlined text-5xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</button>
</div>
{/*  Bottom Controls Quick Bar  */}
<div className="flex items-end justify-between">
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-bold tracking-widest text-zinc-400">P1 SCORE</span>
<span className="font-headline text-2xl font-black italic">28</span>
</div>
<div className="w-px h-10 bg-zinc-800/80"></div>
<div className="flex flex-col">
<span className="text-[10px] font-bold tracking-widest text-zinc-400 text-right">P2 SCORE</span>
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
<section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-8">
{/*  Timeline Visual  */}
<div className="relative pt-4">
<div className="h-2 w-full bg-zinc-800/80 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[84%] bg-gradient-to-r from-brand-red to-brand-red"></div>
{/*  Interaction zones  */}
<div className="absolute top-0 left-[20%] w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"></div>
<div className="absolute top-0 left-[45%] w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"></div>
<div className="absolute top-0 left-[78%] w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"></div>
</div>
{/*  Marker Labels  */}
<div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-500">
<span>00:00</span>
<span className="text-zinc-100">ROUND START</span>
<span className="text-zinc-100">KNOCKDOWN</span>
<span className="text-zinc-100">CRITICAL HIT</span>
<span>05:00</span>
</div>
</div>
{/*  Precision Playback Controls  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
{/*  Left: Speeds  */}
<div className="flex items-center gap-2">
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter border border-zinc-800 hover:bg-brand-red/10 hover:text-white transition-all">0.5X</button>
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter bg-zinc-800/80 text-zinc-100">1.0X</button>
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter border border-zinc-800 hover:bg-brand-red/10 hover:text-white transition-all">1.5X</button>
<button className="flex-1 py-2 text-[10px] font-black tracking-tighter border border-zinc-800 hover:bg-brand-red/10 hover:text-white transition-all">2.0X</button>
</div>
{/*  Center: Main Transport  */}
<div className="flex justify-center items-center gap-8">
<button className="text-zinc-400 hover:text-zinc-100 active:scale-90 transition-all">
<span className="material-symbols-outlined text-4xl">replay_10</span>
</button>
<button className="w-16 h-16 bg-zinc-100 text-surface flex items-center justify-center active:scale-95 transition-all">
<span className="material-symbols-outlined text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>pause</span>
</button>
<button className="text-zinc-400 hover:text-zinc-100 active:scale-90 transition-all">
<span className="material-symbols-outlined text-4xl">forward_10</span>
</button>
</div>
{/*  Right: Analysis Toggles  */}
<div className="flex justify-end gap-4">
<button className="flex items-center gap-2 bg-zinc-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-red/20">
<span className="material-symbols-outlined text-sm">analytics</span> ASSISTENTE IA
                    </button>
<button className="flex items-center gap-2 bg-zinc-800/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">layers</span> OVERLAY
                    </button>
</div>
</div>
</section>
{/*  Stats Grid (Bento Style)  */}
<section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-1">
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-2 border-brand-red/20">
<p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase mb-2">Total Strikes</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl font-black">142</span>
<span className="text-brand-red font-black text-sm">▲ 12%</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
<p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase mb-2">Intensity Score</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl font-black">9.4</span>
<span className="text-zinc-500 text-xs font-mono">PEAK</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
<p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase mb-2">Heart Rate Avg</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl font-black">176</span>
<span className="text-zinc-500 text-xs font-mono">BPM</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
<p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase mb-2">Energy Level</p>
<div className="w-full bg-zinc-800/80 h-1 mt-4 relative">
<div className="absolute top-0 left-0 h-full w-[65%] bg-brand-red/10"></div>
</div>
<p className="mt-2 font-mono text-xs text-right">65.8%</p>
</div>
</section>
{/*  Key Moments Feed  */}
<section className="p-6">
<h3 className="font-headline text-xl font-black uppercase mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-brand-red/10"></span>
                Key Analysis Moments
            </h3>
<div className="space-y-4">
<div className="flex items-center gap-6 bg-zinc-950/60 p-4 hover:bg-zinc-900 transition-colors group cursor-pointer">
<div className="font-headline text-2xl font-black text-zinc-600 group-hover:text-brand-red transition-colors italic">01:24</div>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Counter-Punch Sequence</h4>
<p className="text-xs text-zinc-500">Perfect lateral movement leading into a 3-strike combo.</p>
</div>
<div className="text-right">
<span className="text-[10px] font-black bg-zinc-800/80 px-2 py-1 text-zinc-100">HIGH IMPACT</span>
</div>
</div>
<div className="flex items-center gap-6 bg-zinc-950/60 p-4 hover:bg-zinc-900 transition-colors group cursor-pointer border-l-4 border-brand-red/20">
<div className="font-headline text-2xl font-black text-brand-red italic">03:45</div>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Takedown Defense</h4>
<p className="text-xs text-zinc-500">Sprawl efficiency at 98%. Neutralized heavy grapple attempt.</p>
</div>
<div className="text-right">
<span className="text-[10px] font-black bg-brand-red/10 px-2 py-1 text-white">ELITE SKILL</span>
</div>
</div>
<div className="flex items-center gap-6 bg-zinc-950/60 p-4 hover:bg-zinc-900 transition-colors group cursor-pointer">
<div className="font-headline text-2xl font-black text-zinc-600 group-hover:text-brand-red transition-colors italic">04:52</div>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Final Exchange</h4>
<p className="text-xs text-zinc-500">High energy output in the closing seconds of the round.</p>
</div>
<div className="text-right">
<span className="text-[10px] font-black bg-zinc-800/80 px-2 py-1 text-zinc-100">CLUTCH</span>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}



