import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Company Logo */}
      <div className="text-xl font-bold">MyCompany</div>
      
      {/* Navigation Menu */}
      <nav>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Services</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;