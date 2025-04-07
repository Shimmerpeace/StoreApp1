import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ProductList from "./pages/shopProduct/productList";
import Cart from "./pages/cart/cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="ecommerce-app">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
