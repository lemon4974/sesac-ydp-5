import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams);
  console.log(searchParams.get('mode')); // Dark or null
  console.log('ㅇㅇ', ['Main', searchParams.get['mode']].join(' '));
  return (
    <div className={['Main', searchParams.get['mode']].join(' ')}>
      <h1>MainPage </h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
        // http://localhost:3000/?mode=Dark -> 쿼리 스트링으로 세팅이 된다.
      >
        Dark Mode
      </button>
    </div>
  );
}
