import Product from "./Product";

const ProductList = ({ products, agregarCarrito }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Lista de Productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
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
