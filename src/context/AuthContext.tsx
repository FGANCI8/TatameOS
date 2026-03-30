import { createContext } from 'react';
import { User } from 'firebase/auth';

export type UserRole = 'aluno' | 'professor' | 'admin' | null;

interface AuthContextData {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  role: UserRole;
  tenantId: string | null;
  isProfessor: boolean;
  isAdmin: boolean;
  refreshClaims: () => Promise<UserRole>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
