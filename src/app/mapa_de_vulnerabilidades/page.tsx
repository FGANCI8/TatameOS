import React from 'react';

export default function MapaDeVulnerabilidades() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none bg-[#131313] dark:bg-black/80 backdrop-blur-md flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white cursor-pointer active:scale-95 duration-100">menu</span>
<h1 className="font-headline uppercase tracking-tighter font-black text-2xl italic text-[#E70000] tracking-widest">KINETIC BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="close-up portrait of a determined martial artist in a black gi with intense lighting and dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR9rsGBvoqU0Z4ZbPAt7P640V2JB9wYIsFQ6cUUCxBZTZeGa7CjlL7J5eBgFjI2HaAW-DGEPX_BHgkd6VpDvRJ7cg_RTRvu3pUHG5r6T47VA3dqhUuViQhJENn5TgKJkOdWOOXBamdD-vjL9eGeDNGDE2dOxyotKvJZRGmEyU2SxpNdWvyMMMIvEAsY95zzEdy89ThUzxsuJpzgn82z5-FkRkSSd1VwFdUIt_sVOoWNfqZhKqBgLl_t6SDSOBbQAIpNoOTkvN-vizx"/>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Header  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary-container">Análise de Performance</span>
<h2 className="font-headline text-5xl font-black uppercase italic leading-none mt-2">Vulnerabilidades<br/><span className="text-white/40">Técnicas</span></h2>
</div>
<div className="bg-surface-container-highest px-4 py-2 border-l-4 border-primary-container">
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-tertiary">Status do Ciclo</p>
<p className="font-headline text-xl font-black text-white">CRÍTICO</p>
</div>
</div>
</section>
{/*  Main Visualization Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Performance Radar / Hexagon  */}
<div className="lg:col-span-7 bg-surface-container-low p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[450px]">
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{ /* background-image: radial-gradient(circle at 50% 50%, #E70000 0%, transparent 70%); */ }}></div>
{/*  Radar Chart Visualization (CSS/HTML Hybrid)  */}
<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
{/*  Concentric Hexagons (Grid)  */}
<div className="absolute inset-0 border border-white/10 radar-hex scale-100"></div>
<div className="absolute inset-0 border border-white/10 radar-hex scale-75"></div>
<div className="absolute inset-0 border border-white/10 radar-hex scale-50"></div>
<div className="absolute inset-0 border border-white/10 radar-hex scale-25"></div>
{/*  Axis Lines  */}
<div className="absolute h-full w-[1px] bg-white/10 rotate-0"></div>
<div className="absolute h-full w-[1px] bg-white/10 rotate-60"></div>
<div className="absolute h-full w-[1px] bg-white/10 rotate-120"></div>
{/*  Vulnerability Area (Red Fill)  */}
<div className="absolute inset-0 bg-primary-container/40 radar-hex scale-[0.65]" style={{ /* clip-path: polygon(50% 10%, 90% 35%, 85% 75%, 50% 95%, 20% 70%, 15% 30%); */ }}></div>
{/*  Labels around the Hex  */}
<div className="absolute -top-8 font-label text-[10px] font-black uppercase tracking-widest text-white">Defesa</div>
<div className="absolute -right-12 top-1/4 font-label text-[10px] font-black uppercase tracking-widest text-white">Base</div>
<div className="absolute -right-12 bottom-1/4 font-label text-[10px] font-black uppercase tracking-widest text-white">Quedas</div>
<div className="absolute -bottom-8 font-label text-[10px] font-black uppercase tracking-widest text-white">Guarda</div>
<div className="absolute -left-12 bottom-1/4 font-label text-[10px] font-black uppercase tracking-widest text-white">Ataque</div>
<div className="absolute -left-12 top-1/4 font-label text-[10px] font-black uppercase tracking-widest text-white">Gás</div>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 w-full">
<div className="text-center">
<p className="font-headline text-4xl font-black text-primary-container">34%</p>
<p className="font-label text-[10px] font-bold uppercase tracking-tighter text-tertiary">Exposição Total</p>
</div>
<div className="text-center border-l border-white/10">
<p className="font-headline text-4xl font-black text-white">B+</p>
<p className="font-label text-[10px] font-bold uppercase tracking-tighter text-tertiary">Rank Técnico</p>
</div>
</div>
</div>
{/*  Detailed Categories (Bento Style)  */}
<div className="lg:col-span-5 flex flex-col gap-4">
{/*  Category Card: Defesa  */}
<div className="bg-surface-container-high p-5 border-l-2 border-primary-container">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container">shield</span>
<h3 className="font-headline font-black uppercase text-sm tracking-widest">Defesa</h3>
</div>
<span className="font-label text-[10px] font-bold bg-error-container text-white px-2 py-0.5">ALTA VULNERABILIDADE</span>
</div>
<p className="text-xs text-tertiary mb-4 leading-relaxed">Exposição excessiva do pescoço em transições de meia-guarda por baixo.</p>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-primary-container w-[78%]"></div>
</div>
</div>
{/*  Category Card: Base  */}
<div className="bg-surface-container-high p-5 border-l-2 border-white/20">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-white">fitness_center</span>
<h3 className="font-headline font-black uppercase text-sm tracking-widest">Base</h3>
</div>
<span className="font-label text-[10px] font-bold bg-surface-container-highest text-white px-2 py-0.5">ESTÁVEL</span>
</div>
<p className="text-xs text-tertiary mb-4 leading-relaxed">Distribuição de peso eficiente no topo, mas vulnerável a raspagens de gancho.</p>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-white/40 w-[42%]"></div>
</div>
</div>
{/*  Category Card: Quedas  */}
<div className="bg-surface-container-high p-5 border-l-2 border-primary-container">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container">altitude</span>
<h3 className="font-headline font-black uppercase text-sm tracking-widest">Quedas</h3>
</div>
<span className="font-label text-[10px] font-bold bg-error-container text-white px-2 py-0.5">CRÍTICO</span>
</div>
<p className="text-xs text-tertiary mb-4 leading-relaxed">Baixo índice de completude em double-legs; tempo de entrada lento.</p>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-primary-container w-[92%]"></div>
</div>
</div>
{/*  Category Card: Guarda  */}
<div className="bg-surface-container-high p-5 border-l-2 border-white/20">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-white">grid_view</span>
<h3 className="font-headline font-black uppercase text-sm tracking-widest">Guarda</h3>
</div>
<span className="font-label text-[10px] font-bold bg-surface-container-highest text-white px-2 py-0.5">ÓTIMO</span>
</div>
<p className="text-xs text-tertiary mb-4 leading-relaxed">Reposição de guarda fluida e controle de distância consistente.</p>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-white/40 w-[15%]"></div>
</div>
</div>
</div>
</div>
{/*  Corrective Drill Section  */}
<section className="mt-12">
<h3 className="font-headline text-2xl font-black uppercase italic mb-6">Drills Corretivos Recomendados</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-surface-container-low group cursor-pointer overflow-hidden border border-white/5 hover:border-primary-container transition-colors">
<div className="flex h-32">
<div className="w-1/3 relative">
<img alt="BJJ Drill" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="close up of two jiu-jitsu practitioners drilling a submission in a dark gritty gym setting with spotlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGW9BpiuEHg09cibL6b4976if6u08E-scu7vr_xlkOpiTwYAu9yYmhK2wnIES-zMHZ8uIOVyIe6IqLV-3fgVT2zWwL6jjG6xQd_h9Pg_3gRraRBEixjbGD-F8JZzY5RhXZdzXF6jGfwd3lykxL84GzQdCRxPmQQ8udZQdNz_2585uIXcC-lHXVjaE209kCLm9XysvLafy_E9FXM1yXEXBQIVgVmUzoULLA844R3r8alkjhyVsF5eV4ZOU4PDx2fsGwKPCBmSeWiIMp"/>
</div>
<div className="w-2/3 p-4 flex flex-col justify-center">
<p className="font-label text-[10px] font-black text-primary-container uppercase mb-1">Defesa de Pescoço</p>
<h4 className="font-headline text-lg font-black uppercase leading-tight mb-2">Escape de Guilhotina</h4>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="font-label text-[10px] font-bold">15 MIN / DIA</span>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low group cursor-pointer overflow-hidden border border-white/5 hover:border-primary-container transition-colors">
<div className="flex h-32">
<div className="w-1/3 relative">
<img alt="Takedown Drill" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="professional athletes practicing takedowns in a high-end martial arts studio with dramatic high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDAPzcEwi5fjiRdiCFS9U6odwoDcanWakEbZ-JVO1zmrjvF1OkeMhxJARA5bf3jSa8f3SHXAviYDu2FkrVnKxk9HmsPzcHgs3tlx2iNgfbzjbSdU1qlCQOkpkH-uiHxKI8diEZKFx4zCEA-y3T4FSBJcfXKktFPxuCRJloV6UyAzaPOpZDuz5H0Po1X52kZgAi0JVoFA6gjjYVVA_bW9vC9lEx5W6z-4YSxkVCaBSao46T54HlPRfykj1YhHbjPQN0FvOdgYD8qmGO"/>
</div>
<div className="w-2/3 p-4 flex flex-col justify-center">
<p className="font-label text-[10px] font-black text-primary-container uppercase mb-1">Explosividade</p>
<h4 className="font-headline text-lg font-black uppercase leading-tight mb-2">Penetração Double Leg</h4>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="font-label text-[10px] font-bold">20 REPS / 5 SETS</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-20 bg-[#1C1B1B] dark:bg-[#0E0E0E] flex justify-around items-center px-4 pb-safe z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[#1C1B1B] to-[#131313]">
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
