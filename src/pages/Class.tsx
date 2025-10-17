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
            <span className="text-purple-500">SGEA</span> 프로그램
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

        {/* 이벤트 섹션 */}
        <section className="mb-20">
          <h2 className="text-4xl font-black text-white mb-12 text-center">예정된 일정</h2>
          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl text-center">
            <p className="text-gray-400 text-lg leading-relaxed">
              국제 무대 진출의 기회가 열려있습니다! 만의 하나 높아진 이스포츠 경기 예시로, 안정성보다는 뇌의 몰입과
              조작을 활용한 창의성 교육을 통해 진취적인 성능 증진에 큰 의미를 담고 있는 SGEA Track&Field랩의 전문 교육
              과정입니다.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-500 mb-2">읽기와 단순 기술 향상</h3>
                <p className="text-gray-300">이스포츠의 기초를 확립하고 체계적으로 실력 향상</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-500 mb-2">창의적 기술 개발</h3>
                <p className="text-gray-300">천재보다는 고수들은 독창적인 움직임이 필수</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-500 mb-2">리더십과 인내심</h3>
                <p className="text-gray-300">실력과 최고의 포스가 결합된 인간교육</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Class;
