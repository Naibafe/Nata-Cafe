import { useContext, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./data/CartContext";
import MainBody from "./pages/MainBody";
import ProductContainer from "./components/ProductContainer";
import { data } from "./data/Products";

function App() {
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState(data);

  return (
    <BrowserRouter>
      <Nav />
      <MainBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route
            path="/products"
            element={<ProductContainer products={products} />}
          />
        </Routes>
      </MainBody>
    </BrowserRouter>
  );
}

export default App;
