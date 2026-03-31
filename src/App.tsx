import React, { Suspense } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LoginScreen } from './components/LoginScreen';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MainLayout } from './components/layout/MainLayout';
import { AuthProvider } from './context/AuthProvider';
import { GymProvider } from './contexts/GymContext';
import { useAuth } from './hooks/useAuth';

interface AppRoute {
  name: string;
  pathName: string;
  Component: React.ComponentType;
}

const restrictedProfessorRoutes = new Set([
  '/area-do-professor',
  '/area-do-professor/alunos',
  '/area-do-professor/chamada',
  '/area-do-professor/historico-de-presencas',
  '/area-do-professor/financeiro',
  '/area-do-professor/frequencia',
  '/area-do-professor/feedbacks',
  '/area-do-professor/avisos',
  '/area-do-professor/trilhas',
  '/painel-do-professor',
  '/biblioteca-do-professor',
]);

const restrictedAdminRoutes = new Set(['/super-admin/onboarding', '/super-admin/convites', '/area-do-professor/relatorios']);

const publicRoutes = new Set(['/ativar-conta']);

const pageLoaders = import.meta.glob('./app/**/page.tsx');

const routeComponentEntries = Object.entries(pageLoaders).map(([path, loader]) => {
  const name = path.replace('./app/', '').replace('/page.tsx', '');
  const pathName = `/${name.replace(/_/g, '-')}`;

  return {
    name,
    pathName,
    Component: React.lazy(loader as () => Promise<{ default: React.ComponentType }>),
  };
});

const routes: AppRoute[] = routeComponentEntries.map(({ name, pathName, Component }) => ({
  name,
  pathName,
  Component,
}));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12 text-center">
      <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/80 px-6 py-8">
        <div className="mx-auto mb-4 h-10 w-10 animate-pulse rounded-full border-4 border-zinc-700 border-t-brand-red" />
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">TatameOS</p>
        <p className="mt-3 text-sm text-zinc-400">Carregando módulo...</p>
      </div>
    </div>
  );
}

function ShellFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-center text-zinc-100">
      <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/80 px-6 py-8">
        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">TatameOS</p>
        <div className="mt-4 animate-pulse text-2xl font-black uppercase tracking-[0.3em] text-brand-red">
          Carregando motor...
        </div>
      </div>
    </div>
  );
}

function AppRouterContent() {
  const location = useLocation();
  const { isAuthenticated, loading, isProfessorOrAdmin, isAdmin } = useAuth();
  const isPublicRoute = publicRoutes.has(location.pathname);
  const mainLayoutRoutes = routes.filter((route) => !publicRoutes.has(route.pathName));

  if (loading) {
    return <ShellFallback />;
  }

  if (!isAuthenticated && !isPublicRoute) {
    return <LoginScreen />;
  }

  if (isPublicRoute) {
    return (
      <Routes>
        {routes
          .filter((route) => route.pathName === '/ativar-conta')
          .map(({ pathName, Component, name }) => (
            <Route
              key={pathName}
              path={pathName}
              element={
                <ErrorBoundary routeName={name}>
                  <Suspense fallback={<RouteFallback />}>
                    <Component />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          ))}
        <Route path="*" element={<Navigate to="/ativar-conta" replace />} />
      </Routes>
    );
  }

  return (
    <GymProvider>
      <MainLayout routes={mainLayoutRoutes}>
        <Routes>
          <Route path="/" element={<Navigate to="/boas-vindas" replace />} />

          {routes
            .filter((route) => !!route.Component && !publicRoutes.has(route.pathName))
            .map(({ pathName, Component, name }) =>
              React.createElement(Route, {
                key: pathName,
                path: pathName,
                element:
                  (restrictedProfessorRoutes.has(pathName) && !isProfessorOrAdmin) ||
                  (restrictedAdminRoutes.has(pathName) && !isAdmin) ? (
                    <Navigate to="/boas-vindas" replace />
                  ) : (
                    <ErrorBoundary routeName={name}>
                      <Suspense fallback={<RouteFallback />}>
                        <Component />
                      </Suspense>
                    </ErrorBoundary>
                  ),
              }),
            )}

          <Route
            path="*"
            element={
              <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-10 text-center text-zinc-100">
                <div className="mb-10 flex h-20 w-20 rotate-45 items-center justify-center border border-brand-red/20 bg-brand-red/10">
                  <span className="material-symbols-outlined -rotate-45 text-4xl text-brand-red">error</span>
                </div>
                <h1 className="mb-4 font-headline text-6xl font-black italic tracking-tighter">404</h1>
                <p className="mb-8 w-full max-w-xs border-y border-zinc-800 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  Rota não mapeada no sistema
                </p>
                <Link
                  to="/"
                  className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-10 py-4 font-headline uppercase font-black tracking-widest text-brand-red transition-all hover:bg-brand-red/20 active:scale-95"
                >
                  Reiniciar Sistema
                </Link>
              </div>
            }
          />
        </Routes>
      </MainLayout>
    </GymProvider>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppRouterContent />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
