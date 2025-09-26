import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-xl transition-shadow duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
            <span className="text-gray-900 font-black text-xl">S</span>
          </div>
          <span className="text-2xl font-black text-yellow-400">SGeA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-lg font-semibold">
          <Link
            to="/about"
            className={`transition-colors duration-300 ${
              isActive('/about') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            소개
          </Link>
          <Link
            to="/class"
            className={`transition-colors duration-300 ${
              isActive('/class') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            클래스
          </Link>
          <Link
            to="/teachers"
            className={`transition-colors duration-300 ${
              isActive('/teachers') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            강사진
          </Link>
          <Link
            to="/news"
            className={`transition-colors duration-300 ${
              isActive('/news') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            소식
          </Link>
          <Link
            to="/#contact"
            className="px-6 py-3 rounded-full text-gray-900 font-bold bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            문의하기
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/about"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/about') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              소개
            </Link>
            <Link
              to="/class"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/class') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              클래스
            </Link>
            <Link
              to="/teachers"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/teachers') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              강사진
            </Link>
            <Link
              to="/news"
              className={`block text-lg font-semibold transition-colors duration-300 ${
                isActive('/news') ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              소식
            </Link>
            <Link
              to="/#contact"
              className="inline-block px-6 py-3 rounded-full text-gray-900 font-bold bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              문의하기
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
