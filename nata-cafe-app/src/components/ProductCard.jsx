import { useContext, useEffect } from "react";
import { CartContext } from "../data/CartContext";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    if (
      localStorage.getItem("cart") !== "[]" &&
      localStorage.getItem("cart") !== null
    ) {
      setCart((cart) => JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAdd() {
    if (!cart.some((p) => p.id == product.id)) {
      const newItem = { ...product, quantity: 1 };
      setCart((cart) => [...cart, newItem]);
    } else {
      setCart(
        cart.map((p) =>
          p.id == product.id
            ? {
                ...p,
                quantity: p.quantity + 1,
                price: Math.round((p.price + product.price) * 100) / 100,
              }
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
