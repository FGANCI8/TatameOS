import React from 'react';

export default function FinanceiroEMensalidade() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-black/80 backdrop-blur-xl fixed top-0 z-50 flex justify-between items-center px-6 py-4 w-full border-none">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu athlete in a black gi, intense expression, atmospheric gym lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzrQgJr0F-1zHK5XIEdo5xROnJU2GWuLVaJ3TlfUm8F-n0P1-a9E4kkPqz-Nt-30lxffRyU3mtj3Uf85K40BVlj5suE-b5me6CN8A5SE2gtDzjdV8DklEIt2l-zs7oRqejGJjEGpyzA1IUK39yo_RxMkiqP5YuylroX1xtZ9SiGeRGz4r_X6A-XTYVdYe3EkGlF-py4VaJI7mnz3IPUb11SD2psW7fKm0FOcrSOTQzJCftjgXQd23012ZbfrgZSjKv_lekXDJ5QwZA"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000]">KINETIC BJJ</h1>
</div>
<button className="text-[#E70000] hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-24 px-6 space-y-8">
{/*  Hero Status Section  */}
<section className="space-y-4">
<div className="flex justify-between items-end">
<div className="space-y-1">
<p className="font-['Inter'] uppercase text-[10px] font-bold tracking-[0.2em] text-tertiary">STATUS ATUAL</p>
<h2 className="font-['Lexend'] text-4xl font-black italic text-on-surface">FINANCEIRO</h2>
</div>
<div className="bg-[#E70000] px-4 py-1">
<span className="font-['Lexend'] font-black text-white text-sm">PAGO</span>
</div>
</div>
{/*  Bento Layout Main Card  */}
<div className="grid grid-cols-2 gap-px bg-surface-container-highest">
<div className="bg-surface-container-low p-6 space-y-2">
<span className="material-symbols-outlined text-[#E70000]" data-icon="event_repeat">event_repeat</span>
<p className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest text-tertiary">PRÓXIMO VENCIMENTO</p>
<p className="font-['Lexend'] text-2xl font-extrabold text-on-surface">15 NOV</p>
</div>
<div className="bg-surface-container-low p-6 space-y-2 border-l border-surface-container-highest">
<span className="material-symbols-outlined text-[#E70000]" data-icon="payments">payments</span>
<p className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest text-tertiary">VALOR MENSAL</p>
<p className="font-['Lexend'] text-2xl font-extrabold text-on-surface">R$ 280</p>
</div>
</div>
</section>
{/*  Primary Actions  */}
<section className="space-y-3">
<button className="kinetic-gradient w-full py-5 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-white" data-icon="description">description</span>
<span className="font-['Lexend'] font-black text-white uppercase tracking-wider">VER FATURA ATUAL</span>
</button>
<button className="w-full py-5 flex items-center justify-center gap-3 bg-surface-container-high border border-outline-variant/20 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-on-surface" data-icon="credit_card">credit_card</span>
<span className="font-['Lexend'] font-black text-on-surface uppercase tracking-wider">ALTERAR MÉTODO</span>
</button>
</section>
{/*  Payment History  */}
<section className="space-y-6">
<div className="flex items-center gap-4">
<h3 className="font-['Lexend'] text-lg font-black uppercase italic tracking-tight">HISTÓRICO</h3>
<div className="h-[2px] flex-grow bg-surface-container-highest"></div>
</div>
<div className="space-y-2">
{/*  History Item 1  */}
<div className="flex items-center justify-between p-5 bg-surface-container-low">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div>
<p className="font-['Lexend'] font-bold text-on-surface">OUTUBRO 2023</p>
<p className="font-['Inter'] text-[10px] font-medium text-tertiary uppercase tracking-tighter">PAGO EM 15/10/2023</p>
</div>
</div>
<p className="font-['Lexend'] font-black text-on-surface">R$ 280,00</p>
</div>
{/*  History Item 2  */}
<div className="flex items-center justify-between p-5 bg-surface-container-low">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div>
<p className="font-['Lexend'] font-bold text-on-surface">SETEMBRO 2023</p>
<p className="font-['Inter'] text-[10px] font-medium text-tertiary uppercase tracking-tighter">PAGO EM 14/09/2023</p>
</div>
</div>
<p className="font-['Lexend'] font-black text-on-surface">R$ 280,00</p>
</div>
{/*  History Item 3  */}
<div className="flex items-center justify-between p-5 bg-surface-container-low opacity-60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest">
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div>
<p className="font-['Lexend'] font-bold text-on-surface">AGOSTO 2023</p>
<p className="font-['Inter'] text-[10px] font-medium text-tertiary uppercase tracking-tighter">PAGO EM 15/08/2023</p>
</div>
</div>
<p className="font-['Lexend'] font-black text-on-surface">R$ 280,00</p>
</div>
</div>
</section>
{/*  Subscription Details Card  */}
<section className="bg-[#1C1B1B] p-6 border-l-4 border-[#E70000]">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-[#E70000]" data-icon="info">info</span>
<div className="space-y-2">
<p className="font-['Lexend'] font-bold text-sm uppercase">PLANO BLACK BELT</p>
<p className="font-['Inter'] text-xs text-tertiary leading-relaxed">
                        Seu plano inclui acesso ilimitado a todas as unidades Kinetic BJJ, seminários mensais e rastreamento de performance avançado.
                    </p>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 h-20 bg-[#1C1B1B]/90 dark:bg-[#131313]/95 backdrop-blur-md z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="ads_click">ads_click</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-safe transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
