import { useState } from 'react';

const ColorChange = () => {
  const [msg, setMsg] = useState('검정색 글씨');
  const [color, setColor] = useState('black');

  const toRed = () => {
    setMsg('파란색 글씨');
    setColor('blue');
  };

  const toBlue = () => {
    setMsg('빨간색 글씨');
    setColor('red');
  };

  return (
    <div>
      <h2 style={{ color }}>{msg}</h2>
      <button onClick={toRed}>빨간색</button>
      <button onClick={toBlue}>파란색</button>
    </div>
  );
};

export default ColorChange;
