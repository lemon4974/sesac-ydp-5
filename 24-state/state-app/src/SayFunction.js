import { useState } from 'react';

const SayFunction = () => {
  //   console.log(useState('welcome!'));
  const [message, setMessage] = useState('welcome!');
  // 'welcome!' : 상태 초기값, (숫자, 문자, 배열 등 값의 형태 자유로움)
  // message: 메세지 상태
  // setMessage() message state 값을 바꾸는 경우

  const onClickEnter = () => {
    setMessage('안녕하세요!');
  };
  const onClickLeave = () => {
    setMessage('안녕가세요!');
  };

  return (
    // setMessage('안녕하세요!')
    <div>
      {/* -HTML : onclick="onClickEvent()" -> 문자열 형식 호출문 등록
        - JS : addEventListener('click', onclickEvent)-> 괄호를 없애 함수를 바로 실행하지 않고 
        - React : onClick={onClickEnter}->JS 와 동일 */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
      {/* onClick 뒤에 함수()하지 않기 */}
    </div>
  );
};

export default SayFunction;
