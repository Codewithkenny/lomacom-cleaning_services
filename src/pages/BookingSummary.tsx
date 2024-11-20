import React from 'react';
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

interface BookingSummaryProps {
  address: string;
  service: string;
  schedule: string;
  duration: string;
  options: string[];
  animals: string;
  dates: string[];
  hours: string;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  address,
  service,
  schedule,
  duration,
  options,
  animals,
  dates,
  hours,
}) => (
  <div className="w-1/3 p-6 bg-gray-100 rounded-lg">
    <h3 className="text-lg font-bold mb-4">Booking Summary</h3>
    <div className="space-y-4">
      <div>
        <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-600" />
        {address || 'Address: Not provided'}
      </div>
      <div>
        <FontAwesomeIcon icon={faCogs} className="mr-2 text-green-600" />
        {service || 'Service Type: Not selected'}
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 text-yellow-600" />
        {schedule || 'Schedule: Not set'}
      </div>
      <div>
        <FontAwesomeIcon icon={faClock} className="mr-2 text-purple-600" />
        {duration || 'Duration: Not set'}
      </div>
      <div>
        <FontAwesomeIcon icon={faBoxOpen} className="mr-2 text-red-600" />
        {options.length > 0 ? `Options: ${options.join(', ')}` : 'Options: None'}
      </div>
      <div>
        <FontAwesomeIcon icon={faPaw} className="mr-2 text-pink-600" />
        {animals || 'Pets: Not selected'}
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-teal-600" />
        {dates.length > 0 ? `Dates: ${dates.join(', ')}` : 'Dates: Not selected'}
      </div>
      <div>
        <FontAwesomeIcon icon={faHourglassHalf} className="mr-2 text-indigo-600" />
        {hours || 'Hours: Not selected'}
      </div>
    </div>
  </div>
);

export default BookingSummary;
