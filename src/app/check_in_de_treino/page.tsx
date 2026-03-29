import React from 'react';

export default function CheckInDeTreino() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full flex justify-between items-center px-6 h-16 bg-neutral-900/80 backdrop-blur-xl">
<button className="text-neutral-400 hover:text-white transition-colors active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="font-headline font-black uppercase tracking-widest italic text-2xl text-[#E70000] dark:text-red-600">
            KINETIC BJJ
        </h1>
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="Close up portrait of a focused martial artist athlete in a dark studio setting with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAANgkm6TYFbnMoUhZ_DeyxrlKI38UIigaHZaCFzAzXMgp7DAkxOG_qdfrosDIi7s00K4GRd2Ii4ZsRoinF3GxY73lfNij8VFapuaf5S04mK7FpOLlToGF345eja0FcO9I6PnfOmDqXQubh-ALko9xb3ygSpJrauLI8L0fpe_4_4_R6Nl_V1apfEB2BMD7wPET1GQBaE8_NKEqYiSF2r0_7x_gB4IfaTZieeCaO23fiPv8FY4ThJiah9nwJqjblH8GGDVjWIVYQ2ev7"/>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-2xl mx-auto min-h-screen">
{/*  Hero Check-in Header  */}
<section className="mb-10">
<p className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-2">Check-in de Atleta</p>
<h2 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter mb-4">Registro de<br/><span className="text-primary-container">Performance</span></h2>
<div className="w-16 h-1 bg-primary-container"></div>
</section>
{/*  Training Type Selection  */}
<section className="mb-12">
<label className="font-label text-[10px] uppercase tracking-widest text-tertiary mb-4 block">Selecione o Tipo de Aula</label>
<div className="grid grid-cols-3 gap-3">
<button className="group flex flex-col items-center justify-center py-6 bg-surface-container-low border border-transparent hover:border-primary-container transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl mb-2 text-primary-container" data-icon="checkroom">checkroom</span>
<span className="font-headline font-bold text-sm tracking-tighter uppercase">Gi</span>
</button>
<button className="group flex flex-col items-center justify-center py-6 bg-surface-container-high border border-primary-container transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl mb-2 text-primary-container" data-icon="dry_cleaning" style={{ /* font-variation-settings: 'FILL' 1; */ }}>dry_cleaning</span>
<span className="font-headline font-bold text-sm tracking-tighter uppercase">No-Gi</span>
</button>
<button className="group flex flex-col items-center justify-center py-6 bg-surface-container-low border border-transparent hover:border-primary-container transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl mb-2 text-primary-container" data-icon="exercise">exercise</span>
<span className="font-headline font-bold text-sm tracking-tighter uppercase">Drill</span>
</button>
</div>
</section>
{/*  Physical Feeling Scale  */}
<section className="mb-12">
<div className="flex justify-between items-end mb-4">
<label className="font-label text-[10px] uppercase tracking-widest text-tertiary">Sensação Física</label>
<span className="font-headline text-2xl font-black italic text-secondary">07 / 10</span>
</div>
<div className="flex gap-1 h-12">
<button className="flex-1 bg-[#343d96] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#4A4EB8] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#6162D6] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#8487E0] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#C6C6C7] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#E7BD6D] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#E78C4A] border-2 border-white scale-y-110 shadow-lg transition-all"></button>
<button className="flex-1 bg-[#E75D30] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#E72E15] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#E70000] hover:brightness-125 transition-all"></button>
</div>
<div className="flex justify-between mt-2 font-label text-[9px] uppercase tracking-widest text-neutral-500">
<span>Recuperado</span>
<span>Exausto</span>
</div>
</section>
{/*  Focus Text Field  */}
<section className="mb-12">
<label className="font-label text-[10px] uppercase tracking-widest text-tertiary mb-2 block">Foco do Treino</label>
<div className="relative bg-surface-container-lowest border-b-2 border-secondary focus-within:border-primary-container transition-colors">
<textarea className="w-full bg-transparent border-none text-on-surface placeholder:text-neutral-600 focus:ring-0 font-body text-sm py-4 px-0" placeholder="Ex: Passagem de guarda, finalizações do triângulo..." rows="3"></textarea>
</div>
</section>
{/*  Confirmation Button  */}
<section className="mt-8">
<button className="w-full py-6 bg-gradient-to-br from-primary-container to-inverse-primary flex items-center justify-center group active:scale-95 transition-transform">
<span className="font-headline font-black text-xl tracking-[0.2em] uppercase text-on-primary-container mr-3">Confirmar Treino</span>
<span className="material-symbols-outlined text-on-primary-container group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-end bg-[#1C1B1B] z-50 h-20 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="library_books">library_books</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-4 transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="fitness_center" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</a>
</nav>
{/*  Decorative Elements  */}
<div className="fixed top-0 right-0 -z-10 w-64 h-64 bg-primary-container/5 blur-[120px]"></div>
<div className="fixed bottom-0 left-0 -z-10 w-96 h-96 bg-secondary-container/5 blur-[150px]"></div>

    </>
  );
}
