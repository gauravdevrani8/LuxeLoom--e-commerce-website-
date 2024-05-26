import React from 'react';
import { FaTruck, FaShieldAlt, FaUndoAlt, FaHeadset, FaSmile, FaGift } from 'react-icons/fa';
import FaqSection from '../FAQ';

const WhyUsSection = () => {
  return (
  <>
    <div className="bg-[#fafbfb] border p-6 mb-10 ">

      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-caveat text-center mb-8 text-gray-900 animate-shake font-bold">Why <span className='text-green-500'>Choose Us?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fast Delivery */}
          <div className="bg-white rounded-lg hover:shadow-xl transition duration-700 transform hover:-translate-y-2">
            <div className="flex flex-col items-center p-8">
              <FaTruck className="animate-bounce  text-4xl text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Super Fast and Free Delivery</h3>
              <p className="text-sm text-gray-700 text-center">Get your orders swiftly delivered with our express delivery service. We ensure your items reach you on time, every time.</p>
            </div>
          </div>
          
          {/* Secure Payments */}
          <div className="bg-white rounded-lg hover:shadow-xl transition duration-700 transform hover:-translate-y-2">
            <div className="flex flex-col items-center p-8">
              <FaShieldAlt className="animate-bounce text-4xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Secure Transactions</h3>
              <p className="text-sm text-gray-700 text-center">Shop with confidence knowing that your payments are securely processed through our encrypted payment gateway.</p>
            </div>
          </div>
          
          {/* Easy Returns */}
          <div className="bg-white rounded-lg hover:shadow-xl transition duration-700 transform hover:-translate-y-2">
            <div className="flex flex-col items-center p-8">
              <FaUndoAlt className=" animate-bounce text-4xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Hassle-free Returns</h3>
              <p className="text-sm text-gray-700 text-center">Not satisfied? No problem! Enjoy our hassle-free return policy that ensures a seamless and stress-free return process.</p>
            </div>
          </div>
          
          {/* Excellent Customer Support */}
          <div className="bg-white rounded-lg  hover:shadow-xl transition duration-700 transform hover:-translate-y-2">
            <div className="flex flex-col items-center p-8">
              <FaHeadset className="animate-bounce text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">24/7 Customer Support</h3>
              <p className="text-sm text-gray-700 text-center">Our dedicated support team is available round the clock to assist you with any inquiries or concerns. Your satisfaction is our priority.</p>
            </div>
          </div>
          
          {/* Customer Satisfaction */}
          <div className="bg-white rounded-lg hover:shadow-xl transition duration-700 transform hover:-translate-y-2">
            <div className="flex flex-col items-center p-8">
              <FaSmile className="animate-bounce text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Customer Happiness</h3>
              <p className="text-sm text-gray-700 text-center">We strive to ensure every customer leaves with a smile. Your happiness and satisfaction are at the heart of everything we do.</p>
            </div>
          </div>
          
          {/* Wide Product Range */}
          <div className="bg-white rounded-lg  hover:shadow-xl transition duration-700 transform hover:-translate-y-2">
            <div className="flex flex-col items-center p-8">
              <FaGift className="animate-bounce text-4xl text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 ">Diverse Product Range</h3>
              <p className="text-sm text-gray-700 text-center">Discover a diverse range of high-quality products curated to meet your unique needs and preferences. There's something for everyone!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='relative translate'>
    <FaqSection />
    </div>
    </>
  );
}

export default WhyUsSection;
