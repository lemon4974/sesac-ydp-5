import React from 'react';

// function Input({ setContent }) {
function Input(props) {
  const setData = props.setData;

  const handleInput = (e) => {
    // console.log(e);
    // setContent(e.target.value);
    const content = e.target.value;
    setData((data) => {
      // console.log(data);
      return { ...data, content }; //spread 연산자로 값을 뿌림, content만 값이 바뀌게 된다.
    });
  };
  return (
    <>
      내용 :{' '}
      <input
        type="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
