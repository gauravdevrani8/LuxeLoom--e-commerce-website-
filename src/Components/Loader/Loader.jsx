

import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-15 z-50">
      <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-16 w-16"></div>
    </div>
  );
};

export default Loader;
