import React from 'react';

export default function RotinaDaSemana() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none bg-[#131313] dark:bg-[#131313] border-b-0 bg-[#1C1B1B] shadow-none flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Close up of a professional martial artist in a black gi, intense focus, dramatic low key lighting in a dark gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4aCF4V3c9-QniWINIrfJ54qHiibWTn7NiINkaRdnm0JVXVlOymaRzWG5SEPF4Q3dBRpqc_6Fuj2aowwvjAeyGGymGu_goOd4vHGkYj113cw_SbbWqthDkPBhTNifNojjPVCrFyk4i-m8J1kw2WDtSbmbrdhdnsV5as2YgDi4IrMV9sKJJqfz_TvRCzxUH9FIPM_3VJWZWyocIO31K44kEdMA681pq_T5DJq1ZChtwq0hLOzCC89RVzwb-AGdiCo0DlAzG7vvjdGG6"/>
</div>
<span className="text-2xl font-black italic text-[#E70000] dark:text-[#E70000] tracking-widest font-['Lexend'] uppercase">STRYKE</span>
</div>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-24 px-6 max-w-5xl mx-auto">
{/*  Hero Strategy Section  */}
<section className="mb-12">
<div className="flex items-end justify-between mb-2">
<h1 className="text-5xl font-black uppercase tracking-tighter leading-none">PEAK WEEK</h1>
<div className="flex flex-col items-end">
<span className="text-[10px] font-bold tracking-[0.2em] text-tertiary-fixed-dim uppercase">Status</span>
<span className="text-[#E70000] font-black text-xl italic uppercase">In-Zone</span>
</div>
</div>
<div className="h-1 w-full bg-surface-container-highest">
<div className="h-full bg-primary-container w-[70%]"></div>
</div>
<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-surface-container-low p-4">
<span className="text-[10px] font-bold tracking-widest text-tertiary-fixed-dim uppercase">Intensity</span>
<p className="text-2xl font-black">HIGH</p>
</div>
<div className="bg-surface-container-low p-4">
<span className="text-[10px] font-bold tracking-widest text-tertiary-fixed-dim uppercase">Hydration</span>
<p className="text-2xl font-black">4.5L/D</p>
</div>
<div className="bg-surface-container-low p-4">
<span className="text-[10px] font-bold tracking-widest text-tertiary-fixed-dim uppercase">Weight</span>
<p className="text-2xl font-black">76.2kg</p>
</div>
<div className="bg-surface-container-low p-4">
<span className="text-[10px] font-bold tracking-widest text-tertiary-fixed-dim uppercase">Sleep Goal</span>
<p className="text-2xl font-black">9.5H</p>
</div>
</div>
</section>
{/*  Horizontal Day Selector (Mon-Sun)  */}
<nav className="flex overflow-x-auto no-scrollbar gap-2 mb-8">
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-low flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Mon</span>
<span className="text-2xl font-black">12</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-low flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Tue</span>
<span className="text-2xl font-black">13</span>
</div>
{/*  Current Day  */}
<div className="flex-shrink-0 w-20 h-24 bg-primary-container flex flex-col items-center justify-center shadow-lg transform -translate-y-2">
<span className="text-[10px] font-bold text-on-primary-container uppercase">Wed</span>
<span className="text-3xl font-black text-on-primary-container">14</span>
<span className="text-[8px] font-black text-on-primary-container tracking-widest mt-1 uppercase">Today</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-low flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Thu</span>
<span className="text-2xl font-black">15</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-low flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Fri</span>
<span className="text-2xl font-black">16</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-low flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Sat</span>
<span className="text-2xl font-black">17</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-low flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Sun</span>
<span className="text-2xl font-black">18</span>
</div>
</nav>
{/*  Bento Routine Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Main Session (Asymmetric Large Card)  */}
<div className="md:col-span-2 bg-surface-container-high p-8 flex flex-col justify-between border-l-8 border-primary-container relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-9xl" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<div className="flex items-center gap-2 mb-4">
<span className="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-black uppercase tracking-widest">High Intensity</span>
<span className="text-tertiary-fixed-dim text-xs font-bold uppercase tracking-widest">09:00 - 11:30</span>
</div>
<h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Sparring &amp; <br/>Tactical Drill</h2>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="text-sm font-medium">8 Rounds specific positional sparring</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="text-sm font-medium">Anti-wrestling transitions (Cage work)</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<span className="text-sm font-medium">Post-session technical video review</span>
</li>
</ul>
</div>
<button className="bg-primary-container text-on-primary-container font-black py-4 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    Launch Telemetry
                </button>
</div>
{/*  Side Metrics  */}
<div className="space-y-6">
{/*  Mobility Block  */}
<div className="bg-surface-container p-6">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="self_care">self_care</span>
<span className="text-[10px] font-black uppercase tracking-widest">Mobility</span>
</div>
<h3 className="text-xl font-black uppercase tracking-tight mb-2">Hip Flow Phase II</h3>
<p className="text-tertiary-fixed-dim text-xs leading-relaxed">Focus on active recovery and joint lubrication before technical review.</p>
</div>
{/*  Hydration Progress  */}
<div className="bg-surface-container p-6">
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] font-black uppercase tracking-widest">Hydration</span>
<span className="text-xs font-bold">2.8 / 4.5L</span>
</div>
<div className="h-2 bg-surface-container-highest">
<div className="h-full bg-secondary w-[62%]"></div>
</div>
<p className="text-[10px] mt-4 text-tertiary-fixed-dim font-bold uppercase">+500ml Electrolytes at 14:00</p>
</div>
{/*  Technical Review  */}
<div className="bg-surface-container p-6 border-l-4 border-tertiary">
<div className="flex items-center gap-2 mb-4 text-tertiary">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="text-[10px] font-black uppercase tracking-widest">Technical</span>
</div>
<h3 className="text-xl font-black uppercase tracking-tight">Reviewing: Takedown Defense</h3>
<p className="text-tertiary-fixed-dim text-xs mt-2 italic">"Focus on hip distance during opponent level changes."</p>
</div>
</div>
</div>
{/*  Secondary Session / Rest  */}
<div className="mt-6 bg-surface-container-low p-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-3xl opacity-30" data-icon="bedtime">bedtime</span>
</div>
<div>
<span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">PMR / REST</span>
<h4 className="text-2xl font-black uppercase tracking-tighter">Evening Wind-down</h4>
<p className="text-xs text-tertiary-fixed-dim">Zero blue light after 20:30. Magnesium supplementation.</p>
</div>
</div>
<div className="flex gap-2">
<span className="bg-surface-container-highest px-4 py-2 text-[10px] font-bold uppercase">Meditation</span>
<span className="bg-surface-container-highest px-4 py-2 text-[10px] font-bold uppercase">Breathwork</span>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-4 bg-[#131313]/80 dark:bg-[#131313]/80 backdrop-blur-xl border-t border-[#353534]/30 z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">LIBRARY</span>
</a>
{/*  ACTIVE  */}
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="ads_click">ads_click</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">SENSEI</span>
</a>
</nav>

    </>
  );
}
