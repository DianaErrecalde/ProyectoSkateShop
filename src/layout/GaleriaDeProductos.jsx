import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const GaleriaDePoductos = ({products,cargando,cart,agregarCarrito}) => {
  return (
    <>
    <Header cartItems={cart}/>
      <h1>Galería de Productos</h1>
      {
        cargando ? <img src={loading} alt= 'loading' /> :
        <ProductList agregarCarrito= {agregarCarrito} products={products}/>
      }
    <Footer/> 
    </>
  )
}

export default GaleriaDePoductos
