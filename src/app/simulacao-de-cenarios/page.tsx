export default function SimulaODeCenRios() {
  return (
    <>
<main className="pt-20 pb-24 px-6 max-w-5xl mx-auto">
{/*  Hero Section: Active Scenario  */}
<section className="mb-12">
<div className="flex items-baseline gap-4 mb-2">
<span className="font-headline font-black text-5xl md:text-7xl text-zinc-100 leading-none uppercase tracking-tighter">SCENARIO</span>
<span className="font-headline font-bold text-brand-red text-xl md:text-2xl italic tracking-widest">ACTIVE</span>
</div>
<div className="relative bg-zinc-950/60 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10"></div>
<img className="w-full h-64 md:h-80 object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700" alt="high contrast black and white photo of two jiu-jitsu athletes grappling on a mat with intense focus and muscle tension" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVhs30ocL-Ywj1SMyU_SEN23iz1gYdjHN-Rv6XEhBlgIpxeNem4o0cs2gt-gnL3k6gtpsuQlW_pRVB7GU6SNCRwTdp0Zh5PYfAqdYMKHqRksB-PEnCu9xZ43XTy9FPEMf9FaYjvVFosu_Wc4M_LHg-ubEQuEWGK_TlS9D8cG7BX0PRIQlkbPHWHSdAuOxoxMUT4yJRz9MOryO73he2KeWlJYMuO-iD8ZtuZd3lPUSvi0BE9tJ_pABA5Q5-x2a8nPAKQ3Le89iNr7Tr"/>
<div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
<div className="flex flex-wrap items-center gap-4 mb-4">
<span className="bg-brand-red/10 text-white px-3 py-1 text-[10px] font-black tracking-widest uppercase">CRITICAL PRESSURE</span>
<div className="flex items-center gap-2 text-brand-red">
<span className="material-symbols-outlined text-sm" style={{ /* font-variation-settings: 'FILL' 1; */ }}>timer</span>
<span className="font-headline font-bold text-lg tracking-widest">00:14:22</span>
</div>
</div>
<h1 className="font-headline font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-2">Fuga de Triângulo</h1>
<p className="text-zinc-500 max-w-lg font-medium leading-relaxed uppercase text-xs tracking-widest">Neutralize the lock by creating posture and controlling the hip line before the carotid compression reaches maximum threshold.</p>
</div>
{/*  Time Pressure Indicator Bar  */}
<div className="absolute bottom-0 left-0 w-full h-1.5 bg-zinc-800/80 z-30">
<div className="h-full bg-gradient-to-r from-brand-red to-brand-red w-2/3 shadow-[0_0_15px_rgba(255,26,26,0.5)]"></div>
</div>
</div>
</section>
{/*  Reaction Steps: Asymmetric Layout  */}
<section className="mb-16">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-4 flex flex-col justify-center">
<h2 className="font-headline font-black text-3xl text-zinc-100 uppercase tracking-tighter mb-4">REACTION<br/>SEQUENCE</h2>
<p className="text-zinc-500 text-sm tracking-wide border-l-2 border-brand-red/20 pl-4 italic">Execution must be precise. High risk of submission if posture is lost.</p>
</div>
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
{/*  Step 1  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-4 border-brand-red/20">
<span className="font-headline font-black text-4xl text-zinc-700 mb-4 block">01</span>
<h3 className="font-headline font-bold text-zinc-100 text-lg uppercase mb-2">Posture Up</h3>
<p className="text-zinc-400 text-xs leading-relaxed uppercase font-medium">Drive your hips forward and lift your chin to break the opponent's angle.</p>
</div>
{/*  Step 2  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-4 border-zinc-800 opacity-80">
<span className="font-headline font-black text-4xl text-zinc-700 mb-4 block">02</span>
<h3 className="font-headline font-bold text-zinc-100 text-lg uppercase mb-2">Shoulder Pin</h3>
<p className="text-zinc-400 text-xs leading-relaxed uppercase font-medium">Drive your free shoulder into their chin to create discomfort and space.</p>
</div>
{/*  Step 3  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-l-4 border-zinc-800/80 opacity-50">
<span className="font-headline font-black text-4xl text-zinc-500 mb-4 block">03</span>
<h3 className="font-headline font-bold text-zinc-100 text-lg uppercase mb-2">Hip Clear</h3>
<p className="text-zinc-400 text-xs leading-relaxed uppercase font-medium">Step over and square up to fully dissolve the leg triangle lock.</p>
</div>
{/*  Step 4  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border-2 border-dashed border-zinc-800/80 flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-zinc-700 text-4xl mb-2">lock_open</span>
<span className="text-zinc-700 font-headline font-black text-sm uppercase tracking-widest">Locked</span>
</div>
</div>
</div>
</section>
{/*  Scenarios List: Bento Grid Style  */}
<section>
<div className="flex items-center justify-between mb-8 border-b border-zinc-800/80 pb-4">
<h2 className="font-headline font-black text-3xl text-zinc-100 uppercase tracking-tighter">ALL SCENARIOS</h2>
<div className="flex gap-2">
<button className="bg-zinc-800/80 p-2"><span className="material-symbols-outlined text-sm">filter_list</span></button>
<button className="bg-zinc-800/80 p-2"><span className="material-symbols-outlined text-sm">grid_view</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Scenario 1: Hard  */}
<div className="bg-zinc-950/60 group hover:bg-zinc-900/80 transition-all cursor-pointer">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500" alt="overhead shot of two athletes wrestling in a competitive match under dramatic spotlights on a blue mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWdS-uTgh6C1NXo9HBU5p7ptyScJvxQWLEzdqbF75YsNPaay7ppi8UXyHruM_by3BTNyV9S5d9_gQCXP_-85U9cFEPSoPRsdJcUS75_X1UxobFCO5t0RRaw7PZrOBTTnimRT7dG__ytckdsGhYUEhnDV3rPISb8R8Z4xgS0aOpzHV2hSxt_7q3yZAp7JjoNY6bpkemj0GXo4k-RNtz7YUJKygcDDvK5DXA4NB9RUKJcy2X9kS-I6y6kCmV6yNam7a-WqqM1RjgXIPN"/>
<span className="absolute top-4 right-4 bg-brand-red/10 text-brand-red px-3 py-1 text-[10px] font-black tracking-widest uppercase">HARD</span>
</div>
<div className="p-6">
<h3 className="font-headline font-black text-xl text-zinc-100 uppercase mb-2">Defesa de Queda</h3>
<p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-4">Elite Takedown Defense against Wrestling Specialists.</p>
<div className="flex justify-between items-center text-xs font-black tracking-widest">
<span className="text-brand-red uppercase">12 REACTIONS</span>
<span className="text-zinc-400 uppercase">8.5 AVG SCORE</span>
</div>
</div>
</div>
{/*  Scenario 2: Med  */}
<div className="bg-zinc-950/60 group hover:bg-zinc-900/80 transition-all cursor-pointer">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500" alt="intense close-up of a martial artist's hands gripping a heavy punching bag in a dark industrial gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAskRxuBnXN5NBftH1zh_Y8g7KYgdgp3grqM10ecgH_fcQkYEoZcfbQgT2FM-si1xnX09bnp_LLST4f6QHh_0fDdRKRukvYYK0jmDfQ7SBBC9UlfNw6RsvA_Ydx--FzYROgvTUCFP0TF3nU3gwcybXj3p-jithdAxFPz9knYq7oulGFqAinxnN-_bTjWWSzpzdKp6ei2QgaRsGqRsvTYVMJURN4UrKGduQ3mGZq7G6GG1MHD5x36Iobr8hzGfp5H8gAaP48nDPPBFbf"/>
<span className="absolute top-4 right-4 bg-zinc-900 text-zinc-100 px-3 py-1 text-[10px] font-black tracking-widest uppercase">MED</span>
</div>
<div className="p-6">
<h3 className="font-headline font-black text-xl text-zinc-100 uppercase mb-2">Saída de Pressão</h3>
<p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-4">Escaping high pressure side-control and mount transitions.</p>
<div className="flex justify-between items-center text-xs font-black tracking-widest">
<span className="text-brand-red uppercase">08 REACTIONS</span>
<span className="text-zinc-400 uppercase">7.2 AVG SCORE</span>
</div>
</div>
</div>
{/*  Scenario 3: Custom  */}
<div className="bg-zinc-950 border-2 border-zinc-800/80 p-6 flex flex-col justify-center items-center text-center group hover:border-brand-red/20 transition-colors">
<div className="w-16 h-16 bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-brand-red/10 transition-colors">
<span className="material-symbols-outlined text-4xl">add</span>
</div>
<h3 className="font-headline font-black text-xl text-zinc-100 uppercase mb-2">CUSTOM DRILL</h3>
<p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Generate a specific sequence based on your latest rolls.</p>
</div>
</div>
</section>
</main>
    </>
  );
}



