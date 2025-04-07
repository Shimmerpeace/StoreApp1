import React from "react";

function Header() {
  return (
    <>
      <header>
        <h1>RunTown Store!</h1>
        <nav>
          <a href="/" className="home-link">
            Home
          </a>

          <a href="/cart" className="cart-icon">🛒</a>
        </nav>
      </header>
    </>
  );
}
//<a href="/products" className="product-link"> Products </a>
export default Header;
