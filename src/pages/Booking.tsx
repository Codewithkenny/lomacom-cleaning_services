import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (address) {
      navigate('/domestic-cleaning/booking/services'); // Navigate to services page
    } else {
      alert('Please enter your address'); // Show alert if address is not entered
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Enter Your Address
        </h2>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleNextStep}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Booking;
