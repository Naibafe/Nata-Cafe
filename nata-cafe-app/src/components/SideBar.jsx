import { useContext } from "react";
import { CartContext } from "../data/CartContext";
import CartElement from "./CartElement";

function SideBar() {
  const { cart, setCart } = useContext(CartContext);

  console.log("reset");
  const isCartFull = cart.length > 0 ? true : false;
  return (
    <div className="sidebar">
      <h2>SideBar</h2>
      <div className="sidebar-products">
        {isCartFull ? cart.map((p) => <CartElement p={p} key={p.id} />) : null}
      </div>
    </div>
  );
}

export default SideBar;
