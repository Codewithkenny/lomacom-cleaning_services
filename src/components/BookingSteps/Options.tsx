import { useBookingContext } from '../BookingContext';

const Options = () => {
  const { bookingData, updateBookingData } = useBookingContext();

  const handleOptionChange = (option: string) => {
    const updatedOptions = bookingData.options.includes(option)
      ? bookingData.options.filter((o) => o !== option)
      : [...bookingData.options, option];
    updateBookingData('options', updatedOptions);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Additional Options</h2>
      <p className="mb-6">Choose any additional options you'd like.</p>
      <div className="space-y-4">
        {['Eco-friendly Products', 'Special Cleaning Tools', 'Pet-friendly Products'].map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={bookingData.options.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Options;
