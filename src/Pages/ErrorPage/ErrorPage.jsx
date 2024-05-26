import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Cleanup
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={`error-container ${isLoaded ? 'fadeIn' : ''}`}>
      <div className="flex flex-col items-center justify-center h-screen bg-D6E4E5">
        <h1 className="text-6xl font-extrabold  text-gray-800 mb-8">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page not found.</p>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed or doesn't exist.</p>
        <Link to="/" className="text-blue-500 hover:underline transition-colors duration-300 ease-in-out">
          <button className="bg-green-300 marque  text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out">
<p className='hover:text-gray-600'>Back To Home</p>          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
