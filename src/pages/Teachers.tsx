import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeInSoft,
  fadeInUp,
  fadeInScale,
  staggerUp,
  easeEmphasized,
} from '../utils/motionPresets';

// 팀 로고 파일 경로 매핑
const teamLogoSrcByName: Record<string, string> = {
  'SkyFoxes': '/Skyfoxes.png',
  'X-Gaming': '/X-gaming.png',
  'Neutral Break Gaming': '/Neutral Break Gaming.png',
  'Eternity Gaming': '/Eternity Gaming.png',
  'Seoulgame Academy': '/Seoul Game Academy.png',
  'Gen.G Global Academy': '/GenG Global Academy.png',
  'Maru Game Academy': '/Maru Game Academy.png',
  'WindTree': '/11.png',
  'SGEA': '/LogoPurple.svg',
  'WGS Armament': '/WGS Armament.png',
  'O2 Blast': '/O2 Blast.png',
  'New York Excelsior': '/ NewYork Excelsior.png',
  'Guangzhou Charge': '/Guangzhou Charge.png',
  'Heroes Player': '/Heroes Player.png',
  'APEX PEOPLE': '/APEX PEOPLE.png',
  'DWG KIA': '/DWG KIA.png',
  'Maru Gaming': '/Maru Gaming.png',
  'Nongshim RedForce': '/Nongshim RedForce.png',
  'Regans Gaming': '/Regans Gaming.png',
  'BNK FearX': '/BNK FearX.png',
  'Pulsar Esports': '/Pulsar Esports.png',
};

type HistoryItem = {
  year: string;
  team: string;
  role?: string;
  isCoach?: boolean;
};

type Coach = {
  id: string;
  name: string;
  displayName: string;
  title: string;
  photoSrc: string;
  gameLogoSrc?: string | string[];
  playerHistory: HistoryItem[];
  coachHistory: HistoryItem[];
};

const coaches: Coach[] = [
  {
    id: 'jeonghi',
    name: '이정하',
    displayName: 'Jeong Hi 이정하',
    title: 'Coach',
    photoSrc: '/Jeong Hi.png',
    gameLogoSrc: '/CITYPNG11.png',
    playerHistory: [
      { year: '2015-2018', team: 'Heroes Player' },
      { year: '2021', team: 'APEX PEOPLE' },
      { year: '2021-2022', team: 'DWG KIA' },
      { year: '2022', team: 'Maru Gaming' },
      { year: '2023', team: 'Nongshim RedForce' },
      { year: '2023', team: 'Regans Gaming' },
      { year: '2024', team: 'BNK FearX' },
      { year: '2025', team: 'Pulsar Esports' },
    ],
    coachHistory: [
      { year: '2025', team: 'SGEA', role: 'Coach', isCoach: true },
    ],
  },
  {
    id: 'rexi',
    name: '서재원',
    displayName: 'Rexi 서재원',
    title: 'Head/Coach',
    photoSrc: '/coach/rexi.png',
    gameLogoSrc: ['/Overwatch.png', '/CITYPNG11.png'],
    playerHistory: [
      { year: '2018', team: 'SkyFoxes' },
      { year: '2019', team: 'X-Gaming' },
      { year: '2020', team: 'Neutral Break Gaming' },
    ],
    coachHistory: [
      { year: '2019', team: 'Eternity Gaming', role: 'Head Coach', isCoach: true },
      { year: '2020', team: 'Seoulgame Academy', role: 'Coach', isCoach: true },
      { year: '2021', team: 'Gen.G Global Academy', role: 'Coach', isCoach: true },
      { year: '2022-2023', team: 'Maru Game Academy', role: 'Coach', isCoach: true },
      { year: '2024', team: 'WindTree', role: 'Head Coach', isCoach: true },
      { year: '2025', team: 'SGEA', role: 'Coach', isCoach: true },
    ],
  },
  {
    id: 'mandu',
    name: '김찬희',
    displayName: 'Mandu 김찬희',
    title: 'Coach',
    photoSrc: '/coach/mandu.jpg',
    gameLogoSrc: ['/Overwatch.png', '/CITYPNG11.png'],
    playerHistory: [
      { year: '2018', team: 'WGS Armament' },
      { year: '2019', team: 'O2 Blast' },
      { year: '2020', team: 'New York Excelsior' },
      { year: '2021', team: 'Guangzhou Charge' },
      { year: '2024', team: 'WindTree' },
    ],
    coachHistory: [
      { year: '2023', team: 'Maru Game Academy', role: 'Coach', isCoach: true },
      { year: '2025', team: 'Maru Game Academy', role: 'Coach', isCoach: true },
      { year: '2025', team: 'SGEA', role: 'Coach', isCoach: true },
    ],
  },
];

