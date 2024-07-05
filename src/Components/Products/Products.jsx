import React, { useContext, useEffect } from "react";
import myContext from "../Context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../Redux/CartSlice";

function ProductCard() {
  const context = useContext(myContext);
  const { product, searchkey, filterType, filterPrice } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#fafafa",
        color: "gray",
        fontSize: "16px",
      },
      icon: "🛒",
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = product
    .filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
    .filter((obj) => !filterType || obj.category === filterType)
    .filter((obj) => !filterPrice || obj.price === filterPrice);

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-center">No products found.</p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white max-w-xs cursor-pointer h-auto  duration-700 p-4"
              onClick={() => (window.location.href = `/productinfo/${item.id}`)}
            >
              <div className="aspect-w-1 aspect-h-1 mb-4 overflow-hidden rounded-md">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full transform hover:scale-105 duration-700"
                />
              </div>
              <h2 className="text-md font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{item.category}</p>
              <p className="text-sm text-gray-700 mb-4">₹{item.price}</p>
              <button
                className="focus:outline-none bg-green-800 hover:bg-green-700 text-white border border-green-800 hover:border-green-700 py-2 px-7 hover:scale-95 duration-300 font-medium text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  addCart(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductCard;
