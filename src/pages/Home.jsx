import Nav from "../components/Nav";
import Products from "../components/Products";

function Home() {
  return (
    <>
      <Nav />
      <h1 className="capitalize text-center my-[20px] text-4xl md:text-6xl font-bold text-red-900">
        our products
      </h1>
      <Products />
    </>
  );
}

export default Home;
