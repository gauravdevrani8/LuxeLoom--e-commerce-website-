import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import myContext from "../../Components/Context/MyContext";
import Modal from "../../Components/Verify/Verify";
import { MdDeleteOutline } from "react-icons/md";
import { deleteFromCart } from "../../Redux/CartSlice";

function Cart() {
  const {} = useContext(myContext); // Replace with your context if needed
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp += parseInt(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = parseInt(100); // Example shipping cost

  const grandTotal = shipping + totalAmount;

  return (
    <div className="min-h-screen font-league-spartan bg-gray-100 py-12 px-4 sm:px-6 lg:px-">
      <div className="max-w-screen  bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 bg-gray-200 py-6 px-8 border-b border-gray-300">
          Cart Products
        </h1>
        <div className="p-6 md:p-8">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-lg shadow-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    Price: ₹{item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => deleteCart(item)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                <MdDeleteOutline className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 py-6 px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Order Summary
            </h2>
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Total: ₹{grandTotal}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-gray-700">
              <p>Subtotal:</p>
              <p>Shipping:</p>
            </div>
            <div className="text-gray-700">
              <p>₹{totalAmount}</p>
              <p>₹{shipping}</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="mt-4">
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
