import type { Tecnica } from './types';

export const TECNICAS_BIBLIOTECA: Tecnica[] = [
  {
    id: 'triangulo-guard',
    tenantId: 'shared',
    nome: 'Triângulo da guarda',
    categoria: 'Finalizacao',
    dificuldadeBase: 1,
    videoUrl: 'https://www.youtube.com/watch?v=kt1pI4g9Y2A',
    descricao: 'Entrada básica para fechar o triângulo com controle de postura.',
  },
  {
    id: 'knee-slide-pressure',
    tenantId: 'shared',
    nome: 'Knee slide pressure',
    categoria: 'Passagem',
    dificuldadeBase: 2,
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
    descricao: 'Pressão contínua para estabilizar a passagem lateral com base curta.',
  },
  {
    id: 'de-la-riva-complex',
    tenantId: 'shared',
    nome: 'De La Riva complex',
    categoria: 'Guarda',
    dificuldadeBase: 3,
    thumbnailUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMF044ZceGf2C3zME2b-FmW-MBj-Y2TePdzE3x0Gc9O4-RPvMOdqEpe8-29MtxT6aJ9ioJbt9PV1CauNyQYKaFCoyGGiSjVe3qOnLEfYogG8m6CV_JkRw7GeoOWVo3ATsvawdOj-db37rL0pCZnNcYSbKmE9YE4trjbOc0t0VsKUzS9Sbia-2A8_k91AZrrmszbmloioLoZctl69zkoj14lkCXfeGvxwE4GId-A3EwkRPTdBM1bCyJinuwKbX1r8swdxORUgyHrxeQ',
    descricao: 'Sequência avançada de retenção e off-balance a partir da guarda aberta.',
  },
];

export function listarTecnicasBiblioteca(): Tecnica[] {
  return TECNICAS_BIBLIOTECA.slice();
}

export function encontrarTecnicaPorId(id: string): Tecnica | undefined {
  return TECNICAS_BIBLIOTECA.find((tecnica) => tecnica.id === id);
}

export function encontrarTecnicasPorIds(ids: string[]): Tecnica[] {
  const idSet = new Set(ids);
  return TECNICAS_BIBLIOTECA.filter((tecnica) => idSet.has(tecnica.id));
}
