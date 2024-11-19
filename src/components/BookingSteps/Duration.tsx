
import { useBookingContext } from '../BookingContext';

const Duration = () => {
  const { bookingData, updateBookingData } = useBookingContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Duration</h2>
      <p className="mb-6">How long would you like the cleaning session to last?</p>
      <div className="space-y-4">
        {['1 Hour', '2 Hours', '3 Hours'].map((duration) => (
          <label key={duration} className="flex items-center">
            <input
              type="radio"
              name="duration"
              className="mr-2"
              checked={bookingData.duration === duration}
              onChange={() => updateBookingData('duration', duration)}
            />
            {duration}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Duration;
