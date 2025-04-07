import React from "react";

function ProductCard({ product, addToCart, removeFromCart, inCart}) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {inCart ? (
        <button onClick={() => removeFromCart(product.id)}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  )}
export default ProductCard;
