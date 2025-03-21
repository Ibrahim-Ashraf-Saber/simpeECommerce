import ImageSlider from "../components/ImageSlider";
import Nav from "../components/Nav";
import Products from "../components/Products";

function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      <Nav />
      <ImageSlider />
      <h1 className="capitalize text-center my-[20px] text-4xl md:text-6xl font-bold text-red-900 dark:text-yellow-400">
        our products
      </h1>
      <Products />
    </div>
  );
}

export default Home;
