import { promises as fs } from 'node:fs';
import path from 'node:path';
import { google } from 'googleapis';

type SyncEntry = {
  file: string;
  destination: string;
  status: 'synced' | 'skipped' | 'error';
  reason?: string;
};

type DriveConfig = {
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
  folderId?: string;
};

const ROOT = process.cwd();
const LOG_FILE = path.join(ROOT, 'prompts', 'sync-log.md');
const PRIORITY_FILES = [
  'prompts/README.md',
  'prompts/skills/_entry-router.md',
  'prompts/skills/_activation-order.md',
  'prompts/maps/system-reality-map.md',
  'prompts/maps/routes-and-user-flows-map.md',
  'prompts/contracts/environment-contract.md',
  'src/data/bjj-library',
  'audit_report.md',
];

function readEnv(): DriveConfig {
  return {
    clientId: process.env.GOOGLE_DRIVE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_DRIVE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_DRIVE_REFRESH_TOKEN,
    folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
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

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(path.join(ROOT, filePath));
    return true;
  } catch {
    return false;
  }
}

async function collectPriorityEntries(): Promise<SyncEntry[]> {
  const entries: SyncEntry[] = [];

  for (const file of PRIORITY_FILES) {
    const exists = await fileExists(file);
    entries.push({
      file,
      destination: file.startsWith('src/data/bjj-library')
        ? '/TatameOS/library/bjj-techniques/'
        : file.startsWith('prompts/contracts')
          ? '/TatameOS/contracts/'
          : file.startsWith('prompts/maps')
            ? '/TatameOS/maps/'
            : '/TatameOS/prompts/',
      status: exists ? 'skipped' : 'error',
      reason: exists
        ? 'Arquivo presente localmente; sincronização manual aguardando comparação de alteração.'
        : 'Arquivo não encontrado no workspace.',
    });
  }

  return entries;
}

async function appendLog(lines: string[]) {
  const header = `\n## ${new Date().toISOString()}\n`;
  const body = lines.join('\n');
  await fs.mkdir(path.dirname(LOG_FILE), { recursive: true });
  await fs.appendFile(LOG_FILE, `${header}${body}\n`, 'utf8');
}

async function main() {
  const config = readEnv();
  const entries = await collectPriorityEntries();
  const ready = hasDriveConfig(config);
  const timestamp = new Date().toISOString();

  if (!ready) {
    await appendLog([
      `- status: skipped`,
      `- timestamp: ${timestamp}`,
      `- reason: Google Drive credentials not configured`,
      `- files: ${entries.length}`,
    ]);

    console.log('Google Drive credentials are not configured. See prompts/runbooks/google-drive-setup.md');
    return;
  }

  const drive = buildDriveClient({
    clientId: config.clientId!,
    clientSecret: config.clientSecret!,
    refreshToken: config.refreshToken!,
    folderId: config.folderId!,
  });

  void drive;

  await appendLog([
    `- status: prepared`,
    `- timestamp: ${timestamp}`,
    `- root-folder: ${config.folderId}`,
    `- files: ${entries.length}`,
    ...entries.map((entry) => `- ${entry.file}: ${entry.status}${entry.reason ? ` (${entry.reason})` : ''}`),
  ]);

  console.log('Drive sync scaffold ready. No files uploaded because this is the base implementation.');
}

main().catch(async (error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unknown sync error';
  await appendLog([`- status: error`, `- timestamp: ${new Date().toISOString()}`, `- reason: ${message}`]).catch(
    () => undefined,
  );
  console.error(message);
  process.exitCode = 1;
});
