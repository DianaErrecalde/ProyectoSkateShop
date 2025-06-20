import React from "react";
import './styleCart.css'; 

const Cart = ({ cart, isOpen, onClose}) => {

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2 style={{color:'black'}}>Carritos De Compras</h2>
        <button onClick= {onClose} className="close-button">X</button>
      </div>

      <div className="cart-content">
      {cart && cart.length < 1 ? (
        <p style={{ color: "red" }}>El carrito esta vacio</p>
      ) : (
        <ul className="cart-items">
          {cart &&cart.map((item, index) => (
            <>
              <li key={item.id} style={{ color: "black" }}>
                {item.name} - ${item.price}
                <button>
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
              </li>
            </>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Cart;
