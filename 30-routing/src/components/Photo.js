import React from 'react';

export default function Photo({ photo }) {
  const { id, title, url } = photo;
  //   console.log(id, title, url);
  //   const targetPhoto = photo
  return (
    <div>
      <ul>
        <li>사진 제목: {title}</li>
        <img src={url} alt="사진" style={{ width: '200px', height: '200px' }} />
      </ul>
    </div>
  );
}
