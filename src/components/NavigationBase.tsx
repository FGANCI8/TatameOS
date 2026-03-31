import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

type MainLink = {
  to: string;
  label: string;
  icon: string;
  onlyRole?: 'aluno';
};

export function NavigationBase({ routes }: { routes: { pathName: string; name: string }[] }) {
  const { logout, isProfessorOrAdmin, isAdmin, role } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const studentCheckinLink: MainLink = {
    to: '/dashboard-do-aluno/checkin',
    label: 'Check-in',
    icon: 'qr_code_scanner',
    onlyRole: 'aluno',
  };

  const mainLinks: MainLink[] = [
    { to: '/boas-vindas', label: 'Início', icon: 'home' },
    { to: '/dashboard-do-aluno', label: 'Dashboard', icon: 'dashboard' },
    ...(role === 'aluno' ? [studentCheckinLink] : []),
    { to: '/biblioteca-de-tecnicas', label: 'Técnicas', icon: 'library_books' },
    { to: '/plano-de-treino', label: 'Treinos', icon: 'fitness_center' },
    { to: '/desempenho-competitivo', label: 'Competição', icon: 'trophy' },
    ...(isProfessorOrAdmin
      ? [
          { to: '/area-do-professor/alunos', label: 'Alunos', icon: 'groups' },
          { to: '/area-do-professor/chamada', label: 'Chamada', icon: 'playlist_add_check' },
          { to: '/area-do-professor/historico-de-presencas', label: 'Histórico', icon: 'history' },
          { to: '/area-do-professor/financeiro', label: 'Financeiro', icon: 'account_balance_wallet' },
          { to: '/area-do-professor/avisos', label: 'Avisos', icon: 'campaign' },
        ]
      : []),
    ...(isAdmin
      ? [
          { to: '/super-admin/onboarding', label: 'Onboarding', icon: 'admin_panel_settings' },
          { to: '/super-admin/convites', label: 'Convites', icon: 'mail' },
        ]
      : []),
  ].filter((link) => {
    if (link.onlyRole) {
      return role === link.onlyRole;
    }

    if (link.to === '/area-do-professor') {
      return isProfessorOrAdmin;
    }

    return true;
  });

  return (
    <nav className="sticky top-0 z-[100] border-b border-zinc-800/80 bg-zinc-950/90 px-4 py-4 backdrop-blur-xl md:px-6">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 text-brand-red transition duration-200 group-hover:scale-105">
            <span className="material-symbols-outlined text-lg font-black">sports_martial_arts</span>
          </div>
          <h1 className="font-headline text-xl font-black uppercase leading-none tracking-[0.2em] text-white">
            Tatame <span className="text-brand-red">OSS</span>
          </h1>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-2 xl:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] transition duration-200 ${
                location.pathname === link.to
                  ? 'border-brand-red/20 bg-brand-red/10 text-brand-red shadow-[0_0_0_1px_rgba(255,26,26,0.18)]'
                  : 'border-zinc-800/80 bg-transparent text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 xl:mt-0">
        <div className="hidden items-center gap-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/80 px-3 py-2 md:flex">
          <span className="material-symbols-outlined text-[14px] text-zinc-300">explore</span>
          <select
            className="cursor-pointer bg-transparent pr-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 outline-none"
            onChange={(e) => {
              if (e.target.value) {
                window.location.href = e.target.value;
              }
            }}
            value=""
          >
            <option value="" className="bg-zinc-950">
              Telas do sistema
            </option>
            {routes
              .filter((r) => {
                if (!isProfessorOrAdmin && r.pathName.includes('professor')) {
                  return false;
                }

                if (!isAdmin && r.pathName.includes('super-admin')) {
                  return false;
                }

                return true;
              })
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((r) => (
                <option key={r.pathName} value={r.pathName} className="bg-zinc-950">
                  {r.name.replace(/-/g, ' ').toUpperCase()}
                </option>
              ))}
          </select>
        </div>

        <div className="hidden h-8 w-[1px] bg-zinc-800/80 md:block" />

        <button
          onClick={logout}
          className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20 hover:text-white active:scale-95"
        >
          <span className="material-symbols-outlined text-[16px]">logout</span>
          <span className="hidden sm:inline">Encerrar</span>
        </button>

        <button
          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-2 text-white transition hover:bg-zinc-800 xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {isMenuOpen ? (
        <div className="animate-in fade-in slide-in-from-top fixed inset-0 top-[72px] z-[90] bg-zinc-950/95 p-6 backdrop-blur-xl xl:hidden duration-300">
          <div className="flex flex-col gap-4">
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 border-l-4 p-4 text-xs font-bold uppercase tracking-widest transition-all ${
                  location.pathname === link.to
                    ? 'border-brand-red bg-brand-red/10 text-brand-red'
                    : 'border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
