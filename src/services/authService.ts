import { auth } from '@/src/lib/firebase/client';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const authService = {
  login: (email: string, pass: string) => signInWithEmailAndPassword(auth, email, pass),
  register: (email: string, pass: string) => createUserWithEmailAndPassword(auth, email, pass),
  logout: () => signOut(auth),
};
