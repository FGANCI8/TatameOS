import React from 'react';

export default function BoasVindas() {
  return (
    <>
      
{/*  Hero Section with Background Image  */}
<section className="relative min-h-[618px] flex flex-col justify-end px-6 pb-12 overflow-hidden">
{/*  Background Image with Overlay  */}
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale opacity-60 brightness-75" data-alt="Intense black and white cinematic shot of two Jiu-Jitsu athletes grappling, highlighting muscle definition, sweat, and movement with dramatic high contrast lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQS_3NdC0DkLrj3p7eUmdd3pqa_26AjtFc5-MCwUgI-VPNDTr5i1jOaXleXcsQHW-ia5u4ItDwrkQGgjQBvXdGZOyMv1hn2GqI_byAu_HZh0sHnPEAhtJUAmPt62dHyMcWvWJZPf17iOoaJqiouyTh1jM974VLpS_t_uRD3ZUbM2hPFrP_749DZ1_7MH2yriwhW4KAGeHQF5y-Q9m1gagZyMlUHQUsb_gbE3dJh69kFUh4nFlCEuNBNtGwvII18hplM91sMS31YPUV"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
{/*  Kinetic Accent  */}
<div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/10 skew-x-[-20deg] translate-x-1/2 blur-3xl"></div>
</div>
{/*  Brand Headline  */}
<div className="relative z-10 space-y-2">
<div className="inline-block bg-primary-container px-3 py-1 mb-4">
<span className="font-headline font-black italic tracking-widest text-on-primary-container text-xs">ELITE PERFORMANCE</span>
</div>
<h1 className="font-headline text-5xl md:text-8xl font-black italic tracking-tighter leading-none">
                DOMINE A <br/>
<span className="text-primary-container">ARTE SUAVE</span>
</h1>
<p className="font-body text-tertiary-fixed-dim max-w-md mt-6 leading-relaxed">
                Bem-vindo ao <span className="text-on-surface font-bold">KINETIC BJJ</span>. Elevamos o seu Jiu-Jitsu através de tecnologia de ponta, metodologia de elite e inteligência artificial.
            </p>
</div>
</section>
{/*  Features Bento Grid  */}
<section className="px-6 py-12 space-y-8 bg-surface-container-lowest">
<div className="flex flex-col md:flex-row gap-4">
{/*  Library Feature  */}
<div className="flex-1 bg-surface-container-low p-8 border-l-4 border-primary-container relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" data-icon="menu_book">menu_book</span>
</div>
<div className="relative z-10">
<span className="material-symbols-outlined text-primary-container mb-4" data-icon="menu_book">menu_book</span>
<h3 className="font-headline font-extrabold text-xl uppercase tracking-tight mb-2">Biblioteca</h3>
<p className="text-sm text-tertiary-fixed-dim font-medium leading-snug">
                        Acesso total a centenas de técnicas categorizadas por posição e nível. Vídeos em 4K com múltiplos ângulos.
                    </p>
</div>
</div>
{/*  Path Feature  */}
<div className="flex-1 bg-surface-container-high p-8 border-l-4 border-secondary-fixed-dim relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" data-icon="rebase_edit">rebase_edit</span>
</div>
<div className="relative z-10">
<span className="material-symbols-outlined text-secondary-fixed-dim mb-4" data-icon="rebase_edit">rebase_edit</span>
<h3 className="font-headline font-extrabold text-xl uppercase tracking-tight mb-2">Trilhas</h3>
<p className="text-sm text-tertiary-fixed-dim font-medium leading-snug">
                        Caminhos de aprendizado estruturados. Da faixa branca à preta, saiba exatamente o que treinar hoje.
                    </p>
</div>
</div>
{/*  AI Sensei Feature  */}
<div className="flex-1 bg-surface-container-highest p-8 border-l-4 border-on-surface relative group overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl" data-icon="psychology">psychology</span>
</div>
<div className="relative z-10">
<span className="material-symbols-outlined text-on-surface mb-4" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<h3 className="font-headline font-extrabold text-xl uppercase tracking-tight mb-2">IA Sensei</h3>
<p className="text-sm text-tertiary-fixed-dim font-medium leading-snug">
                        Seu mestre particular disponível 24/7. Analise suas lutas, tire dúvidas técnicas e monte seu plano de treino.
                    </p>
</div>
</div>
</div>
</section>
{/*  Stats / Telemetry Section  */}
<section className="px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-surface">
<div className="w-full md:w-1/2">
<h2 className="font-headline text-3xl font-black italic tracking-tighter mb-8 leading-tight">
                RESULTADOS <br/> <span className="text-stroke-primary">MENSURÁVEIS</span>
</h2>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container p-6">
<div className="font-headline text-4xl font-black text-on-surface tracking-tighter">1.2K+</div>
<div className="font-label text-[10px] text-primary-container font-black uppercase tracking-widest mt-1">Aulas HD</div>
</div>
<div className="bg-surface-container p-6">
<div className="font-headline text-4xl font-black text-on-surface tracking-tighter">50+</div>
<div className="font-label text-[10px] text-primary-container font-black uppercase tracking-widest mt-1">Professores</div>
</div>
</div>
</div>
<div className="w-full md:w-1/3 bg-surface-container-high p-8 relative">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<div className="font-label text-[10px] text-tertiary uppercase tracking-[0.2em]">Status Atual</div>
<div className="font-headline font-bold text-lg uppercase">Nível: Iniciante</div>
</div>
</div>
{/*  Performance Streak Bar Component  */}
<div className="space-y-2">
<div className="flex justify-between font-label text-[10px] uppercase font-bold tracking-widest text-tertiary">
<span>Performance</span>
<span>0%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest">
<div className="h-full w-2 bg-gradient-to-r from-secondary to-on-secondary-container"></div>
</div>
</div>
<p className="mt-6 text-xs text-tertiary-fixed-dim italic leading-tight">
                "O Jiu-Jitsu é a ratificação do intelecto sobre a força bruta." — Helio Gracie
            </p>
</div>
</section>
{/*  Action Bar / Footer Onboarding  */}
<section className="fixed bottom-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pointer-events-auto gap-6">
<div className="hidden md:block">
<span className="font-headline text-2xl font-black italic text-primary-container">KINETIC BJJ</span>
</div>
<button className="w-full md:w-auto bg-primary-container text-on-primary-container px-12 py-5 flex items-center justify-center gap-4 group transition-all active:scale-95 shadow-[0_10px_40px_-10px_rgba(231,0,0,0.5)]">
<span className="font-headline font-black uppercase tracking-widest text-lg italic">INICIAR JORNADA</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
<div className="flex gap-4 md:hidden">
<div className="w-2 h-2 bg-primary-container"></div>
<div className="w-2 h-2 bg-surface-container-highest"></div>
<div className="w-2 h-2 bg-surface-container-highest"></div>
</div>
</div>
</section>
{/*  Empty spacer for fixed footer  */}
<div className="h-32"></div>

    </>
  );
}
