import React from 'react';

const Class: React.FC = () => {
  return (
    <div className="bg-custom-bg text-white min-h-screen">
      {/* Header Space */}
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* 클래스 헤더 */}
        <section className="mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 text-center">
            <span className="font-bebas text-purple-500">SGEA</span> 프로그램
          </h1>
          <p className="text-center text-gray-400 mb-12 text-lg">각각의 레벨과 목적에 맞춘 전문 클래스를 제공합니다.</p>
        </section>

        {/* 클래스 소개 */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Master Class */}
          <div className="relative bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 absolute top-0 left-0 w-full h-2"></div>
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-purple-500">CLASS </span>MASTER
            </h3>
            <p className="text-gray-300 text-lg font-semibold mb-4">
              최첨단 하이엔드 게이밍 환경에서 완벽한 직접 수강을 제공하는 전문 교육 공간입니다.
            </p>
            <div className="space-y-3 text-gray-400 mb-6">
              <p className="text-sm">
                <strong>Feature</strong> | 커스터마이징 가능한 전문 게이밍 장비
              </p>
              <p className="text-sm">
                <strong>Coaching</strong> | 프로선수의 1온1 코칭 해주는 특별 인재
              </p>
              <p className="text-sm">
                <strong>Skill</strong> | 축구와 야구 같은 일반 스포츠
              </p>
            </div>
            <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 bg-white transition-opacity duration-500"></div>
          </div>

          {/* Advanced Class */}
          <div className="relative bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 absolute top-0 left-0 w-full h-2"></div>
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-purple-500">CLASS </span>ADVANCED
            </h3>
            <p className="text-gray-300 text-lg font-semibold mb-4">
              귀중한 시간에 최상급의 효율적인 내 아이의 동기학습을 제공하는 아카데미 교육 공간입니다.
            </p>
            <div className="space-y-3 text-gray-400 mb-6">
              <p className="text-sm">
                <strong>Feature</strong> | 고사양의 게이밍 컴퓨터와 고주사율 모니터
              </p>
              <p className="text-sm">
                <strong>Coaching</strong> | 팀워크, 커뮤니케이션 등의 능력
              </p>
              <p className="text-sm">
                <strong>Skill</strong> | 스트레스 관리를 통한 멘탈 코칭
              </p>
            </div>
            <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 bg-white transition-opacity duration-500"></div>
          </div>

          {/* Basic Class */}
          <div className="relative bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="bg-gradient-to-br from-green-600 to-green-800 absolute top-0 left-0 w-full h-2"></div>
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-purple-500">CLASS </span>BASIC
            </h3>
            <p className="text-gray-300 text-lg font-semibold mb-4">
              이스포츠에 처음 입문하는 학생들을 위해 설계된 기초기술을 위한 최신 중급 사양의 이스포츠 교육 환경입니다.
            </p>
            <div className="space-y-3 text-gray-400 mb-6">
              <p className="text-sm">
                <strong>Feature</strong> | 최신 중급 사양의 컴퓨터와 전문 장비
              </p>
              <p className="text-sm">
                <strong>Coaching</strong> | 증심심화 트레이닝 전략훈련 균형감각
              </p>
              <p className="text-sm">
                <strong>Skill</strong> | 몰입과 조작을 통한 창의성 개발
              </p>
            </div>
            <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 bg-white transition-opacity duration-500"></div>
          </div>

          {/* Training Room */}
          <div className="relative bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 absolute top-0 left-0 w-full h-2"></div>
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-purple-500">TRAINING SYSTEM</span>
            </h3>
            <p className="text-gray-300 text-lg font-semibold mb-4">
              집중 연습과 기초 기술 습득을 위한 전용 훈련 공간으로, 체계적인 수업을 제공합니다.
            </p>
            <div className="space-y-3 text-gray-400 mb-6">
              <p className="text-sm">
                <strong>Feature</strong> | 격리된 철옹성 보안 훈련실
              </p>
              <p className="text-sm">
                <strong>Refresh</strong> | 생생함과 새로운 주력
              </p>
              <p className="text-sm">
                <strong>Education</strong> | 최대한 어떤 환경에서도 놓지지 않음
              </p>
            </div>
            <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 bg-white transition-opacity duration-500"></div>
          </div>
        </section>

        {/* 커리큘럼 섹션 */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl font-black text-white mb-6 tracking-wide">
              <span className="font-bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SGEA</span> 양성 시스템
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-100 text-xl">체계적인 단계별 커리큘럼으로 프로 선수로 성장합니다.</p>
          </div>
          
          <div className="relative">
            {/* 커리큘럼 플로우 */}
            <div className="relative bg-white rounded-3xl p-8 md:p-16 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* 1. 취미 성장반 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/hobby.svg" alt="취미 성장반" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">취미 성장반</h3>
                  <p className="text-gray-600 text-center text-sm">기초 다지기<br />실력 향상</p>
                </div>

                {/* Arrow 1 */}
                <div className="text-purple-600 mx-4 rotate-90 md:rotate-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* 2. 프로 준비반 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/proPrepare.svg" alt="프로 준비반" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">프로 준비반</h3>
                  <p className="text-gray-600 text-center text-sm">심화 훈련<br />전략적 플레이</p>
                </div>

                {/* Arrow 2 */}
                <div className="text-purple-600 mx-4 rotate-90 md:rotate-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* 3. 입단 테스트 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/test.svg" alt="입단 테스트" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">입단 테스트</h3>
                  <p className="text-gray-600 text-center text-sm">프로 입단<br />기회 부여</p>
                </div>

                {/* Arrow 3 */}
                <div className="text-purple-600 mx-4 rotate-90 md:rotate-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* 4. 프로 선수 데뷔 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img src="/proDebut.svg" alt="프로 선수 데뷔" className="w-20 h-20 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">프로 선수 데뷔</h3>
                  <p className="text-gray-600 text-center text-sm">프로 선수<br />데뷔</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Class;
