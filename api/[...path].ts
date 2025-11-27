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
    headers: {
      authorization: req.headers.authorization,
      'content-type': req.headers['content-type'],
    },
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

    // Authorization 헤더 복사 (대소문자 구분 없이 확인)
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader) {
      headers['Authorization'] = typeof authHeader === 'string' ? authHeader : authHeader[0];
    }

    // Content-Type 확인
    const contentType = (req.headers['content-type'] || req.headers['Content-Type']) as string | undefined;
    const isFormData = contentType?.includes('multipart/form-data');
    
    // Content-Type 헤더 복사 (FormData의 경우 boundary 포함, 브라우저가 자동 설정)
    // FormData의 경우 Content-Type을 설정하지 않으면 fetch가 자동으로 boundary를 추가함
    if (contentType && !isFormData) {
      headers['Content-Type'] = typeof contentType === 'string' ? contentType : contentType[0];
    } else if (req.method !== 'GET' && req.method !== 'HEAD' && !isFormData) {
      headers['Content-Type'] = 'application/json';
    }
    
    // 디버깅: 전송할 헤더 로깅
    console.log('Proxying headers:', {
      authorization: headers['Authorization'] ? 'present' : 'missing',
      'content-type': headers['Content-Type'] || 'auto (FormData)',
      isFormData,
    });

    // 요청 본문 처리
    let body: string | undefined = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (req.body) {
        if (isFormData) {
          if (typeof req.body === 'string') {
            body = req.body;
          } else if (Buffer.isBuffer(req.body)) {
            body = req.body.toString('binary');
          } else if (typeof req.body === 'object') {
            // 파싱된 객체인 경우 - FormData를 재구성할 수 없으므로 에러
            console.error('FormData body is already parsed, cannot proxy');
            // 일단 빈 body로 시도 (실제로는 작동하지 않을 수 있음)
            body = undefined;
          } else {
            body = String(req.body);
          }
        } else {
          // JSON 요청의 경우
          body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
        }
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
