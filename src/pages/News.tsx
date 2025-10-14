import React, { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  categoryColor: string;
  categoryBorder: string;
}

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'SGEA 아카데미 오픈 기념 특별 이벤트',
      summary: '아카데미 런칭 기념 무료 체험 강의 및 장기 등록 할인 혜택',
      content: `<h3 class="text-xl font-bold text-purple-500 mb-6 text-center">이벤트 자세히 보기</h3>
      <p class="mb-3 text-sm">· 신규 클래스 프로그램 오픈 기념 최대 혜택 이벤트!</p>
      <p class="mb-2 text-sm">· 이벤트 내용: 신규 수강생 30% 할인, 노트북 10대 증정, 장학금 30%, 상금 ₩2,000,000</p>
      <p class="mb-1 text-xs mt-2">- 창의성과 몰입을 강조한 교육 프로그램, 이스포츠 경기 예시 활용</p>`,
      category: 'NEWS',
      categoryColor: 'bg-blue-500',
      categoryBorder: 'border-blue-500',
    },
    {
      id: 2,
      title: '국가 이스포츠 리그 경기',
      summary: 'OU.GG 대한민국 대표팀 대결 – 우승자 100,000₩ 지급, SGEA 응원단과 함께',
      content: `<h3 class="text-xl font-bold text-purple-500 mb-6 text-center">경기 자세히 보기</h3>
      <p class="mb-3 text-sm">· OU.GG 국가대표팀 경기 및 대한민국 세계대회 챔피언 시연</p>
      <p class="mb-2 text-sm">· AWS 본사 및 글로벌 파트너사와 공동 진행</p>
      <p class="mb-1 text-xs mt-2">- 최정상 선수들의 전략과 경기 포지션 분석</p>`,
      category: 'EVENT',
      categoryColor: 'bg-green-500',
      categoryBorder: 'border-green-500',
    },
    {
      id: 3,
      title: '이스포츠 통합 교육 교재 출판',
      summary: '수학·영어·과학·사회·역사·예술·체육 과목을 결합한 통합 교과 교육 자료',
      content: `<h3 class="text-xl font-bold text-purple-500 mb-6 text-center">교재 자세히 보기</h3>
      <p class="mb-3 text-sm">· 전국 초중고 학생 대상 교육 신청 접수 및 교재 안내</p>
      <p class="mb-2 text-sm">· AWS SA 프로그램과 연계한 교육 이벤트</p>
      <p class="mb-1 text-xs mt-2">- 실습과 조작을 활용한 창의적 학습 지원</p>`,
      category: 'UPDATE',
      categoryColor: 'bg-purple-500',
      categoryBorder: 'border-purple-500',
    },
    {
      id: 4,
      title: 'SGEA 아카데미 경기 스폰서 안내',
      summary: '국내외 최고 권위 대회 스폰서 정보 제공',
      content: `<h3 class="text-xl font-bold text-purple-500 mb-6 text-center">스폰서 자세히 보기</h3>
      <p class="mb-3 text-sm">· 아카데미 대회 우승자에게는 상금과 명예 부여</p>
      <p class="mb-2 text-sm">· 국내외 협력사와 함께 진행</p>
      <p class="mb-1 text-xs mt-2">- 스폰서 혜택 및 참여 방법 안내</p>`,
      category: 'SPONSOR',
      categoryColor: 'bg-red-500',
      categoryBorder: 'border-red-500',
    },
    {
      id: 5,
      title: '래더 랭킹 프로모션 안내',
      summary: '상위 랭커를 위한 특별 혜택 및 이벤트 제공',
      content: `<h3 class="text-xl font-bold text-purple-500 mb-6 text-center">프로모션 자세히 보기</h3>
      <p class="mb-3 text-sm">· 래더 순위 상위 10위 대상 특별 이벤트</p>
      <p class="mb-2 text-sm">· 도시별 참여자 모두에게 혜택 제공</p>
      <p class="mb-1 text-xs mt-2">- 최적의 환경에서 성취감을 경험하도록 설계</p>`,
      category: 'PROMOTION',
      categoryColor: 'bg-yellow-500',
      categoryBorder: 'border-yellow-500',
    },
    {
      id: 6,
      title: 'SGEA 아카데미 신규 수강생 모집',
      summary: '기초부터 전문 과정까지 아카데미 교육 안내',
      content: `<h3 class="text-xl font-bold text-purple-500 mb-6 text-center">모집 자세히 보기</h3>
      <p class="mb-3 text-sm">· 달리기, 단체 종목 등 다양한 활동 프로그램 제공</p>
      <p class="mb-2 text-sm">· 전통 및 현대 교육 요소를 결합</p>
      <p class="mb-1 text-xs mt-2">- 학생 맞춤형 선택과 집중 학습 지원</p>`,
      category: 'RECRUIT',
      categoryColor: 'bg-indigo-500',
      categoryBorder: 'border-indigo-500',
    },
    {
      id: 7,
      title: '집중 동기부여 시스템',
      summary: '학습 몰입과 집중력 향상을 위한 프로그램 안내',
      content: `<h3 class="text-xl font-bold text-purple-500 mb-6 text-center">시스템 자세히 보기</h3>
      <p class="mb-3 text-sm">· 학습 상태 및 진행 상황에 맞춘 맞춤형 동기부여</p>
      <p class="mb-2 text-sm">· 문의 및 지원 안내</p>
      <p class="mb-1 text-xs mt-2">- 학습 효과 극대화를 위한 시스템 제공</p>`,
      category: 'EDUCATION',
      categoryColor: 'bg-teal-500',
      categoryBorder: 'border-teal-500',
    },
  ];

  const categories = ['NEWS', 'EVENT', 'UPDATE', 'SPONSOR', 'PROMOTION', 'RECRUIT', 'EDUCATION'];

  if (selectedNews) {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="pt-24"></div>
        <main className="container mx-auto px-6 py-12 md:py-24">
          <div className="mx-auto rounded-[35px] md:rounded-[50px] shadow-xl bg-gradient-to-r from-white to-blue-50 min-h-screen">
            <div className="p-6 md:p-16">
              <div
                className="py-6 text-gray-900 text-center cursor-pointer"
                onClick={() => setSelectedNews(null)}
              >
                전체 소식 목록
              </div>
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24">
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 text-center">
            <span className="text-purple-500">SGEA</span> 뉴스
          </h1>
          <p className="text-gray-400 text-2xl text-center leading-relaxed">
            공지, 강사 소식, 행사 안내, 이벤트 정보를 확인하세요.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span
                key={category}
                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-purple-500 hover:text-white transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="group bg-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedNews(news)}
            >
              <div className={`h-2 ${news.categoryColor}`}></div>
              <div className="p-8">
                <div
                  className={`w-fit h-10 ${news.categoryColor} ${news.categoryBorder} border rounded-lg mb-6 flex items-center justify-center`}
                >
                  <span className="text-sm px-2 py-1 font-bold text-white">{news.category}</span>
                </div>
                <h3 className="text-lg font-bold mb-4 text-white group-hover:text-purple-500 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-400 text-sm leading-loose mb-4">...{news.summary}...</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default News;
