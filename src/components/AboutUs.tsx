import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://res.cloudinary.com/pojuagbomeji/image/upload/v1731929738/about_us_kjdsnc.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            At Lomacom Cleaning Services, we are committed to providing exceptional cleaning solutions 
            for homes and businesses. With years of experience and a passion for excellence, 
            we ensure that every space we clean is left spotless and refreshed.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our team of professionals uses eco-friendly products and cutting-edge techniques to deliver 
            the best results. Let us take care of your cleaning needs so you can focus on what matters most.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg shadow hover:bg-[#007c6c]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
