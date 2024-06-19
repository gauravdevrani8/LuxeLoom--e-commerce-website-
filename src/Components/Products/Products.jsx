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
        backgroundColor: '#fafafa', 
        color: 'gray',
        fontSize: '16px',
      },
      icon: "🛒", // custom icon
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
    <div className="container mx-auto px-4 mt-5" >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              
              className="bg-white cursor-pointer h-auto w-full border rounded-md  hover:border-gray-400 duration-700 border-gray-300 p-4"
              onClick={() => (window.location.href = `/productinfo/${item.id}`)}
            >
              <img src={item.imageUrl} alt={item.title} className="w-full rounded-md h-auto hover:scale-110 duration-700 object-cover mb-4" />
              <h2 className="text-md font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{item.category}</p>
              <p className="text-sm text-gray-700 mb-4">${item.price}</p>
              <button
                className="focus:outline-none hover:border-gray-400 rounded-md duration-700 text-gray-700 border hover:scale-90 hover:duration-300 font-medium text-sm px-4 py-2.5"
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
      <div className="m-10">
      </div>
    </div>
  );
}

export default ProductCard;
