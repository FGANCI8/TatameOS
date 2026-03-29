import React from 'react';

export default function PlanosDeAcesso() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" data-alt="professional brazilian jiu jitsu instructor in a black gi looking serious and focused in a gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsMKjyJMDt2LxzOt8KV7TEjG8Jz9bgoNTJZjBL8460b0nxPHBBB_zw3yE_RB_1u-F1qk-UXLiH6P0wwW_Yw7HuT1SHYNvulh2mj_vQa1YmWa41IHoF8Sa8xZ-rXsMgpBwrQShqp6Ogd1zCkPLk5hulXDRp6VluUImmuCj5rXW4CSjdoodjgRL4DpWsizhadHJ_Gopn-gehu5cGxJ3vh0f1h23iw8SQOeV90vvAsvqrYRs_jqa7ziwgNFyRiOrp4NfZeWFfuERFsmIR"/>
</div>
<h1 className="text-2xl font-black italic text-[#E70000] font-['Lexend'] uppercase tracking-tighter">KINETIC BJJ</h1>
</div>
<button className="text-[#393939] hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" style={{ /* font-size: 28px; */ }}>settings</span>
</button>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Section  */}
<section className="mb-12">
<p className="font-['Lexend'] text-sm font-bold uppercase tracking-widest text-secondary mb-2">EVOLUÇÃO SEM LIMITES</p>
<h2 className="font-['Lexend'] text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">ESCOLHA SEU <span className="text-primary-container">NÍVEL</span></h2>
<div className="h-1 w-24 bg-primary-container mb-8"></div>
</section>
{/*  Pricing Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
{/*  Plan: Gratuito  */}
<div className="bg-surface-container-low p-8 border-l-2 border-surface-bright flex flex-col h-full">
<div className="mb-8">
<h3 className="font-['Lexend'] text-2xl font-bold uppercase mb-1">Iniciante</h3>
<p className="text-tertiary-fixed-dim text-xs uppercase tracking-widest font-bold">Acesso Básico</p>
</div>
<div className="mb-10 flex flex-col gap-6 flex-grow">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-surface-bright">check_circle</span>
<p className="text-sm font-medium">Acesso a 5 técnicas semanais</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-surface-bright">check_circle</span>
<p className="text-sm font-medium">Cronômetro de treino básico</p>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-surface-bright">check_circle</span>
<p className="text-sm font-medium">Perfil de atleta público</p>
</div>
<div className="flex items-start gap-3 opacity-30">
<span className="material-symbols-outlined">block</span>
<p className="text-sm font-medium">IA de Feedback de Movimento</p>
</div>
</div>
<div className="mt-auto">
<div className="mb-6">
<span className="font-['Lexend'] text-4xl font-black">R$ 0</span>
<span className="text-tertiary text-sm">/mês</span>
</div>
<button className="w-full py-4 border border-outline-variant text-on-surface font-bold uppercase tracking-widest hover:bg-surface-container-high transition-colors active:scale-95 duration-100">
                        Plano Atual
                    </button>
</div>
</div>
{/*  Plan: KINETIC PRO (The Monolith)  */}
<div className="relative bg-surface-container-highest p-8 border-t-4 border-primary-container flex flex-col h-full overflow-hidden">
{/*  Highlight Badge  */}
<div className="absolute top-0 right-0 bg-primary-container text-on-primary-container font-['Lexend'] text-[10px] font-black px-4 py-1 uppercase tracking-tighter">
                    Recomendado
                </div>
<div className="mb-8 relative z-10">
<h3 className="font-['Lexend'] text-3xl font-black uppercase text-primary-container italic mb-1">KINETIC PRO</h3>
<p className="text-secondary text-xs uppercase tracking-widest font-black">Performance Elite</p>
</div>
<div className="mb-10 flex flex-col gap-6 flex-grow relative z-10">
<div className="flex items-start gap-4">
<div className="bg-primary-container/20 p-1">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div>
<p className="text-sm font-bold uppercase tracking-tight">Feedback IA Ilimitado</p>
<p className="text-xs text-tertiary-fixed-dim">Análise biomecânica de seus drills em tempo real.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-primary-container/20 p-1">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>rebase_edit</span>
</div>
<div>
<p className="text-sm font-bold uppercase tracking-tight">Trilhas Avançadas</p>
<p className="text-xs text-tertiary-fixed-dim">Do Berimbolo ao Leg Drag: currículo completo de competição.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-primary-container/20 p-1">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>videocam</span>
</div>
<div>
<p className="text-sm font-bold uppercase tracking-tight">Vídeos em 4K HDR</p>
<p className="text-xs text-tertiary-fixed-dim">Ângulos múltiplos e slow-motion detalhado de cada pegada.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-primary-container/20 p-1">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>star</span>
</div>
<div>
<p className="text-sm font-bold uppercase tracking-tight">Consultoria do Mestre</p>
<p className="text-xs text-tertiary-fixed-dim">Chat direto para análise técnica de suas lutas.</p>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="mb-6 flex items-baseline gap-2">
<span className="font-['Lexend'] text-5xl font-black">R$ 49</span>
<span className="text-tertiary text-lg font-bold">,90<span className="text-xs font-normal">/mês</span></span>
</div>
<button className="w-full py-5 bg-gradient-to-br from-primary-container to-inverse-primary text-on-primary-container font-['Lexend'] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_-10px_rgba(231,0,0,0.5)] hover:opacity-90 transition-all active:scale-95 duration-150">
                        Assinar Agora
                    </button>
