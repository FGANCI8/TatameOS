import { type FormEvent, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useConviteAtivacao } from '../../modules/convites/hooks/useConviteAtivacao';

type AuthMode = 'signup' | 'login';

export default function AtivarContaPage() {
  const [searchParams] = useSearchParams();
  const token = useMemo(() => searchParams.get('token'), [searchParams]);
  const { login, register, refreshClaims, user, loading: authLoading } = useAuth();
  const { loading, validacao, ativando, error, success, ativar, setError } = useConviteAtivacao(token);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<AuthMode>('signup');
  const [localMessage, setLocalMessage] = useState<string | null>(null);

  useEffect(() => {
    if (validacao?.email) {
      setEmail(validacao.email);
    }
  }, [validacao?.email]);

  const handleAuthAndActivate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocalMessage(null);

    try {
      if (mode === 'signup') {
        await register(email, password);
      } else {
        await login(email, password);
      }

      await refreshClaims();
      const activated = await ativar();
      if (activated) {
        await refreshClaims();
        setLocalMessage('Conta ativada com sucesso. Você já pode acessar o sistema.');
      }
    } catch (authError: any) {
      setError(authError?.message || 'Falha ao autenticar usuário.');
    }
  };

  const handleOnlyActivate = async () => {
    setLocalMessage(null);
    const activated = await ativar();
    if (activated) {
      await refreshClaims();
      setLocalMessage('Convite consumido com sucesso. Seu acesso já foi liberado.');
    }
  };

  if (loading || authLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
        <p className="animate-pulse font-headline text-2xl font-black uppercase tracking-[0.35em] text-brand-red">
          Validando convite...
        </p>
      </section>
    );
  }

  if (!token) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 text-center md:p-8">
          <h1 className="font-headline text-3xl font-black uppercase tracking-tight text-white">Token ausente</h1>
          <p className="mt-3 text-sm text-zinc-400">Abra o link enviado por e-mail para ativar sua conta.</p>
        </div>
      </section>
    );
  }

  if (!validacao || !validacao.valid) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
        <div className="w-full max-w-xl rounded-3xl border border-brand-red/20 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 text-center md:p-8">
          <h1 className="font-headline text-3xl font-black uppercase tracking-tight text-white">Convite inválido</h1>
          <p className="mt-3 text-sm text-zinc-400">
            {validacao?.expired
              ? 'O convite expirou. Solicite um novo convite ao Super Admin.'
              : 'Este link não é mais válido ou já foi consumido.'}
          </p>
        </div>
      </section>
    );
  }

  const isSignedInWithSameEmail = !!user?.email && user.email.toLowerCase() === validacao.email.toLowerCase();

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-6 text-white md:px-6 md:py-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Ativação</p>
          <h1 className="mt-4 font-headline text-4xl font-black uppercase tracking-tight text-white">
            Bem-vindo à {validacao.academyName}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            O link foi enviado para <strong className="text-white">{validacao.email}</strong> e expira em{' '}
            {new Date(validacao.expiresAt).toLocaleString('pt-BR')}.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Status do convite</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.2em]">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-zinc-300">Pendente</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-zinc-300">Role: {validacao.role}</span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-zinc-300">
                {user ? 'Usuário autenticado' : 'Aguardando login'}
              </span>
            </div>
          </div>

          {success ? (
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">Conta ativada</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                O convite foi consumido uma única vez e os claims do seu usuário já foram atualizados.
              </p>
              <p className="mt-4 text-xs font-mono text-zinc-400">Tenant: {success.tenantId}</p>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Próximo passo</p>
              <p className="mt-2 text-sm text-zinc-400">
                Faça login ou crie sua conta com o e-mail do convite e depois conclua a ativação.
              </p>
            </div>
          )}
        </div>

        <div className="rounded-[28px] border border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Acesso</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                Entrar ou criar conta
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setMode((current) => (current === 'signup' ? 'login' : 'signup'))}
              className="rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              {mode === 'signup' ? 'Já tenho conta' : 'Criar conta'}
            </button>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleAuthAndActivate}>
            <label className="block">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none focus:border-brand-red/40"
              />
            </label>

            <label className="block">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Senha</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none focus:border-brand-red/40"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20 disabled:opacity-60"
              disabled={ativando}
            >
              {mode === 'signup' ? 'Criar conta e ativar' : 'Entrar e ativar'}
            </button>
          </form>

          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleOnlyActivate}
              disabled={!isSignedInWithSameEmail || ativando}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {ativando ? 'Ativando...' : 'Concluir ativação'}
            </button>
            <p className="text-xs leading-relaxed text-zinc-500">
              Se você já está logado com o e-mail do convite, basta concluir a ativação sem recriar a conta.
            </p>
          </div>

          {(error || localMessage) && (
            <div className={`mt-6 rounded-2xl border p-4 text-sm ${error ? 'border-brand-red/30 bg-brand-red/10 text-brand-red' : 'border-zinc-700 bg-zinc-900 text-white'}`}>
              {error || localMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
