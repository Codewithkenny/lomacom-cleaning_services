import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingContext } from '../components/BookingContext';

const Booking = () => {
  const [address, setAddress] = useState('');
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate();

  // Fetch address from localStorage if available
  useEffect(() => {
    const savedBookingData = localStorage.getItem('bookingData');
    if (savedBookingData) {
      const parsedBookingData = JSON.parse(savedBookingData);
      if (parsedBookingData.address) {
        setAddress(parsedBookingData.address); // Set the address from localStorage
      }
    }
  }, []);

  // Handle address submission and navigate to the services page
  const handleNextStep = () => {
    if (address) {
      updateBookingData({ address }); // Update the address in the context
      localStorage.setItem(
        'bookingData',
        JSON.stringify({ ...bookingData, address }) // Save updated address to localStorage
      );
      navigate('/domestic-cleaning/booking/services'); // Navigate to services page
    } else {
      alert('Please enter your address');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-black  mb-6">
          Where will your cleaning take place?
        </h2>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)} // Update the address state
          placeholder="Enter your address"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#007c6c]"
        />
        <button
          onClick={handleNextStep}
          className="w-full py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-[#007c6c] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Booking;
