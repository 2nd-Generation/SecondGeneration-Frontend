import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  fadeInSoft,
  fadeInUp,
  staggerUp,
  easeEmphasized,
  easeAccent,
} from '../utils/motionPresets';

const Class: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<'premium' | 'team' | null>(null);

  return (
    <div className="bg-custom-bg">
      {/* Main Content Sections */}
      <motion.main
        className="container mx-auto px-6 py-12 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: easeEmphasized }}
      >
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
              className="font-bebas text-5xl md:text-6xl lg:text-6xl font-black text-white mb-6 tracking-wide flex flex-col items-center justify-center gap-2 text-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center w-full">
                <motion.img
                  src="/SGEAProgram.png"
                  alt="SGEA"
                  className="h-24 md:h-32 lg:h-40 w-auto object-contain"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: easeEmphasized }}
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

          {/* 설명 텍스트 */}
          <motion.div
            className="mb-12"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-center text-white text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              SGEA의 프로그램은 각 반에 따라 목적과 수업 방향을 달리합니다.<br />
              수강생의 현재 실력과 상황을 반영하여 전문 코치님과 상담 후 배정됩니다.
            </p>
          </motion.div>

          {/* 수강가능종목 */}
          <motion.div
            className="mb-12"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
              <motion.div
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <img src="/ValorantLogo.png" alt="발로란트" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                <span className="font-bebas text-lg md:text-xl font-bold text-white">발로란트</span>
              </motion.div>
              <motion.div
                className="text-white/40 text-xl font-bold hidden md:block"
                variants={fadeInUp}
              >
                •
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <img src="/Overwatch.png" alt="오버워치" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                <span className="font-bebas text-lg md:text-xl font-bold text-white">오버워치</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* 수업 형태 */}
          <motion.div
            className="relative flex flex-col md:flex-row gap-4 md:gap-6 min-h-[400px] md:min-h-[500px]"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* 1대1 프리미엄 집중 수업 - 기본 상태 (좌측) */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex-1 min-h-[200px] md:min-h-[250px] z-10 cursor-pointer"
              onMouseEnter={() => setHoveredCard('premium')}
              onMouseLeave={() => setHoveredCard(null)}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              {/* 배경 이미지 */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${hoveredCard === 'premium' ? 'scale-110' : ''}`}
                style={{ backgroundImage: "url('/playingAlone.png')" }}
              ></div>
              {/* 어두운 오버레이 */}
              <div className={`absolute inset-0 transition-all duration-300 ${hoveredCard === 'premium' ? 'bg-black/85' : 'bg-black/70'}`}></div>
              {/* 콘텐츠 - 기본 상태 */}
              <div className="relative z-10 p-6 md:p-8 h-full flex items-center justify-center">
                <h3 className="font-bebas text-3xl md:text-4xl font-bold text-white text-center w-full px-6 md:px-8">
                  1:1 프리미엄 집중반
                </h3>
              </div>
            </motion.div>

            {/* 1:1 프리미엄 집중반 hover 시 우측에 표시되는 상세 내용 */}
            <motion.div 
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 flex-1 min-h-[200px] md:min-h-[500px] md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full md:z-20 opacity-100 pointer-events-auto ${
                hoveredCard === 'premium'
                  ? 'md:opacity-100 md:pointer-events-auto'
                  : 'md:opacity-0 md:pointer-events-none'
              }`}
              initial={{ opacity: 0.95 }}
              animate={{ opacity: hoveredCard === 'premium' ? 1 : 0.95 }}
              transition={{ duration: 0.4, ease: easeEmphasized }}
            >
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-custom-bg"></div>
              {/* 콘텐츠 */}
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
                  <div className="bg-white/10 rounded-lg p-4 md:p-6 border border-white/20">
                    <p className="text-white text-lg md:text-xl font-bold mb-3 text-center">주1회 / 3시간</p>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed text-center">
                      개인 맞춤형 집중 수업으로 빠르게 실력을 향상시킵니다.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 md:p-6 border border-white/20">
                    <p className="text-white text-lg md:text-xl font-bold mb-3 text-center">주 3회 / 6시간</p>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed text-center">
                      더욱 집중적인 커리큘럼으로 실력을 빠르게 성장시킵니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 1대5 팀 그룹 수업 - 기본 상태 (우측) */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 flex-1 min-h-[200px] md:min-h-[300px] z-10 cursor-pointer"
              onMouseEnter={() => setHoveredCard('team')}
              onMouseLeave={() => setHoveredCard(null)}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              {/* 배경 이미지 */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${hoveredCard === 'team' ? 'scale-110' : ''}`}
                style={{ backgroundImage: "url('/playingTeam.png')" }}
              ></div>
              {/* 어두운 오버레이 */}
              <div className={`absolute inset-0 transition-all duration-300 ${hoveredCard === 'team' ? 'bg-black/85' : 'bg-black/70'}`}></div>
              {/* 콘텐츠 - 기본 상태 */}
              <div className="relative z-10 p-6 md:p-8 h-full flex items-center justify-center">
                <h3 className="font-bebas text-3xl md:text-4xl font-bold text-white text-center w-full px-6 md:px-8">
                  1:5 팀 그룹반
                </h3>
              </div>
            </motion.div>

            {/* 1:5 팀 그룹반 hover 시 좌측에 표시되는 상세 내용 */}
            <motion.div 
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 flex-1 min-h-[200px] md:min-h-[500px] md:absolute md:left-0 md:top-0 md:w-1/2 md:h-full md:z-20 opacity-100 pointer-events-auto ${
                hoveredCard === 'team'
                  ? 'md:opacity-100 md:pointer-events-auto'
                  : 'md:opacity-0 md:pointer-events-none'
              }`}
              initial={{ opacity: 0.95 }}
              animate={{ opacity: hoveredCard === 'team' ? 1 : 0.95 }}
              transition={{ duration: 0.4, ease: easeEmphasized }}
            >
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-custom-bg"></div>
              {/* 콘텐츠 */}
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                <div className="flex-1 flex flex-col justify-center gap-5 md:gap-6">
                  {/* 취미반 */}
                  <div className="bg-white/10 rounded-lg p-4 md:p-5 border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <p className="text-white text-lg md:text-xl font-bold mb-1 md:mb-0">취미반</p>
                      <p className="text-white/90 text-base md:text-lg">주1회 / 3시간</p>
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      게임의 재미를 느끼며 기본기를 다집니다. 랭크 게임을 중심으로 실력과 이해도를 쌓아가며, 즐기면서도 발전하는 플레이를 경험합니다.
                    </p>
                  </div>
                  
                  {/* 성장반 */}
                  <div className="bg-white/10 rounded-lg p-4 md:p-5 border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div className="flex items-center gap-2 mb-1 md:mb-0">
                        <p className="text-white text-lg md:text-xl font-bold">성장반</p>
                        <span className="text-white/70 text-sm md:text-base">(브론즈-다이아)</span>
                      </div>
                      <p className="text-white/90 text-base md:text-lg">주2회 / 6시간</p>
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      분석과 피드백을 통해 자신의 플레이를 객관적으로 바라봅니다. 기량뿐 아니라 판단력, 이해도, 팀워크까지 함께 성장시키는 단계. 스스로의 한계를 넘어서며 '실력 있는 게이머'로 나아갑니다.
                    </p>
                  </div>
                  
                  {/* 프로반 */}
                  <div className="bg-white/10 rounded-lg p-4 md:p-5 border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div className="flex items-center gap-2 mb-1 md:mb-0">
                        <p className="text-white text-lg md:text-xl font-bold">프로반</p>
                        <span className="text-white/70 text-sm md:text-base">(다이아+)</span>
                      </div>
                      <p className="text-white/90 text-base md:text-lg">주3회 / 9시간</p>
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      이론에서 실전까지, 진짜 팀 플레이를 배웁니다. 전략, 전술, 소통을 중심으로 한 팀 중심 수업을 통해 실전 감각과 프로 마인드를 완성합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 커리큘럼 섹션 */}
        <motion.section
          className="mb-32"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className="text-center mb-16"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-bebas text-5xl md:text-6xl lg:text-6xl font-black text-white mb-6 tracking-wide flex flex-col items-center justify-center gap-2 text-center"
              variants={fadeInUp}
            >
              <div className="flex justify-center w-full">
                <motion.img
                  src="/SGEASystem.png"
                  alt="SGEA"
                  className="h-24 md:h-32 lg:h-40 w-auto object-contain"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: easeEmphasized }}
                />
              </div>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeAccent }}
            />
            <motion.p className="font-noto text-gray-100 text-xl" variants={fadeInUp}>
              체계적인 단계별 커리큘럼으로 프로 선수로 성장합니다.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* 커리큘럼 플로우 */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 md:p-16 border border-gray-200 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.85, ease: easeEmphasized }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* 1. 취미 성장반 */}
                <motion.div
                  className="flex flex-col items-center flex-1"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/hobby.svg" alt="취미 성장반" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">취미 성장반</h3>
                  <p className="text-gray-600 text-center text-sm">
                    기초 다지기<br />실력 향상
                  </p>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div className="text-purple-600 mx-4 rotate-90 md:rotate-0" variants={fadeInUp}>
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
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/proPrepare.svg" alt="프로 준비반" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">프로 준비반</h3>
                  <p className="text-gray-600 text-center text-sm">
                    심화 훈련<br />전략적 플레이
                  </p>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div className="text-purple-600 mx-4 rotate-90 md:rotate-0" variants={fadeInUp}>
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
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/test.svg" alt="입단 테스트" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">입단 테스트</h3>
                  <p className="text-gray-600 text-center text-sm">
                    프로 입단<br />기회 부여
                  </p>
                </motion.div>

                {/* Arrow 3 */}
                <motion.div className="text-purple-600 mx-4 rotate-90 md:rotate-0" variants={fadeInUp}>
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
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/proDebut.svg" alt="프로 선수 데뷔" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">프로 선수 데뷔</h3>
                  <p className="text-gray-600 text-center text-sm">
                    프로 선수<br />데뷔
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Class;