<p className="text-center text-[10px] text-tertiary-fixed-dim mt-4 uppercase font-bold tracking-widest">Cancele quando quiser. Sem carência.</p>
</div>
{/*  Abstract Background Detail  */}
<div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
<span className="material-symbols-outlined" style={{ /* font-size: 240px; font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
</div>
</div>
</div>
{/*  Comparison Details Table (Editorial Style)  */}
<section className="mt-24">
<h4 className="font-['Lexend'] text-xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-secondary pl-4">Comparativo Técnico</h4>
<div className="space-y-1">
<div className="grid grid-cols-3 py-4 border-b border-white/5 bg-surface-container-low px-4">
<div className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Recurso</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-center">Gratuito</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-center text-primary-container">Kinetic Pro</div>
</div>
<div className="grid grid-cols-3 py-6 px-4 items-center">
<div className="text-sm font-bold">Biblioteca de Técnicas</div>
<div className="text-center text-xs">Limitada (5/sem)</div>
<div className="text-center text-xs font-black text-secondary">Ilimitada (500+)</div>
</div>
<div className="grid grid-cols-3 py-6 px-4 bg-surface-container-low items-center">
<div className="text-sm font-bold">Qualidade de Vídeo</div>
<div className="text-center text-xs">720p</div>
<div className="text-center text-xs font-black text-secondary">4K Ultra HD</div>
</div>
<div className="grid grid-cols-3 py-6 px-4 items-center">
<div className="text-sm font-bold">Feedback de IA</div>
<div className="text-center text-xs"><span className="material-symbols-outlined text-error text-lg">close</span></div>
<div className="text-center text-xs font-black text-secondary">Tempo Real</div>
</div>
<div className="grid grid-cols-3 py-6 px-4 bg-surface-container-low items-center">
<div className="text-sm font-bold">Trilhas Customizadas</div>
<div className="text-center text-xs"><span className="material-symbols-outlined text-error text-lg">close</span></div>
<div className="text-center text-xs"><span className="material-symbols-outlined text-secondary text-lg" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span></div>
</div>
</div>
</section>
{/*  Testimonial Section  */}
<section className="mt-20 p-8 bg-[#0E0E0E] relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
<div className="w-24 h-24 flex-shrink-0 border-2 border-primary-container">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="close-up profile of a sweating athlete during intense training session in a dark environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJEDqWBc90VfhYNs4MCFOLxfWA-6Hp9gntr3wCHLUq_kMW0Ih-xU3dXFOMobtTicwuk674psys_UKh7laXfX4QpptlWO5KmS_R2hQ2U0JH1fWsQa2B0aKjvy-KPWKTnd9EnL11yD0oq_QP8MERk7A9aRBpVmbzrR0trTuiBMSPUyI8qKDdly0rnxH6mAEmMmmFFqCURW6L5iZOCnmtv79qsfhglMhojo5LqZ2JifIvoM3Ql3waBkowC3SJlk6KfeANUvMwWsqY6FQQ"/>
</div>
<div>
<span className="material-symbols-outlined text-primary-container mb-2">format_quote</span>
<p className="font-['Lexend'] text-lg italic leading-tight mb-2 uppercase">"O feedback da IA mudou meu ajuste no triângulo em apenas uma semana. O plano Pro se paga no primeiro treino."</p>
<p className="text-[10px] font-bold tracking-widest uppercase text-tertiary-fixed-dim">— Ricardo 'Lobo' Santos, Faixa Marrom</p>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl flex justify-around items-center pt-3 pb-6 px-4">
<div className="bg-gradient-to-r from-transparent via-[#E70000]/20 to-transparent h-[1px] top-0 absolute w-full"></div>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined">rebase_edit</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
