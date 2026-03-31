import * as admin from 'firebase-admin';
import { config as loadEnv } from 'dotenv';

loadEnv();

let initialized = false;

export function ensureAdminApp() {
  if (initialized || admin.apps.length) {
    initialized = true;
    return admin.app();
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Credenciais administrativas ausentes para inicializar o Firebase Admin SDK.');
  }

  initialized = true;
  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

ensureAdminApp();

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();
