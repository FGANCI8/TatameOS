import React from 'react';

export default function DetalheDaAula() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex items-center justify-between px-6 py-4 w-full sticky top-0 z-50 bg-[#131313] dark:bg-[#131313]">
<div className="flex items-center gap-4">
<button className="transition-colors duration-150 ease-in-out text-[#C6C6C7] hover:bg-[#353534] p-1">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">OSMOSSIS</h1>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#E70000]">
<img alt="Profile" data-alt="Close up portrait of a focused athlete with intense expression and sharp lighting against dark gym background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Bz14UuWoH9lZ9pzT_GW5TpcrqSsxEVVj9mTpm94MeWtk9Urf_r0rRhGf4Pwc1k0AVzwiDq5bS7PCevR431V44gPwR5HlTldxF04_v0v-bgbCbOu2DI0vjq05l5LFOq_RENCIi1bOPsHB05qPBY62J8B6Si5Sy72pYb50BltyFDom_gezj1Y-3JFNMe7011VL3C012BjOTqX-P9T4pulIYppg77AMT2aqtD6m97mNZJXPT-nXhxZw9ouvjiEDlSWhjFcuSg0JruEV"/>
</div>
</header>
<main className="flex-grow pb-24">
{/*  Hero Section: Instructor & Name  */}
<section className="relative h-[397px] w-full overflow-hidden">
<img alt="Kinetic BJJ Hero" className="w-full h-full object-cover" data-alt="Intense Brazilian Jiu-Jitsu instructor in a black gi standing in a dark, moody training facility with dramatic top lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvn-MCwQVv61mIpIdSTuMeCJosHPBe1WpQe4NAWrB9zAQIihFTg4fsrvmfV11iFpQ0OkcOJX2JMGQFERZO0qUypJP7wfvCX9osgnpl_c2c80ddF4YnQZawjUQkkd5in_Wl3086uSi3U9YrA33dX1AL3G7Lr3rdikflUCyKfbr-qQfpgN7ZCqdcIWeR4lA9qSJM0uDJN90T4ex4mG3mhYSleFjlilWk4cQYg99CMYxu9AvQ7Wa5nOHepTAimmsaDM6g9Um-zRMw5YSq"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex flex-col gap-1">
<span className="font-['Lexend'] text-[#E70000] font-black tracking-widest text-xs uppercase bg-[#E70000]/10 py-1 px-3 w-fit mb-2">ADVANCED SESSION</span>
<h2 className="font-['Lexend'] text-5xl md:text-7xl font-black text-on-surface uppercase tracking-tighter leading-none">
                        KINETIC BJJ
                    </h2>
<div className="flex items-center gap-3 mt-4">
<div className="w-12 h-12 bg-surface-container-high overflow-hidden border border-[#353534]">
<img alt="Professor Avatar" data-alt="Portrait of an experienced martial arts master with grey-flecked beard and calm, focused eyes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADqTgGE0UK5GUIJV1opS1E7_Xo4G7NZ7LXcFajRJi-CajdGEqpZThnOjxub3_lWNEqSJ1ySPBoTVchdLhSrwS3oAXwazhOY7KOCZatgW6ZQ0P9VgLIDU2iwqX0BBzrgvofdw3PBuFKNKwf_5QeZTCgzd-yLvkqeHzHBt7Ewk-I-wBVDOfzNNSl66vNO_WoZkWipScV4HQqdV9Y8IEpsUjZbD1irwvY8ShmqxYeAMVIcOjfB9kWD05sqDIfNC8qaaS-lHovPbPBiLHW"/>
</div>
<div>
<p className="text-[10px] font-['Lexend'] text-tertiary uppercase tracking-widest">INSTRUCTOR</p>
<p className="text-on-surface font-bold text-lg">PROF. MARCO SILVA</p>
</div>
</div>
</div>
</div>
</section>
{/*  Stats Grid (Editorial Impact)  */}
<section className="px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#353534]">
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32">
<p className="text-[10px] font-['Lexend'] text-tertiary uppercase tracking-widest font-bold">START TIME</p>
<p className="font-['Lexend'] text-3xl font-black text-on-surface">19:30</p>
</div>
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32 border-l border-[#353534]">
<p className="text-[10px] font-['Lexend'] text-tertiary uppercase tracking-widest font-bold">DURATION</p>
<p className="font-['Lexend'] text-3xl font-black text-on-surface">90 <span className="text-sm">MIN</span></p>
</div>
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32 border-t md:border-t-0 md:border-l border-[#353534]">
<p className="text-[10px] font-['Lexend'] text-tertiary uppercase tracking-widest font-bold">CAPACITY</p>
<div className="flex items-baseline gap-1">
<p className="font-['Lexend'] text-3xl font-black text-[#E70000]">04</p>
<p className="font-['Lexend'] text-lg font-black text-tertiary">/ 16</p>
</div>
</div>
<div className="bg-[#131313] p-6 flex flex-col justify-between h-32 border-t md:border-t-0 md:border-l border-[#353534]">
<p className="text-[10px] font-['Lexend'] text-tertiary uppercase tracking-widest font-bold">RANKING</p>
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-[#804000]"></div>
<p className="font-['Lexend'] text-lg font-black text-on-surface">BROWN+</p>
</div>
</div>
</section>
{/*  Details  */}
<section className="px-6 py-12 space-y-8 max-w-4xl">
<div className="space-y-4">
<h3 className="font-['Lexend'] text-sm uppercase tracking-[0.2em] text-[#E70000] font-black italic">MISSION BRIEFING</h3>
<p className="text-tertiary-fixed-dim leading-relaxed font-body text-lg">
                    Focus on explosive transition patterns and submission chains from high-guard positions. This session utilizes the Kinetic Monolith approach to pressure testing, ensuring each movement is executed with maximum precision and athletic intensity. Required: Official Academy Gi.
                </p>
</div>
{/*  Performance Streak / Progress Simulation  */}
<div className="space-y-4">
<div className="flex justify-between items-end">
<h3 className="font-['Lexend'] text-sm uppercase tracking-[0.2em] text-tertiary font-black">ENROLLMENT VELOCITY</h3>
<span className="text-[10px] font-bold text-[#E70000] animate-pulse">CRITICAL CAPACITY</span>
</div>
<div className="h-4 bg-surface-container-highest w-full relative">
<div className="h-full bg-gradient-to-r from-primary-container to-inverse-primary w-[75%]"></div>
</div>
<div className="flex justify-between text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">
<span>12 REGISTERED</span>
<span>4 SPOTS LEFT</span>
</div>
</div>
</section>
{/*  Action Area  */}
<section className="px-6 pt-4 pb-12">
<button className="w-full bg-primary-container hover:bg-inverse-primary text-on-primary-container py-6 px-8 flex items-center justify-between transition-colors duration-200 group">
<span className="font-['Lexend'] text-xl font-black uppercase tracking-tighter">Confirmar Presença</span>
<span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span>
</button>
<p className="text-center mt-6 text-xs text-surface-variant font-bold uppercase tracking-widest">
                Cancelamento permitido até 2 horas antes do início
            </p>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-[#131313]/90 backdrop-blur-md bg-gradient-to-t from-[#0E0E0E] to-transparent">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">local_library</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-4 border-[#E70000] pt-2 active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">timeline</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">SENSEI</span>
</a>
</nav>

    </>
  );
}
