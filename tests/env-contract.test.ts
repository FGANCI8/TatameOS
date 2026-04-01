import assert from 'node:assert/strict';
import { readOptionalEnv, readRequiredEnv } from '../src/lib/env';

function expectThrow(fn: () => unknown, message: string) {
  assert.throws(fn, new RegExp(message));
}

function main() {
  assert.equal(readRequiredEnv('TOKEN', 'real-value'), 'real-value');
  assert.equal(readOptionalEnv('TOKEN', 'real-value'), 'real-value');
  assert.equal(readOptionalEnv('TOKEN', undefined), undefined);
  expectThrow(() => readRequiredEnv('TOKEN', 'placeholder-value'), 'placeholder');
  expectThrow(() => readOptionalEnv('TOKEN', 'SUA_URL_DO_SUPABASE'), 'placeholder');

  for (const name of [
    'YOUTUBE_API_KEY',
    'GOOGLE_DRIVE_CLIENT_ID',
    'GOOGLE_DRIVE_CLIENT_SECRET',
    'GOOGLE_DRIVE_REFRESH_TOKEN',
    'GOOGLE_DRIVE_FOLDER_ID',
  ]) {
    assert.equal(readRequiredEnv(name, 'real-value'), 'real-value');
    expectThrow(() => readRequiredEnv(name, 'placeholder-value'), 'placeholder');
  }

  console.log('PASSA | Env contract validado.');
}

main();
