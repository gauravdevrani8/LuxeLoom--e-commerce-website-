import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
    <div className="bg-white dark:bg-gray-800 min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Technology</h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
            "Explore the forefront of technological innovation with our latest selection of cutting-edge products"





 
            </p>
          </div>
          <button className="nav-item border p-2 text-gray-700 border-gray-700">
            <Link to="/allproducts">
              AllProducts
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <GalleryItem image="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" label="VR" />
          <GalleryItem image="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" label="Tech" span={2} />
          <GalleryItem image="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" label="Dev" span={2} />
          <GalleryItem image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" label="Retro" />
          <GalleryItem image="https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" label="Retro" />
          <GalleryItem image="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" label="Accesories" />
        </div>
      </div>
    </div>
    </>
  );
};

const GalleryItem = ({ image, label, span = 1 }) => {
  return (
    <>
    <a href="#" className={`group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-${span} md:h-80`}>
      <img src={image} loading="lazy" alt={`Photo by ${label}`} className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{label}</span>
    </a>
    </>
  );

};

export default Gallery;
