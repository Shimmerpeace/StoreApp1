import React from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart-section">
      <h2>Shopping Cart </h2>
      {cartItems.length === 0 ? (
        <p>Empty cart!</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3> <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove from cart!
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
