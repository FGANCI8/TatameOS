export const COMING_SOON_ROUTES = new Set([
  '/agenda-de-aulas',
  '/analise-de-falhas-tecnicas',
  '/anotacoes-tecnicas-do-replay',
  '/area-do-responsavel',
  '/biblioteca-do-professor',
  '/checklist-mental-pr-luta',
  '/coach-mental-do-app',
  '/detalhe-da-aula',
  '/detalhe-da-decisao',
  '/detalhe-da-falha',
  '/detalhe-da-tecnica',
  '/detalhe-do-desafio',
  '/favoritos-e-revisar',
  '/licoes-mentais-do-campeonato',
  '/mapa-de-vulnerabilidades',
  '/medalhas-e-conquistas',
  '/momento-critico',
  '/momentos-criticos-na-luta',
  '/pos-luta-emocional',
  '/resumo-da-luta',
  '/resumo-de-falhas',
  '/desafio-semanal',
  '/estrategia-de-luta',
  '/estado-de-confianca-do-atleta',
  '/feed-da-comunidade',
  '/busca-inteligente',
  '/biblioteca-de-tecnicas',
  '/biblioteca-de-videos-de-luta',
]);

export function isComingSoonRoute(pathName: string): boolean {
  return COMING_SOON_ROUTES.has(pathName);
}

export function filterOperationalRoutes<T extends { pathName: string }>(routes: T[]): T[] {
  return routes.filter((route) => !isComingSoonRoute(route.pathName));
}
