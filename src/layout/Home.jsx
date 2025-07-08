import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";

const Home = ({ products, cargando, cart, agregarCarrito }) => {
  return (
    <>
      <Header cart={cart} />
      <main>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Skateshop</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          cumque, quia libero in minima beatae ex maxime consectetur qui
          cupiditate, laboriosam rem! Accusamus aspernatur ullam est corporis
          iure eaque fugiat.
        </p>

        {cargando ? (
          <img src={loading} alt="loading" />
        ) : (
          <ProductList agregarCarrito={agregarCarrito} cart = {cart} products={products} />
        )}

        <Footer />
      </main>
    </>
  );
};
export default Home;
