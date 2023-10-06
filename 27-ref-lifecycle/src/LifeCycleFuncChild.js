import React, { useEffect } from 'react';
import { useState } from 'react';

// 자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');

  //   Mount 시점에 실행
  useEffect(() => {
    console.log('컴포넌트 마운트!');
  }, []);
  useEffect(() => {
    // unmount 시점에 실행
    return () => {
      console.log('컴포넌트 언마운트!');
    };
  }, []);

  // input 상태가 업데이트 될 때 실행
  useEffect(() => {
    console.log('input 상태가 변경됨에 따라 컴포넌트 업데이트!!!');
  }, [input]);

  return (
    <div style={{ background: 'gold' }}>
      자식 컴포넌트
      <div>현재 Number 값은 {number} 입니다.</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
