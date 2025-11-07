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

  const newsData: NewsItem[] = [];

  const categories = ['ALL', 'NEWS', 'EVENT', 'RECRUIT'];
  
  const filteredNews = selectedCategory === 'ALL' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  if (selectedNews) {
    return (
      <div className="bg-custom-bg text-white min-h-screen">
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
    <div className="bg-custom-bg text-white min-h-screen">
      <div className="pt-24"></div>

      <main className="container mx-auto px-6 py-12 md:py-24">
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
