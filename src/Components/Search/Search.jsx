// src/components/SearchComponent.js

import React, { useState, useContext, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import gsap from 'gsap';
import myContext from '../Context/MyContext';

const SearchComponent = () => {
  const context = useContext(myContext);
  const { searchkey, setSearchkey } = context;
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchBarRef = useRef(null);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    if (isSearchVisible) {
      gsap.fromTo(
        searchBarRef.current,
        { width: '0%', opacity: 0 },
        { duration: 0.5, width: '100%', opacity: 1, display: 'block' }
      );
    } else {
      gsap.fromTo(
        searchBarRef.current,
        { width: '100%', opacity: 1 },
        { duration: 0.5, width: '0%', opacity: 0, display: 'none' }
      );
    }
  }, [isSearchVisible]);

  return (
    <div className="flex justify-self-end items-center">
      <div className="relative ml-2 w-0 md:w-80 overflow-hidden">
        <input
          type="text"
          name="searchkey"
          value={searchkey}
          onChange={(e) => setSearchkey(e.target.value)}
          id="searchkey"
          ref={searchBarRef}
          placeholder="Search here"
          className="block w-full rounded-full font-league-spartan py-2 px-4 bg-gray-100 text-gray-800 placeholder-gray-600 focus:outline-none focus:border-gray-400 border"
          style={{ display: 'none' }}
        />
      </div>
      <button
        className="p-[10px] bg-transparent hidden md:block rounded-full justify-self-end focus:outline-none focus:border-gray-400"
        onClick={toggleSearchBar}
      >
        <BsSearch className="hover:scale-105 text-xl duration-500 text-gray-800" />
      </button>
    </div>
  );
};

export default SearchComponent;
