import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="cart-section">
      <h2>Shopping Cart </h2>
      {cartItems.length === 0 ? (
        <p>Empty cart!</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3> <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
