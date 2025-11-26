import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_BASE_URL = process.env.API_BASE_URL || 'https://sgeaapi.kro.kr';
const API_PREFIX = process.env.API_PREFIX || '/api';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 디버깅: 요청 정보 로깅
  console.log('API Request:', {
    method: req.method,
    url: req.url,
    query: req.query,
  });

  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // OPTIONS 요청 처리
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 메서드가 없으면 405 에러
  if (!req.method) {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    // 경로 추출: catch-all 라우트에서는 req.query.path 사용
    let path = '';
    if (req.query.path) {
      // req.query.path는 배열일 수 있음
      path = Array.isArray(req.query.path) 
        ? req.query.path.join('/') 
        : (req.query.path as string);
    } else if (req.url) {
      // fallback: req.url에서 직접 추출
      const urlPath = req.url.replace(/^\/api\/?/, '').split('?')[0];
      path = urlPath;
    }
    
    // API URL 구성: API_BASE_URL + API_PREFIX + path
    const url = path 
      ? `${API_BASE_URL}${API_PREFIX}/${path}`
      : `${API_BASE_URL}${API_PREFIX}`;
    
    // 디버깅: 최종 프록시 URL 로깅
    console.log('Proxying to:', url);

    // 요청 헤더 복사
    const headers: Record<string, string> = {};

    // Authorization 헤더 복사
    if (req.headers.authorization) {
      headers['Authorization'] = req.headers.authorization as string;
    }

    // 다른 헤더들 복사 (필요한 경우)
    if (req.headers['content-type']) {
      headers['Content-Type'] = req.headers['content-type'] as string;
    } else if (req.method !== 'GET' && req.method !== 'HEAD') {
      headers['Content-Type'] = 'application/json';
    }

    // 요청 본문 처리
    let body: string | undefined = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (req.body) {
        // req.body가 이미 객체인 경우 JSON.stringify, 문자열인 경우 그대로 사용
        body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      }
    }

    // API 서버로 요청 전달
    const response = await fetch(url, {
      method: req.method,
      headers: Object.keys(headers).length > 0 ? headers : undefined,
      body,
    });

    // 응답 데이터 가져오기
    const data = await response.text();
    
    // Content-Type 설정
    const contentType = response.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }

    // 상태 코드와 함께 응답
    res.status(response.status).send(data);
  } catch (error) {
    console.error('API Proxy Error:', error);
    res.status(500).json({ 
      message: '프록시 요청에 실패했습니다.',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
