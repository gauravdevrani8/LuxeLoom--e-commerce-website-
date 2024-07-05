import React from 'react';
import { FaTruck, FaShieldAlt, FaUndoAlt, FaHeadset, FaSmile, FaGift } from 'react-icons/fa';
import FaqSection from '../FAQ';

const WhyUsSection = () => {
  return (
    <section className=" py-12">
      <div className="container pb-8 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-3xl font-poiretf text-center text-gray-900 mb-8">
          Why <span className="text-green-500">Choose Us?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fast Delivery */}
          <div className="bg-transparent rounded hover:shadow-lg transition duration-300">
            <div className="p-6">
              <FaTruck className="text-4xl text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Super Fast and Free Delivery</h3>
              <p className="text-md font-league-spartan text-gray-700 text-center">Get your orders swiftly delivered with our express delivery service. We ensure your items reach you on time, every time.</p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="bg-transparent rounded  hover:shadow-lg transition duration-300">
            <div className="p-6">
              <FaShieldAlt className="text-4xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Secure Transactions</h3>
              <p className="text-md font-league-spartan text-gray-700 text-center">Shop with confidence knowing that your payments are securely processed through our encrypted payment gateway.</p>
            </div>
          </div>

          {/* Easy Returns */}
          <div className="bg-transparent rounded  hover:shadow-lg transition duration-300">
            <div className="p-6">
              <FaUndoAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Hassle-free Returns</h3>
              <p className="text-md font-league-spartan text-gray-700 text-center">Not satisfied? No problem! Enjoy our hassle-free return policy that ensures a seamless and stress-free return process.</p>
            </div>
          </div>

          {/* Excellent Customer Support */}
          <div className="bg-transparent rounded hover:shadow-lg transition duration-300">
            <div className="p-6">
              <FaHeadset className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">24/7 Customer Support</h3>
              <p className="text-md font-league-spartan text-gray-700 text-center">Our dedicated support team is available round the clock to assist you with any inquiries or concerns. Your satisfaction is our priority.</p>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-transparent rounded hover:shadow-lg transition duration-300">
            <div className="p-6">
              <FaSmile className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Customer Happiness</h3>
              <p className="text-md font-league-spartan text-gray-700 text-center">We strive to ensure every customer leaves with a smile. Your happiness and satisfaction are at the heart of everything we do.</p>
            </div>
          </div>

          {/* Wide Product Range */}
          <div className="bg-transparent rounded hover:shadow-lg transition duration-300">
            <div className="p-6">
              <FaGift className="text-4xl text-pink-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Diverse Product Range</h3>
              <p className="text-md font-league-spartan text-gray-700 text-center">Discover a diverse range of high-quality products curated to meet your unique needs and preferences. There's something for everyone!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <FaqSection />
      </div>
    </section>
  );
};

export default WhyUsSection;
