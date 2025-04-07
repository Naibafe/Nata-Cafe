import { useContext, useEffect } from "react";
import { CartContext } from "../data/CartContext";

function CartElement({ p }) {
  const { cart, setCart } = useContext(CartContext);
  // useEffect(() => {
  //   if (cart.length >= 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     console.log(1);
  //   }
  //   console.log(2);
  // }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
