import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => setProduct(res));
    };
    getProduct();
  }, [id]);

  console.log(product);

  return (
    <div className="min-h-screen dark:bg-gray-800">
      <Nav />
      <div className="dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center w-full bg-white dark:bg-gray-800">
          <img
            className="p-8 rounded-t-lg h-[350px]"
            src={product.image}
            alt="product image"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <h3 className="max-w-sm text-center text-sm font-semibold tracking-tight text-gray-900 my-[20px] dark:text-white">
              {product.description}
            </h3>
            <div className="flex items-center justify-center gap-2 mt-2.5 mb-5">
              <span className="font-bold text-yellow-300">Rate:</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                {product.rating?.rate}
              </span>
            </div>
            <div className="flex items-center justify-center text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
