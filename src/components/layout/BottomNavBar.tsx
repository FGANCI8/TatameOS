import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

type NavItem = {
  to: string;
  icon: string;
  label: string;
  onlyRole?: 'aluno';
};

export function BottomNavBar() {
  const location = useLocation();
  const { isProfessorOrAdmin, role } = useAuth();

  const studentCheckinItem: NavItem = {
    to: '/dashboard-do-aluno/checkin',
    icon: 'qr_code_scanner',
    label: 'Check-in',
    onlyRole: 'aluno',
  };

  const navItems: NavItem[] = [
    { to: '/dashboard-do-aluno', icon: 'home', label: 'Início' },
    { to: '/biblioteca-de-tecnicas', icon: 'video_library', label: 'Biblioteca' },
    { to: '/plano-de-treino', icon: 'insights', label: 'Trilha' },
    { to: '/registro-de-treino', icon: 'fitness_center', label: 'Treino' },
    { to: '/area-do-professor', icon: 'school', label: 'Professor' },
    ...(role === 'aluno' ? [studentCheckinItem] : []),
  ].filter((item) => {
    if (item.to === '/area-do-professor') {
      return isProfessorOrAdmin;
    }

    if (item.onlyRole) {
      return role === item.onlyRole;
    }

    return true;
  });

  const isActiveRoute = (to: string) => location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex h-[5.25rem] w-full items-center justify-around border-t border-zinc-800/80 bg-zinc-950/92 px-2 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl xl:hidden"
      aria-label="Navegação principal"
    >
      {navItems.map((item) => {
        const isActive = isActiveRoute(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`flex min-w-[3.75rem] flex-col items-center justify-center rounded-2xl px-3 py-3 transition-all duration-200 ${
              isActive
                ? 'scale-105 border border-brand-red/20 bg-brand-red/10 text-brand-red shadow-[0_0_0_1px_rgba(255,26,26,0.18)]'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}>
              {item.icon}
            </span>
            <span className="mt-1 font-headline text-[10px] font-black uppercase tracking-widest">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
