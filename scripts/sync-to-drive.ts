import { promises as fs } from 'node:fs';
import path from 'node:path';
import { config as loadEnv } from 'dotenv';
import { google } from 'googleapis';
import { readOptionalEnv } from '../src/lib/env';

loadEnv();

type SyncStatus = 'planned' | 'blocked' | 'skipped' | 'error';

type DriveConfig = {
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
  folderId?: string;
};

type SyncTarget = {
  path: string;
  kind: 'file' | 'directory';
  destination: string;
};

type SyncPlanEntry = {
  file: string;
  destination: string;
  status: SyncStatus;
  reason: string;
  comparison: 'pending-drive-check' | 'local-only' | 'blocked';
  lastModified?: string;
  sizeBytes?: number;
  backupPath?: string;
};

const ROOT = process.cwd();
const LOG_FILE = path.join(ROOT, 'prompts', 'sync-log.md');
const TARGETS: SyncTarget[] = [
  { path: 'prompts/README.md', kind: 'file', destination: '/TatameOS/prompts/' },
  { path: 'prompts/skills/_entry-router.md', kind: 'file', destination: '/TatameOS/prompts/skills/' },
  { path: 'prompts/skills/_activation-order.md', kind: 'file', destination: '/TatameOS/prompts/skills/' },
  { path: 'prompts/maps/system-reality-map.md', kind: 'file', destination: '/TatameOS/maps/' },
  { path: 'prompts/maps/routes-and-user-flows-map.md', kind: 'file', destination: '/TatameOS/maps/' },
  { path: 'prompts/contracts/environment-contract.md', kind: 'file', destination: '/TatameOS/contracts/' },
  { path: 'src/data/bjj-library', kind: 'directory', destination: '/TatameOS/library/bjj-techniques/' },
  { path: 'audit_report.md', kind: 'file', destination: '/TatameOS/reports/' },
];

const BLOCKED_PATTERNS: RegExp[] = [
  /(^|[\\/])\.env(\..*)?$/i,
  /(^|[\\/])node_modules([\\/]|$)/i,
  /(^|[\\/])dist([\\/]|$)/i,
  /(^|[\\/])coverage([\\/]|$)/i,
  /(^|[\\/])\.git([\\/]|$)/i,
  /(^|[\\/])secrets?([\\/]|$)/i,
  /\.(log|pem|p12|pfx|key|crt|cert|secret)(\.[^\\/]+)?$/i,
];

function readDriveConfig(): DriveConfig {
  return {
    clientId: readOptionalEnv('GOOGLE_DRIVE_CLIENT_ID', process.env.GOOGLE_DRIVE_CLIENT_ID),
    clientSecret: readOptionalEnv('GOOGLE_DRIVE_CLIENT_SECRET', process.env.GOOGLE_DRIVE_CLIENT_SECRET),
    refreshToken: readOptionalEnv('GOOGLE_DRIVE_REFRESH_TOKEN', process.env.GOOGLE_DRIVE_REFRESH_TOKEN),
    folderId: readOptionalEnv('GOOGLE_DRIVE_FOLDER_ID', process.env.GOOGLE_DRIVE_FOLDER_ID),
  };
}

function hasDriveConfig(config: DriveConfig): boolean {
  return Boolean(config.clientId && config.clientSecret && config.refreshToken && config.folderId);
}

function buildDriveClient(config: Required<DriveConfig>) {
  const auth = new google.auth.OAuth2(config.clientId, config.clientSecret);
  auth.setCredentials({ refresh_token: config.refreshToken });
  return google.drive({ version: 'v3', auth });
}

function normalizeRelativePath(filePath: string): string {
  return filePath.split(path.sep).join('/');
}

function isBlockedPath(filePath: string): string | null {
  const normalized = normalizeRelativePath(filePath);

  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(normalized)) {
      return `blocked by safety policy (${pattern.source})`;
    }
  }

  return null;
}

function isTargetPath(target: SyncTarget, relativePath: string): boolean {
  const normalized = normalizeRelativePath(relativePath);

  if (target.kind === 'file') {
    return normalized === normalizeRelativePath(target.path);
  }

  const root = normalizeRelativePath(target.path);
  return normalized === root || normalized.startsWith(`${root}/`);
}

function destinationFor(relativePath: string): string {
  const normalized = normalizeRelativePath(relativePath);

  if (normalized.startsWith('src/data/bjj-library')) {
    return '/TatameOS/library/bjj-techniques/';
  }

  if (normalized.startsWith('prompts/contracts')) {
    return '/TatameOS/contracts/';
  }

  if (normalized.startsWith('prompts/maps')) {
    return '/TatameOS/maps/';
  }

  if (normalized.startsWith('prompts/skills')) {
    return '/TatameOS/prompts/skills/';
  }

  if (normalized.startsWith('prompts/')) {
    return '/TatameOS/prompts/';
  }

  if (normalized.endsWith('.md')) {
    return '/TatameOS/reports/';
  }

  return '/TatameOS/archive/';
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(path.join(ROOT, filePath));
    return true;
  } catch {
    return false;
  }
}

