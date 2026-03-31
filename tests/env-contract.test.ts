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
  console.log('PASSA | Env contract validado.');
}

main();
