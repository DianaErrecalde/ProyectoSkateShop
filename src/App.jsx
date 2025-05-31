import { useState, useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom' 
import Home from './layout/Home'  
import Contactos from './layout/Contactos'
import AcercaDe from './layout/AcercaDe'
import GaleriaDeProductos from './layout/GaleriaDeProductos'
import NotFound from './layout/NotFound'
//componente padre de home
function App() {

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true) // Estado para controlar la carga de productos
  const [error, setError] = useState(false) // Estado para manejar errores
  useEffect(() => {
    fetch('/Data/data.json')
    then(respuesta=>respuesta.json())
    then(datos => {
      setTimeout(()=>{
        setProducts(datos)
        setCargando(false) // Cambia el estado a false una vez que los datos se han cargado
      })
    })
    .catch(error => {
      console.log('Error al cargar los productos:', error)
      setCargando(false) // Cambia el estado a false en caso de error
      setError(true) // Cambia el estado de error a true
    })
  
  },[])

  const handleAddToCart = (product) => {

    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
    }else{ // Si el producto no está en el carrito, agrégalo con cantidad 1
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };

  return (
    <Router>
      <Routes>

        <Route path='/' element= {<Home agregarCarrito={handleAddToCart} carts ={cart} products = {products} 
        cargando= {cargando}/>}/>

        <Route path = '/acercade' element={<AcercaDe carts ={cart}/>}/>  

        
        <Route path = '/productos' element={<GaleriaDeProductos agregarCarrito={handleAddToCart} carts ={cart} products = {products} cargando= {cargando}/>}/>
        
        <Route path = '/contacto' element={<Contactos carts ={cart}/>}/>
        
        <Route path = '/' element={<NotFound/>}/>

      </Routes>
    </Router>
  )
}

export default App
//<Home cart= {cart} handleAddToCart={handleAddToCart}/>