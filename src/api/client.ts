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
  return 'https://sgeaapi.kro.kr';
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
  
  // 기존 헤더를 객체로 변환
  const existingHeaders: Record<string, string> = {};
  if (options.headers) {
    if (options.headers instanceof Headers) {
      options.headers.forEach((value, key) => {
        existingHeaders[key] = value;
      });
    } else if (Array.isArray(options.headers)) {
      options.headers.forEach(([key, value]) => {
        existingHeaders[key] = value;
      });
    } else {
      Object.assign(existingHeaders, options.headers);
    }
  }

  // 헤더 구성: 기존 헤더를 먼저 복사
  const headers: Record<string, string> = { ...existingHeaders };

  // Body가 FormData가 아닐 때만 Content-Type: application/json 추가
  // FormData의 경우 브라우저가 자동으로 multipart/form-data와 boundary를 설정해야 함
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  // 토큰이 있으면 Authorization 헤더에 추가 (항상 마지막에 추가하여 덮어쓰기 방지)
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
    // 디버깅용: 개발 환경에서만 로그 출력
    if (import.meta.env.DEV) {
      console.log('[API Request] Authorization header:', `Bearer ${token.substring(0, 20)}...`);
    }
  }

  // 런타임에서 매번 API URL 가져오기 (HTTPS 환경 감지)
  const apiBaseUrl = getApiBaseUrl();
  
  // options에서 headers를 제거하고 새로 만든 headers 사용
  const { headers: _, ...restOptions } = options;
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    ...restOptions,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // 인증 실패 처리
      // 개발 환경에서는 토큰을 즉시 삭제하지 않아 디버깅이 용이합니다.
      // 프로덕션에서는 보안을 위해 토큰을 삭제합니다.
      if (import.meta.env.PROD) {
        // 프로덕션: 보안을 위해 토큰 즉시 삭제
        removeAccessToken();
      } else {
        // 개발 환경: 토큰 유지 (수동으로 삭제 가능하도록)
        console.warn(
          '[개발 모드] 인증 실패(401)가 발생했습니다. ' +
          '토큰이 만료되었거나 서버가 재시작되었을 수 있습니다. ' +
          '로컬 스토리지에서 accessToken을 수동으로 삭제하고 다시 로그인해주세요.'
        );
      }
      throw new Error('인증에 실패했습니다. (401 Unauthorized) 다시 로그인해주세요.');
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

// 공개 API 요청 함수 (인증 없이 호출)
export const publicApiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  // 기존 헤더를 객체로 변환
  const existingHeaders: Record<string, string> = {};
  if (options.headers) {
    if (options.headers instanceof Headers) {
      options.headers.forEach((value, key) => {
        existingHeaders[key] = value;
      });
    } else if (Array.isArray(options.headers)) {
      options.headers.forEach(([key, value]) => {
        existingHeaders[key] = value;
      });
    } else {
      Object.assign(existingHeaders, options.headers);
    }
  }

  // 헤더 구성: 기존 헤더를 먼저 복사
  const headers: Record<string, string> = { ...existingHeaders };

  // Body가 FormData가 아닐 때만 Content-Type: application/json 추가
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  // 런타임에서 매번 API URL 가져오기 (HTTPS 환경 감지)
  const apiBaseUrl = getApiBaseUrl();
  
  // options에서 headers를 제거하고 새로 만든 headers 사용
  const { headers: _, ...restOptions } = options;
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    ...restOptions,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: '요청에 실패했습니다.' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  // 응답 본문이 없는 경우 (204 No Content 등)
  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    return {} as T;
  }

  // Content-Type 확인하여 JSON 또는 텍스트 처리
  const contentType = response.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    return response.json();
  } else {
    // JSON이 아닌 경우 텍스트로 받아서 처리
    const text = await response.text();
    try {
      // JSON 문자열인 경우 파싱 시도
      return JSON.parse(text) as T;
    } catch {
      // 일반 텍스트인 경우 객체로 래핑
      return { message: text } as T;
    }
  }
};

