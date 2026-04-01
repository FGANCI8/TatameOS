import { promises as fs } from 'node:fs';
import path from 'node:path';
import { defesas, finalizacoes, guardar, passagens, quedas } from '../../data/bjj-library';
import type { BjjTechniqueEntry, BjjTechniqueVideoEntry } from '../../data/bjj-library/types';
import type { Tecnica } from './types';
import type { YouTubeLibraryActivationReport } from './youtube-engine/types';

type BjjLibrarySource = {
  category: Tecnica['categoria'];
  entries: BjjTechniqueEntry[];
};

export interface BjjLibraryReadFacadeState {
  source: 'static-catalog' | 'generated-youtube';
  fallbackSource: 'src/modules/tecnica/catalog.ts';
  manifestPath: string;
  generatedReportAvailable: boolean;
}

const GENERATED_LIBRARY_PATH = path.join('src', 'data', 'bjj-library', 'generated', 'library.json');

async function readJsonFileIfExists<T>(filePath: string): Promise<T | null> {
  try {
    const contents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(contents) as T;
  } catch {
    return null;
  }
}

export async function readGeneratedYouTubeLibraryReport(
  rootDir: string = process.cwd(),
): Promise<YouTubeLibraryActivationReport | null> {
  const absolutePath = path.join(rootDir, GENERATED_LIBRARY_PATH);
  return readJsonFileIfExists<YouTubeLibraryActivationReport>(absolutePath);
}

export async function buildBjjLibraryReadFacadeState(
  rootDir: string = process.cwd(),
): Promise<BjjLibraryReadFacadeState> {
  const generatedReport = await readGeneratedYouTubeLibraryReport(rootDir);

  return {
    source: generatedReport?.categories.some((category) => category.accepted.length > 0)
      ? 'generated-youtube'
      : 'static-catalog',
    fallbackSource: 'src/modules/tecnica/catalog.ts',
    manifestPath: GENERATED_LIBRARY_PATH,
    generatedReportAvailable: Boolean(generatedReport),
  };
}

const BJJ_LIBRARY_SOURCES: BjjLibrarySource[] = [
  { category: 'Guarda', entries: guardar },
  { category: 'Passagem', entries: passagens },
  { category: 'Finalizacao', entries: finalizacoes },
  { category: 'Queda', entries: quedas },
  { category: 'Defesa', entries: defesas },
];

function mapVideoToTecnica(entry: BjjTechniqueEntry, video?: BjjTechniqueVideoEntry): Tecnica {
  return {
    id: entry.id,
    tenantId: 'shared',
    nome: entry.name,
    categoria:
      entry.category === 'finalizacao'
        ? 'Finalizacao'
        : entry.category === 'guarda'
          ? 'Guarda'
          : entry.category === 'passagem'
            ? 'Passagem'
            : entry.category === 'queda'
              ? 'Queda'
              : 'Defesa',
    dificuldadeBase:
      entry.level === 'iniciante' ? 1 : entry.level === 'intermediario' ? 2 : 3,
    videoUrl: video?.url,
    videoProvider: video ? 'youtube' : undefined,
    youtubeVideoId: video?.youtubeId,
    thumbnailUrl: video?.thumbnailOriginal,
    descricao: video?.imageConcept ?? `Entrada da biblioteca BJJ para ${entry.name}.`,
  };
}

export function listarTecnicasDaBjjLibrary(): Tecnica[] {
  return BJJ_LIBRARY_SOURCES.flatMap((source) =>
    source.entries.map((entry) => mapVideoToTecnica(entry, entry.videos[0])),
  );
}

export function contarTecnicasDaBjjLibrary(): Record<Tecnica['categoria'], number> {
  return BJJ_LIBRARY_SOURCES.reduce(
    (acc, source) => {
      acc[source.category] += source.entries.length;
      return acc;
    },
    {
      Guarda: 0,
      Passagem: 0,
      Finalizacao: 0,
      Queda: 0,
      Defesa: 0,
    },
  );
}

export function buildBibliotecaIntegrationPlan() {
  const counts = contarTecnicasDaBjjLibrary();

  return {
    currentSource: 'src/modules/tecnica/catalog.ts',
    futureSource: 'src/data/bjj-library/generated/',
    futureManifest: 'src/data/bjj-library/generated/library.json',
    fallbackPreserved: true,
    readyForWiring: Object.values(counts).some((count) => count > 0),
    counts,
  };
}
