import React from 'react';
import ProductList from '../components/ProductList';
import loading from '../assets/loading.gif';
import { useState, useEffect } from 'react';
import { useCart } from '../contexts/cartContext';

const GaleriaDePoductos = () => {

  const { products, setProducts } = useCart();
  const [cargando, setCargando] = useState(false);

  const cargarProductos = () => {
    setCargando(true);
    fetch('https://6844866e71eb5d1be03386de.mockapi.io/productos-ecommerce/productos')
      .then((respuesta) => respuesta.json())    
      .then((datos) => {
        const products = datos.map((producto) => {
          return  {
            ...producto,
            cantidad: 0
          };
        });
        setProducts(products);
        setCargando(false);
      })    
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
        setCargando(false);
      });
  }
  
  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <>
      <h1>Galería de Productos</h1>
      {
        cargando && (<img src={loading} alt='loading' />)
      }
      {
        products && products.length > 0 && (<ProductList />)
      }
      {
        !cargando && products.length < 1 && (<h1>No hay productos</h1>)
      }
    </>
  )
}

export default GaleriaDePoductos
