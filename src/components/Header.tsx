import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, BookOpenIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline';
import logoImage from "../assets/lomacom-logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <img 
          src={logoImage} 
          alt="Lomacom Logo" 
          className="h-24 w-130 md:h-18" 
        />

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <div className="relative group">
            <button className="text-black hover:text-[#00bba3] font-medium">Services</button>
            <div className="absolute left-0 mt-2 w-[400px] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity h-auto">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-[#00bba3] font-extrabold text-2xl">Domestic Cleaning Near Me</h3>
                <div className="flex justify-center mt-2">
                  <Link to='/domestic-cleaning'>
                  <button className="bg-[#00bba3] text-white py-2 px-6 rounded-lg hover:bg-[#007c6c]">
                    Book My Cleaning
                  </button>
                  </Link>
                </div>
              </div>
              <div className="p-4 grid grid-cols-2 gap-x-10 gap-y-6">
                <div>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Regular Cleaning</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">One-off cleaning</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Same day cleaning</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Housekeeping</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Spring cleaning</a>
                </div>
                <div>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Standard cleaning</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Airbnb cleaning</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">End of tenancy cleaning</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Cleaning and ironing</a>
                  <a href="#" className="block text-black hover:text-[#2f2f2f] mb-3">Ironing Service</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="text-black hover:text-[#00bba3] font-medium">About</a>
          <a href="#" className="text-black hover:text-[#00bba3] font-medium">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-5 items-center">
          <a href="#" className="text-black hover:text-[#00bba3]">
            <BriefcaseIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-black hover:text-[#00bba3]">
            <BookOpenIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-black hover:text-[#00bba3]">
            <UserIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-black hover:text-[#00bba3] lg:hidden">
            <Bars3Icon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
