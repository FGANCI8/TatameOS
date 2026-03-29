import React from 'react';

export default function DetalheDaFalha() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313] dark:bg-black/80 backdrop-blur-md flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white cursor-pointer active:scale-95 duration-100">arrow_back</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl italic text-[#E70000] tracking-widest">KINETIC BJJ</h1>
</div>
<div className="w-8 h-8 bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="Close-up portrait of a focused Brazilian Jiu-Jitsu athlete with short hair and intense expression, dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2KSoEjx72sg-99_pMrzErry39vit7Lsun4TPikfgJMTAH0z1lLsUYGyv_AVQbecxi99nsEFuvu6qxUW27l2oxFwp9FbdEkbMGcyY-q1sUzt8DTCuFtGaSLufEHD6C5s9Qdifn_AMGUhhiD_QcyUMwOYcOetJImzDelJEjzycN6z0tKia5i3f7VzFa2omb2M3xVI13BAqoSsqAjeDVYZ5pSyV9urbbqme8tmMkl4zU_W11UkFyOWpiTm6T7KGyyanIBvRx6GXCQoIf"/>
</div>
</header>
<main className="pt-20 px-4 max-w-5xl mx-auto space-y-8">
{/*  Hero Header: The Shout  */}
<section className="space-y-2">
<span className="text-[#E70000] font-['Inter'] text-[10px] font-bold uppercase tracking-[0.2em]">Diagnóstico de Performance</span>
<h2 className="text-shout text-5xl md:text-7xl font-black leading-none">Triângulo Sofrido</h2>
<p className="text-tertiary-fixed-dim text-sm max-w-xl">Análise técnica de vulnerabilidade na guarda fechada e transições de postura.</p>
</section>
{/*  Bento Grid Analysis  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Intensity Card  */}
<div className="md:col-span-4 bg-surface-container-low p-6 flex flex-col justify-between border-l-4 border-primary-container">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Frequência Crítica</span>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-6xl font-black text-shout">68%</span>
<span className="text-primary-container font-bold text-sm">↑ 12%</span>
</div>
</div>
<div className="mt-8">
<p className="text-xs text-on-surface-variant leading-relaxed">Incidência acima da média para a categoria Faixa Roxa. Requer correção imediata na postura de ombros.</p>
</div>
</div>
{/*  Impact Visualization  */}
<div className="md:col-span-8 bg-surface-container p-6 relative overflow-hidden">
<div className="relative z-10">
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Impacto no Resultado</span>
<h3 className="text-shout text-2xl font-bold mt-2">Déficit de Pontuação</h3>
<div className="mt-6 flex items-end gap-1 h-32">
<div className="flex-1 bg-surface-container-highest h-[20%]"></div>
<div className="flex-1 bg-surface-container-highest h-[35%]"></div>
<div className="flex-1 bg-primary-container h-[85%]"></div>
<div className="flex-1 bg-surface-container-highest h-[45%]"></div>
<div className="flex-1 bg-primary-container h-[100%]"></div>
<div className="flex-1 bg-surface-container-highest h-[30%]"></div>
<div className="flex-1 bg-surface-container-highest h-[25%]"></div>
<div className="flex-1 bg-primary-container h-[90%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-tighter">
<span>Últimos 8 Sparrings</span>
<span className="text-primary-container">Submissão / Perda de Posição</span>
</div>
</div>
</div>
{/*  Context / Moment of Fight  */}
<div className="md:col-span-7 bg-surface-container-high p-6 flex flex-col gap-6">
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Contexto do Erro</span>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-lowest p-4 border-b-2 border-secondary">
<span className="material-symbols-outlined text-secondary block mb-2">timer</span>
<span className="text-xs block text-tertiary-fixed-dim uppercase">Momento</span>
<span className="font-bold text-lg">Final do Round</span>
</div>
<div className="bg-surface-container-lowest p-4 border-b-2 border-primary-container">
<span className="material-symbols-outlined text-primary-container block mb-2">bolt</span>
<span className="text-xs block text-tertiary-fixed-dim uppercase">Causa Raiz</span>
<span className="font-bold text-lg">Fadiga Postural</span>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-xs uppercase font-bold">
<span>Eficiência de Defesa</span>
<span>22%</span>
</div>
{/*  Performance Streak Component  */}
<div className="h-2 bg-surface-container-highest w-full relative">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-container to-inverse-primary" style={{ /* width: 22% */ }}></div>
</div>
</div>
</div>
{/*  Heat Map Reference  */}
<div className="md:col-span-5 bg-surface-container p-0 overflow-hidden group">
<div className="h-full w-full relative min-h-[240px]">
<img alt="Jiu Jitsu Analysis" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Birds-eye view of two Jiu-Jitsu practitioners on a black mat, one trapped in a triangle choke, highlighted with red tactical overlays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDofv2-tPMIf4APV_rOK5PKbrlXW9Y9JWKI7GyeejhryanEQX-pZZ2apJzNVFbK_RS6QTxLJDqf3MGRfv_Ce4GP7on8cdx_1V-o1nqq-taqBRYSMcGVV5kChcUPWkYIl3onyL86JWHOPPDXRyufnUbdv125gBaX_fwbxJ5cCSH2oAScCqhuJ4jfWdHZ18sUKhOCIV3k2E1IVIWIaLkb27V1HL09Uy3a-HQfRobn2oiWVVf5wqj6_HNA3ZjotUo-LQUXybQN5naOolkZ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-shout text-xl font-black block">Anatomia da Falha</span>
<span className="text-xs text-on-surface-variant">Braço isolado / Postura quebrada</span>
</div>
</div>
</div>
</div>
{/*  Technical Breakdown  */}
<section className="space-y-4">
<h3 className="text-shout text-2xl font-bold border-b border-outline-variant pb-2">Plano de Correção</h3>
<div className="space-y-3">
<div className="flex items-center gap-4 bg-surface-container-low p-4 hover:bg-surface-container-highest transition-colors">
<span className="w-12 h-12 flex items-center justify-center bg-surface-container-highest text-primary-container font-black text-xl italic">01</span>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Manutenção de Postura Vertical</h4>
<p className="text-xs text-tertiary-fixed-dim">Focar em manter o peito aberto e a coluna alinhada ao abrir a guarda.</p>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim">play_circle</span>
</div>
<div className="flex items-center gap-4 bg-surface-container-low p-4 hover:bg-surface-container-highest transition-colors">
<span className="w-12 h-12 flex items-center justify-center bg-surface-container-highest text-primary-container font-black text-xl italic">02</span>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Controle de Pegada na Gola</h4>
<p className="text-xs text-tertiary-fixed-dim">Não permitir o controle da nuca que quebra o alinhamento cervical.</p>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim">play_circle</span>
</div>
<div className="flex items-center gap-4 bg-surface-container-low p-4 hover:bg-surface-container-highest transition-colors">
<span className="w-12 h-12 flex items-center justify-center bg-surface-container-highest text-primary-container font-black text-xl italic">03</span>
<div className="flex-1">
<h4 className="font-bold text-sm uppercase tracking-tight">Drill de Saída de Emergência</h4>
<p className="text-xs text-tertiary-fixed-dim">Postura de "empilhar" imediata quando o quadril do oponente subir.</p>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim">play_circle</span>
</div>
</div>
</section>
{/*  CTA Action  */}
<button className="w-full py-6 bg-gradient-to-br from-primary-container to-inverse-primary text-on-primary-container font-black text-shout text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined">fitness_center</span>
            Iniciar Treino de Correção
        </button>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-safe bg-gradient-to-b from-[#1C1B1B] to-[#131313] z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
<div className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 cursor-pointer">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</div>
</nav>

    </>
  );
}
