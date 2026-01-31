import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

declare global {
  interface Window {
    wcs?: {
      inflow: (domain: string) => void;
      trans: (_conv: any) => void; // trans 함수 추가
    };
    wcs_do?: (...args: any[]) => void;
  }
}

export function useNaverPV() {
  const location = useLocation();

  useEffect(() => {
    if (window.wcs && window.wcs_do) {
      window.wcs.inflow('sgea.kr');
      window.wcs_do(); // 페이지뷰 전송
    }
  }, [location.pathname]);
}