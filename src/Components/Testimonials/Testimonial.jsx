import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <section className="mb-10 text-gray-800">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light font-caveat mb-6 text-gray-900">
            Customer <span className="text-green-500">Testimonials</span>
          </h2>
          <p className="text-gray-600 font-quicksand">
            See what our satisfied customers have to say
          </p>
        </div>
        <div className="flex justify-center space-x-4">
      <button className="bg-red-500 text-white py-2 px-4 hover:scale-105 duration-500">
      <Link to="/contact">
              Contact
            </Link>
      </button>
      <button className="border border-gray-300 text-black py-2 px-4 hover:scale-105 duration-500">
        Preview
      </button>
    </div>

        <div className="grid grid-cols-1 m-1 lg:m-8 lg:p-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="I'm incredibly impressed with the service and product quality! The team exceeded my expectations with their professionalism and attention to detail."

            
            author="John Doe"
          />
          <TestimonialCard
            quote="The service was exceptional and the product exceeded my expectations. Highly recommend this company for their dedication to customer satisfaction."


            author="Jane Smith"
          />
          <TestimonialCard
            quote="Amazing experience from start to finish! The team's professionalism and quality of service were top-notch."






            author="Alex Johnson"
          />
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="shadow-lg rounded-lg p-8 bg-white text-gray-800 flex flex-col hover:scale-105 duration-500 justify-between border border-gray-200 transform transition-transform hover:shadow-xl">
      <div className="flex items-start mb-4">
        <FaQuoteLeft className="text-6xl mr-4 text-indigo-600" />
        <p className="text-lg">{quote}</p>
      </div>
      <p className="text-sm font-semibold text-right">- {author}</p>
    </div>
  );
};

export default Testimonial;
