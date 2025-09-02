import React from 'react';
import { useCounterStore } from '../store';

export const Counter: React.FC = () => {
  const { value: count, increment, decrement, incrementByAmount } = useCounterStore();

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* 카운터 표시 */}
      <div className="text-6xl font-bold text-gray-800">{count}</div>

      {/* 버튼 그룹 */}
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 text-lg font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          onClick={decrement}
        >
          감소
        </button>
        <button
          className="px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          onClick={increment}
        >
          증가
        </button>
        <button
          className="px-6 py-2 text-lg font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          onClick={() => incrementByAmount(5)}
        >
          +5
        </button>
      </div>

      {/* 상태 표시 */}
      <div className="text-sm text-gray-500">{count === 0 ? '초기값' : count > 0 ? '양수' : '음수'}</div>
    </div>
  );
};


