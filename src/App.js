import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/header';
import ProductList from './components/ProductList';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    { id: 1, name: 'Product 1', price: 50, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 75, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 100, image: '/images/product3.jpg' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
