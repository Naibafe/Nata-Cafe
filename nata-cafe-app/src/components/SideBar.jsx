import { useContext } from "react";
import { CartContext } from "../data/CartContext";
import { useNavigate } from "react-router-dom";
import CartElement from "./CartElement";

function SideBar() {
  const { cart, setCart } = useContext(CartContext);
  const navigation = useNavigate();

  const totalPrice =
    Math.round(cart.reduce((acc, product) => acc + product.price, 0) * 100) /
    100;

  //console.log("reset");

  return (
    <div className="sidebar">
      <h2>Koszyk</h2>
      <div className="sidebar-products">
        {cart.map((p) => (
          <CartElement p={p} key={p.tag} />
        ))}
      </div>
      <div className="sidebar-sumup">
        <p>Cena: {totalPrice} PLN</p>
      </div>
      <button onClick={() => navigation("/dostawa")}>Przejdź dalej</button>
    </div>
  );
}

export default SideBar;
