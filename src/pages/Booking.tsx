import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useBookingContext } from '../components/BookingContext';
import Services from '../components/BookingSteps/Services'; 
import Scheduling from '../components/BookingSteps/Scheduling';
import Duration from '../components/BookingSteps/Duration';
import Options from '../components/BookingSteps/Options';

const Booking = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const navigate = useNavigate();
  const { step } = useParams();
  
  

  const steps = ['booking-services', 'scheduling', 'duration', 'options'];
  const currentStepIndex = steps.indexOf(step || 'booking-services');
  const nextStep = steps[currentStepIndex + 1];
  const prevStep = steps[currentStepIndex - 1];

  const handleNextStep = () => {
    // You can update the context here based on the user's selections in each step
    // For example:
    if (step === 'booking-services') {
      updateBookingData({ services: ['service1', 'service2'] });
    }
    navigate(`/domestic-cleaning/booking/${nextStep}`);
  };

  const handlePrevStep = () => {
    navigate(`/domestic-cleaning/booking/${prevStep}`);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-6 bg-gray-100">
        <nav className="text-sm text-gray-600 mb-4">
          <a href="/" className="hover:underline">Home</a> /{' '}
          <a href="/domestic-cleaning" className="hover:underline">Domestic Cleaning</a> / Booking
        </nav>
        <h1 className="text-xl font-bold mb-4">Where will your cleaning take place?</h1>
        <input
          type="text"
          placeholder="Enter your full address"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => updateBookingData({ address: e.target.value })}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>

      <div className="w-1/2 p-6">
        <Routes>
          <Route path="services" element={<Services />} />
          <Route path="scheduling" element={<Scheduling />} />
          <Route path="duration" element={<Duration />} />
          <Route path="options" element={<Options />} />
        </Routes>

        <div className="mt-8 p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
          <ul className="space-y-2">
            <li>📍 Address: {bookingData.address || 'Not provided yet'}</li>
            <li>🧹 Services: {bookingData.services.join(', ') || 'None selected'}</li>
            <li>📅 Frequency: {bookingData.frequency || 'Not selected'}</li>
            <li>⏳ Duration: {bookingData.duration || 'Not selected'}</li>
            <li>🛠️ Options: {bookingData.options.join(', ') || 'None selected'}</li>
          </ul>
        </div>

        <div className="mt-6 flex justify-between">
          {prevStep && (
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={handlePrevStep}
            >
              Previous
            </button>
          )}
          {nextStep && (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleNextStep}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
