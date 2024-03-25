// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import product from '../data/products'; // Ensure this path is correct

function ProductList({ onAddToCart }) {
  return (
    <div className="product-list">
      {product.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
