import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      {/* Welcome Heading */}
      <h1 className="text-4xl font-bold mb-4">Welcome to MyCompany</h1>
      
      {/* Short Description */}
      <p className="text-lg text-gray-600 mb-8">
        We build modern and responsive web applications for your business.
      </p>
      
      {/* Get Started Button */}
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;