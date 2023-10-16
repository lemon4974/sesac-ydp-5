import React from 'react';
import { productInfos } from './ProductPage';
import axios from 'axios';
import Photo from '../components/Photo';

import { useState, useEffect } from 'react';

export default function Photos() {
  const { productId } = productInfos;

  const [photos, setPhotos] = useState({});

  const getPost = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    // console.log(res.data);
    // photo 와 관련한 변수를 지정한 적이 없다.
    setPhotos(res.data);
  };

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
