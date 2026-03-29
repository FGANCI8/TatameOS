import React from 'react';

export default function ScoutDeAdversRio() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none border-b-0 bg-[#1C1B1B] flex justify-between items-center px-6 h-16 w-full shadow-none">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up of a professional Brazilian Jiu-Jitsu practitioner wearing a black gi with focus and determination" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDj8VXe_dNfCB0mHObGtY5ZpTSwEF5dNNy-cTlBAHcy0PXqZYVSDQyd7_kQrW6SZFLYPbaHrDjwYleF5UHqI2TJ0PaLjtPu3ESKGmLIjfr9eC_lKkyVSvnHjv37UE4OnfZPhnxZGZn-G8An7ilAp5RhZPRoMiyl_IDw_ATbEOMqNxwmS_2pi91aiIn7LZXAV4UD3bi7NRZmMSVXBbXY1n7OJEPKm8hQU46rnEm0bivfgCV-ArL6FBYB0_R_zuKdjhCWKfx4KrNb64"/>
</div>
<span className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl italic text-[#E70000] tracking-widest">STRYKE</span>
</div>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
{/*  Page Title & Quick Search  */}
<section className="mb-12">
<h1 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter text-on-surface mb-2">SCOUT</h1>
<p className="font-label text-tertiary-fixed-dim tracking-[0.2em] text-xs uppercase mb-8">INTELLIGENCE UNIT / ADVERSARY ANALYSIS</p>
<div className="bg-surface-container-lowest p-1 flex items-center border-b-2 border-secondary">
<span className="material-symbols-outlined px-4 text-tertiary">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-headline uppercase tracking-widest text-on-surface placeholder:text-surface-container-highest py-4" placeholder="SEARCH OPERATIVE..." type="text"/>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Opponents Sidebar/List  */}
<aside className="lg:col-span-4 space-y-3">
<div className="flex justify-between items-end mb-4 border-b border-surface-container-highest pb-2">
<span className="font-headline font-bold text-sm tracking-widest uppercase">ACTIVE TARGETS</span>
<span className="font-label text-[10px] text-tertiary">LVL 4 ACCESS</span>
</div>
{/*  Active Card  */}
<div className="bg-primary-container p-4 border-l-4 border-inverse-primary cursor-pointer active:scale-[0.98] transition-all">
<div className="flex justify-between items-start">
<div>
<p className="font-headline font-black text-xl text-on-primary-container leading-none mb-1 uppercase">MARCUS SHARK SILVA</p>
<span className="inline-block bg-on-primary-container/20 text-on-primary-container text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter">AGGRESSIVE</span>
</div>
<span className="material-symbols-outlined text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>target</span>
</div>
</div>
{/*  Inactive Cards  */}
<div className="bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors cursor-pointer border-l-4 border-transparent">
<div className="flex justify-between items-start">
<div>
<p className="font-headline font-black text-xl text-on-surface leading-none mb-1 uppercase">LEO 'ANKLE' ROSSI</p>
<span className="inline-block bg-surface-container-highest text-tertiary-fixed-dim text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter">GUARD PLAYER</span>
</div>
</div>
</div>
<div className="bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors cursor-pointer border-l-4 border-transparent">
<div className="flex justify-between items-start">
<div>
<p className="font-headline font-black text-xl text-on-surface leading-none mb-1 uppercase">VIKTOR VOLKOV</p>
<span className="inline-block bg-surface-container-highest text-tertiary-fixed-dim text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter">TAKEDOWN SPECIALIST</span>
</div>
</div>
</div>
</aside>
{/*  Main Intelligence Canvas  */}
<div className="lg:col-span-8 space-y-6">
{/*  Hero Scout Profile  */}
<div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-low">
<div className="aspect-square bg-surface-container-lowest overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Intense portrait of a competitive fighter with sharp gaze and athletic build in a gritty training environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkzaVQS5GIdGZknrs9NBB_0cBG30r0yp0Lp6DIpwM66ZcHOc8hfqzkgZJR2_TODYLR_Fhk50_dmIZFL_s1JZjjr-gtcZanjWnQJP-0hAS4AYJ6UaV-VLgjPJO0r-6bbu6MJWLUIitoDH48TM61UdmmdWLUFj-4ZVhCgI1C4HHwy-sS-ctJ8fVpf9SEPo6y_X5ocahBntMqI7PbbuUm1v-lFSr4s0ADfqUtXJf_YJfQSoPluPJ9xQTXXnMQ9TDpMsRTmta6t3CRpYQ1"/>
</div>
<div className="p-8 flex flex-col justify-between">
<div>
<h2 className="font-headline font-black text-4xl leading-tight mb-4 uppercase">MARCUS<br/><span className="text-primary-container">SHARK</span> SILVA</h2>
<div className="space-y-4">
<div>
<p className="text-[10px] font-bold tracking-[0.3em] text-tertiary uppercase mb-1">STRENGTHS</p>
<div className="flex flex-wrap gap-2">
<span className="bg-on-secondary-fixed-variant/20 text-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest border border-on-secondary-fixed-variant/30">BERIMBOLO</span>
<span className="bg-on-secondary-fixed-variant/20 text-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest border border-on-secondary-fixed-variant/30">SPEED</span>
</div>
</div>
<div>
<p className="text-[10px] font-bold tracking-[0.3em] text-tertiary uppercase mb-1">WEAKNESSES</p>
<div className="flex flex-wrap gap-2">
<span className="bg-error-container text-error px-3 py-1 text-xs font-bold uppercase tracking-widest border border-on-error/30">FOOTLOCKS</span>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-surface-container-highest">
<div className="flex justify-between items-center">
<span className="font-headline font-black text-3xl italic text-on-surface">WIN RATE: 84%</span>
<span className="material-symbols-outlined text-primary-container text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>trending_up</span>
</div>
</div>
</div>
</div>
{/*  Analysis Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Notes Section  */}
<div className="bg-surface-container-high p-6 flex flex-col space-y-4">
<div className="flex items-center gap-2 border-b border-surface-container-highest pb-3">
<span className="material-symbols-outlined text-secondary">edit_note</span>
<h3 className="font-headline font-bold text-sm tracking-widest uppercase">TACTICAL NOTES</h3>
</div>
<div className="bg-surface-container-lowest p-4 min-h-[160px] text-sm text-on-surface-variant leading-relaxed">
<p className="mb-3">Shark favors the double-pull in the first 30 seconds. Extremely high hip mobility makes his guard retention elite. Watch for the transition from De La Riva to K-Guard.</p>
<p>Primary submission threat: RNC from back take off scramble. Do NOT concede the back in transition. Force the half-guard battle where his footlock defense is suspect.</p>
</div>
</div>
{/*  Performance Streak Component (Custom)  */}
<div className="bg-surface-container-high p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 border-b border-surface-container-highest pb-3 mb-6">
<span className="material-symbols-outlined text-secondary">bolt</span>
<h3 className="font-headline font-bold text-sm tracking-widest uppercase">MATCH TEMPO</h3>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] font-bold mb-2">
<span className="uppercase tracking-widest">EXPLOSIVITY</span>
<span>92%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container" style={{ /* width: 92% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold mb-2">
<span className="uppercase tracking-widest">TECHNICAL DEPTH</span>
<span>78%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container" style={{ /* width: 78% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold mb-2">
<span className="uppercase tracking-widest">ENDURANCE</span>
<span>65%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container" style={{ /* width: 65% */ }}></div>
</div>
</div>
</div>
</div>
<button className="mt-8 w-full bg-primary-container py-4 font-headline font-black text-on-primary-container tracking-widest uppercase hover:bg-inverse-primary transition-colors active:scale-95">
                            START SIMULATION
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-4 bg-[#131313]/80 backdrop-blur-xl border-t border-[#353534]/30 z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="ads_click" style={{ /* font-variation-settings: 'FILL' 1; */ }}>ads_click</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">SENSEI</span>
</a>
</nav>

    </>
  );
}
