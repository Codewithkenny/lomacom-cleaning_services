import { useBookingContext } from '../BookingContext';

const Services = () => {
  const { bookingData, updateBookingData } = useBookingContext();

  const handleServiceChange = (service: string) => {
    const updatedServices = bookingData.services.includes(service)
      ? bookingData.services.filter((s) => s !== service)
      : [...bookingData.services, service];
    updateBookingData('services', updatedServices);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Select Services</h2>
      <p className="mb-6">Choose the cleaning services you need.</p>
      <div className="space-y-4">
        {['Regular Cleaning', 'Deep Cleaning', 'Move-in/Move-out Cleaning'].map((service) => (
          <label key={service} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={bookingData.services.includes(service)}
              onChange={() => handleServiceChange(service)}
            />
            {service}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Services;
