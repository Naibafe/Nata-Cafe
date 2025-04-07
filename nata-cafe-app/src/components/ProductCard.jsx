import { useContext, useEffect } from "react";
import { CartContext } from "../data/CartContext";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);
  if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    if (
      localStorage.getItem("cart") !== "[]" &&
      localStorage.getItem("cart") !== null
    )
      setCart((cart) => JSON.parse(localStorage.getItem("cart")));
  }, []);

  function handleAdd() {
    if (!cart.some((p) => p.id == product.id)) {
      const newItem = { ...product, quantity: 1 };
      setCart((cart) => [...cart, newItem]);
    } else {
      setCart(
        cart.map((p) =>
          p.id == product.id
            ? { ...p, quantity: p.quantity + 1, price: p.price + product.price }
            : p
        )
      );
    }
    //localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="product-card">
      <img src={product.image} />
      <p>{product.name}</p>
      <span>{product.price} PLN</span>
      <div>
        <button onClick={handleAdd}>Zamów</button>
      </div>
    </div>
  );
}

export default ProductCard;
