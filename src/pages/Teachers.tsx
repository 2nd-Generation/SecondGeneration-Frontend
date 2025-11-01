import React from 'react';

// 팀 로고 파일 경로 매핑 - static으로 진행
const teamLogoSrcByName: Record<string, string> = {
  'New York Excelsior': '/ NewYork Excelsior.png',
  'Eternity Gaming': '/Eternity Gaming.png',
  'Gen.G Global Academy': '/GenG Global Academy.png',
  'Guangzhou Charge': '/Guangzhou Charge.png',
  'Maru Game Academy': '/Maru Game Academy.png',
  'Neutral Break Gaming': '/Neutral Break Gaming.png',
  'O2 Blast': '/O2 Blast.png',
  'Seoulgame Academy': '/Seoul Game Academy.png',
  'SkyFoxes': '/Skyfoxes.png',
  'WGS Armament': '/WGS Armament.png',
  'WindTree': '/Windtree.png',
  'X-Gaming': '/X-gaming.png',
  'SG E-Sports Academy': '/mainLogo.png',
};

type HistoryItem = {
  year: string;
  team: string;
  role?: string;
};

type Coach = {
  id: string;
  name: string;
  displayName: string;
  title: string;
  photoSrc: string;
  playerHistory: HistoryItem[];
  coachHistory: HistoryItem[];
};

const coaches: Coach[] = [
  {
    id: 'rexi',
    name: '서재원',
    displayName: 'Rexi 서재원',
    title: 'Head/Coach',
    photoSrc: '/coach/rexi.png',
    playerHistory: [
      { year: '2018', team: 'SkyFoxes' },
      { year: '2019', team: 'X-Gaming' },
      { year: '2020', team: 'Neutral Break Gaming' },
    ],
    coachHistory: [
      { year: '2019', team: 'Eternity Gaming', role: 'Head Coach' },
      { year: '2020', team: 'Seoulgame Academy', role: 'Coach' },
      { year: '2021', team: 'Gen.G Global Academy', role: 'Coach' },
      { year: '2022-2023', team: 'Maru Game Academy', role: 'Coach' },
      { year: '2024', team: 'WindTree', role: 'Head Coach' },
      { year: '2025', team: 'SG E-Sports Academy', role: 'Coach' },
    ],
  },
  {
    id: 'mandu',
    name: '김찬희',
    displayName: 'Mandu 김찬희',
    title: 'Coach',
    photoSrc: '/coach/mandu.jpg',
    playerHistory: [
      { year: '2018', team: 'WGS Armament' },
      { year: '2019', team: 'O2 Blast' },
      { year: '2020', team: 'New York Excelsior' },
      { year: '2021', team: 'Guangzhou Charge' },
      { year: '2024', team: 'WindTree' },
    ],
    coachHistory: [
      { year: '2023', team: 'Maru Game Academy', role: 'Coach' },
      { year: '2025', team: 'Maru Game Academy', role: 'Coach' },
      { year: '2025', team: 'SG E-Sports Academy', role: 'Coach' },
    ],
  },
];

const Teachers: React.FC = () => {
  return (
    <div className="bg-custom-bg text-white min-h-screen">
      {/* Header Space */}
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* Hero */}
        <section className="relative overflow-hidden mb-16 md:mb-24 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-gray-900"></div>
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-purple-700/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="relative px-6 md:px-16 py-16 md:py-24 border border-white/10 rounded-3xl bg-white/5 backdrop-blur">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                <span className="text-white">세계 무대 경험의</span> <span className="font-bebas text-purple-400">SGEA</span> 강사진
              </h1>
              <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl">
                메이저 리그 출신 코치진의 노하우로 기본기를 설계하고, 선수로 성장하는 로드맵을 제시합니다.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['LCK','LPL','LLA','VCJ','PMJL'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 코치 프로필 */}
        <section className="mb-24">
          <h2 className="text-4xl font-black text-white mb-12 text-center">코치 프로필</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coaches.map((coach) => (
              <div key={coach.id} className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-500 shadow-2xl">
                <div className="bg-gray-900 rounded-2xl h-full w-full p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <img src={coach.photoSrc} alt={`${coach.displayName} 프로필`} className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover object-center ring-2 ring-purple-500/40" />
                      <div>
                        <h3 className="text-2xl font-black">{coach.displayName}</h3>
                        <p className="text-purple-400 font-bold">{coach.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-base font-bold text-gray-100 mb-3">선수</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {coach.playerHistory.map((h) => (
                          <li key={`${coach.id}-player-${h.year}-${h.team}`} className="flex items-center gap-3">
                            <span className="text-purple-400 min-w-[56px]">{h.year}</span>
                            {teamLogoSrcByName[h.team] ? (
                              <img src={teamLogoSrcByName[h.team]} alt={`${h.team} 로고`} className="w-6 h-6 object-contain" />
                            ) : (
                              <div className="w-6 h-6" />
                            )}
                            <span>{h.team}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-gray-100 mb-3">코치</h4>
                      <div className="relative">
                        <div className="absolute left-2 top-0 bottom-0 w-px bg-purple-500/30"></div>
                        <ul className="text-gray-300 space-y-3 text-sm pl-6">
                          {coach.coachHistory.map((h) => (
                            <li key={`${coach.id}-coach-${h.year}-${h.team}`} className="flex items-center gap-3">
                              <span className="text-purple-400 font-semibold min-w-[72px]">{h.year}</span>
                              {teamLogoSrcByName[h.team] ? (
                                <img src={teamLogoSrcByName[h.team]} alt={`${h.team} 로고`} className="w-6 h-6 object-contain" />
                              ) : (
                                <div className="w-6 h-6" />
                              )}
                              <span>
                                {h.team}
                                {h.role ? <span className="text-gray-400"> ({h.role})</span> : null}
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
