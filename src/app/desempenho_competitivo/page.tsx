import React from 'react';

export default function DesempenhoCompetitivo() {
  return (
    <>
      
{/*  TopAppBar  */}
<nav className="flex justify-between items-center px-6 py-4 w-full bg-[#131313] sticky top-0 z-50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#E70000] text-2xl" data-icon="sports_martial_arts">sports_martial_arts</span>
<span className="text-2xl font-black italic text-[#E70000] tracking-widest font-['Lexend'] uppercase">WARRIOR ANALYTICS</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-[#353534] font-['Lexend'] font-black uppercase tracking-tighter hover:text-white transition-colors" href="#">HISTORY</a>
<a className="text-[#353534] font-['Lexend'] font-black uppercase tracking-tighter hover:text-white transition-colors" href="#">FIGHTS</a>
<a className="text-[#E70000] font-['Lexend'] font-black uppercase tracking-tighter transition-colors" href="#">PERFORMANCE</a>
<a className="text-[#353534] font-['Lexend'] font-black uppercase tracking-tighter hover:text-white transition-colors" href="#">ERRORS</a>
<a className="text-[#353534] font-['Lexend'] font-black uppercase tracking-tighter hover:text-white transition-colors" href="#">MEDALS</a>
</div>
<button className="material-symbols-outlined text-on-surface" data-icon="account_circle">account_circle</button>
</nav>
<div className="bg-[#1C1B1B] h-[2px] w-full"></div>
<main className="max-w-7xl mx-auto px-6 py-12 mb-24">
{/*  Hero Metrics  */}
<header className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
<div>
<span className="text-primary-container font-label text-xs font-bold tracking-[0.3em] uppercase mb-2 block">ELITE PERFORMANCE LAB</span>
<h1 className="font-headline text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter italic">BATTLE<br/><span className="text-on-surface/20">METRICS</span></h1>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-6 border-l-4 border-primary-container">
<span className="block font-label text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-1">WIN RATE</span>
<span className="block font-headline text-5xl font-black text-on-surface">74<span className="text-2xl text-primary-container">%</span></span>
</div>
<div className="bg-surface-container-low p-6 border-l-4 border-surface-container-highest">
<span className="block font-label text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-1">TOTAL FIGHTS</span>
<span className="block font-headline text-5xl font-black text-on-surface">142</span>
</div>
</div>
</header>
{/*  Bento Grid Analysis  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Win/Loss Distribution  */}
<section className="md:col-span-8 bg-surface-container-low p-8 relative overflow-hidden">
<div className="flex justify-between items-start mb-12">
<div>
<h2 className="font-headline text-2xl font-black uppercase italic tracking-tight mb-1">Outcome Distribution</h2>
<p className="text-tertiary text-xs uppercase tracking-widest">Seasonal performance overview</p>
</div>
<span className="material-symbols-outlined text-primary-container" data-icon="monitoring">monitoring</span>
</div>
<div className="flex h-64 items-end gap-3">
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="bg-primary-container w-full h-[85%] group-hover:brightness-125 transition-all"></div>
<span className="text-[10px] font-bold text-center text-tertiary">SUB</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="bg-primary-container/60 w-full h-[60%] group-hover:brightness-125 transition-all"></div>
<span className="text-[10px] font-bold text-center text-tertiary">PTS</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="bg-primary-container/30 w-full h-[15%] group-hover:brightness-125 transition-all"></div>
<span className="text-[10px] font-bold text-center text-tertiary">DEC</span>
</div>
<div className="w-8"></div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="bg-surface-container-highest w-full h-[40%] group-hover:bg-error transition-all"></div>
<span className="text-[10px] font-bold text-center text-tertiary">L-SUB</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="bg-surface-container-highest w-full h-[25%] group-hover:bg-error transition-all"></div>
<span className="text-[10px] font-bold text-center text-tertiary">L-PTS</span>
</div>
</div>
</section>
{/*  Combat Radar (Conceptual)  */}
<section className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between">
<div>
<h2 className="font-headline text-2xl font-black uppercase italic tracking-tight mb-6 text-on-primary-container">Aptitude Profile</h2>
<div className="aspect-square relative flex items-center justify-center border border-on-surface/5">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-full border border-on-surface/10 rounded-full scale-75"></div>
<div className="absolute w-full h-full border border-on-surface/10 rounded-full scale-50"></div>
<div className="absolute w-full h-full border border-on-surface/10 rounded-full scale-25"></div>
</div>
{/*  Sharp Asymmetric Radar Polygon Shape  */}
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(231,0,0,0.3)]" viewbox="0 0 100 100">
<polygon fill="rgba(231,0,0,0.2)" points="50,10 85,35 75,80 25,80 15,35" stroke="#e70000" stroke-width="2"></polygon>
</svg>
<div className="absolute top-2 font-label text-[10px] font-black text-white">TAKEDOWNS</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 font-label text-[10px] font-black text-white">PASSING</div>
<div className="absolute bottom-2 font-label text-[10px] font-black text-white">DEFENSE</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 font-label text-[10px] font-black text-white">GUARD</div>
</div>
</div>
<div className="mt-8">
<p className="text-[10px] text-tertiary uppercase leading-relaxed">System identifies <span className="text-white font-bold">GUARD PASSING</span> as primary tactical advantage (+18% efficiency).</p>
</div>
</section>
{/*  Submission Analytics  */}
<section className="md:col-span-5 bg-surface-container p-8">
<h2 className="font-headline text-2xl font-black uppercase italic tracking-tight mb-8">Submission Tech</h2>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] font-bold text-tertiary uppercase mb-2">
<span>Rear Naked Choke</span>
<span>42%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full kinetic-gradient" style={{ /* width: 42% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold text-tertiary uppercase mb-2">
<span>Armbar</span>
<span>28%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full kinetic-gradient" style={{ /* width: 28% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold text-tertiary uppercase mb-2">
<span>Triangle</span>
<span>15%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full kinetic-gradient" style={{ /* width: 15% */ }}></div>
</div>
</div>
</div>
</section>
{/*  Vulnerability Check  */}
<section className="md:col-span-7 bg-surface-container-lowest p-8 border border-outline-variant/20">
<div className="flex gap-4 mb-8">
<div className="bg-error-container p-3">
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
</div>
<div>
<h2 className="font-headline text-2xl font-black uppercase italic tracking-tight">Vulnerabilities</h2>
<p className="text-tertiary text-xs uppercase tracking-widest">CRITICAL EXPOSURE DETECTED</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-surface-container-high p-4">
<span className="block text-[10px] font-black text-error uppercase mb-4 tracking-tighter">Leg Lock Exposure</span>
<div className="flex items-center gap-4">
<div className="flex-1 h-8 bg-surface-container-highest relative">
<div className="absolute inset-y-0 left-0 bg-error/40" style={{ /* width: 65% */ }}></div>
</div>
<span className="font-headline text-xl font-black italic">HIGH</span>
</div>
</div>
<div className="bg-surface-container-high p-4">
<span className="block text-[10px] font-black text-error uppercase mb-4 tracking-tighter">Gas Tank (R3)</span>
<div className="flex items-center gap-4">
<div className="flex-1 h-8 bg-surface-container-highest relative">
<div className="absolute inset-y-0 left-0 bg-error/40" style={{ /* width: 30% */ }}></div>
</div>
<span className="font-headline text-xl font-black italic">MOD</span>
</div>
</div>
</div>
</section>
{/*  Actionable Performance Shimmer  */}
<section className="md:col-span-12 bg-surface-container-low p-1 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 data-shimmer opacity-10"></div>
<div className="bg-background p-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-6">
<div className="text-6xl font-headline font-black italic text-on-surface/10 leading-none">01</div>
<div>
<h3 className="font-headline text-xl font-black uppercase italic text-primary-container">Next Objective: Scramble Efficiency</h3>
<p className="text-tertiary text-sm max-w-md">The telemetry suggests a 12% drop in position retention during high-speed scrambles. Drill "Hip Heist" sequences for 20 mins daily.</p>
</div>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black uppercase italic tracking-widest active:scale-95 transition-transform">
                        START TRAINING
                    </button>
</div>
</section>
</div>
{/*  Secondary Visual Anchor (Image)  */}
<div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative group">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary-container"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-right-4 border-surface-container-highest"></div>
<img alt="MMA combat analysis" className="w-full grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700" data-alt="dramatic close-up of a high-intensity martial arts training session in a dark gym with harsh spotlighting and deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5zXgGFUga3PgJX4AuForHSKqF3lhEwIs7mQAvX79q5xoWG2AvuwKB2gW792z1V9bKBJt6OHuMVsGs06XhI6o_gzP35_K7LM2WSTj61VzHHduMfLu98TopTp8xX3Y7uCRrNFWT_eNuZB_qrlIi7dVmXHnaJYzRO6TLr-Y59LFEwlWJQ3HFst_9Y51kp2Psftn0AtANro5aroKAgxMinGFg7WnXhwvUbUjyCLsHJakSfnPkPvm3-zT_iEyn0FdIQAegGQcpXxC6_csc"/>
</div>
<div>
<span className="text-primary-container font-label text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">NEURAL ENGINE FEEDBACK</span>
<h2 className="font-headline text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-none">KINETIC<br/>MONOLITHISM</h2>
<p className="text-tertiary leading-relaxed mb-8">
                    Your performance profile indicates a shift toward a grinding, pressure-heavy style. To reach the next tier, we recommend integrating higher amplitude takedowns to force scrambles where your technical superiority is most evident.
                </p>
<div className="flex gap-4">
<div className="w-12 h-[2px] bg-primary-container mt-3"></div>
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface">Data points synced: 12,400+</span>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-4 bg-[#353534]/80 backdrop-blur-md z-50 shadow-[0_-4px_20px_rgba(189,194,255,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">HISTORY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60" href="#">
<span className="material-symbols-outlined" data-icon="sports_kabaddi">sports_kabaddi</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">FIGHTS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="insights" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">PERFORMANCE</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60" href="#">
<span className="material-symbols-outlined" data-icon="error_outline">error_outline</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">ERRORS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60" href="#">
<span className="material-symbols-outlined" data-icon="military_tech">military_tech</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">MEDALS</span>
</a>
</nav>

    </>
  );
}
