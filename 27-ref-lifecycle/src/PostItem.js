import React, { useEffect } from 'react';
import { useState } from 'react';

// 자식 컴포넌트
export default function PostItem({ post }) {
  return (
    <div style={{ background: 'gold' }}>
      <div>
        No. {post.id}-{post.title}
      </div>
      <div>{post.body}</div>
    </div>
  );
}
