import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate();

  // Define servicesData here
  const servicesData = [
    {
      id: '1',
      name: 'Basic Cleaning',
      description: 'A basic cleaning service for your home.',
      price: '£50/hr',
      thumbnail: '/images/basic-cleaning.jpg',
    },
    {
      id: '2',
      name: 'Deep Cleaning',
      description: 'A deep cleaning service with attention to detail.',
      price: '£100/hr',
      thumbnail: '/images/deep-cleaning.jpg',
    },
    {
      id: '3',
      name: 'Move-Out Cleaning',
      description: 'Cleaning service for when you move out of your house.',
      price: '£150/hr',
      thumbnail: '/images/move-out-cleaning.jpg',
    },
    {
      id: '4',
      name: 'Post-Construction Cleaning',
      description: 'Cleaning after construction or renovation work.',
      price: '£200/hr',
      thumbnail: '/images/post-construction-cleaning.jpg',
    },
    {
      id: '5',
      name: 'Office Cleaning',
      description: 'A comprehensive cleaning for office spaces.',
      price: '£120/hr',
      thumbnail: '/images/office-cleaning.jpg',
    },
  ];

  const handleServiceChange = (service: string) => {
    const updatedServices = bookingData.services.includes(service)
      ? bookingData.services.filter((s) => s !== service) // Remove service if already selected
      : [...bookingData.services, service]; // Add service if not selected
    updateBookingData('services', updatedServices); // Update context with selected services
  };

  const handleNextStep = () => {
    // Navigate to the next step (e.g., scheduling)
    navigate('/domestic-cleaning/booking/scheduling');
  };

  return (
    <>
        <h2 className="text-3xl font-semibold text-black text-center mt-20 mb-6">
          How often do you want your sessions to happen?
        </h2>

      {/* Service List (grid layout for cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 ml-4 my-20"> {/* Grid layout with responsive columns */}
        {servicesData.map((serviceItem) => (
          <div
            key={serviceItem.id}
            className={`flex flex-col items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-teal-100 hover:shadow-lg transition-all duration-300 w-[200px] mx-auto ${ // Reduced width and padding
              bookingData.services.includes(serviceItem.name) ? 'bg-teal-100' : ''
            }`}
            onClick={() => handleServiceChange(serviceItem.name)} // Use the handler to update the selection
          >
            {/* Service Thumbnail */}
            <img
              src={serviceItem.thumbnail}
              alt={serviceItem.name}
              className="w-20 h-20 mb-4 rounded-md"
            />

            {/* Service Details */}
            <div className="text-center">
              <h3 className="font-semibold text-lg">{serviceItem.name}</h3>
              <p className="text-gray-600 text-sm">{serviceItem.description}</p>
              <span className="text-lg font-bold text-teal-500">{serviceItem.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-center">
  <button
    onClick={handleNextStep}
    className="w-full max-w-xs mt-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300"
  >
    Next
  </button>
</div>


    </>
  );
};

export default Services;
