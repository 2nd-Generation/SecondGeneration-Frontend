import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-custom-bg">
      {/* Hero Section */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-custom-bg to-indigo-900/50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Background Image/Video Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/363636?text=Background+Image')" }}
        ></div>

        {/* Infinite Scroll Marquee at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-black/90 backdrop-blur-sm border-t border-gray-700">
          <div className="flex animate-infinite-scroll whitespace-nowrap">
            {/* First set */}
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>

            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>

            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>

            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>

            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>
            <div className="flex items-center space-x-6 mx-6 py-3">
              <img src="/44422d4d40ba63b2.png" alt="SGEA Logo" className="h-12 w-auto" />
              <span className="font-russo text-purple-400 text-xl font-black tracking-wider">Second Generation</span>
              <div className="w-1 h-4 bg-purple-600"></div>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* 학원 소개 Section */}
        <section id="about" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl font-black text-white mb-6 tracking-wide">
              체계적인 이스포츠 아카데미 <span className="font-bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SGEA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white p-8 md:p-16 rounded-3xl border border-gray-200 shadow-2xl">
              <div className="space-y-8 text-lg leading-relaxed">
                <p className="text-gray-700">
                  (주)케이제이 이스포츠는 건강한 이스포츠 문화를 확립하고자 <span className="text-purple-600 font-semibold">'SGEA 이스포츠 아카데미 (SGEA E-Sports Academy)'</span>를 설립하였습니다.
                </p>
                
                <div className="relative pl-6 border-l-4 border-purple-500/50">
                  <p className="text-gray-700">
                    SGEA 이스포츠 아카데미는 체계적인 커리큘럼과 건강한 교육 환경을 갖춘 전문 이스포츠 교육 문화 기관입니다.
                    이름 그대로 <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SUPER+PERFECT</strong>, 최고와 완벽함을 추구하며 각 종목의 메이저 리그 출신 감독, 프로
                    선수로 구성된 강사진이 경험에 기반한 맞춤형 훈련 프로그램을 제공합니다.
                  </p>
                </div>
                
                <p className="text-gray-700">
                  또한 저희 아카데미에서는 학생들에게 이스포츠의 기술적인 부분뿐만 아니라 <span className="text-purple-600 font-semibold">팀워크, 커뮤니케이션</span> 등의 다양한
                  능력을 키울 수 있도록 훈련하고, 스트레스 관리, 자신감 향상 등의 멘탈 코칭이 포함된 전문 상담 심리
                  프로그램을 제공하고 있습니다.
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-6 rounded-2xl border border-purple-500/20">
                  <p className="text-gray-800 text-center">
                    이를 통해 모든 학생들이 자신의 잠재력을 최대한 발휘하면서<br />
                    <span className="text-purple-600 font-bold">즐겁고 건강한 이스포츠를 체험할 수 있도록</span> 지원하고자 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* 커리큘럼 Section */}
                <section id="curriculum" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl font-black text-white mb-6 tracking-wide">
              <span className="font-bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SGEA</span> 양성 시스템
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="font-noto text-gray-100 text-xl">체계적인 단계별 커리큘럼으로 프로 선수로 성장합니다.</p>
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

        {/* 강점 Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl font-black text-white mb-6 tracking-wide">
              SGEA 프로그램
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white p-10 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bebas text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors tracking-wide">전문 상담 프로그램</h3>
                <p className="text-gray-700 leading-relaxed">
                  e스포츠에 특화된 전문 상담 프로그램을 통하여 관계 개선, 멘탈 코칭을 제공합니다.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-10 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bebas text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors tracking-wide">맞춤형 커리큘럼</h3>
                <p className="text-gray-700 leading-relaxed">
                  메이저 리그 출신 강사진의 노하우가 담긴 맞춤형 커리큘럼으로 실력 향상을 돕습니다.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-10 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bebas text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors tracking-wide">멘탈 강화</h3>
                <p className="text-gray-700 leading-relaxed">
                  자세 교정과 멘탈 강화를 통해 잠재력을 최대한 발휘하도록 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 강사진 소개 Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl font-black text-white mb-6 tracking-wide">
              <span className="font-bebas">SGEA</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">강사진 소개</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative bg-white p-8 md:p-16 rounded-3xl border border-gray-200 shadow-2xl">
          </div>
        </section>

        {/* 문의하기 Section */}
        <section id="contact" className="mb-32">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative p-12 md:p-20 text-center">
              <div className="mb-8">
                <span className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-6">
                  💬 Contact Us
                </span>
              </div>
              
              <h2 className="font-bebas text-6xl md:text-7xl font-black text-white mb-6 tracking-wide">
                상담 신청
              </h2>
              
              <p className="text-white/90 mb-12 text-xl max-w-3xl mx-auto leading-relaxed">
                SGEA 아카데미의 전문 상담사들이 개인 맞춤형으로<br />
                각자의 상황과 필요에 맞춘 조언과 지원을 제공합니다.
              </p>
              
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <a
                  href="http://pf.kakao.com/_xayxnLG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas group inline-flex items-center gap-3 px-10 py-4 rounded-full text-purple-600 font-bold bg-white hover:bg-gray-100 transition-all duration-300 text-xl shadow-2xl transform hover:scale-105 tracking-wider"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  수강 신청하기
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="http://pf.kakao.com/_xayxnLG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas group inline-flex items-center gap-3 px-10 py-4 rounded-full text-purple-600 font-bold bg-white hover:bg-gray-100 transition-all duration-300 text-xl shadow-2xl transform hover:scale-105 tracking-wider"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"/>
                  </svg>
                  카카오톡 상담
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="tel:031-999-8888"
                  className="font-bebas group inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-xl shadow-2xl transform hover:scale-105 tracking-wider"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  유선 상담
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-custom-bg py-12 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <h3 className="text-xl font-bold text-purple-500 mb-4"><span className="font-bebas">SGEA</span> | <span className="font-bebas">SGEA</span> 이스포츠 아카데미</h3>
          <p>대표 김민수 | 상호명 (주)에듀테크스포츠 | 사업자번호 123-45-67890 | 학원등록번호 제22001호</p>
          <p className="mt-1">주소 경기도 성남시 분당구 판교로 289, 12층 (삼평동)</p>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 my-6 text-base text-gray-300">
            <span className="font-bold">연락처</span> <span>031-999-8888</span>
            <span className="hidden md:inline">|</span>
            <span className="font-bold">E-mail</span> <span>info@sgea-academy.com</span>
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
      </footer>
    </div>
  );
};

export default Home;
