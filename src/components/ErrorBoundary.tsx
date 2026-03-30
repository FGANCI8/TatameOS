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

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(`Crash capturado na rota [${this.props.routeName}]:`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto mt-12 w-full max-w-2xl rounded-[28px] border border-brand-red/20 bg-zinc-900/90 p-6 text-zinc-100 shadow-none md:p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl text-brand-red">warning</span>
            <h2 className="font-headline text-2xl font-bold">Falha de Renderização</h2>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-zinc-400">
            A tela <strong className="text-white">{this.props.routeName}</strong> encontrou um erro estrutural e não pôde ser montada.
          </p>
          <div className="mb-6 overflow-auto rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 font-mono text-xs text-zinc-300">
            {this.state.errorMsg}
          </div>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 font-black uppercase tracking-widest text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
          >
            Tentar voltar ao início
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
