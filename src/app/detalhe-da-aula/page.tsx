export default function DetalheDaAula() {
  return (
    <>
<main className="flex-grow pb-24">
{/*  Hero Section: Instructor & Name  */}
<section className="relative h-[397px] w-full overflow-hidden">
<img alt="Kinetic BJJ Hero" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvn-MCwQVv61mIpIdSTuMeCJosHPBe1WpQe4NAWrB9zAQIihFTg4fsrvmfV11iFpQ0OkcOJX2JMGQFERZO0qUypJP7wfvCX9osgnpl_c2c80ddF4YnQZawjUQkkd5in_Wl3086uSi3U9YrA33dX1AL3G7Lr3rdikflUCyKfbr-qQfpgN7ZCqdcIWeR4lA9qSJM0uDJN90T4ex4mG3mhYSleFjlilWk4cQYg99CMYxu9AvQ7Wa5nOHepTAimmsaDM6g9Um-zRMw5YSq"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex flex-col gap-1">
<span className="font-['Lexend'] text-[#FF1A1A] font-black tracking-widest text-xs uppercase bg-[#FF1A1A]/10 py-1 px-3 w-fit mb-2">ADVANCED SESSION</span>
<h2 className="font-['Lexend'] text-5xl md:text-7xl font-black text-zinc-100 uppercase tracking-tighter leading-none">
                        KINETIC BJJ
                    </h2>
<div className="flex items-center gap-3 mt-4">
<div className="w-12 h-12 bg-zinc-900 overflow-hidden border border-[#353534]">
<img alt="Professor Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADqTgGE0UK5GUIJV1opS1E7_Xo4G7NZ7LXcFajRJi-CajdGEqpZThnOjxub3_lWNEqSJ1ySPBoTVchdLhSrwS3oAXwazhOY7KOCZatgW6ZQ0P9VgLIDU2iwqX0BBzrgvofdw3PBuFKNKwf_5QeZTCgzd-yLvkqeHzHBt7Ewk-I-wBVDOfzNNSl66vNO_WoZkWipScV4HQqdV9Y8IEpsUjZbD1irwvY8ShmqxYeAMVIcOjfB9kWD05sqDIfNC8qaaS-lHovPbPBiLHW"/>
</div>
<div>
<p className="text-[10px] font-['Lexend'] text-zinc-400 uppercase tracking-widest">INSTRUCTOR</p>
<p className="text-zinc-100 font-bold text-lg">PROF. MARCO SILVA</p>
</div>
</div>
</div>
</div>
</section>
{/*  Stats Grid (Editorial Impact)  */}
<section className="px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#353534]">
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32">
<p className="text-[10px] font-['Lexend'] text-zinc-400 uppercase tracking-widest font-bold">START TIME</p>
<p className="font-['Lexend'] text-3xl font-black text-zinc-100">19:30</p>
</div>
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32 border-l border-[#353534]">
<p className="text-[10px] font-['Lexend'] text-zinc-400 uppercase tracking-widest font-bold">DURATION</p>
<p className="font-['Lexend'] text-3xl font-black text-zinc-100">90 <span className="text-sm">MIN</span></p>
</div>
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32 border-t md:border-t-0 md:border-l border-[#353534]">
<p className="text-[10px] font-['Lexend'] text-zinc-400 uppercase tracking-widest font-bold">CAPACITY</p>
<div className="flex items-baseline gap-1">
<p className="font-['Lexend'] text-3xl font-black text-[#FF1A1A]">04</p>
<p className="font-['Lexend'] text-lg font-black text-zinc-400">/ 16</p>
</div>
</div>
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32 border-t md:border-t-0 md:border-l border-[#353534]">
<p className="text-[10px] font-['Lexend'] text-zinc-400 uppercase tracking-widest font-bold">RANKING</p>
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-[#804000]"></div>
<p className="font-['Lexend'] text-lg font-black text-zinc-100">BROWN+</p>
</div>
</div>
</section>
{/*  Details  */}
<section className="px-6 py-12 space-y-8 max-w-4xl">
<div className="space-y-4">
<h3 className="font-['Lexend'] text-sm uppercase tracking-[0.2em] text-[#FF1A1A] font-black italic">MISSION BRIEFING</h3>
<p className="text-zinc-500 leading-relaxed font-body text-lg">
                    Focus on explosive transition patterns and submission chains from high-guard positions. This session utilizes the Kinetic Monolith approach to pressure testing, ensuring each movement is executed with maximum precision and athletic intensity. Required: Official Academy Gi.
                </p>
</div>
{/*  Performance Streak / Progress Simulation  */}
<div className="space-y-4">
<div className="flex justify-between items-end">
<h3 className="font-['Lexend'] text-sm uppercase tracking-[0.2em] text-zinc-400 font-black">ENROLLMENT VELOCITY</h3>
<span className="text-[10px] font-bold text-[#FF1A1A] animate-pulse">CRITICAL CAPACITY</span>
</div>
<div className="h-4 bg-zinc-800/80 w-full relative">
<div className="h-full bg-gradient-to-r from-brand-red to-brand-red w-[75%]"></div>
</div>
<div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
<span>12 REGISTERED</span>
<span>4 SPOTS LEFT</span>
</div>
</div>
</section>
{/*  Action Area  */}
<section className="px-6 pt-4 pb-12">
<button className="w-full bg-brand-red/10 hover:bg-brand-red/20 text-white py-6 px-8 flex items-center justify-between transition-colors duration-200 group">
<span className="font-['Lexend'] text-xl font-black uppercase tracking-tighter">Confirmar Presença</span>
<span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span>
</button>
<p className="text-center mt-6 text-xs text-zinc-500 font-bold uppercase tracking-widest">
                Cancelamento permitido até 2 horas antes do início
            </p>
</section>
</main>
    </>
  );
}


