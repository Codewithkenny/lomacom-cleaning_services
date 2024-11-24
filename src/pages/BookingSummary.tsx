import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCogs,
  faCalendarCheck,
  faClock,
  faBoxOpen,
  faPaw,
  faCalendarAlt,
  faHourglassHalf,
} from '@fortawesome/free-solid-svg-icons';
import { useBookingContext } from '../components/BookingContext';
import { format } from 'date-fns'; // Import date formatting function

const BookingSummary: React.FC = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  console.log('Booking summary data:', bookingData);

  // Step 1: Retrieve from localStorage on mount (only if context is empty)
  useEffect(() => {
    if (!bookingData || Object.keys(bookingData).length === 0) {
      const savedBookingData = localStorage.getItem('bookingData');
      if (savedBookingData) {
        updateBookingData(JSON.parse(savedBookingData)); // Initialize context with saved data
      }
    }
  }, [bookingData, updateBookingData]);

  // Step 2: Save booking data to localStorage whenever it changes
  useEffect(() => {
    if (bookingData && Object.keys(bookingData).length > 0) {
      localStorage.setItem('bookingData', JSON.stringify(bookingData)); // Store updated data
    }
  }, [bookingData]);

  const services = Array.isArray(bookingData?.services) ? bookingData?.services : [];
  const options = Array.isArray(bookingData?.options) ? bookingData?.options : [];

  // Handle the date formatting if available
  const formattedDate = bookingData?.firstAppointmentDate
    ? format(new Date(bookingData.firstAppointmentDate), 'MMMM dd, yyyy')
    : 'Date: Not selected';

  return (
    <div className="w-full md:w-1/3 p-6 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Booking Summary</h3>
      <div className="space-y-4">
        {/* Address */}
        <div>
          <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-600" />
          {bookingData?.address || 'Address: Not provided'}
        </div>
        {/* Service Type */}
        <div>
          <FontAwesomeIcon icon={faCogs} className="mr-2 text-green-600" />
          {services.length > 0 ? `Service: ${services.join(', ')}` : 'Service: Not selected'}
        </div>
        {/* Schedule */}
        <div>
          <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 text-yellow-600" />
          {bookingData?.frequency || 'Schedule: Not set'}
        </div>
        {/* Duration */}
        <div>
          <FontAwesomeIcon icon={faClock} className="mr-2 text-purple-600" />
          {bookingData?.duration || 'Duration: Not set'}
        </div>
        {/* Options */}
        <div>
          <FontAwesomeIcon icon={faBoxOpen} className="mr-2 text-red-600" />
          {options.length > 0 ? `Options: ${options.join(', ')}` : 'Options: None'}
        </div>
        {/* Pets */}
        <div>
          <FontAwesomeIcon icon={faPaw} className="mr-2 text-pink-600" />
          {bookingData?.pets || 'Pets: Not selected'}
        </div>
        {/* Date */}
        <div>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-teal-600" />
          {formattedDate} {/* Display formatted date or fallback */}
        </div>
        {/* Hours */}
        <div>
          <FontAwesomeIcon icon={faHourglassHalf} className="mr-2 text-indigo-600" />
          {bookingData?.hours ? `Hours: ${bookingData?.hours}` : 'Hours: Not selected'}
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
