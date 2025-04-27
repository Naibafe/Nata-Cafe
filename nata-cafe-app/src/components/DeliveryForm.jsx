import { useState } from "react";

function DeliveryForm() {
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  function handlePay() {}
  return (
    <div className="delivery-form">
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
      <h3>Cena zamówienia: </h3>
      <button onClick={handlePay}>Zapłać</button>
    </div>
  );
}

export default DeliveryForm;
