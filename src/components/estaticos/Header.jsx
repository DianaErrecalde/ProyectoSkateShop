import { useState } from "react";
import { Link } from "react-router-dom";
import "./styleEstaticos.css";
import Cart from "../Cart";

const Header = ({ cart }) => {
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
            <Link to="/" className="link"></Link>Carrito: {cart?.lenght || 0}
          </li>
          <li className="cartNav">
            <button className="btnCart" onClick={() => setCartOpen(true)}>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <Cart
              cart={cart}
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
