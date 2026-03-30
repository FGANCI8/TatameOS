import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getIdTokenResult, onIdTokenChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase/client';
import { AuthContext, UserRole } from './AuthContext';

function normalizeRole(role: unknown): UserRole {
  return role === 'professor' || role === 'admin' || role === 'aluno' ? role : null;
}

function normalizeTenantId(tenantId: unknown): string | null {
  if (typeof tenantId !== 'string') {
    return null;
  }

  const trimmed = tenantId.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>(null);
  const [tenantId, setTenantId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const claimsSyncedUidRef = useRef<string | null>(null);

  const syncClaims = useCallback(async (currentUser: User, forceRefresh = false) => {
    const tokenResult = await getIdTokenResult(currentUser, forceRefresh);
    const normalizedRole = normalizeRole(tokenResult.claims.role);
    const normalizedTenantId = normalizeTenantId(tokenResult.claims.tenantId ?? tokenResult.claims.academiaId);

    setRole(normalizedRole);
    setTenantId(normalizedTenantId);
    claimsSyncedUidRef.current = currentUser.uid;

    return normalizedRole;
  }, []);

  const refreshClaims = useCallback(async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setRole(null);
      setTenantId(null);
      claimsSyncedUidRef.current = null;
      return null;
    }

    claimsSyncedUidRef.current = null;
    return syncClaims(currentUser, true);
  }, [syncClaims]);

  useEffect(() => {
    let isActive = true;

    const unsubscribe = onIdTokenChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (!currentUser) {
        if (isActive) {
          setRole(null);
          setTenantId(null);
          claimsSyncedUidRef.current = null;
          setLoading(false);
        }
        return;
      }

      try {
        const shouldForceRefresh = claimsSyncedUidRef.current !== currentUser.uid;
        const normalizedRole = await syncClaims(currentUser, shouldForceRefresh);
        if (isActive) {
          setRole(normalizedRole);
        }
      } catch (error) {
        if (isActive) {
          setRole(null);
          setTenantId(null);
          claimsSyncedUidRef.current = null;
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    });

    return () => {
      isActive = false;
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        role,
        tenantId,
        isProfessor: role === 'professor' || role === 'admin',
        isAdmin: role === 'admin',
        refreshClaims,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
