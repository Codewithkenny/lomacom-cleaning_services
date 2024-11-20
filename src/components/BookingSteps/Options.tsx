import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';

const Options = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate(); // For navigation to the next page

  const handleNextStep = () => {
    navigate('/domestic-cleaning/booking/pets'); // Navigate to the next step (Summary page)
  };

  // Options list for the user to choose from
  const options = [
    { name: 'Cleaning Products', price: '£2/h' },
    { name: 'Ironing', price: '£0/h' },
  ];

  const handleOptionSelection = (option: string) => {
    // Toggle the selected option in the booking data context
    const updatedOptions = bookingData.options.includes(option)
      ? bookingData.options.filter((o) => o !== option)
      : [...bookingData.options, option];
    updateBookingData('options', updatedOptions);
  };

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-black text-center mb-6">
        Do you have any other needs?
      </h2>

      {/* Option Selection (Tiles) */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {options.map((option) => (
          <div
            key={option.name}
            className={`flex justify-center items-center p-6 border rounded-lg cursor-pointer transition-all duration-300 hover:bg-teal-200 
              ${bookingData.options.includes(option.name) ? 'bg-teal-500 text-white' : 'bg-white'}`}
            onClick={() => handleOptionSelection(option.name)}
          >
            <div className="flex flex-col items-center">
              <span className={`text-xl font-medium ${bookingData.options.includes(option.name) ? 'text-white' : 'text-gray-800'}`}>
                {option.name}
              </span>
              <span className="text-sm text-gray-600">{option.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextStep}
        className="w-full max-w-xs mt-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 mx-auto"
      >
        Next
      </button>
    </div>
  );
};

export default Options;