const Teachers: React.FC = () => {
  return (
    <div className="bg-custom-bg min-h-screen">
      {/* Header Space */}
      <div className="pt-24"></div>

      <motion.main
        className="container mx-auto px-6 py-12 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: easeEmphasized }}
      >

        {/* 코치 프로필 */}
        <motion.section
          className="mb-24"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl font-black text-gray-100 mb-12 text-center"
            variants={fadeInUp}
          >
            강사 프로필
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coaches.map((coach) => (
              <motion.div
                key={coach.id}
                className="group relative bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-xl"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250, damping: 24 }}
              >
                {/* 메인 이미지 */}
                <motion.div className="relative" variants={fadeInScale}>
                  <img 
                    src={coach.photoSrc} 
                    alt={`${coach.displayName} 프로필`} 
                    className="w-full h-[500px] lg:h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* 블랙 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                  
                  {/* 기본 정보 오버레이 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-5 md:p-6 lg:p-8 transition-opacity duration-500">
                    <div className="flex items-end justify-between">
                      <div className="flex items-end gap-2 md:gap-3">
                        <div className="flex-shrink-0">
                          <img src="/LogoWhite.png" alt="SGEA Logo" className="h-[calc(2.5rem+0.25rem+1.25rem-0.5rem)] md:h-[calc(3rem+0.25rem+1.5rem-1.5rem)] lg:h-[calc(4rem+0.25rem+1.75rem-1.5rem)] w-auto object-contain" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-0.2" style={{ letterSpacing: 0 }}>
                            <strong className="gothic-a1-regular">{coach.displayName.replace(` ${coach.name}`, '')}</strong>
                          </h3>
                          <p className="text-white/80 text-sm md:text-base lg:text-lg">{coach.name}</p>
                        </div>
                      </div>
                      {coach.gameLogoSrc && (
                        <div className="flex items-center gap-2">
                          {(Array.isArray(coach.gameLogoSrc) ? coach.gameLogoSrc : [coach.gameLogoSrc]).map((logoSrc, idx) => (
                            <div key={idx} className="relative">
                              <div className="absolute inset-0"></div>
                              <div className="relative">
                                <img src={logoSrc} alt="Game Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover 오버레이 - 상세 정보 */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="p-4 md:p-5 lg:p-6 w-full h-full overflow-hidden flex flex-col">
                      <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed flex-shrink-0 mt-8 md:mt-10">
                        메이저 리그 출신 코치의 풍부한 경험과 노하우를 바탕으로<br />
                        학생 개개인의 특성을 분석하여 맞춤형 훈련을 제공합니다.
                      </p>
                      
                      <div className="border-t border-gray-200 pt-3 md:pt-4 flex-1 overflow-hidden">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 md:mb-3 flex-shrink-0">경력</h4>
                        <ul className="space-y-2 md:space-y-3 overflow-hidden">
                          {[...coach.playerHistory, ...coach.coachHistory]
                            .sort((a, b) => {
                              // 년도 파싱 (예: "2022-2023" -> 2022)
                              const yearA = parseInt(a.year.split('-')[0]);
                              const yearB = parseInt(b.year.split('-')[0]);
                              return yearA - yearB; // 과거순
                            })
                            .map((h, idx) => (
                            <li key={`${coach.id}-${idx}-${h.year}-${h.team}`} className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-purple-600 font-bold min-w-[55px] md:min-w-[65px] text-xs md:text-sm">{h.year}</span>
                              {teamLogoSrcByName[h.team] ? (
                                <img src={teamLogoSrcByName[h.team]} alt={`${h.team} 로고`} className="w-4 h-4 md:w-5 md:h-5 object-contain flex-shrink-0" />
                              ) : (
                                <div className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                              )}
                              <span className="text-xs md:text-sm font-medium text-gray-700 truncate">
                                <span className="gothic-a1-regular">{h.team}</span>
                                {h.isCoach && h.role ? <span className="text-gray-500 font-normal gothic-a1-regular"> · {h.role}</span> : null}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
            </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Teachers;
