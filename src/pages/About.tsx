import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  fadeInSoft,
  fadeInUp,
  fadeInScale,
  fadeInFromBlur,
  staggerUp,
  easeEmphasized,
} from '../utils/motionPresets';

const About: React.FC = () => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 2;
      const progress = Math.min(scrollTop / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/AboutPic.png')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div
        className="fixed inset-0 transition-opacity duration-300"
        style={{ backgroundColor: `rgba(124, 58, 237, ${scrollProgress * 0.6})` }}
      />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeEmphasized }}
      >
        <div className="pt-24" />

        <motion.main
          className="container mx-auto px-6 py-12 md:py-24 space-y-20"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.section
            className="relative overflow-hidden mb-20 md:mb-32"
            variants={fadeInFromBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
              <motion.div
                className="text-center"
                variants={staggerUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight"
                  variants={fadeInUp}
                >
                  <span className="block mb-2 text-white">요즘 아이들은 게임을 통해</span>
                  <motion.span
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-accent-light-purple"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: easeEmphasized }}
                  >
                    세상과 소통합니다
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                  variants={fadeInUp}
                >
                  SGEA는 단순히 게임을 잘하는 법만 가르치는 곳이 아닙니다.<br />
                  <span className="text-violet-300 font-semibold">게임이라는 매개체를 통해</span> 아이들이 삶에서도 응용할 수
                  있는 성장의 방법을 배우도록 체계적인 커리큘럼을 운영합니다.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  variants={fadeInUp}
                >
                  <motion.button
                    className="px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/class')}
                  >
                    프로그램 보기
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 border-2 border-violet-500/50 hover:border-violet-400 text-violet-300 hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/teachers')}
                  >
                    강사진 소개
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="mb-20 md:mb-32"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                variants={staggerUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 rounded-full border border-accent-gold/20 mb-6">
                  <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
                  <span className="text-accent-gold text-sm font-semibold">EFFORT HABITUALIZATION</span>
                </div>
                <motion.h2 className="text-4xl md:text-5xl font-black text-white mb-6" variants={fadeInUp}>
                  <span className="text-violet-400">노력의 습관화</span>, 그리고 그 이후
                </motion.h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  className="space-y-8"
                  variants={staggerUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">핵심 가치</h3>
                        <p className="text-gray-300 leading-relaxed">
                          저희가 가장 중요하게 생각하는 건 <span className="text-accent-gold font-semibold">'노력의 습관화'</span>입니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">긍정적 자아 인식</h3>
                        <p className="text-gray-300 leading-relaxed">
                          아이들이 게임을 그만두는 시점이 오더라도, 그동안 쌓아온 노력과 성취의 기억은{' '}
                          <span className="text-violet-400 font-semibold">"나도 이렇게 열심히 할 수 있는 사람이다"</span>라는 긍정적인 자아
                          인식으로 남습니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-light-purple/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-light-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">삶의 발판</h3>
                        <p className="text-gray-300 leading-relaxed">
                          이런 마음가짐은 프로게이머를 꿈꾸는 길뿐 아니라,{' '}
                          <span className="text-accent-light-purple font-semibold">삶의 모든 목표를 이루는 발판</span>이 되어줍니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative"
                  variants={fadeInScale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-2xl blur opacity-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                    variants={fadeInUp}
                  >
                    <div className="text-center">
                      <div className="mb-8">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-700" />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray="251.2"
                              strokeDashoffset="37.68"
                              className="text-accent-gold transition-all duration-1000 ease-out"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-black text-accent-gold">85%</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">성장 진행률</h3>
                        <p className="text-gray-400 text-sm">노력의 습관화 달성도</p>
                      </div>

                      <div className="w-20 h-20 bg-accent-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">성장의 기억</h3>
                      <p className="text-gray-300 leading-relaxed">
                        노력과 성취의 경험은<br />
                        <span className="text-accent-gold font-semibold">평생 가는 자산</span>이 됩니다
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-20 md:mb-32"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-accent-light-purple to-accent-gold rounded-3xl blur opacity-20" />
                <motion.div
                  className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-12 md:p-16 rounded-3xl border border-gray-700/50 backdrop-blur-sm text-center"
                  variants={staggerUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-gold/20 to-yellow-500/20 rounded-3xl mb-8 border border-accent-gold/30"
                    variants={fadeInScale}
                  >
                    <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </motion.div>

                  <motion.h2
                    className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
                    variants={fadeInUp}
                  >
                    저희 학원은 게임을 가르치지만,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-accent-gold">
                      결국 삶을 가르칩니다
                    </span>
                  </motion.h2>

                  <motion.p
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12"
                    variants={fadeInUp}
                  >
                    아이가 스스로 방향을 찾고, 노력의 가치를 깨닫는 성장의 공간<br />
                    <span className="text-white font-bold text-2xl">그것이 바로 저희가 지향하는 교육입니다.</span>
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    variants={fadeInUp}
                  >
                    <motion.a
                      href="http://pf.kakao.com/_xayxnLG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-4 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      프로그램 신청하기
                    </motion.a>
                    <motion.button
                      className="px-10 py-4 border-2 border-accent-gold/50 hover:border-accent-gold text-accent-gold hover:text-white hover:bg-accent-gold font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        window.location.href = '/#contact';
                      }}
                    >
                      무료 상담 신청
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </motion.main>
      </motion.div>
    </div>
  );
};

export default About;

