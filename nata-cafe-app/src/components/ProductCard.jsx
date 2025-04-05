import { useContext } from "react";
import { CartContext } from "../data/CartContext";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  function handleAdd() {
    setCart([...cart, product]);
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
