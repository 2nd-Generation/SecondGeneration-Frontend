import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import { fadeInUp, staggerUp, fadeInSoft } from '../../utils/motionPresets';

const Dashboard: React.FC = () => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={fadeInSoft}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.header
            className="flex justify-between items-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div>
              <h1 className="text-4xl font-black mb-2">SGEA 관리자 대시보드</h1>
              <p className="text-gray-400">콘텐츠를 관리하세요</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-semibold"
            >
              로그아웃
            </button>
          </motion.header>

          {/* Menu Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerUp}
            initial="hidden"
            animate="visible"
          >
            {/* Article Management */}
            <motion.div variants={fadeInUp}>
              <Link
                to="/admin/articles"
                className="block bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  공지 관리
                </h2>
                <p className="text-gray-400">
                  공지사항을 생성, 수정, 삭제할 수 있습니다.
                </p>
              </Link>
            </motion.div>

            {/* Instructor Management */}
            <motion.div variants={fadeInUp}>
              <Link
                to="/admin/instructors"
                className="block bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  강사 관리
                </h2>
                <p className="text-gray-400">
                  강사 정보를 생성, 수정, 삭제할 수 있습니다.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

