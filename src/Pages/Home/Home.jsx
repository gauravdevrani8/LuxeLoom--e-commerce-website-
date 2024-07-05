import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
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
  const videoRef = useRef(null);
  const fallbackImageRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const exploreButtonRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setVideoLoaded(true);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('loadeddata', handleLoad);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (videoLoaded) {
      gsap.to(fallbackImageRef.current, { opacity: 0, duration: 1 });
      gsap.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.5 }
      );
      gsap.fromTo(
        welcomeTextRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 1 }
      );
      gsap.fromTo(
        exploreButtonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 1.5 }
      );
    }
  }, [videoLoaded]);

  return (
    <>
      <div className={`relative h-60 md:h-[73vh] overflow-hidden ${videoLoaded ? 'video-loaded' : ''}`}>
        <img
          ref={fallbackImageRef}
          src={fallbackImage}
          alt="Fallback"
          className="absolute inset-0 w-full h-full object-cover fallback-image"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover video-element"
          autoPlay
          loop
          muted
        >
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex justify-start items-center md:items-baseline bg-black bg-opacity-20 p-4 md:p-10">
          <div ref={welcomeTextRef} className="text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Welcome to <span className="font-bold font-poiret text-green-300">"LuxeLoom"</span>
            </h1>
            <p className="hidden md:block md:text-sm mb-6">
              Discover a wide range of products at great prices.
            </p>
            <div ref={exploreButtonRef}>
              <button className="border-2 font-mono hover:scale-95 hover:duration-500 text-white font-semibold p-1 md:py-3 md:px-6 transition duration-300">
                <span className="text-[0.9rem] px-3 py-1 font-light md:hidden">Explore</span>
                <h1 className="hidden md:block text-xs md:text-sm">
                  Have A Tour Of Website!
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 mb-5">
        <Filter />
        <ProductCard />
      </div>
      <div>
        <MoreProducts />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <TrustedByCompaniesSection />
      </div>
      <div>
        <WhyUsSection />
      </div>
    </>
  );
};

export default Home;
