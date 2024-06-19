import React, { useState, useEffect, useRef } from 'react';
import WhyUsSection from '../../Components/WhyUsSection/WhyUsSection';
import TrustedByCompaniesSection from '../../Components/TrustedBy/TrustedBy';
import bannerImage from '../../assets/banner.jpg';
import bannerImage1 from '../../assets/banner1.jpg';
import bannerImage2 from '../../assets/banner2.jpg';
import bannerImage3 from '../../assets/banner3.jpg';
import bannerImage4 from '../../assets/banner4.jpg';
import bannerImage5 from '../../assets/banner5.jpg';
import Filter from '../../Components/Filter/Filter';
import ProductCard from '../../Components/Products/Products';
import Testimonial from '../../Components/Testimonials/Testimonial';
import Gallery from '../../Components/Gallery';
import MoreProducts from '../../Components/MoreProducts';


const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const banners = [bannerImage, bannerImage1, bannerImage2, bannerImage3, bannerImage4, bannerImage5];
  const bannerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prevIndex =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [banners.length]);


  useEffect(() => {
    banners.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, [banners]);

  useEffect(() => {
    const handleScroll = () => {
      const rect = bannerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        banners.forEach((image, index) => {
          const img = new Image();
          img.src = image;
          img.onload = () => {
            if (index === currentBannerIndex) {
              bannerRef.current.src = image;
            }
          };
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [banners, currentBannerIndex]);

  return (
    <div>

      {/* Hero Section */}
      <div className="relative h-70 md:h-[83vh] overflow-hidden">
        <img
          ref={bannerRef}
          src={banners[currentBannerIndex]}
          alt="Banner"
          className="w-full h-70 md:h-[83vh] transition-opacity object-cover  duration-500 ease-in-out"
          style={{ opacity: 1, objectPosition: 'top' }}
        />
        <div className="absolute inset-0 flex justify-start items-baseline  bg-opacity-40 bg-black">
          <div className="text-start mx-5 mt-10 text-white">
            <h1 className="text-sm md:text-4xl font-bold mb-4 ">Welcome to <span className="font-semibold  font-script text-green-300">"LuxeLoom" </span></h1>
            <p className="hidden md:block md:text-sm mb-6">Discover a wide range of products at great prices.</p>
            <button className="border-2 font-mono hover:scale-95 hover:duration-500 text-white  font-semibold p-1 md:py-3 md:px-6 transition duration-300">
            <p className='text-[0.7rem] font-light md:hidden'>Explore</p>
            <h1 className='hidden md:block text-xs md:text-sm animate-bounce hover:scale-105 transition-transform duration-300 transform'>  Have A Tour Of Website!</h1>
            </button>
          </div>
        </div>
        
      </div>
<div className='p-1 mb-5'>
      <Filter/>
      <ProductCard/>
      </div>
      <MoreProducts/>

      <Gallery/>


      {/* Trusted by Companies Section */}
          <TrustedByCompaniesSection />
          <Testimonial/>


      {/* Why Us Section */}
        <WhyUsSection />
    </div>
  );
}

export default Home;
