import React from 'react';

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
      { year: '2025', team: 'SGEA' },
    ],
    coachHistory: [],
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

      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* Hero */}
        <section className="relative overflow-hidden mb-16 md:mb-24 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-purple-50 to-indigo-100/40"></div>
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="relative px-6 md:px-16 py-16 md:py-24 border border-gray-200 rounded-3xl bg-white">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                <span className="text-gray-900">세계 무대 경험의 <span className="font-bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SGEA</span> 강사진</span> 
              </h1>
              <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl">
                메이저 리그 출신 강사진의 노하우로 기본기를 설계하고, 선수로 성장하는 로드맵을 제시합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 코치 프로필 */}
        <section className="mb-24">
          <h2 className="text-4xl font-black text-gray-100 mb-12 text-center">강사 프로필</h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {coaches.map((coach) => (
              <div key={coach.id} className="group relative bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-xl">
                {/* 메인 이미지 */}
                <div className="relative">
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
                            <strong>{coach.displayName.replace(` ${coach.name}`, '')}</strong>
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
                                {h.team}
                                {h.isCoach && h.role ? <span className="text-gray-500 font-normal"> · {h.role}</span> : null}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Teachers;
