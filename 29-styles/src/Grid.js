import React from 'react';
import './styles/grid.scss';

export default function Grid() {
  return (
    <div className="container grid">
      <div
        className="item
      "
      >
        <img src={process.env.PUBLIC_URL + 'images/cow.jpg'} alt="여행 사진" />
      </div>
      <div className="item">
        <img
          src={process.env.PUBLIC_URL + 'images/desert.jpg'}
          alt="여행 사진"
        />
      </div>
      <div className="item">
        <img
          src={process.env.PUBLIC_URL + 'images/landscape.jpg'}
          alt="여행 사진"
        />
      </div>
      <div className="item">
        <img
          src={process.env.PUBLIC_URL + 'images/nomadic-children.jpg'}
          alt="여행 사진"
        />
      </div>
      <div className="item">
        <img
          src={process.env.PUBLIC_URL + 'images/starry-sky.jpg'}
          alt="여행 사진"
        />
      </div>
    </div>
  );
}