async function statFile(filePath: string): Promise<SyncPlanEntry | null> {
  const absolutePath = path.join(ROOT, filePath);

  try {
    const stats = await fs.stat(absolutePath);
    if (!stats.isFile()) {
      return null;
    }

    return {
      file: normalizeRelativePath(filePath),
      destination: destinationFor(filePath),
      status: 'planned',
      reason: 'local file discovered and queued for future Drive comparison',
      comparison: 'pending-drive-check',
      lastModified: stats.mtime.toISOString(),
      sizeBytes: stats.size,
      backupPath: path.posix.join(
        destinationFor(filePath),
        '.backups',
        `${path.basename(filePath)}.${stats.mtime.getTime()}.bak`,
      ),
    };
  } catch {
    return null;
  }
}

async function collectFilesInDirectory(rootPath: string): Promise<string[]> {
  const absoluteRoot = path.join(ROOT, rootPath);

  try {
    const stats = await fs.stat(absoluteRoot);
    if (!stats.isDirectory()) {
      return [];
    }
  } catch {
    return [];
  }

  const entries: string[] = [];
  const walk = async (relativeDir: string): Promise<void> => {
    const absoluteDir = path.join(ROOT, relativeDir);
    const dirEntries = await fs.readdir(absoluteDir, { withFileTypes: true });

    for (const entry of dirEntries) {
      const nextRelativePath = path.join(relativeDir, entry.name);
      if (entry.isDirectory()) {
        await walk(nextRelativePath);
        continue;
      }

      if (entry.isFile()) {
        entries.push(normalizeRelativePath(nextRelativePath));
      }
    }
  };

  await walk(rootPath);
  return entries;
}

async function collectEligiblePaths(): Promise<string[]> {
  const discovered = new Set<string>();

  for (const target of TARGETS) {
    if (target.kind === 'file') {
      if (await fileExists(target.path) && isTargetPath(target, target.path)) {
        discovered.add(normalizeRelativePath(target.path));
      }
      continue;
    }

    for (const file of await collectFilesInDirectory(target.path)) {
      if (isTargetPath(target, file)) {
        discovered.add(file);
      }
    }
  }

  return [...discovered].filter((file) => !isBlockedPath(file));
}

function compareChangeCandidate(entry: SyncPlanEntry): SyncPlanEntry {
  return {
    ...entry,
    reason: `${entry.reason}; remote Drive comparison is pending implementation`,
    comparison: 'pending-drive-check',
  };
}

async function buildSyncPlan(): Promise<SyncPlanEntry[]> {
  const plans: SyncPlanEntry[] = [];

  for (const file of await collectEligiblePaths()) {
    const snapshot = await statFile(file);
    if (!snapshot) {
      plans.push({
        file: normalizeRelativePath(file),
        destination: destinationFor(file),
        status: 'error',
        reason: 'file snapshot could not be created',
        comparison: 'blocked',
      });
      continue;
    }

    plans.push(compareChangeCandidate(snapshot));
  }

  return plans;
}

async function appendLog(lines: string[]) {
  const header = `\n## ${new Date().toISOString()}\n`;
  const body = lines.join('\n');
  await fs.mkdir(path.dirname(LOG_FILE), { recursive: true });
  await fs.appendFile(LOG_FILE, `${header}${body}\n`, 'utf8');
}

function formatPlanLines(entries: SyncPlanEntry[]): string[] {
  return entries.map((entry) => {
    const details = [
      `status=${entry.status}`,
      `comparison=${entry.comparison}`,
      entry.lastModified ? `mtime=${entry.lastModified}` : null,
      entry.sizeBytes ? `size=${entry.sizeBytes}` : null,
      entry.backupPath ? `backup=${entry.backupPath}` : null,
    ]
      .filter(Boolean)
      .join(', ');

    return `- ${entry.file} -> ${entry.destination} (${details}; ${entry.reason})`;
  });
}

function createSyncClientIfReady(config: DriveConfig) {
  if (!hasDriveConfig(config)) {
    return null;
  }

  return buildDriveClient({
    clientId: config.clientId!,
    clientSecret: config.clientSecret!,
    refreshToken: config.refreshToken!,
    folderId: config.folderId!,
  });
}

async function main() {
  const config = readDriveConfig();
  const syncPlan = await buildSyncPlan();
  const drive = createSyncClientIfReady(config);
  const timestamp = new Date().toISOString();

  if (!drive) {
    await appendLog([
      `- status: blocked`,
      `- timestamp: ${timestamp}`,
      `- reason: Google Drive OAuth2 credentials are not configured`,
      `- upload: TODO`,
      `- files: ${syncPlan.length}`,
      ...formatPlanLines(syncPlan),
    ]);

    console.log('Google Drive sync is blocked until OAuth2 variables are configured.');
    return;
  }

  void drive;

  await appendLog([
    `- status: prepared`,
    `- timestamp: ${timestamp}`,
    `- root-folder: ${config.folderId}`,
    `- upload: TODO`,
    `- files: ${syncPlan.length}`,
    ...formatPlanLines(syncPlan),
  ]);

  console.log('Drive sync hardening complete. Upload remains TODO and no files were transferred.');
}

main().catch(async (error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unknown sync error';
  await appendLog([`- status: error`, `- timestamp: ${new Date().toISOString()}`, `- reason: ${message}`]).catch(
    () => undefined,
  );
  console.error(message);
  process.exitCode = 1;
});
