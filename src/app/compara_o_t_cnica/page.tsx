import React from 'react';

export default function ComparaOTCnica() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full bg-[#131313] px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer">menu</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-widest text-2xl italic text-[#E70000]">Kinetic_BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a focused Brazilian Jiu-Jitsu athlete with a black belt, cinematic lighting, dark gritty gym background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHU1L65PwOrqMDr5lNxWBeABhJYKYZj715f5xvJxYNC-5_rp4XIvE0kwLnf8QJ3pU1HKCnC-v_tjKzLR1b7saqlRGlfDUhNPxYKsOA-zPh5mrp94FSKUs_UvHKRTwj-ySccm7Asfpc0nvv2evtrOED1PyylLX82xBq0_foCrVxg-8MsKDLc4Y2nxcYCaDAU8DCvLpsQrtOcHF5mxeRWoSD0Q09Y8_0resQunZ9W8XUsqmYYS2tt0O2JpdNKboG-iOUhA9Fkhf1R3n2"/>
</div>
</header>
<main className="pt-24 pb-32 px-4 max-w-5xl mx-auto">
{/*  Hero Section / Title  */}
<section className="mb-12">
<span className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary mb-2 block">Análise de Telemetria Técnica</span>
<h2 className="font-headline text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                ERRO <span className="text-primary-container">VS</span> EXECUÇÃO
            </h2>
<div className="h-1 w-24 bg-primary-container"></div>
</section>
{/*  Comparison Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  THE ERROR CARD (LEFT)  */}
<div className="bg-surface-container-low border-l-4 border-error-container p-1">
<div className="relative aspect-video w-full bg-surface-container-highest overflow-hidden">
<img alt="Erro de pegada" className="w-full h-full object-cover opacity-60 grayscale" data-alt="High angle shot of a Jiu-Jitsu match showing incorrect low grip on the lapel, messy posture, dark moody lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC8dWtid28Nh4gg_5kqLbxgX-RNffWxiX1HYdYnjHpMswKrcR0moeq9p6hkI8s8ToTPvZ4s3aCw1ZNQX7LNkOKxv4Ri0H5DDZ2kGvLFEJYSpZmHAUFPXHWp6ccAHt4L0pmgE_ZUX4xh5TRjOIElHlaGASSva6HFh-wsUFQzcLme_T5PaSrBmi2cw5-y7eh66sknJ1PQbrmM-lCjUS0mLUDA6q73rJlbJ_PY2PW6KmEYvzs61CZumu7nSHdBX_Mmkgobhxd3isR_O1u"/>
<div className="absolute top-4 left-4 bg-error-container text-on-error-container px-3 py-1 font-headline font-bold text-xs uppercase italic">
                        Critical Error
                    </div>
<div className="absolute inset-0 border-[16px] border-error-container/10 pointer-events-none"></div>
</div>
<div className="p-6 bg-surface-container-low">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-error" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
<h3 className="font-headline text-xl font-bold uppercase tracking-tight">Pegada Baixa (Lapela)</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error-container text-sm mt-1">close</span>
<div>
<p className="font-bold text-sm uppercase text-tertiary-fixed">Postura Colapsada</p>
<p className="text-sm text-on-surface-variant">O centro de gravidade está projetado à frente, facilitando a raspagem.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error-container text-sm mt-1">close</span>
<div>
<p className="font-bold text-sm uppercase text-tertiary-fixed">Timing Atrasado</p>
<p className="text-sm text-on-surface-variant">Reação de 0.8s superior ao ideal, permitindo a antecipação do oponente.</p>
</div>
</li>
</ul>
</div>
</div>
{/*  THE EXECUTION CARD (RIGHT)  */}
<div className="bg-surface-container-high border-l-4 border-secondary p-1">
<div className="relative aspect-video w-full bg-surface-container-highest overflow-hidden">
<img alt="Execução Ideal" className="w-full h-full object-cover" data-alt="Close up of a perfect high lapel grip in BJJ, knuckles visible, tight elbow, high contrast athletic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJtLioeXuiV7oSM0_jXE8VF1aNl9bfdNyuuXjj7plP7e-eIgG0XTLpJZfHSvcKjKPcvwPl8S7pXXTNWZAFRqH9VzyNgoxbQwu_NG8WXkUxausoYGLS-jEK2pKcioF3x6pDNchgBYFL3_6qlTNDJq4m_3ZRCc9YT80lq26x2-DNHhy76jjy0h-i6rgYeBaQD0Iv8tEutr_QaxCxuz9xmRpfqYkLhI9Zc46Ri7QnnB0eV7DqdM5JJP0tRk7ZlyaMaj942tD1U1OKYMjZ"/>
<div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 font-headline font-bold text-xs uppercase italic">
                        Ideal Execution
                    </div>
</div>
<div className="p-6 bg-surface-container-high">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<h3 className="font-headline text-xl font-bold uppercase tracking-tight text-secondary">Alavanca Correta</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-sm mt-1">verified</span>
<div>
<p className="font-bold text-sm uppercase text-white">Coluna Neutra</p>
<p className="text-sm text-on-surface">Base sólida com distribuição de peso 60/40 nos quadris.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-sm mt-1">verified</span>
<div>
<p className="font-bold text-sm uppercase text-white">Pressão Constante</p>
<p className="text-sm text-on-surface">Cotovelo fechado criando conexão direta com o core do oponente.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
{/*  Analytical Metrics  */}
<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-highest p-6 flex flex-col justify-between aspect-square md:aspect-auto">
<p className="font-label text-[10px] uppercase tracking-widest text-tertiary">Eficiência Cinética</p>
<div>
<span className="font-headline text-6xl font-black text-secondary">94%</span>
<div className="w-full h-1 bg-surface-variant mt-2">
<div className="h-full bg-secondary w-[94%]"></div>
</div>
</div>
</div>
<div className="bg-surface-container-highest p-6 flex flex-col justify-between">
<p className="font-label text-[10px] uppercase tracking-widest text-tertiary">Risco de Lesão (Erro)</p>
<div>
<span className="font-headline text-6xl font-black text-primary-container">HIGH</span>
<p className="text-xs uppercase font-bold text-error mt-2 tracking-tighter">Stress excessivo no L4-L5</p>
</div>
</div>
<div className="bg-surface-container-highest p-6 flex flex-col justify-between">
<p className="font-label text-[10px] uppercase tracking-widest text-tertiary">Tempo de Resposta</p>
<div className="flex items-end gap-2">
<span className="font-headline text-6xl font-black text-white">0.3</span>
<span className="font-headline text-xl font-bold text-tertiary mb-2 uppercase">sec</span>
</div>
</div>
</section>
{/*  Action Section  */}
<section className="mt-8">
<button className="w-full bg-primary-container text-on-primary-container font-headline font-black uppercase py-6 text-lg tracking-widest hover:bg-inverse-primary active:scale-95 transition-all">
                REPETIR DRILL DE CORREÇÃO
            </button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full bg-[#1C1B1B]/80 backdrop-blur-xl flex justify-around items-center pt-3 pb-6 px-4 z-50">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">school</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</div>
</nav>

    </>
  );
}
