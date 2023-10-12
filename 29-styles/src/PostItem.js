import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles/post.scss';

// 자식 컴포넌트
export default function PostItem({ post }) {
  return (
    <div className="item">
      <div className="">
        <span className="num">No. {post.id}</span>-{post.title}
      </div>
      <div className="">{post.body}</div>
    </div>
  );
}
