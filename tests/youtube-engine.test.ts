import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { activateYouTubeLibrary } from '../src/modules/tecnica/youtube-engine';
import { createFileSystemYouTubeLibraryPersistenceAdapter } from '../src/modules/tecnica/youtube-engine/persistence';
import { buildYouTubeSearchQuery } from '../src/modules/tecnica/youtube-engine/query';
import { validateYouTubeSearchResult } from '../src/modules/tecnica/youtube-engine/validator';

function createJsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}

function buildCandidate(title: string, category: string, language: 'pt-BR' | 'en'): Parameters<typeof validateYouTubeSearchResult>[0] {
  return {
    id: `${category}-video`,
    title,
    channel: 'Tatame Academy',
    url: `https://www.youtube.com/watch?v=${category}-video`,
    duration: 'PT7M30S',
    thumbnailOriginal: 'https://img.youtube.com/vi/demo/hqdefault.jpg',
    description: `${title} em treino real de jiu jitsu.`,
    language,
    embeddable: true,
    liveBroadcastContent: 'none',
  };
}

async function main() {
  const plan = buildYouTubeSearchQuery({
    tecnicaNome: 'jiu jitsu guarda retention',
    categoria: 'Guarda',
    idiomaPreferido: 'pt-BR',
  });

  assert.equal(plan.regionCode, 'BR');
  assert.equal(plan.videoEmbeddable, true);
  assert.equal(plan.part, 'snippet');

  assert.equal(validateYouTubeSearchResult(buildCandidate('Finalizacao armbar from guard', 'finalizacoes', 'pt-BR'), 'finalizacoes').accepted, true);
  assert.equal(validateYouTubeSearchResult(buildCandidate('Compilation of BJJ highlights', 'finalizacoes', 'en'), 'finalizacoes').accepted, false);

  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'tatameos-youtube-'));
  const persistence = createFileSystemYouTubeLibraryPersistenceAdapter(tempRoot);

  const fetchMock = async (input: RequestInfo | URL) => {
    const url = new URL(String(input));
    const pathname = url.pathname;
    const query = url.searchParams.get('q') ?? '';
    const ids = url.searchParams.get('id')?.split(',') ?? [];

    if (pathname.endsWith('/search')) {
      if (query.includes('finalizacao')) {
        return createJsonResponse({
          items: [
            {
              id: { videoId: 'finalizacoes-video' },
              snippet: {
                title: 'Finalizacao armbar details',
                channelTitle: 'Tatame Academy',
                description: 'Detalhe real de armbar e finalizacao.',
                thumbnails: { high: { url: 'https://img.youtube.com/vi/finalizacoes-video/hqdefault.jpg' } },
                publishedAt: '2026-03-01T10:00:00Z',
                defaultLanguage: 'pt',
                defaultAudioLanguage: 'pt-BR',
                liveBroadcastContent: 'none',
              },
            },
          ],
        });
      }

      if (query.includes('guarda')) {
        return createJsonResponse({
          items: [
            {
              id: { videoId: 'guardas-video' },
              snippet: {
                title: 'Guard retention concepts',
                channelTitle: 'Tatame Academy',
                description: 'Guard retention for BJJ.',
                thumbnails: { high: { url: 'https://img.youtube.com/vi/guardas-video/hqdefault.jpg' } },
                publishedAt: '2026-03-01T10:00:00Z',
                defaultLanguage: 'en',
                defaultAudioLanguage: 'en',
                liveBroadcastContent: 'none',
              },
            },
          ],
        });
      }

      return createJsonResponse({
        items: [
          {
            id: { videoId: 'passagens-video' },
            snippet: {
              title: 'Passagem de guarda knee slice',
              channelTitle: 'Tatame Academy',
              description: 'Passagem de guarda com knee slice.',
              thumbnails: { high: { url: 'https://img.youtube.com/vi/passagens-video/hqdefault.jpg' } },
              publishedAt: '2026-03-01T10:00:00Z',
              defaultLanguage: 'pt',
              defaultAudioLanguage: 'pt-BR',
              liveBroadcastContent: 'none',
            },
          },
        ],
      });
    }

    if (pathname.endsWith('/videos')) {
      const items = ids.map((id) => {
        if (id === 'finalizacoes-video') {
          return {
            id,
            snippet: {
              title: 'Finalizacao armbar details',
              channelTitle: 'Tatame Academy',
              description: 'Detalhe real de armbar e finalizacao.',
              thumbnails: { high: { url: 'https://img.youtube.com/vi/finalizacoes-video/hqdefault.jpg' } },
              publishedAt: '2026-03-01T10:00:00Z',
              defaultLanguage: 'pt',
              defaultAudioLanguage: 'pt-BR',
              liveBroadcastContent: 'none',
            },
            contentDetails: { duration: 'PT7M30S' },
            status: { embeddable: true, privacyStatus: 'public' },
          };
        }

        if (id === 'guardas-video') {
          return {
            id,
            snippet: {
              title: 'Guard retention concepts',
              channelTitle: 'Tatame Academy',
              description: 'Guard retention for BJJ.',
              thumbnails: { high: { url: 'https://img.youtube.com/vi/guardas-video/hqdefault.jpg' } },
              publishedAt: '2026-03-01T10:00:00Z',
              defaultLanguage: 'en',
              defaultAudioLanguage: 'en',
              liveBroadcastContent: 'none',
            },
            contentDetails: { duration: 'PT8M12S' },
            status: { embeddable: true, privacyStatus: 'public' },
          };
        }

        return {
          id,
          snippet: {
            title: 'Passagem de guarda knee slice',
            channelTitle: 'Tatame Academy',
            description: 'Passagem de guarda com knee slice.',
            thumbnails: { high: { url: 'https://img.youtube.com/vi/passagens-video/hqdefault.jpg' } },
            publishedAt: '2026-03-01T10:00:00Z',
            defaultLanguage: 'pt',
            defaultAudioLanguage: 'pt-BR',
            liveBroadcastContent: 'none',
          },
          contentDetails: { duration: 'PT9M01S' },
          status: { embeddable: true, privacyStatus: 'public' },
        };
      });

      return createJsonResponse({ items });
    }

    throw new Error(`Unexpected URL: ${String(input)}`);
  };

  const report = await activateYouTubeLibrary({
    apiKey: 'unit-test-key',
    fetchImpl: fetchMock as typeof fetch,
    persistence,
    targetCountPerCategory: 1,
  });

  assert.equal(report.source, 'youtube-data-api-v3');
  assert.equal(report.categories.length, 3);
  assert.equal(report.categories.every((category) => category.accepted.length === 1), true);
  assert.ok(report.persisted);
  assert.ok(fs.existsSync(path.join(tempRoot, 'src', 'data', 'bjj-library', 'generated', 'library.json')));
  assert.ok(fs.existsSync(path.join(tempRoot, 'src', 'data', 'bjj-library', 'generated', 'library-report.md')));
}

main()
  .then(() => {
    console.log('PASSA | YouTube engine validado.');
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
