import Product from "./Product";


//productList recive los productos y se encarga de mapearlos para mostrarlos en pantalla como una lista de productos.
const ProductList = ({ products, agregarCarrito }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Lista de Productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" ,gap: "20px" }}>
        {products.map((product, index) => (
          <Product
            key={product.id}
            product={product}
            agregarCarrito={agregarCarrito}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
