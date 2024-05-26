import React from 'react';

const SubNavBar = () => {
  return (
    <nav className="bg-[#000000] h-fit text-white overflow-x-auto md:overflow-x-hidden">
      <div className="max-w-full">
        <ul className="flex text-[0.6rem] md:text-[12px] md:py-2  flex-nowrap justify-evenly space-x-0 md:space-x-5 overflow-x-auto">
          <NavItem text="All" />
          <NavItem text="Categories">
            <DropdownItem text="Returns" />
            <DropdownItem text="Orders" />
            <DropdownItem text="Comparison" />
            <DropdownItem text="Today's Deals" />
          </NavItem>
          <NavItem text="Returns" />
          <NavItem text="Orders" />
          <NavItem text="Comparison" />
          <NavItem text="Today's Deals" />
          {/* Additional list items */}
          <NavItem text="New Arrivals" />
          <NavItem text="Best Sellers" />
          {/* Add more list items within the existing ul */}
          
          {/* Additional list items */}
          <li className="px-2 md:px-1 py-2 relative hover:bg-gray-700 transition duration-300">
            <a href="#">Sell</a>
          </li>
          <li className="px-2 md:px-5 py-2 relative hover:bg-gray-700 transition duration-300">
            <a className='' href="#">Help</a>
          </li>
          <li className="px-2 md:px-5 py-2 relative  hover:bg-gray-700 transition duration-300">
            <a href="#" className="hover:text-yellow-400">Download App</a>
          </li>
          <li className="px-2 md:px-5  relative h-fit transition duration-300">
            <button className="border md:h-9 mt-2 md:m-0 hover:text-gray-900 px-2   hover:bg-gray-100 text-white hover:scale-90 transition duration-300">Get Prime</button>
          </li>
          {/* Add more list items here */}
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ text, children }) => {
  return (
    <li className="px-4 md:px-5 py-2 relative hover:bg-gray-700 transition duration-300">
      <a href="#" className="hover:text-green-300">{text}</a>
      {children && (
        <ul className="absolute left-0 top-full text-white mt-2 py-2 px-4 rounded-lg hidden group-hover:block shadow-lg">
          {children}
        </ul>
      )}
    </li>
  );
};

const DropdownItem = ({ text }) => {
  return (
    <li>
      <a href="#" className="hover:text-green-300">{text}</a>
    </li>
  );
};

export default SubNavBar;
