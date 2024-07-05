import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#ffffff] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Section 1: About Us */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">About Us</h3>
            <p className="text-gray-600">
            We aim to be your trusted online destination for all your
                    shopping needs, offering an extensive range of products and
                    exceptional service.
            </p>
          </div>

          {/* Footer Section 2: Quick Links */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="text-gray-600 text-sm space-y-2">
            <li className="hover:scale-x-105 nav-item">
            <Link to="/" className={`nav-link hover:text-green-500 transition-colors duration-300`}>
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
              AllProducts
            </Link>
          </li>
          <li className="nav-item hover:scale-x-105">
            <Link to="/contact" className={`nav-link hover:text-green-500 transition-colors duration-300`}>
              Contact
            </Link>
          </li>
            </ul>
          </div>

          {/* Footer Section 3: Newsletter Subscription */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Subscribe to Our Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white px-4 py-2  mb-4 w-full"
              />
              <button
                type="submit"
                className="border-2 border-gray-800 bg-white hover:scale-105 duration-500 text-black px-6 py-2  w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Section 4: Social Media Links */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="text-2xl text-gray-600 hover:text-gray-900">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-600 hover:text-gray-900">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl text-gray-600 hover:text-gray-900">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray1600 mt-8">
          &copy; {new Date().getFullYear()} Luxe Loom All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
