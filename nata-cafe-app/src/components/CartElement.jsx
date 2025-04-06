import { useContext } from "react";
import { CartContext } from "../data/CartContext";

function CartElement({ p }) {
  const { cart, setCart } = useContext(CartContext);
  function handleDelete() {
    setCart((cart) => cart.filter((product) => product.id != p.id));
  }
  return (
    <div className="sidebar-product-element">
      <p>
        {p.quantity}x {p.name}
      </p>
      <span>{p.price}</span>
      <span onClick={handleDelete}>X</span>
    </div>
  );
}

export default CartElement;
