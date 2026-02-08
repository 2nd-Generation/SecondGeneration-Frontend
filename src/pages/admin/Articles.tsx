import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  type ArticleListResponse,
  type ArticleCreateRequest,
  type ArticleCategory,
} from '../../api/article';
import { uploadImage } from '../../api/image';
import { fadeInUp, staggerUp, fadeInSoft } from '../../utils/motionPresets';
import {
  formatDateToLocalDate,
  normalizeInteger,
  normalizeNull,
} from '../../utils/mapper';
import {
  validateRequiredFields,
  validateDate,
  validateDateRange,
  validateNumberRange,
} from '../../utils/validator';

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleListResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | ''>('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<ArticleListResponse | null>(null);
  const [error, setError] = useState('');

  const categories: ArticleCategory[] = ['NEWS', 'EVENT', 'RECRUIT', 'TEST_UPDATE'];

  useEffect(() => {
    loadArticles();
  }, [selectedCategory]);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const data = await getArticles(selectedCategory || undefined);
      setArticles(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : '공지를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteArticle(id);
      await loadArticles();
    } catch (err) {
      setError(err instanceof Error ? err.message : '삭제에 실패했습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={fadeInSoft}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.header
            className="flex justify-between items-center mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div>
              <Link
                to="/admin/dashboard"
                className="text-purple-400 hover:text-purple-300 mb-4 inline-block"
              >
                ← 대시보드로 돌아가기
              </Link>
              <h1 className="text-4xl font-black mb-2">공지 관리</h1>
              <p className="text-gray-400">공지사항을 생성, 수정, 삭제할 수 있습니다.</p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-semibold"
            >
              + 새 공지 생성
            </button>
          </motion.header>

          {/* Category Filter */}
          <motion.div
            className="mb-6 flex flex-wrap gap-3"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === ''
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              전체
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mb-6 bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          {/* Articles List */}
          {loading ? (
            <div className="text-center py-16 text-gray-400">로딩 중...</div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerUp}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {articles.map((article) => (
                  <motion.div
                    key={article.id}
                    variants={fadeInUp}
                    layout
                    className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-600 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingArticle(article)}
                          className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => handleDelete(article.id)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.subTitle}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{new Date(article.postedAt).toLocaleDateString('ko-KR')}</span>
                      {article.popup && (
                        <span className="px-2 py-1 bg-yellow-600/30 text-yellow-400 rounded">
                          팝업
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!loading && articles.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              공지가 없습니다. 새 공지를 생성해주세요.
            </div>
          )}
        </motion.div>
      </div>

      {/* Create/Edit Modal */}
      <AnimatePresence>
        {(isCreateModalOpen || editingArticle) && (
          <ArticleModal
            article={editingArticle}
            onClose={() => {
              setIsCreateModalOpen(false);
              setEditingArticle(null);
            }}
            onSuccess={() => {
              setIsCreateModalOpen(false);
              setEditingArticle(null);
              loadArticles();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface ArticleModalProps {
  article: ArticleListResponse | null;
  onClose: () => void;
  onSuccess: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<ArticleCreateRequest>({
    category: article?.category || 'NEWS',
    title: article?.title || '',
    subTitle: article?.subTitle || '',
    content: '',
    thumbnailUrl: article?.thumbnailUrl || null,
    postedAt: article?.postedAt || new Date().toISOString().split('T')[0],
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    priority: article?.priority || 0,
    popup: article?.popup || false,
  });
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [error, setError] = useState('');

  const categories: ArticleCategory[] = ['NEWS', 'EVENT', 'RECRUIT', 'TEST_UPDATE'];

  // 공지 수정 시 상세 정보 로드
  useEffect(() => {
    if (article) {
      const loadArticleDetail = async () => {
        try {
          setLoadingDetail(true);
          const detail = await getArticle(article.id);
          setFormData({
            category: detail.category,
            title: detail.title,
            subTitle: detail.subTitle,
            content: detail.safeHtmlContent || '',
            thumbnailUrl: detail.thumbnailUrl || null,
            postedAt: detail.postedAt,
            startDate: detail.startDate,
            endDate: detail.endDate,
            priority: detail.priority,
            popup: detail.popup,
          });
        } catch (err) {
          setError(err instanceof Error ? err.message : '공지 정보를 불러오는데 실패했습니다.');
        } finally {
          setLoadingDetail(false);
        }
      };
      loadArticleDetail();
    } else {
      // 새 공지 생성 시 초기화
      setFormData({
        category: 'NEWS',
        title: '',
        subTitle: '',
        content: '',
        thumbnailUrl: null,
        postedAt: new Date().toISOString().split('T')[0],
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        priority: 0,
        popup: false,
      });
    }
  }, [article]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 1. 필수 필드 검증
    const requiredValidation = validateRequiredFields({
      제목: formData.title,
      내용: formData.content,
    });
    if (!requiredValidation.isValid) {
      setError(requiredValidation.error || '필수 필드를 입력해주세요.');
      return;
    }

    // 2. 날짜 형식 검증
    const postedAtValidation = validateDate(formData.postedAt, '게시일');
    if (!postedAtValidation.isValid) {
      setError(postedAtValidation.error || '게시일이 유효하지 않습니다.');
      return;
    }

    const startDateValidation = validateDate(formData.startDate, '시작일');
    if (!startDateValidation.isValid) {
      setError(startDateValidation.error || '시작일이 유효하지 않습니다.');
      return;
    }

    const endDateValidation = validateDate(formData.endDate, '종료일');
    if (!endDateValidation.isValid) {
      setError(endDateValidation.error || '종료일이 유효하지 않습니다.');
      return;
    }

    // 3. 날짜 범위 검증
    const dateRangeValidation = validateDateRange(formData.startDate, formData.endDate);
    if (!dateRangeValidation.isValid) {
      setError(dateRangeValidation.error || '날짜 범위가 유효하지 않습니다.');
      return;
    }

    // 4. 우선순위 검증
    const priorityValidation = validateNumberRange(formData.priority, 0, 9999, '우선순위');
    if (!priorityValidation.isValid) {
      setError(priorityValidation.error || '우선순위가 유효하지 않습니다.');
      return;
    }

    // 5. 데이터 변환 및 정규화
    const submitData: ArticleCreateRequest = {
      ...formData,
      postedAt: formatDateToLocalDate(formData.postedAt),
      startDate: formatDateToLocalDate(formData.startDate),
      endDate: formatDateToLocalDate(formData.endDate),
      priority: normalizeInteger(formData.priority, 0),
      thumbnailUrl: normalizeNull(formData.thumbnailUrl),
    };

    // 6. 서버로 전송
    try {
      setLoading(true);
      if (article) {
        await updateArticle(article.id, submitData);
      } else {
        await createArticle(submitData);
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : '저장에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleThumbnailUpload = async (file: File) => {
    try {
      setUploadingThumbnail(true);
      const imageUrl = await uploadImage(file);
      // URL이 제대로 반환되었는지 확인하고 설정
      if (imageUrl && typeof imageUrl === 'string') {
        setFormData({ ...formData, thumbnailUrl: imageUrl });
      } else {
        throw new Error('이미지 URL을 받아오지 못했습니다.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '이미지 업로드에 실패했습니다.');
    } finally {
      setUploadingThumbnail(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleThumbnailUpload(file);
    }
    e.target.value = '';
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6">
          {article ? '공지 수정' : '새 공지 생성'}
        </h2>

        {loadingDetail ? (
          <div className="text-center py-16 text-gray-400">로딩 중...</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">카테고리</label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value as ArticleCategory })
              }
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">제목</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">부제목</label>
            <input
              type="text"
              value={formData.subTitle}
              onChange={(e) => setFormData({ ...formData, subTitle: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">썸네일 이미지 URL</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.thumbnailUrl || ''}
                onChange={(e) =>
                  setFormData({ ...formData, thumbnailUrl: e.target.value || null })
                }
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="null 또는 URL"
              />
              <label className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg cursor-pointer transition-colors text-sm whitespace-nowrap">
                {uploadingThumbnail ? '업로드 중...' : '업로드'}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                  disabled={uploadingThumbnail}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">내용</label>
            <div className="ckeditor-wrapper">
              <CKEditor
                editor={ClassicEditor as any}
                data={formData.content}
                onChange={(_event, editor) => {
                  const data = editor.getData();
                  setFormData({ ...formData, content: data });
                }}
                config={{
                  toolbar: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'outdent',
                    'indent',
                    '|',
                    'blockQuote',
                    'insertTable',
                    '|',
                    'undo',
                    'redo',
                  ],
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">게시일</label>
              <input
                type="date"
                value={formData.postedAt}
                onChange={(e) => setFormData({ ...formData, postedAt: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">우선순위</label>
              <input
                type="number"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: parseInt(e.target.value) || 0 })
                }
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">시작일</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">종료일</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="popup"
              checked={formData.popup}
              onChange={(e) => setFormData({ ...formData, popup: e.target.checked })}
              className="w-4 h-4"
            />
            <label htmlFor="popup" className="text-sm">
              팝업으로 표시
            </label>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? '저장 중...' : '저장'}
            </button>
          </div>
        </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Articles;

