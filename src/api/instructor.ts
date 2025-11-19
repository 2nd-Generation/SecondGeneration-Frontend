import { apiRequest } from './client';

export type RoleType = 'PLAYER' | 'HEAD_COACH' | 'COACH' | 'ANALYST' | 'MANAGER';

export interface GameResponse {
  id: number;
  name: string;
  gameLogoUrl: string;
}

export interface CareerHistoryResponse {
  id: number;
  period: string;
  teamName: string;
  roleType: RoleType;
  logoImgUrl: string;
}

export interface InstructorListResponse {
  id: number;
  name: string;
  nickname: string;
  profileImgUrl: string;
  sgeaLogoImgUrl: string;
  games: GameResponse[];
}

export interface InstructorDetailResponse extends InstructorListResponse {
  content: string;
  careers: CareerHistoryResponse[];
  createdAt: string;
}

export interface CareerHistoryRequest {
  period: string;
  teamName: string;
  roleType: string;
  logoImgUrl: string | null;
}

export interface InstructorCreateRequest {
  name: string;
  nickname: string;
  profileImgUrl: string | null;
  sgeaLogoImgUrl: string | null;
  content: string;
  careers: CareerHistoryRequest[];
  gameNames: string;
}

export interface InstructorUpdateRequest extends InstructorCreateRequest {}

// 강사 전체 목록 조회
export const getInstructors = async (): Promise<InstructorListResponse[]> => {
  return apiRequest<InstructorListResponse[]>('/api/instructor');
};

// 강사 상세 조회
export const getInstructor = async (id: number): Promise<InstructorDetailResponse> => {
  return apiRequest<InstructorDetailResponse>(`/api/instructor/${id}`);
};

// 강사 생성
export const createInstructor = async (instructor: InstructorCreateRequest): Promise<InstructorDetailResponse> => {
  return apiRequest<InstructorDetailResponse>('/api/instructor', {
    method: 'POST',
    body: JSON.stringify(instructor),
  });
};

// 강사 정보 수정
export const updateInstructor = async (id: number, instructor: InstructorUpdateRequest): Promise<void> => {
  return apiRequest<void>(`/api/instructor/${id}`, {
    method: 'PUT',
    body: JSON.stringify(instructor),
  });
};

// 강사 삭제
export const deleteInstructor = async (id: number): Promise<void> => {
  return apiRequest<void>(`/api/instructor/${id}`, {
    method: 'DELETE',
  });
};

