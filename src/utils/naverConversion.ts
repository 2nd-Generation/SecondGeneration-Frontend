/**
 * 네이버 전환 스크립트 실행 함수
 * @param conversionId - 네이버에서 제공받은 전환 ID (예: 'call', 'kakao', 'discord', 'consult' 등)
 */
export function trackNaverConversion(conversionId: string) {
  if (typeof window !== 'undefined' && window.wcs_do) {
    try {
      window.wcs_do('conv', 's_686f17f1801', conversionId);
    } catch (error) {
      console.error('네이버 전환 스크립트 실행 오류:', error);
    }
  }
}

