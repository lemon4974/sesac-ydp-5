import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  // console.log(products);
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
