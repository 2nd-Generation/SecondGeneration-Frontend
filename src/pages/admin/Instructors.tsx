import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  getInstructors,
  getInstructor,
  createInstructor,
  updateInstructor,
  deleteInstructor,
  type InstructorListResponse,
  type InstructorCreateRequest,
  type CareerHistoryRequest,
} from '../../api/instructor';
import { fadeInUp, staggerUp, fadeInSoft } from '../../utils/motionPresets';

const Instructors: React.FC = () => {
  const [instructors, setInstructors] = useState<InstructorListResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingInstructor, setEditingInstructor] = useState<number | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadInstructors();
  }, []);

  const loadInstructors = async () => {
    try {
      setLoading(true);
      const data = await getInstructors();
      setInstructors(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : '강사 목록을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteInstructor(id);
      await loadInstructors();
    } catch (err) {
      setError(err instanceof Error ? err.message : '삭제에 실패했습니다.');
    }
  };

  const handleEdit = async (id: number) => {
    try {
      await getInstructor(id);
      setEditingInstructor(id);
      // 모달이 열리면서 detail 데이터를 사용할 수 있도록 함
    } catch (err) {
      setError(err instanceof Error ? err.message : '강사 정보를 불러오는데 실패했습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
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
                className="text-blue-400 hover:text-blue-300 mb-4 inline-block"
              >
                ← 대시보드로 돌아가기
              </Link>
              <h1 className="text-4xl font-black mb-2">강사 관리</h1>
              <p className="text-gray-400">강사 정보를 생성, 수정, 삭제할 수 있습니다.</p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold"
            >
              + 새 강사 추가
            </button>
          </motion.header>

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

          {/* Instructors List */}
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
                {instructors.map((instructor) => (
                  <motion.div
                    key={instructor.id}
                    variants={fadeInUp}
                    layout
                    className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all"
                  >
                    {instructor.profileImgUrl && (
                      <img
                        src={instructor.profileImgUrl}
                        alt={instructor.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{instructor.name}</h3>
                        <p className="text-blue-400 text-sm">@{instructor.nickname}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(instructor.id)}
                          className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => handleDelete(instructor.id)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {instructor.games.map((game) => (
                        <span
                          key={game.id}
                          className="px-2 py-1 bg-blue-600/30 text-blue-300 rounded text-xs"
                        >
                          {game.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!loading && instructors.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              강사가 없습니다. 새 강사를 추가해주세요.
            </div>
          )}
        </motion.div>
      </div>

      {/* Create/Edit Modal */}
      <AnimatePresence>
        {(isCreateModalOpen || editingInstructor !== null) && (
          <InstructorModal
            instructorId={editingInstructor}
            onClose={() => {
              setIsCreateModalOpen(false);
              setEditingInstructor(null);
            }}
            onSuccess={() => {
              setIsCreateModalOpen(false);
              setEditingInstructor(null);
              loadInstructors();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface InstructorModalProps {
  instructorId: number | null;
  onClose: () => void;
  onSuccess: () => void;
}

const InstructorModal: React.FC<InstructorModalProps> = ({
  instructorId,
  onClose,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<InstructorCreateRequest>({
    name: '',
    nickname: '',
    profileImgUrl: null,
    sgeaLogoImgUrl: null,
    content: '',
    careers: [],
    gameNames: '',
  });

  useEffect(() => {
    if (instructorId) {
      loadInstructorDetail();
    }
  }, [instructorId]);

  const loadInstructorDetail = async () => {
    if (!instructorId) return;

    try {
      setLoadingDetail(true);
      const detail = await getInstructor(instructorId);
      setFormData({
        name: detail.name,
        nickname: detail.nickname,
        profileImgUrl: detail.profileImgUrl || null,
        sgeaLogoImgUrl: detail.sgeaLogoImgUrl || null,
        content: detail.content || '',
        careers: detail.careers.map((career) => ({
          period: career.period,
          teamName: career.teamName,
          roleType: career.roleType,
          logoImgUrl: career.logoImgUrl || null,
        })),
        gameNames: detail.games.map((g) => g.name).join(', '),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : '강사 정보를 불러오는데 실패했습니다.');
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.nickname) {
      setError('이름과 닉네임을 입력해주세요.');
      return;
    }

    try {
      setLoading(true);
      if (instructorId) {
        await updateInstructor(instructorId, formData);
      } else {
        await createInstructor(formData);
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : '저장에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const addCareer = () => {
    setFormData({
      ...formData,
      careers: [
        ...formData.careers,
        {
          period: '',
          teamName: '',
          roleType: 'PLAYER',
          logoImgUrl: null,
        },
      ],
    });
  };

  const removeCareer = (index: number) => {
    setFormData({
      ...formData,
      careers: formData.careers.filter((_, i) => i !== index),
    });
  };

  const updateCareer = (index: number, field: keyof CareerHistoryRequest, value: string | null) => {
    const newCareers = [...formData.careers];
    newCareers[index] = { ...newCareers[index], [field]: value };
    setFormData({ ...formData, careers: newCareers });
  };

  if (loadingDetail) {
    return (
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-white">로딩 중...</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-800 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6">
          {instructorId ? '강사 정보 수정' : '새 강사 추가'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">이름</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">닉네임</label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">프로필 이미지 URL</label>
              <input
                type="text"
                value={formData.profileImgUrl || ''}
                onChange={(e) =>
                  setFormData({ ...formData, profileImgUrl: e.target.value || null })
                }
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="null 또는 URL"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">SGEA 로고 이미지 URL</label>
              <input
                type="text"
                value={formData.sgeaLogoImgUrl || ''}
                onChange={(e) =>
                  setFormData({ ...formData, sgeaLogoImgUrl: e.target.value || null })
                }
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="null 또는 URL"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">소개 내용</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">게임 목록 (쉼표로 구분)</label>
            <input
              type="text"
              value={formData.gameNames}
              onChange={(e) => setFormData({ ...formData, gameNames: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              placeholder="예: Overwatch2, Valorant"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold">경력</label>
              <button
                type="button"
                onClick={addCareer}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
              >
                + 경력 추가
              </button>
            </div>
            <div className="space-y-3">
              {formData.careers.map((career, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 space-y-2"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">경력 {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeCareer(index)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      삭제
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={career.period}
                      onChange={(e) => updateCareer(index, 'period', e.target.value)}
                      placeholder="기간 (예: 2018-2020)"
                      className="px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white text-sm"
                    />
                    <input
                      type="text"
                      value={career.teamName}
                      onChange={(e) => updateCareer(index, 'teamName', e.target.value)}
                      placeholder="팀 이름"
                      className="px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={career.roleType}
                      onChange={(e) => updateCareer(index, 'roleType', e.target.value)}
                      className="px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white text-sm"
                    >
                      <option value="PLAYER">PLAYER</option>
                      <option value="HEAD_COACH">HEAD_COACH</option>
                      <option value="COACH">COACH</option>
                      <option value="ANALYST">ANALYST</option>
                      <option value="MANAGER">MANAGER</option>
                    </select>
                    <input
                      type="text"
                      value={career.logoImgUrl || ''}
                      onChange={(e) => updateCareer(index, 'logoImgUrl', e.target.value || null)}
                      placeholder="로고 이미지 URL"
                      className="px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
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
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? '저장 중...' : '저장'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Instructors;

