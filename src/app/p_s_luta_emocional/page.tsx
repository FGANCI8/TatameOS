import React from 'react';

export default function PSLutaEmocional() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-gradient-to-r from-[#131313] via-[#1C1B1B] to-[#131313]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu athlete in a black gi, sweat on skin, serious and focused expression, cinematic dark lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPHmNGM7UzsdpZmawCMDVSf2oeBX5PX7-clETOHDbx1s7qqdlebbN-7VJxVtvcFCI6JNQsthApOu-mkLkiza3I-Gh1L5I3aCBB1d9UBsZf795RO89VIuOv7IZ_lH4u5Bf6jPV_HubI-9zZ0YmfH0IYy1B6TKDCgas4jn2IMmv4oKd2VRjF6d2090O1MPnqrPZ-0_YC7Bn8Pc5CIdHk7o8M2qM27Tim76b3yL1UaIh2qGF16YYIqyD64924fJq5i2RCf6GxUIn3nSoH"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">KINETIC</h1>
</div>
<button className="text-[#E70000] hover:text-white transition-colors active:scale-95 duration-75">
<span className="material-symbols-outlined">bolt</span>
</button>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow pt-24 pb-32 px-6 max-w-lg mx-auto w-full">
{/*  Header Section  */}
<section className="mb-10">
<span className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-tertiary uppercase block mb-2">Pós-Treino / Combate</span>
<h2 className="font-['Lexend'] text-4xl font-black leading-none uppercase mb-4 tracking-tighter">ANÁLISE <br/><span className="text-primary-container">EMOCIONAL</span></h2>
<p className="text-tertiary-fixed-dim text-sm leading-relaxed border-l-2 border-primary-container pl-4">A luta termina, o aprendizado continua. Como você se sente agora?</p>
</section>
{/*  Emotion Grid (Asymmetric)  */}
<section className="mb-12">
<h3 className="font-['Inter'] font-bold text-xs tracking-widest text-on-surface uppercase mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container"></span> SELECIONE O ESTADO DOMINANTE
            </h3>
<div className="grid grid-cols-2 gap-3">
{/*  Frustração  */}
<button className="flex flex-col items-start p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors text-left group">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl">sentiment_dissatisfied</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Frustração</span>
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-wider mt-1 opacity-60">Foco no erro</span>
</button>
{/*  Confiança  */}
<button className="flex flex-col items-start p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors text-left group">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>workspace_premium</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Confiança</span>
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-wider mt-1 opacity-60">Fluxo técnico</span>
</button>
{/*  Aprendizado (Wide)  */}
<button className="col-span-2 flex items-center justify-between p-5 bg-surface-container-highest border-l-4 border-primary-container transition-colors text-left">
<div>
<span className="font-['Lexend'] font-bold text-xl uppercase leading-tight block">Evolução Técnica</span>
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-wider mt-1 opacity-60">Consciência de novos detalhes</span>
</div>
<span className="material-symbols-outlined text-primary-container text-4xl">psychology</span>
</button>
{/*  Nervosismo  */}
<button className="flex flex-col items-start p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors text-left">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl">air</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Ansiedade</span>
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-wider mt-1 opacity-60">Ritmo ofegante</span>
</button>
{/*  Motivação  */}
<button className="flex flex-col items-start p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors text-left">
<span className="material-symbols-outlined text-primary-container mb-4 text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>local_fire_department</span>
<span className="font-['Lexend'] font-bold text-lg uppercase leading-tight">Motivação</span>
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-wider mt-1 opacity-60">Pronto para a próxima</span>
</button>
</div>
</section>
{/*  Reflection Area  */}
<section className="mb-12">
<div className="bg-surface-container-lowest p-6 border border-outline-variant/10">
<div className="flex justify-between items-end mb-4">
<h3 className="font-['Inter'] font-bold text-xs tracking-widest text-on-surface uppercase">REFLEXÃO DO TATAME</h3>
<span className="text-[10px] text-tertiary uppercase font-mono">ID: 8829-X</span>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-tertiary-fixed-dim/30 text-sm h-32 resize-none p-0" placeholder="Descreva o que passou pela sua mente durante a finalização ou a raspagem..."></textarea>
<div className="mt-4 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
<div className="flex gap-2">
<span className="material-symbols-outlined text-tertiary text-lg">mic</span>
<span className="material-symbols-outlined text-tertiary text-lg">photo_camera</span>
</div>
<span className="text-[10px] text-primary-container font-black uppercase tracking-tighter">Gravação iniciada</span>
</div>
</div>
</section>
{/*  Call to Action  */}
<button className="w-full bg-primary-container text-on-primary-container py-5 font-['Lexend'] font-black text-xl uppercase tracking-tighter flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
            REGISTRAR PERFORMANCE
            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-4 px-2 bg-[#353534]/80 backdrop-blur-xl shadow-[0_-4px_12px_rgba(52,61,150,0.06)]">
{/*  HOME  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined text-2xl">home_max</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">HOME</span>
</a>
{/*  LIBRARY  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined text-2xl">menu_book</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">LIBRARY</span>
</a>
{/*  PATH  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined text-2xl">ads_click</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">PATH</span>
</a>
{/*  TRAINING (ACTIVE)  */}
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined text-2xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</a>
{/*  SENSEI  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined text-2xl">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">SENSEI</span>
</a>
</nav>

    </>
  );
}
