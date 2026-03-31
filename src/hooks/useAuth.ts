import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../lib/firebase/client';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const login = async (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const register = async (email: string, pass: string) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const resetPassword = async (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = async () => {
    return signOut(auth);
  };

  return {
    ...context,
    userId: context.user?.uid || null,
    isProfessorOrAdmin: context.isProfessor || context.isAdmin,
    tenantId: context.tenantId,
    refreshClaims: context.refreshClaims,
    login,
    register,
    resetPassword,
    logout
  };
}
