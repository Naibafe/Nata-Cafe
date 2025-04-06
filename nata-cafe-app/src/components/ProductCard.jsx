import { useContext } from "react";
import { CartContext } from "../data/CartContext";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  function handleAdd() {
    if (!cart.some((p) => p.id == product.id)) {
      const newItem = { ...product, quantity: 1 };
      setCart([...cart, newItem]);
    } else {
      setCart(
        cart.map((p) =>
          p.id == product.id
            ? { ...p, quantity: p.quantity + 1, price: p.price + product.price }
            : p
        )
      );
    }
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
