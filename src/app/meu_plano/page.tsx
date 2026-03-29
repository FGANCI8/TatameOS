import React from 'react';

export default function MeuPlano() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-black/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 w-full fixed top-0 z-50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#E70000] text-2xl" data-icon="arrow_back">arrow_back</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000]">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white hover:opacity-80 transition-opacity active:scale-95 duration-100" data-icon="notifications">notifications</span>
<div className="w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="professional athletic male user profile avatar with focused expression dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Ur9Q_yTeQ8_QMqrf0OVRhxY69cmSXe76IkdJA-qlXX6EO_2u7wEsJAzmvskCOOpkdGrMsckKj4ZXP59U_6cKAasyDmPVrSv1GoyvlHPdJ1Y2UKGWvk6r5fvyr1clOAcHQX70e-5XC3yk0eoe9UVZtsaQAQ4J555fYp7W7QKNz2L7skQS_Ey3iF9Lasp6tVsKJkZmCHRQ9iFzyttMNIpGRf0_CuKCz3ssGLpBMKKrqB-Zgfx0incqzbspAnm-JzLSvpoTSlrONkl9"/>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Section / Current Plan  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row gap-6">
{/*  Current Plan Card  */}
<div className="flex-1 bg-surface-container-low p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 monolith-gradient opacity-10 blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>
<div className="relative z-10">
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-[0.2em] text-primary-container mb-2 block">STATUS ATUAL</span>
<h2 className="font-['Lexend'] text-5xl font-black italic tracking-tighter text-on-surface mb-6">KINETIC PRO</h2>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="font-['Inter'] text-sm font-semibold text-on-surface">Acesso Ilimitado à Biblioteca</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="font-['Inter'] text-sm font-semibold text-on-surface">Análise de IA (Sensei) Avançada</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="font-['Inter'] text-sm font-semibold text-on-surface">Prioridade em Seminários Online</span>
</div>
</div>
<div className="pt-6 border-t border-surface-container-highest flex items-center justify-between">
<div>
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest font-bold">PRÓXIMO VENCIMENTO</p>
<p className="text-on-surface font-black">15 AGO, 2024</p>
</div>
<span className="bg-surface-container-highest px-4 py-2 text-xs font-bold text-on-surface">R$ 89,90/mês</span>
</div>
</div>
</div>
{/*  Usage Telemetry  */}
<div className="w-full md:w-80 bg-surface-container-highest p-8 flex flex-col justify-between">
<div>
<h3 className="font-['Lexend'] text-xl font-black uppercase tracking-tighter mb-8 leading-none">TELEMETRIA DE RECURSOS</h3>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-2">
<span className="text-[10px] font-bold tracking-widest text-tertiary">TRILHAS EXTRAS</span>
<span className="text-[10px] font-bold text-primary-container">8/10</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full monolith-gradient" style={{ /* width: 80% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-[10px] font-bold tracking-widest text-tertiary">DOWNLOADS HD</span>
<span className="text-[10px] font-bold text-primary-container">12/15</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full monolith-gradient" style={{ /* width: 75% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-[10px] font-bold tracking-widest text-tertiary">CONSULTAS IA</span>
<span className="text-[10px] font-bold text-primary-container">92%</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full monolith-gradient" style={{ /* width: 92% */ }}></div>
</div>
</div>
</div>
</div>
<button className="mt-8 border border-outline-variant py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-on-surface hover:text-surface transition-all active:scale-95">
                        GERENCIAR LIMITES
                    </button>
