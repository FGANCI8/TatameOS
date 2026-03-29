import React from 'react';

export default function BuscaInteligente() {
  return (
    <>
      
{/*  TopAppBar from JSON implementation  */}
<header className="fixed top-0 z-50 w-full h-16 px-6 flex justify-between items-center bg-neutral-900/80 backdrop-blur-xl border-b-0">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface cursor-pointer">menu</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000] dark:text-red-600 tracking-widest">KINETIC BJJ</h1>
</div>
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu Jitsu athlete with a focused expression and intense lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMWP9sn-YBRd9goBZiTGEQ0RM-OBsYOseB0y7rJRg_KX8yJArbmrgiZRyLaO3T_AsR307pX86-7komevwvCyUv7AVdkMqgbX1RAIM5vl4rQ_e3TDPinxYX_7VQZpZbrK0D5FUjPaTpXxrSm5X039GKCbyiZvvWTqTDMjHU2jDCk4rY-18K56NqNoNrfR6A5KKDqnY0RTMz3HUWCYXcifBsJCdZ7yFNu3URpIDh-3fEB0D4K_iDZRcCyz7vWdqvyheqXiz9xzWBq_8p"/>
</div>
</header>
<main className="pt-20 pb-24 px-4 max-w-5xl mx-auto min-h-screen">
{/*  Search Bar Section  */}
<section className="mb-10">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-primary-container">search</span>
</div>
<input className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-container-highest focus:border-primary-container focus:ring-0 text-on-surface placeholder:text-neutral-600 py-6 pl-12 pr-4 font-headline font-bold text-xl uppercase tracking-wider transition-all" placeholder="BUSCAR TÉCNICAS, ATLETAS OU TREINOS..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center">
<kbd className="hidden md:inline-flex items-center px-2 py-1 text-xs font-mono text-neutral-500 bg-surface-container-high border border-outline-variant">CMD + K</kbd>
</div>
</div>
</section>
{/*  Visual Categories (Bento Grid Style)  */}
<section className="mb-12">
<div className="flex items-baseline justify-between mb-6">
<h2 className="font-headline font-black text-sm uppercase tracking-[0.2em] text-neutral-500">Categorias em Destaque</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Category 1: White Belt  */}
<div className="relative h-48 bg-surface-container overflow-hidden group cursor-pointer border border-transparent hover:border-primary-container transition-colors">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" data-alt="Macro detail of a clean white martial arts gi fabric texture with sharp weaving patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6dJeydwWIEqYWdFMz91Qjak23y0KD5enug2UBGfwLa7WHaOqPW0y-oeGsKN214yGcnurOgNMKB5W2g-yopL4qH6wdFePs1BTsFCSh_nc0a4Uiaoq4cNgfGBmeFP4PHzJ1NZqridanMTbmxi6VoksIM0rAzvFCxBrLMrQkRiQAxJDmpaSETEpYAwjqm_buT0OvYsW-kE2Dw6ctcVe6Co4M8tqVjA7Ksnby4FmB2R5MasrtHHxq4Ry5V45qs92Vhvx66EOMfyH8Se5"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="block font-headline font-black text-2xl uppercase italic leading-none">Faixa Branca</span>
<span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary-container">Fundamentos</span>
</div>
</div>
{/*  Category 2: De La Riva  */}
<div className="relative h-48 bg-surface-container overflow-hidden group cursor-pointer border border-transparent hover:border-primary-container transition-colors">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" data-alt="Dynamic action shot of a BJJ practitioner performing a complex leg entanglement guard in a dark gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPIBiD8rFZCBofWCxHZ0iXSgLc-EQ4_puHRoH6hdZrsyOB60-RW5hAhr2wbpIgBIomTElrmB5AwbjnFk8euP0oc22ddU5coQTIB5hw6iKIx9aDsmb1FaqU-JZcZO1xk8YTntd2JafzaHaJ91wa4MFZfAzkxexb60sUXdvqkYOZ1g00plX8-tv-DWqGeYXifaDPta4fLIhe8mODwbbTqwKlXsct5vBwAqwHtxpStw5dxO4g8vblwkLHCYTEt9RB7fMLtbywXMiYO54i"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="block font-headline font-black text-2xl uppercase italic leading-none">Guarda De La Riva</span>
<span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary">Avançado</span>
</div>
</div>
{/*  Category 3: Finalizações  */}
<div className="relative h-48 bg-surface-container overflow-hidden group cursor-pointer border border-transparent hover:border-primary-container transition-colors">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" data-alt="Close up of a tight chokehold being applied with high intensity and dramatic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyyW2PsiPfWGKKlXbi08LahyPH6a3mWYq1N5dHLUzA_OdWoPm6BsQnM6Pm7KtN1qHemnckvqhSdyeR4cP62rPTaqwbok7CiVjynrsssufWXcPUeAFtC3BrDuGuHrHHeg7xzhpc4J4tvKAwiSWffJ-MMLFdC87kezOAYYseq5bqI8RWdLvYYL3iKfJyCT1N_TmjYjcs50Q2PmT9phlzRP7OgkW8hc5R6jUizVkXRO_loLlCdvaiUHhwirIzH53Au6BmTlOnlE-nCF2B"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="block font-headline font-black text-2xl uppercase italic leading-none">Finalizações</span>
<span className="text-[10px] font-bold tracking-[0.3em] uppercase text-on-error">Kill Zone</span>
</div>
</div>
</div>
</section>
{/*  Recent Searches & Quick Filters  */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
{/*  Recent Searches  */}
<aside className="lg:col-span-1">
<h3 className="font-headline font-black text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-xs">history</span>
                    Recentes
                </h3>
<ul className="space-y-4">
<li className="flex items-center justify-between group cursor-pointer">
<span className="text-on-surface font-bold text-sm uppercase tracking-wider group-hover:text-primary-container transition-colors">Triângulo Invertido</span>
<span className="material-symbols-outlined text-neutral-600 text-sm">close</span>
</li>
<li className="flex items-center justify-between group cursor-pointer">
<span className="text-on-surface font-bold text-sm uppercase tracking-wider group-hover:text-primary-container transition-colors">Passagem de Meia</span>
<span className="material-symbols-outlined text-neutral-600 text-sm">close</span>
</li>
<li className="flex items-center justify-between group cursor-pointer">
<span className="text-on-surface font-bold text-sm uppercase tracking-wider group-hover:text-primary-container transition-colors">Berimbolo Drill</span>
<span className="material-symbols-outlined text-neutral-600 text-sm">close</span>
</li>
</ul>
<div className="mt-12">
<h3 className="font-headline font-black text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">Popular</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-high text-[10px] font-black uppercase tracking-widest text-on-surface border border-outline-variant">ARM LOCK</span>
<span className="px-3 py-1 bg-surface-container-high text-[10px] font-black uppercase tracking-widest text-on-surface border border-outline-variant">REPOSIÇÃO</span>
<span className="px-3 py-1 bg-surface-container-high text-[10px] font-black uppercase tracking-widest text-on-surface border border-outline-variant">KIMURA</span>
</div>
</div>
</aside>
{/*  Results Preview  */}
<section className="lg:col-span-3">
<div className="flex items-baseline justify-between mb-6">
<h3 className="font-headline font-black text-sm uppercase tracking-[0.2em] text-neutral-500">Resultados Sugeridos</h3>
</div>
<div className="space-y-3">
{/*  Result Card 1  */}
<div className="flex items-center gap-4 bg-surface-container-low p-3 hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="w-16 h-16 bg-surface-container-highest flex-shrink-0">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Athletic practitioner demonstrating an armbar position with precise technical focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKrsmZTQ0F7yL1IkUjWWy2NhLUKmEviwbG9CdmkyD36kShdH5KfwY7radrOs6QHu8mqf9jg488UHJsXHul_i0tPZQVT3UuR_vLxp49Uw_pQ7Ww4l35RIMcvTPH9cpmAPitioZTs024OhoH2iEQj0gh588FfGqE50OMy8N9A8yjFFeHfPyq3AO7eprCS7HwDk3jcd17Pz1Dpdl8LUe7Lhf6IXAhY0akOZSa03RA3UfQGipqsRGW872x085QohAp5yObBK410GUgKqer"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-on-surface uppercase leading-tight group-hover:text-primary-container transition-colors">Chave de Braço da Montada</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Nível: Fundamental • Prof. André Galvão</p>
</div>
<span className="material-symbols-outlined text-neutral-600 group-hover:translate-x-1 transition-transform">chevron_right</span>
</div>
{/*  Result Card 2  */}
<div className="flex items-center gap-4 bg-surface-container-low p-3 hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="w-16 h-16 bg-surface-container-highest flex-shrink-0">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Intense grip fighting between two BJJ fighters in high-contrast cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCghz4r4hSV7MqtlXED1kQ3vA9lsggk-qoIfISoWTka8B4yAxovF_4lZaLLOPtK5s3YmTTQgp8vn0MV5MC4CHxZvd2Q8Q6Nhe6DpDYJtdC_hAAGsUd6dXyftsivW-vi3nQWelg1lN0iS9980Uk-GECW-wQvql1qvTUQKA6UuFVKrIi0W9PA1mBVz1epq8aC3nlWZzzsiDWTQHzJtVFSQT2COeng5x7Ys6vWGjQ_2JRVXtdd4ZYJmaqN3zZgMlQFHr7jEKpid34Zwpfp"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-on-surface uppercase leading-tight group-hover:text-primary-container transition-colors">Drills de Explosão para Guardeiros</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Treino • 15 Mins • Alta Intensidade</p>
</div>
<span className="material-symbols-outlined text-neutral-600 group-hover:translate-x-1 transition-transform">chevron_right</span>
</div>
{/*  Result Card 3  */}
<div className="flex items-center gap-4 bg-surface-container-low p-3 hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="w-16 h-16 bg-surface-container-highest flex-shrink-0">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="BJJ black belt sensei standing confidently in a minimalist training hall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ReJLAIHffUOCGZgzq5jOZ5Iu4cpIhSc-jBr5UF-13O1Ci33q7JQEBmWf3KcdPD35cQPhpiHb4AYaWoAmGP1c5krGoX6DgVEqj3XchWe0IUwpomeEz4ubR0E6MvsJAVtRzhfAXzfsbcdOspK-RnO4GECvBBUqPDtA4EeB1ydNSa_qY3mp32LFnH-MM4Kba0O8er_d2WKTnchffndcak-P8KmpYAAdRZO2bca3_GBNyu3QqKE892gXPOugwFEJsACzFuySypPkNCQT"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-on-surface uppercase leading-tight group-hover:text-primary-container transition-colors">Estratégias para Competição</h4>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Masterclass • Psicológico &amp; Tático</p>
</div>
<span className="material-symbols-outlined text-neutral-600 group-hover:translate-x-1 transition-transform">chevron_right</span>
</div>
</div>
</section>
</div>
</main>
{/*  BottomNavBar from JSON implementation  */}
{/*  Determined 'Biblioteca' or 'Início' could work, but search usually relates to 'Biblioteca' context for discovery  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-end bg-[#1C1B1B]/90 backdrop-blur-2xl h-16 shadow-[0_-4px_20px_rgba(52,61,150,0.06)] z-50">
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-4 transition-all" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</a>
</nav>

    </>
  );
}
