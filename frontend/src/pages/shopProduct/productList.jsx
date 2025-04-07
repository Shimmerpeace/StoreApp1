import React from "react";
import ProductCard from "./productCard";

import product1 from "../../assets/1.jpeg";
import product2 from "../../assets/2.jpeg";
import product3 from "../../assets/3.jpeg";
import product4 from "../../assets/4.jpeg";
import product5 from "../../assets/5.jpeg";
import product6 from "../../assets/6.jpeg";
import product7 from "../../assets/7.jpeg";
import product8 from "../../assets/8.jpeg";
import product9 from "../../assets/9.jpeg";
import product10 from "../../assets/10.jpeg";
import product11 from "../../assets/11.jpeg";

const products = [
  { id: 1, name: "Laptop", price: 999.0, image: product1 },
  { id: 2, name: "Couture Dress", price: 999.0, image: product2 },
  { id: 3, name: "Kid;s Cloth", price: 999.0, image: product3 },
  { id: 4, name: "Camera", price: 999.0, image: product4 },
  { id: 5, name: "Cap", price: 999.0, image: product5 },
  { id: 6, name: "Headset", price: 999.0, image: product6 },
  { id: 7, name: "YPhone", price: 999.0, image: product7 },
  { id: 8, name: "Trouser", price: 999.0, image: product8 },
  { id: 9, name: "T-Shirt", price: 999.0, image: product9 },
  { id: 10, name: "Vintage TV", price: 999.0, image: product10 },
  { id: 11, name: "Shoe", price: 999.0, image: product11 },
];

function ProductList({ addToCart, removeFromCart, onSearch }) {
  return (
    <>
    <div className="search-bar">
    <input
      type="text"
      placeholder="Searchh products..."
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
    <div className="productList-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart}/>
      ))}
    </div>
    </>
  );
}

export default ProductList;
