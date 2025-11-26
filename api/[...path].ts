import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_BASE_URL = 'https://sgeaapi.kro.kr/swagger-ui/index.html';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 디버깅: 요청 정보 로깅
  console.log('API Request:', {
    method: req.method,
    url: req.url,
    query: req.query,
    path: req.query.path,
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
    // path 파라미터 추출
    // Vercel의 catch-all 라우트에서 req.query.path 사용
    let path = '';
    if (req.query.path) {
      path = Array.isArray(req.query.path) 
        ? req.query.path.join('/') 
        : (req.query.path as string);
    } else if (req.url) {
      // fallback: req.url에서 직접 추출
      const urlPath = req.url.replace(/^\/api\//, '').split('?')[0];
      path = urlPath;
    }
    
    const url = `${API_BASE_URL}/api/${path}`;

    // 요청 헤더 복사
    const headers: Record<string, string> = {};
    
    // Content-Type은 body가 있을 때만 설정
    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      headers['Content-Type'] = 'application/json';
    }

    // Authorization 헤더 복사
    if (req.headers.authorization) {
      headers['Authorization'] = req.headers.authorization as string;
    }

    // 요청 본문 처리
    let body: string | undefined = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (req.body) {
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

