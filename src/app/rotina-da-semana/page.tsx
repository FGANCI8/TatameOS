export default function RotinaDaSemana() {
  return (
    <>
<main className="pt-24 px-6 max-w-5xl mx-auto">
{/*  Hero Strategy Section  */}
<section className="mb-12">
<div className="flex items-end justify-between mb-2">
<h1 className="text-5xl font-black uppercase tracking-tighter leading-none">PEAK WEEK</h1>
<div className="flex flex-col items-end">
<span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Status</span>
<span className="text-[#FF1A1A] font-black text-xl italic uppercase">In-Zone</span>
</div>
</div>
<div className="h-1 w-full bg-zinc-800/80">
<div className="h-full bg-brand-red/10 w-[70%]"></div>
</div>
<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-zinc-950/60 p-4">
<span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Intensity</span>
<p className="text-2xl font-black">HIGH</p>
</div>
<div className="bg-zinc-950/60 p-4">
<span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Hydration</span>
<p className="text-2xl font-black">4.5L/D</p>
</div>
<div className="bg-zinc-950/60 p-4">
<span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Weight</span>
<p className="text-2xl font-black">76.2kg</p>
</div>
<div className="bg-zinc-950/60 p-4">
<span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Sleep Goal</span>
<p className="text-2xl font-black">9.5H</p>
</div>
</div>
</section>
{/*  Horizontal Day Selector (Mon-Sun)  */}
<nav className="flex overflow-x-auto no-scrollbar gap-2 mb-8">
<div className="flex-shrink-0 w-16 h-20 bg-zinc-950/60 flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Mon</span>
<span className="text-2xl font-black">12</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-950/60 flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Tue</span>
<span className="text-2xl font-black">13</span>
</div>
{/*  Current Day  */}
<div className="flex-shrink-0 w-20 h-24 bg-brand-red/10 flex flex-col items-center justify-center shadow-lg transform -translate-y-2">
<span className="text-[10px] font-bold text-white uppercase">Wed</span>
<span className="text-3xl font-black text-white">14</span>
<span className="text-[8px] font-black text-white tracking-widest mt-1 uppercase">Today</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-950/60 flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Thu</span>
<span className="text-2xl font-black">15</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-950/60 flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Fri</span>
<span className="text-2xl font-black">16</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-950/60 flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Sat</span>
<span className="text-2xl font-black">17</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-950/60 flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold opacity-50 uppercase">Sun</span>
<span className="text-2xl font-black">18</span>
</div>
</nav>
{/*  Bento Routine Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Main Session (Asymmetric Large Card)  */}
<div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between border-l-8 border-brand-red/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-9xl" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<div className="flex items-center gap-2 mb-4">
<span className="bg-brand-red/10 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">High Intensity</span>
<span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">09:00 - 11:30</span>
</div>
<h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Sparring &amp; <br/>Tactical Drill</h2>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-brand-red" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="text-sm font-medium">8 Rounds specific positional sparring</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-brand-red" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="text-sm font-medium">Anti-wrestling transitions (Cage work)</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-brand-red" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<span className="text-sm font-medium">Post-session technical video review</span>
</li>
</ul>
</div>
<button className="bg-brand-red/10 text-white font-black py-4 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    Launch Telemetry
                </button>
</div>
{/*  Side Metrics  */}
<div className="space-y-6">
{/*  Mobility Block  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-zinc-300" data-icon="self_care">self_care</span>
<span className="text-[10px] font-black uppercase tracking-widest">Mobility</span>
</div>
<h3 className="text-xl font-black uppercase tracking-tight mb-2">Hip Flow Phase II</h3>
<p className="text-zinc-500 text-xs leading-relaxed">Focus on active recovery and joint lubrication before technical review.</p>
</div>
{/*  Hydration Progress  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] font-black uppercase tracking-widest">Hydration</span>
<span className="text-xs font-bold">2.8 / 4.5L</span>
</div>
<div className="h-2 bg-zinc-800/80">
<div className="h-full bg-zinc-800 w-[62%]"></div>
</div>
<p className="text-[10px] mt-4 text-zinc-500 font-bold uppercase">+500ml Electrolytes at 14:00</p>
</div>
{/*  Technical Review  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-4 border-zinc-800">
<div className="flex items-center gap-2 mb-4 text-zinc-400">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="text-[10px] font-black uppercase tracking-widest">Technical</span>
</div>
<h3 className="text-xl font-black uppercase tracking-tight">Reviewing: Takedown Defense</h3>
<p className="text-zinc-500 text-xs mt-2 italic">"Focus on hip distance during opponent level changes."</p>
</div>
</div>
</div>
{/*  Secondary Session / Rest  */}
<div className="mt-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl opacity-30" data-icon="bedtime">bedtime</span>
</div>
<div>
<span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em]">PMR / REST</span>
<h4 className="text-2xl font-black uppercase tracking-tighter">Evening Wind-down</h4>
<p className="text-xs text-zinc-500">Zero blue light after 20:30. Magnesium supplementation.</p>
</div>
</div>
<div className="flex gap-2">
<span className="bg-zinc-800/80 px-4 py-2 text-[10px] font-bold uppercase">Meditation</span>
<span className="bg-zinc-800/80 px-4 py-2 text-[10px] font-bold uppercase">Breathwork</span>
</div>
</div>
</main>
    </>
  );
}

