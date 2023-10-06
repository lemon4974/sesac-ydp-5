import { useState } from 'react';

export default function useToggle(initValue = false) {
  //기본값으로 false 세팅
  // value: 토글의 상태
  // setValue: 토글 상태를 변화 시키는 setter
  const [value, setValue] = useState(initValue);

  // 토글 상태를 전환(스위칭)
  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
}
