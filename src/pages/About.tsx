import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-custom-bg text-white min-h-screen">
      {/* Header Space */}
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24 space-y-20">
        <section className="relative overflow-hidden mb-20 md:mb-32">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-custom-bg via-custom-bg/95 to-violet-900/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-light-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Main Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
            <div className="text-center">
              
              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
                <span className="text-white block mb-2">게임으로 세상과</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-accent-light-purple">
                  소통하고, 삶을 배웁니다
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                SGEA는 단순히 게임을 잘하는 법만 가르치는 곳이 아닙니다.<br />
                <span className="text-violet-300 font-semibold">게임이라는 매개체를 통해</span> 아이들이 삶에서도 응용할 수 있는 성장의 방법을 배우도록 체계적인 커리큘럼을 운영합니다.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25">
                  프로그램 보기
                </button>
                <button className="px-8 py-4 border-2 border-violet-500/50 hover:border-violet-400 text-violet-300 hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                  강사진 소개
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 rounded-full border border-violet-500/20 mb-6">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                <span className="text-violet-300 text-sm font-semibold">EDUCATION PHILOSOPHY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <span className="text-violet-400">요즘 아이들은 게임을 통해</span><br />
                <span className="text-white">세상과 소통합니다</span>
              </h2>
            </div>
            
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">협동과 소통</h3>
                      <p className="text-gray-300 leading-relaxed">
                        그 안에서 <span className="text-violet-400 font-semibold">예절을 배우고, 협동을 배우며, 노력하는 방법</span>을 익혀갑니다.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">체계적 교육</h3>
                      <p className="text-gray-300 leading-relaxed">
                        저희 학원은 단순히 게임을 잘하는 법만 가르치는 곳이 아닙니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Highlight Box */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-accent-light-purple rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-violet-500/10 to-violet-600/10 p-8 rounded-2xl border border-violet-500/30 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">게임이라는 매개체를 통해</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      아이들이 삶에서도 응용할 수 있는<br />
                      <span className="text-violet-300 font-semibold">성장의 방법을 배우도록</span><br />
                      체계적인 커리큘럼을 운영합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 rounded-full border border-accent-gold/20 mb-6">
                <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></div>
                <span className="text-accent-gold text-sm font-semibold">EFFORT HABITUALIZATION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <span className="text-violet-400">노력의 습관화</span>, 그리고 그 이후
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">핵심 가치</h3>
                      <p className="text-gray-300 leading-relaxed">
                        저희가 가장 중요하게 생각하는 건 <span className="text-accent-gold font-semibold">'노력의 습관화'</span>입니다.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">긍정적 자아 인식</h3>
                      <p className="text-gray-300 leading-relaxed">
                        아이들이 게임을 그만두는 시점이 오더라도, 그동안 쌓아온 노력과 성취의 기억은 <span className="text-violet-400 font-semibold">"나도 이렇게 열심히 할 수 있는 사람이다"</span>라는 긍정적인 자아 인식으로 남습니다.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-light-purple/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent-light-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">삶의 발판</h3>
                      <p className="text-gray-300 leading-relaxed">
                        이런 마음가짐은 프로게이머를 꿈꾸는 길뿐 아니라, <span className="text-accent-light-purple font-semibold">삶의 모든 목표를 이루는 발판</span>이 되어줍니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Gaming Stats Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-center">
                    {/* Gaming Progress Visualization */}
                    <div className="mb-8">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-700"/>
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" 
                                  strokeDasharray="251.2" strokeDashoffset="37.68" 
                                  className="text-accent-gold transition-all duration-1000 ease-out" 
                                  strokeLinecap="round"/>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-black text-accent-gold">85%</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">성장 진행률</h3>
                      <p className="text-gray-400 text-sm">노력의 습관화 달성도</p>
                    </div>
                    
                    {/* Gaming Controller Icon */}
                    <div className="w-20 h-20 bg-accent-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">성장의 기억</h3>
                    <p className="text-gray-300 leading-relaxed">
                      노력과 성취의 경험은<br />
                      <span className="text-accent-gold font-semibold">평생 가는 자산</span>이 됩니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-accent-light-purple to-accent-gold rounded-3xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-12 md:p-16 rounded-3xl border border-gray-700/50 backdrop-blur-sm text-center">
                {/* Gaming Achievement Badge */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-gold/20 to-yellow-500/20 rounded-3xl mb-8 border border-accent-gold/30">
                  <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  저희 학원은 게임을 가르치지만,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-accent-gold">
                    결국 삶을 가르칩니다
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
                  아이가 스스로 방향을 찾고, 노력의 가치를 깨닫는 성장의 공간<br />
                  <span className="text-white font-bold text-2xl">그것이 바로 저희가 지향하는 교육입니다.</span>
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="px-10 py-4 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25">
                    프로그램 신청하기
                  </button>
                  <button className="px-10 py-4 border-2 border-accent-gold/50 hover:border-accent-gold text-accent-gold hover:text-white hover:bg-accent-gold font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                    무료 상담 신청
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
