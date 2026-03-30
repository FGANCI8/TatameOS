import { type FormEvent, useState } from 'react';
import { useAcademiaProvisioning } from '../../../modules/academias/hooks/useAcademiaProvisioning';

const PLANOS = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
] as const;

export default function SuperAdminOnboardingPage() {
  const { isAdmin, loading, error, success, provisionarAcademia } = useAcademiaProvisioning();
  const [nome, setNome] = useState('');
  const [plano, setPlano] = useState<'starter' | 'pro' | 'enterprise'>('starter');
  const [responsavelEmail, setResponsavelEmail] = useState('');
  const [responsavelNome, setResponsavelNome] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await provisionarAcademia({
      nome,
      plano,
      responsavelEmail,
      responsavelNome: responsavelNome || undefined,
    });
  };

  if (!isAdmin) {
    return (
      <section className="mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-5xl items-center justify-center px-6 py-10">
        <div className="w-full max-w-xl rounded-3xl border border-brand-red/20 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 text-center shadow-none">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Acesso restrito</p>
          <h1 className="mt-4 font-headline text-4xl font-black uppercase tracking-tight text-white">Super Admin</h1>
          <p className="mt-3 text-sm text-zinc-400">
            Esta área só pode ser acessada por usuários com `role=admin`.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-3">
        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Provisionamento</span>
        <h1 className="font-headline text-4xl font-black uppercase tracking-tight text-white">
          Onboarding de Nova Academia
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          Dispara a criação do tenant, seeds iniciais e vínculo do primeiro administrador no backend seguro.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Nome da academia</span>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                placeholder="Ex: TatameOSS Jiu-Jitsu"
                required
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Plano</span>
              <select
                value={plano}
                onChange={(e) => setPlano(e.target.value as typeof plano)}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
              >
                {PLANOS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Email do administrador</span>
              <input
                value={responsavelEmail}
                onChange={(e) => setResponsavelEmail(e.target.value)}
                type="email"
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                placeholder="admin@academia.com"
                required
              />
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Nome do responsável</span>
              <input
                value={responsavelNome}
                onChange={(e) => setResponsavelNome(e.target.value)}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                placeholder="Opcional"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-brand-red transition hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-base">{loading ? 'progress_activity' : 'rocket_launch'}</span>
              {loading ? 'Provisionando...' : 'Provisionar Academia'}
            </button>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              O backend cria o tenant, seeds e claims em uma operação segura.
            </p>
          </div>
        </form>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Status</p>
            <h2 className="mt-2 font-headline text-2xl font-black uppercase text-white">
              {loading ? 'Processando...' : success ? 'Sucesso' : error ? 'Erro' : 'Pronto'}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {error || 'Preencha os dados e dispare o onboarding pelo endpoint seguro.'}
            </p>
          </div>

          {success && (
            <div className="rounded-3xl border border-brand-red/20 bg-brand-red/10 p-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Academia criada</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight">{success.academia.nome}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-400">Tenant</dt>
                  <dd className="font-mono text-xs">{success.tenantId}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-400">Responsável</dt>
                  <dd className="font-mono text-xs">{success.responsavel.email}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-400">Seeds</dt>
                  <dd className="font-mono text-xs">{success.seeds.length}</dd>
                </div>
              </dl>
            </div>
          )}

          <div className="rounded-3xl border border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Fluxo seguro</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>1. Frontend envia comando ao backend callable.</li>
              <li>2. Cloud Function valida `role=admin` no token.</li>
              <li>3. Firestore recebe tenant, seeds e vínculo do responsável.</li>
              <li>4. A UI recebe apenas o resumo do provisionamento.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
