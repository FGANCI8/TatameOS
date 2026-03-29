import React from 'react';

export default function DetalheDoDesafio() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-neutral-900/80 backdrop-blur-xl fixed top-0 z-50 w-full flex justify-between items-center px-6 h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface cursor-pointer">arrow_back</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000] dark:text-red-600 tracking-widest">KINETIC BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="perfil de atleta de jiu-jitsu com olhar focado, iluminação dramática lateral e fundo escuro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIjJRojlB3VavwGFw1dJVe3N7jgG9LBfFZdOnqlhfLUndKF1gFG0HL1_6ivIKm3XSk1WzKil9ATQYHZ3R7N-Qn68MJ8OP6JayNHDi3L3uESk41vb0mObjMbsMZE_aoN0DwJPgAfbG432n61RYqSbxEmthEO0W-6DTHNgRK5ji5BNK-WhAz0sujr2ls_mpKTSuqxEubrq9VknP8gCkL6eQSd3sqIdZRw9RDgi9xKzqihOvnFXiMyN_2NP-z3qq4btPO_AcSbeB7-2VN"/>
</div>
</header>
<main className="pt-16 pb-32">
{/*  Video Hero Section  */}
<section className="relative w-full aspect-video bg-surface-container-lowest overflow-hidden group">
<img className="w-full h-full object-cover opacity-60" data-alt="lutador de jiu jitsu executando uma técnica de raspagem em câmera lenta, iluminação cinematográfica de alto contraste" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKPhHR1IK3pWGEICUK7SaABa27RJv6YARBZE2X0xCsSIXX-ut0FcEdD7oum3uZTB-FkrTbTL17bvi_qlQPYXjM0PPJTg5DSFpSgCtHIT4N4HqTt8se7ONVeGJR09Uxo1zmFUzYGqRpxWimAkVjtTw4hV5J7wupkIRibq2-jN_b_1z5mWdmdnP8xOiVYyA7xOjVyUa_2enLgFKXEYaNk5zVJa6jXsb0F6zXTO66JNlWd5GgEgWsU1r0mi3da4ZuVQZV_aXNGLJpwkX1"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-primary-container flex items-center justify-center cursor-pointer transition-transform duration-200 active:scale-95 shadow-2xl">
<span className="material-symbols-outlined text-on-primary-container text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-surface to-transparent">
<span className="bg-primary-container text-on-primary-container px-3 py-1 font-headline font-black text-xs uppercase tracking-widest mb-2 inline-block">Desafio Elite</span>
<h2 className="text-4xl font-headline font-black uppercase tracking-tighter italic">ARM-LOCK INSANO</h2>
</div>
</section>
{/*  Stats & Countdown Grid  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-surface-container-low">
<div className="p-8 border-r-0 md:border-r border-outline-variant/10">
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-2">Tempo Restante</p>
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-4xl font-headline font-black text-primary-container tracking-tighter">04</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-50">Dias</span>
</div>
<span className="text-4xl font-headline font-black text-primary-container">:</span>
<div className="flex flex-col">
<span className="text-4xl font-headline font-black text-primary-container tracking-tighter">12</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-50">Horas</span>
</div>
<span className="text-4xl font-headline font-black text-primary-container">:</span>
<div className="flex flex-col">
<span className="text-4xl font-headline font-black text-primary-container tracking-tighter">45</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-50">Min</span>
</div>
</div>
</div>
<div className="p-8 bg-surface-container">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professor de jiu jitsu veterano com kimono preto, cicatrizes de batalha sutis e expressão de liderança, fundo neutro escuro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARrfAhDHhJFXZDSWsKW4NRFhs54i6Egp02I8jTBGMT0mrjhX3IJxozR7Ds1jFm2sXNs9FWt4PNarWpDjW9W5nEELDdHWRwxbVLkUv34bBeI7TmHVa2r2PrM-LNbKCwDZOWC04wty_AGuo--OFQ-qMt5xl3k8S5aPl9YlsstkAKMPQsWRykhPk9amAC7kdNnRoOaTYGxBgOgXWz8HTgY3TwTUcckwE2Tf29c6AJLa0W4qOgft85dEsAWkIM0TFECIrvfjP0jt4Gt3bS"/>
</div>
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">Responsável</p>
<h3 className="font-headline font-bold text-lg uppercase italic">Mestre Ricardo "Lobo" Silva</h3>
<p className="text-xs text-on-surface-variant">Faixa Preta 4º Grau</p>
</div>
</div>
</div>
</section>
{/*  Progress Section  */}
<section className="p-8 bg-surface">
<div className="flex justify-between items-end mb-4">
<div>
<h4 className="font-headline font-black text-xl uppercase italic leading-none">Seu Progresso</h4>
<p className="text-[10px] font-label uppercase tracking-widest text-secondary mt-1">Nível: Competidor</p>
</div>
<div className="text-right">
<span className="text-3xl font-headline font-black italic text-secondary">75%</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="w-full h-3 bg-surface-container-highest">
<div className="h-full bg-gradient-to-r from-secondary-container to-secondary w-3/4 shadow-[0_0_15px_rgba(189,194,255,0.3)]"></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-[10px] font-label uppercase tracking-widest opacity-40 italic">3/4 Repetições Validadas</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-40 italic">Meta: Finalização Perfeita</span>
</div>
</section>
{/*  Rules & Instructions  */}
<section className="px-8 py-12 space-y-12">
<div>
<h3 className="font-headline font-black text-2xl uppercase italic border-l-4 border-primary-container pl-4 mb-8 tracking-tighter">Regras do Desafio</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<div>
<p className="font-headline font-bold uppercase text-sm tracking-tight mb-1">Execução Técnica</p>
<p className="text-on-surface-variant text-sm leading-relaxed">O movimento deve começar da guarda fechada e terminar com a extensão total do cotovelo do oponente em menos de 5 segundos.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<div>
<p className="font-headline font-bold uppercase text-sm tracking-tight mb-1">Registro de Vídeo</p>
<p className="text-on-surface-variant text-sm leading-relaxed">O vídeo deve ser gravado em ângulo lateral claro, sem cortes, mostrando o ajuste do quadril e a pegada final.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<div>
<p className="font-headline font-bold uppercase text-sm tracking-tight mb-1">Frequência de Treino</p>
<p className="text-on-surface-variant text-sm leading-relaxed">Mínimo de 3 treinos específicos por semana durante o período do desafio para validação da pontuação.</p>
</div>
</li>
</ul>
</div>
{/*  Bento Rewards Section  */}
<div className="grid grid-cols-2 gap-2">
<div className="col-span-2 bg-surface-container-high p-6 flex flex-col justify-between aspect-[16/7]">
<span className="material-symbols-outlined text-primary-container text-4xl mb-4">military_tech</span>
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">Prêmio Principal</p>
<h4 className="font-headline font-black text-2xl uppercase italic tracking-tighter">Patch "Guerreiro de Ferro"</h4>
</div>
</div>
<div className="bg-surface-container p-4 aspect-square flex flex-col justify-center items-center text-center">
<span className="text-3xl font-headline font-black text-secondary">500</span>
<span className="text-[10px] font-label uppercase tracking-widest mt-1">Pontos de Rank</span>
</div>
<div className="bg-surface-container p-4 aspect-square flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-secondary text-3xl">workspace_premium</span>
<span className="text-[10px] font-label uppercase tracking-widest mt-1">Certificado Digital</span>
</div>
</div>
</section>
{/*  CTA Action  */}
<section className="px-8 mb-12">
<button className="w-full h-16 bg-primary-container text-on-primary-container font-headline font-black text-lg uppercase tracking-widest shadow-2xl active:brightness-110 flex items-center justify-center gap-3 group">
                ENVIAR VÍDEO DO DESAFIO
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">upload_file</span>
</button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-end bg-[#1C1B1B]/90 backdrop-blur-2xl z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)] h-20">
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-4" href="#">
<span className="material-symbols-outlined" data-icon="insights" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
