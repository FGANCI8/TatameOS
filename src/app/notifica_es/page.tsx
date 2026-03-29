import React from 'react';

export default function NotificaEs() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover grayscale" data-alt="Intense close-up of a Brazilian Jiu-Jitsu instructor with a focused expression in a dimly lit training facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXtmCIBxvSxDsPdOi3WVpNAv-DLjVRkju-VoqR__T8LWI-14YYFnKUT8M01treichZOx5ChRXA1poF1Hwo6EyFJApSWSlYZ0ZZJYWhOV2m5qXAarUwWKcxAVxTrGnEJZEISKVA-gBuo7lTRIKoeq5peu45RZPkdZ3jU1thua1QEbxiTStw4Qnj3ecm2vEbeqZHmCZJ0eoJSe5N4Rfat9qjXZTgGHkX46UcEd7Vjvc7AKO5LQx0Clo4n3wAo2Gjc5B4KlnLBX8EZORr"/>
</div>
<h1 className="text-2xl font-black italic text-[#E70000] font-['Lexend'] uppercase tracking-tighter">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4 text-[#393939]">
<button className="hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined text-[#E70000]">settings</span>
</button>
</div>
</header>
{/*  Main Content  */}
<main className="flex-grow pt-24 pb-32 px-6 max-w-2xl mx-auto w-full">
<div className="flex flex-col gap-8">
{/*  Header Section  */}
<div className="flex justify-between items-end border-l-4 border-primary-container pl-4 py-2">
<div>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Telemetry // 04</span>
<h2 className="text-4xl font-black font-lexend uppercase tracking-tighter leading-none mt-1">Alertas</h2>
</div>
<button className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim hover:text-on-surface transition-colors">
                    Limpar Tudo
                </button>
</div>
{/*  Notifications Feed  */}
<div className="flex flex-col gap-3">
{/*  Notification: New Technique (Unread)  */}
<div className="bg-surface-container-low p-6 flex gap-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
<div className="flex-shrink-0 w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_circle</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Novo Conteúdo</span>
<span className="text-[10px] font-medium text-tertiary-fixed-dim">AGORA</span>
</div>
<h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Nova Técnica Liberada: Kimeta</h3>
<p className="text-sm text-tertiary-fixed-dim leading-relaxed">Aprenda os detalhes biomecânicos da finalização Kimeta com o Mestre Carlos.</p>
<div className="mt-4 flex gap-4">
<button className="bg-primary-container text-on-primary-container px-4 py-2 text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform">Assistir Agora</button>
</div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 bg-primary-container rounded-full shadow-[0_0_10px_rgba(231,0,0,0.6)]"></div>
</div>
{/*  Notification: Comment (Unread)  */}
<div className="bg-surface-container-low p-6 flex gap-6 relative group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
<div className="flex-shrink-0 w-12 h-12 overflow-hidden bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Professional profile photo of an older man with a grey beard and authoritative look in a gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG1zFSPRsSz0GPzpYzUlc_9nfEMaHRKtDwP5GPUqs8ZJivRNEziVAPJEaubTiMYuGX8tkmmTTBDmv8JlueKJ1TtVQvaiU8lTkoVZ7B6TFCnX3iqxTMHNqzPVYmqzPBr6gGxc37U6kb-nZ2gQrgABYSnEOfcMJc1gxsVPhNMwH31Ywd2_CplFz5yWxYtQORGKd2nippoyjozw-fwikXUPgSMcigZyduiw0QiUQi0YB1qQANLQai3_Rid3fSrdllWj0yHaLJci23Jjkn"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Comunidade</span>
<span className="text-[10px] font-medium text-tertiary-fixed-dim">2H ATRÁS</span>
</div>
<h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Professor Silva comentou no seu treino</h3>
<p className="text-sm text-tertiary-fixed-dim leading-relaxed italic">"Excelente ajuste no quadril durante a transição. Continue focando na pressão..."</p>
</div>
<div className="absolute top-4 right-4 w-2 h-2 bg-primary-container rounded-full shadow-[0_0_10px_rgba(231,0,0,0.6)]"></div>
</div>
{/*  Notification: Reminder (Read)  */}
<div className="bg-surface-container-lowest border border-white/5 p-6 flex gap-6 group opacity-80">
<div className="flex-shrink-0 w-12 h-12 bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary" style={{ /* font-variation-settings: 'FILL' 0; */ }}>calendar_today</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Cronograma</span>
<span className="text-[10px] font-medium text-tertiary-fixed-dim">5H ATRÁS</span>
</div>
<h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Lembrete: Treino de Amanhã</h3>
<p className="text-sm text-tertiary-fixed-dim leading-relaxed">Seu treino de Graduados começa às 07:00. Não esqueça de confirmar sua presença.</p>
</div>
</div>
{/*  Notification: Achievement (Read)  */}
<div className="bg-surface-container-lowest border border-white/5 p-6 flex gap-6 group opacity-80">
<div className="flex-shrink-0 w-12 h-12 bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Conquista</span>
<span className="text-[10px] font-medium text-tertiary-fixed-dim">1 DIA ATRÁS</span>
</div>
<h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Sequência de 10 Dias</h3>
<p className="text-sm text-tertiary-fixed-dim leading-relaxed">Você manteve sua consistência por 10 dias seguidos. Performance de elite detectada.</p>
</div>
</div>
</div>
{/*  Bento Stats Snippet  */}
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="bg-surface-container-high p-4 flex flex-col justify-between aspect-square border-r-2 border-b-2 border-primary-container/20">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>notifications_active</span>
<div>
<div className="text-4xl font-black font-lexend leading-none">02</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-1">Não Lidas</div>
</div>
</div>
<div className="bg-surface-container-low p-4 flex flex-col justify-between aspect-square">
<span className="material-symbols-outlined text-secondary" style={{ /* font-variation-settings: 'FILL' 0; */ }}>history</span>
<div>
<div className="text-4xl font-black font-lexend leading-none">24</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim mt-1">Arquivadas</div>
</div>
</div>
</div>
</div>
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
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</button>
<button className="flex flex-col items-center justify-center text-[#E70000] scale-110 active:scale-90 duration-150">
<span className="material-symbols-outlined" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</button>
</nav>

    </>
  );
}
