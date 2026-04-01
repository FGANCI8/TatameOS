import { useAuth } from '../../hooks/useAuth';
import { useAluno } from '../../modules/aluno/hooks/useAluno';

export default function ConfiguraEs() {
  const { logout, user } = useAuth();
  const { perfil, loading } = useAluno();

  const displayName = perfil?.nome || user?.displayName || user?.email?.split('@')[0] || 'Usuário';
  const nameParts = displayName.split(' ');
  const firstName = nameParts[0]?.toUpperCase() || 'USUÁRIO';
  const lastName = nameParts.slice(1).join(' ').toUpperCase() || '';
  const faixa = perfil?.faixa || 'Branca';
  const grau = perfil?.grau || 0;
  const email = user?.email || '';

  if (loading && !perfil) {
    return (
      <main className="mx-auto max-w-3xl px-6 pt-24">
        <div className="animate-pulse space-y-6">
          <div className="flex items-end gap-6">
            <div className="h-24 w-24 rounded-2xl bg-zinc-800/60" />
            <div className="space-y-2">
              <div className="h-3 w-28 rounded-full bg-zinc-800/60" />
              <div className="h-10 w-48 rounded-2xl bg-zinc-800/60" />
            </div>
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-16 rounded-2xl bg-zinc-800/60" />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 pb-32 pt-24">
      {/* Profile Hero Section */}
      <section className="mb-12">
        <div className="mb-8 flex items-end gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-zinc-800 bg-brand-red/10">
            <div className="flex h-full w-full items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-brand-red">person</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
              FAIXA {faixa.toUpperCase()} {grau > 0 ? `• ${grau}º GRAU` : ''}
            </p>
            <h2 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter">
              {firstName}
              {lastName ? <><br />{lastName}</> : null}
            </h2>
          </div>
        </div>
      </section>

      {/* Settings Grid */}
      <div className="space-y-2">
        <h3 className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          CONFIGURAÇÕES DE CONTA
        </h3>

        <div className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:bg-zinc-900">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white transition-colors group-hover:text-brand-red">person</span>
            <div>
              <span className="text-sm font-bold uppercase tracking-widest">Editar Perfil</span>
              <p className="mt-1 text-xs text-zinc-400">{email}</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white">chevron_right</span>
        </div>

        <div className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:bg-zinc-900">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white transition-colors group-hover:text-brand-red">notifications_active</span>
            <span className="text-sm font-bold uppercase tracking-widest">Notificações</span>
          </div>
          <span className="material-symbols-outlined text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white">chevron_right</span>
        </div>

        <div className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:bg-zinc-900">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white transition-colors group-hover:text-brand-red">lock</span>
            <span className="text-sm font-bold uppercase tracking-widest">Segurança e Senha</span>
          </div>
          <span className="material-symbols-outlined text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white">chevron_right</span>
        </div>

        <div className="h-8" />

        <h3 className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          TREINAMENTO & APP
        </h3>

        <div className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:bg-zinc-900">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white transition-colors group-hover:text-brand-red">fitness_center</span>
            <span className="text-sm font-bold uppercase tracking-widest">Preferências de Treino</span>
          </div>
          <span className="material-symbols-outlined text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white">chevron_right</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white">dark_mode</span>
            <span className="text-sm font-bold uppercase tracking-widest">Aparência</span>
          </div>
          <div className="flex rounded-2xl bg-zinc-800/80 p-1">
            <button className="rounded-xl bg-brand-red/10 px-4 py-1 text-[10px] font-black uppercase tracking-tighter text-white">Dark</button>
            <button className="px-4 py-1 text-[10px] font-black uppercase tracking-tighter text-zinc-400 hover:text-white">Light</button>
          </div>
        </div>

        <div className="h-8" />

        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-zinc-950 p-5 transition-colors hover:bg-brand-red/20"
        >
          <span className="material-symbols-outlined text-brand-red">logout</span>
          <span className="text-sm font-black uppercase tracking-[0.3em] text-brand-red">Sair da Conta</span>
        </button>
      </div>

      {/* System Version */}
      <div className="mt-16 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">TatameOS v1.0.0</p>
      </div>
    </main>
  );
}
