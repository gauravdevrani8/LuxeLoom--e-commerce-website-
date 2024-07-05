import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WhyUsSection from '../../Components/WhyUsSection/WhyUsSection';
import TrustedByCompaniesSection from '../../Components/TrustedBy/TrustedBy';
import Filter from '../../Components/Filter/Filter';
import ProductCard from '../../Components/Products/Products';
import Gallery from '../../Components/Gallery';
import MoreProducts from '../../Components/MoreProducts';
import bannerVideo from '../../assets/video.mp4';
import fallbackImage from '../../assets/fallback.png'; // Add your fallback image path here

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setVideoLoaded(true);
    };

    const videoElement = document.querySelector('video');
    videoElement.addEventListener('loadeddata', handleLoad);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoad);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <motion.div 
        className={`relative h-60 md:h-[73vh] overflow-hidden ${videoLoaded ? 'video-loaded' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={fallbackImage} alt="Fallback" className="absolute inset-0 w-full h-full object-cover fallback-image" />
        {!isMobile && (
          <video className="absolute inset-0 w-full h-full object-cover video-element" autoPlay loop muted>
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 flex justify-start items-center md:items-baseline bg-black bg-opacity-20 p-4 md:p-10">
          <motion.div 
            className="text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Welcome to <span className="font-bold font-poiret text-green-300">"LuxeLoom"</span>
            </h1>
            <p className="hidden md:block md:text-sm mb-6">
              Discover a wide range of products at great prices.
            </p>
            <motion.button 
              className="border-2 font-mono hover:scale-95 hover:duration-500 text-white font-semibold p-1 md:py-3 md:px-6 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="text-[0.9rem] px-3 py-1 font-light md:hidden">Explore</button>
              <h1 className="hidden md:block text-xs md:text-sm">
                Have A Tour Of Website!
              </h1>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="p-1 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Filter />
        <ProductCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <MoreProducts />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Gallery />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <TrustedByCompaniesSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <WhyUsSection />
      </motion.div>
    </>
  );
};

export default Home;
