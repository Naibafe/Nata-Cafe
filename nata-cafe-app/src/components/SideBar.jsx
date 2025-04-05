import { useContext } from "react";
import { CartContext } from "../data/CartContext";

function SideBar() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="sidebar">
      <p>SideBar</p>
      {cart.map((p) => (
        <li>{p.name}</li>
      ))}
    </div>
  );
}

export default SideBar;
