import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitGoogleForm, type GoogleFormSubmitRequest } from '../api/googleForm';

interface GoogleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_FORM_DATA: Omit<GoogleFormSubmitRequest, 'valorantClass' | 'valorantTier' | 'valorantPosition' | 'overwatchClass' | 'overwatchTier' | 'overwatchPosition' | 'guardianName' | 'guardianPhoneNumber'> = {
  privacyAgreement: '',
  desiredGame: '',
  gameAccount: '',
  name: '',
  gender: '',
  birthDate: '',
  address: '',
  phoneNumber: '',
  discordId: '',
  knowSgeaPath: '',
};

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<GoogleFormSubmitRequest>(INITIAL_FORM_DATA);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [knowSgeaPathOther, setKnowSgeaPathOther] = useState('');

  // 선택된 게임에 따라 관련 필드 표시 (메모이제이션)
  const hasValorant = useMemo(() => formData.desiredGame === 'VALORANT', [formData.desiredGame]);
  const hasOverwatch = useMemo(() => formData.desiredGame === 'OVERWATCH', [formData.desiredGame]);

  const handleClose = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setKnowSgeaPathOther('');
    setError('');
    setSuccess(false);
    onClose();
  }, [onClose]);

  // 게임 선택 핸들러 (radio button으로 하나만 선택 가능)
  const handleGameChange = useCallback((game: 'VALORANT' | 'OVERWATCH') => {
    setFormData((prev) => {
      // 게임 변경 시 이전 게임의 필드 초기화
      if (game === 'VALORANT') {
        const { overwatchClass, overwatchTier, overwatchPosition, desiredGame, ...rest } = prev;
        return { ...rest, desiredGame: 'VALORANT' };
      } else {
        const { valorantClass, valorantTier, valorantPosition, desiredGame, ...rest } = prev;
        return { ...rest, desiredGame: 'OVERWATCH' };
      }
    });
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 필수 필드 검증
      if (!formData.privacyAgreement) {
        throw new Error('개인정보 동의는 필수입니다.');
      }
      if (!formData.desiredGame) {
        throw new Error('원하는 게임을 선택해주세요.');
      }
      if (!formData.name || !formData.gender || !formData.birthDate || 
          !formData.address || !formData.phoneNumber || !formData.discordId || !formData.gameAccount) {
        throw new Error('모든 필수 항목을 입력해주세요.');
      }

      // 선택된 게임별 필수 필드 검증
      if (hasValorant && (!formData.valorantClass || !formData.valorantTier || !formData.valorantPosition)) {
        throw new Error('VALORANT 관련 정보를 모두 입력해주세요.');
      }
      if (hasOverwatch && (!formData.overwatchClass || !formData.overwatchTier || !formData.overwatchPosition)) {
        throw new Error('OVERWATCH 관련 정보를 모두 입력해주세요.');
      }

      // API 요청 데이터 구성 (선택되지 않은 게임의 필드는 제외)
      const submitData: GoogleFormSubmitRequest = {
        privacyAgreement: formData.privacyAgreement,
        desiredGame: formData.desiredGame,
        gameAccount: formData.gameAccount,
        name: formData.name,
        gender: formData.gender,
        birthDate: formData.birthDate,
        address: formData.address,
        phoneNumber: formData.phoneNumber,
        discordId: formData.discordId,
        ...(hasValorant && {
          valorantClass: formData.valorantClass!,
          valorantTier: formData.valorantTier!,
          valorantPosition: formData.valorantPosition!,
        }),
        ...(hasOverwatch && {
          overwatchClass: formData.overwatchClass!,
          overwatchTier: formData.overwatchTier!,
          overwatchPosition: formData.overwatchPosition!,
        }),
        ...(formData.knowSgeaPath && { knowSgeaPath: formData.knowSgeaPath }),
        ...(formData.guardianName && { guardianName: formData.guardianName }),
        ...(formData.guardianPhoneNumber && { guardianPhoneNumber: formData.guardianPhoneNumber }),
      };

      await submitGoogleForm(submitData);
      setSuccess(true);
      
      // 2초 후 모달 닫기
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : '제출에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [formData, hasValorant, hasOverwatch, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">수강 신청</h2>
                <p className="text-sm text-gray-500">정보를 입력해주세요</p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {success ? (
              <div className="text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">신청이 완료되었습니다!</h3>
                <p className="text-gray-600 text-lg">빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 개인정보 동의 */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacyAgreement"
                      checked={formData.privacyAgreement === '동의'}
                      onChange={(e) => setFormData({ ...formData, privacyAgreement: e.target.checked ? '동의' : '' })}
                      className="mt-0.5 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
                      required
                    />
                    <label htmlFor="privacyAgreement" className="text-sm text-gray-700 cursor-pointer flex-1">
                      <strong className="text-purple-700 font-semibold">개인정보 수집 및 이용에 동의합니다.</strong>
                      <span className="block mt-1.5 text-gray-600 leading-relaxed">신청서 접수를 위해 개인정보를 수집 및 이용합니다.</span>
                    </label>
                  </div>
                </div>

                {/* 기본 정보 */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">기본 정보</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        이름 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none text-gray-900"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        성별 <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none bg-white text-gray-900"
                        required
                      >
                        <option value="">선택해주세요</option>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        생년월일 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none text-gray-900"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-gray-900"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        주소 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none text-gray-900"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Discord ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.discordId}
                        onChange={(e) => setFormData({ ...formData, discordId: e.target.value })}
                        placeholder="username#1234"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-gray-900"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        SGEA를 알게 된 경로
                      </label>
                      <select
                        value={formData.knowSgeaPath || ''}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '기타') {
                            setFormData({ ...formData, knowSgeaPath: '기타' });
                          } else {
                            setFormData({ ...formData, knowSgeaPath: value });
                            setKnowSgeaPathOther('');
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none bg-white text-gray-900"
                      >
                        <option value="">선택해주세요</option>
                        <option value="지인 추천">지인 추천</option>
                        <option value="인터넷 검색(네이버 / 구글)">인터넷 검색(네이버 / 구글)</option>
                        <option value="SGEA 인스타그램">SGEA 인스타그램</option>
                        <option value="타 인스타그램">타 인스타그램</option>
                        <option value="기타">기타(자유롭게 작성)</option>
                      </select>
                      {formData.knowSgeaPath === '기타' && (
                        <input
                          type="text"
                          value={knowSgeaPathOther}
                          onChange={(e) => {
                            setKnowSgeaPathOther(e.target.value);
                            setFormData({ ...formData, knowSgeaPath: e.target.value ? `기타: ${e.target.value}` : '기타' });
                          }}
                          placeholder="자유롭게 작성해주세요"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-gray-900 mt-2"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* 게임 정보 */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">게임 정보</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      원하는 게임 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="game"
                          value="VALORANT"
                          checked={hasValorant}
                          onChange={() => handleGameChange('VALORANT')}
                          className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-2 focus:ring-purple-500 cursor-pointer"
                        />
                        <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">VALORANT</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="game"
                          value="OVERWATCH"
                          checked={hasOverwatch}
                          onChange={() => handleGameChange('OVERWATCH')}
                          className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-2 focus:ring-purple-500 cursor-pointer"
                        />
                        <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">OVERWATCH</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      게임 계정 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.gameAccount}
                      onChange={(e) => setFormData({ ...formData, gameAccount: e.target.value })}
                      placeholder="예: SGEA#31281"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-gray-900"
                      required
                    />
                  </div>
                </div>

                {/* VALORANT 정보 */}
                {hasValorant && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                      <h3 className="text-xl font-bold text-gray-900">VALORANT 정보</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          반 선택 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.valorantClass || ''}
                          onChange={(e) => setFormData({ ...formData, valorantClass: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white text-gray-900"
                          required={hasValorant}
                        >
                          <option value="">선택해주세요</option>
                          <option value="1:1 프리미엄 집중반 주1회">1:1 프리미엄 집중반 주1회</option>
                          <option value="1:1 프리미엄 집중반 주2회">1:1 프리미엄 집중반 주2회</option>
                          <option value="1:5 팀 그룹 취미반">1:5 팀 그룹 취미반</option>
                          <option value="1:5 팀 그룹 성장반">1:5 팀 그룹 성장반</option>
                          <option value="1:5 팀 그룹 프로반">1:5 팀 그룹 프로반</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          티어 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.valorantTier || ''}
                          onChange={(e) => setFormData({ ...formData, valorantTier: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white text-gray-900"
                          required={hasValorant}
                        >
                          <option value="">선택해주세요</option>
                          <option value="레디언트 (Radiant)">레디언트 (Radiant)</option>
                          <option value="불멸 (Immortal)">불멸 (Immortal)</option>
                          <option value="초월자 (Ascendant)">초월자 (Ascendant)</option>
                          <option value="다이아몬드 (Diamond)">다이아몬드 (Diamond)</option>
                          <option value="플래티넘 (Platinum)">플래티넘 (Platinum)</option>
                          <option value="골드 (Gold)">골드 (Gold)</option>
                          <option value="실버 (Silver)">실버 (Silver)</option>
                          <option value="브론즈 (Bronze)">브론즈 (Bronze)</option>
                          <option value="아이언 (Iron)">아이언 (Iron)</option>
                          <option value="언랭 (Unranked)">언랭 (Unranked)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          포지션 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.valorantPosition || ''}
                          onChange={(e) => setFormData({ ...formData, valorantPosition: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white text-gray-900"
                          required={hasValorant}
                        >
                          <option value="">선택해주세요</option>
                          <option value="타격대 (Duelist)">타격대 (Duelist)</option>
                          <option value="척후대 (Initiator)">척후대 (Initiator)</option>
                          <option value="감시자 (Sentinel)">감시자 (Sentinel)</option>
                          <option value="전략가 (Controller)">전략가 (Controller)</option>
                          <option value="올라운더 (All-Rounder)">올라운더 (All-Rounder)</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* OVERWATCH 정보 */}
                {hasOverwatch && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"></div>
                      <h3 className="text-xl font-bold text-gray-900">OVERWATCH 정보</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          반 선택 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.overwatchClass || ''}
                          onChange={(e) => setFormData({ ...formData, overwatchClass: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white text-gray-900"
                          required={hasOverwatch}
                        >
                          <option value="">선택해주세요</option>
                          <option value="1:1 프리미엄 집중반 주1회">1:1 프리미엄 집중반 주1회</option>
                          <option value="1:1 프리미엄 집중반 주2회">1:1 프리미엄 집중반 주2회</option>
                          <option value="1:5 팀 그룹 취미반">1:5 팀 그룹 취미반</option>
                          <option value="1:5 팀 그룹 성장반">1:5 팀 그룹 성장반</option>
                          <option value="1:5 팀 그룹 프로반">1:5 팀 그룹 프로반</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          티어 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.overwatchTier || ''}
                          onChange={(e) => setFormData({ ...formData, overwatchTier: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white text-gray-900"
                          required={hasOverwatch}
                        >
                          <option value="">선택해주세요</option>
                          <option value="랭커 (TOP500)">랭커 (TOP500)</option>
                          <option value="챔피언 (Champion)">챔피언 (Champion)</option>
                          <option value="그랜드 마스터(Grand master)">그랜드 마스터(Grand master)</option>
                          <option value="마스터(Master)">마스터(Master)</option>
                          <option value="다이아몬드(Diamond)">다이아몬드(Diamond)</option>
                          <option value="플레티넘(Platinum)">플레티넘(Platinum)</option>
                          <option value="골드(Gold)">골드(Gold)</option>
                          <option value="실버(Silver)">실버(Silver)</option>
                          <option value="브론즈(Bronze)">브론즈(Bronze)</option>
                          <option value="언랭(Unranked)">언랭(Unranked)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          포지션 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.overwatchPosition || ''}
                          onChange={(e) => setFormData({ ...formData, overwatchPosition: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white text-gray-900"
                          required={hasOverwatch}
                        >
                          <option value="">선택해주세요</option>
                          <option value="탱커">탱커</option>
                          <option value="딜러">딜러</option>
                          <option value="힐러">힐러</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 보호자 정보 (선택사항) */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">
                      보호자 정보 <span className="text-sm font-normal text-gray-500">(미성년자인 경우)</span>
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">보호자 이름</label>
                      <input
                        type="text"
                        value={formData.guardianName || ''}
                        onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                        placeholder="미성년자인 경우 꼭 정보를 기입해주세요"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-gray-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">보호자 연락처</label>
                      <input
                        type="tel"
                        value={formData.guardianPhoneNumber || ''}
                        onChange={(e) => setFormData({ ...formData, guardianPhoneNumber: e.target.value })}
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-5 py-4 rounded-xl text-sm font-medium flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                  </div>
                )}

                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        제출 중...
                      </span>
                    ) : (
                      '제출하기'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoogleFormModal;

