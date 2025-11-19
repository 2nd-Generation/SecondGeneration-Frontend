import { apiRequest } from './client';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

// 관리자 로그인
export const adminLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
  return apiRequest<LoginResponse>('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

