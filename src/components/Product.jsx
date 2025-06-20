import React, { useState } from "react";
import "./styleProductos.css";

const Product = ({ product, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const increase = () => setCantidad(console.log(product));
  const decrease = () => setCantidad(console.log(product));

  return (
    <section className="card">
      <div src="imagencontainer">
        <img src={product.imagen} alt="" className="imagen" />
      </div>

      <h3 className="nombre">{product.nombre}</h3>
      <p className="precio">${product.precio}</p>
      <p className="stock">{product.stock}</p>

      <div className="cantidadConteiner">
        <button className="qtyButton" onClick={() => decrease(product)}>
          -
        </button>
        <span>
          {product.name} - ${product.price}
        </span>
        <button className="qtyButton" onClick={() => increase(product)}>
          +
        </button>
      </div>

      <button onClick={() => (agregarCarrito = product)}>
        Agregar al Carrito
      </button>
    </section>
  );
};

export default Product;
