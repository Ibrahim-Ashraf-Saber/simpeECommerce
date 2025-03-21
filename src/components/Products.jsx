import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = async () => {
    setIsLoading(true);
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      });
  };

  const getAllCategories = async () => {
    setIsLoading(true);
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setIsLoading(false);
      });
  };

  const getProductsForCategorie = async (categorie) => {
    setIsLoading(true);
    await fetch(`https://fakestoreapi.com/products/category/${categorie}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="text-blue-800 w-full flex items-center justify-center col-span-3 gap-3 text-4xl">
          <i className="bx bx-loader bx-spin"></i>
          Loading...
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center flex-wrap gap-[20px] my-[20px]">
            <button
              onClick={getAllProducts}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              All
            </button>
            {categories.map((categorie) => (
              <button
                className="capitalize text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                key={categorie}
                onClick={() => getProductsForCategorie(categorie)}
              >
                {categorie}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-[20px] px-[50px] my-[20px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
