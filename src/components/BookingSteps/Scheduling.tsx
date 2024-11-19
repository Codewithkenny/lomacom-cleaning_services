import { useBookingContext } from '../BookingContext';

const Scheduling = () => {
  const { bookingData, updateBookingData } = useBookingContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Scheduling</h2>
      <p className="mb-6">How often do you want the cleaning?</p>
      <div className="space-y-4">
        {['Once a Week', 'Once a Fortnight'].map((frequency) => (
          <label key={frequency} className="flex items-center">
            <input
              type="radio"
              name="frequency"
              className="mr-2"
              checked={bookingData.frequency === frequency}
              onChange={() => updateBookingData('frequency', frequency)}
            />
            {frequency}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Scheduling;
