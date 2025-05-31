import { useState } from "react";
import { Link } from "react-router-dom";
import "./styleEstaticos.css";
import Cart from "../Cart";

const Header = ({ cartItems }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
        <ul>
          <li>
            <Link to="/" className="link"></Link>Inicio
          </li>
          <li>
            <Link to="/" className="link"></Link>Nosotros
          </li>
          <li>
            <Link to="/" className="link"></Link>GaleriaDeProductos
          </li>
          <li>
            <Link to="/" className="link"></Link>Contacto
          </li>
          <li>
            <Link to="/" className="link"></Link>Carrito: {countItem}
          </li>
          <li className="cartNav">
            <button className="btnCart" onClick={() => setCartOpen(true)}>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <Cart
              cartItems={cartItems}
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
            />
          </li>
        </ul>
      </nav>
      <h1>Skateshop Shock Wave</h1>
    </header>
  );
};

export default Header;
