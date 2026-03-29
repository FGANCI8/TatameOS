import React from 'react';

export default function BibliotecaDeVDeosDeLuta() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4 sticky border-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-high overflow-hidden">
<img alt="athlete profile photo" className="w-full h-full object-cover" data-alt="Intense close-up portrait of a professional fighter with focused eyes and sweat on skin in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGRhE5RSvtF_fe0PeiC42F6HZthHbV7XCqNMng-dP5KriCCL4hL9XllxY62wr09iGXG4_D3x3azewKznUwL8lhMSzFH2M3tM98v6_R9vWtYnD49JwhcmHkuzqvMhpFkTvQ36hX_TQyGikV8Et7KKdCE4Ew9JvHUuXFVpMtGZZahhhlIXAXJNHVMgYtxB07im9ZEcxWlNL6P3SBuJuurua8ybiAvFP-e1kjlLEG2CUlFHBJOTe4EhugsBX7y1qbcammlr7PD1qcSVzh"/>
</div>
<h1 className="font-['Lexend'] font-black tracking-tighter uppercase text-3xl italic text-[#E70000] dark:text-[#E70000]">KINETIC</h1>
</div>
<button className="w-10 h-10 flex items-center justify-center hover:bg-[#353534] transition-colors duration-150 active:scale-95 text-[#353534]">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="px-6 pt-8 max-w-7xl mx-auto">
{/*  Hero Section / Title  */}
<div className="mb-12">
<p className="font-body font-bold text-[10px] uppercase tracking-[0.2em] text-primary mb-2">ANALYTICS HUB</p>
<h2 className="font-headline font-black text-5xl md:text-7xl leading-tight uppercase tracking-tighter">BIBLIOTECA<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-inverse-primary">DE VÍDEOS</span></h2>
</div>
{/*  Filter Bar  */}
<div className="flex gap-4 mb-10 overflow-x-auto no-scrollbar pb-2">
<button className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-extrabold text-xs uppercase tracking-widest whitespace-nowrap">TODOS</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-headline font-extrabold text-xs uppercase tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">CAMPEONATOS</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-headline font-extrabold text-xs uppercase tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">SPARRINGS</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-headline font-extrabold text-xs uppercase tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">TÉCNICOS</button>
</div>
{/*  Video Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Card 1: Championship Win  */}
<div className="bg-surface-container-low group cursor-pointer transition-all">
<div className="relative aspect-video overflow-hidden">
<img alt="BJJ Championship Match" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" data-alt="Cinematic shot of two Brazilian Jiu-Jitsu practitioners in a high-stakes competition on a blue mat under harsh arena spotlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5BtlfqSLqaOMLl_sQjNngtdvg_wLUevRHleIRwQx7tSKXtqN8w31q4fTtYIn6B7jRsYMp8jyB4gXEiVJbzMna9pW3G8TshdoTwqgttFstIy1sSSQ7xv-Fs3Hh1WOkqEjSTsyqIYbva9ddDG-tcECpQaJZdJoGIwZmfcTCftRneZ7OMQ4BjzxS-j5gkJJLu6jHqB3JUnOSCqLswPKdYMmOlTXo_ad6qbXxj3mKxMEVdTl1beM1av53lAd67oHvFHes86pSa4CQx_cD"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="bg-primary-container text-on-primary-container px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">VITÓRIA</span>
<span className="bg-surface-container-highest/80 backdrop-blur-md text-white px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">12:45</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-6xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_circle</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-1">14 SET 2023 • MUNDIAL IBJJF</p>
<h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-on-surface group-hover:text-primary-container transition-colors">VS. MARCUS ALMEIDA</h3>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">GUARDA DE LA RIVA</span>
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">FINALIZAÇÃO</span>
</div>
</div>
</div>
{/*  Card 2: Sparring Loss  */}
<div className="bg-surface-container-low group cursor-pointer transition-all">
<div className="relative aspect-video overflow-hidden">
<img alt="MMA Sparring session" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" data-alt="Intense MMA sparring session in a gritty basement gym with light smoke and heavy shadows, showing raw athletic movement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1RyH0dlkxlqVgaizeNErWKUNnnbKblH-8ngedQIs0n1-shuQdP1y_JAPv90p4NV4hjOnoGIgT6ILqDV2U0kFbRlWBnk-jXYAGUh6qTNZS2KyTcMAcZ1KJDOwEqMpZTy7d90abgQ0sfDO7rxu5qgBEquJBNoqTTVztCeutwpG_fPkkaXvzdDrXcdjj_yJgROQ2wot9etfZe4tKhmOMju7ihGQCsCJ1aHezW8oHdDGFbaKYZKuav0lihML2OolqbFIhtoCDGrMatmrF"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="bg-surface-container-highest text-on-surface px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">DERROTA</span>
<span className="bg-surface-container-highest/80 backdrop-blur-md text-white px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">05:00</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-6xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_circle</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-1">02 OUT 2023 • ROLA INTERNO</p>
<h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-on-surface group-hover:text-primary-container transition-colors">VS. FELIPE PENA</h3>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">PASSAGEM</span>
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">DEFESA</span>
</div>
</div>
</div>
{/*  Card 3: Technical Win  */}
<div className="bg-surface-container-low group cursor-pointer transition-all">
<div className="relative aspect-video overflow-hidden">
<img alt="Judo Match" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" data-alt="Overhead dynamic shot of a judo throw execution on a yellow mat, capturing the momentum and technical precision of the move" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQKESNLLIZwuANpj-Kpqgrcq7KZk-y4XqKxAP8CtWywfwKSq99XOoyfuOheDY8Tgmnn786aZDkUouPz0UN-J0qkIzQoTI2Ix7uc0d11F6Rl1a7kUlslP545IHXK-8JHy9oUFNc3pui1zOVoyAilhnFEWSYXCdZl4eWIxDJ3IDK147Xtc0PyEO6NHhOeEr5Y83tnAEFW8znwv-LN6b00jN9zEmBJNY1pXx4T2qT99cj5M-UNEoX9b_ApUWYlOKb09WCcAbSRLFILlYN"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="bg-primary-container text-on-primary-container px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">VITÓRIA</span>
<span className="bg-surface-container-highest/80 backdrop-blur-md text-white px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">03:12</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-6xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_circle</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-1">10 NOV 2023 • COPA PODIUM</p>
<h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-on-surface group-hover:text-primary-container transition-colors">VS. NICHOLAS MEREGALI</h3>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">QUEDA</span>
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">ESTRANGULAMENTO</span>
</div>
</div>
</div>
{/*  Card 4: Sparring Win  */}
<div className="bg-surface-container-low group cursor-pointer transition-all">
<div className="relative aspect-video overflow-hidden">
<img alt="Boxing Training" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" data-alt="Action shot of a boxer landing a heavy hook on a punching bag in a dark industrial gym with sweat flying off the bag" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1nz8RGDax2jcrxxpNU6JaZ8r32hXWd8bbHoWtw4lgGqE2wwWm-l205QgvKI_fbSqwdJstsYNAQNi_SMunA6N3FaALtO2NsPNBhYl31xYefYFmSktTpTqv0skII2RNx-y8WtUV0nwqfJaaHZ8PXFCpb-k1qCtmtqwIiaLaeMNAL4565VRJg_wJtxEMRbh0rb3AjYHApELpgb2essVW-Hm5rQs4gZSqa_6WriU7BuYRACmjovsfoc-h50HlKJwJ5JYrwFkyvymRIR7m"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<span className="bg-primary-container text-on-primary-container px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">VITÓRIA</span>
<span className="bg-surface-container-highest/80 backdrop-blur-md text-white px-3 py-1 font-headline font-black text-[10px] tracking-tighter uppercase">10:00</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-6xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_circle</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-1">22 NOV 2023 • ROLA TÉCNICO</p>
<h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-on-surface group-hover:text-primary-container transition-colors">VS. LEANDRO LO</h3>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">CONTROLE</span>
<span className="border border-outline-variant/30 px-2 py-1 font-label font-bold text-[9px] uppercase tracking-widest text-tertiary">TRANSICÃO</span>
</div>
</div>
</div>
{/*  Card 5: Empty/Placeholder for 'Upload New'  */}
<div className="border-2 border-dashed border-surface-container-highest flex flex-col items-center justify-center p-12 hover:bg-surface-container-low transition-colors cursor-pointer min-h-[300px]">
<span className="material-symbols-outlined text-primary-container text-5xl mb-4">add_circle</span>
<p className="font-headline font-black text-xl uppercase tracking-tighter">ADICIONAR VÍDEO</p>
<p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary mt-2">NOVO COMBATE OU TREINO</p>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch overflow-hidden bg-[#353534]/80 backdrop-blur-xl dark:bg-[#353534]/80 z-50 border-none shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full w-full active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">SENSEI IA</span>
</a>
</nav>

    </>
  );
}
