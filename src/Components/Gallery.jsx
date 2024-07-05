import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Trending Products</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl md:text-lg">
            Explore the forefront of unique innovation with our latest selection of cutting-edge products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-8">
          <GalleryItem image="https://www.thehorse.com.au/cdn/shop/files/BM16_800x.jpg?v=1701399214" label="Accessories" />
          <GalleryItem image="https://cb.scene7.com/is/image/Crate/CarawayHmNSCrCkw7pSphSSS22?$web_pdp_main_carousel_med$" label="Kitchen Essentials" span={2} />
          <GalleryItem image="https://cb.scene7.com/is/image/Crate/CB_SP24_DA_48_310_Vert_001_V2?$web_pdp_main_carousel_med$" label="Living Room" span={2} />
          <GalleryItem image="https://cb.scene7.com/is/image/Crate/TovoloSwtTrtIceCreamTubAV2SSS23?$web_pdp_main_carousel_med$" label="Ice Cream Gadgets" />
          <GalleryItem image="https://cb.scene7.com/is/image/Crate/CB_H23_MCB_24_204_Hor-Vert_001_v1?$web_pdp_main_carousel_med$" label="Home Decor" />
          <GalleryItem image="https://cb.scene7.com/is/image/Crate/XLBerryBoxWhiteSSS22?$web_pdp_main_carousel_med$" label="Fresh Fruits" />
        </div>
        <div className="mt-8 text-center">
          <Link to="/allproducts" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

const GalleryItem = ({ image, label, span = 1 }) => {
  return (
    <a href="#" className={`group relative block overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:col-span-${span}`}>
      <img
        src={image}
        loading="lazy"
        alt={`Photo by ${label}`}
        className="object-cover object-center w-full h-64 md:h-80 transform transition-transform group-hover:scale-105 duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-x-0 bottom-0 px-4 py-2 bg-gray-800 bg-opacity-5 text-white text-sm md:text-lg">
        <span className="">{label}</span>
      </div>
    </a>
  );
};

export default Gallery;
