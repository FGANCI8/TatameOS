import React from 'react';

export default function VDeoVsTCnicaRecomendada() {
  return (
    <>

      {/*  TopAppBar  */}
      <header className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 border-none bg-[#1C1B1B] flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
            <img className="w-full h-full object-cover" data-alt="Intense close-up of a professional athlete face with sweat, dramatic high-contrast lighting in a dark gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVU3BuoI8zDxD2IsROtx1Kr55DYONO-QL5rK4ibkBZ-FEh_iSAYrZc0MYTKSdv02fVDoXxk1qZCXdETefSY6kR5Dk_W94cgOI07l5zsw6BjnMbts-V_m5IEvIS5ogIaMSL6anGTj2ukIicX37M5-qqi05YyFP_IQ27aS6ZJVzy6fCoB7d8K5G_BVS8IsnpyvM0UHQ91O2wdMZSR67CylohCXHRcIiFy9aZR6b_RIiE-vgxUus75lnd-LmO33b1L1XblSiDifxVAnID" />
          </div>
          <h1 className="font-['Lexend'] font-black tracking-tighter uppercase text-3xl italic text-[#E70000] dark:text-[#E70000]">KINETIC</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 items-center">
            <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest text-[#E70000]">HOME</span>
            <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest text-[#C6C6C7] hover:text-white transition-all cursor-pointer">LIBRARY</span>
            <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest text-[#C6C6C7] hover:text-white transition-all cursor-pointer">PATH</span>
            <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest text-[#C6C6C7] hover:text-white transition-all cursor-pointer">TRAINING</span>
            <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest text-[#C6C6C7] hover:text-white transition-all cursor-pointer">SENSEI IA</span>
          </nav>
          <button className="text-[#353534] hover:bg-[#353534] transition-colors duration-150 active:scale-95 p-2">
            <span className="material-symbols-outlined text-on-surface" data-icon="settings">settings</span>
          </button>
        </div>
      </header>
      <main className="min-h-screen pb-24">
        {/*  Split Screen Layout  */}
        <div className="flex flex-col lg:h-[calc(100vh-80px)]">
          {/*  Top Section: Video Analysis  */}
          <section className="relative w-full h-1/2 lg:h-[55%] bg-black overflow-hidden group">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent"></div>
            <img className="w-full h-full object-cover opacity-80" data-alt="Cinematic wide shot of two Brazilian Jiu-Jitsu athletes grappling on a dark mat, focusing on a triangle choke attempt with dramatic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIVz6F3qJSDO15arL-foiUKFx37KXRr1u8BgWrBEESn2BJ9GaN7gt0UjsCZ9R2X5AyufCD9zI931gw7HK5cIVofOza7RI8hE0-Gsn93KvSgYHGcGgtwR6ijnqekdKMAO_cqnFDvG0qz_ylLa2-Ii3h8_5AWP_NfDN03DZpRdzwHv_6du4PcKIBGSF4rOHB9rKvQhc1aN64f7WngdyOqmoXGuypSBmaiA_0fOAuhzRBL0dcQbO7dGEjAQaAL5O92UdGBRQpCErUcG9T" />
            {/*  Video HUD  */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-primary-container px-3 py-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white animate-pulse"></span>
                  <span className="font-headline font-bold text-xs text-on-primary-container tracking-widest">DETECÇÃO DE ERRO: 02:44</span>
                </div>
                <div className="bg-surface-container-highest/80 backdrop-blur px-3 py-1">
                  <span className="font-label font-bold text-[10px] text-tertiary uppercase tracking-tighter">SENSEI IA ANALYSIS V2.4</span>
                </div>
              </div>
              {/*  Visual Markers (Asymmetric Overlay)  */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-primary-container w-32 h-32 flex items-center justify-center">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-white"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-white"></div>
                <span className="font-headline font-black text-primary-container text-4xl opacity-50">!</span>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-secondary font-label text-[10px] font-bold tracking-[0.2em] uppercase">MOMENTO CRÍTICO</span>
                  <h2 className="text-3xl font-headline font-black italic tracking-tighter text-white uppercase">Postura Comprometida</h2>
                </div>
                <div className="flex gap-2">
                  <button className="w-12 h-12 bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all">
                    <span className="material-symbols-outlined text-white" data-icon="replay_10">replay_10</span>
                  </button>
                  <button className="w-12 h-12 bg-primary-container flex items-center justify-center hover:brightness-110 transition-all">
                    <span className="material-symbols-outlined text-white" data-icon="pause">pause</span>
                  </button>
                </div>
              </div>
            </div>
            {/*  Scrubber  */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest z-30">
              <div className="h-full bg-primary-container w-[65%]"></div>
            </div>
          </section>
          {/*  Bottom Section: Corrective Action  */}
          <section className="flex-grow bg-surface-container-low p-6 lg:p-12 flex flex-col lg:flex-row gap-8 items-stretch">
            {/*  Suggested Correction Card  */}
            <div className="flex-1 bg-surface-container-high p-8 flex flex-col justify-between border-l-4 border-primary-container relative overflow-hidden">
              {/*  Subtle background graphic  */}
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[200px]" data-icon="fitness_center">fitness_center</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary-container font-variation-settings-fill" data-icon="error" style={{ /* font-variation-settings: 'FILL' 1; */ }}>error</span>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-tight text-on-surface">Correção Sugerida</h3>
                </div>
                <p className="font-body text-tertiary-fixed-dim leading-relaxed mb-8 max-w-md">
                  Sua base foi comprometida durante a tentativa de passagem. O erro de defesa de triângulo identificado no vídeo requer ajuste imediato na distribuição de peso e alinhamento dos cotovelos.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-surface-container-lowest p-4">
                    <span className="block text-[10px] font-label font-bold text-tertiary uppercase tracking-widest mb-1">MÉTRICA</span>
                    <span className="block text-xl font-headline font-black text-secondary">POSTURA -14%</span>
                  </div>
                  <div className="bg-surface-container-lowest p-4">
                    <span className="block text-[10px] font-label font-bold text-tertiary uppercase tracking-widest mb-1">RISCO</span>
                    <span className="block text-xl font-headline font-black text-primary-container">ALTO</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-br from-[#E70000] to-[#C00100] py-5 flex items-center justify-center gap-3 group active:scale-[0.98] transition-all">
                <span className="font-headline font-black text-on-primary-container tracking-widest uppercase italic">Ver Técnica Recomendada</span>
                <span className="material-symbols-outlined text-on-primary-container group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
            {/*  Technical Class Preview (Linked)  */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <span className="font-label font-black text-[10px] text-tertiary-fixed uppercase tracking-[0.3em]">Aula Técnica Recomendada</span>
                <span className="material-symbols-outlined text-tertiary text-sm" data-icon="school">school</span>
              </div>
              <div className="bg-surface-container-lowest flex flex-col md:flex-row h-full group cursor-pointer overflow-hidden">
                <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Professional Jiu-Jitsu instructor explaining technique on the mat, soft studio lighting, high resolution fitness photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_LrvInYm1_cd22oam5IsuvLwkoHPVR5J4IKN4JEmzt7FmNBfXudT1hmJfTBixHCPS1VAPmgayIBWB__nprx8TuWtUnOlJeG4Od7_3qbgq8lEmMteVyhhbT2QEm9Oeprwab5suH1fI0wx2-dFiGBtFG8JIyo9A6tFbZuRkWuBkiUteMH43ULyTnwu3z-X-t_lxdazQzlj56NuT2Vg9jgsystQGYjWqKE-zyVHBkicXKHExk0EYXzQtPDLbnqUApHjjCOLfLPDJtw1w" />
                  <div className="absolute inset-0 bg-primary-container/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <div className="mb-4">
                    <h4 className="font-headline font-black text-2xl uppercase italic tracking-tighter leading-none mb-2 text-white group-hover:text-primary-container transition-colors">Postura e Pressão na Guarda Fechada</h4>
                    <span className="font-label font-bold text-[10px] text-tertiary tracking-widest uppercase">Módulo: Fundamentos de Defesa</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-lg" data-icon="schedule">schedule</span>
                      <span className="font-label font-bold text-xs text-on-surface">12 MIN</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-lg" data-icon="star">star</span>
                      <span className="font-label font-bold text-xs text-on-surface">AVANÇADO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch overflow-hidden bg-[#353534]/80 backdrop-blur-xl dark:bg-[#353534]/80 z-50 border-none shadow-[0_-4px_20px_rgba(52,61,150,0.06)] md:hidden">
        <a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">HOME</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
          <span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
          <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">LIBRARY</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
          <span className="material-symbols-outlined" data-icon="moving">moving</span>
          <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">PATH</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full w-full active:brightness-110" href="#">
          <span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
          <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">TRAINING</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
          <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
          <span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">SENSEI IA</span>
        </a>
      </nav>

    </>
  );
}
