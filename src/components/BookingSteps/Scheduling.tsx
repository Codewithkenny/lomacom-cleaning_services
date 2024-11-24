import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Scheduling = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate(); // For navigation to the next page

  const handleNextStep = () => {
    navigate('/domestic-cleaning/booking/duration'); // Navigate to the next step (Duration page)
  };

  // List of frequencies for the user to choose from
  const frequencies = ['Once a Week', 'Once a Fortnight'];

  const handleFrequencySelection = (frequency: string) => {
    updateBookingData({ frequency }); // Correctly update context with selected frequency
    localStorage.setItem('bookingFrequency', frequency); // Store selected frequency in localStorage
  };

  // Fetch the stored frequency from localStorage when the component mounts
  useEffect(() => {
    const storedFrequency = localStorage.getItem('bookingFrequency');
    if (storedFrequency) {
      updateBookingData({ frequency: storedFrequency });
    }
  }, [updateBookingData]);

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-black text-center mb-6">
        How often do you want your sessions to happen?
      </h2>

      {/* Frequency Selection (Tiles) */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {frequencies.map((frequency) => (
          <div
            key={frequency}
            className={`flex justify-center items-center p-6 border rounded-lg cursor-pointer transition-all duration-300 hover:bg-teal-200 
              ${bookingData.frequency === frequency ? 'bg-teal-500 text-white' : 'bg-white'}`}
            onClick={() => handleFrequencySelection(frequency)}
          >
            <span className={`text-xl font-medium ${bookingData.frequency === frequency ? 'text-white' : 'text-gray-800'}`}>
              {frequency}
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

export default Scheduling;
