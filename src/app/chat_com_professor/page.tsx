import React from 'react';

export default function ChatComProfessor() {
  return (
    <>
      
{/*  TopAppBar  */}
<nav className="bg-[#131313] flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
<div className="flex items-center gap-4">
<button className="text-[#C6C6C7] active:scale-95 duration-150">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="Sensei" className="w-full h-full object-cover" data-alt="Close up portrait of a serious Brazilian Jiu-Jitsu black belt instructor in a dark training hall environment, dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg7wMJcDMt6xlVrrQ1xcxkG-Ngs2CqCBBHbEv2-W-7qFHTWcyS7DAW-UoTm0vhtJG1VDCw-UtPFO_ZBLrmdMeA7_b_iYO9yGVe0QzZ5gaNIHC1MHBhe0NspHCWA4w7JELe2syAhCr39-NDS57PSGhIgOdwucvCMxt-O2mtJ76iGd9h2Ft_Jz_5wKQl6to6TxOSojubC3AcXOwemq_oC70ZYht38cWT9ls2XVuSvfDty8IQ3FHLlIBtcD-WKjPoEL_ELcrza1RuUmhF"/>
</div>
<div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-on-surface leading-tight text-sm">Sensei Marcos Silva</h1>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="text-[10px] text-tertiary uppercase font-bold tracking-widest">Online</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-150">
<span className="material-symbols-outlined">videocam</span>
</button>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-150">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</nav>
{/*  Chat Canvas  */}
<main className="flex-1 mt-20 mb-24 px-4 overflow-y-auto space-y-6">
{/*  Date Marker  */}
<div className="flex justify-center">
<span className="bg-surface-container-high px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim">Hoje</span>
</div>
{/*  Message: Teacher  */}
<div className="flex flex-col items-start max-w-[85%]">
<div className="bg-surface-container-highest p-4 border-l-4 border-primary-container">
<p className="text-sm font-body leading-relaxed text-on-surface">
                    Vi sua performance no sparring de ontem. Sua transição da guarda De La Riva para o berimbolo está ficando mais fluida, mas você ainda está deixando o quadril muito baixo na subida.
                </p>
</div>
<span className="text-[9px] mt-1 text-tertiary-fixed-dim font-bold uppercase tracking-widest">Sensei • 09:15</span>
</div>
{/*  Message: User  */}
<div className="flex flex-col items-end self-end max-w-[85%]">
<div className="bg-gradient-to-br from-[#E70000] to-[#C00100] p-4">
<p className="text-sm font-body leading-relaxed text-white">
                    Obrigado pelo feedback, mestre! Eu sinto que perco o equilíbrio quando tento estabilizar o peito. Devo focar mais na pegada da gola ou da manga pra subir?
                </p>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-[9px] text-tertiary-fixed-dim font-bold uppercase tracking-widest">10:02</span>
<span className="material-symbols-outlined text-[14px] text-primary-container">done_all</span>
</div>
</div>
{/*  Video Lesson Card (Mentorship Style)  */}
<div className="flex flex-col items-start max-w-[85%]">
<div className="bg-surface-container-highest">
<div className="relative w-full aspect-video bg-surface-container-lowest">
<img alt="Technique analysis" className="w-full h-full object-cover opacity-60" data-alt="Wide shot of two martial artists in white and blue gis practicing jiu-jitsu on black mats in a professional athletic facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAar2BTyyiee-nFwPcTG6-Qhb6gek7XIMeGKLdku6f6NCGiEcrFnNc3fvKOYQAbbDQVMq8D5gjf6rWOBKlMmnGJE2XvbkGIERfzFi42uO5vy41mW9JtjoCYxwZPlTPmgVZ6k950hc3Veva4UtmfQbM59WYIl_JV72V2w5gaD9V7DHGKdmbHNlf5z5ZrOsRllV0yyffH_5vrKuC8qNMDPZ4NQGsTsSx2bktKf7INFJ4RPi4r_ba6mx81KhSgZz5zrQRYhe4hknYyRPpl"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-12 h-12 bg-primary-container flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
</button>
</div>
</div>
<div className="p-4 border-l-4 border-secondary">
<h3 className="font-headline text-xs font-black uppercase tracking-tighter text-on-surface mb-1">Ajuste de Quadril: Drill #04</h3>
<p className="text-[11px] text-tertiary leading-normal font-body">Assista este vídeo de 2 minutos. Foca no posicionamento do pé de apoio aos 0:45.</p>
</div>
</div>
<span className="text-[9px] mt-1 text-tertiary-fixed-dim font-bold uppercase tracking-widest">Sensei • 10:15</span>
</div>
{/*  Performance Metric  */}
<div className="bg-surface-container-low p-4 space-y-3">
<div className="flex justify-between items-end">
<h4 className="font-headline text-lg font-black uppercase tracking-tight text-on-surface leading-none">Meta de Evolução</h4>
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Nível 4 - Faixa Azul</span>
</div>
<div className="h-1 bg-surface-container-highest w-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-4/5"></div>
</div>
<div className="flex justify-between">
<span className="text-[9px] font-bold text-tertiary uppercase tracking-[0.2em]">Estabilização</span>
<span className="text-[9px] font-bold text-on-surface uppercase tracking-[0.2em]">80%</span>
</div>
</div>
{/*  Message: Teacher  */}
<div className="flex flex-col items-start max-w-[85%]">
<div className="bg-surface-container-highest p-4 border-l-4 border-primary-container">
<p className="text-sm font-body leading-relaxed text-on-surface">
                    A gola é fundamental para controlar a postura dele, mas o segredo da subida é a alavanca do cotovelo no tatame. Tente hoje à noite. Te vejo no tatame às 19h?
                </p>
</div>
<span className="text-[9px] mt-1 text-tertiary-fixed-dim font-bold uppercase tracking-widest">Sensei • 10:18</span>
</div>
</main>
{/*  Typing Interface  */}
<div className="fixed bottom-0 left-0 w-full bg-[#353534]/80 backdrop-blur-md z-50 p-4 pb-safe flex items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center text-tertiary hover:text-on-surface transition-colors active:scale-90">
<span className="material-symbols-outlined">add_circle</span>
</button>
<div className="flex-1 relative">
<input className="w-full bg-surface-container-lowest border-0 focus:ring-0 text-sm py-3 px-4 text-on-surface placeholder:text-tertiary/50" placeholder="Digite sua dúvida..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
<button className="text-tertiary hover:text-on-surface active:scale-90">
<span className="material-symbols-outlined text-lg">mic</span>
</button>
</div>
</div>
<button className="w-10 h-10 bg-primary-container flex items-center justify-center active:scale-90 duration-150">
<span className="material-symbols-outlined text-white">send</span>
</button>
</div>

    </>
  );
}
