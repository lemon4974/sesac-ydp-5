import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  // 어떤 props를 받아오는지 구조 분해를 해주고 해당 type을 위의 CardProps로 지정해준다.
  return (
    <div>
      Card
      <h1>{title}</h1>
      <h1>{children}</h1>
    </div>
  );
}
