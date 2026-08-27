import { useCart } from "../context/cartContext";

function MenuItem({ item }) {
  const { addToCart,cartTotal } = useCart();

  return (
    <div>
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>

      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;