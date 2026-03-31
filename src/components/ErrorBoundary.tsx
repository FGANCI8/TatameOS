import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  routeName: string;
}

interface State {
  hasError: boolean;
  errorMsg: string;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { hasError: false, errorMsg: '' };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(`Crash capturado na rota [${this.props.routeName}]:`, error, info);
  }

  render() {
    if (this.state.hasError) {
      const errorDetails = this.state.errorMsg || 'O componente falhou ao renderizar.';

      return (
        <div className="mx-auto mt-8 w-full max-w-2xl px-4 sm:mt-12">
          <div
            className="rounded-[28px] border border-brand-red/20 bg-zinc-900/90 p-6 text-zinc-100 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8"
            role="alert"
            aria-live="assertive"
          >
            <div className="mb-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-4xl text-brand-red">warning</span>
              <div className="min-w-0">
                <h2 className="font-headline text-2xl font-bold">Falha de renderização</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  A tela <strong className="text-white">{this.props.routeName}</strong> encontrou um erro estrutural e não pôde ser montada.
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Detalhe técnico</p>
              <pre className="max-h-40 overflow-auto whitespace-pre-wrap break-words font-mono text-xs leading-6 text-zinc-300">
                {errorDetails}
              </pre>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, errorMsg: '' })}
                className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 font-black uppercase tracking-widest text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
              >
                Voltar ao início
              </Link>
              <p className="text-xs leading-5 text-zinc-500">
                Se o erro persistir, recarregue a página ou volte para o início para retomar a navegação.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
