import React from 'react';

export default function Sucesso() {
  return (
    <>
      
{/*  Success Content Canvas  */}
<main className="flex-grow flex flex-col items-center justify-center px-6 pt-12 pb-24 relative overflow-hidden">
{/*  Atmospheric Background Element  */}
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-container/20 to-transparent"></div>
<div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary-container rounded-full blur-[120px]"></div>
</div>
{/*  Hero Celebration Section  */}
<div className="w-full max-w-md z-10 flex flex-col items-center text-center space-y-12">
{/*  Monolith Icon Container  */}
<div className="relative group">
<div className="absolute inset-0 bg-primary-container blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
<div className="relative w-40 h-40 bg-surface-container-highest border-b-4 border-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-8xl text-on-primary-container" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
</div>
{/*  Congratulation Typography  */}
<div className="space-y-4">
<p className="font-label text-secondary tracking-[0.3em] uppercase text-xs font-black">MISSÃO CUMPRIDA</p>
<h1 className="font-headline text-5xl md:text-6xl font-black text-on-surface tracking-tighter leading-none italic uppercase">
                    TREINO <br/> <span className="text-primary-container text-glow">FINALIZADO</span>
</h1>
</div>
{/*  Performance Stats Bento  */}
<div className="grid grid-cols-2 gap-px bg-surface-container-highest w-full border border-surface-container-highest">
<div className="bg-surface p-6 flex flex-col items-start justify-between space-y-4">
<span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">TEMPO TOTAL</span>
<div className="flex items-baseline gap-1">
<span className="font-headline text-3xl font-bold">54</span>
<span className="font-label text-xs text-secondary-fixed-dim">MIN</span>
</div>
</div>
<div className="bg-surface p-6 flex flex-col items-start justify-between space-y-4">
<span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">INTENSIDADE</span>
<div className="flex items-baseline gap-1">
<span className="font-headline text-3xl font-bold text-primary-container">ALTA</span>
</div>
</div>
<div className="bg-surface p-6 flex flex-col items-start justify-between space-y-4 col-span-2">
<span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">PROGRESSÃO DA TRILHA</span>
<div className="w-full bg-surface-container-highest h-2 relative">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary-container to-secondary" style={{ /* width: 75%; */ }}></div>
</div>
<div className="flex justify-between w-full font-label text-[10px] text-tertiary-fixed-dim">
<span>75% CONCLUÍDO</span>
<span>FAIXA AZUL</span>
</div>
</div>
</div>
{/*  Action Area  */}
<div className="w-full space-y-4 pt-4">
<button className="w-full py-5 bg-gradient-to-br from-primary-container to-inverse-primary text-on-primary-container font-headline font-black uppercase tracking-widest text-sm active:scale-95 duration-150 transition-transform">
                    VOLTAR AO INÍCIO
                </button>
<button className="w-full py-5 border border-outline-variant/30 text-on-surface font-label font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
                    VER RELATÓRIO COMPLETO
                </button>
</div>
</div>
{/*  Background Image for Athletic Context (Optional subtle overlay)  */}
<div className="absolute inset-0 z-[-1] opacity-5 mix-blend-luminosity">
<img alt="Athlete in motion" className="w-full h-full object-cover" data-alt="Close up of a muscular athlete gripping a gi collar in a dark, moody Brazilian Jiu-Jitsu gym environment with harsh cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdsNtHZheOdONsS-iLLQO2drfHT3KZMBUiAGPoL3NkD1YNMEZAhzqSmiA7_2IX_R12vODPgTbq9vNZ0w_L3KJDY7Q9cgaE0CtUEnjAHxlj3BFHZ66dNCYGAfmYz70tIcim0Obmct6H0enEoJfmq9lF58aYCBtlh4E_XdAlQ2bmiK8xmWYTT1_PTpzV5i2povhE2LhawuUZXxt75DBVZUoYwv9wkVAUhm5z9z5d2Xtpm2CunKyfBMJBpIycLoWQNA2Cu0g76Gs13owX"/>
</div>
</main>
{/*  Bottom Navigation Mock (Only if user needs to see it, here hidden as per transactional rule, but we keep the structure for shell consistency)  */}
{/*  Suppressed for transactional success screen focus  */}

    </>
  );
}
