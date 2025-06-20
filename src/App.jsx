import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Contactos from "./layout/Contactos";
import AcercaDe from "./layout/AcercaDe";
import GaleriaDeProductos from "./layout/GaleriaDeProductos";
import NotFound from "./layout/NotFound";
import Data from "../public/Data"; // Importa los datos de productos

//componente padre de home
function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(Data);
  const [cargando, setCargando] = useState(false); // Estado para controlar la carga de productos

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              agregarCarrito={handleAddToCart}
              cart={cart}
              products={products}
              cargando={cargando}
            />
          }
        />

        <Route path="/acercade" element={<AcercaDe carts={cart} />} />

        <Route
          path="/productos"
          element={
            <GaleriaDeProductos
              agregarCarrito={handleAddToCart}
              carts={cart}
              products={products}
              cargando={cargando}
            />
          }
        />

        <Route path="/contacto" element={<Contactos carts={cart} />} />

        <Route path="/**" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

