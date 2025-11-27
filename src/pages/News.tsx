import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeInSoft,
  fadeInUp,
  fadeInScale,
  staggerUp,
  easeEmphasized,
} from '../utils/motionPresets';
import { getArticles, getArticle, type ArticleListResponse, type ArticleCategory, type ArticleDetailResponse } from '../api/article';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  categoryColor: string;
  categoryBorder: string;
  postedAt: string;
}

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [articles, setArticles] = useState<ArticleListResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const categories = ['ALL', 'NEWS', 'EVENT', 'RECRUIT', 'TEST_UPDATE'];

  // 카테고리 색상 매핑
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'NEWS':
        return 'bg-blue-600';
      case 'EVENT':
        return 'bg-purple-600';
      case 'RECRUIT':
        return 'bg-green-600';
      case 'TEST_UPDATE':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getCategoryBorder = (category: string): string => {
    switch (category) {
      case 'NEWS':
        return 'border-blue-500';
      case 'EVENT':
        return 'border-purple-500';
      case 'RECRUIT':
        return 'border-green-500';
      case 'TEST_UPDATE':
        return 'border-yellow-500';
      default:
        return 'border-gray-500';
    }
  };

  // API에서 공지사항 목록 가져오기
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        setError('');
        const category = selectedCategory === 'ALL' ? undefined : (selectedCategory as ArticleCategory);
        const data = await getArticles(category);
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '공지사항을 불러오는데 실패했습니다.');
        console.error('공지사항 로드 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [selectedCategory]);

  // ArticleListResponse를 NewsItem으로 변환
  const convertToNewsItem = (article: ArticleListResponse): NewsItem => {
    return {
      id: article.id,
      title: article.title,
      summary: article.subTitle,
      content: '', // 상세 내용은 별도 API 호출 필요
      category: article.category,
      categoryColor: getCategoryColor(article.category),
      categoryBorder: getCategoryBorder(article.category),
      postedAt: article.postedAt,
    };
  };

  const newsData: NewsItem[] = articles.map(convertToNewsItem);
  
  const filteredNews = selectedCategory === 'ALL' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  // 상세 조회 상태
  const [articleDetail, setArticleDetail] = useState<ArticleDetailResponse | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // 상세 페이지에서 공지사항 상세 정보 로드
  useEffect(() => {
    if (selectedNews) {
      const loadArticleDetail = async () => {
        try {
          setLoadingDetail(true);
          const detail = await getArticle(selectedNews.id);
          setArticleDetail(detail);
        } catch (err) {
          console.error('공지사항 상세 로드 실패:', err);
          // 에러가 발생해도 기본 정보는 표시
        } finally {
          setLoadingDetail(false);
        }
      };
      loadArticleDetail();
    } else {
      setArticleDetail(null);
    }
  }, [selectedNews]);

  if (selectedNews) {
    const displayContent = articleDetail?.safeHtmlContent || selectedNews.content;
    const displayTitle = selectedNews.title;
    const displaySummary = selectedNews.summary;

    return (
      <div className="bg-custom-bg text-white min-h-screen">
        <div className="pt-24"></div>
        <motion.main
          className="container mx-auto px-6 py-12 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeEmphasized }}
        >
          {/* Back Button */}
          <motion.div className="mb-8" variants={fadeInUp} initial="hidden" animate="visible">
            <motion.button
              onClick={() => setSelectedNews(null)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              전체 소식 목록
            </motion.button>
          </motion.div>

          {/* Article Container */}
          <motion.article
            className="max-w-4xl mx-auto"
            variants={fadeInSoft}
            initial="hidden"
            animate="visible"
          >
            {/* Article Header */}
            <motion.header className="mb-12" variants={staggerUp} initial="hidden" animate="visible">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${selectedNews.categoryColor}`}>
                  {selectedNews.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(selectedNews.postedAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {displayTitle}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {displaySummary}
              </p>
            </motion.header>

            {/* Article Content */}
            {loadingDetail ? (
              <motion.div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden p-16 text-center"
                variants={fadeInScale}
                initial="hidden"
                animate="visible"
              >
                <div className="text-gray-400">로딩 중...</div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                variants={fadeInScale}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="p-8 md:p-16" variants={fadeInSoft} initial="hidden" animate="visible">
                  {displayContent ? (
                    <div
                      className="prose prose-lg prose-invert max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
                      dangerouslySetInnerHTML={{ __html: displayContent }}
                    />
                  ) : (
                    <div className="text-gray-500">내용이 없습니다.</div>
                  )}
                </motion.div>
              </motion.div>
            )}

            {/* Article Footer */}
            <motion.footer className="mt-12 text-center" variants={fadeInUp} initial="hidden" animate="visible">
              <motion.div
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="/#contact" className="font-bold text-white">상담 신청하기</a>
              </motion.div>
            </motion.footer>
          </motion.article>
        </motion.main>
      </div>
    );
  }

  return (
    <div className="bg-custom-bg text-white min-h-screen">
      <div className="pt-24"></div>

      <motion.main
        className="container mx-auto px-6 py-12 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: easeEmphasized }}
      >
        {/* Category Filter */}
        <motion.section
          className="mb-12"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Error Message */}
        {error && (
          <motion.div
            className="mb-8 bg-red-500/20 border border-red-500 text-red-400 px-6 py-4 rounded-lg text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {error}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div
            className="text-center py-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="text-gray-400 text-lg">로딩 중...</div>
          </motion.div>
        )}

        {/* News Grid */}
        {!loading && (
          <motion.section
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredNews.map((news) => (
              <motion.article
                key={news.id}
                layout
                className="group relative bg-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                onClick={() => setSelectedNews(news)}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              >
                <div className={`h-2 ${news.categoryColor}`}></div>
                <div className="w-full h-48 overflow-hidden bg-gray-700 relative">
                  {(() => {
                    const article = articles.find(a => a.id === news.id);
                    const thumbnailUrl = article?.thumbnailUrl;
                    // 썸네일 URL이 유효한지 확인 (null, undefined, 빈 문자열, 'null' 문자열 체크)
                    const hasValidThumbnail = thumbnailUrl && 
                      thumbnailUrl.trim() !== '' && 
                      thumbnailUrl !== 'null' &&
                      thumbnailUrl !== 'undefined';
                    const imageFailed = imageErrors.has(news.id);
                    
                    if (hasValidThumbnail && !imageFailed) {
                      return (
                        <>
                          <img
                            src={thumbnailUrl}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={() => {
                              // 이미지 로드 실패 시 에러 상태에 추가
                              setImageErrors(prev => new Set(prev).add(news.id));
                            }}
                          />
                        </>
                      );
                    }
                    // 썸네일이 없거나 이미지 로드 실패 시 placeholder 표시
                    return (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    );
                  })()}
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-fit h-10 ${news.categoryColor} ${news.categoryBorder} border rounded-lg flex items-center justify-center`}
                    >
                      <span className="text-sm px-2 py-1 font-bold text-white">{news.category}</span>
                    </div>
                    <span className="text-gray-400 text-xs">
                      {new Date(news.postedAt).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })}
                    </span>
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
              </motion.article>
            ))}
            </AnimatePresence>
          </motion.section>
        )}

        {/* Empty State */}
        {!loading && filteredNews.length === 0 && (
          <motion.div
            className="text-center py-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-lg">
              선택한 카테고리에 해당하는 뉴스가 없습니다.
            </div>
          </motion.div>
        )}
      </motion.main>
    </div>
  );
};

export default News;
