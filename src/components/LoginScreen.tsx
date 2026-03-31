import { useState, type FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

export function LoginScreen() {
  const { login, register, resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setMode] = useState(true);
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setResetMessage('');

    if (!email || !email.includes('@')) {
      setError('Formato de e-mail inválido.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      if (isLoginMode) {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (err: any) {
      console.error('Auth Error:', err);
      let errorMessage = 'Erro de autenticação.';

      const errorCode = err.code || '';
      if (errorCode === 'auth/invalid-email') {
        errorMessage = 'E-mail inválido.';
      } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-credential') {
        errorMessage = 'Credenciais incorretas.';
      } else if (errorCode === 'auth/email-already-in-use') {
        errorMessage = 'E-mail já cadastrado. Tente entrar.';
      } else if (errorCode === 'auth/weak-password') {
        errorMessage = 'A senha deve ter pelo menos 6 caracteres.';
      } else if (errorCode === 'auth/network-request-failed') {
        errorMessage = 'Sem conexão com a internet.';
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    setError('');
    setResetMessage('');

    if (!email || !email.includes('@')) {
      setError('Digite um e-mail válido para recuperar o acesso.');
      return;
    }

    setResetLoading(true);

    try {
      await resetPassword(email);
      setResetMessage('Enviamos um link de recuperação para o seu e-mail.');
    } catch (err: any) {
      const errorCode = err.code || '';
      if (errorCode === 'auth/invalid-email') {
        setError('E-mail inválido.');
      } else if (errorCode === 'auth/user-not-found') {
        setError('Não encontramos uma conta para este e-mail.');
      } else {
        setError('Não foi possível enviar o link de recuperação agora.');
      }
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4 py-8 font-body text-white">
      <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-brand-red/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-zinc-800/30 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md rounded-[28px] border border-zinc-800 bg-zinc-900/85 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10">
        <div className="mb-8 flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 text-brand-red">
              <span className="material-symbols-outlined text-2xl font-black">sports_martial_arts</span>
            </div>
            <h1 className="font-headline text-4xl font-black uppercase tracking-[0.2em] text-white">
              Tatame <span className="text-brand-red">OSS</span>
            </h1>
          </div>
        </div>

        <p className="mb-10 border-y border-zinc-800 py-2 text-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
          Acesse sua academia
        </p>

        {error ? (
          <div className="mb-6 rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4 text-center text-xs font-bold uppercase tracking-wider text-brand-red">
            {error}
          </div>
        ) : null}

        {resetMessage ? (
          <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-xs font-bold uppercase tracking-wider text-emerald-300">
            {resetMessage}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">E-mail</label>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@academia.com"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-brand-red/40"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Senha</label>
            <input
              type="password"
              autoComplete={isLoginMode ? 'current-password' : 'new-password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-brand-red/40"
            />
          </div>

          {isLoginMode ? (
            <button
              type="button"
              onClick={handlePasswordReset}
              disabled={resetLoading}
              className="text-left text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {resetLoading ? 'Enviando recuperação...' : 'Esqueci minha senha'}
            </button>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-4 font-headline text-sm font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="material-symbols-outlined text-[18px]">{loading ? 'hourglass_top' : 'login'}</span>
            {loading ? 'Autenticando...' : isLoginMode ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => {
              setMode(!isLoginMode);
              setError('');
              setResetMessage('');
            }}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 transition hover:text-white"
          >
            {isLoginMode ? 'Novo no Tatame OSS? Criar conta' : 'Já tem conta? Entrar'}
          </button>
        </div>
      </div>
    </div>
  );
}
