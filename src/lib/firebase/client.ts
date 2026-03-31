import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { readRequiredEnv } from '../env';

const firebaseConfig = {
  apiKey: readRequiredEnv('VITE_FIREBASE_API_KEY', import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: readRequiredEnv('VITE_FIREBASE_AUTH_DOMAIN', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  projectId: readRequiredEnv('VITE_FIREBASE_PROJECT_ID', import.meta.env.VITE_FIREBASE_PROJECT_ID),
  storageBucket: readRequiredEnv('VITE_FIREBASE_STORAGE_BUCKET', import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: readRequiredEnv('VITE_FIREBASE_MESSAGING_SENDER_ID', import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: readRequiredEnv('VITE_FIREBASE_APP_ID', import.meta.env.VITE_FIREBASE_APP_ID),
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
