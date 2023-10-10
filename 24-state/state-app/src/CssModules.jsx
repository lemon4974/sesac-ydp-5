import React from 'react';
import classes from './CssModules.module.scss';

export default function CssModules() {
  const { container, title, button } = classes;
  return (
    <div className={container}>
      <p className={title}>CSS modules입니다.</p>
      <button className={button}>버튼</button>
    </div>
  );
}
