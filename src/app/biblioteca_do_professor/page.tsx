import React from 'react';

export default function BibliotecaDoProfessor() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] flex items-center justify-between px-6 py-4 w-full sticky top-0 z-50">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#C6C6C7]">menu</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">OSMOSSIS</h1>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 font-bold text-xs tracking-widest uppercase transition-colors hover:bg-inverse-primary">
<span className="material-symbols-outlined text-sm">upload</span>
                SUBIR VÍDEO
            </button>
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a professional brazilian jiu jitsu instructor with a focused expression and athletic build" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFFgLa2PzyQJZehgXz5pq6G3RGG1B2PTkGQOXEZXKVxku1mokeh4e4xro94UbrALta94uCgiX6DjZ9SNRNEHTBYsFRAhVvJLgVd2hNe5ibcWMiaxoxxboQeoW_Q3neN1BSaZGgCpbmgHhqqXEszfCXBB7EQKNRY0Rlrux9T2ny5Cj0FXKTxqLO8N1YMRnOte70l200rros0bV3s1Rf4lzUQAcSgGYu3T3aYgVNR3q73idHBSSqfVRZWOlov9cI6qYvFGpC1sgCRQyP"/>
</div>
</div>
</header>
<main className="pb-24 pt-4 px-6 max-w-7xl mx-auto space-y-12">
{/*  Hero Section: Featured Technique  */}
<section className="relative w-full aspect-[21/9] bg-surface-container-lowest overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" data-alt="professional bjj athletes performing a complex sweep technique on a dark grey mat in a minimalist high-performance gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAelOxYw_VFHM989uwN3RQ3aSy7m7FJS1CKf3QCkndpY-W9nXTGRCDHONhixv0eXbnaTs6EAqjSq4okZiz2ERE-kF83wv6BCfVnIAmBmdooOTMy74txFDDI9H-fF5UK-s10x5eZ7j21wq7Uea5f-KV2MZCtbN8NWckVOmpX9XwzsN4GfRqZtWVD3hknb4C08UacdP4aN5H_NgXiJZ7Llr-U-SZQ6jih-PEmun1fExl0ZwAoO_UaQCzI_mjlZLB6FTLG_N1njhydFcT"/>
<div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
<span className="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-black tracking-[0.2em] w-fit mb-4 uppercase">DESTAQUE DA SEMANA</span>
<h2 className="font-headline text-5xl md:text-7xl font-black leading-none mb-4 uppercase max-w-2xl tracking-tighter">TRIÂNGULO INVERTIDO: VARIAÇÃO KINETIC</h2>
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">NÍVEL</span>
<span className="font-bold text-lg">AVANÇADO</span>
</div>
<div className="w-px h-8 bg-surface-container-highest"></div>
<div className="flex flex-col">
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">DURAÇÃO</span>
<span className="font-bold text-lg">12:45 MIN</span>
</div>
<button className="ml-auto bg-white text-black px-8 py-3 font-black text-sm tracking-widest uppercase hover:bg-primary-container hover:text-white transition-colors">
                        ASSISTIR AGORA
                    </button>
