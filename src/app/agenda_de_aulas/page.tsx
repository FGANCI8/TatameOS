import React from 'react';

export default function AgendaDeAulas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] flex items-center justify-between px-6 py-4 w-full sticky top-0 z-50 transition-colors duration-150 ease-in-out">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface cursor-pointer" data-icon="menu">menu</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">OSMOSSIS</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
<img alt="Instructor Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu black belt instructor in a dark gym setting, sharp and intense look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR45g3xENW45SATJhG_E0HTIyjSHMVZq1QkK8wIvGhXFcq3MQKJjNnRhXal72BFRdTFOFLMIQL-euFPkQObJ1qwvq5eVlHq9H32dii1YjCnqfZRN8vzRlgbiSO0CN31vIJ86cR3cZ_AOc8SQwa-CNoNR6_aK1mQ5iPWyNIcMWEDQXxzV67BZ2tbaohQjKHwNc1IcbAnrheWXHV6Pwj-xBjcgN1Il8QsZendpIsoJvHYzoxaEZdthGWFhOlAu1qCckyIoV5sNDjbMAj"/>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 pt-8">
{/*  Hero Title Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<p className="text-primary-container font-headline font-black text-sm tracking-[0.3em] uppercase mb-2">Weekly Schedule</p>
<h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[0.8] uppercase">
                        KINETIC<br/><span className="text-outline-variant opacity-30">ARENA</span>
</h2>
</div>
<div className="flex flex-col items-end text-right">
<span className="text-4xl font-headline font-bold text-secondary">08—14</span>
<span className="text-label-sm uppercase tracking-widest text-tertiary-fixed-dim">OCTOBER 2023</span>
</div>
</div>
</section>
{/*  Days Selector  */}
<nav className="flex overflow-x-auto no-scrollbar gap-2 mb-12 py-2">
<button className="flex-none w-24 h-24 bg-primary-container text-on-primary-container flex flex-col items-center justify-center transition-transform active:scale-95">
<span className="font-headline font-black text-2xl">MON</span>
<span className="text-[10px] font-bold tracking-[0.2em]">08 OCT</span>
</button>
<button className="flex-none w-24 h-24 bg-surface-container-low text-tertiary-fixed-dim hover:bg-surface-container-highest flex flex-col items-center justify-center transition-colors">
<span className="font-headline font-black text-2xl">TUE</span>
<span className="text-[10px] font-bold tracking-[0.2em]">09 OCT</span>
</button>
<button className="flex-none w-24 h-24 bg-surface-container-low text-tertiary-fixed-dim hover:bg-surface-container-highest flex flex-col items-center justify-center transition-colors">
<span className="font-headline font-black text-2xl">WED</span>
<span className="text-[10px] font-bold tracking-[0.2em]">10 OCT</span>
</button>
<button className="flex-none w-24 h-24 bg-surface-container-low text-tertiary-fixed-dim hover:bg-surface-container-highest flex flex-col items-center justify-center transition-colors">
<span className="font-headline font-black text-2xl">THU</span>
<span className="text-[10px] font-bold tracking-[0.2em]">11 OCT</span>
</button>
<button className="flex-none w-24 h-24 bg-surface-container-low text-tertiary-fixed-dim hover:bg-surface-container-highest flex flex-col items-center justify-center transition-colors">
<span className="font-headline font-black text-2xl">FRI</span>
<span className="text-[10px] font-bold tracking-[0.2em]">12 OCT</span>
</button>
<button className="flex-none w-24 h-24 bg-surface-container-low text-tertiary-fixed-dim hover:bg-surface-container-highest flex flex-col items-center justify-center transition-colors">
<span className="font-headline font-black text-2xl">SAT</span>
<span className="text-[10px] font-bold tracking-[0.2em]">13 OCT</span>
</button>
</nav>
{/*  Sessions List  */}
<div className="grid grid-cols-1 gap-4 mb-24">
{/*  Session Card: Fundamentos  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col md:flex-row items-stretch border-l-4 border-secondary">
<div className="p-8 md:w-48 flex flex-col justify-center items-center md:items-start bg-surface-container-lowest">
<span className="text-3xl font-headline font-black">07:00</span>
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">60 MIN</span>
</div>
<div className="flex-grow p-8 flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-grow">
<h3 className="text-3xl font-headline font-black uppercase mb-1 tracking-tight group-hover:text-secondary transition-colors">BJJ FUNDAMENTOS</h3>
<div className="flex items-center gap-4 text-tertiary-fixed-dim uppercase text-xs font-bold tracking-widest">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                PROF. MARCO AURÉLIO
                            </span>
<span className="flex items-center gap-1 text-primary-container">
<span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                                12/20 SLOTS
                            </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-1 w-24 bg-surface-container-highest">
<div className="h-full bg-secondary w-[60%]"></div>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black uppercase text-sm tracking-widest hover:bg-inverse-primary transition-colors active:scale-95">
                            RESERVAR
                        </button>
</div>
</div>
</div>
{/*  Session Card: No-Gi  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col md:flex-row items-stretch border-l-4 border-primary-container">
<div className="p-8 md:w-48 flex flex-col justify-center items-center md:items-start bg-surface-container-lowest">
<span className="text-3xl font-headline font-black">12:00</span>
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest mt-1">90 MIN</span>
</div>
<div className="flex-grow p-8 flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-grow">
<h3 className="text-3xl font-headline font-black uppercase mb-1 tracking-tight group-hover:text-primary-container transition-colors">NO-GI ADVANCED</h3>
<div className="flex items-center gap-4 text-tertiary-fixed-dim uppercase text-xs font-bold tracking-widest">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                PROF. RENAN COSTA
                            </span>
<span className="flex items-center gap-1 text-primary-container">
<span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                                18/20 SLOTS
                            </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-1 w-24 bg-surface-container-highest">
<div className="h-full bg-primary-container w-[90%]"></div>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black uppercase text-sm tracking-widest hover:bg-inverse-primary transition-colors active:scale-95">
                            RESERVAR
                        </button>
</div>
</div>
</div>
{/*  Session Card: Competição  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col md:flex-row items-stretch border-l-4 border-surface-bright">
<div className="p-8 md:w-48 flex flex-col justify-center items-center md:items-start bg-surface-container-lowest">
<span className="text-3xl font-headline font-black">18:30</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mt-1">120 MIN</span>
</div>
<div className="flex-grow p-8 flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-grow">
<h3 className="text-3xl font-headline font-black uppercase mb-1 tracking-tight">KINETIC COMPETIÇÃO</h3>
<div className="flex items-center gap-4 text-tertiary-fixed-dim uppercase text-xs font-bold tracking-widest">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                MESTRE K. SILVA
                            </span>
<span className="flex items-center gap-1 text-error">
<span className="material-symbols-outlined text-sm" data-icon="warning">warning</span>
                                FULL CAPACITY
                            </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-1 w-24 bg-surface-container-highest">
<div className="h-full bg-error w-full"></div>
</div>
<button className="bg-surface-container-highest text-tertiary-fixed-dim px-8 py-4 font-headline font-black uppercase text-sm tracking-widest cursor-not-allowed opacity-50" disabled>
                            ESGOTADO
                        </button>
</div>
</div>
</div>
{/*  Session Card: Kids  */}
<div className="group bg-surface-container-low hover:bg-surface-container transition-all duration-300 flex flex-col md:flex-row items-stretch border-l-4 border-on-secondary-container">
<div className="p-8 md:w-48 flex flex-col justify-center items-center md:items-start bg-surface-container-lowest">
<span className="text-3xl font-headline font-black">16:00</span>
<span className="text-[10px] font-bold text-on-secondary-container uppercase tracking-widest mt-1">50 MIN</span>
</div>
<div className="flex-grow p-8 flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-grow">
<h3 className="text-3xl font-headline font-black uppercase mb-1 tracking-tight group-hover:text-on-secondary-container transition-colors">BJJ KIDS (7-12)</h3>
<div className="flex items-center gap-4 text-tertiary-fixed-dim uppercase text-xs font-bold tracking-widest">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                INSTR. ALICE V.
                            </span>
<span className="flex items-center gap-1 text-primary-container">
<span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                                08/15 SLOTS
                            </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-1 w-24 bg-surface-container-highest">
<div className="h-full bg-on-secondary-container w-[53%]"></div>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black uppercase text-sm tracking-widest hover:bg-inverse-primary transition-colors active:scale-95">
                            RESERVAR
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-[#131313]/90 backdrop-blur-md bg-gradient-to-t from-[#0E0E0E] to-transparent">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="local_library">local_library</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-4 border-[#E70000] pt-2 active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="Timeline">timeline</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">SENSEI</span>
</a>
</nav>

    </>
  );
}
