import React from 'react';

export default function EvoluOCompetitiva() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex justify-between items-center px-6 py-4 w-full bg-[#131313] fixed top-0 z-50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#E70000] text-2xl" data-icon="sports_martial_arts">sports_martial_arts</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000] tracking-widest">WARRIOR ANALYTICS</h1>
</div>
<div className="hidden md:flex gap-8">
<a className="font-['Lexend'] text-xs font-bold uppercase tracking-widest text-[#353534] hover:text-white transition-all" href="#">HISTORY</a>
<a className="font-['Lexend'] text-xs font-bold uppercase tracking-widest text-[#E70000] transition-all" href="#">FIGHTS</a>
<a className="font-['Lexend'] text-xs font-bold uppercase tracking-widest text-[#353534] hover:text-white transition-all" href="#">PERFORMANCE</a>
<a className="font-['Lexend'] text-xs font-bold uppercase tracking-widest text-[#353534] hover:text-white transition-all" href="#">MEDALS</a>
</div>
</header>
<div className="bg-[#1C1B1B] h-[2px] w-full fixed top-[64px] z-50"></div>
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
{/*  Hero Section: Performance Header  */}
<section className="mb-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-primary-container pl-6">
<div>
<p className="font-label text-xs font-black uppercase tracking-[0.3em] text-tertiary mb-2">COMPETITIVE EVOLUTION</p>
<h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">THE KINETIC<br/><span className="text-primary-container">MONOLITH</span></h2>
</div>
<div className="flex gap-12">
<div className="flex flex-col">
<span className="font-headline text-4xl font-black italic">84%</span>
<span className="font-label text-[10px] font-bold uppercase text-tertiary-fixed-dim">CONSISTENCY SCORE</span>
</div>
<div className="flex flex-col">
<span className="font-headline text-4xl font-black italic text-primary-container">+12</span>
<span className="font-label text-[10px] font-bold uppercase text-tertiary-fixed-dim">TECHNICAL PEAK</span>
</div>
</div>
</div>
</section>
{/*  Dynamic Timeline Grid  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-surface-container-low p-1">
{/*  Timeline Sidebar (Year/Stage)  */}
<div className="lg:col-span-1 flex lg:flex-col justify-around py-8 bg-surface-container-highest border-r-0 lg:border-r border-background">
<span className="font-headline text-xl font-black text-primary-container transform lg:-rotate-90">2024</span>
<span className="font-headline text-xl font-black text-tertiary-fixed-dim transform lg:-rotate-90 opacity-40">2023</span>
<span className="font-headline text-xl font-black text-tertiary-fixed-dim transform lg:-rotate-90 opacity-20">2022</span>
</div>
{/*  Main Timeline Content  */}
<div className="lg:col-span-11 space-y-1">
{/*  Timeline Node 01: The Breakthrough  */}
<div className="grid grid-cols-1 md:grid-cols-4 bg-surface-container gap-1 p-1">
<div className="md:col-span-1 relative min-h-[300px] overflow-hidden group">
<img alt="MMA Fighter" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" data-alt="Intense close-up of a martial artist with sweat on skin, dramatic low-key lighting with sharp shadows in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-l8HWsZ71e1lB31CS0DCbqZAIXZGS4VW6mFUeLskkXNpQMc-CH3kc5KCbDato3Mz4aXMgjOOwHH4qLkGYgCd5Xs8sCbujqGCZoq77ypTmpiNIWJ-ams2vtRfi7zGrXAeTg8nDOm6I2Q8TpS1ujELf2o3GgWvrAKNG8xN9FP0xBgVKfQ8WtTLYLWVGrocp6zxVED6R9dSTMKaNw2Cr7elpJbMCdELAJHwQKmAqbp9R0DpXoAUpZOLOYepkiPs3UEneSEy6KxcC3lbU"/>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="bg-primary-container text-on-primary-container text-[10px] font-black px-2 py-1 uppercase italic">CURRENT PEAK</span>
<p className="font-headline text-2xl font-black mt-1">NATIONAL OPEN</p>
</div>
</div>
<div className="md:col-span-2 bg-surface-container-high p-8 flex flex-col justify-between">
<div>
<h3 className="font-headline text-sm font-black text-primary-container tracking-widest uppercase mb-4">TECHNICAL EVOLUTION</h3>
<p className="font-body text-lg leading-relaxed text-on-surface mb-6">Transitioned from defensive striking to a high-pressure grappling integration. Increased submission accuracy by 22% through refined hip control and kinetic chain alignment.</p>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-outline-variant/20 pt-6">
<div>
<p className="font-label text-[10px] font-black text-tertiary uppercase">PRECISION</p>
<p className="font-headline text-xl font-black">9.4</p>
</div>
<div>
<p className="font-label text-[10px] font-black text-tertiary uppercase">STAMINA</p>
<p className="font-headline text-xl font-black">HIGH</p>
</div>
<div>
<p className="font-label text-[10px] font-black text-tertiary uppercase">RANK</p>
<p className="font-headline text-xl font-black text-primary-container">#1</p>
</div>
</div>
</div>
<div className="md:col-span-1 bg-surface-container-highest p-6 flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-5xl text-primary-container mb-4" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<p className="font-headline text-3xl font-black italic uppercase leading-none mb-1">GOLD<br/>MEDAL</p>
<p className="font-label text-[10px] tracking-widest text-tertiary uppercase">PRO DIVISION</p>
</div>
</div>
{/*  Timeline Node 02: Consistency Growth  */}
<div className="grid grid-cols-1 md:grid-cols-4 bg-surface-container gap-1 p-1">
<div className="md:col-span-1 bg-surface-container-highest p-6 flex flex-col justify-between border-l-8 border-secondary">
<p className="font-headline text-4xl font-black text-secondary/30 italic">02</p>
<div>
<p className="font-label text-[10px] font-black text-secondary uppercase tracking-widest mb-1">PHASE: REFINEMENT</p>
<p className="font-headline text-lg font-black uppercase">REGIONAL FINALS</p>
</div>
</div>
<div className="md:col-span-3 bg-surface-container-high p-8">
<div className="flex justify-between items-start mb-8">
<div className="max-w-md">
<h3 className="font-headline text-sm font-black text-secondary tracking-widest uppercase mb-2">PATTERN RECOGNITION</h3>
<p className="font-body text-sm text-tertiary italic">Identification of counter-striking gaps. Implementation of the 'monolith' defensive stance.</p>
</div>
<div className="text-right">
<span className="font-headline text-xs font-black uppercase tracking-tighter opacity-50">OCT 2023</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="relative w-full h-12 bg-surface-container-lowest overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-on-secondary-container w-3/4 flex items-center px-4">
<span className="font-label text-[10px] font-black text-on-secondary uppercase tracking-widest">STABILITY REACHED 75%</span>
</div>
</div>
</div>
</div>
{/*  Timeline Node 03: The Foundation  */}
<div className="grid grid-cols-1 md:grid-cols-4 bg-surface-container gap-1 p-1 opacity-60 hover:opacity-100 transition-opacity">
<div className="md:col-span-1 relative h-48 md:h-full overflow-hidden grayscale">
<img alt="Training Session" className="absolute inset-0 w-full h-full object-cover" data-alt="Cinematic shot of a gym floor with kettlebells and heavy bags, moody lighting with grain texture, high contrast athletic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy74TmxfLs5aLMzwC10GGOAVSF2-y_bPkWhNznUgISPi2IpI2-SAec6dKzsYO6yUBQS6ZDAk1hvGlNnrilBH8O1jyuiO6nT_UFtB7U-0_5YKMOQKlNe4bYGVuunAQPkrYVXjdTOh4L7vvxLxFKu6kKA5vNuDHCTd9a3ySXaYN2DnPiBGcOwIv71x6tuaPqg5sniYbzzfQhx6wZ4Y1ijGoMip_OYEj8bt1fpJHp5GJX_aqsPAjtMoTmb-kyRwMMXJS-kJ-WsD0buG-z"/>
</div>
<div className="md:col-span-2 bg-surface-container-low p-8">
<h3 className="font-headline text-sm font-black text-tertiary tracking-widest uppercase mb-4">THE ORIGIN</h3>
<p className="font-body text-sm text-tertiary">First competitive appearance. Focus on pure endurance and raw agility. Baseline metrics established for future kinetic growth.</p>
</div>
<div className="md:col-span-1 bg-surface-container-lowest p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant/10">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-sm" data-icon="history">history</span>
<span className="font-label text-[10px] font-black uppercase tracking-widest">LEGACY DATA</span>
</div>
<p className="font-headline text-2xl font-black">BRONZE</p>
<p className="font-label text-[10px] text-tertiary">ROOKIE LEAGUE</p>
</div>
</div>
</div>
</section>
{/*  Stats Bento Grid  */}
<section className="mt-24">
<h2 className="font-headline text-2xl font-black uppercase tracking-widest mb-8 text-center">BIOMETRIC CONSOLIDATION</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-surface-container-low p-1">
<div className="bg-surface-container-high p-8 flex flex-col justify-between aspect-square md:aspect-auto h-64">
<span className="font-label text-[10px] font-black text-primary-container tracking-[0.3em] uppercase">WIN RATE</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-7xl font-black tracking-tighter italic">92</span>
<span className="font-headline text-3xl font-black text-primary-container">%</span>
</div>
<div className="bg-surface-container-highest h-1 w-full">
<div className="bg-primary-container h-full w-[92%]"></div>
</div>
</div>
<div className="bg-surface-container-high p-8 flex flex-col justify-between aspect-square md:aspect-auto h-64">
<span className="font-label text-[10px] font-black text-secondary tracking-[0.3em] uppercase">PEAK FORCE</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-7xl font-black tracking-tighter italic">1.2</span>
<span className="font-headline text-3xl font-black text-secondary">kN</span>
</div>
<p className="font-label text-[10px] text-tertiary uppercase tracking-widest">MEASURED AT CONTACT POINT</p>
</div>
<div className="bg-surface-container-high p-8 flex flex-col justify-between aspect-square md:aspect-auto h-64">
<span className="font-label text-[10px] font-black text-tertiary tracking-[0.3em] uppercase">CONSISTENCY</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-7xl font-black tracking-tighter italic">A+</span>
</div>
<div className="flex gap-1">
<div className="h-4 w-1/5 bg-primary-container"></div>
<div className="h-4 w-1/5 bg-primary-container"></div>
<div className="h-4 w-1/5 bg-primary-container"></div>
<div className="h-4 w-1/5 bg-primary-container"></div>
<div className="h-4 w-1/5 bg-primary-container opacity-30"></div>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-4 bg-[#353534]/80 backdrop-blur-md z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="history">history</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">HISTORY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="sports_kabaddi">sports_kabaddi</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">FIGHTS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">PERFORMANCE</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="error_outline">error_outline</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">ERRORS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="military_tech">military_tech</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">MEDALS</span>
</a>
</nav>
{/*  Floating Action Button - Suppression Rule Applied: Only on Home/Dash, hidden on timeline details  */}
<div className="fixed right-6 bottom-24 hidden md:block">
<button className="bg-primary-container text-on-primary-container p-5 hover:bg-inverse-primary transition-all active:scale-95 group">
<span className="material-symbols-outlined text-3xl block group-hover:rotate-180 transition-transform duration-500" data-icon="add" style={{ /* font-variation-settings: 'wght' 700; */ }}>add</span>
</button>
</div>

    </>
  );
}
