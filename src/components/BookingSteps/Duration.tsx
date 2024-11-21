import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';

const Duration = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate(); // To handle navigation

  const handleNextStep = () => {
    navigate('/domestic-cleaning/booking/options'); // Navigate to the Options page
  };

  const durations = [
    '2hrs', '2hrs30', '3h', '3hrs30', '4hrs', '4hrs30', '5hrs', '6hrs', '7hrs'
  ];

  // Handle the selection of duration
  const handleDurationSelection = (duration: string) => {
    updateBookingData({ duration }); // Update context with the selected duration
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-semibold text-black text-center my-16 mb-6">
        How long would you like the cleaning to last?
      </h2>

      {/* Duration Options (styled as clickable small boxes) */}
      <div className="grid grid-cols-3 gap-4 my-16 mb-6">
        {durations.map((duration) => (
          <div
            key={duration}
            className={`flex justify-center items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 
              ${bookingData.duration === duration ? 'bg-teal-500 text-white' : 'bg-white text-gray-800'} 
              hover:bg-teal-200`}
            onClick={() => handleDurationSelection(duration)} // Update context on click
          >
            <span className={`text-xl font-medium`}>
              {duration}
            </span>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-center">
        <button
          onClick={handleNextStep}
          className="w-full max-w-xs mt-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 mx-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Duration;
