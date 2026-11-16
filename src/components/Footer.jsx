import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          {/* Logo & Text */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">MyCompany</h2>
            <p className="text-gray-400 text-sm mt-2">Building the future of the web.</p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 text-gray-400">
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;