import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

// error: export 'default' (imported as 'Emotion') was not found in './Emotion' (possible exports: Emotion)

export const Emotion = () => {
  // scss와 동일하게 사용하는 방법
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  //   인라인 스타일 작성 방법
  const titleStyle = css({
    margin: 0,
    color: '#aaa',
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion입니다</p>
      <Sbutton>버튼</Sbutton>
    </div>
  );
};

const Sbutton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
