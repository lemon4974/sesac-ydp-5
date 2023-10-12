import React from 'react';
import './styles/larva.scss';
import './styles/grass.png';

export default function Larva() {
  return (
    <div>
      <div className="body body1">
        <div className="eye-white">
          <div className="eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>
      <div className="body body6"></div>
      {/* <img className="grass" src="/styles/grass.png" alt="잔디" /> */}
    </div>
  );
}
