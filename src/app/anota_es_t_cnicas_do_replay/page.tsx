import React from 'react';

export default function AnotaEsTCnicasDoReplay() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4 sticky">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-high flex items-center justify-center overflow-hidden">
<img alt="athlete profile photo" className="w-full h-full object-cover" data-alt="close-up portrait of a determined MMA fighter with intense gaze and athletic build in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2xqPc4Qmecvla0JESsYgc3bPspovsEpeQ9_jwz0ROC2SBAb6lOtha-GAsXtxSjfnUiDBvhDs70HVIQD1D-C2jIt4APoirve4YJeArI4BP8ysG3YqF0qWbQv_2RWy-tEbCNh7ZkQ-6crLDooknAKq0aj6ASQqOUxMaHoe2ZYHb_XCqs539AH2KYuk-Lx5tAQlHoPyewu-DHfwqlgmTrx5s6LiOnIMGXUkPEGa0-cS_dQpUFKS6M8NWgjQ3TuIXt2xaMS1IDfpJ_uli"/>
</div>
<h1 className="font-['Lexend'] font-black tracking-tighter uppercase text-3xl italic text-[#E70000] dark:text-[#E70000]">KINETIC</h1>
</div>
<button className="text-[#353534] hover:bg-[#353534] hover:text-white transition-colors duration-150 p-2 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-80px)]">
{/*  Video Section (Canvas)  */}
<section className="lg:col-span-8 bg-surface-container-lowest relative flex flex-col">
<div className="relative w-full aspect-video bg-black group overflow-hidden">
<img alt="training session" className="w-full h-full object-cover opacity-80" data-alt="high angle wide shot of two athletes grappling on a black mat in a high-performance training facility with moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0kyjcWr9MDHmn1H5-9PVEd6PI9vA548_kXxPn5Zkc87D65P49p2VpTaMRU8ciQAAwVZF8y1feJDvU9uM5ODBUgB965uc51s4qbFBYvqAnPzkrXT-1P_5FSnwU76SMbf_omX5rcre9DMFx-dEHNX2HymzHxWTQINVnooOzKHYlVKVsADzAlBScEcYDY0bcnd-tGQsMKRetRprK719Xvh8ctLl8LeAJALVsMQhhJbKfKapC3WUwlKSwrJsYJ3zU8ourY_urzVORN1QU"/>
{/*  Video Controls Overlay  */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
<div className="flex items-center gap-4 mb-4">
<span className="text-on-primary-container font-headline font-black text-2xl italic tracking-tighter">03:45</span>
<div className="flex-grow h-1 bg-surface-container-highest relative">
<div className="absolute left-0 top-0 h-full w-[45%] bg-primary-container"></div>
<div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-container shadow-lg shadow-primary-container/40"></div>
{/*  Timestamp Marker  */}
<div className="absolute left-[45%] top-[-8px] w-1 h-4 bg-white"></div>
</div>
<span className="text-tertiary-fixed-dim text-xs font-bold tracking-widest uppercase">12:40</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-white cursor-pointer" data-icon="play_arrow" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
<span className="material-symbols-outlined text-white cursor-pointer" data-icon="skip_next">skip_next</span>
<span className="material-symbols-outlined text-white cursor-pointer" data-icon="volume_up">volume_up</span>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white cursor-pointer" data-icon="closed_caption">closed_caption</span>
<span className="material-symbols-outlined text-white cursor-pointer" data-icon="fullscreen">fullscreen</span>
</div>
</div>
</div>
</div>
{/*  Content Details  */}
<div className="p-8 space-y-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="text-primary-container font-bold text-xs tracking-[0.2em] uppercase">Módulo 04 • Jiu-Jitsu Avançado</span>
<h2 className="font-headline font-black text-4xl mt-2 leading-none uppercase italic">Defesa de Meia-Guarda e Transições</h2>
</div>
<div className="flex gap-2">
<button className="px-6 py-3 bg-surface-container-highest text-on-surface font-label font-bold text-xs uppercase tracking-widest hover:bg-surface-bright transition-all active:scale-95">Download PDF</button>
<button className="px-6 py-3 bg-primary-container text-on-primary-container font-label font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all active:scale-95">Salvar Aula</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-surface-container-high p-0.5">
<div className="bg-surface p-4">
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest mb-1">Instrutor</p>
<p className="font-bold text-sm">Sensei Marcos Silva</p>
</div>
<div className="bg-surface p-4">
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest mb-1">Intensidade</p>
<p className="font-bold text-sm">Alta Performance</p>
</div>
<div className="bg-surface p-4">
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest mb-1">Dificuldade</p>
<p className="font-bold text-sm text-primary-container">Expert</p>
</div>
<div className="bg-surface p-4">
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest mb-1">Duração</p>
<p className="font-bold text-sm">45 min</p>
</div>
</div>
</div>
</section>
{/*  Sidebar Annotations  */}
<aside className="lg:col-span-4 bg-surface-container-low flex flex-col h-full border-l border-surface-container-highest">
<div className="p-6 border-b border-surface-container-highest flex justify-between items-center">
<h3 className="font-headline font-black text-xl italic uppercase tracking-tight">Anotações Técnicas</h3>
<span className="text-[10px] font-bold text-tertiary-fixed-dim bg-surface-container-highest px-2 py-1 uppercase tracking-widest">14 Notas</span>
</div>
<div className="flex-grow overflow-y-auto p-6 space-y-4">
{/*  Annotation Card (Teacher)  */}
<div className="kinetic-border bg-surface-container-highest/50 backdrop-blur-md p-4 group cursor-pointer hover:bg-surface-container-highest transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-sm" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Sensei Feedback</span>
</div>
<span className="text-[10px] font-bold text-white bg-primary-container px-2 py-0.5">03:45</span>
</div>
<p className="text-sm leading-relaxed text-on-surface">Postura muito baixa, facilitou a raspagem. Mantenha o quadril pesado e a base ativa para evitar o desequilíbrio lateral.</p>
</div>
{/*  Annotation Card (Student/User)  */}
<div className="border-l-4 border-tertiary-fixed-dim bg-surface-container-highest/30 backdrop-blur-sm p-4 group hover:bg-surface-container-highest/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-sm" data-icon="person">person</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Minha Nota</span>
</div>
<span className="text-[10px] font-bold text-on-surface bg-surface-container-high px-2 py-0.5">08:12</span>
</div>
<p className="text-sm leading-relaxed text-on-surface-variant italic">Revisar a pegada na gola aqui. Senti que perdi o controle quando ele esticou a perna.</p>
</div>
{/*  Annotation Card (Teacher)  */}
<div className="kinetic-border bg-surface-container-highest/50 backdrop-blur-md p-4 group cursor-pointer hover:bg-surface-container-highest transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-sm" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">Sensei Feedback</span>
</div>
<span className="text-[10px] font-bold text-white bg-primary-container px-2 py-0.5">15:20</span>
</div>
<p className="text-sm leading-relaxed text-on-surface">Excelente transição para a montada. O detalhe do cotovelo fechado impediu a reposição.</p>
</div>
{/*  Annotation Card (Generic Technical)  */}
<div className="border-l-4 border-secondary bg-secondary-container/10 p-4">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm" data-icon="fitness_center">fitness_center</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Fundamento Técnico</span>
</div>
<span className="text-[10px] font-bold text-white bg-secondary-container px-2 py-0.5">22:45</span>
</div>
<p className="text-sm leading-relaxed text-on-secondary-container">Princípio da alavanca de Arquimedes aplicado ao quadril do oponente.</p>
</div>
</div>
{/*  Input Area  */}
<div className="p-6 bg-surface-container-highest">
<div className="relative">
<textarea className="w-full bg-surface-container-lowest border-none text-sm p-4 h-24 focus:ring-1 focus:ring-primary-container resize-none placeholder:text-tertiary-fixed-dim placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest" placeholder="Adicionar nova anotação no tempo atual..."></textarea>
<div className="absolute bottom-4 right-4 flex items-center gap-2">
<span className="text-[10px] font-bold text-primary-container bg-surface-container-high px-2 py-1">03:45</span>
<button className="w-8 h-8 bg-primary-container flex items-center justify-center hover:brightness-110 active:scale-95 transition-all">
<span className="material-symbols-outlined text-white text-sm" data-icon="send" style={{ /* font-variation-settings: 'FILL' 1; */ }}>send</span>
</button>
</div>
</div>
</div>
</aside>
</main>
{/*  BottomNavBar (Visible on mobile)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch overflow-hidden bg-[#353534]/80 backdrop-blur-xl z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full w-full active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">SENSEI IA</span>
</a>
</nav>

    </>
  );
}
