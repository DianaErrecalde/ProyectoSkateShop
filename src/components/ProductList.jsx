import React from "react";
import Product from "./Product";
import { useCart } from "../contexts/cartContext";

const ProductList = () => {

  const { products } = useCart();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap: "20px" }}>
      {products.map((product, index) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
