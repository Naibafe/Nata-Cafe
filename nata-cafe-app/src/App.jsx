import { useContext } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./data/CartContext";
import MainBody from "./pages/MainBody";

function App() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <BrowserRouter>
      <Nav />
      <MainBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </MainBody>
    </BrowserRouter>
  );
}

export default App;
