const API_BASE_URL = 'http://3.38.35.5:8080';

// JWT 토큰을 localStorage에서 가져오기
export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

// JWT 토큰을 localStorage에 저장
export const setAccessToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

// JWT 토큰을 localStorage에서 제거
export const removeAccessToken = (): void => {
  localStorage.removeItem('accessToken');
};

// API 요청 래퍼 함수
export const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const token = getAccessToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // 토큰이 있으면 Authorization 헤더에 추가
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // 인증 실패 시 토큰 제거
      removeAccessToken();
      throw new Error('인증에 실패했습니다. 다시 로그인해주세요.');
    }
    const error = await response.json().catch(() => ({ message: '요청에 실패했습니다.' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  // 응답 본문이 없는 경우 (204 No Content 등)
  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    return {} as T;
  }

  return response.json();
};

