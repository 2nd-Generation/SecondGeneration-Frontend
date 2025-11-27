import { getApiBaseUrl, getAccessToken } from './client';

/**
 * 이미지 파일을 업로드하고 URL을 반환받습니다.
 * @param file 업로드할 이미지 파일
 * @returns 업로드된 이미지의 URL
 */
export const uploadImage = async (file: File): Promise<string> => {
  const token = getAccessToken();
  
  const formData = new FormData();
  // 백엔드는 @RequestPart("file")을 사용하므로 키 이름이 정확히 "file"이어야 합니다
  formData.append('file', file);

  const headers: Record<string, string> = {};
  
  // 토큰이 있으면 Authorization 헤더에 추가
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
    // 디버깅용: 개발 환경에서만 로그 출력
    if (import.meta.env.DEV) {
      console.log('[Image Upload] Authorization header:', `Bearer ${token.substring(0, 20)}...`);
      console.log('[Image Upload] FormData key:', 'file');
    }
  }

  // 중요: FormData를 사용할 때는 Content-Type을 명시적으로 설정하지 않습니다.
  // 브라우저가 자동으로 multipart/form-data와 boundary를 설정합니다.
  // Content-Type을 수동으로 설정하면 boundary가 누락되어 요청이 실패할 수 있습니다.

  // 런타임에서 매번 API URL 가져오기 (HTTPS 환경 감지)
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/api/image/upload`, {
    method: 'POST',
    headers,
    body: formData,
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('인증에 실패했습니다. 다시 로그인해주세요.');
    }
    const error = await response.json().catch(() => ({ message: '이미지 업로드에 실패했습니다.' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  // 응답이 JSON 문자열 또는 일반 문자열로 반환될 수 있음
  const contentType = response.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    const jsonData = await response.json();
    // JSON 객체인 경우 문자열 속성 추출, 아니면 그대로 반환
    return typeof jsonData === 'string' ? jsonData : (jsonData.url || jsonData.imageUrl || JSON.stringify(jsonData));
  } else {
    // 일반 문자열로 반환되는 경우
    const textData = await response.text();
    // 따옴표로 감싸진 JSON 문자열인 경우 파싱
    try {
      const parsed = JSON.parse(textData);
      return typeof parsed === 'string' ? parsed : (parsed.url || parsed.imageUrl || textData);
    } catch {
      // JSON이 아니면 그대로 반환
      return textData.trim();
    }
  }
};

