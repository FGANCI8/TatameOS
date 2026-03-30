export default function EstratGiaDeLuta() {
  return (
    <>
<main className="pt-20 pb-24 px-4 max-w-5xl mx-auto">
{/*  Screen Title Section  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="text-brand-red font-headline font-black text-sm tracking-[0.3em] uppercase">Tactical Module 04</span>
<h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none mt-2">ESTRATÉGIA<br/>DE LUTA</h1>
</div>
<div className="bg-zinc-900 p-4 flex flex-col border-l-4 border-brand-red/20">
<span className="text-xs font-label font-bold text-zinc-500 uppercase tracking-widest">Active Plan</span>
<span className="text-xl font-headline font-bold text-zinc-100 uppercase italic">Alpha Submission</span>
</div>
</div>
{/*  Tactical Grid (Bento Style)  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Hero Tactical Viz  */}
<div className="md:col-span-8 bg-zinc-950/60 h-[400px] relative overflow-hidden group">
<div className="absolute inset-0 hud-scan-line opacity-20"></div>
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" data-alt="Dynamic shot of two grapplers in a standoff, low angle, atmospheric smoke, sharp focus on muscular tension and gi texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_WZt-1-oRlbBAI4G2kU6GxxGA9yTBqyEWySjyTbtwy-F5RYQKEqBVYJInoB8pyVvFT7LxohBaZGor_6sUO4asY8ugtYlHTUXGMaBwrWpLZxkGWofB7J49m6XpLRsoL1Nn1SLv52za1bS844krvNCRUvS4O8vrEibLzeGuahoJng_yDQliQrnOj8TXNpeAV-SBvJSMwmzEbu9JU5di_3LjdbALS4kBaPNUQFQUIdzoGLO98ayXOg3xpSWTTm1SKE2v86SkgjP9EiQ9"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute top-6 left-6 flex flex-col gap-1">
<div className="bg-brand-red/10 text-white px-3 py-1 text-xs font-black tracking-widest uppercase">Initial Posture</div>
<div className="text-4xl font-headline font-black uppercase italic tracking-tighter">Stand Up</div>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-black text-brand-red tracking-widest uppercase">Target Area</span>
<span className="text-xl font-headline font-bold">Neck/Back</span>
</div>
<div className="w-px h-8 bg-zinc-800/80 self-end"></div>
<div className="flex flex-col">
<span className="text-[10px] font-black text-brand-red tracking-widest uppercase">Phase</span>
<span className="text-xl font-headline font-bold">A1-Entry</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-brand-red text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>ads_click</span>
</div>
</div>
</div>
{/*  Priority Grips Section  */}
<div className="md:col-span-4 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<div>
<h2 className="text-xs font-black text-brand-red tracking-widest uppercase mb-4 flex items-center gap-2">
<span className="w-2 h-2 bg-brand-red/10"></span>
                        Priority Grips
                    </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="text-2xl font-headline font-black text-zinc-500 italic">01</div>
<div>
<h3 className="font-headline font-bold uppercase leading-none">Collar Grip</h3>
<p className="text-sm text-zinc-500 mt-1 leading-tight">Control posture and break balance immediately.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="text-2xl font-headline font-black text-zinc-500 italic">02</div>
<div>
<h3 className="font-headline font-bold uppercase leading-none">Sleeve Control</h3>
<p className="text-sm text-zinc-500 mt-1 leading-tight">Neutralize defensive posting and clear entries.</p>
</div>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-zinc-800/80">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-black uppercase tracking-widest">Grip Efficiency</span>
<span className="text-[10px] font-black text-zinc-300">88%</span>
</div>
<div className="h-2 bg-zinc-950">
<div className="h-full bg-gradient-to-r from-zinc-800 to-zinc-100 w-[88%]"></div>
</div>
</div>
</div>
{/*  Risk Areas - Asymmetric Offset  */}
<div className="md:col-span-4 bg-zinc-800/80 p-6 relative">
<span className="material-symbols-outlined absolute top-4 right-4 text-brand-red opacity-40 text-4xl">warning</span>
<h2 className="text-xs font-black text-brand-red tracking-widest uppercase mb-6">Risk Zones</h2>
<div className="space-y-4">
<div className="bg-background/40 p-4 border-l-2 border-brand-red/20">
<h3 className="font-headline font-bold uppercase text-zinc-100">Deep Half Guard</h3>
<p className="text-xs text-zinc-500 mt-1">Vulnerable to sweeps if weight is committed too early to the center.</p>
</div>
<div className="bg-background/40 p-4 border-l-2 border-brand-red/20">
<h3 className="font-headline font-bold uppercase text-zinc-100">Over-Under Pass</h3>
<p className="text-xs text-zinc-500 mt-1">High risk of triangle counter if posture is not vertical.</p>
</div>
</div>
</div>
{/*  Preferred Attack - High Intensity  */}
<div className="md:col-span-8 bg-brand-red/10 p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
{/*  Abstract visual element  */}
<div className="absolute -right-20 -bottom-20 text-[180px] font-black text-black/10 leading-none italic select-none">ATTACK</div>
<div className="flex-1 z-10">
<span className="text-[10px] font-black text-white tracking-[0.4em] uppercase">Primary Sequence</span>
<h2 className="text-4xl md:text-6xl font-headline font-black uppercase italic tracking-tighter text-white leading-[0.9]">Single Leg <br/> to Back</h2>
<div className="flex gap-4 mt-6">
<button className="bg-white text-brand-red px-6 py-2 font-headline font-black uppercase text-sm italic transition-transform active:scale-95">Details</button>
<button className="border border-brand-red/30 text-white px-6 py-2 font-headline font-black uppercase text-sm italic transition-transform active:scale-95">Drill Pack</button>
</div>
</div>
<div className="w-full md:w-64 h-48 bg-black/20 backdrop-blur-md p-4 z-10 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<span className="text-[10px] font-black uppercase tracking-widest text-white/70">Success Rate</span>
<span className="material-symbols-outlined text-white">trending_up</span>
</div>
<span className="text-4xl font-headline font-black text-white">74%</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] font-bold uppercase text-white/70">
<span>Complexity</span>
<span>Level 08</span>
</div>
<div className="h-1 bg-white/20">
<div className="h-full bg-white w-[80%]"></div>
</div>
</div>
</div>
</div>
{/*  Movements to Avoid  */}
<div className="md:col-span-12 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col md:flex-row items-center gap-8">
<div className="flex items-center gap-4 bg-brand-red/10 text-white p-4 min-w-[300px]">
<span className="material-symbols-outlined text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>do_not_disturb_on</span>
<div>
<h3 className="font-headline font-black uppercase text-xl leading-none">Avoid Pulling Guard</h3>
<p className="text-xs uppercase font-bold opacity-80 mt-1">Strategy: Maintain pressure</p>
</div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col">
<span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Reason 01</span>
<p className="text-sm font-medium">Loses initiative in the opening 30 seconds of the match.</p>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Reason 02</span>
<p className="text-sm font-medium">Opponent has high top-pressure pass efficiency (92%).</p>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Reason 03</span>
<p className="text-sm font-medium">Referee bias favors standing activity in current bracket.</p>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}



