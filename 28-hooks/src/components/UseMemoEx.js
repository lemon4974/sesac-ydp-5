import React, { useState } from 'react';
import { useMemo } from 'react';

// useMemo
// 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  // [Before]
  //   const calc = () => {
  //     console.log('열심히 계산 중...');

  //     // 임의의 큰 연산을 하는 함수
  //     // 버튼을 누를 때에도, input을 입력할 때도 연산이 이뤄짐(calc 함수 호출)
  //     // useMemo 랜더링 과정에서 특정 값을 기억해서 바뀔 때만 연산되도록 최적화
  //     for (let i = 0; i < 1000000; i++) {}

  //     return count ** 2;
  //   };

  // [After]
  // count의 값이 바뀔 때에만 함수를 실행해주세요
  // input상태가 바뀌면 컴포넌트는 리랜더링 되지만, calc는 연산되지 않음
  const calc = useMemo(() => {
    console.log('열심히 계산 중...');
    for (let i = 0; i < 1000000; i++) {}

    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Ex</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(() => count + 1)}>Plus</button>
      <p>count : {count}</p>

      {/* [before]
      <p>calc : {calc()}</p>
[After] */}
      <p>calc : {calc}</p>
    </div>
  );
}
