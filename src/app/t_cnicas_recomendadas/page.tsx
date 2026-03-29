import React from 'react';

export default function TCnicasRecomendadas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none flex justify-between items-center px-6 h-16 w-full bg-[#131313] dark:bg-black/80 backdrop-blur-md">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white cursor-pointer" data-icon="menu">menu</span>
<h1 className="text-2xl font-black italic text-[#E70000] tracking-widest font-['Lexend'] uppercase">KINETIC BJJ</h1>
</div>
<div className="flex items-center">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a focused athlete with intense expression in dark dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWte9LzowMboTeTpoL1dMeq-U-xDlHjucKpXtizeU21Piwfv0Ei-x8zTqDnOvgxDd7xdkc7PMxOX7cSCLLfe48hpOvOJa855xLJoV1Hwjw5jAOKM6E2mXPG18IISAIjGyd654IElMsgGA6i_ai7TXqKEItLm8Q6IXifIAGqnJSBgUGfXQI5YIzqJPR5MSoTjg9eD_3RC4jDCnLO1cJhMgYdIydBgbceRVhme_k1shHdhXwjrRBnqtxYJvznooK5PVhx2A0QECFaLQu"/>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
{/*  Hero Header Section  */}
<section className="mb-12 border-l-8 border-primary-container pl-6 py-4">
<p className="font-headline font-black text-primary-container uppercase tracking-widest text-sm mb-2">Análise de Performance</p>
<h2 className="font-headline font-black text-4xl md:text-6xl text-on-surface uppercase leading-none tracking-tighter">
                Corrigir Falha:<br/><span className="text-white opacity-40">Postura na Guarda</span>
</h2>
<div className="mt-6 flex flex-wrap gap-4">
<div className="bg-surface-container-high px-4 py-2 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container" data-icon="warning">warning</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Prioridade Alta</span>
</div>
<div className="bg-surface-container-high px-4 py-2 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="timer">timer</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">45min de Estudo</span>
</div>
</div>
</section>
{/*  Featured Technical Insight (Bento Large Item)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
<div className="md:col-span-2 bg-surface-container-low group cursor-pointer overflow-hidden relative">
<img alt="Mastering Grips" className="w-full h-96 object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" data-alt="BJJ fighters struggling for grip control on a dark mat with high contrast cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6INFrwQV_wL3iF3xko3iA13ykiiifWUCBbecpNWUzCoPjj39JtR7RI5kSkJbanNivq1Tu8xeSQSYrURwS5DNRSYn6IGOxGs_nR14oq8xqhZAh53tL0T7VEBsPfGcgb5CH8C91qwXJTC6iuA8fdNQfyZt-bezbv3eXAUtA16hF2qVZCoU2WU96Oi-MS4ancD5fDqdqA9YcurwaNhi5PP_QIETmUzEyhUzlwf-KhVu9VPN9ZSq67mdmy2CswUrxUCvUZDHteJUZoOXJ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-black uppercase mb-4 inline-block">Aula Master</span>
<h3 className="font-headline font-black text-3xl text-white uppercase mb-2">Quebra de Pegada: A Base de Ferro</h3>
<p className="font-body text-on-surface-variant max-w-md mb-6">Aprenda os princípios biomecânicos para neutralizar qualquer pegada antes de iniciar sua passagem.</p>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span>
<span className="text-xs font-bold uppercase tracking-widest">12:45</span>
</div>
<div className="flex items-center gap-2 text-primary-container">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
<span className="text-xs font-bold uppercase tracking-widest">Avançado</span>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-container flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_arrow" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
</div>
{/*  Recommendation Stats  */}
<div className="bg-primary-container p-8 flex flex-col justify-between text-on-primary-container">
<div>
<span className="material-symbols-outlined text-5xl mb-6" data-icon="psychology">psychology</span>
<h4 className="font-headline font-black text-2xl uppercase leading-tight mb-4">Recomendação do Sensei AI</h4>
<p className="font-body text-sm opacity-90 leading-relaxed">Com base nos seus últimos 3 sparrings, sua postura é quebrada por falta de tração escapular. Foque nestas 4 técnicas hoje.</p>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-xs font-black uppercase">Progresso da Correção</span>
<span className="font-headline font-black text-3xl">25%</span>
</div>
<div className="h-2 bg-on-primary/20 w-full">
<div className="h-full bg-white w-1/4"></div>
</div>
</div>
</div>
</div>
{/*  Technical Library Grid  */}
<div className="mb-8 flex items-center justify-between border-b border-surface-container-highest pb-4">
<h3 className="font-headline font-black text-xl uppercase tracking-widest">Biblioteca Técnica</h3>
<div className="flex gap-2">
<button className="w-10 h-10 bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<button className="w-10 h-10 bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="format_list_bulleted">format_list_bulleted</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Technique Card 1  */}
<div className="bg-surface-container-low group cursor-pointer hover:bg-surface-container-high transition-all duration-300">
<div className="aspect-video relative overflow-hidden bg-surface-container-highest">
<img alt="Empilhamento" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="High angle shot of a Jiu-Jitsu practitioner performing a pressure pass on a dark mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJF8vG6Ci4EoVzZRMu_3Vk4BZRVwoaJ-IrmgsyVfoL0p4V8-0qNVT5tAc1etAcNd066BJ8tfl6G4_1SHNPMVBW_Wbu2NB1q62hy5Dp8mbTCaUAYLoslL6dUsO2eBPlzmGgBU6NJuPRP-JYsqYg6aiw5UK-IHVzfOCkgcwpRnCfNupMLjGplKPdWHp1Uc2MAtu2C_QPfCcbiCNspgiFbr8WCa3Evalr7jVgHvCF0b5aTAUw9sqDSF_r2WIR0I4_qAS2enCNmz7bvW2O"/>
<div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-[10px] font-bold text-white uppercase tracking-tighter">08:20</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-black text-primary-container border border-primary-container px-2 py-0.5 uppercase tracking-widest">Intermediário</span>
</div>
<h4 className="font-headline font-bold text-lg text-white uppercase mb-2 group-hover:text-primary-container transition-colors">Empilhamento com Pressão</h4>
<p className="font-body text-xs text-on-surface-variant mb-4 line-clamp-2">A técnica definitiva para anular a guarda aberta e forçar o erro do oponente.</p>
<div className="flex items-center justify-between pt-4 border-t border-surface-container-highest">
<span className="font-label text-[10px] font-bold text-tertiary uppercase tracking-widest">Passagem de Guarda</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
{/*  Technique Card 2  */}
<div className="bg-surface-container-low group cursor-pointer hover:bg-surface-container-high transition-all duration-300">
<div className="aspect-video relative overflow-hidden bg-surface-container-highest">
<img alt="Posture Control" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Dynamic shot of a martial arts training session showing technical hand position in low light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvSfP8uI7wuhHbs6_QLV39_Qq2_MnhshH8afytFuwcnLz_ehzDxDBj82sLrktv8XgnIZGdkMyi-1U5Kw-VGazSDDWpKB_KzfgNUA62fixpiNNzeR_EtdLb1D8FFY21pt9bW8kJGELNQPkse9k2nOKLdo7pVmt7bfu2CPlnLzY05MBdN7NrvGYXz4zEi9uh90ikB4YMIZVYGcHSN0_mg_xvyA9DY2GBvOn_zAGVPkJE3Kne0-OzKGDC5S9aId-N7ihotlIj0T6KMsk-"/>
<div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-[10px] font-bold text-white uppercase tracking-tighter">05:15</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-black text-secondary border border-secondary px-2 py-0.5 uppercase tracking-widest">Iniciante</span>
</div>
<h4 className="font-headline font-bold text-lg text-white uppercase mb-2 group-hover:text-primary-container transition-colors">Postura Tática no Centro</h4>
<p className="font-body text-xs text-on-surface-variant mb-4 line-clamp-2">Distribuição de peso e alinhamento de coluna para evitar o desequilíbrio.</p>
<div className="flex items-center justify-between pt-4 border-t border-surface-container-highest">
<span className="font-label text-[10px] font-bold text-tertiary uppercase tracking-widest">Conceito Base</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
{/*  Technique Card 3  */}
<div className="bg-surface-container-low group cursor-pointer hover:bg-surface-container-high transition-all duration-300">
<div className="aspect-video relative overflow-hidden bg-surface-container-highest">
<img alt="Leg Weave" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Intense close up of BJJ athletes' legs during a leg weave pass on a high quality training mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_tKVpkCQpZzCbadLPKpGyPama4MlOYzuH3BfsUpxuaYdcHcWSkq4cMgCItepP4tGDEDEY6H961JqhDXX_hT2bJ7ZXREG3enq4EszR-DoJKSOBu-0RVrTMPN07M2tDFebWqEZqGjUD7Gkfn68JWDNLSlzBOgHH2mluoqxTFgWrwca1WhPfvR6gEAi11wOicXRLA0HtmeMfCbtGIl2iGi09GL1ElPcXVP6-NcOIbQM11gq4kHGaY7_CedlmJiEKLAidxOGhD1ShWgDh"/>
<div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-[10px] font-bold text-white uppercase tracking-tighter">10:30</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-black text-primary-container border border-primary-container px-2 py-0.5 uppercase tracking-widest">Avançado</span>
</div>
<h4 className="font-headline font-bold text-lg text-white uppercase mb-2 group-hover:text-primary-container transition-colors">Leg Weave Connection</h4>
<p className="font-body text-xs text-on-surface-variant mb-4 line-clamp-2">Como transitar entre o controle de quadril e a finalização lateral.</p>
<div className="flex items-center justify-between pt-4 border-t border-surface-container-highest">
<span className="font-label text-[10px] font-bold text-tertiary uppercase tracking-widest">Transição</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
</div>
{/*  Newsletter / CTA Section  */}
<section className="mt-20 bg-surface-container-lowest p-12 border-t border-primary-container flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h3 className="font-headline font-black text-4xl text-white uppercase mb-4 tracking-tighter leading-none">Domine cada centímetro do tatame.</h3>
<p className="font-body text-on-surface-variant mb-8 max-w-lg">Receba planos de aula semanais personalizados baseados na análise de vídeo dos seus treinos.</p>
<button className="bg-primary-container text-on-primary-container px-10 py-4 font-label font-black uppercase tracking-widest hover:bg-inverse-primary transition-all active:scale-95 duration-100 flex items-center gap-4">
                    Assinar Premium
                    <span className="material-symbols-outlined" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span>
