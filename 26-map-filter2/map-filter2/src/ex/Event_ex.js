import React, { useState } from 'react';

export default function Info() {
  const [data, setData] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addInfo = () => {
    const newInfo = data.concat({
      id: data.length + 1,
      name: inputName,
      email: inputEmail,
    });
    if (inputName !== '') {
      setData(newInfo);
      setInputName('');
    } else {
      setInputName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter') {
      addInfo();
    }
  };

  const deleteInfo = (targetId) => {
    console.log(targetId);

    const newInfo = data.filter((data) => data.id !== targetId);
    setData(newInfo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <button onClick={addInfo}>등록</button>
      <ol>
        {data.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteInfo(value.id)}>
            {value.name}:{value.email}
          </li>
        ))}
      </ol>
    </div>
  );
}
