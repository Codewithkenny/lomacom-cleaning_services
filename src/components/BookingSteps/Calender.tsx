import { useState, useEffect } from 'react';
import { useBookingContext } from '../BookingContext';
import { useNavigate } from 'react-router-dom';
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
  isSameDay,
  parse,
} from 'date-fns';

const Calendar = () => {
  const { bookingData, updateBookingData } = useBookingContext();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Local state for selected date
  const navigate = useNavigate(); 

  const handleNextStep = () => {
    navigate('/domestic-cleaning/booking/options'); // Navigate to the Duration page
  };


  // Get the first and last day of the current month
  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  // Get all days in the current month
  const daysInMonth = eachDayOfInterval({ start: startOfCurrentMonth, end: endOfCurrentMonth });

  // Handle navigating to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  // Handle navigating to the next month
  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  // Handle selecting a date
  const handleDateSelection = (date: Date) => {
    setSelectedDate(date); // Set the selected date in local state
    updateBookingData('firstAppointmentDate', format(date, 'yyyy-MM-dd')); // Update the context
  };

  // Ensure firstAppointmentDate is valid
  const firstAppointmentDate = bookingData.firstAppointmentDate
    ? parse(bookingData.firstAppointmentDate, 'yyyy-MM-dd', new Date())
    : new Date();

  // Update the selectedDate state when bookingData changes
  useEffect(() => {
    if (bookingData.firstAppointmentDate) {
      setSelectedDate(parse(bookingData.firstAppointmentDate, 'yyyy-MM-dd', new Date()));
    }
  }, [bookingData.firstAppointmentDate]);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 p-4 bg-gray-50 border rounded-lg max-w-screen-md mx-auto">
      {/* Calendar */}
      <div className="flex flex-col items-center lg:w-1/2">
        {/* Header */}
        <div className="flex justify-between items-center w-full mb-4">
          <button
            onClick={handlePrevMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00bba3] text-white hover:bg-teal-600 transition-all duration-300"
          >
            &lt;
          </button>
          <span className="text-xl font-semibold text-black">
            {format(currentDate, 'MMMM yyyy')}
          </span>
          <button
            onClick={handleNextMonth}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00bba3] text-white hover:bg-teal-600 transition-all duration-300"
          >
            &gt;
          </button>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-2 text-center w-full">
          {/* Day headers (Sun, Mon, etc.) */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="font-bold text-gray-700">{day}</div>
          ))}

          {/* Blank spaces before the first day of the month */}
          {Array.from({ length: daysInMonth[0].getDay() }, (_, i) => (
            <div key={i} className="text-gray-200"> </div>
          ))}

          {/* Calendar Dates */}
          {daysInMonth.map((date) => (
            <div
              key={date.toString()}
              onClick={() => handleDateSelection(date)}
              className={`cursor-pointer p-3 rounded-full text-center
                ${isSameDay(date, selectedDate) ? 'bg-[#00bba3] text-white font-bold' : 'text-black'}
              `}
            >
              {format(date, 'd')}
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Section */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold mb-4 text-center">Selected Date</h2>
        <div className="text-xl text-black font-bold">
          {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : 'No date selected'}
        </div>
        <button
          onClick={() => alert(`Appointment set for ${format(selectedDate || new Date(), 'MMMM dd, yyyy')}`)}
          className="w-full max-w-xs mt-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300"
        >
          Confirm Appointment
        </button>
        <button
          onClick={handleNextStep}
          className="w-full max-w-xs mt-6 py-3 bg-[#00bba3] text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300"
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default Calendar;
