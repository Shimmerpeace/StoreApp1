import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { SearchBar } from "./components/searchBar";
import ProductList from "./pages/shopProduct/productList";
import Cart from "./pages/cart/cart";
import "./App.css";

function App() {
 

  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    { id: 1, name: "Laptop", price: 999.0, image: "../../assets/1.jpeg" },
    { id: 2, name: "Couture Dress", price: 999.0, image: "../../assets/2.jpeg" },
    { id: 3, name: "Kid;s Cloth", price: 999.0, image: "../../assets/3.jpeg" },
    { id: 4, name: "Camera", price: 999.0, image: "../../assets/4.jpeg" },
    { id: 5, name: "Cap", price: 999.0, image: "../../assets/5.jpeg" },
    { id: 6, name: "Headset", price: 999.0, image: "../../assets/6.jpeg"},
    { id: 7, name: "YPhone", price: 999.0, image: "../../assets/7.jpeg" },
    { id: 8, name: "Trouser", price: 999.0, image: "../../assets/8.jpeg" },
    { id: 9, name: "T-Shirt", price: 999.0, image: "../../assets/9.jpeg" },
    { id: 10, name: "Vintage TV", price: 999.0, image:  "../../assets/10.jpeg" },
    { id: 11, name: "Shoe", price: 999.0, image: "../../assets/11.jpeg" },
  ];
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  

const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ecommerce-app">
      <Router>
        <Header />
        <SearchBar  setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<ProductList products= {filteredProducts} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        </Routes>
      </Router>
    </div>
  );
}
// <SearchBar onSearch={(term) => setSearchQuery(term)} />
export default App;
