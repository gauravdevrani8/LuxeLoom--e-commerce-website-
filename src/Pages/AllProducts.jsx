import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import myContext from "../Components/Context/MyContext";
import Filter from "../Components/Filter/Filter";
import FaqSection from "../Components/FAQ";
import { toast } from "react-toastify";

function Allproducts() {
  const context = useContext(myContext);
  const { product, searchkey, filterType, filterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Filter />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Latest Collection
            </h1>
            <div className="h-1 w-20 bg-pink-600"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => {
                const { title, price, imageUrl, id } = item;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 m-6 overflow-hidden flex flex-col justify-between"
                  >
                    <div
                      className="flex justify-center items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
                      onClick={() => (window.location.href = `/productinfo/${id}`)}
                    >
                      <img
                        className="w-full h-48 object-cover object-center"
                        src={imageUrl}
                        alt="product image"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <h2 className="text-lg font-semibold tracking-tight mb-1">
                        {title}
                      </h2>
                      <div className="flex items-center mt-2.5 mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(4)].map((_, index) => (
                            <svg
                              key={index}
                              className="w-3 h-3 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded ms-2 truncate">
                            5.0
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-auto">
                        <p className="text-gray-400 leading-relaxed mb-3">
                          ₹{price}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            addCart(item);
                          }}
                          className="focus:outline-none text-white bg-green-800 border-2 hover:scale-90 duration-300 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-2.5"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}

export default Allproducts;
