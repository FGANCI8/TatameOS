import React from 'react';

export default function ComparativoTTico() {
  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="fixed top-0 z-50 w-full bg-neutral-900/80 backdrop-blur-xl border-b-0 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Cinematic close-up of a Brazilian Jiu-Jitsu athlete face with intense focus and sweat, dark gym background, dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg81hpcO6MhLudzctL1Cjvhmlgd3Ool2joF5Q1bqZnTSe8E70_SiIwC2tN9GOyCJz2PbtDPm_WwF2Zrd5VsgvgbuNVQCO1SMV8cZznLUSqp1Z5xfMDX1CYKQ4VABM1_fYmfXpDYJMXNCGCH_FbdrAJiVEZkbnNceOONLOTwrV0xJwvQJhkO6QZ85zY6w7cpP7B0371AOmCAMhYcNDSmqQsyaa-BbEHu7VznAVrzqi5kgtHRoJmyZCOBLFW-IV523vCub2cuDyr1HHQ"/>
</div>
<h1 className="font-headline font-black italic text-white tracking-widest text-2xl">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-red-600 cursor-pointer hover:text-red-500 transition-colors">notifications</span>
</div>
</header>
<main className="pt-24 pb-32 px-4 max-w-7xl mx-auto overflow-x-hidden">
{/*  Hero Analysis Header  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-primary-container pl-6">
<div>
<span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary">Análise de Performance</span>
<h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mt-2">Divergência<br/>Tática</h2>
</div>
<div className="bg-surface-container-high p-4 flex flex-col gap-1 min-w-[200px]">
<span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">Eficiência Global</span>
<span className="font-headline text-4xl font-black text-primary-container italic">64%</span>
</div>
</div>
</section>
{/*  Main Comparison Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
{/*  User Choice Column  */}
<div className="flex flex-col gap-4">
<div className="bg-error-container/20 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-error mb-4 block">Sua Escolha</span>
<h3 className="font-headline text-3xl font-black text-white uppercase mb-6 leading-none">Insistiu na força na americana</h3>
<div className="aspect-video w-full bg-surface-container-lowest relative group cursor-crosshair">
<img alt="BJJ Technical error" className="w-full h-full object-cover opacity-60" data-alt="Detailed capture of a jiu-jitsu americana lock attempt showing excessive muscular tension and incorrect leverage, dark cinematic studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3sB_7_6AHnzSIG0kZJ2lZZx56FaJeefvpwyl-pYIj5XG-hP1ZS2_BPL4Wuml_wNL0DbzYzeAAqVXoMLvVht9GdKSDypLkJvCKU1MNFFEN0o9PjF4jiy_Hmu6S_RkbBmIQ_PY6Ywi4y8gF752WT3d3AGrlR4UnJTc8Xchx5ioQaOhfgjA6TvCegd09BSgAw350IeXlMXYyvGBng09d6T51O3z_OJgpyjkSih_ByVykxPrqzC8zK-m_x2bx-J0TAf4_oehw39e0JdCu"/>
<div className="absolute inset-0 border-2 border-primary-container/30"></div>
<div className="absolute bottom-4 left-4 bg-primary-container text-white px-3 py-1 font-label text-[10px] font-bold uppercase">Erro de Alavanca</div>
</div>
<div className="mt-8 space-y-4">
<div className="flex justify-between items-center border-b border-outline-variant pb-2">
<span className="font-label text-xs uppercase text-tertiary-fixed-dim">Gasto Energético</span>
<span className="font-headline text-xl text-error font-black">88%</span>
</div>
<div className="flex justify-between items-center border-b border-outline-variant pb-2">
<span className="font-label text-xs uppercase text-tertiary-fixed-dim">Risco de Raspagem</span>
<span className="font-headline text-xl text-error font-black">ALTO</span>
</div>
</div>
</div>
</div>
{/*  Sensei Choice Column  */}
<div className="flex flex-col gap-4">
<div className="bg-surface-container-highest p-6 relative overflow-hidden border-t-4 border-secondary">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl text-secondary" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-4 block">Ideal Sensei</span>
<h3 className="font-headline text-3xl font-black text-white uppercase mb-6 leading-none">Transição para o norte-sul</h3>
<div className="aspect-video w-full bg-surface-container-lowest relative group cursor-pointer">
<img alt="BJJ Ideal Technique" className="w-full h-full object-cover" data-alt="Technical jiu-jitsu transition to North-South position, fluid motion, professional lighting, athlete wearing white gi, dark grey mats" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1H8jPLXssz9s9GYCYR4FvFLoGmSLFxIFsBYIKK-Rcsz0aVQfrRt8FsNeDFeIIPmitFMtzZH7gSVxcgPY-ghFqmNOe52TtsGNcnOPr3FERdfetI-OIwGnTsTS7Sq8iRWehO9EshNDZeRtdbXY4lpwA5D7i5fIcZGG0rdpSw88n9K31-XjZT2suvENjx2J5TPMMMKDapOKDnoM5XJHaBwH2t1u5yNk459_47rQxdBx8wy9PKAMPCZpsGA-r6UEiA0HhNhe9CjVINRbr"/>
<div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-all"></div>
<div className="absolute bottom-4 left-4 bg-secondary text-on-secondary-fixed px-3 py-1 font-label text-[10px] font-bold uppercase">Domínio Posicional</div>
</div>
<div className="mt-8 space-y-4">
<div className="flex justify-between items-center border-b border-outline-variant pb-2">
<span className="font-label text-xs uppercase text-tertiary-fixed-dim">Gasto Energético</span>
<span className="font-headline text-xl text-secondary font-black">22%</span>
</div>
<div className="flex justify-between items-center border-b border-outline-variant pb-2">
<span className="font-label text-xs uppercase text-tertiary-fixed-dim">Controle de Quadril</span>
<span className="font-headline text-xl text-secondary font-black">TOTAL</span>
</div>
</div>
</div>
</div>
</div>
{/*  Technical Deep Dive (Bento Grid Style)  */}
<section className="mt-16">
<h4 className="font-headline text-2xl font-black uppercase tracking-tight text-white mb-8">Raio-X Técnico</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2 bg-surface-container p-8 border-l-2 border-secondary">
<span className="material-symbols-outlined text-secondary mb-4" data-icon="trending_up">trending_up</span>
<h5 className="font-headline text-xl font-bold text-white uppercase mb-4">Vantagem Tática</h5>
<p className="text-on-surface-variant font-body leading-relaxed text-sm">
                        Ao insistir na Americana contra um oponente que já defendeu o ângulo inicial, você compromete sua base. A transição para o <span className="text-secondary font-bold">Norte-Sul</span> aproveita a força do oponente para deslizar seu quadril, eliminando o espaço necessário para a reposição de guarda dele.
                    </p>
</div>
<div className="bg-primary-container p-8 flex flex-col justify-between group cursor-help">
<div>
<span className="material-symbols-outlined text-white mb-4" data-icon="emergency_home">emergency_home</span>
<h5 className="font-headline text-xl font-bold text-on-primary-container uppercase">Consequência</h5>
</div>
<p className="text-white/90 font-label text-xs uppercase tracking-wider font-bold">Perda de Montada em 4.2 segundos</p>
</div>
<div className="bg-surface-container-high p-8 flex flex-col gap-4">
<span className="font-label text-[10px] font-black text-tertiary uppercase tracking-widest">Feedback Cognitivo</span>
<div className="flex items-end gap-2">
<span className="font-headline text-5xl font-black text-white italic">A-</span>
<span className="font-label text-[10px] text-secondary mb-2">PONTO DE ATENÇÃO</span>
</div>
</div>
<div className="md:col-span-2 bg-surface-container-low p-8 relative overflow-hidden">
<div className="flex items-center gap-6">
<div className="flex-1">
<h5 className="font-headline text-xl font-bold text-white uppercase mb-2">Próximo Dril Recomendado</h5>
<p className="text-tertiary-fixed-dim text-xs font-label uppercase mb-4 tracking-tighter">Transição Fluida: Americana para Norte-Sul</p>
<button className="bg-white text-black font-headline font-black text-xs px-6 py-3 uppercase tracking-widest hover:bg-secondary transition-colors">Iniciar Treino</button>
</div>
<div className="w-32 h-32 bg-surface-container-highest shrink-0">
<img alt="Drill Preview" className="w-full h-full object-cover grayscale opacity-50" data-alt="Sequence of bjj movements demonstrating a smooth technical transition, top view, athletic aesthetics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkCQuFCWd6vgBJKVjVyHxWEN2PUCCiW7ZGSmorNh_t7x8ilJy2RgYJ9tlriTabCmsY9i9y26BJMGqE-yf1NVpiUYFV3nrrCRxCReaLdceAlkfSSRqgKR6dm3K1Fe0n31RxZE05nJXRgxWVc93BPQ4rj14l57alJilX_ZTOhGk9XDiEk-6PtIJaP0BfAUYwR8Vjv3Lmb3upoSO3WC8vbNRfvGH4BXoeFmtTJLnqWV3-zs5NoyC5-LN_eZAg1vCyq1iRsYtBY1ixZwKV"/>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar Shell  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-neutral-900/90 backdrop-blur-lg border-t-0 z-50">
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-headline font-bold uppercase text-[10px] tracking-widest mt-1">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="video_library">video_library</span>
<span className="font-headline font-bold uppercase text-[10px] tracking-widest mt-1">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-white bg-red-600 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-headline font-bold uppercase text-[10px] tracking-widest mt-1">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-headline font-bold uppercase text-[10px] tracking-widest mt-1">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-headline font-bold uppercase text-[10px] tracking-widest mt-1">Sensei</span>
</div>
</nav>

    </>
  );
}
