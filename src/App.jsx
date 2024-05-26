import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Registration/Login";
import Signup from "./Pages/Registration/Signup";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Dashboard from "./Pages/Admin/Dashboard";
import AddProducts from "./Pages/Admin/AddProducts";
import UpdateProducts from "./Pages/Admin/UpdateProducts";
import MyData from "./Components/Context/MyData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Offers from "./Pages/Offers/Offers";
import ProductInfo from "./Pages/Productinfo/Productinfo";
import Allproducts from "./Pages/AllProducts";
const App = () => {

  return (
    <>
        <MyData>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/allproducts" element={<Allproducts />} />
              <Route
                path="/offers"
                element={
                  <ProtectedRoute>
                    <Offers />
                  </ProtectedRoute>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/productinfo/:id" element={<ProductInfo />} />
              <Route
                path="/addproducts"
                element={
                  <ProtectedRouteForAdmin>
                    <AddProducts />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route
                path="/updateproducts"
                element={
                  <ProtectedRouteForAdmin>
                    <UpdateProducts />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRouteForAdmin>
                    <Dashboard />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
            <ToastContainer />
          </Router>
        </MyData>
    
      
    </>
  );
};

// User
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if(user) {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
}

// Admin
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));

  // Check if admin is defined and has the email property
  if (admin && admin.email === 'testuser@gmail.com') {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
};

export default App;
