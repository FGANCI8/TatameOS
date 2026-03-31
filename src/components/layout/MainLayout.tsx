import React from 'react';
import { NavigationBase } from '../NavigationBase';
import { BottomNavBar } from './BottomNavBar';
import { StudentSidebar } from './StudentSidebar.tsx';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface MainLayoutProps {
  children: React.ReactNode;
  routes?: { pathName: string, name: string }[];
}

export function MainLayout({ children, routes = [] }: MainLayoutProps) {
  const { role } = useAuth();
  const location = useLocation();
  const showStudentSidebar = role === 'aluno' && location.pathname.startsWith('/dashboard-do-aluno');

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-zinc-950 font-body text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-zinc-950 bg-dot-grid opacity-60" />
      <NavigationBase routes={routes} />

      {showStudentSidebar ? (
        <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:px-6 xl:pb-0">
          <StudentSidebar />

          <main className="relative min-w-0 flex-1 overflow-x-hidden pt-6 md:pt-8">
            {children}
          </main>
        </div>
      ) : (
        <main className="relative w-full flex-1 overflow-x-hidden px-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-6 md:px-6 md:pt-8 xl:pb-0">
          {children}
        </main>
      )}

      <BottomNavBar />
    </div>
  );
}
