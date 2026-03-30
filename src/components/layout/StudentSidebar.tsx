import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

type StudentNavItem = {
  to: string;
  label: string;
  icon: string;
};

export function StudentSidebar() {
  const { role } = useAuth();
  const location = useLocation();

  if (role !== 'aluno' || !location.pathname.startsWith('/dashboard-do-aluno')) {
    return null;
  }

  const navItems: StudentNavItem[] = [
    { to: '/dashboard-do-aluno', label: 'Dashboard', icon: 'dashboard' },
    { to: '/dashboard-do-aluno/checkin', label: 'Check-in', icon: 'qr_code_scanner' },
    { to: '/dashboard-do-aluno/trilhas', label: 'Trilhas', icon: 'insights' },
    { to: '/dashboard-do-aluno/feedbacks', label: 'Feedbacks', icon: 'forum' },
    { to: '/dashboard-do-aluno/assinatura', label: 'Assinatura', icon: 'workspace_premium' },
  ];

  return (
    <aside className="hidden w-72 shrink-0 xl:flex">
      <div className="sticky top-[96px] flex max-h-[calc(100vh-120px)] w-full flex-col rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-5 backdrop-blur-xl">
        <div className="border-b border-zinc-800/80 pb-5">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Painel do aluno</p>
          <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
            Navegação rápida
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Acesse o check-in e as áreas principais do seu dashboard com um toque.
          </p>
        </div>

        <nav className="mt-5 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] transition duration-200 ${
                  isActive
                    ? 'border-brand-red/20 bg-brand-red/10 text-brand-red shadow-[0_0_0_1px_rgba(255,26,26,0.18)]'
                    : 'border-zinc-800/80 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-zinc-800/80 pt-5">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Atalho ativo</p>
            <p className="mt-2 text-sm font-black uppercase text-white">Check-in digital sempre visível</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              O acesso fica isolado para alunos e segue o mesmo estado visual dos demais atalhos.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
