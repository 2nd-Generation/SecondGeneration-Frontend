import { getApiBaseUrl, getAccessToken } from './client';

/**
 * 이미지 파일을 업로드하고 URL을 반환받습니다.
 * @param file 업로드할 이미지 파일
 * @returns 업로드된 이미지의 URL
 */
export const uploadImage = async (file: File): Promise<string> => {
  const token = getAccessToken();
  
  const formData = new FormData();
  formData.append('file', file);

  const headers: Record<string, string> = {};
  
  // 토큰이 있으면 Authorization 헤더에 추가
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

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

  // 응답이 JSON 문자열로 반환됨
  const imageUrl = await response.json();
  return imageUrl;
};

