import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../features/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products,
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const getQuantity = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      return item.quantity;
    } else {
      return 0;
    }
  };
  return (
    <div className="w-full py-4 px-4 lg:px-20 gap-6 bg-violet-100 rounded-lg grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((product) => (
        <div
          className="relative w-full h-72 bg-white rounded-lg shadow-2xs"
          key={product.id}
        >
          <div className="w-full h-1/2 bg-indigo-200 rounded-t-lg flex justify-center items-center">
            <img src="img.jpg" alt="No Image" />
            <span className="absolute bg-slate-800 text-white p-1 text-xs rounded-sm top-1 left-1">
              {product.discount}% off
            </span>
          </div>

          <div className="w-full h-1/2 p-2 flex flex-col justify-between ">
            <div>
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-xs text-gray-500">{product.weight}</p>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{product.price}</h3>
                <p className="text-sm text-gray-500 line-through">
                  {product.MRP}
                </p>
              </div>
            </div>

            <div className="mx-auto px-4 h-7 w-full text-white flex mb-2 ">
              {getQuantity(product.id) === 0 ? (
                <button
                  className="bg-green-500 w-full rounded-lg hover:bg-green-600"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add
                </button>
              ) : (
                <div className="flex w-full">
                  <button
                    className="bg-green-500 w-1/3 rounded-l-lg hover:bg-green-600"
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                  >
                    -
                  </button>

                  <p className="w-1/3 border border-green-500 text-black flex justify-center items-center">
                    {getQuantity(product.id)}
                  </p>

                  <button
                    className="bg-green-500 w-1/3 rounded-r-lg hover:bg-green-600"
                    onClick={() => dispatch(increaseQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
