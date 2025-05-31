import React, { useState } from 'react';
import'./styleProductos.css';


const Product = ({ product, agregarCarrito}) => {
  const [cantidad, setCantidad] = useState(1);
  const increase = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));


  return (
    <section className="card">
      <div src="imagencontainer">
        <img src={product.imagen} alt="" className="imagen" />
      </div>

      <h3 className="nombre">{product.nombre}</h3>
      <p className="precio">${product.precio}</p>
      <p className="stock">{product.stock}</p>

      <div className="cantidadConteiner">
        <button className="qtyButton">-</button>
        <span>
          {product.name} - ${product.price}
        </span>
        <button className="qtyButton" onClick={() => addToCart(product)}>Add to Cart +</button>
      </div>

      <buttoon onClick= {()=> agregarCarrito=(product)}>Agregar al Carrito</buttoon>
    </section>
  );
};

export default Product;
