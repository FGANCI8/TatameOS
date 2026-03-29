import React from 'react';

export default function ModoAgenteIa() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover grayscale" data-alt="Close up portrait of a Brazilian Jiu Jitsu athlete wearing a black belt with focused intense expression in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtnKU0BrYSZNlEHq_YRNntyNZony8HON_4fge5TinnMkVOK0wwJWgsSXn3STXJtRP_BDIm8tZOAmYbUiSoV2Gr98qpuYeGAnXQn3tp1jwbDzAzNAqGt4kc69qcTUjUnoQtVWhAPsuKVJ2MmXVE8gQKoivxr6M4OTGCWYs0dr1wUYWRVu1pGKVR_Fqe605CqLpY5eeALQ_HIeN3jrBa1tOCKzNV0720m5-nvhgHEk75yrk2kjSAYWjaKjqU01pQrRXjMbXQYEk7qDES"/>
</div>
<h1 className="text-2xl font-black italic text-[#E70000] font-['Lexend'] uppercase tracking-tighter">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-100">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main className="pt-16 pb-20 min-h-screen flex flex-col relative overflow-hidden">
{/*  HUD Background Elements  */}
<div className="absolute inset-0 pointer-events-none hud-scanline opacity-20"></div>
<div className="absolute top-20 left-6 border-l-2 border-primary-container h-32 opacity-30"></div>
<div className="absolute bottom-24 right-6 border-r-2 border-secondary h-48 opacity-20"></div>
{/*  AI Persona Header  */}
<section className="px-6 pt-8 pb-4">
<div className="flex items-end gap-2 mb-1">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary font-headline">Sistema Ativo</span>
<div className="h-1 w-12 bg-secondary mb-1"></div>
</div>
<h2 className="text-4xl font-black font-headline uppercase leading-none tracking-tighter mb-2">ASSISTENTE <span className="text-primary-container">SENSEI AI</span></h2>
<p className="text-tertiary-fixed-dim text-sm max-w-xs uppercase tracking-wider font-semibold">Análise técnica em tempo real &amp; Protocolos de evolução.</p>
</section>
{/*  Chat Canvas  */}
<div className="flex-grow px-6 flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-320px)]">
{/*  Message: System/AI  */}
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Protocolo Iniciado</span>
<span className="h-[1px] flex-grow bg-surface-container-highest"></span>
</div>
<div className="bg-surface-container-high p-4 relative">
<div className="absolute -left-1 top-0 w-1 h-full bg-primary-container"></div>
<p className="text-sm leading-relaxed font-medium">OSS! Estou analisando seu último treino de ontem. Notei que sua transição da <span className="text-secondary font-bold">Guarda De La Riva</span> para o <span className="text-secondary font-bold">Berimbolo</span> teve uma queda de pressão aos 4:20. Deseja revisar a técnica ou ajustar seu cardio?</p>
</div>
<span className="text-[10px] text-tertiary-fixed-dim uppercase self-start">SENSEI V4.2 • AGORA</span>
</div>
{/*  Message: User  */}
<div className="flex flex-col gap-2 max-w-[85%] self-end items-end">
<div className="flex items-center gap-2 w-full">
<span className="h-[1px] flex-grow bg-surface-container-highest"></span>
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Atleta</span>
</div>
<div className="bg-surface-container-lowest p-4 border border-surface-container-highest">
<p className="text-sm leading-relaxed">Quero revisar a técnica. Sinto que meu quadril está travando no meio do giro.</p>
</div>
<span className="text-[10px] text-tertiary-fixed-dim uppercase">USUÁRIO • 1 MIN</span>
</div>
{/*  Message: AI with Data Widget  */}
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Análise de Biomecânica</span>
<span className="h-[1px] flex-grow bg-surface-container-highest"></span>
</div>
<div className="bg-surface-container-high p-4 relative">
<div className="absolute -left-1 top-0 w-1 h-full bg-primary-container"></div>
<p className="text-sm leading-relaxed mb-4">Entendido. O travamento geralmente ocorre por falta de angulação no ombro de apoio. Veja este detalhe:</p>
{/*  Tactical HUD Card  */}
<div className="bg-surface-container-lowest p-3 border-l-2 border-secondary flex items-center gap-4">
<div className="w-16 h-16 bg-surface-container-highest flex-shrink-0">
<img className="w-full h-full object-cover opacity-50 grayscale contrast-125" data-alt="Infographic or diagram showing joint rotation and mechanical force vectors in a technical martial arts movement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8SsviIcDBlntrfOsGipa2nSsdq2IwBrf4XPpAQHK7l6h7MCqLozusd9C6FKKzeeJAp2KOSTAC7Mi0GOqym5Q3MhbBtiGtoXDyAZPUl6kkszlivKxZ-WFkvVqQfM1gX5OBE8SG1PEoLxHAcBjM1aGy4fM7gaGseuHlSAX_9KHKz5g9yqNmp5DPINDU6R8-wJ4xiRjPv0XsI14wR5L_H7Px5jnn1Ny-80fzK0G9Pmoq0ZRosOTzHDmrpjA3x_xyMtnrBw1ZpOSLHQJ7"/>
</div>
<div>
<div className="text-[10px] font-black uppercase text-secondary">Ajuste Sugerido</div>
<div className="text-xs font-bold leading-tight">ROTAÇÃO ESCAPULAR +15°</div>
<div className="mt-1 flex gap-1">
<div className="h-1 w-4 bg-secondary"></div>
<div className="h-1 w-4 bg-secondary"></div>
<div className="h-1 w-2 bg-surface-container-highest"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Quick Suggestions HUD  */}
<div className="px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar mt-auto">
<button className="flex-shrink-0 px-4 py-2 bg-surface-container border border-surface-container-highest text-[10px] font-black uppercase tracking-widest text-on-surface hover:bg-surface-container-highest transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-xs">videocam</span> Revisar técnica
            </button>
<button className="flex-shrink-0 px-4 py-2 bg-surface-container border border-surface-container-highest text-[10px] font-black uppercase tracking-widest text-on-surface hover:bg-surface-container-highest transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-xs">fitness_center</span> Dica de treino
            </button>
<button className="flex-shrink-0 px-4 py-2 bg-surface-container border border-surface-container-highest text-[10px] font-black uppercase tracking-widest text-on-surface hover:bg-surface-container-highest transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-xs">healing</span> Recuperação
            </button>
</div>
{/*  Input Shell  */}
<div className="px-6 pb-2">
<div className="bg-surface-container-lowest flex items-center border-b-2 border-secondary p-2">
<input className="bg-transparent border-none focus:ring-0 flex-grow text-sm font-bold uppercase tracking-widest placeholder:text-surface-container-highest" placeholder="COMANDO DE VOZ OU TEXTO..." type="text"/>
<button className="w-10 h-10 bg-primary-container flex items-center justify-center text-on-primary-container active:scale-90 transition-transform">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-4 bg-[#131313]/80 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">video_library</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>school</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
