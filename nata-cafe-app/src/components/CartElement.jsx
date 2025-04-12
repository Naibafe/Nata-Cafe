import { useContext, useEffect } from "react";
import { CartContext } from "../data/CartContext";

function CartElement({ p }) {
  const { cart, setCart } = useContext(CartContext);
  // useEffect(() => {
  //   if (cart.length >= 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     console.log(1);
  //   }
  //   console.log(2);
  // }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Test - CartElement");
  }, [cart]);

  function handleDelete() {
    if (
      cart.some(
        (product) =>
          product.id == p.id && product.quantity > 1 && product.size == p.size
      )
    ) {
      setCart((cart) =>
        cart.map((product) =>
          product.id == p.id && product.size == p.size
            ? {
                ...product,
                price:
                  Math.round(
                    (product.price - p.price / product.quantity) * 100
                  ) / 100,
                quantity: product.quantity - 1,
              }
            : product
        )
      );
    } else {
      setCart((cart) =>
        cart.filter(
          (product) =>
            product.id != p.id &&
            product.size != p.size &&
            product.price != p.price
        )
      );
      console.log("test - usunięcie w ELSE");
    }
  }
  return (
    <div className="sidebar-product-element">
      <p>
        {p.quantity}x {p.name} {p.size}
      </p>
      <span>{p.price}</span>
      <span onClick={handleDelete}>X</span>
    </div>
  );
}

export default CartElement;
