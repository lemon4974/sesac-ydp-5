import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div>
      Card
      <h1>{title}</h1>
      <h1>{children}</h1>
    </div>
  );
}
