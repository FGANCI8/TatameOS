
export default function ConfiguraEs() {
  return (
    <main className="pt-24 px-6 max-w-3xl mx-auto">
      {/*  Profile Hero Section  */}
      <section className="mb-12">
        <div className="flex items-end gap-6 mb-8">
          <div className="w-24 h-24 bg-brand-red/10 relative">
            <img alt="User" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="professional portrait of a martial artist with a black belt around their neck in dramatic moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzD24x32skU7M9WfSotqlePxC_5q0hYPf83xRmvxHafHW9wjP6FZMYUGnnWRMd2cAlX80Is7nyWTPaq6ukZsP-mNvTYmegFOr2cx5HkJt6GheDOGu-IoMJzLIDLdWJCD6WO4x3P-QGggrkB0NubnUY0cFLGyh12wG7TaIkX0GVU3aTPiyvU2zfyJB6dB9dJ7A8Ic-mZAwdxxCJrgD33G05Vp8neMSCqTJbm_HzAlshInewlD77a5hkE8uN2S72hpD_EsoC5QRgZ_9"/>
            <div className="absolute -bottom-2 -right-2 bg-brand-red/10 p-1">
              <span className="material-symbols-outlined text-white text-sm">edit</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-brand-red mb-1">FAIXA PRETA 1º GRAU</p>
            <h2 className="font-headline font-black text-4xl uppercase tracking-tighter leading-none">RODRIGO<br/>SILVA</h2>
          </div>
        </div>
      </section>
      {/*  Settings Grid  */}
      <div className="space-y-2">
        {/*  Section Title  */}
        <h3 className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-zinc-500 mb-4 px-2">CONFIGURAÇÕES DE CONTA</h3>
        {/*  Menu Items  */}
        <a className="group flex items-center justify-between p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors duration-200" href="#">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white group-hover:text-brand-red transition-colors">person</span>
            <span className="font-label font-bold uppercase tracking-widest text-sm">Editar Perfil</span>
          </div>
          <span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
        </a>
        <a className="group flex items-center justify-between p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors duration-200" href="#">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white group-hover:text-brand-red transition-colors">notifications_active</span>
            <span className="font-label font-bold uppercase tracking-widest text-sm">Notificações</span>
          </div>
          <span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
        </a>
        <a className="group flex items-center justify-between p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors duration-200" href="#">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white group-hover:text-brand-red transition-colors">lock</span>
            <span className="font-label font-bold uppercase tracking-widest text-sm">Segurança e Senha</span>
          </div>
          <span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
        </a>
        <div className="h-12"></div>
        <h3 className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-zinc-500 mb-4 px-2">TREINAMENTO & APP</h3>
        <a className="group flex items-center justify-between p-5 bg-zinc-950/60 hover:bg-zinc-900 transition-colors duration-200" href="#">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white group-hover:text-brand-red transition-colors">fitness_center</span>
            <span className="font-label font-bold uppercase tracking-widest text-sm">Preferências de Treino</span>
          </div>
          <span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
        </a>
        <div className="group flex items-center justify-between p-5 bg-zinc-950/60">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white">dark_mode</span>
            <span className="font-label font-bold uppercase tracking-widest text-sm">Aparência</span>
          </div>
          <div className="flex bg-zinc-800/80 p-1">
            <button className="px-4 py-1 text-[10px] font-black uppercase tracking-tighter bg-brand-red/10 text-white">Dark</button>
            <button className="px-4 py-1 text-[10px] font-black uppercase tracking-tighter text-zinc-400 hover:text-white">Light</button>
          </div>
        </div>
        <div className="h-12"></div>
        <button className="w-full flex items-center justify-center gap-2 p-5 bg-zinc-950 border border-brand-red/20/20 hover:bg-brand-red/20 transition-colors group">
          <span className="material-symbols-outlined text-brand-red" data-weight="fill">logout</span>
          <span className="font-label font-black uppercase tracking-[0.3em] text-sm text-brand-red">Sair da Conta</span>
        </button>
      </div>
      {/*  System Version  */}
      <div className="mt-16 text-center">
        <p className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-surface-variant">Kinetic BJJ v4.2.0 • Build 882</p>
      </div>
    </main>
  );
}
