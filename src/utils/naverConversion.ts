/**
 * 네이버 일반 전환 스크립트 실행 함수
 * @param conversionId - 'call', 'kakao', 'discord', 'consult' 등
 */
export function trackNaverConversion(conversionId: string) {
  if (typeof window !== 'undefined' && window.wcs && window.wcs.trans) {
    try {
      const _conv: any = {};

      // 1. 서비스에서 사용하는 이름을 네이버 전환 유형(숫자)으로 매핑
      // 네이버 가이드에 따라 4는 신청/예약, 5~14는 사용자 정의입니다.
      switch (conversionId) {
        case 'consult':
          _conv.type = 'custom001'; // 신청/예약 (수강신청 페이지 클릭)
          break;
        case 'call':
          _conv.type = 'custom002'; // 사용자 정의 1 (전화)
          break;
        case 'kakao':
          _conv.type = 'custom003'; // 사용자 정의 2 (카톡)
          break;
        case 'discord':
          _conv.type = 'custom004'; // 사용자 정의 3 (디스코드)
          break;
        case 'instagram':
          _conv.type = 'custom005';
          break;
        case 'nav_about':
          _conv.type = 'custom006';
          break;
        case 'nav_program':
          _conv.type = 'custom007';
          break;
        case 'nav_teachers':
          _conv.type = 'custom008';
          break;
        case 'nav_news':
          _conv.type = 'custom009';
          break;
        default:
          _conv.type = 'custom010'; // 기타
          break;
      }

      // 2. 필요 시 가치 설정 (예: 전환 1회당 10원 등 리포트 확인용)
      // _conv.value = "10"; 

      // 3. 전환 데이터 전송
      window.wcs.trans(_conv);
      
      console.log(`Naver Conversion Sent: ${conversionId} as Type ${_conv.type}`);
    } catch (error) {
      console.error('네이버 전환 스크립트 실행 오류:', error);
    }
  }
}