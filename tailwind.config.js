/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"NEXON Lv2 Gothic"', '"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'],
        'noto': ['"NEXON Lv2 Gothic"', '"Pretendard Variable"', 'Pretendard', 'sans-serif'],
        'pretendard': ['"Pretendard Variable"', 'Pretendard', 'sans-serif'],
        'nexon': ['"NEXON Lv2 Gothic"', 'sans-serif'],
      },
      colors: {
        // Fiorentina inspired color palette
        'custom-bg': '#351f63', // 메인 배경 (유지)
        'violet': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // 메인 보라색
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        'accent': {
          'gold': '#fbbf24', // 금색 악센트
          'silver': '#e5e7eb', // 은색 악센트
          'light-purple': '#a855f7', // 밝은 보라색
        },
        // 기존 primary 색상들 (필요시 사용)
        primary: '#ff2f17',
        'primary-light': '#ff4a35',
        'primary-dark': '#e62a15',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}