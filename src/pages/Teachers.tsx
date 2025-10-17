import React from 'react';

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
                <span className="text-white">세계 무대 경험의</span> <span className="text-purple-400">SGEA</span> 강사진
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
            {/* Rexi | 서재원 코치 */}
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-500 shadow-2xl">
              <div className="bg-gray-900 rounded-2xl h-full w-full p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black">Rexi 서재원</h3>
                    <p className="text-purple-400 font-bold">Head/Coach</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-black">R</div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base font-bold text-gray-100 mb-3">선수</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-center gap-2"><span className="text-purple-400">2018</span> SkyFoxes</li>
                      <li className="flex items-center gap-2"><span className="text-purple-400">2019</span> X-Gaming</li>
                      <li className="flex items-center gap-2"><span className="text-purple-400">2020</span> Neutral Break Gaming</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-100 mb-3">코치</h4>
                    <div className="relative">
                      <div className="absolute left-2 top-0 bottom-0 w-px bg-purple-500/30"></div>
                      <ul className="text-gray-300 space-y-3 text-sm pl-6">
                        <li><span className="text-purple-400 font-semibold mr-2">2019</span>Eternity Gaming (Head Coach)</li>
                        <li><span className="text-purple-400 font-semibold mr-2">2020</span>Seoulgame Academy (Coach)</li>
                        <li><span className="text-purple-400 font-semibold mr-2">2021</span>Gen.G Global Academy (Coach)</li>
                        <li><span className="text-purple-400 font-semibold mr-2">2022-2023</span>Maru Game Academy (Coach)</li>
                        <li><span className="text-purple-400 font-semibold mr-2">2024</span>WindTree (Head Coach)</li>
                        <li><span className="text-purple-400 font-semibold mr-2">2025</span>SG E-Sports Academy (Coach)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mandu | 김찬희 */}
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-purple-600 via-indigo-600 to-fuchsia-500 shadow-2xl">
              <div className="bg-gray-900 rounded-2xl h-full w-full p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black">Mandu 김찬희</h3>
                    <p className="text-purple-400 font-bold">Coach</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-black">M</div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base font-bold text-gray-100 mb-3">선수</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-center gap-2"><span className="text-purple-400">2018</span> WGS Armament</li>
                      <li className="flex items-center gap-2"><span className="text-purple-400">2019</span> O2 Blast</li>
                      <li className="flex items-center gap-2"><span className="text-purple-400">2020</span> New York Excelsior</li>
                      <li className="flex items-center gap-2"><span className="text-purple-400">2021</span> Guangzhou Charge</li>
                      <li className="flex items-center gap-2"><span className="text-purple-400">2024</span> WindTree</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-100 mb-3">코치</h4>
                    <div className="relative">
                      <div className="absolute left-2 top-0 bottom-0 w-px bg-purple-500/30"></div>
                      <ul className="text-gray-300 space-y-3 text-sm pl-6">
                        <li><span className="text-purple-400 font-semibold mr-2">2023</span>Maru Game Academy (Coach)</li>
                        <li><span className="text-purple-400 font-semibold mr-2">2025</span>Maru Game Academy (Coach)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <a href="/#contact" className="font-bold">상담 신청하기</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Teachers;
