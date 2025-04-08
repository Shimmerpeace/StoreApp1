import React from "react";
import ProductCard from "./productCard";


function ProductList({ products, addToCart }) {
  return (
    <>
      <div className="productList-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
