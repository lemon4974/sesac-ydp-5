import { useState } from 'react';

const DisappearText = () => {
  const [text, setText] = useState('안녕하세요!!');

  const vanishText = () => {
    setText('');
  };

  return (
    <div>
      <button onClick={vanishText}>사라져라</button>
      <h1>{text}</h1>
    </div>
  );
};

export default DisappearText;
