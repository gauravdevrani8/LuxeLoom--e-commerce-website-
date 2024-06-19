import React, { useState, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import SubNavBar from "../Subnavbar/SubNavBar";
import myContext from "../Context/MyContext";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";



import { useSelector } from "react-redux";

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
    <div
      className="body-font mx-auto bg-white text-xs shadow-md sticky top-0 z-50"
    >
      <div className="flex text-md font-montserrat md:px-16 justify-end items-center">
        {!user ? (
          <>
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
        ) :  <p className="cursor-pointer text-[0.6rem] font-mono text-gray-500  p-1 "> get Up to 70% off on | Bestselling smartwatches </p>
        }
      </div>
      <div className="container bg-white px-4 max-w-screen-2xl h-10 md:h-14 flex justify-between items-center">
        <div className="flex drop-shadow-lg text-xs mb-2 md:px-2 items-center">
          <Link to="/" className="font-bold bg-transparent text-black flex items-center">
            <h1 className="vertical-text md:p-2 text-lg font-bold font-mono">
              Luxe{" "}
              <span className="font-script drop-shadow-lg text-white bg-green-500 p-1 rounded-md">
                Loom
              </span>
            </h1>
          </Link>
        </div>
        <ul className="hidden md:hidden  lg:flex text-black text-[0.8rem] gap-x-16 font-medium py-2 ">
          <li className="hover:scale-x-105 nav-item">
            <Link to="/" className={`nav-link hover:text-green-500  transition-colors duration-300`}>
              Home
            </Link>
          </li>
          <li className="nav-item hover:scale-x-105">
            <Link to="/about" className={`nav-link hover:text-green-500 transition-colors duration-300`}>
              About
            </Link>
          </li>
          <li className="nav-item hover:scale-x-105">
            <Link to="/allproducts" className={`nav-link hover:text-green-500 transition-colors duration-300`}>
              All Products
            </Link>
          </li>
          <li className="nav-item hover:scale-x-105">
            <Link to="/contact" className={`nav-link hover:text-green-500 transition-colors duration-300`}>
              Contact
            </Link>
          </li>
          {user && user.email === "testuser@gmail.com" && 
            <li className="nav-item hover:scale-x-105">
              <Link to="/dashboard" className="nav-link hover:text-green-500 transition-colors duration-300">
                Admin
              </Link>
            </li>
          }
          
        </ul>
<div className="flex ">
        {/* Search */}
        <div className="relative  hidden md:w-80 md:flex items-center">
          <input
           type="text"
           name="searchkey"
           value={searchkey}
           onChange={(e) => setSearchkey(e.target.value)}
           id="searchkey"
           placeholder="Search here"
            className="block font-light w-full py-2 p-2 md:pl-10 pr-4 md:text-sm bg-gray-100 text-gray-800 placeholder-gray-600 rounded-l-md focus:outline-none focus:border-gray-400 border "
          />
        </div>
        <div className="hidden lg:block">
            <button 
            className="p-[10px] md:p-[9px] bg-green-300 rounded-r-lg focus:outline-none focus:border-gray-400 border shadow-sm">
              <BsSearch 
 className="hover:scale-105 text-lg duration-500 text-gray-900" />
            </button>
          </div>
          </div>
        {/* Cart and Wishlist Icons */}
        <div className="flex w-auto items-center gap-4">

      {user && (
        <Link to="/orders" className="nav-link hover:text-green-500 transition-colors duration-300">
          <IoBagHandleOutline className="text-lg md:text-xl text-black cursor-pointer" />
        </Link>
      )}

      <Link to="/cart" className="hover:text-green-500 transition-colors duration-300 relative">
        <FaOpencart className="text-xl md:text-2xl" />
        <span className="absolute top-1 md:top-0 right-2 md:right-0 -mt-4 -mr-3 bg-green-500 text-white text-[0.5rem] md:text-xs font-semibold rounded-full px-1 md:px-2 md:py-1">
          {cartItems.length}
        </span>
      </Link>
          {user && 
            <button
              className=" hidden hover:border-gray-300 hover:duration-700 lg:block ml-5 hover:scale-90 duration-300  text-gray-600 font-semibold py-2 px-2 border-2 "
              onClick={logout}
            >
              Logout
            </button>
          }

        {/* Hamburger Icon for Small Devices */}
        <div className="lg:hidden">
          {!showSideNav ? (
            <GiHamburgerMenu
              className="text-xl"
              onClick={toggleSideNav}
            />
          ) : (
<RxCross1 
              className="text-2xl"
              onClick={toggleSideNav}
            />
          )}
        </div>
        </div>


        {/* Side Nav for Small Devices */}
        {showSideNav && (
          <div className="fixed inset-0  bg-gray-900 bg-opacity-50 z-50">
            <div className="absolute top-0  right-0 w-64 bg-white h-full shadow-lg">
              <div className="flex justify-end px-4 py-3">
              <RxCross1 

                  className="text-xl cursor-pointer"
                  onClick={() => setShowSideNav(false)}
                />
              </div>
              <ul className="py-6 px-4 text-lg font-genos text-black">
                <li className="mb-4">
                  <Link to="/" className="hover:text-green-500 nav-item transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:text-green-500 transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/allproducts" className="hover:text-green-500 transition-colors duration-300">
                    AllProducts
                  </Link>
                </li>

                <li className="mb-4">
                  <Link to="/contact" className=" hover:text-green-500 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                {user && user.email === "testuser@gmail.com" && (
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link hover:text-green-500 transition-colors duration-300">
                      Admin
                    </Link>
                  </li>
                  
                )}
                {user && 
                  <button
                  className="block mt-5 hover:border-gray-400 hover:duration-700 lg:hidden hover:scale-90 duration-300  text-gray-600 font-semibold py-2 px-2 border-2 "
                  onClick={logout}
                  >
                    Logout
                  </button>
                }
              </ul>
            </div>
          </div>
        )}
      </div>
      <SubNavBar />
    </div>
  );
};

export default Navbar;
