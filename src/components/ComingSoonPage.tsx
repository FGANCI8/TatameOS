import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function toTitleCase(value: string): string {
  return value
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function getDashboardRoute(role: string | null, isProfessorOrAdmin: boolean): string {
  if (role === 'admin') {
    return '/super-admin/onboarding';
  }

  if (isProfessorOrAdmin) {
    return '/area-do-professor';
  }

  return '/dashboard-do-aluno';
}

export function ComingSoonPage({ title, description }: { title: string; description?: string }) {
  const { role, isProfessorOrAdmin } = useAuth();
  const dashboardRoute = getDashboardRoute(role, isProfessorOrAdmin);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-140px)] max-w-4xl items-center px-4 pb-32 pt-24 md:px-6">
      <section className="w-full rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 text-center md:p-10">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Em breve</p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">{toTitleCase(title)}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
          {description ??
            'Esta área foi desativada com elegância enquanto o produto amadurece. Você pode voltar ao dashboard e seguir operando normalmente.'}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to={dashboardRoute}
            className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-brand-red transition hover:bg-brand-red/20"
          >
            Voltar ao dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
