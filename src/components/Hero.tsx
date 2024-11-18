import React from "react";


const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-right"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/pojuagbomeji/image/upload/v1731929738/hero.bg_uk7kxm.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* Dark Overlay */}
      
      <div className="container mx-auto h-full flex items-center px-6">
        {/* Left Content */}
        <div className="text-white z-10 max-w-lg">
          <h1 className="text-4xl font-bold  mb-4">
            A Clean Home, A Happier You!
          </h1>
          <p className="mb-6 text-lg">
            Experience top-quality cleaning services tailored to your needs.
          </p>
          <button className="bg-[#00bba3] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#007c6c]">
            Book My Cleaning
          </button>
        </div>

        {/* Right Content */}
        {/* <div className="hidden lg:block w-1/2 h-full flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1584795646140-bd07e4620abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500" // Replace with your cleaning-related image URL
            alt="Cleaning illustration"
            className="h-3/4 object-contain rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
