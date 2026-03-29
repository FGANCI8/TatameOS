import React from 'react';

export default function EnviarFeedback() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex items-center justify-between px-6 py-4 w-full sticky top-0 z-50 bg-[#131313] dark:bg-[#131313]">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#C6C6C7] cursor-pointer">menu</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">OSMOSSIS</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="Instructor Avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a professional martial arts instructor with a focused expression in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKrtLuWOhg65GNey8Yvy_Uo1ImgI5wKFhb0DMSYHURxtAm_fM97KfW0fiiK6KZ7GaJQh26H3ZXNVJ0uE8ALUIS394wtf39xRvJSko7nd6HJACud7gWsOUevVM8gqTNtZY_I4wcd21l05Ophi53Qfe-otF0Mxb4dCoOZjcve_QfG_sBtwbtOeenl0CrM6efwYRYAUtAciqORch9XVhXaEC2U41y3svTnfrnEtQqjfBUlcpOH8-YG7Anv475ScCzVshONECHaHyODnZ_"/>
</div>
</header>
<main className="max-w-4xl mx-auto px-6 py-12 mb-24">
{/*  Header Section  */}
<section className="mb-12">
<h2 className="font-headline text-5xl font-black uppercase tracking-tighter mb-2 text-on-surface">FEEDBACK <span className="text-primary-container">SENSEI</span></h2>
<p className="font-label text-tertiary uppercase tracking-widest text-xs">Performance Analysis &amp; Tactical Review</p>
</section>
{/*  Main Form Grid  */}
<form className="space-y-12">
{/*  Student Selection: Bento Layout  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="md:col-span-2 bg-surface-container-low p-8 flex flex-col justify-between">
<div>
<label className="font-headline font-bold text-xs tracking-widest text-tertiary-fixed-dim uppercase block mb-6">SELECT ATHLETE</label>
<select className="w-full bg-surface-container-lowest border-none text-on-surface font-headline text-2xl font-black uppercase py-4 px-0 focus:ring-0 focus:border-secondary border-b-2 border-transparent transition-all cursor-pointer">
<option>MARCUS 'THE AXE' ALMEIDA</option>
<option>GABRIELLA GARCIA</option>
<option>NICHOLAS MEREGALI</option>
<option>BEATRIZ MESQUITA</option>
</select>
</div>
<div className="mt-12 flex gap-8">
<div>
<p className="text-[10px] font-bold text-tertiary uppercase mb-1">CURRENT RANK</p>
<p className="text-on-surface font-headline font-black">PURPLE BELT</p>
</div>
<div>
<p className="text-[10px] font-bold text-tertiary uppercase mb-1">ATTENDANCE</p>
<p className="text-on-surface font-headline font-black">94%</p>
</div>
</div>
</div>
<div className="bg-primary-container p-8 flex flex-col justify-end aspect-square md:aspect-auto">
<span className="material-symbols-outlined text-on-primary-container text-5xl mb-4" data-weight="fill">monitoring</span>
<h3 className="font-headline text-on-primary-container font-black text-xl leading-tight uppercase">Analyze Kinetic Flow</h3>
</div>
</div>
{/*  Performance Sliders  */}
<div className="grid grid-cols-1 gap-1">
{/*  Technic  */}
<div className="bg-surface-container-high p-8 group">
<div className="flex justify-between items-end mb-8">
<div>
<h4 className="font-headline text-2xl font-black uppercase italic leading-none">TÉCNICA</h4>
<p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mt-1">Mechanical Precision &amp; Execution</p>
</div>
<span className="font-headline text-4xl font-black text-primary-container group-focus-within:animate-pulse">8.5</span>
</div>
<input className="w-full" max="10" min="0" step="0.5" type="range" value="8.5"/>
</div>
{/*  Posture  */}
<div className="bg-surface-container-high p-8 group">
<div className="flex justify-between items-end mb-8">
<div>
<h4 className="font-headline text-2xl font-black uppercase italic leading-none">POSTURA</h4>
<p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mt-1">Spatial Awareness &amp; Base Stability</p>
</div>
<span className="font-headline text-4xl font-black text-primary-container">7.0</span>
</div>
<input className="w-full" max="10" min="0" step="0.5" type="range" value="7"/>
</div>
{/*  Discipline  */}
<div className="bg-surface-container-high p-8 group">
<div className="flex justify-between items-end mb-8">
<div>
<h4 className="font-headline text-2xl font-black uppercase italic leading-none">DISCIPLINA</h4>
<p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mt-1">Mental Fortitude &amp; Code Adherence</p>
</div>
<span className="font-headline text-4xl font-black text-primary-container">9.5</span>
</div>
<input className="w-full" max="10" min="0" step="0.5" type="range" value="9.5"/>
</div>
</div>
{/*  Observations  */}
<div className="bg-surface-container-low p-8">
<label className="font-headline font-bold text-xs tracking-widest text-tertiary-fixed-dim uppercase block mb-4">TACTICAL OBSERVATIONS</label>
<textarea className="w-full bg-surface-container-lowest border-none text-on-surface font-body p-4 focus:ring-1 focus:ring-primary-container placeholder:text-surface-container-highest transition-all resize-none" placeholder="ENTER PERFORMANCE NOTES HERE..." rows="4"></textarea>
</div>
{/*  Action Button  */}
<div className="pt-6">
<button className="w-full bg-gradient-to-br from-primary-container to-inverse-primary py-6 flex items-center justify-center gap-4 group transition-transform active:scale-[0.98]" type="submit">
<span className="font-headline font-black text-xl text-on-primary-container tracking-widest uppercase">ENVIAR FEEDBACK</span>
<span className="material-symbols-outlined text-on-primary-container group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
<p className="text-center mt-4 text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-[0.2em]">Transmission secured • Kinetic Protocol 4.0</p>
</div>
</form>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-[#131313]/90 backdrop-blur-md bg-gradient-to-t from-[#0E0E0E] to-transparent">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest">HOME</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined">local_library</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest">LIBRARY</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined">timeline</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest">PATH</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest">TRAINING</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] border-t-4 border-[#E70000] pt-2 transition-transform active:scale-95 cursor-pointer">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>account_circle</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest">SENSEI</span>
</div>
</nav>

    </>
  );
}
