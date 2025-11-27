/**
 * 데이터 변환 계층 (Mapper)
 * 
 * 프론트엔드에서 사용자가 입력한 데이터를 서버가 기대하는 형식으로 변환합니다.
 * 화면에 보이는 값("오버워치2")과 서버가 원하는 값("Overwatch 2")을 매핑합니다.
 */

/**
 * 게임 이름을 서버가 기대하는 형식으로 변환
 * 
 * @param input - 사용자가 입력한 게임 이름 (예: "오버워치2", "overwatch 2", "Valorant")
 * @returns 서버가 기대하는 정규화된 게임 이름 (예: "Overwatch 2", "Valorant")
 */
export const normalizeGameName = (input: string): string | null => {
  if (!input || typeof input !== 'string') return null;
  
  const trimmed = input.trim();
  if (trimmed.length === 0) return null;
  
  const normalized = trimmed.toLowerCase()
    .replace(/\s+/g, ' ') // 여러 공백을 하나로
    .replace(/[^\w\s]/g, ''); // 특수문자 제거
  
  // Overwatch 2 변형들
  if (
    normalized === 'overwatch2' ||
    normalized === 'overwatch 2' ||
    normalized === 'overwatch' ||
    normalized === '오버워치' ||
    normalized === '오버워치2' ||
    normalized === '오버워치 2'
  ) {
    return 'Overwatch 2';
  }
  
  // Valorant 변형들
  if (
    normalized === 'valorant' ||
    normalized === '발로란트'
  ) {
    return 'Valorant';
  }
  
  // 이미 정확한 형식이면 그대로 반환 (대소문자 보존)
  if (trimmed === 'Overwatch 2' || trimmed === 'Valorant') {
    return trimmed;
  }
  
  // 알 수 없는 게임 이름은 null 반환 (검증 단계에서 처리)
  return null;
};

/**
 * 게임 이름 문자열(쉼표로 구분)을 서버가 기대하는 배열로 변환
 * 
 * @param input - 쉼표로 구분된 게임 이름 문자열 (예: "오버워치2, 발로란트")
 * @returns 정규화된 게임 이름 배열 (예: ["Overwatch 2", "Valorant"])
 */
export const parseGameNames = (input: string): string[] => {
  if (!input || typeof input !== 'string') return [];
  
  return input
    .split(',') // 쉼표로 분리
    .map(name => normalizeGameName(name)) // 각 이름 정규화
    .filter((name): name is string => name !== null); // null 제거
};

/**
 * 문자열 "null" 또는 빈 문자열을 실제 null로 변환
 * 
 * @param value - 변환할 값
 * @returns null 또는 정제된 문자열
 */
export const normalizeNull = (value: string | null | undefined): string | null => {
  if (value === null || value === undefined) return null;
  
  if (typeof value !== 'string') {
    return String(value).trim() || null;
  }
  
  const trimmed = value.trim();
  
  // 빈 문자열, "null", "undefined" 문자열을 null로 변환
  if (
    trimmed === '' ||
    trimmed.toLowerCase() === 'null' ||
    trimmed.toLowerCase() === 'undefined'
  ) {
    return null;
  }
  
  return trimmed;
};

/**
 * 날짜를 YYYY-MM-DD 형식으로 변환 (백엔드 LocalDate 형식)
 * 
 * @param dateInput - 날짜 입력 (Date 객체, ISO 문자열, YYYY-MM-DD 문자열 등)
 * @returns YYYY-MM-DD 형식의 문자열
 */
export const formatDateToLocalDate = (dateInput: string | Date | null | undefined): string => {
  if (!dateInput) return '';
  
  // 이미 YYYY-MM-DD 형식인지 확인
  if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    return dateInput;
  }
  
  // Date 객체 또는 ISO 문자열인 경우 변환
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  
  if (isNaN(date.getTime())) {
    // 유효하지 않은 날짜인 경우 빈 문자열 반환
    return '';
  }
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

/**
 * 숫자를 정수로 변환 (기본값 0)
 * 
 * @param value - 변환할 값
 * @param defaultValue - 변환 실패 시 기본값 (기본: 0)
 * @returns 정수 값
 */
export const normalizeInteger = (value: number | string | null | undefined, defaultValue: number = 0): number => {
  if (typeof value === 'number') {
    return Math.floor(value) || defaultValue;
  }
  
  if (typeof value === 'string') {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  
  return defaultValue;
};

/**
 * RoleType을 검증하고 정규화
 * 
 * @param value - 검증할 RoleType 값
 * @param defaultValue - 유효하지 않은 경우 기본값 (기본: 'PLAYER')
 * @returns 정규화된 RoleType
 */
export const normalizeRoleType = (
  value: string | null | undefined,
  defaultValue: 'PLAYER' | 'HEAD_COACH' | 'COACH' | 'MANAGER' = 'PLAYER'
): 'PLAYER' | 'HEAD_COACH' | 'COACH' | 'MANAGER' => {
  if (!value || typeof value !== 'string') return defaultValue;
  
  const normalized = value.trim().toUpperCase();
  
  if (
    normalized === 'PLAYER' ||
    normalized === 'HEAD_COACH' ||
    normalized === 'COACH' ||
    normalized === 'MANAGER'
  ) {
    return normalized as 'PLAYER' | 'HEAD_COACH' | 'COACH' | 'MANAGER';
  }
  
  return defaultValue;
};
