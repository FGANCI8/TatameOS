import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { YouTubeLibraryActivationReport } from './types';

export interface YouTubePersistencePlan {
  manifestPath: string;
  reportPath: string;
  categoryFiles: string[];
  backupPaths: string[];
  overwriteAllowed: false;
  status: 'pending';
  reason: string;
}

export interface YouTubeLibraryPersistenceResult {
  manifestPath: string;
  reportPath: string;
  categoryFiles: string[];
  backupPaths: string[];
}

export interface YouTubeLibraryPersistenceAdapter {
  buildPlan(report: YouTubeLibraryActivationReport): YouTubePersistencePlan;
  save(report: YouTubeLibraryActivationReport): Promise<YouTubeLibraryPersistenceResult>;
}

const GENERATED_RELATIVE_DIR = path.join('src', 'data', 'bjj-library', 'generated');
const MANIFEST_FILE = 'library.json';
const REPORT_FILE = 'library-report.md';

function toPosixPath(filePath: string): string {
  return filePath.split(path.sep).join('/');
}

function buildGeneratedPaths(rootDir: string) {
  const generatedDir = path.join(rootDir, GENERATED_RELATIVE_DIR);
  return {
    generatedDir,
    manifestPath: path.join(generatedDir, MANIFEST_FILE),
    reportPath: path.join(generatedDir, REPORT_FILE),
    backupDir: path.join(generatedDir, '.backups'),
  };
}

function buildReportMarkdown(report: YouTubeLibraryActivationReport): string {
  const lines: string[] = [];
  lines.push(`# YouTube BJJ Library Activation Report`);
  lines.push(`- generatedAt: ${report.generatedAt}`);
  lines.push(`- source: ${report.source}`);
  lines.push('');

  for (const category of report.categories) {
    lines.push(`## ${category.categoryLabel}`);
    lines.push(`- key: ${category.category}`);
    lines.push(`- queries: ${category.queries.join(' | ')}`);
    lines.push(`- accepted: ${category.accepted.length}`);
    lines.push(`- rejected: ${category.rejected.length}`);
    lines.push(`- pendingCount: ${category.pendingCount}`);
    lines.push('');
    lines.push('### Accepted');

    if (category.accepted.length === 0) {
      lines.push('- none');
    } else {
      for (const video of category.accepted) {
        lines.push(`- ${video.youtubeId} | ${video.title} | ${video.language} | ${video.url}`);
      }
    }

    lines.push('');
    lines.push('### Rejected');
    if (category.rejected.length === 0) {
      lines.push('- none');
    } else {
      for (const rejection of category.rejected) {
        const parts = [
          rejection.youtubeId ?? 'unknown-id',
          rejection.title ?? 'unknown-title',
          rejection.language ?? 'unknown-language',
          rejection.reason,
        ];
        lines.push(`- ${parts.join(' | ')}`);
      }
    }

    lines.push('');
  }

  return `${lines.join('\n').trim()}\n`;
}

async function writeJsonFile(filePath: string, data: unknown): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

async function writeTextFile(filePath: string, data: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, data, 'utf8');
}

async function backupIfExists(filePath: string, backupDir: string): Promise<string | null> {
  try {
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) {
      return null;
    }

    await fs.mkdir(backupDir, { recursive: true });
    const backupPath = path.join(backupDir, `${path.basename(filePath)}.${stats.mtimeMs}.bak`);
    await fs.copyFile(filePath, backupPath);
    return backupPath;
  } catch {
    return null;
  }
}

export function createFileSystemYouTubeLibraryPersistenceAdapter(
  rootDir: string = process.cwd(),
): YouTubeLibraryPersistenceAdapter {
  return {
    buildPlan(report) {
      const paths = buildGeneratedPaths(rootDir);

      return {
        manifestPath: toPosixPath(path.relative(rootDir, paths.manifestPath)),
        reportPath: toPosixPath(path.relative(rootDir, paths.reportPath)),
        categoryFiles: report.categories.map((category) =>
          toPosixPath(path.relative(rootDir, path.join(paths.generatedDir, `${category.category}.json`))),
        ),
        backupPaths: [],
        overwriteAllowed: false,
        status: 'pending',
        reason: 'library activation is ready for controlled local persistence',
      };
    },
    async save(report) {
      const paths = buildGeneratedPaths(rootDir);
      const backupPaths: string[] = [];

      const manifestBackup = await backupIfExists(paths.manifestPath, paths.backupDir);
      const reportBackup = await backupIfExists(paths.reportPath, paths.backupDir);
      if (manifestBackup) {
        backupPaths.push(toPosixPath(path.relative(rootDir, manifestBackup)));
      }
      if (reportBackup) {
        backupPaths.push(toPosixPath(path.relative(rootDir, reportBackup)));
      }

      const categoryFiles: string[] = [];
      for (const category of report.categories) {
        const categoryPath = path.join(paths.generatedDir, `${category.category}.json`);
        const categoryBackup = await backupIfExists(categoryPath, paths.backupDir);
        if (categoryBackup) {
          backupPaths.push(toPosixPath(path.relative(rootDir, categoryBackup)));
        }

        await writeJsonFile(categoryPath, category);
        categoryFiles.push(toPosixPath(path.relative(rootDir, categoryPath)));
      }

      await writeJsonFile(paths.manifestPath, report);
      await writeTextFile(paths.reportPath, buildReportMarkdown(report));

      return {
        manifestPath: toPosixPath(path.relative(rootDir, paths.manifestPath)),
        reportPath: toPosixPath(path.relative(rootDir, paths.reportPath)),
        categoryFiles,
        backupPaths,
      };
    },
  };
}

export function createNoopYouTubeLibraryPersistenceAdapter(): YouTubeLibraryPersistenceAdapter {
  return {
    buildPlan(report) {
      return {
        manifestPath: 'src/data/bjj-library/generated/library.json',
        reportPath: 'src/data/bjj-library/generated/library-report.md',
        categoryFiles: report.categories.map((category) => `src/data/bjj-library/generated/${category.category}.json`),
        backupPaths: [],
        overwriteAllowed: false,
        status: 'pending',
        reason: 'persistence adapter not implemented yet',
      };
    },
    async save() {
      throw new Error('YouTube persistence adapter not implemented yet.');
    },
  };
}
