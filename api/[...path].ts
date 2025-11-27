import type { VercelRequest, VercelResponse } from '@vercel/node';
import FormData from 'form-data';
import { Readable } from 'stream';

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
      authorization: headers['Authorization'] ? `present (${headers['Authorization'].substring(0, 20)}...)` : 'missing',
      'content-type': headers['Content-Type'] || 'auto (FormData)',
      isFormData,
      allHeaders: Object.keys(headers),
    });
    
    // Authorization 헤더가 없으면 경고
    if (!headers['Authorization']) {
      console.warn('WARNING: Authorization header is missing!');
      console.log('Request headers:', Object.keys(req.headers));
    }

    // 요청 본문 처리
    let body: string | FormData | undefined = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (isFormData) {
        // FormData의 경우: req.body가 파싱된 객체일 수 있으므로 재구성 필요
        // Vercel에서는 multipart/form-data가 파싱되어 req.body에 객체로 들어올 수 있음
        if (typeof req.body === 'object' && req.body !== null && !Buffer.isBuffer(req.body)) {
          // 파싱된 객체인 경우 FormData 재구성
          const formData = new FormData();
          for (const [key, value] of Object.entries(req.body)) {
            if (Array.isArray(value)) {
              value.forEach((v) => {
                if (v && typeof v === 'object' && 'data' in v) {
                  // 파일 객체인 경우
                  const fileData = (v as any).data || v;
                  const buffer = Buffer.isBuffer(fileData) ? fileData : Buffer.from(fileData);
                  formData.append(key, buffer, {
                    filename: (v as any).filename || 'file',
                    contentType: (v as any).contentType || 'application/octet-stream',
                  });
                } else {
                  formData.append(key, String(v));
                }
              });
            } else if (value && typeof value === 'object' && 'data' in value) {
              // 단일 파일 객체인 경우
              const fileData = (value as any).data || value;
              const buffer = Buffer.isBuffer(fileData) ? fileData : Buffer.from(fileData);
              formData.append(key, buffer, {
                filename: (value as any).filename || 'file',
                contentType: (value as any).contentType || 'application/octet-stream',
              });
            } else {
              formData.append(key, String(value));
            }
          }
          body = formData;
          // FormData의 Content-Type은 boundary가 포함되어야 하므로 자동 설정
          delete headers['Content-Type'];
        } else if (typeof req.body === 'string') {
          body = req.body;
        } else if (Buffer.isBuffer(req.body)) {
          body = req.body.toString('binary');
        } else {
          body = String(req.body);
        }
      } else {
        // JSON 요청의 경우
        body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      }
    }

    // API 서버로 요청 전달
    const response = await fetch(url, {
      method: req.method,
      headers: Object.keys(headers).length > 0 ? headers : undefined,
      body: body instanceof FormData ? body : body,
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