</div>
</div>
</section>
{/*  Pastas por Faixa: Asymmetric Grid  */}
<section className="space-y-6">
<div className="flex items-end justify-between border-b border-surface-container-highest pb-2">
<h3 className="font-headline text-2xl font-black tracking-tight uppercase">DOMÍNIO POR GRADUAÇÃO</h3>
<span className="text-[10px] font-bold tracking-widest text-tertiary-fixed-dim">5 CATEGORIAS</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
{/*  White Belt  */}
<div className="aspect-square bg-white text-black p-6 flex flex-col justify-between hover:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-4xl">folder_open</span>
<div>
<span className="block text-4xl font-black font-headline leading-none">01</span>
<span className="font-bold text-xs tracking-widest uppercase">BRANCA</span>
</div>
</div>
{/*  Blue Belt  */}
<div className="aspect-square bg-secondary-container text-on-secondary-container p-6 flex flex-col justify-between hover:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-4xl">folder_open</span>
<div>
<span className="block text-4xl font-black font-headline leading-none">02</span>
<span className="font-bold text-xs tracking-widest uppercase">AZUL</span>
</div>
</div>
{/*  Purple Belt  */}
<div className="aspect-square bg-[#41006E] text-white p-6 flex flex-col justify-between hover:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-4xl">folder_open</span>
<div>
<span className="block text-4xl font-black font-headline leading-none">03</span>
<span className="font-bold text-xs tracking-widest uppercase">ROXA</span>
</div>
</div>
{/*  Brown Belt  */}
<div className="aspect-square bg-[#5D3F3C] text-on-primary-container p-6 flex flex-col justify-between hover:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-4xl">folder_open</span>
<div>
<span className="block text-4xl font-black font-headline leading-none">04</span>
<span className="font-bold text-xs tracking-widest uppercase">MARROM</span>
</div>
</div>
{/*  Black Belt  */}
<div className="aspect-square bg-surface-container-lowest text-on-surface border border-surface-container-highest p-6 flex flex-col justify-between hover:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-4xl text-primary-container">folder_special</span>
<div>
<span className="block text-4xl font-black font-headline leading-none">05</span>
<span className="font-bold text-xs tracking-widest uppercase">PRETA</span>
</div>
</div>
</div>
</section>
{/*  Trilhas Personalizadas: Bento Grid  */}
<section className="space-y-6">
<div className="flex items-end justify-between border-b border-surface-container-highest pb-2">
<h3 className="font-headline text-2xl font-black tracking-tight uppercase">TRILHAS DE EVOLUÇÃO</h3>
<button className="text-[10px] font-black tracking-widest text-[#E70000] hover:underline">NOVA TRILHA +</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Large Track Card  */}
<div className="md:col-span-2 relative bg-surface-container-low p-8 flex flex-col justify-between min-h-[300px]">
<div className="z-10">
<h4 className="font-headline text-4xl font-black uppercase tracking-tighter mb-2">SISTEMA DE PASSAGEM DE GUARDA</h4>
<p className="text-tertiary-fixed-dim text-sm max-w-md">Uma sequência de 12 vídeos focados em pressão isométrica e controle de quadril para destruir qualquer guarda.</p>
</div>
<div className="z-10 space-y-4">
<div className="w-full bg-surface-container-highest h-1">
<div className="bg-primary-container h-full w-[65%]"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] font-bold tracking-widest uppercase">PROGRESSO: 65%</span>
<button className="bg-surface-container-highest px-6 py-2 text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-colors">CONTINUAR</button>
</div>
</div>
<img className="absolute right-0 top-0 h-full w-1/3 object-cover opacity-20 grayscale" data-alt="extreme close-up of a bjj gi texture with a black belt tied around the waist, dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVa7bK_BS1UI3QJfHyFfpaqc78Bq67ULgxvub_JDUgby2FKGOAlbmHxI1vPSUgJUWJBC_tJbYKOEvSV-iFBNtjtewNjsDr-pS_1bsIU40E6l9Trt9puLYQ8l052vQ5kdUigch3IvWCbMdTjJMBbNjNw6PjBBk4V5AJyQvFPb6jxHtLTrqfCWRihYoR1GK-t_t9VLtWY5mDVzhSVe_XFai8QhF7nWBFEB9kTgRJSFbyyJnXbwcK1jgqPeK3b5nnZl3scWc2WftZdRP0"/>
</div>
{/*  Small Focus Cards  */}
<div className="grid grid-rows-2 gap-6">
<div className="bg-surface-container-high p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary-container">timer</span>
<span className="text-[10px] font-black tracking-widest text-tertiary-fixed-dim">CURTA DURAÇÃO</span>
</div>
<h5 className="font-headline text-xl font-black uppercase tracking-tight">DRILLS DE MOBILIDADE</h5>
<span className="text-xs text-tertiary-fixed-dim uppercase font-bold">15 VÍDEOS</span>
</div>
<div className="bg-surface-container-high p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-secondary">psychology</span>
<span className="text-[10px] font-black tracking-widest text-tertiary-fixed-dim">ESTRATÉGIA</span>
</div>
<h5 className="font-headline text-xl font-black uppercase tracking-tight">MENTALIDADE DE COMPETIÇÃO</h5>
<span className="text-xs text-tertiary-fixed-dim uppercase font-bold">8 AULAS</span>
</div>
</div>
</div>
</section>
{/*  Recentes/Biblioteca: High-End List  */}
<section className="space-y-6">
<div className="flex items-end justify-between border-b border-surface-container-highest pb-2">
<h3 className="font-headline text-2xl font-black tracking-tight uppercase">ADICIONADOS RECENTEMENTE</h3>
<div className="flex gap-4">
<span className="material-symbols-outlined text-tertiary-fixed-dim cursor-pointer hover:text-white">search</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim cursor-pointer hover:text-white">filter_list</span>
</div>
</div>
<div className="space-y-4">
{/*  Item 1  */}
<div className="flex items-center gap-6 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="w-32 aspect-video bg-surface-container-highest relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="blurry action shot of grappling athletes in a modern dojo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBysrmwWpbasCZ_3U0kB_VNvdva6-_x5gsvv3RVduBXRRf2qET_Yq4LwGQMPxKsWWzjdO1EZI8NPAdfY4wBU-2TycBoLAoMrz9sqOelPhxCBNA8VTWrNPbOT5anNEOFDbqa0-UnQ2A81OjeM8yEvHnab8W2OtMEV9qXwwkv-tTsk00_e9PtORnoKhzy4KwlZcAVgmdH6i609Jk4GQiNNyIp-wPB6BMRl1kUlfjzpXoDjoOJQTp6Hh-oz3YPFJmQTkQ7iXTOeax1q_cq"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
<span className="material-symbols-outlined text-white">play_arrow</span>
</div>
</div>
<div className="flex-1">
<span className="text-[9px] font-bold tracking-widest text-primary-container uppercase">FAIXA AZUL</span>
<h6 className="font-bold text-lg uppercase tracking-tight">KNEE CUT PASS: VARIAÇÕES DE PEGADA</h6>
<p className="text-xs text-tertiary-fixed-dim">Adicionado há 2 horas • 08:22</p>
</div>
<div className="hidden md:flex flex-col items-end">
<span className="material-symbols-outlined text-tertiary-fixed-dim">more_vert</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim mt-2">SENSEI EXCLUSIVE</span>
</div>
</div>
{/*  Item 2  */}
<div className="flex items-center gap-6 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="w-32 aspect-video bg-surface-container-highest relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="black and white intense bjj training photo focused on grips" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6wHrpF0JUD40PMM_6FdViWlPMs7MM-HFhBhdfpZtNtP_VK4uvajSNb2nGe3IfPTuQO8cemiUiJRtXH7takeAoPF_Z4T1OumFJHq6uUGv5Hr94V7mEFVcxukb1ZnMGTDvvdfo-XZU-ExJowJ8T9ODzuMAT8hvcp0xf0xogyg7xxnnU18YYT38QXLJ_L0BqdTs0-eLsyW8-BtlLq2qDBK-2sO3XStXOIH5q4wajkMZb6Eymu7j6mBA1Nk6AF3oou4NM6gbMY_4p_1Nl"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
<span className="material-symbols-outlined text-white">play_arrow</span>
</div>
</div>
<div className="flex-1">
<span className="text-[9px] font-bold tracking-widest text-[#41006E] uppercase">FAIXA ROXA</span>
<h6 className="font-bold text-lg uppercase tracking-tight">CONTROLE DE LAPELA NA GUARDA DE HOOK</h6>
<p className="text-xs text-tertiary-fixed-dim">Adicionado há 1 dia • 15:10</p>
</div>
<div className="hidden md:flex flex-col items-end">
<span className="material-symbols-outlined text-tertiary-fixed-dim">more_vert</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim mt-2">TRILHA: CONTROLE</span>
</div>
</div>
{/*  Item 3  */}
<div className="flex items-center gap-6 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors group cursor-pointer">
<div className="w-32 aspect-video bg-surface-container-highest relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="athletic gym interior with mats and industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8nHqreVkXrDLOMko8MbIOAyvwAcSpMeBfZIcJ5qk6P_H8vovcwyaWn_3-h11h3-NJO6TbCwytnNU1VNqkVas5CXsglBQvwsbEKiz6cL5NQXMUbHc0348rcASXXLL4MHbPOyP606mdqLEFxsQNNzkR7qAP7A2rc5aXZZ1OnAoXzwy4SWVBeNbb6TqBuJ-E3nju5c7uPGyJaLSueEpgKe6jyG-pZAQxBce3hhJpa6d1wjdC3uWVlY_ZW9jNYt1wCubjp1p3_hh5QYxK"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
<span className="material-symbols-outlined text-white">play_arrow</span>
</div>
</div>
<div className="flex-1">
<span className="text-[9px] font-bold tracking-widest text-white uppercase">FAIXA BRANCA</span>
<h6 className="font-bold text-lg uppercase tracking-tight">SAÍDA BÁSICA DA MONTADA (UPA)</h6>
<p className="text-xs text-tertiary-fixed-dim">Adicionado há 3 dias • 05:45</p>
</div>
<div className="hidden md:flex flex-col items-end">
<span className="material-symbols-outlined text-tertiary-fixed-dim">more_vert</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim mt-2">ESSENCIAIS</span>
</div>
</div>
</div>
</section>
</main>
{/*  Floating Action Button: Fixed for Mobile/Context  */}
<button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg z-50">
<span className="material-symbols-outlined">add</span>
</button>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-[#131313]/90 backdrop-blur-md bg-gradient-to-t from-[#0E0E0E] to-transparent">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-4 border-[#E70000] pt-2 active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">local_library</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">timeline</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">SENSEI</span>
</a>
</nav>

    </>
  );
}
