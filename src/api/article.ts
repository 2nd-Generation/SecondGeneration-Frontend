import { apiRequest, publicApiRequest } from './client';

export type ArticleCategory = 'NEWS' | 'EVENT' | 'RECRUIT' | 'TEST_UPDATE';

export interface ArticleListResponse {
  id: number;
  category: ArticleCategory;
  title: string;
  subTitle: string;
  thumbnailUrl: string;
  postedAt: string;
  priority: number;
  popup: boolean;
}

export interface ArticleDetailResponse extends ArticleListResponse {
  startDate: string;
  endDate: string;
  safeHtmlContent: string;
}

export interface ArticleCreateRequest {
  category: ArticleCategory;
  title: string;
  subTitle: string;
  content: string;
  thumbnailUrl: string | null;
  postedAt: string;
  startDate: string;
  endDate: string;
  priority: number;
  popup: boolean;
}

export interface ArticleUpdateRequest extends ArticleCreateRequest {}

// 공지 조회
export const getArticles = async (category?: ArticleCategory): Promise<ArticleListResponse[]> => {
  const query = category ? `?category=${category}` : '';
  return apiRequest<ArticleListResponse[]>(`/api/article${query}`);
};

// 공지 상세 조회
export const getArticle = async (id: number): Promise<ArticleDetailResponse> => {
  return apiRequest<ArticleDetailResponse>(`/api/article/${id}`);
};

// 팝업 공지 조회
// 팝업으로 설정된 공지 목록만 우선순위로 정렬하여 조회합니다.
// 인증 없이도 접근 가능한 공개 API입니다.
// 401 에러가 발생하면 빈 배열을 반환합니다 (로그인하지 않은 사용자도 사용 가능하도록).
export const getPopupArticles = async (): Promise<ArticleListResponse[]> => {
  try {
    return await publicApiRequest<ArticleListResponse[]>('/api/article/popups');
  } catch (error: any) {
    // 401 에러 또는 기타 에러 발생 시 빈 배열 반환 (팝업이 없으면 표시하지 않음)
    if (error?.message?.includes('401') || error?.message?.includes('Unauthorized')) {
      console.warn('팝업 공지 조회 실패 (인증 필요):', error.message);
      return [];
    }
    // 기타 에러도 조용히 처리
    console.warn('팝업 공지 조회 실패:', error.message);
    return [];
  }
};

// 공지 생성
export const createArticle = async (article: ArticleCreateRequest): Promise<ArticleDetailResponse> => {
  return apiRequest<ArticleDetailResponse>('/api/article', {
    method: 'POST',
    body: JSON.stringify(article),
  });
};

// 공지 수정
export const updateArticle = async (id: number, article: ArticleUpdateRequest): Promise<void> => {
  return apiRequest<void>(`/api/article/${id}`, {
    method: 'PUT',
    body: JSON.stringify(article),
  });
};

// 공지 삭제
export const deleteArticle = async (id: number): Promise<void> => {
  return apiRequest<void>(`/api/article/${id}`, {
    method: 'DELETE',
  });
};

