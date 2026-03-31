import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

function requireEnv(name: string, value: string | undefined): string {
  const trimmed = value?.trim();

  if (!trimmed) {
    throw new Error(`Variável obrigatória ausente: ${name}.`);
  }

  const normalized = trimmed.toLowerCase();
  if (normalized.startsWith('dummy') || normalized.includes('placeholder') || normalized.startsWith('sua_') || normalized.startsWith('seu_')) {
    throw new Error(`Variável ${name} contém placeholder e não pode ser usada como config válida.`);
  }

  return trimmed;
}

const firebaseConfig = {
  apiKey: requireEnv('VITE_FIREBASE_API_KEY', import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: requireEnv('VITE_FIREBASE_AUTH_DOMAIN', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  projectId: requireEnv('VITE_FIREBASE_PROJECT_ID', import.meta.env.VITE_FIREBASE_PROJECT_ID),
  storageBucket: requireEnv('VITE_FIREBASE_STORAGE_BUCKET', import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: requireEnv('VITE_FIREBASE_MESSAGING_SENDER_ID', import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: requireEnv('VITE_FIREBASE_APP_ID', import.meta.env.VITE_FIREBASE_APP_ID),
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app, 'us-central1');

const functionsEmulatorHost =
  import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_HOST ||
  (import.meta.env.DEV ? '127.0.0.1' : '');
const functionsEmulatorPort = Number(import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_PORT || '5001');

if (functionsEmulatorHost) {
  connectFunctionsEmulator(functions, functionsEmulatorHost, functionsEmulatorPort);
}
