import { useState, useContext, useEffect } from "react";
import { CartContext } from "../data/CartContext";
import { useNavigate } from "react-router-dom";

function DeliveryForm() {
  const { cart, setCart } = useContext(CartContext);
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("cart") !== "[]" &&
      localStorage.getItem("cart") !== null
    ) {
      setCart((cart) => JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  const totalPrice =
    Math.round(cart.reduce((acc, product) => acc + product.price, 0) * 100) /
    100;
  function handlePay() {
    setCity("");
    setAdress("");
    localStorage.setItem("cart", "[]");
    setCart([]);
    navigation("/podsumowanie");
  }
  return (
    <div className="delivery-form">
      <div>
        <h2>Dane do dostawy</h2>
        <p>Miasto</p>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <p>Adres</p>
        <input
          type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <h3>Cena zamówienia: {totalPrice} PLN</h3>
        <button onClick={handlePay}>Zapłać</button>
      </div>
    </div>
  );
}

export default DeliveryForm;
