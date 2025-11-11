import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  easeAccent,
  easeEmphasized,
  easeFlow,
  easeSoft,
  fadeInSoft,
  fadeInUp,
  staggerUp,
} from '../utils/motionPresets';

const Home: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState('/BackgroundVideo.mp4');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setVideoSrc(event.matches ? '/BackgroundVideoMobile.mp4' : '/BackgroundVideo.mp4');
    };

    handleChange(mediaQuery);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className="bg-custom-bg">
      {/* Hero Section */}
      <motion.header
        className="relative flex items-center justify-center h-screen overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: easeEmphasized }}
      >

        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          autoPlay
          loop
          muted
          playsInline
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <motion.div
          className="absolute z-10 flex flex-col items-start text-left px-6 left-4 sm:left-12 md:left-[calc(50%-670px)] top-[28%] sm:top-[30%] md:top-[35%] max-w-[85vw] sm:max-w-lg md:max-w-none space-y-2 sm:space-y-3"
          variants={staggerUp}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-bebas text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-black text-white tracking-wide"
            variants={fadeInUp}
          >
            프로게이머 꿈의 첫 시작,
          </motion.p>
          <motion.p
            className="font-bebas text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-black text-white tracking-wide"
            variants={fadeInUp}
          >
            SGEA
          </motion.p>
        </motion.div>

        {/* Infinite Scroll Marquee at bottom of hero */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: easeEmphasized }}
        >
          <div className="overflow-hidden relative">
            <motion.div
              className="pointer-events-none absolute -top-20 left-1/2 h-32 w-[55rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
            />
            <div className="flex animate-infinite-scroll whitespace-nowrap">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="flex items-center mx-4 sm:mx-5 md:mx-6 lg:mx-8">
                  <img src="/MainLogoStripe.png" alt="Second Generation" className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[260px] xl:min-w-[300px] object-contain opacity-90" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
        {/* 학원 소개 Section */}
        <motion.section
          id="about"
          className="mb-32"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-wide flex flex-col items-center justify-center gap-2 text-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center w-full">
                <motion.img
                  src="/SGEAAbout.png"
                  alt="SGEA"
                  className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto object-contain"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: easeSoft }}
                />
              </div>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeAccent }}
            />
          </motion.div>
          
          <motion.div className="relative" variants={fadeInSoft}>
            {/* Decorative elements */}
            <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
            
            <motion.div
              className="relative bg-white p-5 sm:p-8 md:p-16 rounded-3xl border border-gray-200 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: easeEmphasized }}
            >
              <motion.div
                className="space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed"
                variants={staggerUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.p className="text-gray-700 text-lg sm:text-2xl font-bold" variants={fadeInUp}>
                  수강생 모두가 프로게이머가 되지는 못합니다.
                </motion.p>
                
                <motion.div className="relative pl-6 border-l-4 border-purple-500/50" variants={fadeInUp}>
                <p className="text-gray-700 text-sm sm:text-base">
                  저희 SGEA는 <span className="text-purple-600 font-semibold">"노력의 습관화"</span>를 슬로건하여 스스로 목표를 세우고 달성하기 위해 노력하는 방법을 찾으며 성취감과 <span className="text-purple-600 font-semibold">"나도 이렇게 열심히 할 수 있는 사람이다"</span> 라는 긍정적인 자아를 얻어 시너지를 발휘할 수 있도록 지향합니다.
                </p>
                </motion.div>
                
                  <motion.p className="text-gray-700 text-sm sm:text-base" variants={fadeInUp}>
                    저희의 핵심 가치 <span className="text-purple-600 font-semibold">"노력의 습관화"</span>는 아이가 게임을 그만두는 시점이 오더라도 저희가 지향하는 긍정적인 자아의 시너지로 해당 분야에서도 노력하는 방법을 응용할 수 있는 것을 의미합니다.
                  </motion.p>
                
                <motion.div
                  className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-4 sm:p-6 rounded-2xl border border-purple-500/20"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                <p className="text-gray-800 text-sm sm:text-base">
                  SGEA를 설립한 저희는 프로게이머였습니다. 현재 프로게이머를 꿈꾸는 학생들과 같은 시기를 경험했습니다. <br />10대 시절 저희 역시 비슷한 고민을 했기에 학부모님들의 마음 또한 깊이 공감 할 수 있습니다.
                </p>
                  <p className="text-gray-800 text-sm sm:text-base mt-4 sm:mt-6">
                  마음껏 꿈을 꿀 수 있는 나이임과 동시에 중요한 시기라는 것을 알고 있습니다.<br className="hidden sm:block" />
                    <span className="text-purple-600 font-bold">최선을 다해서 지도할 준비가 되어있습니다.</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

                {/* 커리큘럼 Section */}
                <motion.section
          id="curriculum"
          className="mb-32"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-wide flex flex-col items-center justify-center gap-2 text-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center w-full">
                <motion.img
                  src="/SGEASystem.png"
                  alt="SGEA"
                  className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto object-contain"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: easeSoft }}
                />
              </div>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 sm:mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeAccent }}
            />
            <motion.p className="font-noto text-gray-100 text-base sm:text-lg" variants={fadeInUp}>
              체계적인 단계별 커리큘럼으로 프로 선수로 성장합니다.
            </motion.p>
          </motion.div>
          
          <motion.div className="relative" variants={fadeInUp}>
            {/* 커리큘럼 플로우 */}
            <motion.div
              className="relative bg-white rounded-3xl p-6 sm:p-10 md:p-16 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.85, ease: easeFlow }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
                {/* 1. 취미 성장반 */}
                <motion.div
                  className="flex flex-col items-center flex-1"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                      <img src="/hobby.svg" alt="취미 성장반" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 text-center">취미 성장반</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base">기초 다지기<br />실력 향상</p>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div className="text-purple-600 mx-0 md:mx-4 my-4 md:my-0 rotate-90 md:rotate-0" variants={fadeInUp}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>

                {/* 2. 프로 준비반 */}
                <motion.div
                  className="flex flex-col items-center flex-1"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                      <img src="/proPrepare.svg" alt="프로 준비반" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 text-center">프로 준비반</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base">심화 훈련<br />전략적 플레이</p>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div className="text-purple-600 mx-0 md:mx-4 my-4 md:my-0 rotate-90 md:rotate-0" variants={fadeInUp}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>

                {/* 3. 입단 테스트 */}
                <motion.div
                  className="flex flex-col items-center flex-1"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                      <img src="/test.svg" alt="입단 테스트" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 text-center">입단 테스트</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base">프로 입단<br />기회 부여</p>
                </motion.div>

                {/* Arrow 3 */}
                <motion.div className="text-purple-600 mx-0 md:mx-4 my-4 md:my-0 rotate-90 md:rotate-0" variants={fadeInUp}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>

                {/* 4. 프로 선수 데뷔 */}
                <motion.div
                  className="flex flex-col items-center flex-1"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                      <img src="/proDebut.svg" alt="프로 선수 데뷔" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 text-center">프로 선수 데뷔</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base">프로 선수<br />데뷔</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 강점 Section */}
        <motion.section
          className="mb-32"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="text-center mb-12"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-wide flex flex-col items-center justify-center gap-2 text-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center w-full">
                <motion.img
                  src="/SGEAProgram.png"
                  alt="SGEA"
                  className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto object-contain"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: easeSoft }}
                />
              </div>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeAccent }}
            />
          </motion.div>

          {/* 수강가능종목 */}
          <motion.div
            className="mb-12"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <motion.div
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <img src="/ValorantLogo.png" alt="발로란트" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                <span className="font-bebas text-lg md:text-xl font-bold text-white">발로란트</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <img src="/Overwatch.png" alt="오버워치" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                <span className="font-bebas text-lg md:text-xl font-bold text-white">오버워치</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* 수업 형태 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 relative min-h-[400px] md:min-h-[500px]">
            {/* 1대1 프리미엄 집중 수업 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex-1 min-h-[200px] md:min-h-[250px] z-10 cursor-pointer md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:ring-2 md:hover:ring-purple-500/40 md:hover:ring-offset-2 md:hover:ring-offset-transparent">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{ backgroundImage: "url('/playingAlone.png')" }}
              ></div>
              <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 md:group-hover:bg-black/80"></div>
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center md:block md:static">
                <h3 className="font-bebas text-3xl font-bold text-white text-center px-6 md:hidden whitespace-nowrap">
                  1:1 프리미엄 집중반
                </h3>
                <h3 className="hidden md:block font-bebas text-4xl font-bold text-white text-center px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                  1:1 프리미엄 집중반
                </h3>
              </div>
              <div className="md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full md:z-20 opacity-100 md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition-all duration-500">
                <div className="absolute inset-0 bg-custom-bg"></div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <div className="flex-1 flex flex-col justify-center items-center text-center gap-4 md:gap-6 md:items-stretch md:text-left">
                    <div className="bg-white/10 rounded-lg p-4 md:p-6 border border-white/20 w-full max-w-md md:max-w-none">
                      <p className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3 text-center md:text-left">주1회 / 3시간</p>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed text-center md:text-left">
                        개인 맞춤형 집중 수업으로 빠르게 실력을 향상시킵니다.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 md:p-6 border border-white/20 w-full max-w-md md:max-w-none">
                      <p className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3 text-center md:text-left">주 3회 / 6시간</p>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed text-center md:text-left">
                        더욱 집중적인 커리큘럼으로 실력을 빠르게 성장시킵니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 1대5 팀 그룹 수업 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex-1 min-h-[200px] md:min-h-[300px] z-10 cursor-pointer md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:ring-2 md:hover:ring-purple-500/40 md:hover:ring-offset-2 md:hover:ring-offset-transparent">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{ backgroundImage: "url('/playingTeam.png')" }}
              ></div>
              <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 md:group-hover:bg-black/80"></div>
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center md:block md:static">
                <h3 className="font-bebas text-3xl font-bold text-white text-center px-6 md:hidden whitespace-nowrap">
                  1:5 팀 그룹반
                </h3>
                <h3 className="hidden md:block font-bebas text-4xl font-bold text-white text-center px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                  1:5 팀 그룹반
                </h3>
              </div>
              <div className="md:absolute md:left-0 md:top-0 md:w-1/2 md:h-full md:z-20 opacity-100 md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition-all duration-500">
                <div className="absolute inset-0 bg-custom-bg"></div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <div className="flex-1 flex flex-col justify-center items-center text-center gap-4 md:gap-6 md:items-stretch md:text-left">
                    <div className="bg-white/10 rounded-lg p-4 md:p-5 border border-white/20 w-full max-w-md md:max-w-none">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <p className="text-white text-lg md:text-xl font-bold mb-1 md:mb-0 text-center md:text-left">취미반</p>
                        <p className="text-white/90 text-base md:text-lg text-center md:text-right">주1회 / 3시간</p>
                      </div>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed text-center md:text-left">
                        게임의 재미를 느끼며 기본기를 다집니다. 랭크 게임을 중심으로 실력과 이해도를 쌓아가며, 즐기면서도 발전하는 플레이를 경험합니다.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 md:p-5 border border-white/20 w-full max-w-md md:max-w-none">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div className="flex flex-col md:flex-row items-center gap-2 mb-1 md:mb-0">
                          <p className="text-white text-lg md:text-xl font-bold text-center md:text-left">성장반</p>
                          <span className="text-white/70 text-sm md:text-base text-center md:text-left">(브론즈-다이아)</span>
                        </div>
                        <p className="text-white/90 text-base md:text-lg text-center md:text-right">주2회 / 6시간</p>
                      </div>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed text-center md:text-left">
                        분석과 피드백을 통해 자신의 플레이를 객관적으로 바라봅니다. 기량뿐 아니라 판단력, 이해도, 팀워크까지 함께 성장시키는 단계입니다.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 md:p-5 border border-white/20 w-full max-w-md md:max-w-none">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div className="flex flex-col md:flex-row items-center gap-2 mb-1 md:mb-0">
                          <p className="text-white text-lg md:text-xl font-bold text-center md:text-left">프로반</p>
                          <span className="text-white/70 text-sm md:text-base text-center md:text-left">(다이아+)</span>
                        </div>
                        <p className="text-white/90 text-base md:text-lg text-center md:text-right">주3회 / 9시간</p>
                      </div>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed text-center md:text-left">
                        이론에서 실전까지, 진짜 팀 플레이를 배웁니다. 전략과 소통을 중심으로 실전 감각과 프로 마인드를 완성합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            className="relative flex items-center justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeEmphasized }}
          >
            <motion.a 
              href="/class" 
              className="font-bebas group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-base md:text-lg lg:text-xl tracking-wider text-white w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              더 알아보기
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* 강사진 소개 Section */}
        <motion.section
          className="mb-32"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-wide flex flex-col items-center justify-center gap-2 text-center"
              variants={fadeInUp}
            >
              <motion.img src="/SGEATeacher.png" alt="SGEA" className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto object-contain block mx-auto my-0" style={{ marginLeft: 'auto', marginRight: 'auto' }}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: easeSoft }}
              />
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeAccent }}
            />
          </motion.div>
          
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeEmphasized }}
          >
            <motion.a 
              href="/teachers" 
              className="font-bebas group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-base md:text-lg lg:text-xl tracking-wider text-white w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              더 알아보기
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* 문의하기 Section */}
        <motion.section
          id="contact"
          className="mb-32"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            ></motion.div>
            <motion.div
              className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.div>
            
            <motion.div
              className="relative p-8 sm:p-12 md:p-20 text-center"
              variants={staggerUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="mb-8" variants={fadeInUp}>
                <span className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-6">
                  💬 Contact Us
                </span>
              </motion.div>
              
              <motion.h2
                className="font-bebas text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-wide"
                variants={fadeInUp}
              >
                상담 신청
              </motion.h2>
              
              <motion.p
                className="text-white/90 mb-12 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                SGEA 아카데미의 전문 상담사들이 개인 맞춤형으로<br className="hidden sm:block" />
                각자의 상황과 필요에 맞춘 조언과 지원을 제공합니다.
              </motion.p>
              
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center">
                <motion.a
                  href="http://pf.kakao.com/_xayxnLG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas group inline-flex items-center gap-0 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-purple-600 font-bold bg-white hover:bg-gray-100 transition-all duration-300 text-lg sm:text-xl shadow-2xl transform hover:scale-105 tracking-wider w-full sm:w-auto justify-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  수강 신청하기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="http://pf.kakao.com/_xayxnLG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas group inline-flex items-center gap-0 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-purple-600 font-bold bg-white hover:bg-gray-100 transition-all duration-300 text-lg sm:text-xl shadow-2xl transform hover:scale-105 tracking-wider w-full sm:w-auto justify-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"/>
                  </svg>
                  카카오톡 상담
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="tel:031-999-8888"
                  className="font-bebas group inline-flex items-center gap-0 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-white font-bold bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-lg sm:text-xl shadow-2xl transform hover:scale-105 tracking-wider w-full sm:w-auto justify-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  유선 상담
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-custom-bg py-12 border-t border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeEmphasized }}
      >
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <h3 className="text-xl font-bold text-purple-500 mb-4"><span className="font-bebas">SGEA</span> | <span className="font-bebas">SGEA</span> 이스포츠 아카데미</h3>
          <p>대표 김민수 | 상호명 (주)에듀테크스포츠 | 사업자번호 123-45-67890 | 학원등록번호 제22001호</p>
          <p className="mt-1">주소 경기도 성남시 분당구 판교로 289, 12층 (삼평동)</p>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 my-6 text-base text-gray-300">
            <span className="font-bold">연락처</span> <span>031-999-8888</span>
            <span className="hidden md:inline">|</span>
            <span className="font-bold">E-mail</span> <span>info@sgea.kr</span>
          </div>
          <div className="my-6 text-base text-gray-300">
            <span className="font-bold block mb-2">운영시간 안내</span>
            <p>월~금 | 14:00-22:00</p>
            <p>토~일 | 12:00-22:00</p>
          </div>
          <p className="mt-8 text-xs text-gray-400">©2024. <span className="font-bebas">SGEA</span> All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4 text-xs">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
              이용약관
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
              개인정보처리방침
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
