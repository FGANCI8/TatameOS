import React from 'react';

export default function DetalheDaTCnica() {
  return (
    <>
      
{/*  TopAppBar Navigation Shell  */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface cursor-pointer" data-icon="arrow_back">arrow_back</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000]">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#C6C6C7]" data-icon="notifications">notifications</span>
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="close up headshot of a professional brazilian jiu jitsu athlete with a focused intense expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa_OHrki0PtGnj71QjIihPB2kJWTn9iD2yzwhTyeU9oIWaAW7afwsjSX3y3eiMaWviXNVwgaQprCaFD0bo4q48nu9J8EjOtRTHcn6AehNkAovQQYUDuMyubGeRC1ztWETVrUbdtangL_2SmrTyq0-HM6NkJPv6XM3Wo3XSOGDyAph-sbdzwyFc3nT5M1yOU6fEkaCe-LCweJsEC8xLjQ0L0tbhJL7dVG3Yy8bpyjMGoy-h-o4h11oUI00tdJQwRPP_QmteN0wxorIf"/>
</div>
</div>
</header>
<main className="pt-16 max-w-5xl mx-auto">
{/*  Highlighted Video Section  */}
<section className="relative aspect-video w-full bg-surface-container-lowest overflow-hidden">
<img className="w-full h-full object-cover opacity-60" data-alt="cinematic action shot of two jiu jitsu athletes performing a high-level technical guard pass in a dark high-performance gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoton6xf7h8zGudzel6x9fvndaHK3VKpOAPbnOyhmiBqEDtu0QbtAKz7IttF4aWmjDK8G_azjmwxgiHgzz75bsrEIsesaflsyuXr3J34Tf6IN1v_1wRGMWisW82k3cJYSHqxXbKKYJ7Ils2S8oYTVj_F0EeTPzWmT_wA0WSuDWJo36Cf_Uarwl8PsbUFjAtLqVeWr-DCvgMr4IQ-ebfEyhGVaJtRTStnoQJdJUwu9qW0UDgjkLLvkQS_QJ8G2EFmSY6Qj0ckzYHIBW"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-20 h-20 bg-[#E70000] flex items-center justify-center active:scale-95 transition-transform">
<span className="material-symbols-outlined text-white text-5xl" data-icon="play_arrow" data-weight="fill" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<span className="bg-[#E70000] text-white px-2 py-1 font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mb-2 inline-block">Nível Avançado</span>
<h2 className="font-['Lexend'] font-black text-4xl md:text-6xl uppercase tracking-tighter text-white drop-shadow-2xl">Triângulo de Braço Invertido</h2>
</div>
</section>
<div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Main Content: Step by Step  */}
<div className="lg:col-span-8 space-y-12">
<section>
<h3 className="font-['Lexend'] font-black uppercase tracking-widest text-primary-container text-sm mb-8 border-l-4 border-primary-container pl-4">Passo a Passo Detalhado</h3>
<div className="space-y-0">
{/*  Step 1  */}
<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center text-on-surface font-['Lexend'] font-black text-xl">01</div>
<div className="w-px h-full bg-surface-container-highest group-last:bg-transparent mt-2"></div>
</div>
<div className="pb-10">
<h4 className="font-['Lexend'] font-bold text-lg text-white uppercase mb-2">Abertura de Guarda e Domínio</h4>
<p className="text-tertiary-fixed-dim leading-relaxed font-body">Inicie controlando a gola e a manga do oponente. Use o quadril para criar ângulo e force a abertura da base dele com um movimento explosivo de fuga de quadril para o lado oposto ao braço dominado.</p>
</div>
</div>
{/*  Step 2  */}
<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center text-on-surface font-['Lexend'] font-black text-xl">02</div>
<div className="w-px h-full bg-surface-container-highest group-last:bg-transparent mt-2"></div>
</div>
<div className="pb-10">
<h4 className="font-['Lexend'] font-bold text-lg text-white uppercase mb-2">Isolamento do Membro</h4>
<p className="text-tertiary-fixed-dim leading-relaxed font-body">Transpasse sua perna por cima do ombro do oponente enquanto mantém a pressão do peito. O braço dele deve ficar preso entre seu pescoço e sua coxa, garantindo que o cotovelo dele não retorne ao solo.</p>
</div>
</div>
{/*  Step 3  */}
<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center text-on-surface font-['Lexend'] font-black text-xl">03</div>
<div className="w-px h-full bg-transparent mt-2"></div>
</div>
<div className="pb-10">
<h4 className="font-['Lexend'] font-bold text-lg text-white uppercase mb-2">Finalização e Ajuste</h4>
<p className="text-tertiary-fixed-dim leading-relaxed font-body">Feche o cadeado com as pernas ou faça a pegada 'mão com mão' atrás da cabeça. Expanda o tórax e comprima os adutores simultaneamente para interromper o fluxo sanguíneo lateral.</p>
</div>
</div>
</div>
</section>
{/*  Common Errors Section  */}
<section className="bg-surface-container-low p-8 border-l-8 border-error-container">
<h3 className="font-['Lexend'] font-black uppercase tracking-widest text-error text-sm mb-6 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
                        Erros Comuns
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-error shrink-0" data-icon="dangerous">dangerous</span>
<span className="text-on-surface-variant font-body text-sm">Deixar espaço entre o seu quadril e o ombro do oponente, permitindo que ele escape o braço.</span>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-error shrink-0" data-icon="dangerous">dangerous</span>
<span className="text-on-surface-variant font-body text-sm">Não flexionar os pés (dorsiflexão) ao fechar o ajuste, perdendo potência na compressão.</span>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-error shrink-0" data-icon="dangerous">dangerous</span>
<span className="text-on-surface-variant font-body text-sm">Esquecer de manter o controle da gola oposta durante a transição inicial.</span>
</li>
</ul>
</section>
</div>
{/*  Sidebar: Teacher Notes & Metrics  */}
<aside className="lg:col-span-4 space-y-6">
{/*  Teacher Notes Card  */}
<div className="bg-surface-container-high p-6 border-t-2 border-secondary">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-surface-bright flex items-center justify-center overflow-hidden">
<img alt="Sensei" className="w-full h-full object-cover" data-alt="professional brazilian jiu jitsu master sensei profile picture with black belt visible around neck" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6xAIPSk-LfQpKUc7BFXf6ysYDgeXyYssct7ZdF2qwJroUmpeJa-pNvvbs0fo0Gq9mcehBXZvL9uk4lS6gafuBEjtJm1fD9HwEabMnyOevO8ch1ZPAutJ4w47nvZoFnAPtVr2uked_3dElTs-47d8-kdMXDOmjr1STktBvo7rHZB5MSCvjDC3BJdv_i1BDDT2HKjAX-Rd8XLixc3mYcED7qRbKH1kR4Ol96QcoFK1AcIVlG9vIOCRVl17sOf-nQUzODNN-yPM22D0Q"/>
</div>
<div>
<p className="font-['Lexend'] font-black text-white text-xs uppercase opacity-60">Sensei Responde</p>
<p className="font-['Lexend'] font-bold text-white uppercase">Lucas "Kinetik"</p>
</div>
</div>
<p className="text-tertiary-fixed-dim italic leading-relaxed font-body text-sm mb-4">
                        "O segredo desta técnica não está na força bruta, mas no ângulo morto que você cria quando foge o quadril. Lembre-se: 'A pressão é uma consequência do posicionamento, não do esforço'."
                    </p>
<div className="h-px bg-surface-container-highest mb-4"></div>
<div className="flex items-center gap-2 text-secondary font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">
<span className="material-symbols-outlined text-sm" data-icon="tips_and_updates">tips_and_updates</span>
                        Dica Extra: Use o quimono dele a seu favor.
                    </div>
</div>
{/*  Stats Grid  */}
<div className="grid grid-cols-2 gap-px bg-surface-container-highest">
<div className="bg-surface-container-low p-4 flex flex-col items-center justify-center text-center">
<span className="text-tertiary-fixed-dim font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mb-1">Dificuldade</span>
<span className="text-white font-['Lexend'] font-black text-xl uppercase">8/10</span>
</div>
<div className="bg-surface-container-low p-4 flex flex-col items-center justify-center text-center">
<span className="text-tertiary-fixed-dim font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mb-1">Tipo</span>
<span className="text-white font-['Lexend'] font-black text-xl uppercase">Finalização</span>
</div>
<div className="bg-surface-container-low p-4 flex flex-col items-center justify-center text-center">
<span className="text-tertiary-fixed-dim font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mb-1">Repetições</span>
<span className="text-white font-['Lexend'] font-black text-xl uppercase">20x</span>
</div>
<div className="bg-surface-container-low p-4 flex flex-col items-center justify-center text-center">
<span className="text-tertiary-fixed-dim font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mb-1">Calorias Est.</span>
<span className="text-white font-['Lexend'] font-black text-xl uppercase">120kcal</span>
</div>
</div>
{/*  CTA  */}
<button className="w-full bg-primary-container hover:bg-inverse-primary text-white py-5 px-6 font-['Lexend'] font-black uppercase tracking-widest text-sm transition-colors active:scale-[0.98] duration-100 flex items-center justify-center gap-3">
                    MARCAR COMO CONCLUÍDO
                    <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</button>
</aside>
</div>
</main>
{/*  BottomNavBar Navigation Shell  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-4 bg-[#131313]/80 backdrop-blur-xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="video_library">video_library</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="school">school</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</div>
</nav>

    </>
  );
}
