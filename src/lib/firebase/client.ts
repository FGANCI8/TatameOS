import { initializeApp, getApps, getApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
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

// --- Emulator connections ---
const useEmulators = import.meta.env.DEV || !!import.meta.env.VITE_USE_EMULATORS;

if (useEmulators) {
  const emulatorHost = import.meta.env.VITE_FIREBASE_EMULATOR_HOST || '127.0.0.1';

  // Auth emulator
  const authPort = Number(import.meta.env.VITE_FIREBASE_AUTH_EMULATOR_PORT || '9099');
  connectAuthEmulator(auth, `http://${emulatorHost}:${authPort}`, { disableWarnings: true });

  // Firestore emulator
  const firestorePort = Number(import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_PORT || '8080');
  connectFirestoreEmulator(db, emulatorHost, firestorePort);

  // Functions emulator
  const functionsPort = Number(import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_PORT || '5001');
  connectFunctionsEmulator(functions, emulatorHost, functionsPort);

  console.info('[TatameOS] Emuladores Firebase conectados:', { emulatorHost, authPort, firestorePort, functionsPort });
}
