import React, { use } from "react";
import './styleCart.css';
import { useCart } from "../contexts/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {

  const { products, removeFromCart, totalPrice, totalItems, clearCart, openCart, setOpenCart } = useCart();

  const onClose = () => {
    setOpenCart(false);
  };

  const isOpen = true;

  return (
    openCart && (
      <div className={`cart-drawer ${isOpen ? 'open' : ""}`}>
        <div className="cart-header">
          <h2 style={{ color: 'black' }}>Carrito de compras</h2>
          <button onClick={onClose} className="close-button">X</button>
        </div>

        <div className="cart-content">
          {totalItems < 1 ? (
            <p style={{ color: "red" }}>El carrito esta vacio</p>
          ) : (
            <ul className="cart-items">
              {products?.map((item, index) => (
                item.cantidad > 0 && (
                <li key={item.id} style={{ color: "black" }}>
                  {item.nombre} - ${item.precio}
                  <button onClick={() => removeFromCart(item.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                  </button>
                </li>
              )))}
            </ul>
          )}
        </div>
        {totalItems > 0 && (
          <div className="cart-summary">
            <p>Total de productos: {totalItems}</p>
            <p>Total a pagar: ${totalPrice}</p>
            <button className="btn-clear" onClick={() => clearCart()}>Vaciar</button>
          </div>)}
      </div>
    ));
};

export default Cart;
