import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';

const Pets = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate(); // For navigation to the next page

  const handleNextStep = () => {
    navigate('/domestic-cleaning/booking/calender'); // Navigate to the next step (Summary page)
  };

  // Options for pets
  const petOptions = [
    { name: 'Yes, I love them', icon: '🐾' },
    { name: 'No, I do not like pets', icon: '❌' },
  ];

  const handleOptionSelection = (option: string) => {
    // Update booking data context with selected pet preference
    updateBookingData('pets', option);
  };

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-black text-center mb-6">
        Do you like pets?
      </h2>

      {/* Option Selection (Tiles) */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {petOptions.map((option) => (
          <div
            key={option.name}
            className={`flex flex-col justify-center items-center p-6 border rounded-lg cursor-pointer transition-all duration-300 hover:bg-teal-200 
              ${bookingData.pets === option.name ? 'bg-teal-500 text-white' : 'bg-white'}`}
            onClick={() => handleOptionSelection(option.name)}
          >
            <span className="text-4xl mb-2">{option.icon}</span>
            <span className={`text-xl font-medium ${bookingData.pets === option.name ? 'text-white' : 'text-gray-800'}`}>
              {option.name}
            </span>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className='flex justify-center'>
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

export default Pets;
