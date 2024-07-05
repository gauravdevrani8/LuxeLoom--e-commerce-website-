import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation.json';



const Mygift = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className=' rounded'>
      <Lottie 
        options={defaultOptions}
        // height={400} // Adjust height as needed
        // width={400}
         // Adjust width as needed
         className='w-60 h-60'
      />
    </div>
  );
};

export default Mygift;
