import React from 'react';

export default function BibliotecaDeTCnicas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu athlete in a black gi with intense focus and sweat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWYwSzGeGgwhYgJB2s22MoG0P7VlVlNPlTodDZO5rpNmhQgi5OSmH9Ct4cr5QaDPsI_FVkJ7uHMs_SCRXR-cYW5lFLD7ljoyKRZcAHp_v8pwmLamZgZF8SMPMgun22OIlhW4_URRvKpfSByAPVHuDiPTZ-0kn9xpX2aFFaoMxooq2WFrWQcIAloGQCPqa2qj1Iqb1tHvyNHeADigYiP9vvUuiDOgOfueKzl50Lv4P2Tohpl8_zjoSWmY24E9oJF-18u57KK2aC2KQJ"/>
</div>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000]">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center hover:bg-[#353534] transition-colors text-[#C6C6C7] active:scale-95 duration-100">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
{/*  Header Section  */}
<section className="mb-12">
<h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter mb-4 leading-none">
                BIBLIOTECA DE <br/><span className="text-primary-container">TÉCNICAS</span>
</h2>
<p className="font-body text-tertiary-fixed-dim max-w-xl text-lg uppercase tracking-tight">
                A enciclopédia definitiva do Kinetic BJJ. Refine seu jogo com detalhes técnicos de nível elite.
            </p>
