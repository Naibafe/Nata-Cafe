import { useContext, useEffect, useState } from "react";
import { CartContext } from "../data/CartContext";
import SizeSelector from "./SizeSelector";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState(product.size);

  const priceSet =
    size == "S"
      ? product.price - 2
      : size == "L"
      ? product.price + 2
      : product.price;

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
    const multiplyNumber =
      size == "S" || size == "100g" ? 2 : size == "M" || size == "200g" ? 3 : 4;
    if (!cart.some((p) => p.id == product.id && p.size == size)) {
      const newItem = {
        ...product,
        quantity: 1,
        size: size,
        price: priceSet,
        tag: product.id * product.price * multiplyNumber,
      };
      setCart((cart) => [...cart, newItem]);
    } else {
      setCart(
        cart.map((p) =>
          p.id == product.id && p.size == size
            ? {
                ...p,
                quantity: p.quantity + 1,
                price: Math.round((p.price + priceSet) * 100) / 100,
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
      <span>{priceSet} PLN</span>
      <div className="product-card-bottom-container">
        <div className="selectors-container">
          <SizeSelector
            size={size}
            setSize={setSize}
            productType={product.type}
          />
        </div>
        <div className="order-button-container">
          <button onClick={handleAdd} className="product-card-order-button">
            Zamów
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
