import React, { useState } from 'react';

export default function Alphabet() {
  //   const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    // if (inputAlpha !== '') {
    if (inputAlpha.length !== 0) {
      // [quiz] input이 빈 값이라면 alphabet 상태가 변경되지 않도록 하기
      setAlphabet(newAlpha);
      setInputAlpha('');
    } else {
      setInputAlpha('');
    }
  };

  const handleKeyPress = (e) => {
    // console.log(e);

    // bug fix: IME(input method editor) 문제 해결
    // https://velog.io/@euji42/solved-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5%EC%8B%9C-2%EB%B2%88-%EC%9E%85%EB%A0%A5%EC%9D%B4-%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.keyCode === 13) {
      // if (e.key === 'Enter') {
      //   const newAlpha = alphabet.concat({
      //     id: alphabet.length + 1,
      //     alpha: inputAlpha,
      //   });
      //   // if (inputAlpha !== '') {
      //   if (inputAlpha.length !== 0) {
      //     // [quiz] input이 빈 값이라면 alphabet 상태가 변경되지 않도록 하기
      //     setAlphabet(newAlpha);
      //     setInputAlpha('');
      //   } else {
      //     setInputAlpha('');
      //   }
      addAlpha();
    }
  };

  const deleteAlpha = (targetId) => {
    //어떤 요소가 삭제되어야하는지 지정해줄 때 filter 사용
    // targetId: 삭제할 요소의 id
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // [quiz] input에서 enter 키 누르면 추가되도록!
        onKeyDown={handleKeyPress}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {/* {alphabet.map((value, idx) => (
          <li key={idx}>{value}</li> // 반복되는 요소의 가장 바깥 요소에 key를 정의해야 한다.
        ))} */}
        {alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li> // 반복되는 요소의 가장 바깥 요소에 key를 정의해야 한다.
        ))}
      </ol>
    </div>
  );
}
