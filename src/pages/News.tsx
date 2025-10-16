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
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

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

  const categories = ['ALL', 'NEWS', 'EVENT', 'UPDATE', 'SPONSOR', 'PROMOTION', 'RECRUIT', 'EDUCATION'];
  
  const filteredNews = selectedCategory === 'ALL' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  if (selectedNews) {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="pt-24"></div>
        <main className="container mx-auto px-6 py-12 md:py-24">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => setSelectedNews(null)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              전체 소식 목록
            </button>
          </div>

          {/* Article Container */}
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${selectedNews.categoryColor}`}>
                  {selectedNews.category}
                </span>
                <span className="text-gray-400 text-sm">2024.12.20</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {selectedNews.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {selectedNews.summary}
              </p>
            </header>

            {/* Article Content */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-16">
                <div
                  className="prose prose-lg prose-invert max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                />
              </div>
            </div>

            {/* Article Footer */}
            <footer className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="/#contact" className="font-bold text-white">상담 신청하기</a>
              </div>
            </footer>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-16 md:mb-24 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-gray-900"></div>
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-purple-700/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-indigo-700/20 rounded-full blur-3xl"></div>
          <div className="relative px-6 md:px-16 py-16 md:py-24 border border-white/10 rounded-3xl bg-white/5 backdrop-blur">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                <span className="text-white">SGEA</span> <span className="text-purple-400">뉴스</span>
              </h1>
              <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl">
                공지, 강사 소식, 행사 안내, 이벤트 정보를 확인하세요.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="group relative bg-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
              onClick={() => setSelectedNews(news)}
            >
              <div className={`h-2 ${news.categoryColor}`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-fit h-10 ${news.categoryColor} ${news.categoryBorder} border rounded-lg flex items-center justify-center`}
                  >
                    <span className="text-sm px-2 py-1 font-bold text-white">{news.category}</span>
                  </div>
                  <span className="text-gray-400 text-xs">2024.12.20</span>
                </div>
                <h3 className="text-lg font-bold mb-4 text-white group-hover:text-purple-400 transition-colors leading-tight">
                  {news.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.summary}
                </p>
                <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:text-purple-300 transition-colors">
                  자세히 보기
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg">
              선택한 카테고리에 해당하는 뉴스가 없습니다.
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default News;
