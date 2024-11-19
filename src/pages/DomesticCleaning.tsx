import { useNavigate } from 'react-router-dom';
import HomeServicesCards from '../components/HomeServicesCards';
import ServiceHighlights from '../components/ServiceHighlights';

const DomesticCleaning = () => {
  const navigate = useNavigate();

  const handleBookCleaning = () => {
    navigate('/domestic-cleaning/booking');
  };

  return (
    <div className="bg-gradient-to-b from-[#ffa662] to-[#fff4eb] min-h-screen w-full">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6 text-white">
            <h2 className="text-4xl font-bold text-center md:text-left">
              Find domestic cleaners near you
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>One-off or regular house cleaning</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>Tried and vetted</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>From 16.00 pounds per hour</span>
              </li>
            </ul>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              {/* Book My Cleaning Button */}
              <button 
                onClick={handleBookCleaning}
                className="w-full md:w-auto py-3 px-6 bg-[#00bba3] text-white font-semibold rounded-full hover:bg-[#007c6c] focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out"
              >
                Book my cleaning
              </button>

              {/* Become a Lomacom Cleaner Button */}
              <button className="w-full md:w-auto py-3 px-6 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-all duration-300 ease-in-out">
                Become a Lomacom cleaner
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/pojuagbomeji/image/upload/v1731942470/slider4_qw3arx.jpg" // Replace with your image URL
              alt="Domestic Cleaning"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
      <ServiceHighlights />
      <HomeServicesCards />
    </div>
  );
};

export default DomesticCleaning;
