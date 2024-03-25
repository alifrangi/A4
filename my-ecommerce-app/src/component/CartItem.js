// CartItem.js
import React from 'react';

function CartItem({ item, onUpdateCart, onRemoveFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)} x {item.quantity}</p>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => onUpdateCart(item, -1)}>Remove</button>
    </div>
  );
}

export default CartItem;