</div>
</div>
</section>
{/*  Upgrade Section  */}
<section className="mb-12">
<h3 className="font-['Lexend'] text-3xl font-black uppercase italic tracking-tighter mb-8 border-l-4 border-primary-container pl-4">Evolua para Elite</h3>
<div className="grid md:grid-cols-2 gap-px bg-surface-container-highest">
{/*  Comparison: Kinetic Pro (Current)  */}
<div className="bg-surface-container-low p-10 flex flex-col">
<span className="text-[10px] font-black tracking-widest text-tertiary mb-2">VOCÊ ESTÁ AQUI</span>
<h4 className="font-['Lexend'] text-2xl font-black mb-6">PRO</h4>
<ul className="space-y-4 flex-grow">
<li className="flex items-center gap-2 text-sm text-on-surface">
<span className="material-symbols-outlined text-xs text-primary-container" data-icon="check">check</span> Aulas em 4K
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface">
<span className="material-symbols-outlined text-xs text-primary-container" data-icon="check">check</span> 10 Trilhas Customizadas
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface">
<span className="material-symbols-outlined text-xs text-primary-container" data-icon="check">check</span> Suporte em 24h
                        </li>
</ul>
</div>
{/*  Comparison: Kinetic Elite (Target)  */}
<div className="bg-surface-container p-10 flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 monolith-gradient opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
<span className="text-[10px] font-black tracking-widest text-primary-container mb-2">PRÓXIMO NÍVEL</span>
<h4 className="font-['Lexend'] text-2xl font-black mb-6">ELITE</h4>
<ul className="space-y-4 flex-grow mb-10">
<li className="flex items-center gap-2 text-sm text-on-surface font-bold">
<span className="material-symbols-outlined text-xs text-primary-container" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Trilhas Ilimitadas
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface font-bold">
<span className="material-symbols-outlined text-xs text-primary-container" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Feedback de Vídeo do Mestre
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface font-bold">
<span className="material-symbols-outlined text-xs text-primary-container" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Acesso antecipado a Camps
                        </li>
<li className="flex items-center gap-2 text-sm text-on-surface font-bold">
<span className="material-symbols-outlined text-xs text-primary-container" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span> Desconto de 30% na Loja
                        </li>
</ul>
<button className="w-full monolith-gradient py-5 font-['Lexend'] font-black uppercase italic tracking-tighter text-xl text-on-primary-container active:scale-95 transition-transform">
                        FAZER UPGRADE
                    </button>
<p className="text-center mt-4 text-[10px] font-bold text-tertiary tracking-widest">APENAS + R$ 40,00/MÊS</p>
</div>
</div>
</section>
{/*  Dynamic Card Example  */}
<section className="mb-12">
<div className="bg-surface-container-high flex flex-col md:flex-row items-center p-8 gap-8 border border-primary-container/20">
<div className="w-full md:w-1/3 aspect-video bg-surface-container-lowest overflow-hidden">
<img alt="BJJ Camp" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-500" data-alt="black and white intense bjj rolling session in a clean modern academy with natural light shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6JopgjV703P09Gu8o54zMnwcgkN472mckQNkJKmUFJmnlhaVfGwJtWK87lIjm42BNndg29uZr9Vr4UFceC65COSuTakvm3m4LRLCjiXv9yrpjcrJonJNHc9EV83yfatwAWB9x81U1oHeIZ1AQuw6mxFLOr-qkRYMy-IpaAjbMQhq8KTmOuATRX3te9qegcSfbbfF4PXgDLSyEyW9W5lcZrXoMCR1rIQaxZ10B9gy2xIGYMR87rZSVcT3fq6KloyPmNAu0Rd-BnOJ"/>
</div>
<div className="flex-1">
<h5 className="font-['Lexend'] text-xl font-black uppercase mb-2">CAMP EXCLUSIVO: KINETIC ELITE</h5>
<p className="text-sm text-tertiary mb-6 font-['Inter'] leading-relaxed">Alunos do plano Elite têm acesso prioritário ao nosso próximo camp presencial em Abu Dhabi. Garanta sua vaga antes de todos.</p>
<div className="flex gap-4">
<span className="text-[10px] font-black uppercase px-3 py-1 bg-primary-container text-on-primary-container tracking-widest italic">VAGAS LIMITADAS</span>
<span className="text-[10px] font-black uppercase px-3 py-1 bg-surface-container-highest text-on-surface tracking-widest">NOVEMBRO 2024</span>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 h-20 bg-[#1C1B1B]/90 dark:bg-[#131313]/95 backdrop-blur-md z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="ads_click">ads_click</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-safe active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
