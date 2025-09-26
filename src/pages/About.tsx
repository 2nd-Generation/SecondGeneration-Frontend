import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Space */}
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24 space-y-20">
        {/* 소개 헤더 */}
        <section>
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-center">
            <span className="text-yellow-400">SGeA</span> 소개
          </h1>
          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              <strong>SGeA 이스포츠 아카데미</strong>는 21세기 디지털 시대의 새로운 스포츠 문화를 이끌어가는 전문 교육 기관입니다. 
              저희는 단순한 게임을 넘어, 탄탄한 기본기와 전략적 사고력을 바탕으로 한 전문 이스포츠 문화를 만들어가고 있습니다.
            </p>

            {/* 비전 & 철학 */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">아카데미 비전</h3>
                <p className="text-gray-300">
                  체계적인 커리큘럼을 통해 학생 개개인의 잠재력과 능력을 최대한 개발하고, 
                  진로를 찾지 못한 학생들까지 다방면 인재로 성장시켜 일자리 창출에 기여하고자 합니다.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">교육 철학</h3>
                <p className="text-gray-300">
                  건강한 교육 환경과 전문적인 커리큘럼을 갖춘 이스포츠 교육 기관으로서, 
                  약물 없는 깨끗하고 건강한 문화를 만들어가겠습니다.
                </p>
              </div>
            </div>

            {/* 강조 문구 */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                SUPER + PERFECT = 최고와 완벽을 추구합니다
              </h3>
              <p className="text-gray-800 text-lg">
                각 종목 메이저 리그 출신 감독과 프로 선수로 구성된 강사진이<br />
                경험에 기반한 맞춤형 훈련 프로그램을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 연혁 섹션 */}
        <section>
          <h2 className="text-4xl font-black mb-12 text-center">아카데미 연혁</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl flex items-center">
              <div className="bg-yellow-400 text-gray-900 font-black text-lg px-4 py-2 rounded-full mr-6">2024</div>
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-bold mb-2">최첨단 교육 시설 완공</h3>
                <p className="text-gray-300">Master, Advanced, Basic, Training 클래스 구성</p>
              </div>
            </div>
          </div>
        </section>

        {/* 특별 프로그램 섹션 */}
        <section>
          <h2 className="text-4xl font-black mb-12 text-center">특별 프로그램</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">멘탈 코칭</h3>
              <p className="text-gray-300">
                스트레스 관리와 자신감 향상을 위한 전문 상담·심리 프로그램을 제공합니다.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">팀워크 트레이닝</h3>
              <p className="text-gray-300">
                기술적 능력뿐 아니라 팀워크와 커뮤니케이션 역량을 강화하는 훈련을 진행합니다.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">커리어 상담</h3>
              <p className="text-gray-300">
                이스포츠 관련 진로 상담과 멘토링 프로그램을 통해 청년 취업 준비 및 학교 밖 청소년 지원을 돕습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
