import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, title, price, image, rating } = product;

  return (
    <div className="w-full max-w-sm transition-all duration-500 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:transform hover:scale-[1.02]">
      <Link to={`/product/${id}`}>
        <img
          className="w-full h-[350px] rounded-t-lg p-[20px] mb-[20px] bg-white"
          src={image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/product/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <div className="flex items-center gap-2 mt-2.5 mb-5">
          <span className="font-bold text-yellow-300">Rate:</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
            {rating.rate}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            to={`/product/${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
