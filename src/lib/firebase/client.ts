import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

const isConfigured = !!import.meta.env.VITE_FIREBASE_API_KEY;

if (!isConfigured) {
  console.error("🔥 AVISO CRÍTICO: VITE_FIREBASE_API_KEY não foi encontrada no ambiente (.env). Usando chaves dummy para evitar o colapso da renderização React. Funções de Auth e Database falharão até serem configuradas.");
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "dummy-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "dummy.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "dummy-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "dummy.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "00000000",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:00000000:web:000000",
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
