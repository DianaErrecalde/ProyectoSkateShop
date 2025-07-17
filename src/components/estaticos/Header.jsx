import React from "react";
import { Link } from "react-router-dom";
import "./styleEstaticos.css";
import Cart from "../Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../../contexts/cartContext";

const Header = () => {

  const { setOpenCart } = useCart();

  return (
    <header>
      <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
        <ul>
          <li>
            <Link to="/" className="link">Inicio</Link>
          </li>
          <li>
            <Link to="/acercade" className="link">Acerca de nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" className="link">Contacto</Link>
          </li>
          <li className="cartNav">
            <button className="btnCart" onClick={() => setOpenCart(true)}>
              <span>Carrito</span>
              <FontAwesomeIcon style={{margin:'2px'}} icon={faCartShopping}/>
            </button>
            <Cart/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
