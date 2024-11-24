import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingContext } from '../BookingContext';

const Hours = () => {
  const { updateBookingData } = useBookingContext(); // Access context
  const [selectedHour, setSelectedHour] = useState('');
  const navigate = useNavigate();

  // Load selected hour from local storage on component mount
  useEffect(() => {
    const storedHour = localStorage.getItem('selectedHour');
    if (storedHour) {
      setSelectedHour(storedHour); // Set the stored hour as the selected hour
    }
  }, []);

  // Handle hour selection and save to local storage
  const handleHourSelection = (hour: string) => {
    setSelectedHour(hour);
    localStorage.setItem('selectedHour', hour); // Save selected hour to local storage
  };

  // Proceed to the next step and update context
  const handleNextStep = () => {
    updateBookingData({ hours: parseInt(selectedHour) }); // Update context
    navigate('/domestic-cleaning/booking/booking-summary'); // Navigate to the next step
  };

  return (
    <div className="px-4 py-6 my-20">
      <h1 className="text-3xl font-semibold text-black text-center mb-6">Select Service Hours</h1>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 17 }, (_, index) => {
          const hour = 14 + index; // Generate hour from 14:00 to 30:00
          return (
            <button
              key={hour}
              onClick={() => handleHourSelection(hour.toString())}
              className={`p-4 border rounded-lg ${
                selectedHour === hour.toString() ? 'bg-teal-500 text-white' : 'bg-gray-200'
              } hover:bg-teal-200 focus:outline-none`}
            >
              {hour}:00
            </button>
          );
        })}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleNextStep}
          disabled={!selectedHour}
          className={`w-full max-w-xs py-3 font-semibold rounded-lg ${
            selectedHour ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Hours;
