// ProductItem.js
import React, { useState } from 'react';

function ProductItem({ product, onAddToCart }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <div onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <h3>{product.name}</h3>
        {showDescription && <p>{product.description}</p>}
      </div>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
