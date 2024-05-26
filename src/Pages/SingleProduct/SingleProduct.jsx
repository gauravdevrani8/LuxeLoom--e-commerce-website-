import React from 'react';
import { FaStar } from 'react-icons/fa';

function SingleProduct() {
    return (
        <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
                    <img
                        alt="product"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow-md"
                        src="https://dummyimage.com/400x400"
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm text-gray-500 uppercase tracking-wider">
                            Brand Name
                        </h2>
                        <h1 className="text-gray-900 text-3xl font-medium mb-4">
                            The Catcher in the Rye
                        </h1>
                        <div className="flex items-center mb-4">
                            <span className="flex items-center text-gray-600">
                                <FaStar className="w-4 h-4 text-indigo-500" />
                                <FaStar className="w-4 h-4 text-indigo-500" />
                                <FaStar className="w-4 h-4 text-indigo-500" />
                                <FaStar className="w-4 h-4 text-indigo-500" />
                                <FaStar className="w-4 h-4 text-indigo-500" />
                                <span className="ml-1">4 Reviews</span>
                            </span>
                        </div>
                        <p className="leading-relaxed border-b-2 pb-5 mb-5">
                            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
                            cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
                            tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
                            shorts keytar banjo tattooed umami cardigan.
                        </p>
                        <div className="flex items-center">
                            <span className="text-2xl font-medium text-gray-900 mr-4">
                                $58.00
                            </span>
                            <button className="flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                Add To Cart
                            </button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center text-gray-500 ml-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleProduct;
