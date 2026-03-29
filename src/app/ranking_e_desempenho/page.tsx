import React from 'react';

export default function RankingEDesempenho() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high flex items-center justify-center overflow-hidden">
<img alt="Instructor Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a focused Brazilian Jiu-Jitsu black belt instructor in a black gi, sharp dramatic lighting, athletic intensity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH6AKTlTlkatCZpvWV9nxIsHzg8vzQmx9iqc6VN2o--9Ws_X85k2gEIWPsvYqQE1l1Vcgv9tPjhsrqvNSqfULX4dTXvGjtb2Ct4UdBSGFnpJv_1SugFNXh6oCNRWmQNiiGWaZoKHer8jGcRdGJMex4VENUxWBf1CE4VUbamoHHIS2BXLGzKtzYiLWG52PVWsAfAvJC8XGHA8YdC_fVThzQtVtt0TZpRvDKUXC1Yu2_7Jy1aSjhsQ6BjPe5gXMpILPvxi2CBMyHRYHa"/>
</div>
<h1 className="text-2xl font-black italic text-[#E70000] font-['Lexend'] uppercase tracking-tighter">KINETIC BJJ</h1>
</div>
<button className="text-[#E70000] hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="pt-24 pb-32 px-4 max-w-4xl mx-auto space-y-10">
{/*  Performance Hero Stats  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="bg-surface-container-low p-6 flex flex-col justify-between aspect-video md:aspect-square">
<span className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim font-['Lexend']">Sua Posição</span>
<div className="flex items-baseline gap-2">
<span className="text-7xl font-black font-['Lexend'] text-on-primary-container italic">3º</span>
<span className="text-sm font-bold text-primary-container">RANKING GERAL</span>
</div>
</div>
<div className="bg-surface-container-high p-6 flex flex-col justify-between aspect-video md:aspect-square">
<span className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim font-['Lexend']">Consistência</span>
<div className="flex flex-col">
<span className="text-5xl font-black font-['Lexend'] text-on-surface italic">94%</span>
<div className="w-full h-1 bg-surface-container-highest mt-2">
<div className="h-full kinetic-gradient w-[94%] shadow-[0_0_10px_rgba(231,0,0,0.5)]"></div>
</div>
</div>
</div>
<div className="bg-surface-container-highest p-6 flex flex-col justify-between aspect-video md:aspect-square">
<span className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim font-['Lexend']">Evolução</span>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-4xl" data-icon="trending_up">trending_up</span>
<span className="text-4xl font-black font-['Lexend'] text-on-surface italic">+12.4%</span>
</div>
<p className="text-[10px] text-tertiary-fixed-dim leading-tight uppercase font-bold tracking-tighter">Comparado ao mês anterior</p>
</div>
</section>
{/*  Performance Chart Section  */}
<section className="space-y-4">
<div className="flex justify-between items-end">
<h2 className="text-2xl font-black font-['Lexend'] uppercase tracking-tight italic">Desempenho Semanal</h2>
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">Frequência e Intensidade</span>
</div>
<div className="bg-surface-container-low p-8 h-64 flex items-end justify-between gap-2 border-l-2 border-primary-container">
{/*  Mock Chart Bars  */}
<div className="flex flex-col items-center gap-2 w-full group">
<div className="w-full bg-surface-container-highest h-24 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-[40%] kinetic-gradient opacity-40"></div>
</div>
<span className="text-[10px] font-black uppercase text-tertiary">SEG</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-surface-container-highest h-40 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-[70%] kinetic-gradient opacity-60"></div>
</div>
<span className="text-[10px] font-black uppercase text-tertiary">TER</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-surface-container-highest h-32 relative overflow-hidden border-2 border-primary-container/20">
<div className="absolute bottom-0 w-full h-[55%] kinetic-gradient"></div>
</div>
<span className="text-[10px] font-black uppercase text-primary-container">QUA</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-surface-container-highest h-48 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-[85%] kinetic-gradient opacity-80"></div>
</div>
<span className="text-[10px] font-black uppercase text-tertiary">QUI</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-surface-container-highest h-56 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full kinetic-gradient"></div>
</div>
<span className="text-[10px] font-black uppercase text-tertiary">SEX</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-surface-container-highest h-16 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-[20%] kinetic-gradient opacity-20"></div>
</div>
<span className="text-[10px] font-black uppercase text-tertiary">SAB</span>
</div>
</div>
</section>
{/*  Ranking Leaderboard  */}
<section className="space-y-6">
<div className="flex justify-between items-center px-2">
<h2 className="text-2xl font-black font-['Lexend'] uppercase tracking-tight italic">Top Performers</h2>
<div className="flex gap-4">
<button className="text-primary-container text-[10px] font-black uppercase tracking-widest border-b-2 border-primary-container pb-1">TÉCNICA</button>
<button className="text-tertiary-fixed-dim text-[10px] font-black uppercase tracking-widest pb-1">FORÇA</button>
</div>
</div>
<div className="space-y-2">
{/*  Rank 1  */}
<div className="bg-surface-container-low p-4 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="text-2xl font-black font-['Lexend'] text-tertiary italic w-8">01</span>
<div className="w-12 h-12 bg-surface-container-highest flex-shrink-0">
<img alt="Rank 1" className="w-full h-full object-cover" data-alt="Intense athlete with focused expression, dark moody background, high contrast fitness photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxe5l9WcprC1mR15Cds_sSTAOtc5nUn0Sed7wGCFH6-FfcY__SJcFm7h4Dy1oGBtl34e1icpYrOl0LXOR2f8Gz6rCh7wxH_vn3marF4oH0Z5AKRUb1oX0t7ulQunQKsysIoOd0BShJf5CriJl0B6KeXdxIn36F363-M0p7F7nO0lgFQ3m7jcc8tt7r0UtYchtIOHBnHMe6b0t65RHoBE63qnrFHYkeWvcr3WCpnqWNVr-T4p7WgMGbA24Pw2hbL8lkBDe96qo125Jc"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-black uppercase font-['Lexend']">Marcos Almeida</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">Faixa Marrom</span>
</div>
</div>
<div className="text-right">
<span className="text-lg font-black font-['Lexend'] italic">2,450 XP</span>
</div>
</div>
{/*  Rank 2  */}
<div className="bg-surface-container-low p-4 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="text-2xl font-black font-['Lexend'] text-tertiary italic w-8">02</span>
<div className="w-12 h-12 bg-surface-container-highest flex-shrink-0">
<img alt="Rank 2" className="w-full h-full object-cover" data-alt="Dynamic shot of a combat athlete in motion, sweating, monochrome palette with red accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe0l2lUXeCZtYzQODvQnQK0n1tDoijLc2xX446Dt3bdwrGg0GiAbPHcSGzbSCK1g_UQh6swqOHesjTgpEVDRbYlPi822Uf5OX3qQu7S9DV_mgMXaqf8-U5VWHnVJQMs3C8poFhPmtikSZFSX7r4QBIuBSj8_ypmVPAksQpqApgZYdVB348vYNNxA0u5n-BBcW1Q6m9Xw2Sih9x8qsBKTp-vVzNAVW8M7xgd2UM6srDrm8zh1qmNjWEhuLs36F72BYiWTA8BLglV6mM"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-black uppercase font-['Lexend']">Carlos Eduardo</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">Faixa Roxa</span>
</div>
</div>
<div className="text-right">
<span className="text-lg font-black font-['Lexend'] italic">2,120 XP</span>
</div>
</div>
{/*  User Current Rank (Bruno Silva - Focus State)  */}
<div className="bg-surface-container-highest p-5 flex items-center justify-between border-l-4 border-primary-container relative">
<div className="absolute -left-1 top-0 bottom-0 w-1 kinetic-gradient"></div>
<div className="flex items-center gap-6">
<span className="text-3xl font-black font-['Lexend'] text-primary-container italic w-8">03</span>
<div className="w-14 h-14 bg-surface-container-high ring-2 ring-primary-container/30 ring-offset-2 ring-offset-surface flex-shrink-0">
<img alt="Bruno Silva" className="w-full h-full object-cover" data-alt="Portrait of Bruno Silva, an athletic young man in a white jiu-jitsu gi, looking determined, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlMQjpGuIwFn7ITnB-1DlODlz3vO6dv8Ji8z6iDwDubbibBIv3_ce2Vj5DHF25Ny3WxmSIl4YeR69jSNRx266bGoSOj4wz7a1mgiL9uuYDLhoRhZL3MQ_JpFrp58DYz2B8GUcnkLys6S05XfTznbBuCrpG8YIoCNy-7D_3ee2OEYqyofMtCwjim2qebyc67B-l4npavlUpo1PNfsOCPfHOLlk5wHbw_37NFmL5Wa3d1auzN1YEVmz33c0uo7ztVLL96sCib0APQQPt"/>
</div>
<div className="flex flex-col">
<span className="text-base font-black uppercase font-['Lexend'] text-on-primary-container">Bruno Silva</span>
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Faixa Azul</span>
<span className="h-1 w-1 bg-primary-container rounded-full"></span>
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Você</span>
</div>
</div>
</div>
<div className="text-right">
<div className="flex flex-col items-end">
<span className="text-2xl font-black font-['Lexend'] text-on-primary-container italic">1,985 XP</span>
<span className="text-[9px] font-bold text-secondary uppercase tracking-tighter italic">Subindo +4 posições</span>
</div>
</div>
</div>
{/*  Rank 4  */}
<div className="bg-surface-container-low p-4 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="text-2xl font-black font-['Lexend'] text-tertiary italic w-8">04</span>
<div className="w-12 h-12 bg-surface-container-highest flex-shrink-0">
<img alt="Rank 4" className="w-full h-full object-cover" data-alt="Woman tying her bjj belt, focus on the knot, cinematic athletic atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWUjNR4xIPtft4KG9QJ-DV9hubUo6huoBZp1Fdx0CouxHbzbguIWryG5Wr3Y2bsy6zb4-Zdp9OfW0fy6VOuPLYI9jphWJtEaITesg6C06dIbQZeeVUXEqexF-pJY30eiW_EsGCrhcZuplUsVllTW7W6ojAI_FFMcn6U1ic-NuWW659b-uTBr1vFqjON9Pha_IvO-HhMY2JzEPCLfEZ-KMvCfEEWQA63RdytEcGT01t0uFg5NfDQXOFHMKVSV1JV2WZMUZXY_3PAzqp"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-black uppercase font-['Lexend']">Ana Luiza</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">Faixa Azul</span>
</div>
</div>
<div className="text-right">
<span className="text-lg font-black font-['Lexend'] italic">1,840 XP</span>
</div>
</div>
</div>
</section>
{/*  Dynamic Insights (Asymmetric Card)  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-surface-container-low p-8 border-t-4 border-secondary flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary text-5xl mb-4" data-icon="rocket_launch">rocket_launch</span>
<h3 className="text-xl font-black font-['Lexend'] uppercase italic leading-tight mb-2">Pico de Performance</h3>
<p className="text-sm text-tertiary leading-relaxed">Sua consistência em treinos matinais aumentou 22%. A evolução técnica nas passagens de guarda está acima da média da sua categoria.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex-1 h-[2px] bg-surface-container-highest">
<div className="h-full bg-secondary w-2/3"></div>
</div>
<span className="text-[10px] font-black uppercase text-secondary">Acelerar Plano</span>
</div>
</div>
<div className="bg-surface-container-low p-8 border-t-4 border-primary-container flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[160px]" data-icon="fitness_center">fitness_center</span>
</div>
<div className="z-10">
<h3 className="text-xl font-black font-['Lexend'] uppercase italic leading-tight mb-2">Próxima Meta</h3>
<p className="text-sm text-tertiary leading-relaxed">Faltam apenas 15 treinos para a sua 3ª graduação na faixa. Mantenha a média de 4 treinos/semana para atingir em 28 dias.</p>
</div>
<button className="mt-8 kinetic-gradient text-on-primary-container py-3 px-6 text-xs font-black uppercase tracking-widest active:scale-95 transition-transform text-left">
                    Ver Trilha de Treino
                </button>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl flex justify-around items-center pt-3 pb-6 px-4">
<div className="bg-gradient-to-r from-transparent via-[#E70000]/20 to-transparent h-[1px] top-0 absolute w-full"></div>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined" data-icon="rebase_edit">rebase_edit</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</button>
<button className="flex flex-col items-center justify-center text-[#E70000] scale-110 active:scale-90 duration-150">
<span className="material-symbols-outlined font-variation-settings: 'FILL' 1;" data-icon="fitness_center" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</button>
</nav>

    </>
  );
}
