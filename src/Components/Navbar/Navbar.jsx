import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import myContext from "../Context/MyContext";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { GiImperialCrown } from "react-icons/gi";

import { useSelector } from "react-redux";
import SearchComponent from "../Search/Search";

const Navbar = () => {
  const context = useContext(myContext);
  const { searchkey, setSearchkey } = context;

  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className=" mx-auto bg-white text-xs border-b sticky top-0 z-50">
      <div className="flex text-md bg-green-800 md:h-8 h-7 text-white font-montserrat md:px-16 justify-end items-center">
        {!user ? (
          <>
            <h2 className="absolute hidden md:block left-[41%] font-cinzel text-[1.1rem] top-2">
              Grab the best deals here !
            </h2>

            <Link
              to="/login"
              className="hover:text-green-500 transition-colors duration-300 mr-2 hover:scale-x-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-green-500 transition-colors duration-300 hover:scale-x-105"
            >
              /Signup
            </Link>
          </>
        ) : (
          <p className="cursor-pointer text-[0.6rem] font-cinzel text-white  p-1 ">
            {" "}
            get Up to 70% off on | Bestselling smartwatches{" "}
          </p>
        )}
      </div>
      <div className="container bg-white px-2 md:px-4 max-w-screen-2xl h-14 md:h-24 flex justify-between items-center">
        <ul className="hidden md:hidden font-normal font-league-spartan lg:flex text-black text-[0.9rem] gap-x-14  py-2 ">
          <li className=" nav-item">
            <Link
              to="/"
              className={`nav-link hover:text-green-500  transition-colors duration-300`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link hover:text-green-500 transition-colors duration-300`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/allproducts"
              className={`nav-link hover:text-green-500 transition-colors duration-300`}
            >
              All Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link hover:text-green-500 transition-colors duration-300`}
            >
              Contact
            </Link>
          </li>
          {user && user.email === "admin08@gmail.com" && (
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link hover:text-green-500 transition-colors duration-300"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
        <div className="flex text-xs md:ml-28 items-center">
          <Link
            to="/"
            className="font-bold bg-transparent text-gray-500 flex items-center"
          >
            <GiImperialCrown className="mr-1 text-4xl" />{" "}
            {/* Adjust margin as needed */}
            <h1 className=" md:p-2 text-sm md:text-2xl font-bold font-league-spartan ">
              Luxe
              <span className="font-poiret border-2 px-2 py-1 border-gray-400  text-gray-800 ml-2 ">
                Loom
              </span>
            </h1>
          </Link>
        </div>

        <div className="flex space-x-4">
          <SearchComponent />
          {/* Cart and Wishlist Icons */}
          <div className="flex w-auto items-center gap-4">
            {user && (
              <Link
                to="/orders"
                className="nav-link hover:text-green-500 transition-colors duration-300"
              >
                <IoBagHandleOutline className="text-lg md:text-xl text-black cursor-pointer" />
              </Link>
            )}

            <Link
              to="/cart"
              className="hover:text-green-500 transition-colors duration-300 relative"
            >
              <FaOpencart className="text-xl md:text-2xl" />
              <span className="absolute top-1 md:top-0 right-2 md:right-0 -mt-4 -mr-3 bg-gray-500 text-white text-[0.5rem] md:text-xs font-semibold rounded-full px-1 md:px-2 md:py-1">
                {cartItems.length}
              </span>
            </Link>
            <button className=" bg-green-800  hidden md:ml-5 md:block text-white font-bold py-3 px-4">
              Get Prime
            </button>
          </div>
          {user && (
            <button
              className=" hidden hover:border-gray-300  hover:duration-700 lg:block ml-5 hover:scale-90 duration-300  text-gray-600 font-semibold py-2 px-4 border-2 "
              onClick={logout}
            >
              Logout
            </button>
          )}

          {/* Hamburger Icon for Small Devices */}
          <div className="lg:hidden">
            {!showSideNav ? (
              <GiHamburgerMenu className="text-xl" onClick={toggleSideNav} />
            ) : (
              <RxCross1 className="text-2xl" onClick={toggleSideNav} />
            )}
          </div>
        </div>

        {/* Side Nav for Small Devices */}
        {showSideNav && (
          <div className="fixed inset-0 text-black bg-gray-900 bg-opacity-0 z-50">
            <div className="absolute top-0  right-0 w-full bg-[#ffffff] h-full shadow-lg">
            <div className="flex text-xs md:ml-28 items-center justify-center mt-3">
          <Link
            to="/"
            className="font-bold bg-transparent text-gray-500 flex items-center"
          >
            <GiImperialCrown className="mr-1 text-4xl" />{" "}
            {/* Adjust margin as needed */}
            <h1 className=" md:p-2 text-sm md:text-2xl font-bold font-league-spartan ">
              Luxe
              <span className="font-poiret border-2 px-2 py-1 border-gray-400  text-gray-800 ml-2 ">
                Loom
              </span>
            </h1>
          </Link>
        </div>

              <div className="flex justify-end px-4 py-3">
                <RxCross1
                  className="text-xl cursor-pointer"
                  onClick={() => setShowSideNav(false)}
                />
              </div>
              <ul className="py-6 px-4 text-center text-lg font-league-spartan text-black">
                <li className="mb-4">
                  <Link
                    to="/"
                    className="hover:text-green-500  transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/about"
                    className="hover:text-green-500 transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/allproducts"
                    className="hover:text-green-500 transition-colors duration-300"
                  >
                    AllProducts
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    to="/contact"
                    className=" hover:text-green-500 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                {user && user.email === "admin08@gmail.com" && (
                  <li className="nav-item">
                    <Link
                      to="/dashboard"
                      className=" text-white hover:text-green-500 transition-colors duration-300"
                    >
                      Admin
                    </Link>
                  </li>
                )}
                <div className="grid w-full h-fit  font-league-spartan text-sm">
                <button className="border border-gray-600 h-10 text-gray-800 block md:hidden font-bold px-6 ">
                  Get Prime
                </button>

                {user && (
                  <button
                    className=" mt-5 hover:bg-white hover:text-ray-800 hover:duration-700 bg-black text-white font-semibold py-2 px-6 h-10 "
                    onClick={logout}
                  >
                    Logout
                  </button>
                )}
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