</section>
{/*  Faixas Selector (Bento Style)  */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-12">
<button className="bg-white text-black p-4 flex flex-col justify-between h-32 hover:brightness-90 transition-all border-l-8 border-black">
<span className="font-headline font-black text-2xl uppercase italic">Branca</span>
<span className="font-label text-[10px] font-bold tracking-widest uppercase">Fundamentos</span>
</button>
<button className="bg-[#0038A8] text-white p-4 flex flex-col justify-between h-32 hover:brightness-90 transition-all border-l-8 border-black">
<span className="font-headline font-black text-2xl uppercase italic text-secondary">Azul</span>
<span className="font-label text-[10px] font-bold tracking-widest uppercase opacity-80">Consolidação</span>
</button>
<button className="bg-[#4B0082] text-white p-4 flex flex-col justify-between h-32 hover:brightness-90 transition-all border-l-8 border-black">
<span className="font-headline font-black text-2xl uppercase italic text-secondary-fixed">Roxa</span>
<span className="font-label text-[10px] font-bold tracking-widest uppercase opacity-80">Refinamento</span>
</button>
<button className="bg-[#5D3A1A] text-white p-4 flex flex-col justify-between h-32 hover:brightness-90 transition-all border-l-8 border-black">
<span className="font-headline font-black text-2xl uppercase italic">Marrom</span>
<span className="font-label text-[10px] font-bold tracking-widest uppercase opacity-80">Eficiência</span>
</button>
<button className="bg-surface-container-lowest text-white p-4 flex flex-col justify-between h-32 border-2 border-primary-container hover:bg-primary-container transition-all border-l-8 border-black group">
<span className="font-headline font-black text-2xl uppercase italic group-hover:text-on-primary-container">Preta</span>
<span className="font-label text-[10px] font-bold tracking-widest uppercase opacity-80 group-hover:text-on-primary-container">Mestria</span>
</button>
</div>
{/*  Filters  */}
<div className="flex gap-4 overflow-x-auto no-scrollbar mb-8 pb-2">
<button className="bg-primary-container text-on-primary-container px-6 py-2 font-label font-bold uppercase text-xs tracking-widest whitespace-nowrap">Todas</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-label font-bold uppercase text-xs tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">Guardas</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-label font-bold uppercase text-xs tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">Passagens</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-label font-bold uppercase text-xs tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">Finalizações</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-label font-bold uppercase text-xs tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">Quedas</button>
<button className="bg-surface-container-high text-tertiary-fixed-dim px-6 py-2 font-label font-bold uppercase text-xs tracking-widest whitespace-nowrap hover:bg-surface-container-highest transition-colors">Defesas</button>
</div>
{/*  Technique Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Technique Card 1  */}
<div className="group relative bg-surface-container-low overflow-hidden">
<div className="aspect-[4/5] relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" data-alt="Intense BJJ action shot showing a grappler applying a triangle choke in a professional competition setting with high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMF044ZceGf2C3zME2b-FmW-MBj-Y2TePdzE3x0Gc9O4-RPvMOdqEpe8-29MtxT6aJ9ioJbt9PV1CauNyQYKaFCoyGGiSjVe3qOnLEfYogG8m6CV_JkRw7GeoOWVo3ATsvawdOj-db37rL0pCZnNcYSbKmE9YE4trjbOc0t0VsKUzS9Sbia-2A8_k91AZrrmszbmloioLoZctl69zkoj14lkCXfeGvxwE4GId-A3EwkRPTdBM1bCyJinuwKbX1r8swdxORUgyHrxeQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<span className="bg-white text-black px-3 py-1 font-label font-black text-[10px] uppercase tracking-widest">Faixa Branca</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-primary-container font-label font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">Finalizações</span>
<h3 className="font-headline font-black text-3xl uppercase leading-none italic">Triângulo <br/>da Guarda</h3>
</div>
</div>
<div className="p-6 bg-surface-container-high flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase">Dificuldade</span>
<div className="flex gap-1 mt-1">
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
</div>
</div>
</div>
<button className="w-12 h-12 bg-primary-container flex items-center justify-center text-on-primary-container group-hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
</div>
{/*  Technique Card 2  */}
<div className="group relative bg-surface-container-low overflow-hidden">
<div className="aspect-[4/5] relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" data-alt="BJJ fighters grappling on the mat, one attempting a knee slide pass with dramatic shadows and focus on hand grips" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdOzCzKMIF3NWSlpTggH9i6P2yWXSb2fct5wYKIkqVkQ9QsNOR3jdtLoWxo4TPxQHAaPumAFftn1rcwwR5lp0OWLGSOIYWpmTvbyWP6_6r70XdqmRPQKXdxi6_EARedddSLC04ywLo2DVUK_pCuS4hRQVZKR2oudVfqWJXk9BYZ073S8y2UE2MbFHaDitfmGROkfrRP9JRYPR6rYjRYe2mPX7di8RCd1LIfBgpil_4NUnoDXclNnhuNBL_z0L9a34LW0z1pgOye70W"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<span className="bg-[#0038A8] text-white px-3 py-1 font-label font-black text-[10px] uppercase tracking-widest">Faixa Azul</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-primary-container font-label font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">Passagens</span>
<h3 className="font-headline font-black text-3xl uppercase leading-none italic">Knee Slide <br/>Pressure</h3>
</div>
</div>
<div className="p-6 bg-surface-container-high flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase">Dificuldade</span>
<div className="flex gap-1 mt-1">
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
</div>
</div>
</div>
<button className="w-12 h-12 bg-primary-container flex items-center justify-center text-on-primary-container group-hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
</div>
{/*  Technique Card 3  */}
<div className="group relative bg-surface-container-low overflow-hidden">
<div className="aspect-[4/5] relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" data-alt="Technical display of De La Riva guard hook with focus on foot positioning and gi manipulation, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAQHWNMIx7mIKY4Nk6WlVsDF9eTGxog7QYGeih4-p4mdYbyyVOrR_jVUvHyODHnmciGDNKVxrjuMjEDjgDA94FhTxa44lrn9xPzRuuN_KuMK-DP-h9PzzngRRkmtq30Fj0oSWNlpWYzgg-GXXVyraQALrKTF-_eNbdrMMmpohTZivz8e9ddZ8t1pzsaP1AmtqWn0LC5bQrcuBBP75d6YRordttIuwgVaQ6CJDoawrccFIyPwmHYH9YWTANDSpgPUD2EcOP09cUmTeJ"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<span className="bg-[#4B0082] text-white px-3 py-1 font-label font-black text-[10px] uppercase tracking-widest">Faixa Roxa</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-primary-container font-label font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">Guardas</span>
<h3 className="font-headline font-black text-3xl uppercase leading-none italic">De La Riva <br/>Complex</h3>
</div>
</div>
<div className="p-6 bg-surface-container-high flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase">Dificuldade</span>
<div className="flex gap-1 mt-1">
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-primary-container"></div>
</div>
</div>
</div>
<button className="w-12 h-12 bg-primary-container flex items-center justify-center text-on-primary-container group-hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
</div>
</div>
{/*  Pagination / Load More  */}
<div className="mt-16 flex justify-center">
<button className="border-2 border-primary-container px-12 py-4 font-headline font-black uppercase text-xl italic hover:bg-primary-container hover:text-on-primary-container transition-all">
                Ver Mais Técnicas
            </button>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-4 bg-[#131313]/80 backdrop-blur-xl border-t-0 bg-gradient-to-b from-[#1C1B1B] to-[#131313] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined mb-1" style={{ /* font-variation-settings: 'FILL' 1; */ }}>video_library</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined mb-1">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined mb-1">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined mb-1">school</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</a>
</nav>

    </>
  );
}
