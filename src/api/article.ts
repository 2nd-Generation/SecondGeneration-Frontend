import { apiRequest } from './client';

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

// 공지 상세 조회 (팝업 공지 조회 API 사용)
export const getPopupArticles = async (): Promise<ArticleListResponse[]> => {
  return apiRequest<ArticleListResponse[]>('/api/article/popups');
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

