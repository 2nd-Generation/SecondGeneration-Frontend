/**
 * 검증 로직 (Validator)
 * 
 * 사용자 입력 데이터의 유효성을 검증하고, 적절한 에러 메시지를 제공합니다.
 */

/**
 * 검증 결과 타입
 */
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * 게임 이름 배열이 유효한지 검증
 * 
 * @param gameNames - 검증할 게임 이름 배열
 * @param validGameNames - 허용된 게임 이름 목록 (기본: ['Overwatch 2', 'Valorant'])
 * @returns 검증 결과
 */
export const validateGameNames = (
  gameNames: string[],
  validGameNames: string[] = ['Overwatch 2', 'Valorant']
): ValidationResult => {
  if (!Array.isArray(gameNames) || gameNames.length === 0) {
    return {
      isValid: false,
      error: '최소 하나의 게임을 선택해주세요.',
    };
  }
  
  const invalidGames = gameNames.filter(name => !validGameNames.includes(name));
  
  if (invalidGames.length > 0) {
    return {
      isValid: false,
      error: `유효하지 않은 게임 이름입니다: ${invalidGames.join(', ')}. 허용된 값: ${validGameNames.join(', ')}`,
    };
  }
  
  return { isValid: true };
};

/**
 * 필수 필드가 비어있지 않은지 검증
 * 
 * @param fields - 필드명과 값의 객체
 * @returns 검증 결과
 */
export const validateRequiredFields = (
  fields: Record<string, string | null | undefined>
): ValidationResult => {
  const emptyFields: string[] = [];
  
  for (const [fieldName, value] of Object.entries(fields)) {
    if (!value || (typeof value === 'string' && value.trim().length === 0)) {
      emptyFields.push(fieldName);
    }
  }
  
  if (emptyFields.length > 0) {
    return {
      isValid: false,
      error: `다음 필드를 입력해주세요: ${emptyFields.join(', ')}`,
    };
  }
  
  return { isValid: true };
};

/**
 * 문자열 길이 검증
 * 
 * @param value - 검증할 문자열
 * @param minLength - 최소 길이
 * @param maxLength - 최대 길이
 * @param fieldName - 필드명 (에러 메시지용)
 * @returns 검증 결과
 */
export const validateStringLength = (
  value: string | null | undefined,
  minLength: number,
  maxLength: number,
  fieldName: string
): ValidationResult => {
  if (!value) {
    return {
      isValid: false,
      error: `${fieldName}을(를) 입력해주세요.`,
    };
  }
  
  const trimmed = value.trim();
  
  if (trimmed.length < minLength) {
    return {
      isValid: false,
      error: `${fieldName}은(는) 최소 ${minLength}자 이상이어야 합니다.`,
    };
  }
  
  if (trimmed.length > maxLength) {
    return {
      isValid: false,
      error: `${fieldName}은(는) 최대 ${maxLength}자까지 입력 가능합니다.`,
    };
  }
  
  return { isValid: true };
};

/**
 * 날짜 형식 검증 (YYYY-MM-DD)
 * 
 * @param dateString - 검증할 날짜 문자열
 * @param fieldName - 필드명 (에러 메시지용)
 * @returns 검증 결과
 */
export const validateDate = (
  dateString: string | null | undefined,
  fieldName: string
): ValidationResult => {
  if (!dateString || dateString.trim().length === 0) {
    return {
      isValid: false,
      error: `${fieldName}을(를) 입력해주세요.`,
    };
  }
  
  // YYYY-MM-DD 형식 검증
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return {
      isValid: false,
      error: `${fieldName}은(는) YYYY-MM-DD 형식이어야 합니다.`,
    };
  }
  
  // 유효한 날짜인지 확인
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return {
      isValid: false,
      error: `${fieldName}은(는) 유효한 날짜여야 합니다.`,
    };
  }
  
  return { isValid: true };
};

/**
 * 날짜 범위 검증 (시작일이 종료일보다 이전인지)
 * 
 * @param startDate - 시작일
 * @param endDate - 종료일
 * @returns 검증 결과
 */
export const validateDateRange = (
  startDate: string | null | undefined,
  endDate: string | null | undefined
): ValidationResult => {
  if (!startDate || !endDate) {
    return { isValid: true }; // 개별 날짜 검증은 validateDate에서 처리
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { isValid: true }; // 날짜 형식 검증은 validateDate에서 처리
  }
  
  if (start > end) {
    return {
      isValid: false,
      error: '시작일은 종료일보다 이전이어야 합니다.',
    };
  }
  
  return { isValid: true };
};

/**
 * URL 형식 검증
 * 
 * @param url - 검증할 URL 문자열
 * @param fieldName - 필드명 (에러 메시지용)
 * @param allowNull - null 허용 여부 (기본: true)
 * @returns 검증 결과
 */
export const validateUrl = (
  url: string | null | undefined,
  fieldName: string,
  allowNull: boolean = true
): ValidationResult => {
  if (!url || url.trim().length === 0) {
    if (allowNull) {
      return { isValid: true };
    }
    return {
      isValid: false,
      error: `${fieldName}을(를) 입력해주세요.`,
    };
  }
  
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return {
      isValid: false,
      error: `${fieldName}은(는) 유효한 URL 형식이어야 합니다.`,
    };
  }
};

/**
 * 숫자 범위 검증
 * 
 * @param value - 검증할 숫자
 * @param min - 최소값
 * @param max - 최대값
 * @param fieldName - 필드명 (에러 메시지용)
 * @returns 검증 결과
 */
export const validateNumberRange = (
  value: number | string | null | undefined,
  min: number,
  max: number,
  fieldName: string
): ValidationResult => {
  if (value === null || value === undefined) {
    return {
      isValid: false,
      error: `${fieldName}을(를) 입력해주세요.`,
    };
  }
  
  const num = typeof value === 'number' ? value : parseFloat(String(value));
  
  if (isNaN(num)) {
    return {
      isValid: false,
      error: `${fieldName}은(는) 숫자여야 합니다.`,
    };
  }
  
  if (num < min || num > max) {
    return {
      isValid: false,
      error: `${fieldName}은(는) ${min} 이상 ${max} 이하여야 합니다.`,
    };
  }
  
  return { isValid: true };
};

/**
 * 경력 데이터 검증
 * 
 * @param careers - 경력 배열
 * @returns 검증 결과
 */
export const validateCareers = (
  careers: Array<{
    period?: string | null;
    teamName?: string | null;
    roleType?: string | null;
  }>
): ValidationResult => {
  if (!Array.isArray(careers)) {
    return {
      isValid: false,
      error: '경력 데이터 형식이 올바르지 않습니다.',
    };
  }
  
  for (let i = 0; i < careers.length; i++) {
    const career = careers[i];
    const index = i + 1;
    
    if (!career.period || career.period.trim().length === 0) {
      return {
        isValid: false,
        error: `경력 ${index}의 기간을 입력해주세요.`,
      };
    }
    
    if (!career.teamName || career.teamName.trim().length === 0) {
      return {
        isValid: false,
        error: `경력 ${index}의 팀 이름을 입력해주세요.`,
      };
    }
  }
  
  return { isValid: true };
};
