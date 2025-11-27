import { create } from 'zustand';
import { getAccessToken, setAccessToken, removeAccessToken } from '../api/client';
import { adminLogin, type LoginRequest } from '../api/admin';

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

/**
 * JWT 토큰을 디코딩하여 payload를 반환합니다.
 * @param token JWT 토큰 문자열
 * @returns 디코딩된 payload 객체 또는 null
 */
const decodeJWT = (token: string): any | null => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    const payload = parts[1];
    // Base64 URL 디코딩
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded);
  } catch (error) {
    console.error('JWT 디코딩 실패:', error);
    return null;
  }
};

/**
 * JWT 토큰에서 권한을 확인합니다.
 * @param token JWT 토큰 문자열
 * @returns 관리자 권한이 있으면 true, 없으면 false
 */
const checkAdminRole = (token: string | null): boolean => {
  if (!token) return false;
  
  const decoded = decodeJWT(token);
  if (!decoded) return false;
  
  // 백엔드에서 roles 필드에 "ROLE_ADMIN"을 포함하는지 확인
  const roles = decoded.roles || decoded.authorities || [];
  if (Array.isArray(roles)) {
    return roles.includes('ROLE_ADMIN');
  }
  if (typeof roles === 'string') {
    return roles === 'ROLE_ADMIN' || roles.includes('ROLE_ADMIN');
  }
  
  return false;
};

export const useAuthStore = create<AuthState>((set) => {
  const token = getAccessToken();
  return {
    isAuthenticated: !!token,
    isAdmin: checkAdminRole(token),
    isLoading: false,

    login: async (credentials: LoginRequest) => {
      set({ isLoading: true });
      try {
        const response = await adminLogin(credentials);
        setAccessToken(response.accessToken);
        const isAdmin = checkAdminRole(response.accessToken);
        set({ isAuthenticated: true, isAdmin, isLoading: false });
      } catch (error) {
        set({ isLoading: false });
        throw error;
      }
    },

    logout: () => {
      removeAccessToken();
      set({ isAuthenticated: false, isAdmin: false });
    },

    checkAuth: () => {
      const token = getAccessToken();
      const isAdmin = checkAdminRole(token);
      set({ isAuthenticated: !!token, isAdmin });
    },
  };
});

