import { useContext } from "react";
import { CartContext } from "../data/CartContext";
import CartElement from "./CartElement";

function SideBar() {
  const { cart, setCart } = useContext(CartContext);

  console.log("reset");

  return (
    <div className="sidebar">
      <h2>SideBar</h2>
      <div className="sidebar-products">
        {cart.map((p) => (
          <CartElement p={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
