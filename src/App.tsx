import React from 'react';

function App() {
  return (
    <div className="bg-gray-900 text-white font-['Noto_Sans_KR']">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-xl transition-shadow duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
              <span className="text-gray-900 font-black text-xl">C</span>
            </div>
            <span className="text-2xl font-black text-yellow-400">CoreClass</span>
          </a>
          
          {/* Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-lg font-semibold">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">소개</a>
            <a href="#class" className="text-gray-300 hover:text-white transition-colors duration-300">클래스</a>
            <a href="#news" className="text-gray-300 hover:text-white transition-colors duration-300">소식</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">문의</a>
            <a href="#contact" className="px-6 py-3 rounded-full text-gray-900 font-bold bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105 shadow-lg">
              문의하기
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="relative flex items-center justify-center min-h-screen">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080/000000/363636?text=Background+Image')"}}></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4">
            CoreClass
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-semibold max-w-3xl mx-auto">
            최고와 완벽을 추구하는 이스포츠 아카데미
          </p>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* 학원 소개 Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">
            체계적인 이스포츠 아카데미 <span className="text-yellow-400">CoreClass</span>
          </h2>
          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl leading-relaxed">
            <p className="text-gray-300 mb-6 text-lg">
              (주)케이제이 이스포츠는 건강한 이스포츠 문화를 확립하고자 'CoreClass 이스포츠 아카데미 (CoreClass E-Sports Academy)'를 설립하였습니다.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              CoreClass 이스포츠 아카데미는 체계적인 커리큘럼과 건강한 교육 환경을 갖춘 전문 이스포츠 교육 문화 기관입니다.
              이름 그대로 <strong>SUPER+PERFECT</strong>, 최고와 완벽함을 추구하며 각 종목의 메이저 리그 출신 감독, 프로 선수로 구성된 강사진이 경험에 기반한 맞춤형 훈련 프로그램을 제공합니다.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              또한 저희 아카데미에서는 학생들에게 이스포츠의 기술적인 부분뿐만 아니라 팀워크, 커뮤니케이션 등의 다양한 능력을 키울 수 있도록 훈련하고,
              스트레스 관리, 자신감 향상 등의 멘탈 코칭이 포함된 전문 상담 심리 프로그램을 제공하고 있습니다.
            </p>
            <p className="text-gray-300 text-lg">
              이를 통해 모든 학생들이 자신의 잠재력을 최대한 발휘하면서 즐겁고 건강한 이스포츠를 체험할 수 있도록 지원하고자 합니다.
            </p>
          </div>
        </section>

        {/* 강점 Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">건강한 교육, 맞춤형 교육, 잠재력 향상</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">전문 상담 프로그램</h3>
              <p className="text-gray-400">e스포츠에 특화된 전문 상담 프로그램을 통하여 관계 개선, 멘탈 코칭을 제공합니다.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">맞춤형 커리큘럼</h3>
              <p className="text-gray-400">메이저 리그 출신 강사진의 노하우가 담긴 맞춤형 커리큘럼으로 실력 향상을 돕습니다.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">멘탈 강화</h3>
              <p className="text-gray-400">자세 교정과 멘탈 강화를 통해 잠재력을 최대한 발휘하도록 지원합니다.</p>
            </div>
          </div>
        </section>

        {/* 강사진 소개 Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">CoreClass 강사진 소개</h2>
          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl text-center">
            <p className="text-gray-400 text-lg mb-4">
              <strong>LCK, LPL, LLA, VCJ, PMJL</strong> 등 각 종목 e스포츠 메이저리그 출신의 강사진!
            </p>
            <p className="text-gray-400 text-lg">
              더 이상 게임이 아닌 하나의 문화로서 자리 잡은 e스포츠는 취미와 직업 스포츠에서도 그렇듯, e스포츠도 기본기가 가장 중요합니다.
            </p>
          </div>
        </section>

        {/* 공간 소개 Section */}
        <section id="class" className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">
            최고의 이스포츠 공간 <span className="text-yellow-400">CoreClass</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">CoreClass 이스포츠 아카데미의 공간을 소개합니다.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Master */}
            <div className="relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden group">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Master</h3>
              <p className="text-gray-300 font-semibold mb-4">고속 성장과 최상의 퍼포먼스</p>
              <p className="text-gray-400 text-sm">최첨단 하이엔드 게이밍 컴퓨터와 초고주사율 모니터, 그리고 커스터마이징 가능한 전문 게이밍 장비를 갖추고 있습니다.</p>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: "url('https://placehold.co/400x400/1E293B/374151?text=MASTER+CLASS')"}}></div>
            </div>
            {/* Advanced */}
            <div className="relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden group">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Advanced</h3>
              <p className="text-gray-300 font-semibold mb-4">심화 훈련과 전략적 플레이</p>
              <p className="text-gray-400 text-sm">고사양의 게이밍 컴퓨터와 고주사율 모니터, 그리고 전문 게이밍 장비를 갖추고 있어 높은 퀄리티의 훈련을 지원합니다.</p>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: "url('https://placehold.co/400x400/1E293B/374151?text=ADVANCED+CLASS')"}}></div>
            </div>
            {/* Basic */}
            <div className="relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden group">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Basic</h3>
              <p className="text-gray-300 font-semibold mb-4">기초 다지기와 실력 향상</p>
              <p className="text-gray-400 text-sm">이스포츠에 처음 입문하는 학생들을 위해 설계된 공간으로, 최신 중급 사양의 컴퓨터를 제공합니다.</p>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: "url('https://placehold.co/400x400/1E293B/374151?text=BASIC+CLASS')"}}></div>
            </div>
            {/* Training */}
            <div className="relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden group">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Training</h3>
              <p className="text-gray-300 font-semibold mb-4">집중 연습과 기초 기술 습득</p>
              <p className="text-gray-400 text-sm">집중 연습과 기초 기술 습득을 위한 최적의 환경을 제공하여 이스포츠의 기초를 확립합니다.</p>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage: "url('https://placehold.co/400x400/1E293B/374151?text=TRAINING+SPACE')"}}></div>
            </div>
          </div>
        </section>

        {/* 이벤트 Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">다양한 이벤트를 확인하세요</h2>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg grid md:grid-cols-3 gap-6 text-center">
            <div className="text-gray-300 p-4 border-2 border-gray-600 rounded-lg transition-transform duration-300 hover:scale-105">
              <p className="font-bold text-xl text-yellow-400 mb-2">장기등록 시 할인</p>
            </div>
            <div className="text-gray-300 p-4 border-2 border-gray-600 rounded-lg transition-transform duration-300 hover:scale-105">
              <p className="font-bold text-xl text-yellow-400 mb-2">장학생 프로그램 운영</p>
            </div>
            <div className="text-gray-300 p-4 border-2 border-gray-600 rounded-lg transition-transform duration-300 hover:scale-105">
              <p className="font-bold text-xl text-yellow-400 mb-2">파트너사 제품 할인 제공</p>
            </div>
          </div>
        </section>

        {/* 문의하기 Section */}
        <section id="contact" className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">상담 신청하기</h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            CoreClass 아카데미의 전문 상담사들이 개인 맞춤형으로 각자의 상황과 필요에 맞춘 조언과 지원을 제공합니다.
          </p>
          <a href="#" className="inline-block px-10 py-4 rounded-full text-gray-900 font-bold bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 text-xl shadow-lg transform hover:scale-105">
            상담 신청하기
          </a>
        </section>
        
        {/* 파트너 Section */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10">OUR PARTNERS</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* 이미지 맵 placeholders */}
            <div className="w-32 h-16 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400">Image Map</div>
            <div className="w-32 h-16 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400">Image Map</div>
            <div className="w-32 h-16 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400">Image Map</div>
            <div className="w-32 h-16 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400">Image Map</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">CoreClass | CoreClass 이스포츠 아카데미</h3>
          <p>대표 박시한 | 상호명 (주)케이제이이스포츠 | 사업자번호 792-87-03015 | 학원등록번호 제14661호</p>
          <p className="mt-1">주소 서울특별시 강남구 역삼로 550, 5층 (대치동)</p>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 my-6 text-base">
            <span className="text-white font-bold">연락처</span> <span className="text-gray-300">070-4458-7700</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="text-white font-bold">E-mail</span> <span className="text-gray-300">kjesports@superfect.kr</span>
          </div>
          <div className="my-6 text-base">
            <span className="text-white font-bold block mb-2">운영시간 안내</span>
            <p>월~금 | 14:00-22:00</p>
            <p>토~일 | 12:00-22:00</p>
          </div>
          <p className="mt-8 text-xs">©2024. CoreClass All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4 text-xs">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">이용약관</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


