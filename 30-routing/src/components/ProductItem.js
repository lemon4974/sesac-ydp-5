import React from 'react';
import { Link } from 'react-router-dom';
// import { productInfos } from '../pages/ProductPage';

export default function ProductItem({ product }) {
  // export default function ProductItem() {
  console.log(product);
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명: {product.name}</li>
          <li>상세설명: {product.body}</li>
        </ul>
      </Link>
      <hr />
    </>
  );
}
