import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactos from "./layout/Contactos";
import AcercaDe from "./layout/AcercaDe";
import GaleriaDeProductos from "./layout/GaleriaDeProductos";
import NotFound from "./layout/NotFound";
import { CartProvider } from "./contexts/cartContext";
import Header from "./components/estaticos/Header";
import Footer from "./components/estaticos/Footer";

//componente padre de home
function App() {

  return (
    <CartProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<GaleriaDeProductos />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route path="/**" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
