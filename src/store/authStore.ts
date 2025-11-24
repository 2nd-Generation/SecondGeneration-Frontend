import { create } from 'zustand';
import { getAccessToken, setAccessToken, removeAccessToken } from '../api/client';
import { adminLogin, type LoginRequest } from '../api/admin';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!getAccessToken(),
  isLoading: false,

  login: async (credentials: LoginRequest) => {
    set({ isLoading: true });
    try {
      const response = await adminLogin(credentials);
      setAccessToken(response.accessToken);
      set({ isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    removeAccessToken();
    set({ isAuthenticated: false });
  },

  checkAuth: () => {
    set({ isAuthenticated: !!getAccessToken() });
  },
}));

