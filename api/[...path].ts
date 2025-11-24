import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_BASE_URL = 'http://3.38.35.5:8080';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
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

  try {
    const path = Array.isArray(req.query.path) ? req.query.path.join('/') : req.query.path || '';
    const url = `${API_BASE_URL}/api/${path}`;

    // 요청 헤더 복사 (Authorization 등)
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (req.headers.authorization) {
      headers['Authorization'] = req.headers.authorization;
    }

    // 요청 본문
    const body = req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined;

    // API 서버로 요청 전달
    const response = await fetch(url, {
      method: req.method,
      headers,
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

