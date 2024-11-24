import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Options = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate();

  // Options list for the user to choose from
  const options = [
    { name: 'Cleaning Products', price: '£2/h' },
    { name: 'Ironing', price: '£0/h' },
  ];

  // Update the context and localStorage when options change
  const handleOptionSelection = (selectedOption: string) => {
    // Ensure `bookingData.options` is initialized as an array
    const updatedOptions = bookingData.options ? [...bookingData.options] : [];

    // Check if the selected option is already in the array
    if (updatedOptions.includes(selectedOption)) {
      // Remove the option if it's already selected
      const index = updatedOptions.indexOf(selectedOption);
      updatedOptions.splice(index, 1);
    } else {
      // Add the option if it's not selected
      updatedOptions.push(selectedOption);
    }

    // Update the booking data with the new options array
    updateBookingData({ options: updatedOptions });
    // Save updated options to localStorage
    localStorage.setItem('options', JSON.stringify(updatedOptions));
    console.log('Updated options:', updatedOptions);
  };

  // Load options from localStorage on initial render
  useEffect(() => {
    const savedOptions = localStorage.getItem('options');
    if (savedOptions) {
      updateBookingData({ options: JSON.parse(savedOptions) });
    }
  }, [updateBookingData]);

  const handleNextStep = () => {
    navigate('/domestic-cleaning/booking/pets');
  };

  return (
    <div className="px-4 py-6 my-20">
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
              ${bookingData.options?.includes(option.name) ? 'bg-[#00bba3] text-white' : 'bg-white'}`}
            onClick={() => handleOptionSelection(option.name)}
          >
            <div className="flex flex-col items-center">
              <span className={`text-2xl font-medium ${bookingData.options?.includes(option.name) ? 'text-white' : 'text-gray-800'}`}>
                {option.name}
              </span>
              <span className="text-lg text-gray-600">{option.price}</span>
            </div>
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

export default Options;
