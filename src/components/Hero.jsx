import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              Welcome to the Future
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Modern <span className="text-indigo-600">Web Applications</span> with Us
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              We create fast, responsive, and scalable web applications that help your business grow and reach new heights.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image (Using a placeholder image for now) */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
              alt="Web Development" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;