</button>
</div>
<div className="hidden md:block w-1/3 aspect-square bg-surface-container-high relative">
<img alt="Academy View" className="w-full h-full object-cover opacity-60" data-alt="Wide shot of a minimalist, high-end BJJ academy with red and black mats and modern industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ZjCjK0HyL_2DvMNznzWALpreeF8qexUTDBxBqtm9fj4s3ijRKVcpGLLHS3DBBlq0BEs2HQpRDsjDwO3P3ydGqSTzn6Buq-zLmKrj9cqORa-zQjmsOjI15n8Pqvew37EF14uowu97wKWarXLuSPJolBqamNGC7dN1aBCzQ5uHYhxNjKsqmAUa4iGFR8nCEUB6dQ-smNRFjKGnm1VaXAUt7isEHEwUVlRsnio5XA9DAH8Tmdqt8civFjppVRFSGdWUBlCuysfJ7cDJ"/>
<div className="absolute -top-4 -left-4 w-full h-full border border-primary-container -z-10"></div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-safe bg-[#1C1B1B] dark:bg-[#0E0E0E] z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.5)] border-t-0 bg-gradient-to-b from-[#1C1B1B] to-[#131313]">
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="library_books" style={{ /* font-variation-settings: 'FILL' 1; */ }}>library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="psychology">psychology</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Sensei</span>
</a>
</nav>

    </>
  );
}
