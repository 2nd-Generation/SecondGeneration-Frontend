// 환경 변수에서 API URL 가져오기, 없으면 기본값 사용
// Vite에서는 VITE_ 접두사가 필요합니다
// HTTPS 환경에서는 Vercel serverless function을 통해 프록시되므로 상대 경로 사용
// 개발 환경(HTTP)에서는 직접 API 서버로 요청
// 런타임에서 매번 체크하여 HTTPS 환경을 감지
export const getApiBaseUrl = () => {
  // 브라우저 환경에서 HTTPS인 경우 항상 상대 경로 사용 (Mixed Content 방지)
  // 환경 변수보다 우선순위가 높음
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    return '';
  }
  
  // 환경 변수가 설정되어 있으면 사용 (HTTP 환경에서만)
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // 프로덕션 빌드인 경우 상대 경로 사용
  if (import.meta.env.PROD) {
    return '';
  }
  
  // 개발 환경(HTTP)에서는 직접 API 서버로 요청
  return 'https://sgeaapi.kro.kr/swagger-ui/index.html';
};

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
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  // 토큰이 있으면 Authorization 헤더에 추가
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // 런타임에서 매번 API URL 가져오기 (HTTPS 환경 감지)
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
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

