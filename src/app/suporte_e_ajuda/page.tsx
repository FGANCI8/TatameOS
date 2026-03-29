import React from 'react';

export default function SuporteEAjuda() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-black/80 backdrop-blur-xl docked full-width top-0 z-50 flex justify-between items-center px-6 py-4 w-full bg-[#1C1B1B] border-none flat no shadows">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white hover:opacity-80 transition-opacity active:scale-95 duration-100 cursor-pointer">arrow_back</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000]">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-white opacity-60">notifications</span>
<div className="w-8 h-8 bg-surface-container-highest rounded-full flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close up profile of a jiu-jitsu fighter with intense gaze and athletic features" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd5W8J8L-r8eCNmgz4g7NlV3i1FvJwpJtlsys_fRQUjWBPHxOcX0CJarKQNobK6F91ZPGmOVp9EMfD22cInLGFxz7APY7NjMoX5A4tY_ZvyB8uc-byi0j-qB_DksGP0njJdcsHvcSAwXCX3E7xbFs6JZywn9GUfOrsT9YTcPD6hh1KHYpQyo-rzDpekhIMrg1yGCYIWPiPmy5-L0IDef1XXBrn62SzNyl48FSTgqNjGHsOEZEZCeLBmM-kb4iN6AAVAcowdRFfIWFI"/>
</div>
</div>
</header>
{/*  Main Content  */}
<main className="flex-grow pt-4 pb-24 px-6">
{/*  Hero Section  */}
<section className="mb-10">
<h2 className="font-headline font-black text-4xl italic uppercase tracking-tighter text-on-surface mb-2">Central de <span className="text-primary-container">Ajuda</span></h2>
<p className="font-body text-tertiary text-sm leading-relaxed max-w-[80%]">Estamos aqui para garantir que sua jornada no tatame seja impecável.</p>
</section>
{/*  Quick Search  */}
<div className="mb-10">
<div className="relative flex items-center bg-surface-container-lowest p-4 group border-b-2 border-transparent focus-within:border-primary-container transition-all">
<span className="material-symbols-outlined text-tertiary mr-3">search</span>
<input className="bg-transparent border-none text-on-surface focus:ring-0 w-full font-body placeholder:text-tertiary/40" placeholder="Como podemos ajudar hoje?" type="text"/>
</div>
</div>
{/*  Support Actions Bento Grid  */}
<div className="grid grid-cols-2 gap-3 mb-12">
<div className="col-span-2 bg-surface-container-low p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden">
<div className="z-10">
<span className="font-label font-bold text-[10px] uppercase tracking-widest text-primary-container mb-2 block">Contato Direto</span>
<h3 className="font-headline font-extrabold text-2xl uppercase italic">Falar com a Academia</h3>
</div>
<button className="kinetic-gradient text-on-primary-container font-label font-bold text-xs uppercase tracking-widest py-4 px-6 w-fit z-10 active:scale-95 transition-transform flex items-center gap-2">
<span className="material-symbols-outlined text-sm" style={{ /* font-variation-settings: 'FILL' 1; */ }}>chat</span>
                    Iniciar Chat
                </button>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-[120px]" style={{ /* font-variation-settings: 'wght' 700; */ }}>support_agent</span>
</div>
</div>
<div className="bg-surface-container-high p-5 flex flex-col justify-between min-h-[140px]">
<span className="material-symbols-outlined text-primary-container">bug_report</span>
<div>
<h4 className="font-headline font-bold text-sm uppercase mb-1">Suporte Técnico</h4>
<p className="font-body text-[10px] text-tertiary uppercase tracking-tight">Relatar erro no App</p>
</div>
</div>
<div className="bg-surface-container-high p-5 flex flex-col justify-between min-h-[140px]">
<span className="material-symbols-outlined text-primary-container">payments</span>
<div>
<h4 className="font-headline font-bold text-sm uppercase mb-1">Financeiro</h4>
<p className="font-body text-[10px] text-tertiary uppercase tracking-tight">Planos e Faturas</p>
</div>
</div>
</div>
{/*  FAQ Section  */}
<section className="mb-12">
<div className="flex items-end gap-2 mb-6">
<h3 className="font-headline font-black text-2xl uppercase italic tracking-tighter">Dúvidas Comuns</h3>
<div className="h-1 flex-grow bg-surface-container-highest mb-2"></div>
</div>
<div className="space-y-3">
{/*  Accordion Item 1  */}
<div className="bg-surface-container-low border-l-4 border-transparent hover:border-primary-container transition-all">
<details className="group">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none">
<span className="font-body font-bold text-sm uppercase tracking-wide">Como agendar uma aula?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary-container">expand_more</span>
</summary>
<div className="px-5 pb-5 font-body text-sm text-tertiary-fixed-dim leading-relaxed">
                            Acesse a aba 'Treino' no menu inferior, selecione o horário desejado e confirme sua presença. Lembre-se de agendar com pelo menos 1 hora de antecedência.
                        </div>
</details>
</div>
{/*  Accordion Item 2  */}
<div className="bg-surface-container-low border-l-4 border-transparent hover:border-primary-container transition-all">
<details className="group">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none">
<span className="font-body font-bold text-sm uppercase tracking-wide">Política de cancelamento</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary-container">expand_more</span>
</summary>
<div className="px-5 pb-5 font-body text-sm text-tertiary-fixed-dim leading-relaxed">
                            Cancelamentos de aulas devem ser feitos com no mínimo 2 horas de antecedência para liberar a vaga para outro atleta.
                        </div>
</details>
</div>
{/*  Accordion Item 3  */}
<div className="bg-surface-container-low border-l-4 border-transparent hover:border-primary-container transition-all">
<details className="group">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none">
<span className="font-body font-bold text-sm uppercase tracking-wide">Esqueci minha senha</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary-container">expand_more</span>
</summary>
<div className="px-5 pb-5 font-body text-sm text-tertiary-fixed-dim leading-relaxed">
                            Na tela de login, clique em 'Recuperar Senha'. Um link de redefinição será enviado para o seu e-mail cadastrado instantaneamente.
                        </div>
</details>
</div>
{/*  Accordion Item 4  */}
<div className="bg-surface-container-low border-l-4 border-transparent hover:border-primary-container transition-all">
<details className="group">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none">
<span className="font-body font-bold text-sm uppercase tracking-wide">Graduação e Faixas</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary-container">expand_more</span>
</summary>
<div className="px-5 pb-5 font-body text-sm text-tertiary-fixed-dim leading-relaxed">
                            O sistema de graduação segue as normas da IBJJF. Você pode acompanhar seu progresso e horas de tatame na aba 'Trilha'.
                        </div>
</details>
</div>
</div>
</section>
{/*  Technical Footer Link  */}
<div className="flex justify-center mb-8">
<a className="font-label font-bold text-[10px] uppercase tracking-[0.2em] text-tertiary hover:text-primary-container transition-colors flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-xs">info</span>
                Versão do App 2.4.0 • Termos de Uso
            </a>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 h-20 bg-[#1C1B1B]/90 dark:bg-[#131313]/95 backdrop-blur-md z-50 border-none bg-gradient-to-t from-black to-transparent shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
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
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
