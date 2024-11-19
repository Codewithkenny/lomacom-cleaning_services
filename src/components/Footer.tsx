import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lomacom Cleaning Services</h3>
            <p>
              Delivering top-notch cleaning solutions tailored to your needs. 
              Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="/datadeletion" className="hover:underline">Security</a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: 07769 622171</li>
              <li>Email: support@lomacomservices.com</li>
              <li>Address: 3 Monkwood Drive, Manchester, M9 4BB</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lomacom Cleaning Services. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
