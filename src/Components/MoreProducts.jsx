import React from "react";
import image from "../assets/img1.jpg";

const MoreProducts = () => {
  return (<>

                    <h1 className="ml-5 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Latest Collection</h1>
                    <div className="h-1 ml-5 w-20 bg-pink-600 rounded"></div>

  <h2 className="font-montserrat font-bold  text-center ">Your Space, Your Style: Find Unique Home Decor Gems
</h2>

    <div className="flex justify-center items-center h-auto border-gray-200">
      <img
        src={image}
        alt=""
        className="max-w-[80vw] cursor-pointer h-auto m-10 justify-center transition-opacity object-cover duration-500 ease-in-out"
      />
    </div>
    </>
  );
};

export default MoreProducts;
