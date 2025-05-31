import Product from './Product'

const ProductList = ({products,agregarCarrito }) => {
  console.log('products:', products);

  return (
    <>
    <h2>Lista de Productos</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map(product => (
        <Product key={product.id} 
    product={product} 
    addToCart={addToCart} agregarCarrito={agregarCarrito} />
      ))}
    </div>
  </>
  )
}

export default ProductList
