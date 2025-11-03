import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-6 lg:py-12 flex justify-center items-center relative">
        {/* Logo - 중앙 배치 */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="group flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <div className="relative">
              <img 
                src={scrolled ? "/LogoPurple.svg" : "/LogoWhite.png"} 
                alt="SGEA 로고" 
                className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain group-hover:scale-110 transition-all duration-300" 
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu - 왼쪽 배치 */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-10 text-base lg:text-lg font-semibold absolute left-0">
          <Link
            to="/about"
            className={`transition-colors duration-300 ${
              isActive('/about') 
                ? scrolled ? 'text-purple-600' : 'text-violet-500'
                : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
            }`}
          >
            소개
          </Link>
          <Link
            to="/class"
            className={`transition-colors duration-300 ${
              isActive('/class')
                ? scrolled ? 'text-purple-600' : 'text-violet-500'
                : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
            }`}
          >
            프로그램
          </Link>
          <Link
            to="/teachers"
            className={`transition-colors duration-300 ${
              isActive('/teachers')
                ? scrolled ? 'text-purple-600' : 'text-violet-500'
                : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
            }`}
          >
            강사진
          </Link>
          <Link
            to="/news"
            className={`transition-colors duration-300 ${
              isActive('/news')
                ? scrolled ? 'text-purple-600' : 'text-violet-500'
                : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
            }`}
          >
            뉴스
          </Link>
        </div>

        {/* 문의하기 버튼 - 오른쪽 배치 */}
        <div className="hidden md:flex absolute right-0">
          <Link
            to="/#contact"
            className="font-bebas group px-4 py-2 lg:px-6 lg:py-3 rounded-full font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2 text-base lg:text-lg tracking-wider text-white"
          >
            상담 신청
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button - 오른쪽 배치 */}
        <button className={`md:hidden absolute right-0 p-2 transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-white border-t border-gray-200' : 'bg-custom-bg border-t border-gray-700'}`}>
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/about"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/about') 
                  ? scrolled ? 'text-purple-600' : 'text-violet-500'
                  : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              소개
            </Link>
            <Link
              to="/class"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/class')
                  ? scrolled ? 'text-purple-600' : 'text-violet-500'
                  : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              프로그램
            </Link>
            <Link
              to="/teachers"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/teachers')
                  ? scrolled ? 'text-purple-600' : 'text-violet-500'
                  : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              강사진
            </Link>
            <Link
              to="/news"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/news')
                  ? scrolled ? 'text-purple-600' : 'text-violet-500'
                  : scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              뉴스
            </Link>
            <Link
              to="/#contact"
              className="font-bebas inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg text-lg tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              문의하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
