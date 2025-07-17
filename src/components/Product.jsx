import React, { useState } from "react";
import "./styleProductos.css";
import { useCart } from "../contexts/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product }) => {
  const [unidades, setUnidades] = useState(0);
  const { addToCart } = useCart();

  const agregarCantidad = () => {
    if (unidades >= product.stock) {
      alert("No puedes agregar más de lo que hay en stock");
      return;
    }
    setUnidades(unidades + 1);
  };

  const restarCantidad = () => {
    if (unidades <= 0) {
      alert("No puedes restar más de lo que tienes");
      return;
    }
    setUnidades(unidades - 1);
  };

  return (
    <section className="card">
      <div className="imagenContainer">
        <img src={product.imagen} alt="" className="imagen" />
      </div>
      <h3 className="nombre">{product.nombre}</h3>
      <p className="precio">Precio: ${product.precio}</p>
      <p className="stock">Stock: {product.stock}</p>
      <div className="cantidadConteiner">
        <button onClick={restarCantidad}>-</button>
        <p style={{ color: "black" }}>{unidades}</p>
        <button onClick={agregarCantidad}>+</button>
      </div>
      <button
        className="btn-cart"
        onClick={() => {
          if (unidades > 0) {
            addToCart(product, unidades);
            setUnidades(0);
          }
        }}
      >
        Agregar
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </section>
  );
};

export default Product;