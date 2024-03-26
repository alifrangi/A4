// src/components/Productpage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function Productpage() {
  // Initialize the cart state with an empty array
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to handle adding items to the cart
  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);

      // If it exists, increase its quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Otherwise, add the new product with a quantity of 1
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
  };

  
const handleRemoveFromCart = (productIdToRemove) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === productIdToRemove);

    // If the item exists and has more than 1 quantity, decrement the quantity
    if (existingItem && existingItem.quantity > 1) {
      return prevItems.map((item) =>
        item.id === productIdToRemove ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      
      return prevItems.filter((item) => item.id !== productIdToRemove);
    }
  });
};


  return (
    <div className="product-page">
      <Header />
      <table>
        <tbody>
          <tr>
            <td><ProductList onAddToCart={handleAddToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
