import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from './ProductPage';

export default function ProductDetailPage() {
  //   const parameter = useParams(); //{productId: '2'}
  //   console.log(parameter);
  const { productId } = useParams();
  //   console.log(productId); // '1'
  //   const ex = productInfos[productId];

  const navigate = useNavigate();

  const targetProduct = productInfos[Number(productId) - 1];
  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;
  return (
    <div>
      <h1>Product Detail Page</h1>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세설명: {body}</li>
      </ul>
    </div>
  );
}
