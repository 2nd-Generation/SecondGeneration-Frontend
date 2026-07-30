import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="bg-custom-bg min-h-screen text-white">
      <div className="container mx-auto px-6 pt-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:text-violet-200 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5 5-5M6 12h12" />
          </svg>
          홈으로
        </Link>
      </div>

      <main className="container mx-auto px-6 py-12 md:py-16 max-w-5xl">
        <div className="text-center mb-14">
          <h1 className="font-bebas text-4xl sm:text-5xl font-black tracking-wide mb-4">이용약관 및 교습비 안내</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* 교습 과정 */}
        <section className="mb-16">
          <h2 className="font-bebas text-3xl font-black text-center mb-6 tracking-wide">교습 과정</h2>
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { name: '취미반', time: '주 1회 / 3시간', price: '17만원' },
                { name: '성장반', time: '주 2회 / 6시간', price: '32만원' },
                { name: '프로반', time: '주 3회 / 9시간', price: '43만원' },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-7 text-center"
                >
                  <p className="text-xl font-black text-gray-900 mb-1">{tier.name}</p>
                  <p className="text-sm text-gray-500 mb-4">{tier.time}</p>
                  <p className="text-2xl font-black text-purple-600">{tier.price}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-6">*100% 온라인(디스코드) 수업</p>
          </div>
        </section>

        {/* 교습비 반환 기준 */}
        <section>
          <h2 className="font-bebas text-3xl font-black text-center mb-2 tracking-wide">교습비 반환 기준</h2>
          <p className="text-center text-xs text-violet-300 mb-6">
            (학원의 설립·운영 및 과외교습에 관한 법률 제18조제2항 관련)
          </p>

          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-2xl overflow-x-auto">
            <table className="w-full border-collapse min-w-[640px] text-sm text-gray-800">
              <thead>
                <tr className="bg-gray-100">
                  <th colSpan={2} className="border border-gray-200 px-3 py-3.5 font-extrabold w-[30%]">구분</th>
                  <th className="border border-gray-200 px-3 py-3.5 font-extrabold w-[30%]">반환사유 발생일</th>
                  <th className="border border-gray-200 px-3 py-3.5 font-extrabold">반환금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="border border-gray-200 px-3 py-3.5 text-center">
                    제18조제2항제1호의<br />반환사유에 해당하는 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-3.5 text-center">
                    교습을 할 수 없거나 교습장소를<br />제공할 수 없게 된 날
                  </td>
                  <td className="border border-gray-200 px-3 py-3.5 text-center">
                    이미 납부한 교습비등을 일할<br />계산한 금액
                  </td>
                </tr>
                <tr>
                  <td rowSpan={6} className="border border-gray-200 px-3 py-3.5 text-center align-middle">
                    제18조제2항 제3호의<br />반환사유에 해당하는 경우
                  </td>
                  <td rowSpan={4} className="border border-gray-200 px-3 py-3.5 text-center align-middle">
                    교습기간이<br />1개월 이내인 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-3 text-center">교습시작 전</td>
                  <td className="border border-gray-200 px-3 py-3 text-center">이미 납부한 교습비등의 전액</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-3 text-center">총 교습의 1/3 경과 전</td>
                  <td className="border border-gray-200 px-3 py-3 text-center">이미 납부한 교습비등의 2/3에 해당하는 금액</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-3 text-center">총 교습시간의 1/2 경과 전</td>
                  <td className="border border-gray-200 px-3 py-3 text-center">이미 납부한 교습비등의 1/2에 해당하는 금액</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-3 text-center">총 교습시간의 1/2 경과 후</td>
                  <td className="border border-gray-200 px-3 py-3 text-center">반환하지 않음</td>
                </tr>
                <tr>
                  <td rowSpan={2} className="border border-gray-200 px-3 py-3.5 text-center align-middle">
                    교습기간이<br />1개월을 초과하는 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-3 text-center">교습 시작 전</td>
                  <td className="border border-gray-200 px-3 py-3 text-center">이미 납부한 교습비등의 전액</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-3 text-center">교습 시작 후</td>
                  <td className="border border-gray-200 px-3 py-3.5 text-center leading-relaxed">
                    반환사유가 발생하는 해당 월의 반환 대상 교습비등(교습기간 1개월 이내의 경우의 기준에 따라 산출한 금액)에 나머지 월의 교습비등의 전액을 합산한 금액
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="border border-gray-200 px-4 py-4 text-left text-xs text-gray-600 leading-relaxed">
                    <span className="font-extrabold text-gray-900 mr-2">비고</span>
                    <br />
                    1. 총 교습시간은 교습시간 중의 총 교습시간을 말하며, 반환금액의 산정은 반환사유가 발생한 날까지 경과된 교습시간을 기준으로 한다.
                    <br />
                    2. 원격교습의 경우 반환금액은 교습내용을 실제 수강한 부분(인터넷으로 수강하거나 학습기기로 저장한 것)에 해당하는 금액을 뺀 금액으로 한다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-custom-bg border-t border-gray-700 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400 text-xs">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 mb-1.5">
            <span><b className="text-gray-300">상 호</b> 에스지이에이(SGEA)원격학원</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span><b className="text-gray-300">학원등록번호</b> 제 300076703호</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span><b className="text-gray-300">사업자 번호</b> 157-99-02026</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5">
            <span><b className="text-gray-300">대표</b> 서재원 외1명</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span><b className="text-gray-300">대표번호</b> 1644-5862</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span><b className="text-gray-300">E-mail</b> info@sgea.kr</span>
          </div>
          <p className="mt-6">©2025. <span className="font-bebas">SGEA</span> All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
