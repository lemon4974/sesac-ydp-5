import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from '../components/Photo';

export default function Photos() {
  //   const { productId } = productInfos;

  const [photos, setPhotos] = useState({});

  const getPost = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`, {
      params: { _limit: 10 },
    });
    // console.log(res.data);
    // photo 와 관련한 변수를 지정한 적이 없다.
    setPhotos(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(photos);

  return (
    <div>
      여기는 사진 목록
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
