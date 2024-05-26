import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import myContext from "../../Components/Context/MyContext";
import Modal from "../../Components/Verify/Verify";
import { MdDeleteOutline } from "react-icons/md";
import { deleteFromCart } from "../../Redux/CartSlice";
import { collection } from "firebase/firestore";

function Cart() {
  const {} = useContext(myContext);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp += parseInt(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = parseInt(0);

  const grandTotal = shipping + totalAmout;

  return (
    <div className="min-h-screen flex  font-normal justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white m-5 border-2 rounded-lg flex flex-col sm:flex-row">
        <div className="flex-1 border-r border-gray-200">
          <h1 className=" text-lg md:text-2xl font-semibold  text-gray-700 p-8 border-b border-gray-200">
            Your Cart
          </h1>
          <div className="p-1">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-md border-b m-10 border-gray-200 py-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-lg mr-6"
                />
                <div className="flex-1">
                  <h2 className=" text-sm md:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <p className="mt-1 text-xs font-semibold text-gray-700">
                    Price: ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => deleteCart(item)}
                  className="ml-auto focus:outline-none"
                >
                  <MdDeleteOutline className=" md:w-6 md:h-6 ml-4 text-gray-700" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-72 p-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">₹{totalAmout}</p>
              <p className="text-gray-700">₹100</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">₹{shipping}</p>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">₹{grandTotal}</p>
            </div>
            <div className="mt-6">
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
