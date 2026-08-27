// import React from 'react'
// import {Link} from "react-router-dom";

// function Header() {
//   return (
//    <nav>
//    <Link style={{marginRight: "10px", textDecoration: "none"}} to="/">Home</Link>
//    <Link  style={{marginRight: "10px", textDecoration: "none"}} to="/cart">Cart</Link>
//    </nav>
//   )
// }

// export default Header;

import { useCart } from "../context/cartContext";

function Header() {
  const { cartItems,total } = useCart();

 return (
  <div>
    <h2>🍕 Food App</h2>

    <h3>
      Cart: {Math.min(10, cartItems.length)} -
      Cart: {Math.min(10, cartItems.length)} - ₹{total}
    </h3>

    <h3>
      Cart has been Updated from{" "}
      {Math.max(0, Math.min(10, cartItems.length - 1))}
      {" "}to{" "}
      {Math.min(10, cartItems.length)}
    </h3>
  </div>
);
}

export default Header;