import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();

  return (
    <div>
      <h1>custom hook (useToggle) ex</h1>
      <div onClick={setIsFaqOpen}>Q. 리액트에서 커스텀 훅 만들 수 있음?</div>
      {isFaqOpen && <div>A.네 그럼요 가능하죵!</div>}
    </div>
  );
}
