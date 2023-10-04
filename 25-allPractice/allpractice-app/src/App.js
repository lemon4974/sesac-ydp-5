import { useState } from 'react';

import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  // 상태
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'w',
    content: 'text',
  });

  // const [content, setContent] = useState('test');
  // const [img, setImg] = useState('apple.png');
  // const [backgroundColor, setBackgroundColor] = useState('black');
  // const [color, setColor] = useState('white');
  // 함수형 컴포넌트 위주로 사용
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select
          setImg={setImg}
          setBackgroundColor={setBackgroundColor}
          setColor={setColor}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* <Input setContent={setContent} /> */}
        <Input setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* <Result
          img={img}
          content={content}
          backgroundColor={backgroundColor}
          color={color}
        /> */}
        <Result data={data} />
      </div>
    </>
  );
}

export default App;
