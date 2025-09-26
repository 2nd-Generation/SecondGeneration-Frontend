import React from 'react';

const Teachers: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Space */}
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* 강사진 소개 */}
        <section className="mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 text-center">
            <span className="text-yellow-400">SGeA</span> 강사진
          </h1>
          <p className="text-center text-xl text-gray-400 mb-12">
            <span className="font-bold">LCK, LPL, LLA, VCJ, PMJL</span> 등 각 종목 e스포츠 메이저리그 출신 강사진이 직접 지도합니다.
          </p>
          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl lg:rounded-3xl shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              e스포츠는 이제 단순 게임이 아닌 하나의 문화이자 직업적 스포츠입니다.  
              <span className="text-yellow-400 font-bold">기본기와 실력이 가장 중요합니다. </span>  
              SGeA 강사진은 이러한 기본기를 탄탄하게 다질 수 있도록 체계적인 교육을 제공합니다.
            </p>
          </div>
        </section>

        {/* 출신 종목 소개 */}
        <section className="mb-20">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            출신 리그 및 종목
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 text-xl font-bold">
            <span>LCK</span>
            <span className="text-gray-600">x</span>
            <span>LPL</span>
            <span className="text-gray-600">x</span>
            <span>LLA</span>
            <span className="text-gray-600">x</span>
            <span>VCJ</span>
            <span className="text-gray-600">x</span>
            <span>PMJL</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Teachers;
