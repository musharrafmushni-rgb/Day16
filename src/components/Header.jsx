import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">MyCompany</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;