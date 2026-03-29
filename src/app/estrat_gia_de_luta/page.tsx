import React from 'react';

export default function EstratGiaDeLuta() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none bg-[#131313] dark:bg-[#131313] flex justify-between items-center px-6 h-16 w-full shadow-none border-b-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Close up of a professional BJJ fighter in a dark gi with a focused expression, high contrast cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOqG5rdN_KYlY9YpXtXeIDZy0byC1MUtgW6vqetoGaz3hi4pxw6p7__Vm6CimsllrltH_6qZJpPiAv4BfkL9JGgazgqhksX4OTbrNoi01920mNS5WBfF3IOcvaRARix_mW96aWVcM2YbOHj33LcJR5TgalhxwSWfmzknCbjwpQYAN5EqGtZGh8Rp18z6Uh3CN6We7TN7CQhIDI9wancjxk1pTU6V6qQCgqRqlrB2DclsHCChKu1sdZICZMLRBi1_8wv5Ux-nIjM7Rb"/>
</div>
<span className="text-2xl font-black italic text-[#E70000] dark:text-[#E70000] tracking-widest font-['Lexend'] uppercase">STRYKE</span>
</div>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-20 pb-24 px-4 max-w-5xl mx-auto">
{/*  Screen Title Section  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="text-primary-container font-headline font-black text-sm tracking-[0.3em] uppercase">Tactical Module 04</span>
<h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none mt-2">ESTRATÉGIA<br/>DE LUTA</h1>
</div>
<div className="bg-surface-container-high p-4 flex flex-col border-l-4 border-primary-container">
<span className="text-xs font-label font-bold text-tertiary-fixed-dim uppercase tracking-widest">Active Plan</span>
<span className="text-xl font-headline font-bold text-on-surface uppercase italic">Alpha Submission</span>
</div>
</div>
{/*  Tactical Grid (Bento Style)  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Hero Tactical Viz  */}
<div className="md:col-span-8 bg-surface-container-low h-[400px] relative overflow-hidden group">
<div className="absolute inset-0 hud-scan-line opacity-20"></div>
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" data-alt="Dynamic shot of two grapplers in a standoff, low angle, atmospheric smoke, sharp focus on muscular tension and gi texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_WZt-1-oRlbBAI4G2kU6GxxGA9yTBqyEWySjyTbtwy-F5RYQKEqBVYJInoB8pyVvFT7LxohBaZGor_6sUO4asY8ugtYlHTUXGMaBwrWpLZxkGWofB7J49m6XpLRsoL1Nn1SLv52za1bS844krvNCRUvS4O8vrEibLzeGuahoJng_yDQliQrnOj8TXNpeAV-SBvJSMwmzEbu9JU5di_3LjdbALS4kBaPNUQFQUIdzoGLO98ayXOg3xpSWTTm1SKE2v86SkgjP9EiQ9"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute top-6 left-6 flex flex-col gap-1">
<div className="bg-primary-container text-on-primary-container px-3 py-1 text-xs font-black tracking-widest uppercase">Initial Posture</div>
<div className="text-4xl font-headline font-black uppercase italic tracking-tighter">Stand Up</div>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-black text-primary-container tracking-widest uppercase">Target Area</span>
<span className="text-xl font-headline font-bold">Neck/Back</span>
</div>
<div className="w-px h-8 bg-surface-container-highest self-end"></div>
<div className="flex flex-col">
<span className="text-[10px] font-black text-primary-container tracking-widest uppercase">Phase</span>
<span className="text-xl font-headline font-bold">A1-Entry</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>ads_click</span>
</div>
</div>
</div>
{/*  Priority Grips Section  */}
<div className="md:col-span-4 bg-surface-container-high p-6 flex flex-col justify-between">
<div>
<h2 className="text-xs font-black text-primary-container tracking-widest uppercase mb-4 flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container"></span>
                        Priority Grips
                    </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="text-2xl font-headline font-black text-tertiary-fixed-dim italic">01</div>
<div>
<h3 className="font-headline font-bold uppercase leading-none">Collar Grip</h3>
<p className="text-sm text-tertiary-fixed-dim mt-1 leading-tight">Control posture and break balance immediately.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="text-2xl font-headline font-black text-tertiary-fixed-dim italic">02</div>
<div>
<h3 className="font-headline font-bold uppercase leading-none">Sleeve Control</h3>
<p className="text-sm text-tertiary-fixed-dim mt-1 leading-tight">Neutralize defensive posting and clear entries.</p>
</div>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-surface-container-highest">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-black uppercase tracking-widest">Grip Efficiency</span>
<span className="text-[10px] font-black text-secondary">88%</span>
</div>
<div className="h-2 bg-surface-container-lowest">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-[88%]"></div>
</div>
</div>
</div>
{/*  Risk Areas - Asymmetric Offset  */}
<div className="md:col-span-4 bg-surface-container-highest p-6 relative">
<span className="material-symbols-outlined absolute top-4 right-4 text-error opacity-40 text-4xl">warning</span>
<h2 className="text-xs font-black text-error tracking-widest uppercase mb-6">Risk Zones</h2>
<div className="space-y-4">
<div className="bg-background/40 p-4 border-l-2 border-error">
<h3 className="font-headline font-bold uppercase text-on-surface">Deep Half Guard</h3>
<p className="text-xs text-tertiary-fixed-dim mt-1">Vulnerable to sweeps if weight is committed too early to the center.</p>
</div>
<div className="bg-background/40 p-4 border-l-2 border-error">
<h3 className="font-headline font-bold uppercase text-on-surface">Over-Under Pass</h3>
<p className="text-xs text-tertiary-fixed-dim mt-1">High risk of triangle counter if posture is not vertical.</p>
</div>
</div>
</div>
{/*  Preferred Attack - High Intensity  */}
<div className="md:col-span-8 bg-primary-container p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
{/*  Abstract visual element  */}
<div className="absolute -right-20 -bottom-20 text-[180px] font-black text-black/10 leading-none italic select-none">ATTACK</div>
<div className="flex-1 z-10">
<span className="text-[10px] font-black text-on-primary-container tracking-[0.4em] uppercase">Primary Sequence</span>
<h2 className="text-4xl md:text-6xl font-headline font-black uppercase italic tracking-tighter text-on-primary-container leading-[0.9]">Single Leg <br/> to Back</h2>
<div className="flex gap-4 mt-6">
<button className="bg-on-primary-container text-primary-container px-6 py-2 font-headline font-black uppercase text-sm italic transition-transform active:scale-95">Details</button>
<button className="border border-on-primary-container/30 text-on-primary-container px-6 py-2 font-headline font-black uppercase text-sm italic transition-transform active:scale-95">Drill Pack</button>
</div>
</div>
<div className="w-full md:w-64 h-48 bg-black/20 backdrop-blur-md p-4 z-10 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<span className="text-[10px] font-black uppercase tracking-widest text-on-primary-container/70">Success Rate</span>
<span className="material-symbols-outlined text-on-primary-container">trending_up</span>
</div>
<span className="text-4xl font-headline font-black text-on-primary-container">74%</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] font-bold uppercase text-on-primary-container/70">
<span>Complexity</span>
<span>Level 08</span>
</div>
<div className="h-1 bg-on-primary-container/20">
<div className="h-full bg-on-primary-container w-[80%]"></div>
</div>
</div>
</div>
</div>
{/*  Movements to Avoid  */}
<div className="md:col-span-12 bg-surface-container-low p-6 flex flex-col md:flex-row items-center gap-8">
<div className="flex items-center gap-4 bg-error-container text-on-error-container p-4 min-w-[300px]">
<span className="material-symbols-outlined text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>do_not_disturb_on</span>
<div>
<h3 className="font-headline font-black uppercase text-xl leading-none">Avoid Pulling Guard</h3>
<p className="text-xs uppercase font-bold opacity-80 mt-1">Strategy: Maintain pressure</p>
</div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col">
<span className="text-[10px] font-black text-tertiary-fixed-dim uppercase tracking-widest mb-1">Reason 01</span>
<p className="text-sm font-medium">Loses initiative in the opening 30 seconds of the match.</p>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-black text-tertiary-fixed-dim uppercase tracking-widest mb-1">Reason 02</span>
<p className="text-sm font-medium">Opponent has high top-pressure pass efficiency (92%).</p>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-black text-tertiary-fixed-dim uppercase tracking-widest mb-1">Reason 03</span>
<p className="text-sm font-medium">Referee bias favors standing activity in current bracket.</p>
</div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-4 bg-[#131313]/80 dark:bg-[#131313]/80 backdrop-blur-xl z-50 border-t border-[#353534]/30">
<button className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest mt-1">HOME</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest mt-1">LIBRARY</span>
</button>
<button className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 active:opacity-80 scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="ads_click" style={{ /* font-variation-settings: 'FILL' 1; */ }}>ads_click</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest mt-1">PATH</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest mt-1">TRAINING</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest mt-1">SENSEI</span>
</button>
</nav>

    </>
  );
}
